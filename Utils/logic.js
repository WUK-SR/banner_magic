// Import third-party
const xlsx = require('node-xlsx').default,
      fs = require("fs");

// Import local
const {Success} = require("./successMessage.js");

// Import Models
const {DealsCat} = require("./Models/DealsCat.js"),
      {DealsHP} = require("./Models/DealsHomepage.js");

let data_model = null,
    finalCount = 0;

const Logic = (input) => {

  data_model = xlsx.parse(`Utils/Data/deals_data_model.xlsx`);

  let dataArr = data_model[0].data,
      count = 0;

  for(let i = 1; i < dataArr.length; i++) {
    count++;
    fs.writeFileSync(`Banners/${count}-homepage_banner_${dataArr[i][0]}.txt`, DealsHP(
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
  Success(count);
}



module.exports = {
  Logic,
  finalCount
}
