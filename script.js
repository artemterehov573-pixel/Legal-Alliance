// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Navigation Active Link Highlighting ---
    // Adds an 'active' class to the navigation link corresponding to the section in view
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        // Adjusting offset for smoother highlighting, especially on mobile
        const scrollOffset = window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - scrollOffset) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Ensure href comparison is robust, especially with fragments
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            } else if (current === '' && link.getAttribute('href') === '#hero') {
                 // Special case for the hero section when at the very top
                 link.classList.add('active');
            }
        });
    });

    // --- Calculator Logic ---
    const calculatorForm = document.getElementById('calculator-form');
    if (calculatorForm) { // Check if calculator section exists on the page
        const hoursInput = document.getElementById('hours');
        const hourlyRateInput = document.getElementById('hourly-rate');
        const resultDiv = document.getElementById('result');

        calculatorForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload

            const hours = parseFloat(hoursInput.value);
            const hourlyRate = parseFloat(hourlyRateInput.value);

            // Input validation
            if (isNaN(hours) || isNaN(hourlyRate) || hours <= 0 || hourlyRate <= 0) {
                resultDiv.textContent = "Ошибка: Введите корректные числовые значения.";
                resultDiv.style.color = 'red';
                resultDiv.style.display = 'block';
                return;
            }

            const totalCost = hours * hourlyRate;

            // Format result in RUB
            const formattedCost = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(totalCost);

            resultDiv.textContent = `Приблизительная стоимость: ${formattedCost}`;
            resultDiv.style.color = '#007bff'; // Bootstrap primary color
            resultDiv.style.display = 'block';
        });
    }

    // --- Add any other JavaScript logic here ---
    // For example, if you have specific JS for hero animations, etc.

});
