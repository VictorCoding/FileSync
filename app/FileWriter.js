var fs = require('fs');

var localeFileData;
fs.readFile("/Users/vramos/Workspace/iOfficeConnect/src/main/webapp/include/javascript/i18n/en_GB.json", function(err, data) {
    if(err) {
        return console.log(err);
    }

    localeFileData = JSON.parse(data);
    try {
      console.log("Parsed data")
      console.log(typeof data);
      console.log(JSON.parse(data));
    } catch (e){
      console.log("Stringified data")
      console.log(JSON.stringify(data));
    }

});

function writeToFile(key, value){
  var key = document.getElementById('key').value;
  var value = document.getElementById('value').value;

  //clear fields
  document.getElementById('key').value = "";
  document.getElementById('value').value = "";

  //add new key and value to document
  localeFileData[key] = value;
  var toWrite = JSON.stringify(localeFileData);
  fs.writeFile("/Users/vramos/Workspace/iOfficeConnect/src/main/webapp/include/javascript/i18n/en_GB.json", toWrite, function(err){
    if(err){
      console.log(err);
    }
    console.log("File saved.")
  })
}
