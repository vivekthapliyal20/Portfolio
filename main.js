const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// main scroller
gsap.from(".header", {
    delay: .4,
    opacity: 0,
    y: -50,
    duration: .5,
    scrub: 3,
})

gsap.from("#stagger", {
    delay: .7,
    opacity: 0,
    y: 100,
    duration: .6,
    stagger: .3,
    scrub: 3,
})


gsap.from(".main-right img", {
    opacity: 0,
    scale: .5,
    duration: 1.7,

    scrollTrigger: {
        trigger: ".main-right img",
        scroller: "body",
        start: "top 99%",
        end: "top 20%",
        scrub: 4
    }
})

gsap.from(".domain", {
    opacity: 0,
    duration: 1,

    onStart: function () {
        $('.domain').textillate({
            in: {
                effect: 'popIn',
            },
        });
    },
})


// - scroller
gsap.from(".about .para1", {
    opacity: 0,
    scale: .8,
    duration: 1,

    scrollTrigger: {
        trigger: ".about .para1",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 2
    }
})

gsap.from(".about img", {
    opacity: 0,
    scale: .8,
    y: 100,
    duration: 1,

    scrollTrigger: {
        trigger: ".about img",
        scroller: "body",
        start: "top 99%",
        end: "top 50%",
        scrub: 4
    }
})


gsap.from(".cardContainer #card1", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".cardContainer #card1",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from(".cardContainer #card2", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".cardContainer #card2",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 4
    }
})
gsap.from(".cardContainer #card3", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".cardContainer #card3",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from(".cardContainer-text p", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".cardContainer-text p",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from(".skill-section-header p", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".skill-section-header p",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 4
    }
})

gsap.from(".skill-section img", {
    opacity: 0,
    scale: .8,
    duration: .3,

    scrollTrigger: {
        trigger: ".skill-section img",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 4
    }
})
gsap.from(".contactMe-section .under-contactMe-section", {
    scale: .8,
    duration: .3,
    scrollTrigger: {
        trigger: ".contactMe-section .under-contactMe-section",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 2
    }
})

gsap.from("#textscroller", {
    opacity: 0,
    scale: .8,
    duration: 1,
    y: 100,

    scrollTrigger: {
        trigger: "#textscroller",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from("#textscroller1", {
    opacity: 0,
    scale: .8,
    duration: 1,
    y: 100,

    scrollTrigger: {
        trigger: "#textscroller1",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 2
    }
})