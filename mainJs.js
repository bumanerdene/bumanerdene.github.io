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
