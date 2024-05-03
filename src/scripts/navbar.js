let navbar = document.getElementById("navbar");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    navbar.classList.add('transition');
    navbar.classList.remove('endtransition');
    header.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.add('endtransition');
    header.classList.remove('navbarOffsetMargin');
  }
});

window.addEventListener("visibilitychange", e => {
    document.body.scrollTop=document.documentElement.scrollTop = 0;
});
