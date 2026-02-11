/**
 * MAIN APPLICATION MODULE
 * 
 * This module handles all dynamic rendering of content from data.js
 * It follows these principles:
 * - DRY (Don't Repeat Yourself): Reusable template functions
 * - Separation of Concerns: Data vs. Presentation
 * - Pure Functions: Templates receive data, return HTML
 * - Declarative Rendering: Clear, readable component creation
 */

import {
    navigation,
    socialLinks,
    heroPills,
    techStack,
    projects,
    footerLinks,
    siteMetadata
} from './data.js';

import { initBackground } from './background.js';
import { initAnimations } from './animations.js';

/**
 * ============================================================================
 * REUSABLE COMPONENT TEMPLATES
 * ============================================================================
 */

/**
 * Creates a navigation link element
 * @param {Object} navItem - Navigation item with label and href
 * @returns {string} HTML string for navigation link
 */
function createNavLink(navItem) {
    return `
        <a class="font-display font-medium text-black dark:text-white hover:opacity-70 transition-opacity" 
           href="${navItem.href}">
            ${navItem.label}
        </a>
    `;
}

/**
 * Creates a social media icon link
 * @param {Object} social - Social link data
 * @param {string} variant - 'header' or 'footer' for different styling
 * @returns {string} HTML string for social icon
 */
function createSocialIcon(social, variant = 'header') {
    if (variant === 'header') {
        // Header icons: simple with hover scale
        const hideClass = social.showInHeader ? '' : 'hidden md:block';
        return `
            <a class="${hideClass} hover:scale-110 transition-transform p-1" 
               href="${social.url}" 
               target="_blank"
               aria-label="${social.platform}">
                <i class="${social.icon} text-xl"></i>
            </a>
        `;
    } else {
        // Footer icons: circular with border
        return `
            <a class="w-12 h-12 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white" 
               href="${social.url}"
               target="_blank"
               aria-label="${social.platform}">
                <i class="${social.icon}"></i>
            </a>
        `;
    }
}

/**
 * Creates a floating pill button for hero section
 * @param {Object} pill - Pill button data
 * @returns {string} HTML string for pill button
 */
function createPillButton(pill) {
    const baseClasses = `
        absolute ${pill.position} 
        bg-pill-green text-black font-display font-medium 
        px-4 py-2 md:px-6 md:py-3 
        rounded-full transform ${pill.rotation} 
        hover:scale-110 transition-transform z-20 
        shadow-lg border border-black/10 
        whitespace-nowrap text-sm md:text-base
    `.trim().replace(/\s+/g, ' ');

    const iconHTML = pill.icon ? `<i class="${pill.icon}"></i>` : '';
    const content = `${pill.text} ${iconHTML}`;

    // Some pills are divs (non-clickable), others are links
    if (pill.isDiv) {
        return `<div class="${baseClasses} cursor-pointer">${content}</div>`;
    } else {
        return `<a class="${baseClasses}" href="${pill.href}">${content}</a>`;
    }
}

/**
 * Creates a project card component
 * @param {Object} project - Project data
 * @returns {string} HTML string for project card
 */
function createProjectCard(project) {
    // Generate tag badges
    const tagBadges = project.tags
        .map(tag => `
            <span class="px-3 py-1 text-xs font-display font-medium bg-white/20 text-black dark:text-white rounded-full border border-white/10">
                ${tag}
            </span>
        `)
        .join('');

    return `
        <div class="group relative glass rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <!-- Project Title -->
            <h3 class="font-display font-bold text-xl md:text-2xl mb-3 text-black dark:text-white">
                ${project.title}
            </h3>
            
            <!-- Project Description -->
            <p class="text-gray-700 dark:text-gray-300 font-body text-sm md:text-base mb-4 leading-relaxed">
                ${project.description}
            </p>
            
            <!-- Technology Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                ${tagBadges}
            </div>
            
            <!-- GitHub Link -->
            <a href="${project.githubUrl}" 
               target="_blank"
               class="inline-flex items-center space-x-2 font-display font-medium text-black dark:text-white hover:opacity-70 transition-opacity group">
                <span>View on GitHub</span>
                <i class="fab fa-github text-lg group-hover:translate-x-1 transition-transform"></i>
            </a>
        </div>
    `;
}

