// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

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

let firebaseConfig;
setTimeout(() => {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyBHB7H6L2TgZeDJKS4ENC_fkdWtS_99T_E",
    authDomain: "trapteam-cc.firebaseapp.com",
    databaseURL: "https://trapteam-cc.firebaseio.com",
    projectId: "trapteam-cc",
    storageBucket: "trapteam-cc.appspot.com",
    messagingSenderId: "150993996289",
    appId: "1:150993996289:web:9a6a477accc058af"
  };
  // Initialize Firebase
  setInterval(() => {
    try {
      firebase.initializeApp(firebaseConfig);

    } catch (error) {
      
    }
  }, 100);

let swalToast
setTimeout(() => {
  loadCss("//cdn.statically.io/gh/CodeSeven/toastr/50092cc6/build/toastr.min.css");
  loadCss("https://cdn.statically.io/gh/fechanique/material-loading/a47afc0c/material-loading.css");
  loadCss("https://code.getmdl.io/1.3.0/material.indigo-pink.min.css");
  loadCss("/sweetalert2.min.css");
  loadCss("material.min.css");
  materialLoading(true);
  try {
    swalToast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  } catch (error) {
    console.error(error);
  }
  
  $(".content-header").css("visibility", "hidden");
  $(".content-header").css("height", "10px");
  Swal.fire({
    title: 'Connecting',
    html: 'Signing You In <b></b>',
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
  
  const swalToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
  }});
    
  
}, 200);
setTimeout(() => {
const swalToast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
setTimeout(() => {
  swalToast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  });
}, 3200);
// jquery gs
const firebaseConfig = {
  apiKey: "AIzaSyBHB7H6L2TgZeDJKS4ENC_fkdWtS_99T_E",
  authDomain: "trapteam-cc.firebaseapp.com",
  databaseURL: "https://trapteam-cc.firebaseio.com",
  projectId: "trapteam-cc",
  storageBucket: "trapteam-cc.appspot.com",
  messagingSenderId: "150993996289",
  appId: "1:150993996289:web:9a6a477accc058af"
};
let scpts = ["https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js","/sweetalert2.min.js","https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js", "https://www.gstatic.com/firebasejs/7.2.3/firebase.js", "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js", "https://browser.sentry-cdn.com/5.7.1/bundle.min.js","https://cdn.lr-ingest.io/LogRocket.min.js"]
$('head').append('');
scpts.forEach(rite);
window.addEventListener('DOMContentLoaded', (event) => {
scpts = ["https://cdn.jsdelivr.net/npm/sweetalert2@9"];
scpts.forEach(rite);
try {
  (function (sa, fbc) {
    function load(f, c) {
      const a = document.createElement("script")
      a.async = 1
      a.src = f
      const s = document.getElementsByTagName("script")[ 0 ]
      s.parentNode.insertBefore(a, s)
    }
    load(sa)
    window.onload = function () {
      firebase.initializeApp(fbc).performance()
    }
  }(performance_standalone, firebaseConfig))
    (function (sa, fbc) {
      function load(f, c) {
        const a = document.createElement("script")
        a.async = 1
        a.src = f
        const s = document.getElementsByTagName("script")[ 0 ]
        s.parentNode.insertBefore(a, s)
      }
      load(sa)
      window.onload = function () {
        firebase.initializeApp(fbc).performance()
      }
    }(performance_standalone, firebaseConfig))
} catch (error) {
  
}
  

$.getScript("https://cdn.jsdelivr.net/npm/sweetalert2@9");
  try {
    LogRocket.getSessionURL((sessionURL) => {
      analytics.track("LogRocket", {
        sessionURL
      })
    });
    Sentry.init({
      dsn: 'https://b55d68ef3c104440a37367f5ef80bc22@sentry.io/1478181'
    });
    LogRocket.getSessionURL((sessionURL) => {
      Sentry.configureScope((scope) => {
        scope.setExtra("sessionURL", sessionURL)
      })
    });
  } catch (error) {
    console.error(error)
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  
});

// jquery ls

// Init
try {
  window.LogRocket && window.LogRocket.init("nipfpt/trap-team-cc")
} catch (error) {
  
}
!(function () {
  const analytics = window.analytics = window.analytics || []; if (!analytics.initialize) {
if (analytics.invoked) {
 window.console && console.error && console.error("Segment snippet included twice.")
} else {
  analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"]; analytics.factory = function (t) {
 return function () {
 const e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics
}
}; for (let t = 0; t < analytics.methods.length; t++) {
 const e = analytics.methods[t]; analytics[e] = analytics.factory(e)
} analytics.load = function (t, e) {
 const n = document.createElement("script"); n.type = "text/javascript"; n.async = !0; n.src = `https://cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`; const a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(n, a); analytics._loadOptions = e
}; analytics.SNIPPET_VERSION = "4.1.0"
    analytics.load("gqbaHuIC0OV4lpzJiKF4pOdrJRIop365")
    analytics.page()
  }
}
}())








