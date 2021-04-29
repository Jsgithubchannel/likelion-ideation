//Show navbar when it is on the top, and hide it when scrolling
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("show_nav");
  } else {
    navbar.classList.remove("show_nav");
  }
});

// Set dj_name align center, and mouseover event
const dj = document.querySelectorAll(".dj");
const djName = document.querySelectorAll(".dj_name");
for (let i = 0; i < dj.length; i++) {
  djName[i].style.width = `${dj[i].clientWidth}px`;
  dj[i].addEventListener("mouseover", () => {
    djName[i].classList.add("show_dj");
  });
  dj[i].addEventListener("mouseout", () => {
    djName[i].classList.remove("show_dj");
  });
}
