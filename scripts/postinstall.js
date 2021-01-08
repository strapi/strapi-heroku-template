const fs = require('fs');
const uuid = require('uuid/v4');

const filePath = `./package.json`;

try {
  if (fs.existsSync(filePath)) {
    let rawFile = fs.readFileSync(filePath);
    let packageJSON = JSON.parse(rawFile);

    packageJSON.strapi.uuid = 'HEROKU-ONE-CLICK-' + uuid();

    let data = JSON.stringify(packageJSON);
    fs.writeFileSync(filePath, data);
  }
} catch (e) {
  console.error(e);
}
