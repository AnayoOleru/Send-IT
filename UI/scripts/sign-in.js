// Get the modal
var modal = document.getElementByClassName('contain');

// When the user clicks the button, open the modal 
function btn() {
    modal.style.visibility = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
    }
}

