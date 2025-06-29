let aolChatSocket = null;
let aolChatDisplayName = null;

function initializeAOLChat(windowEl) {
    const messagesEl = windowEl.querySelector('#aol-chat-messages');
    const inputEl = windowEl.querySelector('#aol-chat-input');
    const sendBtn = windowEl.querySelector('#aol-chat-send');

    // Prompt for display name if not set
    if (!aolChatDisplayName) {
        aolChatDisplayName = prompt('Enter your display name:', '') || 'Guest';
    }

    // Connect to WebSocket server
    if (!aolChatSocket || aolChatSocket.readyState !== 1) {
        aolChatSocket = new WebSocket('wss://chat-backend.kassiopia.dev:8443');
        console.log('Connecting to chat server...');
        console.log(aolChatSocket);
        aolChatSocket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            const msgDiv = document.createElement('div');
            msgDiv.className = 'aol-chat-message';
            msgDiv.innerHTML = `<b>${msg.name}:</b> ${msg.text}`;
            messagesEl.appendChild(msgDiv);a
            messagesEl.scrollTop = messagesEl.scrollHeight;
        };
    }

    function sendMessage() {
        const text = inputEl.value.trim();
        if (text && aolChatSocket.readyState === 1) {
            aolChatSocket.send(JSON.stringify({ name: aolChatDisplayName, text }));
            inputEl.value = '';
        }
    }

    sendBtn.onclick = sendMessage;
    inputEl.onkeydown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };
}
