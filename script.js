// Blog and Tools Data Management
class ContentManager {
    constructor() {
        this.blogPosts = [];
        this.tools = [];
        this.init();
    }

    async init() {
        await this.loadContent();
        this.renderRecentPosts();
        this.renderRecentTools();
    }

    async loadContent() {
        try {
            // Try to load from posts directory
            await this.loadFromDirectory();
        } catch (error) {
            console.log('Loading from directory failed, using fallback data');
            this.loadFallbackData();
        }
    }

    async loadFromDirectory() {
        // Try to load blog posts
        try {
            const blogResponse = await fetch('./posts/blog-index.json');
            if (blogResponse.ok) {
                const blogData = await blogResponse.json();
                this.blogPosts = blogData.posts || [];
            }
        } catch (error) {
            console.log('Blog posts not found, using fallback');
        }

        // Try to load tools
        try {
            const toolsResponse = await fetch('./posts/tools-index.json');
            if (toolsResponse.ok) {
                const toolsData = await toolsResponse.json();
                this.tools = toolsData.tools || [];
            }
        } catch (error) {
            console.log('Tools not found, using fallback');
        }
    }

    loadFallbackData() {
        // Fallback blog posts
        this.blogPosts = [
            {
                title: "The Sorrow of a Loser Doesn't Deserve Sympathy",
                date: "2025-01-15",
                slug: "sorrow-of-loser",
                excerpt: "Kita hidup dalam dunia yang sering mengasihani kekalahan, bukan karena mereka layak dikasihani..."
            },
            {
                title: "Hikmah, Petunjuk, Gairah",
                date: "2025-01-10",
                slug: "hikmah-petunjuk-gairah",
                excerpt: "Tahun 2022 adalah masa yang sulit dalam hidup saya. Tapi di balik semua keterpurukan itu..."
            },
            {
                title: "Navigating Life's Storms",
                date: "2025-01-05",
                slug: "navigating-life-storms",
                excerpt: "Lessons learned from years at sea and how they apply to life on land..."
            }
        ];

        // Fallback tools
        this.tools = [
            {
                title: "Marine Fuel Calculator",
                date: "2025-01-12",
                slug: "marine-fuel-calculator",
                description: "Calculate fuel consumption for marine vessels with precision"
            },
            {
                title: "Concrete Volume Calculator",
                date: "2025-01-08",
                slug: "concrete-calculator",
                description: "Estimate concrete requirements for construction projects"
            },
            {
                title: "Buy vs Rent House Calculator",
                date: "2025-01-03",
                slug: "buy-rent-calculator",
                description: "Compare the financial impact of buying versus renting property"
            }
        ];
    }

    renderRecentPosts() {
        const container = document.getElementById('recent-blog-posts');
        if (!container) return;

        if (this.blogPosts.length === 0) {
            container.innerHTML = '<li class="error">No blog posts found</li>';
            return;
        }

        // Sort by date and take the 3 most recent
        const recentPosts = this.blogPosts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        container.innerHTML = recentPosts.map(post => `
            <li>
                <a href="./posts/blog/${post.slug}.html">${post.title}</a>
                <span class="post-date">${this.formatDate(post.date)}</span>
            </li>
        `).join('');
    }

    renderRecentTools() {
        const container = document.getElementById('recent-tools');
        if (!container) return;

        if (this.tools.length === 0) {
            container.innerHTML = '<li class="error">No tools found</li>';
            return;
        }

        // Sort by date and take the 3 most recent
        const recentTools = this.tools
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        container.innerHTML = recentTools.map(tool => `
            <li>
                <a href="./posts/tools/${tool.slug}.html">${tool.title}</a>
                <span class="post-date">${this.formatDate(tool.date)}</span>
            </li>
        `).join('');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setActiveNavigation();
        this.handleNavigation();
    }

    setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    handleNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                e.target.classList.add('active');
            });
        });
    }
}

// Smooth Scrolling for Internal Links
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Log page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        });

        // Monitor content loading
        this.monitorContentLoading();
    }

    monitorContentLoading() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check if content was loaded
                            if (node.classList && node.classList.contains('loading')) {
                                console.log('Content loading detected');
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContentManager();
    new NavigationManager();
    new SmoothScrollManager();
    new PerformanceMonitor();
});

// Service Worker Registration (for offline capability)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}