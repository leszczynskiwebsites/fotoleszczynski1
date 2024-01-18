var navbar = document.querySelector("#navbar");
var leftnav = document.querySelector("#leftNav img");
var rightNavLinks = document.querySelectorAll("#rightNav a");
var lastOfNav = document.querySelector("#lastOfNav");
const hamburger = document.querySelector("#hamburger");

function checkScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 0.4 * window.innerHeight) {
    navbar.style.backgroundColor = "white";
    leftnav.style.height = 40 + "px";
    hamburger.style.filter = "invert(0)";

    leftnav.style.fontSize = "large";
    navbar.style.boxShadow = "0px 0px 22px 0px #313638";
    rightNavLinks.forEach(function (link) {
      link.style.color = "black";
      link.style.fontSize = "small";
    });

    lastOfNav.style.border = "2px solid black";
  } else {
    navbar.style.backgroundColor = "transparent";
    leftnav.style.height = 50 + "px";
    hamburger.style.filter = "invert(100%)";

    navbar.style.boxShadow = "none";

    rightNavLinks.forEach(function (link) {
      link.style.color = "white";
      link.style.fontSize = "medium";
    });

    lastOfNav.style.border = "2px solid white";
  }
}
window.addEventListener("scroll", checkScroll);

const hamburgerMenu = document.querySelector("#hamburgerMenu");
const logo = document.querySelector("#leftNav img");

var isHidden = true;
hamburger.addEventListener("click", hamburgerShowing);
window.addEventListener("resize", function () {
  isHidden = false;
  hamburgerShowing();
});
function hamburgerShowing() {
  if (isHidden) {
    hamburgerMenu.style.transform = "translateX(0px)";
    hamburger.style.filter = "invert(0)";
    isHidden = false;
    document.body.style.overflow = "hidden";
    logo.style.opacity = "0%";
    hamburger.src = "icons/close.svg";
  } else {
    hamburgerMenu.style.transform = "translateX(200%)";
    isHidden = true;
    document.body.style.overflow = "auto";
    logo.style.opacity = "100%";
    hamburger.src = "icons/menu.svg";

    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition < 0.4 * window.innerHeight) {
      hamburger.style.filter = "invert(100%)";
    }
  }
}
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
