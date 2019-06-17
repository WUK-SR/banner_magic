// Import third party
const yargs = require('yargs')

// Import local
const {Logic} = require("./Utils/logic.js");

const argv = yargs.argv;

if(argv.t === "deals" && argv.s ==="cat" ) {
  Logic("deals_category");
}

else if(argv.t === "deals" && argv.s ==="lhs") {
  Logic("deals_left_hand_side");
}

else if(argv.t === "deals" && argv.s ==="sts") {
  Logic("deals_search_terms_short");
}

else if(argv.t === "deals" && argv.s ==="stl") {
  Logic("deals_search_terms_long");
}

else {
  console.log("Command not valid.")
  console.log("1. Run 'npm run magic_DC' for deals category banners")
  console.log("2. Run 'npm run magic_DLHS' for deals left hand side banners")
  console.log("3. Run 'npm run magic_DSTS' for a short deals search terms banners")
  console.log("4. Run 'npm run magic_DSTL' for a long deals search terms banners")
}
