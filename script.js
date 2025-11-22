document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------------------
    // 1. ЛОГИСТИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ
    // ---------------------------------------------------------

    const translations = {
        ru: {
            "nav-services": "Услуги",
            "nav-about": "О нас",
            "nav-contact": "Контакты",
            "nav-team": "Команда", // Добавлено для меню
            "header-search-placeholder": "Поиск по сайту...",
            "header-search-button": "Поиск",
            "hero-title": "Ваша защита в мире права",
            "hero-text": "Мы предлагаем комплексные юридические решения для бизнеса и частных лиц.",
            "hero-button": "Наши услуги",
            "services-title": "Наши Услуги",
            "service-consultation-title": "Юридические консультации",
            "service-consultation-text": "Разъяснения по сложным правовым вопросам, анализ документов.",
            "service-business-title": "Сопровождение бизнеса",
            "service-business-text": "Регистрация, реорганизация, договорная работа, защита интересов.",
            "service-disputes-title": "Судебные споры",
            "service-disputes-text": "Представительство в судах всех инстанций, защита прав.",
            "service-real-estate-title": "Недвижимость",
            "service-real-estate-text": "Сопровождение сделок, оформление прав, разрешение споров.",
            "about-title": "О компании \"Правовой Альянс\"",
            "about-text-1": "Мы - команда опытных юристов с многолетним стажем работы в различных областях права. Наша миссия – обеспечить каждому клиенту справедливое и эффективное решение его правовых вопросов. Мы ценим доверие наших клиентов и стремимся к максимальной прозрачности и эффективности в каждом деле.",
            "about-text-2": "Наша компания основана на принципах профессионализма, честности и ответственности. Мы постоянно совершенствуем свои знания и навыки, чтобы соответствовать самым высоким стандартам юридической практики.",
            "about-site-title": "Наш сайт",
            "about-site-text-1": "Мы разработали наш веб-сайт, чтобы предоставить вам удобный доступ к информации и услугам. Наш сайт выполнен в современном и адаптивном дизайне, используя элегантное сочетание <strong>темно-синего</strong> (основной), <strong>золотисто-желтого</strong> (акцент) и светлых тонов для комфортного восприятия.",
            "about-site-text-2": "На сайте реализованы следующие функции для вашего удобства:",
            "about-site-list-item-1": "<strong>Удобный поиск:</strong> Быстро находите нужную информацию на сайте.",
            "about-site-list-item-2": "<strong>Подписка на новости:</strong> Будьте в курсе последних изменений в законодательстве и новостей компании.",
            "about-site-list-item-3": "<strong>Функция обратной связи:</strong> Легко свяжитесь с нами через удобную форму на сайте.",
            "about-site-list-item-4": "<strong>Адаптивность:</strong> Сайт корректно отображается на любых устройствах – от настольных компьютеров до смартфонов.",
            "about-site-list-item-5": "<strong>Навигация:</strong> Интуитивно понятное меню и плавная прокрутка к разделам.",
            "team-title": "Наша Команда",
            "team-ivan-name": "Иван Петрович Петров",
            "team-ivan-role": "Старший юрист",
            "team-ivan-contact": "Связаться",
            "team-anna-name": "Анна Сергеевна Сидорова",
            "team-anna-role": "Ведущий юрист",
            "team-anna-contact": "Связаться",
            "team-sergey-name": "Сергей Николаевич Кузнецов",
            "team-sergey-role": "Юрист",
            "team-sergey-contact": "Связаться",
            "contact-title": "Контакты и Обратная Связь",
            "contact-address-title": "Адрес:",
            "contact-address-text": "г. Москва, ул. Правовая, д. 15, оф. 301",
            "contact-phone-title": "Телефон:",
            "contact-phone-link": "+7 (916) 748-00-40",
            "contact-email-title": "Email:",
            "contact-email-link": "artem.terehov738@mail.ru",
            "contact-form-title": "Напишите нам",
            "contact-form-name-label": "Ваше имя:",
            "contact-form-email-label": "Ваш Email:",
            "contact-form-message-label": "Сообщение:",
            "contact-form-submit-btn": "Отправить",
            "newsletter-title": "Подписка на новости",
            "newsletter-text": "Получайте актуальную информацию о законодательстве и наших специальных предложениях.",
            "newsletter-placeholder": "Введите ваш Email",
            "newsletter-button": "Подписаться",
            "footer-copyright": "&copy; 2025 Правовой Альянс. Все права защищены.",
            "footer-privacy": "Политика конфиденциальности",
            "footer-terms": "Условия использования"
        },
        en: {
            "nav-services": "Services",
            "nav-about": "About Us",
            "nav-contact": "Contact",
            "nav-team": "Team", // Added for navigation
            "header-search-placeholder": "Search the site...",
            "header-search-button": "Search",
            "hero-title": "Your Protection in the World of Law",
            "hero-text": "We offer comprehensive legal solutions for businesses and individuals.",
            "hero-button": "Our Services",
            "services-title": "Our Services",
            "service-consultation-title": "Legal Consultations",
            "service-consultation-text": "Clarifications on complex legal issues, document analysis.",
            "service-business-title": "Business Support",
            "service-business-text": "Registration, reorganization, contract work, protection of interests.",
            "service-disputes-title": "Litigation",
            "service-disputes-text": "Representation in courts of all instances, defense of rights.",
            "service-real-estate-title": "Real Estate",
            "service-real-estate-text": "Transaction support, rights registration, dispute resolution.",
            "about-title": "About \"Legal Alliance\"",
            "about-text-1": "We are a team of experienced lawyers with many years of practice in various fields of law. Our mission is to provide every client with a fair and effective resolution of their legal issues. We value our clients' trust and strive for maximum transparency and efficiency in every case.",
            "about-text-2": "Our company is founded on the principles of professionalism, honesty, and responsibility. We continuously improve our knowledge and skills to meet the highest standards of legal practice.",
            "about-site-title": "Our Website",
            "about-site-text-1": "We have developed our website to provide you with convenient access to information and services. Our site features a modern and responsive design, using an elegant combination of <strong>dark blue</strong> (primary), <strong>golden yellow</strong> (accent), and light tones for comfortable perception.",
            "about-site-text-2": "The website implements the following functions for your convenience:",
            "about-site-list-item-1": "<strong>Search:</strong> Quickly find the information you need on the site.",
            "about-site-list-item-2": "<strong>Newsletter Subscription:</strong> Stay updated on the latest legislative changes and company news.",
            "about-site-list-item-3": "<strong>Feedback Form:</strong> Easily contact us via the convenient form on the website.",
            "about-site-list-item-4": "<strong>Responsiveness:</strong> The site displays correctly on all devices – from desktops to smartphones.",
            "about-site-list-item-5": "<strong>Navigation:</strong> Intuitive menu and smooth scrolling to sections.",
            "team-title": "Our Team",
            "team-ivan-name": "Ivan P. Petrov",
            "team-ivan-role": "Senior Lawyer",
            "team-ivan-contact": "Contact",
            "team-anna-name": "Anna S. Sidirova",
            "team-anna-role": "Lead Lawyer",
            "team-anna-contact": "Contact",
            "team-sergey-name": "Sergey N. Kuznetsov",
            "team-sergey-role": "Lawyer",
            "team-sergey-contact": "Contact",
            "contact-title": "Contact & Feedback",
            "contact-address-title": "Address:",
            "contact-address-text": "15 Pravovaya St., Office 301, Moscow, Russia",
            "contact-phone-title": "Phone:",
            "contact-phone-link": "+7 (916) 748-00-40", // Используем тот же номер, что и в русском
            "contact-email-title": "Email:",
            "contact-email-link": "artem.terehov738@mail.ru", // Email может остаться тем же
            "contact-form-title": "Send us a message",
            "contact-form-name-label": "Your Name:",
            "contact-form-email-label": "Your Email:",
            "contact-form-message-label": "Message:",
            "contact-form-submit-btn": "Send",
            "newsletter-title": "Newsletter Subscription",
            "newsletter-text": "Receive up-to-date information on legislation and our special offers.",
            "newsletter-placeholder": "Enter your Email",
            "newsletter-button": "Subscribe",
            "footer-copyright": "&copy; 2025 Legal Alliance. All rights reserved.",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms of Use"
        }
    };

    let currentLang = 'ru'; // Язык по умолчанию

    function setLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-lang]');

        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key] !== undefined) {
                element.innerHTML = translations[lang][key];
            } else {
                // Опционально: Если перевод не найден, можно оставить оригинальный текст или вывести сообщение
                // console.warn(`Translation for key "${key}" not found for language "${lang}"`);
            }
        });

        document.documentElement.lang = lang; // Обновляем атрибут lang у тега html

        document.querySelectorAll('.lang-btn').forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active-lang');
            } else {
                button.classList.remove('active-lang');
            }
        });

        localStorage.setItem('siteLanguage', lang); // Сохраняем выбор в localStorage
    }

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Инициализация: загружаем язык по умолчанию или из localStorage
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage(currentLang); // Загружаем русский язык по умолчанию
    }


    // ---------------------------------------------------------
    // 2. ДРУГИЕ ФУНКЦИИ (ПОИСК, ПОДПИСКА, ОБРАТНАЯ СВЯЗЬ, ПРОКРУТКА)
    // ---------------------------------------------------------

    // --- Поиск ---
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                // Адаптируем сообщение об ошибке для поиска под текущий язык
                const searchAlertMsg = currentLang === 'en'
                    ? `Searching for: "${query}"\n(Real search functionality requires server-side implementation or complex client-side logic.)`
                    : `Поиск по запросу: "${query}"\n(Реальная функция поиска требует серверной части или сложной клиентской логики.)`;
                alert(searchAlertMsg);
            } else {
                const noQueryAlertMsg = currentLang === 'en'
                    ? "Please enter a search query."
                    : "Введите запрос для поиска.";
                alert(noQueryAlertMsg);
            }
        });

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                searchButton.click();
            }
        });
    }

    // --- Подписка на новости ---
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmailInput = document.getElementById('newsletterEmail');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = newsletterEmailInput.value.trim();

            if (email && email.includes('@')) {
                const successAlertMsg = currentLang === 'en'
                    ? `Thank you for subscribing! Your email: ${email} has been added.`
                    : `Спасибо за подписку! Ваш email: ${email} добавлен.`;
                alert(successAlertMsg);
                newsletterEmailInput.value = '';
            } else {
                const invalidEmailAlertMsg = currentLang === 'en'
                    ? "Please enter a valid email address."
                    : "Пожалуйста, введите корректный email.";
                alert(invalidEmailAlertMsg);
            }
        });
    }

    // --- Обратная связь ---
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackNameInput = document.getElementById('name');
    const feedbackEmailInput = document.getElementById('email');
    const feedbackMessageTextarea = document.getElementById('message');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = feedbackNameInput.value.trim();
            const email = feedbackEmailInput.value.trim();
            const message = feedbackMessageTextarea.value.trim();

            if (name && email && email.includes('@') && message) {
                const successAlertMsg = currentLang === 'en'
                    ? `Your message has been sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n(Real message sending requires server-side implementation.)`
                    : `Ваше сообщение отправлено!\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}\n(Реальная отправка сообщения требует серверной части.)`;
                alert(successAlertMsg);
                feedbackNameInput.value = '';
                feedbackEmailInput.value = '';
                feedbackMessageTextarea.value = '';
            } else {
                const invalidFormAlertMsg = currentLang === 'en'
                    ? "Please fill in all fields correctly (Email must contain '@')."
                    : "Пожалуйста, заполните все поля корректно (Email должен содержать '@').";
                alert(invalidFormAlertMsg);
            }
        });
    }

    // --- Плавная прокрутка к секциям при клике на ссылки в меню ---
    document.querySelectorAll('.site-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
