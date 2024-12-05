document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            
            const targetId = link.dataset.target; // Получаем id целевого элемента
            const targetElement = document.getElementById(targetId); // Находим элемент по id

            if (targetElement) {
                // Плавная прокрутка к выбранной секции
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Показ кнопки при прокрутке вниз
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Порог отображения кнопки
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Плавная прокрутка в начало страницы
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
