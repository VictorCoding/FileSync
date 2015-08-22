(function(){
  'use strict';
  
  angular
        .module('FileSync', [])
        .controller('MainCtrl', MainCtrl);
            
  function MainCtrl(FileManager){
    var mc = this;
    mc.FilesToWriteTo = [];    
    
    mc.addFile = function addFile(){      
      mc.FileExists = FileManager.exists(mc.FileName);
    };
    
  }
  
  
})();