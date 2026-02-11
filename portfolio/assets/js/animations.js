/**
 * ANIMATIONS MODULE
 * Using GSAP for high-performance animations
 */

/**
 * Initializes all animations
 */
export function initAnimations() {
    console.log("✨ Initializing Animations...");

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    animateHero();
    animateSections();
    initMagneticButtons();
    initCursor();
}

/**
 * Animates the Hero section elements
 */
function animateHero() {
    const tl = gsap.timeline();

    tl.to("#hero-title", {
        opacity: 1,
        y: 0,
        duration: 2.5, // Slow, dramatic fade in
        ease: "power2.out",
        delay: 0.5
    })
        .to("#hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=1.5")
        .from("#hero-pills > *", { // Select children
            scale: 0,
            opacity: 0,
            rotation: 0,
            stagger: 0.2,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=1");
}

/**
 * Animates sections on scroll
 */
function animateSections() {
    // Project Cards Stagger
    gsap.from("#projects-grid > div", {
        scrollTrigger: {
            trigger: "#projects-grid",
            start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Tech Stack List
    gsap.from("#tech-stack li", {
        scrollTrigger: {
            trigger: "#tech-stack",
            start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });
}

/**
 * Adds magnetic effect to specific buttons
 */
function initMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic-btn'); // Add this class to buttons you want to be magnetic

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const bound = magnet.getBoundingClientRect();
            const x = (e.clientX - bound.left) - bound.width / 2;
            const y = (e.clientY - bound.top) - bound.height / 2;

            gsap.to(magnet, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3, // snappy
                ease: "power3.out"
            });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.8, // elastic return
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

/**
 * Initializes a custom cursor (optional)
 * Keeping it simple for now, just logging
 */
function initCursor() {
    // Implementing a full custom cursor might be overkill for this stage,
    // but the structure is here if we want to add it later.
}
