// Плавный скролл по ссылкам меню
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Музыка
const music = document.getElementById('wedding-music');
const toggleBtn = document.getElementById('music-toggle');

if (music && toggleBtn) {
    let isPlaying = false;

    toggleBtn.addEventListener('click', async () => {
        try {
            if (!isPlaying) {
                await music.play();
                isPlaying = true;
                toggleBtn.textContent = 'Выключить музыку';
                toggleBtn.classList.add('playing');
            } else {
                music.pause();
                isPlaying = false;
                toggleBtn.textContent = 'Включить музыку';
                toggleBtn.classList.remove('playing');
            }
        } catch (err) {
            console.error('Ошибка воспроизведения музыки', err);
        }
    });
}
