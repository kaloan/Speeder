//document.getElementsByTagName('html')[0].style.overflow = 'auto';
//document.getElementsByTagName('body')[0].style.overflow = 'auto';
console.log("ALABALA");
/*let speedXVid;
browser.storage.local.set({'speedXVid', 2.5})
.then(browser.storage.local.get('speedXVid')
	.then((item) => {
		speedXVid = item.speedXVid;
		console.log(item.speedXVid);
	})
);*/
	
//console.log('speed: ', await browser.storage.local.get('speedXVid'));
//let speedXVid = await browser.storage.local.get('speedXVid');

localStorage.setItem('speedXVid', 2.7);
localStorage.setItem('speedXAudio', 2.7);
let speedXVid = localStorage.getItem('speedXVid') ?? 2.9;
let speedXAudio = localStorage.getItem('speedXAudio') ?? 2.9;

function speedUp() {
	[...document.getElementsByTagName('video')].forEach(el => el.playbackRate = speedXVid);
	[...document.getElementsByTagName('audio')].forEach(el => el.playbackRate = speedXAudio);
}
speedUp();

let oldURL = "";
function checkURLchange(){
	const currentURL = window.location.href;
    if(currentURL != oldURL){
        speedUp();
        oldURL = currentURL;
    }

    setInterval(function() {
        checkURLchange();
    }, 4000);
}
checkURLchange();

//window.addEventListener('hashchange', function(e){console.log('hash changed')});
//window.addEventListener('popstate', function(e){console.log('url changed')});

/*window.onhashchange = function(){
	console.log("CCCCCCC");
}*/

/*window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

window.addEventListener('load', (event) => {
//When a message is received execute the receivedMessage function
browser.runtime.onMessage.addListener(receivedMessage);
});
function receivedMessage(message, sender, response){
NFS(message);
}

function NFS(speed)
{
  let vidList = document.getElementsByTagName("video");
  for(let element of vidList)
  {
      element.playbackRate = speed;
  }
}
*/
