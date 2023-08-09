## StreamCompanion.app Extension Overview:
### Chrome Extention URL: https://chrome.google.com/webstore/detail/streamcompanionapp-extens/ojhbcendomkgdccbbhjcphkdpajadfnk

Currently it adds a chromecast button to the livestream or video page for kick.com.
To make use of it we use a popular open source library call Castjs. https://github.com/castjs/castjs
We inlclude the minified version downloaded from that repository (cast.min.js).
This script (CastJS) also adds the Google Cast sdk that is needed for web sender api. https://developers.google.com/cast/docs/web_sender/integrate

The fetch api calls are from public apis from kick.com.
It also uses a cors proxy server to make the final request to send the url to chromecast to avoid any potential cors error. 
The cors proxy server is a simple serverless function of "cors anywhere" a very popular open source library. https://github.com/Rob--W/cors-anywhere

No self identifying information is logged or collected. As you can see the extension also do not have any special permissions.

#### Privacy Policy link: https://streamcompanion.app/privacy
