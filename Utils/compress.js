const zip = require('adm-zip'),
      zipper = new zip(),
      moment = require("moment");

let dateStamp = moment(new Date()).format('DD-MM-YY'),
    timeStamp = moment(new Date()).format('h-mm');

const Compress = (folder,type) => {
  zipper.addLocalFolder(`./${folder}`,`${type}_banners_${dateStamp}_${timeStamp}`);
  zipper.writeZip(`${folder}/${type}_banners_${dateStamp}_${timeStamp}.zip`);
}

module.exports = {
  Compress
}
