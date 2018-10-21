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
