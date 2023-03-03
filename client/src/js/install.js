const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
/*window.addEventListener('beforeinstallprompt', (event) => {
  console.log("INSTALLING!", event)
    //event.preventDefault();
    window.deferredPrompt = event;
    console.log("WINDOW", window.deferredPrompt)
    butInstall.classList.toggle('hidden', false)
    console.log('beforeinstall', event)
});*/

window.addEventListener('beforeinstallprompt', (event) => {
  console.log("INSTALLING!", event)
  window.deferredPrompt = event;
  console.log("WINDOW", window.deferredPrompt)
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('hello2')
  const promptEvent = window.deferredPrompt;
  console.log("PROMPTENVEN>>>>",promptEvent)
  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
  console.log('goodbye')
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  console.log('appinstalled', event);
});
