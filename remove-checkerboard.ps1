$source = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;

public class ImageProcessor {
    public static void RemoveFakeCheckerboard(string inputPath, string outputPath) {
        using (Bitmap bmp = new Bitmap(inputPath)) {
            int width = bmp.Width;
            int height = bmp.Height;
            
            // Using LockBits for speed
            Rectangle rect = new Rectangle(0, 0, width, height);
            BitmapData bmpData = bmp.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
            
            int bytes = Math.Abs(bmpData.Stride) * bmp.Height;
            byte[] rgbValues = new byte[bytes];
            
            System.Runtime.InteropServices.Marshal.Copy(bmpData.Scan0, rgbValues, 0, bytes);
            
            for (int counter = 0; counter < rgbValues.Length; counter += 4) {
                byte b = rgbValues[counter];
                byte g = rgbValues[counter + 1];
                byte r = rgbValues[counter + 2];
                byte a = rgbValues[counter + 3];
                
                if (a == 0) continue; // Already transparent
                
                int diffRG = Math.Abs(r - g);
                int diffGB = Math.Abs(g - b);
                int diffRB = Math.Abs(r - b);
                
                // bright grayscale check (R, G, B > 170 and diffs are small)
                if (r > 170 && diffRG < 25 && diffGB < 25 && diffRB < 25) {
                    // It's the fake checkerboard (white or light gray) -> set alpha to zero
                    rgbValues[counter + 3] = 0; 
                }
            }
            
            System.Runtime.InteropServices.Marshal.Copy(rgbValues, 0, bmpData.Scan0, bytes);
            bmp.UnlockBits(bmpData);
            
            bmp.Save(outputPath, ImageFormat.Png);
        }
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies "System.Drawing"

$inputFile = Resolve-Path "logo.png"
$outputFile = Join-Path (Get-Location) "logo-clean.png"

try {
    Write-Host "Running lightning-fast C# checkerboard remover..."
    [ImageProcessor]::RemoveFakeCheckerboard($inputFile.Path, $outputFile)
    Write-Host "Done! Saved to logo-clean.png"
} catch {
    Write-Host "Error: $_"
}
