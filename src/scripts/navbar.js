let navbar = document.getElementById("navbar");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('transition');
    navbar.classList.remove('endtransition');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.add('endtransition');
    header.classList.remove('navbarOffsetMargin');
  }
});

window.addEventListener("visibilitychange", e => {
    //if modal click then don't scroll to top
    document.body.scrollTop=document.documentElement.scrollTop = 0;
});
