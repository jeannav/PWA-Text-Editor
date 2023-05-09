const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event, line 5 is given
window.addEventListener('beforeinstallprompt', (event) => {
    // unsure about event.preventDefault();
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element, line 11 is given
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event, line 26 is given
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
