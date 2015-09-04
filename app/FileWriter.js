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
    var fileExtension = fileName.split('.')[1];
    
    if(newText && fileName){            
      if(fileExtension === 'json'){        
        //replace the equal sign(=) with quotes and a colon(": ")
        newText = newText.replace(/=/gi, '": "');
        //wrap everything in double quotes because json
        //and two tabs because code styles
        //ex: "this_is_a_key": "this is a key"
        newText = '\n\t\t"' + newText + '",';
      }      
      newText = '\n' + newText;
    }
    fs.appendFile(fileName, newText);
  }
}
