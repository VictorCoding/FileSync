(function(){
  'use strict';
  
  angular
        .module('FileSync', [])
        .controller('MainCtrl', MainCtrl);
            
  function MainCtrl(FileManager, $timeout){
    var mc = this,
        fm = FileManager;
        
    mc.checkedFile = false;
    mc.dupFileError = false;
    mc.FilesToWriteTo = [];    
    
    mc.addFile = function addFile(file){   
      if(mc.FilesToWriteTo.indexOf(file) > -1){
        mc.dupFileError = true;
        $timeout(function(){
          mc.dupFileError = false;
        }, 2000);
        return;
      }
      mc.FileExists = fm.exists(file);
      mc.checkedFile = true;
      
      if(mc.FileExists){
        mc.FilesToWriteTo.push(file);
      }
      
    };
    
    
    mc.writeToAll = function writeToAll(text){
      if(mc.FilesToWriteTo.length > 0){
        angular.forEach(mc.FilesToWriteTo, function(file){
          console.log(file, text);
        });
      }
    };
    
  }
  
  
})();