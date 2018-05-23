const xlsx = require('node-xlsx').default;
const fs = require("fs");

const {online_offer} = require("./templates.js");

const workSheetsFromFile = xlsx.parse(`data/banner.xlsx`);

var dataArr = workSheetsFromFile[0].data;

for(var i = 0; i < dataArr.length; i++) {
  fs.writeFileSync(`output/${dataArr[i][1]} banner.html`, online_offer(
    dataArr[i][0],
    dataArr[i][1],
    dataArr[i][2],
    dataArr[i][3],
    dataArr[i][4],
    dataArr[i][5],
    dataArr[i][6],
    dataArr[i][7]
  ));
}
