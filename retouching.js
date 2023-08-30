gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min((1, 1.001 - Math.pow(2, -10 * t))),
});
function raf(time) {
	lenis.raf(time);
	ScrollTrigger.update();
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const isMobile = window.innerWidth <= 768;
const isgrtlaptop = window.innerWidth >= 1300;
const istab = window.innerWidth >= 768 && window.innerWidth <= 840;

console.log(isMobile);

// Retouching page

// gsap.to(".hero1", {
// 	scrollTrigger: {
// 		trigger: '.rherosection',
// 		end: "bottom top",
// 		pin: true,
// 		pinSpacing: false,
// 		scrub: 1
// 	}
// });

gsap.to(".hero1", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rheroimg",
		start: "top top",
		end: "bottom top",
		scrub: 1,
	},
});

gsap.to(".hero1", {
	scrollTrigger: {
		trigger: '.rheroimg',
		start: 'top top',
		pin: true,
		pinSpacing: false
	}
});

// gsap.to(".wall", {
// 	opacity: 0,
// 	// y: "+=300px",
// 	duration: 1,
// 	ease: "power2.out",
// 	scrollTrigger: {
// 		trigger: ".rherosection",
// 		start: "top top",
// 		end: "bottom top",
// 		scrub: 1,
// 	},
// });

gsap.fromTo(
	".per_img",
	{
		opacity: 1,
	},
	{
		// width: "100%",
		margin: "0 -55px",
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 40%",
			scrub: 1,
		},
	}
);


gsap.fromTo(
	".hero2",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		// width: "100%",
		// margin: "-1%",

		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 90%",
			scrub: 1,
		},
	}
);

gsap.to(".hero2", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top -15%",
		end: "top 10%",
		scrub: 1,
	},
});


// gsap.fromTo(
// 	".hero3",
// 	{
// 		opacity: 0,
// 		y: 100,
// 	},
// 	{
// 		opacity: 1,
// 		y: 100,
// 		duration: 1,
// 		ease: "power2.out",
// 		scrollTrigger: {
// 			trigger: ".hero2",
// 			start: "top 20%",
// 			end: "bottom 100%",
// 			scrub: 1,
// 		},
// 	}
// );

gsap.to(".hero3", {
	opacity: 0,
	duration: 2,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero4",
		start: "top 0%",
		end: "bottom 100%",
		scrub: 1,
	},
});

gsap.to(".rsubheading1", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top 40%",
		end: "bottom 90%",
		scrub: 1,
	},
});

gsap.fromTo(
	".rsubheading2",
	{
		opacity: 0,
		width: isMobile ? "70%" : "50%",
	},
	{
		opacity: 1,
		width: isMobile ? "90%" : "70%",
		duration: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".hero2",
			start: "top 40%",
			end: "bottom 100%",
			scrub: 1,
		},
	}
);

gsap.to(".rheadingsection", {
	opacity: 0,
	duration: 1,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero2",
		start: "top 20%",
		end: "bottom 90%",
		scrub: 1,
	},
});

// gsap.to(".rmask", {
// 	opacity: 1,
// 	ease: "power2.out",
// 	scrollTrigger: {
// 		trigger: ".hero4",
// 		start: "top 30%",
// 		end: "bottom 90%",
// 		scrub: 1,
// 	},
// });

gsap.to(".rmask", {
	opacity: 1,
	scrollTrigger: {
		trigger: ".hero3",
		start: "top 40%",
		end: "bottom 40%",
		scrub: 1,
	},
});

gsap.to(".rmask", {
	clipPath: "inset(0% 0% round 3px)",
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".hero3",
		start: "top 40%",
		end: "bottom 10%",
		scrub: 1,
	},
});

gsap.to(".rmask", {
	y: 320,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcarsubheading",
		start: "top 75%",
		end: "bottom 50%",
		scrub: 1,
	},
});

gsap.to(".hero4", {
	scaleY: 2.15,
	scaleX: 2.12,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcarsubheading",
		start: "top 50%",
		end: "bottom 30%",
		scrub: 1,
	},
});

gsap.fromTo(
	".carheader",
	{
		y: 100,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcarsubheading",
			start: "top 40%",
			end: "bottom 50%",
			scrub: 1,
		},
	}
);

gsap.to(".hero4", {
	opacity: 0,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".rcompostimgs",
		start: "top 70%",
		end: "bottom 30%",
		scrub: 1,
	},
});
gsap.fromTo(
	".rcomi",
	{
		width: "100%",
	},
	{
		width: isMobile ? "35%" : "300px",
		y: 560,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 55%",
			end: "bottom 50%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".rcompheader",
	{
		opacity: 0,
		// y: 100,
	},
	{
		opacity: 1,
		// y: isMobile ? 0 : 100,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 26%",
			end: "bottom 0%",
			scrub: 1,
		},
	}
);

