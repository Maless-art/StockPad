document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const app = document.getElementById('app');
  const progressBar = document.querySelector('.progress-bar');
  const progressText = document.getElementById('progress-text');
  const message = document.getElementById('splash-message');

  const messages = [
    'Intenta ser mejor cada día',
    'Si crees que puedes, ya tienes el 50% de la meta',
  ];

  let progress = 0;

  const interval = setInterval(() => {
    progress++;

    if (progressBar) progressBar.style.width = progress + '%';
    if (progressText) progressText.textContent = progress + '%';

    if (progress === 1 && message) {
      message.textContent = messages[0];
    }

    if (progress === 50 && message) {
      message.textContent = messages[1];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (splash) splash.style.display = 'none';
        if (app) app.style.display = 'block';
      }, 300);
    }
  }, 40);
});