// AUTHHEAD:



// SIGNIN CHECKS
function initapp() {
  firebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        // User is signed in.
        displayName = user.displayName
        document.getElementById("pname").innerHTML = displayName;
        swalToast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });
        email = user.email
        emailVerified = user.emailVerified
        photoURL = user.photoURL
        uid = user.uid
        phoneNumber = user.phoneNumber
        providerData = user.providerData
        if (photoURL) {
          document.getElementById("photoimage").src = photoURL
        }
        try {
          if (firebase.auth().currentUser.emailVerified) {
            console.log("account is fine")
          } else {
            alert(
              "You Email is Not Verified. Click OK to send an email to you so you can get verified."
            )
            user
              .sendEmailVerification()
              .then(() => {
                // Email sent.
              })
              .catch((error) => {
                console.error(error);
              })
          }
        } catch (error) {
          console.error(error)
        }
        

        LogRocket.identify(uid, {
          name: displayName,
          email,

          // Add your own custom user variables here, ie:
          ph: phoneNumber,
          providerinfo: providerData
        })
        analytics.identify(user.uid, {
          name: displayName,
          email: user.email
        })
        analytics.identify(user.uid, {
          name: displayName,
          email: user.email
        })
        try {
          __insp.push([ "identify", user.email ])

        } catch (error) {
          console.log("Privacy Blocked:"+error);
        }
        $("#mainDiv").show();materialLoading(false);
        $(".direct-chat").hide();
      } else {
  // User is signed out.
  //document.getElementById("sign-in-status").textContent = "Signed out"
  //document.getElementById("sign-in").textContent = "Sign in"
  //document.getElementById("account-details").textContent = "null"
  //document.getElementById("pagehide").innerhtml = "forget it now!"
 document.location.href = "authme.html"
        swalToast.fire({
          icon: 'error',
          title: 'Redirecting to Auth'
        });
}
    },
(error) => {
  console.log(error)
}
  )
}
window.onload = function () {
  initapp()
  console.log("app initialized")
  const database = firebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        document.getElementById("pname").innerHTML = displayName;
        swalToast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        });
        var uid = user.uid
        var phoneNumber = user.phoneNumber
        var providerData = user.providerData
        try {
          if (firebase.auth().currentUser.emailVerified) {
            console.log("account is fine")
          } else {
            alert(
              "You Email is Not Verified. Click OK to send an email to you so you can get verified."
            )

            user
              .sendEmailVerification()
              .then(() => {
                // Email sent.
              })
              .catch((error) => {
                // An error occured.
              })
          }
        } catch (error) {
          this.console.error(error);
        }
        

        LogRocket.identify(uid, {
          name: displayName,
          email,

          // Add your own custom user variables here, ie:
          ph: phoneNumber,
          providerinfo: providerData
        })
        analytics.identify(user.uid, {
          name: user.displayName,
          email: user.email
        });
        try {
          __insp.push([ "identify", user.email ])

        } catch (error) {
          
        }

        user.getIdToken().then((accessToken) => {
          document.getElementById("sign-in-status").textContent = "Signed in"
          document.getElementById("sign-in").textContent = "Sign out"
          document.getElementById(
            "account-details"
          ).textContent = JSON.stringify(
            {
              displayName,
              email,
              emailVerified,
              phoneNumber,
              photoURL,
              uid,
              accessToken,
              providerData
            },
            null,
            "  "
          )
          console.log("This is running")
          console.log(
            JSON.stringify(
              {
                displayName,
                email,
                emailVerified,
                phoneNumber,
                photoURL,
                uid,
                accessToken,
                providerData
              },
              null,
              "  "
            )
          )
        })
        console.log(user.displayName)
        $("#mainDiv").show();materialLoading(false);
        $(".direct-chat").hide();
      } else {
        // User is signed out.

       document.location.href = "authme.html"
        swalToast.fire({
          icon: 'error',
          title: 'Redirecting to Auth'
        });
      }
    },
    (error) => {
      console.log(error)
    }
  )
  // code here database is
}

