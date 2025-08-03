let zIndex = 1000;

function focusWindow(windowEl) {
    // Remove active class from all windows
    document.querySelectorAll('.window').forEach(win => {
        win.classList.remove('active');
        win.style.zIndex = 1000;
        // Update taskbar button state
        const btnId = `taskbar-${win.id.replace('window-', '')}`;
        const taskbarButton = document.querySelector(`#${btnId}`);
        if (taskbarButton) {
            taskbarButton.classList.remove('active');
        }
    });
    
    // Add active class to current window and bring to front
    windowEl.classList.add('active');
    windowEl.style.zIndex = zIndex++;
    
    // Update taskbar button state for active window
    if (windowEl.id) {
        const windowType = windowEl.id.replace('window-', '');
        const taskbarButton = document.querySelector(`#taskbar-${windowType}`);
        if (taskbarButton) {
            taskbarButton.classList.add('active');
        }
    }
}

// Export the focusWindow function for use in other files
window.focusWindow = focusWindow;

function dragElement(elmnt) {
    let currentX = 0;
    let currentY = 0;
    let startX = 0;
    let startY = 0;

    if (elmnt.querySelector(".title-bar")) {
        elmnt.querySelector(".title-bar").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        focusWindow(elmnt);
        // Get current window position
        const style = window.getComputedStyle(elmnt);
        currentX = parseInt(style.left);
        currentY = parseInt(style.top);
        
        // Get starting mouse coordinates
        startX = e.clientX;
        startY = e.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calculate the distance moved from start position
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        // Update element position
        elmnt.style.left = (currentX + dx) + "px";
        elmnt.style.top = (currentY + dy) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}