console.log("ALABALA");
let speedXVid = 2.9;
let speedXAudio = 2.9;
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
