// js/menu.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');

    // فتح القائمة
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.add('show');
        overlay.classList.add('active');
    });

    // إغلاق القائمة بزر ×
    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('show');
        overlay.classList.remove('active');
    });

    // إغلاق القائمة بالضغط على الخلفية
    overlay.addEventListener('click', () => {
        navLinks.classList.remove('show');
        overlay.classList.remove('active');
    });
});