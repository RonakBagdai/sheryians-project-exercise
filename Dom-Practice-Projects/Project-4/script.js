let elem = document.querySelectorAll(".elem");
// let elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (dets) => {
//   elemImage.style.left = dets.x + "px";
//   elemImage.style.top = dets.y + "px";
// });

// elem1.addEventListener("mouseenter", () => {
//   elemImage.style.opacity = 1;
// });
// elem1.addEventListener("mouseleave", () => {
//   elemImage.style.opacity = 0;
// });

elem.forEach((val) => {
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
    val.childNodes[3].style.top = dets.y + "px";
  });
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
});
