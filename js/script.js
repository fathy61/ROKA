const downloadCheckbox = document.getElementById('download');
const downloadLink = document.getElementById('downloadLink');
const wrapper = document.getElementById('page-wrapper');

downloadCheckbox.addEventListener('change', () => {
  if (downloadCheckbox.checked) {
    downloadLink.click();
  }
});

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  const wrapper = document.getElementById('page-wrapper');

  setTimeout(() => {
    splash.classList.add('slide-up');
    setTimeout(() => {
      splash.style.display = 'none';
      wrapper.classList.add('zoom-in'); // هنا يبدأ تأثير اللوجو ينزل
    }, 1000); 
  }, 2000); 
});
