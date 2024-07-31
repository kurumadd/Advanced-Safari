browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = details.url;
    if (url.includes("amazon")) {
      openInProfile("Work", url);
      return { cancel: true };
    } else if (url.includes("imperial")) {
      openInProfile("MBA", url);
      return { cancel: true };
    } else {
      openInProfile("Personal", url);
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function openInProfile(profile, url) {
  const script = `
  tell application "Safari"
      set foundWindow to false
      repeat with w in (windows)
          if (name of current web profile of w) is "${profile}" then
              set foundWindow to true
              tell w
                  set current tab to (make new tab with properties {URL:"${url}"})
                  set index to 1
              end tell
              exit repeat
          end if
      end repeat
      if foundWindow is false then
          set newWindow to (make new document with properties {URL:"${url}"})
          set current web profile of newWindow to "${profile}"
      end if
  end tell`;
  var exec = require('child_process').exec;
  exec(`osascript -e '${script}'`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}


});
