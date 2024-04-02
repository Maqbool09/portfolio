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
    });

    link.addEventListener("mouseout", function() {
      this.style.color = "";
    });
  }

  navLinks.forEach(link => {
    handleLinkHover(link);
  });

  mediaLinks.forEach(link => {
    handleLinkHover(link);
  });
});
