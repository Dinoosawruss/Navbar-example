function setActiveH(button) {
    document.getElementsByClassName("active")[0].className = "";

    button.className = "active";

    document.getElementById("main").classList.add("home");

    if(document.getElementById("main").classList.contains("portfolio") )
      document.getElementById("main").classList.toggle("portfolio");

    else if (document.getElementById("main").classList.contains("contact") )
      document.getElementById("main").classList.toggle("contact");

}

function setActiveP(button) {
    document.getElementsByClassName("active")[0].className = "";

    button.className = "active";

    document.getElementById("main").classList.add("portfolio");

    if(document.getElementById("main").classList.contains("home") )
      document.getElementById("main").classList.toggle("home");

    else if (document.getElementById("main").classList.contains("contact") )
      document.getElementById("main").classList.toggle("contact");

}

function setActiveC(button) {
    document.getElementsByClassName("active")[0].className = "";

    button.className = "active";

    document.getElementById("main").classList.add("contact");

    if(document.getElementById("main").classList.contains("portfolio") )
      document.getElementById("main").classList.toggle("portfolio");

    else if (document.getElementById("main").classList.contains("home") )
      document.getElementById("main").classList.toggle("home");

}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
    document.getElementById("start").id.remove("start");
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
