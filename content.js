let script = document.createElement('script');
script.src = chrome.runtime.getURL('cast.min.js');
document.head.appendChild(script);

let script2 = document.createElement('script');
script2.src = chrome.runtime.getURL('runCastjs.js');
document.head.appendChild(script2);


window.onload = () => {
    function addChromecastButton() {
        let controlBar = document.querySelector('.vjs-control-bar');
        if (controlBar && !document.getElementById('chromecast-btn-id')) {

            // add button
            let chromecastButton = document.createElement('button');
            chromecastButton.title = 'Chromecast Button from streamcompanion.app';
            let svg = document.createElement('img');
            svg.src = chrome.runtime.getURL('cast_white.svg');
            chromecastButton.appendChild(svg);
            chromecastButton.id = 'chromecast-btn-id';

            chromecastButton.addEventListener('click', function () {
                let currentURL = window.location.href;
                if (currentURL.includes('kick.com/video/')) {
                    let videoId = currentURL.split('/').pop();
                    let apiURL = 'https://kick.com/api/v1/video/' + videoId;
                    fetch(apiURL).then(response => response.json()).then(data => {
                        const masterUrl = data.source;
                        const dynamicUrl = masterUrl;
                        document.dispatchEvent(new CustomEvent('startCasting', { detail: dynamicUrl }));
                    });
                } else {
                    let username = currentURL.split('/')[3];
                    let apiURL = 'https://kick.com/api/v2/channels/' + username + '/livestream';
                    fetch(apiURL).then(response => response.json()).then(data => {
                        const masterUrl = data.data.playback_url;
                        const dynamicUrl = masterUrl;
                        document.dispatchEvent(new CustomEvent('startCasting', { detail: dynamicUrl }));
                    });
                }

            });

            controlBar.appendChild(chromecastButton);
            // clearInterval(checkForElement);
        }
    }

    let checkForElement = setInterval(addChromecastButton, 1500);  // Check every 1.5 second
};