// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Обработка отправки формы ---
    const subscribeForm = document.getElementById('subscribe-form');
    const formMessageDiv = document.getElementById('form-message');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(subscribeForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            formMessageDiv.textContent = '';
            formMessageDiv.className = 'form-message';

            try {
                // !!! ВОТ ОСНОВНОЙ ПУТЬ К ФУНКЦИИ !!!
                const response = await fetch('/.netlify/functions/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    formMessageDiv.textContent = result.message || 'Ваш запрос успешно отправлен!';
                    formMessageDiv.classList.add('success');
                    subscribeForm.reset();
                } else {
                    formMessageDiv.textContent = result.message || 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.';
                    formMessageDiv.classList.add('error');
                }
            } catch (error) {
                console.error('Error sending message:', error);
                formMessageDiv.textContent = 'Произошла непредвиденная ошибка. Пожалуйста, попробуйте позже.';
                formMessageDiv.classList.add('error');
            }
        });
    }

    // --- Логика калькулятора ---
    const serviceTypeSelect = document.getElementById('service-type');
    const hoursInput = document.getElementById('hours');
    const totalCostSpan = document.getElementById('total-cost');
    const calculateBtn = document.getElementById('calculate-btn');

    // Функция для обновления стоимости
    function updateCost() {
        const selectedService = serviceTypeSelect.value;
        const hours = parseInt(hoursInput.value) || 1; // По умолчанию 1 час, если ввод некорректный

        if (selectedService && !isNaN(hours) && hours >= 1) {
            const costPerHour = parseInt(selectedService);
            const totalCost = costPerHour * hours;
            totalCostSpan.textContent = totalCost.toLocaleString('ru-RU'); // Форматируем вывод числа
        } else {
            totalCostSpan.textContent = 'N/A'; // Если данные некорректны
        }
    }

    // Слушатель событий для изменения типа услуги
    if (serviceTypeSelect) {
        serviceTypeSelect.addEventListener('change', updateCost);
    }

    // Слушатель событий для ввода количества часов
    if (hoursInput) {
        hoursInput.addEventListener('input', updateCost); // Обновляем при каждом вводе
    }

    // Слушатель событий для кнопки "Рассчитать" (для случаев, когда пользователь не менял значения, но хочет увидеть результат)
    if (calculateBtn) {
        calculateBtn.addEventListener('click', updateCost);
    }

    // Инициализация стоимости при загрузке страницы
    if (totalCostSpan) {
        updateCost(); // Вызываем при первой загрузке, чтобы установить начальное значение
    }

});

