import gsap from "gsap";

const showToastLoop = () => {
    gsap.to(".toast", {
        y: -120,
        opacity: 1,
        ease: "power4.inOut",
        duration: 0.8,
        scale: 1,
        onComplete: () => {
            gsap.to(".toast", {
                y: -100,
                opacity: 0,
                ease: "power4.inOut",
                duration: 0.8,
                scale: 0.8,
                delay: 1.5,
                onComplete: showToastLoop
            })
        }
    })
}

showToastLoop();