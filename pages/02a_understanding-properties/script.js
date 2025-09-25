import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1,
  duration: 2,
  ease: "power1.inOut",
//   repeat: -1,
//   yoyo: true,
//    repeatDelay: 2,
//    paused : true,
   stagger: 1
});
