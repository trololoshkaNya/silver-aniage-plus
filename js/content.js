const SilverDB = {
    "blocklist": [
        {
            'url': 'https://www.silver-aniage.ru/blocke',
            'poster': '',
            'player': 'https://kodik.online/serial/58755/RmvG4a4d24260d',
            'season': 'false'
        },
        {
            'url': 'https://www.silver-aniage.ru/64-tensei-shitara-slime-datta-ken',
            'poster': 'https://desu.shikimori.one/uploads/poster/animes/37430/2dd416dc513bcf4cbdd74ae64fab1255.jpeg',
            'player': 'https://kodik.online/serial/58716/RmvG4a6efcac94',
            'player2': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
            'season': 'true'
        },
        {
            'url': 'https://www.silver-aniage.ru/65-Link-Click',
            'poster_id': 'n-3e59dbae-af65-4c3e-ae92-c465853622c1',
            'poster': 'https://i.mydramalist.com/WP7JlD_4f.jpg',
            'player': 'https://kodik.online/serial/60998/RmvG4aedb3527f',
            'season': 'false'
        }
    ]
}

chrome.storage.sync.get(["modeOn"], async (e) => {
    if (e.modeOn == true) {
        for (const key in SilverDB.blocklist) {
            if (document.location.href == SilverDB.blocklist[key].url) {
                let video = document.getElementsByTagName('iframe')[0]
                video.src = SilverDB.blocklist[key].player
                document.querySelector('a.poster img').srcset = SilverDB.blocklist[key].poster
                video.style.cssText = `width: 675px; height: 500px;`;
                if (SilverDB.blocklist[key].season == 'true') {
                    document.getElementsByClassName('controls')[0].style.display = 'none';
                    document.querySelector('a.preview img').style.display = 'none';
                    let seasonBtn = document.querySelector('a.season-button')
                    let seasonBtn2 = document.querySelector('a.season-button2')
                    seasonBtn.style.cssText = `background-color: rgb(255, 85, 0); color: black; border-radius: 7px; width: 90px; height: 45px; font-family: 'Underdog';  font-weight: bold;`;
                    seasonBtn.addEventListener("click", function () {
                        video.src = SilverDB.blocklist[key].player
                    })
                    seasonBtn2.style.cssText = `background-color: rgb(255, 85, 0); color: black; border-radius: 7px; width: 90px; height: 45px; font-family: 'Underdog';  font-weight: bold;`;
                    seasonBtn2.addEventListener("click", function () {
                        video.src = SilverDB.blocklist[key].player2
                    })
                }
                else {
                }
            }
        }
    }
}
)