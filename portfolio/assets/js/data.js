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
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" }
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
        platform: "discord",
        icon: "fab fa-discord",
        url: "#",
        showInHeader: true
    },
    {
        platform: "linkedin",
        icon: "fab fa-linkedin",
        url: "#", // Replace # with your LinkedIn profile URL
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
        text: "Join the chaos",
        href: "https://discord.gg/googlelabs",
        position: "top-[15%] left-[5%] md:top-[35%] md:left-[15%]",
        rotation: "-rotate-[15deg] md:-rotate-[45deg]",
        icon: null
    },
    {
        text: "Check out my code",
        href: "https://github.com/chathnindu",
        position: "top-[35%] left-[25%] md:top-[20%] md:left-[42%]",
        rotation: "rotate-[10deg] md:rotate-[75deg]",
        icon: "fab fa-github ml-2"
    },
    {
        text: "Hold My CV",
        href: "#",
        position: "top-[55%] right-[5%] md:top-[40%] md:right-[8%]",
        rotation: "-rotate-[5deg] md:rotate-[8deg]",
        icon: null,
        isDiv: true // Render as div instead of anchor
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
 * Portfolio projects with descriptions and links
 * Add your real projects here!
 */
export const projects = [
    {
        id: 1,
        title: "Neural Network Visualizer",
        description: "Interactive 3D visualization of neural networks using Three.js and WebGL. Real-time training animations and layer inspection.",
        githubUrl: "https://github.com/chathnindu/neural-viz",
        tags: ["Three.js", "React", "WebGL"],
        featured: true
    },
    {
        id: 2,
        title: "AI Code Assistant",
        description: "CLI tool that uses LLMs to help debug and refactor code. Supports Python, JavaScript, and TypeScript.",
        githubUrl: "https://github.com/chathnindu/ai-assistant",
        tags: ["Python", "OpenAI", "CLI"],
        featured: true
    },
    {
        id: 3,
        title: "Real-time Collaboration Board",
        description: "Multiplayer whiteboard with WebSocket synchronization. Built with Node.js and Canvas API.",
        githubUrl: "https://github.com/chathnindu/collab-board",
        tags: ["Node.js", "WebSocket", "Canvas"],
        featured: true
    },
    {
        id: 4,
        title: "Portfolio Generator",
        description: "Static site generator for developer portfolios with Markdown support and custom themes.",
        githubUrl: "https://github.com/chathnindu/portfolio-gen",
        tags: ["Node.js", "Markdown", "SSG"],
        featured: false
    },
    {
        id: 5,
        title: "Weather Dashboard",
        description: "Beautiful weather app with location search, 7-day forecasts, and animated weather icons.",
        githubUrl: "https://github.com/chathnindu/weather-dash",
        tags: ["React", "API", "Tailwind"],
        featured: false
    },
    {
        id: 6,
        title: "Task Automation Toolkit",
        description: "Collection of Python scripts for automating common development workflows and file operations.",
        githubUrl: "https://github.com/chathnindu/auto-toolkit",
        tags: ["Python", "Automation", "CLI"],
        featured: false
    }
];

/**
 * FOOTER LINKS DATA
 * Additional footer navigation links
 */
export const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Help", href: "#help" }
];

/**
 * SITE METADATA
 * General site information
 */
export const siteMetadata = {
    title: "chathnindu Portfolio",
    author: "Chathnindu",
    tagline: "Stay connected for early access to my newest experiments and weird ideas.",
    copyright: "© 2024 Chathnindu",
    newsletterCTA: "Sign up for my newsletter"
};