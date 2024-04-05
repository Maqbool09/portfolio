// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Function to close the side navigation menu
function closeSideMenu() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
}

// Event handler for menu button click
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

// Event handler for cancel button click
cancelBtn.onclick = function(){
  closeSideMenu();
}

// Event listener for links inside the menu
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    closeSideMenu();
  });
});




document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav .menu li a");
  const mediaLinks = document.querySelectorAll("nav .media-icons a");

  function handleLinkHover(link) {
    link.addEventListener("mouseover", function() {
      this.style.color = "#fff";
      this.style.opacity = "0.2";
    });

    link.addEventListener("mouseout", function() {
      this.style.color = "";
      this.style.opacity = "";
    });
  }

  navLinks.forEach(link => {
    handleLinkHover(link);
  });

  mediaLinks.forEach(link => {
    handleLinkHover(link);
  });

  var textOne = document.querySelector('.text-one');
  var textTwo = document.getElementById('text-two');
  var textThree = document.querySelector('.text-three');
  
  var textContentOne = textOne.textContent.trim();
  var textContentTwo = textTwo.textContent.trim();
  var textContentThree = textThree.textContent.trim();
  
  textOne.textContent = '';
  textTwo.textContent = '';
  textThree.textContent = '';
  
  var indexOne = 0;
  var indexTwo = 0;
  var indexThree = 0;

  function typeWriterOne() {
    if (indexOne < textContentOne.length) {
      textOne.textContent += textContentOne.charAt(indexOne);
      indexOne++;
      setTimeout(typeWriterOne, 70);
    }
  }
  
  function typeWriterTwo() {
    if (indexTwo < textContentTwo.length) {
      textTwo.textContent += textContentTwo.charAt(indexTwo);
      indexTwo++;
      setTimeout(typeWriterTwo, 70);
    }
  }
  
  function typeWriterThree() {
    if (indexThree < textContentThree.length) {
      textThree.textContent += textContentThree.charAt(indexThree);
      indexThree++;
      setTimeout(typeWriterThree, 70);
    }
  }

  setTimeout(function() {
    typeWriterOne();
  }, 500);
  
  setTimeout(function() {
    typeWriterTwo();
  }, 1250);
  
  setTimeout(function() {
    typeWriterThree();
  }, 2650);

});
