function updateClock() {
    const clockElement = document.querySelector('#taskbar .system-tray .clock');
    if (!clockElement) {
        console.error('Clock element not found');
        return;
    }

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).toUpperCase();
    clockElement.textContent = timeString;
}

// Wait for DOM to be fully loaded before starting clock
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 30000);
});