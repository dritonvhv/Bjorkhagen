Add-Type -AssemblyName System.Drawing
$inputFile = Resolve-Path "logo.png"
$outputFile = Join-Path (Get-Location) "logo-transparent.png"
if (Test-Path $inputFile) {
    try {
        $bmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList $inputFile.Path
        $bmp.MakeTransparent([System.Drawing.Color]::White)
        $bmp.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Host "Image transparency applied and saved to logo-transparent.png."
    } catch {
        Write-Host "Error processing image: $_"
    }
} else {
    Write-Host "Error: logo.png not found."
}
