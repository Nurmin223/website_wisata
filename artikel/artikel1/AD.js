// Adding a fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 2s";

    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);
});

// Smooth scrolling for internal links (if added in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
