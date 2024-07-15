// wait for hero load
document.addEventListener('DOMContentLoaded', function () {
    const bgImageUrl = 'images/btp.webp';
    const img = new Image();
    img.src = bgImageUrl;
    
    // Function to show the main content
    function showMainContent() {
        document.body.style.display = 'block';
    }
    
    // Check if the image is already loaded
    if (img.complete) {
        showMainContent();
    } else {
        img.onload = showMainContent;
        img.onerror = function() {
            console.error('Failed to load background image.');
            showMainContent();
        };
    }
});