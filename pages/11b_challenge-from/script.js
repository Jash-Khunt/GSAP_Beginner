import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotationY: 180,
    duration: 0.6,
    ease: "power2.inOut",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.6,
    ease: "power2.inOut",
  });
});
