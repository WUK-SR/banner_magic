// Import third party
const yargs = require('yargs')

// Import local
const {Compress} = require("./Utils/compress.js"),
      {Logic,finalCount} = require("./Utils/logic.js");


const argv = yargs.argv;

if(argv.t === "deals" && argv.s ==="cat" ) {
  Logic("deals_category");
}

else if (argv.t === "deals" && argv.s ==="hp" ) {
  Logic("deals_homepage");
}

else if(argv.t === "online_offers" && argv.s ==="cat") {
  Logic("online_offers_category");
}

else if(argv.t === "online_offers" && argv.s ==="hp") {
  Logic("online_offers_homepage");
}

else if(argv.t === "deals" && argv.s ==="st") {
  Logic("deals_search_terms");
}

else {
  console.log("Command not valid.")
  console.log("1. Run 'npm run magic_DC' for deals category banners")
  console.log("2. Run 'npm run magic_DH' for deals homepage banners")
  console.log("1. Run 'npm run magic_OOC' for online offers category banners")
  console.log("2. Run 'npm run magic_OOH' for online offers homepage banners")
}
