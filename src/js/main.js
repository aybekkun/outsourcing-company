const btn = document.querySelector(".menu__btn");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    btn.classList.remove("active");
  } else {
    menu.classList.add("active");
    overlay.classList.add("active");
    btn.classList.add("active");
  }
});
overlay.addEventListener("click", function () {

    menu.classList.remove("active");
    overlay.classList.remove("active");
    btn.classList.remove("active");

});
