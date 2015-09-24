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
    var fileContent = fs.readFileSync(fileName, 'utf8');       
    var fileExtension = fileName.split('.')[1];
    var pos;
    
    fileContent = fileContent.split('\n');
    pos = fileContent.length;
    
    if(newText && fileName){            
      if(fileExtension === 'json'){        
        //replace the equal sign(=) with quotes and a colon(": ")
        newText = newText.replace(/=/gi, '": "');
        //wrap everything in double quotes because json
        //and two tabs because code styles
        //ex: "this_is_a_key": "this is a key"
        newText = '\t\t"' + newText + '"';
        
        pos = pos - 1;
        var lastItem = fileContent[pos - 1] + ',';
        fileContent.splice(pos - 1, 1, lastItem);
      }      
                              
      fileContent.splice(pos, 0, newText);
      fileContent = fileContent.join('\n');      
    }
    fs.writeFileSync(fileName, fileContent);
  }
}
