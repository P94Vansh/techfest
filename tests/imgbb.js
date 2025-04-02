const secrets = require("../secrets.json")

const fs = require('fs');

async function uploadImageToImgBB(imagePath, apiKey) {
    const image = fs.readFileSync(imagePath, { encoding: 'base64' });

    const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            key: apiKey,
            image: image
        })
    });

    const result = await response.json();

    if (response.ok) {
        console.log('Image uploaded successfully:', result.data.url);
    } else {
        console.error('Error uploading image:', result);
    }
}

// Usage example:
const imagePath = './tests/deansir.png';
const apiKey = secrets['imgbb-api-key'];

uploadImageToImgBB(imagePath, apiKey);
