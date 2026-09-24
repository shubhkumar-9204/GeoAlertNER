$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$backendPath = Join-Path $repoRoot 'backend/app'

Write-Host "Scanning $backendPath for *.py files..."
Get-ChildItem -Path $backendPath -Recurse -Filter '*.py' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace '(?m)^\s*from\s+app\.', 'from backend.app.' -replace '(?m)^\s*import\s+app\.', 'import backend.app.'
    if ($content -ne $newContent) {
        Set-Content -Path $_.FullName -Value $newContent -Encoding utf8
        Write-Host "Updated $($_.FullName)"
    }
}
Write-Host "Import rewrite complete."
