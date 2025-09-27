import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

const showToastLoop = () => {
  toasts.forEach((toast, index) => {
    const delay = index * 2;
    gsap.to(toast, {
      y: -120,
      opacity: 1,
      duration: 0.5,
      scale: 1,
      delay: delay,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(toast, {
          y: -200,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          scale: 0.1,
          ease: "power1.in",
          onComplete: () => {
            gsap.set(toast, { y: 0, opacity: 0 });
            if (index === toasts.length - 1) {
              showToastLoop();
            }
          },
        });
      },
    });
  });
};
showToastLoop();
