const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("show_nav");
  } else {
    navbar.classList.remove("show_nav");
  }
});

const dj = document.querySelectorAll(".dj");
const djNames = document.querySelectorAll(".dj_names");
const djName = document.querySelectorAll(".dj_name");
console.log(djNames);

for (let i = 0; i < dj.length; i++) {
  dj[i].addEventListener("mouseover", () => {
    djName[i].classList.add("show_dj");
  });
  dj[i].addEventListener("mouseout", () => {
    djName[i].classList.remove("show_dj");
  });
}
