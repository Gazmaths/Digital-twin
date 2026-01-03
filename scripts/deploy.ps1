param(
    [string]$Environment = "dev",   # dev | test | prod
    [string]$ProjectName = "twin"
)

$ErrorActionPreference = "Stop"

Write-Host "Deploying $ProjectName to $Environment ..." -ForegroundColor Green

# Always run from project root (folder above /scripts)
$ProjectRoot = Split-Path $PSScriptRoot -Parent
Set-Location $ProjectRoot

# 1. Build Lambda package
Write-Host "Building Lambda package..." -ForegroundColor Yellow
Push-Location "backend"
uv run deploy.py
Pop-Location

# 2. Terraform workspace & apply
Push-Location "terraform"
& terraform init -input=false

# Ensure workspace exists, then select it
$workspaces = & terraform workspace list
if ($workspaces -notmatch "(\* )?$([regex]::Escape($Environment))\b") {
    & terraform workspace new $Environment
} else {
    & terraform workspace select $Environment
}

# Apply (prod uses var-file)
if ($Environment -eq "prod") {
    & terraform apply -var-file="prod.tfvars" -var="project_name=$ProjectName" -var="environment=$Environment" -auto-approve
} else {
    & terraform apply -var="project_name=$ProjectName" -var="environment=$Environment" -auto-approve
}

# Capture outputs
$ApiUrl         = & terraform output -raw api_gateway_url
$FrontendBucket = & terraform output -raw s3_frontend_bucket
$CustomUrl      = ""
try { $CustomUrl = & terraform output -raw custom_domain_url } catch { $CustomUrl = "" }

# CloudFront output (no PowerShell parse error)
$CfUrl = & terraform output -raw cloudfront_url

Pop-Location  # back to project root

# 3. Build + deploy frontend
Push-Location "frontend"

Write-Host "Setting API URL for production..." -ForegroundColor Yellow
"NEXT_PUBLIC_API_URL=$ApiUrl" | Out-File ".env.production" -Encoding utf8

npm install
npm run build

aws s3 sync ".\out" "s3://$FrontendBucket/" --delete

Pop-Location  # back to project root

# 4. Final summary
Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "CloudFront URL : $CfUrl" -ForegroundColor Cyan
if ($CustomUrl) {
    Write-Host "Custom domain  : $CustomUrl" -ForegroundColor Cyan
}
Write-Host "API Gateway    : $ApiUrl" -ForegroundColor Cyan