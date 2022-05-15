let header = document.getElementById("header");
let header2 = document.getElementById("header2");
let wardrobe = document.getElementById("wardrobe");
let header__teext1 = document.getElementById("header__teext1");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  // wardrobe.style.top = -value * 1 + "px";
  header__teext1.style.opacity = "100" - value + "%";
  header.style.left = -value * 1 + "px";
  header2.style.right = -value * 1 + "px";
});
header__teext1.addEventListener("click", () => {
  header.style.position = "absolute";
  header.style.right = "0";
});
