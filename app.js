const xlsx = require('node-xlsx').default,
      fs = require("fs"),
      zipFolder = require('zip-folder'),
      {Model} = require("./Utils/models.js");

const {Success} = require("./Utils/successMessage.js");


let workSheetsFromFile = xlsx.parse(`Utils/Data/data_model.xlsx`),
    dataArr = workSheetsFromFile[0].data,
    count = 0;

for(let i = 0; i < dataArr.length; i++) {
  count++;
  fs.writeFileSync(`Banners/${count}-${dataArr[i][0]}.txt`, Model(
    dataArr[i][0]
  ));
}


Success(count);
