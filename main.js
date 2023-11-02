// var tl = gsap.timeline();

// tl
//     .from("#lowest", {
//         opacity: 0,
//         delay: .7,
//         onStart: function () {
//             $('#lowest').textillate({
//                 in: {
//                     effect: 'fadeInUp',
//                     callback: function () {
//                         $('#lowest').textillate('out')
//                     }
//                 },
//                 out: { effect: 'fadeOutUp' }
//             });
//         }
//     })
//     .from("#second-lowest", {
//         opacity: 0,
//         delay: .7,
//         onStart: function () {
//             $('#second-lowest').textillate({
//                 in: {
//                     effect: 'fadeInUp',
//                     callback: function () {
//                         $('#second-lowest').textillate('out')
//                     }
//                 },
//                 out: { effect: 'fadeOutUp' }
//             });
//         }
//     })
//     .from("#second-top", {
//         opacity: 0,
//         delay: .7,
//         onStart: function () {
//             $('#second-top').textillate({
//                 in: {
//                     effect: 'fadeInUp',
//                     callback: function () {
//                         $('#second-top').textillate('out')
//                     }
//                 },
//                 out: { effect: 'fadeOutUp' }
//             });
//         }
//     })

//     .from("#top", {
//         opacity: 0,
//         delay: .7,
//         onStart: function () {
//             $('#top').textillate({
//                 in: {
//                     effect: 'fadeInUp',
//                     callback: function () {
//                         $('#top').textillate('out')
//                     }
//                 },
//                 out: { effect: 'fadeOutUp' }
//             });
//         }
//     })

//     .to(".top-screen", {
//         top: "-110%",
//         delay: .8,
//         duration: 1,
//         ease: "power4.easeOut"
//     })


// var lm = gsap.timeline();

// lm
//     .from(".nav", {
//         delay: 1,
//         opacity: 0,
//         y: 20,
//         duration: .6
//     })

//     .from([".main-right", ".main-left"], {
//         opacity: 0,
//         // scale: 1.2,
//         y: 100,
//         duration: .8,
//     })    

// main scroller
gsap.from(".nav", {
    // delay: 6.4,
    delay: .4,
    opacity: 0,
    y: -50,
    duration: .6,
})

gsap.from("#stagger", {
    // delay: 6.8,
    delay: .7,
    opacity: 0,
    y: 100,
    // scale: 1.1,
    duration: .6,
    stagger: .3
})


gsap.from(".main-right img", {
    opacity: 0,
    scale: .5,
    // y: 100,
    duration: 1.7,

    scrollTrigger: {
        trigger: ".main-right img",
        scroller: "body",
        // markers: true,
        start: "top 99%",
        end: "top 20%",
        scrub: 4
    }
})

// gsap.from(".mainleft .name", {
//     opacity: 0,
//     duration: 1,
//     onStart: function () {
//         $('.name').textillate({
//             in: {
//                 effect: 'popIn',
//                 // repeat: -1,
//             },
//         });
//     }
// })

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


// about scroller
gsap.from(".about .para1", {
    opacity: 0,
    scale: .8,
    duration: 1,

    scrollTrigger: {
        trigger: ".about .para1",
        scroller: "body",
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
        start: "top 90%",
        end: "top 20%",
        scrub: 4
    }
})
gsap.from(".contactMe-section .under-contactMe-section", {
    // opacity: 0,
    scale: .8,
    duration: .3,
    scrollTrigger: {
        trigger: ".contactMe-section .under-contactMe-section",
        scroller: "body",
        // markers: true,
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
        // markers: true,
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
        // markers: true,
        start: "top 90%",
        end: "top 10%",
        scrub: 2
    }
})