const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() <= 1200) {
  window.onload = function () {
    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      hamburger.classList.toggle("toggle");
    });
  };
}



let lastScroll = 0;
const defaultOffset = 150;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

// window.addEventListener("scroll", () => {
//   if (
//     scrollPosition() > lastScroll &&
//     !containHide() &&
//     scrollPosition() > defaultOffset
//   ) {
//     //scroll down
//     header.classList.add("hide");
//   } else if (scrollPosition() < lastScroll && containHide()) {
//     //scroll up
//     header.classList.remove("hide");
//   }

//   lastScroll = scrollPosition();
// });

$(function () {
    toggleMenu();
  
    function toggleMenu() {
      $(".menuTitle").click(function () {
        $(this).children().toggleClass("rotate");
        $(this).next().slideToggle();
      });
    }
  });

let slideIndex = 1;
showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("item");
    
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
  
//   /* Проходим по каждому слайду в цикле for */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }   
//     slides[slideIndex - 1].style.display = "block"; 
// }