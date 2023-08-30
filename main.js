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

// Main Page
gsap.to('.home.panel img', {
  rotateX: "0deg",
  // y: "+=180px",
	scrollTrigger: {
    trigger: '.home',
		start: 'top 40%',
    end: 'bottom 50%',
		// pin: true,
		// pinSpacing: false
	}
});

// gsap.to('.code.panel', {
// 	scrollTrigger: {
// 		start: 'top top',
// 		pin: true,
// 		pinSpacing: false
// 	}
// });