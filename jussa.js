let header = document.getElementById("header");
let wardrobe = document.getElementById("wardrobe");
let header__teext1 = document.getElementById("header__teext1");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  wardrobe.style.top = -value * 1 + "px";
  header__teext1.style.opacity= "100"-value+"%"
  header
});
