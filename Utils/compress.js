const zip = require('adm-zip'),
      zipper = new zip(),
      moment = require("moment");

let dateStamp = moment(new Date()).format('DD-MM-YY'),
    timeStamp = moment(new Date()).format('h-mm');

const Compress = (folder) => {
  zipper.addLocalFolder(`./${folder}`,`${folder}_${dateStamp}_${timeStamp}`);
  zipper.writeZip(`${folder}/${folder}_${dateStamp}_${timeStamp}.zip`);
}

module.exports = {
  Compress
}
