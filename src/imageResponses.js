const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/LeulCraft3.png`);

function getImage(request, response) {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
}

module.exports.getImage = getImage;
// I refuse to serve a spongegar in the year of our lord 2022
