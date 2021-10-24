window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

document.addEventListener('DOMContentLoaded', function() {
    const speedUp = document.getElementById('speedValue');
	const on = document.getElementById('buttonON');
    speedUp.addEventListener('change', function() {
		console.log(Number(speedUp.value));
		if(speedUp.value) localStorage.setItem('speedXVid', Number(speedUp.value));
    });
	on.addEventListener('change', function() {
		console.log(Number(speedUp.value));
		localStorage.setItem('speedXVid', Number(speedUp.value));
    });
});

function speedUp(event){
	event.preventDefault();
	let speedup = Number(document.getElementById("speedValue").value);
	console.log(speedup);
	localStorage.setItem('speedXVid', speedup);
}

function speedUpDirect(event){
	event.preventDefault();
	console.log(Number(event.target.value));
	localStorage.setItem('speedXVid', Number(event.target.value));
}

/*function getSpeed()
{
  speedUp = document.getElementById("speedValue").value;
  console.log(speedUp);

  browser.tabs.query({currentWindow: true, active: true}, function (tabs)
  {
  browser.tabs.sendMessage(tabs[0].id, speedUp);
  });

}

document.getElementById("buttonON").addEventListener("click", event =>{
  speedUp = document.getElementById("speedValue").value;
  console.log(speedUp);

  browser.tabs.query({currentWindow: true, active: true}, function (tabs)
  {
  browser.tabs.sendMessage(tabs[0].id, speedUp);
  });
});*/
