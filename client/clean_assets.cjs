// Handle Jimp import for different versions/structures
let JimpImport = require('jimp');
let Jimp = JimpImport;
if (JimpImport.Jimp) Jimp = JimpImport.Jimp;
if (JimpImport.default) Jimp = JimpImport.default;

const path = require('path');

async function cleanImage(relativePath, targetColorStr) {
    const fullPath = path.join(__dirname, relativePath);
    console.log(`Processing: ${fullPath}`);
    try {
        const image = await Jimp.read(fullPath);
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // White background (card_frame)
            if (targetColorStr === '#FFFFFF') {
                // High threshold for white
                if (r > 230 && g > 230 && b > 230) {
                    this.bitmap.data[idx + 3] = 0; 
                }
            } 
            // Black background (gold_avatar)
            else if (targetColorStr === '#000000') {
                // Low threshold for black
                 if (r < 30 && g < 30 && b < 30) {
                    this.bitmap.data[idx + 3] = 0;
                }
            }
        });
        
        // Write output
        await new Promise((resolve, reject) => {
            image.write(fullPath, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
        console.log(`Successfully cleaned ${relativePath}`);
    } catch (err) {
        console.error(`Error processing ${relativePath}:`, err);
    }
}

// Execute
(async () => {
    // await cleanImage('src/assets/card_frame.png', '#FFFFFF');
    // await cleanImage('src/assets/ui/gold_avatar.png', '#000000');
    console.log("Cleaning chain link...");
    await cleanImage('src/assets/chain_link.png', '#FFFFFF');
})();
