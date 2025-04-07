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