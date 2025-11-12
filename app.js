let currentLang = 'en';

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'jp' : 'en';

    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = (currentLang === 'en') ? 'block' : 'none';
    });
    document.querySelectorAll('.lang-jp').forEach(el => {
        el.style.display = (currentLang === 'jp') ? 'block' : 'none';
    });

    // Update button text
    const langButton = document.getElementById('lang-toggle');
    if (currentLang === 'en') {
        langButton.innerHTML = 'EN / <span class="color-red">JP</span>';
    } else {
        langButton.innerHTML = '<span class="color-red">EN</span> / JP';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    toggleLanguage(); 
    toggleLanguage(); 
});