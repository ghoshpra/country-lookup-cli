var fs = require('fs');
var rawData = "";
try {
  //console.log("dir" + __dirname);
  rawData = JSON.parse(fs.readFileSync(__dirname +"/data/data.json"));

} catch (err) {
  //console.log("in catch")
  console.log("Error reading file: "+ err);
}

var country = rawData.data;
var countryArr = Object.values(country);

const lookup = (countryCode) => {
  var isMatchFound = false;

  countryCodeArr = countryCode.split(/[ ,.]+/);
  countryCodeArr.forEach(code => {
    var isIndividualMatchFound = false;
    countryArr.some(function (element) {
      if (element.iso_alpha2 == code) {
        console.log(element.name);
        //console.log("in if"); 
        isMatchFound = true;
        isIndividualMatchFound = true;
        return;
      }
    });
    if (!isIndividualMatchFound)
      console.log("No Match Found")
  });
  if (!isMatchFound)
    console.log("No Match Found")
}

//Export method
module.exports = {
  lookup
}