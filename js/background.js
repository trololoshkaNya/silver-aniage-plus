
chrome.runtime.onInstalled.addListener(async (details) => {
    if (details.reason == "install") {
        let url = chrome.runtime.getURL("html/start.html");
        let tab = chrome.tabs.create({ url });
    } else if (details.reason == "update") {
        console.log("plugin updated!")
    };

    chrome.storage.sync.get(['modeOn'], (result) => {
        if (result.modeOn) {
            chrome.action.setBadgeText( { text: 'ON' } )
        }
    })
});
