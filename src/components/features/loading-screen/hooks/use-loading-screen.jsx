export default function useLoadingScreen() {
    function showLoadingScreen(message = "loading") {
        let body = document.body;
        let loadingScreen = document.getElementById('loading-screen');
        let loadingMessage = document.getElementById('loading-message');

        if(!body || !loadingScreen) return;

        body.style.overflow = 'hidden';
        loadingScreen.style.display = 'block';
        loadingMessage.innerText = message.toUpperCase();
    }

    function hideLoadingScreen() {
        let body = document.body;
        let loadingScreen = document.getElementById('loading-screen');

        if(!body || !loadingScreen) return;

        setTimeout(() => {
            body.style.overflow = 'auto';
            loadingScreen.style.display = 'none';
        }, 1500)
    }

    return {showLoadingScreen, hideLoadingScreen};
}