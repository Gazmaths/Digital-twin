param(
  [ValidateSet("dev","test")]
  [string]$Environment = "dev",
  [string]$ProjectName = "digital-twin"
)

$ErrorActionPreference = "Stop"

# ---------- helpers ----------
function Ensure-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    throw "Required command not found: $name"
  }
}

# ---------- preflight ----------
Ensure-Command aws
Ensure-Command terraform
Ensure-Command npm
Ensure-Command uv

Write-Host "🚀 Deploying $ProjectName to $Environment..." -ForegroundColor Green

# Move to repo root (one level above /scripts)
$RepoRoot = (Split-Path $PSScriptRoot -Parent)
Set-Location $RepoRoot

# Resolve AWS context
$awsAccountId = (aws sts get-caller-identity --query Account --output text).Trim()

# Prefer AWS_REGION, then DEFAULT_AWS_REGION, else default
$awsRegion =
  if ($env:AWS_REGION) { $env:AWS_REGION }
  elseif ($env:DEFAULT_AWS_REGION) { $env:DEFAULT_AWS_REGION }
  else { "us-east-2" }

$stateBucket = "digital-twin-terraform-state-$awsAccountId"
$lockTable   = "digital-twin-terraform-locks"
$stateKey    = "digital-twin/$Environment/terraform.tfstate"

Write-Host "AWS Account: $awsAccountId | Region: $awsRegion" -ForegroundColor DarkGray
Write-Host "Terraform backend: s3://$stateBucket/$stateKey" -ForegroundColor DarkGray

# Fail fast if backend bucket is not accessible (avoids confusing terraform errors)
aws s3api head-bucket --bucket $stateBucket *> $null

# ---------- 1) Build Lambda package ----------
Write-Host "📦 Building Lambda package..." -ForegroundColor Yellow
Set-Location "$RepoRoot\backend"
uv run deploy.py
Set-Location $RepoRoot

# ---------- 2) Terraform init/workspace/apply ----------
Write-Host "🧱 Terraform apply..." -ForegroundColor Yellow
Set-Location "$RepoRoot\terraform"

terraform init -input=false -reconfigure `
  -backend-config="bucket=$stateBucket" `
  -backend-config="key=$stateKey" `
  -backend-config="region=$awsRegion" `
  -backend-config="encrypt=true" `
  -backend-config="dynamodb_table=$lockTable"

$workspaces = terraform workspace list
if ($workspaces -notmatch "(\s|^)\*?\s*$Environment(\s|$)") {
  terraform workspace new $Environment | Out-Null
}
terraform workspace select $Environment | Out-Null

terraform apply -auto-approve `
  -var="project_name=$ProjectName" `
  -var="environment=$Environment"

# Outputs
$ApiUrl         = (terraform output -raw api_gateway_url).Trim()
$FrontendBucket = (terraform output -raw s3_frontend_bucket).Trim()

$CustomUrl = ""
try { $CustomUrl = (terraform output -raw custom_domain_url).Trim() } catch { $CustomUrl = "" }

$CfUrl = (terraform output -raw cloudfront_url).Trim()

# ---------- 3) Build + deploy frontend ----------
Write-Host "🖥️  Building & deploying frontend..." -ForegroundColor Yellow
Set-Location "$RepoRoot\frontend"

# Write API URL for Next.js build
"NEXT_PUBLIC_API_URL=$ApiUrl" | Out-File ".env.production" -Encoding utf8

npm ci
npm run build

aws s3 sync ".\out" "s3://$FrontendBucket/" --delete

Set-Location $RepoRoot

# ---------- 4) Summary ----------
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "CloudFront URL : $CfUrl" -ForegroundColor Cyan
if ($CustomUrl) { Write-Host "Custom domain  : $CustomUrl" -ForegroundColor Cyan }
Write-Host "API Gateway    : $ApiUrl" -ForegroundColor Cyan
Write-Host "S3 Frontend    : s3://$FrontendBucket" -ForegroundColor Cyan
