new TypeIt('#changeableText', {
    strings: ["Buman-Erdene!", "developer!","Buman-Erdene!"],
    speed: 50,
    breakLines: false,
    autoStart: true
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.boxShadow = "0px 2px 20px #bbb";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
          document.getElementById("navbar").style.boxShadow = "none";
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
