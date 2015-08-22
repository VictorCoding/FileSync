var fs = require('fs');
var IsThere = require('is-there');

angular
      .module('FileSync')
      .service('FileManager', FileManager);
      
      
function FileManager(){
  return {
      exists: exists
  };
  
  function exists(name){
    return IsThere(name);
  }
}
