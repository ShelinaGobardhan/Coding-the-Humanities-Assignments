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

function TurnImage(){
    var angle = ($('#image1').data('angle') + 90) || 90;
    $('#image1').css({'transform': 'rotate(' + angle + 'deg)'});
    $('#image1').data('angle', angle);
}

function Guess() { 
   $('#image1').css("transform","rotateY(0deg)"); 
}

function getCurrentImageIndex() {
    return EuroArray.indexOf(document.getElementById("image1").src);
    }

function next() {
    nextImage = (getCurrentImageIndex() + 1) % EuroArray.length;
    document.getElementById("image1").src = EuroArray[nextImage];
}

function prev() {
    nextImage = (getCurrentImageIndex() - 1 + EuroArray.length) % EuroArray.length;
    document.getElementById("image1").src = EuroArray[nextImage];
    }

