gsap.registerPlugin(ScrollTrigger);
// Pin the video section
gsap.to("#twoMountainSection", {
    scrollTrigger: {
        trigger: "#twoMountainSection",
        start: "top top",
        end: () => "+=" + document.querySelector("#brand-neu").offsetHeight,
        pin: true,
        scrub: true,
        pinSpacing: false
    }
});
gsap.to("#mountains", {
    scrollTrigger: {
        trigger: "#twoMountainSection",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    height: "200px"
});
gsap.to("#sideArrow", {
    scrollTrigger: {
        trigger: "#twoMountainSection",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    duration: 1,
    left: "0"
});
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#twoMountainSection",
        start: "top 50%",
        end: "bottom top",
        scrub: true
    }
});

// Show Content One, then hide it and show Content Two
tl.to("#mountainContentOne", {
    opacity: 1,
    // duration: 1,
    // delay: 0.5,
    onStart: () => document.getElementById("mountainContentOne").style.display = "block"
})
    .to("#mountainContentOne", {
        opacity: 0,
        // delay: 0.5,
        //   duration: 1, 
        onComplete: () => document.getElementById("mountainContentOne").style.display = "none"
    })
    .to("#mountainContentTwo", {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        onStart: () => document.getElementById("mountainContentTwo").style.display = "block"
    });
gsap.to("#topArrow", {
    scrollTrigger: {
        trigger: "#twoMountainSection",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    bottom: "40%"
});

