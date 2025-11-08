rotationMessage();

function closeNavBarOnMobile() {
  document.querySelector("nav").style.transform = "translateX(100%)";
  document.querySelector(".hamburgerMenu").style.display = "block";
}

function openNavBarOnMobile() {
  document.querySelector("nav").style.transform = "translateX(0)";
  document.querySelector(".hamburgerMenu").style.display = "none";
}

function rotationMessage() {
  if (window.innerWidth < window.innerHeight) {
    document.querySelector(".rotationMessage").style.display = "block";
    document.querySelector(".spreadsheet").style.display = "none";
  }

  if (window.innerWidth > window.innerHeight) {
    document.querySelector(".rotationMessage").style.display = "none";
    document.querySelector(".spreadsheet").style.display = "block";
  }

  window.addEventListener("resize", rotationMessage);
  window.addEventListener("orientationchange,", rotationMessage);
}
