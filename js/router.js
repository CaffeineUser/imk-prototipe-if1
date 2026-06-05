/**
 * Simple Hash-Based SPA Router
 */
class Router {
    constructor() {
        this.routes = {};
        
        // Listen to hash changes and page load
        window.addEventListener('hashchange', () => this.handleRouting());
        window.addEventListener('load', () => this.handleRouting());
    }

    /**
     * Register a new route with its associated container class
     */
    addRoute(path, containerClass) {
        this.routes[path] = containerClass;
    }

    /**
     * Navigate programmatically
     */
    navigate(path) {
        window.location.hash = path;
    }

    /**
     * Core routing logic to toggle visibility
     */
    handleRouting() {
        // Get current hash, default to '/' if empty
        const currentPath = window.location.hash.replace('#', '') || '/';
        const targetClass = this.routes[currentPath];

        if (!targetClass) {
            console.error(`Route not found: ${currentPath}`);
            return;
        }

        // Hide all page containers
        Object.values(this.routes).forEach(cssClass => {
            const element = document.querySelector(cssClass);
            if (element) {
                element.style.display = 'none';
            }
        });

        // Show the active page container
        const activeElement = document.querySelector(targetClass);
        if (activeElement) {
            // Restore display type based on page context (flex for centering panels)
            activeElement.style.display = 'flex'; 
        }
    }
}

// Initialize Router globally
const router = new Router();