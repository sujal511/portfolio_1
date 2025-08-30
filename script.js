// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initActiveNavLinks();
    initTypingEffect();
    initContactForm();
    initProjectHovers();
    initResponsiveHelpers();
    initTouchGestures();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill tags with delay
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillTags(entry.target);
                }
                
                // Animate stats counter
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.about-content, .skill-category, .project-card, .education-card, .certification-item, .contact-item, .about-stats'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Animate skill tags with stagger effect
function animateSkillTags(skillCategory) {
    const skillTags = skillCategory.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Counter Animation for Stats
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const finalValue = stat.textContent.replace('+', '');
        const isNumeric = !isNaN(finalValue);
        
        if (isNumeric) {
            const increment = finalValue / 30;
            let currentValue = 0;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(currentValue) + '+';
            }, 50);
        }
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(52, 152, 219, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Active Navigation Links
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on load
}

// Typing Effect for Hero Title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.innerHTML;
    const nameSpan = heroTitle.querySelector('.highlight');
    
    if (nameSpan) {
        const nameText = nameSpan.textContent;
        let displayText = '';
        let i = 0;
        
        // Hide the name initially
        nameSpan.style.opacity = '0';
        
        setTimeout(() => {
            nameSpan.style.opacity = '1';
            
            function typeWriter() {
                if (i < nameText.length) {
                    displayText += nameText.charAt(i);
                    nameSpan.textContent = displayText;
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            nameSpan.textContent = '';
            typeWriter();
        }, 1000);
    }
}

// Contact Form Enhancement (if you add a form later)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            const formData = new FormData(this);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Project Hover Effects
function initProjectHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Utility Functions

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#27ae60';
            break;
        case 'error':
            notification.style.background = '#e74c3c';
            break;
        default:
            notification.style.background = '#3498db';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimize scroll events
const optimizedScrollHandler = throttle(function() {
    initNavbarScroll();
    initActiveNavLinks();
}, 16); // ~60fps

// Replace individual scroll listeners with optimized one
window.addEventListener('scroll', optimizedScrollHandler);

// Lazy Loading for Images (if you add images later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize parallax if user prefers motion
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initParallax();
}

// Dark Mode Toggle (Optional feature)
function initDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.setAttribute('data-theme', currentTheme);
        }
        
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Performance Monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
}

// Initialize performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    measurePerformance();
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error reporting service
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('SW registered: ', registration);
        })
        .catch(function(registrationError) {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// Responsive Helper Functions
function initResponsiveHelpers() {
    // Handle viewport height on mobile browsers
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', debounce(setVH, 100));
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(setVH, 100);
    });
    
    // Prevent zoom on input focus (iOS)
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth < 768) {
                document.querySelector('meta[name=viewport]').setAttribute(
                    'content', 
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                );
            }
        });
        
        input.addEventListener('blur', function() {
            document.querySelector('meta[name=viewport]').setAttribute(
                'content', 
                'width=device-width, initial-scale=1.0'
            );
        });
    });
}

// Touch Gesture Support
function initTouchGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        let xDiff = startX - e.touches[0].clientX;
        let yDiff = startY - e.touches[0].clientY;
        
        // Swipe right to close mobile menu
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 50) {
                navMenu.classList.remove('active');
                document.getElementById('nav-toggle').classList.remove('active');
            }
        }
        
        startX = 0;
        startY = 0;
    });
}

// Responsive Image Loading
function initResponsiveImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading attribute for lazy loading
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Handle image load errors
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
}

// Device Detection and Responsive Adjustments
function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
    
    document.body.classList.toggle('mobile-device', isMobile);
    document.body.classList.toggle('tablet-device', isTablet);
    
    // Adjust touch targets for mobile
    if (isMobile) {
        const buttons = document.querySelectorAll('.btn, .social-link, .project-link');
        buttons.forEach(btn => {
            btn.style.minHeight = '44px';
            btn.style.minWidth = '44px';
        });
    }
}

// Initialize device detection
detectDevice();

// Handle resize events
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        detectDevice();
        
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    }, 250);
});