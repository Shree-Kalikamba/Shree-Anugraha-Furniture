document.querySelectorAll('.works').forEach(image => {
    image.addEventListener('click', function() {
        // Check if the clicked image is already active
        if (this.classList.contains('active')) {
            // If it is active, remove the 'active' class
            this.classList.remove('active');
        } else {
            // Remove 'active' class from all images
            document.querySelectorAll('.works').forEach(img => {
                img.classList.remove('active');
            });
            // Add 'active' class to the clicked image
            this.classList.add('active');
        }
    });
});