/**
 * Creates a simple list item
 * @param {string} text - Text content
 * @returns {string} HTML string for list item
 */
function createListItem(text) {
    return `<li>${text}</li>`;
}

/**
 * Creates a footer link
 * @param {Object} link - Link data
 * @returns {string} HTML string for footer link
 */
function createFooterLink(link) {
    return `<a class="hover:underline" href="${link.href}">${link.label}</a>`;
}

/**
 * ============================================================================
 * RENDERING FUNCTIONS
 * ============================================================================
 */

/**
 * Renders navigation links in the header
 */
function renderHeaderNavigation() {
    const navContainer = document.getElementById('desktop-nav');
    if (!navContainer) return;

    navContainer.innerHTML = navigation
        .map(createNavLink)
        .join('');
}

/**
 * Renders social icons in the header
 */
function renderHeaderSocial() {
    const socialContainer = document.getElementById('header-social');
    if (!socialContainer) return;

    socialContainer.innerHTML = socialLinks
        .filter(social => social.showInHeader)
        .map(social => createSocialIcon(social, 'header'))
        .join('');
}

/**
 * Renders hero pill buttons
 */
function renderHeroPills() {
    const pillsContainer = document.getElementById('hero-pills');
    if (!pillsContainer) return;

    pillsContainer.innerHTML = heroPills
        .map(createPillButton)
        .join('');
}

/**
 * Renders social icons in the footer
 */
function renderFooterSocial() {
    const socialContainer = document.getElementById('footer-social');
    if (!socialContainer) return;

    // Show all social links in footer
    socialContainer.innerHTML = socialLinks
        .map(social => createSocialIcon(social, 'footer'))
        .join('');
}

/**
 * Renders footer navigation links
 */
function renderFooterNavigation() {
    const navContainer = document.getElementById('footer-nav');
    if (!navContainer) return;

    navContainer.innerHTML = navigation
        .map(nav => `<li>${createNavLink(nav)}</li>`)
        .join('');
}

/**
 * Renders tech stack list
 */
function renderTechStack() {
    const techContainer = document.getElementById('tech-stack');
    if (!techContainer) return;

    techContainer.innerHTML = techStack
        .map(createListItem)
        .join('');
}

/**
 * Renders project cards
 * @param {boolean} featuredOnly - If true, only show featured projects
 */
function renderProjects(featuredOnly = false) {
    const projectsContainer = document.getElementById('projects-grid');
    if (!projectsContainer) return;

    const projectsToShow = featuredOnly
        ? projects.filter(p => p.featured)
        : projects;

    projectsContainer.innerHTML = projectsToShow
        .map(createProjectCard)
        .join('');
}

/**
 * Renders footer links
 */
function renderFooterLinks() {
    const linksContainer = document.getElementById('footer-links');
    if (!linksContainer) return;

    linksContainer.innerHTML = footerLinks
        .map(createFooterLink)
        .join('');
}

/**
 * ============================================================================
 * INITIALIZATION
 * ============================================================================
 */

/**
 * Initializes the application
 * Called when DOM is ready
 */
function init() {
    console.log('🚀 Initializing chathnindu portfolio...');

    try {
        // Render all components
        renderHeaderNavigation();
        renderHeaderSocial();
        renderHeroPills();
        renderFooterSocial();
        renderFooterNavigation();
        renderTechStack();
        renderProjects(true); // Only show featured projects
        renderFooterLinks();

        // 3D Background & Animations
        initBackground();
        initAnimations();

        console.log('✅ Portfolio initialized successfully!');
    } catch (error) {
        console.error('❌ Error initializing portfolio:', error);
    }
}

/**
 * Wait for DOM to be ready, then initialize
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already ready
    init();
}

/**
 * ============================================================================
 * OPTIONAL: EXPORT FUNCTIONS FOR EXTERNAL USE
 * ============================================================================
 */

export {
    createNavLink,
    createSocialIcon,
    createPillButton,
    createProjectCard,
    renderProjects
};