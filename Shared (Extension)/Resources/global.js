//
//  global.js
//  Advanced Safari
//
//  Created by Bharath Kurumaddali on 7/31/24.
//

document.addEventListener('keydown', function(event) {
    if (event.metaKey && event.shiftKey && event.code === 'KeyX') {
        safari.extension.dispatchMessage('copyURL');
        showNotification();
    }
    
    function showNotification() {
        if (Notification.permission === 'granted') {
            new Notification('URL Copied to Clipboard');
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('URL Copied to Clipboard');
                }
            });
        }
    }
