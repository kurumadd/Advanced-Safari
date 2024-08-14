// background.js (Service Worker)

console.log("Background script loaded");

browser.runtime.onInstalled.addListener(() => {
    console.log("Service Worker installed");
});


