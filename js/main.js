const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
  preloader.style.display = "none";
}

//Hide Preloader
window.addEventListener("load", hidePreloader);

//Hamburger menu

//Open the hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

// Close the hamburger menu after clicking a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navBtnImg.src = "img/icons/open.svg"; // Reset hamburger menu icon
    }
  });
});

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }

});

//AOS animations settings
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true, // Run animations only once
  });
});

// Modals for works section
const overlay = document.getElementById("expose-overlay");
const projectBoxes = document.querySelectorAll(".project-box");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-btn");


// Function to open the correct modal
function openExpose(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to close all modals
function closeExpose() {
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
  overlay.style.display = "none";
}

// Attach click event to each project-box
projectBoxes.forEach((box) => {
  const modalId = box.getAttribute("data-modal");
  box.addEventListener("click", () => openExpose(modalId));
});

// Event listeners for close buttons and overlay click
closeBtns.forEach((btn) => {
  btn.addEventListener("click", closeExpose);
});
overlay.addEventListener("click", closeExpose);

// Active Nav-links

// Function to update the active nav link
function updateActiveNavLink() {
  let currentSection = "home"; // Default to 'home' if no other section matches
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const headerHeight = document.querySelector("header").offsetHeight; // Account for sticky header height

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight; // Adjust for sticky header
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

// Scroll event listener to update active nav links
window.addEventListener("scroll", updateActiveNavLink);