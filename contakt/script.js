// script.js - проверка авторизации и инициализация для ВСЕХ страниц курса

document.addEventListener('DOMContentLoaded', async function() {
    console.log('script.js загружен для страницы курса');
    
    // Проверяем, находимся ли мы на странице курса
    if (!document.body.classList.contains('course-page')) {
        console.log('Это не страница курса, пропускаем проверку');
        return;
    }
    
    console.log('Проверка авторизации для курса...');
    
    try {
        // Используем глобальный клиент Supabase из auth.js
        const supabase = window.supabase;
        if (!supabase) {
            console.error('Supabase client не найден!');
            window.location.href = '../index.html';
            return;
        }
        
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
            console.error('Ошибка при получении сессии:', error);
            window.location.href = '../index.html';
            return;
        }
        
        if (!session) {
            console.log('Пользователь не авторизован. Редирект...');
            window.location.href = '../index.html';
            return;
        }
        
        console.log('Доступ к курсу разрешен для:', session.user.email);
        sessionStorage.setItem('user_email', session.user.email);
        
        // Инициализация элементов страницы курса
        initCoursePage();
        
    } catch (error) {
        console.error('Критическая ошибка при проверке авторизации:', error);
        window.location.href = '../index.html';
    }
});

/**
 * Инициализация элементов на страницах курса
 */
function initCoursePage() {
    console.log('Инициализация элементов страницы курса...');
    
    // 1. Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            menuToggle.innerHTML = sidebar.classList.contains('open') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Закрытие меню при клике на ссылку (мобильные)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Закрытие при клике вне меню (мобильные)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && 
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // 2. Подсветка активной ссылки в меню
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 3. Выход из системы
    const logoutBtns = document.querySelectorAll('#logoutBtn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            handleSignOut();
        });
    });
    
    // 4. Демо-функция для медиа-заглушек
    const mediaPlaceholders = document.querySelectorAll('.media-placeholder');
    mediaPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            this.innerHTML = '<p><i class="fas fa-info-circle"></i> Контент в разработке</p>';
            this.style.backgroundColor = '#f0f7ff';
        });
    });
}

/**
 * Функция выхода из системы для страниц курса
 */
async function handleSignOut() {
    try {
        const supabase = window.supabase;
        if (supabase) {
            await supabase.auth.signOut();
        }
        sessionStorage.clear();
        window.location.href = '../index.html';
    } catch (error) {
        console.error('Ошибка при выходе:', error);
        window.location.href = '../index.html';
    }
}