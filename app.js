const xlsx = require('node-xlsx').default,
      fs = require("fs"),
      {custom_request} = require("./models.js");

const yargs = require('yargs');

const argv = yargs.command('get', 'make a get HTTP request', {
    url: {
      alias: 'u',
      default: 'http://yargs.js.org/',
      demand: true
    }
  })
  .help()
  .argv;

const command = argv._[0];

if(command === "online") {
  console.log("Online offers banner will be served");
} else if(command === "custom") {

  const workSheetsFromFile = xlsx.parse(`TEMPLATES/custom_request_MASTER.xlsx`);
  var dataArr = workSheetsFromFile[0].data;
  var count = 0;

  for(var i = 0; i < dataArr.length; i++) {
    count++;
    fs.writeFileSync(`output/custom_request/${count}-${dataArr[i][0]}.txt`, custom_request(
      dataArr[i][0],
      dataArr[i][1]
    ));
  }
  console.log(`*********************************`);
  console.log(`Success!`);
  console.log(`${count} banners, just like magic.`);
  console.log(`*********************************`);
} else {
  console.log("Command not recognised, please try another.");
}
