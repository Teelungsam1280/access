// LOADS DEPS
// This is the "Offline copy of pages" service worker
let t;
// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
   function resetTimer() {
     Swal.close();
     clearTimeout(t);
     t = "";
     t = setTimeout(disconnectalert, 30000); // time is in milliseconds (1000 is 1 second)

     t = setTimeout(logout, 60000);
     t = setTimeout(meteor, 60010);
   }
// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}


let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

async function install() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    console.log(deferredPrompt)
    deferredPrompt.userChoice.then(function (choiceResult) {

      if (choiceResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
      } else {
        console.log('User chose to not install your PWA');
      }

      deferredPrompt = null;

    });


  }
}


function loadCss(url) {
  if (!document.getElementById("cssId")) {
    var head = document.getElementsByTagName('head')[ 0 ];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
  }
}

// Get Scripts
loadScript = function (url, callback) {
  jQuery.ajax({
    url,
    dataType: 'script',
    success: callback,
    async: true
  })
}

function loadjscssfile(filename, filetype) {
  if (filetype == "js") { // if filename is a external JavaScript file
    var fileref = document.createElement('script')
    fileref.setAttribute("type", "text/javascript")
    fileref.setAttribute("src", filename)
  } else if (filetype == "css") { // if filename is an external CSS file
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)
  }
  if (typeof fileref !== "undefined") {
document.getElementsByTagName("head")[0].appendChild(fileref)
}
}
function rite(item, index) {
  $.getScript(item)
  loadScript(item, () => {
      // Stuff to do after someScript has loaded
      console.log(item)
  })
  loadjscssfile(item, "js") // dynamically load and add this .js file
  console.log(item)
}
let scpts = [
  "//cdn.jsdelivr.net/npm/offline-js@0.7.19/offline.min.js",
  "/lodash.js",
  "sweetalert2.min.js",
  "/material.min.js",
  "https://code.getmdl.io/1.3.0/material.min.js",
  "https://cdn.statically.io/gh/fechanique/material-loading/a47afc0c/material-loading.js",
  "https://cdn.statically.io/gh/CodeSeven/toastr/50092cc6/build/toastr.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js",
  "https://cdn.jsdelivr.net/npm/sweetalert2@9",
  "https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js",
  "https://www.gstatic.com/firebasejs/7.2.3/firebase.js",
  "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
  "https://browser.sentry-cdn.com/5.7.1/bundle.min.js",
  "https://cdn.lr-ingest.io/LogRocket.min.js"
];
$('head').append('');
scpts.forEach(rite);
window.addEventListener('DOMContentLoaded', (event) => {
  scpts = [ "https://cdn.jsdelivr.net/npm/sweetalert2@9" ];
  scpts.forEach(rite);
});
$.getScript("https://cdn.statically.io/gh/CarlosBonetti/jquery-loading/d7c1d252/dist/jquery.loading.min.js");
//https://cdn.statically.io/gh/CodeSeven/toastr/50092cc6/build/toastr.min.css
const done = true;
let timerInterval;
let tdone = true;
setInterval(() => {
  try {
    
  
  if (Swal & tdone) {
    $(".content-header").css("visibility", "hidden");
    $(".content-header").css("height", "10px");
    tdone = false;
    Swal.fire({
      title: 'Connecting',
      html: 'Loading Your Dashboard',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer') // eslint-disable-line
        $("#mainDiv").fadeIn()
      }
    });
    debugger;
    
  }
  } catch (error) {

  }
}, 50);
setTimeout(() => {
  $(".content-header").css("visibility", "hidden");
  $(".content-header").css("height", "10px");
  Swal.fire({
    title: 'Connecting',
    html: 'Loading Your Dashboard',
    timer: 2000,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.timer
    ) {
      console.log('I was closed by the timer') // eslint-disable-line
      $("#mainDiv").fadeIn()

    }
  });
}, 1200);
function offline() {
  if (window.navigator.onLine) {
    console.log();
  } else {
    Swal.fire("You are offline.", " Limited functionality may be avalible. Please reconnect to use all functions.");
  }
}
window.addEventListener('offline', offline);
  function idleTimer() {
  //window.onload = resetTimer;
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions

    function logout() {
      let timerInterval
      Swal.fire({
        title: 'Disconnected',
        html: 'Redirecting to Lock Screen',
        timer: 20000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer') // eslint-disable-line
        }
      })
}
function disconnectalert() {
  swal.fire("Disconnecting Soon.", " Press OK to continue.")
}
function meteor() {
  window.location.href = "/pages/examples/lockscreen.html"; //Adapt to actual logout script
}


}
idleTimer();
