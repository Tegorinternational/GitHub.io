window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://tegorinternational.github.io/GitHub.io/sw.js');
  }
}
