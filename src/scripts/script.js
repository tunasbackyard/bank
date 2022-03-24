"use strict";

const DOM = {
  getElements() {
    this.toggleBtn = document.querySelector("#toggle-btn");
    this.navigationMenu = document.querySelector(".navigation");
    this.navbar = document.querySelector(".primary-navigation");
    this.logo = document.querySelector(".logo");
    this.navLinks = document.querySelectorAll(".link");
  },
};

DOM.getElements();

DOM.navbar.addEventListener("mouseover", handleNavLinkAnimation.bind(0.5));
DOM.navbar.addEventListener("mouseout", handleNavLinkAnimation.bind(1));

function handleNavLinkAnimation(e) {
  if (isNavbarLink(e, "link")) {
    DOM.navLinks.forEach((link) => {
      if (!isCurrentlyHovered(e, link)) {
        setOpacity(link, this);
      }
    });
    setOpacity(DOM.logo, this);
    setOpacity(DOM.toggleBtn, this);
  }
}

function isNavbarLink(event, className) {
  if (event.target.classList.contains(className)) {
    return true;
  }
  return false;
}

function getCurrentlyHovered(event) {
  return event.target;
}

function isCurrentlyHovered(event, element) {
  if (element === getCurrentlyHovered(event)) {
    return true;
  }
  return false;
}

function setOpacity(element, level) {
  element.style.opacity = level;
}

DOM.toggleBtn.addEventListener("click", function () {
  changeDisplay(DOM.navigationMenu);
});

function changeDisplay(element) {
  if (isShowed(element)) {
    showElement(element);
  } else {
    hideElement(element);
  }
}

function isShowed(element) {
  if (getComputedStyle(element).display === "none") {
    return true;
  }
  return false;
}

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}
