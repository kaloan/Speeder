document.getElementsByTagName('html')[0].style.overflow = 'auto';
document.getElementsByTagName('body')[0].style.overflow = 'auto';
console.log("ALABALA");
//localStorage.setItem('speedXVid', 2.5);
//localStorage.setItem('speedXAudio', 2.5);
let speedXVid;
browser.storage.local.set({'speedXVid', 2.5})
.then(browser.storage.local.get('speedXVid')
	.then((item) => {
		speedXVid = item.speedXVid;
		console.log(item.speedXVid);
	})
);
	
//console.log('speed: ', await browser.storage.local.get('speedXVid'));
//let speedXVid = await browser.storage.local.get('speedXVid');
//localStorage.getItem('speedXVid') ?? 2.9;
let speedXAudio = localStorage.getItem('speedXAudio') ?? 2.9;

[...document.getElementsByTagName('video')].forEach(el => el.playbackRate = speedXVid);
[...document.getElementsByTagName('audio')].forEach(el => el.playbackRate = speedXAudio);


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
