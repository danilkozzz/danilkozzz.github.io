console.log("hello!");
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 90%",
            onEnter: () => timeline.play()
        });
    }

    const elements = document.querySelectorAll('h1, h2, h3, .link-wrapper');
    
    elements.forEach(element => {
        let tl = gsap.timeline({ paused: true });
        tl.from(element, {
            duration: .4, 
            x: '-0.35em', 
            opacity: 0,
            ease: 'power3.out',
            stagger: 0.1,
        });
        
        createScrollTrigger(element, tl);
    });
});