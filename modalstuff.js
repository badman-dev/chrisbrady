// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var images = document.getElementsByClassName("modal-image");
var soloImages = document.getElementsByClassName("round-image");
var modalImg = document.getElementById("img01");

var span = document.getElementsByClassName("close")[0];

var currentImage = 0;
var leftButton = document.getElementById("leftBtn");
var rightButton = document.getElementById("rightBtn");

function openModal(id){
    modal.style.display = "block";
    leftButton.style.display = "inline-block";
    rightButton.style.display = "inline-block";
    // modalImg.src = this.src;
    setModalImage(id);
}

function openSoloModal(id){
    modal.style.display = "block";
    leftButton.style.display = "none";
    rightButton.style.display = "none";

    modalImg.src = soloImages[id].src;
}

function setModalImage(id) {
    if (id < 0) {
        id = images.length - 1;
    } else if (id >= images.length) {
        id = 0;
    }
    currentImage = id;
    modalImg.src = images[id].src;
}

for (i = 0; i < images.length; i++){
    // images[i].onclick = openModal(i);
    // images[i].onclick = function() { openModal(i); };
    (function (i) {
         images[i].onclick = function() { openModal(i); };
    })(i);
}

for (i = 0; i < soloImages.length; i++){
    (function (i) {
         soloImages[i].onclick = function() { openSoloModal(i); };
    })(i);
}

leftButton.onclick = function() { setModalImage(currentImage-1); }
rightButton.onclick = function() { setModalImage(currentImage+1); }

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}