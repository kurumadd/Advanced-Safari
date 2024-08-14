// popup.js

// Function to show the notification
function showNotification() {
    const notification = document.getElementById('notification');
    notification.textContent = "URL copied to clipboard!";

    // Hide the notification after a few seconds
    setTimeout(() => {
        notification.textContent = "Ready";
    }, 3000);
}

// Listen for messages from the background script
browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'urlCopied') {
        console.log("Notification received in popup");
        showNotification();
    }
});

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
    console.log("Popup loaded");
});
