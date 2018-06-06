const xlsx = require('node-xlsx').default,
      fs = require("fs"),
      {Model} = require("./models.js");


const workSheetsFromFile = xlsx.parse(`Data/data_model.xlsx`);
var dataArr = workSheetsFromFile[0].data;
var count = 0;

for(var i = 0; i < dataArr.length; i++) {
  count++;
  fs.writeFileSync(`Banners/${count}-${dataArr[i][0]}.txt`, Model(
    dataArr[i][0]
  ));
}

console.log(`*********************************`);
console.log(`Success!`);
console.log(`${count} banners, just like magic.`);
console.log(`*********************************`);
