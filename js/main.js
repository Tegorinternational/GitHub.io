window.addEventListener('offline', () => {
  Toastify({
    text: 'Ops! We are offline',
    ...toastifyConfig
  }).showToast();
});
window.addEventListener('online', () => {
  Toastify({
    text: 'Back Online',
    ...toastifyConfig
  }).showToast();
});

const toastifyConfig = {
  close: true,
  duration: 6500,
  backgroundColor: 'rgb(255, 60, 0)',
  position: 'center',
  gravity: 'bottom',
  stopOnFocus: true
};
