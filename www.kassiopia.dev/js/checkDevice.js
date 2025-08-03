function checkMobile() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768);
    
    if (isMobile) {
        showAlert();
    }
}

function showAlert() {
    // Remove any existing alert
    closeAlert();
    
    const alertWindow = document.createElement('div');
    alertWindow.className = 'window alert-window';
    alertWindow.innerHTML = `
        <div class="title-bar">
            <div class="title-bar-text">
                System Message
            </div>
            <div class="title-bar-controls">
                <button aria-label="Close" onclick="closeAlert()"></button>
            </div>
        </div>
        <div class="window-body">
            <p>This site is designed for desktop viewing. Mobile experience may be limited.</p>
            <div class="button-row">
                <button onclick="closeAlert()">OK</button>
            </div>
        </div>
    `;
    document.body.appendChild(alertWindow);
}

function closeAlert() {
    const alert = document.querySelector('.alert-window');
    if (alert) {
        alert.remove();
    }
}

// Run check when DOM is loaded and when window is resized
document.addEventListener('DOMContentLoaded', checkMobile);
window.addEventListener('resize', checkMobile);