var scroll_position = 0;
var section_position = 120;
let element = document.querySelector("who_am_i")

function startAnimation() {
    console.log({element})
   // Set the class with the animation to the element
   if(element) {
    element.classList.add("general-animation");
   }
}
window.addEventListener('scroll', () => {
    scroll_position = scrollY

    if(scroll_position > section_position) {
        startAnimation();
    }
})

window.addEventListener('scroll', function(e) {
    console.log(window.scrollTop)
  scroll_position = window.screeY;
  if (scroll_position > section_position) {
    startAnimation()
  }
});

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#type-effect", {
      strings: ["FULL STACK DEVELOPER."],
    }).go();
  });