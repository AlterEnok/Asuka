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
    lng: 'en', // начальный язык
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
        // Загружаем переводы после инициализации
        updateContent();
    }
});

// Функция для обновления контента страницы
function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.getAttribute("data-i18n");
        element.textContent = i18next.t(key);
    });
}

// Переключение языка
document.getElementById("language-toggle").addEventListener("click", function () {
    const currentLang = i18next.language;

    if (currentLang === 'en') {
        i18next.changeLanguage('hr', function () {
            // После изменения языка обновляем контент
            updateContent();
        });
        document.getElementById("en-flag").style.display = 'none';
        document.getElementById("hr-flag").style.display = 'inline';
    } else {
        i18next.changeLanguage('en', function () {
            // После изменения языка обновляем контент
            updateContent();
        });
        document.getElementById("hr-flag").style.display = 'none';
        document.getElementById("en-flag").style.display = 'inline';
    }
});