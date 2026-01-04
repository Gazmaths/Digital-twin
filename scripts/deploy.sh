#!/bin/bash
set -euo pipefail

ENVIRONMENT=${1:-dev}          # dev | test | prod
PROJECT_NAME=${2:-twin}

echo "🚀 Deploying ${PROJECT_NAME} to ${ENVIRONMENT}..."

# 1) Build Lambda package
cd "$(dirname "$0")/.."
echo "📦 Building Lambda package..."
(cd backend && uv run deploy.py)

# 2) Terraform init/apply
cd terraform
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=${DEFAULT_AWS_REGION:-us-east-2}

STATE_BUCKET="twin-terraform-state-${AWS_ACCOUNT_ID}"
STATE_KEY="${PROJECT_NAME}/${ENVIRONMENT}/terraform.tfstate"
LOCK_TABLE="twin-terraform-locks"

echo "🧾 AWS Account: ${AWS_ACCOUNT_ID} | Region: ${AWS_REGION}"
echo "🪣 Terraform backend: s3://${STATE_BUCKET}/${STATE_KEY}"

terraform init -input=false \
  -backend-config="bucket=${STATE_BUCKET}" \
  -backend-config="key=${STATE_KEY}" \
  -backend-config="region=${AWS_REGION}" \
  -backend-config="dynamodb_table=${LOCK_TABLE}" \
  -backend-config="encrypt=true"

# robust workspace check (handles "* dev")
if ! terraform workspace list | sed 's/^\*//' | awk '{$1=$1};1' | grep -qx "${ENVIRONMENT}"; then
  terraform workspace new "${ENVIRONMENT}"
else
  terraform workspace select "${ENVIRONMENT}"
fi

echo "🎯 Applying Terraform..."
if [ "${ENVIRONMENT}" = "prod" ]; then
  terraform apply -var-file=prod.tfvars -var="project_name=${PROJECT_NAME}" -var="environment=${ENVIRONMENT}" -auto-approve
else
  terraform apply -var="project_name=${PROJECT_NAME}" -var="environment=${ENVIRONMENT}" -auto-approve
fi

API_URL=$(terraform output -raw api_gateway_url)
FRONTEND_BUCKET=$(terraform output -raw s3_frontend_bucket)
CUSTOM_URL=$(terraform output -raw custom_domain_url 2>/dev/null || true)

# 3) Frontend build/deploy
cd ../frontend
echo "📝 Writing NEXT_PUBLIC_API_URL..."
echo "NEXT_PUBLIC_API_URL=${API_URL}" > .env.production

npm ci
npm run build
aws s3 sync ./out "s3://${FRONTEND_BUCKET}/" --delete

echo -e "\n✅ Deployment complete!"
echo "🌐 CloudFront URL : $(terraform -chdir=../terraform output -raw cloudfront_url)"
[ -n "${CUSTOM_URL}" ] && echo "🔗 Custom domain  : ${CUSTOM_URL}"
echo "📡 API Gateway    : ${API_URL}"
