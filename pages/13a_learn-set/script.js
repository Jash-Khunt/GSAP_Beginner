import gsap from "gsap";

const set = gsap.set(".gsap-box", {
  opacity: 0,
  scale: 0.5,
  y: -100,
  x: 100,
});

const animation = gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  duration: 2,
  ease: "expo.out",
  onComplete: () => {
    gsap.to(".gsap-box", {
      delay: 0.5,
      opacity: 0,
      scale: 0.5,
      y: 100,
      x: -100,
      duration: 2,
      ease: "expo.in",
      onComplete: () => {
        set.restart();
        animation.restart();
      },
    });
  },
});
