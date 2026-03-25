const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const input = path.join(process.cwd(), 'public/videos/vsl.mp4');
const output = path.join(process.cwd(), 'public/videos/vsl-optimized.mp4');

if (!fs.existsSync(input)) {
    console.error('Error: Source video not found at', input);
    process.exit(1);
}

console.log('--- VIDEO OPTIMIZATION START ---');
console.log('Source:', input);
console.log('Target:', output);
console.log('This may take 2-5 minutes depending on CPU...');

// Optimization Settings:
// -vcodec libx264: Industry standard H.264
// -crf 30: High compression, acceptable quality for VSL
// -preset fast: Balance between speed and compression
// -vf scale=1280:720: Resize to 720p HD
// -acodec aac -b:a 96k: Optimized audio
const cmd = `"${ffmpeg}" -i "${input}" -vcodec libx264 -crf 30 -preset fast -vf scale=1280:-2 -acodec aac -b:a 96k -y "${output}"`;

try {
    execSync(cmd, { stdio: 'inherit' });
    const stats = fs.statSync(output);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log('--- OPTIMIZATION SUCCESS ---');
    console.log(`New size: ${sizeMB} MB`);
} catch (err) {
    console.error('--- OPTIMIZATION FAILED ---');
    console.error(err);
    process.exit(1);
}
