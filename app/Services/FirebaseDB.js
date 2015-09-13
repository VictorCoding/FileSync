angular
      .module('FileSync')
      .service('firebaseDB', firebaseDB);
      

function firebaseDB(FIREBASEREF){
    return {
      saveFilePath: saveFilePath
    };
    
    function saveFilePath(path){
      FIREBASEREF.child('Files').push(path).then(function(response){
        console.log(response);
      });
    }
}