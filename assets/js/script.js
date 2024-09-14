"use strict";

/*
* Mobile navbar toggle
*/ 

const navbar =document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
})


// Read More Link

// document.querySelector('.read-more').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent the default link behavior
//     var moerText = document.querySelector('.more-text');
//     if(moerText.style.display === 'none' || moerText.style.display === ''){
//       moerText.style.display = 'inline';
//       this.textContent = 'Read Less'; // Change to 'Read Less'
//     }else{
//       moerText.style.display = 'none';
//       this.textContent = 'Read More'; // Change text back to "Read More"
//     }
//   })

document.querySelectorAll('.read-more').forEach(function(readMoreLink){
    readMoreLink.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior
      
      // Get the corresponding more-text span for this read-more link
      var moreText = this.previousElementSibling.querySelector('.more-text');
      if(moreText.style.display === 'none' || moreText.style.display === ''){
        moreText.style.display = 'inline';
        this.textContent = 'Read Less'; // Change link text to to 'Read Less'
      }else{
        moreText.style.display = 'none';
        this.textContent = 'Read More'; // Change text back to "Read More"
      }
    });
  });