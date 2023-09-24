!(function (e, n, t) {
  function o(e, n) {
    return typeof e === n;
  }
  function i() {
    var e, n, t, i, a, r, s;
    for (var l in d)
      if (d.hasOwnProperty(l)) {
        if (
          ((e = []),
          (n = d[l]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (i = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (r = e[a]),
            (s = r.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = i)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = i)),
            f.push((i ? "" : "no-") + s.join("-"));
      }
  }
  function a() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : u
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function r() {
    var e = n.body;
    return e || ((e = a(u ? "svg" : "body")), (e.fake = !0)), e;
  }
  function s(e, t, o, i) {
    var s,
      d,
      l,
      f,
      u = "modernizr",
      c = a("div"),
      m = r();
    if (parseInt(o, 10))
      for (; o--; )
        (l = a("div")), (l.id = i ? i[o] : u + (o + 1)), c.appendChild(l);
    return (
      (s = a("style")),
      (s.type = "text/css"),
      (s.id = "s" + u),
      (m.fake ? m : c).appendChild(s),
      m.appendChild(c),
      s.styleSheet
        ? (s.styleSheet.cssText = e)
        : s.appendChild(n.createTextNode(e)),
      (c.id = u),
      m.fake &&
        ((m.style.background = ""),
        (m.style.overflow = "hidden"),
        (f = p.style.overflow),
        (p.style.overflow = "hidden"),
        p.appendChild(m)),
      (d = t(c, e)),
      m.fake
        ? (m.parentNode.removeChild(m), (p.style.overflow = f), p.offsetHeight)
        : c.parentNode.removeChild(c),
      !!d
    );
  }
  var d = [],
    l = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        d.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        d.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var f = [],
    p = n.documentElement,
    u = "svg" === p.nodeName.toLowerCase(),
    c = (l.testStyles = s);
  Modernizr.addTest("formvalidation", function () {
    var n = a("form");
    if (!("checkValidity" in n && "addEventListener" in n)) return !1;
    if ("reportValidity" in n) return !0;
    var t,
      o = !1;
    return (
      (Modernizr.formvalidationapi = !0),
      n.addEventListener(
        "submit",
        function (n) {
          (!e.opera || e.operamini) && n.preventDefault(), n.stopPropagation();
        },
        !1
      ),
      (n.innerHTML =
        '<input name="modTest" required="required" /><button></button>'),
      c("#modernizr form{position:absolute;top:-99999em}", function (e) {
        e.appendChild(n),
          (t = n.getElementsByTagName("input")[0]),
          t.addEventListener(
            "invalid",
            function (e) {
              (o = !0), e.preventDefault(), e.stopPropagation();
            },
            !1
          ),
          (Modernizr.formvalidationmessage = !!t.validationMessage),
          n.getElementsByTagName("button")[0].click();
      }),
      o
    );
  }),
    i(),
    delete l.addTest,
    delete l.addAsyncTest;
  for (var m = 0; m < Modernizr._q.length; m++) Modernizr._q[m]();
  e.Modernizr = Modernizr;
})(window, document);

var forms = document.forms;

// function formSubmit() {
//   var requiredFields = this.querySelectorAll(
//       "input[required], textarea[required], select[required]"
//     ),
//     errorFields = [];



//   if (errorFields.length > 0) {
//     event.preventDefault();
//     if (errorFields.length === 1) {
//       alert("Husk at udfylde feltet:\n" + errorFields.join("\n"));
//     } else {
//       alert("Husk at udfylde felterne:\n" + errorFields.join("\n"));
//     }
//     requiredFields[0].focus();
//   } else {
//     var submitButtons = this.querySelectorAll(
//       'input[type="submit"], button:not([type="button"]):not([type="reset"])'
//     );
//     for (var b = 0, bl = submitButtons.length; b < bl; b++) {
//       submitButtons[b].disabled = true;
//     }
//   }
// }
// if (!Modernizr.formvalidation) {
//   for (var f = 0, fl = forms.length; f < fl; f++) {
//     forms[f].addEventListener("submit", formSubmit);
//   }
// }

async function submitForm(event) {
  for (var a = 0, al = requiredFields.length; a < al; a++) {
    if (
      (requiredFields[a].type === "checkbox" ||
        requiredFields[a].type === "radio") &&
      requiredFields[a].checked === false
    ) {
      classie.addClass(requiredFields[a], "js-required");
      errorFields[errorFields.length] =
        requiredFields[a].nextElementSibling.textContent;
    } else if (requiredFields[a].value.trim() === "") {
      classie.addClass(requiredFields[a], "js-required");
      errorFields[errorFields.length] =
        requiredFields[a].previousElementSibling.textContent;
    } else {
      classie.removeClass(requiredFields[a], "js-required");
    }
  }
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
  	// Формируем запрос
    const response = await fetch(event.target.action, {
    	method: 'POST',
    	body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw ('Ошибка обработки. Ответ не JSON');
    }
    // обрабатываем запрос
    const json = await response.json();
    if (json.result === "success") {
    	// в случае успеха
    	alert(json.info);
    } else { 
    	// в случае ошибки
    	console.log(json);
    	throw (json.info);
    }
  } catch (error) { // обработка ошибки
    alert(error);
  }
}