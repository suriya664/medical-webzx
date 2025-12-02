// Dark Mode Toggle Functionality
(function() {
    'use strict';
    
    // Get the current theme from localStorage or default to 'light'
    const getTheme = () => {
        return localStorage.getItem('theme') || 'light';
    };
    
    // Set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    };
    
    // Update toggle icon based on theme
    const updateToggleIcon = (theme) => {
        const toggleBtns = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
        toggleBtns.forEach(toggleBtn => {
            if (toggleBtn) {
                if (theme === 'dark') {
                    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
                } else {
                    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                    toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
                }
            }
        });
    };
    
    // Toggle between dark and light mode
    const toggleTheme = () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };
    
    // Initialize theme on page load
    const initTheme = () => {
        const theme = getTheme();
        setTheme(theme);
    };
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
    
    // Add event listener to toggle buttons when they're available
    document.addEventListener('DOMContentLoaded', () => {
        const toggleBtns = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
        toggleBtns.forEach(toggleBtn => {
            if (toggleBtn) {
                toggleBtn.addEventListener('click', toggleTheme);
            }
        });
    });
    
    // Expose toggle function globally for inline event handlers (fallback)
    window.toggleDarkMode = toggleTheme;
})();

