// Import third-party
const xlsx = require('node-xlsx').default,
      fs = require("fs");


// Import local
const {Success} = require("./successMessage.js"),
      {Compress} = require("./compress.js");

// Import Models
const {DealsCat} = require("./Models/DealsCat.js"),
      {DealsLHS} = require("./Models/DealsLHS.js"),
      {DealsSearchTermsShort} = require("./Models/DealsSearchTermsShort.js"),
      {DealsSearchTermsLong} = require("./Models/DealsSearchTermsLong.js");

let data_model = null,
    finalCount = 0;

const Logic = (input) => {

  if(input === "deals_category") {
    data_model = xlsx.parse(`Utils/Data/deals_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsCat(
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
        dataArr[i][12]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end if


  else if(input === "deals_left_hand_side") {
    data_model = xlsx.parse(`Utils/Data/deals_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsLHS(
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
        dataArr[i][12]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end deals-lhs else if


  else if(input === "deals_search_terms_short") {
    data_model = xlsx.parse(`Utils/Data/deals_search_terms_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsSearchTermsShort(
        dataArr[i][0],
        dataArr[i][1],
        dataArr[i][2],
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end deals-search-short else if

  else if(input === "deals_search_terms_long") {
    data_model = xlsx.parse(`Utils/Data/deals_search_terms_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsSearchTermsLong(
        dataArr[i][0],
        dataArr[i][1],
        dataArr[i][2],
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end deals-search-long else if

}

module.exports = {
  Logic,
  finalCount
}
