document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('_active');
        mobileMenu.classList.toggle('_active');
    });
});


// Инициализация i18next
i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "home": "Home",
                "menu": "Menu",
                "about-us": "About Us",
                "contact": "Contact",
                "menu-button": "MENU",
                "eat-button": "LET'S EAT"
            }
        },
        hr: {
            translation: {
                "home": "Početna",
                "menu": "Meni",
                "about-us": "O nama",
                "contact": "Kontakt",
                "menu-button": "JELOVNIK",
                "eat-button": "KRENIMO"
            }
        }
    }
}, function (err, t) {
    if (err) {
        console.error('i18next initialization failed:', err);
    } else {

        updateContent();

        updateFlagVisibility(i18next.language);
    }
});


function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        element.textContent = i18next.t(key);
    });
}


function updateFlagVisibility(lang) {
    if (lang === 'en') {
        document.getElementById("en-flag").style.opacity = '1';
        document.getElementById("en-flag").style.transform = 'translateY(0)';
        document.getElementById("hr-flag").style.opacity = '0';
        document.getElementById("hr-flag").style.transform = 'translateY(100%)';
    } else if (lang === 'hr') {
        document.getElementById("hr-flag").style.opacity = '1';
        document.getElementById("hr-flag").style.transform = 'translateY(0)';
        document.getElementById("en-flag").style.opacity = '0';
        document.getElementById("en-flag").style.transform = 'translateY(-100%)';
    }
}


document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLang = i18next.language;

    if (currentLang === 'en') {

        i18next.changeLanguage('hr', function () {

            updateContent();

            updateFlagVisibility('hr');
        });
    } else {

        i18next.changeLanguage('en', function () {

            updateContent();

            updateFlagVisibility('en');
        });
    }
});


document.getElementById("hr-flag").addEventListener("mouseenter", function () {
    document.getElementById("hr-flag").style.opacity = '0';
    document.getElementById("hr-flag").style.transform = 'translateY(100%)';
    document.getElementById("en-flag").style.opacity = '1';
    document.getElementById("en-flag").style.transform = 'translateY(0)';
});


document.getElementById("en-flag").addEventListener("mouseenter", function () {
    document.getElementById("en-flag").style.opacity = '0';
    document.getElementById("en-flag").style.transform = 'translateY(-100%)';
    document.getElementById("hr-flag").style.opacity = '1';
    document.getElementById("hr-flag").style.transform = 'translateY(0)';
});