const downloadCheckbox = document.getElementById('download');
const downloadLink = document.getElementById('downloadLink');
const wrapper = document.getElementById('page-wrapper');
const whatsappBtn = document.querySelector('.whatsapp-btn');
const whatsappModal = document.getElementById('whatsappModal');
const closeModal = document.querySelector('.close-modal');
const splash = document.getElementById('splash');

downloadCheckbox.addEventListener('change', () => {
  if (downloadCheckbox.checked) {
    downloadLink.click();
  }
});

window.addEventListener('load', () => {


  setTimeout(() => {
    splash.classList.add('slide-up');
    setTimeout(() => {
      splash.style.display = 'none';
      wrapper.classList.add('zoom-in');
    }, 1000); 
  }, 2000); 
});

whatsappBtn.addEventListener('click', (e) => {
  e.preventDefault();
  whatsappModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
  whatsappModal.classList.remove('active');
});

whatsappModal.addEventListener('click', (e) => {
  if (e.target === whatsappModal) {
    whatsappModal.classList.remove('active');
  }
});