// gsap.to(".rcompheader", {
// 	opacity: 0,
// 	ease: "power2.out",
// 	y: -100,
// 	scrollTrigger: {
// 		trigger: ".rcomi",
// 		start: isMobile || istab ? "top 0%" : "top 30%",
// 		end: "bottom 50%",
// 		scrub: 1,
// 	},
// });

gsap.fromTo(
	".rcomimgs",
	{
		y: 100,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rcomi",
			start: "top 80%",
			end: "bottom 100%",
			scrub: 1,
		},
	}
);

const imageshifting = gsap.timeline({
	delay: 4,
	scrollTrigger: {
		trigger: ".rcomimgs",
		start: "top 60%",
		end: "bottom 100%",
		scrub: 3,
	},
});

imageshifting
	.to(".rimg2i", {
		opacity: 0,
		duration: 1,
		ease: "power2.out",
	})
	.to(".rimg1ii", {
		opacity: 0,
		duration: 2,
		ease: "power2.out",
	})
	.to(".rimg3ii", {
		opacity: 0,
		duration: 2,
		ease: "power2.out",
	})
	.to(".rimg2ii", {
		opacity: 1,
		scale: isMobile ? 0.5 : 0.4,
		x: isMobile ? "126%" : "130%",
		y: isgrtlaptop ? "19%" : istab ? "-0%" : isMobile ? "60%" : "-5%",
		duration: 1,
		ease: "power2.out",
	})
	.to(".rimg3i", {
		x: isgrtlaptop ? "-126%" : istab ? "-72%" : isMobile ? "-118%" : "-150%",
		y: isMobile ? "100%" : "-10%",
		// width: isMobile ? "110%" : "",
		duration: 1,
		ease: "power2.out",
	});

gsap.fromTo(
	".final__img",
	{ opacity: 0 },
	{ 
		opacity: 1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rproj1",
			start: "top 60%",
			end: "top 50%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".rcompostimgs",
	{
		opacity: 1,
	},
	{
		opacity: 0,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rproj1",
			start: "top 60%",
			end: "top 50%",
			scrub: 1,
		},
	}
);

gsap.fromTo(
	".final",
	{
		opacity: 0,
	},
	{
		opacity: 1,
		scrollTrigger: {
			trigger: ".final__img",
			start: "top center",
			end: "bottom center",
		},
	}
);

// gsap.fromTo(
// 	".final",
// 	{
// 		opacity: 0,
// 	},
// 	{
// 		opacity: 1,
// 		scrollTrigger: {
// 			trigger: ".final__img",
// 			start: "top 2%",
// 			end: "bottom 2%",
// 		},
// 	}
// );

gsap.fromTo(
	".final",
	{
		y: 0,
	},
	{
		y: 800,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".rproj1",
			start: "top 50%",
			end: "bottom 0%",
			scrub: 1,
		},
	}
);
// gsap.to(".rcompostimgs", {
// 	opacity: 1,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 0%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".rimg3i", {
// 	opacity: 0,
// 	ease: "power2.out",
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".rimg2ii", {
// 	ease: "power2.out",
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });
// gsap.To(".rimg1i", {
// 	ease: "power2.out",
// 	opacity: 0,
// 	scrollTrigger: {
// 		trigger: ".rproj1",
// 		start: "top 50%",
// 		end: "bottom 40%",
// 		scrub: 1,
// 	},
// });

// gsap.To(".final", {
// 	opacity: 1,
// 	scrollTrigger: {
// 		trigger: ".rcomimgs",
// 		start: "top 50%",
// 		end: "bottom 100%",
// 		scrub: 1,
// 	},
// });

const images2 = document.querySelectorAll(".rporjimg");

images2.forEach((image, index) => {
	let scrubValue;
	if (index === 0) {
		scrubValue = 0.5;
	} else if (index === 1) {
		scrubValue = 3;
	} else if (index === 2) {
		scrubValue = 2.0;
	} else if (index === 3) {
		scrubValue = 0.8;
	} else if (index === 4) {
		scrubValue = 0.5;
	} else if (index === 5) {
		scrubValue = 3.5;
	} else {
		scrubValue = 1.0;
	}

	gsap.to(image, {
		y: -200,
		duration: 1,
		scrollTrigger: {
			trigger: image,
			start: "top center",
			end: "bottom center",
			scrub: scrubValue,
		},
	});
});
