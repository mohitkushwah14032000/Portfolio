
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
    sidemenu.style.display = "block"

}
function closemenu() {
    sidemenu.style.right = "-200px";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var autotype = new Typed('.typedText', {
    strings: ['UI/UX Designer', 'Devloper', "Graphic Designer"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000

});

function home() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

function about() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

function services() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

function project() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}
function contact() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}
