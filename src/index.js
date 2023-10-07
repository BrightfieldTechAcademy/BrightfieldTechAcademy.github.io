import "bootstrap";

// images import
import "./assets/brightfieldlogo.jpg";
import "./assets/codeswalp.jpg";
import "./assets/world_map_logo.svg";
import "./assets/louiz.jpg";
import "./assets/mandesktop.jpg";
import "./assets/olver.jpg";
import "./assets/svg/teamwork.svg";
import "./assets/svg/businessPerson.svg";
import "./assets/logohd.jpg";
import "./assets/overview.jpg";
import "./assets/communityadult.jpg";
import "./assets/oliverandfrind.jpg";

// css imports
import "./css/style.scss";
import "./css/mentorship.scss";
import "./css/programs.scss";
import "./css/learn.scss";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
