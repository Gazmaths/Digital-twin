#!/bin/bash
set -euo pipefail

ENVIRONMENT="${1:-dev}"     # dev | test | prod
PROJECT_NAME="${2:-twin}"

echo "🚀 Deploying ${PROJECT_NAME} to ${ENVIRONMENT}..."

# 1) Build Lambda package
cd "$(dirname "$0")/.."     # repo root
echo "📦 Building Lambda package..."
(cd backend && uv run deploy.py)

# 2) Terraform init/workspace/apply
cd terraform

AWS_ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text | tr -d '\r')"

# Prefer AWS_REGION (common in CI), then DEFAULT_AWS_REGION, else default to us-east-2 (your bucket region)
AWS_REGION="${AWS_REGION:-${DEFAULT_AWS_REGION:-us-east-2}}"

STATE_BUCKET="twin-terraform-state-${AWS_ACCOUNT_ID}"
LOCK_TABLE="twin-terraform-locks"
STATE_KEY="twin/${ENVIRONMENT}/terraform.tfstate"

echo "🧾 AWS Account: ${AWS_ACCOUNT_ID} | Region: ${AWS_REGION}"
echo "🪣 Terraform backend: s3://${STATE_BUCKET}/${STATE_KEY}"

# Fail fast if the backend bucket is not accessible (clearer than terraform workspace errors)
aws s3api head-bucket --bucket "${STATE_BUCKET}" >/dev/null

echo "🧱 Initializing Terraform backend..."
terraform init -input=false -reconfigure \
  -backend-config="bucket=${STATE_BUCKET}" \
  -backend-config="key=${STATE_KEY}" \
  -backend-config="region=${AWS_REGION}" \
  -backend-config="encrypt=true" \
  -backend-config="dynamodb_table=${LOCK_TABLE}"

echo "🧩 Selecting Terraform workspace..."
terraform workspace select "${ENVIRONMENT}" >/dev/null 2>&1 || terraform workspace new "${ENVIRONMENT}"

echo "🎯 Applying Terraform..."
if [ "${ENVIRONMENT}" = "prod" ]; then
  terraform apply -auto-approve \
    -var-file=prod.tfvars \
    -var="project_name=${PROJECT_NAME}" \
    -var="environment=${ENVIRONMENT}"
else
  terraform apply -auto-approve \
    -var="project_name=${PROJECT_NAME}" \
    -var="environment=${ENVIRONMENT}"
fi

API_URL="$(terraform output -raw api_gateway_url | tr -d '\r')"
FRONTEND_BUCKET="$(terraform output -raw s3_frontend_bucket | tr -d '\r')"
CUSTOM_URL="$(terraform output -raw custom_domain_url 2>/dev/null | tr -d '\r' || true)"
CLOUDFRONT_URL="$(terraform output -raw cloudfront_url | tr -d '\r')"

# 3) Build + deploy frontend
cd ../frontend

echo "📝 Setting API URL for frontend build..."
echo "NEXT_PUBLIC_API_URL=${API_URL}" > .env.production

npm ci
npm run build

echo "🪣 Syncing frontend to S3..."
aws s3 sync ./out "s3://${FRONTEND_BUCKET}/" --delete

# 4) Final summary
echo -e "\n✅ Deployment complete!"
echo "🌐 CloudFront URL : ${CLOUDFRONT_URL}"
if [ -n "${CUSTOM_URL}" ]; then
  echo "🔗 Custom domain  : ${CUSTOM_URL}"
fi
echo "📡 API Gateway    : ${API_URL}"
