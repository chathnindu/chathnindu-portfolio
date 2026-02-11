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
    initLiquidText();
    initCursor();
}

/**
 * Initializes the smooth liquid/ribbon text effect.
 * Splits text into individual character spans,
 * then on mousemove applies a proximity-based wave animation.
 */
function initLiquidText() {
    const textElement = document.getElementById('ink-text');
    if (!textElement) {
        console.warn("Liquid text element #ink-text not found");
        return;
    }

    // Split text into individual span elements
    const originalText = textElement.textContent.trim();
    textElement.innerHTML = ''; // Clear original text

    const chars = [];
    for (let i = 0; i < originalText.length; i++) {
        const span = document.createElement('span');
        span.textContent = originalText[i];
        span.style.display = 'inline-block';
        span.style.willChange = 'transform';
        span.style.transformOrigin = 'center bottom';
        textElement.appendChild(span);
        chars.push(span);
    }

    console.log(`Liquid text: split "${originalText}" into ${chars.length} chars`);

    // Mousemove: animate characters near the cursor
    textElement.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        chars.forEach((span) => {
            const rect = span.getBoundingClientRect();
            const charCenterX = rect.left + rect.width / 2;
            const charCenterY = rect.top + rect.height / 2;

            const dx = mouseX - charCenterX;
            const dy = mouseY - charCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const radius = 120; // Interaction radius in px

            if (dist < radius) {
                const intensity = 1 - (dist / radius); // 1 = closest, 0 = edge

                // Ribbon wave: stretch vertically, shift up, slight skew
                const yShift = -intensity * 25;
                const scaleY = 1 + intensity * 0.6;
                const scaleX = 1 - intensity * 0.15;
                const skew = (dx > 0 ? 1 : -1) * intensity * 8;

                gsap.to(span, {
                    y: yShift,
                    scaleX: scaleX,
                    scaleY: scaleY,
                    skewX: skew,
                    color: `hsl(${150 + intensity * 30}, 90%, ${55 + intensity * 15}%)`, // Green ribbon glow
                    duration: 0.15,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            } else {
                // Smoothly return to resting state
                gsap.to(span, {
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 0,
                    color: "",
                    duration: 0.5,
                    ease: "elastic.out(1, 0.4)",
                    overwrite: "auto"
                });
            }
        });
    });

    // Mouse leave: reset all characters
    textElement.addEventListener('mouseleave', () => {
        chars.forEach((span) => {
            gsap.to(span, {
                y: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                color: "",
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    console.log("✅ Liquid text effect initialized");
}

/**
 * Animates the Hero section elements
 */
function animateHero() {
    const tl = gsap.timeline();

    tl.to("#hero-title", {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power2.out",
        delay: 0.5
    })
        .to("#hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out"
        }, "-=1.5")
        .from("#hero-pills > *", {
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
    const magnets = document.querySelectorAll('.magnetic-btn');

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const bound = magnet.getBoundingClientRect();
            const x = (e.clientX - bound.left) - bound.width / 2;
            const y = (e.clientY - bound.top) - bound.height / 2;

            gsap.to(magnet, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power3.out"
            });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

/**
 * Initializes a custom cursor (optional placeholder)
 */
function initCursor() {
    // Placeholder for future custom cursor implementation
}
