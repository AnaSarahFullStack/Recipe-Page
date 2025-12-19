// Título muda de cor ao clicar
title.addEventListener('click', function() {
  const colors = ['#ff6b6b', '#667eea', '#764ba2', '#ff8e53', '#4ecdc4'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  this.style.background = randomColor;
});

// Imagens com efeito ao clicar
images.forEach(img => {
  img.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      this.style.transform = 'scale(1.1) rotate(5deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }
  });
});

// Items da lista mudam de cor ao clicar
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
  item.addEventListener('click', function() {
    this.style.color = this.style.color === 'rgb(102, 126, 234)' ? '#555' : '#667eea';
    this.style.fontWeight = this.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });
});