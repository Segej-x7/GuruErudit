(function() {
    // Защита от двойного выполнения
    if (window._supabaseInitialized) {
        console.warn('auth.js уже был выполнен ранее.');
        return;
    }
    window._supabaseInitialized = true;
    
    // ==== КОНФИГУРАЦИЯ SUPABASE - ОБЯЗАТЕЛЬНО ЗАМЕНИТЕ! ====
    const SUPABASE_URL = 'https://your-project-ref.supabase.co';
    const SUPABASE_KEY = 'your-anon-or-service-role-key';
    // ======================================================
    
    console.log('Инициализация Supabase...');
    
    // Инициализация клиента
    let supabase;
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log('Supabase клиент успешно инициализирован');
    } catch (error) {
        console.error('Ошибка инициализации Supabase:', error);
        showError('Ошибка подключения к системе. Пожалуйста, обновите страницу или попробуйте позже.');
        return;
    }
    
    // Сохраняем клиент глобально для других скриптов
    window.supabase = supabase;
    
    // Состояние приложения
    let appState = {
        currentTab: 'register',
        currentView: 'auth',
        registrationStep: 1,
        registrationCode: '',
        isRecoveryMode: false
    };
    
    // Основная функция инициализации
    async function initApp() {
        const appEl = document.getElementById('app');
        if (!appEl) {
            console.error('Элемент #app не найден');
            return;
        }
        
        try {
            // Проверяем токен сброса пароля в URL
            const urlParams = new URLSearchParams(window.location.hash.substring(1));
            const accessToken = urlParams.get('access_token');
            const refreshToken = urlParams.get('refresh_token');
            const type = urlParams.get('type');
            
            if (type === 'recovery' && accessToken) {
                console.log('Обнаружен токен восстановления пароля');
                appState.isRecoveryMode = true;
                await supabase.auth.getSession();
                showResetPasswordForm(appEl);
                return;
            }
            
            // Проверяем текущую сессию
            const { data: { session }, error } = await supabase.auth.getSession();
            
            if (error) {
                console.error('Ошибка при получении сессии:', error);
                showAuthForm(appEl);
                return;
            }
            
            if (session && session.user) {
                sessionStorage.setItem('user_email', session.user.email);
                
                if (appState.isRecoveryMode) {
                    showResetPasswordForm(appEl);
                } else {
                    window.showCourseDashboard();
                }
            } else {
                if (appState.currentView === 'forgot-password') {
                    showForgotPasswordForm(appEl);
                } else {
                    showAuthForm(appEl);
                }
            }
        } catch (error) {
            console.error('Критическая ошибка в initApp:', error);
            showErrorPage(appEl, error.message || 'Неизвестная ошибка');
        }
    }
    
    // ВАЖНО: Восстанавливаем оригинальные функции из вашего исходного кода
    
    function showAuthForm(container, errorMessage = '', successMessage = '') {
        appState.currentView = 'auth';
        appState.isRecoveryMode = false;
        
        container.innerHTML = `
            <div class="login-page">
                <div class="login-container">
                    <div class="login-header">
                        <h1><i class="fas fa-warehouse"></i> Профессиональные закупки в Китае!</h1>
                        <p>Полный практический курс по работе с поставщиками из Китая</p>
                    </div>
                    
                    <div class="course-promo">
                        <div class="promo-content">
                            <div class="promo-video">
                                <div class="video-container">
                                    <div class="video-preview" id="video-preview" onclick="playVKVideo()">
                                        <img src="images/video-preview.jpg" alt="Превью видео курса" class="preview-image">
                                        <div class="play-button-overlay">
                                            <button class="play-button" aria-label="Запустить видео">
                                                <i class="fas fa-play-circle"></i>
                                            </button>
                                            <p class="play-text">Нажмите для просмотра видео</p>
                                        </div>
                                    </div>
                                    <div id="vk-video-player-container" style="display: none;"></div>
                                </div>
                                
                                <div class="partner-section-desktop">
                                    <h4><i class="fas fa-handshake"></i> Партнерская программа</h4>
                                    <p>Зарабатывайте 50% с каждой продажи по вашей ссылке</p>
                                    <button onclick="window.open('partners/index.html', '_blank')" class="partner-btn">
                                        <i class="fas fa-star"></i> Стать партнером
                                    </button>
                                </div>
                            </div>
                            
                            <div class="promo-text">
                                <h3><i class="fas fa-crown"></i> Эксклюзивный курс для начинающих и опытных закупщиков!</h3>
                                
                                <div class="promo-features">
                                    <div class="feature">
                                        <i class="fas fa-check-circle"></i>
                                        <span>Полный цикл закупок от А до Я</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check-circle"></i>
                                        <span>Работа с поставщиками без посредников</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check-circle"></i>
                                        <span>Финансовые расчеты и логистика</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check-circle"></i>
                                        <span>Переговоры с китайскими фабриками</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-check-circle"></i>
                                        <span>Практические кейсы и шаблоны</span>
                                    </div>
                                </div>
                                
                                <div class="price-info">
                                    <div class="original-price">
                                        <span>Обычная цена: <s>10 000 руб.</s></span>
                                    </div>
                                    <div class="discount">
                                        <span class="discount-badge">СКИДКА 70%</span>
                                    </div>
                                    <div class="final-price">
                                        <h3>Всего: <span class="price">3 000 руб.</span></h3>
                                        <p>Полный пожизненный доступ ко всем материалам</p>
                                    </div>
                                    
                                    <button onclick="showPaymentForm()" class="buy-course-btn">
                                        <i class="fas fa-shopping-cart"></i> Купить курс
                                    </button>
                                    
                                    <div class="partner-section-mobile">
                                        <h4><i class="fas fa-handshake"></i> Партнерская программа</h4>
                                        <p>Зарабатывайте 50% с каждой продажи по вашей ссылке</p>
                                        <button onclick="window.open('partners/index.html', '_blank')" class="partner-btn">
                                            <i class="fas fa-star"></i> Стать партнером
                                        </button>
                                    </div>
                                    
                                    <div class="payment-info">
                                        <p><i class="fas fa-shield-alt"></i> Гарантия возврата средств в течение 14 дней</p>
                                        <p><i class="fas fa-lock"></i> Безопасная оплата через защищенное соединение</p>
                                    </div>
                                </div>
                                
                                <div class="promo-footer">
                                    <p><i class="fas fa-star"></i> Регистрация через код доступа, который вы получите после оплаты</p>
                                    <p><i class="fas fa-shield-alt"></i> Гарантия возврата средств в течение 14 дней</p>
                                    <p><i class="fas fa-address-card"></i> <a href="#" onclick="openContacts(); return false;" class="form-link" style="color: var(--primary-color); text-decoration: none; font-weight: 500;">Контактная информация</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="auth-container">
                        <div class="tab-switcher">
                            <button class="tab ${appState.currentTab === 'register' ? 'active' : ''}" 
                                    onclick="switchTab('register')">
                                Регистрация
                            </button>
                            <button class="tab ${appState.currentTab === 'login' ? 'active' : ''}" 
                                    onclick="switchTab('login')">
                                Вход
                            </button>
                        </div>
                        
                        ${errorMessage ? `<div class="auth-message error">${errorMessage}</div>` : ''}
                        ${successMessage ? `<div class="auth-message success">${successMessage}</div>` : ''}
                        
                        <!-- Форма регистрации -->
                        <div id="register-form" class="form-container ${appState.currentTab === 'register' ? 'active' : ''}">
                            <div class="step-indicator">
                                <div class="step ${appState.registrationStep >= 1 ? 'active' : ''}">1</div>
                                <div class="step ${appState.registrationStep >= 2 ? 'active' : ''}">2</div>
                            </div>
                            
                            ${appState.registrationStep === 1 ? `
                                <div class="form-header">
                                    <h3><i class="fas fa-key"></i> Шаг 1: Введите код доступа</h3>
                                    <p class="form-subtitle">Код вы получаете после оплаты курса</p>
                                </div>
                                
                                <div class="auth-form">
                                    <input type="text" 
                                           id="reg-code" 
                                           placeholder="Введите код доступа" 
                                           value="${appState.registrationCode}"
                                           class="form-input"
                                           style="text-transform: uppercase;">
                                    
                                    <div class="info-box">
                                        <i class="fas fa-info-circle"></i>
                                        <div>
                                            <strong>Как получить код?</strong><br>
                                            1. Оплатите курс 3000 руб.<br>
                                            2. Получите код на email<br>
                                            3. Введите код ниже и создайте аккаунт<br>
                                            <a href="#" class="form-link">Инструкция по оплате</a>
                                        </div>
                                    </div>
                                    
                                    <button onclick="checkRegistrationCode()" class="btn-login" id="check-code-btn">
                                        <i class="fas fa-check-circle"></i> Проверить код
                                    </button>
                                    
                                    <div class="form-footer">
                                        Уже есть аккаунт? <a href="javascript:void(0)" onclick="switchTab('login')" class="form-link">Войти</a>
                                        <div style="margin-top: 10px;">
                                            <a href="#" onclick="openContacts(); return false;" class="form-link"><i class="fas fa-address-card"></i> Контактная информация</a>
                                        </div>
                                    </div>
                                </div>
                            ` : `
                                <div class="form-header">
                                    <h3><i class="fas fa-user-plus"></i> Шаг 2: Создание аккаунта</h3>
                                    <p class="form-subtitle">Код доступа подтвержден. Создайте свой аккаунт</p>
                                </div>
                                
                                <div class="auth-form">
                                    <input type="email" 
                                           id="reg-email" 
                                           placeholder="Email" 
                                           value=""
                                           class="form-input">
                                    
                                    <input type="password" 
                                           id="reg-password" 
                                           placeholder="Пароль (минимум 6 символов)"
                                           class="form-input">
                                    
                                    <input type="password" 
                                           id="reg-confirm-password" 
                                           placeholder="Подтвердите пароль"
                                           class="form-input">
                                    
                                    <div class="terms-checkbox">
                                        <input type="checkbox" id="reg-terms" class="checkbox-input">
                                        <label for="reg-terms" class="checkbox-label">
                                            Я согласен с <a href="#" class="form-link">условиями использования</a>
                                        </label>
                                    </div>
                                    
                                    <button onclick="completeRegistration()" class="btn-login" id="complete-reg-btn">
                                        <i class="fas fa-user-plus"></i> Зарегистрироваться
                                    </button>
                                    
                                    <button onclick="goBackToStep1()" class="btn-login btn-secondary">
                                        <i class="fas fa-arrow-left"></i> Назад к проверке кода
                                    </button>
                                    
                                    <div class="form-footer">
                                        <a href="#" onclick="openContacts(); return false;" class="form-link"><i class="fas fa-address-card"></i> Контактная информация</a>
                                    </div>
                                </div>
                            `}
                        </div>
                        
                        <!-- Форма входа -->
                        <div id="login-form" class="form-container ${appState.currentTab === 'login' ? 'active' : ''}">
                            <div class="form-header">
                                <h3><i class="fas fa-sign-in-alt"></i> Вход в систему</h3>
                                <p class="form-subtitle">Введите email и пароль</p>
                            </div>
                            
                            <div class="auth-form">
                                <input type="email" 
                                       id="login-email" 
                                       placeholder="Email" 
                                       value=""
                                       class="form-input">
                                
                                <input type="password" 
                                       id="login-password" 
                                       placeholder="Пароль"
                                       class="form-input">
                                
                                <button onclick="handleLogin()" class="btn-login" id="login-btn">
                                    <i class="fas fa-sign-in-alt"></i> Войти
                                </button>
                                
                                <div class="form-footer">
                                    <a href="javascript:void(0)" onclick="showForgotPassword()" class="form-link">
                                        <i class="fas fa-key"></i> Забыли пароль?
                                    </a>
                                </div>
                                
                                <div class="form-footer">
                                    Нет аккаунта? <a href="javascript:void(0)" onclick="switchTab('register')" class="form-link">Зарегистрироваться</a>
                                </div>
                                
                                <div class="form-footer">
                                    <a href="#" onclick="openContacts(); return false;" class="form-link"><i class="fas fa-address-card"></i> Контактная информация</a>
                                </div>
                            </div>
                        </div>
                        
                        <div id="message" class="auth-message" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function showForgotPasswordForm(container, errorMessage = '', successMessage = '') {
        appState.currentView = 'forgot-password';
        
        container.innerHTML = `
            <div class="login-page">
                <div class="login-container">
                    <div class="login-header">
                        <h1><i class="fas fa-warehouse"></i> Восстановление пароля</h1>
                        <p>Профессиональные закупки в Китае</p>
                    </div>
                    
                    <div class="auth-container">
                        <div class="form-header">
                            <h3><i class="fas fa-key"></i> Восстановление доступа</h3>
                            <p class="form-subtitle">Введите email, указанный при регистрации</p>
                        </div>
                        
                        ${errorMessage ? `<div class="auth-message error">${errorMessage}</div>` : ''}
                        ${successMessage ? `<div class="auth-message success">${successMessage}</div>` : ''}
                        
                        <div class="auth-form">
                            <input type="email" 
                                   id="forgot-email" 
                                   placeholder="Ваш email" 
                                   value=""
                                   class="form-input">
                            
                            <button onclick="sendPasswordResetEmail()" class="btn-login" id="send-reset-btn">
                                <i class="fas fa-paper-plane"></i> Отправить инструкции
                            </button>
                            
                            <button onclick="goBackToAuth()" class="btn-login btn-secondary">
                                <i class="fas fa-arrow-left"></i> Назад ко входу
                            </button>
                            
                            <div class="form-footer" style="margin-top: 15px;">
                                <a href="#" onclick="openContacts(); return false;" class="form-link"><i class="fas fa-address-card"></i> Контактная информация</a>
                            </div>
                        </div>
                        
                        <div class="info-box">
                            <i class="fas fa-info-circle"></i>
                            <div>
                                <strong>Что произойдет дальше:</strong><br>
                                1. Вы получите письмо со ссылкой для сброса пароля<br>
                                2. Перейдите по ссылке из письма<br>
                                3. Установите новый пароль для вашего аккаунта<br>
                                4. Войдите с новым паролем
                            </div>
                        </div>
                        
                        <div id="message" class="auth-message" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function showResetPasswordForm(container, errorMessage = '', successMessage = '') {
        appState.currentView = 'reset-password';
        
        container.innerHTML = `
            <div class="login-page">
                <div class="login-container">
                    <div class="login-header">
                        <h1><i class="fas fa-warehouse"></i> Установка нового пароля</h1>
                        <p>Профессиональные закупки в Китае</p>
                    </div>
                    
                    <div class="auth-container">
                        <div class="form-header">
                            <h3><i class="fas fa-lock"></i> Новый пароль</h3>
                            <p class="form-subtitle">Введите новый пароль для вашего аккаунта</p>
                        </div>
                        
                        ${errorMessage ? `<div class="auth-message error">${errorMessage}</div>` : ''}
                        ${successMessage ? `<div class="auth-message success">${successMessage}</div>` : ''}
                        
                        <div class="auth-form">
                            <input type="password" 
                                   id="reset-new-password" 
                                   placeholder="Новый пароль (минимум 6 символов)"
                                   class="form-input">
                            
                            <input type="password" 
                                   id="reset-confirm-password" 
                                   placeholder="Подтвердите новый пароль"
                                   class="form-input">
                            
                            <button onclick="resetPassword()" class="btn-login" id="reset-password-btn">
                                <i class="fas fa-save"></i> Установить новый пароль
                            </button>
                            
                            <button onclick="cancelResetPassword()" class="btn-login btn-secondary">
                                <i class="fas fa-times"></i> Отмена
                            </button>
                            
                            <div class="form-footer" style="margin-top: 15px;">
                                <a href="#" onclick="openContacts(); return false;" class="form-link"><i class="fas fa-address-card"></i> Контактная информация</a>
                            </div>
                        </div>
                        
                        <div class="info-box">
                            <i class="fas fa-info-circle"></i>
                            <div>
                                <strong>Требования к паролю:</strong><br>
                                • Минимум 6 символов<br>
                                • Рекомендуем использовать заглавные и строчные буквы<br>
                                • Добавьте цифры и специальные символы для безопасности
                            </div>
                        </div>
                        
                        <div id="message" class="auth-message" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function showErrorPage(container, errorMessage) {
        container.innerHTML = `
            <div class="login-page">
                <div class="login-container">
                    <div class="error-page">
                        <div class="error-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h2>Ошибка загрузки</h2>
                        <p class="error-description">${errorMessage}</p>
                        <button onclick="window.location.reload()" class="btn-login">
                            <i class="fas fa-redo"></i> Перезагрузить страницу
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    function showError(message) {
        const appEl = document.getElementById('app');
        if (appEl) {
            showErrorPage(appEl, message);
        }
    }
    
    // Глобальные обработчики (ВОССТАНАВЛИВАЕМ ВСЕ!)
    window.switchTab = (tabName) => {
        appState.currentTab = tabName;
        appState.registrationStep = 1;
        appState.isRecoveryMode = false;
        initApp();
    };
    
    window.goBackToStep1 = () => {
        appState.registrationStep = 1;
        initApp();
    };
    
    window.showForgotPassword = () => {
        appState.currentView = 'forgot-password';
        initApp();
    };
    
    window.goBackToAuth = () => {
        appState.currentView = 'auth';
        appState.currentTab = 'login';
        appState.isRecoveryMode = false;
        window.history.replaceState(null, '', window.location.pathname);
        initApp();
    };
    
    window.cancelResetPassword = async () => {
        try {
            await supabase.auth.signOut({ scope: 'local' });
        } catch (error) {
            console.log('Ошибка при выходе:', error);
        }
        
        appState.isRecoveryMode = false;
        window.history.replaceState(null, '', window.location.pathname);
        goBackToAuth();
    };
    
    window.checkRegistrationCode = async () => {
        const codeInput = document.getElementById('reg-code');
        const button = document.getElementById('check-code-btn');
        
        if (!codeInput || !button) return;
        
        const code = codeInput.value.trim().toUpperCase();
        
        if (!code) {
            showMessage('❌ Введите код доступа', 'error');
            return;
        }
        
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Проверка...';
        
        showMessage('⏳ Проверяем код доступа...', 'loading');
        
        try {
            const { data, error } = await supabase
                .from('registration_codes')
                .select('*')
                .eq('code', code)
                .single();
            
            if (error) {
                if (error.code === 'PGRST116') {
                    showMessage('❌ Код не найден', 'error');
                } else {
                    showMessage('❌ Ошибка проверки кода', 'error');
                }
                return;
            }
            
            if (!data) {
                showMessage('❌ Код не найден', 'error');
                return;
            }
            
            if (data.is_used) {
                showMessage('❌ Этот код уже был использован', 'error');
                return;
            }
            
            appState.registrationCode = code;
            appState.registrationStep = 2;
            sessionStorage.setItem('pending_registration_code', code);
            
            showMessage('✅ Код подтвержден! Теперь создайте аккаунт', 'success');
            
            setTimeout(() => {
                initApp();
            }, 1000);
            
        } catch (error) {
            console.error('Ошибка проверки кода:', error);
            showMessage(`❌ Ошибка проверки: ${error.message}`, 'error');
        } finally {
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-check-circle"></i> Проверить код';
        }
    };
    
    window.completeRegistration = async () => {
        const email = document.getElementById('reg-email')?.value.trim();
        const password = document.getElementById('reg-password')?.value;
        const confirmPassword = document.getElementById('reg-confirm-password')?.value;
        const termsAccepted = document.getElementById('reg-terms')?.checked;
        const button = document.getElementById('complete-reg-btn');
        
        if (!button) return;
        
        if (!email || !password || !confirmPassword) {
            showMessage('❌ Заполните все поля', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('❌ Введите корректный email', 'error');
            return;
        }
        
        if (password.length < 6) {
            showMessage('❌ Пароль должен быть не менее 6 символов', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showMessage('❌ Пароли не совпадают', 'error');
            return;
        }
        
        if (!termsAccepted) {
            showMessage('❌ Необходимо принять условия использования', 'error');
            return;
        }
        
        const registrationCode = appState.registrationCode || 
                               sessionStorage.getItem('pending_registration_code');
        
        if (!registrationCode) {
            showMessage('❌ Код доступа не найден. Начните регистрацию заново', 'error');
            appState.registrationStep = 1;
            setTimeout(() => initApp(), 2000);
            return;
        }
        
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Регистрация...';
        
        showMessage('⏳ Создаем аккаунт...', 'loading');
        
        try {
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: window.location.origin,
                    data: {
                        registration_code: registrationCode
                    }
                }
            });
            
            if (signUpError) {
                if (signUpError.message.includes('User already registered')) {
                    showMessage('❌ Пользователь с таким email уже существует', 'error');
                } else {
                    throw signUpError;
                }
                return;
            }
            
            if (!signUpData.user) {
                throw new Error('Пользователь не создан');
            }
            
            const updateFields = {
                is_used: true,
                used_at: new Date().toISOString(),
                used_by: signUpData.user.id
            };
            
            const { error: updateError } = await supabase
                .from('registration_codes')
                .update(updateFields)
                .eq('code', registrationCode);
            
            if (updateError) {
                console.error('Ошибка обновления кода:', updateError);
                throw new Error(`Ошибка обновления кода: ${updateError.message}`);
            }
            
            sessionStorage.removeItem('pending_registration_code');
            
            const requiresEmailConfirmation = signUpData.user && 
                                            (signUpData.user.identities?.length === 0 || 
                                             !signUpData.user.email_confirmed_at);
            
            if (requiresEmailConfirmation) {
                showMessage('✉️ Регистрация успешна! Проверьте email для подтверждения', 'info');
                appState.registrationStep = 1;
                appState.registrationCode = '';
                setTimeout(() => {
                    switchTab('login');
                }, 3000);
                return;
            }
            
            showMessage('✅ Регистрация успешна! Выполняется вход...', 'success');
            
            try {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });
                
                if (signInError) {
                    if (signInError.message.includes('Email not confirmed')) {
                        showMessage('✉️ Регистрация успешна! Проверьте email для подтверждения', 'info');
                    } else {
                        showMessage('✅ Регистрация успешна! Теперь войдите в систему', 'success');
                    }
                    appState.registrationStep = 1;
                    appState.registrationCode = '';
                    setTimeout(() => {
                        switchTab('login');
                    }, 2000);
                    return;
                }
                
                sessionStorage.setItem('user_email', email);
                
                showMessage('✅ Регистрация и вход успешны!', 'success');
                setTimeout(() => {
                    window.showCourseDashboard();
                }, 1500);
                
            } catch (signInError) {
                showMessage('✅ Регистрация успешна! Теперь войдите в систему', 'success');
                appState.registrationStep = 1;
                appState.registrationCode = '';
                setTimeout(() => {
                    switchTab('login');
                }, 2000);
            }
            
        } catch (error) {
            console.error('❌ Ошибка регистрации:', error);
            
            let errorMessage = error.message;
            if (errorMessage.includes('уже был использован')) {
                errorMessage = '❌ Этот код доступа уже был использован другим пользователем.';
            } else if (errorMessage.includes('Код не найден')) {
                errorMessage = '❌ Код доступа не найден. Возможно, он уже был использован.';
            } else {
                errorMessage = `❌ ${errorMessage}`;
            }
            
            showMessage(errorMessage, 'error');
            
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-user-plus"></i> Зарегистрироваться';
        }
    };
    
    window.handleLogin = async () => {
        const email = document.getElementById('login-email')?.value.trim();
        const password = document.getElementById('login-password')?.value;
        const button = document.getElementById('login-btn');
        
        if (!email || !password) {
            showMessage('❌ Введите email и пароль', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('❌ Введите корректный email', 'error');
            return;
        }
        
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Вход...';
        }
        
        showMessage('⏳ Выполняется вход...', 'loading');
        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            
            if (error) {
                throw error;
            }
            
            sessionStorage.setItem('user_email', email);
            
            showMessage('✅ Успешный вход!', 'success');
            setTimeout(() => {
                window.showCourseDashboard();
            }, 1000);
            
        } catch (error) {
            console.error('Ошибка входа:', error);
            
            let errorMsg = 'Ошибка при входе';
            if (error.message.includes('Invalid login credentials')) {
                errorMsg = 'Неверный email или пароль';
            } else if (error.message.includes('Email not confirmed')) {
                errorMsg = 'Подтвердите email перед входом (проверьте почту)';
            } else {
                errorMsg = error.message || 'Ошибка при входе';
            }
            
            showMessage(`❌ ${errorMsg}`, 'error');
            
            if (button) {
                button.disabled = false;
                button.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти';
            }
        }
    };
    
    window.sendPasswordResetEmail = async () => {
        const email = document.getElementById('forgot-email')?.value.trim();
        const button = document.getElementById('send-reset-btn');
        
        if (!email) {
            showMessage('❌ Введите email', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('❌ Введите корректный email', 'error');
            return;
        }
        
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        }
        
        showMessage('⏳ Отправляем инструкции...', 'loading');
        
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin
            });
            
            if (error) {
                throw error;
            }
            
            showMessage('✅ Инструкции по восстановлению пароля отправлены на email!', 'success');
            showMessage('📧 Проверьте вашу почту и перейдите по ссылке в письме.', 'info');
            
            setTimeout(() => {
                const messageEl = document.getElementById('message');
                if (messageEl) {
                    messageEl.innerHTML += `
                        <div style="margin-top: 15px; text-align: center;">
                            <button onclick="goBackToAuth()" class="btn-login" style="padding: 10px 20px;">
                                <i class="fas fa-arrow-left"></i> Вернуться на страницу входа
                            </button>
                        </div>
                    `;
                }
            }, 2000);
            
        } catch (error) {
            console.error('Ошибка при отправке email:', error);
            
            let errorMsg = 'Ошибка при отправке инструкций';
            if (error.message.includes('User not found')) {
                errorMsg = 'Пользователь с таким email не найден';
            } else if (error.message.includes('rate limit')) {
                errorMsg = 'Слишком много запросов. Попробуйте позже';
            } else {
                errorMsg = error.message || 'Ошибка при отправке инструкций';
            }
            
            showMessage(`❌ ${errorMsg}`, 'error');
            
            if (button) {
                button.disabled = false;
                button.innerHTML = '<i class="fas fa-paper-plane"></i> Отправить инструкции';
            }
        }
    };
    
    window.resetPassword = async () => {
        const newPassword = document.getElementById('reset-new-password')?.value;
        const confirmPassword = document.getElementById('reset-confirm-password')?.value;
        const button = document.getElementById('reset-password-btn');
        
        if (!newPassword || !confirmPassword) {
            showMessage('❌ Заполните все поля', 'error');
            return;
        }
        
        if (newPassword.length < 6) {
            showMessage('❌ Пароль должен быть не менее 6 символов', 'error');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            showMessage('❌ Пароли не совпадают', 'error');
            return;
        }
        
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Обновление...';
        }
        
        showMessage('⏳ Обновляем пароль...', 'loading');
        
        try {
            const { data, error } = await supabase.auth.updateUser({
                password: newPassword
            });
            
            if (error) {
                throw error;
            }
            
            appState.isRecoveryMode = false;
            window.history.replaceState(null, '', window.location.pathname);
            
            showMessage('✅ Пароль успешно обновлен!', 'success');
            showMessage('Теперь вы можете войти в систему с новым парольем.', 'info');
            
            setTimeout(async () => {
                try {
                    await supabase.auth.signOut({ scope: 'local' });
                    
                    showMessage('🔑 Теперь войдите с новым парольем...', 'info');
                    
                    setTimeout(() => {
                        goBackToAuth();
                    }, 2000);
                    
                } catch (signOutError) {
                    setTimeout(() => goBackToAuth(), 2000);
                }
            }, 2000);
            
        } catch (error) {
            console.error('Ошибка при сбросе пароля:', error);
            
            let errorMsg = 'Ошибка при обновлении пароля';
            if (error.message.includes('Auth session missing')) {
                errorMsg = 'Ссылка для сброса пароля устарела или недействительна';
                showMessage('❌ Ссылка устарела. Запросите новую.', 'error');
                setTimeout(() => goBackToAuth(), 3000);
            } else if (error.message.includes('Password should be different')) {
                errorMsg = 'Новый пароль должен отличаться от старого';
            } else {
                errorMsg = error.message || 'Ошибка при обновлении пароля';
            }
            
            showMessage(`❌ ${errorMsg}`, 'error');
            
            if (button) {
                button.disabled = false;
                button.innerHTML = '<i class="fas fa-save"></i> Установить новый пароль';
            }
        }
    };
    
    function showMessage(text, type = 'info') {
        const messageEl = document.getElementById('message');
        if (!messageEl) return;
        
        messageEl.innerHTML = text;
        messageEl.className = 'auth-message';
        messageEl.style.display = 'block';
        
        if (type === 'error') {
            messageEl.classList.add('error');
        } else if (type === 'success') {
            messageEl.classList.add('success');
        } else if (type === 'loading') {
            messageEl.classList.add('info');
        } else {
            messageEl.classList.add('info');
        }
    }
    
    window.showCourseDashboard = function() {
        const appEl = document.getElementById('app');
        if (!appEl) return;
        
        const userEmail = sessionStorage.getItem('user_email') || 'Пользователь';
        
        appEl.innerHTML = `
            <div class="course-page">
                <header class="header">
                    <div class="logo">
                        <i class="fas fa-warehouse"></i>
                        <h1>Профессиональные закупки в Китае</h1>
                    </div>
                    <button class="menu-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </header>
                
                <div class="main-container">
                    <nav class="sidebar">
                        <div class="sidebar-nav">
                            <ul>
                                <li><a href="pages/introduction.html"><i class="fas fa-home"></i> Введение</a></li>
                                <li><a href="pages/module1.html"><i class="fas fa-layer-group"></i> Модуль 1: Фундамент</a></li>
                                <li><a href="pages/module2.html"><i class="fas fa-search"></i> Модуль 2: Поставщики</a></li>
                                <li><a href="pages/module3.html"><i class="fas fa-user-friends"></i> Модуль 3: Посредники</a></li>
                                <li><a href="pages/module4.html"><i class="fas fa-shipping-fast"></i> Модуль 4: Финансы и логистика</a></li>
                                <li><a href="pages/module5.html"><i class="fas fa-handshake"></i> Модуль 5: Переговоры</a></li>
                                <li><a href="pages/module6.html"><i class="fas fa-tasks"></i> Модуль 6: Практический кейс</a></li>
                                <li><a href="pages/conclusion.html"><i class="fas fa-flag-checkered"></i> Заключение</a></li>
                                <li><a href="pages/appendices.html"><i class="fas fa-book"></i> Приложения</a></li>
                                <li><a href="#" onclick="openContacts(); return false;"><i class="fas fa-address-card"></i> Контакты</a></li>
                                <li><a href="javascript:void(0)" onclick="signOut()"><i class="fas fa-sign-out-alt"></i> Выйти</a></li>
                            </ul>
                        </div>
                    </nav>
                    
                    <main class="content">
                        <div class="content-header">
                            <h2>Добро пожаловать в курс по закупкам в Китае!</h2>
                            <p>Ваш личный конвейер прибыли начинается здесь</p>
                        </div>
                        
                        <div class="module-content">
                            <div class="lesson">
                                <h3><i class="fas fa-rocket"></i> Вы успешно вошли в систему!</h3>
                                <div class="lesson-content">
                                    <p>Приветствуем вас в профессиональном курсе по закупкам в Китае. Теперь у вас есть доступ ко всем материалам.</p>
                                    
                                    <div class="highlight-box">
                                        <h4><i class="fas fa-check-circle"></i> Что теперь доступно:</h4>
                                        <ul>
                                            <li>Полный доступ ко всем 6 модулям курса</li>
                                            <li>Практические задания и кейсы</li>
                                            <li>Шаблоны и таблицы для расчетов</li>
                                            <li>Видео-уроки и инструкции</li>
                                            <li>Дополнительные материалы в разделе "Приложения"</li>
                                        </ul>
                                    </div>
                                    
                                    <h4><i class="fas fa-play-circle"></i> Как начать обучение:</h4>
                                    <ol>
                                        <li><strong>Начните с "Введения"</strong> - ознакомьтесь с философией курса</li>
                                        <li><strong>Переходите последовательно по модулям</strong> - от 1 до 6</li>
                                        <li><strong>Выполняйте практические задания</strong> - это ключ к успеху</li>
                                        <li><strong>Используйте боковое меню</strong> для навигации между разделами</li>
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="lesson">
                                <h3><i class="fas fa-sitemap"></i> Структура курса</h3>
                                <div class="lesson-content">
                                    <div class="course-structure">
                                        <div class="module-card" onclick="window.location.href='pages/introduction.html'">
                                            <h4><i class="fas fa-home"></i> Введение</h4>
                                            <p>Основные принципы курса и философия обучения</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module1.html'">
                                            <h4><i class="fas fa-layer-group"></i> Модуль 1: Фундамент</h4>
                                            <p>Преодоление страхов и выбор ниши</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module2.html'">
                                            <h4><i class="fas fa-search"></i> Модуль 2: Поставщики</h4>
                                            <p>Где искать и как отличать фабрику от перекупщика</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module3.html'">
                                            <h4><i class="fas fa-user-friends"></i> Модуль 3: Посредники</h4>
                                            <p>Кто они и когда без них не обойтись</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module4.html'">
                                            <h4><i class="fas fa-shipping-fast"></i> Модуль 4: Финансы и логистика</h4>
                                            <p>Оплата, склад и доставка</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module5.html'">
                                            <h4><i class="fas fa-handshake"></i> Модуль 5: Переговоры</h4>
                                            <p>Переговоры, проверка и минимизация рисков</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/module6.html'">
                                            <h4><i class="fas fa-tasks"></i> Модуль 6: Практический кейс</h4>
                                            <p>Первая закупка от А до Я</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/conclusion.html'">
                                            <h4><i class="fas fa-flag-checkered"></i> Заключение</h4>
                                            <p>Итоги и дальнейшие шаги</p>
                                        </div>
                                        
                                        <div class="module-card" onclick="window.location.href='pages/appendices.html'">
                                            <h4><i class="fas fa-book"></i> Приложения</h4>
                                            <p>Дополнительные материалы, шаблоны и таблицы</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="lesson">
                                <h3><i class="fas fa-user-circle"></i> Ваш профиль</h3>
                                <div class="lesson-content">
                                    <div class="profile-header">
                                        <div class="profile-avatar">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div>
                                            <h4 id="user-email-display">${userEmail}</h4>
                                            <p>Доступ ко всем материалам курса</p>
                                        </div>
                                    </div>
                                    
                                    <div class="profile-actions">
                                        <button onclick="window.location.href='pages/introduction.html'" class="btn-primary">
                                            <i class="fas fa-play"></i> Начать обучение
                                        </button>
                                        <button onclick="signOut()" class="btn-secondary">
                                            <i class="fas fa-sign-out-alt"></i> Выйти из системы
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                
                <footer class="footer">
                    <p>Курс по профессиональным закупкам в Китае © 2025</p>
                </footer>
            </div>
        `;
        
        const emailElement = document.getElementById('user-email-display');
        if (emailElement && userEmail) {
            emailElement.textContent = userEmail;
        }
    };
    
    window.showPaymentForm = function() {
        window.open('/payment/index.html', '_blank');
    };
    
    window.openContacts = function() {
        window.open('contacts.html', '_blank');
    };
    
    window.playVKVideo = function() {
        const previewElement = document.getElementById('video-preview');
        const containerElement = document.getElementById('vk-video-player-container');
        
        if (!previewElement || !containerElement) {
            console.error('Не удалось найти элементы для воспроизведения видео.');
            return;
        }
        
        previewElement.style.display = 'none';
        containerElement.style.display = 'block';
        
        containerElement.innerHTML = `
            <iframe 
                src="https://vk.com/video_ext.php?oid=-235077287&id=456239018&hd=2&autoplay=1" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" 
                allowfullscreen
                title="Видео: Почему этот курс уникален?"
                style="border-radius: var(--radius-medium); border: none;">
            </iframe>
        `;
        
        console.log('Плеер VK Video успешно загружен.');
    };
    
    // Глобальная функция выхода
    window.signOut = async function() {
        try {
            await supabase.auth.signOut();
            sessionStorage.removeItem('user_email');
            sessionStorage.removeItem('pending_registration_code');
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Ошибка при выходе:', error);
            window.location.href = 'index.html';
        }
    };
    
    // Настройка слушателя изменений аутентификации
    supabase.auth.onAuthStateChange((event, session) => {
        console.log('Auth state changed:', event);
        
        if (event === 'PASSWORD_RECOVERY') {
            console.log('Событие восстановления пароля обнаружено');
            appState.isRecoveryMode = true;
        }
        
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'PASSWORD_RECOVERY') {
            setTimeout(() => initApp(), 100);
        }
    });
    
    // Запуск при загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM загружен, запускаем приложение...');
        
        const savedCode = sessionStorage.getItem('pending_registration_code');
        if (savedCode) {
            appState.registrationCode = savedCode;
            appState.registrationStep = 2;
        }
        
        initApp();
    });
    
    console.log('auth.js полностью загружен и готов к работе');
    
})();