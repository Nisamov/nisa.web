window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.85)';
    header.style.boxShadow = '0 0 15px rgba(255,255,255,0.1)';
  } else {
    header.style.background = 'rgba(0,0,0,0.6)';
    header.style.boxShadow = 'none';
  }
});
