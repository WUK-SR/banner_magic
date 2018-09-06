
// Import third-party
const xlsx = require('node-xlsx').default,
      fs = require("fs");

// Import local
const {Success} = require("./Utils/successMessage.js"),
      {Model} = require("./Utils/models.js"),
      {DealsCat} = require("./Utils/Models/DealsCat.js"),
      {Compress} = require("./Utils/compress.js");


let data_model = xlsx.parse(`Utils/Data/deals_cat_data_model.xlsx`),
    dataArr = data_model[0].data,
    count = 0;

for(let i = 1; i < dataArr.length; i++) {
  count++;
  fs.writeFileSync(`Banners/${count}-category_banner_${dataArr[i][0]}.txt`, DealsCat(
    dataArr[i][0],
    dataArr[i][1],
    dataArr[i][2],
    dataArr[i][3],
    dataArr[i][4],
    dataArr[i][5],
    dataArr[i][6],
    dataArr[i][7],
    dataArr[i][8],
    dataArr[i][9],
    dataArr[i][10],
    dataArr[i][11],
    dataArr[i][12],
    dataArr[i][13]

  ));
}

Compress('Banners');
Success(count);
