window.addEventListener('load', () => {
             registerSW();
        });

        async function registerSW() {
        if ('serviceWorker' in navigator) {
            try {
            await navigator.serviceWorker.register('https://tegorinternational.github.io/GitHub.io/sw.js');
            } catch (e) {
            console.log(`SW registration failed`);
            }
        }
        }