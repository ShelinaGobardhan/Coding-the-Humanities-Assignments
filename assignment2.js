function TurnImage(){
    var angle = $('#image1').data('angle') || 90;
    $('#image1').css({'transform': 'rotate(' + angle + 'deg)'});
    $('#image1').data('angle', angle + 90);
    }
    
function Guess() { 
   $('#image1').css("transform","rotateY(0deg)"); 
}

var images = new Array(
    "http://s9.favim.com/orig/131107/abstract-art-art-print-artist-julia-disano-bubbles-Favim.com-1041384.jpg",
    "http://www.abstractartistgallery.org/wp-content/uploads/2012/07/Abstract-Art-Georgina-Vinsun-Dottie-May.jpg",
    "http://cianellistudios.com/blog/wp-content/uploads/2011/10/abstract-art-eloquence.jpg",
    "http://freedesignfile.com/upload/2014/06/Watercolor-object-abstract-art-background-vector-01.jpg",
    "http://www.abstractartistgallery.org/wp-content/uploads/2014/03/abstract-art-painting-ashwood-summerpeonycrop.jpg");

function getCurrentImageIndex() {
    return images.indexOf(document.getElementById("image1").src);
    }

function next() {
    nextImage = (getCurrentImageIndex() + 1) % images.length;
    document.getElementById("image1").src = images[nextImage];
    }

function prev() {
    nextImage = (getCurrentImageIndex() - 1 + images.length) % images.length;
    document.getElementById("image1").src = images[nextImage];
    }
