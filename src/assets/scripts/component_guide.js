/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});

/*
 * codemirror
 * https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).CodeMirror = t());
})(this, function () {
  "use strict";
  var e = navigator.userAgent,
    l = navigator.platform,
    d = /gecko\/\d/i.test(e),
    s = /MSIE \d/.test(e),
    a = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
    u = /Edge\/(\d+)/.exec(e),
    w = s || a || u,
    v = w && (s ? document.documentMode || 6 : +(u || a)[1]),
    x = !u && /WebKit\//.test(e),
    s = x && /Qt\/\d+\.\d+/.test(e),
    m = !u && /Chrome\/(\d+)/.exec(e),
    V = m && +m[1],
    K = /Opera\//.test(e),
    j = /Apple Computer/.test(navigator.vendor),
    c = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
    X = /PhantomJS/.test(e),
    Y = j && (/Mobile\/\w+/.test(e) || 2 < navigator.maxTouchPoints),
    $ = /Android/.test(e),
    _ = Y || $ || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
    C = Y || /Mac/.test(l),
    q = /\bCrOS\b/.test(e),
    a = /win/i.test(l),
    u = K && e.match(/Version\/(\d*\.\d*)/),
    Z =
      ((u = u && Number(u[1])) && 15 <= u && (x = !(K = !1)),
      C && (s || (K && (null == u || u < 12.11)))),
    Q = d || (w && 9 <= v);
  function J(e) {
    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
  }
  var ee = function (e, t) {
    var n,
      r = e.className,
      t = J(t).exec(r);
    t &&
      ((n = r.slice(t.index + t[0].length)),
      (e.className = r.slice(0, t.index) + (n ? t[1] + n : "")));
  };
  function te(e) {
    for (var t = e.childNodes.length; 0 < t; --t) e.removeChild(e.firstChild);
    return e;
  }
  function y(e, t) {
    return te(e).appendChild(t);
  }
  function M(e, t, n, r) {
    var i = document.createElement(e);
    if (
      (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t)
    )
      i.appendChild(document.createTextNode(t));
    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
    return i;
  }
  function ne(e, t, n, r) {
    e = M(e, t, n, r);
    return e.setAttribute("role", "presentation"), e;
  }
  function re(e, t) {
    if ((3 == t.nodeType && (t = t.parentNode), e.contains))
      return e.contains(t);
    do {
      if ((t = 11 == t.nodeType ? t.host : t) == e) return !0;
    } while ((t = t.parentNode));
  }
  function N() {
    var t;
    try {
      t = document.activeElement;
    } catch (e) {
      t = document.body || null;
    }
    for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
      t = t.shadowRoot.activeElement;
    return t;
  }
  function ie(e, t) {
    var n = e.className;
    J(t).test(n) || (e.className += (n ? " " : "") + t);
  }
  function oe(e, t) {
    for (var n = e.split(" "), r = 0; r < n.length; r++)
      n[r] && !J(n[r]).test(t) && (t += " " + n[r]);
    return t;
  }
  var le = document.createRange
      ? function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        }
      : function (e, t, n) {
          var r = document.body.createTextRange();
          try {
            r.moveToElementText(e.parentNode);
          } catch (e) {
            return r;
          }
          return (
            r.collapse(!0),
            r.moveEnd("character", n),
            r.moveStart("character", t),
            r
          );
        },
    se = function (e) {
      e.select();
    };
  function ae(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function () {
      return e.apply(null, t);
    };
  }
  function ue(e, t, n) {
    for (var r in ((t = t || {}), e))
      !e.hasOwnProperty(r) ||
        (!1 === n && t.hasOwnProperty(r)) ||
        (t[r] = e[r]);
    return t;
  }
  function S(e, t, n, r, i) {
    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
    for (var o = r || 0, l = i || 0; ; ) {
      var s = e.indexOf("\t", o);
      if (s < 0 || t <= s) return l + (t - o);
      (l = (l += s - o) + (n - (l % n))), (o = s + 1);
    }
  }
  Y
    ? (se = function (e) {
        (e.selectionStart = 0), (e.selectionEnd = e.value.length);
      })
    : w &&
      (se = function (e) {
        try {
          e.select();
        } catch (e) {}
      });
  function ce() {
    (this.id = null),
      (this.f = null),
      (this.time = 0),
      (this.handler = ae(this.onTimeout, this));
  }
  function L(e, t) {
    for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
    return -1;
  }
  ce.prototype.onTimeout = function (e) {
    (e.id = 0),
      e.time <= +new Date()
        ? e.f()
        : setTimeout(e.handler, e.time - +new Date());
  };
  var he = 50,
    de = {
      toString: function () {
        return "CodeMirror.Pass";
      },
    },
    fe = {
      scroll: !(ce.prototype.set = function (e, t) {
        this.f = t;
        t = +new Date() + e;
        (!this.id || t < this.time) &&
          (clearTimeout(this.id),
          (this.id = setTimeout(this.handler, e)),
          (this.time = t));
      }),
    },
    pe = { origin: "*mouse" },
    ge = { origin: "+move" };
  function me(e, t, n) {
    for (var r = 0, i = 0; ; ) {
      var o = e.indexOf("\t", r),
        l = (o = -1 == o ? e.length : o) - r;
      if (o == e.length || t <= i + l) return r + Math.min(l, t - i);
      if (((i += o - r), (r = o + 1), t <= (i += n - (i % n)))) return r;
    }
  }
  var ve = [""];
  function ye(e) {
    for (; ve.length <= e; ) ve.push(z(ve) + " ");
    return ve[e];
  }
  function z(e) {
    return e[e.length - 1];
  }
  function be(e, t) {
    for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
    return n;
  }
  function we() {}
  function xe(e, t) {
    e = Object.create ? Object.create(e) : ((we.prototype = e), new we());
    return t && ue(t, e), e;
  }
  var Ce =
    /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function Se(e) {
    return (
      /\w/.test(e) ||
      ("" < e && (e.toUpperCase() != e.toLowerCase() || Ce.test(e)))
    );
  }
  function Le(e, t) {
    return t ? !!(-1 < t.source.indexOf("\\w") && Se(e)) || t.test(e) : Se(e);
  }
  function ke(e) {
    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return;
    return 1;
  }
  var Te =
    /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function Me(e) {
    return 768 <= e.charCodeAt(0) && Te.test(e);
  }
  function Ne(e, t, n) {
    for (; (n < 0 ? 0 < t : t < e.length) && Me(e.charAt(t)); ) t += n;
    return t;
  }
  function Oe(e, t, n) {
    for (var r = n < t ? -1 : 1; ; ) {
      if (t == n) return t;
      var i = (t + n) / 2,
        i = r < 0 ? Math.ceil(i) : Math.floor(i);
      if (i == t) return e(i) ? t : n;
      e(i) ? (n = i) : (t = i + r);
    }
  }
  var Ae = null;
  function De(e, t, n) {
    var r;
    Ae = null;
    for (var i = 0; i < e.length; ++i) {
      var o = e[i];
      if (o.from < t && o.to > t) return i;
      o.to == t && (o.from != o.to && "before" == n ? (r = i) : (Ae = i)),
        o.from == t && (o.from != o.to && "before" != n ? (r = i) : (Ae = i));
    }
    return null != r ? r : Ae;
  }
  (We = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/),
    (He = /[stwN]/),
    (Fe = /[LRr]/),
    (Ee = /[Lb1n]/),
    (Pe = /[1n]/);
  var We,
    He,
    Fe,
    Ee,
    Pe,
    Ie = function (e, t) {
      var n = "ltr" == t ? "L" : "R";
      if (0 == e.length || ("ltr" == t && !We.test(e))) return !1;
      for (var r, i = e.length, o = [], l = 0; l < i; ++l)
        o.push(
          (r = e.charCodeAt(l)) <= 247
            ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(
                r
              )
            : 1424 <= r && r <= 1524
            ? "R"
            : 1536 <= r && r <= 1785
            ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(
                r - 1536
              )
            : 1774 <= r && r <= 2220
            ? "r"
            : 8192 <= r && r <= 8203
            ? "w"
            : 8204 == r
            ? "b"
            : "L"
        );
      for (var s = 0, a = n; s < i; ++s) {
        var u = o[s];
        "m" == u ? (o[s] = a) : (a = u);
      }
      for (var c = 0, h = n; c < i; ++c) {
        var d = o[c];
        "1" == d && "r" == h
          ? (o[c] = "n")
          : Fe.test(d) && "r" == (h = d) && (o[c] = "R");
      }
      for (var f = 1, p = o[0]; f < i - 1; ++f) {
        var g = o[f];
        "+" == g && "1" == p && "1" == o[f + 1]
          ? (o[f] = "1")
          : "," != g || p != o[f + 1] || ("1" != p && "n" != p) || (o[f] = p),
          (p = g);
      }
      for (var m = 0; m < i; ++m) {
        var v = o[m];
        if ("," == v) o[m] = "N";
        else if ("%" == v) {
          for (var y = void 0, y = m + 1; y < i && "%" == o[y]; ++y);
          for (
            var b =
                (m && "!" == o[m - 1]) || (y < i && "1" == o[y]) ? "1" : "N",
              w = m;
            w < y;
            ++w
          )
            o[w] = b;
          m = y - 1;
        }
      }
      for (var x = 0, C = n; x < i; ++x) {
        var S = o[x];
        "L" == C && "1" == S ? (o[x] = "L") : Fe.test(S) && (C = S);
      }
      for (var L = 0; L < i; ++L)
        if (He.test(o[L])) {
          for (var k = void 0, k = L + 1; k < i && He.test(o[k]); ++k);
          for (
            var T = "L" == (L ? o[L - 1] : n),
              M = T == ("L" == (k < i ? o[k] : n)) ? (T ? "L" : "R") : n,
              N = L;
            N < k;
            ++N
          )
            o[N] = M;
          L = k - 1;
        }
      for (var O, A = [], D = 0; D < i; )
        if (Ee.test(o[D])) {
          var P = D;
          for (++D; D < i && Ee.test(o[D]); ++D);
          A.push(new ze(0, P, D));
        } else {
          var W = D,
            H = A.length,
            F = "rtl" == t ? 1 : 0;
          for (++D; D < i && "L" != o[D]; ++D);
          for (var E = W; E < D; )
            if (Pe.test(o[E])) {
              W < E && (A.splice(H, 0, new ze(1, W, E)), (H += F));
              var I = E;
              for (++E; E < D && Pe.test(o[E]); ++E);
              A.splice(H, 0, new ze(2, I, E)), (H += F), (W = E);
            } else ++E;
          W < D && A.splice(H, 0, new ze(1, W, D));
        }
      return (
        "ltr" == t &&
          (1 == A[0].level &&
            (O = e.match(/^\s+/)) &&
            ((A[0].from = O[0].length), A.unshift(new ze(0, 0, O[0].length))),
          1 == z(A).level &&
            (O = e.match(/\s+$/)) &&
            ((z(A).to -= O[0].length), A.push(new ze(0, i - O[0].length, i)))),
        "rtl" == t ? A.reverse() : A
      );
    };
  function ze(e, t, n) {
    (this.level = e), (this.from = t), (this.to = n);
  }
  function Re(e, t) {
    var n = e.order;
    return (n = null == n ? (e.order = Ie(e.text, t)) : n);
  }
  var Be = [],
    k = function (e, t, n) {
      e.addEventListener
        ? e.addEventListener(t, n, !1)
        : e.attachEvent
        ? e.attachEvent("on" + t, n)
        : ((e = e._handlers || (e._handlers = {}))[t] = (e[t] || Be).concat(n));
    };
  function Ge(e, t) {
    return (e._handlers && e._handlers[t]) || Be;
  }
  function T(e, t, n) {
    var r;
    e.removeEventListener
      ? e.removeEventListener(t, n, !1)
      : e.detachEvent
      ? e.detachEvent("on" + t, n)
      : (r = (e = e._handlers) && e[t]) &&
        -1 < (n = L(r, n)) &&
        (e[t] = r.slice(0, n).concat(r.slice(n + 1)));
  }
  function O(e, t) {
    var n = Ge(e, t);
    if (n.length)
      for (
        var r = Array.prototype.slice.call(arguments, 2), i = 0;
        i < n.length;
        ++i
      )
        n[i].apply(null, r);
  }
  function A(e, t, n) {
    return (
      "string" == typeof t &&
        (t = {
          type: t,
          preventDefault: function () {
            this.defaultPrevented = !0;
          },
        }),
      O(e, n || t.type, e, t),
      Xe(t) || t.codemirrorIgnore
    );
  }
  function Ue(e) {
    var t = e._handlers && e._handlers.cursorActivity;
    if (t)
      for (
        var n =
            e.curOp.cursorActivityHandlers ||
            (e.curOp.cursorActivityHandlers = []),
          r = 0;
        r < t.length;
        ++r
      )
        -1 == L(n, t[r]) && n.push(t[r]);
  }
  function Ve(e, t) {
    return 0 < Ge(e, t).length;
  }
  function Ke(e) {
    (e.prototype.on = function (e, t) {
      k(this, e, t);
    }),
      (e.prototype.off = function (e, t) {
        T(this, e, t);
      });
  }
  function D(e) {
    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
  }
  function je(e) {
    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
  }
  function Xe(e) {
    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
  }
  function Ye(e) {
    D(e), je(e);
  }
  function $e(e) {
    return e.target || e.srcElement;
  }
  function _e(e) {
    var t = e.which;
    return (
      null == t &&
        (1 & e.button
          ? (t = 1)
          : 2 & e.button
          ? (t = 3)
          : 4 & e.button && (t = 2)),
      (t = C && e.ctrlKey && 1 == t ? 3 : t)
    );
  }
  var qe,
    Ze,
    Qe = (function () {
      if (w && v < 9) return !1;
      var e = M("div");
      return "draggable" in e || "dragDrop" in e;
    })();
  var Je =
      3 != "\n\nb".split(/\n/).length
        ? function (e) {
            for (var t = 0, n = [], r = e.length; t <= r; ) {
              var i = e.indexOf("\n", t),
                o =
                  (-1 == i && (i = e.length),
                  e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i)),
                l = o.indexOf("\r");
              -1 != l
                ? (n.push(o.slice(0, l)), (t += l + 1))
                : (n.push(o), (t = i + 1));
            }
            return n;
          }
        : function (e) {
            return e.split(/\r\n?|\n/);
          },
    et = window.getSelection
      ? function (e) {
          try {
            return e.selectionStart != e.selectionEnd;
          } catch (e) {
            return !1;
          }
        }
      : function (e) {
          var t;
          try {
            t = e.ownerDocument.selection.createRange();
          } catch (e) {}
          return (
            !(!t || t.parentElement() != e) &&
            0 != t.compareEndPoints("StartToEnd", t)
          );
        },
    tt =
      "oncopy" in (l = M("div")) ||
      (l.setAttribute("oncopy", "return;"), "function" == typeof l.oncopy),
    nt = null;
  var rt = {},
    it = {};
  function ot(e) {
    if ("string" == typeof e && it.hasOwnProperty(e)) e = it[e];
    else if (e && "string" == typeof e.name && it.hasOwnProperty(e.name)) {
      var t = it[e.name];
      (e = xe((t = "string" == typeof t ? { name: t } : t), e)).name = t.name;
    } else {
      if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
        return ot("application/xml");
      if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
        return ot("application/json");
    }
    return "string" == typeof e ? { name: e } : e || { name: "null" };
  }
  function lt(e, t) {
    t = ot(t);
    var n = rt[t.name];
    if (!n) return lt(e, "text/plain");
    var r = n(e, t);
    if (st.hasOwnProperty(t.name)) {
      var i,
        o = st[t.name];
      for (i in o)
        o.hasOwnProperty(i) &&
          (r.hasOwnProperty(i) && (r["_" + i] = r[i]), (r[i] = o[i]));
    }
    if (
      ((r.name = t.name),
      t.helperType && (r.helperType = t.helperType),
      t.modeProps)
    )
      for (var l in t.modeProps) r[l] = t.modeProps[l];
    return r;
  }
  var st = {};
  function at(e, t) {
    ue(t, st.hasOwnProperty(e) ? st[e] : (st[e] = {}));
  }
  function ut(e, t) {
    if (!0 === t) return t;
    if (e.copyState) return e.copyState(t);
    var n,
      r = {};
    for (n in t) {
      var i = t[n];
      i instanceof Array && (i = i.concat([])), (r[n] = i);
    }
    return r;
  }
  function ct(e, t) {
    for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
      (t = n.state), (e = n.mode);
    return n || { mode: e, state: t };
  }
  function ht(e, t, n) {
    return !e.startState || e.startState(t, n);
  }
  var g = function (e, t, n) {
    (this.pos = this.start = 0),
      (this.string = e),
      (this.tabSize = t || 8),
      (this.lastColumnPos = this.lastColumnValue = 0),
      (this.lineStart = 0),
      (this.lineOracle = n);
  };
  function W(e, t) {
    if ((t -= e.first) < 0 || t >= e.size)
      throw new Error(
        "There is no line " + (t + e.first) + " in the document."
      );
    for (var n = e; !n.lines; )
      for (var r = 0; ; ++r) {
        var i = n.children[r],
          o = i.chunkSize();
        if (t < o) {
          n = i;
          break;
        }
        t -= o;
      }
    return n.lines[t];
  }
  function dt(e, t, n) {
    var r = [],
      i = t.line;
    return (
      e.iter(t.line, n.line + 1, function (e) {
        e = e.text;
        i == n.line && (e = e.slice(0, n.ch)),
          i == t.line && (e = e.slice(t.ch)),
          r.push(e),
          ++i;
      }),
      r
    );
  }
  function ft(e, t, n) {
    var r = [];
    return (
      e.iter(t, n, function (e) {
        r.push(e.text);
      }),
      r
    );
  }
  function pt(e, t) {
    var n = t - e.height;
    if (n) for (var r = e; r; r = r.parent) r.height += n;
  }
  function H(e) {
    if (null == e.parent) return null;
    for (
      var t = e.parent, n = L(t.lines, e), r = t.parent;
      r;
      r = (t = r).parent
    )
      for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
    return n + t.first;
  }
  function gt(e, t) {
    var n = e.first;
    e: do {
      for (var r = 0; r < e.children.length; ++r) {
        var i = e.children[r],
          o = i.height;
        if (t < o) {
          e = i;
          continue e;
        }
        (t -= o), (n += i.chunkSize());
      }
      return n;
    } while (!e.lines);
    for (var l = 0; l < e.lines.length; ++l) {
      var s = e.lines[l].height;
      if (t < s) break;
      t -= s;
    }
    return n + l;
  }
  function mt(e, t) {
    return t >= e.first && t < e.first + e.size;
  }
  function vt(e, t) {
    return String(e.lineNumberFormatter(t + e.firstLineNumber));
  }
  function F(e, t, n) {
    if ((void 0 === n && (n = null), !(this instanceof F)))
      return new F(e, t, n);
    (this.line = e), (this.ch = t), (this.sticky = n);
  }
  function E(e, t) {
    return e.line - t.line || e.ch - t.ch;
  }
  function yt(e, t) {
    return e.sticky == t.sticky && 0 == E(e, t);
  }
  function bt(e) {
    return F(e.line, e.ch);
  }
  function wt(e, t) {
    return E(e, t) < 0 ? t : e;
  }
  function xt(e, t) {
    return E(e, t) < 0 ? e : t;
  }
  function Ct(e, t) {
    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
  }
  function P(e, t) {
    if (t.line < e.first) return F(e.first, 0);
    var n = e.first + e.size - 1;
    return t.line > n
      ? F(n, W(e, n).text.length)
      : ((e = W(e, (n = t).line).text.length),
        null == (t = n.ch) || e < t ? F(n.line, e) : t < 0 ? F(n.line, 0) : n);
  }
  function St(e, t) {
    for (var n = [], r = 0; r < t.length; r++) n[r] = P(e, t[r]);
    return n;
  }
  (g.prototype.eol = function () {
    return this.pos >= this.string.length;
  }),
    (g.prototype.sol = function () {
      return this.pos == this.lineStart;
    }),
    (g.prototype.peek = function () {
      return this.string.charAt(this.pos) || void 0;
    }),
    (g.prototype.next = function () {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }),
    (g.prototype.eat = function (e) {
      var t = this.string.charAt(this.pos),
        e = "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t));
      if (e) return ++this.pos, t;
    }),
    (g.prototype.eatWhile = function (e) {
      for (var t = this.pos; this.eat(e); );
      return this.pos > t;
    }),
    (g.prototype.eatSpace = function () {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
        ++this.pos;
      return this.pos > e;
    }),
    (g.prototype.skipToEnd = function () {
      this.pos = this.string.length;
    }),
    (g.prototype.skipTo = function (e) {
      e = this.string.indexOf(e, this.pos);
      if (-1 < e) return (this.pos = e), !0;
    }),
    (g.prototype.backUp = function (e) {
      this.pos -= e;
    }),
    (g.prototype.column = function () {
      return (
        this.lastColumnPos < this.start &&
          ((this.lastColumnValue = S(
            this.string,
            this.start,
            this.tabSize,
            this.lastColumnPos,
            this.lastColumnValue
          )),
          (this.lastColumnPos = this.start)),
        this.lastColumnValue -
          (this.lineStart ? S(this.string, this.lineStart, this.tabSize) : 0)
      );
    }),
    (g.prototype.indentation = function () {
      return (
        S(this.string, null, this.tabSize) -
        (this.lineStart ? S(this.string, this.lineStart, this.tabSize) : 0)
      );
    }),
    (g.prototype.match = function (e, t, n) {
      var r;
      if ("string" != typeof e)
        return (r = this.string.slice(this.pos).match(e)) && 0 < r.index
          ? null
          : (r && !1 !== t && (this.pos += r[0].length), r);
      function i(e) {
        return n ? e.toLowerCase() : e;
      }
      return i(this.string.substr(this.pos, e.length)) == i(e)
        ? (!1 !== t && (this.pos += e.length), !0)
        : void 0;
    }),
    (g.prototype.current = function () {
      return this.string.slice(this.start, this.pos);
    }),
    (g.prototype.hideFirstChars = function (e, t) {
      this.lineStart += e;
      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }),
    (g.prototype.lookAhead = function (e) {
      var t = this.lineOracle;
      return t && t.lookAhead(e);
    }),
    (g.prototype.baseToken = function () {
      var e = this.lineOracle;
      return e && e.baseToken(this.pos);
    });
  function Lt(e, t) {
    (this.state = e), (this.lookAhead = t);
  }
  var kt = function (e, t, n, r) {
    (this.state = t),
      (this.doc = e),
      (this.line = n),
      (this.maxLookAhead = r || 0),
      (this.baseTokens = null),
      (this.baseTokenPos = 1);
  };
  function Tt(t, n, r, e) {
    for (
      var a = [t.state.modeGen],
        i = {},
        u =
          (Et(
            t,
            n.text,
            t.doc.mode,
            r,
            function (e, t) {
              a.push(e, t);
            },
            i,
            e
          ),
          r.state),
        o = 0;
      o < t.state.overlays.length;
      ++o
    )
      !(function (e) {
        r.baseTokens = a;
        var o = t.state.overlays[e],
          l = 1,
          s = 0;
        (r.state = !0),
          Et(
            t,
            n.text,
            o.mode,
            r,
            function (e, t) {
              for (var n = l; s < e; ) {
                var r = a[l];
                e < r && a.splice(l, 1, e, a[l + 1], r),
                  (l += 2),
                  (s = Math.min(e, r));
              }
              if (t)
                if (o.opaque)
                  a.splice(n, l - n, e, "overlay " + t), (l = n + 2);
                else
                  for (; n < l; n += 2) {
                    var i = a[n + 1];
                    a[n + 1] = (i ? i + " " : "") + "overlay " + t;
                  }
            },
            i
          ),
          (r.state = u),
          (r.baseTokens = null),
          (r.baseTokenPos = 1);
      })(o);
    return { styles: a, classes: i.bgClass || i.textClass ? i : null };
  }
  function Mt(e, t, n) {
    var r, i, o;
    return (
      (t.styles && t.styles[0] == e.state.modeGen) ||
        ((r = Nt(e, H(t))),
        (i =
          t.text.length > e.options.maxHighlightLength &&
          ut(e.doc.mode, r.state)),
        (o = Tt(e, t, r)),
        i && (r.state = i),
        (t.stateAfter = r.save(!i)),
        (t.styles = o.styles),
        o.classes
          ? (t.styleClasses = o.classes)
          : t.styleClasses && (t.styleClasses = null),
        n === e.doc.highlightFrontier &&
          (e.doc.modeFrontier = Math.max(
            e.doc.modeFrontier,
            ++e.doc.highlightFrontier
          ))),
      t.styles
    );
  }
  function Nt(n, r, e) {
    var t = n.doc,
      i = n.display;
    if (!t.mode.startState) return new kt(t, !0, r);
    var o = (function (e, t, n) {
        for (
          var r,
            i,
            o = e.doc,
            l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
            s = t;
          l < s;
          --s
        ) {
          if (s <= o.first) return o.first;
          var a = W(o, s - 1),
            u = a.stateAfter;
          if (
            u &&
            (!n || s + (u instanceof Lt ? u.lookAhead : 0) <= o.modeFrontier)
          )
            return s;
          u = S(a.text, null, e.options.tabSize);
          (null == i || u < r) && ((i = s - 1), (r = u));
        }
        return i;
      })(n, r, e),
      l = o > t.first && W(t, o - 1).stateAfter,
      s = l ? kt.fromSaved(t, l, o) : new kt(t, ht(t.mode), o);
    return (
      t.iter(o, r, function (e) {
        Ot(n, e.text, s);
        var t = s.line;
        (e.stateAfter =
          t == r - 1 || t % 5 == 0 || (t >= i.viewFrom && t < i.viewTo)
            ? s.save()
            : null),
          s.nextLine();
      }),
      e && (t.modeFrontier = s.line),
      s
    );
  }
  function Ot(e, t, n, r) {
    var i = e.doc.mode,
      o = new g(t, e.options.tabSize, n);
    for (o.start = o.pos = r || 0, "" == t && At(i, n.state); !o.eol(); )
      Dt(i, o, n.state), (o.start = o.pos);
  }
  function At(e, t) {
    if (e.blankLine) return e.blankLine(t);
    if (e.innerMode)
      return (
        (e = ct(e, t)), e.mode.blankLine ? e.mode.blankLine(e.state) : void 0
      );
  }
  function Dt(e, t, n, r) {
    for (var i = 0; i < 10; i++) {
      r && (r[0] = ct(e, n).mode);
      var o = e.token(t, n);
      if (t.pos > t.start) return o;
    }
    throw new Error("Mode " + e.name + " failed to advance stream.");
  }
  (kt.prototype.lookAhead = function (e) {
    var t = this.doc.getLine(this.line + e);
    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
  }),
    (kt.prototype.baseToken = function (e) {
      if (!this.baseTokens) return null;
      for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
      var t = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: t && t.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - e,
      };
    }),
    (kt.prototype.nextLine = function () {
      this.line++, 0 < this.maxLookAhead && this.maxLookAhead--;
    }),
    (kt.fromSaved = function (e, t, n) {
      return t instanceof Lt
        ? new kt(e, ut(e.mode, t.state), n, t.lookAhead)
        : new kt(e, ut(e.mode, t), n);
    }),
    (kt.prototype.save = function (e) {
      e = !1 !== e ? ut(this.doc.mode, this.state) : this.state;
      return 0 < this.maxLookAhead ? new Lt(e, this.maxLookAhead) : e;
    });
  var Wt = function (e, t, n) {
    (this.start = e.start),
      (this.end = e.pos),
      (this.string = e.current()),
      (this.type = t || null),
      (this.state = n);
  };
  function Ht(e, t, n, r) {
    var i,
      o,
      l = e.doc,
      s = l.mode,
      a = W(l, (t = P(l, t)).line),
      u = Nt(e, t.line, n),
      c = new g(a.text, e.options.tabSize, u);
    for (r && (o = []); (r || c.pos < t.ch) && !c.eol(); )
      (c.start = c.pos),
        (i = Dt(s, c, u.state)),
        r && o.push(new Wt(c, i, ut(l.mode, u.state)));
    return r ? o : new Wt(c, i, u.state);
  }
  function Ft(e, t) {
    if (e)
      for (;;) {
        var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!n) break;
        e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
        var r = n[1] ? "bgClass" : "textClass";
        null == t[r]
          ? (t[r] = n[2])
          : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) ||
            (t[r] += " " + n[2]);
      }
    return e;
  }
  function Et(e, t, n, r, i, o, l) {
    var s = n.flattenSpans,
      a = (null == s && (s = e.options.flattenSpans), 0),
      u = null,
      c = new g(t, e.options.tabSize, r),
      h = e.options.addModeClass && [null];
    for ("" == t && Ft(At(n, r.state), o); !c.eol(); ) {
      var d,
        f =
          c.pos > e.options.maxHighlightLength
            ? ((s = !1), l && Ot(e, t, r, c.pos), (c.pos = t.length), null)
            : Ft(Dt(n, c, r.state, h), o);
      if (
        (!h || ((d = h[0].name) && (f = "m-" + (f ? d + " " + f : d))),
        !s || u != f)
      ) {
        for (; a < c.start; ) i((a = Math.min(c.start, a + 5e3)), u);
        u = f;
      }
      c.start = c.pos;
    }
    for (; a < c.pos; ) {
      var p = Math.min(c.pos, a + 5e3);
      i(p, u), (a = p);
    }
  }
  var Pt = !1,
    It = !1;
  function zt(e, t, n) {
    (this.marker = e), (this.from = t), (this.to = n);
  }
  function Rt(e, t) {
    if (e)
      for (var n = 0; n < e.length; ++n) {
        var r = e[n];
        if (r.marker == t) return r;
      }
  }
  function Bt(e, t) {
    if (t.full) return null;
    var n = mt(e, t.from.line) && W(e, t.from.line).markedSpans,
      e = mt(e, t.to.line) && W(e, t.to.line).markedSpans;
    if (!n && !e) return null;
    var r = t.from.ch,
      i = t.to.ch,
      o = 0 == E(t.from, t.to),
      l = (function (e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o,
              l = e[i],
              s = l.marker;
            (!(
              null == l.from || (s.inclusiveLeft ? l.from <= t : l.from < t)
            ) &&
              (l.from != t ||
                "bookmark" != s.type ||
                (n && l.marker.insertLeft))) ||
              ((o = null == l.to || (s.inclusiveRight ? l.to >= t : l.to > t)),
              (r = r || []).push(new zt(s, l.from, o ? null : l.to)));
          }
        return r;
      })(n, r, o),
      s = (function (e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var o,
              l = e[i],
              s = l.marker;
            (!(null == l.to || (s.inclusiveRight ? l.to >= t : l.to > t)) &&
              (l.from != t ||
                "bookmark" != s.type ||
                (n && !l.marker.insertLeft))) ||
              ((o =
                null == l.from || (s.inclusiveLeft ? l.from <= t : l.from < t)),
              (r = r || []).push(
                new zt(s, o ? null : l.from - t, null == l.to ? null : l.to - t)
              ));
          }
        return r;
      })(e, i, o),
      a = 1 == t.text.length,
      u = z(t.text).length + (a ? r : 0);
    if (l)
      for (var c = 0; c < l.length; ++c) {
        var h,
          d = l[c];
        null == d.to &&
          ((h = Rt(s, d.marker))
            ? a && (d.to = null == h.to ? null : h.to + u)
            : (d.to = r));
      }
    if (s)
      for (var f = 0; f < s.length; ++f) {
        var p = s[f];
        null != p.to && (p.to += u),
          null == p.from
            ? Rt(l, p.marker) || ((p.from = u), a && (l = l || []).push(p))
            : ((p.from += u), a && (l = l || []).push(p));
      }
    (l = l && Gt(l)), s && s != l && (s = Gt(s));
    var g = [l];
    if (!a) {
      var m,
        v = t.text.length - 2;
      if (0 < v && l)
        for (var y = 0; y < l.length; ++y)
          null == l[y].to &&
            (m = m || []).push(new zt(l[y].marker, null, null));
      for (var b = 0; b < v; ++b) g.push(m);
      g.push(s);
    }
    return g;
  }
  function Gt(e) {
    for (var t = 0; t < e.length; ++t) {
      var n = e[t];
      null != n.from &&
        n.from == n.to &&
        !1 !== n.marker.clearWhenEmpty &&
        e.splice(t--, 1);
    }
    return e.length ? e : null;
  }
  function Ut(e) {
    var t = e.markedSpans;
    if (t) {
      for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
      e.markedSpans = null;
    }
  }
  function Vt(e, t) {
    if (t) {
      for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
      e.markedSpans = t;
    }
  }
  function Kt(e) {
    return e.inclusiveLeft ? -1 : 0;
  }
  function jt(e) {
    return e.inclusiveRight ? 1 : 0;
  }
  function Xt(e, t) {
    var n = e.lines.length - t.lines.length;
    if (0 != n) return n;
    var n = e.find(),
      r = t.find(),
      i = E(n.from, r.from) || Kt(e) - Kt(t);
    if (i) return -i;
    i = E(n.to, r.to) || jt(e) - jt(t);
    return i || t.id - e.id;
  }
  function Yt(e, t) {
    var n,
      r = It && e.markedSpans;
    if (r)
      for (var i, o = 0; o < r.length; ++o)
        (i = r[o]).marker.collapsed &&
          null == (t ? i.from : i.to) &&
          (!n || Xt(n, i.marker) < 0) &&
          (n = i.marker);
    return n;
  }
  function $t(e) {
    return Yt(e, !0);
  }
  function _t(e) {
    return Yt(e, !1);
  }
  function qt(e, t, n, r, i) {
    var e = W(e, t),
      o = It && e.markedSpans;
    if (o)
      for (var l = 0; l < o.length; ++l) {
        var s = o[l];
        if (s.marker.collapsed) {
          var a = s.marker.find(0),
            u = E(a.from, n) || Kt(s.marker) - Kt(i),
            c = E(a.to, r) || jt(s.marker) - jt(i);
          if (
            !((0 <= u && c <= 0) || (u <= 0 && 0 <= c)) &&
            ((u <= 0 &&
              (s.marker.inclusiveRight && i.inclusiveLeft
                ? 0 <= E(a.to, n)
                : 0 < E(a.to, n))) ||
              (0 <= u &&
                (s.marker.inclusiveRight && i.inclusiveLeft
                  ? E(a.from, r) <= 0
                  : E(a.from, r) < 0)))
          )
            return 1;
        }
      }
  }
  function Zt(e) {
    for (var t; (t = $t(e)); ) e = t.find(-1, !0).line;
    return e;
  }
  function Qt(e, t) {
    var e = W(e, t),
      n = Zt(e);
    return e == n ? t : H(n);
  }
  function Jt(e, t) {
    if (t > e.lastLine()) return t;
    var n,
      r = W(e, t);
    if (!en(e, r)) return t;
    for (; (n = _t(r)); ) r = n.find(1, !0).line;
    return H(r) + 1;
  }
  function en(e, t) {
    var n = It && t.markedSpans;
    if (n)
      for (var r, i = 0; i < n.length; ++i)
        if ((r = n[i]).marker.collapsed) {
          if (null == r.from) return !0;
          if (
            !r.marker.widgetNode &&
            0 == r.from &&
            r.marker.inclusiveLeft &&
            (function e(t, n, r) {
              {
                var i;
                if (null == r.to)
                  return (
                    (i = r.marker.find(1, !0)),
                    e(t, i.line, Rt(i.line.markedSpans, r.marker))
                  );
              }
              if (r.marker.inclusiveRight && r.to == n.text.length) return !0;
              for (var o = void 0, l = 0; l < n.markedSpans.length; ++l)
                if (
                  (o = n.markedSpans[l]).marker.collapsed &&
                  !o.marker.widgetNode &&
                  o.from == r.to &&
                  (null == o.to || o.to != r.from) &&
                  (o.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                  e(t, n, o)
                )
                  return !0;
            })(e, t, r)
          )
            return !0;
        }
  }
  function tn(e) {
    for (var t = 0, n = (e = Zt(e)).parent, r = 0; r < n.lines.length; ++r) {
      var i = n.lines[r];
      if (i == e) break;
      t += i.height;
    }
    for (var o = n.parent; o; o = (n = o).parent)
      for (var l = 0; l < o.children.length; ++l) {
        var s = o.children[l];
        if (s == n) break;
        t += s.height;
      }
    return t;
  }
  function nn(e) {
    if (0 == e.height) return 0;
    for (var t, n = e.text.length, r = e; (t = $t(r)); ) {
      var i = t.find(0, !0),
        r = i.from.line;
      n += i.from.ch - i.to.ch;
    }
    for (r = e; (t = _t(r)); )
      var o = t.find(0, !0),
        n =
          (n -= r.text.length - o.from.ch) +
          ((r = o.to.line).text.length - o.to.ch);
    return n;
  }
  function rn(e) {
    var n = e.display,
      e = e.doc;
    (n.maxLine = W(e, e.first)),
      (n.maxLineLength = nn(n.maxLine)),
      (n.maxLineChanged = !0),
      e.iter(function (e) {
        var t = nn(e);
        t > n.maxLineLength && ((n.maxLineLength = t), (n.maxLine = e));
      });
  }
  var on = function (e, t, n) {
    (this.text = e), Vt(this, t), (this.height = n ? n(this) : 1);
  };
  (on.prototype.lineNo = function () {
    return H(this);
  }),
    Ke(on);
  var ln = {},
    sn = {};
  function an(e, t) {
    if (!e || /^\s*$/.test(e)) return null;
    t = t.addModeClass ? sn : ln;
    return t[e] || (t[e] = e.replace(/\S+/g, "cm-$&"));
  }
  function un(e, t) {
    var n = ne("span", null, null, x ? "padding-right: .1px" : null),
      r = {
        pre: ne("pre", [n], "CodeMirror-line"),
        content: n,
        col: 0,
        pos: 0,
        cm: e,
        trailingSpace: !1,
        splitSpaces: e.getOption("lineWrapping"),
      };
    t.measure = {};
    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
      var o = i ? t.rest[i - 1] : t.line,
        l = void 0,
        l =
          ((r.pos = 0),
          (r.addToken = hn),
          (function (e) {
            if (null != Ze) return Ze;
            var t = y(e, document.createTextNode("AخA")),
              n = le(t, 0, 1).getBoundingClientRect(),
              t = le(t, 1, 2).getBoundingClientRect();
            return (
              te(e), n && n.left != n.right && (Ze = t.right - n.right < 3)
            );
          })(e.display.measure) &&
            (l = Re(o, e.doc.direction)) &&
            (r.addToken = (function (h, d) {
              return function (e, t, n, r, i, o, l) {
                n = n ? n + " cm-force-border" : "cm-force-border";
                for (var s = e.pos, a = s + t.length; ; ) {
                  for (
                    var u = void 0, c = 0;
                    c < d.length && !((u = d[c]).to > s && u.from <= s);
                    c++
                  );
                  if (u.to >= a) return h(e, t, n, r, i, o, l);
                  h(e, t.slice(0, u.to - s), n, r, null, o, l),
                    (r = null),
                    (t = t.slice(u.to - s)),
                    (s = u.to);
                }
              };
            })(r.addToken, l)),
          (r.map = []),
          t != e.display.externalMeasured && H(o));
      !(function (e, t, n) {
        var r = e.markedSpans,
          i = e.text,
          o = 0;
        if (r)
          for (
            var l, s, a, u, c, h, d, f = i.length, p = 0, g = 1, m = "", v = 0;
            ;

          ) {
            if (v == p) {
              (a = u = c = s = ""), (h = d = null), (v = 1 / 0);
              for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                var x = r[w],
                  C = x.marker;
                if ("bookmark" == C.type && x.from == p && C.widgetNode)
                  y.push(C);
                else if (
                  x.from <= p &&
                  (null == x.to ||
                    x.to > p ||
                    (C.collapsed && x.to == p && x.from == p))
                ) {
                  if (
                    (null != x.to &&
                      x.to != p &&
                      v > x.to &&
                      ((v = x.to), (u = "")),
                    C.className && (a += " " + C.className),
                    C.css && (s = (s ? s + ";" : "") + C.css),
                    C.startStyle && x.from == p && (c += " " + C.startStyle),
                    C.endStyle &&
                      x.to == v &&
                      (b = b || []).push(C.endStyle, x.to),
                    C.title && ((d = d || {}).title = C.title),
                    C.attributes)
                  )
                    for (var S in C.attributes)
                      (d = d || {})[S] = C.attributes[S];
                  C.collapsed && (!h || Xt(h.marker, C) < 0) && (h = x);
                } else x.from > p && v > x.from && (v = x.from);
              }
              if (b)
                for (var L = 0; L < b.length; L += 2)
                  b[L + 1] == v && (u += " " + b[L]);
              if (!h || h.from == p)
                for (var k = 0; k < y.length; ++k) dn(t, 0, y[k]);
              if (h && (h.from || 0) == p) {
                if (
                  (dn(
                    t,
                    (null == h.to ? f + 1 : h.to) - p,
                    h.marker,
                    null == h.from
                  ),
                  null == h.to)
                )
                  return;
                h.to == p && (h = !1);
              }
            }
            if (f <= p) break;
            for (var T = Math.min(f, v); ; ) {
              if (m) {
                var M,
                  N = p + m.length;
                if (
                  (h ||
                    ((M = T < N ? m.slice(0, T - p) : m),
                    t.addToken(
                      t,
                      M,
                      l ? l + a : a,
                      c,
                      p + M.length == v ? u : "",
                      s,
                      d
                    )),
                  T <= N)
                ) {
                  (m = m.slice(T - p)), (p = T);
                  break;
                }
                (p = N), (c = "");
              }
              (m = i.slice(o, (o = n[g++]))), (l = an(n[g++], t.cm.options));
            }
          }
        else
          for (var O = 1; O < n.length; O += 2)
            t.addToken(t, i.slice(o, (o = n[O])), an(n[O + 1], t.cm.options));
      })(o, r, Mt(e, o, l)),
        o.styleClasses &&
          (o.styleClasses.bgClass &&
            (r.bgClass = oe(o.styleClasses.bgClass, r.bgClass || "")),
          o.styleClasses.textClass &&
            (r.textClass = oe(o.styleClasses.textClass, r.textClass || ""))),
        0 == r.map.length &&
          r.map.push(
            0,
            0,
            r.content.appendChild(
              ((l = e.display.measure),
              (o = void 0),
              null == qe &&
                ((o = M("span", "​")),
                y(l, M("span", [o, document.createTextNode("x")])),
                0 != l.firstChild.offsetHeight &&
                  (qe =
                    o.offsetWidth <= 1 && 2 < o.offsetHeight && !(w && v < 8))),
              (l = qe
                ? M("span", "​")
                : M(
                    "span",
                    " ",
                    null,
                    "display: inline-block; width: 1px; margin-right: -1px"
                  )).setAttribute("cm-text", ""),
              l)
            )
          ),
        0 == i
          ? ((t.measure.map = r.map), (t.measure.cache = {}))
          : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
            (t.measure.caches || (t.measure.caches = [])).push({}));
    }
    return (
      x &&
        ((n = r.content.lastChild),
        (/\bcm-tab\b/.test(n.className) ||
          (n.querySelector && n.querySelector(".cm-tab"))) &&
          (r.content.className = "cm-tab-wrap-hack")),
      O(e, "renderLine", e, t.line, r.pre),
      r.pre.className && (r.textClass = oe(r.pre.className, r.textClass || "")),
      r
    );
  }
  function cn(e) {
    var t = M("span", "•", "cm-invalidchar");
    return (
      (t.title = "\\u" + e.charCodeAt(0).toString(16)),
      t.setAttribute("aria-label", t.title),
      t
    );
  }
  function hn(e, t, n, r, i, o, l) {
    if (t) {
      var s = e.splitSpaces
          ? (function (e, t) {
              if (1 < e.length && !/  /.test(e)) return e;
              for (var n = t, r = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o ||
                  !n ||
                  (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) ||
                  (o = " "),
                  (r += o),
                  (n = " " == o);
              }
              return r;
            })(t, e.trailingSpace)
          : t,
        a = e.cm.state.specialChars,
        u = !1;
      if (a.test(t))
        for (var c = document.createDocumentFragment(), h = 0; ; ) {
          a.lastIndex = h;
          var d = a.exec(t),
            f = d ? d.index - h : t.length - h;
          if (
            (f &&
              ((p = document.createTextNode(s.slice(h, h + f))),
              w && v < 9 ? c.appendChild(M("span", [p])) : c.appendChild(p),
              e.map.push(e.pos, e.pos + f, p),
              (e.col += f),
              (e.pos += f)),
            !d)
          )
            break;
          h += 1 + f;
          var p = void 0;
          "\t" == d[0]
            ? ((f = (f = e.cm.options.tabSize) - (e.col % f)),
              (p = c.appendChild(M("span", ye(f), "cm-tab"))).setAttribute(
                "role",
                "presentation"
              ),
              p.setAttribute("cm-text", "\t"),
              (e.col += f))
            : ("\r" == d[0] || "\n" == d[0]
                ? (p = c.appendChild(
                    M("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar")
                  )).setAttribute("cm-text", d[0])
                : ((p = e.cm.options.specialCharPlaceholder(d[0])).setAttribute(
                    "cm-text",
                    d[0]
                  ),
                  w && v < 9
                    ? c.appendChild(M("span", [p]))
                    : c.appendChild(p)),
              (e.col += 1)),
            e.map.push(e.pos, e.pos + 1, p),
            e.pos++;
        }
      else
        (e.col += t.length),
          (c = document.createTextNode(s)),
          e.map.push(e.pos, e.pos + t.length, c),
          w && v < 9 && (u = !0),
          (e.pos += t.length);
      if (
        ((e.trailingSpace = 32 == s.charCodeAt(t.length - 1)),
        n || r || i || u || o || l)
      ) {
        var u = n || "",
          g = (r && (u += r), i && (u += i), M("span", [c], u, o));
        if (l)
          for (var m in l)
            l.hasOwnProperty(m) &&
              "style" != m &&
              "class" != m &&
              g.setAttribute(m, l[m]);
        return e.content.appendChild(g);
      }
      e.content.appendChild(c);
    }
  }
  function dn(e, t, n, r) {
    var i = !r && n.widgetNode;
    i && e.map.push(e.pos, e.pos + t, i),
      !r &&
        e.cm.display.input.needsContentAttribute &&
        (i =
          i ||
          e.content.appendChild(document.createElement("span"))).setAttribute(
          "cm-marker",
          n.id
        ),
      i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
      (e.pos += t),
      (e.trailingSpace = !1);
  }
  function fn(e, t, n) {
    (this.line = t),
      (this.rest = (function (e) {
        for (var t, n; (t = _t(e)); )
          (e = t.find(1, !0).line), (n = n || []).push(e);
        return n;
      })(t)),
      (this.size = this.rest ? H(z(this.rest)) - n + 1 : 1),
      (this.node = this.text = null),
      (this.hidden = en(e, t));
  }
  function pn(e, t, n) {
    for (var r = [], i = t; i < n; i = l) {
      var o = new fn(e.doc, W(e.doc, i), i),
        l = i + o.size;
      r.push(o);
    }
    return r;
  }
  var gn = null;
  var mn = null;
  function b(e, t) {
    var n = Ge(e, t);
    if (n.length)
      for (
        var r,
          i = Array.prototype.slice.call(arguments, 2),
          o =
            (gn
              ? (r = gn.delayedCallbacks)
              : mn
              ? (r = mn)
              : ((r = mn = []), setTimeout(vn, 0)),
            0);
        o < n.length;
        ++o
      )
        !(function (e) {
          r.push(function () {
            return n[e].apply(null, i);
          });
        })(o);
  }
  function vn() {
    var e = mn;
    mn = null;
    for (var t = 0; t < e.length; ++t) e[t]();
  }
  function yn(e, t, n, r) {
    for (var i = 0; i < t.changes.length; i++) {
      var o = t.changes[i];
      if ("text" == o) {
        u = a = s = l = void 0;
        var l = e,
          s = t,
          a = s.text.className,
          u = wn(l, s);
        s.text == s.node && (s.node = u.pre),
          s.text.parentNode.replaceChild(u.pre, s.text),
          (s.text = u.pre),
          u.bgClass != s.bgClass || u.textClass != s.textClass
            ? ((s.bgClass = u.bgClass), (s.textClass = u.textClass), xn(l, s))
            : a && (s.text.className = a);
      } else if ("gutter" == o) Cn(e, t, n, r);
      else if ("class" == o) xn(e, t);
      else if ("widget" == o) {
        f = d = h = l = c = u = void 0;
        var u = e,
          c = t,
          l = r;
        c.alignable && (c.alignable = null);
        for (
          var h = J("CodeMirror-linewidget"), d = c.node.firstChild, f = void 0;
          d;
          d = f
        )
          (f = d.nextSibling), h.test(d.className) && c.node.removeChild(d);
        Sn(u, c, l);
      }
    }
    t.changes = null;
  }
  function bn(e) {
    return (
      e.node == e.text &&
        ((e.node = M("div", null, null, "position: relative")),
        e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
        e.node.appendChild(e.text),
        w && v < 8 && (e.node.style.zIndex = 2)),
      e.node
    );
  }
  function wn(e, t) {
    var n = e.display.externalMeasured;
    return n && n.line == t.line
      ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built)
      : un(e, t);
  }
  function xn(e, t) {
    (e = e),
      (i = (n = t).bgClass
        ? n.bgClass + " " + (n.line.bgClass || "")
        : n.line.bgClass) && (i += " CodeMirror-linebackground"),
      n.background
        ? i
          ? (n.background.className = i)
          : (n.background.parentNode.removeChild(n.background),
            (n.background = null))
        : i &&
          ((r = bn(n)),
          (n.background = r.insertBefore(M("div", null, i), r.firstChild)),
          e.display.input.setUneditable(n.background)),
      t.line.wrapClass
        ? (bn(t).className = t.line.wrapClass)
        : t.node != t.text && (t.node.className = "");
    var n,
      r,
      i = t.textClass
        ? t.textClass + " " + (t.line.textClass || "")
        : t.line.textClass;
    t.text.className = i || "";
  }
  function Cn(e, t, n, r) {
    t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
      t.gutterBackground &&
        (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
      t.line.gutterClass &&
        ((o = bn(t)),
        (t.gutterBackground = M(
          "div",
          null,
          "CodeMirror-gutter-background " + t.line.gutterClass,
          "left: " +
            (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
            "px; width: " +
            r.gutterTotalWidth +
            "px"
        )),
        e.display.input.setUneditable(t.gutterBackground),
        o.insertBefore(t.gutterBackground, t.text));
    var i = t.line.gutterMarkers;
    if (e.options.lineNumbers || i) {
      var o = bn(t),
        l = (t.gutter = M(
          "div",
          null,
          "CodeMirror-gutter-wrapper",
          "left: " +
            (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
            "px"
        ));
      if (
        (l.setAttribute("aria-hidden", "true"),
        e.display.input.setUneditable(l),
        o.insertBefore(l, t.text),
        t.line.gutterClass && (l.className += " " + t.line.gutterClass),
        !e.options.lineNumbers ||
          (i && i["CodeMirror-linenumbers"]) ||
          (t.lineNumber = l.appendChild(
            M(
              "div",
              vt(e.options, n),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " +
                r.gutterLeft["CodeMirror-linenumbers"] +
                "px; width: " +
                e.display.lineNumInnerWidth +
                "px"
            )
          )),
        i)
      )
        for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
          var a = e.display.gutterSpecs[s].className,
            u = i.hasOwnProperty(a) && i[a];
          u &&
            l.appendChild(
              M(
                "div",
                [u],
                "CodeMirror-gutter-elt",
                "left: " +
                  r.gutterLeft[a] +
                  "px; width: " +
                  r.gutterWidth[a] +
                  "px"
              )
            );
        }
    }
  }
  function Sn(e, t, n) {
    if ((Ln(e, t.line, t, n, !0), t.rest))
      for (var r = 0; r < t.rest.length; r++) Ln(e, t.rest[r], t, n, !1);
  }
  function Ln(e, t, n, r, i) {
    if (t.widgets)
      for (var o = bn(n), l = 0, s = t.widgets; l < s.length; ++l) {
        var a = s[l],
          u = M(
            "div",
            [a.node],
            "CodeMirror-linewidget" + (a.className ? " " + a.className : "")
          ),
          c =
            (a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
            (d = f = d = h = c = void 0),
            a),
          h = u,
          d = n,
          f = r;
        c.noHScroll &&
          ((d.alignable || (d.alignable = [])).push(h),
          (d = f.wrapperWidth),
          (h.style.left = f.fixedPos + "px"),
          c.coverGutter ||
            ((d -= f.gutterTotalWidth),
            (h.style.paddingLeft = f.gutterTotalWidth + "px")),
          (h.style.width = d + "px")),
          c.coverGutter &&
            ((h.style.zIndex = 5),
            (h.style.position = "relative"),
            c.noHScroll || (h.style.marginLeft = -f.gutterTotalWidth + "px")),
          e.display.input.setUneditable(u),
          i && a.above
            ? o.insertBefore(u, n.gutter || n.text)
            : o.appendChild(u),
          b(a, "redraw");
      }
  }
  function kn(e) {
    if (null != e.height) return e.height;
    var t,
      n = e.doc.cm;
    return n
      ? (re(document.body, e.node) ||
          ((t = "position: relative;"),
          e.coverGutter &&
            (t += "margin-left: -" + n.display.gutters.offsetWidth + "px;"),
          e.noHScroll &&
            (t += "width: " + n.display.wrapper.clientWidth + "px;"),
          y(n.display.measure, M("div", [e.node], null, t))),
        (e.height = e.node.parentNode.offsetHeight))
      : 0;
  }
  function Tn(e, t) {
    for (var n = $e(t); n != e.wrapper; n = n.parentNode)
      if (
        !n ||
        (1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) ||
        (n.parentNode == e.sizer && n != e.mover)
      )
        return 1;
  }
  function Mn(e) {
    return e.lineSpace.offsetTop;
  }
  function Nn(e) {
    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
  }
  function On(e) {
    if (e.cachedPaddingH) return e.cachedPaddingH;
    var t = y(e.measure, M("pre", "x", "CodeMirror-line-like")),
      t = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
      t = { left: parseInt(t.paddingLeft), right: parseInt(t.paddingRight) };
    return isNaN(t.left) || isNaN(t.right) || (e.cachedPaddingH = t), t;
  }
  function An(e) {
    return he - e.display.nativeBarWidth;
  }
  function Dn(e) {
    return e.display.scroller.clientWidth - An(e) - e.display.barWidth;
  }
  function Wn(e) {
    return e.display.scroller.clientHeight - An(e) - e.display.barHeight;
  }
  function Hn(e, t, n) {
    if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
    if (e.rest) {
      for (var r = 0; r < e.rest.length; r++)
        if (e.rest[r] == t)
          return { map: e.measure.maps[r], cache: e.measure.caches[r] };
      for (var i = 0; i < e.rest.length; i++)
        if (H(e.rest[i]) > n)
          return {
            map: e.measure.maps[i],
            cache: e.measure.caches[i],
            before: !0,
          };
    }
  }
  function Fn(e, t, n, r) {
    return In(e, Pn(e, t), n, r);
  }
  function En(e, t) {
    if (t >= e.display.viewFrom && t < e.display.viewTo)
      return e.display.view[dr(e, t)];
    e = e.display.externalMeasured;
    return e && t >= e.lineN && t < e.lineN + e.size ? e : void 0;
  }
  function Pn(e, t) {
    var n,
      r,
      i = H(t),
      o = En(e, i),
      e =
        (o && !o.text
          ? (o = null)
          : o && o.changes && (yn(e, o, i, sr(e)), (e.curOp.forceUpdate = !0)),
        o ||
          ((e = e),
          (r = H((n = Zt((n = t))))),
          ((n = e.display.externalMeasured = new fn(e.doc, n, r)).lineN = r),
          (r = n.built = un(e, n)),
          (n.text = r.pre),
          y(e.display.lineMeasure, r.pre),
          (o = n)),
        Hn(o, t, i));
    return {
      line: t,
      view: o,
      rect: null,
      map: e.map,
      cache: e.cache,
      before: e.before,
      hasHeights: !1,
    };
  }
  function In(e, t, n, r, i) {
    var o,
      l = (n = t.before ? -1 : n) + (r || "");
    if (t.cache.hasOwnProperty(l)) o = t.cache[l];
    else {
      if (
        (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
        !t.hasHeights)
      ) {
        var s = e,
          a = t.view,
          u = t.rect,
          c = s.options.lineWrapping,
          s = c && Dn(s);
        if (!a.measure.heights || (c && a.measure.width != s)) {
          var h = (a.measure.heights = []);
          if (c) {
            a.measure.width = s;
            for (
              var d = a.text.firstChild.getClientRects(), f = 0;
              f < d.length - 1;
              f++
            ) {
              var p = d[f],
                g = d[f + 1];
              2 < Math.abs(p.bottom - g.bottom) &&
                h.push((p.bottom + g.top) / 2 - u.top);
            }
          }
          h.push(u.bottom - u.top);
        }
        t.hasHeights = !0;
      }
      (o = (function (e, t, n, r) {
        var i,
          o = Bn(t.map, n, r),
          l = o.node,
          s = o.start,
          a = o.end,
          u = o.collapse;
        if (3 == l.nodeType) {
          for (var c = 0; c < 4; c++) {
            for (; s && Me(t.line.text.charAt(o.coverStart + s)); ) --s;
            for (
              ;
              o.coverStart + a < o.coverEnd &&
              Me(t.line.text.charAt(o.coverStart + a));

            )
              ++a;
            if (
              (i =
                w && v < 9 && 0 == s && a == o.coverEnd - o.coverStart
                  ? l.parentNode.getBoundingClientRect()
                  : (function (e, t) {
                      var n = Rn;
                      if ("left" == t)
                        for (
                          var r = 0;
                          r < e.length && (n = e[r]).left == n.right;
                          r++
                        );
                      else
                        for (
                          var i = e.length - 1;
                          0 <= i && (n = e[i]).left == n.right;
                          i--
                        );
                      return n;
                    })(le(l, s, a).getClientRects(), r)).left ||
              i.right ||
              0 == s
            )
              break;
            (a = s), (s -= 1), (u = "right");
          }
          w &&
            v < 11 &&
            (i = (function (e, t) {
              if (
                !window.screen ||
                null == screen.logicalXDPI ||
                screen.logicalXDPI == screen.deviceXDPI ||
                !(function (e) {
                  if (null != nt) return nt;
                  var t = (e = y(e, M("span", "x"))).getBoundingClientRect(),
                    e = le(e, 0, 1).getBoundingClientRect();
                  return (nt = 1 < Math.abs(t.left - e.left));
                })(e)
              )
                return t;
              var e = screen.logicalXDPI / screen.deviceXDPI,
                n = screen.logicalYDPI / screen.deviceYDPI;
              return {
                left: t.left * e,
                right: t.right * e,
                top: t.top * n,
                bottom: t.bottom * n,
              };
            })(e.display.measure, i));
        } else
          0 < s && (u = r = "right"),
            (i =
              e.options.lineWrapping && 1 < (n = l.getClientRects()).length
                ? n["right" == r ? n.length - 1 : 0]
                : l.getBoundingClientRect());
        !(w && v < 9) ||
          s ||
          (i && (i.left || i.right)) ||
          ((n = l.parentNode.getClientRects()[0]),
          (i = n
            ? {
                left: n.left,
                right: n.left + lr(e.display),
                top: n.top,
                bottom: n.bottom,
              }
            : Rn));
        for (
          var n = i.top - t.rect.top,
            h = i.bottom - t.rect.top,
            d = (n + h) / 2,
            f = t.view.measure.heights,
            p = 0;
          p < f.length - 1 && !(d < f[p]);
          p++
        );
        var g = p ? f[p - 1] : 0,
          m = f[p],
          g = {
            left: ("right" == u ? i.right : i.left) - t.rect.left,
            right: ("left" == u ? i.left : i.right) - t.rect.left,
            top: g,
            bottom: m,
          };
        i.left || i.right || (g.bogus = !0);
        e.options.singleCursorHeightPerLine || ((g.rtop = n), (g.rbottom = h));
        return g;
      })(e, t, n, r)).bogus || (t.cache[l] = o);
    }
    return {
      left: o.left,
      right: o.right,
      top: i ? o.rtop : o.top,
      bottom: i ? o.rbottom : o.bottom,
    };
  }
  var zn,
    Rn = { left: 0, right: 0, top: 0, bottom: 0 };
  function Bn(e, t, n) {
    for (var r, i, o, l, s, a, u = 0; u < e.length; u += 3)
      if (
        ((s = e[u]),
        (a = e[u + 1]),
        t < s
          ? ((i = 0), (o = 1), (l = "left"))
          : t < a
          ? (o = (i = t - s) + 1)
          : (u == e.length - 3 || (t == a && e[u + 3] > t)) &&
            ((i = (o = a - s) - 1), a <= t && (l = "right")),
        null != i)
      ) {
        if (
          ((r = e[u + 2]),
          s == a && n == (r.insertLeft ? "left" : "right") && (l = n),
          "left" == n && 0 == i)
        )
          for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
            (r = e[2 + (u -= 3)]), (l = "left");
        if ("right" == n && i == a - s)
          for (
            ;
            u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;

          )
            (r = e[(u += 3) + 2]), (l = "right");
        break;
      }
    return {
      node: r,
      start: i,
      end: o,
      collapse: l,
      coverStart: s,
      coverEnd: a,
    };
  }
  function Gn(e) {
    if (
      e.measure &&
      ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
    )
      for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
  }
  function Un(e) {
    (e.display.externalMeasure = null), te(e.display.lineMeasure);
    for (var t = 0; t < e.display.view.length; t++) Gn(e.display.view[t]);
  }
  function Vn(e) {
    Un(e),
      (e.display.cachedCharWidth =
        e.display.cachedTextHeight =
        e.display.cachedPaddingH =
          null),
      e.options.lineWrapping || (e.display.maxLineChanged = !0),
      (e.display.lineNumChars = null);
  }
  function Kn() {
    return m && $
      ? -(
          document.body.getBoundingClientRect().left -
          parseInt(getComputedStyle(document.body).marginLeft)
        )
      : window.pageXOffset ||
          (document.documentElement || document.body).scrollLeft;
  }
  function jn() {
    return m && $
      ? -(
          document.body.getBoundingClientRect().top -
          parseInt(getComputedStyle(document.body).marginTop)
        )
      : window.pageYOffset ||
          (document.documentElement || document.body).scrollTop;
  }
  function Xn(e) {
    var t = Zt(e).widgets,
      n = 0;
    if (t) for (var r = 0; r < t.length; ++r) t[r].above && (n += kn(t[r]));
    return n;
  }
  function Yn(e, t, n, r, i) {
    if ((i || ((i = Xn(t)), (n.top += i), (n.bottom += i)), "line" == r))
      return n;
    r = r || "local";
    i = tn(t);
    return (
      "local" == r ? (i += Mn(e.display)) : (i -= e.display.viewOffset),
      ("page" != r && "window" != r) ||
        ((i +=
          (t = e.display.lineSpace.getBoundingClientRect()).top +
          ("window" == r ? 0 : jn())),
        (e = t.left + ("window" == r ? 0 : Kn())),
        (n.left += e),
        (n.right += e)),
      (n.top += i),
      (n.bottom += i),
      n
    );
  }
  function $n(e, t, n) {
    if ("div" == n) return t;
    var r = t.left,
      t = t.top,
      n =
        ("page" == n
          ? ((r -= Kn()), (t -= jn()))
          : ("local" != n && n) ||
            ((r += (n = e.display.sizer.getBoundingClientRect()).left),
            (t += n.top)),
        e.display.lineSpace.getBoundingClientRect());
    return { left: r - n.left, top: t - n.top };
  }
  function _n(e, t, n, r, i) {
    return Yn(e, (r = r || W(e.doc, t.line)), Fn(e, r, t.ch, i), n);
  }
  function qn(n, e, r, i, o, l) {
    function s(e, t) {
      e = In(n, o, e, t ? "right" : "left", l);
      return t ? (e.left = e.right) : (e.right = e.left), Yn(n, i, e, r);
    }
    (i = i || W(n.doc, e.line)), (o = o || Pn(n, i));
    var a = Re(i, n.doc.direction),
      t = e.ch,
      e = e.sticky;
    if (
      (t >= i.text.length
        ? ((t = i.text.length), (e = "before"))
        : t <= 0 && ((t = 0), (e = "after")),
      !a)
    )
      return s("before" == e ? t - 1 : t, "before" == e);
    function u(e, t, n) {
      return s(n ? e - 1 : e, (1 == a[t].level) != n);
    }
    var c = De(a, t, e),
      h = Ae,
      c = u(t, c, "before" == e);
    return null != h && (c.other = u(t, h, "before" != e)), c;
  }
  function Zn(e, t) {
    var n = 0,
      t =
        ((t = P(e.doc, t)),
        e.options.lineWrapping || (n = lr(e.display) * t.ch),
        W(e.doc, t.line)),
      e = tn(t) + Mn(e.display);
    return { left: n, right: n, top: e, bottom: e + t.height };
  }
  function Qn(e, t, n, r, i) {
    e = F(e, t, n);
    return (e.xRel = i), r && (e.outside = r), e;
  }
  function Jn(e, t, n) {
    var r = e.doc;
    if ((n += e.display.viewOffset) < 0) return Qn(r.first, 0, null, -1, -1);
    var i = gt(r, n),
      o = r.first + r.size - 1;
    if (o < i) return Qn(r.first + r.size - 1, W(r, o).text.length, null, 1, 1);
    t < 0 && (t = 0);
    for (var l = W(r, i); ; ) {
      var s = (function (n, e, t, r, i) {
          i -= tn(e);
          var o = Pn(n, e),
            l = Xn(e),
            s = 0,
            a = e.text.length,
            u = !0,
            c = Re(e, n.doc.direction);
          c &&
            ((c = (n.options.lineWrapping ? ir : rr)(n, e, t, o, c, r, i)),
            (u = 1 != c.level),
            (s = u ? c.from : c.to - 1),
            (a = u ? c.to : c.from - 1));
          var h = null,
            d = null,
            c = Oe(
              function (e) {
                var t = In(n, o, e);
                return (
                  (t.top += l),
                  (t.bottom += l),
                  nr(t, r, i, !1) &&
                    (t.top <= i && t.left <= r && ((h = e), (d = t)), 1)
                );
              },
              s,
              a
            ),
            f = !1;
          {
            var p, g;
            d
              ? ((p = r - d.left < d.right - r),
                (c = h + ((g = p == u) ? 0 : 1)),
                (g = g ? "after" : "before"),
                (p = p ? d.left : d.right))
              : (u || (c != a && c != s) || c++,
                (g =
                  0 == c ||
                  (c != e.text.length &&
                    In(n, o, c - (u ? 1 : 0)).bottom + l <= i == u)
                    ? "after"
                    : "before"),
                (a = qn(n, F(t, c, g), "line", e, o)),
                (p = a.left),
                (f = i < a.top ? -1 : i >= a.bottom ? 1 : 0));
          }
          return (c = Ne(e.text, c, 1)), Qn(t, c, g, f, r - p);
        })(e, l, i, t, n),
        a = (function (e, t) {
          var n,
            r = It && e.markedSpans;
          if (r)
            for (var i = 0; i < r.length; ++i) {
              var o = r[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!n || Xt(n, o.marker) < 0) &&
                (n = o.marker);
            }
          return n;
        })(l, s.ch + (0 < s.xRel || 0 < s.outside ? 1 : 0));
      if (!a) return s;
      s = a.find(1);
      if (s.line == i) return s;
      l = W(r, (i = s.line));
    }
  }
  function er(t, e, n, r) {
    r -= Xn(e);
    var e = e.text.length,
      i = Oe(
        function (e) {
          return In(t, n, e - 1).bottom <= r;
        },
        e,
        0
      );
    return {
      begin: i,
      end: Oe(
        function (e) {
          return In(t, n, e).top > r;
        },
        i,
        e
      ),
    };
  }
  function tr(e, t, n, r) {
    return er(e, t, (n = n || Pn(e, t)), Yn(e, t, In(e, n, r), "line").top);
  }
  function nr(e, t, n, r) {
    return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
  }
  function rr(n, r, i, o, l, s, a) {
    var e,
      t = Oe(
        function (e) {
          var e = l[e],
            t = 1 != e.level;
          return nr(
            qn(
              n,
              F(i, t ? e.to : e.from, t ? "before" : "after"),
              "line",
              r,
              o
            ),
            s,
            a,
            !0
          );
        },
        0,
        l.length - 1
      ),
      u = l[t];
    return (
      0 < t &&
        ((e = 1 != u.level),
        nr(
          (e = qn(
            n,
            F(i, e ? u.from : u.to, e ? "after" : "before"),
            "line",
            r,
            o
          )),
          s,
          a,
          !0
        ) &&
          e.top > a &&
          (u = l[t - 1])),
      u
    );
  }
  function ir(e, t, n, r, i, o, l) {
    for (
      var l = er(e, t, r, l),
        s = l.begin,
        a = l.end,
        u = (/\s/.test(t.text.charAt(a - 1)) && a--, null),
        c = null,
        h = 0;
      h < i.length;
      h++
    ) {
      var d,
        f = i[h];
      f.from >= a ||
        f.to <= s ||
        ((d =
          (d = In(
            e,
            r,
            1 != f.level ? Math.min(a, f.to) - 1 : Math.max(s, f.from)
          ).right) < o
            ? o - d + 1e9
            : d - o),
        (!u || d < c) && ((u = f), (c = d)));
    }
    return (u =
      (u =
        (u = u || i[i.length - 1]).from < s
          ? { from: s, to: u.to, level: u.level }
          : u).to > a
        ? { from: u.from, to: a, level: u.level }
        : u);
  }
  function or(e) {
    if (null != e.cachedTextHeight) return e.cachedTextHeight;
    if (null == zn) {
      zn = M("pre", null, "CodeMirror-line-like");
      for (var t = 0; t < 49; ++t)
        zn.appendChild(document.createTextNode("x")), zn.appendChild(M("br"));
      zn.appendChild(document.createTextNode("x"));
    }
    y(e.measure, zn);
    var n = zn.offsetHeight / 50;
    return 3 < n && (e.cachedTextHeight = n), te(e.measure), n || 1;
  }
  function lr(e) {
    if (null != e.cachedCharWidth) return e.cachedCharWidth;
    var t = M("span", "xxxxxxxxxx"),
      n = M("pre", [t], "CodeMirror-line-like"),
      n = (y(e.measure, n), t.getBoundingClientRect()),
      t = (n.right - n.left) / 10;
    return 2 < t && (e.cachedCharWidth = t), t || 10;
  }
  function sr(e) {
    for (
      var t = e.display,
        n = {},
        r = {},
        i = t.gutters.clientLeft,
        o = t.gutters.firstChild,
        l = 0;
      o;
      o = o.nextSibling, ++l
    ) {
      var s = e.display.gutterSpecs[l].className;
      (n[s] = o.offsetLeft + o.clientLeft + i), (r[s] = o.clientWidth);
    }
    return {
      fixedPos: ar(t),
      gutterTotalWidth: t.gutters.offsetWidth,
      gutterLeft: n,
      gutterWidth: r,
      wrapperWidth: t.wrapper.clientWidth,
    };
  }
  function ar(e) {
    return (
      e.scroller.getBoundingClientRect().left -
      e.sizer.getBoundingClientRect().left
    );
  }
  function ur(r) {
    var i = or(r.display),
      o = r.options.lineWrapping,
      l = o && Math.max(5, r.display.scroller.clientWidth / lr(r.display) - 3);
    return function (e) {
      if (en(r.doc, e)) return 0;
      var t = 0;
      if (e.widgets)
        for (var n = 0; n < e.widgets.length; n++)
          e.widgets[n].height && (t += e.widgets[n].height);
      return o ? t + (Math.ceil(e.text.length / l) || 1) * i : t + i;
    };
  }
  function cr(e) {
    var t = e.doc,
      n = ur(e);
    t.iter(function (e) {
      var t = n(e);
      t != e.height && pt(e, t);
    });
  }
  function hr(e, t, n, r) {
    var i = e.display;
    if (!n && "true" == $e(t).getAttribute("cm-not-content")) return null;
    var o,
      l,
      n = i.lineSpace.getBoundingClientRect();
    try {
      (o = t.clientX - n.left), (l = t.clientY - n.top);
    } catch (e) {
      return null;
    }
    i = Jn(e, o, l);
    return (
      r &&
        0 < i.xRel &&
        (t = W(e.doc, i.line).text).length == i.ch &&
        ((n = S(t, t.length, e.options.tabSize) - t.length),
        (i = F(
          i.line,
          Math.max(0, Math.round((o - On(e.display).left) / lr(e.display)) - n)
        ))),
      i
    );
  }
  function dr(e, t) {
    if (t >= e.display.viewTo) return null;
    if ((t -= e.display.viewFrom) < 0) return null;
    for (var n = e.display.view, r = 0; r < n.length; r++)
      if ((t -= n[r].size) < 0) return r;
  }
  function I(e, t, n, r) {
    null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size);
    var i,
      o = e.display,
      l =
        ((r = r || 0) &&
          n < o.viewTo &&
          (null == o.updateLineNumbers || o.updateLineNumbers > t) &&
          (o.updateLineNumbers = t),
        (e.curOp.viewChanged = !0),
        t >= o.viewTo
          ? It && Qt(e.doc, t) < o.viewTo && pr(e)
          : n <= o.viewFrom
          ? It && Jt(e.doc, n + r) > o.viewFrom
            ? pr(e)
            : ((o.viewFrom += r), (o.viewTo += r))
          : t <= o.viewFrom && n >= o.viewTo
          ? pr(e)
          : t <= o.viewFrom
          ? (l = gr(e, n, n + r, 1))
            ? ((o.view = o.view.slice(l.index)),
              (o.viewFrom = l.lineN),
              (o.viewTo += r))
            : pr(e)
          : n >= o.viewTo
          ? (l = gr(e, t, t, -1))
            ? ((o.view = o.view.slice(0, l.index)), (o.viewTo = l.lineN))
            : pr(e)
          : ((l = gr(e, t, t, -1)),
            (i = gr(e, n, n + r, 1)),
            l && i
              ? ((o.view = o.view
                  .slice(0, l.index)
                  .concat(pn(e, l.lineN, i.lineN))
                  .concat(o.view.slice(i.index))),
                (o.viewTo += r))
              : pr(e)),
        o.externalMeasured);
    l &&
      (n < l.lineN
        ? (l.lineN += r)
        : t < l.lineN + l.size && (o.externalMeasured = null));
  }
  function fr(e, t, n) {
    e.curOp.viewChanged = !0;
    var r = e.display,
      i = e.display.externalMeasured;
    i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
      t < r.viewFrom ||
        t >= r.viewTo ||
        (null != (i = r.view[dr(e, t)]).node &&
          -1 == L((r = i.changes || (i.changes = [])), n) &&
          r.push(n));
  }
  function pr(e) {
    (e.display.viewFrom = e.display.viewTo = e.doc.first),
      (e.display.view = []),
      (e.display.viewOffset = 0);
  }
  function gr(e, t, n, r) {
    var i,
      o = dr(e, t),
      l = e.display.view;
    if (!It || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
    for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
    if (s != t) {
      if (0 < r) {
        if (o == l.length - 1) return null;
        (i = s + l[o].size - t), o++;
      } else i = s - t;
      (t += i), (n += i);
    }
    for (; Qt(e.doc, n) != n; ) {
      if (o == (r < 0 ? 0 : l.length - 1)) return null;
      (n += r * l[o - (r < 0 ? 1 : 0)].size), (o += r);
    }
    return { index: o, lineN: n };
  }
  function mr(e) {
    for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
      var i = t[r];
      i.hidden || (i.node && !i.changes) || ++n;
    }
    return n;
  }
  function vr(e) {
    e.display.input.showSelection(e.display.input.prepareSelection());
  }
  function yr(e, t) {
    void 0 === t && (t = !0);
    var n = e.doc,
      r = {},
      i = (r.cursors = document.createDocumentFragment()),
      o = (r.selection = document.createDocumentFragment()),
      l = e.options.$customCursor;
    l && (t = !0);
    for (var s, a, u, c = 0; c < n.sel.ranges.length; c++)
      (!t && c == n.sel.primIndex) ||
        (s = n.sel.ranges[c]).from().line >= e.display.viewTo ||
        s.to().line < e.display.viewFrom ||
        ((a = s.empty()),
        l
          ? (u = l(e, s)) && br(e, u, i)
          : (a || e.options.showCursorWhenSelecting) && br(e, s.head, i),
        a ||
          (function (i, e, t) {
            var n = i.display,
              o = i.doc,
              l = document.createDocumentFragment(),
              r = On(i.display),
              S = r.left,
              L = Math.max(n.sizerWidth, Dn(i) - n.sizer.offsetLeft) - r.right,
              k = "ltr" == o.direction;
            function T(e, t, n, r) {
              t < 0 && (t = 0),
                (t = Math.round(t)),
                (r = Math.round(r)),
                l.appendChild(
                  M(
                    "div",
                    null,
                    "CodeMirror-selected",
                    "position: absolute; left: " +
                      e +
                      "px;\n                             top: " +
                      t +
                      "px; width: " +
                      (null == n ? L - e : n) +
                      "px;\n                             height: " +
                      (r - t) +
                      "px"
                  )
                );
            }
            function s(n, g, m) {
              var v,
                y,
                r = W(o, n),
                b = r.text.length;
              function w(e, t) {
                return _n(i, F(n, e), "div", r, t);
              }
              function x(e, t, n) {
                (e = tr(i, r, null, e)),
                  (t = ("ltr" == t) == ("after" == n) ? "left" : "right");
                return w(
                  "after" == n
                    ? e.begin
                    : e.end - (/\s/.test(r.text.charAt(e.end - 1)) ? 2 : 1),
                  t
                )[t];
              }
              var C = Re(r, o.direction);
              return (
                (function (e, t, n, r) {
                  if (!e) return r(t, n, "ltr", 0);
                  for (var i = !1, o = 0; o < e.length; ++o) {
                    var l = e[o];
                    ((l.from < n && l.to > t) || (t == n && l.to == t)) &&
                      (r(
                        Math.max(l.from, t),
                        Math.min(l.to, n),
                        1 == l.level ? "rtl" : "ltr",
                        o
                      ),
                      (i = !0));
                  }
                  i || r(t, n, "ltr");
                })(C, g || 0, null == m ? b : m, function (e, t, n, r) {
                  var i,
                    o,
                    l,
                    s,
                    a,
                    u = "ltr" == n,
                    c = w(e, u ? "left" : "right"),
                    h = w(t - 1, u ? "right" : "left"),
                    d = null == g && 0 == e,
                    f = null == m && t == b,
                    p = 0 == r,
                    r = !C || r == C.length - 1;
                  h.top - c.top <= 3
                    ? ((i = (k ? d : f) && p ? S : (u ? c : h).left),
                      (a = (k ? f : d) && r ? L : (u ? h : c).right),
                      T(i, c.top, a - i, c.bottom))
                    : ((a = u
                        ? ((o = k && d && p ? S : c.left),
                          (l = k ? L : x(e, n, "before")),
                          (s = k ? S : x(t, n, "after")),
                          k && f && r ? L : h.right)
                        : ((o = k ? x(e, n, "before") : S),
                          (l = !k && d && p ? L : c.right),
                          (s = !k && f && r ? S : h.left),
                          k ? x(t, n, "after") : L)),
                      T(o, c.top, l - o, c.bottom),
                      c.bottom < h.top && T(S, c.bottom, null, h.top),
                      T(s, h.top, a - s, h.bottom)),
                    (!v || wr(c, v) < 0) && (v = c),
                    wr(h, v) < 0 && (v = h),
                    (!y || wr(c, y) < 0) && (y = c),
                    wr(h, y) < 0 && (y = h);
                }),
                { start: v, end: y }
              );
            }
            (n = e.from()), (r = e.to());
            {
              var a;
              n.line == r.line
                ? s(n.line, n.ch, r.ch)
                : ((e = W(o, n.line)),
                  (a = W(o, r.line)),
                  (a = Zt(e) == Zt(a)),
                  (n = s(n.line, n.ch, a ? e.text.length + 1 : null).end),
                  (e = s(r.line, a ? 0 : null, r.ch).start),
                  a &&
                    (n.top < e.top - 2
                      ? (T(n.right, n.top, null, n.bottom),
                        T(S, e.top, e.left, e.bottom))
                      : T(n.right, n.top, e.left - n.right, n.bottom)),
                  n.bottom < e.top && T(S, n.bottom, null, e.top));
            }
            t.appendChild(l);
          })(e, s, o));
    return r;
  }
  function br(e, t, n) {
    var r = qn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
      i = n.appendChild(M("div", " ", "CodeMirror-cursor"));
    (i.style.left = r.left + "px"),
      (i.style.top = r.top + "px"),
      (i.style.height =
        Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"),
      /\bcm-fat-cursor\b/.test(e.getWrapperElement().className) &&
        ((t = (t = _n(e, t, "div", null, null)).right - t.left),
        (i.style.width = (0 < t ? t : e.defaultCharWidth()) + "px")),
      r.other &&
        (((i = n.appendChild(
          M("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor")
        )).style.display = ""),
        (i.style.left = r.other.left + "px"),
        (i.style.top = r.other.top + "px"),
        (i.style.height = 0.85 * (r.other.bottom - r.other.top) + "px"));
  }
  function wr(e, t) {
    return e.top - t.top || e.left - t.left;
  }
  function xr(e) {
    var t, n;
    e.state.focused &&
      ((t = e.display),
      clearInterval(t.blinker),
      (n = !0),
      (t.cursorDiv.style.visibility = ""),
      0 < e.options.cursorBlinkRate
        ? (t.blinker = setInterval(function () {
            e.hasFocus() || kr(e),
              (t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
          }, e.options.cursorBlinkRate))
        : e.options.cursorBlinkRate < 0 &&
          (t.cursorDiv.style.visibility = "hidden"));
  }
  function Cr(e) {
    e.hasFocus() || (e.display.input.focus(), e.state.focused || Lr(e));
  }
  function Sr(e) {
    (e.state.delayingBlurEvent = !0),
      setTimeout(function () {
        e.state.delayingBlurEvent &&
          ((e.state.delayingBlurEvent = !1), e.state.focused && kr(e));
      }, 100);
  }
  function Lr(e, t) {
    e.state.delayingBlurEvent &&
      !e.state.draggingText &&
      (e.state.delayingBlurEvent = !1),
      "nocursor" != e.options.readOnly &&
        (e.state.focused ||
          (O(e, "focus", e, t),
          (e.state.focused = !0),
          ie(e.display.wrapper, "CodeMirror-focused"),
          e.curOp ||
            e.display.selForContextMenu == e.doc.sel ||
            (e.display.input.reset(),
            x &&
              setTimeout(function () {
                return e.display.input.reset(!0);
              }, 20)),
          e.display.input.receivedFocus()),
        xr(e));
  }
  function kr(e, t) {
    e.state.delayingBlurEvent ||
      (e.state.focused &&
        (O(e, "blur", e, t),
        (e.state.focused = !1),
        ee(e.display.wrapper, "CodeMirror-focused")),
      clearInterval(e.display.blinker),
      setTimeout(function () {
        e.state.focused || (e.display.shift = !1);
      }, 150));
  }
  function Tr(e) {
    for (
      var t = e.display,
        n = t.lineDiv.offsetTop,
        r = Math.max(0, t.scroller.getBoundingClientRect().top),
        i = t.lineDiv.getBoundingClientRect().top,
        o = 0,
        l = 0;
      l < t.view.length;
      l++
    ) {
      var s = t.view[l],
        a = e.options.lineWrapping,
        u = void 0,
        c = 0;
      if (!s.hidden) {
        (i += s.line.height),
          w && v < 8
            ? ((u = (h = s.node.offsetTop + s.node.offsetHeight) - n), (n = h))
            : ((u = (h = s.node.getBoundingClientRect()).bottom - h.top),
              !a &&
                s.text.firstChild &&
                (c =
                  s.text.firstChild.getBoundingClientRect().right -
                  h.left -
                  1));
        var h,
          a = s.line.height - u;
        if (
          (0.005 < a || a < -0.005) &&
          (i < r && (o -= a), pt(s.line, u), Mr(s.line), s.rest)
        )
          for (var d = 0; d < s.rest.length; d++) Mr(s.rest[d]);
        c > e.display.sizerWidth &&
          (a = Math.ceil(c / lr(e.display))) > e.display.maxLineLength &&
          ((e.display.maxLineLength = a),
          (e.display.maxLine = s.line),
          (e.display.maxLineChanged = !0));
      }
    }
    2 < Math.abs(o) && (t.scroller.scrollTop += o);
  }
  function Mr(e) {
    if (e.widgets)
      for (var t = 0; t < e.widgets.length; ++t) {
        var n = e.widgets[t],
          r = n.node.parentNode;
        r && (n.height = r.offsetHeight);
      }
  }
  function Nr(e, t, n) {
    var r,
      i = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop,
      i = Math.floor(i - Mn(e)),
      o = n && null != n.bottom ? n.bottom : i + e.wrapper.clientHeight,
      i = gt(t, i),
      o = gt(t, o);
    return (
      n &&
        n.ensure &&
        ((r = n.ensure.from.line),
        (n = n.ensure.to.line),
        r < i
          ? (o = gt(t, tn(W(t, (i = r))) + e.wrapper.clientHeight))
          : Math.min(n, t.lastLine()) >= o &&
            ((i = gt(t, tn(W(t, n)) - e.wrapper.clientHeight)), (o = n))),
      { from: i, to: Math.max(o, i + 1) }
    );
  }
  function Or(e, t) {
    var n = e.display,
      r = or(e.display),
      i =
        (t.top < 0 && (t.top = 0),
        (e.curOp && null != e.curOp.scrollTop ? e.curOp : n.scroller)
          .scrollTop),
      o = Wn(e),
      l = {},
      s =
        (t.bottom - t.top > o && (t.bottom = t.top + o), e.doc.height + Nn(n)),
      a = t.top < r,
      r = t.bottom > s - r,
      r =
        (t.top < i
          ? (l.scrollTop = a ? 0 : t.top)
          : t.bottom > i + o &&
            (a = Math.min(t.top, (r ? s : t.bottom) - o)) != i &&
            (l.scrollTop = a),
        e.options.fixedGutter ? 0 : n.gutters.offsetWidth),
      s =
        e.curOp && null != e.curOp.scrollLeft
          ? e.curOp.scrollLeft
          : n.scroller.scrollLeft - r,
      o = Dn(e) - n.gutters.offsetWidth,
      i = t.right - t.left > o;
    return (
      i && (t.right = t.left + o),
      t.left < 10
        ? (l.scrollLeft = 0)
        : t.left < s
        ? (l.scrollLeft = Math.max(0, t.left + r - (i ? 0 : 10)))
        : t.right > o + s - 3 && (l.scrollLeft = t.right + (i ? 0 : 10) - o),
      l
    );
  }
  function Ar(e, t) {
    null != t &&
      (Hr(e),
      (e.curOp.scrollTop =
        (null == e.curOp.scrollTop ? e.doc : e.curOp).scrollTop + t));
  }
  function Dr(e) {
    Hr(e);
    var t = e.getCursor();
    e.curOp.scrollToPos = {
      from: t,
      to: t,
      margin: e.options.cursorScrollMargin,
    };
  }
  function Wr(e, t, n) {
    (null == t && null == n) || Hr(e),
      null != t && (e.curOp.scrollLeft = t),
      null != n && (e.curOp.scrollTop = n);
  }
  function Hr(e) {
    var t = e.curOp.scrollToPos;
    t &&
      ((e.curOp.scrollToPos = null),
      Fr(e, Zn(e, t.from), Zn(e, t.to), t.margin));
  }
  function Fr(e, t, n, r) {
    t = Or(e, {
      left: Math.min(t.left, n.left),
      top: Math.min(t.top, n.top) - r,
      right: Math.max(t.right, n.right),
      bottom: Math.max(t.bottom, n.bottom) + r,
    });
    Wr(e, t.scrollLeft, t.scrollTop);
  }
  function Er(e, t) {
    Math.abs(e.doc.scrollTop - t) < 2 ||
      (d || Jr(e, { top: t }), Pr(e, t, !0), d && Jr(e), $r(e, 100));
  }
  function Pr(e, t, n) {
    (t = Math.max(
      0,
      Math.min(
        e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
        t
      )
    )),
      (e.display.scroller.scrollTop == t && !n) ||
        ((e.doc.scrollTop = t),
        e.display.scrollbars.setScrollTop(t),
        e.display.scroller.scrollTop != t &&
          (e.display.scroller.scrollTop = t));
  }
  function Ir(e, t, n, r) {
    (t = Math.max(
      0,
      Math.min(
        t,
        e.display.scroller.scrollWidth - e.display.scroller.clientWidth
      )
    )),
      ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) &&
        !r) ||
        ((e.doc.scrollLeft = t),
        ni(e),
        e.display.scroller.scrollLeft != t &&
          (e.display.scroller.scrollLeft = t),
        e.display.scrollbars.setScrollLeft(t));
  }
  function zr(e) {
    var t = e.display,
      n = t.gutters.offsetWidth,
      r = Math.round(e.doc.height + Nn(e.display));
    return {
      clientHeight: t.scroller.clientHeight,
      viewHeight: t.wrapper.clientHeight,
      scrollWidth: t.scroller.scrollWidth,
      clientWidth: t.scroller.clientWidth,
      viewWidth: t.wrapper.clientWidth,
      barLeft: e.options.fixedGutter ? n : 0,
      docHeight: r,
      scrollHeight: r + An(e) + t.barHeight,
      nativeBarWidth: t.nativeBarWidth,
      gutterWidth: n,
    };
  }
  function Rr(e, t, n) {
    this.cm = n;
    var r = (this.vert = M(
        "div",
        [M("div", null, null, "min-width: 1px")],
        "CodeMirror-vscrollbar"
      )),
      i = (this.horiz = M(
        "div",
        [M("div", null, null, "height: 100%; min-height: 1px")],
        "CodeMirror-hscrollbar"
      ));
    (r.tabIndex = i.tabIndex = -1),
      e(r),
      e(i),
      k(r, "scroll", function () {
        r.clientHeight && t(r.scrollTop, "vertical");
      }),
      k(i, "scroll", function () {
        i.clientWidth && t(i.scrollLeft, "horizontal");
      }),
      (this.checkedZeroWidth = !1),
      w &&
        v < 8 &&
        (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
  }
  function Br() {}
  (Rr.prototype.update = function (e) {
    var t,
      n = e.scrollWidth > e.clientWidth + 1,
      r = e.scrollHeight > e.clientHeight + 1,
      i = e.nativeBarWidth;
    return (
      r
        ? ((this.vert.style.display = "block"),
          (this.vert.style.bottom = n ? i + "px" : "0"),
          (t = e.viewHeight - (n ? i : 0)),
          (this.vert.firstChild.style.height =
            Math.max(0, e.scrollHeight - e.clientHeight + t) + "px"))
        : ((this.vert.scrollTop = 0),
          (this.vert.style.display = ""),
          (this.vert.firstChild.style.height = "0")),
      n
        ? ((this.horiz.style.display = "block"),
          (this.horiz.style.right = r ? i + "px" : "0"),
          (this.horiz.style.left = e.barLeft + "px"),
          (t = e.viewWidth - e.barLeft - (r ? i : 0)),
          (this.horiz.firstChild.style.width =
            Math.max(0, e.scrollWidth - e.clientWidth + t) + "px"))
        : ((this.horiz.style.display = ""),
          (this.horiz.firstChild.style.width = "0")),
      !this.checkedZeroWidth &&
        0 < e.clientHeight &&
        (0 == i && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
      { right: r ? i : 0, bottom: n ? i : 0 }
    );
  }),
    (Rr.prototype.setScrollLeft = function (e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
        this.disableHoriz &&
          this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
    }),
    (Rr.prototype.setScrollTop = function (e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e),
        this.disableVert &&
          this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
    }),
    (Rr.prototype.zeroWidthHack = function () {
      (this.horiz.style.height = this.vert.style.width =
        C && !c ? "12px" : "18px"),
        (this.horiz.style.pointerEvents = this.vert.style.pointerEvents =
          "none"),
        (this.disableHoriz = new ce()),
        (this.disableVert = new ce());
    }),
    (Rr.prototype.enableZeroWidthBar = function (n, r, i) {
      (n.style.pointerEvents = "auto"),
        r.set(1e3, function e() {
          var t = n.getBoundingClientRect();
          ("vert" == i
            ? document.elementFromPoint(t.right - 1, (t.top + t.bottom) / 2)
            : document.elementFromPoint(
                (t.right + t.left) / 2,
                t.bottom - 1
              )) != n
            ? (n.style.pointerEvents = "none")
            : r.set(1e3, e);
        });
    }),
    (Rr.prototype.clear = function () {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    });
  function Gr(e, t) {
    t = t || zr(e);
    var n = e.display.barWidth,
      r = e.display.barHeight;
    Ur(e, t);
    for (
      var i = 0;
      (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
      i++
    )
      n != e.display.barWidth && e.options.lineWrapping && Tr(e),
        Ur(e, zr(e)),
        (n = e.display.barWidth),
        (r = e.display.barHeight);
  }
  function Ur(e, t) {
    var n = e.display,
      r = n.scrollbars.update(t);
    (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
      (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
      (n.heightForcer.style.borderBottom = r.bottom + "px solid transparent"),
      r.right && r.bottom
        ? ((n.scrollbarFiller.style.display = "block"),
          (n.scrollbarFiller.style.height = r.bottom + "px"),
          (n.scrollbarFiller.style.width = r.right + "px"))
        : (n.scrollbarFiller.style.display = ""),
      r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
        ? ((n.gutterFiller.style.display = "block"),
          (n.gutterFiller.style.height = r.bottom + "px"),
          (n.gutterFiller.style.width = t.gutterWidth + "px"))
        : (n.gutterFiller.style.display = "");
  }
  (Br.prototype.update = function () {
    return { bottom: 0, right: 0 };
  }),
    (Br.prototype.setScrollLeft = function () {}),
    (Br.prototype.setScrollTop = function () {}),
    (Br.prototype.clear = function () {});
  var Vr = { native: Rr, null: Br };
  function Kr(n) {
    n.display.scrollbars &&
      (n.display.scrollbars.clear(),
      n.display.scrollbars.addClass &&
        ee(n.display.wrapper, n.display.scrollbars.addClass)),
      (n.display.scrollbars = new Vr[n.options.scrollbarStyle](
        function (e) {
          n.display.wrapper.insertBefore(e, n.display.scrollbarFiller),
            k(e, "mousedown", function () {
              n.state.focused &&
                setTimeout(function () {
                  return n.display.input.focus();
                }, 0);
            }),
            e.setAttribute("cm-not-content", "true");
        },
        function (e, t) {
          ("horizontal" == t ? Ir : Er)(n, e);
        },
        n
      )),
      n.display.scrollbars.addClass &&
        ie(n.display.wrapper, n.display.scrollbars.addClass);
  }
  var jr = 0;
  function Xr(e) {
    (e.curOp = {
      cm: e,
      viewChanged: !1,
      startHeight: e.doc.height,
      forceUpdate: !1,
      updateInput: 0,
      typing: !1,
      changeObjs: null,
      cursorActivityHandlers: null,
      cursorActivityCalled: 0,
      selectionChanged: !1,
      updateMaxLine: !1,
      scrollLeft: null,
      scrollTop: null,
      scrollToPos: null,
      focus: !1,
      id: ++jr,
      markArrays: null,
    }),
      (e = e.curOp),
      gn
        ? gn.ops.push(e)
        : (e.ownsGroup = gn = { ops: [e], delayedCallbacks: [] });
  }
  function Yr(e) {
    e = e.curOp;
    if (e) {
      var t = function (e) {
        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
        for (var n = e.ops, r = 0; r < n.length; r++) {
          l = o = i = void 0;
          var i = n[r],
            o = i.cm,
            l = o.display;
          (function (e) {
            var t = e.display;
            !t.scrollbarsClipped &&
              t.scroller.offsetWidth &&
              ((t.nativeBarWidth =
                t.scroller.offsetWidth - t.scroller.clientWidth),
              (t.heightForcer.style.height = An(e) + "px"),
              (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"),
              (t.sizer.style.borderRightWidth = An(e) + "px"),
              (t.scrollbarsClipped = !0));
          })(o),
            i.updateMaxLine && rn(o),
            (i.mustUpdate =
              i.viewChanged ||
              i.forceUpdate ||
              null != i.scrollTop ||
              (i.scrollToPos &&
                (i.scrollToPos.from.line < l.viewFrom ||
                  i.scrollToPos.to.line >= l.viewTo)) ||
              (l.maxLineChanged && o.options.lineWrapping)),
            (i.update =
              i.mustUpdate &&
              new qr(
                o,
                i.mustUpdate && { top: i.scrollTop, ensure: i.scrollToPos },
                i.forceUpdate
              ));
        }
        for (var s = 0; s < n.length; s++) {
          a = void 0;
          var a = n[s];
          a.updatedDisplay = a.mustUpdate && Zr(a.cm, a.update);
        }
        for (var u = 0; u < n.length; u++) {
          c = void 0;
          h = void 0;
          d = void 0;
          var c = n[u];
          var h = c.cm,
            d = h.display;
          c.updatedDisplay && Tr(h);
          (c.barMeasure = zr(h)),
            d.maxLineChanged &&
              !h.options.lineWrapping &&
              ((c.adjustWidthTo =
                Fn(h, d.maxLine, d.maxLine.text.length).left + 3),
              (h.display.sizerWidth = c.adjustWidthTo),
              (c.barMeasure.scrollWidth = Math.max(
                d.scroller.clientWidth,
                d.sizer.offsetLeft +
                  c.adjustWidthTo +
                  An(h) +
                  h.display.barWidth
              )),
              (c.maxScrollLeft = Math.max(
                0,
                d.sizer.offsetLeft + c.adjustWidthTo - Dn(h)
              )));
          (c.updatedDisplay || c.selectionChanged) &&
            (c.preparedSelection = d.input.prepareSelection());
        }
        for (var f = 0; f < n.length; f++) {
          p = void 0;
          g = void 0;
          m = void 0;
          var p = n[f];
          var g = p.cm;
          null != p.adjustWidthTo &&
            ((g.display.sizer.style.minWidth = p.adjustWidthTo + "px"),
            p.maxScrollLeft < g.doc.scrollLeft &&
              Ir(
                g,
                Math.min(g.display.scroller.scrollLeft, p.maxScrollLeft),
                !0
              ),
            (g.display.maxLineChanged = !1));
          var m = p.focus && p.focus == N();
          p.preparedSelection &&
            g.display.input.showSelection(p.preparedSelection, m);
          (!p.updatedDisplay && p.startHeight == g.doc.height) ||
            Gr(g, p.barMeasure);
          p.updatedDisplay && ti(g, p.barMeasure);
          p.selectionChanged && xr(g);
          g.state.focused && p.updateInput && g.display.input.reset(p.typing);
          m && Cr(p.cm);
        }
        for (var v, y = 0; y < n.length; y++) {
          b = void 0;
          w = void 0;
          x = void 0;
          C = void 0;
          v = void 0;
          S = void 0;
          L = void 0;
          k = void 0;
          T = void 0;
          var b = n[y];
          var w = b.cm,
            x = w.display,
            C = w.doc;
          b.updatedDisplay && Qr(w, b.update);
          null == x.wheelStartX ||
            (null == b.scrollTop && null == b.scrollLeft && !b.scrollToPos) ||
            (x.wheelStartX = x.wheelStartY = null);
          null != b.scrollTop && Pr(w, b.scrollTop, b.forceScroll);
          null != b.scrollLeft && Ir(w, b.scrollLeft, !0, !0);
          b.scrollToPos &&
            ((v = (function (e, t, n, r) {
              null == r && (r = 0),
                e.options.lineWrapping ||
                  t != n ||
                  ((n =
                    "before" == t.sticky ? F(t.line, t.ch + 1, "before") : t),
                  (t = t.ch
                    ? F(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after")
                    : t));
              for (var i = 0; i < 5; i++) {
                var o,
                  l = !1,
                  s = qn(e, t),
                  a = n && n != t ? qn(e, n) : s,
                  s = Or(
                    e,
                    (o = {
                      left: Math.min(s.left, a.left),
                      top: Math.min(s.top, a.top) - r,
                      right: Math.max(s.left, a.left),
                      bottom: Math.max(s.bottom, a.bottom) + r,
                    })
                  ),
                  a = e.doc.scrollTop,
                  u = e.doc.scrollLeft;
                if (
                  (null != s.scrollTop &&
                    (Er(e, s.scrollTop),
                    1 < Math.abs(e.doc.scrollTop - a) && (l = !0)),
                  null != s.scrollLeft &&
                    (Ir(e, s.scrollLeft),
                    1 < Math.abs(e.doc.scrollLeft - u) && (l = !0)),
                  !l)
                )
                  break;
              }
              return o;
            })(
              w,
              P(C, b.scrollToPos.from),
              P(C, b.scrollToPos.to),
              b.scrollToPos.margin
            )),
            (function (e, t) {
              var n, r, i;
              A(e, "scrollCursorIntoView") ||
                ((i = (n = e.display).sizer.getBoundingClientRect()),
                (r = null),
                t.top + i.top < 0
                  ? (r = !0)
                  : t.bottom + i.top >
                      (window.innerHeight ||
                        document.documentElement.clientHeight) && (r = !1),
                null == r ||
                  X ||
                  ((i = M(
                    "div",
                    "​",
                    null,
                    "position: absolute;\n                         top: " +
                      (t.top - n.viewOffset - Mn(e.display)) +
                      "px;\n                         height: " +
                      (t.bottom - t.top + An(e) + n.barHeight) +
                      "px;\n                         left: " +
                      t.left +
                      "px; width: " +
                      Math.max(2, t.right - t.left) +
                      "px;"
                  )),
                  e.display.lineSpace.appendChild(i),
                  i.scrollIntoView(r),
                  e.display.lineSpace.removeChild(i)));
            })(w, v));
          var S = b.maybeHiddenMarkers,
            L = b.maybeUnhiddenMarkers;
          if (S)
            for (var k = 0; k < S.length; ++k)
              S[k].lines.length || O(S[k], "hide");
          if (L)
            for (var T = 0; T < L.length; ++T)
              L[T].lines.length && O(L[T], "unhide");
          x.wrapper.offsetHeight &&
            (C.scrollTop = w.display.scroller.scrollTop);
          b.changeObjs && O(w, "changes", w, b.changeObjs);
          b.update && b.update.finish();
        }
      };
      if ((e = e.ownsGroup))
        try {
          var n = e,
            r = n.delayedCallbacks,
            i = 0;
          do {
            for (; i < r.length; i++) r[i].call(null);
            for (var o = 0; o < n.ops.length; o++) {
              var l = n.ops[o];
              if (l.cursorActivityHandlers)
                for (
                  ;
                  l.cursorActivityCalled < l.cursorActivityHandlers.length;

                )
                  l.cursorActivityHandlers[l.cursorActivityCalled++].call(
                    null,
                    l.cm
                  );
            }
          } while (i < r.length);
        } finally {
          (gn = null), t(e);
        }
    }
  }
  function h(e, t) {
    if (e.curOp) return t();
    Xr(e);
    try {
      return t();
    } finally {
      Yr(e);
    }
  }
  function R(e, t) {
    return function () {
      if (e.curOp) return t.apply(e, arguments);
      Xr(e);
      try {
        return t.apply(e, arguments);
      } finally {
        Yr(e);
      }
    };
  }
  function t(e) {
    return function () {
      if (this.curOp) return e.apply(this, arguments);
      Xr(this);
      try {
        return e.apply(this, arguments);
      } finally {
        Yr(this);
      }
    };
  }
  function n(t) {
    return function () {
      var e = this.cm;
      if (!e || e.curOp) return t.apply(this, arguments);
      Xr(e);
      try {
        return t.apply(this, arguments);
      } finally {
        Yr(e);
      }
    };
  }
  function $r(e, t) {
    e.doc.highlightFrontier < e.display.viewTo &&
      e.state.highlight.set(t, ae(_r, e));
  }
  function _r(l) {
    var s,
      a,
      u,
      c = l.doc;
    c.highlightFrontier >= l.display.viewTo ||
      ((s = +new Date() + l.options.workTime),
      (a = Nt(l, c.highlightFrontier)),
      (u = []),
      c.iter(
        a.line,
        Math.min(c.first + c.size, l.display.viewTo + 500),
        function (e) {
          if (a.line >= l.display.viewFrom) {
            for (
              var t = e.styles,
                n =
                  e.text.length > l.options.maxHighlightLength
                    ? ut(c.mode, a.state)
                    : null,
                r = Tt(l, e, a, !0),
                n = (n && (a.state = n), (e.styles = r.styles), e.styleClasses),
                r = r.classes,
                i =
                  (r ? (e.styleClasses = r) : n && (e.styleClasses = null),
                  !t ||
                    t.length != e.styles.length ||
                    (n != r &&
                      (!n ||
                        !r ||
                        n.bgClass != r.bgClass ||
                        n.textClass != r.textClass))),
                o = 0;
              !i && o < t.length;
              ++o
            )
              i = t[o] != e.styles[o];
            i && u.push(a.line), (e.stateAfter = a.save()), a.nextLine();
          } else
            e.text.length <= l.options.maxHighlightLength && Ot(l, e.text, a),
              (e.stateAfter = a.line % 5 == 0 ? a.save() : null),
              a.nextLine();
          if (+new Date() > s) return $r(l, l.options.workDelay), !0;
        }
      ),
      (c.highlightFrontier = a.line),
      (c.modeFrontier = Math.max(c.modeFrontier, a.line)),
      u.length &&
        h(l, function () {
          for (var e = 0; e < u.length; e++) fr(l, u[e], "text");
        }));
  }
  var qr = function (e, t, n) {
    var r = e.display;
    (this.viewport = t),
      (this.visible = Nr(r, e.doc, t)),
      (this.editorIsHidden = !r.wrapper.offsetWidth),
      (this.wrapperHeight = r.wrapper.clientHeight),
      (this.wrapperWidth = r.wrapper.clientWidth),
      (this.oldDisplayWidth = Dn(e)),
      (this.force = n),
      (this.dims = sr(e)),
      (this.events = []);
  };
  function Zr(e, t) {
    var n = e.display,
      r = e.doc;
    if (t.editorIsHidden) return pr(e), !1;
    if (
      !t.force &&
      t.visible.from >= n.viewFrom &&
      t.visible.to <= n.viewTo &&
      (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) &&
      n.renderedView == n.view &&
      0 == mr(e)
    )
      return !1;
    ri(e) && (pr(e), (t.dims = sr(e)));
    var i = r.first + r.size,
      o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
      l = Math.min(i, t.visible.to + e.options.viewportMargin),
      r =
        (n.viewFrom < o &&
          o - n.viewFrom < 20 &&
          (o = Math.max(r.first, n.viewFrom)),
        n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
        It && ((o = Qt(e.doc, o)), (l = Jt(e.doc, l))),
        o != n.viewFrom ||
          l != n.viewTo ||
          n.lastWrapHeight != t.wrapperHeight ||
          n.lastWrapWidth != t.wrapperWidth),
      i =
        ((i = o),
        (o = l),
        0 == (c = (l = e).display).view.length ||
        i >= c.viewTo ||
        o <= c.viewFrom
          ? ((c.view = pn(l, i, o)), (c.viewFrom = i))
          : (c.viewFrom > i
              ? (c.view = pn(l, i, c.viewFrom).concat(c.view))
              : c.viewFrom < i && (c.view = c.view.slice(dr(l, i))),
            (c.viewFrom = i),
            c.viewTo < o
              ? (c.view = c.view.concat(pn(l, c.viewTo, o)))
              : c.viewTo > o && (c.view = c.view.slice(0, dr(l, o)))),
        (c.viewTo = o),
        (n.viewOffset = tn(W(e.doc, n.viewFrom))),
        (e.display.mover.style.top = n.viewOffset + "px"),
        mr(e));
    if (
      !r &&
      0 == i &&
      !t.force &&
      n.renderedView == n.view &&
      (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)
    )
      return !1;
    var l = (function (e) {
        if (e.hasFocus()) return null;
        if (!(n = N()) || !re(e.display.lineDiv, n)) return null;
        var t,
          n = { activeElt: n };
        return (
          window.getSelection &&
            (t = window.getSelection()).anchorNode &&
            t.extend &&
            re(e.display.lineDiv, t.anchorNode) &&
            ((n.anchorNode = t.anchorNode),
            (n.anchorOffset = t.anchorOffset),
            (n.focusNode = t.focusNode),
            (n.focusOffset = t.focusOffset)),
          n
        );
      })(e),
      s = (4 < i && (n.lineDiv.style.display = "none"), e),
      a = n.updateLineNumbers,
      u = t.dims,
      c = s.display,
      h = s.options.lineNumbers,
      d = c.lineDiv,
      f = d.firstChild;
    function p(e) {
      var t = e.nextSibling;
      return (
        x && C && s.display.currentWheelTarget == e
          ? (e.style.display = "none")
          : e.parentNode.removeChild(e),
        t
      );
    }
    for (var g = c.view, m = c.viewFrom, v = 0; v < g.length; v++) {
      var y = g[v];
      if (!y.hidden)
        if (y.node && y.node.parentNode == d) {
          for (; f != y.node; ) f = p(f);
          var b = h && null != a && a <= m && y.lineNumber;
          y.changes &&
            (-1 < L(y.changes, "gutter") && (b = !1), yn(s, y, m, u)),
            b &&
              (te(y.lineNumber),
              y.lineNumber.appendChild(
                document.createTextNode(vt(s.options, m))
              )),
            (f = y.node.nextSibling);
        } else {
          b = (function (e, t, n, r) {
            var i = wn(e, t);
            return (
              (t.text = t.node = i.pre),
              i.bgClass && (t.bgClass = i.bgClass),
              i.textClass && (t.textClass = i.textClass),
              xn(e, t),
              Cn(e, t, n, r),
              Sn(e, t, r),
              t.node
            );
          })(s, y, m, u);
          d.insertBefore(b, f);
        }
      m += y.size;
    }
    for (; f; ) f = p(f);
    return (
      4 < i && (n.lineDiv.style.display = ""),
      (n.renderedView = n.view),
      (o = l) &&
        o.activeElt &&
        o.activeElt != N() &&
        (o.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(o.activeElt.nodeName) &&
          o.anchorNode &&
          re(document.body, o.anchorNode) &&
          re(document.body, o.focusNode) &&
          ((c = window.getSelection()),
          (i = document.createRange()).setEnd(o.anchorNode, o.anchorOffset),
          i.collapse(!1),
          c.removeAllRanges(),
          c.addRange(i),
          c.extend(o.focusNode, o.focusOffset))),
      te(n.cursorDiv),
      te(n.selectionDiv),
      (n.gutters.style.height = n.sizer.style.minHeight = 0),
      r &&
        ((n.lastWrapHeight = t.wrapperHeight),
        (n.lastWrapWidth = t.wrapperWidth),
        $r(e, 400)),
      !(n.updateLineNumbers = null)
    );
  }
  function Qr(e, t) {
    for (var n = t.viewport, r = !0; ; r = !1) {
      if (r && e.options.lineWrapping && t.oldDisplayWidth != Dn(e))
        r && (t.visible = Nr(e.display, e.doc, n));
      else if (
        (n &&
          null != n.top &&
          (n = { top: Math.min(e.doc.height + Nn(e.display) - Wn(e), n.top) }),
        (t.visible = Nr(e.display, e.doc, n)),
        t.visible.from >= e.display.viewFrom &&
          t.visible.to <= e.display.viewTo)
      )
        break;
      if (!Zr(e, t)) break;
      Tr(e);
      var i = zr(e);
      vr(e), Gr(e, i), ti(e, i), (t.force = !1);
    }
    t.signal(e, "update", e),
      (e.display.viewFrom == e.display.reportedViewFrom &&
        e.display.viewTo == e.display.reportedViewTo) ||
        (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
        (e.display.reportedViewFrom = e.display.viewFrom),
        (e.display.reportedViewTo = e.display.viewTo));
  }
  function Jr(e, t) {
    var n,
      t = new qr(e, t);
    Zr(e, t) &&
      (Tr(e), Qr(e, t), (n = zr(e)), vr(e), Gr(e, n), ti(e, n), t.finish());
  }
  function ei(e) {
    var t = e.gutters.offsetWidth;
    (e.sizer.style.marginLeft = t + "px"), b(e, "gutterChanged", e);
  }
  function ti(e, t) {
    (e.display.sizer.style.minHeight = t.docHeight + "px"),
      (e.display.heightForcer.style.top = t.docHeight + "px"),
      (e.display.gutters.style.height =
        t.docHeight + e.display.barHeight + An(e) + "px");
  }
  function ni(e) {
    var t = e.display,
      n = t.view;
    if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
      for (
        var r = ar(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
          i = t.gutters.offsetWidth,
          o = r + "px",
          l = 0;
        l < n.length;
        l++
      )
        if (!n[l].hidden) {
          e.options.fixedGutter &&
            (n[l].gutter && (n[l].gutter.style.left = o),
            n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
          var s = n[l].alignable;
          if (s) for (var a = 0; a < s.length; a++) s[a].style.left = o;
        }
      e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
    }
  }
  function ri(e) {
    var t, n, r, i;
    if (e.options.lineNumbers)
      return (
        (t = e.doc),
        (t = vt(e.options, t.first + t.size - 1)),
        (n = e.display),
        t.length != n.lineNumChars
          ? ((r = (i = n.measure.appendChild(
              M(
                "div",
                [M("div", t)],
                "CodeMirror-linenumber CodeMirror-gutter-elt"
              )
            )).firstChild.offsetWidth),
            (i = i.offsetWidth - r),
            (n.lineGutter.style.width = ""),
            (n.lineNumInnerWidth =
              Math.max(r, n.lineGutter.offsetWidth - i) + 1),
            (n.lineNumWidth = n.lineNumInnerWidth + i),
            (n.lineNumChars = n.lineNumInnerWidth ? t.length : -1),
            (n.lineGutter.style.width = n.lineNumWidth + "px"),
            ei(e.display),
            1)
          : void 0
      );
  }
  function ii(e, t) {
    for (var n = [], r = !1, i = 0; i < e.length; i++) {
      var o = e[i],
        l = null;
      if (
        ("string" != typeof o && ((l = o.style), (o = o.className)),
        "CodeMirror-linenumbers" == o)
      ) {
        if (!t) continue;
        r = !0;
      }
      n.push({ className: o, style: l });
    }
    return (
      t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n
    );
  }
  function oi(e) {
    var t = e.gutters,
      n = e.gutterSpecs;
    te(t), (e.lineGutter = null);
    for (var r = 0; r < n.length; ++r) {
      var i = n[r],
        o = i.className,
        i = i.style,
        l = t.appendChild(M("div", null, "CodeMirror-gutter " + o));
      i && (l.style.cssText = i),
        "CodeMirror-linenumbers" == o &&
          ((e.lineGutter = l).style.width = (e.lineNumWidth || 1) + "px");
    }
    (t.style.display = n.length ? "" : "none"), ei(e);
  }
  function li(e) {
    oi(e.display), I(e), ni(e);
  }
  function si(e, t, n, r) {
    var i = this,
      o =
        ((this.input = n),
        (i.scrollbarFiller = M("div", null, "CodeMirror-scrollbar-filler")),
        i.scrollbarFiller.setAttribute("cm-not-content", "true"),
        (i.gutterFiller = M("div", null, "CodeMirror-gutter-filler")),
        i.gutterFiller.setAttribute("cm-not-content", "true"),
        (i.lineDiv = ne("div", null, "CodeMirror-code")),
        (i.selectionDiv = M(
          "div",
          null,
          null,
          "position: relative; z-index: 1"
        )),
        (i.cursorDiv = M("div", null, "CodeMirror-cursors")),
        (i.measure = M("div", null, "CodeMirror-measure")),
        (i.lineMeasure = M("div", null, "CodeMirror-measure")),
        (i.lineSpace = ne(
          "div",
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          "position: relative; outline: none"
        )),
        ne("div", [i.lineSpace], "CodeMirror-lines"));
    (i.mover = M("div", [o], null, "position: relative")),
      (i.sizer = M("div", [i.mover], "CodeMirror-sizer")),
      (i.sizerWidth = null),
      (i.heightForcer = M(
        "div",
        null,
        null,
        "position: absolute; height: " + he + "px; width: 1px;"
      )),
      (i.gutters = M("div", null, "CodeMirror-gutters")),
      (i.lineGutter = null),
      (i.scroller = M(
        "div",
        [i.sizer, i.heightForcer, i.gutters],
        "CodeMirror-scroll"
      )),
      i.scroller.setAttribute("tabIndex", "-1"),
      (i.wrapper = M(
        "div",
        [i.scrollbarFiller, i.gutterFiller, i.scroller],
        "CodeMirror"
      )),
      i.wrapper.setAttribute("translate", "no"),
      w &&
        v < 8 &&
        ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
      x || (d && _) || (i.scroller.draggable = !0),
      e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
      (i.viewFrom = i.viewTo = t.first),
      (i.reportedViewFrom = i.reportedViewTo = t.first),
      (i.view = []),
      (i.renderedView = null),
      (i.externalMeasured = null),
      (i.viewOffset = 0),
      (i.lastWrapHeight = i.lastWrapWidth = 0),
      (i.updateLineNumbers = null),
      (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
      (i.scrollbarsClipped = !1),
      (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
      (i.alignWidgets = !1),
      (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
      (i.maxLine = null),
      (i.maxLineLength = 0),
      (i.maxLineChanged = !1),
      (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
      (i.shift = !1),
      (i.selForContextMenu = null),
      (i.activeTouch = null),
      (i.gutterSpecs = ii(r.gutters, r.lineNumbers)),
      oi(i),
      n.init(i);
  }
  (qr.prototype.signal = function (e, t) {
    Ve(e, t) && this.events.push(arguments);
  }),
    (qr.prototype.finish = function () {
      for (var e = 0; e < this.events.length; e++)
        O.apply(null, this.events[e]);
    });
  var ai = 0,
    ui = null;
  function ci(e) {
    var t = e.wheelDeltaX,
      n = e.wheelDeltaY;
    return (
      null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
      null == n && e.detail && e.axis == e.VERTICAL_AXIS
        ? (n = e.detail)
        : null == n && (n = e.wheelDelta),
      { x: t, y: n }
    );
  }
  function hi(e) {
    e = ci(e);
    return (e.x *= ui), (e.y *= ui), e;
  }
  function di(e, t) {
    m &&
      102 <= V &&
      (null == e.display.chromeScrollHack
        ? (e.display.sizer.style.pointerEvents = "none")
        : clearTimeout(e.display.chromeScrollHack),
      (e.display.chromeScrollHack = setTimeout(function () {
        (e.display.chromeScrollHack = null),
          (e.display.sizer.style.pointerEvents = "");
      }, 100)));
    var n = ci(t),
      r = n.x,
      n = n.y,
      i = ui,
      o =
        (0 === t.deltaMode && ((r = t.deltaX), (n = t.deltaY), (i = 1)),
        e.display),
      l = o.scroller,
      s = l.scrollWidth > l.clientWidth,
      a = l.scrollHeight > l.clientHeight;
    if ((r && s) || (n && a)) {
      if (n && C && x)
        e: for (var u = t.target, c = o.view; u != l; u = u.parentNode)
          for (var h = 0; h < c.length; h++)
            if (c[h].node == u) {
              e.display.currentWheelTarget = u;
              break e;
            }
      if (r && !d && !K && null != i)
        return (
          n && a && Er(e, Math.max(0, l.scrollTop + n * i)),
          Ir(e, Math.max(0, l.scrollLeft + r * i)),
          (n && !a) || D(t),
          void (o.wheelStartX = null)
        );
      n &&
        null != i &&
        ((a = (s = e.doc.scrollTop) + o.wrapper.clientHeight),
        (i = n * i) < 0
          ? (s = Math.max(0, s + i - 50))
          : (a = Math.min(e.doc.height, a + i + 50)),
        Jr(e, { top: s, bottom: a })),
        ai < 20 &&
          0 !== t.deltaMode &&
          (null == o.wheelStartX
            ? ((o.wheelStartX = l.scrollLeft),
              (o.wheelStartY = l.scrollTop),
              (o.wheelDX = r),
              (o.wheelDY = n),
              setTimeout(function () {
                var e, t;
                null != o.wheelStartX &&
                  ((e = l.scrollLeft - o.wheelStartX),
                  (t =
                    ((t = l.scrollTop - o.wheelStartY) &&
                      o.wheelDY &&
                      t / o.wheelDY) ||
                    (e && o.wheelDX && e / o.wheelDX)),
                  (o.wheelStartX = o.wheelStartY = null),
                  t && ((ui = (ui * ai + t) / (ai + 1)), ++ai));
              }, 200))
            : ((o.wheelDX += r), (o.wheelDY += n)));
    }
  }
  w ? (ui = -0.53) : d ? (ui = 15) : m ? (ui = -0.7) : j && (ui = -1 / 3);
  var B = function (e, t) {
      (this.ranges = e), (this.primIndex = t);
    },
    G =
      ((B.prototype.primary = function () {
        return this.ranges[this.primIndex];
      }),
      (B.prototype.equals = function (e) {
        if (e == this) return !0;
        if (
          e.primIndex != this.primIndex ||
          e.ranges.length != this.ranges.length
        )
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t],
            r = e.ranges[t];
          if (!yt(n.anchor, r.anchor) || !yt(n.head, r.head)) return !1;
        }
        return !0;
      }),
      (B.prototype.deepCopy = function () {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new G(bt(this.ranges[t].anchor), bt(this.ranges[t].head));
        return new B(e, this.primIndex);
      }),
      (B.prototype.somethingSelected = function () {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty()) return !0;
        return !1;
      }),
      (B.prototype.contains = function (e, t) {
        t = t || e;
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (0 <= E(t, r.from()) && E(e, r.to()) <= 0) return n;
        }
        return -1;
      }),
      function (e, t) {
        (this.anchor = e), (this.head = t);
      });
  function fi(e, t, n) {
    var r = e && e.options.selectionsMayTouch,
      e = t[n];
    t.sort(function (e, t) {
      return E(e.from(), t.from());
    }),
      (n = L(t, e));
    for (var i = 1; i < t.length; i++) {
      var o,
        l = t[i],
        s = t[i - 1],
        a = E(s.to(), l.from());
      (r && !l.empty() ? 0 < a : 0 <= a) &&
        ((a = xt(s.from(), l.from())),
        (o = wt(s.to(), l.to())),
        (l = s.empty() ? l.from() == l.head : s.from() == s.head),
        i <= n && --n,
        t.splice(--i, 2, new G(l ? o : a, l ? a : o)));
    }
    return new B(t, n);
  }
  function pi(e, t) {
    return new B([new G(e, t || e)], 0);
  }
  function gi(e) {
    return e.text
      ? F(
          e.from.line + e.text.length - 1,
          z(e.text).length + (1 == e.text.length ? e.from.ch : 0)
        )
      : e.to;
  }
  function mi(e, t) {
    if (E(e, t.from) < 0) return e;
    if (E(e, t.to) <= 0) return gi(t);
    var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
      r = e.ch;
    return e.line == t.to.line && (r += gi(t).ch - t.to.ch), F(n, r);
  }
  function vi(e, t) {
    for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
      var i = e.sel.ranges[r];
      n.push(new G(mi(i.anchor, t), mi(i.head, t)));
    }
    return fi(e.cm, n, e.sel.primIndex);
  }
  function yi(e, t, n) {
    return e.line == t.line
      ? F(n.line, e.ch - t.ch + n.ch)
      : F(n.line + (e.line - t.line), e.ch);
  }
  function bi(e) {
    (e.doc.mode = lt(e.options, e.doc.modeOption)), wi(e);
  }
  function wi(e) {
    e.doc.iter(function (e) {
      e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
    }),
      (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
      $r(e, 100),
      e.state.modeGen++,
      e.curOp && I(e);
  }
  function xi(e, t) {
    return (
      0 == t.from.ch &&
      0 == t.to.ch &&
      "" == z(t.text) &&
      (!e.cm || e.cm.options.wholeLineUpdateBefore)
    );
  }
  function Ci(e, o, t, l) {
    function i(e) {
      return t ? t[e] : null;
    }
    function n(e, t, n) {
      var r, i;
      (t = t),
        (n = n),
        (i = l),
        ((r = e).text = t),
        r.stateAfter && (r.stateAfter = null),
        r.styles && (r.styles = null),
        null != r.order && (r.order = null),
        Ut(r),
        Vt(r, n),
        (t = i ? i(r) : 1) != r.height && pt(r, t),
        b(e, "change", e, o);
    }
    function r(e, t) {
      for (var n = [], r = e; r < t; ++r) n.push(new on(c[r], i(r), l));
      return n;
    }
    var s,
      a = o.from,
      u = o.to,
      c = o.text,
      h = W(e, a.line),
      d = W(e, u.line),
      f = z(c),
      p = i(c.length - 1),
      g = u.line - a.line;
    o.full
      ? (e.insert(0, r(0, c.length)), e.remove(c.length, e.size - c.length))
      : xi(e, o)
      ? ((s = r(0, c.length - 1)),
        n(d, d.text, p),
        g && e.remove(a.line, g),
        s.length && e.insert(a.line, s))
      : h == d
      ? 1 == c.length
        ? n(h, h.text.slice(0, a.ch) + f + h.text.slice(u.ch), p)
        : ((s = r(1, c.length - 1)).push(new on(f + h.text.slice(u.ch), p, l)),
          n(h, h.text.slice(0, a.ch) + c[0], i(0)),
          e.insert(a.line + 1, s))
      : 1 == c.length
      ? (n(h, h.text.slice(0, a.ch) + c[0] + d.text.slice(u.ch), i(0)),
        e.remove(a.line + 1, g))
      : (n(h, h.text.slice(0, a.ch) + c[0], i(0)),
        n(d, f + d.text.slice(u.ch), p),
        (s = r(1, c.length - 1)),
        1 < g && e.remove(a.line + 1, g - 1),
        e.insert(a.line + 1, s)),
      b(e, "change", e, o);
  }
  function Si(e, s, a) {
    !(function e(t, n, r) {
      if (t.linked)
        for (var i = 0; i < t.linked.length; ++i) {
          var o,
            l = t.linked[i];
          l.doc != n &&
            ((o = r && l.sharedHist),
            (a && !o) || (s(l.doc, o), e(l.doc, t, o)));
        }
    })(e, null, !0);
  }
  function Li(e, t) {
    if (t.cm) throw new Error("This document is already in use.");
    cr(((e.doc = t).cm = e)),
      bi(e),
      ki(e),
      (e.options.direction = t.direction),
      e.options.lineWrapping || rn(e),
      (e.options.mode = t.modeOption),
      I(e);
  }
  function ki(e) {
    ("rtl" == e.doc.direction ? ie : ee)(e.display.lineDiv, "CodeMirror-rtl");
  }
  function Ti(e) {
    (this.done = []),
      (this.undone = []),
      (this.undoDepth = e ? e.undoDepth : 1 / 0),
      (this.lastModTime = this.lastSelTime = 0),
      (this.lastOp = this.lastSelOp = null),
      (this.lastOrigin = this.lastSelOrigin = null),
      (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
  }
  function Mi(e, t) {
    var n = { from: bt(t.from), to: gi(t), text: dt(e, t.from, t.to) };
    return (
      Wi(e, n, t.from.line, t.to.line + 1),
      Si(
        e,
        function (e) {
          return Wi(e, n, t.from.line, t.to.line + 1);
        },
        !0
      ),
      n
    );
  }
  function Ni(e) {
    for (; e.length; ) {
      if (!z(e).ranges) break;
      e.pop();
    }
  }
  function Oi(e, t, n, r) {
    var i,
      o,
      l = e.history,
      s = ((l.undone.length = 0), +new Date());
    if (
      (l.lastOp == r ||
        (l.lastOrigin == t.origin &&
          t.origin &&
          (("+" == t.origin.charAt(0) &&
            l.lastModTime >
              s - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
            "*" == t.origin.charAt(0)))) &&
      (o =
        (o = l).lastOp == r
          ? (Ni(o.done), z(o.done))
          : o.done.length && !z(o.done).ranges
          ? z(o.done)
          : 1 < o.done.length && !o.done[o.done.length - 2].ranges
          ? (o.done.pop(), z(o.done))
          : void 0)
    )
      (i = z(o.changes)),
        0 == E(t.from, t.to) && 0 == E(t.from, i.to)
          ? (i.to = gi(t))
          : o.changes.push(Mi(e, t));
    else {
      var a = z(l.done);
      for (
        (a && a.ranges) || Di(e.sel, l.done),
          o = { changes: [Mi(e, t)], generation: l.generation },
          l.done.push(o);
        l.done.length > l.undoDepth;

      )
        l.done.shift(), l.done[0].ranges || l.done.shift();
    }
    l.done.push(n),
      (l.generation = ++l.maxGeneration),
      (l.lastModTime = l.lastSelTime = s),
      (l.lastOp = l.lastSelOp = r),
      (l.lastOrigin = l.lastSelOrigin = t.origin),
      i || O(e, "historyAdded");
  }
  function Ai(e, t, n, r) {
    var i,
      o,
      l,
      s = e.history,
      a = r && r.origin;
    n == s.lastSelOp ||
    (a &&
      s.lastSelOrigin == a &&
      ((s.lastModTime == s.lastSelTime && s.lastOrigin == a) ||
        ((e = e),
        (i = a),
        (o = z(s.done)),
        (l = t),
        "*" == (i = i.charAt(0)) ||
          ("+" == i &&
            o.ranges.length == l.ranges.length &&
            o.somethingSelected() == l.somethingSelected() &&
            new Date() - e.history.lastSelTime <=
              (e.cm ? e.cm.options.historyEventDelay : 500)))))
      ? (s.done[s.done.length - 1] = t)
      : Di(t, s.done),
      (s.lastSelTime = +new Date()),
      (s.lastSelOrigin = a),
      (s.lastSelOp = n),
      r && !1 !== r.clearRedo && Ni(s.undone);
  }
  function Di(e, t) {
    var n = z(t);
    (n && n.ranges && n.equals(e)) || t.push(e);
  }
  function Wi(t, n, e, r) {
    var i = n["spans_" + t.id],
      o = 0;
    t.iter(Math.max(t.first, e), Math.min(t.first + t.size, r), function (e) {
      e.markedSpans &&
        ((i = i || (n["spans_" + t.id] = {}))[o] = e.markedSpans),
        ++o;
    });
  }
  function Hi(e, t) {
    var n = t["spans_" + e.id];
    if (!n) return null;
    for (var r = [], i = 0; i < t.text.length; ++i)
      r.push(
        (function (e) {
          if (!e) return null;
          for (var t, n = 0; n < e.length; ++n)
            e[n].marker.explicitlyCleared
              ? (t = t || e.slice(0, n))
              : t && t.push(e[n]);
          return t ? (t.length ? t : null) : e;
        })(n[i])
      );
    return r;
  }
  function Fi(e, t) {
    var n = Hi(e, t),
      r = Bt(e, t);
    if (!n) return r;
    if (!r) return n;
    for (var i = 0; i < n.length; ++i) {
      var o = n[i],
        l = r[i];
      if (o && l)
        e: for (var s = 0; s < l.length; ++s) {
          for (var a = l[s], u = 0; u < o.length; ++u)
            if (o[u].marker == a.marker) continue e;
          o.push(a);
        }
      else l && (n[i] = l);
    }
    return n;
  }
  function Ei(e, t, n) {
    for (var r = [], i = 0; i < e.length; ++i) {
      var o = e[i];
      if (o.ranges) r.push(n ? B.prototype.deepCopy.call(o) : o);
      else {
        var l = o.changes,
          s = [];
        r.push({ changes: s });
        for (var a = 0; a < l.length; ++a) {
          var u,
            c = l[a];
          if ((s.push({ from: c.from, to: c.to, text: c.text }), t))
            for (var h in c)
              (u = h.match(/^spans_(\d+)$/)) &&
                -1 < L(t, Number(u[1])) &&
                ((z(s)[h] = c[h]), delete c[h]);
        }
      }
    }
    return r;
  }
  function Pi(e, t, n, r) {
    return r
      ? ((r = e.anchor),
        n &&
          ((e = E(t, r) < 0) != E(n, r) < 0
            ? ((r = t), (t = n))
            : e != E(t, n) < 0 && (t = n)),
        new G(r, t))
      : new G(n || t, t);
  }
  function Ii(e, t, n, r, i) {
    null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
      U(e, new B([Pi(e.sel.primary(), t, n, i)], 0), r);
  }
  function zi(e, t, n) {
    for (
      var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
      o < e.sel.ranges.length;
      o++
    )
      r[o] = Pi(e.sel.ranges[o], t[o], null, i);
    U(e, fi(e.cm, r, e.sel.primIndex), n);
  }
  function Ri(e, t, n, r) {
    var i = e.sel.ranges.slice(0);
    (i[t] = n), U(e, fi(e.cm, i, e.sel.primIndex), r);
  }
  function Bi(e, t, n, r) {
    U(e, pi(t, n), r);
  }
  function Gi(e, t, n) {
    var r = e.history.done,
      i = z(r);
    i && i.ranges ? Ui(e, (r[r.length - 1] = t), n) : U(e, t, n);
  }
  function U(e, t, n) {
    Ui(e, t, n), Ai(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
  }
  function Ui(e, t, n) {
    (Ve(e, "beforeSelectionChange") ||
      (e.cm && Ve(e.cm, "beforeSelectionChange"))) &&
      ((r = e),
      (o = n),
      (o = {
        ranges: (i = t).ranges,
        update: function (e) {
          this.ranges = [];
          for (var t = 0; t < e.length; t++)
            this.ranges[t] = new G(P(r, e[t].anchor), P(r, e[t].head));
        },
        origin: o && o.origin,
      }),
      O(r, "beforeSelectionChange", r, o),
      r.cm && O(r.cm, "beforeSelectionChange", r.cm, o),
      (t = o.ranges != i.ranges ? fi(r.cm, o.ranges, o.ranges.length - 1) : i));
    var r,
      i,
      o =
        (n && n.bias) ||
        (E(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
    Vi(e, ji(e, t, o, !0)),
      (n && !1 === n.scroll) ||
        !e.cm ||
        "nocursor" == e.cm.getOption("readOnly") ||
        Dr(e.cm);
  }
  function Vi(e, t) {
    t.equals(e.sel) ||
      ((e.sel = t),
      e.cm &&
        ((e.cm.curOp.updateInput = 1),
        (e.cm.curOp.selectionChanged = !0),
        Ue(e.cm)),
      b(e, "cursorActivity", e));
  }
  function Ki(e) {
    Vi(e, ji(e, e.sel, null, !1));
  }
  function ji(e, t, n, r) {
    for (var i, o = 0; o < t.ranges.length; o++) {
      var l = t.ranges[o],
        s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
        a = Yi(e, l.anchor, s && s.anchor, n, r),
        s = Yi(e, l.head, s && s.head, n, r);
      (!i && a == l.anchor && s == l.head) ||
        ((i = i || t.ranges.slice(0, o))[o] = new G(a, s));
    }
    return i ? fi(e.cm, i, t.primIndex) : t;
  }
  function Xi(e, t, n, r, i) {
    var o = W(e, t.line);
    if (o.markedSpans)
      for (var l = 0; l < o.markedSpans.length; ++l) {
        var s = o.markedSpans[l],
          a = s.marker,
          u = "selectLeft" in a ? !a.selectLeft : a.inclusiveLeft,
          c = "selectRight" in a ? !a.selectRight : a.inclusiveRight;
        if (
          (null == s.from || (u ? s.from <= t.ch : s.from < t.ch)) &&
          (null == s.to || (c ? s.to >= t.ch : s.to > t.ch))
        ) {
          if (i && (O(a, "beforeCursorEnter"), a.explicitlyCleared)) {
            if (o.markedSpans) {
              --l;
              continue;
            }
            break;
          }
          if (a.atomic) {
            if (n) {
              var s = a.find(r < 0 ? 1 : -1),
                h = void 0;
              if (
                (s = (r < 0 ? c : u)
                  ? $i(e, s, -r, s && s.line == t.line ? o : null)
                  : s) &&
                s.line == t.line &&
                (h = E(s, n)) &&
                (r < 0 ? h < 0 : 0 < h)
              )
                return Xi(e, s, t, r, i);
            }
            h = a.find(r < 0 ? -1 : 1);
            return (h = (r < 0 ? u : c)
              ? $i(e, h, r, h.line == t.line ? o : null)
              : h)
              ? Xi(e, h, t, r, i)
              : null;
          }
        }
      }
    return t;
  }
  function Yi(e, t, n, r, i) {
    (r = r || 1),
      (i =
        Xi(e, t, n, r, i) ||
        (!i && Xi(e, t, n, r, !0)) ||
        Xi(e, t, n, -r, i) ||
        (!i && Xi(e, t, n, -r, !0)));
    return i || ((e.cantEdit = !0), F(e.first, 0));
  }
  function $i(e, t, n, r) {
    return n < 0 && 0 == t.ch
      ? t.line > e.first
        ? P(e, F(t.line - 1))
        : null
      : 0 < n && t.ch == (r || W(e, t.line)).text.length
      ? t.line < e.first + e.size - 1
        ? F(t.line + 1, 0)
        : null
      : new F(t.line, t.ch + n);
  }
  function _i(e) {
    e.setSelection(F(e.firstLine(), 0), F(e.lastLine()), fe);
  }
  function qi(i, e, t) {
    var o = {
      canceled: !1,
      from: e.from,
      to: e.to,
      text: e.text,
      origin: e.origin,
      cancel: function () {
        return (o.canceled = !0);
      },
    };
    return (
      t &&
        (o.update = function (e, t, n, r) {
          e && (o.from = P(i, e)),
            t && (o.to = P(i, t)),
            n && (o.text = n),
            void 0 !== r && (o.origin = r);
        }),
      O(i, "beforeChange", i, o),
      i.cm && O(i.cm, "beforeChange", i.cm, o),
      o.canceled
        ? (i.cm && (i.cm.curOp.updateInput = 2), null)
        : { from: o.from, to: o.to, text: o.text, origin: o.origin }
    );
  }
  function Zi(e, t, n) {
    if (e.cm) {
      if (!e.cm.curOp) return R(e.cm, Zi)(e, t, n);
      if (e.cm.state.suppressEdits) return;
    }
    if (
      !(Ve(e, "beforeChange") || (e.cm && Ve(e.cm, "beforeChange"))) ||
      (t = qi(e, t, !0))
    ) {
      var r =
        Pt &&
        !n &&
        (function (e, t, n) {
          var r = null;
          if (
            (e.iter(t.line, n.line + 1, function (e) {
              if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                  var n = e.markedSpans[t].marker;
                  !n.readOnly || (r && -1 != L(r, n)) || (r = r || []).push(n);
                }
            }),
            !r)
          )
            return null;
          for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
            for (var l = r[o], s = l.find(0), a = 0; a < i.length; ++a) {
              var u,
                c,
                h,
                d = i[a];
              E(d.to, s.from) < 0 ||
                0 < E(d.from, s.to) ||
                ((u = [a, 1]),
                (c = E(d.from, s.from)),
                (h = E(d.to, s.to)),
                (c < 0 || (!l.inclusiveLeft && !c)) &&
                  u.push({ from: d.from, to: s.from }),
                (0 < h || (!l.inclusiveRight && !h)) &&
                  u.push({ from: s.to, to: d.to }),
                i.splice.apply(i, u),
                (a += u.length - 3));
            }
          return i;
        })(e, t.from, t.to);
      if (r)
        for (var i = r.length - 1; 0 <= i; --i)
          Qi(e, {
            from: r[i].from,
            to: r[i].to,
            text: i ? [""] : t.text,
            origin: t.origin,
          });
      else Qi(e, t);
    }
  }
  function Qi(e, n) {
    var t, r;
    (1 == n.text.length && "" == n.text[0] && 0 == E(n.from, n.to)) ||
      ((t = vi(e, n)),
      Oi(e, n, t, e.cm ? e.cm.curOp.id : NaN),
      to(e, n, t, Bt(e, n)),
      (r = []),
      Si(e, function (e, t) {
        t || -1 != L(r, e.history) || (oo(e.history, n), r.push(e.history)),
          to(e, n, null, Bt(e, n));
      }));
  }
  function Ji(i, o, e) {
    var t = i.cm && i.cm.state.suppressEdits;
    if (!t || e) {
      for (
        var l,
          n = i.history,
          r = i.sel,
          s = "undo" == o ? n.done : n.undone,
          a = "undo" == o ? n.undone : n.done,
          u = 0;
        u < s.length &&
        ((l = s[u]), e ? !l.ranges || l.equals(i.sel) : l.ranges);
        u++
      );
      if (u != s.length) {
        for (n.lastOrigin = n.lastSelOrigin = null; ; ) {
          if (!(l = s.pop()).ranges) {
            if (t) return void s.push(l);
            break;
          }
          if ((Di(l, a), e && !l.equals(i.sel)))
            return void U(i, l, { clearRedo: !1 });
          r = l;
        }
        for (
          var c = [],
            h =
              (Di(r, a),
              a.push({ changes: c, generation: n.generation }),
              (n.generation = l.generation || ++n.maxGeneration),
              Ve(i, "beforeChange") || (i.cm && Ve(i.cm, "beforeChange"))),
            d = l.changes.length - 1;
          0 <= d;
          --d
        ) {
          var f = (function (e) {
            var n = l.changes[e];
            if (((n.origin = o), h && !qi(i, n, !1))) return (s.length = 0), {};
            c.push(Mi(i, n));
            var t = e ? vi(i, n) : z(s),
              r =
                (to(i, n, t, Fi(i, n)),
                !e && i.cm && i.cm.scrollIntoView({ from: n.from, to: gi(n) }),
                []);
            Si(i, function (e, t) {
              t ||
                -1 != L(r, e.history) ||
                (oo(e.history, n), r.push(e.history)),
                to(e, n, null, Fi(e, n));
            });
          })(d);
          if (f) return f.v;
        }
      }
    }
  }
  function eo(e, t) {
    if (
      0 != t &&
      ((e.first += t),
      (e.sel = new B(
        be(e.sel.ranges, function (e) {
          return new G(
            F(e.anchor.line + t, e.anchor.ch),
            F(e.head.line + t, e.head.ch)
          );
        }),
        e.sel.primIndex
      )),
      e.cm)
    ) {
      I(e.cm, e.first, e.first - t, t);
      for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
        fr(e.cm, r, "gutter");
    }
  }
  function to(e, t, n, r) {
    if (e.cm && !e.cm.curOp) return R(e.cm, to)(e, t, n, r);
    if (t.to.line < e.first)
      eo(e, t.text.length - 1 - (t.to.line - t.from.line));
    else if (!(t.from.line > e.lastLine())) {
      t.from.line < e.first &&
        (eo(e, (i = t.text.length - 1 - (e.first - t.from.line))),
        (t = {
          from: F(e.first, 0),
          to: F(t.to.line + i, t.to.ch),
          text: [z(t.text)],
          origin: t.origin,
        }));
      var i = e.lastLine();
      if (
        (((t =
          t.to.line > i
            ? {
                from: t.from,
                to: F(i, W(e, i).text.length),
                text: [t.text[0]],
                origin: t.origin,
              }
            : t).removed = dt(e, t.from, t.to)),
        (n = n || vi(e, t)),
        e.cm)
      ) {
        var i = e.cm,
          o = t,
          l = r,
          s = i.doc,
          a = i.display,
          u = o.from,
          c = o.to,
          h = !1,
          d = u.line,
          f =
            (i.options.lineWrapping ||
              ((d = H(Zt(W(s, u.line)))),
              s.iter(d, c.line + 1, function (e) {
                if (e == a.maxLine) return (h = !0);
              })),
            -1 < s.sel.contains(o.from, o.to) && Ue(i),
            Ci(s, o, l, ur(i)),
            i.options.lineWrapping ||
              (s.iter(d, u.line + o.text.length, function (e) {
                var t = nn(e);
                t > a.maxLineLength &&
                  ((a.maxLine = e),
                  (a.maxLineLength = t),
                  (a.maxLineChanged = !0),
                  (h = !1));
              }),
              h && (i.curOp.updateMaxLine = !0)),
            s),
          p = u.line;
        if (
          ((f.modeFrontier = Math.min(f.modeFrontier, p)),
          !(f.highlightFrontier < p - 10))
        ) {
          for (var g = f.first, m = p - 1; g < m; m--) {
            var v = W(f, m).stateAfter;
            if (v && (!(v instanceof Lt) || m + v.lookAhead < p)) {
              g = m + 1;
              break;
            }
          }
          f.highlightFrontier = Math.min(f.highlightFrontier, g);
        }
        $r(i, 400),
          (l = o.text.length - (c.line - u.line) - 1),
          o.full
            ? I(i)
            : u.line != c.line || 1 != o.text.length || xi(i.doc, o)
            ? I(i, u.line, c.line + 1, l)
            : fr(i, u.line, "text"),
          (d = Ve(i, "changes")),
          ((s = Ve(i, "change")) || d) &&
            ((l = {
              from: u,
              to: c,
              text: o.text,
              removed: o.removed,
              origin: o.origin,
            }),
            s && b(i, "change", i, l),
            d && (i.curOp.changeObjs || (i.curOp.changeObjs = [])).push(l)),
          (i.display.selForContextMenu = null);
      } else Ci(e, t, r);
      Ui(e, n, fe),
        e.cantEdit && Yi(e, F(e.firstLine(), 0)) && (e.cantEdit = !1);
    }
  }
  function no(e, t, n, r, i) {
    var o;
    E((r = r || n), n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])),
      "string" == typeof t && (t = e.splitLines(t)),
      Zi(e, { from: n, to: r, text: t, origin: i });
  }
  function ro(e, t, n, r) {
    n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
  }
  function io(e, t, n, r) {
    for (var i = 0; i < e.length; ++i) {
      var o = e[i],
        l = !0;
      if (o.ranges) {
        o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
        for (var s = 0; s < o.ranges.length; s++)
          ro(o.ranges[s].anchor, t, n, r), ro(o.ranges[s].head, t, n, r);
      } else {
        for (var a = 0; a < o.changes.length; ++a) {
          var u = o.changes[a];
          if (n < u.from.line)
            (u.from = F(u.from.line + r, u.from.ch)),
              (u.to = F(u.to.line + r, u.to.ch));
          else if (t <= u.to.line) {
            l = !1;
            break;
          }
        }
        l || (e.splice(0, i + 1), (i = 0));
      }
    }
  }
  function oo(e, t) {
    var n = t.from.line,
      r = t.to.line,
      t = t.text.length - (r - n) - 1;
    io(e.done, n, r, t), io(e.undone, n, r, t);
  }
  function lo(e, t, n, r) {
    var i = t,
      o = t;
    return (
      "number" == typeof t ? (o = W(e, Ct(e, t))) : (i = H(t)),
      null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o)
    );
  }
  function so(e) {
    (this.lines = e), (this.parent = null);
    for (var t = 0, n = 0; n < e.length; ++n)
      (e[n].parent = this), (t += e[n].height);
    this.height = t;
  }
  function ao(e) {
    this.children = e;
    for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
      var i = e[r];
      (t += i.chunkSize()), (n += i.height), (i.parent = this);
    }
    (this.size = t), (this.height = n), (this.parent = null);
  }
  (G.prototype.from = function () {
    return xt(this.anchor, this.head);
  }),
    (G.prototype.to = function () {
      return wt(this.anchor, this.head);
    }),
    (G.prototype.empty = function () {
      return (
        this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
      );
    }),
    (so.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var n, r = e, i = e + t; r < i; ++r) {
          var o = this.lines[r];
          (this.height -= o.height),
            ((n = o).parent = null),
            Ut(n),
            b(o, "delete");
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, n) {
        (this.height += n),
          (this.lines = this.lines
            .slice(0, e)
            .concat(t)
            .concat(this.lines.slice(e)));
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      },
      iterN: function (e, t, n) {
        for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
      },
    }),
    (ao.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var n, r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e < o) {
            var l = Math.min(t, o - e),
              s = i.height;
            if (
              (i.removeInner(e, l),
              (this.height -= s - i.height),
              o == l && (this.children.splice(r--, 1), (i.parent = null)),
              0 == (t -= l))
            )
              break;
            e = 0;
          } else e -= o;
        }
        this.size - t < 25 &&
          (1 < this.children.length || !(this.children[0] instanceof so)) &&
          (this.collapse((n = [])),
          (this.children = [new so(n)]),
          (this.children[0].parent = this));
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t)
          this.children[t].collapse(e);
      },
      insertInner: function (e, t, n) {
        (this.size += t.length), (this.height += n);
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e <= o) {
            if ((i.insertInner(e, t, n), i.lines && 50 < i.lines.length)) {
              for (
                var l = (i.lines.length % 25) + 25, s = l;
                s < i.lines.length;

              ) {
                var a = new so(i.lines.slice(s, (s += 25)));
                (i.height -= a.height),
                  this.children.splice(++r, 0, a),
                  (a.parent = this);
              }
              (i.lines = i.lines.slice(0, l)), this.maybeSpill();
            }
            break;
          }
          e -= o;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t,
              n = new ao(e.children.splice(e.children.length - 5, 5));
          } while (
            (e.parent
              ? ((e.size -= n.size),
                (e.height -= n.height),
                (t = L(e.parent.children, e)),
                e.parent.children.splice(t + 1, 0, n))
              : ((((t = new ao(e.children)).parent = e).children = [t, n]),
                (e = t)),
            (n.parent = e.parent),
            10 < e.children.length)
          );
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e < o) {
            var l = Math.min(t, o - e);
            if (i.iterN(e, l, n)) return !0;
            if (0 == (t -= l)) break;
            e = 0;
          } else e -= o;
        }
      },
    });
  function uo(e, t, n) {
    if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
    (this.doc = e), (this.node = t);
  }
  function co(e, t, n) {
    tn(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Ar(e, n);
  }
  (uo.prototype.clear = function () {
    var e = this.doc.cm,
      t = this.line.widgets,
      n = this.line,
      r = H(n);
    if (null != r && t) {
      for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
      t.length || (n.widgets = null);
      var o = kn(this);
      pt(n, Math.max(0, n.height - o)),
        e &&
          (h(e, function () {
            co(e, n, -o), fr(e, r, "widget");
          }),
          b(e, "lineWidgetCleared", e, this, r));
    }
  }),
    (uo.prototype.changed = function () {
      var e = this,
        t = this.height,
        n = this.doc.cm,
        r = this.line,
        i = ((this.height = null), kn(this) - t);
      i &&
        (en(this.doc, r) || pt(r, r.height + i),
        n &&
          h(n, function () {
            (n.curOp.forceUpdate = !0),
              co(n, r, i),
              b(n, "lineWidgetChanged", n, e, H(r));
          }));
    }),
    Ke(uo);
  function ho(e, t) {
    (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++fo);
  }
  var fo = 0;
  function po(r, i, o, e, t) {
    if (e && e.shared)
      return (
        (f = r),
        (n = i),
        (l = o),
        (a = t),
        ((s = ue((s = e))).shared = !1),
        (u = [po(f, n, l, s, a)]),
        (c = u[0]),
        (h = s.widgetNode),
        Si(f, function (e) {
          h && (s.widgetNode = h.cloneNode(!0)),
            u.push(po(e, P(e, n), P(e, l), s, a));
          for (var t = 0; t < e.linked.length; ++t)
            if (e.linked[t].isParent) return;
          c = z(u);
        }),
        new go(u, c)
      );
    var n, l, s, a, u, c, h;
    if (r.cm && !r.cm.curOp) return R(r.cm, po)(r, i, o, e, t);
    var d = new ho(r, t),
      f = E(i, o);
    if ((e && ue(e, d, !1), 0 < f || (0 == f && !1 !== d.clearWhenEmpty)))
      return d;
    if (
      (d.replacedWith &&
        ((d.collapsed = !0),
        (d.widgetNode = ne("span", [d.replacedWith], "CodeMirror-widget")),
        e.handleMouseEvents ||
          d.widgetNode.setAttribute("cm-ignore-events", "true"),
        e.insertLeft && (d.widgetNode.insertLeft = !0)),
      d.collapsed)
    ) {
      if (
        qt(r, i.line, i, o, d) ||
        (i.line != o.line && qt(r, o.line, i, o, d))
      )
        throw new Error(
          "Inserting collapsed marker partially overlapping an existing one"
        );
      It = !0;
    }
    d.addToHistory && Oi(r, { from: i, to: o, origin: "markText" }, r.sel, NaN);
    var p,
      g = i.line,
      m = r.cm;
    if (
      (r.iter(g, o.line + 1, function (e) {
        var t, n;
        m &&
          d.collapsed &&
          !m.options.lineWrapping &&
          Zt(e) == m.display.maxLine &&
          (p = !0),
          d.collapsed && g != i.line && pt(e, 0),
          (e = e),
          (t = new zt(d, g == i.line ? i.ch : null, g == o.line ? o.ch : null)),
          (n =
            (n = r.cm && r.cm.curOp) &&
            window.WeakSet &&
            (n.markedSpans || (n.markedSpans = new WeakSet()))) &&
          e.markedSpans &&
          n.has(e.markedSpans)
            ? e.markedSpans.push(t)
            : ((e.markedSpans = e.markedSpans
                ? e.markedSpans.concat([t])
                : [t]),
              n && n.add(e.markedSpans)),
          t.marker.attachLine(e),
          ++g;
      }),
      d.collapsed &&
        r.iter(i.line, o.line + 1, function (e) {
          en(r, e) && pt(e, 0);
        }),
      d.clearOnEnter &&
        k(d, "beforeCursorEnter", function () {
          return d.clear();
        }),
      d.readOnly &&
        ((Pt = !0),
        (r.history.done.length || r.history.undone.length) && r.clearHistory()),
      d.collapsed && ((d.id = ++fo), (d.atomic = !0)),
      m)
    ) {
      if ((p && (m.curOp.updateMaxLine = !0), d.collapsed))
        I(m, i.line, o.line + 1);
      else if (
        d.className ||
        d.startStyle ||
        d.endStyle ||
        d.css ||
        d.attributes ||
        d.title
      )
        for (var v = i.line; v <= o.line; v++) fr(m, v, "text");
      d.atomic && Ki(m.doc), b(m, "markerAdded", m, d);
    }
    return d;
  }
  (ho.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      for (
        var e,
          t = this.doc.cm,
          n = t && !t.curOp,
          r =
            (n && Xr(t),
            !Ve(this, "clear") ||
              ((e = this.find()) && b(this, "clear", e.from, e.to)),
            null),
          i = null,
          o = 0;
        o < this.lines.length;
        ++o
      ) {
        var l = this.lines[o],
          s = Rt(l.markedSpans, this);
        t && !this.collapsed
          ? fr(t, H(l), "text")
          : t && (null != s.to && (i = H(l)), null != s.from && (r = H(l))),
          (l.markedSpans = (function (e, t) {
            for (var n, r = 0; r < e.length; ++r)
              e[r] != t && (n = n || []).push(e[r]);
            return n;
          })(l.markedSpans, s)),
          null == s.from &&
            this.collapsed &&
            !en(this.doc, l) &&
            t &&
            pt(l, or(t.display));
      }
      if (t && this.collapsed && !t.options.lineWrapping)
        for (var a = 0; a < this.lines.length; ++a) {
          var u = Zt(this.lines[a]),
            c = nn(u);
          c > t.display.maxLineLength &&
            ((t.display.maxLine = u),
            (t.display.maxLineLength = c),
            (t.display.maxLineChanged = !0));
        }
      null != r && t && this.collapsed && I(t, r, i + 1),
        (this.lines.length = 0),
        (this.explicitlyCleared = !0),
        this.atomic &&
          this.doc.cantEdit &&
          ((this.doc.cantEdit = !1), t && Ki(t.doc)),
        t && b(t, "markerCleared", t, this, r, i),
        n && Yr(t),
        this.parent && this.parent.clear();
    }
  }),
    (ho.prototype.find = function (e, t) {
      var n, r;
      null == e && "bookmark" == this.type && (e = 1);
      for (var i = 0; i < this.lines.length; ++i) {
        var o = this.lines[i],
          l = Rt(o.markedSpans, this);
        if (null != l.from && ((n = F(t ? o : H(o), l.from)), -1 == e))
          return n;
        if (null != l.to && ((r = F(t ? o : H(o), l.to)), 1 == e)) return r;
      }
      return n && { from: n, to: r };
    }),
    (ho.prototype.changed = function () {
      var n = this,
        r = this.find(-1, !0),
        i = this,
        o = this.doc.cm;
      r &&
        o &&
        h(o, function () {
          var e = r.line,
            t = H(r.line),
            t = En(o, t);
          t && (Gn(t), (o.curOp.selectionChanged = o.curOp.forceUpdate = !0)),
            (o.curOp.updateMaxLine = !0),
            en(i.doc, e) ||
              null == i.height ||
              ((t = i.height),
              (i.height = null),
              (t = kn(i) - t) && pt(e, e.height + t)),
            b(o, "markerChanged", o, n);
        });
    }),
    (ho.prototype.attachLine = function (e) {
      var t;
      this.lines.length ||
        !this.doc.cm ||
        ((t = this.doc.cm.curOp).maybeHiddenMarkers &&
          -1 != L(t.maybeHiddenMarkers, this)) ||
        (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this),
        this.lines.push(e);
    }),
    (ho.prototype.detachLine = function (e) {
      this.lines.splice(L(this.lines, e), 1),
        !this.lines.length &&
          this.doc.cm &&
          (
            (e = this.doc.cm.curOp).maybeHiddenMarkers ||
            (e.maybeHiddenMarkers = [])
          ).push(this);
    }),
    Ke(ho);
  var go = function (e, t) {
    (this.markers = e), (this.primary = t);
    for (var n = 0; n < e.length; ++n) e[n].parent = this;
  };
  function mo(e) {
    return e.findMarks(F(e.first, 0), e.clipPos(F(e.lastLine())), function (e) {
      return e.parent;
    });
  }
  function vo(o) {
    for (var e = 0; e < o.length; e++)
      !(function (e) {
        var t = o[e],
          n = [t.primary.doc];
        Si(t.primary.doc, function (e) {
          return n.push(e);
        });
        for (var r = 0; r < t.markers.length; r++) {
          var i = t.markers[r];
          -1 == L(n, i.doc) && ((i.parent = null), t.markers.splice(r--, 1));
        }
      })(e);
  }
  (go.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      this.explicitlyCleared = !0;
      for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
      b(this, "clear");
    }
  }),
    (go.prototype.find = function (e, t) {
      return this.primary.find(e, t);
    }),
    Ke(go);
  function f(e, t, n, r, i) {
    if (!(this instanceof f)) return new f(e, t, n, r, i);
    null == n && (n = 0),
      ao.call(this, [new so([new on("", null)])]),
      (this.first = n),
      (this.scrollTop = this.scrollLeft = 0),
      (this.cantEdit = !1),
      (this.cleanGeneration = 1),
      (n = F((this.modeFrontier = this.highlightFrontier = n), 0)),
      (this.sel = pi(n)),
      (this.history = new Ti(null)),
      (this.id = ++yo),
      (this.modeOption = t),
      (this.lineSep = r),
      (this.direction = "rtl" == i ? "rtl" : "ltr"),
      (this.extend = !1),
      "string" == typeof e && (e = this.splitLines(e)),
      Ci(this, { from: n, to: n, text: e }),
      U(this, pi(n), fe);
  }
  var yo = 0,
    bo =
      (((f.prototype = xe(ao.prototype, {
        constructor: f,
        iter: function (e, t, n) {
          n
            ? this.iterN(e - this.first, t - e, n)
            : this.iterN(this.first, this.first + this.size, e);
        },
        insert: function (e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function (e, t) {
          this.removeInner(e - this.first, t);
        },
        getValue: function (e) {
          var t = ft(this, this.first, this.first + this.size);
          return !1 === e ? t : t.join(e || this.lineSeparator());
        },
        setValue: n(function (e) {
          var t = F(this.first, 0),
            n = this.first + this.size - 1;
          Zi(
            this,
            {
              from: t,
              to: F(n, W(this, n).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0,
            },
            !0
          ),
            this.cm && Wr(this.cm, 0, 0),
            U(this, pi(t), fe);
        }),
        replaceRange: function (e, t, n, r) {
          no(this, e, (t = P(this, t)), (n = n ? P(this, n) : t), r);
        },
        getRange: function (e, t, n) {
          e = dt(this, P(this, e), P(this, t));
          return !1 === n
            ? e
            : "" === n
            ? e.join("")
            : e.join(n || this.lineSeparator());
        },
        getLine: function (e) {
          e = this.getLineHandle(e);
          return e && e.text;
        },
        getLineHandle: function (e) {
          if (mt(this, e)) return W(this, e);
        },
        getLineNumber: H,
        getLineHandleVisualStart: function (e) {
          return Zt((e = "number" == typeof e ? W(this, e) : e));
        },
        lineCount: function () {
          return this.size;
        },
        firstLine: function () {
          return this.first;
        },
        lastLine: function () {
          return this.first + this.size - 1;
        },
        clipPos: function (e) {
          return P(this, e);
        },
        getCursor: function (e) {
          var t = this.sel.primary(),
            e =
              null == e || "head" == e
                ? t.head
                : "anchor" == e
                ? t.anchor
                : "end" == e || "to" == e || !1 === e
                ? t.to()
                : t.from();
          return e;
        },
        listSelections: function () {
          return this.sel.ranges;
        },
        somethingSelected: function () {
          return this.sel.somethingSelected();
        },
        setCursor: n(function (e, t, n) {
          Bi(this, P(this, "number" == typeof e ? F(e, t || 0) : e), null, n);
        }),
        setSelection: n(function (e, t, n) {
          Bi(this, P(this, e), P(this, t || e), n);
        }),
        extendSelection: n(function (e, t, n) {
          Ii(this, P(this, e), t && P(this, t), n);
        }),
        extendSelections: n(function (e, t) {
          zi(this, St(this, e), t);
        }),
        extendSelectionsBy: n(function (e, t) {
          zi(this, St(this, be(this.sel.ranges, e)), t);
        }),
        setSelections: n(function (e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new G(
                P(this, e[i].anchor),
                P(this, e[i].head || e[i].anchor)
              );
            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
              U(this, fi(this.cm, r, t), n);
          }
        }),
        addSelection: n(function (e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new G(P(this, e), P(this, t || e))),
            U(this, fi(this.cm, r, r.length - 1), n);
        }),
        getSelection: function (e) {
          for (var t = this.sel.ranges, n = 0; n < t.length; n++)
            var r = dt(this, t[n].from(), t[n].to()), i = i ? i.concat(r) : r;
          return !1 === e ? i : i.join(e || this.lineSeparator());
        },
        getSelections: function (e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = dt(this, n[r].from(), n[r].to());
            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
          }
          return t;
        },
        replaceSelection: function (e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: n(function (e, t, n) {
          for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
            var l = i.ranges[o];
            r[o] = {
              from: l.from(),
              to: l.to(),
              text: this.splitLines(e[o]),
              origin: n,
            };
          }
          for (
            var t =
                t &&
                "end" != t &&
                (function (e, t, n) {
                  for (
                    var r = [], i = (u = F(e.first, 0)), o = 0;
                    o < t.length;
                    o++
                  ) {
                    var l = t[o],
                      s = yi(l.from, u, i),
                      a = yi(gi(l), u, i),
                      u = l.to,
                      i = a;
                    "around" == n
                      ? ((l = E((l = e.sel.ranges[o]).head, l.anchor) < 0),
                        (r[o] = new G(l ? a : s, l ? s : a)))
                      : (r[o] = new G(s, s));
                  }
                  return new B(r, e.sel.primIndex);
                })(this, r, t),
              s = r.length - 1;
            0 <= s;
            s--
          )
            Zi(this, r[s]);
          t ? Gi(this, t) : this.cm && Dr(this.cm);
        }),
        undo: n(function () {
          Ji(this, "undo");
        }),
        redo: n(function () {
          Ji(this, "redo");
        }),
        undoSelection: n(function () {
          Ji(this, "undo", !0);
        }),
        redoSelection: n(function () {
          Ji(this, "redo", !0);
        }),
        setExtending: function (e) {
          this.extend = e;
        },
        getExtending: function () {
          return this.extend;
        },
        historySize: function () {
          for (
            var e = this.history, t = 0, n = 0, r = 0;
            r < e.done.length;
            r++
          )
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function () {
          var t = this;
          (this.history = new Ti(this.history)),
            Si(
              this,
              function (e) {
                return (e.history = t.history);
              },
              !0
            );
        },
        markClean: function () {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function (e) {
          return (
            e &&
              (this.history.lastOp =
                this.history.lastSelOp =
                this.history.lastOrigin =
                  null),
            this.history.generation
          );
        },
        isClean: function (e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function () {
          return {
            done: Ei(this.history.done),
            undone: Ei(this.history.undone),
          };
        },
        setHistory: function (e) {
          var t = (this.history = new Ti(this.history));
          (t.done = Ei(e.done.slice(0), null, !0)),
            (t.undone = Ei(e.undone.slice(0), null, !0));
        },
        setGutterMarker: n(function (e, n, r) {
          return lo(this, e, "gutter", function (e) {
            var t = e.gutterMarkers || (e.gutterMarkers = {});
            return !(t[n] = r) && ke(t) && (e.gutterMarkers = null), 1;
          });
        }),
        clearGutter: n(function (t) {
          var n = this;
          this.iter(function (e) {
            e.gutterMarkers &&
              e.gutterMarkers[t] &&
              lo(n, e, "gutter", function () {
                return (
                  (e.gutterMarkers[t] = null),
                  ke(e.gutterMarkers) && (e.gutterMarkers = null),
                  1
                );
              });
          });
        }),
        lineInfo: function (e) {
          var t;
          if ("number" == typeof e) {
            if (!mt(this, e)) return null;
            if (!(e = W(this, (t = e)))) return null;
          } else if (null == (t = H(e))) return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets,
          };
        },
        addLineClass: n(function (e, n, r) {
          return lo(this, e, "gutter" == n ? "gutter" : "class", function (e) {
            var t =
              "text" == n
                ? "textClass"
                : "background" == n
                ? "bgClass"
                : "gutter" == n
                ? "gutterClass"
                : "wrapClass";
            if (e[t]) {
              if (J(r).test(e[t])) return;
              e[t] += " " + r;
            } else e[t] = r;
            return 1;
          });
        }),
        removeLineClass: n(function (e, o, l) {
          return lo(this, e, "gutter" == o ? "gutter" : "class", function (e) {
            var t =
                "text" == o
                  ? "textClass"
                  : "background" == o
                  ? "bgClass"
                  : "gutter" == o
                  ? "gutterClass"
                  : "wrapClass",
              n = e[t];
            if (n) {
              if (null == l) e[t] = null;
              else {
                var r = n.match(J(l));
                if (!r) return;
                var i = r.index + r[0].length;
                e[t] =
                  n.slice(0, r.index) +
                    (r.index && i != n.length ? " " : "") +
                    n.slice(i) || null;
              }
              return 1;
            }
          });
        }),
        addLineWidget: n(function (e, t, n) {
          return (
            (e = e),
            (i = new uo((r = this), t, n)),
            (o = r.cm) && i.noHScroll && (o.display.alignWidgets = !0),
            lo(r, e, "widget", function (e) {
              var t = e.widgets || (e.widgets = []);
              return (
                null == i.insertAt
                  ? t.push(i)
                  : t.splice(Math.min(t.length, Math.max(0, i.insertAt)), 0, i),
                (i.line = e),
                o &&
                  !en(r, e) &&
                  ((t = tn(e) < r.scrollTop),
                  pt(e, e.height + kn(i)),
                  t && Ar(o, i.height),
                  (o.curOp.forceUpdate = !0)),
                1
              );
            }),
            o && b(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : H(e)),
            i
          );
          var r, i, o;
        }),
        removeLineWidget: function (e) {
          e.clear();
        },
        markText: function (e, t, n) {
          return po(this, P(this, e), P(this, t), n, (n && n.type) || "range");
        },
        setBookmark: function (e, t) {
          t = {
            replacedWith: t && (null == t.nodeType ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents,
          };
          return po(this, (e = P(this, e)), e, t, "bookmark");
        },
        findMarksAt: function (e) {
          var t = [],
            n = W(this, (e = P(this, e)).line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= e.ch) &&
                (null == i.to || i.to >= e.ch) &&
                t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function (i, o, l) {
          (i = P(this, i)), (o = P(this, o));
          var s = [],
            a = i.line;
          return (
            this.iter(i.line, o.line + 1, function (e) {
              var t = e.markedSpans;
              if (t)
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (null != r.to && a == i.line && i.ch >= r.to) ||
                    (null == r.from && a != i.line) ||
                    (null != r.from && a == o.line && r.from >= o.ch) ||
                    (l && !l(r.marker)) ||
                    s.push(r.marker.parent || r.marker);
                }
              ++a;
            }),
            s
          );
        },
        getAllMarks: function () {
          var r = [];
          return (
            this.iter(function (e) {
              var t = e.markedSpans;
              if (t)
                for (var n = 0; n < t.length; ++n)
                  null != t[n].from && r.push(t[n].marker);
            }),
            r
          );
        },
        posFromIndex: function (t) {
          var n,
            r = this.first,
            i = this.lineSeparator().length;
          return (
            this.iter(function (e) {
              e = e.text.length + i;
              if (t < e) return (n = t), !0;
              (t -= e), ++r;
            }),
            P(this, F(r, n))
          );
        },
        indexFromPos: function (e) {
          var t = (e = P(this, e)).ch;
          if (e.line < this.first || e.ch < 0) return 0;
          var n = this.lineSeparator().length;
          return (
            this.iter(this.first, e.line, function (e) {
              t += e.text.length + n;
            }),
            t
          );
        },
        copy: function (e) {
          var t = new f(
            ft(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return (
            (t.scrollTop = this.scrollTop),
            (t.scrollLeft = this.scrollLeft),
            (t.sel = this.sel),
            (t.extend = !1),
            e &&
              ((t.history.undoDepth = this.history.undoDepth),
              t.setHistory(this.getHistory())),
            t
          );
        },
        linkedDoc: function (e) {
          for (
            var t = this.first,
              n = this.first + this.size,
              n =
                (null != (e = e || {}).from && e.from > t && (t = e.from),
                null != e.to && e.to < n && (n = e.to),
                new f(
                  ft(this, t, n),
                  e.mode || this.modeOption,
                  t,
                  this.lineSep,
                  this.direction
                )),
              r =
                (e.sharedHist && (n.history = this.history),
                (this.linked || (this.linked = [])).push({
                  doc: n,
                  sharedHist: e.sharedHist,
                }),
                (n.linked = [
                  { doc: this, isParent: !0, sharedHist: e.sharedHist },
                ]),
                n),
              i = mo(this),
              o = 0;
            o < i.length;
            o++
          ) {
            var l = i[o],
              s = l.find(),
              a = r.clipPos(s.from),
              s = r.clipPos(s.to);
            E(a, s) &&
              ((a = po(r, a, s, l.primary, l.primary.type)),
              l.markers.push(a),
              (a.parent = l));
          }
          return n;
        },
        unlinkDoc: function (e) {
          if ((e instanceof p && (e = e.doc), this.linked))
            for (var t = 0; t < this.linked.length; ++t) {
              var n = this.linked[t];
              if (n.doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), vo(mo(this));
                break;
              }
            }
          var r;
          e.history == this.history &&
            ((r = [e.id]),
            Si(
              e,
              function (e) {
                return r.push(e.id);
              },
              !0
            ),
            (e.history = new Ti(null)),
            (e.history.done = Ei(this.history.done, r)),
            (e.history.undone = Ei(this.history.undone, r)));
        },
        iterLinkedDocs: function (e) {
          Si(this, e);
        },
        getMode: function () {
          return this.mode;
        },
        getEditor: function () {
          return this.cm;
        },
        splitLines: function (e) {
          return this.lineSep ? e.split(this.lineSep) : Je(e);
        },
        lineSeparator: function () {
          return this.lineSep || "\n";
        },
        setDirection: n(function (e) {
          var t;
          (e = "rtl" != e ? "ltr" : e) != this.direction &&
            ((this.direction = e),
            this.iter(function (e) {
              return (e.order = null);
            }),
            this.cm &&
              h((t = this.cm), function () {
                ki(t), I(t);
              }));
        }),
      })).eachLine = f.prototype.iter),
      0);
  function wo(e) {
    var r = this;
    if ((xo(r), !A(r, e) && !Tn(r.display, e))) {
      D(e), w && (bo = +new Date());
      var t = hr(r, e, !0),
        n = e.dataTransfer.files;
      if (t && !r.isReadOnly())
        if (n && n.length && window.FileReader && window.File)
          for (
            var i = n.length,
              o = Array(i),
              l = 0,
              s = function () {
                ++l == i &&
                  R(r, function () {
                    var e = {
                      from: (t = P(r.doc, t)),
                      to: t,
                      text: r.doc.splitLines(
                        o
                          .filter(function (e) {
                            return null != e;
                          })
                          .join(r.doc.lineSeparator())
                      ),
                      origin: "paste",
                    };
                    Zi(r.doc, e), Gi(r.doc, pi(P(r.doc, t), P(r.doc, gi(e))));
                  })();
              },
              a = 0;
            a < n.length;
            a++
          )
            !(function (e, t) {
              var n;
              r.options.allowDropFileTypes &&
              -1 == L(r.options.allowDropFileTypes, e.type)
                ? s()
                : (((n = new FileReader()).onerror = function () {
                    return s();
                  }),
                  (n.onload = function () {
                    var e = n.result;
                    /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[t] = e), s();
                  }),
                  n.readAsText(e));
            })(n[a], a);
        else {
          if (r.state.draggingText && -1 < r.doc.sel.contains(t))
            return (
              r.state.draggingText(e),
              void setTimeout(function () {
                return r.display.input.focus();
              }, 20)
            );
          try {
            var u,
              c = e.dataTransfer.getData("Text");
            if (c) {
              if (
                (r.state.draggingText &&
                  !r.state.draggingText.copy &&
                  (u = r.listSelections()),
                Ui(r.doc, pi(t, t)),
                u)
              )
                for (var h = 0; h < u.length; ++h)
                  no(r.doc, "", u[h].anchor, u[h].head, "drag");
              r.replaceSelection(c, "around", "paste"), r.display.input.focus();
            }
          } catch (e) {}
        }
    }
  }
  function xo(e) {
    e.display.dragCursor &&
      (e.display.lineSpace.removeChild(e.display.dragCursor),
      (e.display.dragCursor = null));
  }
  function Co(t) {
    if (document.getElementsByClassName) {
      for (
        var e = document.getElementsByClassName("CodeMirror"), n = [], r = 0;
        r < e.length;
        r++
      ) {
        var i = e[r].CodeMirror;
        i && n.push(i);
      }
      n.length &&
        n[0].operation(function () {
          for (var e = 0; e < n.length; e++) t(n[e]);
        });
    }
  }
  var So = !1;
  function Lo() {
    var e;
    So ||
      (k(window, "resize", function () {
        null == e &&
          (e = setTimeout(function () {
            (e = null), Co(ko);
          }, 100));
      }),
      k(window, "blur", function () {
        return Co(kr);
      }),
      (So = !0));
  }
  function ko(e) {
    var t = e.display;
    (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
      (t.scrollbarsClipped = !1),
      e.setSize();
  }
  for (
    var To = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert",
      },
      Mo = 0;
    Mo < 10;
    Mo++
  )
    To[Mo + 48] = To[Mo + 96] = String(Mo);
  for (var No = 65; No <= 90; No++) To[No] = String.fromCharCode(No);
  for (var Oo = 1; Oo <= 12; Oo++) To[Oo + 111] = To[Oo + 63235] = "F" + Oo;
  var Ao = {};
  function Do(e) {
    var t,
      n,
      r,
      i,
      o = e.split(/-(?!$)/);
    e = o[o.length - 1];
    for (var l = 0; l < o.length - 1; l++) {
      var s = o[l];
      if (/^(cmd|meta|m)$/i.test(s)) i = !0;
      else if (/^a(lt)?$/i.test(s)) t = !0;
      else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
      else {
        if (!/^s(hift)?$/i.test(s))
          throw new Error("Unrecognized modifier name: " + s);
        r = !0;
      }
    }
    return (
      t && (e = "Alt-" + e),
      n && (e = "Ctrl-" + e),
      i && (e = "Cmd-" + e),
      (e = r ? "Shift-" + e : e)
    );
  }
  function Wo(e) {
    var t,
      n,
      r = {};
    for (t in e)
      if (e.hasOwnProperty(t)) {
        var i = e[t];
        if (!/^(name|fallthrough|(de|at)tach)$/.test(t))
          if ("..." == i) delete e[t];
          else {
            for (var o = be(t.split(" "), Do), l = 0; l < o.length; l++) {
              var s = void 0,
                a = void 0,
                s =
                  l == o.length - 1
                    ? ((a = o.join(" ")), i)
                    : ((a = o.slice(0, l + 1).join(" ")), "..."),
                u = r[a];
              if (u) {
                if (u != s) throw new Error("Inconsistent bindings for " + a);
              } else r[a] = s;
            }
            delete e[t];
          }
      }
    for (n in r) e[n] = r[n];
    return e;
  }
  function Ho(e, t, n, r) {
    var i = (t = Io(t)).call ? t.call(e, r) : t[e];
    if (!1 === i) return "nothing";
    if ("..." === i) return "multi";
    if (null != i && n(i)) return "handled";
    if (t.fallthrough) {
      if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
        return Ho(e, t.fallthrough, n, r);
      for (var o = 0; o < t.fallthrough.length; o++) {
        var l = Ho(e, t.fallthrough[o], n, r);
        if (l) return l;
      }
    }
  }
  function Fo(e) {
    e = "string" == typeof e ? e : To[e.keyCode];
    return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e;
  }
  function Eo(e, t, n) {
    var r = e;
    return (
      t.altKey && "Alt" != r && (e = "Alt-" + e),
      (Z ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
      (Z ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e),
      (e = !n && t.shiftKey && "Shift" != r ? "Shift-" + e : e)
    );
  }
  function Po(e, t) {
    if (K && 34 == e.keyCode && e.char) return !1;
    var n = To[e.keyCode];
    return (
      null != n &&
      !e.altGraphKey &&
      Eo((n = 3 == e.keyCode && e.code ? e.code : n), e, t)
    );
  }
  function Io(e) {
    return "string" == typeof e ? Ao[e] : e;
  }
  function zo(t, e) {
    for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
      for (var o = e(n[i]); r.length && E(o.from, z(r).to) <= 0; ) {
        var l = r.pop();
        if (E(l.from, o.from) < 0) {
          o.from = l.from;
          break;
        }
      }
      r.push(o);
    }
    h(t, function () {
      for (var e = r.length - 1; 0 <= e; e--)
        no(t.doc, "", r[e].from, r[e].to, "+delete");
      Dr(t);
    });
  }
  function Ro(e, t, n) {
    t = Ne(e.text, t + n, n);
    return t < 0 || t > e.text.length ? null : t;
  }
  function Bo(e, t, n) {
    e = Ro(e, t.ch, n);
    return null == e ? null : new F(t.line, e, n < 0 ? "after" : "before");
  }
  function Go(e, t, n, r, i) {
    if (e) {
      "rtl" == t.doc.direction && (i = -i);
      var o,
        l,
        s,
        a,
        e = Re(n, t.doc.direction);
      if (e)
        return (
          (o =
            i < 0 == (1 == (e = i < 0 ? z(e) : e[0]).level)
              ? "after"
              : "before"),
          0 < e.level || "rtl" == t.doc.direction
            ? ((l = Pn(t, n)),
              (s = i < 0 ? n.text.length - 1 : 0),
              (a = In(t, l, s).top),
              (s = Oe(
                function (e) {
                  return In(t, l, e).top == a;
                },
                i < 0 == (1 == e.level) ? e.from : e.to - 1,
                s
              )),
              "before" == o && (s = Ro(n, s, 1)))
            : (s = i < 0 ? e.to : e.from),
          new F(r, s, o)
        );
    }
    return new F(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
  }
  function Uo(t, n, s, e) {
    var a = Re(n, t.doc.direction);
    if (!a) return Bo(n, s, e);
    s.ch >= n.text.length
      ? ((s.ch = n.text.length), (s.sticky = "before"))
      : s.ch <= 0 && ((s.ch = 0), (s.sticky = "after"));
    var r = De(a, s.ch, s.sticky),
      i = a[r];
    if (
      "ltr" == t.doc.direction &&
      i.level % 2 == 0 &&
      (0 < e ? i.to > s.ch : i.from < s.ch)
    )
      return Bo(n, s, e);
    function u(e, t) {
      return Ro(n, e instanceof F ? e.ch : e, t);
    }
    function o(e) {
      return t.options.lineWrapping
        ? ((l = l || Pn(t, n)), tr(t, n, l, e))
        : { begin: 0, end: n.text.length };
    }
    var l,
      c = o("before" == s.sticky ? u(s, -1) : s.ch);
    if ("rtl" == t.doc.direction || 1 == i.level) {
      var h = (1 == i.level) == e < 0,
        d = u(s, h ? 1 : -1);
      if (
        null != d &&
        (h ? d <= i.to && d <= c.end : d >= i.from && d >= c.begin)
      )
        return new F(s.line, d, h ? "before" : "after");
    }
    function f(e, t, n) {
      for (
        var r = function (e, t) {
          return t
            ? new F(s.line, u(e, 1), "before")
            : new F(s.line, e, "after");
        };
        0 <= e && e < a.length;
        e += t
      ) {
        var i = a[e],
          o = 0 < t == (1 != i.level),
          l = o ? n.begin : u(n.end, -1);
        if (i.from <= l && l < i.to) return r(l, o);
        if (((l = o ? i.from : u(i.to, -1)), n.begin <= l && l < n.end))
          return r(l, o);
      }
    }
    i = f(r + e, e, c);
    if (i) return i;
    d = 0 < e ? c.end : u(c.begin, -1);
    return null == d ||
      (0 < e && d == n.text.length) ||
      !(i = f(0 < e ? 0 : a.length - 1, e, o(d)))
      ? null
      : i;
  }
  (Ao.basic = {
    Left: "goCharLeft",
    Right: "goCharRight",
    Up: "goLineUp",
    Down: "goLineDown",
    End: "goLineEnd",
    Home: "goLineStartSmart",
    PageUp: "goPageUp",
    PageDown: "goPageDown",
    Delete: "delCharAfter",
    Backspace: "delCharBefore",
    "Shift-Backspace": "delCharBefore",
    Tab: "defaultTab",
    "Shift-Tab": "indentAuto",
    Enter: "newlineAndIndent",
    Insert: "toggleOverwrite",
    Esc: "singleSelection",
  }),
    (Ao.pcDefault = {
      "Ctrl-A": "selectAll",
      "Ctrl-D": "deleteLine",
      "Ctrl-Z": "undo",
      "Shift-Ctrl-Z": "redo",
      "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart",
      "Ctrl-End": "goDocEnd",
      "Ctrl-Up": "goLineUp",
      "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft",
      "Ctrl-Right": "goGroupRight",
      "Alt-Left": "goLineStart",
      "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore",
      "Ctrl-Delete": "delGroupAfter",
      "Ctrl-S": "save",
      "Ctrl-F": "find",
      "Ctrl-G": "findNext",
      "Shift-Ctrl-G": "findPrev",
      "Shift-Ctrl-F": "replace",
      "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess",
      "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection",
      "Shift-Ctrl-U": "redoSelection",
      "Alt-U": "redoSelection",
      fallthrough: "basic",
    }),
    (Ao.emacsy = {
      "Ctrl-F": "goCharRight",
      "Ctrl-B": "goCharLeft",
      "Ctrl-P": "goLineUp",
      "Ctrl-N": "goLineDown",
      "Ctrl-A": "goLineStart",
      "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown",
      "Shift-Ctrl-V": "goPageUp",
      "Ctrl-D": "delCharAfter",
      "Ctrl-H": "delCharBefore",
      "Alt-Backspace": "delWordBefore",
      "Ctrl-K": "killLine",
      "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine",
    }),
    (Ao.macDefault = {
      "Cmd-A": "selectAll",
      "Cmd-D": "deleteLine",
      "Cmd-Z": "undo",
      "Shift-Cmd-Z": "redo",
      "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart",
      "Cmd-Up": "goDocStart",
      "Cmd-End": "goDocEnd",
      "Cmd-Down": "goDocEnd",
      "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight",
      "Cmd-Left": "goLineLeft",
      "Cmd-Right": "goLineRight",
      "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter",
      "Alt-Delete": "delGroupAfter",
      "Cmd-S": "save",
      "Cmd-F": "find",
      "Cmd-G": "findNext",
      "Shift-Cmd-G": "findPrev",
      "Cmd-Alt-F": "replace",
      "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess",
      "Cmd-]": "indentMore",
      "Cmd-Backspace": "delWrappedLineLeft",
      "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection",
      "Shift-Cmd-U": "redoSelection",
      "Ctrl-Up": "goDocStart",
      "Ctrl-Down": "goDocEnd",
      fallthrough: ["basic", "emacsy"],
    }),
    (Ao.default = C ? Ao.macDefault : Ao.pcDefault);
  var Vo = {
    selectAll: _i,
    singleSelection: function (e) {
      return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), fe);
    },
    killLine: function (n) {
      return zo(n, function (e) {
        var t;
        return e.empty()
          ? ((t = W(n.doc, e.head.line).text.length),
            e.head.ch == t && e.head.line < n.lastLine()
              ? { from: e.head, to: F(e.head.line + 1, 0) }
              : { from: e.head, to: F(e.head.line, t) })
          : { from: e.from(), to: e.to() };
      });
    },
    deleteLine: function (t) {
      return zo(t, function (e) {
        return {
          from: F(e.from().line, 0),
          to: P(t.doc, F(e.to().line + 1, 0)),
        };
      });
    },
    delLineLeft: function (e) {
      return zo(e, function (e) {
        return { from: F(e.from().line, 0), to: e.from() };
      });
    },
    delWrappedLineLeft: function (n) {
      return zo(n, function (e) {
        var t = n.charCoords(e.head, "div").top + 5;
        return { from: n.coordsChar({ left: 0, top: t }, "div"), to: e.from() };
      });
    },
    delWrappedLineRight: function (n) {
      return zo(n, function (e) {
        var t = n.charCoords(e.head, "div").top + 5,
          t = n.coordsChar(
            { left: n.display.lineDiv.offsetWidth + 100, top: t },
            "div"
          );
        return { from: e.from(), to: t };
      });
    },
    undo: function (e) {
      return e.undo();
    },
    redo: function (e) {
      return e.redo();
    },
    undoSelection: function (e) {
      return e.undoSelection();
    },
    redoSelection: function (e) {
      return e.redoSelection();
    },
    goDocStart: function (e) {
      return e.extendSelection(F(e.firstLine(), 0));
    },
    goDocEnd: function (e) {
      return e.extendSelection(F(e.lastLine()));
    },
    goLineStart: function (t) {
      return t.extendSelectionsBy(
        function (e) {
          return Ko(t, e.head.line);
        },
        { origin: "+move", bias: 1 }
      );
    },
    goLineStartSmart: function (t) {
      return t.extendSelectionsBy(
        function (e) {
          return jo(t, e.head);
        },
        { origin: "+move", bias: 1 }
      );
    },
    goLineEnd: function (i) {
      return i.extendSelectionsBy(
        function (e) {
          var t = i,
            e = e.head.line,
            n = W(t.doc, e),
            r = (function (e) {
              for (var t; (t = _t(e)); ) e = t.find(1, !0).line;
              return e;
            })(n);
          return r != n && (e = H(r)), Go(!0, t, n, e, -1);
        },
        { origin: "+move", bias: -1 }
      );
    },
    goLineRight: function (t) {
      return t.extendSelectionsBy(function (e) {
        e = t.cursorCoords(e.head, "div").top + 5;
        return t.coordsChar(
          { left: t.display.lineDiv.offsetWidth + 100, top: e },
          "div"
        );
      }, ge);
    },
    goLineLeft: function (t) {
      return t.extendSelectionsBy(function (e) {
        e = t.cursorCoords(e.head, "div").top + 5;
        return t.coordsChar({ left: 0, top: e }, "div");
      }, ge);
    },
    goLineLeftSmart: function (n) {
      return n.extendSelectionsBy(function (e) {
        var t = n.cursorCoords(e.head, "div").top + 5,
          t = n.coordsChar({ left: 0, top: t }, "div");
        return t.ch < n.getLine(t.line).search(/\S/) ? jo(n, e.head) : t;
      }, ge);
    },
    goLineUp: function (e) {
      return e.moveV(-1, "line");
    },
    goLineDown: function (e) {
      return e.moveV(1, "line");
    },
    goPageUp: function (e) {
      return e.moveV(-1, "page");
    },
    goPageDown: function (e) {
      return e.moveV(1, "page");
    },
    goCharLeft: function (e) {
      return e.moveH(-1, "char");
    },
    goCharRight: function (e) {
      return e.moveH(1, "char");
    },
    goColumnLeft: function (e) {
      return e.moveH(-1, "column");
    },
    goColumnRight: function (e) {
      return e.moveH(1, "column");
    },
    goWordLeft: function (e) {
      return e.moveH(-1, "word");
    },
    goGroupRight: function (e) {
      return e.moveH(1, "group");
    },
    goGroupLeft: function (e) {
      return e.moveH(-1, "group");
    },
    goWordRight: function (e) {
      return e.moveH(1, "word");
    },
    delCharBefore: function (e) {
      return e.deleteH(-1, "codepoint");
    },
    delCharAfter: function (e) {
      return e.deleteH(1, "char");
    },
    delWordBefore: function (e) {
      return e.deleteH(-1, "word");
    },
    delWordAfter: function (e) {
      return e.deleteH(1, "word");
    },
    delGroupBefore: function (e) {
      return e.deleteH(-1, "group");
    },
    delGroupAfter: function (e) {
      return e.deleteH(1, "group");
    },
    indentAuto: function (e) {
      return e.indentSelection("smart");
    },
    indentMore: function (e) {
      return e.indentSelection("add");
    },
    indentLess: function (e) {
      return e.indentSelection("subtract");
    },
    insertTab: function (e) {
      return e.replaceSelection("\t");
    },
    insertSoftTab: function (e) {
      for (
        var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
        i < n.length;
        i++
      ) {
        var o = n[i].from(),
          o = S(e.getLine(o.line), o.ch, r);
        t.push(ye(r - (o % r)));
      }
      e.replaceSelections(t);
    },
    defaultTab: function (e) {
      e.somethingSelected()
        ? e.indentSelection("add")
        : e.execCommand("insertTab");
    },
    transposeChars: function (l) {
      return h(l, function () {
        for (
          var e, t, n, r = l.listSelections(), i = [], o = 0;
          o < r.length;
          o++
        )
          r[o].empty() &&
            ((e = r[o].head),
            (t = W(l.doc, e.line).text) &&
              (0 < (e = e.ch == t.length ? new F(e.line, e.ch - 1) : e).ch
                ? ((e = new F(e.line, e.ch + 1)),
                  l.replaceRange(
                    t.charAt(e.ch - 1) + t.charAt(e.ch - 2),
                    F(e.line, e.ch - 2),
                    e,
                    "+transpose"
                  ))
                : e.line > l.doc.first &&
                  (n = W(l.doc, e.line - 1).text) &&
                  ((e = new F(e.line, 1)),
                  l.replaceRange(
                    t.charAt(0) +
                      l.doc.lineSeparator() +
                      n.charAt(n.length - 1),
                    F(e.line - 1, n.length - 1),
                    e,
                    "+transpose"
                  ))),
            i.push(new G(e, e)));
        l.setSelections(i);
      });
    },
    newlineAndIndent: function (r) {
      return h(r, function () {
        for (var e = (t = r.listSelections()).length - 1; 0 <= e; e--)
          r.replaceRange(
            r.doc.lineSeparator(),
            t[e].anchor,
            t[e].head,
            "+input"
          );
        for (var t = r.listSelections(), n = 0; n < t.length; n++)
          r.indentLine(t[n].from().line, null, !0);
        Dr(r);
      });
    },
    openLine: function (e) {
      return e.replaceSelection("\n", "start");
    },
    toggleOverwrite: function (e) {
      return e.toggleOverwrite();
    },
  };
  function Ko(e, t) {
    var n = W(e.doc, t),
      r = Zt(n);
    return Go(!0, e, r, (t = r != n ? H(r) : t), 1);
  }
  function jo(e, t) {
    var n = Ko(e, t.line),
      r = W(e.doc, n.line),
      e = Re(r, e.doc.direction);
    return e && 0 != e[0].level
      ? n
      : ((e = Math.max(n.ch, r.text.search(/\S/))),
        (r = t.line == n.line && t.ch <= e && t.ch),
        F(n.line, r ? 0 : e, n.sticky));
  }
  function Xo(e, t, n) {
    if ("string" == typeof t && !(t = Vo[t])) return !1;
    e.display.input.ensurePolled();
    var r = e.display.shift,
      i = !1;
    try {
      e.isReadOnly() && (e.state.suppressEdits = !0),
        n && (e.display.shift = !1),
        (i = t(e) != de);
    } finally {
      (e.display.shift = r), (e.state.suppressEdits = !1);
    }
    return i;
  }
  var Yo = new ce();
  function $o(e, t, n, r) {
    var i = e.state.keySeq;
    if (i) {
      if (Fo(t)) return "handled";
      if (
        (/\'$/.test(t)
          ? (e.state.keySeq = null)
          : Yo.set(50, function () {
              e.state.keySeq == i &&
                ((e.state.keySeq = null), e.display.input.reset());
            }),
        _o(e, i + " " + t, n, r))
      )
        return !0;
    }
    return _o(e, t, n, r);
  }
  function _o(e, t, n, r) {
    r = (function (e, t, n) {
      for (var r = 0; r < e.state.keyMaps.length; r++) {
        var i = Ho(t, e.state.keyMaps[r], n, e);
        if (i) return i;
      }
      return (
        (e.options.extraKeys && Ho(t, e.options.extraKeys, n, e)) ||
        Ho(t, e.options.keyMap, n, e)
      );
    })(e, t, r);
    return (
      "multi" == r && (e.state.keySeq = t),
      "handled" == r && b(e, "keyHandled", e, t, n),
      ("handled" != r && "multi" != r) || (D(n), xr(e)),
      !!r
    );
  }
  function qo(t, e) {
    var n = Po(e, !0);
    return (
      !!n &&
      (e.shiftKey && !t.state.keySeq
        ? $o(t, "Shift-" + n, e, function (e) {
            return Xo(t, e, !0);
          }) ||
          $o(t, n, e, function (e) {
            if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
              return Xo(t, e);
          })
        : $o(t, n, e, function (e) {
            return Xo(t, e);
          }))
    );
  }
  var Zo = null;
  function Qo(e) {
    var t,
      n,
      r,
      i = this;
    function o(e) {
      (18 != e.keyCode && e.altKey) ||
        (ee(r, "CodeMirror-crosshair"),
        T(document, "keyup", o),
        T(document, "mouseover", o));
    }
    (e.target && e.target != i.display.input.getField()) ||
      ((i.curOp.focus = N()),
      A(i, e) ||
        (w && v < 11 && 27 == e.keyCode && (e.returnValue = !1),
        (t = e.keyCode),
        (i.display.shift = 16 == t || e.shiftKey),
        (n = qo(i, e)),
        K &&
          ((Zo = n ? t : null),
          !n &&
            88 == t &&
            !tt &&
            (C ? e.metaKey : e.ctrlKey) &&
            i.replaceSelection("", null, "cut")),
        d &&
          !C &&
          !n &&
          46 == t &&
          e.shiftKey &&
          !e.ctrlKey &&
          document.execCommand &&
          document.execCommand("cut"),
        18 != t ||
          /\bCodeMirror-crosshair\b/.test(i.display.lineDiv.className) ||
          (ie((r = i.display.lineDiv), "CodeMirror-crosshair"),
          k(document, "keyup", o),
          k(document, "mouseover", o))));
  }
  function Jo(e) {
    16 == e.keyCode && (this.doc.sel.shift = !1), A(this, e);
  }
  function el(e) {
    var t = this;
    if (
      !(
        (e.target && e.target != t.display.input.getField()) ||
        Tn(t.display, e) ||
        A(t, e) ||
        (e.ctrlKey && !e.altKey) ||
        (C && e.metaKey)
      )
    ) {
      var n,
        r = e.keyCode,
        i = e.charCode;
      if (K && r == Zo) return (Zo = null), void D(e);
      (K && (!e.which || e.which < 10) && qo(t, e)) ||
        "\b" == (r = String.fromCharCode(null == i ? r : i)) ||
        $o((n = t), "'" + r + "'", e, function (e) {
          return Xo(n, e, !0);
        }) ||
        t.display.input.onKeyPress(e);
    }
  }
  function tl(e, t, n) {
    (this.time = e), (this.pos = t), (this.button = n);
  }
  var nl, rl;
  function il(e) {
    var t,
      n,
      r,
      i,
      o,
      l,
      s,
      a,
      u,
      c = this,
      h = c.display;
    A(c, e) ||
      (h.activeTouch && h.input.supportsTouch()) ||
      (h.input.ensurePolled(),
      (h.shift = e.shiftKey),
      Tn(h, e)
        ? x ||
          ((h.scroller.draggable = !1),
          setTimeout(function () {
            return (h.scroller.draggable = !0);
          }, 100))
        : sl(c, e) ||
          ((t = hr(c, e)),
          (n = _e(e)),
          (r = t
            ? ((i = t),
              (o = n),
              (r = +new Date()),
              rl && rl.compare(r, i, o)
                ? ((nl = rl = null), "triple")
                : nl && nl.compare(r, i, o)
                ? ((rl = new tl(r, i, o)), (nl = null), "double")
                : ((nl = new tl(r, i, o)), (rl = null), "single"))
            : "single"),
          window.focus(),
          1 == n && c.state.selectingText && c.state.selectingText(e),
          (t &&
            (function (n, e, r, t, i) {
              var o = "Click";
              "double" == t
                ? (o = "Double" + o)
                : "triple" == t && (o = "Triple" + o);
              return $o(
                n,
                Eo(
                  (o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o),
                  i
                ),
                i,
                function (e) {
                  if (!(e = "string" == typeof e ? Vo[e] : e)) return !1;
                  var t = !1;
                  try {
                    n.isReadOnly() && (n.state.suppressEdits = !0),
                      (t = e(n, r) != de);
                  } finally {
                    n.state.suppressEdits = !1;
                  }
                  return t;
                }
              );
            })(c, n, t, r, e)) ||
            (1 == n
              ? t
                ? ((i = c),
                  (o = t),
                  (l = r),
                  (s = e),
                  w ? setTimeout(ae(Cr, i), 0) : (i.curOp.focus = N()),
                  (a = (function (e, t, n) {
                    var r = e.getOption("configureMouse"),
                      r = r ? r(e, t, n) : {};
                    {
                      var i;
                      null == r.unit &&
                        ((i = q ? n.shiftKey && n.metaKey : n.altKey),
                        (r.unit = i
                          ? "rectangle"
                          : "single" == t
                          ? "char"
                          : "double" == t
                          ? "word"
                          : "line"));
                    }
                    (null != r.extend && !e.doc.extend) ||
                      (r.extend = e.doc.extend || n.shiftKey);
                    null == r.addNew && (r.addNew = C ? n.metaKey : n.ctrlKey);
                    null == r.moveOnDrag &&
                      (r.moveOnDrag = !(C ? n.altKey : n.ctrlKey));
                    return r;
                  })(i, l, s)),
                  (u = i.doc.sel),
                  (i.options.dragDrop &&
                    Qe &&
                    !i.isReadOnly() &&
                    "single" == l &&
                    -1 < (l = u.contains(o)) &&
                    (E((l = u.ranges[l]).from(), o) < 0 || 0 < o.xRel) &&
                    (0 < E(l.to(), o) || o.xRel < 0)
                    ? function (t, n, r, i) {
                        var o = t.display,
                          l = !1,
                          s = R(t, function (e) {
                            x && (o.scroller.draggable = !1),
                              (t.state.draggingText = !1),
                              t.state.delayingBlurEvent &&
                                (t.hasFocus()
                                  ? (t.state.delayingBlurEvent = !1)
                                  : Sr(t)),
                              T(o.wrapper.ownerDocument, "mouseup", s),
                              T(o.wrapper.ownerDocument, "mousemove", a),
                              T(o.scroller, "dragstart", u),
                              T(o.scroller, "drop", s),
                              l ||
                                (D(e),
                                i.addNew || Ii(t.doc, r, null, null, i.extend),
                                (x && !j) || (w && 9 == v)
                                  ? setTimeout(function () {
                                      o.wrapper.ownerDocument.body.focus({
                                        preventScroll: !0,
                                      }),
                                        o.input.focus();
                                    }, 20)
                                  : o.input.focus());
                          }),
                          a = function (e) {
                            l =
                              l ||
                              10 <=
                                Math.abs(n.clientX - e.clientX) +
                                  Math.abs(n.clientY - e.clientY);
                          },
                          u = function () {
                            return (l = !0);
                          };
                        x && (o.scroller.draggable = !0);
                        ((t.state.draggingText = s).copy = !i.moveOnDrag),
                          k(o.wrapper.ownerDocument, "mouseup", s),
                          k(o.wrapper.ownerDocument, "mousemove", a),
                          k(o.scroller, "dragstart", u),
                          k(o.scroller, "drop", s),
                          (t.state.delayingBlurEvent = !0),
                          setTimeout(function () {
                            return o.input.focus();
                          }, 20),
                          o.scroller.dragDrop && o.scroller.dragDrop();
                      }
                    : function (d, e, f, p) {
                        w && Sr(d);
                        var l = d.display,
                          g = d.doc;
                        D(e);
                        var m,
                          v,
                          y = g.sel,
                          t = y.ranges;
                        p.addNew && !p.extend
                          ? ((v = g.sel.contains(f)),
                            (m = -1 < v ? t[v] : new G(f, f)))
                          : ((m = g.sel.primary()), (v = g.sel.primIndex));
                        "rectangle" == p.unit
                          ? (p.addNew || (m = new G(f, f)),
                            (f = hr(d, e, !0, !0)),
                            (v = -1))
                          : ((e = ol(d, f, p.unit)),
                            (m = p.extend
                              ? Pi(m, e.anchor, e.head, p.extend)
                              : e));
                        p.addNew
                          ? -1 == v
                            ? ((v = t.length),
                              U(g, fi(d, t.concat([m]), v), {
                                scroll: !1,
                                origin: "*mouse",
                              }))
                            : 1 < t.length &&
                              t[v].empty() &&
                              "char" == p.unit &&
                              !p.extend
                            ? (U(
                                g,
                                fi(d, t.slice(0, v).concat(t.slice(v + 1)), 0),
                                { scroll: !1, origin: "*mouse" }
                              ),
                              (y = g.sel))
                            : Ri(g, v, m, pe)
                          : (U(g, new B([m], (v = 0)), pe), (y = g.sel));
                        var b = f;
                        function s(e) {
                          if (0 != E(b, e))
                            if (((b = e), "rectangle" == p.unit)) {
                              for (
                                var t = [],
                                  n = d.options.tabSize,
                                  r = S(W(g, f.line).text, f.ch, n),
                                  i = S(W(g, e.line).text, e.ch, n),
                                  o = Math.min(r, i),
                                  l = Math.max(r, i),
                                  s = Math.min(f.line, e.line),
                                  a = Math.min(
                                    d.lastLine(),
                                    Math.max(f.line, e.line)
                                  );
                                s <= a;
                                s++
                              ) {
                                var u = W(g, s).text,
                                  c = me(u, o, n);
                                o == l
                                  ? t.push(new G(F(s, c), F(s, c)))
                                  : u.length > c &&
                                    t.push(new G(F(s, c), F(s, me(u, l, n))));
                              }
                              t.length || t.push(new G(f, f)),
                                U(g, fi(d, y.ranges.slice(0, v).concat(t), v), {
                                  origin: "*mouse",
                                  scroll: !1,
                                }),
                                d.scrollIntoView(e);
                            } else {
                              var h,
                                r = m,
                                i = ol(d, e, p.unit),
                                e = r.anchor,
                                e =
                                  0 < E(i.anchor, e)
                                    ? ((h = i.head), xt(r.from(), i.anchor))
                                    : ((h = i.anchor), wt(r.to(), i.head)),
                                r = y.ranges.slice(0);
                              (r[v] = (function (e, t) {
                                var n = t.anchor,
                                  r = t.head,
                                  i = W(e.doc, n.line);
                                if (0 == E(n, r) && n.sticky == r.sticky)
                                  return t;
                                i = Re(i);
                                if (!i) return t;
                                var o = De(i, n.ch, n.sticky),
                                  l = i[o];
                                if (l.from != n.ch && l.to != n.ch) return t;
                                var s =
                                  o +
                                  ((l.from == n.ch) == (1 != l.level) ? 0 : 1);
                                if (0 == s || s == i.length) return t;
                                l =
                                  r.line != n.line
                                    ? 0 <
                                      (r.line - n.line) *
                                        ("ltr" == e.doc.direction ? 1 : -1)
                                    : ((e = De(i, r.ch, r.sticky)),
                                      (o =
                                        e - o ||
                                        (r.ch - n.ch) *
                                          (1 == l.level ? -1 : 1)),
                                      e == s - 1 || e == s ? o < 0 : 0 < o);
                                (e = i[s + (l ? -1 : 0)]),
                                  (o = l == (1 == e.level)),
                                  (i = o ? e.from : e.to),
                                  (s = o ? "after" : "before");
                                return n.ch == i && n.sticky == s
                                  ? t
                                  : new G(new F(n.line, i, s), r);
                              })(d, new G(P(g, e), h))),
                                U(g, fi(d, r, v), pe);
                            }
                        }
                        var a = l.wrapper.getBoundingClientRect(),
                          u = 0;
                        function n(e) {
                          (d.state.selectingText = !1),
                            (u = 1 / 0),
                            e && (D(e), l.input.focus()),
                            T(l.wrapper.ownerDocument, "mousemove", r),
                            T(l.wrapper.ownerDocument, "mouseup", i),
                            (g.history.lastSelOrigin = null);
                        }
                        var r = R(d, function (e) {
                            (0 !== e.buttons && _e(e)
                              ? function e(t) {
                                  var n,
                                    r,
                                    i = ++u,
                                    o = hr(d, t, !0, "rectangle" == p.unit);
                                  o &&
                                    (0 != E(o, b)
                                      ? ((d.curOp.focus = N()),
                                        s(o),
                                        (n = Nr(l, g)),
                                        (o.line >= n.to || o.line < n.from) &&
                                          setTimeout(
                                            R(d, function () {
                                              u == i && e(t);
                                            }),
                                            150
                                          ))
                                      : (r =
                                          t.clientY < a.top
                                            ? -20
                                            : t.clientY > a.bottom
                                            ? 20
                                            : 0) &&
                                        setTimeout(
                                          R(d, function () {
                                            u == i &&
                                              ((l.scroller.scrollTop += r),
                                              e(t));
                                          }),
                                          50
                                        ));
                                }
                              : n)(e);
                          }),
                          i = R(d, n);
                        (d.state.selectingText = i),
                          k(l.wrapper.ownerDocument, "mousemove", r),
                          k(l.wrapper.ownerDocument, "mouseup", i);
                      })(i, s, o, a))
                : $e(e) == h.scroller && D(e)
              : 2 == n
              ? (t && Ii(c.doc, t),
                setTimeout(function () {
                  return h.input.focus();
                }, 20))
              : 3 == n && (Q ? c.display.input.onContextMenu(e) : Sr(c)))));
  }
  function ol(e, t, n) {
    if ("char" == n) return new G(t, t);
    if ("word" == n) return e.findWordAt(t);
    if ("line" == n) return new G(F(t.line, 0), P(e.doc, F(t.line + 1, 0)));
    n = n(e, t);
    return new G(n.from, n.to);
  }
  function ll(e, t, n, r) {
    var i, o;
    if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
    else
      try {
        (i = t.clientX), (o = t.clientY);
      } catch (e) {
        return !1;
      }
    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
      return !1;
    r && D(t);
    var l = e.display,
      r = l.lineDiv.getBoundingClientRect();
    if (o > r.bottom || !Ve(e, n)) return Xe(t);
    o -= r.top - l.viewOffset;
    for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
      var a = l.gutters.childNodes[s];
      if (a && a.getBoundingClientRect().right >= i)
        return (
          O(e, n, e, gt(e.doc, o), e.display.gutterSpecs[s].className, t), Xe(t)
        );
    }
  }
  function sl(e, t) {
    return ll(e, t, "gutterClick", !0);
  }
  function al(e, t) {
    var n, r;
    Tn(e.display, t) ||
      ((r = t),
      Ve((n = e), "gutterContextMenu") && ll(n, r, "gutterContextMenu", !1)) ||
      A(e, t, "contextmenu") ||
      Q ||
      e.display.input.onContextMenu(t);
  }
  function ul(e) {
    (e.display.wrapper.className =
      e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")),
      Vn(e);
  }
  tl.prototype.compare = function (e, t, n) {
    return this.time + 400 > e && 0 == E(t, this.pos) && n == this.button;
  };
  var cl = {
      toString: function () {
        return "CodeMirror.Init";
      },
    },
    hl = {},
    dl = {};
  function fl(e, t, n) {
    !t != !(n && n != cl) &&
      ((n = e.display.dragFunctions),
      (t = t ? k : T)(e.display.scroller, "dragstart", n.start),
      t(e.display.scroller, "dragenter", n.enter),
      t(e.display.scroller, "dragover", n.over),
      t(e.display.scroller, "dragleave", n.leave),
      t(e.display.scroller, "drop", n.drop));
  }
  function pl(e) {
    e.options.lineWrapping
      ? (ie(e.display.wrapper, "CodeMirror-wrap"),
        (e.display.sizer.style.minWidth = ""),
        (e.display.sizerWidth = null))
      : (ee(e.display.wrapper, "CodeMirror-wrap"), rn(e)),
      cr(e),
      I(e),
      Vn(e),
      setTimeout(function () {
        return Gr(e);
      }, 100);
  }
  function p(e, t) {
    var n = this;
    if (!(this instanceof p)) return new p(e, t);
    (this.options = t = t ? ue(t) : {}), ue(hl, t, !1);
    var r,
      i = t.value,
      o =
        ("string" == typeof i
          ? (i = new f(i, t.mode, null, t.lineSeparator, t.direction))
          : t.mode && (i.modeOption = t.mode),
        (this.doc = i),
        new p.inputStyles[t.inputStyle](this)),
      e = (this.display = new si(e, i, o, t)),
      l =
        (ul((e.wrapper.CodeMirror = this)),
        t.lineWrapping &&
          (this.display.wrapper.className += " CodeMirror-wrap"),
        Kr(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new ce(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !_ && e.input.focus(),
        w &&
          v < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        this),
      s = l.display;
    k(s.scroller, "mousedown", R(l, il)),
      k(
        s.scroller,
        "dblclick",
        w && v < 11
          ? R(l, function (e) {
              var t;
              A(l, e) ||
                !(t = hr(l, e)) ||
                sl(l, e) ||
                Tn(l.display, e) ||
                (D(e), (e = l.findWordAt(t)), Ii(l.doc, e.anchor, e.head));
            })
          : function (e) {
              return A(l, e) || D(e);
            }
      ),
      k(s.scroller, "contextmenu", function (e) {
        return al(l, e);
      }),
      k(s.input.getField(), "contextmenu", function (e) {
        s.scroller.contains(e.target) || al(l, e);
      });
    var a,
      u = { end: 0 };
    function c() {
      s.activeTouch &&
        ((a = setTimeout(function () {
          return (s.activeTouch = null);
        }, 1e3)),
        ((u = s.activeTouch).end = +new Date()));
    }
    function h(e, t) {
      if (null == t.left) return 1;
      var n = t.left - e.left,
        t = t.top - e.top;
      return 400 < n * n + t * t;
    }
    k(s.scroller, "touchstart", function (e) {
      var t;
      A(l, e) ||
        (function (e) {
          if (1 == e.touches.length)
            return (e = e.touches[0]).radiusX <= 1 && e.radiusY <= 1;
        })(e) ||
        sl(l, e) ||
        (s.input.ensurePolled(),
        clearTimeout(a),
        (t = +new Date()),
        (s.activeTouch = {
          start: t,
          moved: !1,
          prev: t - u.end <= 300 ? u : null,
        }),
        1 == e.touches.length &&
          ((s.activeTouch.left = e.touches[0].pageX),
          (s.activeTouch.top = e.touches[0].pageY)));
    }),
      k(s.scroller, "touchmove", function () {
        s.activeTouch && (s.activeTouch.moved = !0);
      }),
      k(s.scroller, "touchend", function (e) {
        var t,
          n = s.activeTouch;
        n &&
          !Tn(s, e) &&
          null != n.left &&
          !n.moved &&
          new Date() - n.start < 300 &&
          ((t = l.coordsChar(s.activeTouch, "page")),
          (n =
            !n.prev || h(n, n.prev)
              ? new G(t, t)
              : !n.prev.prev || h(n, n.prev.prev)
              ? l.findWordAt(t)
              : new G(F(t.line, 0), P(l.doc, F(t.line + 1, 0)))),
          l.setSelection(n.anchor, n.head),
          l.focus(),
          D(e)),
          c();
      }),
      k(s.scroller, "touchcancel", c),
      k(s.scroller, "scroll", function () {
        s.scroller.clientHeight &&
          (Er(l, s.scroller.scrollTop),
          Ir(l, s.scroller.scrollLeft, !0),
          O(l, "scroll", l));
      }),
      k(s.scroller, "mousewheel", function (e) {
        return di(l, e);
      }),
      k(s.scroller, "DOMMouseScroll", function (e) {
        return di(l, e);
      }),
      k(s.wrapper, "scroll", function () {
        return (s.wrapper.scrollTop = s.wrapper.scrollLeft = 0);
      }),
      (s.dragFunctions = {
        enter: function (e) {
          A(l, e) || Ye(e);
        },
        over: function (e) {
          var t, n;
          A(l, e) ||
            ((n = hr((t = l), (n = e))) &&
              (br(t, n, (n = document.createDocumentFragment())),
              t.display.dragCursor ||
                ((t.display.dragCursor = M(
                  "div",
                  null,
                  "CodeMirror-cursors CodeMirror-dragcursors"
                )),
                t.display.lineSpace.insertBefore(
                  t.display.dragCursor,
                  t.display.cursorDiv
                )),
              y(t.display.dragCursor, n)),
            Ye(e));
        },
        start: function (e) {
          var t, n;
          (t = l),
            (e = e),
            w && (!t.state.draggingText || +new Date() - bo < 100)
              ? Ye(e)
              : A(t, e) ||
                Tn(t.display, e) ||
                (e.dataTransfer.setData("Text", t.getSelection()),
                (e.dataTransfer.effectAllowed = "copyMove"),
                e.dataTransfer.setDragImage &&
                  !j &&
                  (((n = M(
                    "img",
                    null,
                    null,
                    "position: fixed; left: 0; top: 0;"
                  )).src =
                    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                  K &&
                    ((n.width = n.height = 1),
                    t.display.wrapper.appendChild(n),
                    (n._top = n.offsetTop)),
                  e.dataTransfer.setDragImage(n, 0, 0),
                  K && n.parentNode.removeChild(n)));
        },
        drop: R(l, wo),
        leave: function (e) {
          A(l, e) || xo(l);
        },
      });
    o = s.input.getField();
    for (r in (k(o, "keyup", function (e) {
      return Jo.call(l, e);
    }),
    k(o, "keydown", R(l, Qo)),
    k(o, "keypress", R(l, el)),
    k(o, "focus", function (e) {
      return Lr(l, e);
    }),
    k(o, "blur", function (e) {
      return kr(l, e);
    }),
    Lo(),
    Xr(this),
    (this.curOp.forceUpdate = !0),
    Li(this, i),
    (t.autofocus && !_) || this.hasFocus()
      ? setTimeout(function () {
          n.hasFocus() && !n.state.focused && Lr(n);
        }, 20)
      : kr(this),
    dl))
      dl.hasOwnProperty(r) && dl[r](this, t[r], cl);
    ri(this), t.finishInit && t.finishInit(this);
    for (var d = 0; d < gl.length; ++d) gl[d](this);
    Yr(this),
      x &&
        t.lineWrapping &&
        "optimizelegibility" == getComputedStyle(e.lineDiv).textRendering &&
        (e.lineDiv.style.textRendering = "auto");
  }
  (p.defaults = hl), (p.optionHandlers = dl);
  var gl = [];
  function ml(e, t, n, r) {
    var i,
      o = e.doc,
      l =
        ("smart" == (n = null == n ? "add" : n) &&
          (o.mode.indent ? (i = Nt(e, t).state) : (n = "prev")),
        e.options.tabSize),
      s = W(o, t),
      a = S(s.text, null, l),
      u = (s.stateAfter && (s.stateAfter = null), s.text.match(/^\s*/)[0]);
    if (r || /\S/.test(s.text)) {
      if (
        "smart" == n &&
        ((c = o.mode.indent(i, s.text.slice(u.length), s.text)) == de ||
          150 < c)
      ) {
        if (!r) return;
        n = "prev";
      }
    } else (c = 0), (n = "not");
    "prev" == n
      ? (c = t > o.first ? S(W(o, t - 1).text, null, l) : 0)
      : "add" == n
      ? (c = a + e.options.indentUnit)
      : "subtract" == n
      ? (c = a - e.options.indentUnit)
      : "number" == typeof n && (c = a + n);
    var c = Math.max(0, c),
      h = "",
      d = 0;
    if (e.options.indentWithTabs)
      for (var f = Math.floor(c / l); f; --f) (d += l), (h += "\t");
    if ((d < c && (h += ye(c - d)), h != u))
      return (
        no(o, h, F(t, 0), F(t, u.length), "+input"), !(s.stateAfter = null)
      );
    for (var p = 0; p < o.sel.ranges.length; p++) {
      var g = o.sel.ranges[p];
      if (g.head.line == t && g.head.ch < u.length) {
        g = F(t, u.length);
        Ri(o, p, new G(g, g));
        break;
      }
    }
  }
  p.defineInitHook = function (e) {
    return gl.push(e);
  };
  var vl = null;
  function yl(e) {
    vl = e;
  }
  function bl(e, t, n, r, i) {
    var o = e.doc,
      l = ((e.display.shift = !1), (r = r || o.sel), +new Date() - 200),
      s = "paste" == i || e.state.pasteIncoming > l,
      a = Je(t),
      u = null;
    if (s && 1 < r.ranges.length)
      if (vl && vl.text.join("\n") == t) {
        if (r.ranges.length % vl.text.length == 0)
          for (var u = [], c = 0; c < vl.text.length; c++)
            u.push(o.splitLines(vl.text[c]));
      } else
        a.length == r.ranges.length &&
          e.options.pasteLinesPerSelection &&
          (u = be(a, function (e) {
            return [e];
          }));
    for (var h = e.curOp.updateInput, d = r.ranges.length - 1; 0 <= d; d--) {
      var f = r.ranges[d],
        p = f.from(),
        g = f.to(),
        f =
          (f.empty() &&
            (n && 0 < n
              ? (p = F(p.line, p.ch - n))
              : e.state.overwrite && !s
              ? (g = F(
                  g.line,
                  Math.min(W(o, g.line).text.length, g.ch + z(a).length)
                ))
              : s &&
                vl &&
                vl.lineWise &&
                vl.text.join("\n") == a.join("\n") &&
                (p = g = F(p.line, 0))),
          {
            from: p,
            to: g,
            text: u ? u[d % u.length] : a,
            origin:
              i || (s ? "paste" : e.state.cutIncoming > l ? "cut" : "+input"),
          });
      Zi(e.doc, f), b(e, "inputRead", e, f);
    }
    t && !s && xl(e, t),
      Dr(e),
      e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
      (e.curOp.typing = !0),
      (e.state.pasteIncoming = e.state.cutIncoming = -1);
  }
  function wl(e, t) {
    var n = e.clipboardData && e.clipboardData.getData("Text");
    return (
      n &&
      (e.preventDefault(),
      t.isReadOnly() ||
        t.options.disableInput ||
        !t.hasFocus() ||
        h(t, function () {
          return bl(t, n, 0, null, "paste");
        }),
      1)
    );
  }
  function xl(e, t) {
    if (e.options.electricChars && e.options.smartIndent)
      for (var n = e.doc.sel, r = n.ranges.length - 1; 0 <= r; r--) {
        var i = n.ranges[r];
        if (
          !(100 < i.head.ch || (r && n.ranges[r - 1].head.line == i.head.line))
        ) {
          var o = e.getModeAt(i.head),
            l = !1;
          if (o.electricChars) {
            for (var s = 0; s < o.electricChars.length; s++)
              if (-1 < t.indexOf(o.electricChars.charAt(s))) {
                l = ml(e, i.head.line, "smart");
                break;
              }
          } else
            o.electricInput &&
              o.electricInput.test(
                W(e.doc, i.head.line).text.slice(0, i.head.ch)
              ) &&
              (l = ml(e, i.head.line, "smart"));
          l && b(e, "electricInput", e, i.head.line);
        }
      }
  }
  function Cl(e) {
    for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
      var i = e.doc.sel.ranges[r].head.line,
        i = { anchor: F(i, 0), head: F(i + 1, 0) };
      n.push(i), t.push(e.getRange(i.anchor, i.head));
    }
    return { text: t, ranges: n };
  }
  function Sl(e, t, n, r) {
    e.setAttribute("autocorrect", n ? "" : "off"),
      e.setAttribute("autocapitalize", r ? "" : "off"),
      e.setAttribute("spellcheck", !!t);
  }
  function Ll() {
    var e = M(
        "textarea",
        null,
        null,
        "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"
      ),
      t = M(
        "div",
        [e],
        null,
        "overflow: hidden; position: relative; width: 3px; height: 0px;"
      );
    return (
      x ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"),
      Y && (e.style.border = "1px solid black"),
      Sl(e),
      t
    );
  }
  function kl(n, r, i, o, l) {
    var e = r,
      t = i,
      s = W(n, r.line),
      a = l && "rtl" == n.direction ? -i : i;
    function u(e) {
      var t;
      if (
        null ==
        (t =
          "codepoint" == o
            ? ((t = s.text.charCodeAt(r.ch + (0 < i ? 0 : -1))),
              isNaN(t)
                ? null
                : ((t =
                    0 < i ? 55296 <= t && t < 56320 : 56320 <= t && t < 57343),
                  new F(
                    r.line,
                    Math.max(
                      0,
                      Math.min(s.text.length, r.ch + i * (t ? 2 : 1))
                    ),
                    -i
                  )))
            : l
            ? Uo(n.cm, s, r, i)
            : Bo(s, r, i))
      ) {
        if (
          e ||
          (e = r.line + a) < n.first ||
          e >= n.first + n.size ||
          ((r = new F(e, r.ch, r.sticky)), !(s = W(n, e)))
        )
          return;
        r = Go(l, n.cm, s, r.line, a);
      } else r = t;
      return 1;
    }
    if ("char" == o || "codepoint" == o) u();
    else if ("column" == o) u(!0);
    else if ("word" == o || "group" == o)
      for (
        var c = null,
          h = "group" == o,
          d = n.cm && n.cm.getHelper(r, "wordChars"),
          f = !0;
        !(i < 0) || u(!f);
        f = !1
      ) {
        var p = s.text.charAt(r.ch) || "\n",
          p = Le(p, d)
            ? "w"
            : h && "\n" == p
            ? "n"
            : !h || /\s/.test(p)
            ? null
            : "p";
        if ((!h || f || p || (p = "s"), c && c != p)) {
          i < 0 && ((i = 1), u(), (r.sticky = "after"));
          break;
        }
        if ((p && (c = p), 0 < i && !u(!f))) break;
      }
    t = Yi(n, r, e, t, !0);
    return yt(e, t) && (t.hitSide = !0), t;
  }
  function Tl(e, t, n, r) {
    var i,
      o,
      l,
      s = e.doc,
      a = t.left;
    for (
      "page" == r
        ? ((i = Math.min(
            e.display.wrapper.clientHeight,
            window.innerHeight || document.documentElement.clientHeight
          )),
          (i = Math.max(i - 0.5 * or(e.display), 3)),
          (o = (0 < n ? t.bottom : t.top) + n * i))
        : "line" == r && (o = 0 < n ? t.bottom + 3 : t.top - 3);
      (l = Jn(e, a, o)).outside;

    ) {
      if (n < 0 ? o <= 0 : o >= s.height) {
        l.hitSide = !0;
        break;
      }
      o += 5 * n;
    }
    return l;
  }
  function r(e) {
    (this.cm = e),
      (this.lastAnchorNode =
        this.lastAnchorOffset =
        this.lastFocusNode =
        this.lastFocusOffset =
          null),
      (this.polling = new ce()),
      (this.composing = null),
      (this.gracePeriod = !1),
      (this.readDOMTimeout = null);
  }
  function Ml(e, t) {
    var n = En(e, t.line);
    if (!n || n.hidden) return null;
    var r = W(e.doc, t.line),
      n = Hn(n, r, t.line),
      r = Re(r, e.doc.direction),
      e = "left",
      r = (r && (e = De(r, t.ch) % 2 ? "right" : "left"), Bn(n.map, t.ch, e));
    return (r.offset = "right" == r.collapse ? r.end : r.start), r;
  }
  function Nl(e, t) {
    return t && (e.bad = !0), e;
  }
  function Ol(e, t, n) {
    var r;
    if (t == e.display.lineDiv) {
      if (!(r = e.display.lineDiv.childNodes[n]))
        return Nl(e.clipPos(F(e.display.viewTo - 1)), !0);
      (t = null), (n = 0);
    } else
      for (r = t; ; r = r.parentNode) {
        if (!r || r == e.display.lineDiv) return null;
        if (r.parentNode && r.parentNode == e.display.lineDiv) break;
      }
    for (var i = 0; i < e.display.view.length; i++) {
      var o = e.display.view[i];
      if (o.node == r) {
        var u = o,
          o = t,
          l = n,
          s = u.text.firstChild,
          a = !1;
        if (!o || !re(s, o)) return Nl(F(H(u.line), 0), !0);
        if (o == s)
          if (((a = !0), (o = s.childNodes[l]), (l = 0), !o))
            return Nl(
              F(H((c = u.rest ? z(u.rest) : u.line)), c.text.length),
              a
            );
        var c = 3 == o.nodeType ? o : null,
          h = o;
        for (
          c ||
          1 != o.childNodes.length ||
          3 != o.firstChild.nodeType ||
          ((c = o.firstChild), (l = l && c.nodeValue.length));
          h.parentNode != s;

        )
          h = h.parentNode;
        var d = u.measure,
          f = d.maps;
        function p(e, t, n) {
          for (var r = -1; r < (f ? f.length : 0); r++)
            for (var i = r < 0 ? d.map : f[r], o = 0; o < i.length; o += 3) {
              var l,
                s,
                a = i[o + 2];
              if (a == e || a == t)
                return (
                  (l = H(r < 0 ? u.line : u.rest[r])),
                  (s = i[o] + n),
                  F(l, (s = n < 0 || a != e ? i[o + (n ? 1 : 0)] : s))
                );
            }
        }
        var g = p(c, h, l);
        if (g) return Nl(g, a);
        for (
          var m = h.nextSibling, v = c ? c.nodeValue.length - l : 0;
          m;
          m = m.nextSibling
        ) {
          if ((g = p(m, m.firstChild, 0))) return Nl(F(g.line, g.ch - v), a);
          v += m.textContent.length;
        }
        for (var y = h.previousSibling, b = l; y; y = y.previousSibling) {
          if ((g = p(y, y.firstChild, -1))) return Nl(F(g.line, g.ch + b), a);
          b += y.textContent.length;
        }
        return;
      }
    }
  }
  (r.prototype.init = function (e) {
    var t = this,
      o = this,
      l = o.cm,
      s = (o.div = e.lineDiv);
    function a(e) {
      for (var t = e.target; t; t = t.parentNode) {
        if (t == s) return 1;
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
      }
    }
    function n(e) {
      if (a(e) && !A(l, e)) {
        if (l.somethingSelected())
          yl({ lineWise: !1, text: l.getSelections() }),
            "cut" == e.type && l.replaceSelection("", null, "cut");
        else {
          if (!l.options.lineWiseCopyCut) return;
          var t = Cl(l);
          yl({ lineWise: !0, text: t.text }),
            "cut" == e.type &&
              l.operation(function () {
                l.setSelections(t.ranges, 0, fe),
                  l.replaceSelection("", null, "cut");
              });
        }
        if (e.clipboardData) {
          e.clipboardData.clearData();
          var n = vl.text.join("\n");
          if (
            (e.clipboardData.setData("Text", n),
            e.clipboardData.getData("Text") == n)
          )
            return void e.preventDefault();
        }
        var r = Ll(),
          n = r.firstChild,
          i =
            (l.display.lineSpace.insertBefore(
              r,
              l.display.lineSpace.firstChild
            ),
            (n.value = vl.text.join("\n")),
            N());
        se(n),
          setTimeout(function () {
            l.display.lineSpace.removeChild(r),
              i.focus(),
              i == s && o.showPrimarySelection();
          }, 50);
      }
    }
    (s.contentEditable = !0),
      Sl(
        s,
        l.options.spellcheck,
        l.options.autocorrect,
        l.options.autocapitalize
      ),
      k(s, "paste", function (e) {
        !a(e) ||
          A(l, e) ||
          wl(e, l) ||
          (v <= 11 &&
            setTimeout(
              R(l, function () {
                return t.updateFromDOM();
              }),
              20
            ));
      }),
      k(s, "compositionstart", function (e) {
        t.composing = { data: e.data, done: !1 };
      }),
      k(s, "compositionupdate", function (e) {
        t.composing || (t.composing = { data: e.data, done: !1 });
      }),
      k(s, "compositionend", function (e) {
        t.composing &&
          (e.data != t.composing.data && t.readFromDOMSoon(),
          (t.composing.done = !0));
      }),
      k(s, "touchstart", function () {
        return o.forceCompositionEnd();
      }),
      k(s, "input", function () {
        t.composing || t.readFromDOMSoon();
      }),
      k(s, "copy", n),
      k(s, "cut", n);
  }),
    (r.prototype.screenReaderLabelChanged = function (e) {
      e
        ? this.div.setAttribute("aria-label", e)
        : this.div.removeAttribute("aria-label");
    }),
    (r.prototype.prepareSelection = function () {
      var e = yr(this.cm, !1);
      return (e.focus = N() == this.div), e;
    }),
    (r.prototype.showSelection = function (e, t) {
      e &&
        this.cm.display.view.length &&
        ((e.focus || t) && this.showPrimarySelection(),
        this.showMultipleSelections(e));
    }),
    (r.prototype.getSelection = function () {
      return this.cm.display.wrapper.ownerDocument.getSelection();
    }),
    (r.prototype.showPrimarySelection = function () {
      var e = this.getSelection(),
        t = this.cm,
        n = t.doc.sel.primary(),
        r = n.from(),
        n = n.to();
      if (
        t.display.viewTo == t.display.viewFrom ||
        r.line >= t.display.viewTo ||
        n.line < t.display.viewFrom
      )
        e.removeAllRanges();
      else {
        var i = Ol(t, e.anchorNode, e.anchorOffset),
          o = Ol(t, e.focusNode, e.focusOffset);
        if (
          !i ||
          i.bad ||
          !o ||
          o.bad ||
          0 != E(xt(i, o), r) ||
          0 != E(wt(i, o), n)
        ) {
          var i = t.display.view,
            o = (r.line >= t.display.viewFrom && Ml(t, r)) || {
              node: i[0].measure.map[2],
              offset: 0,
            },
            r = n.line < t.display.viewTo && Ml(t, n);
          if (
            (r ||
              (r = {
                node: (i = (n = i[i.length - 1].measure).maps
                  ? n.maps[n.maps.length - 1]
                  : n.map)[i.length - 1],
                offset: i[i.length - 2] - i[i.length - 3],
              }),
            o && r)
          ) {
            var l,
              n = e.rangeCount && e.getRangeAt(0);
            try {
              l = le(o.node, o.offset, r.offset, r.node);
            } catch (e) {}
            l &&
              (!d && t.state.focused
                ? (e.collapse(o.node, o.offset),
                  l.collapsed || (e.removeAllRanges(), e.addRange(l)))
                : (e.removeAllRanges(), e.addRange(l)),
              n && null == e.anchorNode
                ? e.addRange(n)
                : d && this.startGracePeriod()),
              this.rememberSelection();
          } else e.removeAllRanges();
        }
      }
    }),
    (r.prototype.startGracePeriod = function () {
      var e = this;
      clearTimeout(this.gracePeriod),
        (this.gracePeriod = setTimeout(function () {
          (e.gracePeriod = !1),
            e.selectionChanged() &&
              e.cm.operation(function () {
                return (e.cm.curOp.selectionChanged = !0);
              });
        }, 20));
    }),
    (r.prototype.showMultipleSelections = function (e) {
      y(this.cm.display.cursorDiv, e.cursors),
        y(this.cm.display.selectionDiv, e.selection);
    }),
    (r.prototype.rememberSelection = function () {
      var e = this.getSelection();
      (this.lastAnchorNode = e.anchorNode),
        (this.lastAnchorOffset = e.anchorOffset),
        (this.lastFocusNode = e.focusNode),
        (this.lastFocusOffset = e.focusOffset);
    }),
    (r.prototype.selectionInEditor = function () {
      var e = this.getSelection();
      if (!e.rangeCount) return !1;
      e = e.getRangeAt(0).commonAncestorContainer;
      return re(this.div, e);
    }),
    (r.prototype.focus = function () {
      "nocursor" != this.cm.options.readOnly &&
        ((this.selectionInEditor() && N() == this.div) ||
          this.showSelection(this.prepareSelection(), !0),
        this.div.focus());
    }),
    (r.prototype.blur = function () {
      this.div.blur();
    }),
    (r.prototype.getField = function () {
      return this.div;
    }),
    (r.prototype.supportsTouch = function () {
      return !0;
    }),
    (r.prototype.receivedFocus = function () {
      var e = this,
        t = this;
      this.selectionInEditor()
        ? setTimeout(function () {
            return e.pollSelection();
          }, 20)
        : h(this.cm, function () {
            return (t.cm.curOp.selectionChanged = !0);
          }),
        this.polling.set(this.cm.options.pollInterval, function e() {
          t.cm.state.focused &&
            (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
        });
    }),
    (r.prototype.selectionChanged = function () {
      var e = this.getSelection();
      return (
        e.anchorNode != this.lastAnchorNode ||
        e.anchorOffset != this.lastAnchorOffset ||
        e.focusNode != this.lastFocusNode ||
        e.focusOffset != this.lastFocusOffset
      );
    }),
    (r.prototype.pollSelection = function () {
      if (
        null == this.readDOMTimeout &&
        !this.gracePeriod &&
        this.selectionChanged()
      ) {
        var e,
          t,
          n = this.getSelection(),
          r = this.cm;
        if (
          $ &&
          m &&
          this.cm.display.gutterSpecs.length &&
          (function (e) {
            for (var t = e; t; t = t.parentNode)
              if (/CodeMirror-gutter-wrapper/.test(t.className)) return 1;
            return;
          })(n.anchorNode)
        )
          return (
            this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs,
            }),
            this.blur(),
            void this.focus()
          );
        this.composing ||
          (this.rememberSelection(),
          (e = Ol(r, n.anchorNode, n.anchorOffset)),
          (t = Ol(r, n.focusNode, n.focusOffset)),
          e &&
            t &&
            h(r, function () {
              U(r.doc, pi(e, t), fe),
                (e.bad || t.bad) && (r.curOp.selectionChanged = !0);
            }));
      }
    }),
    (r.prototype.pollContent = function () {
      null != this.readDOMTimeout &&
        (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
      var e,
        t = this.cm,
        n = t.display,
        r = t.doc.sel.primary(),
        i = r.from(),
        r = r.to();
      if (
        (0 == i.ch &&
          i.line > t.firstLine() &&
          (i = F(i.line - 1, W(t.doc, i.line - 1).length)),
        r.ch == W(t.doc, r.line).text.length &&
          r.line < t.lastLine() &&
          (r = F(r.line + 1, 0)),
        i.line < n.viewFrom || r.line > n.viewTo - 1)
      )
        return !1;
      var o,
        l =
          i.line == n.viewFrom || 0 == (l = dr(t, i.line))
            ? ((e = H(n.view[0].line)), n.view[0].node)
            : ((e = H(n.view[l].line)), n.view[l - 1].node.nextSibling),
        r = dr(t, r.line),
        n =
          r == n.view.length - 1
            ? ((o = n.viewTo - 1), n.lineDiv.lastChild)
            : ((o = H(n.view[r + 1].line) - 1),
              n.view[r + 1].node.previousSibling);
      if (!l) return !1;
      for (
        var s = t.doc.splitLines(
            (function (o, e, t, l, s) {
              var n = "",
                a = !1,
                u = o.doc.lineSeparator(),
                c = !1;
              function h() {
                a && ((n += u), c && (n += u), (a = c = !1));
              }
              function d(e) {
                e && (h(), (n += e));
              }
              for (
                ;
                !(function e(t) {
                  if (1 == t.nodeType) {
                    var n = t.getAttribute("cm-text");
                    if (n) d(n);
                    else if ((n = t.getAttribute("cm-marker")))
                      (n = o.findMarks(
                        F(l, 0),
                        F(s + 1, 0),
                        ((i = +n),
                        function (e) {
                          return e.id == i;
                        })
                      )).length &&
                        (n = n[0].find(0)) &&
                        d(dt(o.doc, n.from, n.to).join(u));
                    else if (
                      "false" != t.getAttribute("contenteditable") &&
                      ((n = /^(pre|div|p|li|table|br)$/i.test(t.nodeName)),
                      /^br$/i.test(t.nodeName) || 0 != t.textContent.length)
                    ) {
                      n && h();
                      for (var r = 0; r < t.childNodes.length; r++)
                        e(t.childNodes[r]);
                      /^(pre|p)$/i.test(t.nodeName) && (c = !0), n && (a = !0);
                    }
                  } else
                    3 == t.nodeType &&
                      d(
                        t.nodeValue
                          .replace(/\u200b/g, "")
                          .replace(/\u00a0/g, " ")
                      );
                  var i;
                })(e),
                  e != t;

              )
                (e = e.nextSibling), (c = !1);
              return n;
            })(t, l, n, e, o)
          ),
          a = dt(t.doc, F(e, 0), F(o, W(t.doc, o).text.length));
        1 < s.length && 1 < a.length;

      )
        if (z(s) == z(a)) s.pop(), a.pop(), o--;
        else {
          if (s[0] != a[0]) break;
          s.shift(), a.shift(), e++;
        }
      for (
        var u = 0, c = 0, h = s[0], d = a[0], f = Math.min(h.length, d.length);
        u < f && h.charCodeAt(u) == d.charCodeAt(u);

      )
        ++u;
      for (
        var p = z(s),
          g = z(a),
          m = Math.min(
            p.length - (1 == s.length ? u : 0),
            g.length - (1 == a.length ? u : 0)
          );
        c < m &&
        p.charCodeAt(p.length - c - 1) == g.charCodeAt(g.length - c - 1);

      )
        ++c;
      if (1 == s.length && 1 == a.length && e == i.line)
        for (
          ;
          u &&
          u > i.ch &&
          p.charCodeAt(p.length - c - 1) == g.charCodeAt(g.length - c - 1);

        )
          u--, c++;
      (s[s.length - 1] = p.slice(0, p.length - c).replace(/^\u200b+/, "")),
        (s[0] = s[0].slice(u).replace(/\u200b+$/, ""));
      (r = F(e, u)), (l = F(o, a.length ? z(a).length - c : 0));
      return 1 < s.length || s[0] || E(r, l)
        ? (no(t.doc, s, r, l, "+input"), !0)
        : void 0;
    }),
    (r.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    }),
    (r.prototype.reset = function () {
      this.forceCompositionEnd();
    }),
    (r.prototype.forceCompositionEnd = function () {
      this.composing &&
        (clearTimeout(this.readDOMTimeout),
        (this.composing = null),
        this.updateFromDOM(),
        this.div.blur(),
        this.div.focus());
    }),
    (r.prototype.readFromDOMSoon = function () {
      var e = this;
      null == this.readDOMTimeout &&
        (this.readDOMTimeout = setTimeout(function () {
          if (((e.readDOMTimeout = null), e.composing)) {
            if (!e.composing.done) return;
            e.composing = null;
          }
          e.updateFromDOM();
        }, 80));
    }),
    (r.prototype.updateFromDOM = function () {
      var e = this;
      (!this.cm.isReadOnly() && this.pollContent()) ||
        h(this.cm, function () {
          return I(e.cm);
        });
    }),
    (r.prototype.setUneditable = function (e) {
      e.contentEditable = "false";
    }),
    (r.prototype.onKeyPress = function (e) {
      0 == e.charCode ||
        this.composing ||
        (e.preventDefault(),
        this.cm.isReadOnly() ||
          R(this.cm, bl)(
            this.cm,
            String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
            0
          ));
    }),
    (r.prototype.readOnlyChanged = function (e) {
      this.div.contentEditable = String("nocursor" != e);
    }),
    (r.prototype.onContextMenu = function () {}),
    (r.prototype.resetPosition = function () {}),
    (r.prototype.needsContentAttribute = !0);
  function i(e) {
    (this.cm = e),
      (this.prevInput = ""),
      (this.pollingFast = !1),
      (this.polling = new ce()),
      (this.hasSelection = !1),
      (this.composing = null);
  }
  var Al, Dl, Wl, Hl, Fl;
  function o(e, t, r, n) {
    (Al.defaults[e] = t),
      r &&
        (Dl[e] = n
          ? function (e, t, n) {
              n != cl && r(e, t, n);
            }
          : r);
  }
  (i.prototype.init = function (n) {
    var e = this,
      r = this,
      i = this.cm,
      o = (this.createField(n), this.textarea);
    function t(e) {
      if (!A(i, e)) {
        if (i.somethingSelected())
          yl({ lineWise: !1, text: i.getSelections() });
        else {
          if (!i.options.lineWiseCopyCut) return;
          var t = Cl(i);
          yl({ lineWise: !0, text: t.text }),
            "cut" == e.type
              ? i.setSelections(t.ranges, null, fe)
              : ((r.prevInput = ""), (o.value = t.text.join("\n")), se(o));
        }
        "cut" == e.type && (i.state.cutIncoming = +new Date());
      }
    }
    n.wrapper.insertBefore(this.wrapper, n.wrapper.firstChild),
      Y && (o.style.width = "0px"),
      k(o, "input", function () {
        w && 9 <= v && e.hasSelection && (e.hasSelection = null), r.poll();
      }),
      k(o, "paste", function (e) {
        A(i, e) ||
          wl(e, i) ||
          ((i.state.pasteIncoming = +new Date()), r.fastPoll());
      }),
      k(o, "cut", t),
      k(o, "copy", t),
      k(n.scroller, "paste", function (e) {
        if (!Tn(n, e) && !A(i, e)) {
          if (!o.dispatchEvent)
            return (i.state.pasteIncoming = +new Date()), void r.focus();
          var t = new Event("paste");
          (t.clipboardData = e.clipboardData), o.dispatchEvent(t);
        }
      }),
      k(n.lineSpace, "selectstart", function (e) {
        Tn(n, e) || D(e);
      }),
      k(o, "compositionstart", function () {
        var e = i.getCursor("from");
        r.composing && r.composing.range.clear(),
          (r.composing = {
            start: e,
            range: i.markText(e, i.getCursor("to"), {
              className: "CodeMirror-composing",
            }),
          });
      }),
      k(o, "compositionend", function () {
        r.composing &&
          (r.poll(), r.composing.range.clear(), (r.composing = null));
      });
  }),
    (i.prototype.createField = function (e) {
      (this.wrapper = Ll()), (this.textarea = this.wrapper.firstChild);
    }),
    (i.prototype.screenReaderLabelChanged = function (e) {
      e
        ? this.textarea.setAttribute("aria-label", e)
        : this.textarea.removeAttribute("aria-label");
    }),
    (i.prototype.prepareSelection = function () {
      var e,
        t = this.cm,
        n = t.display,
        r = t.doc,
        i = yr(t);
      return (
        t.options.moveInputWithCursor &&
          ((t = qn(t, r.sel.primary().head, "div")),
          (r = n.wrapper.getBoundingClientRect()),
          (e = n.lineDiv.getBoundingClientRect()),
          (i.teTop = Math.max(
            0,
            Math.min(n.wrapper.clientHeight - 10, t.top + e.top - r.top)
          )),
          (i.teLeft = Math.max(
            0,
            Math.min(n.wrapper.clientWidth - 10, t.left + e.left - r.left)
          ))),
        i
      );
    }),
    (i.prototype.showSelection = function (e) {
      var t = this.cm.display;
      y(t.cursorDiv, e.cursors),
        y(t.selectionDiv, e.selection),
        null != e.teTop &&
          ((this.wrapper.style.top = e.teTop + "px"),
          (this.wrapper.style.left = e.teLeft + "px"));
    }),
    (i.prototype.reset = function (e) {
      var t, n;
      this.contextMenuPending ||
        this.composing ||
        ((t = this.cm).somethingSelected()
          ? ((this.prevInput = ""),
            (n = t.getSelection()),
            (this.textarea.value = n),
            t.state.focused && se(this.textarea),
            w && 9 <= v && (this.hasSelection = n))
          : e ||
            ((this.prevInput = this.textarea.value = ""),
            w && 9 <= v && (this.hasSelection = null)));
    }),
    (i.prototype.getField = function () {
      return this.textarea;
    }),
    (i.prototype.supportsTouch = function () {
      return !1;
    }),
    (i.prototype.focus = function () {
      if (
        "nocursor" != this.cm.options.readOnly &&
        (!_ || N() != this.textarea)
      )
        try {
          this.textarea.focus();
        } catch (e) {}
    }),
    (i.prototype.blur = function () {
      this.textarea.blur();
    }),
    (i.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    }),
    (i.prototype.receivedFocus = function () {
      this.slowPoll();
    }),
    (i.prototype.slowPoll = function () {
      var e = this;
      this.pollingFast ||
        this.polling.set(this.cm.options.pollInterval, function () {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
    }),
    (i.prototype.fastPoll = function () {
      var t = !1,
        n = this;
      (n.pollingFast = !0),
        n.polling.set(20, function e() {
          n.poll() || t
            ? ((n.pollingFast = !1), n.slowPoll())
            : ((t = !0), n.polling.set(60, e));
        });
    }),
    (i.prototype.poll = function () {
      var e = this,
        t = this.cm,
        n = this.textarea,
        r = this.prevInput;
      if (
        this.contextMenuPending ||
        !t.state.focused ||
        (et(n) && !r && !this.composing) ||
        t.isReadOnly() ||
        t.options.disableInput ||
        t.state.keySeq
      )
        return !1;
      var i = n.value;
      if (i == r && !t.somethingSelected()) return !1;
      if (
        (w && 9 <= v && this.hasSelection === i) ||
        (C && /[\uf700-\uf7ff]/.test(i))
      )
        return t.display.input.reset(), !1;
      if (t.doc.sel == t.display.selForContextMenu) {
        var o = i.charCodeAt(0);
        if ((8203 != o || r || (r = "​"), 8666 == o))
          return this.reset(), this.cm.execCommand("undo");
      }
      for (
        var l = 0, s = Math.min(r.length, i.length);
        l < s && r.charCodeAt(l) == i.charCodeAt(l);

      )
        ++l;
      return (
        h(t, function () {
          bl(
            t,
            i.slice(l),
            r.length - l,
            null,
            e.composing ? "*compose" : null
          ),
            1e3 < i.length || -1 < i.indexOf("\n")
              ? (n.value = e.prevInput = "")
              : (e.prevInput = i),
            e.composing &&
              (e.composing.range.clear(),
              (e.composing.range = t.markText(
                e.composing.start,
                t.getCursor("to"),
                { className: "CodeMirror-composing" }
              )));
        }),
        !0
      );
    }),
    (i.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    }),
    (i.prototype.onKeyPress = function () {
      w && 9 <= v && (this.hasSelection = null), this.fastPoll();
    }),
    (i.prototype.onContextMenu = function (e) {
      var n,
        r,
        t,
        i,
        o = this,
        l = o.cm,
        s = l.display,
        a = o.textarea,
        u = (o.contextMenuPending && o.contextMenuPending(), hr(l, e)),
        c = s.scroller.scrollTop;
      function h() {
        var e, t;
        null != a.selectionStart &&
          ((t = "​" + ((e = l.somethingSelected()) ? a.value : "")),
          (a.value = "⇚"),
          (a.value = t),
          (o.prevInput = e ? "" : "​"),
          (a.selectionStart = 1),
          (a.selectionEnd = t.length),
          (s.selForContextMenu = l.doc.sel));
      }
      function d() {
        var e, t;
        o.contextMenuPending == d &&
          ((o.contextMenuPending = !1),
          (o.wrapper.style.cssText = r),
          (a.style.cssText = n),
          w && v < 9 && s.scrollbars.setScrollTop((s.scroller.scrollTop = c)),
          null != a.selectionStart &&
            ((!w || v < 9) && h(),
            (e = 0),
            (t = function () {
              s.selForContextMenu == l.doc.sel &&
              0 == a.selectionStart &&
              0 < a.selectionEnd &&
              "​" == o.prevInput
                ? R(l, _i)(l)
                : e++ < 10
                ? (s.detectingSelectAll = setTimeout(t, 500))
                : ((s.selForContextMenu = null), s.input.reset());
            }),
            (s.detectingSelectAll = setTimeout(t, 200))));
      }
      u &&
        !K &&
        (l.options.resetSelectionOnContextMenu &&
          -1 == l.doc.sel.contains(u) &&
          R(l, U)(l.doc, pi(u), fe),
        (n = a.style.cssText),
        (r = o.wrapper.style.cssText),
        (u = o.wrapper.offsetParent.getBoundingClientRect()),
        (o.wrapper.style.cssText = "position: static"),
        (a.style.cssText =
          "position: absolute; width: 30px; height: 30px;\n      top: " +
          (e.clientY - u.top - 5) +
          "px; left: " +
          (e.clientX - u.left - 5) +
          "px;\n      z-index: 1000; background: " +
          (w ? "rgba(255, 255, 255, .05)" : "transparent") +
          ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
        x && (t = window.scrollY),
        s.input.focus(),
        x && window.scrollTo(null, t),
        s.input.reset(),
        l.somethingSelected() || (a.value = o.prevInput = " "),
        (o.contextMenuPending = d),
        (s.selForContextMenu = l.doc.sel),
        clearTimeout(s.detectingSelectAll),
        w && 9 <= v && h(),
        Q
          ? (Ye(e),
            (i = function () {
              T(window, "mouseup", i), setTimeout(d, 20);
            }),
            k(window, "mouseup", i))
          : setTimeout(d, 50));
    }),
    (i.prototype.readOnlyChanged = function (e) {
      e || this.reset(),
        (this.textarea.disabled = "nocursor" == e),
        (this.textarea.readOnly = !!e);
    }),
    (i.prototype.setUneditable = function () {}),
    (i.prototype.needsContentAttribute = !1),
    (Dl = (Al = p).optionHandlers),
    (Al.defineOption = o),
    (Al.Init = cl),
    o(
      "value",
      "",
      function (e, t) {
        return e.setValue(t);
      },
      !0
    ),
    o(
      "mode",
      null,
      function (e, t) {
        (e.doc.modeOption = t), bi(e);
      },
      !0
    ),
    o("indentUnit", 2, bi, !0),
    o("indentWithTabs", !1),
    o("smartIndent", !0),
    o(
      "tabSize",
      4,
      function (e) {
        wi(e), Vn(e), I(e);
      },
      !0
    ),
    o("lineSeparator", null, function (e, r) {
      if ((e.doc.lineSep = r)) {
        var i = [],
          o = e.doc.first;
        e.doc.iter(function (e) {
          for (var t = 0; ; ) {
            var n = e.text.indexOf(r, t);
            if (-1 == n) break;
            (t = n + r.length), i.push(F(o, n));
          }
          o++;
        });
        for (var t = i.length - 1; 0 <= t; t--)
          no(e.doc, r, i[t], F(i[t].line, i[t].ch + r.length));
      }
    }),
    o(
      "specialChars",
      /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
      function (e, t, n) {
        (e.state.specialChars = new RegExp(
          t.source + (t.test("\t") ? "" : "|\t"),
          "g"
        )),
          n != cl && e.refresh();
      }
    ),
    o(
      "specialCharPlaceholder",
      cn,
      function (e) {
        return e.refresh();
      },
      !0
    ),
    o("electricChars", !0),
    o(
      "inputStyle",
      _ ? "contenteditable" : "textarea",
      function () {
        throw new Error(
          "inputStyle can not (yet) be changed in a running editor"
        );
      },
      !0
    ),
    o(
      "spellcheck",
      !1,
      function (e, t) {
        return (e.getInputField().spellcheck = t);
      },
      !0
    ),
    o(
      "autocorrect",
      !1,
      function (e, t) {
        return (e.getInputField().autocorrect = t);
      },
      !0
    ),
    o(
      "autocapitalize",
      !1,
      function (e, t) {
        return (e.getInputField().autocapitalize = t);
      },
      !0
    ),
    o("rtlMoveVisually", !a),
    o("wholeLineUpdateBefore", !0),
    o(
      "theme",
      "default",
      function (e) {
        ul(e), li(e);
      },
      !0
    ),
    o("keyMap", "default", function (e, t, n) {
      (t = Io(t)), (n = n != cl && Io(n));
      n && n.detach && n.detach(e, t), t.attach && t.attach(e, n || null);
    }),
    o("extraKeys", null),
    o("configureMouse", null),
    o("lineWrapping", !1, pl, !0),
    o(
      "gutters",
      [],
      function (e, t) {
        (e.display.gutterSpecs = ii(t, e.options.lineNumbers)), li(e);
      },
      !0
    ),
    o(
      "fixedGutter",
      !0,
      function (e, t) {
        (e.display.gutters.style.left = t ? ar(e.display) + "px" : "0"),
          e.refresh();
      },
      !0
    ),
    o(
      "coverGutterNextToScrollbar",
      !1,
      function (e) {
        return Gr(e);
      },
      !0
    ),
    o(
      "scrollbarStyle",
      "native",
      function (e) {
        Kr(e),
          Gr(e),
          e.display.scrollbars.setScrollTop(e.doc.scrollTop),
          e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
      },
      !0
    ),
    o(
      "lineNumbers",
      !1,
      function (e, t) {
        (e.display.gutterSpecs = ii(e.options.gutters, t)), li(e);
      },
      !0
    ),
    o("firstLineNumber", 1, li, !0),
    o(
      "lineNumberFormatter",
      function (e) {
        return e;
      },
      li,
      !0
    ),
    o("showCursorWhenSelecting", !1, vr, !0),
    o("resetSelectionOnContextMenu", !0),
    o("lineWiseCopyCut", !0),
    o("pasteLinesPerSelection", !0),
    o("selectionsMayTouch", !1),
    o("readOnly", !1, function (e, t) {
      "nocursor" == t && (kr(e), e.display.input.blur()),
        e.display.input.readOnlyChanged(t);
    }),
    o("screenReaderLabel", null, function (e, t) {
      e.display.input.screenReaderLabelChanged((t = "" === t ? null : t));
    }),
    o(
      "disableInput",
      !1,
      function (e, t) {
        t || e.display.input.reset();
      },
      !0
    ),
    o("dragDrop", !0, fl),
    o("allowDropFileTypes", null),
    o("cursorBlinkRate", 530),
    o("cursorScrollMargin", 0),
    o("cursorHeight", 1, vr, !0),
    o("singleCursorHeightPerLine", !0, vr, !0),
    o("workTime", 100),
    o("workDelay", 100),
    o("flattenSpans", !0, wi, !0),
    o("addModeClass", !1, wi, !0),
    o("pollInterval", 100),
    o("undoDepth", 200, function (e, t) {
      return (e.doc.history.undoDepth = t);
    }),
    o("historyEventDelay", 1250),
    o(
      "viewportMargin",
      10,
      function (e) {
        return e.refresh();
      },
      !0
    ),
    o("maxHighlightLength", 1e4, wi, !0),
    o("moveInputWithCursor", !0, function (e, t) {
      t || e.display.input.resetPosition();
    }),
    o("tabindex", null, function (e, t) {
      return (e.display.input.getField().tabIndex = t || "");
    }),
    o("autofocus", null),
    o(
      "direction",
      "ltr",
      function (e, t) {
        return e.doc.setDirection(t);
      },
      !0
    ),
    o("phrases", null),
    (Hl = (Wl = p).optionHandlers),
    (Fl = Wl.helpers = {}),
    (Wl.prototype = {
      constructor: Wl,
      focus: function () {
        window.focus(), this.display.input.focus();
      },
      setOption: function (e, t) {
        var n = this.options,
          r = n[e];
        (n[e] == t && "mode" != e) ||
          ((n[e] = t),
          Hl.hasOwnProperty(e) && R(this, Hl[e])(this, t, r),
          O(this, "optionChange", this, e));
      },
      getOption: function (e) {
        return this.options[e];
      },
      getDoc: function () {
        return this.doc;
      },
      addKeyMap: function (e, t) {
        this.state.keyMaps[t ? "push" : "unshift"](Io(e));
      },
      removeKeyMap: function (e) {
        for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
          if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
      },
      addOverlay: t(function (e, t) {
        var n = e.token ? e : Wl.getMode(this.options, e);
        if (n.startState) throw new Error("Overlays may not be stateful.");
        for (
          var r = this.state.overlays,
            n = {
              mode: n,
              modeSpec: e,
              opaque: t && t.opaque,
              priority: (t && t.priority) || 0,
            },
            i = function (e) {
              return e.priority;
            },
            o = 0,
            l = i(n);
          o < r.length && i(r[o]) <= l;

        )
          o++;
        r.splice(o, 0, n), this.state.modeGen++, I(this);
      }),
      removeOverlay: t(function (e) {
        for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
          var r = t[n].modeSpec;
          if (r == e || ("string" == typeof e && r.name == e))
            return t.splice(n, 1), this.state.modeGen++, void I(this);
        }
      }),
      indentLine: t(function (e, t, n) {
        "string" != typeof t &&
          "number" != typeof t &&
          (t =
            null == t
              ? this.options.smartIndent
                ? "smart"
                : "prev"
              : t
              ? "add"
              : "subtract"),
          mt(this.doc, e) && ml(this, e, t, n);
      }),
      indentSelection: t(function (e) {
        for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
          var i = t[r];
          if (i.empty())
            i.head.line > n &&
              (ml(this, i.head.line, e, !0),
              (n = i.head.line),
              r == this.doc.sel.primIndex && Dr(this));
          else {
            for (
              var o = i.from(),
                i = i.to(),
                l = Math.max(n, o.line),
                n = Math.min(this.lastLine(), i.line - (i.ch ? 0 : 1)) + 1,
                s = l;
              s < n;
              ++s
            )
              ml(this, s, e);
            i = this.doc.sel.ranges;
            0 == o.ch &&
              t.length == i.length &&
              0 < i[r].from().ch &&
              Ri(this.doc, r, new G(o, i[r].to()), fe);
          }
        }
      }),
      getTokenAt: function (e, t) {
        return Ht(this, e, t);
      },
      getLineTokens: function (e, t) {
        return Ht(this, F(e), t, !0);
      },
      getTokenTypeAt: function (e) {
        e = P(this.doc, e);
        var t,
          n = Mt(this, W(this.doc, e.line)),
          r = 0,
          i = (n.length - 1) / 2,
          o = e.ch;
        if (0 == o) t = n[2];
        else
          for (;;) {
            var l = (r + i) >> 1;
            if ((l ? n[2 * l - 1] : 0) >= o) i = l;
            else {
              if (!(n[2 * l + 1] < o)) {
                t = n[2 * l + 2];
                break;
              }
              r = 1 + l;
            }
          }
        e = t ? t.indexOf("overlay ") : -1;
        return e < 0 ? t : 0 == e ? null : t.slice(0, e - 1);
      },
      getModeAt: function (e) {
        var t = this.doc.mode;
        return t.innerMode ? Wl.innerMode(t, this.getTokenAt(e).state).mode : t;
      },
      getHelper: function (e, t) {
        return this.getHelpers(e, t)[0];
      },
      getHelpers: function (e, t) {
        var n = [];
        if (!Fl.hasOwnProperty(t)) return n;
        var r = Fl[t],
          i = this.getModeAt(e);
        if ("string" == typeof i[t]) r[i[t]] && n.push(r[i[t]]);
        else if (i[t])
          for (var o = 0; o < i[t].length; o++) {
            var l = r[i[t][o]];
            l && n.push(l);
          }
        else
          i.helperType && r[i.helperType]
            ? n.push(r[i.helperType])
            : r[i.name] && n.push(r[i.name]);
        for (var s = 0; s < r._global.length; s++) {
          var a = r._global[s];
          a.pred(i, this) && -1 == L(n, a.val) && n.push(a.val);
        }
        return n;
      },
      getStateAfter: function (e, t) {
        var n = this.doc;
        return Nt(
          this,
          (e = Ct(n, null == e ? n.first + n.size - 1 : e)) + 1,
          t
        ).state;
      },
      cursorCoords: function (e, t) {
        var n = this.doc.sel.primary(),
          e =
            null == e
              ? n.head
              : "object" == typeof e
              ? P(this.doc, e)
              : e
              ? n.from()
              : n.to();
        return qn(this, e, t || "page");
      },
      charCoords: function (e, t) {
        return _n(this, P(this.doc, e), t || "page");
      },
      coordsChar: function (e, t) {
        return Jn(this, (e = $n(this, e, t || "page")).left, e.top);
      },
      lineAtHeight: function (e, t) {
        return (
          (e = $n(this, { top: e, left: 0 }, t || "page").top),
          gt(this.doc, e + this.display.viewOffset)
        );
      },
      heightAtLine: function (e, t, n) {
        var r = !1,
          i =
            "number" == typeof e
              ? ((i = this.doc.first + this.doc.size - 1),
                e < this.doc.first
                  ? (e = this.doc.first)
                  : i < e && ((e = i), (r = !0)),
                W(this.doc, e))
              : e;
        return (
          Yn(this, i, { top: 0, left: 0 }, t || "page", n || r).top +
          (r ? this.doc.height - tn(i) : 0)
        );
      },
      defaultTextHeight: function () {
        return or(this.display);
      },
      defaultCharWidth: function () {
        return lr(this.display);
      },
      getViewport: function () {
        return { from: this.display.viewFrom, to: this.display.viewTo };
      },
      addWidget: function (e, t, n, r, i) {
        var o,
          l,
          s = this.display,
          a = (e = qn(this, P(this.doc, e))).bottom,
          u = e.left;
        (t.style.position = "absolute"),
          t.setAttribute("cm-ignore-events", "true"),
          this.display.input.setUneditable(t),
          s.sizer.appendChild(t),
          "over" == r
            ? (a = e.top)
            : ("above" != r && "near" != r) ||
              ((l = Math.max(s.wrapper.clientHeight, this.doc.height)),
              (o = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth)),
              ("above" == r || e.bottom + t.offsetHeight > l) &&
              e.top > t.offsetHeight
                ? (a = e.top - t.offsetHeight)
                : e.bottom + t.offsetHeight <= l && (a = e.bottom),
              u + t.offsetWidth > o && (u = o - t.offsetWidth)),
          (t.style.top = a + "px"),
          (t.style.left = t.style.right = ""),
          "right" == i
            ? ((u = s.sizer.clientWidth - t.offsetWidth),
              (t.style.right = "0px"))
            : ("left" == i
                ? (u = 0)
                : "middle" == i &&
                  (u = (s.sizer.clientWidth - t.offsetWidth) / 2),
              (t.style.left = u + "px")),
          n &&
            ((r = this),
            (l = {
              left: u,
              top: a,
              right: u + t.offsetWidth,
              bottom: a + t.offsetHeight,
            }),
            null != (l = Or(r, l)).scrollTop && Er(r, l.scrollTop),
            null != l.scrollLeft && Ir(r, l.scrollLeft));
      },
      triggerOnKeyDown: t(Qo),
      triggerOnKeyPress: t(el),
      triggerOnKeyUp: Jo,
      triggerOnMouseDown: t(il),
      execCommand: function (e) {
        if (Vo.hasOwnProperty(e)) return Vo[e].call(null, this);
      },
      triggerElectric: t(function (e) {
        xl(this, e);
      }),
      findPosH: function (e, t, n, r) {
        for (
          var i = 1, o = (t < 0 && ((i = -1), (t = -t)), P(this.doc, e)), l = 0;
          l < t && !(o = kl(this.doc, o, i, n, r)).hitSide;
          ++l
        );
        return o;
      },
      moveH: t(function (t, n) {
        var r = this;
        this.extendSelectionsBy(function (e) {
          return r.display.shift || r.doc.extend || e.empty()
            ? kl(r.doc, e.head, t, n, r.options.rtlMoveVisually)
            : t < 0
            ? e.from()
            : e.to();
        }, ge);
      }),
      deleteH: t(function (n, r) {
        var e = this.doc.sel,
          i = this.doc;
        e.somethingSelected()
          ? i.replaceSelection("", null, "+delete")
          : zo(this, function (e) {
              var t = kl(i, e.head, n, r, !1);
              return n < 0 ? { from: t, to: e.head } : { from: e.head, to: t };
            });
      }),
      findPosV: function (e, t, n, r) {
        for (
          var i = 1,
            o = r,
            l = (t < 0 && ((i = -1), (t = -t)), P(this.doc, e)),
            s = 0;
          s < t;
          ++s
        ) {
          var a = qn(this, l, "div");
          if (
            (null == o ? (o = a.left) : (a.left = o),
            (l = Tl(this, a, i, n)).hitSide)
          )
            break;
        }
        return l;
      },
      moveV: t(function (r, i) {
        var o = this,
          l = this.doc,
          s = [],
          a = !this.display.shift && !l.extend && l.sel.somethingSelected();
        if (
          (l.extendSelectionsBy(function (e) {
            if (a) return r < 0 ? e.from() : e.to();
            var t = qn(o, e.head, "div"),
              n =
                (null != e.goalColumn && (t.left = e.goalColumn),
                s.push(t.left),
                Tl(o, t, r, i));
            return (
              "page" == i &&
                e == l.sel.primary() &&
                Ar(o, _n(o, n, "div").top - t.top),
              n
            );
          }, ge),
          s.length)
        )
          for (var e = 0; e < l.sel.ranges.length; e++)
            l.sel.ranges[e].goalColumn = s[e];
      }),
      findWordAt: function (e) {
        var t = W(this.doc, e.line).text,
          n = e.ch,
          r = e.ch;
        if (t) {
          for (
            var i = this.getHelper(e, "wordChars"),
              o =
                (("before" != e.sticky && r != t.length) || !n ? ++r : --n,
                t.charAt(n)),
              l = Le(o, i)
                ? function (e) {
                    return Le(e, i);
                  }
                : /\s/.test(o)
                ? function (e) {
                    return /\s/.test(e);
                  }
                : function (e) {
                    return !/\s/.test(e) && !Le(e);
                  };
            0 < n && l(t.charAt(n - 1));

          )
            --n;
          for (; r < t.length && l(t.charAt(r)); ) ++r;
        }
        return new G(F(e.line, n), F(e.line, r));
      },
      toggleOverwrite: function (e) {
        (null != e && e == this.state.overwrite) ||
          (((this.state.overwrite = !this.state.overwrite) ? ie : ee)(
            this.display.cursorDiv,
            "CodeMirror-overwrite"
          ),
          O(this, "overwriteToggle", this, this.state.overwrite));
      },
      hasFocus: function () {
        return this.display.input.getField() == N();
      },
      isReadOnly: function () {
        return !(!this.options.readOnly && !this.doc.cantEdit);
      },
      scrollTo: t(function (e, t) {
        Wr(this, e, t);
      }),
      getScrollInfo: function () {
        var e = this.display.scroller;
        return {
          left: e.scrollLeft,
          top: e.scrollTop,
          height: e.scrollHeight - An(this) - this.display.barHeight,
          width: e.scrollWidth - An(this) - this.display.barWidth,
          clientHeight: Wn(this),
          clientWidth: Dn(this),
        };
      },
      scrollIntoView: t(function (e, t) {
        var n;
        null == e
          ? ((e = { from: this.doc.sel.primary().head, to: null }),
            null == t && (t = this.options.cursorScrollMargin))
          : "number" == typeof e
          ? (e = { from: F(e, 0), to: null })
          : null == e.from && (e = { from: e, to: null }),
          e.to || (e.to = e.from),
          (e.margin = t || 0),
          null != e.from.line
            ? ((t = e), Hr((n = this)), (n.curOp.scrollToPos = t))
            : Fr(this, e.from, e.to, e.margin);
      }),
      setSize: t(function (e, t) {
        function n(e) {
          return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
        }
        var r = this,
          i =
            (null != e && (this.display.wrapper.style.width = n(e)),
            null != t && (this.display.wrapper.style.height = n(t)),
            this.options.lineWrapping && Un(this),
            this.display.viewFrom);
        this.doc.iter(i, this.display.viewTo, function (e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; t++)
              if (e.widgets[t].noHScroll) {
                fr(r, i, "widget");
                break;
              }
          ++i;
        }),
          (this.curOp.forceUpdate = !0),
          O(this, "refresh", this);
      }),
      operation: function (e) {
        return h(this, e);
      },
      startOperation: function () {
        return Xr(this);
      },
      endOperation: function () {
        return Yr(this);
      },
      refresh: t(function () {
        var e = this.display.cachedTextHeight;
        I(this),
          (this.curOp.forceUpdate = !0),
          Vn(this),
          Wr(this, this.doc.scrollLeft, this.doc.scrollTop),
          ei(this.display),
          (null == e ||
            0.5 < Math.abs(e - or(this.display)) ||
            this.options.lineWrapping) &&
            cr(this),
          O(this, "refresh", this);
      }),
      swapDoc: t(function (e) {
        var t = this.doc;
        return (
          (t.cm = null),
          this.state.selectingText && this.state.selectingText(),
          Li(this, e),
          Vn(this),
          this.display.input.reset(),
          Wr(this, e.scrollLeft, e.scrollTop),
          (this.curOp.forceScroll = !0),
          b(this, "swapDoc", this, t),
          t
        );
      }),
      phrase: function (e) {
        var t = this.options.phrases;
        return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
      },
      getInputField: function () {
        return this.display.input.getField();
      },
      getWrapperElement: function () {
        return this.display.wrapper;
      },
      getScrollerElement: function () {
        return this.display.scroller;
      },
      getGutterElement: function () {
        return this.display.gutters;
      },
    }),
    Ke(Wl),
    (Wl.registerHelper = function (e, t, n) {
      Fl.hasOwnProperty(e) || (Fl[e] = Wl[e] = { _global: [] }), (Fl[e][t] = n);
    }),
    (Wl.registerGlobalHelper = function (e, t, n, r) {
      Wl.registerHelper(e, t, r), Fl[e]._global.push({ pred: n, val: r });
    });
  var El,
    Pl = "iter insert remove copy getEditor constructor".split(" ");
  for (El in f.prototype)
    f.prototype.hasOwnProperty(El) &&
      L(Pl, El) < 0 &&
      (p.prototype[El] = (function (e) {
        return function () {
          return e.apply(this.doc, arguments);
        };
      })(f.prototype[El]));
  return (
    Ke(f),
    (p.inputStyles = { textarea: i, contenteditable: r }),
    (p.defineMode = function (e) {
      p.defaults.mode || "null" == e || (p.defaults.mode = e),
        function (e, t) {
          2 < arguments.length &&
            (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            (rt[e] = t);
        }.apply(this, arguments);
    }),
    (p.defineMIME = function (e, t) {
      it[e] = t;
    }),
    p.defineMode("null", function () {
      return {
        token: function (e) {
          return e.skipToEnd();
        },
      };
    }),
    p.defineMIME("text/plain", "null"),
    (p.defineExtension = function (e, t) {
      p.prototype[e] = t;
    }),
    (p.defineDocExtension = function (e, t) {
      f.prototype[e] = t;
    }),
    (p.fromTextArea = function (t, n) {
      var e;
      function r() {
        t.value = s.getValue();
      }
      if (
        (((n = n ? ue(n) : {}).value = t.value),
        !n.tabindex && t.tabIndex && (n.tabindex = t.tabIndex),
        !n.placeholder && t.placeholder && (n.placeholder = t.placeholder),
        null == n.autofocus &&
          ((e = N()),
          (n.autofocus =
            e == t ||
            (null != t.getAttribute("autofocus") && e == document.body))),
        t.form && (k(t.form, "submit", r), !n.leaveSubmitMethodAlone))
      ) {
        var i = t.form,
          o = i.submit;
        try {
          var l = (i.submit = function () {
            r(), (i.submit = o), i.submit(), (i.submit = l);
          });
        } catch (e) {}
      }
      (n.finishInit = function (e) {
        (e.save = r),
          (e.getTextArea = function () {
            return t;
          }),
          (e.toTextArea = function () {
            (e.toTextArea = isNaN),
              r(),
              t.parentNode.removeChild(e.getWrapperElement()),
              (t.style.display = ""),
              t.form &&
                (T(t.form, "submit", r),
                n.leaveSubmitMethodAlone ||
                  "function" != typeof t.form.submit ||
                  (t.form.submit = o));
          });
      }),
        (t.style.display = "none");
      var s = p(function (e) {
        return t.parentNode.insertBefore(e, t.nextSibling);
      }, n);
      return s;
    }),
    ((e = p).off = T),
    (e.on = k),
    (e.wheelEventPixels = hi),
    (e.Doc = f),
    (e.splitLines = Je),
    (e.countColumn = S),
    (e.findColumn = me),
    (e.isWordChar = Se),
    (e.Pass = de),
    (e.signal = O),
    (e.Line = on),
    (e.changeEnd = gi),
    (e.scrollbarModel = Vr),
    (e.Pos = F),
    (e.cmpPos = E),
    (e.modes = rt),
    (e.mimeModes = it),
    (e.resolveMode = ot),
    (e.getMode = lt),
    (e.modeExtensions = st),
    (e.extendMode = at),
    (e.copyState = ut),
    (e.startState = ht),
    (e.innerMode = ct),
    (e.commands = Vo),
    (e.keyMap = Ao),
    (e.keyName = Po),
    (e.isModifierKey = Fo),
    (e.lookupKey = Ho),
    (e.normalizeKeyMap = Wo),
    (e.StringStream = g),
    (e.SharedTextMarker = go),
    (e.TextMarker = ho),
    (e.LineWidget = uo),
    (e.e_preventDefault = D),
    (e.e_stopPropagation = je),
    (e.e_stop = Ye),
    (e.addClass = ie),
    (e.contains = re),
    (e.rmClass = ee),
    (e.keyNames = To),
    (p.version = "5.65.5"),
    p
  );
});

/*
 * codemirror
 * https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/xml/xml.min.js
 */
!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], t)
    : t(CodeMirror);
})(function (y) {
  "use strict";
  var C = {
      autoSelfClosers: {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        menuitem: !0,
      },
      implicitlyClosed: {
        dd: !0,
        li: !0,
        optgroup: !0,
        option: !0,
        p: !0,
        rp: !0,
        rt: !0,
        tbody: !0,
        td: !0,
        tfoot: !0,
        th: !0,
        tr: !0,
      },
      contextGrabbers: {
        dd: { dd: !0, dt: !0 },
        dt: { dd: !0, dt: !0 },
        li: { li: !0 },
        option: { option: !0, optgroup: !0 },
        optgroup: { optgroup: !0 },
        p: {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          dir: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          menu: !0,
          nav: !0,
          ol: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          ul: !0,
        },
        rp: { rp: !0, rt: !0 },
        rt: { rp: !0, rt: !0 },
        tbody: { tbody: !0, tfoot: !0 },
        td: { td: !0, th: !0 },
        tfoot: { tbody: !0 },
        th: { td: !0, th: !0 },
        thead: { tbody: !0, tfoot: !0 },
        tr: { tr: !0 },
      },
      doNotIndent: { pre: !0 },
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0,
    },
    z = {
      autoSelfClosers: {},
      implicitlyClosed: {},
      contextGrabbers: {},
      doNotIndent: {},
      allowUnquoted: !1,
      allowMissing: !1,
      allowMissingTagName: !1,
      caseFold: !1,
    };
  y.defineMode("xml", function (t, e) {
    var n,
      i,
      a,
      l = t.indentUnit,
      u = {},
      r = e.htmlMode ? C : z;
    for (n in r) u[n] = r[n];
    for (n in e) u[n] = e[n];
    function c(e, n) {
      function t(t) {
        return (n.tokenize = t)(e, n);
      }
      var r = e.next();
      return "<" == r
        ? e.eat("!")
          ? e.eat("[")
            ? e.match("CDATA[")
              ? t(o("atom", "]]>"))
              : null
            : e.match("--")
            ? t(o("comment", "--\x3e"))
            : e.match("DOCTYPE", !0, !0)
            ? (e.eatWhile(/[\w\._\-]/),
              t(
                (function r(o) {
                  return function (t, e) {
                    for (var n; null != (n = t.next()); ) {
                      if ("<" == n)
                        return (e.tokenize = r(o + 1)), e.tokenize(t, e);
                      if (">" == n) {
                        if (1 != o)
                          return (e.tokenize = r(o - 1)), e.tokenize(t, e);
                        e.tokenize = c;
                        break;
                      }
                    }
                    return "meta";
                  };
                })(1)
              ))
            : null
          : e.eat("?")
          ? (e.eatWhile(/[\w\._\-]/), (n.tokenize = o("meta", "?>")), "meta")
          : ((i = e.eat("/") ? "closeTag" : "openTag"),
            (n.tokenize = d),
            "tag bracket")
        : "&" == r
        ? (
            e.eat("#")
              ? e.eat("x")
                ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";")
                : e.eatWhile(/[\d]/) && e.eat(";")
              : e.eatWhile(/[\w\.\-:]/) && e.eat(";")
          )
          ? "atom"
          : "error"
        : (e.eatWhile(/[^&<]/), null);
    }
    function d(t, e) {
      var n,
        r,
        o = t.next();
      return ">" == o || ("/" == o && t.eat(">"))
        ? ((e.tokenize = c),
          (i = ">" == o ? "endTag" : "selfcloseTag"),
          "tag bracket")
        : "=" == o
        ? ((i = "equals"), null)
        : "<" == o
        ? ((e.tokenize = c),
          (e.state = p),
          (e.tagName = e.tagStart = null),
          (n = e.tokenize(t, e)) ? n + " tag error" : "tag error")
        : /[\'\"]/.test(o)
        ? ((e.tokenize = ((r = o), (a.isInAttribute = !0), a)),
          (e.stringStartCol = t.column()),
          e.tokenize(t, e))
        : (t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
      function a(t, e) {
        for (; !t.eol(); )
          if (t.next() == r) {
            e.tokenize = d;
            break;
          }
        return "string";
      }
    }
    function o(n, r) {
      return function (t, e) {
        for (; !t.eol(); ) {
          if (t.match(r)) {
            e.tokenize = c;
            break;
          }
          t.next();
        }
        return n;
      };
    }
    function s(t) {
      return t && t.toLowerCase();
    }
    function f(t, e, n) {
      (this.prev = t.context),
        (this.tagName = e || ""),
        (this.indent = t.indented),
        (this.startOfLine = n),
        (u.doNotIndent.hasOwnProperty(e) ||
          (t.context && t.context.noIndent)) &&
          (this.noIndent = !0);
    }
    function m(t) {
      t.context && (t.context = t.context.prev);
    }
    function g(t, e) {
      for (var n; ; ) {
        if (!t.context) return;
        if (
          ((n = t.context.tagName),
          !u.contextGrabbers.hasOwnProperty(s(n)) ||
            !u.contextGrabbers[s(n)].hasOwnProperty(s(e)))
        )
          return;
        m(t);
      }
    }
    function p(t, e, n) {
      return "openTag" == t
        ? ((n.tagStart = e.column()), h)
        : "closeTag" == t
        ? x
        : p;
    }
    function h(t, e, n) {
      return "word" == t
        ? ((n.tagName = e.current()), (a = "tag"), w)
        : u.allowMissingTagName && "endTag" == t
        ? ((a = "tag bracket"), w(t, 0, n))
        : ((a = "error"), h);
    }
    function x(t, e, n) {
      var r;
      return "word" == t
        ? ((r = e.current()),
          n.context &&
            n.context.tagName != r &&
            u.implicitlyClosed.hasOwnProperty(s(n.context.tagName)) &&
            m(n),
          (n.context && n.context.tagName == r) || !1 === u.matchClosing
            ? ((a = "tag"), b)
            : ((a = "tag error"), k))
        : u.allowMissingTagName && "endTag" == t
        ? ((a = "tag bracket"), b(t, 0, n))
        : ((a = "error"), k);
    }
    function b(t, e, n) {
      return "endTag" != t ? ((a = "error"), b) : (m(n), p);
    }
    function k(t, e, n) {
      return (a = "error"), b(t, 0, n);
    }
    function w(t, e, n) {
      return "word" == t
        ? ((a = "attribute"), T)
        : "endTag" == t || "selfcloseTag" == t
        ? ((r = n.tagName),
          (o = n.tagStart),
          (n.tagName = n.tagStart = null),
          "selfcloseTag" == t || u.autoSelfClosers.hasOwnProperty(s(r))
            ? g(n, r)
            : (g(n, r), (n.context = new f(n, r, o == n.indented))),
          p)
        : ((a = "error"), w);
      var r, o;
    }
    function T(t, e, n) {
      return "equals" == t ? v : (u.allowMissing || (a = "error"), w(t, 0, n));
    }
    function v(t, e, n) {
      return "string" == t
        ? N
        : "word" == t && u.allowUnquoted
        ? ((a = "string"), w)
        : ((a = "error"), w(t, 0, n));
    }
    function N(t, e, n) {
      return "string" == t ? N : w(t, 0, n);
    }
    return (
      (c.isInText = !0),
      {
        startState: function (t) {
          var e = {
            tokenize: c,
            state: p,
            indented: t || 0,
            tagName: null,
            tagStart: null,
            context: null,
          };
          return null != t && (e.baseIndent = t), e;
        },
        token: function (t, e) {
          if (
            (!e.tagName && t.sol() && (e.indented = t.indentation()),
            t.eatSpace())
          )
            return null;
          i = null;
          var n = e.tokenize(t, e);
          return (
            (n || i) &&
              "comment" != n &&
              ((a = null),
              (e.state = e.state(i || n, t, e)),
              a && (n = "error" == a ? n + " error" : a)),
            n
          );
        },
        indent: function (t, e, n) {
          var r = t.context;
          if (t.tokenize.isInAttribute)
            return t.tagStart == t.indented
              ? t.stringStartCol + 1
              : t.indented + l;
          if (r && r.noIndent) return y.Pass;
          if (t.tokenize != d && t.tokenize != c)
            return n ? n.match(/^(\s*)/)[0].length : 0;
          if (t.tagName)
            return !1 !== u.multilineTagIndentPastTag
              ? t.tagStart + t.tagName.length + 2
              : t.tagStart + l * (u.multilineTagIndentFactor || 1);
          if (u.alignCDATA && /<!\[CDATA\[/.test(e)) return 0;
          var o = e && /^<(\/)?([\w_:\.-]*)/.exec(e);
          if (o && o[1])
            for (; r; ) {
              if (r.tagName == o[2]) {
                r = r.prev;
                break;
              }
              if (!u.implicitlyClosed.hasOwnProperty(s(r.tagName))) break;
              r = r.prev;
            }
          else if (o)
            for (; r; ) {
              var a = u.contextGrabbers[s(r.tagName)];
              if (!a || !a.hasOwnProperty(s(o[2]))) break;
              r = r.prev;
            }
          for (; r && r.prev && !r.startOfLine; ) r = r.prev;
          return r ? r.indent + l : t.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: "\x3c!--",
        blockCommentEnd: "--\x3e",
        configuration: u.htmlMode ? "html" : "xml",
        helperType: u.htmlMode ? "html" : "xml",
        skipAttribute: function (t) {
          t.state == v && (t.state = w);
        },
        xmlCurrentTag: function (t) {
          return t.tagName
            ? { name: t.tagName, close: "closeTag" == t.type }
            : null;
        },
        xmlCurrentContext: function (t) {
          for (var e = [], n = t.context; n; n = n.prev) e.push(n.tagName);
          return e.reverse();
        },
      }
    );
  }),
    y.defineMIME("text/xml", "xml"),
    y.defineMIME("application/xml", "xml"),
    y.mimeModes.hasOwnProperty("text/html") ||
      y.defineMIME("text/html", { name: "xml", htmlMode: !0 });
});

/*
 * codemirror
 * https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/javascript/javascript.min.js
 */
!(function (e) {
  "object" == typeof exports && "object" == typeof module
    ? e(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], e)
    : e(CodeMirror);
})(function (rt) {
  "use strict";
  rt.defineMode("javascript", function (e, l) {
    var t,
      r,
      O,
      P,
      f = e.indentUnit,
      N = l.statementIndent,
      U = l.jsonld,
      o = l.json || U,
      W = !1 !== l.trackScope,
      u = l.typescript,
      B = l.wordCharacters || /[\w$\xa1-\uffff]/,
      F =
        ((e = n("keyword a")),
        (t = n("keyword b")),
        (r = n("keyword c")),
        (O = n("keyword d")),
        (P = n("operator")),
        {
          if: n("if"),
          while: e,
          with: e,
          else: t,
          do: t,
          try: t,
          finally: t,
          return: O,
          break: O,
          continue: O,
          new: n("new"),
          delete: r,
          void: r,
          throw: r,
          debugger: n("debugger"),
          var: n("var"),
          const: n("var"),
          let: n("var"),
          function: n("function"),
          catch: n("catch"),
          for: n("for"),
          switch: n("switch"),
          case: n("case"),
          default: n("default"),
          in: P,
          typeof: P,
          instanceof: P,
          true: (e = { type: "atom", style: "atom" }),
          false: e,
          null: e,
          undefined: e,
          NaN: e,
          Infinity: e,
          this: n("this"),
          class: n("class"),
          super: n("atom"),
          yield: r,
          export: n("export"),
          import: n("import"),
          extends: r,
          await: r,
        });
    function n(e) {
      return { type: e, style: "keyword" };
    }
    var H,
      D,
      G = /[+\-*&%=<>!?|~^@]/,
      J =
        /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function i(e, t, r) {
      return (H = e), (D = r), t;
    }
    function d(e, t) {
      var a,
        r = e.next();
      if ('"' == r || "'" == r)
        return (
          (t.tokenize =
            ((a = r),
            function (e, t) {
              var r,
                n = !1;
              if (U && "@" == e.peek() && e.match(J))
                return (t.tokenize = d), i("jsonld-keyword", "meta");
              for (; null != (r = e.next()) && (r != a || n); )
                n = !n && "\\" == r;
              return n || (t.tokenize = d), i("string", "string");
            })),
          t.tokenize(e, t)
        );
      if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
        return i("number", "number");
      if ("." == r && e.match("..")) return i("spread", "meta");
      if (/[\[\]{}\(\),;\:\.]/.test(r)) return i(r);
      if ("=" == r && e.eat(">")) return i("=>", "operator");
      if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
        return i("number", "number");
      if (/\d/.test(r))
        return (
          e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
          i("number", "number")
        );
      if ("/" == r)
        return e.eat("*")
          ? (t.tokenize = K)(e, t)
          : e.eat("/")
          ? (e.skipToEnd(), i("comment", "comment"))
          : tt(e, t, 1)
          ? ((function (e) {
              for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                if (!r) {
                  if ("/" == t && !n) return;
                  "[" == t ? (n = !0) : n && "]" == t && (n = !1);
                }
                r = !r && "\\" == t;
              }
            })(e),
            e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
            i("regexp", "string-2"))
          : (e.eat("="), i("operator", "operator", e.current()));
      if ("`" == r) return (t.tokenize = L)(e, t);
      if ("#" == r && "!" == e.peek()) return e.skipToEnd(), i("meta", "meta");
      if ("#" == r && e.eatWhile(B)) return i("variable", "property");
      if (
        ("<" == r && e.match("!--")) ||
        ("-" == r && e.match("->") && !/\S/.test(e.string.slice(0, e.start)))
      )
        return e.skipToEnd(), i("comment", "comment");
      if (G.test(r))
        return (
          (">" == r && t.lexical && ">" == t.lexical.type) ||
            (e.eat("=")
              ? ("!" != r && "=" != r) || e.eat("=")
              : /[<>*+\-|&?]/.test(r) && (e.eat(r), ">" == r && e.eat(r))),
          "?" == r && e.eat(".")
            ? i(".")
            : i("operator", "operator", e.current())
        );
      if (B.test(r)) {
        e.eatWhile(B);
        r = e.current();
        if ("." != t.lastType) {
          if (F.propertyIsEnumerable(r)) return i((t = F[r]).type, t.style, r);
          if (
            "async" == r &&
            e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
          )
            return i("async", "keyword", r);
        }
        return i("variable", "variable", r);
      }
    }
    function K(e, t) {
      for (var r, n = !1; (r = e.next()); ) {
        if ("/" == r && n) {
          t.tokenize = d;
          break;
        }
        n = "*" == r;
      }
      return i("comment", "comment");
    }
    function L(e, t) {
      for (var r, n = !1; null != (r = e.next()); ) {
        if (!n && ("`" == r || ("$" == r && e.eat("{")))) {
          t.tokenize = d;
          break;
        }
        n = !n && "\\" == r;
      }
      return i("quasi", "string-2", e.current());
    }
    function Q(e, t) {
      t.fatArrowAt && (t.fatArrowAt = null);
      var r = e.string.indexOf("=>", e.start);
      if (!(r < 0)) {
        !u ||
          ((n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
            e.string.slice(e.start, r)
          )) &&
            (r = n.index));
        for (var n, a = 0, i = !1, o = r - 1; 0 <= o; --o) {
          var c = e.string.charAt(o),
            s = "([{}])".indexOf(c);
          if (0 <= s && s < 3) {
            if (!a) {
              ++o;
              break;
            }
            if (0 == --a) {
              "(" == c && (i = !0);
              break;
            }
          } else if (3 <= s && s < 6) ++a;
          else if (B.test(c)) i = !0;
          else if (/["'\/`]/.test(c))
            for (; ; --o) {
              if (0 == o) return;
              if (
                e.string.charAt(o - 1) == c &&
                "\\" != e.string.charAt(o - 2)
              ) {
                o--;
                break;
              }
            }
          else if (i && !a) {
            ++o;
            break;
          }
        }
        i && !a && (t.fatArrowAt = o);
      }
    }
    var R = {
      atom: !0,
      number: !0,
      variable: !0,
      string: !0,
      regexp: !0,
      this: !0,
      import: !0,
      "jsonld-keyword": !0,
    };
    function X(e, t, r, n, a, i) {
      (this.indented = e),
        (this.column = t),
        (this.type = r),
        (this.prev = a),
        (this.info = i),
        null != n && (this.align = n);
    }
    function Y(e, t, r, n, a) {
      var i = e.cc;
      for (
        c.state = e,
          c.stream = a,
          c.marked = null,
          c.cc = i,
          c.style = t,
          e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
        ;

      )
        if ((i.length ? i.pop() : o ? x : b)(r, n)) {
          for (; i.length && i[i.length - 1].lex; ) i.pop()();
          return c.marked
            ? c.marked
            : "variable" == r &&
              (function (e, t) {
                if (W) {
                  for (var r = e.localVars; r; r = r.next)
                    if (r.name == t) return 1;
                  for (var n = e.context; n; n = n.prev)
                    for (r = n.vars; r; r = r.next) if (r.name == t) return 1;
                }
              })(e, n)
            ? "variable-2"
            : t;
        }
    }
    var c = { state: null, column: null, marked: null, cc: null };
    function s() {
      for (var e = arguments.length - 1; 0 <= e; e--) c.cc.push(arguments[e]);
    }
    function p() {
      return s.apply(null, arguments), !0;
    }
    function Z(e, t) {
      for (var r = t; r; r = r.next) if (r.name == e) return 1;
    }
    function a(e) {
      var t = c.state;
      if (((c.marked = "def"), W)) {
        if (t.context)
          if ("var" == t.lexical.info && t.context && t.context.block) {
            var r = (function e(t, r) {
              {
                var n;
                return r
                  ? r.block
                    ? (n = e(t, r.prev))
                      ? n == r.prev
                        ? r
                        : new te(n, r.vars, !0)
                      : null
                    : Z(t, r.vars)
                    ? r
                    : new te(r.prev, new re(t, r.vars), !1)
                  : null;
              }
            })(e, t.context);
            if (null != r) return void (t.context = r);
          } else if (!Z(e, t.localVars))
            return void (t.localVars = new re(e, t.localVars));
        l.globalVars &&
          !Z(e, t.globalVars) &&
          (t.globalVars = new re(e, t.globalVars));
      }
    }
    function ee(e) {
      return (
        "public" == e ||
        "private" == e ||
        "protected" == e ||
        "abstract" == e ||
        "readonly" == e
      );
    }
    function te(e, t, r) {
      (this.prev = e), (this.vars = t), (this.block = r);
    }
    function re(e, t) {
      (this.name = e), (this.next = t);
    }
    var ne = new re("this", new re("arguments", null));
    function m() {
      (c.state.context = new te(c.state.context, c.state.localVars, !1)),
        (c.state.localVars = ne);
    }
    function ae() {
      (c.state.context = new te(c.state.context, c.state.localVars, !0)),
        (c.state.localVars = null);
    }
    function k() {
      (c.state.localVars = c.state.context.vars),
        (c.state.context = c.state.context.prev);
    }
    function v(n, a) {
      function e() {
        var e = c.state,
          t = e.indented;
        if ("stat" == e.lexical.type) t = e.lexical.indented;
        else
          for (var r = e.lexical; r && ")" == r.type && r.align; r = r.prev)
            t = r.indented;
        e.lexical = new X(t, c.stream.column(), n, null, e.lexical, a);
      }
      return (e.lex = !0), e;
    }
    function y() {
      var e = c.state;
      e.lexical.prev &&
        (")" == e.lexical.type && (e.indented = e.lexical.indented),
        (e.lexical = e.lexical.prev));
    }
    function w(r) {
      return function e(t) {
        return t == r
          ? p()
          : ";" == r || "}" == t || ")" == t || "]" == t
          ? s()
          : p(e);
      };
    }
    function b(e, t) {
      return "var" == e
        ? p(v("vardef", t), qe, w(";"), y)
        : "keyword a" == e
        ? p(v("form"), oe, b, y)
        : "keyword b" == e
        ? p(v("form"), b, y)
        : "keyword d" == e
        ? c.stream.match(/^\s*$/, !1)
          ? p()
          : p(v("stat"), g, w(";"), y)
        : "debugger" == e
        ? p(w(";"))
        : "{" == e
        ? p(v("}"), ae, be, y, k)
        : ";" == e
        ? p()
        : "if" == e
        ? ("else" == c.state.lexical.info &&
            c.state.cc[c.state.cc.length - 1] == y &&
            c.state.cc.pop()(),
          p(v("form"), oe, b, y, Oe))
        : "function" == e
        ? p(q)
        : "for" == e
        ? p(v("form"), ae, Pe, b, k, y)
        : "class" == e || (u && "interface" == t)
        ? ((c.marked = "keyword"), p(v("form", "class" == e ? e : t), Fe, y))
        : "variable" == e
        ? u && "declare" == t
          ? ((c.marked = "keyword"), p(b))
          : u &&
            ("module" == t || "enum" == t || "type" == t) &&
            c.stream.match(/^\s*\w/, !1)
          ? ((c.marked = "keyword"),
            "enum" == t
              ? p(Ze)
              : "type" == t
              ? p(We, w("operator"), z, w(";"))
              : p(v("form"), T, w("{"), v("}"), be, y, y))
          : u && "namespace" == t
          ? ((c.marked = "keyword"), p(v("form"), x, b, y))
          : u && "abstract" == t
          ? ((c.marked = "keyword"), p(b))
          : p(v("stat"), me)
        : "switch" == e
        ? p(v("form"), oe, w("{"), v("}", "switch"), ae, be, y, y, k)
        : "case" == e
        ? p(x, w(":"))
        : "default" == e
        ? p(w(":"))
        : "catch" == e
        ? p(v("form"), m, ie, b, y, k)
        : "export" == e
        ? p(v("stat"), Ge, y)
        : "import" == e
        ? p(v("stat"), Ke, y)
        : "async" == e
        ? p(b)
        : "@" == t
        ? p(x, b)
        : s(v("stat"), x, w(";"), y);
    }
    function ie(e) {
      if ("(" == e) return p(S, w(")"));
    }
    function x(e, t) {
      return ce(e, t, !1);
    }
    function h(e, t) {
      return ce(e, t, !0);
    }
    function oe(e) {
      return "(" != e ? s() : p(v(")"), g, w(")"), y);
    }
    function ce(e, t, r) {
      if (c.state.fatArrowAt == c.stream.start) {
        var n = r ? fe : le;
        if ("(" == e) return p(m, v(")"), V(S, ")"), y, w("=>"), n, k);
        if ("variable" == e) return s(m, T, w("=>"), n, k);
      }
      var a,
        n = r ? M : j;
      return R.hasOwnProperty(e)
        ? p(n)
        : "function" == e
        ? p(q, n)
        : "class" == e || (u && "interface" == t)
        ? ((c.marked = "keyword"), p(v("form"), Be, y))
        : "keyword c" == e || "async" == e
        ? p(r ? h : x)
        : "(" == e
        ? p(v(")"), g, w(")"), y, n)
        : "operator" == e || "spread" == e
        ? p(r ? h : x)
        : "[" == e
        ? p(v("]"), Ye, y, n)
        : "{" == e
        ? we(ve, "}", null, n)
        : "quasi" == e
        ? s(se, n)
        : "new" == e
        ? p(
            ((a = r),
            function (e) {
              return "." == e
                ? p(a ? pe : de)
                : "variable" == e && u
                ? p(Ie, a ? M : j)
                : s(a ? h : x);
            })
          )
        : p();
    }
    function g(e) {
      return e.match(/[;\}\)\],]/) ? s() : s(x);
    }
    function j(e, t) {
      return "," == e ? p(g) : M(e, t, !1);
    }
    function M(e, t, r) {
      var n = 0 == r ? j : M,
        a = 0 == r ? x : h;
      return "=>" == e
        ? p(m, r ? fe : le, k)
        : "operator" == e
        ? /\+\+|--/.test(t) || (u && "!" == t)
          ? p(n)
          : u && "<" == t && c.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
          ? p(v(">"), V(z, ">"), y, n)
          : "?" == t
          ? p(x, w(":"), a)
          : p(a)
        : "quasi" == e
        ? s(se, n)
        : ";" != e
        ? "(" == e
          ? we(h, ")", "call", n)
          : "." == e
          ? p(ke, n)
          : "[" == e
          ? p(v("]"), g, w("]"), y, n)
          : u && "as" == t
          ? ((c.marked = "keyword"), p(z, n))
          : "regexp" == e
          ? ((c.state.lastType = c.marked = "operator"),
            c.stream.backUp(c.stream.pos - c.stream.start - 1),
            p(a))
          : void 0
        : void 0;
    }
    function se(e, t) {
      return "quasi" != e
        ? s()
        : "${" != t.slice(t.length - 2)
        ? p(se)
        : p(g, ue);
    }
    function ue(e) {
      if ("}" == e)
        return (c.marked = "string-2"), (c.state.tokenize = L), p(se);
    }
    function le(e) {
      return Q(c.stream, c.state), s("{" == e ? b : x);
    }
    function fe(e) {
      return Q(c.stream, c.state), s("{" == e ? b : h);
    }
    function de(e, t) {
      if ("target" == t) return (c.marked = "keyword"), p(j);
    }
    function pe(e, t) {
      if ("target" == t) return (c.marked = "keyword"), p(M);
    }
    function me(e) {
      return ":" == e ? p(y, b) : s(j, w(";"), y);
    }
    function ke(e) {
      if ("variable" == e) return (c.marked = "property"), p();
    }
    function ve(e, t) {
      return "async" == e
        ? ((c.marked = "property"), p(ve))
        : "variable" != e && "keyword" != c.style
        ? "number" == e || "string" == e
          ? ((c.marked = U ? "property" : c.style + " property"), p(A))
          : "jsonld-keyword" == e
          ? p(A)
          : u && ee(t)
          ? ((c.marked = "keyword"), p(ve))
          : "[" == e
          ? p(x, E, w("]"), A)
          : "spread" == e
          ? p(h, A)
          : "*" == t
          ? ((c.marked = "keyword"), p(ve))
          : ":" == e
          ? s(A)
          : void 0
        : ((c.marked = "property"),
          "get" == t || "set" == t
            ? p(ye)
            : (u &&
                c.state.fatArrowAt == c.stream.start &&
                (e = c.stream.match(/^\s*:\s*/, !1)) &&
                (c.state.fatArrowAt = c.stream.pos + e[0].length),
              p(A)));
    }
    function ye(e) {
      return "variable" != e ? s(A) : ((c.marked = "property"), p(q));
    }
    function A(e) {
      return ":" == e ? p(h) : "(" == e ? s(q) : void 0;
    }
    function V(n, a, i) {
      function o(e, t) {
        var r;
        return (i ? -1 < i.indexOf(e) : "," == e)
          ? ("call" == (r = c.state.lexical).info && (r.pos = (r.pos || 0) + 1),
            p(function (e, t) {
              return e == a || t == a ? s() : s(n);
            }, o))
          : e == a || t == a
          ? p()
          : i && -1 < i.indexOf(";")
          ? s(n)
          : p(w(a));
      }
      return function (e, t) {
        return e == a || t == a ? p() : s(n, o);
      };
    }
    function we(e, t, r) {
      for (var n = 3; n < arguments.length; n++) c.cc.push(arguments[n]);
      return p(v(t, r), V(e, t), y);
    }
    function be(e) {
      return "}" == e ? p() : s(b, be);
    }
    function E(e, t) {
      if (u) return ":" == e ? p(z) : "?" == t ? p(E) : void 0;
    }
    function xe(e, t) {
      if (u && (":" == e || "in" == t)) return p(z);
    }
    function he(e) {
      if (u && ":" == e)
        return c.stream.match(/^\s*\w+\s+is\b/, !1) ? p(x, ge, z) : p(z);
    }
    function ge(e, t) {
      if ("is" == t) return (c.marked = "keyword"), p();
    }
    function z(e, t) {
      return "keyof" == t || "typeof" == t || "infer" == t || "readonly" == t
        ? ((c.marked = "keyword"), p("typeof" == t ? h : z))
        : "variable" == e || "void" == t
        ? ((c.marked = "type"), p(I))
        : "|" == t || "&" == t
        ? p(z)
        : "string" == e || "number" == e || "atom" == e
        ? p(I)
        : "[" == e
        ? p(v("]"), V(z, "]", ","), y, I)
        : "{" == e
        ? p(v("}"), Me, y, I)
        : "(" == e
        ? p(V(ze, ")"), je, I)
        : "<" == e
        ? p(V(z, ">"), z)
        : "quasi" == e
        ? s(Ve, I)
        : void 0;
    }
    function je(e) {
      if ("=>" == e) return p(z);
    }
    function Me(e) {
      return e.match(/[\}\)\]]/)
        ? p()
        : "," == e || ";" == e
        ? p(Me)
        : s(Ae, Me);
    }
    function Ae(e, t) {
      return "variable" == e || "keyword" == c.style
        ? ((c.marked = "property"), p(Ae))
        : "?" == t || "number" == e || "string" == e
        ? p(Ae)
        : ":" == e
        ? p(z)
        : "[" == e
        ? p(w("variable"), xe, w("]"), Ae)
        : "(" == e
        ? s(C, Ae)
        : e.match(/[;\}\)\],]/)
        ? void 0
        : p();
    }
    function Ve(e, t) {
      return "quasi" != e
        ? s()
        : "${" != t.slice(t.length - 2)
        ? p(Ve)
        : p(z, Ee);
    }
    function Ee(e) {
      if ("}" == e)
        return (c.marked = "string-2"), (c.state.tokenize = L), p(Ve);
    }
    function ze(e, t) {
      return ("variable" == e && c.stream.match(/^\s*[?:]/, !1)) || "?" == t
        ? p(ze)
        : ":" == e
        ? p(z)
        : "spread" == e
        ? p(ze)
        : s(z);
    }
    function I(e, t) {
      return "<" == t
        ? p(v(">"), V(z, ">"), y, I)
        : "|" == t || "." == e || "&" == t
        ? p(z)
        : "[" == e
        ? p(z, w("]"), I)
        : "extends" == t || "implements" == t
        ? ((c.marked = "keyword"), p(z))
        : "?" == t
        ? p(z, w(":"), z)
        : void 0;
    }
    function Ie(e, t) {
      if ("<" == t) return p(v(">"), V(z, ">"), y, I);
    }
    function Te() {
      return s(z, $e);
    }
    function $e(e, t) {
      if ("=" == t) return p(z);
    }
    function qe(e, t) {
      return "enum" == t ? ((c.marked = "keyword"), p(Ze)) : s(T, E, $, _e);
    }
    function T(e, t) {
      return u && ee(t)
        ? ((c.marked = "keyword"), p(T))
        : "variable" == e
        ? (a(t), p())
        : "spread" == e
        ? p(T)
        : "[" == e
        ? we(Se, "]")
        : "{" == e
        ? we(Ce, "}")
        : void 0;
    }
    function Ce(e, t) {
      return "variable" != e || c.stream.match(/^\s*:/, !1)
        ? ("variable" == e && (c.marked = "property"),
          "spread" == e
            ? p(T)
            : "}" == e
            ? s()
            : "[" == e
            ? p(x, w("]"), w(":"), Ce)
            : p(w(":"), T, $))
        : (a(t), p($));
    }
    function Se() {
      return s(T, $);
    }
    function $(e, t) {
      if ("=" == t) return p(h);
    }
    function _e(e) {
      if ("," == e) return p(qe);
    }
    function Oe(e, t) {
      if ("keyword b" == e && "else" == t) return p(v("form", "else"), b, y);
    }
    function Pe(e, t) {
      return "await" == t ? p(Pe) : "(" == e ? p(v(")"), Ne, y) : void 0;
    }
    function Ne(e) {
      return "var" == e ? p(qe, Ue) : ("variable" == e ? p : s)(Ue);
    }
    function Ue(e, t) {
      return ")" == e
        ? p()
        : ";" == e
        ? p(Ue)
        : "in" == t || "of" == t
        ? ((c.marked = "keyword"), p(x, Ue))
        : s(x, Ue);
    }
    function q(e, t) {
      return "*" == t
        ? ((c.marked = "keyword"), p(q))
        : "variable" == e
        ? (a(t), p(q))
        : "(" == e
        ? p(m, v(")"), V(S, ")"), y, he, b, k)
        : u && "<" == t
        ? p(v(">"), V(Te, ">"), y, q)
        : void 0;
    }
    function C(e, t) {
      return "*" == t
        ? ((c.marked = "keyword"), p(C))
        : "variable" == e
        ? (a(t), p(C))
        : "(" == e
        ? p(m, v(")"), V(S, ")"), y, he, k)
        : u && "<" == t
        ? p(v(">"), V(Te, ">"), y, C)
        : void 0;
    }
    function We(e, t) {
      return "keyword" == e || "variable" == e
        ? ((c.marked = "type"), p(We))
        : "<" == t
        ? p(v(">"), V(Te, ">"), y)
        : void 0;
    }
    function S(e, t) {
      return (
        "@" == t && p(x, S),
        "spread" == e
          ? p(S)
          : u && ee(t)
          ? ((c.marked = "keyword"), p(S))
          : u && "this" == e
          ? p(E, $)
          : s(T, E, $)
      );
    }
    function Be(e, t) {
      return ("variable" == e ? Fe : He)(e, t);
    }
    function Fe(e, t) {
      if ("variable" == e) return a(t), p(He);
    }
    function He(e, t) {
      return "<" == t
        ? p(v(">"), V(Te, ">"), y, He)
        : "extends" == t || "implements" == t || (u && "," == e)
        ? ("implements" == t && (c.marked = "keyword"), p(u ? z : x, He))
        : "{" == e
        ? p(v("}"), _, y)
        : void 0;
    }
    function _(e, t) {
      return "async" == e ||
        ("variable" == e &&
          ("static" == t || "get" == t || "set" == t || (u && ee(t))) &&
          c.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
        ? ((c.marked = "keyword"), p(_))
        : "variable" == e || "keyword" == c.style
        ? ((c.marked = "property"), p(De, _))
        : "number" == e || "string" == e
        ? p(De, _)
        : "[" == e
        ? p(x, E, w("]"), De, _)
        : "*" == t
        ? ((c.marked = "keyword"), p(_))
        : u && "(" == e
        ? s(C, _)
        : ";" == e || "," == e
        ? p(_)
        : "}" == e
        ? p()
        : "@" == t
        ? p(x, _)
        : void 0;
    }
    function De(e, t) {
      if ("!" == t) return p(De);
      if ("?" == t) return p(De);
      if (":" == e) return p(z, $);
      if ("=" == t) return p(h);
      e = c.state.lexical.prev;
      return s(e && "interface" == e.info ? C : q);
    }
    function Ge(e, t) {
      return "*" == t
        ? ((c.marked = "keyword"), p(Xe, w(";")))
        : "default" == t
        ? ((c.marked = "keyword"), p(x, w(";")))
        : "{" == e
        ? p(V(Je, "}"), Xe, w(";"))
        : s(b);
    }
    function Je(e, t) {
      return "as" == t
        ? ((c.marked = "keyword"), p(w("variable")))
        : "variable" == e
        ? s(h, Je)
        : void 0;
    }
    function Ke(e) {
      return "string" == e
        ? p()
        : "(" == e
        ? s(x)
        : "." == e
        ? s(j)
        : s(Le, Qe, Xe);
    }
    function Le(e, t) {
      return "{" == e
        ? we(Le, "}")
        : ("variable" == e && a(t), "*" == t && (c.marked = "keyword"), p(Re));
    }
    function Qe(e) {
      if ("," == e) return p(Le, Qe);
    }
    function Re(e, t) {
      if ("as" == t) return (c.marked = "keyword"), p(Le);
    }
    function Xe(e, t) {
      if ("from" == t) return (c.marked = "keyword"), p(x);
    }
    function Ye(e) {
      return "]" == e ? p() : s(V(h, "]"));
    }
    function Ze() {
      return s(v("form"), T, w("{"), v("}"), V(et, "}"), y, y);
    }
    function et() {
      return s(T, $);
    }
    function tt(e, t, r) {
      return (
        (t.tokenize == d &&
          /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
            t.lastType
          )) ||
        ("quasi" == t.lastType &&
          /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
      );
    }
    return (
      (m.lex = ae.lex = !0),
      (y.lex = k.lex = !0),
      {
        startState: function (e) {
          e = {
            tokenize: d,
            lastType: "sof",
            cc: [],
            lexical: new X((e || 0) - f, 0, "block", !1),
            localVars: l.localVars,
            context: l.localVars && new te(null, null, !1),
            indented: e || 0,
          };
          return (
            l.globalVars &&
              "object" == typeof l.globalVars &&
              (e.globalVars = l.globalVars),
            e
          );
        },
        token: function (e, t) {
          if (
            (e.sol() &&
              (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1),
              (t.indented = e.indentation()),
              Q(e, t)),
            t.tokenize != K && e.eatSpace())
          )
            return null;
          var r = t.tokenize(e, t);
          return "comment" == H
            ? r
            : ((t.lastType =
                "operator" != H || ("++" != D && "--" != D) ? H : "incdec"),
              Y(t, r, H, D, e));
        },
        indent: function (e, t) {
          if (e.tokenize == K || e.tokenize == L) return rt.Pass;
          if (e.tokenize != d) return 0;
          var r,
            n = t && t.charAt(0),
            a = e.lexical;
          if (!/^\s*else\b/.test(t))
            for (var i = e.cc.length - 1; 0 <= i; --i) {
              var o = e.cc[i];
              if (o == y) a = a.prev;
              else if (o != Oe && o != k) break;
            }
          for (
            ;
            ("stat" == a.type || "form" == a.type) &&
            ("}" == n ||
              ((r = e.cc[e.cc.length - 1]) &&
                (r == j || r == M) &&
                !/^[,\.=+\-*:?[\(]/.test(t)));

          )
            a = a.prev;
          var c,
            s = (a = N && ")" == a.type && "stat" == a.prev.type ? a.prev : a)
              .type,
            u = n == s;
          return "vardef" == s
            ? a.indented +
                ("operator" == e.lastType || "," == e.lastType
                  ? a.info.length + 1
                  : 0)
            : "form" == s && "{" == n
            ? a.indented
            : "form" == s
            ? a.indented + f
            : "stat" == s
            ? a.indented +
              ((s = t),
              "operator" == (c = e).lastType ||
              "," == c.lastType ||
              G.test(s.charAt(0)) ||
              /[,.]/.test(s.charAt(0))
                ? N || f
                : 0)
            : "switch" != a.info || u || 0 == l.doubleIndentSwitch
            ? a.align
              ? a.column + (u ? 0 : 1)
              : a.indented + (u ? 0 : f)
            : a.indented + (/^(?:case|default)\b/.test(t) ? f : 2 * f);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: o ? null : "/*",
        blockCommentEnd: o ? null : "*/",
        blockCommentContinue: o ? null : " * ",
        lineComment: o ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: o ? "json" : "javascript",
        jsonldMode: U,
        jsonMode: o,
        expressionAllowed: tt,
        skipExpression: function (e) {
          Y(e, "atom", "atom", "true", new rt.StringStream("", 2, null));
        },
      }
    );
  }),
    rt.registerHelper("wordChars", "javascript", /[\w$]/),
    rt.defineMIME("text/javascript", "javascript"),
    rt.defineMIME("text/ecmascript", "javascript"),
    rt.defineMIME("application/javascript", "javascript"),
    rt.defineMIME("application/x-javascript", "javascript"),
    rt.defineMIME("application/ecmascript", "javascript"),
    rt.defineMIME("application/json", { name: "javascript", json: !0 }),
    rt.defineMIME("application/x-json", { name: "javascript", json: !0 }),
    rt.defineMIME("application/manifest+json", {
      name: "javascript",
      json: !0,
    }),
    rt.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
    rt.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
    rt.defineMIME("application/typescript", {
      name: "javascript",
      typescript: !0,
    });
});

/*
 * codemirror
 * https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/css/css.min.js
 */
!(function (e) {
  "object" == typeof exports && "object" == typeof module
    ? e(require("../../lib/codemirror"))
    : "function" == typeof define && define.amd
    ? define(["../../lib/codemirror"], e)
    : e(CodeMirror);
})(function (T) {
  "use strict";
  function e(e) {
    for (var t = {}, r = 0; r < e.length; ++r) t[e[r].toLowerCase()] = !0;
    return t;
  }
  T.defineMode("css", function (e, t) {
    var a,
      i,
      r = t.inline,
      n = (t.propertyKeywords || (t = T.resolveMode("text/css")), e.indentUnit),
      l = t.tokenHooks,
      o = t.documentTypes || {},
      s = t.mediaTypes || {},
      c = t.mediaFeatures || {},
      d = t.mediaValueKeywords || {},
      p = t.propertyKeywords || {},
      u = t.nonStandardPropertyKeywords || {},
      m = t.fontProperties || {},
      g = t.counterDescriptors || {},
      b = t.colorKeywords || {},
      h = t.valueKeywords || {},
      f = t.allowNested,
      k = t.lineComment,
      y = !0 === t.supportsAtComponent,
      w = !1 !== e.highlightNonStandardPropertyKeywords;
    function v(e, t) {
      return (a = t), e;
    }
    function x(i) {
      return function (e, t) {
        for (var r, o = !1; null != (r = e.next()); ) {
          if (r == i && !o) {
            ")" == i && e.backUp(1);
            break;
          }
          o = !o && "\\" == r;
        }
        return (
          (r != i && (o || ")" == i)) || (t.tokenize = null), (a = "string")
        );
      };
    }
    function z(e, t) {
      return (
        e.next(),
        e.match(/^\s*[\"\')]/, !1)
          ? (t.tokenize = null)
          : (t.tokenize = x(")")),
        (a = "("),
        null
      );
    }
    function j(e, t, r) {
      (this.type = e), (this.indent = t), (this.prev = r);
    }
    function P(e, t, r, o) {
      return (
        (e.context = new j(r, t.indentation() + (!1 === o ? 0 : n), e.context)),
        r
      );
    }
    function K(e) {
      return e.context.prev && (e.context = e.context.prev), e.context.type;
    }
    function q(e, t, r) {
      return _[r.context.type](e, t, r);
    }
    function C(e, t, r, o) {
      for (var i = o || 1; 0 < i; i--) r.context = r.context.prev;
      return q(e, t, r);
    }
    function B(e) {
      e = e.current().toLowerCase();
      i = h.hasOwnProperty(e)
        ? "atom"
        : b.hasOwnProperty(e)
        ? "keyword"
        : "variable";
    }
    var _ = {
      top: function (e, t, r) {
        if ("{" == e) return P(r, t, "block");
        if ("}" == e && r.context.prev) return K(r);
        if (y && /@component/i.test(e)) return P(r, t, "atComponentBlock");
        if (/^@(-moz-)?document$/i.test(e)) return P(r, t, "documentTypes");
        if (/^@(media|supports|(-moz-)?document|import)$/i.test(e))
          return P(r, t, "atBlock");
        if (/^@(font-face|counter-style)/i.test(e))
          return (r.stateArg = e), "restricted_atBlock_before";
        if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
        if (e && "@" == e.charAt(0)) return P(r, t, "at");
        if ("hash" == e) i = "builtin";
        else if ("word" == e) i = "tag";
        else {
          if ("variable-definition" == e) return "maybeprop";
          if ("interpolation" == e) return P(r, t, "interpolation");
          if (":" == e) return "pseudo";
          if (f && "(" == e) return P(r, t, "parens");
        }
        return r.context.type;
      },
      block: function (e, t, r) {
        var o;
        return "word" == e
          ? ((o = t.current().toLowerCase()),
            p.hasOwnProperty(o)
              ? ((i = "property"), "maybeprop")
              : u.hasOwnProperty(o)
              ? ((i = w ? "string-2" : "property"), "maybeprop")
              : f
              ? ((i = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag"),
                "block")
              : ((i += " error"), "maybeprop"))
          : "meta" == e
          ? "block"
          : f || ("hash" != e && "qualifier" != e)
          ? _.top(e, t, r)
          : ((i = "error"), "block");
      },
      maybeprop: function (e, t, r) {
        return ":" == e ? P(r, t, "prop") : q(e, t, r);
      },
      prop: function (e, t, r) {
        if (";" == e) return K(r);
        if ("{" == e && f) return P(r, t, "propBlock");
        if ("}" == e || "{" == e) return C(e, t, r);
        if ("(" == e) return P(r, t, "parens");
        if (
          "hash" != e ||
          /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
            t.current()
          )
        ) {
          if ("word" == e) B(t);
          else if ("interpolation" == e) return P(r, t, "interpolation");
        } else i += " error";
        return "prop";
      },
      propBlock: function (e, t, r) {
        return "}" == e
          ? K(r)
          : "word" == e
          ? ((i = "property"), "maybeprop")
          : r.context.type;
      },
      parens: function (e, t, r) {
        return "{" == e || "}" == e
          ? C(e, t, r)
          : ")" == e
          ? K(r)
          : "(" == e
          ? P(r, t, "parens")
          : "interpolation" == e
          ? P(r, t, "interpolation")
          : ("word" == e && B(t), "parens");
      },
      pseudo: function (e, t, r) {
        return "meta" == e
          ? "pseudo"
          : "word" == e
          ? ((i = "variable-3"), r.context.type)
          : q(e, t, r);
      },
      documentTypes: function (e, t, r) {
        return "word" == e && o.hasOwnProperty(t.current())
          ? ((i = "tag"), r.context.type)
          : _.atBlock(e, t, r);
      },
      atBlock: function (e, t, r) {
        return "(" == e
          ? P(r, t, "atBlock_parens")
          : "}" == e || ";" == e
          ? C(e, t, r)
          : "{" == e
          ? K(r) && P(r, t, f ? "block" : "top")
          : "interpolation" == e
          ? P(r, t, "interpolation")
          : ("word" == e &&
              ((e = t.current().toLowerCase()),
              (i =
                "only" == e || "not" == e || "and" == e || "or" == e
                  ? "keyword"
                  : s.hasOwnProperty(e)
                  ? "attribute"
                  : c.hasOwnProperty(e)
                  ? "property"
                  : d.hasOwnProperty(e)
                  ? "keyword"
                  : p.hasOwnProperty(e)
                  ? "property"
                  : u.hasOwnProperty(e)
                  ? w
                    ? "string-2"
                    : "property"
                  : h.hasOwnProperty(e)
                  ? "atom"
                  : b.hasOwnProperty(e)
                  ? "keyword"
                  : "error")),
            r.context.type);
      },
      atComponentBlock: function (e, t, r) {
        return "}" == e
          ? C(e, t, r)
          : "{" == e
          ? K(r) && P(r, t, f ? "block" : "top", !1)
          : ("word" == e && (i = "error"), r.context.type);
      },
      atBlock_parens: function (e, t, r) {
        return ")" == e
          ? K(r)
          : "{" == e || "}" == e
          ? C(e, t, r, 2)
          : _.atBlock(e, t, r);
      },
      restricted_atBlock_before: function (e, t, r) {
        return "{" == e
          ? P(r, t, "restricted_atBlock")
          : "word" == e && "@counter-style" == r.stateArg
          ? ((i = "variable"), "restricted_atBlock_before")
          : q(e, t, r);
      },
      restricted_atBlock: function (e, t, r) {
        return "}" == e
          ? ((r.stateArg = null), K(r))
          : "word" == e
          ? ((i =
              ("@font-face" == r.stateArg &&
                !m.hasOwnProperty(t.current().toLowerCase())) ||
              ("@counter-style" == r.stateArg &&
                !g.hasOwnProperty(t.current().toLowerCase()))
                ? "error"
                : "property"),
            "maybeprop")
          : "restricted_atBlock";
      },
      keyframes: function (e, t, r) {
        return "word" == e
          ? ((i = "variable"), "keyframes")
          : "{" == e
          ? P(r, t, "top")
          : q(e, t, r);
      },
      at: function (e, t, r) {
        return ";" == e
          ? K(r)
          : "{" == e || "}" == e
          ? C(e, t, r)
          : ("word" == e ? (i = "tag") : "hash" == e && (i = "builtin"), "at");
      },
      interpolation: function (e, t, r) {
        return "}" == e
          ? K(r)
          : "{" == e || ";" == e
          ? C(e, t, r)
          : ("word" == e
              ? (i = "variable")
              : "variable" != e && "(" != e && ")" != e && (i = "error"),
            "interpolation");
      },
    };
    return {
      startState: function (e) {
        return {
          tokenize: null,
          state: r ? "block" : "top",
          stateArg: null,
          context: new j(r ? "block" : "top", e || 0, null),
        };
      },
      token: function (e, t) {
        if (!t.tokenize && e.eatSpace()) return null;
        var r = (
          t.tokenize ||
          function (e, t) {
            var r = e.next();
            if (l[r]) {
              var o = l[r](e, t);
              if (!1 !== o) return o;
            }
            return "@" == r
              ? (e.eatWhile(/[\w\\\-]/), v("def", e.current()))
              : "=" == r || (("~" == r || "|" == r) && e.eat("="))
              ? ((a = "compare"), null)
              : '"' == r || "'" == r
              ? ((t.tokenize = x(r)), t.tokenize(e, t))
              : "#" == r
              ? (e.eatWhile(/[\w\\\-]/), (a = "hash"), "atom")
              : "!" == r
              ? (e.match(/^\s*\w*/), (a = "important"), "keyword")
              : /\d/.test(r) || ("." == r && e.eat(/\d/))
              ? (e.eatWhile(/[\w.%]/), (a = "unit"), "number")
              : "-" === r
              ? /[\d.]/.test(e.peek())
                ? (e.eatWhile(/[\w.%]/), (a = "unit"), "number")
                : e.match(/^-[\w\\\-]*/)
                ? (e.eatWhile(/[\w\\\-]/),
                  (a = e.match(/^\s*:/, !1)
                    ? "variable-definition"
                    : "variable"),
                  "variable-2")
                : e.match(/^\w+-/)
                ? (a = "meta")
                : void 0
              : /[,+>*\/]/.test(r)
              ? ((a = "select-op"), null)
              : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i)
              ? (a = "qualifier")
              : /[:;{}\[\]\(\)]/.test(r)
              ? v(null, r)
              : e.match(/^[\w-.]+(?=\()/)
              ? (/^(url(-prefix)?|domain|regexp)$/i.test(e.current()) &&
                  (t.tokenize = z),
                (a = "variable"),
                "variable callee")
              : /[\w\\\-]/.test(r)
              ? (e.eatWhile(/[\w\\\-]/), (a = "word"), "property")
              : (a = null);
          }
        )(e, t);
        return (
          r && "object" == typeof r && ((a = r[1]), (r = r[0])),
          (i = r),
          "comment" != a && (t.state = _[t.state](a, e, t)),
          i
        );
      },
      indent: function (e, t) {
        var e = e.context,
          t = t && t.charAt(0),
          r = e.indent;
        return (
          (e = "prop" != e.type || ("}" != t && ")" != t) ? e : e.prev).prev &&
            ("}" != t ||
            ("block" != e.type &&
              "top" != e.type &&
              "interpolation" != e.type &&
              "restricted_atBlock" != e.type)
              ? ((")" != t ||
                  ("parens" != e.type && "atBlock_parens" != e.type)) &&
                  ("{" != t || ("at" != e.type && "atBlock" != e.type))) ||
                (r = Math.max(0, e.indent - n))
              : (r = (e = e.prev).indent)),
          r
        );
      },
      electricChars: "}",
      blockCommentStart: "/*",
      blockCommentEnd: "*/",
      blockCommentContinue: " * ",
      lineComment: k,
      fold: "brace",
    };
  });
  var t = ["domain", "regexp", "url", "url-prefix"],
    r = e(t),
    o = [
      "all",
      "aural",
      "braille",
      "handheld",
      "print",
      "projection",
      "screen",
      "tty",
      "tv",
      "embossed",
    ],
    i = e(o),
    a = [
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "device-width",
      "min-device-width",
      "max-device-width",
      "device-height",
      "min-device-height",
      "max-device-height",
      "aspect-ratio",
      "min-aspect-ratio",
      "max-aspect-ratio",
      "device-aspect-ratio",
      "min-device-aspect-ratio",
      "max-device-aspect-ratio",
      "color",
      "min-color",
      "max-color",
      "color-index",
      "min-color-index",
      "max-color-index",
      "monochrome",
      "min-monochrome",
      "max-monochrome",
      "resolution",
      "min-resolution",
      "max-resolution",
      "scan",
      "grid",
      "orientation",
      "device-pixel-ratio",
      "min-device-pixel-ratio",
      "max-device-pixel-ratio",
      "pointer",
      "any-pointer",
      "hover",
      "any-hover",
      "prefers-color-scheme",
      "dynamic-range",
      "video-dynamic-range",
    ],
    n = e(a),
    l = [
      "landscape",
      "portrait",
      "none",
      "coarse",
      "fine",
      "on-demand",
      "hover",
      "interlace",
      "progressive",
      "dark",
      "light",
      "standard",
      "high",
    ],
    s = e(l),
    c = [
      "align-content",
      "align-items",
      "align-self",
      "alignment-adjust",
      "alignment-baseline",
      "all",
      "anchor-point",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "azimuth",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "binding",
      "bleed",
      "block-size",
      "bookmark-label",
      "bookmark-level",
      "bookmark-state",
      "bookmark-target",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "color",
      "color-profile",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "counter-increment",
      "counter-reset",
      "crop",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "drop-initial-after-adjust",
      "drop-initial-after-align",
      "drop-initial-before-adjust",
      "drop-initial-before-align",
      "drop-initial-size",
      "drop-initial-value",
      "elevation",
      "empty-cells",
      "fit",
      "fit-content",
      "fit-position",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "float-offset",
      "flow-from",
      "flow-into",
      "font",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-gap",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-gap",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "inline-box-align",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "justify-content",
      "justify-items",
      "justify-self",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "line-height-step",
      "line-stacking",
      "line-stacking-ruby",
      "line-stacking-shift",
      "line-stacking-strategy",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "marquee-direction",
      "marquee-loop",
      "marquee-play-count",
      "marquee-speed",
      "marquee-style",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "move-to",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "object-fit",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-style",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "page-policy",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pitch",
      "pitch-range",
      "place-content",
      "place-items",
      "place-self",
      "play-during",
      "position",
      "presentation-level",
      "punctuation-trim",
      "quotes",
      "region-break-after",
      "region-break-before",
      "region-break-inside",
      "region-fragment",
      "rendering-intent",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "richness",
      "right",
      "rotate",
      "rotation",
      "rotation-point",
      "row-gap",
      "ruby-align",
      "ruby-overhang",
      "ruby-position",
      "ruby-span",
      "scale",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-type",
      "shape-image-threshold",
      "shape-inside",
      "shape-margin",
      "shape-outside",
      "size",
      "speak",
      "speak-as",
      "speak-header",
      "speak-numeral",
      "speak-punctuation",
      "speech-rate",
      "stress",
      "string-set",
      "tab-size",
      "table-layout",
      "target",
      "target-name",
      "target-new",
      "target-position",
      "text-align",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-height",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-outline",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-size-adjust",
      "text-space-collapse",
      "text-transform",
      "text-underline-position",
      "text-wrap",
      "top",
      "touch-action",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "user-select",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
      "clip-path",
      "clip-rule",
      "mask",
      "enable-background",
      "filter",
      "flood-color",
      "flood-opacity",
      "lighting-color",
      "stop-color",
      "stop-opacity",
      "pointer-events",
      "color-interpolation",
      "color-interpolation-filters",
      "color-rendering",
      "fill",
      "fill-opacity",
      "fill-rule",
      "image-rendering",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "paint-order",
      "shape-rendering",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-rendering",
      "baseline-shift",
      "dominant-baseline",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "text-anchor",
      "writing-mode",
    ],
    d = e(c),
    p = [
      "accent-color",
      "aspect-ratio",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "content-visibility",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "overflow-anchor",
      "overscroll-behavior",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "scroll-snap-stop",
      "scrollbar-3d-light-color",
      "scrollbar-arrow-color",
      "scrollbar-base-color",
      "scrollbar-dark-shadow-color",
      "scrollbar-face-color",
      "scrollbar-highlight-color",
      "scrollbar-shadow-color",
      "scrollbar-track-color",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "shape-inside",
      "zoom",
    ],
    u = e(p),
    m = e([
      "font-display",
      "font-family",
      "src",
      "unicode-range",
      "font-variant",
      "font-feature-settings",
      "font-stretch",
      "font-weight",
      "font-style",
    ]),
    g = e([
      "additive-symbols",
      "fallback",
      "negative",
      "pad",
      "prefix",
      "range",
      "speak-as",
      "suffix",
      "symbols",
      "system",
    ]),
    b = [
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "black",
      "blanchedalmond",
      "blue",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
      "chartreuse",
      "chocolate",
      "coral",
      "cornflowerblue",
      "cornsilk",
      "crimson",
      "cyan",
      "darkblue",
      "darkcyan",
      "darkgoldenrod",
      "darkgray",
      "darkgreen",
      "darkgrey",
      "darkkhaki",
      "darkmagenta",
      "darkolivegreen",
      "darkorange",
      "darkorchid",
      "darkred",
      "darksalmon",
      "darkseagreen",
      "darkslateblue",
      "darkslategray",
      "darkslategrey",
      "darkturquoise",
      "darkviolet",
      "deeppink",
      "deepskyblue",
      "dimgray",
      "dimgrey",
      "dodgerblue",
      "firebrick",
      "floralwhite",
      "forestgreen",
      "fuchsia",
      "gainsboro",
      "ghostwhite",
      "gold",
      "goldenrod",
      "gray",
      "grey",
      "green",
      "greenyellow",
      "honeydew",
      "hotpink",
      "indianred",
      "indigo",
      "ivory",
      "khaki",
      "lavender",
      "lavenderblush",
      "lawngreen",
      "lemonchiffon",
      "lightblue",
      "lightcoral",
      "lightcyan",
      "lightgoldenrodyellow",
      "lightgray",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
      "lightslategrey",
      "lightsteelblue",
      "lightyellow",
      "lime",
      "limegreen",
      "linen",
      "magenta",
      "maroon",
      "mediumaquamarine",
      "mediumblue",
      "mediumorchid",
      "mediumpurple",
      "mediumseagreen",
      "mediumslateblue",
      "mediumspringgreen",
      "mediumturquoise",
      "mediumvioletred",
      "midnightblue",
      "mintcream",
      "mistyrose",
      "moccasin",
      "navajowhite",
      "navy",
      "oldlace",
      "olive",
      "olivedrab",
      "orange",
      "orangered",
      "orchid",
      "palegoldenrod",
      "palegreen",
      "paleturquoise",
      "palevioletred",
      "papayawhip",
      "peachpuff",
      "peru",
      "pink",
      "plum",
      "powderblue",
      "purple",
      "rebeccapurple",
      "red",
      "rosybrown",
      "royalblue",
      "saddlebrown",
      "salmon",
      "sandybrown",
      "seagreen",
      "seashell",
      "sienna",
      "silver",
      "skyblue",
      "slateblue",
      "slategray",
      "slategrey",
      "snow",
      "springgreen",
      "steelblue",
      "tan",
      "teal",
      "thistle",
      "tomato",
      "turquoise",
      "violet",
      "wheat",
      "white",
      "whitesmoke",
      "yellow",
      "yellowgreen",
    ],
    h = e(b),
    f = [
      "above",
      "absolute",
      "activeborder",
      "additive",
      "activecaption",
      "afar",
      "after-white-space",
      "ahead",
      "alias",
      "all",
      "all-scroll",
      "alphabetic",
      "alternate",
      "always",
      "amharic",
      "amharic-abegede",
      "antialiased",
      "appworkspace",
      "arabic-indic",
      "armenian",
      "asterisks",
      "attr",
      "auto",
      "auto-flow",
      "avoid",
      "avoid-column",
      "avoid-page",
      "avoid-region",
      "axis-pan",
      "background",
      "backwards",
      "baseline",
      "below",
      "bidi-override",
      "binary",
      "bengali",
      "blink",
      "block",
      "block-axis",
      "blur",
      "bold",
      "bolder",
      "border",
      "border-box",
      "both",
      "bottom",
      "break",
      "break-all",
      "break-word",
      "brightness",
      "bullets",
      "button",
      "buttonface",
      "buttonhighlight",
      "buttonshadow",
      "buttontext",
      "calc",
      "cambodian",
      "capitalize",
      "caps-lock-indicator",
      "caption",
      "captiontext",
      "caret",
      "cell",
      "center",
      "checkbox",
      "circle",
      "cjk-decimal",
      "cjk-earthly-branch",
      "cjk-heavenly-stem",
      "cjk-ideographic",
      "clear",
      "clip",
      "close-quote",
      "col-resize",
      "collapse",
      "color",
      "color-burn",
      "color-dodge",
      "column",
      "column-reverse",
      "compact",
      "condensed",
      "conic-gradient",
      "contain",
      "content",
      "contents",
      "content-box",
      "context-menu",
      "continuous",
      "contrast",
      "copy",
      "counter",
      "counters",
      "cover",
      "crop",
      "cross",
      "crosshair",
      "cubic-bezier",
      "currentcolor",
      "cursive",
      "cyclic",
      "darken",
      "dashed",
      "decimal",
      "decimal-leading-zero",
      "default",
      "default-button",
      "dense",
      "destination-atop",
      "destination-in",
      "destination-out",
      "destination-over",
      "devanagari",
      "difference",
      "disc",
      "discard",
      "disclosure-closed",
      "disclosure-open",
      "document",
      "dot-dash",
      "dot-dot-dash",
      "dotted",
      "double",
      "down",
      "drop-shadow",
      "e-resize",
      "ease",
      "ease-in",
      "ease-in-out",
      "ease-out",
      "element",
      "ellipse",
      "ellipsis",
      "embed",
      "end",
      "ethiopic",
      "ethiopic-abegede",
      "ethiopic-abegede-am-et",
      "ethiopic-abegede-gez",
      "ethiopic-abegede-ti-er",
      "ethiopic-abegede-ti-et",
      "ethiopic-halehame-aa-er",
      "ethiopic-halehame-aa-et",
      "ethiopic-halehame-am-et",
      "ethiopic-halehame-gez",
      "ethiopic-halehame-om-et",
      "ethiopic-halehame-sid-et",
      "ethiopic-halehame-so-et",
      "ethiopic-halehame-ti-er",
      "ethiopic-halehame-ti-et",
      "ethiopic-halehame-tig",
      "ethiopic-numeric",
      "ew-resize",
      "exclusion",
      "expanded",
      "extends",
      "extra-condensed",
      "extra-expanded",
      "fantasy",
      "fast",
      "fill",
      "fill-box",
      "fixed",
      "flat",
      "flex",
      "flex-end",
      "flex-start",
      "footnotes",
      "forwards",
      "from",
      "geometricPrecision",
      "georgian",
      "grayscale",
      "graytext",
      "grid",
      "groove",
      "gujarati",
      "gurmukhi",
      "hand",
      "hangul",
      "hangul-consonant",
      "hard-light",
      "hebrew",
      "help",
      "hidden",
      "hide",
      "higher",
      "highlight",
      "highlighttext",
      "hiragana",
      "hiragana-iroha",
      "horizontal",
      "hsl",
      "hsla",
      "hue",
      "hue-rotate",
      "icon",
      "ignore",
      "inactiveborder",
      "inactivecaption",
      "inactivecaptiontext",
      "infinite",
      "infobackground",
      "infotext",
      "inherit",
      "initial",
      "inline",
      "inline-axis",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "inline-table",
      "inset",
      "inside",
      "intrinsic",
      "invert",
      "italic",
      "japanese-formal",
      "japanese-informal",
      "justify",
      "kannada",
      "katakana",
      "katakana-iroha",
      "keep-all",
      "khmer",
      "korean-hangul-formal",
      "korean-hanja-formal",
      "korean-hanja-informal",
      "landscape",
      "lao",
      "large",
      "larger",
      "left",
      "level",
      "lighter",
      "lighten",
      "line-through",
      "linear",
      "linear-gradient",
      "lines",
      "list-item",
      "listbox",
      "listitem",
      "local",
      "logical",
      "loud",
      "lower",
      "lower-alpha",
      "lower-armenian",
      "lower-greek",
      "lower-hexadecimal",
      "lower-latin",
      "lower-norwegian",
      "lower-roman",
      "lowercase",
      "ltr",
      "luminosity",
      "malayalam",
      "manipulation",
      "match",
      "matrix",
      "matrix3d",
      "media-play-button",
      "media-slider",
      "media-sliderthumb",
      "media-volume-slider",
      "media-volume-sliderthumb",
      "medium",
      "menu",
      "menulist",
      "menulist-button",
      "menutext",
      "message-box",
      "middle",
      "min-intrinsic",
      "mix",
      "mongolian",
      "monospace",
      "move",
      "multiple",
      "multiple_mask_images",
      "multiply",
      "myanmar",
      "n-resize",
      "narrower",
      "ne-resize",
      "nesw-resize",
      "no-close-quote",
      "no-drop",
      "no-open-quote",
      "no-repeat",
      "none",
      "normal",
      "not-allowed",
      "nowrap",
      "ns-resize",
      "numbers",
      "numeric",
      "nw-resize",
      "nwse-resize",
      "oblique",
      "octal",
      "opacity",
      "open-quote",
      "optimizeLegibility",
      "optimizeSpeed",
      "oriya",
      "oromo",
      "outset",
      "outside",
      "outside-shape",
      "overlay",
      "overline",
      "padding",
      "padding-box",
      "painted",
      "page",
      "paused",
      "persian",
      "perspective",
      "pinch-zoom",
      "plus-darker",
      "plus-lighter",
      "pointer",
      "polygon",
      "portrait",
      "pre",
      "pre-line",
      "pre-wrap",
      "preserve-3d",
      "progress",
      "push-button",
      "radial-gradient",
      "radio",
      "read-only",
      "read-write",
      "read-write-plaintext-only",
      "rectangle",
      "region",
      "relative",
      "repeat",
      "repeating-linear-gradient",
      "repeating-radial-gradient",
      "repeating-conic-gradient",
      "repeat-x",
      "repeat-y",
      "reset",
      "reverse",
      "rgb",
      "rgba",
      "ridge",
      "right",
      "rotate",
      "rotate3d",
      "rotateX",
      "rotateY",
      "rotateZ",
      "round",
      "row",
      "row-resize",
      "row-reverse",
      "rtl",
      "run-in",
      "running",
      "s-resize",
      "sans-serif",
      "saturate",
      "saturation",
      "scale",
      "scale3d",
      "scaleX",
      "scaleY",
      "scaleZ",
      "screen",
      "scroll",
      "scrollbar",
      "scroll-position",
      "se-resize",
      "searchfield",
      "searchfield-cancel-button",
      "searchfield-decoration",
      "searchfield-results-button",
      "searchfield-results-decoration",
      "self-start",
      "self-end",
      "semi-condensed",
      "semi-expanded",
      "separate",
      "sepia",
      "serif",
      "show",
      "sidama",
      "simp-chinese-formal",
      "simp-chinese-informal",
      "single",
      "skew",
      "skewX",
      "skewY",
      "skip-white-space",
      "slide",
      "slider-horizontal",
      "slider-vertical",
      "sliderthumb-horizontal",
      "sliderthumb-vertical",
      "slow",
      "small",
      "small-caps",
      "small-caption",
      "smaller",
      "soft-light",
      "solid",
      "somali",
      "source-atop",
      "source-in",
      "source-out",
      "source-over",
      "space",
      "space-around",
      "space-between",
      "space-evenly",
      "spell-out",
      "square",
      "square-button",
      "start",
      "static",
      "status-bar",
      "stretch",
      "stroke",
      "stroke-box",
      "sub",
      "subpixel-antialiased",
      "svg_masks",
      "super",
      "sw-resize",
      "symbolic",
      "symbols",
      "system-ui",
      "table",
      "table-caption",
      "table-cell",
      "table-column",
      "table-column-group",
      "table-footer-group",
      "table-header-group",
      "table-row",
      "table-row-group",
      "tamil",
      "telugu",
      "text",
      "text-bottom",
      "text-top",
      "textarea",
      "textfield",
      "thai",
      "thick",
      "thin",
      "threeddarkshadow",
      "threedface",
      "threedhighlight",
      "threedlightshadow",
      "threedshadow",
      "tibetan",
      "tigre",
      "tigrinya-er",
      "tigrinya-er-abegede",
      "tigrinya-et",
      "tigrinya-et-abegede",
      "to",
      "top",
      "trad-chinese-formal",
      "trad-chinese-informal",
      "transform",
      "translate",
      "translate3d",
      "translateX",
      "translateY",
      "translateZ",
      "transparent",
      "ultra-condensed",
      "ultra-expanded",
      "underline",
      "unidirectional-pan",
      "unset",
      "up",
      "upper-alpha",
      "upper-armenian",
      "upper-greek",
      "upper-hexadecimal",
      "upper-latin",
      "upper-norwegian",
      "upper-roman",
      "uppercase",
      "urdu",
      "url",
      "var",
      "vertical",
      "vertical-text",
      "view-box",
      "visible",
      "visibleFill",
      "visiblePainted",
      "visibleStroke",
      "visual",
      "w-resize",
      "wait",
      "wave",
      "wider",
      "window",
      "windowframe",
      "windowtext",
      "words",
      "wrap",
      "wrap-reverse",
      "x-large",
      "x-small",
      "xor",
      "xx-large",
      "xx-small",
    ],
    k = e(f),
    t = t.concat(o).concat(a).concat(l).concat(c).concat(p).concat(b).concat(f);
  function y(e, t) {
    for (var r, o = !1; null != (r = e.next()); ) {
      if (o && "/" == r) {
        t.tokenize = null;
        break;
      }
      o = "*" == r;
    }
    return ["comment", "comment"];
  }
  T.registerHelper("hintWords", "css", t),
    T.defineMIME("text/css", {
      documentTypes: r,
      mediaTypes: i,
      mediaFeatures: n,
      mediaValueKeywords: s,
      propertyKeywords: d,
      nonStandardPropertyKeywords: u,
      fontProperties: m,
      counterDescriptors: g,
      colorKeywords: h,
      valueKeywords: k,
      tokenHooks: {
        "/": function (e, t) {
          return !!e.eat("*") && (t.tokenize = y)(e, t);
        },
      },
      name: "css",
    }),
    T.defineMIME("text/x-scss", {
      mediaTypes: i,
      mediaFeatures: n,
      mediaValueKeywords: s,
      propertyKeywords: d,
      nonStandardPropertyKeywords: u,
      colorKeywords: h,
      valueKeywords: k,
      fontProperties: m,
      allowNested: !0,
      lineComment: "//",
      tokenHooks: {
        "/": function (e, t) {
          return e.eat("/")
            ? (e.skipToEnd(), ["comment", "comment"])
            : e.eat("*")
            ? (t.tokenize = y)(e, t)
            : ["operator", "operator"];
        },
        ":": function (e) {
          return !!e.match(/^\s*\{/, !1) && [null, null];
        },
        $: function (e) {
          return (
            e.match(/^[\w-]+/),
            e.match(/^\s*:/, !1)
              ? ["variable-2", "variable-definition"]
              : ["variable-2", "variable"]
          );
        },
        "#": function (e) {
          return !!e.eat("{") && [null, "interpolation"];
        },
      },
      name: "css",
      helperType: "scss",
    }),
    T.defineMIME("text/x-less", {
      mediaTypes: i,
      mediaFeatures: n,
      mediaValueKeywords: s,
      propertyKeywords: d,
      nonStandardPropertyKeywords: u,
      colorKeywords: h,
      valueKeywords: k,
      fontProperties: m,
      allowNested: !0,
      lineComment: "//",
      tokenHooks: {
        "/": function (e, t) {
          return e.eat("/")
            ? (e.skipToEnd(), ["comment", "comment"])
            : e.eat("*")
            ? (t.tokenize = y)(e, t)
            : ["operator", "operator"];
        },
        "@": function (e) {
          return e.eat("{")
            ? [null, "interpolation"]
            : !e.match(
                /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                !1
              ) &&
                (e.eatWhile(/[\w\\\-]/),
                e.match(/^\s*:/, !1)
                  ? ["variable-2", "variable-definition"]
                  : ["variable-2", "variable"]);
        },
        "&": function () {
          return ["atom", "atom"];
        },
      },
      name: "css",
      helperType: "less",
    }),
    T.defineMIME("text/x-gss", {
      documentTypes: r,
      mediaTypes: i,
      mediaFeatures: n,
      propertyKeywords: d,
      nonStandardPropertyKeywords: u,
      fontProperties: m,
      counterDescriptors: g,
      colorKeywords: h,
      valueKeywords: k,
      supportsAtComponent: !0,
      tokenHooks: {
        "/": function (e, t) {
          return !!e.eat("*") && (t.tokenize = y)(e, t);
        },
      },
      name: "css",
      helperType: "gss",
    });
});

/*
 * codemirror
 * https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/htmlmixed/htmlmixed.min.js
 */
!(function (t) {
  "object" == typeof exports && "object" == typeof module
    ? t(
        require("../../lib/codemirror"),
        require("../xml/xml"),
        require("../javascript/javascript"),
        require("../css/css")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "../../lib/codemirror",
          "../xml/xml",
          "../javascript/javascript",
          "../css/css",
        ],
        t
      )
    : t(CodeMirror);
})(function (m) {
  "use strict";
  var l = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      [
        "type",
        /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
        "javascript",
      ],
      ["type", /./, "text/plain"],
      [null, null, "javascript"],
    ],
    style: [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"],
    ],
  };
  var a = {};
  function d(t, e) {
    e = t.match(
      a[(t = e)] ||
        (a[t] = new RegExp("\\s+" + t + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
    );
    return e ? /^\s*(.*?)\s*$/.exec(e[2])[1] : "";
  }
  function g(t, e) {
    return new RegExp((e ? "^" : "") + "</\\s*" + t + "\\s*>", "i");
  }
  function o(t, e) {
    for (var a in t)
      for (var n = e[a] || (e[a] = []), l = t[a], o = l.length - 1; 0 <= o; o--)
        n.unshift(l[o]);
  }
  m.defineMode(
    "htmlmixed",
    function (i, t) {
      var c = m.getMode(i, {
          name: "xml",
          htmlMode: !0,
          multilineTagIndentFactor: t.multilineTagIndentFactor,
          multilineTagIndentPastTag: t.multilineTagIndentPastTag,
          allowMissingTagName: t.allowMissingTagName,
        }),
        s = {},
        e = t && t.tags,
        a = t && t.scriptTypes;
      if ((o(l, s), e && o(e, s), a))
        for (var n = a.length - 1; 0 <= n; n--)
          s.script.unshift(["type", a[n].matches, a[n].mode]);
      function u(t, e) {
        var a,
          o,
          r,
          n = c.token(t, e.htmlState),
          l = /\btag\b/.test(n);
        return (
          l &&
          !/[<>\s\/]/.test(t.current()) &&
          (a = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) &&
          s.hasOwnProperty(a)
            ? (e.inTag = a + " ")
            : e.inTag && l && />$/.test(t.current())
            ? ((a = /^([\S]+) (.*)/.exec(e.inTag)),
              (e.inTag = null),
              (l =
                ">" == t.current() &&
                (function (t, e) {
                  for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    if (!n[0] || n[1].test(d(e, n[0]))) return n[2];
                  }
                })(s[a[1]], a[2])),
              (l = m.getMode(i, l)),
              (o = g(a[1], !0)),
              (r = g(a[1], !1)),
              (e.token = function (t, e) {
                return t.match(o, !1)
                  ? ((e.token = u), (e.localState = e.localMode = null))
                  : ((a = t),
                    (n = r),
                    (t = e.localMode.token(t, e.localState)),
                    (e = a.current()),
                    -1 < (l = e.search(n))
                      ? a.backUp(e.length - l)
                      : e.match(/<\/?$/) &&
                        (a.backUp(e.length), a.match(n, !1) || a.match(e)),
                    t);
                var a, n, l;
              }),
              (e.localMode = l),
              (e.localState = m.startState(l, c.indent(e.htmlState, "", ""))))
            : e.inTag &&
              ((e.inTag += t.current()), t.eol() && (e.inTag += " ")),
          n
        );
      }
      return {
        startState: function () {
          return {
            token: u,
            inTag: null,
            localMode: null,
            localState: null,
            htmlState: m.startState(c),
          };
        },
        copyState: function (t) {
          var e;
          return (
            t.localState && (e = m.copyState(t.localMode, t.localState)),
            {
              token: t.token,
              inTag: t.inTag,
              localMode: t.localMode,
              localState: e,
              htmlState: m.copyState(c, t.htmlState),
            }
          );
        },
        token: function (t, e) {
          return e.token(t, e);
        },
        indent: function (t, e, a) {
          return !t.localMode || /^\s*<\//.test(e)
            ? c.indent(t.htmlState, e, a)
            : t.localMode.indent
            ? t.localMode.indent(t.localState, e, a)
            : m.Pass;
        },
        innerMode: function (t) {
          return { state: t.localState || t.htmlState, mode: t.localMode || c };
        },
      };
    },
    "xml",
    "javascript",
    "css"
  ),
    m.defineMIME("text/html", "htmlmixed");
});

/*
 * 컴포넌트 가이드 스크립트
 * 직접 작성 영역
 */
window.onload = function () {
  // init();
  codeMirror();
  codeMirror2();
  setCopyrightYear();
  setGnb("../../assets/scripts/component_guide.json", ".uid-navigation");
  setTimeout(() => {
    sliderComponent();
    detailsComponent();
    datalistComponent();
    clipboardWriteText();
    fnTab();
  }, 1000);
  setTimeout(() => {
    iframeHset();
  }, 500);
};

const setCopyrightYear = function () {
  const date = new Date();
  const year = date.getFullYear();
  const copyright = document.querySelector(".ui-copyright");
  copyright.textContent = year;
};

const setGnb = async function (jsonFile, navClass) {
  const response = await fetch(jsonFile);
  const results = await response.json();
  const navigation = document.querySelector(navClass);
  const url = window.location.pathname;
  const filename = url.substring(url.lastIndexOf("/") + 1).slice(0, -5);
  let ulEl = document.createElement("ul");
  results.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${item.depth1}</strong>`;

    if (item.subDepth) {
      let ul = document.createElement("ul");
      ul.classList.add("submenu");
      /* No need to sort menus
              item.subDepth.sort((a, b) => {
                  let fa = a.depth2.toLowerCase(),
                  fb = b.depth2.toLowerCase();

                  if (fa < fb) {
                  return -1;
                  }
                  if (fa > fb) {
                  return 1;
                  }
                  return 0;
              });
              */
      item.subDepth.forEach((smenu) => {
        let sli = document.createElement("li");
        sli.innerHTML = `<a href="${smenu.link}.html" class="${
          smenu.status ? smenu.status : ""
        }">${smenu.depth2}</a>`;
        let smenuLinks = smenu.link.split("/");
        if (smenuLinks[smenuLinks.length - 1] === filename) {
          sli.innerHTML = `<a href="${smenu.link}.html" aria-current="page">${
            smenu.depth2
          } ${
            smenu.status ? `<span class="status">${smenu.status}</span>` : ""
          }</a>`;
        }
        ul.appendChild(sli);
      });
      li.appendChild(ul);
    }

    ulEl.appendChild(li);
    // console.log(navigation)
  });
  navigation.appendChild(ulEl);
};

const codeMirror = function () {
  if (document.querySelectorAll(".ui_code_content").length === 0) return;
  if (document.querySelector(".code-guide")) return;
  $(".ui_btnCodeCopy").on("click", function () {
    var el = $(this);
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      el.data("text-original", el.text());
      el.text($(this).data("text-swap"));
      el.addClass("active");

      $(this).parent().next().css({
        position: "absolute",
        opacity: 0,
        display: "block",
      });
      el.parent().next().focus();
      el.parent().next().select();
      document.execCommand("copy");

      setTimeout(function () {
        if (el.text() == "Copy!") {
          el.text("Copy to clipboard");
          el.removeClass("active");
        }
      }, 1000);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    window.getSelection().removeAllRanges();
  });
  $(".ui_code_content").each(function (index, elem) {
    var $this = $(this);
    if ($(this).hasClass("css") === true) {
      var editor = CodeMirror.fromTextArea(elem, {
        mode: "text/css",
        tabMode: "indent",
      });
    } else if ($(this).hasClass("javascript") === true) {
      var editor = CodeMirror.fromTextArea(elem, {
        mode: "text/javascript",
        tabMode: "indent",
      });
    } else if ($(this).hasClass("markup") === true) {
      var editor = CodeMirror.fromTextArea(elem, {
        mode: "text/html",
        tabMode: "indent",
      });
    } else if ($(this).hasClass("html") === true) {
      var delay;
      var editor = CodeMirror.fromTextArea(elem, {
        mode: "text/html",
        tabMode: "indent",
      });
      editor.on("change", function () {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
      });
      function updatePreview() {
        var preview = $this.prev().prev();
        preview.html(editor.getValue());
      }
      setTimeout(updatePreview, 300);
    }
  });
};

const codeMirror2 = function () {
  if (!document.querySelector(".code-guide")) return;
  $(".ui_btnCodeCopy").on("click", function () {
    var el = $(this);
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      el.data("text-original", el.text());
      el.text($(this).data("text-swap"));
      el.addClass("active");

      $(this).parent().next().css({
        position: "absolute",
        opacity: 0,
        display: "block",
      });
      el.parent().next().focus();
      el.parent().next().select();
      document.execCommand("copy");

      setTimeout(function () {
        if (el.text() == "Copy!") {
          el.text("Copy to clipboard");
          el.removeClass("active");
        }
      }, 1000);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    window.getSelection().removeAllRanges();
  });

  let uiCnt = document.querySelectorAll(".ui_code_content");

  let codeGuide = document.querySelector(".code-guide");
  let codeWraps = codeGuide.querySelectorAll(".code-wrap");
  let codeGroup = codeWraps[0].querySelectorAll(".code-group");

  // codemirror [html, css, js 탭 버튼]
  let codeBtn = document.querySelectorAll(".code-tab .code-btn");
  let codeCnt = document.querySelectorAll(".source-area .code-group");

  // html,css,js별로 담아둘 객체
  let codeArea = {
    html: {
      editor: [],
    },
    css: {
      editor: [],
    },
    javascript: {
      editor: [],
    },
  };
  uiCnt.forEach((ele, index) => {
    let classNm;
    let parent = uiCnt[index].parentNode.parentNode;
    // 최상위 부모의 인덱스값
    // let parentIdx = Array.from(parent.parentNode.children).indexOf(parent);

    let test = Math.floor(index / codeGroup.length);

    // ele이 html클래스를 포함하고 있으면 값을 "html", "css"포함하면 "css", ....
    classNm = ele.classList.contains("html")
      ? "html"
      : ele.classList.contains("css")
      ? "css"
      : "javascript";
    if (ele.classList.contains(classNm)) {
      // codemirror 기본셋팅
      let editor = CodeMirror.fromTextArea(uiCnt[index], {
        mode: `text/${classNm}`,
        tabMode: "indent",
      });
      // textarea에서 값 추출 적용
      codeArea[classNm]["editor"][test] = editor.doc.getValue();
      // textarea에서 코드 변경시 이벤트
      editor.on("change", function (editor) {
        codeArea[classNm]["editor"][test] = editor.doc.getValue();
        setTimeout(funcSetIframe(test), 300);
      });
      editor.focus();
    }
    setTimeout(funcSetIframe(test), 300);
  });

  function funcSetIframe(idx) {
    // iframe을 담는 변수
    var iframes = document.querySelectorAll(".preview");

    for (let i = 0; i < iframes.length; i++) {
      var iframedoc;

      if (idx == i) {
        iframedoc = iframes[idx].document;
      }
      if (iframes[idx].contentDocument) {
        iframedoc = iframes[idx].contentDocument;
      } else if (iframes[idx].contentWindow) {
        iframedoc = iframes[idx].contentWindow.document;
      }
      // iframe에 textarea에 입력한 소스를 반영한다.
      if (iframedoc) {
        // var doctype = document.implementation.createDocumentType(
        //   "html",
        //   "",
        //   ""
        // );
        // var doc = document.implementation.createDocument("", "html", doctype);
        // var head = document.createElement("head");
        // var meta = document.createElement("meta");
        // var link1 = document.createElement("link");
        // var style = document.createElement("style");
        // var script1 = document.createElement("script");
        // var body = document.createElement("body");
        // var div = document.createElement("div");
        // var script2 = document.createElement("script");

        // meta.setAttribute("charset", "utf-8");
        // link1.setAttribute("href", "/assets/styles/style.css");
        // link1.setAttribute("type", "text/css");
        // link1.setAttribute("rel", "stylesheet");

        // script1.setAttribute("src", "/assets/scripts/common.js");
        // script1.setAttribute("type", "module");

        // style.innerHTML = codeArea["css"]["editor"][idx];
        // div.setAttribute("class", "test-wrap");
        // div.innerHTML = codeArea["html"]["editor"][idx];
        // script2.innerHTML = codeArea["javascript"]["editor"][idx];

        // head.appendChild(meta);
        // head.appendChild(style);
        // head.appendChild(link1);
        // body.appendChild(div);
        // head.appendChild(script1);
        // body.appendChild(script2);
        // doc.documentElement.appendChild(head);
        // doc.documentElement.appendChild(body);
        // iframes[idx].srcdoc =
        //   "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
        iframedoc.open();
        iframedoc.write("<!DOCTYPE html>");
        iframedoc.write('<html lang="ko">');
        iframedoc.write("<head>");
        iframedoc.write('<meta charset="utf-8">');
        iframedoc.write(
          '<link href="/assets/styles/component_guide.css" type="text/css" rel="stylesheet">'
        );
        iframedoc.write(
          '<script type="module" src="../../assets/scripts/common.js"></script>'
        );
        iframedoc.write(
          "<style>" + codeArea["css"]["editor"][idx] + "</style>"
        );
        iframedoc.write("</head>");
        iframedoc.write(
          '<body><div class="test-wrap">' +
            codeArea["html"]["editor"][idx] +
            "</div></body>"
        );
        iframedoc.write(
          "<script>" + codeArea["javascript"]["editor"][idx] + "</script>"
        );
        iframedoc.write("</html>");
        iframedoc.close();
      } else {
        alert("소스를  iframe 안에 추가할 수 없습니다.");
      }
    }
    setTimeout(() => {
      hideCode(codeCnt);
    }, 0);
  }

  function hideCode(allcode) {
    allcode.forEach((ele, index) => {
      if (!ele.classList.contains("is-active")) {
        ele.style.display = "none";
      } else {
        ele.style.display = "block";
      }
    });
  }

  let codeTabs = document.querySelectorAll(".code-tab");

  codeTabs.forEach((tab, tabIndex) => {
    let codeBtns = tab.querySelectorAll(".code-btn");
    let codeCnts = tab.nextElementSibling.querySelectorAll(".code-group");

    codeBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", () => {
        codeBtns.forEach((otherBtn) => {
          otherBtn.classList.remove("is-active");
        });
        btn.classList.add("is-active");
        codeCnts.forEach((cnt) => {
          cnt.style.display = "none";
        });
        codeCnts[btnIndex].style.display = "block";
      });
    });
  });
};

function iframeHset() {
  let iframDiv = document.querySelectorAll("iframe");
  iframDiv.forEach((e) => {
    let iframeTwrap = e.contentWindow.document.body.querySelector(".test-wrap");
    let iframeTwrapH = iframeTwrap.clientHeight;
    e.style.height = iframeTwrapH + 30 + "px";
    iframeTwrap.style.overflow = "hidden";
  });
}

const sliderComponent = function () {
  if (document.querySelectorAll(".slide-container").length === 0) return;
  const slideContainer = document.querySelectorAll(".slide-container");

  Array.from(slideContainer).forEach((el) => {
    const rangeEl = el.querySelector(".js-slider");
    const numberEl = el.nextElementSibling;
    function initSetup() {
      rangeEl.style.backgroundSize = rangeEl.value + "% 100%";
    }

    function handleInputChange(e) {
      let min;
      let max;
      let val;
      min = rangeEl.min;
      max = rangeEl.max;
      val = rangeEl.value;

      rangeEl.style.backgroundSize =
        ((val - min) * 100) / (max - min) + "% 100%";
    }
    initSetup();
    rangeEl.addEventListener("input", handleInputChange);
  });
};

const detailsComponent = function () {
  function toggleHandler(event) {
    // Only run if accordion is open
    if (!event.target.hasAttribute("open")) return;

    // Only run on accordions inside our selector
    let parent = event.target.closest("[data-accordion]");
    if (!parent) return;

    // Get all open accordions inside parent
    let opened = parent.querySelectorAll("details[open]");

    // Close open ones that aren't current accordion
    for (let accordion of opened) {
      if (accordion === event.target) continue;
      accordion.removeAttribute("open");
    }
  }

  document.addEventListener("toggle", toggleHandler, true);
};

const datalistComponent = function () {
  if (document.querySelectorAll("#datalistInput").length === 0) return;
  datalistInput.onfocus = function () {
    browsers.style.display = "block";
  };
  for (let option of browsers.options) {
    option.onclick = function () {
      datalistInput.value = option.value;
      browsers.style.display = "none";
    };
  }

  datalistInput.oninput = function () {
    currentFocus = -1;
    var text = datalistInput.value.toUpperCase();
    for (let option of browsers.options) {
      if (option.value.toUpperCase().indexOf(text) > -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    }
  };
  var currentFocus = -1;
  datalistInput.onkeydown = function (e) {
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(browsers.options);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(browsers.options);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (browsers.options) browsers.options[currentFocus].click();
      }
    }
  };

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }
};

const clipboardWriteText = function () {
  if (document.querySelectorAll(".write-btn").length == 0) return;
  const writeBtn = document.querySelector(".write-btn");
  const textarea = document.querySelector(".to-copy");

  writeBtn.addEventListener("click", () => {
    const inputValue = textarea.value.trim();
    if (inputValue) {
      navigator.clipboard
        .writeText(inputValue)
        .then(() => {
          textarea.value = "";
          if (writeBtn.innerText !== "Copied!") {
            const originalText = writeBtn.innerText;
            writeBtn.innerText = "Copied!";
            setTimeout(() => {
              writeBtn.innerText = originalText;
            }, 1500);
          }
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  });
};

const fnTab = () => {
  // 1depth tab
  document.querySelectorAll(".tab-list .btn-tab").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-list .btn-tab")
        .forEach((otherBtn) => otherBtn.classList.remove("on"));
      document
        .querySelectorAll(".tab-content .tab-box")
        .forEach((othercont) => othercont.classList.remove("on"));
      btn.classList.add("on");
      document
        .querySelectorAll(".tab-content .tab-box")
        [idx].classList.add("on");
    });
  });
};
