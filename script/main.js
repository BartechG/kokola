/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.querySelector(".sidenav").classList.add("opened");
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".sidenav").classList.remove("opened");
}

// Navigation smooth scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $(".sidenav a").on("click", function(event) {
    closeNav();
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      setTimeout(function() {
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          950,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      }, 300);
    } // End if
  });
});

const play = document.querySelector(".amplitude-play-pause i");

play.addEventListener("click", function() {
  if (play.className === "fas fa-play") {
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  } else {
    play.classList.add("fa-play");
    play.classList.remove("fa-pause");
  }
});

const music = this.document.querySelector(".music");
const text1 = this.document.querySelector(".top h1");
const text2 = this.document.querySelector(".top p");
const text3 = this.document.querySelector(".top a");
const texthr = this.document.querySelector(".top hr");
const navText = this.document.querySelector(".nav-text");
const logo = this.document.querySelector(".logo");

window.addEventListener("scroll", step1);
window.addEventListener("scroll", step2);
window.addEventListener("scroll", step3);

function step1() {
  if (window.pageYOffset > 50) {
    music.classList.add("dark-player");
  } else if (window.pageYOffset < 50) {
    music.classList.remove("dark-player");
  }
}

function step2() {
  if (window.pageYOffset > 250) {
    text1.style.opacity = "0";
  } else if (window.pageYOffset < 250) {
    text1.style.opacity = "1";
  }
}

function step3() {
  if (window.pageYOffset > 350) {
    text2.style.opacity = "0";
    text3.style.opacity = "0";
    texthr.style.opacity = "0";
    navText.style.opacity = "0";
    logo.style.opacity = "0";
  } else if (window.pageYOffset < 350) {
    text2.style.opacity = "1";
    text3.style.opacity = "1";
    texthr.style.opacity = "1";
    navText.style.opacity = "1";
    logo.style.opacity = "1";
  }
}

const modal = document.querySelectorAll(".modal");
const btn = document.querySelectorAll(".Btn");
const span = document.querySelectorAll("span.close");

btn[0].addEventListener("click", function() {
  modal[0].style.display = "block";
});

btn[1].addEventListener("click", function() {
  modal[1].style.display = "block";
});

btn[2].addEventListener("click", function() {
  modal[2].style.display = "block";
});

btn[3].addEventListener("click", function() {
  modal[3].style.display = "block";
});

span.forEach(sp => {
  sp.addEventListener("click", function() {
    modal.forEach(mod => {
      mod.style.display = "none";
    });
  });
});

window.onclick = function(event) {
  modal.forEach(mod => {
    if (event.target == mod) {
      mod.style.display = "none";
    }
  });
};
