function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
    
    // Скрываем кнопку вниз и контент
    document.querySelector('.down-container').classList.add('hidden');
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('.ost').classList.add('hidden');
    
    // Показываем кнопку вверх после небольшой задержки
    setTimeout(() => {
        document.querySelector('.up-container').classList.remove('hidden');
    }, 500);
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Скрываем кнопку вверх
    document.querySelector('.up-container').classList.add('hidden');
    
    // Показываем кнопку вниз и контент после прокрутки вверх
    setTimeout(() => {
        document.querySelector('.down-container').classList.remove('hidden');
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.ost').classList.remove('hidden');

    }, 1000);
}

// Возвращаем кнопку вниз и контент, когда пользователь вручную прокрутил вверх
window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        document.querySelector('.up-container').classList.add('hidden');
        document.querySelector('.down-container').classList.remove('hidden');
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.ost').classList.remove('hidden');
    }
});