import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.2
    },{
        scaleY: 1.6,
        duration: 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: index * 0.1
    })
})