window.initFlowbite();
/*==================== Scroll Up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("bottom-[10%]");
  else scrollUp.classList.remove("bottom-[10%]");
}
window.addEventListener("scroll", scrollUp);

/*==================== Scroll Down Trigger Animation ====================*/
// Create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("scroll-slide-in-right")) {
        entry.target.classList.add("animate-slide-in-right");
      } else if (entry.target.classList.contains("scroll-slide-in-left")) {
        entry.target.classList.add("animate-slide-in-left");
      } else if (entry.target.classList.contains("scroll-slide-in-right-100")) {
        entry.target.classList.add("animate-slide-in-right-100");
      } else if (entry.target.classList.contains("scroll-slide-in-left-100")) {
        entry.target.classList.add("animate-slide-in-left-100");
      } else if (entry.target.classList.contains("scroll-slide-in-bottom")) {
        entry.target.classList.add("animate-slide-in-bottom");
      } else if (entry.target.classList.contains("scroll-fade-in")) {
        entry.target.classList.add("animate-fade-in");
      }
      setTimeout(() => {
        entry.target.classList.remove("opacity-0");
      }, 1000);
    }
  });
});

// Tell the observer which elements to track
const slideInLeftElem = document.querySelectorAll(".scroll-slide-in-left");
const slideInRightElem = document.querySelectorAll(".scroll-slide-in-right");
const slideInRight100Elem = document.querySelectorAll(
  ".scroll-slide-in-right-100",
);
const slideInLeft100Elem = document.querySelectorAll(
  ".scroll-slide-in-left-100",
);
const slideInBottomElem = document.querySelectorAll(".scroll-slide-in-bottom");
const fadeInElem = document.querySelectorAll(".scroll-fade-in");
slideInLeftElem.forEach((element) => observer.observe(element));
slideInRightElem.forEach((element) => observer.observe(element));
slideInBottomElem.forEach((element) => observer.observe(element));
slideInLeft100Elem.forEach((element) => observer.observe(element));
slideInRight100Elem.forEach((element) => observer.observe(element));
fadeInElem.forEach((element) => observer.observe(element));

// Typing Animation
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//MOBILE-MENU
const button = document.querySelector(".mobile-btn");
const menu = document.querySelector(".mobile-menu");
const menuLink = document.querySelectorAll(".mobile-menu a");
console.log("menu", menuLink);

// TOGGLE HAMBURGER & COLLAPSE NAV
button.addEventListener("click", () => {
  console.log(menu);
  button.classList.toggle("active");
  menu.classList.toggle("active");
});

// REMOVE X & COLLAPSE NAV ON ON CLICK
menuLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default navigation behavior
    // event.preventDefault();

    // // Log the href attribute of the clicked link
    console.log(link.getAttribute("href"));

    button.classList.remove("active");
    menu.classList.remove("active");

    // Collapse the menu
    // button.classList.remove("active");
    // menu.classList.remove("active");
  });
});

const clipboard = FlowbiteInstances.getInstance("CopyClipboard", "copy-email");
console.log(clipboard);
const $defaultMessage = document.getElementById("default-message");
const $successMessage = document.getElementById("success-message");

clipboard.updateOnCopyCallback((clipboard) => {
  $defaultMessage.classList.add("hidden");
  $successMessage.classList.remove("hidden");

  // reset to default state
  setTimeout(() => {
    $defaultMessage.classList.remove("hidden");
    $successMessage.classList.add("hidden");
  }, 2000);
});
