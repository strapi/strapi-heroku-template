// This script is used to prepend HEROKU-ONE-CLICK- to the uuid of the generated project.
// It allows us to see how many projects are being deployed thanks to this button and if we should keep maintaining it.
// Feel free to delete this file, remove the script in the package.json and the HEROKU-ONE-CLICK in the uuid.

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
