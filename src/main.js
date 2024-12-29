function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1 + 's';
        starsContainer.appendChild(star);
    }
}

function createFirework() {
    const container = document.querySelector('.container');
    const firework = document.createElement('div');
    firework.className = 'firework';

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    firework.style.left = startX + 'px';
    firework.style.bottom = '0';

    const colors = ['#ff0', '#0ff', '#f0f', '#ff5', '#5ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    firework.style.backgroundColor = color;

    container.appendChild(firework);

    const endX = (Math.random() - 0.5) * 200;
    const endY = Math.random() * (window.innerHeight * 0.6);
    firework.style.setProperty('--endX', endX + 'px');
    firework.style.setProperty('--endY', -endY + 'px');

    firework.style.animation = 'shoot 1s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    firework.addEventListener('animationend', () => {
        explode(parseFloat(firework.style.left), window.innerHeight - endY, color);
        firework.remove();
    });
}

function explode(x, y, color) {
    const particles = 30;
    const container = document.querySelector('.container');

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = color;

        const angle = (i / particles) * Math.PI * 2;
        const velocity = 100 + Math.random() * 50;
        const particleX = Math.cos(angle) * velocity;
        const particleY = Math.sin(angle) * velocity;

        particle.style.setProperty('--x', particleX + 'px');
        particle.style.setProperty('--y', particleY + 'px');

        container.appendChild(particle);

        particle.style.animation = 'particle 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        particle.addEventListener('animationend', () => particle.remove());
    }
}

createStars();

setInterval(createFirework, 800);

window.addEventListener('resize', () => {
    document.querySelector('.stars').innerHTML = '';
    document.querySelectorAll('.firework, .particle').forEach(el => el.remove());
    createStars();
});
