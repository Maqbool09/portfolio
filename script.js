// // Sticky Navigation Menu JS Code
// let nav = document.querySelector("nav");
// let scrollBtn = document.querySelector(".scroll-button a");
// console.log(scrollBtn);
// let val;
// window.onscroll = function() {
//   if(document.documentElement.scrollTop > 20){
//     nav.classList.add("sticky");
//     scrollBtn.style.display = "block";
//   }else{
//     nav.classList.remove("sticky");
//     scrollBtn.style.display = "none";
//   }

// }

// // Side NavIgation Menu JS Code
// let body = document.querySelector("body");
// let navBar = document.querySelector(".navbar");
// let menuBtn = document.querySelector(".menu-btn");
// let cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = function(){
//   navBar.classList.add("active");
//   menuBtn.style.opacity = "0";
//   menuBtn.style.pointerEvents = "none";
//   body.style.overflow = "hidden";
//   scrollBtn.style.pointerEvents = "none";
// }
// cancelBtn.onclick = function(){
//   navBar.classList.remove("active");
//   menuBtn.style.opacity = "1";
//   menuBtn.style.pointerEvents = "auto";
//   body.style.overflow = "auto";
//   scrollBtn.style.pointerEvents = "auto";
// }


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
  
  textOne.textContent = ''; // Clear existing content
  textTwo.textContent = ''; // Clear existing content
  textThree.textContent = ''; // Clear existing content
  
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
  }, 2600);

});
