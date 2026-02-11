/**
 * DATA MODULE
 * 
 * This module contains all content data for the portfolio site.
 * By separating data from presentation, we can:
 * - Easily update content without touching HTML/JS logic
 * - Maintain consistency across the site
 * - Enable future CMS integration or JSON API consumption
 * - Follow the Single Responsibility Principle
 */

/**
 * NAVIGATION DATA
 * Main navigation links displayed in header and footer
 */
export const navigation = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "https://github.com/chathnindu?tab=repositories" },
    { label: "Contact", href: "#contact" }
];

/**
 * SOCIAL LINKS DATA
 * Social media platforms with icons and URLs
 * `showInHeader` determines visibility in the sticky header
 */
export const socialLinks = [
    {
        platform: "github",
        icon: "fab fa-github",
        url: "https://github.com/chathnindu",
        showInHeader: true
    },
    {
        platform: "linkedin",
        icon: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/chathnindu/",
        showInHeader: true
    }
];

/**
 * HERO PILL BUTTONS
 * Call-to-action buttons floating in the hero section
 * Position values use Tailwind positioning classes
 */
export const heroPills = [
    {
        text: "see what i broke on github 💀",
        href: "https://github.com/chathnindu",
        position: "top-[35%] left-[25%] md:top-[20%] md:left-[42%]",
        rotation: "rotate-[10deg] md:rotate-[75deg]",
        icon: "fab fa-github ml-2"
    },
    {
        text: "grab my résumé ✌️",
        href: "#",
        position: "top-[55%] right-[5%] md:top-[40%] md:right-[8%]",
        rotation: "-rotate-[5deg] md:rotate-[8deg]",
        icon: null,
        isDiv: true
    }
];

/**
 * TECH STACK DATA
 * Technologies and frameworks currently used
 */
export const techStack = [
    "React & Next.js",
    "Tailwind CSS",
    "Node.js",
    "Three.js",
    "Python"
];

/**
 * PROJECTS DATA
 * Portfolio projects (kept for reference, main CTA links to GitHub)
 */
export const projects = [
    {
        id: 1,
        title: "Neural Network Visualizer",
        description: "Interactive 3D visualization of neural networks using Three.js and WebGL.",
        githubUrl: "https://github.com/chathnindu/neural-viz",
        tags: ["Three.js", "React", "WebGL"],
        featured: true
    },
    {
        id: 2,
        title: "AI Code Assistant",
        description: "CLI tool that uses LLMs to help debug and refactor code.",
        githubUrl: "https://github.com/chathnindu/ai-assistant",
        tags: ["Python", "OpenAI", "CLI"],
        featured: true
    }
];

/**
 * FOOTER LINKS DATA
 * Cleaned up to match real pages
 */
export const footerLinks = [
    { label: "About", href: "#about" },
    { label: "GitHub", href: "https://github.com/chathnindu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chathnindu/" }
];

/**
 * SITE METADATA
 * General site information
 */
export const siteMetadata = {
    title: "chathnindu Portfolio",
    author: "Chathnindu",
    tagline: "i occasionally build cool stuff. wanna see it before everyone else? 👀",
    copyright: "© 2026 Chathnindu",
    newsletterCTA: "grab my résumé ✌️"
};