// HEADER CODE:

"use strict"

!(function () {
  const t = window.driftt = window.drift = window.driftt || []
  if (!t.init) {
    if (t.invoked) {
return void (
        window.console &&
        console.error &&
        console.error("Drift snippet included twice.")
      )
}
    t.invoked = !0,
      t.methods = [
        "identify",
        "config",
        "track",
        "reset",
        "debug",
        "show",
        "ping",
        "page",
        "hide",
        "off",
        "on"
      ],
      t.factory = function (e) {
        return function () {
          const n = Array.prototype.slice.call(arguments)
          return n.unshift(e), t.push(n), t
        }
      },
      t.methods.forEach((e) => {
        t[e] = t.factory(e)
      }),
      t.load = function (t) {
        const e = 3e5
          const n = Math.ceil(new Date() / e) * e
          const o = document.createElement("script")
        o.type = "text/javascript",
          o.async = !0,
          o.crossorigin = "anonymous",
          o.src = `https://js.driftt.com/include/${n}/${t}.js`
        const i = document.getElementsByTagName("script")[0]
        i.parentNode.insertBefore(o, i)
      }
  }
}())
drift.SNIPPET_VERSION = "0.3.1"
drift.load("cesz7uv9e69c")

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag("js", new Date())

gtag("config", "UA-123568344-2")

!(function () {
  const analytics = window.analytics = window.analytics || []
  if (!analytics.initialize) {
if (analytics.invoked) {
window.console &&
        console.error &&
        console.error("Segment snippet included twice.")
} else {
      analytics.invoked = !0
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "debug",
        "page",
        "once",
        "off",
        "on"
      ]
      analytics.factory = function (t) {
        return function () {
          const e = Array.prototype.slice.call(arguments)
          e.unshift(t)
          analytics.push(e)
          return analytics
        }
      }
      for (let t = 0; t < analytics.methods.length; t++) {
        const e = analytics.methods[t]
        analytics[e] = analytics.factory(e)
      }
      analytics.load = function (t, e) {
        const n = document.createElement("script")
        n.type = "text/javascript"
        n.async = !0
        n.src =
          `https://cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`
        const a = document.getElementsByTagName("script")[0]
        a.parentNode.insertBefore(n, a)
        analytics._loadOptions = e
      }
      analytics.SNIPPET_VERSION = "4.1.0"
      analytics.load("gqbaHuIC0OV4lpzJiKF4pOdrJRIop365")
      analytics.page()
    }
}
}())

// PAGE CHECKER for GOOGLE ANALYTICS

analytics.page(document.title)

// user costomisation

/*
photoURL = user.photoURL;
    console.log(photoURL);
    if (photoURL) {
      document.getElementById("photoimage").src = photoURL;
    }
*/


firebase.auth().onAuthStateChanged(
  (user) => {
    if (user) {
      // User is signed in.
      displayName = user.displayName
      email = user.email
      emailVerified = user.emailVerified
      photoURL = user.photoURL
      document.getElementById("pname").innerHTML = displayName;
      swalToast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      });
      uid = user.uid
      phoneNumber = user.phoneNumber
      providerData = user.providerData
      if (user.email === null) {
        user.email = user.phoneNumber
      }
      console.log(photoURL)
      if (photoURL) {
        document.getElementById("photoimage").src = photoURL
      }
      if (user.email == null) {
        user.email = user.phoneNumber
      }
      try {
        LogRocket.identify(uid, {
          name: displayName,
          email,

          // Add your own custom user variables here, ie:
          ph: phoneNumber,
          providerinfo: providerData
        })
      } catch (error) {
        console.log()
      }
      try {
        if (firebase.auth().currentUser.emailVerified) {
          console.log("account is fine")
        } else {
          console.log(
            "You Email is Not Verified. Click OK to send an email to you so you can get verified."
          )

          user
            .sendEmailVerification()
            .then(() => {
              // Email sent.
            })
            .catch((error) => {
              // An error occured.
            })
        }
      } catch (error) {
        console.log("Could not verify current user");
      }
      
      }
    })
  });
}, 2200);
setTimeout(() => {
  $("#mainDiv").show();materialLoading(false);
  $(".direct-chat").hide();
}, 10000);
setInterval(() => {
  $(".direct-chat").hide();
  document.getElementById("pname").href = "/addauth";
}, 20);
