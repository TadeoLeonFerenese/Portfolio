const fs = require('fs');
const PNG = require('pngjs').PNG;
const path = require('path');

const PROCESS_FILES = [
    'client/src/assets/card_frame.png',
    'client/src/assets/mana_crystal.png',
    'client/src/assets/board_corner.png',
    'client/src/assets/board_edge.png',
    'client/src/assets/board_emblem.png',
    'client/src/assets/parchment_box.png',
    'client/src/assets/quest_board_bg.png'
];

PROCESS_FILES.forEach(filePath => {
    const fullPath = path.resolve(filePath);
    
    fs.createReadStream(fullPath)
        .pipe(new PNG({ filterType: 4 }))
        .on('parsed', function() {
            console.log(`Processing ${filePath}...`);
            
            // Sample background color from top-left
            const bgR = this.data[0];
            const bgG = this.data[1];
            const bgB = this.data[2];
            
            const THRESHOLD = 50; // Higher tolerance for compression noise

            for (var y = 0; y < this.height; y++) {
                for (var x = 0; x < this.width; x++) {
                    var idx = (this.width * y + x) << 2;

                    const r = this.data[idx];
                    const g = this.data[idx + 1];
                    const b = this.data[idx + 2];

                    // Calculate distance from background color
                    const dist = Math.sqrt(
                        Math.pow(r - bgR, 2) + 
                        Math.pow(g - bgG, 2) + 
                        Math.pow(b - bgB, 2)
                    );

                    if (dist < THRESHOLD) {
                        this.data[idx + 3] = 0; // Transparent
                    }
                }
            }

            this.pack().pipe(fs.createWriteStream(fullPath))
                .on('finish', () => console.log(`Finished processing ${filePath} with BG Color [${bgR},${bgG},${bgB}]`));
        });
});
