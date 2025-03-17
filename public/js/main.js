document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    if (yesButton) {
        yesButton.addEventListener('click', () => {
            window.location.href = 'yes.html';
        });
    }

    if (noButton && window.location.pathname.includes('no5.html')) {
        noButton.addEventListener('click', () => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            noButton.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
}); 