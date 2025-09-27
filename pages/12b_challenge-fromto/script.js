import gsap from "gsap";

const reactions = document.querySelectorAll(".reactions button");

reactions.forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(
      btn,
      {
        y: 0,
        scale: 0.5,
        opacity: 1,
      },
      {
        y: -120,
        scale: 1.5,
        rotation: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power1.out",
      }
    );
  });
});
