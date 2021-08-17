window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

function getSpeed()
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
});
