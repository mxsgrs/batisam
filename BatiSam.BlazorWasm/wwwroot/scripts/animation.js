// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        (rect.top >= 0 && rect.top <= viewHeight) ||
        (rect.bottom >= 0 && rect.bottom <= viewHeight)
    );
}

// Function to handle animation for a given selector
function animateElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Combined event listener to trigger animation when user scrolls
function handleScroll() {
    animateElements('.presentation');
    animateElements('.subdomains');
}

window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);