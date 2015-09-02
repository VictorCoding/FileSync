var fs = require('fs');
var IsThere = require('is-there');

angular
      .module('FileSync')
      .service('FileManager', FileManager);
      
      
function FileManager(){
  return {
      exists: exists,
      write: write
  };
  
  function exists(name){
    return IsThere(name);
  }
  
  function write(fileName, newText){
    if(newText){
      newText = '\n' + newText;
    }
    fs.appendFile(fileName, newText);
  }
}
