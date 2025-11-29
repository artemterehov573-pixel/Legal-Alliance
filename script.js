// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. ЛОГИСТИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ ---
    // ВАЖНО: Этот блок отвечает за мультиязычность.
    // Если вы НЕ используете переключение языков, его можно удалить.
    // Если вы хотите добавить новые языки, вам нужно будет:
    // 1. Добавить новые кнопки с классом 'lang-btn' и атрибутом 'data-lang' (например, data-lang="en").
    // 2. Добавить соответствующие переводы в объект `translations`.
    // 3. Убедиться, что у элементов сайта есть атрибут `data-lang` с правильным ключом.

    const translations = {
        ru: {
            "nav-services": "Услуги",
            "nav-about": "О нас",
            "nav-contact": "Контакты",
            "nav-team": "Команда",
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
            "team-ivan-name": "[Имя Фамилия руководителя]", // Placeholder for actual name
            "team-ivan-role": "Руководитель практики, Адвокат",
            "team-ivan-contact": "Связаться",
            "team-anna-name": "[Имя Фамилия юриста]", // Placeholder for actual name
            "team-anna-role": "Ведущий юрист",
            "team-anna-contact": "Связаться",
            "team-sergey-name": "[Имя Фамилия юриста]", // Placeholder for actual name
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
            "footer-terms": "Условия использования",
            // Переводы для калькулятора
            "calculator-title": "Калькулятор услуг",
            "calculator-service-label": "Тип услуги:",
            "calculator-service-option-1": "Юридическая консультация (1000 руб./час)",
            "calculator-service-option-2": "Составление договора (1500 руб.)",
            "calculator-service-option-3": "Представительство в суде (2500 руб./час)",
            "calculator-service-option-4": "Регистрация бизнеса (800 руб.)",
            "calculator-hours-label": "Количество часов (если применимо):",
            "calculator-result-label": "Итоговая стоимость:",
            "calculator-calculate-btn": "Рассчитать"
        },
        en: {
            "nav-services": "Services",
            "nav-about": "About Us",
            "nav-contact": "Contact",
            "nav-team": "Team",
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
            "team-ivan-name": "[Ivan P. Petrov]", // Placeholder for actual name
            "team-ivan-role": "Senior Lawyer",
            "team-ivan-contact": "Contact",
            "team-anna-name": "[Anna S. Sidirova]", // Placeholder for actual name
            "team-anna-role": "Lead Lawyer",
            "team-anna-contact": "Contact",
            "team-sergey-name": "[Sergey N. Kuznetsov]", // Placeholder for actual name
            "team-sergey-role": "Lawyer",
            "team-sergey-contact": "Contact",
            "contact-title": "Contact & Feedback",
            "contact-address-title": "Address:",
            "contact-address-text": "15 Pravovaya St., Office 301, Moscow, Russia",
            "contact-phone-title": "Phone:",
            "contact-phone-link": "+7 (916) 748-00-40",
            "contact-email-title": "Email:",
            "contact-email-link": "artem.terehov738@mail.ru",
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
            "footer-terms": "Terms of Use",
            // Translations for calculator
            "calculator-title": "Service Calculator",
            "calculator-service-label": "Service Type:",
            "calculator-service-option-1": "Legal Consultation (1000 RUB/hour)",
            "calculator-service-option-2": "Contract Drafting (1500 RUB)",
            "calculator-service-option-3": "Court Representation (2500 RUB/hour)",
            "calculator-service-option-4": "Business Registration (800 RUB)",
            "calculator-hours-label": "Number of hours (if applicable):",
            "calculator-result-label": "Total Cost:",
            "calculator-calculate-btn": "Calculate"
        }
    };

    let currentLang = 'ru'; // Язык по умолчанию

    // Функция для установки языка
    function setLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-lang]'); // Выбираем все элементы с атрибутом data-lang

        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key] !== undefined) {
                element.innerHTML = translations[lang][key]; // Устанавливаем HTML-контент из переводов
            } else {
                // Опционально: Если перевод не найден, можно оставить оригинальный текст или вывести сообщение в консоль
                console.warn(`Translation for key "${key}" not found for language "${lang}"`);
            }
        });

        document.documentElement.lang = lang; // Обновляем атрибут lang у тега html для SEO и доступности

        // Обновляем класс 'active-lang' для кнопок переключения языка
        document.querySelectorAll('.lang-btn').forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active-lang');
            } else {
                button.classList.remove('active-lang');
            }
        });

        localStorage.setItem('siteLanguage', lang); // Сохраняем выбор языка в localStorage, чтобы он сохранился при перезагрузке
    }

    // Добавляем слушатели на кнопки переключения языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Инициализация: загружаем язык при первой загрузке страницы
    const savedLang = localStorage.getItem('siteLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang); // Если язык сохранен, используем его
    } else {
        setLanguage(currentLang); // Иначе используем язык по умолчанию (русский)
    }


    // --- 2. ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ОБРАТНОЙ СВЯЗИ ---
    // Это скрипт для отправки формы contact-form.
    // ВАЖНО: Для реальной отправки вам потребуется бэкенд (например, Netlify Functions, Node.js API, PHP скрипт и т.д.)
    // И URL в fetch нужно будет изменить.

    const subscribeForm = document.getElementById('subscribe-form');
    const formMessageDiv = document.getElementById('form-message');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

            const formData = new FormData(subscribeForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Очищаем предыдущие сообщения и сбрасываем стили
            formMessageDiv.textContent = '';
            formMessageDiv.className = 'form-message';

            try {
                // !!! ЗАМЕНИТЕ '/.netlify/functions/subscribe' НА АКТУАЛЬНЫЙ URL ВАШЕГО API !!!
                // Если вы не используете Netlify Functions, укажите свой endpoint.
                const response = await fetch('/.netlify/functions/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json(); // Ожидаем JSON-ответ от сервера

                if (response.ok) { // Если запрос успешен (код 2xx)
                    formMessageDiv.textContent = result.message || 'Ваш запрос успешно отправлен!';
                    formMessageDiv.classList.add('success');
                    subscribeForm.reset(); // Очищаем поля формы
                } else { // Если произошла ошибка на сервере (код > 299)
                    formMessageDiv.textContent = result.message || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.';
                    formMessageDiv.classList.add('error');
                }
            } catch (error) { // Если произошла сетевая ошибка или другая проблема при выполнении fetch
                console.error('Error sending message:', error);
                formMessageDiv.textContent = 'Произошла непредвиденная ошибка. Пожалуйста, проверьте ваше интернет-соединение или попробуйте позже.';
                formMessageDiv.classList.add('error');
            }
        });
    }

    // --- 3. ЛОГИКА КАЛЬКУЛЯТОРА ---
    const serviceTypeSelect = document.getElementById('service-type');
    const hoursInput = document.getElementById('hours');
    const totalCostSpan = document.getElementById('total-cost');
    const calculateBtn = document.getElementById('calculate-btn');

    // Функция для обновления стоимости
    function updateCost() {
        const selectedService = serviceTypeSelect ? serviceTypeSelect.value : null;
        const hours = hoursInput ? parseInt(hoursInput.value) : 1;

        // Проверяем, существуют ли все нужные элементы
        if (!serviceTypeSelect || !hoursInput || !totalCostSpan || !calculateBtn) {
            console.warn("Calculator elements not found. Skipping updateCost.");
            return;
        }

        if (selectedService && !isNaN(hours) && hours >= 1) {
            const costPerHour = parseInt(selectedService);
            const totalCost = costPerHour * hours;
            totalCostSpan.textContent = totalCost.toLocaleString('ru-RU'); // Форматируем вывод числа
        } else {
            totalCostSpan.textContent = 'N/A'; // Если данные некорректны
        }
    }

    // Добавляем слушатели событий, только если элементы существуют
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', updateCost);
    }

    if (hoursInput) {
        hoursInput.addEventListener('input', updateCost); // Обновляем при каждом вводе
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', updateCost);
    }

    // Инициализация стоимости при загрузке страницы
    if (totalCostSpan) {
        updateCost(); // Вызываем при первой загрузке, чтобы установить начальное значение
    }

    // --- 4. ПЛАВНАЯ ПРОКРУТКА ПО ССЫЛКАМ В МЕНЮ ---
    // Этот скрипт обеспечивает плавную прокрутку при клике на навигационные ссылки.
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Предотвращаем стандартное действие (переход по ссылке)

            const targetId = this.getAttribute('href'); // Получаем ID элемента, на который ведет ссылка
            const targetElement = document.querySelector(targetId); // Находим этот элемент

            if (targetElement) {
                // Плавная прокрутка к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth' // 'smooth' обеспечивает плавную анимацию
                });
            }
        });
    });

});

