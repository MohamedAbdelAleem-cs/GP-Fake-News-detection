document.addEventListener("DOMContentLoaded", function() {
  var UserManualbutton = document.getElementById("user-manual");
  UserManualbutton.addEventListener('click', function() {
// Get the body element
var body = document.querySelector("body");
// Set the width and height variables to the desired values
var width = 450;
var height = 210;
// Set the width and height of the body element
body.style.width = width + "px";
body.style.height = height + "px";
//hide the inner container 
var container = document.querySelector('.inner-container');
container.style.display = 'none';
//make the word in outer container display 
var OuterText = document.getElementById("outer-text");
OuterText.style.display = "block";
//make the refresh button appear 
var Outbutton = document.getElementById("Done-button");
Outbutton.style.display = "block";
Outbutton.style.position = "fixed";
Outbutton.style.top = "88%";
Outbutton.style.left = "50%";
Outbutton.style.transform = "translate(-50%, -50%)";
Outbutton.addEventListener('click', function() {
  chrome.runtime.reload();})
}) 
})
  
  

chrome.storage.sync.get('ResponseData',function(Temp){
   
  console.log(Temp.ResponseData);
  if(Temp.ResponseData == "nothing")
  {
    
    document.querySelector('.result').textContent = "Fake News Detector";

    
    
}
  else
  {
    var button = document.getElementById("refresh-button");
    var UserManualbutton = document.getElementById("user-manual");
    UserManualbutton.style.display = "none";
    button.style.display = "block";
    button.style.position = "fixed";
    button.style.top = "70%";
    button.style.left = "50%";
    button.style.transform = "translate(-50%, -50%)";
    var result = document.querySelector('.result');
    result.style.position = "relative"
    result.style.top = "40%";
    result.style.left = "50%";
    
    document.querySelector('.result').textContent = Temp.ResponseData;
    button.addEventListener('click', function() {
      chrome.runtime.reload();
      /*result.style.top = "50%";
      result.textContent = "Fake News Detector";
      button.style.display = "none";
      chrome.storage.sync.set({'ResponseData': "nothing"});*/
    });
    

  }
  

});


