// course-auth.js - Инициализация элементов для ВСЕХ страниц курса
// ПРЕДПОЛАГАЕТ, ЧТО ПРОВЕРКА АВТОРИЗАЦИИ УЖЕ ВЫПОЛНЕНА auth.js

// Глобальная функция выхода (может быть вызвана из кнопки в HTML)
window.handleSignOut = async function() {
    console.log('course-auth.js: Выход из системы...');
    try {
        // Используем глобальный клиент Supabase из auth.js
        if (window.supabase) {
            await window.supabase.auth.signOut();
        }
        // Очищаем сессию и редиректим
        sessionStorage.clear();
        window.location.href = '../index.html';
    } catch (error) {
        console.error('Ошибка при выходе:', error);
        window.location.href = '../index.html';
    }
};

/**
 * Инициализация общих элементов на страницах курса.
 * Эту функцию вызывает auth.js после подтверждения сессии.
 */
window.initCoursePage = function() {
    console.log('course-auth.js: Инициализация элементов страницы курса...');

    // 1. Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        const toggleMenu = function() {
            sidebar.classList.toggle('open');
            menuToggle.innerHTML = sidebar.classList.contains('open') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        };
        
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Закрытие меню при клике на ссылку (мобильные)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                    toggleMenu();
                }
            });
        });
        
        // Закрытие при клике вне меню (мобильные)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Закрытие меню при изменении размера окна
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
                toggleMenu();
            }
        });
    }
    
    // 2. Подсветка активной ссылки в меню
    const currentPage = window.location.pathname.split('/').pop() || 'introduction.html';
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        const linkHref = link.getAttribute('href');
        // Сравниваем имена файлов
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 3. Обработчик кнопки выхода (если она есть на странице)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.handleSignOut();
        });
    }
    
    // 4. Демо-функция для медиа-заглушек (опционально)
    const mediaPlaceholders = document.querySelectorAll('.media-placeholder');
    mediaPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            this.innerHTML = '<p><i class="fas fa-info-circle"></i> Контент в разработке</p>';
            this.style.backgroundColor = '#f0f7ff';
        });
    });
    
    console.log('course-auth.js: Инициализация завершена.');
};

// УБРАН вызов DOMContentLoaded - теперь инициализацию запускает auth.js