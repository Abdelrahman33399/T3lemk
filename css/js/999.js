// js/main.js
function toggleGradeBanners(grade) {
    const allGradeContainers = document.querySelectorAll('.grade-banners-container');
    const targetContainer = document.getElementById(grade + '-subjects-container');
    const mainBanner = document.querySelector(`.main-subject-banner[onclick="toggleGradeBanners('${grade}')"]`);
    
    allGradeContainers.forEach(container => {
        if (container.id !== targetContainer.id) {
            container.classList.remove('open');
        }
    });
    
    targetContainer.classList.toggle('open');
    
    const icon = mainBanner.querySelector('.toggle-icon');
    if (targetContainer.classList.contains('open')) {
        icon.textContent = '▲';
    } else {
        icon.textContent = '▼';
    }
}

function toggleTermBanners(term, button) {
    const allTermBanners = document.querySelectorAll(`#${term.split('-')[0]}-subjects-container .term-banners`);
    const targetTermBanner = document.getElementById(term + '-subjects');
    
    allTermBanners.forEach(banner => {
        banner.classList.remove('open');
    });
    
    targetTermBanner.classList.add('open');
    
    const allButtons = document.querySelectorAll(`#${term.split('-')[0]}-subjects-container .term-toggle-button`);
    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}