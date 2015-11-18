var myRequest = new XMLHttpRequest();
    var method = "GET";
    var query = "art-nouveau"; // This gave me some interesting images. Most results I got from other queries were photographs of people. I wanted non-photograpy-art.  
    var url = "http://www.europeana.eu/api/v2/search.json?wskey=sMn3CfMgm&query=" + query + "&start=1&rows=24&profile=standard";
    myRequest.open(method, url);
    myRequest.send();

var EuroArray = [];

myRequest.onreadystatechange = function(){
    
    console.log(myRequest.readyState);  
    if (myRequest.readyState === 4) {
        console.log(myRequest.responseText);
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);
        console.log(dataParsed);
        
        for (var i=0; i < dataParsed.items.length; i++){
        
            console.log(dataParsed.items[i].edmPreview[0]);
            EuroArray.push(dataParsed.items[i].edmPreview[0]);
            console.log(EuroArray);
        }
    } else {
        console.log(myRequest.readyState);
    }
}

var angle = 0;
if (Math.random() < 0.25) {
    angle = 90;
    } 
    else if (Math.random() < 0.5){
    angle = 180;
    }
    else if(Math.random() < 0.75){
    angle = 270;
    }
    else{
    angle = 0;
    }
                        
var TurnImage = function() {
if (angle < 270){ 
    angle = angle + 90;
    } 
else {
    angle=0;
    }
$('#image1')[0].style.transform = "rotate("+angle+"deg)";
};
            
function Guess() { 
    if (angle !== 0) {
    alert("Incorrect :( Try again!");
    } else {
        alert("Well done! :D You have an eye for art!");
            }
    }

var n = 0; 
function next() {
if (n < 90){ 
    n = n+1;
    } 
else {
    n=0;
    }
    if (Math.random() < 0.25) {
        angle = 90;
        } 
    else if (Math.random() < 0.5){
        angle = 180;
        }
    else if(Math.random() < 0.75){
        angle = 270;
        }
    else{
        angle= 0;
        }
document.getElementById('image1').src = EuroArray[n];
$('#image1')[0].style.transform = "rotate("+angle+"deg)";
}

function prev() {
if (n < 90){ 
    n = n+1;
    } 
else {
    n=0;
    }
    if (Math.random() < 0.25) {
        angle = 90;
        } 
    else if (Math.random() < 0.5){
        angle = 180;
        }
    else if(Math.random() < 0.75){
        angle = 270;
        }
    else{
        angle= 0;
        }
document.getElementById('image1').src = EuroArray[n];
$('#image1')[0].style.transform = "rotate("+angle+"deg)";
}
