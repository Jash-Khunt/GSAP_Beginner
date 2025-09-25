import gsap from "gsap";

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
});

document.querySelector(".play").addEventListener("click", () => {
  animation.play();
});
document.querySelector(".pause").addEventListener("click", () => {
  animation.pause();
});
document.querySelector(".resume").addEventListener("click", () => {
  animation.resume();
});
document.querySelector(".restart").addEventListener("click", () => {
  animation.restart();
});
document.querySelector(".reverse").addEventListener("click", () => {
  animation.reverse();
});
document.querySelector(".repeat").addEventListener("click", () => {
  animation.repeat(2);
});
document.querySelector(".kill").addEventListener("click", () => {
  animation.kill();
});
document.querySelector(".yoyo").addEventListener("click", () => {
  animation.yoyo(true);
});
