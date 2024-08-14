// content.js

function copyURLToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        console.log("URL copied to clipboard successfully:", url);
        showInPageNotification("Advanced Safari: URL copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy URL:", err);
        showNotification("Error", "Failed to copy URL!");
    });
}

// Listen for Cmd+Shift+U key combination
document.addEventListener('keydown', function(event) {
    if (event.metaKey && event.shiftKey && event.code === 'KeyU') {
        console.log("Cmd+Shift+U detected");
        copyURLToClipboard();
    }
}, false);

function showInPageNotification(message) {
    const notification = document.createElement("div");
    notification.style.position = "fixed";
    notification.style.bottom = "10px";
    notification.style.right = "10px";
    notification.style.backgroundColor = "#FFCC99";  // Sunset orange pastel color
    notification.style.color = "black";  // Black text
    notification.style.padding = "10px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";  // Optional: adds a slight shadow
    notification.style.zIndex = "10000";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
