const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section"); // convert the sections to an array
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

// horizontal scroll magic
let scrollTween = gsap.to(sections, {
	xPercent: -100 * (sections.length - 1), // -100% for each section
	ease: "none",
	scrollTrigger: {
		trigger: ".container",
		pin: true,
		scrub: 1,
		end: "+=3000",
	},
});

// progress bar
gsap.to(mask, {
	width: "100%",
	scrollTrigger: {
		trigger: ".wrapper",
		start: "top left",
		scrub: 1,
	},
});

sections.forEach((section) => {
	let text = section.querySelectorAll(".anim");

	gsap.from(text, {
		y: -130,
		opacity: 0,
		duration: 2,
		ease: "elastic",
		stagger: 0.1,
		scrollTrigger: {
			trigger: section,
			containerAnimation: scrollTween,
			start: "left center",
		},
	});
});
