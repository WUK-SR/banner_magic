// Import third-party
const xlsx = require('node-xlsx').default,
      fs = require("fs");


// Import local
const {Success} = require("./successMessage.js"),
      {Compress} = require("./compress.js");

// Import Models
const {DealsCat} = require("./Models/DealsCat.js"),
      {DealsHP} = require("./Models/DealsHomepage.js"),
      {OnlineOffersCat} = require("./Models/OnlineOffersCat.js"),
      {OnlineOffersHP} = require("./Models/OnlineOffersHomepage.js"),
      {DealsSearchTerms} = require("./Models/DealsSearchTerms.js"),
      {HotOffersCat} = require("./Models/HotOffersCat.js");

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
        dataArr[i][12],
        dataArr[i][13],
        dataArr[i][14],
        dataArr[i][15]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end if

  else if(input === "deals_homepage") {
    data_model = xlsx.parse(`Utils/Data/deals_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsHP(
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
        dataArr[i][13],
        dataArr[i][14],
        dataArr[i][15]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end DEALS-HP else if

  else if(input === "online_offers_category") {
    data_model = xlsx.parse(`Utils/Data/online_offers_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, OnlineOffersCat(
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
        dataArr[i][13],
        dataArr[i][14],
        dataArr[i][15]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end OO-cat else if

  else if(input === "online_offers_homepage") {
    data_model = xlsx.parse(`Utils/Data/online_offers_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, OnlineOffersHP(
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
        dataArr[i][13],
        dataArr[i][14],
        dataArr[i][15]
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end OO-hp else if

  else if(input === "deals_search_terms") {
    data_model = xlsx.parse(`Utils/Data/deals_search_terms_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, DealsSearchTerms(
        dataArr[i][0],
        dataArr[i][1],
        dataArr[i][2],
      ));
    }
    Success(count,input);
    Compress('Banners',input);
  } // end deals-search else if

  else if(input === "hot_offers_category") {
    data_model = xlsx.parse(`Utils/Data/hot_offers_data_model.xlsx`);
    let dataArr = data_model[0].data,
        count = 0;
    for(let i = 1; i < dataArr.length; i++) {
      count++;
      fs.writeFileSync(`Banners/${count}-${input}_banner_${dataArr[i][0]}.txt`, HotOffersCat(
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
  } // end hot-offers-cat else if
}

module.exports = {
  Logic,
  finalCount
}
