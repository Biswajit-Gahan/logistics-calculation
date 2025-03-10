export default function useLoadingScreen() {
    function showLoadingScreen() {
        let body = document.body;
        let loadingScreen = document.getElementById('loading-screen');

        if(!body || !loadingScreen) return;

        body.style.overflow = 'hidden';
        loadingScreen.style.display = 'block';
    }

    function hideLoadingScreen() {
        let body = document.body;
        let loadingScreen = document.getElementById('loading-screen');

        if(!body || !loadingScreen) return;

        body.style.overflow = 'auto';
        loadingScreen.style.display = 'none';
    }

    return {showLoadingScreen, hideLoadingScreen};
}