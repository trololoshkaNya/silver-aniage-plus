const InfoButton = document.querySelector('.btn-info')
if (InfoButton) {
    InfoButton.addEventListener('click', (e) => {
        const url = chrome.runtime.getURL("/html/start.html");
        chrome.tabs.create({ url })
        window.close()
    })
}

const OpenSite = document.querySelector('.open-site')
if (OpenSite) {
    OpenSite.addEventListener('click', (e) => {
        window.open("https://www.silver-aniage.ru/")
    })
}

const ModeToggle = document.querySelector('.clock-ckeckbox')

chrome.storage.sync.get(["modeOn"], (result) => {
    ModeToggle.checked = result.modeOn;
    if (result.modeOn) {
        chrome.action.setBadgeText({ text: "ON" });
    }
});

if (ModeToggle) {
    ModeToggle.addEventListener("click", async (e) => {
        const checked = e.target.checked;
        chrome.action.setBadgeText({ text: checked ? "ON" : "" });
        chrome.storage.sync.set({ modeOn: checked });
    });
}