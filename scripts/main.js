// Плавная прокрутка к разделам
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Анимация появления элементов
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.benefit-card, .course-card');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (elementPosition < screenPosition) {
            element.classList.add('animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Модальное окно
const modal = document.getElementById('loginModal');
const btnLogin = document.querySelector('.btn-login');
const closeModal = document.querySelector('.close');

btnLogin.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Валидация формы
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        errorMessage.textContent = 'Все поля обязательны для заполнения.';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'Пожалуйста, введите корректный email.';
    } else {
        errorMessage.textContent = '';
        alert('Вход выполнен успешно!');
        modal.style.display = 'none';
    }
});

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};