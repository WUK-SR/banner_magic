
// Import third-party
const xlsx = require('node-xlsx').default,
      fs = require("fs");

// Import local
const {Success} = require("./Utils/successMessage.js"),
      {Model} = require("./Utils/models.js"),
      {Compress} = require("./Utils/compress.js");


let data_model = xlsx.parse(`Utils/Data/data_model.xlsx`),
    dataArr = data_model[0].data,
    count = 0;

for(let i = 0; i < dataArr.length; i++) {
  count++;
  fs.writeFileSync(`Banners/${count}-${dataArr[i][0]}.txt`, Model(
    dataArr[i][0]
  ));
}

Compress('Banners');
Success(count);
