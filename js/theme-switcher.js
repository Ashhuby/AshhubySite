document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for user's preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or default to dark mode if no preference is found
    if (savedTheme) {
        body.classList.add(savedTheme); // Add 'light-mode' or 'dark-mode'
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // If no saved theme, check OS preference and set to light mode if preferred
        body.classList.add('light-mode');
    } else {
        // Default to dark mode if no preference or OS prefers dark
        body.classList.remove('light-mode'); // Ensure it's not light-mode
    }

    // Add event listener to the toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle the 'light-mode' class on the body
            body.classList.toggle('light-mode');

            // Save the current theme preference to localStorage
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }
});