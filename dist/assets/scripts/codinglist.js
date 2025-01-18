/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
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
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
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
    E = C.document,
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
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
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
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
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
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
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
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
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
    (S.extend = S.fn.extend =
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
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
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
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
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
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
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
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
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
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
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
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
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
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
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
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
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
      if (!r && (T(e), (e = e || C), E)) {
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
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
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
      return (e[S] = !0), e;
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
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
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
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
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
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
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
                  s.push("!=", F);
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
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
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
                    return e == C
                      ? -1
                      : t == C
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
                    : a[r] == p
                    ? -1
                    : s[r] == p
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
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
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
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
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
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
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
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
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
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
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
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
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
            return a[S]
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
              s = f(e.replace($, "$1"));
            return s[S]
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
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
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
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
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
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
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
              i.push({ value: n, type: r[0].replace($, " ") }),
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
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
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
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
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
                return i && ((k = h), (w = p)), c;
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
      (d.sortStable = S.split("").sort(D).join("") === S),
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
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
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
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
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
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
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
                S.each(e, function (e, t) {
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
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
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
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
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
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
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
              }).promise();
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
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
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
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
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
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
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
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
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
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
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
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
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
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
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
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
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
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
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
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
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
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
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
              (S.event.global[d] = !0));
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
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
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
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
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
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
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
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
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
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
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
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
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
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
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
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
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
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
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
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
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
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
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
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
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
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
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
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
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
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
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
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
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
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
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
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
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
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
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
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
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
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
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
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
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
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
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
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
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
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
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
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
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
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
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
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
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
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
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
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
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
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
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
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
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
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
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
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
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
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
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
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
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
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
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
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
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
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
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
                  while ((t = Ht.exec(p)))
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
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
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
          (c = Bt(Mt, v, t, T)))
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
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
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
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
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
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
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
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
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
                        _t[r.status] || r.status,
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
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
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
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
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
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
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
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
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
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
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
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
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
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
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
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!
 * Sheetrock v1.0.1
 * Quickly connect to, query, and lazy-load data from Google Sheets.
 * http://chriszarate.github.io/sheetrock/
 * License: MIT
 */
(function (e, r) {
  "use strict";
  var t = r();
  if (typeof define === "function" && define.amd) {
    define("sheetrock", function () {
      t.environment.amd = true;
      return t;
    });
  } else if (typeof module === "object" && module.exports) {
    t.environment.commonjs = true;
    t.environment.request = require("request");
    module.exports = t;
  } else {
    e.sheetrock = t;
  }
})(this, function () {
  "use strict";
  var e = {
    2014: {
      apiEndpoint: "https://docs.google.com/spreadsheets/d/%key%/gviz/tq?",
      keyFormat: new RegExp("spreadsheets/d/([^/#]+)", "i"),
      gidFormat: new RegExp("gid=([^/&#]+)", "i"),
    },
    2010: {
      apiEndpoint: "https://spreadsheets.google.com/tq?key=%key%&",
      keyFormat: new RegExp("key=([^&#]+)", "i"),
      gidFormat: new RegExp("gid=([^/&#]+)", "i"),
    },
  };
  var r = { loaded: {}, failed: {}, labels: {}, header: {}, offset: {} };
  var t = 0;
  var a = typeof window === "undefined" ? {} : window;
  var n = {
    document: a.document || {},
    dom: !!(a.document && a.document.createElement),
    jquery: !!(a.jQuery && a.jQuery.fn && a.jQuery.fn.jquery),
    request: false,
  };
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (e) {
      var r;
      var t = this;
      var a = t.length;
      for (r = 0; r < a; r = r + 1) {
        e(t[r], r);
      }
    };
  }
  if (!Array.prototype.map) {
    Array.prototype.map = function (e) {
      var r = this;
      var t = [];
      r.forEach(function (r, a) {
        t[a] = e(r, a);
      });
      return t;
    };
  }
  if (!Object.keys) {
    Object.keys = function (e) {
      var r;
      var t = [];
      for (r in e) {
        if (e.hasOwnProperty(r)) {
          t.push(r);
        }
      }
      return t;
    };
  }
  var o = function (e, t, a) {
    if (!(e instanceof Error)) {
      e = new Error(e);
    }
    if (t && t.request && t.request.index) {
      r.failed[t.request.index] = true;
    }
    if (t && t.user && t.user.callback) {
      t.user.callback(e, t, a || null);
    } else {
      throw e;
    }
  };
  var i = function (e) {
    return e.toString().replace(/^ +/, "").replace(/ +$/, "");
  };
  var u = function (e) {
    return Math.max(0, parseInt(e, 10) || 0);
  };
  var s = function (e, r) {
    var t = " " + e.className + " ";
    return t.indexOf(" " + r + " ") !== -1;
  };
  var f = function (e) {
    e = e || {};
    if (e.jquery && e.length) {
      e = e[0];
    }
    return e.nodeType && e.nodeType === 1 ? e : false;
  };
  var l = function () {
    n.dom = !!(n.document && n.document.createElement);
  };
  var c = function (r) {
    var t = {};
    var a = Object.keys(e);
    a.forEach(function (a) {
      var n = e[a];
      if (n.keyFormat.test(r) && n.gidFormat.test(r)) {
        t.key = r.match(n.keyFormat)[1];
        t.gid = r.match(n.gidFormat)[1];
        t.apiEndpoint = n.apiEndpoint.replace("%key%", t.key);
      }
    });
    return t;
  };
  var d = function (e) {
    return e.key && e.gid ? e.key + "_" + e.gid + "_" + e.query : null;
  };
  var v = function (e) {
    var r;
    if (e && e.f) {
      r = e.f;
    } else if (e && e.v) {
      r = e.v;
    } else {
      r = "";
    }
    if (r instanceof Array) {
      r = e.f || r.join("");
    }
    return i(r);
  };
  var m = function (e, r, t) {
    var a = { cells: {}, cellsArray: r, labels: t, num: e };
    r.forEach(function (e, r) {
      a.cells[t[r]] = e;
    });
    return a;
  };
  var h = function (e, r) {
    return "<" + r + ">" + e + "</" + r + ">";
  };
  var p = function (e) {
    var r = e.num ? "td" : "th";
    var t = Object.keys(e.cells);
    var a = "";
    t.forEach(function (t) {
      a += h(e.cells[t], r);
    });
    return h(a, "tr");
  };
  var y = function (e) {
    r.loaded[e] = false;
    r.failed[e] = false;
    r.labels[e] = false;
    r.header[e] = 0;
    r.offset[e] = 0;
  };
  var b = function (e, r) {
    var t = {};
    var a = Object.keys(e);
    r.query = r.sql || r.query;
    r.reset = r.resetStatus || r.reset;
    r.fetchSize = r.chunkSize || r.fetchSize;
    r.rowTemplate = r.rowHandler || r.rowTemplate;
    a.forEach(function (a) {
      t[a] = r[a] || e[a];
    });
    return t;
  };
  var g = function (e, r) {
    r.target = f(r.target) || f(e);
    r.fetchSize = u(r.fetchSize);
    return r;
  };
  var q = function (e, t) {
    var a = g(e, t);
    var n = c(a.url);
    n.query = a.query;
    n.index = d(n);
    if (a.reset && n.index) {
      y(n.index);
      n.reset = true;
    }
    a.offset = r.offset[n.index] || 0;
    if (a.fetchSize && n.index) {
      n.query += " limit " + (a.fetchSize + 1);
      n.query += " offset " + a.offset;
      r.offset[n.index] = a.offset + a.fetchSize;
    }
    return { user: a, request: n };
  };
  var k = function (e) {
    if (!e.user.target && !e.user.callback) {
      throw "No element targeted or callback provided.";
    }
    if (!(e.request.key && e.request.gid)) {
      throw "No key/gid in the provided URL.";
    }
    if (r.failed[e.request.index]) {
      throw "A previous request for this resource failed.";
    }
    if (r.loaded[e.request.index]) {
      throw "No more rows to load!";
    }
    return e;
  };
  var w = function (e, r) {
    return e && e.length === r.length ? e : r;
  };
  var E = function (e, t) {
    var a = e.request.index;
    var n = r.labels[a];
    var o = e.user.fetchSize;
    var i = t.table.rows;
    var u = t.table.cols;
    var s = { last: i.length - 1, rowNumberOffset: r.header[a] || 0 };
    if (!e.user.offset) {
      n = u.map(function (e, r) {
        if (e.label) {
          return e.label.replace(/\s/g, "");
        } else {
          s.last = s.last + 1;
          s.rowNumberOffset = 1;
          return v(i[0].c[r]).replace(/\s/g, "") || e.id;
        }
      });
      r.offset[a] = r.offset[a] + s.rowNumberOffset;
      r.header[a] = s.rowNumberOffset;
      r.labels[a] = n;
    }
    if (!o || i.length - s.rowNumberOffset < o) {
      s.last = s.last + 1;
      r.loaded[a] = true;
    }
    s.labels = w(e.user.labels, n);
    return s;
  };
  var x = function (e, r, t) {
    var a = [];
    var n = r.labels;
    if (!e.offset && !r.rowNumberOffset) {
      a.push(m(0, n, n));
    }
    t.table.rows.forEach(function (t, o) {
      if (t.c && o < r.last) {
        var i = u(e.offset + o + 1 - r.rowNumberOffset);
        a.push(m(i, t.c.map(v), n));
      }
    });
    return a;
  };
  var j = function (e, r, t) {
    if (e.tagName === "TABLE") {
      var a = n.document.createElement("thead");
      var o = n.document.createElement("tbody");
      a.innerHTML = r;
      o.innerHTML = t;
      e.appendChild(a);
      e.appendChild(o);
    } else {
      e.insertAdjacentHTML("beforeEnd", r + t);
    }
  };
  var N = function (e, r) {
    var t = e.rowTemplate || p;
    var a = n.dom && e.target;
    var o = a && e.target.tagName === "TABLE";
    var i = a && s(e.target, "sheetrock-header");
    var u = "";
    var f = "";
    r.forEach(function (e) {
      if (e.num) {
        f += t(e);
      } else if (o || i) {
        u += t(e);
      }
    });
    if (a) {
      j(e.target, u, f);
    }
    return o ? h(u, "thead") + h(f, "tbody") : u + f;
  };
  var O = function (e, r) {
    var t = { raw: r };
    try {
      var a = (t.attributes = E(e, r));
      var n = (t.rows = x(e.user, a, r));
      t.html = N(e.user, n);
    } catch (i) {
      o("Unexpected API response format.", e, t);
      return;
    }
    if (e.user.callback) {
      e.user.callback(null, e, t);
    }
  };
  var S = function (e, r) {
    if (typeof n.request !== "function") {
      throw "No HTTP transport available.";
    }
    var t = { headers: { "X-DataSource-Auth": "true" }, url: e.request.url };
    var a = function (t, a, n) {
      if (!t && a.statusCode === 200) {
        try {
          n = JSON.parse(n.replace(/^\)\]\}\'\n/, ""));
          r(e, n);
        } catch (i) {
          o(i, e, { raw: n });
        }
      } else {
        o(t || "Request failed.", e);
      }
    };
    n.request(t, a);
  };
  var T = function (e, r) {
    var i;
    var u;
    var s;
    var f = n.document.getElementsByTagName("head")[0];
    var l = n.document.createElement("script");
    var c = "_sheetrock_callback_" + t;
    i = function () {
      if (l.removeEventListener) {
        l.removeEventListener("error", s, false);
        l.removeEventListener("abort", s, false);
      }
      f.removeChild(l);
      delete a[c];
    };
    u = function (t) {
      try {
        r(e, t);
      } catch (a) {
        o(a, e, { raw: t });
      } finally {
        i();
      }
    };
    s = function () {
      o("Request failed.", e);
      i();
    };
    a[c] = u;
    e.request.url = e.request.url.replace("%callback%", c);
    if (l.addEventListener) {
      l.addEventListener("error", s, false);
      l.addEventListener("abort", s, false);
    }
    l.type = "text/javascript";
    l.src = e.request.url;
    f.appendChild(l);
    t = t + 1;
  };
  var A = function (e) {
    var r = [
      "gid=" + encodeURIComponent(e.request.gid),
      "tq=" + encodeURIComponent(e.request.query),
    ];
    if (n.dom) {
      r.push("tqx=responseHandler:%callback%");
    }
    return e.request.apiEndpoint + r.join("&");
  };
  var L = function (e, r) {
    e.request.url = A(e);
    if (n.dom) {
      T(e, r);
    } else {
      S(e, r);
    }
  };
  var z = {
    url: "",
    query: "",
    target: null,
    fetchSize: 0,
    labels: [],
    rowTemplate: null,
    callback: null,
    reset: false,
  };
  var R = function (e, r) {
    try {
      e = b(z, e || {});
      e = q(this, e);
      e = k(e);
      l();
      if (r) {
        O(e, r);
      } else {
        L(e, O);
      }
    } catch (t) {
      o(t, e);
    }
    return this;
  };
  R.defaults = z;
  R.version = "1.0.1";
  R.environment = n;
  if (n.jquery) {
    a.jQuery.fn.sheetrock = R;
  }
  return R;
});
//# sourceMappingURL=sheetrock.min.js.map

/*! jquery.csv.min.js */
(RegExp.escape = function (r) {
  return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}),
  function () {
    "use strict";
    var r;
    ((r = "undefined" != typeof jQuery && jQuery ? jQuery : {}).csv = {
      defaults: { separator: ",", delimiter: '"', headers: !0 },
      hooks: {
        castToScalar: function (r, e) {
          if (isNaN(r)) return r;
          if (/\./.test(r)) return parseFloat(r);
          var a = parseInt(r);
          return isNaN(a) ? null : a;
        },
      },
      parsers: {
        parse: function (r, e) {
          var a = e.separator,
            t = e.delimiter;
          e.state.rowNum || (e.state.rowNum = 1),
            e.state.colNum || (e.state.colNum = 1);
          var s = [],
            o = [],
            n = 0,
            i = "",
            l = !1;
          function c() {
            if (((n = 0), (i = ""), e.start && e.state.rowNum < e.start))
              return (o = []), e.state.rowNum++, void (e.state.colNum = 1);
            if (void 0 === e.onParseEntry) s.push(o);
            else {
              var r = e.onParseEntry(o, e.state);
              !1 !== r && s.push(r);
            }
            (o = []),
              e.end && e.state.rowNum >= e.end && (l = !0),
              e.state.rowNum++,
              (e.state.colNum = 1);
          }
          function u() {
            if (void 0 === e.onParseValue) o.push(i);
            else {
              var r = e.onParseValue(i, e.state);
              !1 !== r && o.push(r);
            }
            (i = ""), (n = 0), e.state.colNum++;
          }
          var f = RegExp.escape(a),
            d = RegExp.escape(t),
            m = /(D|S|\r\n|\n|\r|[^DS\r\n]+)/,
            p = m.source;
          return (
            (p = (p = p.replace(/S/g, f)).replace(/D/g, d)),
            (m = new RegExp(p, "gm")),
            r.replace(m, function (r) {
              if (!l)
                switch (n) {
                  case 0:
                    if (r === a) {
                      (i += ""), u();
                      break;
                    }
                    if (r === t) {
                      n = 1;
                      break;
                    }
                    if (/^(\r\n|\n|\r)$/.test(r)) {
                      u(), c();
                      break;
                    }
                    (i += r), (n = 3);
                    break;
                  case 1:
                    if (r === t) {
                      n = 2;
                      break;
                    }
                    (i += r), (n = 1);
                    break;
                  case 2:
                    if (r === t) {
                      (i += r), (n = 1);
                      break;
                    }
                    if (r === a) {
                      u();
                      break;
                    }
                    if (/^(\r\n|\n|\r)$/.test(r)) {
                      u(), c();
                      break;
                    }
                    throw new Error(
                      "CSVDataError: Illegal State [Row:" +
                        e.state.rowNum +
                        "][Col:" +
                        e.state.colNum +
                        "]"
                    );
                  case 3:
                    if (r === a) {
                      u();
                      break;
                    }
                    if (/^(\r\n|\n|\r)$/.test(r)) {
                      u(), c();
                      break;
                    }
                    if (r === t)
                      throw new Error(
                        "CSVDataError: Illegal Quote [Row:" +
                          e.state.rowNum +
                          "][Col:" +
                          e.state.colNum +
                          "]"
                      );
                    throw new Error(
                      "CSVDataError: Illegal Data [Row:" +
                        e.state.rowNum +
                        "][Col:" +
                        e.state.colNum +
                        "]"
                    );
                  default:
                    throw new Error(
                      "CSVDataError: Unknown State [Row:" +
                        e.state.rowNum +
                        "][Col:" +
                        e.state.colNum +
                        "]"
                    );
                }
            }),
            0 !== o.length && (u(), c()),
            s
          );
        },
        splitLines: function (e, a) {
          if (e) {
            var t = (a = a || {}).separator || r.csv.defaults.separator,
              s = a.delimiter || r.csv.defaults.delimiter;
            (a.state = a.state || {}), a.state.rowNum || (a.state.rowNum = 1);
            var o = [],
              n = 0,
              i = "",
              l = !1,
              c = RegExp.escape(t),
              u = RegExp.escape(s),
              f = /(D|S|\n|\r|[^DS\r\n]+)/,
              d = f.source;
            return (
              (d = (d = d.replace(/S/g, c)).replace(/D/g, u)),
              (f = new RegExp(d, "gm")),
              e.replace(f, function (r) {
                if (!l)
                  switch (n) {
                    case 0:
                      if (r === t) {
                        (i += r), (n = 0);
                        break;
                      }
                      if (r === s) {
                        (i += r), (n = 1);
                        break;
                      }
                      if ("\n" === r) {
                        m();
                        break;
                      }
                      if (/^\r$/.test(r)) break;
                      (i += r), (n = 3);
                      break;
                    case 1:
                      if (r === s) {
                        (i += r), (n = 2);
                        break;
                      }
                      (i += r), (n = 1);
                      break;
                    case 2:
                      var e = i.substr(i.length - 1);
                      if (r === s && e === s) {
                        (i += r), (n = 1);
                        break;
                      }
                      if (r === t) {
                        (i += r), (n = 0);
                        break;
                      }
                      if ("\n" === r) {
                        m();
                        break;
                      }
                      if ("\r" === r) break;
                      throw new Error(
                        "CSVDataError: Illegal state [Row:" +
                          a.state.rowNum +
                          "]"
                      );
                    case 3:
                      if (r === t) {
                        (i += r), (n = 0);
                        break;
                      }
                      if ("\n" === r) {
                        m();
                        break;
                      }
                      if ("\r" === r) break;
                      if (r === s)
                        throw new Error(
                          "CSVDataError: Illegal quote [Row:" +
                            a.state.rowNum +
                            "]"
                        );
                      throw new Error(
                        "CSVDataError: Illegal state [Row:" +
                          a.state.rowNum +
                          "]"
                      );
                    default:
                      throw new Error(
                        "CSVDataError: Unknown state [Row:" +
                          a.state.rowNum +
                          "]"
                      );
                  }
              }),
              "" !== i && m(),
              o
            );
          }
          function m() {
            if (((n = 0), a.start && a.state.rowNum < a.start))
              return (i = ""), void a.state.rowNum++;
            if (void 0 === a.onParseEntry) o.push(i);
            else {
              var r = a.onParseEntry(i, a.state);
              !1 !== r && o.push(r);
            }
            (i = ""),
              a.end && a.state.rowNum >= a.end && (l = !0),
              a.state.rowNum++;
          }
        },
        parseEntry: function (r, e) {
          var a = e.separator,
            t = e.delimiter;
          e.state.rowNum || (e.state.rowNum = 1),
            e.state.colNum || (e.state.colNum = 1);
          var s = [],
            o = 0,
            n = "";
          function i() {
            if (void 0 === e.onParseValue) s.push(n);
            else {
              var r = e.onParseValue(n, e.state);
              !1 !== r && s.push(r);
            }
            (n = ""), (o = 0), e.state.colNum++;
          }
          if (!e.match) {
            var l = RegExp.escape(a),
              c = RegExp.escape(t),
              u = /(D|S|\n|\r|[^DS\r\n]+)/.source;
            (u = (u = u.replace(/S/g, l)).replace(/D/g, c)),
              (e.match = new RegExp(u, "gm"));
          }
          return (
            r.replace(e.match, function (r) {
              switch (o) {
                case 0:
                  if (r === a) {
                    (n += ""), i();
                    break;
                  }
                  if (r === t) {
                    o = 1;
                    break;
                  }
                  if ("\n" === r || "\r" === r) break;
                  (n += r), (o = 3);
                  break;
                case 1:
                  if (r === t) {
                    o = 2;
                    break;
                  }
                  (n += r), (o = 1);
                  break;
                case 2:
                  if (r === t) {
                    (n += r), (o = 1);
                    break;
                  }
                  if (r === a) {
                    i();
                    break;
                  }
                  if ("\n" === r || "\r" === r) break;
                  throw new Error(
                    "CSVDataError: Illegal State [Row:" +
                      e.state.rowNum +
                      "][Col:" +
                      e.state.colNum +
                      "]"
                  );
                case 3:
                  if (r === a) {
                    i();
                    break;
                  }
                  if ("\n" === r || "\r" === r) break;
                  if (r === t)
                    throw new Error(
                      "CSVDataError: Illegal Quote [Row:" +
                        e.state.rowNum +
                        "][Col:" +
                        e.state.colNum +
                        "]"
                    );
                  throw new Error(
                    "CSVDataError: Illegal Data [Row:" +
                      e.state.rowNum +
                      "][Col:" +
                      e.state.colNum +
                      "]"
                  );
                default:
                  throw new Error(
                    "CSVDataError: Unknown State [Row:" +
                      e.state.rowNum +
                      "][Col:" +
                      e.state.colNum +
                      "]"
                  );
              }
            }),
            i(),
            s
          );
        },
      },
      helpers: {
        collectPropertyNames: function (r) {
          var e = [],
            a = [],
            t = [];
          for (e in r)
            for (a in r[e])
              r[e].hasOwnProperty(a) &&
                t.indexOf(a) < 0 &&
                "function" != typeof r[e][a] &&
                t.push(a);
          return t;
        },
      },
      toArray: function (e, a, t) {
        a = void 0 !== a ? a : {};
        var s = {};
        (s.callback = void 0 !== t && "function" == typeof t && t),
          (s.separator =
            "separator" in a ? a.separator : r.csv.defaults.separator),
          (s.delimiter =
            "delimiter" in a ? a.delimiter : r.csv.defaults.delimiter);
        var o = void 0 !== a.state ? a.state : {};
        a = {
          delimiter: s.delimiter,
          separator: s.separator,
          onParseEntry: a.onParseEntry,
          onParseValue: a.onParseValue,
          state: o,
        };
        var n = r.csv.parsers.parseEntry(e, a);
        if (!s.callback) return n;
        s.callback("", n);
      },
      toArrays: function (e, a, t) {
        a = void 0 !== a ? a : {};
        var s = {};
        (s.callback = void 0 !== t && "function" == typeof t && t),
          (s.separator =
            "separator" in a ? a.separator : r.csv.defaults.separator),
          (s.delimiter =
            "delimiter" in a ? a.delimiter : r.csv.defaults.delimiter);
        var o;
        if (
          (void 0 !==
            (a = {
              delimiter: s.delimiter,
              separator: s.separator,
              onPreParse: a.onPreParse,
              onParseEntry: a.onParseEntry,
              onParseValue: a.onParseValue,
              onPostParse: a.onPostParse,
              start: a.start,
              end: a.end,
              state: { rowNum: 1, colNum: 1 },
            }).onPreParse && a.onPreParse(e, a.state),
          (o = r.csv.parsers.parse(e, a)),
          void 0 !== a.onPostParse && a.onPostParse(o, a.state),
          !s.callback)
        )
          return o;
        s.callback("", o);
      },
      toObjects: function (e, a, t) {
        a = void 0 !== a ? a : {};
        var s = {};
        (s.callback = void 0 !== t && "function" == typeof t && t),
          (s.separator =
            "separator" in a ? a.separator : r.csv.defaults.separator),
          (s.delimiter =
            "delimiter" in a ? a.delimiter : r.csv.defaults.delimiter),
          (s.headers = "headers" in a ? a.headers : r.csv.defaults.headers),
          (a.start = "start" in a ? a.start : 1),
          s.headers && a.start++,
          a.end && s.headers && a.end++;
        var o,
          n = [];
        a = {
          delimiter: s.delimiter,
          separator: s.separator,
          onPreParse: a.onPreParse,
          onParseEntry: a.onParseEntry,
          onParseValue: a.onParseValue,
          onPostParse: a.onPostParse,
          start: a.start,
          end: a.end,
          state: { rowNum: 1, colNum: 1 },
          match: !1,
          transform: a.transform,
        };
        var i = {
          delimiter: s.delimiter,
          separator: s.separator,
          start: 1,
          end: 1,
          state: { rowNum: 1, colNum: 1 },
        };
        void 0 !== a.onPreParse && a.onPreParse(e, a.state);
        var l = r.csv.parsers.splitLines(e, i),
          c = r.csv.toArray(l[0], a);
        (o = r.csv.parsers.splitLines(e, a)),
          (a.state.colNum = 1),
          (a.state.rowNum = c ? 2 : 1);
        for (var u = 0, f = o.length; u < f; u++) {
          for (var d = r.csv.toArray(o[u], a), m = {}, p = 0; p < c.length; p++)
            m[c[p]] = d[p];
          void 0 !== a.transform
            ? n.push(a.transform.call(void 0, m))
            : n.push(m),
            a.state.rowNum++;
        }
        if (
          (void 0 !== a.onPostParse && a.onPostParse(n, a.state), !s.callback)
        )
          return n;
        s.callback("", n);
      },
      fromArrays: function (e, a, t) {
        a = void 0 !== a ? a : {};
        var s = {};
        (s.callback = void 0 !== t && "function" == typeof t && t),
          (s.separator =
            "separator" in a ? a.separator : r.csv.defaults.separator),
          (s.delimiter =
            "delimiter" in a ? a.delimiter : r.csv.defaults.delimiter);
        var o,
          n,
          i,
          l,
          c = "";
        for (i = 0; i < e.length; i++) {
          for (o = e[i], n = [], l = 0; l < o.length; l++) {
            var u = void 0 === o[l] || null === o[l] ? "" : o[l].toString();
            u.indexOf(s.delimiter) > -1 &&
              (u = u.replace(
                new RegExp(s.delimiter, "g"),
                s.delimiter + s.delimiter
              ));
            var f = "\n|\r|S|D";
            (f = (f = f.replace("S", s.separator)).replace("D", s.delimiter)),
              u.search(f) > -1 && (u = s.delimiter + u + s.delimiter),
              n.push(u);
          }
          c += n.join(s.separator) + "\r\n";
        }
        if (!s.callback) return c;
        s.callback("", c);
      },
      fromObjects: function (e, a, t) {
        a = void 0 !== a ? a : {};
        var s = {};
        if (
          ((s.callback = void 0 !== t && "function" == typeof t && t),
          (s.separator =
            "separator" in a ? a.separator : r.csv.defaults.separator),
          (s.delimiter =
            "delimiter" in a ? a.delimiter : r.csv.defaults.delimiter),
          (s.headers = "headers" in a ? a.headers : r.csv.defaults.headers),
          (s.sortOrder = "sortOrder" in a ? a.sortOrder : "declare"),
          (s.manualOrder = "manualOrder" in a ? a.manualOrder : []),
          (s.transform = a.transform),
          "string" == typeof s.manualOrder &&
            (s.manualOrder = r.csv.toArray(s.manualOrder, s)),
          void 0 !== s.transform)
        ) {
          var o,
            n = e;
          for (e = [], o = 0; o < n.length; o++)
            e.push(s.transform.call(void 0, n[o]));
        }
        var i = r.csv.helpers.collectPropertyNames(e);
        if (("alpha" === s.sortOrder && i.sort(), s.manualOrder.length > 0)) {
          var l = [].concat(s.manualOrder);
          for (u = 0; u < i.length; u++) l.indexOf(i[u]) < 0 && l.push(i[u]);
          i = l;
        }
        var c,
          u,
          f,
          d,
          m = [];
        for (s.headers && m.push(i), c = 0; c < e.length; c++) {
          for (f = [], u = 0; u < i.length; u++)
            (d = i[u]) in e[c] && "function" != typeof e[c][d]
              ? f.push(e[c][d])
              : f.push("");
          m.push(f);
        }
        return r.csv.fromArrays(m, a, s.callback);
      },
    }),
      (r.csvEntry2Array = r.csv.toArray),
      (r.csv2Array = r.csv.toArrays),
      (r.csv2Dictionary = r.csv.toObjects),
      "undefined" != typeof module &&
        module.exports &&
        (module.exports = r.csv);
  }.call(this);

/*!
 DataTables 1.10.19
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
  "function" === typeof define && define.amd
    ? define(["jquery"], function (E) {
        return h(E, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (E, H) {
        E || (E = window);
        H ||
          (H =
            "undefined" !== typeof window
              ? require("jquery")
              : require("jquery")(E));
        return h(H, E, E.document);
      })
    : h(jQuery, window, document);
})(function (h, E, H, k) {
  function Z(a) {
    var b,
      c,
      d = {};
    h.each(a, function (e) {
      if (
        (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")
      )
        (c = e.replace(b[0], b[2].toLowerCase())),
          (d[c] = e),
          "o" === b[1] && Z(a[e]);
    });
    a._hungarianMap = d;
  }
  function J(a, b, c) {
    a._hungarianMap || Z(a);
    var d;
    h.each(b, function (e) {
      d = a._hungarianMap[e];
      if (d !== k && (c || b[d] === k))
        "o" === d.charAt(0)
          ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c))
          : (b[d] = b[e]);
    });
  }
  function Ca(a) {
    var b = n.defaults.oLanguage,
      c = b.sDecimal;
    c && Da(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable &&
        d &&
        "No data available in table" === b.sEmptyTable &&
        F(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords &&
        d &&
        "Loading..." === b.sLoadingRecords &&
        F(a, a, "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Da(a);
    }
  }
  function fb(a) {
    A(a, "ordering", "bSort");
    A(a, "orderMulti", "bSortMulti");
    A(a, "orderClasses", "bSortClasses");
    A(a, "orderCellsTop", "bSortCellsTop");
    A(a, "order", "aaSorting");
    A(a, "orderFixed", "aaSortingFixed");
    A(a, "paging", "bPaginate");
    A(a, "pagingType", "sPaginationType");
    A(a, "pageLength", "iDisplayLength");
    A(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if ((a = a.aoSearchCols))
      for (var b = 0, c = a.length; b < c; b++)
        a[b] && J(n.models.oSearch, a[b]);
  }
  function gb(a) {
    A(a, "orderable", "bSortable");
    A(a, "orderData", "aDataSort");
    A(a, "orderSequence", "asSorting");
    A(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]);
  }
  function hb(a) {
    if (!n.__browser) {
      var b = {};
      n.__browser = b;
      var c = h("<div/>")
          .css({
            position: "fixed",
            top: 0,
            left: -1 * h(E).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden",
          })
          .append(
            h("<div/>")
              .css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll",
              })
              .append(h("<div/>").css({ width: "100%", height: 10 }))
          )
          .appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    h.extend(a.oBrowser, n.__browser);
    a.oScroll.iBarWidth = n.__browser.barWidth;
  }
  function ib(a, b, c, d, e, f) {
    var g,
      j = !1;
    c !== k && ((g = c), (j = !0));
    for (; d !== e; )
      a.hasOwnProperty(d) &&
        ((g = j ? b(g, a[d], d, a) : a[d]), (j = !0), (d += f));
    return g;
  }
  function Ea(a, b) {
    var c = n.defaults.column,
      d = a.aoColumns.length,
      c = h.extend({}, n.models.oColumn, c, {
        nTh: b ? b : H.createElement("th"),
        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
        aDataSort: c.aDataSort ? c.aDataSort : [d],
        mData: c.mData ? c.mData : d,
        idx: d,
      });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = h.extend({}, n.models.oSearch, c[d]);
    ka(a, d, h(b).data());
  }
  function ka(a, b, c) {
    var b = a.aoColumns[b],
      d = a.oClasses,
      e = h(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1]);
    }
    c !== k &&
      null !== c &&
      (gb(c),
      J(n.defaults.column, c),
      c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      c.sClass && e.addClass(c.sClass),
      h.extend(b, c),
      F(b, c, "sWidth", "sWidthOrig"),
      c.iDataSort !== k && (b.aDataSort = [c.iDataSort]),
      F(b, c, "aDataSort"));
    var g = b.mData,
      j = S(g),
      i = b.mRender ? S(b.mRender) : null,
      c = function (a) {
        return "string" === typeof a && -1 !== a.indexOf("@");
      };
    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);
      return i && b ? i(d, b, a, c) : d;
    };
    b.fnSetData = function (a, b, c) {
      return N(g)(a, b, c);
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== h.inArray("asc", b.asSorting);
    c = -1 !== h.inArray("desc", b.asSorting);
    !b.bSortable || (!a && !c)
      ? ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""))
      : a && !c
      ? ((b.sSortingClass = d.sSortableAsc),
        (b.sSortingClassJUI = d.sSortJUIAscAllowed))
      : !a && c
      ? ((b.sSortingClass = d.sSortableDesc),
        (b.sSortingClassJUI = d.sSortJUIDescAllowed))
      : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI));
  }
  function $(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Fa(a);
      for (var c = 0, d = b.length; c < d; c++)
        b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ("" !== b.sY || "" !== b.sX) && la(a);
    r(a, null, "column-sizing", [a]);
  }
  function aa(a, b) {
    var c = ma(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null;
  }
  function ba(a, b) {
    var c = ma(a, "bVisible"),
      c = h.inArray(b, c);
    return -1 !== c ? c : null;
  }
  function V(a) {
    var b = 0;
    h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++;
    });
    return b;
  }
  function ma(a, b) {
    var c = [];
    h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });
    return c;
  }
  function Ga(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = n.ext.type.detect,
      e,
      f,
      g,
      j,
      i,
      h,
      l,
      q,
      t;
    e = 0;
    for (f = b.length; e < f; e++)
      if (((l = b[e]), (t = []), !l.sType && l._sManualType))
        l.sType = l._sManualType;
      else if (!l.sType) {
        g = 0;
        for (j = d.length; g < j; g++) {
          i = 0;
          for (h = c.length; i < h; i++) {
            t[i] === k && (t[i] = B(a, i, e, "type"));
            q = d[g](t[i], a);
            if (!q && g !== d.length - 1) break;
            if ("html" === q) break;
          }
          if (q) {
            l.sType = q;
            break;
          }
        }
        l.sType || (l.sType = "string");
      }
  }
  function jb(a, b, c, d) {
    var e,
      f,
      g,
      j,
      i,
      m,
      l = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        m = b[e];
        var q = m.targets !== k ? m.targets : m.aTargets;
        h.isArray(q) || (q = [q]);
        f = 0;
        for (g = q.length; f < g; f++)
          if ("number" === typeof q[f] && 0 <= q[f]) {
            for (; l.length <= q[f]; ) Ea(a);
            d(q[f], m);
          } else if ("number" === typeof q[f] && 0 > q[f])
            d(l.length + q[f], m);
          else if ("string" === typeof q[f]) {
            j = 0;
            for (i = l.length; j < i; j++)
              ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m);
          }
      }
    if (c) {
      e = 0;
      for (a = c.length; e < a; e++) d(e, c[e]);
    }
  }
  function O(a, b, c, d) {
    var e = a.aoData.length,
      f = h.extend(!0, {}, n.models.oRow, { src: c ? "dom" : "data", idx: e });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++)
      g[j].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== k && (a.aIds[b] = f);
    (c || !a.oFeatures.bDeferRender) && Ha(a, e, c, d);
    return e;
  }
  function na(a, b) {
    var c;
    b instanceof h || (b = h(b));
    return b.map(function (b, e) {
      c = Ia(a, e);
      return O(a, c.data, e, c.cells);
    });
  }
  function B(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      j = f.sDefaultContent,
      i = f.fnGetData(g, d, { settings: a, row: b, col: c });
    if (i === k)
      return (
        a.iDrawError != e &&
          null === j &&
          (K(
            a,
            0,
            "Requested unknown parameter " +
              ("function" == typeof f.mData
                ? "{function}"
                : "'" + f.mData + "'") +
              " for row " +
              b +
              ", column " +
              c,
            4
          ),
          (a.iDrawError = e)),
        j
      );
    if ((i === g || null === i) && null !== j && d !== k) i = j;
    else if ("function" === typeof i) return i.call(g);
    return null === i && "display" == d ? "" : i;
  }
  function kb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c,
    });
  }
  function Ja(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".");
    });
  }
  function S(a) {
    if (h.isPlainObject(a)) {
      var b = {};
      h.each(a, function (a, c) {
        c && (b[a] = S(c));
      });
      return function (a, c, f, g) {
        var j = b[c] || b._;
        return j !== k ? j(a, c, f, g) : a;
      };
    }
    if (null === a)
      return function (a) {
        return a;
      };
    if ("function" === typeof a)
      return function (b, c, f, g) {
        return a(b, c, f, g);
      };
    if (
      "string" === typeof a &&
      (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))
    ) {
      var c = function (a, b, f) {
        var g, j;
        if ("" !== f) {
          j = Ja(f);
          for (var i = 0, m = j.length; i < m; i++) {
            f = j[i].match(ca);
            g = j[i].match(W);
            if (f) {
              j[i] = j[i].replace(ca, "");
              "" !== j[i] && (a = a[j[i]]);
              g = [];
              j.splice(0, i + 1);
              j = j.join(".");
              if (h.isArray(a)) {
                i = 0;
                for (m = a.length; i < m; i++) g.push(c(a[i], b, j));
              }
              a = f[0].substring(1, f[0].length - 1);
              a = "" === a ? g : g.join(a);
              break;
            } else if (g) {
              j[i] = j[i].replace(W, "");
              a = a[j[i]]();
              continue;
            }
            if (null === a || a[j[i]] === k) return k;
            a = a[j[i]];
          }
        }
        return a;
      };
      return function (b, e) {
        return c(b, e, a);
      };
    }
    return function (b) {
      return b[a];
    };
  }
  function N(a) {
    if (h.isPlainObject(a)) return N(a._);
    if (null === a) return function () {};
    if ("function" === typeof a)
      return function (b, d, e) {
        a(b, "set", d, e);
      };
    if (
      "string" === typeof a &&
      (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))
    ) {
      var b = function (a, d, e) {
        var e = Ja(e),
          f;
        f = e[e.length - 1];
        for (var g, j, i = 0, m = e.length - 1; i < m; i++) {
          g = e[i].match(ca);
          j = e[i].match(W);
          if (g) {
            e[i] = e[i].replace(ca, "");
            a[e[i]] = [];
            f = e.slice();
            f.splice(0, i + 1);
            g = f.join(".");
            if (h.isArray(d)) {
              j = 0;
              for (m = d.length; j < m; j++)
                (f = {}), b(f, d[j], g), a[e[i]].push(f);
            } else a[e[i]] = d;
            return;
          }
          j && ((e[i] = e[i].replace(W, "")), (a = a[e[i]](d)));
          if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
          a = a[e[i]];
        }
        if (f.match(W)) a[f.replace(W, "")](d);
        else a[f.replace(ca, "")] = d;
      };
      return function (c, d) {
        return b(c, d, a);
      };
    }
    return function (b, d) {
      b[a] = d;
    };
  }
  function Ka(a) {
    return D(a.aoData, "_aData");
  }
  function oa(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function pa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++)
      a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === k && a.splice(d, 1);
  }
  function da(a, b, c, d) {
    var e = a.aoData[b],
      f,
      g = function (c, d) {
        for (; c.childNodes.length; ) c.removeChild(c.firstChild);
        c.innerHTML = B(a, b, d, "display");
      };
    if ("dom" === c || ((!c || "auto" === c) && "dom" === e.src))
      e._aData = Ia(a, e, d, d === k ? k : e._aData).data;
    else {
      var j = e.anCells;
      if (j)
        if (d !== k) g(j[d], d);
        else {
          c = 0;
          for (f = j.length; c < f; c++) g(j[c], c);
        }
    }
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== k) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      La(a, e);
    }
  }
  function Ia(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g,
      j,
      i = 0,
      m,
      l = a.aoColumns,
      q = a._rowReadObject,
      d = d !== k ? d : q ? {} : [],
      t = function (a, b) {
        if ("string" === typeof a) {
          var c = a.indexOf("@");
          -1 !== c && ((c = a.substring(c + 1)), N(a)(d, b.getAttribute(c)));
        }
      },
      G = function (a) {
        if (c === k || c === i)
          (j = l[i]),
            (m = h.trim(a.innerHTML)),
            j && j._bAttrSrc
              ? (N(j.mData._)(d, m),
                t(j.mData.sort, a),
                t(j.mData.type, a),
                t(j.mData.filter, a))
              : q
              ? (j._setter || (j._setter = N(j.mData)), j._setter(d, m))
              : (d[i] = m);
        i++;
      };
    if (f)
      for (; f; ) {
        g = f.nodeName.toUpperCase();
        if ("TD" == g || "TH" == g) G(f), e.push(f);
        f = f.nextSibling;
      }
    else {
      e = b.anCells;
      f = 0;
      for (g = e.length; f < g; f++) G(e[f]);
    }
    if ((b = b.firstChild ? b : b.nTr))
      (b = b.getAttribute("id")) && N(a.rowId)(d, b);
    return { data: d, cells: e };
  }
  function Ha(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      j,
      i,
      m,
      l,
      q;
    if (null === e.nTr) {
      j = c || H.createElement("tr");
      e.nTr = j;
      e.anCells = g;
      j._DT_RowIndex = b;
      La(a, e);
      l = 0;
      for (q = a.aoColumns.length; l < q; l++) {
        m = a.aoColumns[l];
        i = c ? d[l] : H.createElement(m.sCellType);
        i._DT_CellIndex = { row: b, column: l };
        g.push(i);
        if (
          (!c || m.mRender || m.mData !== l) &&
          (!h.isPlainObject(m.mData) || m.mData._ !== l + ".display")
        )
          i.innerHTML = B(a, b, l, "display");
        m.sClass && (i.className += " " + m.sClass);
        m.bVisible && !c
          ? j.appendChild(i)
          : !m.bVisible && c && i.parentNode.removeChild(i);
        m.fnCreatedCell &&
          m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
      }
      r(a, "aoRowCreatedCallback", null, [j, f, b, g]);
    }
    e.nTr.setAttribute("role", "row");
  }
  function La(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass &&
        ((e = d.DT_RowClass.split(" ")),
        (b.__rowc = b.__rowc ? qa(b.__rowc.concat(e)) : e),
        h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
      d.DT_RowData && h(c).data(d.DT_RowData);
    }
  }
  function lb(a) {
    var b,
      c,
      d,
      e,
      f,
      g = a.nTHead,
      j = a.nTFoot,
      i = 0 === h("th, td", g).length,
      m = a.oClasses,
      l = a.aoColumns;
    i && (e = h("<tr/>").appendTo(g));
    b = 0;
    for (c = l.length; b < c; b++)
      (f = l[b]),
        (d = h(f.nTh).addClass(f.sClass)),
        i && d.appendTo(e),
        a.oFeatures.bSort &&
          (d.addClass(f.sSortingClass),
          !1 !== f.bSortable &&
            (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId),
            Ma(a, f.nTh, b))),
        f.sTitle != d[0].innerHTML && d.html(f.sTitle),
        Na(a, "header")(a, d, f, m);
    i && ea(a.aoHeader, g);
    h(g).find(">tr").attr("role", "row");
    h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);
    h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);
    if (null !== j) {
      a = a.aoFooter[0];
      b = 0;
      for (c = a.length; b < c; b++)
        (f = l[b]),
          (f.nTf = a[b].cell),
          f.sClass && h(f.nTf).addClass(f.sClass);
    }
  }
  function fa(a, b, c) {
    var d,
      e,
      f,
      g = [],
      j = [],
      i = a.aoColumns.length,
      m;
    if (b) {
      c === k && (c = !1);
      d = 0;
      for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();
        g[d].nTr = b[d].nTr;
        for (f = i - 1; 0 <= f; f--)
          !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        j.push([]);
      }
      d = 0;
      for (e = g.length; d < e; d++) {
        if ((a = g[d].nTr)) for (; (f = a.firstChild); ) a.removeChild(f);
        f = 0;
        for (b = g[d].length; f < b; f++)
          if (((m = i = 1), j[d][f] === k)) {
            a.appendChild(g[d][f].cell);
            for (
              j[d][f] = 1;
              g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;

            )
              (j[d + i][f] = 1), i++;
            for (; g[d][f + m] !== k && g[d][f].cell == g[d][f + m].cell; ) {
              for (c = 0; c < i; c++) j[d + c][f + m] = 1;
              m++;
            }
            h(g[d][f].cell).attr("rowspan", i).attr("colspan", m);
          }
      }
    }
  }
  function P(a) {
    var b = r(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== h.inArray(!1, b)) C(a, !1);
    else {
      var b = [],
        c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        j = "ssp" == y(a),
        i = a.aiDisplay;
      a.bDrawing = !0;
      g !== k &&
        -1 !== g &&
        ((a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g),
        (a.iInitDisplayStart = -1));
      var g = a._iDisplayStart,
        m = a.fnDisplayEnd();
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, C(a, !1);
      else if (j) {
        if (!a.bDestroying && !mb(a)) return;
      } else a.iDraw++;
      if (0 !== i.length) {
        f = j ? a.aoData.length : m;
        for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
            q = a.aoData[l];
          null === q.nTr && Ha(a, l);
          var t = q.nTr;
          if (0 !== e) {
            var G = d[c % e];
            q._sRowStripe != G &&
              (h(t).removeClass(q._sRowStripe).addClass(G),
              (q._sRowStripe = G));
          }
          r(a, "aoRowCallback", null, [t, q._aData, c, j, l]);
          b.push(t);
          c++;
        }
      } else
        (c = f.sZeroRecords),
          1 == a.iDraw && "ajax" == y(a)
            ? (c = f.sLoadingRecords)
            : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
          (b[0] = h("<tr/>", { class: e ? d[0] : "" }).append(
            h("<td />", {
              valign: "top",
              colSpan: V(a),
              class: a.oClasses.sRowEmpty,
            }).html(c)
          )[0]);
      r(a, "aoHeaderCallback", "header", [
        h(a.nTHead).children("tr")[0],
        Ka(a),
        g,
        m,
        i,
      ]);
      r(a, "aoFooterCallback", "footer", [
        h(a.nTFoot).children("tr")[0],
        Ka(a),
        g,
        m,
        i,
      ]);
      d = h(a.nTBody);
      d.children().detach();
      d.append(h(b));
      r(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function T(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && nb(a);
    d ? ga(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    P(a);
    a._drawHold = !1;
  }
  function ob(a) {
    var b = a.oClasses,
      c = h(a.nTable),
      c = h("<div/>").insertBefore(c),
      d = a.oFeatures,
      e = h("<div/>", {
        id: a.sTableId + "_wrapper",
        class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter),
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
      g = null;
      j = f[k];
      if ("<" == j) {
        i = h("<div/>")[0];
        m = f[k + 1];
        if ("'" == m || '"' == m) {
          l = "";
          for (q = 2; f[k + q] != m; ) (l += f[k + q]), q++;
          "H" == l ? (l = b.sJUIHeader) : "F" == l && (l = b.sJUIFooter);
          -1 != l.indexOf(".")
            ? ((m = l.split(".")),
              (i.id = m[0].substr(1, m[0].length - 1)),
              (i.className = m[1]))
            : "#" == l.charAt(0)
            ? (i.id = l.substr(1, l.length - 1))
            : (i.className = l);
          k += q;
        }
        e.append(i);
        e = h(i);
      } else if (">" == j) e = e.parent();
      else if ("l" == j && d.bPaginate && d.bLengthChange) g = pb(a);
      else if ("f" == j && d.bFilter) g = qb(a);
      else if ("r" == j && d.bProcessing) g = rb(a);
      else if ("t" == j) g = sb(a);
      else if ("i" == j && d.bInfo) g = tb(a);
      else if ("p" == j && d.bPaginate) g = ub(a);
      else if (0 !== n.ext.feature.length) {
        i = n.ext.feature;
        q = 0;
        for (m = i.length; q < m; q++)
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);
            break;
          }
      }
      g &&
        ((i = a.aanFeatures), i[j] || (i[j] = []), i[j].push(g), e.append(g));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function ea(a, b) {
    var c = h(b).children("tr"),
      d,
      e,
      f,
      g,
      j,
      i,
      m,
      l,
      q,
      k;
    a.splice(0, a.length);
    f = 0;
    for (i = c.length; f < i; f++) a.push([]);
    f = 0;
    for (i = c.length; f < i; f++) {
      d = c[f];
      for (e = d.firstChild; e; ) {
        if (
          "TD" == e.nodeName.toUpperCase() ||
          "TH" == e.nodeName.toUpperCase()
        ) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");
          l = !l || 0 === l || 1 === l ? 1 : l;
          q = !q || 0 === q || 1 === q ? 1 : q;
          g = 0;
          for (j = a[f]; j[g]; ) g++;
          m = g;
          k = 1 === l ? !0 : !1;
          for (j = 0; j < l; j++)
            for (g = 0; g < q; g++)
              (a[f + g][m + j] = { cell: e, unique: k }), (a[f + g].nTr = d);
        }
        e = e.nextSibling;
      }
    }
  }
  function ra(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), ea(c, b)));
    for (var b = 0, e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
    return d;
  }
  function sa(a, b, c) {
    r(a, "aoServerParams", "serverParams", [b]);
    if (b && h.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      h.each(b, function (a, b) {
        var c = b.name.match(e);
        c
          ? ((c = c[0]), d[c] || (d[c] = []), d[c].push(b.value))
          : (d[b.name] = b.value);
      });
      b = d;
    }
    var f,
      g = a.ajax,
      j = a.oInstance,
      i = function (b) {
        r(a, null, "xhr", [a, b, a.jqXHR]);
        c(b);
      };
    if (h.isPlainObject(g) && g.data) {
      f = g.data;
      var m = "function" === typeof f ? f(b, a) : f,
        b = "function" === typeof f && m ? m : h.extend(!0, b, m);
      delete g.data;
    }
    m = {
      data: b,
      success: function (b) {
        var c = b.error || b.sError;
        c && K(a, 0, c);
        a.json = b;
        i(b);
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (b, c) {
        var d = r(a, null, "xhr", [a, null, a.jqXHR]);
        -1 === h.inArray(!0, d) &&
          ("parsererror" == c
            ? K(a, 0, "Invalid JSON response", 1)
            : 4 === b.readyState && K(a, 0, "Ajax error", 7));
        C(a, !1);
      },
    };
    a.oAjaxData = b;
    r(a, null, "preXhr", [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          j,
          a.sAjaxSource,
          h.map(b, function (a, b) {
            return { name: b, value: a };
          }),
          i,
          a
        )
      : a.sAjaxSource || "string" === typeof g
      ? (a.jqXHR = h.ajax(h.extend(m, { url: g || a.sAjaxSource })))
      : "function" === typeof g
      ? (a.jqXHR = g.call(j, b, i, a))
      : ((a.jqXHR = h.ajax(h.extend(m, g))), (g.data = f));
  }
  function mb(a) {
    return a.bAjaxDataGet
      ? (a.iDraw++,
        C(a, !0),
        sa(a, vb(a), function (b) {
          wb(a, b);
        }),
        !1)
      : !0;
  }
  function vb(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g,
      j = [],
      i,
      m,
      l,
      k = X(a);
    g = a._iDisplayStart;
    i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var t = function (a, b) {
      j.push({ name: a, value: b });
    };
    t("sEcho", a.iDraw);
    t("iColumns", c);
    t("sColumns", D(b, "sName").join(","));
    t("iDisplayStart", g);
    t("iDisplayLength", i);
    var G = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: g,
      length: i,
      search: { value: e.sSearch, regex: e.bRegex },
    };
    for (g = 0; g < c; g++)
      (m = b[g]),
        (l = f[g]),
        (i = "function" == typeof m.mData ? "function" : m.mData),
        G.columns.push({
          data: i,
          name: m.sName,
          searchable: m.bSearchable,
          orderable: m.bSortable,
          search: { value: l.sSearch, regex: l.bRegex },
        }),
        t("mDataProp_" + g, i),
        d.bFilter &&
          (t("sSearch_" + g, l.sSearch),
          t("bRegex_" + g, l.bRegex),
          t("bSearchable_" + g, m.bSearchable)),
        d.bSort && t("bSortable_" + g, m.bSortable);
    d.bFilter && (t("sSearch", e.sSearch), t("bRegex", e.bRegex));
    d.bSort &&
      (h.each(k, function (a, b) {
        G.order.push({ column: b.col, dir: b.dir });
        t("iSortCol_" + a, b.col);
        t("sSortDir_" + a, b.dir);
      }),
      t("iSortingCols", k.length));
    b = n.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? j : G) : b ? j : G;
  }
  function wb(a, b) {
    var c = ta(a, b),
      d = b.sEcho !== k ? b.sEcho : b.draw,
      e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
      f =
        b.iTotalDisplayRecords !== k
          ? b.iTotalDisplayRecords
          : b.recordsFiltered;
    if (d) {
      if (1 * d < a.iDraw) return;
      a.iDraw = 1 * d;
    }
    oa(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f, 10);
    d = 0;
    for (e = c.length; d < e; d++) O(a, c[d]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    P(a);
    a._bInitComplete || ua(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1);
  }
  function ta(a, b) {
    var c =
      h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k
        ? a.ajax.dataSrc
        : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? S(c)(b) : b;
  }
  function qb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      j = d.sSearch,
      j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
      b = h("<div/>", {
        id: !f.f ? c + "_filter" : null,
        class: b.sFilter,
      }).append(h("<label/>").append(j)),
      f = function () {
        var b = !this.value ? "" : this.value;
        b != e.sSearch &&
          (ga(a, {
            sSearch: b,
            bRegex: e.bRegex,
            bSmart: e.bSmart,
            bCaseInsensitive: e.bCaseInsensitive,
          }),
          (a._iDisplayStart = 0),
          P(a));
      },
      g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
      i = h("input", b)
        .val(e.sSearch)
        .attr("placeholder", d.sSearchPlaceholder)
        .on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Oa(f, g) : f)
        .on("keypress.DT", function (a) {
          if (13 == a.keyCode) return !1;
        })
        .attr("aria-controls", c);
    h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c)
        try {
          i[0] !== H.activeElement && i.val(e.sSearch);
        } catch (d) {}
    });
    return b[0];
  }
  function ga(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive;
      };
    Ga(a);
    if ("ssp" != y(a)) {
      xb(
        a,
        b.sSearch,
        c,
        b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex,
        b.bSmart,
        b.bCaseInsensitive
      );
      f(b);
      for (b = 0; b < e.length; b++)
        yb(
          a,
          e[b].sSearch,
          b,
          e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex,
          e[b].bSmart,
          e[b].bCaseInsensitive
        );
      zb(a);
    } else f(b);
    a.bFiltered = !0;
    r(a, null, "search", [a]);
  }
  function zb(a) {
    for (
      var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length;
      f < g;
      f++
    ) {
      for (var j = [], i = 0, m = c.length; i < m; i++)
        (e = c[i]),
          (d = a.aoData[e]),
          b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      c.length = 0;
      h.merge(c, j);
    }
  }
  function yb(a, b, c, d, e, f) {
    if ("" !== b) {
      for (
        var g = [], j = a.aiDisplay, d = Pa(b, d, e, f), e = 0;
        e < j.length;
        e++
      )
        (b = a.aoData[j[e]]._aFilterData[c]), d.test(b) && g.push(j[e]);
      a.aiDisplay = g;
    }
  }
  function xb(a, b, c, d, e, f) {
    var d = Pa(b, d, e, f),
      f = a.oPreviousSearch.sSearch,
      g = a.aiDisplayMaster,
      j,
      e = [];
    0 !== n.ext.search.length && (c = !0);
    j = Ab(a);
    if (0 >= b.length) a.aiDisplay = g.slice();
    else {
      if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted)
        a.aiDisplay = g.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++)
        d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      a.aiDisplay = e;
    }
  }
  function Pa(a, b, c, d) {
    a = b ? a : Qa(a);
    c &&
      (a =
        "^(?=.*?" +
        h
          .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
            if ('"' === a.charAt(0))
              var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "");
          })
          .join(")(?=.*?") +
        ").*$");
    return RegExp(a, d ? "i" : "");
  }
  function Ab(a) {
    var b = a.aoColumns,
      c,
      d,
      e,
      f,
      g,
      j,
      i,
      h,
      l = n.ext.type.search;
    c = !1;
    d = 0;
    for (f = a.aoData.length; d < f; d++)
      if (((h = a.aoData[d]), !h._aFilterData)) {
        j = [];
        e = 0;
        for (g = b.length; e < g; e++)
          (c = b[e]),
            c.bSearchable
              ? ((i = B(a, d, e, "filter")),
                l[c.sType] && (i = l[c.sType](i)),
                null === i && (i = ""),
                "string" !== typeof i && i.toString && (i = i.toString()))
              : (i = ""),
            i.indexOf &&
              -1 !== i.indexOf("&") &&
              ((va.innerHTML = i), (i = Wb ? va.textContent : va.innerText)),
            i.replace && (i = i.replace(/[\r\n]/g, "")),
            j.push(i);
        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0;
      }
    return c;
  }
  function Bb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive,
    };
  }
  function Cb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive,
    };
  }
  function tb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = h("<div/>", { class: a.oClasses.sInfo, id: !c ? b + "_info" : null });
    c ||
      (a.aoDrawCallback.push({ fn: Db, sName: "information" }),
      d.attr("role", "status").attr("aria-live", "polite"),
      h(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0];
  }
  function Db(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        j = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (j += " " + c.sInfoFiltered);
      j += c.sInfoPostFix;
      j = Eb(a, j);
      c = c.fnInfoCallback;
      null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
      h(b).html(j);
    }
  }
  function Eb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, f))
      .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }
  function ha(a) {
    var b,
      c,
      d = a.iInitDisplayStart,
      e = a.aoColumns,
      f;
    c = a.oFeatures;
    var g = a.bDeferLoading;
    if (a.bInitialised) {
      ob(a);
      lb(a);
      fa(a, a.aoHeader);
      fa(a, a.aoFooter);
      C(a, !0);
      c.bAutoWidth && Fa(a);
      b = 0;
      for (c = e.length; b < c; b++)
        (f = e[b]), f.sWidth && (f.nTh.style.width = v(f.sWidth));
      r(a, null, "preInit", [a]);
      T(a);
      e = y(a);
      if ("ssp" != e || g)
        "ajax" == e
          ? sa(
              a,
              [],
              function (c) {
                var f = ta(a, c);
                for (b = 0; b < f.length; b++) O(a, f[b]);
                a.iInitDisplayStart = d;
                T(a);
                C(a, !1);
                ua(a, c);
              },
              a
            )
          : (C(a, !1), ua(a));
    } else
      setTimeout(function () {
        ha(a);
      }, 200);
  }
  function ua(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && $(a);
    r(a, null, "plugin-init", [a, b]);
    r(a, "aoInitComplete", "init", [a, b]);
  }
  function Ra(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    Sa(a);
    r(a, null, "length", [a, c]);
  }
  function pb(a) {
    for (
      var b = a.oClasses,
        c = a.sTableId,
        d = a.aLengthMenu,
        e = h.isArray(d[0]),
        f = e ? d[0] : d,
        d = e ? d[1] : d,
        e = h("<select/>", {
          name: c + "_length",
          "aria-controls": c,
          class: b.sLengthSelect,
        }),
        g = 0,
        j = f.length;
      g < j;
      g++
    )
      e[0][g] = new Option(
        "number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g],
        f[g]
      );
    var i = h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (i[0].id = c + "_length");
    i.children().append(
      a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)
    );
    h("select", i)
      .val(a._iDisplayLength)
      .on("change.DT", function () {
        Ra(a, h(this).val());
        P(a);
      });
    h(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d);
    });
    return i[0];
  }
  function ub(a) {
    var b = a.sPaginationType,
      c = n.ext.pager[b],
      d = "function" === typeof c,
      e = function (a) {
        P(a);
      },
      b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
      f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p ||
      ((b.id = a.sTableId + "_paginate"),
      a.aoDrawCallback.push({
        fn: function (a) {
          if (d) {
            var b = a._iDisplayStart,
              i = a._iDisplayLength,
              h = a.fnRecordsDisplay(),
              l = -1 === i,
              b = l ? 0 : Math.ceil(b / i),
              i = l ? 1 : Math.ceil(h / i),
              h = c(b, i),
              k,
              l = 0;
            for (k = f.p.length; l < k; l++)
              Na(a, "pageButton")(a, f.p[l], l, h, b, i);
          } else c.fnUpdate(a, e);
        },
        sName: "pagination",
      }));
    return b;
  }
  function Ta(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 === e
      ? (d = 0)
      : "number" === typeof b
      ? ((d = b * e), d > f && (d = 0))
      : "first" == b
      ? (d = 0)
      : "previous" == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : "next" == b
      ? d + e < f && (d += e)
      : "last" == b
      ? (d = Math.floor((f - 1) / e) * e)
      : K(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (r(a, null, "page", [a]), c && P(a));
    return b;
  }
  function rb(a) {
    return h("<div/>", {
      id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
      class: a.oClasses.sProcessing,
    })
      .html(a.oLanguage.sProcessing)
      .insertBefore(a.nTable)[0];
  }
  function C(a, b) {
    a.oFeatures.bProcessing &&
      h(a.aanFeatures.r).css("display", b ? "block" : "none");
    r(a, null, "processing", [a, b]);
  }
  function sb(a) {
    var b = h(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      j = g.length ? g[0]._captionSide : null,
      i = h(b[0].cloneNode(!1)),
      m = h(b[0].cloneNode(!1)),
      l = b.children("tfoot");
    l.length || (l = null);
    i = h("<div/>", { class: f.sScrollWrapper })
      .append(
        h("<div/>", { class: f.sScrollHead })
          .css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? (!d ? null : v(d)) : "100%",
          })
          .append(
            h("<div/>", { class: f.sScrollHeadInner })
              .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
              .append(
                i
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("top" === j ? g : null)
                  .append(b.children("thead"))
              )
          )
      )
      .append(
        h("<div/>", { class: f.sScrollBody })
          .css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : v(d),
          })
          .append(b)
      );
    l &&
      i.append(
        h("<div/>", { class: f.sScrollFoot })
          .css({
            overflow: "hidden",
            border: 0,
            width: d ? (!d ? null : v(d)) : "100%",
          })
          .append(
            h("<div/>", { class: f.sScrollFootInner }).append(
              m
                .removeAttr("id")
                .css("margin-left", 0)
                .append("bottom" === j ? g : null)
                .append(b.children("tfoot"))
            )
          )
      );
    var b = i.children(),
      k = b[0],
      f = b[1],
      t = l ? b[2] : null;
    if (d)
      h(f).on("scroll.DT", function () {
        var a = this.scrollLeft;
        k.scrollLeft = a;
        l && (t.scrollLeft = a);
      });
    h(f).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = k;
    a.nScrollBody = f;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({ fn: la, sName: "scrolling" });
    return i[0];
  }
  function la(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY,
      b = b.iBarWidth,
      f = h(a.nScrollHead),
      g = f[0].style,
      j = f.children("div"),
      i = j[0].style,
      m = j.children("table"),
      j = a.nScrollBody,
      l = h(j),
      q = j.style,
      t = h(a.nScrollFoot).children("div"),
      n = t.children("table"),
      o = h(a.nTHead),
      p = h(a.nTable),
      s = p[0],
      r = s.style,
      u = a.nTFoot ? h(a.nTFoot) : null,
      x = a.oBrowser,
      U = x.bScrollOversize,
      Xb = D(a.aoColumns, "nTh"),
      Q,
      L,
      R,
      w,
      Ua = [],
      y = [],
      z = [],
      A = [],
      B,
      C = function (a) {
        a = a.style;
        a.paddingTop = "0";
        a.paddingBottom = "0";
        a.borderTopWidth = "0";
        a.borderBottomWidth = "0";
        a.height = 0;
      };
    L = j.scrollHeight > j.clientHeight;
    if (a.scrollBarVis !== L && a.scrollBarVis !== k)
      (a.scrollBarVis = L), $(a);
    else {
      a.scrollBarVis = L;
      p.children("thead, tfoot").remove();
      u &&
        ((R = u.clone().prependTo(p)), (Q = u.find("tr")), (R = R.find("tr")));
      w = o.clone().prependTo(p);
      o = o.find("tr");
      L = w.find("tr");
      w.find("th, td").removeAttr("tabindex");
      c || ((q.width = "100%"), (f[0].style.width = "100%"));
      h.each(ra(a, w), function (b, c) {
        B = aa(a, b);
        c.style.width = a.aoColumns[B].sWidth;
      });
      u &&
        I(function (a) {
          a.style.width = "";
        }, R);
      f = p.outerWidth();
      if ("" === c) {
        r.width = "100%";
        if (
          U &&
          (p.find("tbody").height() > j.offsetHeight ||
            "scroll" == l.css("overflow-y"))
        )
          r.width = v(p.outerWidth() - b);
        f = p.outerWidth();
      } else "" !== d && ((r.width = v(d)), (f = p.outerWidth()));
      I(C, L);
      I(function (a) {
        z.push(a.innerHTML);
        Ua.push(v(h(a).css("width")));
      }, L);
      I(function (a, b) {
        if (h.inArray(a, Xb) !== -1) a.style.width = Ua[b];
      }, o);
      h(L).height(0);
      u &&
        (I(C, R),
        I(function (a) {
          A.push(a.innerHTML);
          y.push(v(h(a).css("width")));
        }, R),
        I(function (a, b) {
          a.style.width = y[b];
        }, Q),
        h(R).height(0));
      I(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
        a.childNodes[0].style.height = "0";
        a.childNodes[0].style.overflow = "hidden";
        a.style.width = Ua[b];
      }, L);
      u &&
        I(function (a, b) {
          a.innerHTML = '<div class="dataTables_sizing">' + A[b] + "</div>";
          a.childNodes[0].style.height = "0";
          a.childNodes[0].style.overflow = "hidden";
          a.style.width = y[b];
        }, R);
      if (p.outerWidth() < f) {
        Q =
          j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y")
            ? f + b
            : f;
        if (
          U &&
          (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))
        )
          r.width = v(Q - b);
        ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6);
      } else Q = "100%";
      q.width = v(Q);
      g.width = v(Q);
      u && (a.nScrollFoot.style.width = v(Q));
      !e && U && (q.height = v(s.offsetHeight + b));
      c = p.outerWidth();
      m[0].style.width = v(c);
      i.width = v(c);
      d = p.height() > j.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" + (x.bScrollbarLeft ? "Left" : "Right");
      i[e] = d ? b + "px" : "0px";
      u &&
        ((n[0].style.width = v(c)),
        (t[0].style.width = v(c)),
        (t[0].style[e] = d ? b + "px" : "0px"));
      p.children("colgroup").insertBefore(p.children("thead"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
    }
  }
  function I(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f; ) {
      g = b[e].firstChild;
      for (j = c ? c[e].firstChild : null; g; )
        1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++),
          (g = g.nextSibling),
          (j = c ? j.nextSibling : null);
      e++;
    }
  }
  function Fa(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      j = c.length,
      i = ma(a, "bVisible"),
      m = h("th", a.nTHead),
      l = b.getAttribute("width"),
      k = b.parentNode,
      t = !1,
      n,
      o,
      p = a.oBrowser,
      d = p.bScrollOversize;
    (n = b.style.width) && -1 !== n.indexOf("%") && (l = n);
    for (n = 0; n < i.length; n++)
      (o = c[i[n]]),
        null !== o.sWidth && ((o.sWidth = Fb(o.sWidthOrig, k)), (t = !0));
    if (d || (!t && !f && !e && j == V(a) && j == m.length))
      for (n = 0; n < j; n++)
        (i = aa(a, n)), null !== i && (c[i].sWidth = v(m.eq(n).width()));
    else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");
      j.find("tbody tr").remove();
      var s = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();
      j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
      j.find("tfoot th, tfoot td").css("width", "");
      m = ra(a, j.find("thead")[0]);
      for (n = 0; n < i.length; n++)
        (o = c[i[n]]),
          (m[n].style.width =
            null !== o.sWidthOrig && "" !== o.sWidthOrig
              ? v(o.sWidthOrig)
              : ""),
          o.sWidthOrig &&
            f &&
            h(m[n]).append(
              h("<div/>").css({
                width: o.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1,
              })
            );
      if (a.aoData.length)
        for (n = 0; n < i.length; n++)
          (t = i[n]),
            (o = c[t]),
            h(Gb(a, t)).clone(!1).append(o.sContentPadding).appendTo(s);
      h("[name]", j).removeAttr("name");
      o = h("<div/>")
        .css(
          f || e
            ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden",
              }
            : {}
        )
        .append(j)
        .appendTo(k);
      f && g
        ? j.width(g)
        : f
        ? (j.css("width", "auto"),
          j.removeAttr("width"),
          j.width() < k.clientWidth && l && j.width(k.clientWidth))
        : e
        ? j.width(k.clientWidth)
        : l && j.width(l);
      for (n = e = 0; n < i.length; n++)
        (k = h(m[n])),
          (g = k.outerWidth() - k.width()),
          (k = p.bBounding
            ? Math.ceil(m[n].getBoundingClientRect().width)
            : k.outerWidth()),
          (e += k),
          (c[i[n]].sWidth = v(k - g));
      b.style.width = v(e);
      o.remove();
    }
    l && (b.style.width = v(l));
    if ((l || f) && !a._reszEvt)
      (b = function () {
        h(E).on(
          "resize.DT-" + a.sInstance,
          Oa(function () {
            $(a);
          })
        );
      }),
        d ? setTimeout(b, 1e3) : b(),
        (a._reszEvt = !0);
  }
  function Fb(a, b) {
    if (!a) return 0;
    var c = h("<div/>")
        .css("width", v(a))
        .appendTo(b || H.body),
      d = c[0].offsetWidth;
    c.remove();
    return d;
  }
  function Gb(a, b) {
    var c = Hb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
  }
  function Hb(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++)
      (c = B(a, f, b, "display") + ""),
        (c = c.replace(Yb, "")),
        (c = c.replace(/&nbsp;/g, " ")),
        c.length > d && ((d = c.length), (e = f));
    return e;
  }
  function v(a) {
    return null === a
      ? "0px"
      : "number" == typeof a
      ? 0 > a
        ? "0px"
        : a + "px"
      : a.match(/\d$/)
      ? a + "px"
      : a;
  }
  function X(a) {
    var b,
      c,
      d = [],
      e = a.aoColumns,
      f,
      g,
      j,
      i;
    b = a.aaSortingFixed;
    c = h.isPlainObject(b);
    var m = [];
    f = function (a) {
      a.length && !h.isArray(a[0]) ? m.push(a) : h.merge(m, a);
    };
    h.isArray(b) && f(b);
    c && b.pre && f(b.pre);
    f(a.aaSorting);
    c && b.post && f(b.post);
    for (a = 0; a < m.length; a++) {
      i = m[a][0];
      f = e[i].aDataSort;
      b = 0;
      for (c = f.length; b < c; b++)
        (g = f[b]),
          (j = e[g].sType || "string"),
          m[a]._idx === k && (m[a]._idx = h.inArray(m[a][1], e[g].asSorting)),
          d.push({
            src: i,
            col: g,
            dir: m[a][1],
            index: m[a]._idx,
            type: j,
            formatter: n.ext.type.order[j + "-pre"],
          });
    }
    return d;
  }
  function nb(a) {
    var b,
      c,
      d = [],
      e = n.ext.type.order,
      f = a.aoData,
      g = 0,
      j,
      i = a.aiDisplayMaster,
      h;
    Ga(a);
    h = X(a);
    b = 0;
    for (c = h.length; b < c; b++) (j = h[b]), j.formatter && g++, Ib(a, j.col);
    if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;
      for (c = i.length; b < c; b++) d[i[b]] = b;
      g === h.length
        ? i.sort(function (a, b) {
            var c,
              e,
              g,
              j,
              i = h.length,
              k = f[a]._aSortData,
              n = f[b]._aSortData;
            for (g = 0; g < i; g++)
              if (
                ((j = h[g]),
                (c = k[j.col]),
                (e = n[j.col]),
                (c = c < e ? -1 : c > e ? 1 : 0),
                0 !== c)
              )
                return "asc" === j.dir ? c : -c;
            c = d[a];
            e = d[b];
            return c < e ? -1 : c > e ? 1 : 0;
          })
        : i.sort(function (a, b) {
            var c,
              g,
              j,
              i,
              k = h.length,
              n = f[a]._aSortData,
              o = f[b]._aSortData;
            for (j = 0; j < k; j++)
              if (
                ((i = h[j]),
                (c = n[i.col]),
                (g = o[i.col]),
                (i = e[i.type + "-" + i.dir] || e["string-" + i.dir]),
                (c = i(c, g)),
                0 !== c)
              )
                return c;
            c = d[a];
            g = d[b];
            return c < g ? -1 : c > g ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function Jb(a) {
    for (
      var b,
        c,
        d = a.aoColumns,
        e = X(a),
        a = a.oLanguage.oAria,
        f = 0,
        g = d.length;
      f < g;
      f++
    ) {
      c = d[f];
      var j = c.asSorting;
      b = c.sTitle.replace(/<.*?>/g, "");
      var i = c.nTh;
      i.removeAttribute("aria-sort");
      c.bSortable &&
        (0 < e.length && e[0].col == f
          ? (i.setAttribute(
              "aria-sort",
              "asc" == e[0].dir ? "ascending" : "descending"
            ),
            (c = j[e[0].index + 1] || j[0]))
          : (c = j[0]),
        (b += "asc" === c ? a.sSortAscending : a.sSortDescending));
      i.setAttribute("aria-label", b);
    }
  }
  function Va(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (a, b) {
        var c = a._idx;
        c === k && (c = h.inArray(a[1], f));
        return c + 1 < f.length ? c + 1 : b ? null : 0;
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = h.inArray(b, D(e, "0"))),
        -1 !== c
          ? ((b = g(e[c], !0)),
            null === b && 1 === e.length && (b = 0),
            null === b ? e.splice(c, 1) : ((e[c][1] = f[b]), (e[c]._idx = b)))
          : (e.push([b, f[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = g(e[0])), (e.length = 1), (e[0][1] = f[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, f[0]]), (e[0]._idx = 0));
    T(a);
    "function" == typeof d && d(a);
  }
  function Ma(a, b, c, d) {
    var e = a.aoColumns[c];
    Wa(b, {}, function (b) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (C(a, !0),
            setTimeout(function () {
              Va(a, c, b.shiftKey, d);
              "ssp" !== y(a) && C(a, !1);
            }, 0))
          : Va(a, c, b.shiftKey, d));
    });
  }
  function wa(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = X(a),
      e = a.oFeatures,
      f,
      g;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++)
        (g = b[e].src),
          h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      e = 0;
      for (f = d.length; e < f; e++)
        (g = d[e].src),
          h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function Ib(a, b) {
    var c = a.aoColumns[b],
      d = n.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, ba(a, b)));
    for (
      var f, g = n.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length;
      j < i;
      j++
    )
      if (
        ((c = a.aoData[j]),
        c._aSortData || (c._aSortData = []),
        !c._aSortData[b] || d)
      )
        (f = d ? e[j] : B(a, j, b, "sort")), (c._aSortData[b] = g ? g(f) : f);
  }
  function xa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: h.extend(!0, [], a.aaSorting),
        search: Bb(a.oPreviousSearch),
        columns: h.map(a.aoColumns, function (b, d) {
          return { visible: b.bVisible, search: Bb(a.aoPreSearchCols[d]) };
        }),
      };
      r(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function Kb(a, b, c) {
    var d,
      e,
      f = a.aoColumns,
      b = function (b) {
        if (b && b.time) {
          var g = r(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
          if (
            -1 === h.inArray(!1, g) &&
            ((g = a.iStateDuration),
            !(0 < g && b.time < +new Date() - 1e3 * g) &&
              !(b.columns && f.length !== b.columns.length))
          ) {
            a.oLoadedState = h.extend(!0, {}, b);
            b.start !== k &&
              ((a._iDisplayStart = b.start), (a.iInitDisplayStart = b.start));
            b.length !== k && (a._iDisplayLength = b.length);
            b.order !== k &&
              ((a.aaSorting = []),
              h.each(b.order, function (b, c) {
                a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c);
              }));
            b.search !== k && h.extend(a.oPreviousSearch, Cb(b.search));
            if (b.columns) {
              d = 0;
              for (e = b.columns.length; d < e; d++)
                (g = b.columns[d]),
                  g.visible !== k && (f[d].bVisible = g.visible),
                  g.search !== k &&
                    h.extend(a.aoPreSearchCols[d], Cb(g.search));
            }
            r(a, "aoStateLoaded", "stateLoaded", [a, b]);
          }
        }
        c();
      };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== k && b(g);
    } else c();
  }
  function ya(a) {
    var b = n.settings,
      a = h.inArray(a, D(b, "nTable"));
    return -1 !== a ? b[a] : null;
  }
  function K(a, b, c, d) {
    c =
      "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d &&
      (c +=
        ". For more information about this error, please see http://datatables.net/tn/" +
        d);
    if (b) E.console && console.log && console.log(c);
    else if (
      ((b = n.ext),
      (b = b.sErrMode || b.errMode),
      a && r(a, null, "error", [a, d, c]),
      "alert" == b)
    )
      alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c);
    }
  }
  function F(a, b, c, d) {
    h.isArray(c)
      ? h.each(c, function (c, d) {
          h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
        })
      : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
  }
  function Xa(a, b, c) {
    var d, e;
    for (e in b)
      b.hasOwnProperty(e) &&
        ((d = b[e]),
        h.isPlainObject(d)
          ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d))
          : (a[e] =
              c && "data" !== e && "aaData" !== e && h.isArray(d)
                ? d.slice()
                : d));
    return a;
  }
  function Wa(a, b, c) {
    h(a)
      .on("click.DT", b, function (b) {
        h(a).blur();
        c(b);
      })
      .on("keypress.DT", b, function (a) {
        13 === a.which && (a.preventDefault(), c(a));
      })
      .on("selectstart.DT", function () {
        return !1;
      });
  }
  function z(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }
  function r(a, b, c, d) {
    var e = [];
    b &&
      (e = h.map(a[b].slice().reverse(), function (b) {
        return b.fn.apply(a.oInstance, d);
      }));
    null !== c &&
      ((b = h.Event(c + ".dt")), h(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function Sa(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function Na(a, b) {
    var c = a.renderer,
      d = n.ext.renderer[b];
    return h.isPlainObject(c) && c[b]
      ? d[c[b]] || d._
      : "string" === typeof c
      ? d[c] || d._
      : d._;
  }
  function y(a) {
    return a.oFeatures.bServerSide
      ? "ssp"
      : a.ajax || a.sAjaxSource
      ? "ajax"
      : "dom";
  }
  function ia(a, b) {
    var c = [],
      c = Lb.numbers_length,
      d = Math.floor(c / 2);
    b <= c
      ? (c = Y(0, b))
      : a <= d
      ? ((c = Y(0, c - 2)), c.push("ellipsis"), c.push(b - 1))
      : (a >= b - 1 - d
          ? (c = Y(b - (c - 2), b))
          : ((c = Y(a - d + 2, a + d - 1)), c.push("ellipsis"), c.push(b - 1)),
        c.splice(0, 0, "ellipsis"),
        c.splice(0, 0, 0));
    c.DT_el = "span";
    return c;
  }
  function Da(a) {
    h.each(
      {
        num: function (b) {
          return za(b, a);
        },
        "num-fmt": function (b) {
          return za(b, a, Ya);
        },
        "html-num": function (b) {
          return za(b, a, Aa);
        },
        "html-num-fmt": function (b) {
          return za(b, a, Aa, Ya);
        },
      },
      function (b, c) {
        x.type.order[b + a + "-pre"] = c;
        b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html);
      }
    );
  }
  function Mb(a) {
    return function () {
      var b = [ya(this[n.ext.iApiIndex])].concat(
        Array.prototype.slice.call(arguments)
      );
      return n.ext.internal[a].apply(this, b);
    };
  }
  var n = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b);
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data();
      };
      this.api = function (a) {
        return a ? new s(ya(this[x.iApiIndex])) : new s(this);
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0),
          d =
            h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0]))
              ? c.rows.add(a)
              : c.row.add(a);
        (b === k || b) && c.draw();
        return d.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (a) {
        var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
        a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && la(c);
      };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === k || a) && b.draw();
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide();
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === k || c) && d.draw();
        return h;
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a);
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a);
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k
          ? e.search(a, c, d, h)
          : e.column(b).search(a, c, d, h);
        e.draw();
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== k) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== k || "td" == d || "th" == d
            ? c.cell(a, b).data()
            : c.row(a).data() || null;
        }
        return c.data().toArray();
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return "TR" == c
          ? b.row(a).index()
          : "TD" == c || "TH" == c
          ? ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column])
          : null;
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown();
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0];
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === k || b) && c.draw(!1);
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === k || c) && a.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return ya(this[x.iApiIndex]);
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw();
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c);
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === k || e) && h.columns.adjust();
        (d === k || d) && h.draw();
        return 0;
      };
      this.fnVersionCheck = x.fnVersionCheck;
      var b = this,
        c = a === k,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = x.internal;
      for (var e in n.ext.internal) e && (this[e] = Mb(e));
      this.each(function () {
        var e = {},
          g = 1 < d ? Xa(e, a, !0) : a,
          j = 0,
          i,
          e = this.getAttribute("id"),
          m = !1,
          l = n.defaults,
          q = h(this);
        if ("table" != this.nodeName.toLowerCase())
          K(
            null,
            0,
            "Non-table node initialisation (" + this.nodeName + ")",
            2
          );
        else {
          fb(l);
          gb(l.column);
          J(l, l, !0);
          J(l.column, l.column, !0);
          J(l, h.extend(g, q.data()));
          var t = n.settings,
            j = 0;
          for (i = t.length; j < i; j++) {
            var o = t[j];
            if (
              o.nTable == this ||
              (o.nTHead && o.nTHead.parentNode == this) ||
              (o.nTFoot && o.nTFoot.parentNode == this)
            ) {
              var s = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
              if (c || s) return o.oInstance;
              if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                o.oInstance.fnDestroy();
                break;
              } else {
                K(o, 0, "Cannot reinitialise DataTable", 3);
                return;
              }
            }
            if (o.sTableId == this.id) {
              t.splice(j, 1);
              break;
            }
          }
          if (null === e || "" === e)
            this.id = e = "DataTables_Table_" + n.ext._unique++;
          var p = h.extend(!0, {}, n.models.oSettings, {
            sDestroyWidth: q[0].style.width,
            sInstance: e,
            sTableId: e,
          });
          p.nTable = this;
          p.oApi = b.internal;
          p.oInit = g;
          t.push(p);
          p.oInstance = 1 === b.length ? b : q.dataTable();
          fb(g);
          Ca(g.oLanguage);
          g.aLengthMenu &&
            !g.iDisplayLength &&
            (g.iDisplayLength = h.isArray(g.aLengthMenu[0])
              ? g.aLengthMenu[0][0]
              : g.aLengthMenu[0]);
          g = Xa(h.extend(!0, {}, l), g);
          F(
            p.oFeatures,
            g,
            "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(
              " "
            )
          );
          F(p, g, [
            "asStripeClasses",
            "ajax",
            "fnServerData",
            "fnFormatNumber",
            "sServerMethod",
            "aaSorting",
            "aaSortingFixed",
            "aLengthMenu",
            "sPaginationType",
            "sAjaxSource",
            "sAjaxDataProp",
            "iStateDuration",
            "sDom",
            "bSortCellsTop",
            "iTabIndex",
            "fnStateLoadCallback",
            "fnStateSaveCallback",
            "renderer",
            "searchDelay",
            "rowId",
            ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
          ]);
          F(p.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"],
          ]);
          F(p.oLanguage, g, "fnInfoCallback");
          z(p, "aoDrawCallback", g.fnDrawCallback, "user");
          z(p, "aoServerParams", g.fnServerParams, "user");
          z(p, "aoStateSaveParams", g.fnStateSaveParams, "user");
          z(p, "aoStateLoadParams", g.fnStateLoadParams, "user");
          z(p, "aoStateLoaded", g.fnStateLoaded, "user");
          z(p, "aoRowCallback", g.fnRowCallback, "user");
          z(p, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          z(p, "aoHeaderCallback", g.fnHeaderCallback, "user");
          z(p, "aoFooterCallback", g.fnFooterCallback, "user");
          z(p, "aoInitComplete", g.fnInitComplete, "user");
          z(p, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          p.rowIdFn = S(g.rowId);
          hb(p);
          var u = p.oClasses;
          h.extend(u, n.ext.classes, g.oClasses);
          q.addClass(u.sTable);
          p.iInitDisplayStart === k &&
            ((p.iInitDisplayStart = g.iDisplayStart),
            (p._iDisplayStart = g.iDisplayStart));
          null !== g.iDeferLoading &&
            ((p.bDeferLoading = !0),
            (e = h.isArray(g.iDeferLoading)),
            (p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading),
            (p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading));
          var v = p.oLanguage;
          h.extend(!0, v, g.oLanguage);
          v.sUrl &&
            (h.ajax({
              dataType: "json",
              url: v.sUrl,
              success: function (a) {
                Ca(a);
                J(l.oLanguage, a);
                h.extend(true, v, a);
                ha(p);
              },
              error: function () {
                ha(p);
              },
            }),
            (m = !0));
          null === g.asStripeClasses &&
            (p.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);
          var e = p.asStripeClasses,
            x = q.children("tbody").find("tr").eq(0);
          -1 !==
            h.inArray(
              !0,
              h.map(e, function (a) {
                return x.hasClass(a);
              })
            ) &&
            (h("tbody tr", this).removeClass(e.join(" ")),
            (p.asDestroyStripes = e.slice()));
          e = [];
          t = this.getElementsByTagName("thead");
          0 !== t.length && (ea(p.aoHeader, t[0]), (e = ra(p)));
          if (null === g.aoColumns) {
            t = [];
            j = 0;
            for (i = e.length; j < i; j++) t.push(null);
          } else t = g.aoColumns;
          j = 0;
          for (i = t.length; j < i; j++) Ea(p, e ? e[j] : null);
          jb(p, g.aoColumnDefs, t, function (a, b) {
            ka(p, a, b);
          });
          if (x.length) {
            var w = function (a, b) {
              return a.getAttribute("data-" + b) !== null ? b : null;
            };
            h(x[0])
              .children("th, td")
              .each(function (a, b) {
                var c = p.aoColumns[a];
                if (c.mData === a) {
                  var d = w(b, "sort") || w(b, "order"),
                    e = w(b, "filter") || w(b, "search");
                  if (d !== null || e !== null) {
                    c.mData = {
                      _: a + ".display",
                      sort: d !== null ? a + ".@data-" + d : k,
                      type: d !== null ? a + ".@data-" + d : k,
                      filter: e !== null ? a + ".@data-" + e : k,
                    };
                    ka(p, a);
                  }
                }
              });
          }
          var U = p.oFeatures,
            e = function () {
              if (g.aaSorting === k) {
                var a = p.aaSorting;
                j = 0;
                for (i = a.length; j < i; j++)
                  a[j][1] = p.aoColumns[j].asSorting[0];
              }
              wa(p);
              U.bSort &&
                z(p, "aoDrawCallback", function () {
                  if (p.bSorted) {
                    var a = X(p),
                      b = {};
                    h.each(a, function (a, c) {
                      b[c.src] = c.dir;
                    });
                    r(p, null, "order", [p, a, b]);
                    Jb(p);
                  }
                });
              z(
                p,
                "aoDrawCallback",
                function () {
                  (p.bSorted || y(p) === "ssp" || U.bDeferRender) && wa(p);
                },
                "sc"
              );
              var a = q.children("caption").each(function () {
                  this._captionSide = h(this).css("caption-side");
                }),
                b = q.children("thead");
              b.length === 0 && (b = h("<thead/>").appendTo(q));
              p.nTHead = b[0];
              b = q.children("tbody");
              b.length === 0 && (b = h("<tbody/>").appendTo(q));
              p.nTBody = b[0];
              b = q.children("tfoot");
              if (
                b.length === 0 &&
                a.length > 0 &&
                (p.oScroll.sX !== "" || p.oScroll.sY !== "")
              )
                b = h("<tfoot/>").appendTo(q);
              if (b.length === 0 || b.children().length === 0)
                q.addClass(u.sNoFooter);
              else if (b.length > 0) {
                p.nTFoot = b[0];
                ea(p.aoFooter, p.nTFoot);
              }
              if (g.aaData)
                for (j = 0; j < g.aaData.length; j++) O(p, g.aaData[j]);
              else
                (p.bDeferLoading || y(p) == "dom") &&
                  na(p, h(p.nTBody).children("tr"));
              p.aiDisplay = p.aiDisplayMaster.slice();
              p.bInitialised = true;
              m === false && ha(p);
            };
          g.bStateSave
            ? ((U.bStateSave = !0),
              z(p, "aoDrawCallback", xa, "state_save"),
              Kb(p, g, e))
            : e();
        }
      });
      b = null;
      return this;
    },
    x,
    s,
    o,
    u,
    Za = {},
    Nb = /[\r\n]/g,
    Aa = /<.*?>/g,
    Zb =
      /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    $b = RegExp(
      "(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
      "g"
    ),
    Ya = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    M = function (a) {
      return !a || !0 === a || "-" === a ? !0 : !1;
    },
    Ob = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    Pb = function (a, b) {
      Za[b] || (Za[b] = RegExp(Qa(b), "g"));
      return "string" === typeof a && "." !== b
        ? a.replace(/\./g, "").replace(Za[b], ".")
        : a;
    },
    $a = function (a, b, c) {
      var d = "string" === typeof a;
      if (M(a)) return !0;
      b && d && (a = Pb(a, b));
      c && d && (a = a.replace(Ya, ""));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    Qb = function (a, b, c) {
      return M(a)
        ? !0
        : !(M(a) || "string" === typeof a)
        ? null
        : $a(a.replace(Aa, ""), b, c)
        ? !0
        : null;
    },
    D = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < f; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    ja = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== k) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else for (; f < g; f++) e.push(a[b[f]][c]);
      return e;
    },
    Y = function (a, b) {
      var c = [],
        d;
      b === k ? ((b = 0), (d = a)) : ((d = b), (b = a));
      for (var e = b; e < d; e++) c.push(e);
      return c;
    },
    Rb = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    qa = function (a) {
      var b;
      a: {
        if (!(2 > a.length)) {
          b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a;
            }
            c = b[d];
          }
        }
        b = !0;
      }
      if (b) return a.slice();
      b = [];
      var e = a.length,
        f,
        g = 0,
        d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++) if (b[f] === c) continue a;
        b.push(c);
        g++;
      }
      return b;
    };
  n.util = {
    throttle: function (a, b) {
      var c = b !== k ? b : 200,
        d,
        e;
      return function () {
        var b = this,
          g = +new Date(),
          j = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = k;
              a.apply(b, j);
            }, c)))
          : ((d = g), a.apply(b, j));
      };
    },
    escapeRegex: function (a) {
      return a.replace($b, "\\$1");
    },
  };
  var A = function (a, b, c) {
      a[b] !== k && (a[c] = a[b]);
    },
    ca = /\[.*?\]$/,
    W = /\(\)$/,
    Qa = n.util.escapeRegex,
    va = h("<div>")[0],
    Wb = va.textContent !== k,
    Yb = /<.*?>/g,
    Oa = n.util.throttle,
    Sb = [],
    w = Array.prototype,
    ac = function (a) {
      var b,
        c,
        d = n.settings,
        e = h.map(d, function (a) {
          return a.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase())
          return (b = h.inArray(a, e)), -1 !== b ? [d[b]] : null;
        if (a && "function" === typeof a.settings)
          return a.settings().toArray();
        "string" === typeof a ? (c = h(a)) : a instanceof h && (c = a);
      } else return [];
      if (c)
        return c
          .map(function () {
            b = h.inArray(this, e);
            return -1 !== b ? d[b] : null;
          })
          .toArray();
    };
  s = function (a, b) {
    if (!(this instanceof s)) return new s(a, b);
    var c = [],
      d = function (a) {
        (a = ac(a)) && (c = c.concat(a));
      };
    if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = qa(c);
    b && h.merge(this, b);
    this.selector = { rows: null, cols: null, opts: null };
    s.extend(this, this, Sb);
  };
  n.Api = s;
  h.extend(s.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: w.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++)
        a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new s(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (w.filter) b = w.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          a.call(this, this[c], c, this) && b.push(this[c]);
      return new s(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new s(this.context, a.concat.apply(a, this.toArray()));
    },
    join: w.join,
    indexOf:
      w.indexOf ||
      function (a, b) {
        for (var c = b || 0, d = this.length; c < d; c++)
          if (this[c] === a) return c;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        f,
        g,
        j,
        h,
        m,
        l = this.context,
        n,
        o,
        u = this.selector;
      "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      g = 0;
      for (j = l.length; g < j; g++) {
        var r = new s(l[g]);
        if ("table" === b) (f = c.call(r, l[g], g)), f !== k && e.push(f);
        else if ("columns" === b || "rows" === b)
          (f = c.call(r, l[g], this[g], g)), f !== k && e.push(f);
        else if (
          "column" === b ||
          "column-rows" === b ||
          "row" === b ||
          "cell" === b
        ) {
          o = this[g];
          "column-rows" === b && (n = Ba(l[g], u.opts));
          h = 0;
          for (m = o.length; h < m; h++)
            (f = o[h]),
              (f =
                "cell" === b
                  ? c.call(r, l[g], f.row, f.column, g, h)
                  : c.call(r, l[g], f, g, h, n)),
              f !== k && e.push(f);
        }
      }
      return e.length || d
        ? ((a = new s(l, a ? e.concat.apply([], e) : e)),
          (b = a.selector),
          (b.rows = u.rows),
          (b.cols = u.cols),
          (b.opts = u.opts),
          a)
        : this;
    },
    lastIndexOf:
      w.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (w.map) b = w.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++)
          b.push(a.call(this, this[c], c));
      return new s(this.context, b);
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: w.pop,
    push: w.push,
    reduce:
      w.reduce ||
      function (a, b) {
        return ib(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      w.reduceRight ||
      function (a, b) {
        return ib(this, a, b, this.length - 1, -1, -1);
      },
    reverse: w.reverse,
    selector: null,
    shift: w.shift,
    slice: function () {
      return new s(this.context, this);
    },
    sort: w.sort,
    splice: w.splice,
    toArray: function () {
      return w.slice.call(this);
    },
    to$: function () {
      return h(this);
    },
    toJQuery: function () {
      return h(this);
    },
    unique: function () {
      return new s(this.context, qa(this));
    },
    unshift: w.unshift,
  });
  s.extend = function (a, b, c) {
    if (c.length && b && (b instanceof s || b.__dt_wrapper)) {
      var d,
        e,
        f,
        g = function (a, b, c) {
          return function () {
            var d = b.apply(a, arguments);
            s.extend(d, d, c.methodExt);
            return d;
          };
        };
      d = 0;
      for (e = c.length; d < e; d++)
        (f = c[d]),
          (b[f.name] =
            "function" === typeof f.val
              ? g(a, f.val, f)
              : h.isPlainObject(f.val)
              ? {}
              : f.val),
          (b[f.name].__dt_wrapper = !0),
          s.extend(a, b[f.name], f.propExt);
    }
  };
  s.register = o = function (a, b) {
    if (h.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) s.register(a[c], b);
    else
      for (
        var e = a.split("."), f = Sb, g, j, c = 0, d = e.length;
        c < d;
        c++
      ) {
        g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a: {
          i = 0;
          for (var m = f.length; i < m; i++)
            if (f[i].name === g) {
              i = f[i];
              break a;
            }
          i = null;
        }
        i ||
          ((i = { name: g, val: {}, methodExt: [], propExt: [] }), f.push(i));
        c === d - 1 ? (i.val = b) : (f = j ? i.methodExt : i.propExt);
      }
  };
  s.registerPlural = u = function (a, b, c) {
    s.register(a, c);
    s.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this
        ? this
        : a instanceof s
        ? a.length
          ? h.isArray(a[0])
            ? new s(a.context, a[0])
            : a[0]
          : k
        : a;
    });
  };
  o("tables()", function (a) {
    var b;
    if (a) {
      b = s;
      var c = this.context;
      if ("number" === typeof a) a = [c[a]];
      else
        var d = h.map(c, function (a) {
            return a.nTable;
          }),
          a = h(d)
            .filter(a)
            .map(function () {
              var a = h.inArray(this, d);
              return c[a];
            })
            .toArray();
      b = new b(a);
    } else b = this;
    return b;
  });
  o("table()", function (a) {
    var a = this.tables(a),
      b = a.context;
    return b.length ? new s(b[0]) : a;
  });
  u("tables().nodes()", "table().node()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTable;
      },
      1
    );
  });
  u("tables().body()", "table().body()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTBody;
      },
      1
    );
  });
  u("tables().header()", "table().header()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTHead;
      },
      1
    );
  });
  u("tables().footer()", "table().footer()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTFoot;
      },
      1
    );
  });
  u("tables().containers()", "table().container()", function () {
    return this.iterator(
      "table",
      function (a) {
        return a.nTableWrapper;
      },
      1
    );
  });
  o("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a
        ? P(b)
        : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0),
          T(b, !1 === a));
    });
  });
  o("page()", function (a) {
    return a === k
      ? this.page.info().page
      : this.iterator("table", function (b) {
          Ta(b, a);
        });
  });
  o("page.info()", function () {
    if (0 === this.context.length) return k;
    var a = this.context[0],
      b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === y(a),
    };
  });
  o("page.len()", function (a) {
    return a === k
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : k
      : this.iterator("table", function (b) {
          Ra(b, a);
        });
  });
  var Tb = function (a, b, c) {
    if (c) {
      var d = new s(a);
      d.one("draw", function () {
        c(d.ajax.json());
      });
    }
    if ("ssp" == y(a)) T(a, b);
    else {
      C(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      sa(a, [], function (c) {
        oa(a);
        for (var c = ta(a, c), d = 0, e = c.length; d < e; d++) O(a, c[d]);
        T(a, b);
        C(a, !1);
      });
    }
  };
  o("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  o("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  o("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Tb(c, !1 === b, a);
    });
  });
  o("ajax.url()", function (a) {
    var b = this.context;
    if (a === k) {
      if (0 === b.length) return k;
      b = b[0];
      return b.ajax
        ? h.isPlainObject(b.ajax)
          ? b.ajax.url
          : b.ajax
        : b.sAjaxSource;
    }
    return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
    });
  });
  o("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Tb(c, !1 === b, a);
    });
  });
  var ab = function (a, b, c, d, e) {
      var f = [],
        g,
        j,
        i,
        m,
        l,
        n;
      i = typeof b;
      if (!b || "string" === i || "function" === i || b.length === k) b = [b];
      i = 0;
      for (m = b.length; i < m; i++) {
        j =
          b[i] && b[i].split && !b[i].match(/[\[\(:]/)
            ? b[i].split(",")
            : [b[i]];
        l = 0;
        for (n = j.length; l < n; l++)
          (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) &&
            g.length &&
            (f = f.concat(g));
      }
      a = x.selector[a];
      if (a.length) {
        i = 0;
        for (m = a.length; i < m; i++) f = a[i](d, e, f);
      }
      return qa(f);
    },
    bb = function (a) {
      a || (a = {});
      a.filter && a.search === k && (a.search = a.filter);
      return h.extend({ search: "none", order: "current", page: "all" }, a);
    },
    cb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length)
          return (
            (a[0] = a[b]),
            (a[0].length = 1),
            (a.length = 1),
            (a.context = [a.context[b]]),
            a
          );
      a.length = 0;
      return a;
    },
    Ba = function (a, b) {
      var c,
        d,
        e,
        f = [],
        g = a.aiDisplay;
      e = a.aiDisplayMaster;
      var j = b.search;
      c = b.order;
      d = b.page;
      if ("ssp" == y(a)) return "removed" === j ? [] : Y(0, e.length);
      if ("current" == d) {
        c = a._iDisplayStart;
        for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]);
      } else if ("current" == c || "applied" == c)
        if ("none" == j) f = e.slice();
        else if ("applied" == j) f = g.slice();
        else {
          if ("removed" == j) {
            var i = {};
            c = 0;
            for (d = g.length; c < d; c++) i[g[c]] = null;
            f = h.map(e, function (a) {
              return !i.hasOwnProperty(a) ? a : null;
            });
          }
        }
      else if ("index" == c || "original" == c) {
        c = 0;
        for (d = a.aoData.length; c < d; c++)
          "none" == j
            ? f.push(c)
            : ((e = h.inArray(c, g)),
              ((-1 === e && "removed" == j) || (0 <= e && "applied" == j)) &&
                f.push(c));
      }
      return f;
    };
  o("rows()", function (a, b) {
    a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
    var b = bb(b),
      c = this.iterator(
        "table",
        function (c) {
          var e = b,
            f;
          return ab(
            "row",
            a,
            function (a) {
              var b = Ob(a),
                i = c.aoData;
              if (b !== null && !e) return [b];
              f || (f = Ba(c, e));
              if (b !== null && h.inArray(b, f) !== -1) return [b];
              if (a === null || a === k || a === "") return f;
              if (typeof a === "function")
                return h.map(f, function (b) {
                  var c = i[b];
                  return a(b, c._aData, c.nTr) ? b : null;
                });
              if (a.nodeName) {
                var b = a._DT_RowIndex,
                  m = a._DT_CellIndex;
                if (b !== k) return i[b] && i[b].nTr === a ? [b] : [];
                if (m) return i[m.row] && i[m.row].nTr === a ? [m.row] : [];
                b = h(a).closest("*[data-dt-row]");
                return b.length ? [b.data("dt-row")] : [];
              }
              if (typeof a === "string" && a.charAt(0) === "#") {
                b = c.aIds[a.replace(/^#/, "")];
                if (b !== k) return [b.idx];
              }
              b = Rb(ja(c.aoData, f, "nTr"));
              return h(b)
                .filter(a)
                .map(function () {
                  return this._DT_RowIndex;
                })
                .toArray();
            },
            c,
            e
          );
        },
        1
      );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  o("rows().nodes()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return a.aoData[b].nTr || k;
      },
      1
    );
  });
  o("rows().data()", function () {
    return this.iterator(
      !0,
      "rows",
      function (a, b) {
        return ja(a.aoData, b, "_aData");
      },
      1
    );
  });
  u("rows().cache()", "row().cache()", function (a) {
    return this.iterator(
      "row",
      function (b, c) {
        var d = b.aoData[c];
        return "search" === a ? d._aFilterData : d._aSortData;
      },
      1
    );
  });
  u("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      da(b, c, a);
    });
  });
  u("rows().indexes()", "row().index()", function () {
    return this.iterator(
      "row",
      function (a, b) {
        return b;
      },
      1
    );
  });
  u("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h);
      }
    return new s(c, b);
  });
  u("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g,
        h,
        i,
        m,
        l;
      e.splice(c, 1);
      g = 0;
      for (h = e.length; g < h; g++)
        if (
          ((i = e[g]),
          (l = i.anCells),
          null !== i.nTr && (i.nTr._DT_RowIndex = g),
          null !== l)
        ) {
          i = 0;
          for (m = l.length; i < m; i++) l[i]._DT_CellIndex.row = g;
        }
      pa(b.aiDisplayMaster, c);
      pa(b.aiDisplay, c);
      pa(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      Sa(b);
      c = b.rowIdFn(f._aData);
      c !== k && delete b.aIds[c];
    });
    this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c;
    });
    return this;
  });
  o("rows.add()", function (a) {
    var b = this.iterator(
        "table",
        function (b) {
          var c,
            f,
            g,
            h = [];
          f = 0;
          for (g = a.length; f < g; f++)
            (c = a[f]),
              c.nodeName && "TR" === c.nodeName.toUpperCase()
                ? h.push(na(b, c)[0])
                : h.push(O(b, c));
          return h;
        },
        1
      ),
      c = this.rows(-1);
    c.pop();
    h.merge(c, b);
    return c;
  });
  o("row()", function (a, b) {
    return cb(this.rows(a, b));
  });
  o("row().data()", function (a) {
    var b = this.context;
    if (a === k)
      return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id);
    da(b[0], this[0], "data");
    return this;
  });
  o("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  o("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase()
        ? na(b, a)[0]
        : O(b, a);
    });
    return this.row(b[0]);
  });
  var db = function (a, b) {
      var c = a.context;
      if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details)
        c._details.remove(), (c._detailsShow = k), (c._details = k);
    },
    Ub = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        if (d._details) {
          (d._detailsShow = b)
            ? d._details.insertAfter(d.nTr)
            : d._details.detach();
          var e = c[0],
            f = new s(e),
            g = e.aoData;
          f.off(
            "draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"
          );
          0 < D(g, "_details").length &&
            (f.on("draw.dt.DT_details", function (a, b) {
              e === b &&
                f
                  .rows({ page: "current" })
                  .eq(0)
                  .each(function (a) {
                    a = g[a];
                    a._detailsShow && a._details.insertAfter(a.nTr);
                  });
            }),
            f.on("column-visibility.dt.DT_details", function (a, b) {
              if (e === b)
                for (var c, d = V(b), f = 0, h = g.length; f < h; f++)
                  (c = g[f]),
                    c._details &&
                      c._details.children("td[colspan]").attr("colspan", d);
            }),
            f.on("destroy.dt.DT_details", function (a, b) {
              if (e === b)
                for (var c = 0, d = g.length; c < d; c++)
                  g[c]._details && db(f, c);
            }));
        }
      }
    };
  o("row().child()", function (a, b) {
    var c = this.context;
    if (a === k)
      return c.length && this.length ? c[0].aoData[this[0]]._details : k;
    if (!0 === a) this.child.show();
    else if (!1 === a) db(this);
    else if (c.length && this.length) {
      var d = c[0],
        c = c[0].aoData[this[0]],
        e = [],
        f = function (a, b) {
          if (h.isArray(a) || a instanceof h)
            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
          else
            a.nodeName && "tr" === a.nodeName.toLowerCase()
              ? e.push(a)
              : ((c = h("<tr><td/></tr>").addClass(b)),
                (h("td", c).addClass(b).html(a)[0].colSpan = V(d)),
                e.push(c[0]));
        };
      f(a, b);
      c._details && c._details.detach();
      c._details = h(e);
      c._detailsShow && c._details.insertAfter(c.nTr);
    }
    return this;
  });
  o(["row().child.show()", "row().child().show()"], function () {
    Ub(this, !0);
    return this;
  });
  o(["row().child.hide()", "row().child().hide()"], function () {
    Ub(this, !1);
    return this;
  });
  o(["row().child.remove()", "row().child().remove()"], function () {
    db(this);
    return this;
  });
  o("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length
      ? a[0].aoData[this[0]]._detailsShow || !1
      : !1;
  });
  var bc = /^([^:]+):(name|visIdx|visible)$/,
    Vb = function (a, b, c, d, e) {
      for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
      return c;
    };
  o("columns()", function (a, b) {
    a === k ? (a = "") : h.isPlainObject(a) && ((b = a), (a = ""));
    var b = bb(b),
      c = this.iterator(
        "table",
        function (c) {
          var e = a,
            f = b,
            g = c.aoColumns,
            j = D(g, "sName"),
            i = D(g, "nTh");
          return ab(
            "column",
            e,
            function (a) {
              var b = Ob(a);
              if (a === "") return Y(g.length);
              if (b !== null) return [b >= 0 ? b : g.length + b];
              if (typeof a === "function") {
                var e = Ba(c, f);
                return h.map(g, function (b, f) {
                  return a(f, Vb(c, f, 0, 0, e), i[f]) ? f : null;
                });
              }
              var k = typeof a === "string" ? a.match(bc) : "";
              if (k)
                switch (k[2]) {
                  case "visIdx":
                  case "visible":
                    b = parseInt(k[1], 10);
                    if (b < 0) {
                      var n = h.map(g, function (a, b) {
                        return a.bVisible ? b : null;
                      });
                      return [n[n.length + b]];
                    }
                    return [aa(c, b)];
                  case "name":
                    return h.map(j, function (a, b) {
                      return a === k[1] ? b : null;
                    });
                  default:
                    return [];
                }
              if (a.nodeName && a._DT_CellIndex)
                return [a._DT_CellIndex.column];
              b = h(i)
                .filter(a)
                .map(function () {
                  return h.inArray(this, i);
                })
                .toArray();
              if (b.length || !a.nodeName) return b;
              b = h(a).closest("*[data-dt-column]");
              return b.length ? [b.data("dt-column")] : [];
            },
            c,
            f
          );
        },
        1
      );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  u("columns().header()", "column().header()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].nTh;
      },
      1
    );
  });
  u("columns().footer()", "column().footer()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].nTf;
      },
      1
    );
  });
  u("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Vb, 1);
  });
  u("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator(
      "column",
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1
    );
  });
  u("columns().cache()", "column().cache()", function (a) {
    return this.iterator(
      "column-rows",
      function (b, c, d, e, f) {
        return ja(
          b.aoData,
          f,
          "search" === a ? "_aFilterData" : "_aSortData",
          c
        );
      },
      1
    );
  });
  u("columns().nodes()", "column().nodes()", function () {
    return this.iterator(
      "column-rows",
      function (a, b, c, d, e) {
        return ja(a.aoData, e, "anCells", b);
      },
      1
    );
  });
  u("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;
      var f = b.aoColumns,
        g = f[c],
        j = b.aoData,
        i,
        m,
        l;
      if (a !== k && g.bVisible !== a) {
        if (a) {
          var n = h.inArray(!0, D(f, "bVisible"), c + 1);
          i = 0;
          for (m = j.length; i < m; i++)
            (l = j[i].nTr),
              (f = j[i].anCells),
              l && l.insertBefore(f[c], f[n] || null);
        } else h(D(b.aoData, "anCells", c)).detach();
        g.bVisible = a;
        fa(b, b.aoHeader);
        fa(b, b.aoFooter);
        b.aiDisplay.length ||
          h(b.nTBody).find("td[colspan]").attr("colspan", V(b));
        xa(b);
      }
    });
    a !== k &&
      (this.iterator("column", function (c, e) {
        r(c, null, "column-visibility", [c, e, a, b]);
      }),
      (b === k || b) && this.columns.adjust());
    return c;
  });
  u("columns().indexes()", "column().index()", function (a) {
    return this.iterator(
      "column",
      function (b, c) {
        return "visible" === a ? ba(b, c) : c;
      },
      1
    );
  });
  o("columns.adjust()", function () {
    return this.iterator(
      "table",
      function (a) {
        $(a);
      },
      1
    );
  });
  o("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return aa(c, b);
      if ("fromData" === a || "toVisible" === a) return ba(c, b);
    }
  });
  o("column()", function (a, b) {
    return cb(this.columns(a, b));
  });
  o("cells()", function (a, b, c) {
    h.isPlainObject(a) &&
      (a.row === k ? ((c = a), (a = null)) : ((c = b), (b = null)));
    h.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === k)
      return this.iterator("table", function (b) {
        var d = a,
          e = bb(c),
          f = b.aoData,
          g = Ba(b, e),
          j = Rb(ja(f, g, "anCells")),
          i = h([].concat.apply([], j)),
          l,
          m = b.aoColumns.length,
          n,
          o,
          u,
          s,
          r,
          v;
        return ab(
          "cell",
          d,
          function (a) {
            var c = typeof a === "function";
            if (a === null || a === k || c) {
              n = [];
              o = 0;
              for (u = g.length; o < u; o++) {
                l = g[o];
                for (s = 0; s < m; s++) {
                  r = { row: l, column: s };
                  if (c) {
                    v = f[l];
                    a(r, B(b, l, s), v.anCells ? v.anCells[s] : null) &&
                      n.push(r);
                  } else n.push(r);
                }
              }
              return n;
            }
            if (h.isPlainObject(a))
              return a.column !== k && a.row !== k && h.inArray(a.row, g) !== -1
                ? [a]
                : [];
            c = i
              .filter(a)
              .map(function (a, b) {
                return {
                  row: b._DT_CellIndex.row,
                  column: b._DT_CellIndex.column,
                };
              })
              .toArray();
            if (c.length || !a.nodeName) return c;
            v = h(a).closest("*[data-dt-row]");
            return v.length
              ? [{ row: v.data("dt-row"), column: v.data("dt-column") }]
              : [];
          },
          b,
          e
        );
      });
    var d = this.columns(b),
      e = this.rows(a),
      f,
      g,
      j,
      i,
      m;
    this.iterator(
      "table",
      function (a, b) {
        f = [];
        g = 0;
        for (j = e[b].length; g < j; g++) {
          i = 0;
          for (m = d[b].length; i < m; i++)
            f.push({ row: e[b][g], column: d[b][i] });
        }
      },
      1
    );
    var l = this.cells(f, c);
    h.extend(l.selector, { cols: b, rows: a, opts: c });
    return l;
  });
  u("cells().nodes()", "cell().node()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
      },
      1
    );
  });
  o("cells().data()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return B(a, b, c);
      },
      1
    );
  });
  u("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator(
      "cell",
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1
    );
  });
  u("cells().render()", "cell().render()", function (a) {
    return this.iterator(
      "cell",
      function (b, c, d) {
        return B(b, c, d, a);
      },
      1
    );
  });
  u("cells().indexes()", "cell().index()", function () {
    return this.iterator(
      "cell",
      function (a, b, c) {
        return { row: b, column: c, columnVisible: ba(a, c) };
      },
      1
    );
  });
  u("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      da(b, c, a, d);
    });
  });
  o("cell()", function (a, b, c) {
    return cb(this.cells(a, b, c));
  });
  o("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === k)
      return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
    kb(b[0], c[0].row, c[0].column, a);
    da(b[0], c[0].row, "data", c[0].column);
    return this;
  });
  o("order()", function (a, b) {
    var c = this.context;
    if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
    "number" === typeof a
      ? (a = [[a, b]])
      : a.length &&
        !h.isArray(a[0]) &&
        (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice();
    });
  });
  o("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      Ma(d, a, b, c);
    });
  });
  o("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
        b = b.length ? b[0].aaSortingFixed : k;
      return h.isArray(b) ? { pre: b } : b;
    }
    return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a);
    });
  });
  o(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      h.each(b[d], function (b, c) {
        e.push([c, a]);
      });
      c.aaSorting = e;
    });
  });
  o("search()", function (a, b, c, d) {
    var e = this.context;
    return a === k
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : k
      : this.iterator("table", function (e) {
          e.oFeatures.bFilter &&
            ga(
              e,
              h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1
            );
        });
  });
  u("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === k) return g[f].sSearch;
      e.oFeatures.bFilter &&
        (h.extend(g[f], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d,
        }),
        ga(e, e.oPreviousSearch, 1));
    });
  });
  o("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  o("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  o("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  o("state.save()", function () {
    return this.iterator("table", function (a) {
      xa(a);
    });
  });
  n.versionCheck = n.fnVersionCheck = function (a) {
    for (
      var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length;
      e < f;
      e++
    )
      if (
        ((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)
      )
        return c > d;
    return !0;
  };
  n.isDataTable = n.fnIsDataTable = function (a) {
    var b = h(a).get(0),
      c = !1;
    if (a instanceof n.Api) return !0;
    h.each(n.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
        g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0;
    });
    return c;
  };
  n.tables = n.fnTables = function (a) {
    var b = !1;
    h.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = h.map(n.settings, function (b) {
      if (!a || (a && h(b.nTable).is(":visible"))) return b.nTable;
    });
    return b ? new s(c) : c;
  };
  n.camelToHungarian = J;
  o("$()", function (a, b) {
    var c = this.rows(b).nodes(),
      c = h(c);
    return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
  });
  h.each(["on", "one", "off"], function (a, b) {
    o(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = h
        .map(a[0].split(/\s/), function (a) {
          return !a.match(/\.dt\b/) ? a + ".dt" : a;
        })
        .join(" ");
      var d = h(this.tables().nodes());
      d[b].apply(d, a);
      return this;
    });
  });
  o("clear()", function () {
    return this.iterator("table", function (a) {
      oa(a);
    });
  });
  o("settings()", function () {
    return new s(this.context, this.context);
  });
  o("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  o("data()", function () {
    return this.iterator("table", function (a) {
      return D(a.aoData, "_aData");
    }).flatten();
  });
  o("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        j = b.nTFoot,
        i = h(e),
        f = h(f),
        k = h(b.nTableWrapper),
        l = h.map(b.aoData, function (a) {
          return a.nTr;
        }),
        o;
      b.bDestroying = !0;
      r(b, "aoDestroyCallback", "destroy", [b]);
      a || new s(b).columns().visible(!0);
      k.off(".DT").find(":not(tbody *)").off(".DT");
      h(E).off(".DT-" + b.sInstance);
      e != g.parentNode && (i.children("thead").detach(), i.append(g));
      j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      wa(b);
      h(l).removeClass(b.asStripeClasses.join(" "));
      h("th, td", g).removeClass(
        d.sSortable +
          " " +
          d.sSortableAsc +
          " " +
          d.sSortableDesc +
          " " +
          d.sSortableNone
      );
      f.children().detach();
      f.append(l);
      g = a ? "remove" : "detach";
      i[g]();
      k[g]();
      !a &&
        c &&
        (c.insertBefore(e, b.nTableReinsertBefore),
        i.css("width", b.sDestroyWidth).removeClass(d.sTable),
        (o = b.asDestroyStripes.length) &&
          f.children().each(function (a) {
            h(this).addClass(b.asDestroyStripes[a % o]);
          }));
      c = h.inArray(b, n.settings);
      -1 !== c && n.settings.splice(c, 1);
    });
  });
  h.each(["column", "row", "cell"], function (a, b) {
    o(b + "s().every()", function (a) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, i, m) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m);
      });
    });
  });
  o("i18n()", function (a, b, c) {
    var d = this.context[0],
      a = S(a)(d.oLanguage);
    a === k && (a = b);
    c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
    return a.replace("%d", c);
  });
  n.version = "1.10.19";
  n.settings = [];
  n.models = {};
  n.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0,
  };
  n.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1,
  };
  n.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  n.defaults = {
    aaData: null,
    aaSorting: [[0, "asc"]],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse(
          (-1 === a.iStateDuration ? sessionStorage : localStorage).getItem(
            "DataTables_" + a.sInstance + "_" + location.pathname
          )
        );
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem(
          "DataTables_" + a.sInstance + "_" + location.pathname,
          JSON.stringify(b)
        );
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending",
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous",
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found",
    },
    oSearch: h.extend({}, n.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
  };
  Z(n.defaults);
  n.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  Z(n.defaults.column);
  n.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null,
    },
    oLanguage: { fnInfoCallback: null },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0,
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: k,
    oAjaxData: k,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == y(this)
        ? 1 * this._iRecordsTotal
        : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return "ssp" == y(this)
        ? 1 * this._iRecordsDisplay
        : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide
        ? !1 === f || -1 === a
          ? b + d
          : Math.min(b + a, this._iRecordsDisplay)
        : !f || c > d || -1 === a
        ? d
        : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  n.ext = x = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: { cell: [], column: [], row: [] },
    internal: {},
    legacy: { ajax: null },
    pager: {},
    renderer: { pageButton: {}, header: {} },
    order: {},
    type: { detect: [], search: {}, order: {} },
    _unique: 0,
    fnVersionCheck: n.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: n.version,
  };
  h.extend(x, {
    afnFiltering: x.search,
    aTypes: x.type.detect,
    ofnSearch: x.type.search,
    oSort: x.type.order,
    afnSortData: x.order,
    aoFeatures: x.feature,
    oApi: x.internal,
    oStdClasses: x.classes,
    oPagination: x.pager,
  });
  h.extend(n.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: "",
  });
  var Lb = n.ext.pager;
  h.extend(Lb, {
    simple: function () {
      return ["previous", "next"];
    },
    full: function () {
      return ["first", "previous", "next", "last"];
    },
    numbers: function (a, b) {
      return [ia(a, b)];
    },
    simple_numbers: function (a, b) {
      return ["previous", ia(a, b), "next"];
    },
    full_numbers: function (a, b) {
      return ["first", "previous", ia(a, b), "next", "last"];
    },
    first_last_numbers: function (a, b) {
      return ["first", ia(a, b), "last"];
    },
    _numbers: ia,
    numbers_length: 7,
  });
  h.extend(!0, n.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          j = a.oLanguage.oPaginate,
          i = a.oLanguage.oAria.paginate || {},
          m,
          l,
          n = 0,
          o = function (b, d) {
            var k,
              s,
              u,
              r,
              v = function (b) {
                Ta(a, b.data.action, true);
              };
            k = 0;
            for (s = d.length; k < s; k++) {
              r = d[k];
              if (h.isArray(r)) {
                u = h("<" + (r.DT_el || "div") + "/>").appendTo(b);
                o(u, r);
              } else {
                m = null;
                l = "";
                switch (r) {
                  case "ellipsis":
                    b.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    m = j.sFirst;
                    l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "previous":
                    m = j.sPrevious;
                    l = r + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "next":
                    m = j.sNext;
                    l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "last":
                    m = j.sLast;
                    l = r + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  default:
                    m = r + 1;
                    l = e === r ? g.sPageButtonActive : "";
                }
                if (m !== null) {
                  u = h("<a>", {
                    class: g.sPageButton + " " + l,
                    "aria-controls": a.sTableId,
                    "aria-label": i[r],
                    "data-dt-idx": n,
                    tabindex: a.iTabIndex,
                    id:
                      c === 0 && typeof r === "string"
                        ? a.sTableId + "_" + r
                        : null,
                  })
                    .html(m)
                    .appendTo(b);
                  Wa(u, { action: r }, v);
                  n++;
                }
              }
            }
          },
          s;
        try {
          s = h(b).find(H.activeElement).data("dt-idx");
        } catch (u) {}
        o(h(b).empty(), d);
        s !== k &&
          h(b)
            .find("[data-dt-idx=" + s + "]")
            .focus();
      },
    },
  });
  h.extend(n.ext.type.detect, [
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return $a(a, c) ? "num" + c : null;
    },
    function (a) {
      if (a && !(a instanceof Date) && !Zb.test(a)) return null;
      var b = Date.parse(a);
      return (null !== b && !isNaN(b)) || M(a) ? "date" : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return $a(a, c, !0) ? "num-fmt" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Qb(a, c) ? "html-num" + c : null;
    },
    function (a, b) {
      var c = b.oLanguage.sDecimal;
      return Qb(a, c, !0) ? "html-num-fmt" + c : null;
    },
    function (a) {
      return M(a) || ("string" === typeof a && -1 !== a.indexOf("<"))
        ? "html"
        : null;
    },
  ]);
  h.extend(n.ext.type.search, {
    html: function (a) {
      return M(a)
        ? a
        : "string" === typeof a
        ? a.replace(Nb, " ").replace(Aa, "")
        : "";
    },
    string: function (a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Nb, " ") : a;
    },
  });
  var za = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Pb(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a;
  };
  h.extend(x.type.order, {
    "date-pre": function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    "html-pre": function (a) {
      return M(a)
        ? ""
        : a.replace
        ? a.replace(/<.*?>/g, "").toLowerCase()
        : a + "";
    },
    "string-pre": function (a) {
      return M(a)
        ? ""
        : "string" === typeof a
        ? a.toLowerCase()
        : !a.toString
        ? ""
        : a.toString();
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  Da("");
  h.extend(!0, n.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(
              c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc
            ).addClass(
              h[e] == "asc"
                ? d.sSortAsc
                : h[e] == "desc"
                ? d.sSortDesc
                : c.sSortingClass
            );
          }
        });
      },
      jqueryui: function (a, b, c, d) {
        h("<div/>")
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
          .appendTo(b);
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(
              h[e] == "asc"
                ? d.sSortAsc
                : h[e] == "desc"
                ? d.sSortDesc
                : c.sSortingClass
            );
            b.find("span." + d.sSortIcon)
              .removeClass(
                d.sSortJUIAsc +
                  " " +
                  d.sSortJUIDesc +
                  " " +
                  d.sSortJUI +
                  " " +
                  d.sSortJUIAscAllowed +
                  " " +
                  d.sSortJUIDescAllowed
              )
              .addClass(
                h[e] == "asc"
                  ? d.sSortJUIAsc
                  : h[e] == "desc"
                  ? d.sSortJUIDesc
                  : c.sSortingClassJUI
              );
          }
        });
      },
    },
  });
  var eb = function (a) {
    return "string" === typeof a
      ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
      : a;
  };
  n.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return eb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : "";
          return (
            g +
            (d || "") +
            h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) +
            f +
            (e || "")
          );
        },
      };
    },
    text: function () {
      return { display: eb, filter: eb };
    },
  };
  h.extend(n.ext.internal, {
    _fnExternApiFunc: Mb,
    _fnBuildAjax: sa,
    _fnAjaxUpdate: mb,
    _fnAjaxParameters: vb,
    _fnAjaxUpdateDraw: wb,
    _fnAjaxDataSrc: ta,
    _fnAddColumn: Ea,
    _fnColumnOptions: ka,
    _fnAdjustColumnSizing: $,
    _fnVisibleToColumnIndex: aa,
    _fnColumnIndexToVisible: ba,
    _fnVisbleColumns: V,
    _fnGetColumns: ma,
    _fnColumnTypes: Ga,
    _fnApplyColumnDefs: jb,
    _fnHungarianMap: Z,
    _fnCamelToHungarian: J,
    _fnLanguageCompat: Ca,
    _fnBrowserDetect: hb,
    _fnAddData: O,
    _fnAddTr: na,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return h.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: B,
    _fnSetCellData: kb,
    _fnSplitObjNotation: Ja,
    _fnGetObjectDataFn: S,
    _fnSetObjectDataFn: N,
    _fnGetDataMaster: Ka,
    _fnClearTable: oa,
    _fnDeleteIndex: pa,
    _fnInvalidate: da,
    _fnGetRowElements: Ia,
    _fnCreateTr: Ha,
    _fnBuildHead: lb,
    _fnDrawHead: fa,
    _fnDraw: P,
    _fnReDraw: T,
    _fnAddOptionsHtml: ob,
    _fnDetectHeader: ea,
    _fnGetUniqueThs: ra,
    _fnFeatureHtmlFilter: qb,
    _fnFilterComplete: ga,
    _fnFilterCustom: zb,
    _fnFilterColumn: yb,
    _fnFilter: xb,
    _fnFilterCreateSearch: Pa,
    _fnEscapeRegex: Qa,
    _fnFilterData: Ab,
    _fnFeatureHtmlInfo: tb,
    _fnUpdateInfo: Db,
    _fnInfoMacros: Eb,
    _fnInitialise: ha,
    _fnInitComplete: ua,
    _fnLengthChange: Ra,
    _fnFeatureHtmlLength: pb,
    _fnFeatureHtmlPaginate: ub,
    _fnPageChange: Ta,
    _fnFeatureHtmlProcessing: rb,
    _fnProcessingDisplay: C,
    _fnFeatureHtmlTable: sb,
    _fnScrollDraw: la,
    _fnApplyToChildren: I,
    _fnCalculateColumnWidths: Fa,
    _fnThrottle: Oa,
    _fnConvertToWidth: Fb,
    _fnGetWidestNode: Gb,
    _fnGetMaxLenString: Hb,
    _fnStringToCss: v,
    _fnSortFlatten: X,
    _fnSort: nb,
    _fnSortAria: Jb,
    _fnSortListener: Va,
    _fnSortAttachListener: Ma,
    _fnSortingClasses: wa,
    _fnSortData: Ib,
    _fnSaveState: xa,
    _fnLoadState: Kb,
    _fnSettingsFromNode: ya,
    _fnLog: K,
    _fnMap: F,
    _fnBindAction: Wa,
    _fnCallbackReg: z,
    _fnCallbackFire: r,
    _fnLengthOverflow: Sa,
    _fnRenderer: Na,
    _fnDataSource: y,
    _fnRowAttributes: La,
    _fnExtend: Xa,
    _fnCalculateEnd: function () {},
  });
  h.fn.dataTable = n;
  n.$ = h;
  h.fn.dataTableSettings = n.settings;
  h.fn.dataTableExt = n.ext;
  h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api();
  };
  h.each(n, function (a, b) {
    h.fn.DataTable[a] = b;
  });
  return h.fn.dataTable;
});

/*!
 Buttons for DataTables 2.2.3
 ©2016-2022 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  "function" === typeof define && define.amd
    ? define(["jquery", "datatables.net"], function (A) {
        return d(A, window, document);
      })
    : "object" === typeof exports
    ? (module.exports = function (A, C) {
        A || (A = window);
        (C && C.fn.dataTable) || (C = require("datatables.net")(A, C).$);
        return d(C, A, A.document);
      })
    : d(jQuery, window, document);
})(function (d, A, C, p) {
  function I(a, b, c) {
    d.fn.animate
      ? a.stop().fadeIn(b, c)
      : (a.css("display", "block"), c && c.call(a));
  }
  function J(a, b, c) {
    d.fn.animate
      ? a.stop().fadeOut(b, c)
      : (a.css("display", "none"), c && c.call(a));
  }
  function L(a, b) {
    a = new u.Api(a);
    b = b ? b : a.init().buttons || u.defaults.buttons;
    return new x(a, b).container();
  }
  var u = d.fn.dataTable,
    O = 0,
    P = 0,
    D = u.ext.buttons,
    x = function (a, b) {
      if (!(this instanceof x))
        return function (c) {
          return new x(c, a).container();
        };
      "undefined" === typeof b && (b = {});
      !0 === b && (b = {});
      Array.isArray(b) && (b = { buttons: b });
      this.c = d.extend(!0, {}, x.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {
        dt: new u.Api(a),
        buttons: [],
        listenKeys: "",
        namespace: "dtb" + O++,
      };
      this.dom = {
        container: d("<" + this.c.dom.container.tag + "/>").addClass(
          this.c.dom.container.className
        ),
      };
      this._constructor();
    };
  d.extend(x.prototype, {
    action: function (a, b) {
      a = this._nodeToButton(a);
      if (b === p) return a.conf.action;
      a.conf.action = b;
      return this;
    },
    active: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.button.active;
      c = d(c.node);
      if (b === p) return c.hasClass(a);
      c.toggleClass(a, b === p ? !0 : b);
      return this;
    },
    add: function (a, b, c) {
      var e = this.s.buttons;
      if ("string" === typeof b) {
        b = b.split("-");
        var h = this.s;
        e = 0;
        for (var f = b.length - 1; e < f; e++) h = h.buttons[1 * b[e]];
        e = h.buttons;
        b = 1 * b[b.length - 1];
      }
      this._expandButton(
        e,
        a,
        a !== p ? a.split : p,
        (a === p || a.split === p || 0 === a.split.length) && h !== p,
        !1,
        b
      );
      (c !== p && !0 !== c) || this._draw();
      return this;
    },
    collectionRebuild: function (a, b) {
      a = this._nodeToButton(a);
      if (b !== p) {
        var c;
        for (c = a.buttons.length - 1; 0 <= c; c--)
          this.remove(a.buttons[c].node);
        for (c = 0; c < b.length; c++) {
          var e = b[c];
          this._expandButton(
            a.buttons,
            e,
            e !== p && e.config !== p && e.config.split !== p,
            !0,
            e.parentConf !== p && e.parentConf.split !== p,
            c,
            e.parentConf
          );
        }
      }
      this._draw(a.collection, a.buttons);
    },
    container: function () {
      return this.dom.container;
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      d(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0);
      return this;
    },
    destroy: function () {
      d("body").off("keyup." + this.s.namespace);
      var a = this.s.buttons.slice(),
        b;
      var c = 0;
      for (b = a.length; c < b; c++) this.remove(a[c].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      c = 0;
      for (b = a.length; c < b; c++)
        if (a.inst === this) {
          a.splice(c, 1);
          break;
        }
      return this;
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      a = this._nodeToButton(a);
      d(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
      return this;
    },
    index: function (a, b, c) {
      b || ((b = ""), (c = this.s.buttons));
      for (var e = 0, h = c.length; e < h; e++) {
        var f = c[e].buttons;
        if (c[e].node === a) return b + e;
        if (f && f.length && ((f = this.index(a, e + "-", f)), null !== f))
          return f;
      }
      return null;
    },
    name: function () {
      return this.c.name;
    },
    node: function (a) {
      if (!a) return this.dom.container;
      a = this._nodeToButton(a);
      return d(a.node);
    },
    processing: function (a, b) {
      var c = this.s.dt,
        e = this._nodeToButton(a);
      if (b === p) return d(e.node).hasClass("processing");
      d(e.node).toggleClass("processing", b);
      d(c.table().node()).triggerHandler("buttons-processing.dt", [
        b,
        c.button(a),
        c,
        d(a),
        e.conf,
      ]);
      return this;
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        e = this.s.dt;
      if (b.buttons.length)
        for (var h = b.buttons.length - 1; 0 <= h; h--)
          this.remove(b.buttons[h].node);
      b.conf.destroying = !0;
      b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf);
      this._removeKey(b.conf);
      d(b.node).remove();
      a = d.inArray(b, c);
      c.splice(a, 1);
      return this;
    },
    text: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.collection.buttonLiner;
      a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var e = this.s.dt,
        h = d(c.node),
        f = function (g) {
          return "function" === typeof g ? g(e, h, c.conf) : g;
        };
      if (b === p) return f(c.conf.text);
      c.conf.text = b;
      a
        ? h.children(a).eq(0).filter(":not(.dt-down-arrow)").html(f(b))
        : h.html(f(b));
      return this;
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        e = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({ inst: this, name: this.c.name });
      for (var h = 0, f = e.length; h < f; h++) this.add(e[h]);
      b.on("destroy", function (g, l) {
        l === c && a.destroy();
      });
      d("body").on("keyup." + this.s.namespace, function (g) {
        if (!C.activeElement || C.activeElement === C.body) {
          var l = String.fromCharCode(g.keyCode).toLowerCase();
          -1 !== a.s.listenKeys.toLowerCase().indexOf(l) && a._keypress(l, g);
        }
      });
    },
    _addKey: function (a) {
      a.key &&
        (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key);
    },
    _draw: function (a, b) {
      a || ((a = this.dom.container), (b = this.s.buttons));
      a.children().detach();
      for (var c = 0, e = b.length; c < e; c++)
        a.append(b[c].inserter),
          a.append(" "),
          b[c].buttons &&
            b[c].buttons.length &&
            this._draw(b[c].collection, b[c].buttons);
    },
    _expandButton: function (a, b, c, e, h, f, g) {
      var l = this.s.dt,
        m = 0,
        r = Array.isArray(b) ? b : [b];
      b === p && (r = Array.isArray(c) ? c : [c]);
      c = 0;
      for (var q = r.length; c < q; c++) {
        var n = this._resolveExtends(r[c]);
        if (n)
          if (
            ((b = n.config !== p && n.config.split ? !0 : !1), Array.isArray(n))
          )
            this._expandButton(
              a,
              n,
              k !== p && k.conf !== p ? k.conf.split : p,
              e,
              g !== p && g.split !== p,
              f,
              g
            );
          else {
            var k = this._buildButton(
              n,
              e,
              n.split !== p || (n.config !== p && n.config.split !== p),
              h
            );
            if (k) {
              f !== p && null !== f ? (a.splice(f, 0, k), f++) : a.push(k);
              if (k.conf.buttons || k.conf.split) {
                k.collection = d(
                  "<" +
                    (b
                      ? this.c.dom.splitCollection.tag
                      : this.c.dom.collection.tag) +
                    "/>"
                );
                k.conf._collection = k.collection;
                if (k.conf.split)
                  for (var t = 0; t < k.conf.split.length; t++)
                    "object" === typeof k.conf.split[t] &&
                      ((k.conf.split[t].parent = g),
                      k.conf.split[t].collectionLayout === p &&
                        (k.conf.split[t].collectionLayout =
                          k.conf.collectionLayout),
                      k.conf.split[t].dropup === p &&
                        (k.conf.split[t].dropup = k.conf.dropup),
                      k.conf.split[t].fade === p &&
                        (k.conf.split[t].fade = k.conf.fade));
                else
                  d(k.node).append(
                    d(
                      '<span class="dt-down-arrow">' +
                        this.c.dom.splitDropdown.text +
                        "</span>"
                    )
                  );
                this._expandButton(
                  k.buttons,
                  k.conf.buttons,
                  k.conf.split,
                  !b,
                  b,
                  f,
                  k.conf
                );
              }
              k.conf.parent = g;
              n.init && n.init.call(l.button(k.node), l, d(k.node), n);
              m++;
            }
          }
      }
    },
    _buildButton: function (a, b, c, e) {
      var h = this.c.dom.button,
        f = this.c.dom.buttonLiner,
        g = this.c.dom.collection,
        l = this.c.dom.splitCollection,
        m = this.c.dom.splitDropdownButton,
        r = this.s.dt,
        q = function (v) {
          return "function" === typeof v ? v(r, k, a) : v;
        };
      if (a.spacer) {
        var n = d("<span></span>")
          .addClass("dt-button-spacer " + a.style + " " + h.spacerClass)
          .html(q(a.text));
        return {
          conf: a,
          node: n,
          inserter: n,
          buttons: [],
          inCollection: b,
          isSplit: c,
          inSplit: e,
          collection: null,
        };
      }
      !c && e && l ? (h = m) : !c && b && g.button && (h = g.button);
      !c && e && l.buttonLiner
        ? (f = l.buttonLiner)
        : !c && b && g.buttonLiner && (f = g.buttonLiner);
      if (a.available && !a.available(r, a) && !a.hasOwnProperty("html"))
        return !1;
      if (a.hasOwnProperty("html")) var k = d(a.html);
      else {
        var t = function (v, E, F, G) {
          G.action.call(E.button(F), v, E, F, G);
          d(E.table().node()).triggerHandler("buttons-action.dt", [
            E.button(F),
            E,
            F,
            G,
          ]);
        };
        g = a.tag || h.tag;
        var y = a.clickBlurs === p ? !0 : a.clickBlurs;
        k = d("<" + g + "/>")
          .addClass(h.className)
          .addClass(e ? this.c.dom.splitDropdownButton.className : "")
          .attr("tabindex", this.s.dt.settings()[0].iTabIndex)
          .attr("aria-controls", this.s.dt.table().node().id)
          .on("click.dtb", function (v) {
            v.preventDefault();
            !k.hasClass(h.disabled) && a.action && t(v, r, k, a);
            y && k.trigger("blur");
          })
          .on("keypress.dtb", function (v) {
            13 === v.keyCode &&
              (v.preventDefault(),
              !k.hasClass(h.disabled) && a.action && t(v, r, k, a));
          });
        "a" === g.toLowerCase() && k.attr("href", "#");
        "button" === g.toLowerCase() && k.attr("type", "button");
        f.tag
          ? ((g = d("<" + f.tag + "/>")
              .html(q(a.text))
              .addClass(f.className)),
            "a" === f.tag.toLowerCase() && g.attr("href", "#"),
            k.append(g))
          : k.html(q(a.text));
        !1 === a.enabled && k.addClass(h.disabled);
        a.className && k.addClass(a.className);
        a.titleAttr && k.attr("title", q(a.titleAttr));
        a.attr && k.attr(a.attr);
        a.namespace || (a.namespace = ".dt-button-" + P++);
        a.config !== p && a.config.split && (a.split = a.config.split);
      }
      f =
        (f = this.c.dom.buttonContainer) && f.tag
          ? d("<" + f.tag + "/>")
              .addClass(f.className)
              .append(k)
          : k;
      this._addKey(a);
      this.c.buttonCreated && (f = this.c.buttonCreated(a, f));
      if (c) {
        n = d("<div/>").addClass(this.c.dom.splitWrapper.className);
        n.append(k);
        var w = d.extend(a, {
          text: this.c.dom.splitDropdown.text,
          className: this.c.dom.splitDropdown.className,
          closeButton: !1,
          attr: { "aria-haspopup": "dialog", "aria-expanded": !1 },
          align: this.c.dom.splitDropdown.align,
          splitAlignClass: this.c.dom.splitDropdown.splitAlignClass,
        });
        this._addKey(w);
        var B = function (v, E, F, G) {
            D.split.action.call(
              E.button(d("div.dt-btn-split-wrapper")[0]),
              v,
              E,
              F,
              G
            );
            d(E.table().node()).triggerHandler("buttons-action.dt", [
              E.button(F),
              E,
              F,
              G,
            ]);
            F.attr("aria-expanded", !0);
          },
          z = d(
            '<button class="' +
              this.c.dom.splitDropdown.className +
              ' dt-button"><span class="dt-btn-split-drop-arrow">' +
              this.c.dom.splitDropdown.text +
              "</span></button>"
          )
            .on("click.dtb", function (v) {
              v.preventDefault();
              v.stopPropagation();
              z.hasClass(h.disabled) || B(v, r, z, w);
              y && z.trigger("blur");
            })
            .on("keypress.dtb", function (v) {
              13 === v.keyCode &&
                (v.preventDefault(), z.hasClass(h.disabled) || B(v, r, z, w));
            });
        0 === a.split.length && z.addClass("dtb-hide-drop");
        n.append(z).attr(w.attr);
      }
      return {
        conf: a,
        node: c ? n.get(0) : k.get(0),
        inserter: c ? n : f,
        buttons: [],
        inCollection: b,
        isSplit: c,
        inSplit: e,
        collection: null,
      };
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var h = this._nodeToButton(a, b[c].buttons);
          if (h) return h;
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var h = this._nodeToHost(a, b[c].buttons);
          if (h) return h;
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (e) {
          for (var h = 0, f = e.length; h < f; h++) {
            var g = e[h].conf,
              l = e[h].node;
            g.key &&
              (g.key === a
                ? ((b._buttonsHandled = !0), d(l).click())
                : !d.isPlainObject(g.key) ||
                  g.key.key !== a ||
                  (g.key.shiftKey && !b.shiftKey) ||
                  (g.key.altKey && !b.altKey) ||
                  (g.key.ctrlKey && !b.ctrlKey) ||
                  (g.key.metaKey && !b.metaKey) ||
                  ((b._buttonsHandled = !0), d(l).click()));
            e[h].buttons.length && c(e[h].buttons);
          }
        };
        c(this.s.buttons);
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = d.isPlainObject(a.key) ? a.key.key : a.key;
        a = this.s.listenKeys.split("");
        b = d.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join("");
      }
    },
    _resolveExtends: function (a) {
      var b = this,
        c = this.s.dt,
        e,
        h = function (m) {
          for (var r = 0; !d.isPlainObject(m) && !Array.isArray(m); ) {
            if (m === p) return;
            if ("function" === typeof m) {
              if (((m = m.call(b, c, a)), !m)) return !1;
            } else if ("string" === typeof m) {
              if (!D[m]) return { html: m };
              m = D[m];
            }
            r++;
            if (30 < r) throw "Buttons: Too many iterations";
          }
          return Array.isArray(m) ? m : d.extend({}, m);
        };
      for (a = h(a); a && a.extend; ) {
        if (!D[a.extend])
          throw "Cannot extend unknown button type: " + a.extend;
        var f = h(D[a.extend]);
        if (Array.isArray(f)) return f;
        if (!f) return !1;
        var g = f.className;
        a.config !== p &&
          f.config !== p &&
          (a.config = d.extend({}, f.config, a.config));
        a = d.extend({}, f, a);
        g && a.className !== g && (a.className = g + " " + a.className);
        var l = a.postfixButtons;
        if (l) {
          a.buttons || (a.buttons = []);
          g = 0;
          for (e = l.length; g < e; g++) a.buttons.push(l[g]);
          a.postfixButtons = null;
        }
        if ((l = a.prefixButtons)) {
          a.buttons || (a.buttons = []);
          g = 0;
          for (e = l.length; g < e; g++) a.buttons.splice(g, 0, l[g]);
          a.prefixButtons = null;
        }
        a.extend = f.extend;
      }
      return a;
    },
    _popover: function (a, b, c, e) {
      e = this.c;
      var h = !1,
        f = d.extend(
          {
            align: "button-left",
            autoClose: !1,
            background: !0,
            backgroundClassName: "dt-button-background",
            closeButton: !0,
            contentClassName: e.dom.collection.className,
            collectionLayout: "",
            collectionTitle: "",
            dropup: !1,
            fade: 400,
            popoverTitle: "",
            rightAlignClassName: "dt-button-right",
            tag: e.dom.collection.tag,
          },
          c
        ),
        g = b.node(),
        l = function () {
          h = !0;
          J(d(".dt-button-collection"), f.fade, function () {
            d(this).detach();
          });
          d(
            b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
          ).attr("aria-expanded", "false");
          d("div.dt-button-background").off("click.dtb-collection");
          x.background(!1, f.backgroundClassName, f.fade, g);
          d(A).off("resize.resize.dtb-collection");
          d("body").off(".dtb-collection");
          b.off("buttons-action.b-internal");
          b.off("destroy");
        };
      if (!1 === a) l();
      else {
        c = d(
          b.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()
        );
        c.length &&
          (g.closest("div.dt-button-collection").length && (g = c.eq(0)), l());
        c = d(".dt-button", a).length;
        e = "";
        3 === c
          ? (e = "dtb-b3")
          : 2 === c
          ? (e = "dtb-b2")
          : 1 === c && (e = "dtb-b1");
        var m = d("<div/>")
          .addClass("dt-button-collection")
          .addClass(f.collectionLayout)
          .addClass(f.splitAlignClass)
          .addClass(e)
          .css("display", "none")
          .attr({ "aria-modal": !0, role: "dialog" });
        a = d(a).addClass(f.contentClassName).attr("role", "menu").appendTo(m);
        g.attr("aria-expanded", "true");
        g.parents("body")[0] !== C.body && (g = C.body.lastChild);
        f.popoverTitle
          ? m.prepend(
              '<div class="dt-button-collection-title">' +
                f.popoverTitle +
                "</div>"
            )
          : f.collectionTitle &&
            m.prepend(
              '<div class="dt-button-collection-title">' +
                f.collectionTitle +
                "</div>"
            );
        f.closeButton &&
          m
            .prepend('<div class="dtb-popover-close">x</div>')
            .addClass("dtb-collection-closeable");
        I(m.insertAfter(g), f.fade);
        c = d(b.table().container());
        var r = m.css("position");
        if ("container" === f.span || "dt-container" === f.align)
          (g = g.parent()), m.css("width", c.width());
        if ("absolute" === r) {
          var q = d(g[0].offsetParent);
          c = g.position();
          e = g.offset();
          var n = q.offset(),
            k = q.position(),
            t = A.getComputedStyle(q[0]);
          n.height = q.outerHeight();
          n.width = q.width() + parseFloat(t.paddingLeft);
          n.right = n.left + n.width;
          n.bottom = n.top + n.height;
          q = c.top + g.outerHeight();
          var y = c.left;
          m.css({ top: q, left: y });
          t = A.getComputedStyle(m[0]);
          var w = m.offset();
          w.height = m.outerHeight();
          w.width = m.outerWidth();
          w.right = w.left + w.width;
          w.bottom = w.top + w.height;
          w.marginTop = parseFloat(t.marginTop);
          w.marginBottom = parseFloat(t.marginBottom);
          f.dropup && (q = c.top - w.height - w.marginTop - w.marginBottom);
          if ("button-right" === f.align || m.hasClass(f.rightAlignClassName))
            y = c.left - w.width + g.outerWidth();
          if ("dt-container" === f.align || "container" === f.align)
            y < c.left && (y = -c.left),
              y + w.width > n.width && (y = n.width - w.width);
          k.left + y + w.width > d(A).width() &&
            (y = d(A).width() - w.width - k.left);
          0 > e.left + y && (y = -e.left);
          k.top + q + w.height > d(A).height() + d(A).scrollTop() &&
            (q = c.top - w.height - w.marginTop - w.marginBottom);
          k.top + q < d(A).scrollTop() && (q = c.top + g.outerHeight());
          m.css({ top: q, left: y });
        } else
          (r = function () {
            var B = d(A).height() / 2,
              z = m.height() / 2;
            z > B && (z = B);
            m.css("marginTop", -1 * z);
          }),
            r(),
            d(A).on("resize.dtb-collection", function () {
              r();
            });
        f.background &&
          x.background(
            !0,
            f.backgroundClassName,
            f.fade,
            f.backgroundHost || g
          );
        d("div.dt-button-background").on(
          "click.dtb-collection",
          function () {}
        );
        f.autoClose &&
          setTimeout(function () {
            b.on("buttons-action.b-internal", function (B, z, v, E) {
              E[0] !== g[0] && l();
            });
          }, 0);
        d(m).trigger("buttons-popover.dt");
        b.on("destroy", l);
        setTimeout(function () {
          h = !1;
          d("body")
            .on("click.dtb-collection", function (B) {
              if (!h) {
                var z = d.fn.addBack ? "addBack" : "andSelf",
                  v = d(B.target).parent()[0];
                ((!d(B.target).parents()[z]().filter(a).length &&
                  !d(v).hasClass("dt-buttons")) ||
                  d(B.target).hasClass("dt-button-background")) &&
                  l();
              }
            })
            .on("keyup.dtb-collection", function (B) {
              27 === B.keyCode && l();
            })
            .on("keydown.dtb-collection", function (B) {
              var z = d("a, button", a),
                v = C.activeElement;
              9 === B.keyCode &&
                (-1 === z.index(v)
                  ? (z.first().focus(), B.preventDefault())
                  : B.shiftKey
                  ? v === z[0] && (z.last().focus(), B.preventDefault())
                  : v === z.last()[0] &&
                    (z.first().focus(), B.preventDefault()));
            });
        }, 0);
      }
    },
  });
  x.background = function (a, b, c, e) {
    c === p && (c = 400);
    e || (e = C.body);
    a
      ? I(d("<div/>").addClass(b).css("display", "none").insertAfter(e), c)
      : J(d("div." + b), c, function () {
          d(this).removeClass(b).remove();
        });
  };
  x.instanceSelector = function (a, b) {
    if (a === p || null === a)
      return d.map(b, function (f) {
        return f.inst;
      });
    var c = [],
      e = d.map(b, function (f) {
        return f.name;
      }),
      h = function (f) {
        if (Array.isArray(f)) for (var g = 0, l = f.length; g < l; g++) h(f[g]);
        else
          "string" === typeof f
            ? -1 !== f.indexOf(",")
              ? h(f.split(","))
              : ((f = d.inArray(f.trim(), e)), -1 !== f && c.push(b[f].inst))
            : "number" === typeof f
            ? c.push(b[f].inst)
            : "object" === typeof f && c.push(f);
      };
    h(a);
    return c;
  };
  x.buttonSelector = function (a, b) {
    for (
      var c = [],
        e = function (l, m, r) {
          for (var q, n, k = 0, t = m.length; k < t; k++)
            if ((q = m[k]))
              (n = r !== p ? r + k : k + ""),
                l.push({ node: q.node, name: q.conf.name, idx: n }),
                q.buttons && e(l, q.buttons, n + "-");
        },
        h = function (l, m) {
          var r,
            q = [];
          e(q, m.s.buttons);
          var n = d.map(q, function (k) {
            return k.node;
          });
          if (Array.isArray(l) || l instanceof d)
            for (n = 0, r = l.length; n < r; n++) h(l[n], m);
          else if (null === l || l === p || "*" === l)
            for (n = 0, r = q.length; n < r; n++)
              c.push({ inst: m, node: q[n].node });
          else if ("number" === typeof l)
            m.s.buttons[l] && c.push({ inst: m, node: m.s.buttons[l].node });
          else if ("string" === typeof l)
            if (-1 !== l.indexOf(","))
              for (q = l.split(","), n = 0, r = q.length; n < r; n++)
                h(q[n].trim(), m);
            else if (l.match(/^\d+(\-\d+)*$/))
              (n = d.map(q, function (k) {
                return k.idx;
              })),
                c.push({ inst: m, node: q[d.inArray(l, n)].node });
            else if (-1 !== l.indexOf(":name"))
              for (l = l.replace(":name", ""), n = 0, r = q.length; n < r; n++)
                q[n].name === l && c.push({ inst: m, node: q[n].node });
            else
              d(n)
                .filter(l)
                .each(function () {
                  c.push({ inst: m, node: this });
                });
          else
            "object" === typeof l &&
              l.nodeName &&
              ((q = d.inArray(l, n)),
              -1 !== q && c.push({ inst: m, node: n[q] }));
        },
        f = 0,
        g = a.length;
      f < g;
      f++
    )
      h(b, a[f]);
    return c;
  };
  x.stripData = function (a, b) {
    if ("string" !== typeof a) return a;
    a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    a = a.replace(/<!\-\-.*?\-\->/g, "");
    if (!b || b.stripHtml) a = a.replace(/<[^>]*>/g, "");
    if (!b || b.trim) a = a.replace(/^\s+|\s+$/g, "");
    if (!b || b.stripNewlines) a = a.replace(/\n/g, " ");
    if (!b || b.decodeEntities) (M.innerHTML = a), (a = M.value);
    return a;
  };
  x.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: { tag: "div", className: "dt-buttons" },
      collection: { tag: "div", className: "" },
      button: {
        tag: "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled",
        spacerClass: "",
      },
      buttonLiner: { tag: "span", className: "" },
      split: { tag: "div", className: "dt-button-split" },
      splitWrapper: { tag: "div", className: "dt-btn-split-wrapper" },
      splitDropdown: {
        tag: "button",
        text: "&#x25BC;",
        className: "dt-btn-split-drop",
        align: "split-right",
        splitAlignClass: "dt-button-split-left",
      },
      splitDropdownButton: {
        tag: "button",
        className: "dt-btn-split-drop-button dt-button",
      },
      splitCollection: { tag: "div", className: "dt-button-split-collection" },
    },
  };
  x.version = "2.2.3";
  d.extend(D, {
    collection: {
      text: function (a) {
        return a.i18n("buttons.collection", "Collection");
      },
      className: "buttons-collection",
      closeButton: !1,
      init: function (a, b, c) {
        b.attr("aria-expanded", !1);
      },
      action: function (a, b, c, e) {
        e._collection.parents("body").length
          ? this.popover(!1, e)
          : this.popover(e._collection, e);
        "keypress" === a.type && d("a, button", e._collection).eq(0).focus();
      },
      attr: { "aria-haspopup": "dialog" },
    },
    split: {
      text: function (a) {
        return a.i18n("buttons.split", "Split");
      },
      className: "buttons-split",
      closeButton: !1,
      init: function (a, b, c) {
        return b.attr("aria-expanded", !1);
      },
      action: function (a, b, c, e) {
        this.popover(e._collection, e);
      },
      attr: { "aria-haspopup": "dialog" },
    },
    copy: function (a, b) {
      if (D.copyHtml5) return "copyHtml5";
    },
    csv: function (a, b) {
      if (D.csvHtml5 && D.csvHtml5.available(a, b)) return "csvHtml5";
    },
    excel: function (a, b) {
      if (D.excelHtml5 && D.excelHtml5.available(a, b)) return "excelHtml5";
    },
    pdf: function (a, b) {
      if (D.pdfHtml5 && D.pdfHtml5.available(a, b)) return "pdfHtml5";
    },
    pageLength: function (a) {
      a = a.settings()[0].aLengthMenu;
      var b = [],
        c = [];
      if (Array.isArray(a[0])) (b = a[0]), (c = a[1]);
      else
        for (var e = 0; e < a.length; e++) {
          var h = a[e];
          d.isPlainObject(h)
            ? (b.push(h.value), c.push(h.label))
            : (b.push(h), c.push(h));
        }
      return {
        extend: "collection",
        text: function (f) {
          return f.i18n(
            "buttons.pageLength",
            { "-1": "Show all rows", _: "Show %d rows" },
            f.page.len()
          );
        },
        className: "buttons-page-length",
        autoClose: !0,
        buttons: d.map(b, function (f, g) {
          return {
            text: c[g],
            className: "button-page-length",
            action: function (l, m) {
              m.page.len(f).draw();
            },
            init: function (l, m, r) {
              var q = this;
              m = function () {
                q.active(l.page.len() === f);
              };
              l.on("length.dt" + r.namespace, m);
              m();
            },
            destroy: function (l, m, r) {
              l.off("length.dt" + r.namespace);
            },
          };
        }),
        init: function (f, g, l) {
          var m = this;
          f.on("length.dt" + l.namespace, function () {
            m.text(l.text);
          });
        },
        destroy: function (f, g, l) {
          f.off("length.dt" + l.namespace);
        },
      };
    },
    spacer: {
      style: "empty",
      spacer: !0,
      text: function (a) {
        return a.i18n("buttons.spacer", "");
      },
    },
  });
  u.Api.register("buttons()", function (a, b) {
    b === p && ((b = a), (a = p));
    this.selector.buttonGroup = a;
    var c = this.iterator(
      !0,
      "table",
      function (e) {
        if (e._buttons)
          return x.buttonSelector(x.instanceSelector(a, e._buttons), b);
      },
      !0
    );
    c._groupSelector = a;
    return c;
  });
  u.Api.register("button()", function (a, b) {
    a = this.buttons(a, b);
    1 < a.length && a.splice(1, a.length);
    return a;
  });
  u.Api.registerPlural("buttons().active()", "button().active()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.active(b.node);
        })
      : this.each(function (b) {
          b.inst.active(b.node, a);
        });
  });
  u.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.action(b.node);
        })
      : this.each(function (b) {
          b.inst.action(b.node, a);
        });
  });
  u.Api.registerPlural(
    "buttons().collectionRebuild()",
    "button().collectionRebuild()",
    function (a) {
      return this.each(function (b) {
        for (var c = 0; c < a.length; c++)
          "object" === typeof a[c] && (a[c].parentConf = b);
        b.inst.collectionRebuild(b.node, a);
      });
    }
  );
  u.Api.register(["buttons().enable()", "button().enable()"], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a);
    });
  });
  u.Api.register(["buttons().disable()", "button().disable()"], function () {
    return this.each(function (a) {
      a.inst.disable(a.node);
    });
  });
  u.Api.register("button().index()", function () {
    var a = null;
    this.each(function (b) {
      b = b.inst.index(b.node);
      null !== b && (a = b);
    });
    return a;
  });
  u.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var a = d();
    d(
      this.each(function (b) {
        a = a.add(b.inst.node(b.node));
      })
    );
    return a;
  });
  u.Api.registerPlural(
    "buttons().processing()",
    "button().processing()",
    function (a) {
      return a === p
        ? this.map(function (b) {
            return b.inst.processing(b.node);
          })
        : this.each(function (b) {
            b.inst.processing(b.node, a);
          });
    }
  );
  u.Api.registerPlural("buttons().text()", "button().text()", function (a) {
    return a === p
      ? this.map(function (b) {
          return b.inst.text(b.node);
        })
      : this.each(function (b) {
          b.inst.text(b.node, a);
        });
  });
  u.Api.registerPlural(
    "buttons().trigger()",
    "button().trigger()",
    function () {
      return this.each(function (a) {
        a.inst.node(a.node).trigger("click");
      });
    }
  );
  u.Api.register("button().popover()", function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a, this.button(this[0].node), b);
    });
  });
  u.Api.register("buttons().containers()", function () {
    var a = d(),
      b = this._groupSelector;
    this.iterator(!0, "table", function (c) {
      if (c._buttons) {
        c = x.instanceSelector(b, c._buttons);
        for (var e = 0, h = c.length; e < h; e++) a = a.add(c[e].container());
      }
    });
    return a;
  });
  u.Api.register("buttons().container()", function () {
    return this.containers().eq(0);
  });
  u.Api.register("button().add()", function (a, b, c) {
    var e = this.context;
    e.length &&
      ((e = x.instanceSelector(this._groupSelector, e[0]._buttons)),
      e.length && e[0].add(b, a, c));
    return this.button(this._groupSelector, a);
  });
  u.Api.register("buttons().destroy()", function () {
    this.pluck("inst")
      .unique()
      .each(function (a) {
        a.destroy();
      });
    return this;
  });
  u.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    this.each(function (a) {
      a.inst.remove(a.node);
    });
    return this;
  });
  var H;
  u.Api.register("buttons.info()", function (a, b, c) {
    var e = this;
    if (!1 === a)
      return (
        this.off("destroy.btn-info"),
        J(d("#datatables_buttons_info"), 400, function () {
          d(this).remove();
        }),
        clearTimeout(H),
        (H = null),
        this
      );
    H && clearTimeout(H);
    d("#datatables_buttons_info").length &&
      d("#datatables_buttons_info").remove();
    a = a ? "<h2>" + a + "</h2>" : "";
    I(
      d('<div id="datatables_buttons_info" class="dt-button-info"/>')
        .html(a)
        .append(d("<div/>")["string" === typeof b ? "html" : "append"](b))
        .css("display", "none")
        .appendTo("body")
    );
    c !== p &&
      0 !== c &&
      (H = setTimeout(function () {
        e.buttons.info(!1);
      }, c));
    this.on("destroy.btn-info", function () {
      e.buttons.info(!1);
    });
    return this;
  });
  u.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) return Q(new u.Api(this.context[0]), a);
  });
  u.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {});
    var b = a;
    var c =
      "*" === b.filename &&
      "*" !== b.title &&
      b.title !== p &&
      null !== b.title &&
      "" !== b.title
        ? b.title
        : b.filename;
    "function" === typeof c && (c = c());
    c === p || null === c
      ? (c = null)
      : (-1 !== c.indexOf("*") &&
          (c = c.replace("*", d("head > title").text()).trim()),
        (c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "")),
        (b = K(b.extension)) || (b = ""),
        (c += b));
    b = K(a.title);
    b =
      null === b
        ? null
        : -1 !== b.indexOf("*")
        ? b.replace("*", d("head > title").text() || "Exported data")
        : b;
    return {
      filename: c,
      title: b,
      messageTop: N(this, a.message || a.messageTop, "top"),
      messageBottom: N(this, a.messageBottom, "bottom"),
    };
  });
  var K = function (a) {
      return null === a || a === p ? null : "function" === typeof a ? a() : a;
    },
    N = function (a, b, c) {
      b = K(b);
      if (null === b) return null;
      a = d("caption", a.table().container()).eq(0);
      return "*" === b
        ? a.css("caption-side") !== c
          ? null
          : a.length
          ? a.text()
          : ""
        : b;
    },
    M = d("<textarea/>")[0],
    Q = function (a, b) {
      var c = d.extend(
        !0,
        {},
        {
          rows: null,
          columns: "",
          modifier: { search: "applied", order: "applied" },
          orthogonal: "display",
          stripHtml: !0,
          stripNewlines: !0,
          decodeEntities: !0,
          trim: !0,
          format: {
            header: function (t) {
              return x.stripData(t, c);
            },
            footer: function (t) {
              return x.stripData(t, c);
            },
            body: function (t) {
              return x.stripData(t, c);
            },
          },
          customizeData: null,
        },
        b
      );
      b = a
        .columns(c.columns)
        .indexes()
        .map(function (t) {
          var y = a.column(t).header();
          return c.format.header(y.innerHTML, t, y);
        })
        .toArray();
      var e = a.table().footer()
          ? a
              .columns(c.columns)
              .indexes()
              .map(function (t) {
                var y = a.column(t).footer();
                return c.format.footer(y ? y.innerHTML : "", t, y);
              })
              .toArray()
          : null,
        h = d.extend({}, c.modifier);
      a.select &&
        "function" === typeof a.select.info &&
        h.selected === p &&
        a.rows(c.rows, d.extend({ selected: !0 }, h)).any() &&
        d.extend(h, { selected: !0 });
      h = a.rows(c.rows, h).indexes().toArray();
      var f = a.cells(h, c.columns);
      h = f.render(c.orthogonal).toArray();
      f = f.nodes().toArray();
      for (
        var g = b.length, l = [], m = 0, r = 0, q = 0 < g ? h.length / g : 0;
        r < q;
        r++
      ) {
        for (var n = [g], k = 0; k < g; k++)
          (n[k] = c.format.body(h[m], r, k, f[m])), m++;
        l[r] = n;
      }
      b = { header: b, footer: e, body: l };
      c.customizeData && c.customizeData(b);
      return b;
    };
  d.fn.dataTable.Buttons = x;
  d.fn.DataTable.Buttons = x;
  d(C).on("init.dt plugin-init.dt", function (a, b) {
    "dt" === a.namespace &&
      (a = b.oInit.buttons || u.defaults.buttons) &&
      !b._buttons &&
      new x(b, a).container();
  });
  u.ext.feature.push({ fnInit: L, cFeature: "B" });
  u.ext.features && u.ext.features.register("buttons", L);
  return x;
});

/*!
 Column visibility buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (g) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (e) {
          return g(e, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (e, f) {
        e || (e = window);
        (f && f.fn.dataTable) || (f = require("datatables.net")(e, f).$);
        f.fn.dataTable.Buttons || require("datatables.net-buttons")(e, f);
        return g(f, e, e.document);
      })
    : g(jQuery, window, document);
})(function (g, e, f, l) {
  e = g.fn.dataTable;
  g.extend(e.ext.buttons, {
    colvis: function (b, a) {
      return {
        extend: "collection",
        text: function (c) {
          return c.i18n("buttons.colvis", "Column visibility");
        },
        className: "buttons-colvis",
        buttons: [
          {
            extend: "columnsToggle",
            columns: a.columns,
            columnText: a.columnText,
          },
        ],
      };
    },
    columnsToggle: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnToggle",
            columns: c,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnToggle: function (b, a) {
      return {
        extend: "columnVisibility",
        columns: a.columns,
        columnText: a.columnText,
      };
    },
    columnsVisibility: function (b, a) {
      return b
        .columns(a.columns)
        .indexes()
        .map(function (c) {
          return {
            extend: "columnVisibility",
            columns: c,
            visibility: a.visibility,
            columnText: a.columnText,
          };
        })
        .toArray();
    },
    columnVisibility: {
      columns: l,
      text: function (b, a, c) {
        return c._columnText(b, c);
      },
      className: "buttons-columnVisibility",
      action: function (b, a, c, d) {
        b = a.columns(d.columns);
        a = b.visible();
        b.visible(d.visibility !== l ? d.visibility : !(a.length && a[0]));
      },
      init: function (b, a, c) {
        var d = this;
        a.attr("data-cv-idx", c.columns);
        b.on("column-visibility.dt" + c.namespace, function (h, k) {
          k.bDestroying ||
            k.nTable != b.settings()[0].nTable ||
            d.active(b.column(c.columns).visible());
        }).on("column-reorder.dt" + c.namespace, function (h, k, m) {
          1 === b.columns(c.columns).count() &&
            (d.text(c._columnText(b, c)),
            d.active(b.column(c.columns).visible()));
        });
        this.active(b.column(c.columns).visible());
      },
      destroy: function (b, a, c) {
        b.off("column-visibility.dt" + c.namespace).off(
          "column-reorder.dt" + c.namespace
        );
      },
      _columnText: function (b, a) {
        var c = b.column(a.columns).index(),
          d = b.settings()[0].aoColumns[c].sTitle;
        d || (d = b.column(c).header().innerHTML);
        d = d
          .replace(/\n/g, " ")
          .replace(/<br\s*\/?>/gi, " ")
          .replace(/<select(.*?)<\/select>/g, "")
          .replace(/<!\-\-.*?\-\->/g, "")
          .replace(/<.*?>/g, "")
          .replace(/^\s+|\s+$/g, "");
        return a.columnText ? a.columnText(b, c, d) : d;
      },
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (b) {
        return b.i18n("buttons.colvisRestore", "Restore visibility");
      },
      init: function (b, a, c) {
        c._visOriginal = b
          .columns()
          .indexes()
          .map(function (d) {
            return b.column(d).visible();
          })
          .toArray();
      },
      action: function (b, a, c, d) {
        a.columns().every(function (h) {
          h =
            a.colReorder && a.colReorder.transpose
              ? a.colReorder.transpose(h, "toOriginal")
              : h;
          this.visible(d._visOriginal[h]);
        });
      },
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (b, a, c, d) {
        a.columns(d.show).visible(!0, !1);
        a.columns(d.hide).visible(!1, !1);
        a.columns.adjust();
      },
      show: [],
      hide: [],
    },
  });
  return e.Buttons;
});

/*!

JSZip v3.1.3 - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!(function (a) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    (b =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (b.JSZip = a());
  }
})(function () {
  return (function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw ((j.code = "MODULE_NOT_FOUND"), j);
        }
        var k = (c[g] = { exports: {} });
        b[g][0].call(
          k.exports,
          function (a) {
            var c = b[g][1][a];
            return e(c ? c : a);
          },
          k,
          k.exports,
          a,
          b,
          c,
          d
        );
      }
      return c[g].exports;
    }
    for (
      var f = "function" == typeof require && require, g = 0;
      g < d.length;
      g++
    )
      e(d[g]);
    return e;
  })(
    {
      1: [
        function (a, b, c) {
          "use strict";
          var d = a("./utils"),
            e = a("./support"),
            f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          (c.encode = function (a) {
            for (
              var b,
                c,
                e,
                g,
                h,
                i,
                j,
                k = [],
                l = 0,
                m = a.length,
                n = m,
                o = "string" !== d.getTypeOf(a);
              l < a.length;

            )
              (n = m - l),
                o
                  ? ((b = a[l++]),
                    (c = l < m ? a[l++] : 0),
                    (e = l < m ? a[l++] : 0))
                  : ((b = a.charCodeAt(l++)),
                    (c = l < m ? a.charCodeAt(l++) : 0),
                    (e = l < m ? a.charCodeAt(l++) : 0)),
                (g = b >> 2),
                (h = ((3 & b) << 4) | (c >> 4)),
                (i = n > 1 ? ((15 & c) << 2) | (e >> 6) : 64),
                (j = n > 2 ? 63 & e : 64),
                k.push(f.charAt(g) + f.charAt(h) + f.charAt(i) + f.charAt(j));
            return k.join("");
          }),
            (c.decode = function (a) {
              var b,
                c,
                d,
                g,
                h,
                i,
                j,
                k = 0,
                l = 0,
                m = "data:";
              if (a.substr(0, m.length) === m)
                throw new Error(
                  "Invalid base64 input, it looks like a data url."
                );
              a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var n = (3 * a.length) / 4;
              if (
                (a.charAt(a.length - 1) === f.charAt(64) && n--,
                a.charAt(a.length - 2) === f.charAt(64) && n--,
                n % 1 !== 0)
              )
                throw new Error("Invalid base64 input, bad content length.");
              var o;
              for (
                o = e.uint8array ? new Uint8Array(0 | n) : new Array(0 | n);
                k < a.length;

              )
                (g = f.indexOf(a.charAt(k++))),
                  (h = f.indexOf(a.charAt(k++))),
                  (i = f.indexOf(a.charAt(k++))),
                  (j = f.indexOf(a.charAt(k++))),
                  (b = (g << 2) | (h >> 4)),
                  (c = ((15 & h) << 4) | (i >> 2)),
                  (d = ((3 & i) << 6) | j),
                  (o[l++] = b),
                  64 !== i && (o[l++] = c),
                  64 !== j && (o[l++] = d);
              return o;
            });
        },
        { "./support": 30, "./utils": 32 },
      ],
      2: [
        function (a, b, c) {
          "use strict";
          function d(a, b, c, d, e) {
            (this.compressedSize = a),
              (this.uncompressedSize = b),
              (this.crc32 = c),
              (this.compression = d),
              (this.compressedContent = e);
          }
          var e = a("./external"),
            f = a("./stream/DataWorker"),
            g = a("./stream/DataLengthProbe"),
            h = a("./stream/Crc32Probe"),
            g = a("./stream/DataLengthProbe");
          (d.prototype = {
            getContentWorker: function () {
              var a = new f(e.Promise.resolve(this.compressedContent))
                  .pipe(this.compression.uncompressWorker())
                  .pipe(new g("data_length")),
                b = this;
              return (
                a.on("end", function () {
                  if (this.streamInfo.data_length !== b.uncompressedSize)
                    throw new Error("Bug : uncompressed data size mismatch");
                }),
                a
              );
            },
            getCompressedWorker: function () {
              return new f(e.Promise.resolve(this.compressedContent))
                .withStreamInfo("compressedSize", this.compressedSize)
                .withStreamInfo("uncompressedSize", this.uncompressedSize)
                .withStreamInfo("crc32", this.crc32)
                .withStreamInfo("compression", this.compression);
            },
          }),
            (d.createWorkerFrom = function (a, b, c) {
              return a
                .pipe(new h())
                .pipe(new g("uncompressedSize"))
                .pipe(b.compressWorker(c))
                .pipe(new g("compressedSize"))
                .withStreamInfo("compression", b);
            }),
            (b.exports = d);
        },
        {
          "./external": 6,
          "./stream/Crc32Probe": 25,
          "./stream/DataLengthProbe": 26,
          "./stream/DataWorker": 27,
        },
      ],
      3: [
        function (a, b, c) {
          "use strict";
          var d = a("./stream/GenericWorker");
          (c.STORE = {
            magic: "\0\0",
            compressWorker: function (a) {
              return new d("STORE compression");
            },
            uncompressWorker: function () {
              return new d("STORE decompression");
            },
          }),
            (c.DEFLATE = a("./flate"));
        },
        { "./flate": 7, "./stream/GenericWorker": 28 },
      ],
      4: [
        function (a, b, c) {
          "use strict";
          function d() {
            for (var a, b = [], c = 0; c < 256; c++) {
              a = c;
              for (var d = 0; d < 8; d++)
                a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1;
              b[c] = a;
            }
            return b;
          }
          function e(a, b, c, d) {
            var e = h,
              f = d + c;
            a ^= -1;
            for (var g = d; g < f; g++) a = (a >>> 8) ^ e[255 & (a ^ b[g])];
            return a ^ -1;
          }
          function f(a, b, c, d) {
            var e = h,
              f = d + c;
            a ^= -1;
            for (var g = d; g < f; g++)
              a = (a >>> 8) ^ e[255 & (a ^ b.charCodeAt(g))];
            return a ^ -1;
          }
          var g = a("./utils"),
            h = d();
          b.exports = function (a, b) {
            if ("undefined" == typeof a || !a.length) return 0;
            var c = "string" !== g.getTypeOf(a);
            return c ? e(0 | b, a, a.length, 0) : f(0 | b, a, a.length, 0);
          };
        },
        { "./utils": 32 },
      ],
      5: [
        function (a, b, c) {
          "use strict";
          (c.base64 = !1),
            (c.binary = !1),
            (c.dir = !1),
            (c.createFolders = !0),
            (c.date = null),
            (c.compression = null),
            (c.compressionOptions = null),
            (c.comment = null),
            (c.unixPermissions = null),
            (c.dosPermissions = null);
        },
        {},
      ],
      6: [
        function (a, b, c) {
          "use strict";
          var d = null;
          (d = "undefined" != typeof Promise ? Promise : a("lie")),
            (b.exports = { Promise: d });
        },
        { lie: 58 },
      ],
      7: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            h.call(this, "FlateWorker/" + a),
              (this._pako = new f[a]({ raw: !0, level: b.level || -1 })),
              (this.meta = {});
            var c = this;
            this._pako.onData = function (a) {
              c.push({ data: a, meta: c.meta });
            };
          }
          var e =
              "undefined" != typeof Uint8Array &&
              "undefined" != typeof Uint16Array &&
              "undefined" != typeof Uint32Array,
            f = a("pako"),
            g = a("./utils"),
            h = a("./stream/GenericWorker"),
            i = e ? "uint8array" : "array";
          (c.magic = "\b\0"),
            g.inherits(d, h),
            (d.prototype.processChunk = function (a) {
              (this.meta = a.meta),
                this._pako.push(g.transformTo(i, a.data), !1);
            }),
            (d.prototype.flush = function () {
              h.prototype.flush.call(this), this._pako.push([], !0);
            }),
            (d.prototype.cleanUp = function () {
              h.prototype.cleanUp.call(this), (this._pako = null);
            }),
            (c.compressWorker = function (a) {
              return new d("Deflate", a);
            }),
            (c.uncompressWorker = function () {
              return new d("Inflate", {});
            });
        },
        { "./stream/GenericWorker": 28, "./utils": 32, pako: 59 },
      ],
      8: [
        function (a, b, c) {
          "use strict";
          function d(a, b, c, d) {
            f.call(this, "ZipFileWorker"),
              (this.bytesWritten = 0),
              (this.zipComment = b),
              (this.zipPlatform = c),
              (this.encodeFileName = d),
              (this.streamFiles = a),
              (this.accumulate = !1),
              (this.contentBuffer = []),
              (this.dirRecords = []),
              (this.currentSourceOffset = 0),
              (this.entriesCount = 0),
              (this.currentFile = null),
              (this._sources = []);
          }
          var e = a("../utils"),
            f = a("../stream/GenericWorker"),
            g = a("../utf8"),
            h = a("../crc32"),
            i = a("../signature"),
            j = function (a, b) {
              var c,
                d = "";
              for (c = 0; c < b; c++)
                (d += String.fromCharCode(255 & a)), (a >>>= 8);
              return d;
            },
            k = function (a, b) {
              var c = a;
              return a || (c = b ? 16893 : 33204), (65535 & c) << 16;
            },
            l = function (a, b) {
              return 63 & (a || 0);
            },
            m = function (a, b, c, d, f, m) {
              var n,
                o,
                p = a.file,
                q = a.compression,
                r = m !== g.utf8encode,
                s = e.transformTo("string", m(p.name)),
                t = e.transformTo("string", g.utf8encode(p.name)),
                u = p.comment,
                v = e.transformTo("string", m(u)),
                w = e.transformTo("string", g.utf8encode(u)),
                x = t.length !== p.name.length,
                y = w.length !== u.length,
                z = "",
                A = "",
                B = "",
                C = p.dir,
                D = p.date,
                E = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
              (b && !c) ||
                ((E.crc32 = a.crc32),
                (E.compressedSize = a.compressedSize),
                (E.uncompressedSize = a.uncompressedSize));
              var F = 0;
              b && (F |= 8), r || (!x && !y) || (F |= 2048);
              var G = 0,
                H = 0;
              C && (G |= 16),
                "UNIX" === f
                  ? ((H = 798), (G |= k(p.unixPermissions, C)))
                  : ((H = 20), (G |= l(p.dosPermissions, C))),
                (n = D.getUTCHours()),
                (n <<= 6),
                (n |= D.getUTCMinutes()),
                (n <<= 5),
                (n |= D.getUTCSeconds() / 2),
                (o = D.getUTCFullYear() - 1980),
                (o <<= 4),
                (o |= D.getUTCMonth() + 1),
                (o <<= 5),
                (o |= D.getUTCDate()),
                x &&
                  ((A = j(1, 1) + j(h(s), 4) + t),
                  (z += "up" + j(A.length, 2) + A)),
                y &&
                  ((B = j(1, 1) + j(h(v), 4) + w),
                  (z += "uc" + j(B.length, 2) + B));
              var I = "";
              (I += "\n\0"),
                (I += j(F, 2)),
                (I += q.magic),
                (I += j(n, 2)),
                (I += j(o, 2)),
                (I += j(E.crc32, 4)),
                (I += j(E.compressedSize, 4)),
                (I += j(E.uncompressedSize, 4)),
                (I += j(s.length, 2)),
                (I += j(z.length, 2));
              var J = i.LOCAL_FILE_HEADER + I + s + z,
                K =
                  i.CENTRAL_FILE_HEADER +
                  j(H, 2) +
                  I +
                  j(v.length, 2) +
                  "\0\0\0\0" +
                  j(G, 4) +
                  j(d, 4) +
                  s +
                  z +
                  v;
              return { fileRecord: J, dirRecord: K };
            },
            n = function (a, b, c, d, f) {
              var g = "",
                h = e.transformTo("string", f(d));
              return (g =
                i.CENTRAL_DIRECTORY_END +
                "\0\0\0\0" +
                j(a, 2) +
                j(a, 2) +
                j(b, 4) +
                j(c, 4) +
                j(h.length, 2) +
                h);
            },
            o = function (a) {
              var b = "";
              return (b =
                i.DATA_DESCRIPTOR +
                j(a.crc32, 4) +
                j(a.compressedSize, 4) +
                j(a.uncompressedSize, 4));
            };
          e.inherits(d, f),
            (d.prototype.push = function (a) {
              var b = a.meta.percent || 0,
                c = this.entriesCount,
                d = this._sources.length;
              this.accumulate
                ? this.contentBuffer.push(a)
                : ((this.bytesWritten += a.data.length),
                  f.prototype.push.call(this, {
                    data: a.data,
                    meta: {
                      currentFile: this.currentFile,
                      percent: c ? (b + 100 * (c - d - 1)) / c : 100,
                    },
                  }));
            }),
            (d.prototype.openedSource = function (a) {
              (this.currentSourceOffset = this.bytesWritten),
                (this.currentFile = a.file.name);
              var b = this.streamFiles && !a.file.dir;
              if (b) {
                var c = m(
                  a,
                  b,
                  !1,
                  this.currentSourceOffset,
                  this.zipPlatform,
                  this.encodeFileName
                );
                this.push({ data: c.fileRecord, meta: { percent: 0 } });
              } else this.accumulate = !0;
            }),
            (d.prototype.closedSource = function (a) {
              this.accumulate = !1;
              var b = this.streamFiles && !a.file.dir,
                c = m(
                  a,
                  b,
                  !0,
                  this.currentSourceOffset,
                  this.zipPlatform,
                  this.encodeFileName
                );
              if ((this.dirRecords.push(c.dirRecord), b))
                this.push({ data: o(a), meta: { percent: 100 } });
              else
                for (
                  this.push({ data: c.fileRecord, meta: { percent: 0 } });
                  this.contentBuffer.length;

                )
                  this.push(this.contentBuffer.shift());
              this.currentFile = null;
            }),
            (d.prototype.flush = function () {
              for (
                var a = this.bytesWritten, b = 0;
                b < this.dirRecords.length;
                b++
              )
                this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
              var c = this.bytesWritten - a,
                d = n(
                  this.dirRecords.length,
                  c,
                  a,
                  this.zipComment,
                  this.encodeFileName
                );
              this.push({ data: d, meta: { percent: 100 } });
            }),
            (d.prototype.prepareNextSource = function () {
              (this.previous = this._sources.shift()),
                this.openedSource(this.previous.streamInfo),
                this.isPaused ? this.previous.pause() : this.previous.resume();
            }),
            (d.prototype.registerPrevious = function (a) {
              this._sources.push(a);
              var b = this;
              return (
                a.on("data", function (a) {
                  b.processChunk(a);
                }),
                a.on("end", function () {
                  b.closedSource(b.previous.streamInfo),
                    b._sources.length ? b.prepareNextSource() : b.end();
                }),
                a.on("error", function (a) {
                  b.error(a);
                }),
                this
              );
            }),
            (d.prototype.resume = function () {
              return (
                !!f.prototype.resume.call(this) &&
                (!this.previous && this._sources.length
                  ? (this.prepareNextSource(), !0)
                  : this.previous || this._sources.length || this.generatedError
                  ? void 0
                  : (this.end(), !0))
              );
            }),
            (d.prototype.error = function (a) {
              var b = this._sources;
              if (!f.prototype.error.call(this, a)) return !1;
              for (var c = 0; c < b.length; c++)
                try {
                  b[c].error(a);
                } catch (a) {}
              return !0;
            }),
            (d.prototype.lock = function () {
              f.prototype.lock.call(this);
              for (var a = this._sources, b = 0; b < a.length; b++) a[b].lock();
            }),
            (b.exports = d);
        },
        {
          "../crc32": 4,
          "../signature": 23,
          "../stream/GenericWorker": 28,
          "../utf8": 31,
          "../utils": 32,
        },
      ],
      9: [
        function (a, b, c) {
          "use strict";
          var d = a("../compressions"),
            e = a("./ZipFileWorker"),
            f = function (a, b) {
              var c = a || b,
                e = d[c];
              if (!e)
                throw new Error(c + " is not a valid compression method !");
              return e;
            };
          c.generateWorker = function (a, b, c) {
            var d = new e(b.streamFiles, c, b.platform, b.encodeFileName),
              g = 0;
            try {
              a.forEach(function (a, c) {
                g++;
                var e = f(c.options.compression, b.compression),
                  h =
                    c.options.compressionOptions || b.compressionOptions || {},
                  i = c.dir,
                  j = c.date;
                c._compressWorker(e, h)
                  .withStreamInfo("file", {
                    name: a,
                    dir: i,
                    date: j,
                    comment: c.comment || "",
                    unixPermissions: c.unixPermissions,
                    dosPermissions: c.dosPermissions,
                  })
                  .pipe(d);
              }),
                (d.entriesCount = g);
            } catch (h) {
              d.error(h);
            }
            return d;
          };
        },
        { "../compressions": 3, "./ZipFileWorker": 8 },
      ],
      10: [
        function (a, b, c) {
          "use strict";
          function d() {
            if (!(this instanceof d)) return new d();
            if (arguments.length)
              throw new Error(
                "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
              );
            (this.files = {}),
              (this.comment = null),
              (this.root = ""),
              (this.clone = function () {
                var a = new d();
                for (var b in this)
                  "function" != typeof this[b] && (a[b] = this[b]);
                return a;
              });
          }
          (d.prototype = a("./object")),
            (d.prototype.loadAsync = a("./load")),
            (d.support = a("./support")),
            (d.defaults = a("./defaults")),
            (d.version = "3.1.3"),
            (d.loadAsync = function (a, b) {
              return new d().loadAsync(a, b);
            }),
            (d.external = a("./external")),
            (b.exports = d);
        },
        {
          "./defaults": 5,
          "./external": 6,
          "./load": 11,
          "./object": 15,
          "./support": 30,
        },
      ],
      11: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            return new f.Promise(function (b, c) {
              var d = a.decompressed.getContentWorker().pipe(new i());
              d.on("error", function (a) {
                c(a);
              })
                .on("end", function () {
                  d.streamInfo.crc32 !== a.decompressed.crc32
                    ? c(new Error("Corrupted zip : CRC32 mismatch"))
                    : b();
                })
                .resume();
            });
          }
          var e = a("./utils"),
            f = a("./external"),
            g = a("./utf8"),
            e = a("./utils"),
            h = a("./zipEntries"),
            i = a("./stream/Crc32Probe"),
            j = a("./nodejsUtils");
          b.exports = function (a, b) {
            var c = this;
            return (
              (b = e.extend(b || {}, {
                base64: !1,
                checkCRC32: !1,
                optimizedBinaryString: !1,
                createFolders: !1,
                decodeFileName: g.utf8decode,
              })),
              j.isNode && j.isStream(a)
                ? f.Promise.reject(
                    new Error(
                      "JSZip can't accept a stream when loading a zip file."
                    )
                  )
                : e
                    .prepareContent(
                      "the loaded zip file",
                      a,
                      !0,
                      b.optimizedBinaryString,
                      b.base64
                    )
                    .then(function (a) {
                      var c = new h(b);
                      return c.load(a), c;
                    })
                    .then(function (a) {
                      var c = [f.Promise.resolve(a)],
                        e = a.files;
                      if (b.checkCRC32)
                        for (var g = 0; g < e.length; g++) c.push(d(e[g]));
                      return f.Promise.all(c);
                    })
                    .then(function (a) {
                      for (
                        var d = a.shift(), e = d.files, f = 0;
                        f < e.length;
                        f++
                      ) {
                        var g = e[f];
                        c.file(g.fileNameStr, g.decompressed, {
                          binary: !0,
                          optimizedBinaryString: !0,
                          date: g.date,
                          dir: g.dir,
                          comment: g.fileCommentStr.length
                            ? g.fileCommentStr
                            : null,
                          unixPermissions: g.unixPermissions,
                          dosPermissions: g.dosPermissions,
                          createFolders: b.createFolders,
                        });
                      }
                      return (
                        d.zipComment.length && (c.comment = d.zipComment), c
                      );
                    })
            );
          };
        },
        {
          "./external": 6,
          "./nodejsUtils": 14,
          "./stream/Crc32Probe": 25,
          "./utf8": 31,
          "./utils": 32,
          "./zipEntries": 33,
        },
      ],
      12: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            f.call(this, "Nodejs stream input adapter for " + a),
              (this._upstreamEnded = !1),
              this._bindStream(b);
          }
          var e = a("../utils"),
            f = a("../stream/GenericWorker");
          e.inherits(d, f),
            (d.prototype._bindStream = function (a) {
              var b = this;
              (this._stream = a),
                a.pause(),
                a
                  .on("data", function (a) {
                    b.push({ data: a, meta: { percent: 0 } });
                  })
                  .on("error", function (a) {
                    b.isPaused ? (this.generatedError = a) : b.error(a);
                  })
                  .on("end", function () {
                    b.isPaused ? (b._upstreamEnded = !0) : b.end();
                  });
            }),
            (d.prototype.pause = function () {
              return (
                !!f.prototype.pause.call(this) && (this._stream.pause(), !0)
              );
            }),
            (d.prototype.resume = function () {
              return (
                !!f.prototype.resume.call(this) &&
                (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
              );
            }),
            (b.exports = d);
        },
        { "../stream/GenericWorker": 28, "../utils": 32 },
      ],
      13: [
        function (a, b, c) {
          "use strict";
          function d(a, b, c) {
            e.call(this, b), (this._helper = a);
            var d = this;
            a.on("data", function (a, b) {
              d.push(a) || d._helper.pause(), c && c(b);
            })
              .on("error", function (a) {
                d.emit("error", a);
              })
              .on("end", function () {
                d.push(null);
              });
          }
          var e = a("readable-stream").Readable,
            f = a("util");
          f.inherits(d, e),
            (d.prototype._read = function () {
              this._helper.resume();
            }),
            (b.exports = d);
        },
        { "readable-stream": 16, util: void 0 },
      ],
      14: [
        function (a, b, c) {
          "use strict";
          b.exports = {
            isNode: "undefined" != typeof Buffer,
            newBuffer: function (a, b) {
              return new Buffer(a, b);
            },
            isBuffer: function (a) {
              return Buffer.isBuffer(a);
            },
            isStream: function (a) {
              return (
                a &&
                "function" == typeof a.on &&
                "function" == typeof a.pause &&
                "function" == typeof a.resume
              );
            },
          };
        },
        {},
      ],
      15: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            return "[object RegExp]" === Object.prototype.toString.call(a);
          }
          var e = a("./utf8"),
            f = a("./utils"),
            g = a("./stream/GenericWorker"),
            h = a("./stream/StreamHelper"),
            i = a("./defaults"),
            j = a("./compressedObject"),
            k = a("./zipObject"),
            l = a("./generate"),
            m = a("./nodejsUtils"),
            n = a("./nodejs/NodejsStreamInputAdapter"),
            o = function (a, b, c) {
              var d,
                e = f.getTypeOf(b),
                h = f.extend(c || {}, i);
              (h.date = h.date || new Date()),
                null !== h.compression &&
                  (h.compression = h.compression.toUpperCase()),
                "string" == typeof h.unixPermissions &&
                  (h.unixPermissions = parseInt(h.unixPermissions, 8)),
                h.unixPermissions && 16384 & h.unixPermissions && (h.dir = !0),
                h.dosPermissions && 16 & h.dosPermissions && (h.dir = !0),
                h.dir && (a = q(a)),
                h.createFolders && (d = p(a)) && r.call(this, d, !0);
              var l = "string" === e && h.binary === !1 && h.base64 === !1;
              (c && "undefined" != typeof c.binary) || (h.binary = !l);
              var o = b instanceof j && 0 === b.uncompressedSize;
              (o || h.dir || !b || 0 === b.length) &&
                ((h.base64 = !1),
                (h.binary = !0),
                (b = ""),
                (h.compression = "STORE"),
                (e = "string"));
              var s = null;
              s =
                b instanceof j || b instanceof g
                  ? b
                  : m.isNode && m.isStream(b)
                  ? new n(a, b)
                  : f.prepareContent(
                      a,
                      b,
                      h.binary,
                      h.optimizedBinaryString,
                      h.base64
                    );
              var t = new k(a, s, h);
              this.files[a] = t;
            },
            p = function (a) {
              "/" === a.slice(-1) && (a = a.substring(0, a.length - 1));
              var b = a.lastIndexOf("/");
              return b > 0 ? a.substring(0, b) : "";
            },
            q = function (a) {
              return "/" !== a.slice(-1) && (a += "/"), a;
            },
            r = function (a, b) {
              return (
                (b = "undefined" != typeof b ? b : i.createFolders),
                (a = q(a)),
                this.files[a] ||
                  o.call(this, a, null, { dir: !0, createFolders: b }),
                this.files[a]
              );
            },
            s = {
              load: function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide."
                );
              },
              forEach: function (a) {
                var b, c, d;
                for (b in this.files)
                  this.files.hasOwnProperty(b) &&
                    ((d = this.files[b]),
                    (c = b.slice(this.root.length, b.length)),
                    c && b.slice(0, this.root.length) === this.root && a(c, d));
              },
              filter: function (a) {
                var b = [];
                return (
                  this.forEach(function (c, d) {
                    a(c, d) && b.push(d);
                  }),
                  b
                );
              },
              file: function (a, b, c) {
                if (1 === arguments.length) {
                  if (d(a)) {
                    var e = a;
                    return this.filter(function (a, b) {
                      return !b.dir && e.test(a);
                    });
                  }
                  var f = this.files[this.root + a];
                  return f && !f.dir ? f : null;
                }
                return (a = this.root + a), o.call(this, a, b, c), this;
              },
              folder: function (a) {
                if (!a) return this;
                if (d(a))
                  return this.filter(function (b, c) {
                    return c.dir && a.test(b);
                  });
                var b = this.root + a,
                  c = r.call(this, b),
                  e = this.clone();
                return (e.root = c.name), e;
              },
              remove: function (a) {
                a = this.root + a;
                var b = this.files[a];
                if (
                  (b ||
                    ("/" !== a.slice(-1) && (a += "/"), (b = this.files[a])),
                  b && !b.dir)
                )
                  delete this.files[a];
                else
                  for (
                    var c = this.filter(function (b, c) {
                        return c.name.slice(0, a.length) === a;
                      }),
                      d = 0;
                    d < c.length;
                    d++
                  )
                    delete this.files[c[d].name];
                return this;
              },
              generate: function (a) {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide."
                );
              },
              generateInternalStream: function (a) {
                var b,
                  c = {};
                try {
                  if (
                    ((c = f.extend(a || {}, {
                      streamFiles: !1,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: e.utf8encode,
                    })),
                    (c.type = c.type.toLowerCase()),
                    (c.compression = c.compression.toUpperCase()),
                    "binarystring" === c.type && (c.type = "string"),
                    !c.type)
                  )
                    throw new Error("No output type specified.");
                  f.checkSupport(c.type),
                    ("darwin" !== c.platform &&
                      "freebsd" !== c.platform &&
                      "linux" !== c.platform &&
                      "sunos" !== c.platform) ||
                      (c.platform = "UNIX"),
                    "win32" === c.platform && (c.platform = "DOS");
                  var d = c.comment || this.comment || "";
                  b = l.generateWorker(this, c, d);
                } catch (i) {
                  (b = new g("error")), b.error(i);
                }
                return new h(b, c.type || "string", c.mimeType);
              },
              generateAsync: function (a, b) {
                return this.generateInternalStream(a).accumulate(b);
              },
              generateNodeStream: function (a, b) {
                return (
                  (a = a || {}),
                  a.type || (a.type = "nodebuffer"),
                  this.generateInternalStream(a).toNodejsStream(b)
                );
              },
            };
          b.exports = s;
        },
        {
          "./compressedObject": 2,
          "./defaults": 5,
          "./generate": 9,
          "./nodejs/NodejsStreamInputAdapter": 12,
          "./nodejsUtils": 14,
          "./stream/GenericWorker": 28,
          "./stream/StreamHelper": 29,
          "./utf8": 31,
          "./utils": 32,
          "./zipObject": 35,
        },
      ],
      16: [
        function (a, b, c) {
          b.exports = a("stream");
        },
        { stream: void 0 },
      ],
      17: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            e.call(this, a);
            for (var b = 0; b < this.data.length; b++) a[b] = 255 & a[b];
          }
          var e = a("./DataReader"),
            f = a("../utils");
          f.inherits(d, e),
            (d.prototype.byteAt = function (a) {
              return this.data[this.zero + a];
            }),
            (d.prototype.lastIndexOfSignature = function (a) {
              for (
                var b = a.charCodeAt(0),
                  c = a.charCodeAt(1),
                  d = a.charCodeAt(2),
                  e = a.charCodeAt(3),
                  f = this.length - 4;
                f >= 0;
                --f
              )
                if (
                  this.data[f] === b &&
                  this.data[f + 1] === c &&
                  this.data[f + 2] === d &&
                  this.data[f + 3] === e
                )
                  return f - this.zero;
              return -1;
            }),
            (d.prototype.readAndCheckSignature = function (a) {
              var b = a.charCodeAt(0),
                c = a.charCodeAt(1),
                d = a.charCodeAt(2),
                e = a.charCodeAt(3),
                f = this.readData(4);
              return b === f[0] && c === f[1] && d === f[2] && e === f[3];
            }),
            (d.prototype.readData = function (a) {
              if ((this.checkOffset(a), 0 === a)) return [];
              var b = this.data.slice(
                this.zero + this.index,
                this.zero + this.index + a
              );
              return (this.index += a), b;
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./DataReader": 18 },
      ],
      18: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            (this.data = a),
              (this.length = a.length),
              (this.index = 0),
              (this.zero = 0);
          }
          var e = a("../utils");
          (d.prototype = {
            checkOffset: function (a) {
              this.checkIndex(this.index + a);
            },
            checkIndex: function (a) {
              if (this.length < this.zero + a || a < 0)
                throw new Error(
                  "End of data reached (data length = " +
                    this.length +
                    ", asked index = " +
                    a +
                    "). Corrupted zip ?"
                );
            },
            setIndex: function (a) {
              this.checkIndex(a), (this.index = a);
            },
            skip: function (a) {
              this.setIndex(this.index + a);
            },
            byteAt: function (a) {},
            readInt: function (a) {
              var b,
                c = 0;
              for (
                this.checkOffset(a), b = this.index + a - 1;
                b >= this.index;
                b--
              )
                c = (c << 8) + this.byteAt(b);
              return (this.index += a), c;
            },
            readString: function (a) {
              return e.transformTo("string", this.readData(a));
            },
            readData: function (a) {},
            lastIndexOfSignature: function (a) {},
            readAndCheckSignature: function (a) {},
            readDate: function () {
              var a = this.readInt(4);
              return new Date(
                Date.UTC(
                  ((a >> 25) & 127) + 1980,
                  ((a >> 21) & 15) - 1,
                  (a >> 16) & 31,
                  (a >> 11) & 31,
                  (a >> 5) & 63,
                  (31 & a) << 1
                )
              );
            },
          }),
            (b.exports = d);
        },
        { "../utils": 32 },
      ],
      19: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            e.call(this, a);
          }
          var e = a("./Uint8ArrayReader"),
            f = a("../utils");
          f.inherits(d, e),
            (d.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(
                this.zero + this.index,
                this.zero + this.index + a
              );
              return (this.index += a), b;
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./Uint8ArrayReader": 21 },
      ],
      20: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            e.call(this, a);
          }
          var e = a("./DataReader"),
            f = a("../utils");
          f.inherits(d, e),
            (d.prototype.byteAt = function (a) {
              return this.data.charCodeAt(this.zero + a);
            }),
            (d.prototype.lastIndexOfSignature = function (a) {
              return this.data.lastIndexOf(a) - this.zero;
            }),
            (d.prototype.readAndCheckSignature = function (a) {
              var b = this.readData(4);
              return a === b;
            }),
            (d.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(
                this.zero + this.index,
                this.zero + this.index + a
              );
              return (this.index += a), b;
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./DataReader": 18 },
      ],
      21: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            e.call(this, a);
          }
          var e = a("./ArrayReader"),
            f = a("../utils");
          f.inherits(d, e),
            (d.prototype.readData = function (a) {
              if ((this.checkOffset(a), 0 === a)) return new Uint8Array(0);
              var b = this.data.subarray(
                this.zero + this.index,
                this.zero + this.index + a
              );
              return (this.index += a), b;
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./ArrayReader": 17 },
      ],
      22: [
        function (a, b, c) {
          "use strict";
          var d = a("../utils"),
            e = a("../support"),
            f = a("./ArrayReader"),
            g = a("./StringReader"),
            h = a("./NodeBufferReader"),
            i = a("./Uint8ArrayReader");
          b.exports = function (a) {
            var b = d.getTypeOf(a);
            return (
              d.checkSupport(b),
              "string" !== b || e.uint8array
                ? "nodebuffer" === b
                  ? new h(a)
                  : e.uint8array
                  ? new i(d.transformTo("uint8array", a))
                  : new f(d.transformTo("array", a))
                : new g(a)
            );
          };
        },
        {
          "../support": 30,
          "../utils": 32,
          "./ArrayReader": 17,
          "./NodeBufferReader": 19,
          "./StringReader": 20,
          "./Uint8ArrayReader": 21,
        },
      ],
      23: [
        function (a, b, c) {
          "use strict";
          (c.LOCAL_FILE_HEADER = "PK"),
            (c.CENTRAL_FILE_HEADER = "PK"),
            (c.CENTRAL_DIRECTORY_END = "PK"),
            (c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
            (c.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
            (c.DATA_DESCRIPTOR = "PK\b");
        },
        {},
      ],
      24: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            e.call(this, "ConvertWorker to " + a), (this.destType = a);
          }
          var e = a("./GenericWorker"),
            f = a("../utils");
          f.inherits(d, e),
            (d.prototype.processChunk = function (a) {
              this.push({
                data: f.transformTo(this.destType, a.data),
                meta: a.meta,
              });
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./GenericWorker": 28 },
      ],
      25: [
        function (a, b, c) {
          "use strict";
          function d() {
            e.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          var e = a("./GenericWorker"),
            f = a("../crc32"),
            g = a("../utils");
          g.inherits(d, e),
            (d.prototype.processChunk = function (a) {
              (this.streamInfo.crc32 = f(a.data, this.streamInfo.crc32 || 0)),
                this.push(a);
            }),
            (b.exports = d);
        },
        { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
      ],
      26: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            f.call(this, "DataLengthProbe for " + a),
              (this.propName = a),
              this.withStreamInfo(a, 0);
          }
          var e = a("../utils"),
            f = a("./GenericWorker");
          e.inherits(d, f),
            (d.prototype.processChunk = function (a) {
              if (a) {
                var b = this.streamInfo[this.propName] || 0;
                this.streamInfo[this.propName] = b + a.data.length;
              }
              f.prototype.processChunk.call(this, a);
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./GenericWorker": 28 },
      ],
      27: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            f.call(this, "DataWorker");
            var b = this;
            (this.dataIsReady = !1),
              (this.index = 0),
              (this.max = 0),
              (this.data = null),
              (this.type = ""),
              (this._tickScheduled = !1),
              a.then(
                function (a) {
                  (b.dataIsReady = !0),
                    (b.data = a),
                    (b.max = (a && a.length) || 0),
                    (b.type = e.getTypeOf(a)),
                    b.isPaused || b._tickAndRepeat();
                },
                function (a) {
                  b.error(a);
                }
              );
          }
          var e = a("../utils"),
            f = a("./GenericWorker"),
            g = 16384;
          e.inherits(d, f),
            (d.prototype.cleanUp = function () {
              f.prototype.cleanUp.call(this), (this.data = null);
            }),
            (d.prototype.resume = function () {
              return (
                !!f.prototype.resume.call(this) &&
                (!this._tickScheduled &&
                  this.dataIsReady &&
                  ((this._tickScheduled = !0),
                  e.delay(this._tickAndRepeat, [], this)),
                !0)
              );
            }),
            (d.prototype._tickAndRepeat = function () {
              (this._tickScheduled = !1),
                this.isPaused ||
                  this.isFinished ||
                  (this._tick(),
                  this.isFinished ||
                    (e.delay(this._tickAndRepeat, [], this),
                    (this._tickScheduled = !0)));
            }),
            (d.prototype._tick = function () {
              if (this.isPaused || this.isFinished) return !1;
              var a = g,
                b = null,
                c = Math.min(this.max, this.index + a);
              if (this.index >= this.max) return this.end();
              switch (this.type) {
                case "string":
                  b = this.data.substring(this.index, c);
                  break;
                case "uint8array":
                  b = this.data.subarray(this.index, c);
                  break;
                case "array":
                case "nodebuffer":
                  b = this.data.slice(this.index, c);
              }
              return (
                (this.index = c),
                this.push({
                  data: b,
                  meta: {
                    percent: this.max ? (this.index / this.max) * 100 : 0,
                  },
                })
              );
            }),
            (b.exports = d);
        },
        { "../utils": 32, "./GenericWorker": 28 },
      ],
      28: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            (this.name = a || "default"),
              (this.streamInfo = {}),
              (this.generatedError = null),
              (this.extraStreamInfo = {}),
              (this.isPaused = !0),
              (this.isFinished = !1),
              (this.isLocked = !1),
              (this._listeners = { data: [], end: [], error: [] }),
              (this.previous = null);
          }
          (d.prototype = {
            push: function (a) {
              this.emit("data", a);
            },
            end: function () {
              if (this.isFinished) return !1;
              this.flush();
              try {
                this.emit("end"), this.cleanUp(), (this.isFinished = !0);
              } catch (a) {
                this.emit("error", a);
              }
              return !0;
            },
            error: function (a) {
              return (
                !this.isFinished &&
                (this.isPaused
                  ? (this.generatedError = a)
                  : ((this.isFinished = !0),
                    this.emit("error", a),
                    this.previous && this.previous.error(a),
                    this.cleanUp()),
                !0)
              );
            },
            on: function (a, b) {
              return this._listeners[a].push(b), this;
            },
            cleanUp: function () {
              (this.streamInfo =
                this.generatedError =
                this.extraStreamInfo =
                  null),
                (this._listeners = []);
            },
            emit: function (a, b) {
              if (this._listeners[a])
                for (var c = 0; c < this._listeners[a].length; c++)
                  this._listeners[a][c].call(this, b);
            },
            pipe: function (a) {
              return a.registerPrevious(this);
            },
            registerPrevious: function (a) {
              if (this.isLocked)
                throw new Error(
                  "The stream '" + this + "' has already been used."
                );
              (this.streamInfo = a.streamInfo),
                this.mergeStreamInfo(),
                (this.previous = a);
              var b = this;
              return (
                a.on("data", function (a) {
                  b.processChunk(a);
                }),
                a.on("end", function () {
                  b.end();
                }),
                a.on("error", function (a) {
                  b.error(a);
                }),
                this
              );
            },
            pause: function () {
              return (
                !this.isPaused &&
                !this.isFinished &&
                ((this.isPaused = !0),
                this.previous && this.previous.pause(),
                !0)
              );
            },
            resume: function () {
              if (!this.isPaused || this.isFinished) return !1;
              this.isPaused = !1;
              var a = !1;
              return (
                this.generatedError &&
                  (this.error(this.generatedError), (a = !0)),
                this.previous && this.previous.resume(),
                !a
              );
            },
            flush: function () {},
            processChunk: function (a) {
              this.push(a);
            },
            withStreamInfo: function (a, b) {
              return (
                (this.extraStreamInfo[a] = b), this.mergeStreamInfo(), this
              );
            },
            mergeStreamInfo: function () {
              for (var a in this.extraStreamInfo)
                this.extraStreamInfo.hasOwnProperty(a) &&
                  (this.streamInfo[a] = this.extraStreamInfo[a]);
            },
            lock: function () {
              if (this.isLocked)
                throw new Error(
                  "The stream '" + this + "' has already been used."
                );
              (this.isLocked = !0), this.previous && this.previous.lock();
            },
            toString: function () {
              var a = "Worker " + this.name;
              return this.previous ? this.previous + " -> " + a : a;
            },
          }),
            (b.exports = d);
        },
        {},
      ],
      29: [
        function (a, b, c) {
          "use strict";
          function d(a, b, c, d) {
            var f = null;
            switch (a) {
              case "blob":
                return h.newBlob(c, d);
              case "base64":
                return (f = e(b, c)), k.encode(f);
              default:
                return (f = e(b, c)), h.transformTo(a, f);
            }
          }
          function e(a, b) {
            var c,
              d = 0,
              e = null,
              f = 0;
            for (c = 0; c < b.length; c++) f += b[c].length;
            switch (a) {
              case "string":
                return b.join("");
              case "array":
                return Array.prototype.concat.apply([], b);
              case "uint8array":
                for (e = new Uint8Array(f), c = 0; c < b.length; c++)
                  e.set(b[c], d), (d += b[c].length);
                return e;
              case "nodebuffer":
                return Buffer.concat(b);
              default:
                throw new Error("concat : unsupported type '" + a + "'");
            }
          }
          function f(a, b) {
            return new m.Promise(function (c, e) {
              var f = [],
                g = a._internalType,
                h = a._outputType,
                i = a._mimeType;
              a.on("data", function (a, c) {
                f.push(a), b && b(c);
              })
                .on("error", function (a) {
                  (f = []), e(a);
                })
                .on("end", function () {
                  try {
                    var a = d(h, g, f, i);
                    c(a);
                  } catch (b) {
                    e(b);
                  }
                  f = [];
                })
                .resume();
            });
          }
          function g(a, b, c) {
            var d = b;
            switch (b) {
              case "blob":
                d = "arraybuffer";
                break;
              case "arraybuffer":
                d = "uint8array";
                break;
              case "base64":
                d = "string";
            }
            try {
              (this._internalType = d),
                (this._outputType = b),
                (this._mimeType = c),
                h.checkSupport(d),
                (this._worker = a.pipe(new i(d))),
                a.lock();
            } catch (e) {
              (this._worker = new j("error")), this._worker.error(e);
            }
          }
          var h = a("../utils"),
            i = a("./ConvertWorker"),
            j = a("./GenericWorker"),
            k = a("../base64"),
            l = a("../support"),
            m = a("../external"),
            n = null;
          if (l.nodestream)
            try {
              n = a("../nodejs/NodejsStreamOutputAdapter");
            } catch (o) {}
          (g.prototype = {
            accumulate: function (a) {
              return f(this, a);
            },
            on: function (a, b) {
              var c = this;
              return (
                "data" === a
                  ? this._worker.on(a, function (a) {
                      b.call(c, a.data, a.meta);
                    })
                  : this._worker.on(a, function () {
                      h.delay(b, arguments, c);
                    }),
                this
              );
            },
            resume: function () {
              return h.delay(this._worker.resume, [], this._worker), this;
            },
            pause: function () {
              return this._worker.pause(), this;
            },
            toNodejsStream: function (a) {
              if (
                (h.checkSupport("nodestream"),
                "nodebuffer" !== this._outputType)
              )
                throw new Error(
                  this._outputType + " is not supported by this method"
                );
              return new n(
                this,
                { objectMode: "nodebuffer" !== this._outputType },
                a
              );
            },
          }),
            (b.exports = g);
        },
        {
          "../base64": 1,
          "../external": 6,
          "../nodejs/NodejsStreamOutputAdapter": 13,
          "../support": 30,
          "../utils": 32,
          "./ConvertWorker": 24,
          "./GenericWorker": 28,
        },
      ],
      30: [
        function (a, b, c) {
          "use strict";
          if (
            ((c.base64 = !0),
            (c.array = !0),
            (c.string = !0),
            (c.arraybuffer =
              "undefined" != typeof ArrayBuffer &&
              "undefined" != typeof Uint8Array),
            (c.nodebuffer = "undefined" != typeof Buffer),
            (c.uint8array = "undefined" != typeof Uint8Array),
            "undefined" == typeof ArrayBuffer)
          )
            c.blob = !1;
          else {
            var d = new ArrayBuffer(0);
            try {
              c.blob = 0 === new Blob([d], { type: "application/zip" }).size;
            } catch (e) {
              try {
                var f =
                    window.BlobBuilder ||
                    window.WebKitBlobBuilder ||
                    window.MozBlobBuilder ||
                    window.MSBlobBuilder,
                  g = new f();
                g.append(d), (c.blob = 0 === g.getBlob("application/zip").size);
              } catch (e) {
                c.blob = !1;
              }
            }
          }
          try {
            c.nodestream = !!a("readable-stream").Readable;
          } catch (e) {
            c.nodestream = !1;
          }
        },
        { "readable-stream": 16 },
      ],
      31: [
        function (a, b, c) {
          "use strict";
          function d() {
            i.call(this, "utf-8 decode"), (this.leftOver = null);
          }
          function e() {
            i.call(this, "utf-8 encode");
          }
          for (
            var f = a("./utils"),
              g = a("./support"),
              h = a("./nodejsUtils"),
              i = a("./stream/GenericWorker"),
              j = new Array(256),
              k = 0;
            k < 256;
            k++
          )
            j[k] =
              k >= 252
                ? 6
                : k >= 248
                ? 5
                : k >= 240
                ? 4
                : k >= 224
                ? 3
                : k >= 192
                ? 2
                : 1;
          j[254] = j[254] = 1;
          var l = function (a) {
              var b,
                c,
                d,
                e,
                f,
                h = a.length,
                i = 0;
              for (e = 0; e < h; e++)
                (c = a.charCodeAt(e)),
                  55296 === (64512 & c) &&
                    e + 1 < h &&
                    ((d = a.charCodeAt(e + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), e++)),
                  (i += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4);
              for (
                b = g.uint8array ? new Uint8Array(i) : new Array(i),
                  f = 0,
                  e = 0;
                f < i;
                e++
              )
                (c = a.charCodeAt(e)),
                  55296 === (64512 & c) &&
                    e + 1 < h &&
                    ((d = a.charCodeAt(e + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), e++)),
                  c < 128
                    ? (b[f++] = c)
                    : c < 2048
                    ? ((b[f++] = 192 | (c >>> 6)), (b[f++] = 128 | (63 & c)))
                    : c < 65536
                    ? ((b[f++] = 224 | (c >>> 12)),
                      (b[f++] = 128 | ((c >>> 6) & 63)),
                      (b[f++] = 128 | (63 & c)))
                    : ((b[f++] = 240 | (c >>> 18)),
                      (b[f++] = 128 | ((c >>> 12) & 63)),
                      (b[f++] = 128 | ((c >>> 6) & 63)),
                      (b[f++] = 128 | (63 & c)));
              return b;
            },
            m = function (a, b) {
              var c;
              for (
                b = b || a.length, b > a.length && (b = a.length), c = b - 1;
                c >= 0 && 128 === (192 & a[c]);

              )
                c--;
              return c < 0 ? b : 0 === c ? b : c + j[a[c]] > b ? c : b;
            },
            n = function (a) {
              var b,
                c,
                d,
                e,
                g = a.length,
                h = new Array(2 * g);
              for (c = 0, b = 0; b < g; )
                if (((d = a[b++]), d < 128)) h[c++] = d;
                else if (((e = j[d]), e > 4)) (h[c++] = 65533), (b += e - 1);
                else {
                  for (d &= 2 === e ? 31 : 3 === e ? 15 : 7; e > 1 && b < g; )
                    (d = (d << 6) | (63 & a[b++])), e--;
                  e > 1
                    ? (h[c++] = 65533)
                    : d < 65536
                    ? (h[c++] = d)
                    : ((d -= 65536),
                      (h[c++] = 55296 | ((d >> 10) & 1023)),
                      (h[c++] = 56320 | (1023 & d)));
                }
              return (
                h.length !== c &&
                  (h.subarray ? (h = h.subarray(0, c)) : (h.length = c)),
                f.applyFromCharCode(h)
              );
            };
          (c.utf8encode = function (a) {
            return g.nodebuffer ? h.newBuffer(a, "utf-8") : l(a);
          }),
            (c.utf8decode = function (a) {
              return g.nodebuffer
                ? f.transformTo("nodebuffer", a).toString("utf-8")
                : ((a = f.transformTo(
                    g.uint8array ? "uint8array" : "array",
                    a
                  )),
                  n(a));
            }),
            f.inherits(d, i),
            (d.prototype.processChunk = function (a) {
              var b = f.transformTo(
                g.uint8array ? "uint8array" : "array",
                a.data
              );
              if (this.leftOver && this.leftOver.length) {
                if (g.uint8array) {
                  var d = b;
                  (b = new Uint8Array(d.length + this.leftOver.length)),
                    b.set(this.leftOver, 0),
                    b.set(d, this.leftOver.length);
                } else b = this.leftOver.concat(b);
                this.leftOver = null;
              }
              var e = m(b),
                h = b;
              e !== b.length &&
                (g.uint8array
                  ? ((h = b.subarray(0, e)),
                    (this.leftOver = b.subarray(e, b.length)))
                  : ((h = b.slice(0, e)),
                    (this.leftOver = b.slice(e, b.length)))),
                this.push({ data: c.utf8decode(h), meta: a.meta });
            }),
            (d.prototype.flush = function () {
              this.leftOver &&
                this.leftOver.length &&
                (this.push({ data: c.utf8decode(this.leftOver), meta: {} }),
                (this.leftOver = null));
            }),
            (c.Utf8DecodeWorker = d),
            f.inherits(e, i),
            (e.prototype.processChunk = function (a) {
              this.push({ data: c.utf8encode(a.data), meta: a.meta });
            }),
            (c.Utf8EncodeWorker = e);
        },
        {
          "./nodejsUtils": 14,
          "./stream/GenericWorker": 28,
          "./support": 30,
          "./utils": 32,
        },
      ],
      32: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            var b = null;
            return (
              (b = i.uint8array
                ? new Uint8Array(a.length)
                : new Array(a.length)),
              f(a, b)
            );
          }
          function e(a) {
            return a;
          }
          function f(a, b) {
            for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
            return b;
          }
          function g(a) {
            var b = 65536,
              d = c.getTypeOf(a),
              e = !0;
            if (
              ("uint8array" === d
                ? (e = n.applyCanBeUsed.uint8array)
                : "nodebuffer" === d && (e = n.applyCanBeUsed.nodebuffer),
              e)
            )
              for (; b > 1; )
                try {
                  return n.stringifyByChunk(a, d, b);
                } catch (f) {
                  b = Math.floor(b / 2);
                }
            return n.stringifyByChar(a);
          }
          function h(a, b) {
            for (var c = 0; c < a.length; c++) b[c] = a[c];
            return b;
          }
          var i = a("./support"),
            j = a("./base64"),
            k = a("./nodejsUtils"),
            l = a("core-js/library/fn/set-immediate"),
            m = a("./external");
          c.newBlob = function (a, b) {
            c.checkSupport("blob");
            try {
              return new Blob(a, { type: b });
            } catch (d) {
              try {
                for (
                  var e =
                      window.BlobBuilder ||
                      window.WebKitBlobBuilder ||
                      window.MozBlobBuilder ||
                      window.MSBlobBuilder,
                    f = new e(),
                    g = 0;
                  g < a.length;
                  g++
                )
                  f.append(a[g]);
                return f.getBlob(b);
              } catch (d) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var n = {
            stringifyByChunk: function (a, b, c) {
              var d = [],
                e = 0,
                f = a.length;
              if (f <= c) return String.fromCharCode.apply(null, a);
              for (; e < f; )
                "array" === b || "nodebuffer" === b
                  ? d.push(
                      String.fromCharCode.apply(
                        null,
                        a.slice(e, Math.min(e + c, f))
                      )
                    )
                  : d.push(
                      String.fromCharCode.apply(
                        null,
                        a.subarray(e, Math.min(e + c, f))
                      )
                    ),
                  (e += c);
              return d.join("");
            },
            stringifyByChar: function (a) {
              for (var b = "", c = 0; c < a.length; c++)
                b += String.fromCharCode(a[c]);
              return b;
            },
            applyCanBeUsed: {
              uint8array: (function () {
                try {
                  return (
                    i.uint8array &&
                    1 ===
                      String.fromCharCode.apply(null, new Uint8Array(1)).length
                  );
                } catch (a) {
                  return !1;
                }
              })(),
              nodebuffer: (function () {
                try {
                  return (
                    i.nodebuffer &&
                    1 === String.fromCharCode.apply(null, k.newBuffer(1)).length
                  );
                } catch (a) {
                  return !1;
                }
              })(),
            },
          };
          c.applyFromCharCode = g;
          var o = {};
          (o.string = {
            string: e,
            array: function (a) {
              return f(a, new Array(a.length));
            },
            arraybuffer: function (a) {
              return o.string.uint8array(a).buffer;
            },
            uint8array: function (a) {
              return f(a, new Uint8Array(a.length));
            },
            nodebuffer: function (a) {
              return f(a, k.newBuffer(a.length));
            },
          }),
            (o.array = {
              string: g,
              array: e,
              arraybuffer: function (a) {
                return new Uint8Array(a).buffer;
              },
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return k.newBuffer(a);
              },
            }),
            (o.arraybuffer = {
              string: function (a) {
                return g(new Uint8Array(a));
              },
              array: function (a) {
                return h(new Uint8Array(a), new Array(a.byteLength));
              },
              arraybuffer: e,
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return k.newBuffer(new Uint8Array(a));
              },
            }),
            (o.uint8array = {
              string: g,
              array: function (a) {
                return h(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                var b = new Uint8Array(a.length);
                return a.length && b.set(a, 0), b.buffer;
              },
              uint8array: e,
              nodebuffer: function (a) {
                return k.newBuffer(a);
              },
            }),
            (o.nodebuffer = {
              string: g,
              array: function (a) {
                return h(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return o.nodebuffer.uint8array(a).buffer;
              },
              uint8array: function (a) {
                return h(a, new Uint8Array(a.length));
              },
              nodebuffer: e,
            }),
            (c.transformTo = function (a, b) {
              if ((b || (b = ""), !a)) return b;
              c.checkSupport(a);
              var d = c.getTypeOf(b),
                e = o[d][a](b);
              return e;
            }),
            (c.getTypeOf = function (a) {
              return "string" == typeof a
                ? "string"
                : "[object Array]" === Object.prototype.toString.call(a)
                ? "array"
                : i.nodebuffer && k.isBuffer(a)
                ? "nodebuffer"
                : i.uint8array && a instanceof Uint8Array
                ? "uint8array"
                : i.arraybuffer && a instanceof ArrayBuffer
                ? "arraybuffer"
                : void 0;
            }),
            (c.checkSupport = function (a) {
              var b = i[a.toLowerCase()];
              if (!b) throw new Error(a + " is not supported by this platform");
            }),
            (c.MAX_VALUE_16BITS = 65535),
            (c.MAX_VALUE_32BITS = -1),
            (c.pretty = function (a) {
              var b,
                c,
                d = "";
              for (c = 0; c < (a || "").length; c++)
                (b = a.charCodeAt(c)),
                  (d +=
                    "\\x" + (b < 16 ? "0" : "") + b.toString(16).toUpperCase());
              return d;
            }),
            (c.delay = function (a, b, c) {
              l(function () {
                a.apply(c || null, b || []);
              });
            }),
            (c.inherits = function (a, b) {
              var c = function () {};
              (c.prototype = b.prototype), (a.prototype = new c());
            }),
            (c.extend = function () {
              var a,
                b,
                c = {};
              for (a = 0; a < arguments.length; a++)
                for (b in arguments[a])
                  arguments[a].hasOwnProperty(b) &&
                    "undefined" == typeof c[b] &&
                    (c[b] = arguments[a][b]);
              return c;
            }),
            (c.prepareContent = function (a, b, e, f, g) {
              var h = m.Promise.resolve(b).then(function (a) {
                var b =
                  i.blob &&
                  (a instanceof Blob ||
                    ["[object File]", "[object Blob]"].indexOf(
                      Object.prototype.toString.call(a)
                    ) !== -1);
                return b && "undefined" != typeof FileReader
                  ? new m.Promise(function (b, c) {
                      var d = new FileReader();
                      (d.onload = function (a) {
                        b(a.target.result);
                      }),
                        (d.onerror = function (a) {
                          c(a.target.error);
                        }),
                        d.readAsArrayBuffer(a);
                    })
                  : a;
              });
              return h.then(function (b) {
                var h = c.getTypeOf(b);
                return h
                  ? ("arraybuffer" === h
                      ? (b = c.transformTo("uint8array", b))
                      : "string" === h &&
                        (g ? (b = j.decode(b)) : e && f !== !0 && (b = d(b))),
                    b)
                  : m.Promise.reject(
                      new Error(
                        "The data of '" + a + "' is in an unsupported format !"
                      )
                    );
              });
            });
        },
        {
          "./base64": 1,
          "./external": 6,
          "./nodejsUtils": 14,
          "./support": 30,
          "core-js/library/fn/set-immediate": 36,
        },
      ],
      33: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            (this.files = []), (this.loadOptions = a);
          }
          var e = a("./reader/readerFor"),
            f = a("./utils"),
            g = a("./signature"),
            h = a("./zipEntry"),
            i = (a("./utf8"), a("./support"));
          (d.prototype = {
            checkSignature: function (a) {
              if (!this.reader.readAndCheckSignature(a)) {
                this.reader.index -= 4;
                var b = this.reader.readString(4);
                throw new Error(
                  "Corrupted zip or bug : unexpected signature (" +
                    f.pretty(b) +
                    ", expected " +
                    f.pretty(a) +
                    ")"
                );
              }
            },
            isSignature: function (a, b) {
              var c = this.reader.index;
              this.reader.setIndex(a);
              var d = this.reader.readString(4),
                e = d === b;
              return this.reader.setIndex(c), e;
            },
            readBlockEndOfCentral: function () {
              (this.diskNumber = this.reader.readInt(2)),
                (this.diskWithCentralDirStart = this.reader.readInt(2)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                (this.centralDirRecords = this.reader.readInt(2)),
                (this.centralDirSize = this.reader.readInt(4)),
                (this.centralDirOffset = this.reader.readInt(4)),
                (this.zipCommentLength = this.reader.readInt(2));
              var a = this.reader.readData(this.zipCommentLength),
                b = i.uint8array ? "uint8array" : "array",
                c = f.transformTo(b, a);
              this.zipComment = this.loadOptions.decodeFileName(c);
            },
            readBlockZip64EndOfCentral: function () {
              (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                this.reader.skip(4),
                (this.diskNumber = this.reader.readInt(4)),
                (this.diskWithCentralDirStart = this.reader.readInt(4)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                (this.centralDirRecords = this.reader.readInt(8)),
                (this.centralDirSize = this.reader.readInt(8)),
                (this.centralDirOffset = this.reader.readInt(8)),
                (this.zip64ExtensibleData = {});
              for (
                var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0;
                e < d;

              )
                (a = this.reader.readInt(2)),
                  (b = this.reader.readInt(4)),
                  (c = this.reader.readData(b)),
                  (this.zip64ExtensibleData[a] = {
                    id: a,
                    length: b,
                    value: c,
                  });
            },
            readBlockZip64EndOfCentralLocator: function () {
              if (
                ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                (this.relativeOffsetEndOfZip64CentralDir =
                  this.reader.readInt(8)),
                (this.disksCount = this.reader.readInt(4)),
                this.disksCount > 1)
              )
                throw new Error("Multi-volumes zip are not supported");
            },
            readLocalFiles: function () {
              var a, b;
              for (a = 0; a < this.files.length; a++)
                (b = this.files[a]),
                  this.reader.setIndex(b.localHeaderOffset),
                  this.checkSignature(g.LOCAL_FILE_HEADER),
                  b.readLocalPart(this.reader),
                  b.handleUTF8(),
                  b.processAttributes();
            },
            readCentralDir: function () {
              var a;
              for (
                this.reader.setIndex(this.centralDirOffset);
                this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);

              )
                (a = new h({ zip64: this.zip64 }, this.loadOptions)),
                  a.readCentralPart(this.reader),
                  this.files.push(a);
              if (
                this.centralDirRecords !== this.files.length &&
                0 !== this.centralDirRecords &&
                0 === this.files.length
              )
                throw new Error(
                  "Corrupted zip or bug: expected " +
                    this.centralDirRecords +
                    " records in central dir, got " +
                    this.files.length
                );
            },
            readEndOfCentral: function () {
              var a = this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END);
              if (a < 0) {
                var b = !this.isSignature(0, g.LOCAL_FILE_HEADER);
                throw b
                  ? new Error(
                      "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html"
                    )
                  : new Error(
                      "Corrupted zip : can't find end of central directory"
                    );
              }
              this.reader.setIndex(a);
              var c = a;
              if (
                (this.checkSignature(g.CENTRAL_DIRECTORY_END),
                this.readBlockEndOfCentral(),
                this.diskNumber === f.MAX_VALUE_16BITS ||
                  this.diskWithCentralDirStart === f.MAX_VALUE_16BITS ||
                  this.centralDirRecordsOnThisDisk === f.MAX_VALUE_16BITS ||
                  this.centralDirRecords === f.MAX_VALUE_16BITS ||
                  this.centralDirSize === f.MAX_VALUE_32BITS ||
                  this.centralDirOffset === f.MAX_VALUE_32BITS)
              ) {
                if (
                  ((this.zip64 = !0),
                  (a = this.reader.lastIndexOfSignature(
                    g.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                  )),
                  a < 0)
                )
                  throw new Error(
                    "Corrupted zip : can't find the ZIP64 end of central directory locator"
                  );
                if (
                  (this.reader.setIndex(a),
                  this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                  this.readBlockZip64EndOfCentralLocator(),
                  !this.isSignature(
                    this.relativeOffsetEndOfZip64CentralDir,
                    g.ZIP64_CENTRAL_DIRECTORY_END
                  ) &&
                    ((this.relativeOffsetEndOfZip64CentralDir =
                      this.reader.lastIndexOfSignature(
                        g.ZIP64_CENTRAL_DIRECTORY_END
                      )),
                    this.relativeOffsetEndOfZip64CentralDir < 0))
                )
                  throw new Error(
                    "Corrupted zip : can't find the ZIP64 end of central directory"
                  );
                this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                  this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END),
                  this.readBlockZip64EndOfCentral();
              }
              var d = this.centralDirOffset + this.centralDirSize;
              this.zip64 && ((d += 20), (d += 12 + this.zip64EndOfCentralSize));
              var e = c - d;
              if (e > 0)
                this.isSignature(c, g.CENTRAL_FILE_HEADER) ||
                  (this.reader.zero = e);
              else if (e < 0)
                throw new Error(
                  "Corrupted zip: missing " + Math.abs(e) + " bytes."
                );
            },
            prepareReader: function (a) {
              this.reader = e(a);
            },
            load: function (a) {
              this.prepareReader(a),
                this.readEndOfCentral(),
                this.readCentralDir(),
                this.readLocalFiles();
            },
          }),
            (b.exports = d);
        },
        {
          "./reader/readerFor": 22,
          "./signature": 23,
          "./support": 30,
          "./utf8": 31,
          "./utils": 32,
          "./zipEntry": 34,
        },
      ],
      34: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            (this.options = a), (this.loadOptions = b);
          }
          var e = a("./reader/readerFor"),
            f = a("./utils"),
            g = a("./compressedObject"),
            h = a("./crc32"),
            i = a("./utf8"),
            j = a("./compressions"),
            k = a("./support"),
            l = 0,
            m = 3,
            n = function (a) {
              for (var b in j)
                if (j.hasOwnProperty(b) && j[b].magic === a) return j[b];
              return null;
            };
          (d.prototype = {
            isEncrypted: function () {
              return 1 === (1 & this.bitFlag);
            },
            useUTF8: function () {
              return 2048 === (2048 & this.bitFlag);
            },
            readLocalPart: function (a) {
              var b, c;
              if (
                (a.skip(22),
                (this.fileNameLength = a.readInt(2)),
                (c = a.readInt(2)),
                (this.fileName = a.readData(this.fileNameLength)),
                a.skip(c),
                this.compressedSize === -1 || this.uncompressedSize === -1)
              )
                throw new Error(
                  "Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                );
              if (((b = n(this.compressionMethod)), null === b))
                throw new Error(
                  "Corrupted zip : compression " +
                    f.pretty(this.compressionMethod) +
                    " unknown (inner file : " +
                    f.transformTo("string", this.fileName) +
                    ")"
                );
              this.decompressed = new g(
                this.compressedSize,
                this.uncompressedSize,
                this.crc32,
                b,
                a.readData(this.compressedSize)
              );
            },
            readCentralPart: function (a) {
              (this.versionMadeBy = a.readInt(2)),
                a.skip(2),
                (this.bitFlag = a.readInt(2)),
                (this.compressionMethod = a.readString(2)),
                (this.date = a.readDate()),
                (this.crc32 = a.readInt(4)),
                (this.compressedSize = a.readInt(4)),
                (this.uncompressedSize = a.readInt(4));
              var b = a.readInt(2);
              if (
                ((this.extraFieldsLength = a.readInt(2)),
                (this.fileCommentLength = a.readInt(2)),
                (this.diskNumberStart = a.readInt(2)),
                (this.internalFileAttributes = a.readInt(2)),
                (this.externalFileAttributes = a.readInt(4)),
                (this.localHeaderOffset = a.readInt(4)),
                this.isEncrypted())
              )
                throw new Error("Encrypted zip are not supported");
              a.skip(b),
                this.readExtraFields(a),
                this.parseZIP64ExtraField(a),
                (this.fileComment = a.readData(this.fileCommentLength));
            },
            processAttributes: function () {
              (this.unixPermissions = null), (this.dosPermissions = null);
              var a = this.versionMadeBy >> 8;
              (this.dir = !!(16 & this.externalFileAttributes)),
                a === l &&
                  (this.dosPermissions = 63 & this.externalFileAttributes),
                a === m &&
                  (this.unixPermissions =
                    (this.externalFileAttributes >> 16) & 65535),
                this.dir ||
                  "/" !== this.fileNameStr.slice(-1) ||
                  (this.dir = !0);
            },
            parseZIP64ExtraField: function (a) {
              if (this.extraFields[1]) {
                var b = e(this.extraFields[1].value);
                this.uncompressedSize === f.MAX_VALUE_32BITS &&
                  (this.uncompressedSize = b.readInt(8)),
                  this.compressedSize === f.MAX_VALUE_32BITS &&
                    (this.compressedSize = b.readInt(8)),
                  this.localHeaderOffset === f.MAX_VALUE_32BITS &&
                    (this.localHeaderOffset = b.readInt(8)),
                  this.diskNumberStart === f.MAX_VALUE_32BITS &&
                    (this.diskNumberStart = b.readInt(4));
              }
            },
            readExtraFields: function (a) {
              var b,
                c,
                d,
                e = a.index + this.extraFieldsLength;
              for (this.extraFields || (this.extraFields = {}); a.index < e; )
                (b = a.readInt(2)),
                  (c = a.readInt(2)),
                  (d = a.readData(c)),
                  (this.extraFields[b] = { id: b, length: c, value: d });
            },
            handleUTF8: function () {
              var a = k.uint8array ? "uint8array" : "array";
              if (this.useUTF8())
                (this.fileNameStr = i.utf8decode(this.fileName)),
                  (this.fileCommentStr = i.utf8decode(this.fileComment));
              else {
                var b = this.findExtraFieldUnicodePath();
                if (null !== b) this.fileNameStr = b;
                else {
                  var c = f.transformTo(a, this.fileName);
                  this.fileNameStr = this.loadOptions.decodeFileName(c);
                }
                var d = this.findExtraFieldUnicodeComment();
                if (null !== d) this.fileCommentStr = d;
                else {
                  var e = f.transformTo(a, this.fileComment);
                  this.fileCommentStr = this.loadOptions.decodeFileName(e);
                }
              }
            },
            findExtraFieldUnicodePath: function () {
              var a = this.extraFields[28789];
              if (a) {
                var b = e(a.value);
                return 1 !== b.readInt(1)
                  ? null
                  : h(this.fileName) !== b.readInt(4)
                  ? null
                  : i.utf8decode(b.readData(a.length - 5));
              }
              return null;
            },
            findExtraFieldUnicodeComment: function () {
              var a = this.extraFields[25461];
              if (a) {
                var b = e(a.value);
                return 1 !== b.readInt(1)
                  ? null
                  : h(this.fileComment) !== b.readInt(4)
                  ? null
                  : i.utf8decode(b.readData(a.length - 5));
              }
              return null;
            },
          }),
            (b.exports = d);
        },
        {
          "./compressedObject": 2,
          "./compressions": 3,
          "./crc32": 4,
          "./reader/readerFor": 22,
          "./support": 30,
          "./utf8": 31,
          "./utils": 32,
        },
      ],
      35: [
        function (a, b, c) {
          "use strict";
          var d = a("./stream/StreamHelper"),
            e = a("./stream/DataWorker"),
            f = a("./utf8"),
            g = a("./compressedObject"),
            h = a("./stream/GenericWorker"),
            i = function (a, b, c) {
              (this.name = a),
                (this.dir = c.dir),
                (this.date = c.date),
                (this.comment = c.comment),
                (this.unixPermissions = c.unixPermissions),
                (this.dosPermissions = c.dosPermissions),
                (this._data = b),
                (this._dataBinary = c.binary),
                (this.options = {
                  compression: c.compression,
                  compressionOptions: c.compressionOptions,
                });
            };
          i.prototype = {
            internalStream: function (a) {
              var b = a.toLowerCase(),
                c = "string" === b || "text" === b;
              ("binarystring" !== b && "text" !== b) || (b = "string");
              var e = this._decompressWorker(),
                g = !this._dataBinary;
              return (
                g && !c && (e = e.pipe(new f.Utf8EncodeWorker())),
                !g && c && (e = e.pipe(new f.Utf8DecodeWorker())),
                new d(e, b, "")
              );
            },
            async: function (a, b) {
              return this.internalStream(a).accumulate(b);
            },
            nodeStream: function (a, b) {
              return this.internalStream(a || "nodebuffer").toNodejsStream(b);
            },
            _compressWorker: function (a, b) {
              if (
                this._data instanceof g &&
                this._data.compression.magic === a.magic
              )
                return this._data.getCompressedWorker();
              var c = this._decompressWorker();
              return (
                this._dataBinary || (c = c.pipe(new f.Utf8EncodeWorker())),
                g.createWorkerFrom(c, a, b)
              );
            },
            _decompressWorker: function () {
              return this._data instanceof g
                ? this._data.getContentWorker()
                : this._data instanceof h
                ? this._data
                : new e(this._data);
            },
          };
          for (
            var j = [
                "asText",
                "asBinary",
                "asNodeBuffer",
                "asUint8Array",
                "asArrayBuffer",
              ],
              k = function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide."
                );
              },
              l = 0;
            l < j.length;
            l++
          )
            i.prototype[j[l]] = k;
          b.exports = i;
        },
        {
          "./compressedObject": 2,
          "./stream/DataWorker": 27,
          "./stream/GenericWorker": 28,
          "./stream/StreamHelper": 29,
          "./utf8": 31,
        },
      ],
      36: [
        function (a, b, c) {
          a("../modules/web.immediate"),
            (b.exports = a("../modules/_core").setImmediate);
        },
        { "../modules/_core": 40, "../modules/web.immediate": 56 },
      ],
      37: [
        function (a, b, c) {
          b.exports = function (a) {
            if ("function" != typeof a)
              throw TypeError(a + " is not a function!");
            return a;
          };
        },
        {},
      ],
      38: [
        function (a, b, c) {
          var d = a("./_is-object");
          b.exports = function (a) {
            if (!d(a)) throw TypeError(a + " is not an object!");
            return a;
          };
        },
        { "./_is-object": 51 },
      ],
      39: [
        function (a, b, c) {
          var d = {}.toString;
          b.exports = function (a) {
            return d.call(a).slice(8, -1);
          };
        },
        {},
      ],
      40: [
        function (a, b, c) {
          var d = (b.exports = { version: "2.3.0" });
          "number" == typeof __e && (__e = d);
        },
        {},
      ],
      41: [
        function (a, b, c) {
          var d = a("./_a-function");
          b.exports = function (a, b, c) {
            if ((d(a), void 0 === b)) return a;
            switch (c) {
              case 1:
                return function (c) {
                  return a.call(b, c);
                };
              case 2:
                return function (c, d) {
                  return a.call(b, c, d);
                };
              case 3:
                return function (c, d, e) {
                  return a.call(b, c, d, e);
                };
            }
            return function () {
              return a.apply(b, arguments);
            };
          };
        },
        { "./_a-function": 37 },
      ],
      42: [
        function (a, b, c) {
          b.exports = !a("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty({}, "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
        },
        { "./_fails": 45 },
      ],
      43: [
        function (a, b, c) {
          var d = a("./_is-object"),
            e = a("./_global").document,
            f = d(e) && d(e.createElement);
          b.exports = function (a) {
            return f ? e.createElement(a) : {};
          };
        },
        { "./_global": 46, "./_is-object": 51 },
      ],
      44: [
        function (a, b, c) {
          var d = a("./_global"),
            e = a("./_core"),
            f = a("./_ctx"),
            g = a("./_hide"),
            h = "prototype",
            i = function (a, b, c) {
              var j,
                k,
                l,
                m = a & i.F,
                n = a & i.G,
                o = a & i.S,
                p = a & i.P,
                q = a & i.B,
                r = a & i.W,
                s = n ? e : e[b] || (e[b] = {}),
                t = s[h],
                u = n ? d : o ? d[b] : (d[b] || {})[h];
              n && (c = b);
              for (j in c)
                (k = !m && u && void 0 !== u[j]),
                  (k && j in s) ||
                    ((l = k ? u[j] : c[j]),
                    (s[j] =
                      n && "function" != typeof u[j]
                        ? c[j]
                        : q && k
                        ? f(l, d)
                        : r && u[j] == l
                        ? (function (a) {
                            var b = function (b, c, d) {
                              if (this instanceof a) {
                                switch (arguments.length) {
                                  case 0:
                                    return new a();
                                  case 1:
                                    return new a(b);
                                  case 2:
                                    return new a(b, c);
                                }
                                return new a(b, c, d);
                              }
                              return a.apply(this, arguments);
                            };
                            return (b[h] = a[h]), b;
                          })(l)
                        : p && "function" == typeof l
                        ? f(Function.call, l)
                        : l),
                    p &&
                      (((s.virtual || (s.virtual = {}))[j] = l),
                      a & i.R && t && !t[j] && g(t, j, l)));
            };
          (i.F = 1),
            (i.G = 2),
            (i.S = 4),
            (i.P = 8),
            (i.B = 16),
            (i.W = 32),
            (i.U = 64),
            (i.R = 128),
            (b.exports = i);
        },
        { "./_core": 40, "./_ctx": 41, "./_global": 46, "./_hide": 47 },
      ],
      45: [
        function (a, b, c) {
          b.exports = function (a) {
            try {
              return !!a();
            } catch (b) {
              return !0;
            }
          };
        },
        {},
      ],
      46: [
        function (a, b, c) {
          var d = (b.exports =
            "undefined" != typeof window && window.Math == Math
              ? window
              : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")());
          "number" == typeof __g && (__g = d);
        },
        {},
      ],
      47: [
        function (a, b, c) {
          var d = a("./_object-dp"),
            e = a("./_property-desc");
          b.exports = a("./_descriptors")
            ? function (a, b, c) {
                return d.f(a, b, e(1, c));
              }
            : function (a, b, c) {
                return (a[b] = c), a;
              };
        },
        { "./_descriptors": 42, "./_object-dp": 52, "./_property-desc": 53 },
      ],
      48: [
        function (a, b, c) {
          b.exports = a("./_global").document && document.documentElement;
        },
        { "./_global": 46 },
      ],
      49: [
        function (a, b, c) {
          b.exports =
            !a("./_descriptors") &&
            !a("./_fails")(function () {
              return (
                7 !=
                Object.defineProperty(a("./_dom-create")("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        { "./_descriptors": 42, "./_dom-create": 43, "./_fails": 45 },
      ],
      50: [
        function (a, b, c) {
          b.exports = function (a, b, c) {
            var d = void 0 === c;
            switch (b.length) {
              case 0:
                return d ? a() : a.call(c);
              case 1:
                return d ? a(b[0]) : a.call(c, b[0]);
              case 2:
                return d ? a(b[0], b[1]) : a.call(c, b[0], b[1]);
              case 3:
                return d ? a(b[0], b[1], b[2]) : a.call(c, b[0], b[1], b[2]);
              case 4:
                return d
                  ? a(b[0], b[1], b[2], b[3])
                  : a.call(c, b[0], b[1], b[2], b[3]);
            }
            return a.apply(c, b);
          };
        },
        {},
      ],
      51: [
        function (a, b, c) {
          b.exports = function (a) {
            return "object" == typeof a ? null !== a : "function" == typeof a;
          };
        },
        {},
      ],
      52: [
        function (a, b, c) {
          var d = a("./_an-object"),
            e = a("./_ie8-dom-define"),
            f = a("./_to-primitive"),
            g = Object.defineProperty;
          c.f = a("./_descriptors")
            ? Object.defineProperty
            : function (a, b, c) {
                if ((d(a), (b = f(b, !0)), d(c), e))
                  try {
                    return g(a, b, c);
                  } catch (h) {}
                if ("get" in c || "set" in c)
                  throw TypeError("Accessors not supported!");
                return "value" in c && (a[b] = c.value), a;
              };
        },
        {
          "./_an-object": 38,
          "./_descriptors": 42,
          "./_ie8-dom-define": 49,
          "./_to-primitive": 55,
        },
      ],
      53: [
        function (a, b, c) {
          b.exports = function (a, b) {
            return {
              enumerable: !(1 & a),
              configurable: !(2 & a),
              writable: !(4 & a),
              value: b,
            };
          };
        },
        {},
      ],
      54: [
        function (a, b, c) {
          var d,
            e,
            f,
            g = a("./_ctx"),
            h = a("./_invoke"),
            i = a("./_html"),
            j = a("./_dom-create"),
            k = a("./_global"),
            l = k.process,
            m = k.setImmediate,
            n = k.clearImmediate,
            o = k.MessageChannel,
            p = 0,
            q = {},
            r = "onreadystatechange",
            s = function () {
              var a = +this;
              if (q.hasOwnProperty(a)) {
                var b = q[a];
                delete q[a], b();
              }
            },
            t = function (a) {
              s.call(a.data);
            };
          (m && n) ||
            ((m = function (a) {
              for (var b = [], c = 1; arguments.length > c; )
                b.push(arguments[c++]);
              return (
                (q[++p] = function () {
                  h("function" == typeof a ? a : Function(a), b);
                }),
                d(p),
                p
              );
            }),
            (n = function (a) {
              delete q[a];
            }),
            "process" == a("./_cof")(l)
              ? (d = function (a) {
                  l.nextTick(g(s, a, 1));
                })
              : o
              ? ((e = new o()),
                (f = e.port2),
                (e.port1.onmessage = t),
                (d = g(f.postMessage, f, 1)))
              : k.addEventListener &&
                "function" == typeof postMessage &&
                !k.importScripts
              ? ((d = function (a) {
                  k.postMessage(a + "", "*");
                }),
                k.addEventListener("message", t, !1))
              : (d =
                  r in j("script")
                    ? function (a) {
                        i.appendChild(j("script"))[r] = function () {
                          i.removeChild(this), s.call(a);
                        };
                      }
                    : function (a) {
                        setTimeout(g(s, a, 1), 0);
                      })),
            (b.exports = { set: m, clear: n });
        },
        {
          "./_cof": 39,
          "./_ctx": 41,
          "./_dom-create": 43,
          "./_global": 46,
          "./_html": 48,
          "./_invoke": 50,
        },
      ],
      55: [
        function (a, b, c) {
          var d = a("./_is-object");
          b.exports = function (a, b) {
            if (!d(a)) return a;
            var c, e;
            if (
              b &&
              "function" == typeof (c = a.toString) &&
              !d((e = c.call(a)))
            )
              return e;
            if ("function" == typeof (c = a.valueOf) && !d((e = c.call(a))))
              return e;
            if (
              !b &&
              "function" == typeof (c = a.toString) &&
              !d((e = c.call(a)))
            )
              return e;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        { "./_is-object": 51 },
      ],
      56: [
        function (a, b, c) {
          var d = a("./_export"),
            e = a("./_task");
          d(d.G + d.B, { setImmediate: e.set, clearImmediate: e.clear });
        },
        { "./_export": 44, "./_task": 54 },
      ],
      57: [
        function (a, b, c) {
          (function (a) {
            "use strict";
            function c() {
              k = !0;
              for (var a, b, c = l.length; c; ) {
                for (b = l, l = [], a = -1; ++a < c; ) b[a]();
                c = l.length;
              }
              k = !1;
            }
            function d(a) {
              1 !== l.push(a) || k || e();
            }
            var e,
              f = a.MutationObserver || a.WebKitMutationObserver;
            if (f) {
              var g = 0,
                h = new f(c),
                i = a.document.createTextNode("");
              h.observe(i, { characterData: !0 }),
                (e = function () {
                  i.data = g = ++g % 2;
                });
            } else if (a.setImmediate || "undefined" == typeof a.MessageChannel)
              e =
                "document" in a &&
                "onreadystatechange" in a.document.createElement("script")
                  ? function () {
                      var b = a.document.createElement("script");
                      (b.onreadystatechange = function () {
                        c(),
                          (b.onreadystatechange = null),
                          b.parentNode.removeChild(b),
                          (b = null);
                      }),
                        a.document.documentElement.appendChild(b);
                    }
                  : function () {
                      setTimeout(c, 0);
                    };
            else {
              var j = new a.MessageChannel();
              (j.port1.onmessage = c),
                (e = function () {
                  j.port2.postMessage(0);
                });
            }
            var k,
              l = [];
            b.exports = d;
          }).call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        {},
      ],
      58: [
        function (a, b, c) {
          "use strict";
          function d() {}
          function e(a) {
            if ("function" != typeof a)
              throw new TypeError("resolver must be a function");
            (this.state = s),
              (this.queue = []),
              (this.outcome = void 0),
              a !== d && i(this, a);
          }
          function f(a, b, c) {
            (this.promise = a),
              "function" == typeof b &&
                ((this.onFulfilled = b),
                (this.callFulfilled = this.otherCallFulfilled)),
              "function" == typeof c &&
                ((this.onRejected = c),
                (this.callRejected = this.otherCallRejected));
          }
          function g(a, b, c) {
            o(function () {
              var d;
              try {
                d = b(c);
              } catch (e) {
                return p.reject(a, e);
              }
              d === a
                ? p.reject(
                    a,
                    new TypeError("Cannot resolve promise with itself")
                  )
                : p.resolve(a, d);
            });
          }
          function h(a) {
            var b = a && a.then;
            if (a && "object" == typeof a && "function" == typeof b)
              return function () {
                b.apply(a, arguments);
              };
          }
          function i(a, b) {
            function c(b) {
              f || ((f = !0), p.reject(a, b));
            }
            function d(b) {
              f || ((f = !0), p.resolve(a, b));
            }
            function e() {
              b(d, c);
            }
            var f = !1,
              g = j(e);
            "error" === g.status && c(g.value);
          }
          function j(a, b) {
            var c = {};
            try {
              (c.value = a(b)), (c.status = "success");
            } catch (d) {
              (c.status = "error"), (c.value = d);
            }
            return c;
          }
          function k(a) {
            return a instanceof this ? a : p.resolve(new this(d), a);
          }
          function l(a) {
            var b = new this(d);
            return p.reject(b, a);
          }
          function m(a) {
            function b(a, b) {
              function d(a) {
                (g[b] = a), ++h !== e || f || ((f = !0), p.resolve(j, g));
              }
              c.resolve(a).then(d, function (a) {
                f || ((f = !0), p.reject(j, a));
              });
            }
            var c = this;
            if ("[object Array]" !== Object.prototype.toString.call(a))
              return this.reject(new TypeError("must be an array"));
            var e = a.length,
              f = !1;
            if (!e) return this.resolve([]);
            for (
              var g = new Array(e), h = 0, i = -1, j = new this(d);
              ++i < e;

            )
              b(a[i], i);
            return j;
          }
          function n(a) {
            function b(a) {
              c.resolve(a).then(
                function (a) {
                  f || ((f = !0), p.resolve(h, a));
                },
                function (a) {
                  f || ((f = !0), p.reject(h, a));
                }
              );
            }
            var c = this;
            if ("[object Array]" !== Object.prototype.toString.call(a))
              return this.reject(new TypeError("must be an array"));
            var e = a.length,
              f = !1;
            if (!e) return this.resolve([]);
            for (var g = -1, h = new this(d); ++g < e; ) b(a[g]);
            return h;
          }
          var o = a("immediate"),
            p = {},
            q = ["REJECTED"],
            r = ["FULFILLED"],
            s = ["PENDING"];
          (b.exports = e),
            (e.prototype["catch"] = function (a) {
              return this.then(null, a);
            }),
            (e.prototype.then = function (a, b) {
              if (
                ("function" != typeof a && this.state === r) ||
                ("function" != typeof b && this.state === q)
              )
                return this;
              var c = new this.constructor(d);
              if (this.state !== s) {
                var e = this.state === r ? a : b;
                g(c, e, this.outcome);
              } else this.queue.push(new f(c, a, b));
              return c;
            }),
            (f.prototype.callFulfilled = function (a) {
              p.resolve(this.promise, a);
            }),
            (f.prototype.otherCallFulfilled = function (a) {
              g(this.promise, this.onFulfilled, a);
            }),
            (f.prototype.callRejected = function (a) {
              p.reject(this.promise, a);
            }),
            (f.prototype.otherCallRejected = function (a) {
              g(this.promise, this.onRejected, a);
            }),
            (p.resolve = function (a, b) {
              var c = j(h, b);
              if ("error" === c.status) return p.reject(a, c.value);
              var d = c.value;
              if (d) i(a, d);
              else {
                (a.state = r), (a.outcome = b);
                for (var e = -1, f = a.queue.length; ++e < f; )
                  a.queue[e].callFulfilled(b);
              }
              return a;
            }),
            (p.reject = function (a, b) {
              (a.state = q), (a.outcome = b);
              for (var c = -1, d = a.queue.length; ++c < d; )
                a.queue[c].callRejected(b);
              return a;
            }),
            (e.resolve = k),
            (e.reject = l),
            (e.all = m),
            (e.race = n);
        },
        { immediate: 57 },
      ],
      59: [
        function (a, b, c) {
          "use strict";
          var d = a("./lib/utils/common").assign,
            e = a("./lib/deflate"),
            f = a("./lib/inflate"),
            g = a("./lib/zlib/constants"),
            h = {};
          d(h, e, f, g), (b.exports = h);
        },
        {
          "./lib/deflate": 60,
          "./lib/inflate": 61,
          "./lib/utils/common": 62,
          "./lib/zlib/constants": 65,
        },
      ],
      60: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            if (!(this instanceof d)) return new d(a);
            this.options = i.assign(
              {
                level: s,
                method: u,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: t,
                to: "",
              },
              a || {}
            );
            var b = this.options;
            b.raw && b.windowBits > 0
              ? (b.windowBits = -b.windowBits)
              : b.gzip &&
                b.windowBits > 0 &&
                b.windowBits < 16 &&
                (b.windowBits += 16),
              (this.err = 0),
              (this.msg = ""),
              (this.ended = !1),
              (this.chunks = []),
              (this.strm = new l()),
              (this.strm.avail_out = 0);
            var c = h.deflateInit2(
              this.strm,
              b.level,
              b.method,
              b.windowBits,
              b.memLevel,
              b.strategy
            );
            if (c !== p) throw new Error(k[c]);
            if (
              (b.header && h.deflateSetHeader(this.strm, b.header),
              b.dictionary)
            ) {
              var e;
              if (
                ((e =
                  "string" == typeof b.dictionary
                    ? j.string2buf(b.dictionary)
                    : "[object ArrayBuffer]" === m.call(b.dictionary)
                    ? new Uint8Array(b.dictionary)
                    : b.dictionary),
                (c = h.deflateSetDictionary(this.strm, e)),
                c !== p)
              )
                throw new Error(k[c]);
              this._dict_set = !0;
            }
          }
          function e(a, b) {
            var c = new d(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function f(a, b) {
            return (b = b || {}), (b.raw = !0), e(a, b);
          }
          function g(a, b) {
            return (b = b || {}), (b.gzip = !0), e(a, b);
          }
          var h = a("./zlib/deflate"),
            i = a("./utils/common"),
            j = a("./utils/strings"),
            k = a("./zlib/messages"),
            l = a("./zlib/zstream"),
            m = Object.prototype.toString,
            n = 0,
            o = 4,
            p = 0,
            q = 1,
            r = 2,
            s = -1,
            t = 0,
            u = 8;
          (d.prototype.push = function (a, b) {
            var c,
              d,
              e = this.strm,
              f = this.options.chunkSize;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? o : n),
              "string" == typeof a
                ? (e.input = j.string2buf(a))
                : "[object ArrayBuffer]" === m.call(a)
                ? (e.input = new Uint8Array(a))
                : (e.input = a),
              (e.next_in = 0),
              (e.avail_in = e.input.length);
            do {
              if (
                (0 === e.avail_out &&
                  ((e.output = new i.Buf8(f)),
                  (e.next_out = 0),
                  (e.avail_out = f)),
                (c = h.deflate(e, d)),
                c !== q && c !== p)
              )
                return this.onEnd(c), (this.ended = !0), !1;
              (0 !== e.avail_out &&
                (0 !== e.avail_in || (d !== o && d !== r))) ||
                ("string" === this.options.to
                  ? this.onData(
                      j.buf2binstring(i.shrinkBuf(e.output, e.next_out))
                    )
                  : this.onData(i.shrinkBuf(e.output, e.next_out)));
            } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== q);
            return d === o
              ? ((c = h.deflateEnd(this.strm)),
                this.onEnd(c),
                (this.ended = !0),
                c === p)
              : d !== r || (this.onEnd(p), (e.avail_out = 0), !0);
          }),
            (d.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (d.prototype.onEnd = function (a) {
              a === p &&
                ("string" === this.options.to
                  ? (this.result = this.chunks.join(""))
                  : (this.result = i.flattenChunks(this.chunks))),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Deflate = d),
            (c.deflate = e),
            (c.deflateRaw = f),
            (c.gzip = g);
        },
        {
          "./utils/common": 62,
          "./utils/strings": 63,
          "./zlib/deflate": 67,
          "./zlib/messages": 72,
          "./zlib/zstream": 74,
        },
      ],
      61: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            if (!(this instanceof d)) return new d(a);
            this.options = h.assign(
              { chunkSize: 16384, windowBits: 0, to: "" },
              a || {}
            );
            var b = this.options;
            b.raw &&
              b.windowBits >= 0 &&
              b.windowBits < 16 &&
              ((b.windowBits = -b.windowBits),
              0 === b.windowBits && (b.windowBits = -15)),
              !(b.windowBits >= 0 && b.windowBits < 16) ||
                (a && a.windowBits) ||
                (b.windowBits += 32),
              b.windowBits > 15 &&
                b.windowBits < 48 &&
                0 === (15 & b.windowBits) &&
                (b.windowBits |= 15),
              (this.err = 0),
              (this.msg = ""),
              (this.ended = !1),
              (this.chunks = []),
              (this.strm = new l()),
              (this.strm.avail_out = 0);
            var c = g.inflateInit2(this.strm, b.windowBits);
            if (c !== j.Z_OK) throw new Error(k[c]);
            (this.header = new m()), g.inflateGetHeader(this.strm, this.header);
          }
          function e(a, b) {
            var c = new d(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function f(a, b) {
            return (b = b || {}), (b.raw = !0), e(a, b);
          }
          var g = a("./zlib/inflate"),
            h = a("./utils/common"),
            i = a("./utils/strings"),
            j = a("./zlib/constants"),
            k = a("./zlib/messages"),
            l = a("./zlib/zstream"),
            m = a("./zlib/gzheader"),
            n = Object.prototype.toString;
          (d.prototype.push = function (a, b) {
            var c,
              d,
              e,
              f,
              k,
              l,
              m = this.strm,
              o = this.options.chunkSize,
              p = this.options.dictionary,
              q = !1;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? j.Z_FINISH : j.Z_NO_FLUSH),
              "string" == typeof a
                ? (m.input = i.binstring2buf(a))
                : "[object ArrayBuffer]" === n.call(a)
                ? (m.input = new Uint8Array(a))
                : (m.input = a),
              (m.next_in = 0),
              (m.avail_in = m.input.length);
            do {
              if (
                (0 === m.avail_out &&
                  ((m.output = new h.Buf8(o)),
                  (m.next_out = 0),
                  (m.avail_out = o)),
                (c = g.inflate(m, j.Z_NO_FLUSH)),
                c === j.Z_NEED_DICT &&
                  p &&
                  ((l =
                    "string" == typeof p
                      ? i.string2buf(p)
                      : "[object ArrayBuffer]" === n.call(p)
                      ? new Uint8Array(p)
                      : p),
                  (c = g.inflateSetDictionary(this.strm, l))),
                c === j.Z_BUF_ERROR && q === !0 && ((c = j.Z_OK), (q = !1)),
                c !== j.Z_STREAM_END && c !== j.Z_OK)
              )
                return this.onEnd(c), (this.ended = !0), !1;
              m.next_out &&
                ((0 !== m.avail_out &&
                  c !== j.Z_STREAM_END &&
                  (0 !== m.avail_in ||
                    (d !== j.Z_FINISH && d !== j.Z_SYNC_FLUSH))) ||
                  ("string" === this.options.to
                    ? ((e = i.utf8border(m.output, m.next_out)),
                      (f = m.next_out - e),
                      (k = i.buf2string(m.output, e)),
                      (m.next_out = f),
                      (m.avail_out = o - f),
                      f && h.arraySet(m.output, m.output, e, f, 0),
                      this.onData(k))
                    : this.onData(h.shrinkBuf(m.output, m.next_out)))),
                0 === m.avail_in && 0 === m.avail_out && (q = !0);
            } while (
              (m.avail_in > 0 || 0 === m.avail_out) &&
              c !== j.Z_STREAM_END
            );
            return (
              c === j.Z_STREAM_END && (d = j.Z_FINISH),
              d === j.Z_FINISH
                ? ((c = g.inflateEnd(this.strm)),
                  this.onEnd(c),
                  (this.ended = !0),
                  c === j.Z_OK)
                : d !== j.Z_SYNC_FLUSH ||
                  (this.onEnd(j.Z_OK), (m.avail_out = 0), !0)
            );
          }),
            (d.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (d.prototype.onEnd = function (a) {
              a === j.Z_OK &&
                ("string" === this.options.to
                  ? (this.result = this.chunks.join(""))
                  : (this.result = h.flattenChunks(this.chunks))),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Inflate = d),
            (c.inflate = e),
            (c.inflateRaw = f),
            (c.ungzip = e);
        },
        {
          "./utils/common": 62,
          "./utils/strings": 63,
          "./zlib/constants": 65,
          "./zlib/gzheader": 68,
          "./zlib/inflate": 70,
          "./zlib/messages": 72,
          "./zlib/zstream": 74,
        },
      ],
      62: [
        function (a, b, c) {
          "use strict";
          var d =
            "undefined" != typeof Uint8Array &&
            "undefined" != typeof Uint16Array &&
            "undefined" != typeof Int32Array;
          (c.assign = function (a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
              var c = b.shift();
              if (c) {
                if ("object" != typeof c)
                  throw new TypeError(c + "must be non-object");
                for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
              }
            }
            return a;
          }),
            (c.shrinkBuf = function (a, b) {
              return a.length === b
                ? a
                : a.subarray
                ? a.subarray(0, b)
                : ((a.length = b), a);
            });
          var e = {
              arraySet: function (a, b, c, d, e) {
                if (b.subarray && a.subarray)
                  return void a.set(b.subarray(c, c + d), e);
                for (var f = 0; f < d; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                var b, c, d, e, f, g;
                for (d = 0, b = 0, c = a.length; b < c; b++) d += a[b].length;
                for (
                  g = new Uint8Array(d), e = 0, b = 0, c = a.length;
                  b < c;
                  b++
                )
                  (f = a[b]), g.set(f, e), (e += f.length);
                return g;
              },
            },
            f = {
              arraySet: function (a, b, c, d, e) {
                for (var f = 0; f < d; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                return [].concat.apply([], a);
              },
            };
          (c.setTyped = function (a) {
            a
              ? ((c.Buf8 = Uint8Array),
                (c.Buf16 = Uint16Array),
                (c.Buf32 = Int32Array),
                c.assign(c, e))
              : ((c.Buf8 = Array),
                (c.Buf16 = Array),
                (c.Buf32 = Array),
                c.assign(c, f));
          }),
            c.setTyped(d);
        },
        {},
      ],
      63: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            if (b < 65537 && ((a.subarray && g) || (!a.subarray && f)))
              return String.fromCharCode.apply(null, e.shrinkBuf(a, b));
            for (var c = "", d = 0; d < b; d++) c += String.fromCharCode(a[d]);
            return c;
          }
          var e = a("./common"),
            f = !0,
            g = !0;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (h) {
            f = !1;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (h) {
            g = !1;
          }
          for (var i = new e.Buf8(256), j = 0; j < 256; j++)
            i[j] =
              j >= 252
                ? 6
                : j >= 248
                ? 5
                : j >= 240
                ? 4
                : j >= 224
                ? 3
                : j >= 192
                ? 2
                : 1;
          (i[254] = i[254] = 1),
            (c.string2buf = function (a) {
              var b,
                c,
                d,
                f,
                g,
                h = a.length,
                i = 0;
              for (f = 0; f < h; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    f + 1 < h &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  (i += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4);
              for (b = new e.Buf8(i), g = 0, f = 0; g < i; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    f + 1 < h &&
                    ((d = a.charCodeAt(f + 1)),
                    56320 === (64512 & d) &&
                      ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  c < 128
                    ? (b[g++] = c)
                    : c < 2048
                    ? ((b[g++] = 192 | (c >>> 6)), (b[g++] = 128 | (63 & c)))
                    : c < 65536
                    ? ((b[g++] = 224 | (c >>> 12)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)))
                    : ((b[g++] = 240 | (c >>> 18)),
                      (b[g++] = 128 | ((c >>> 12) & 63)),
                      (b[g++] = 128 | ((c >>> 6) & 63)),
                      (b[g++] = 128 | (63 & c)));
              return b;
            }),
            (c.buf2binstring = function (a) {
              return d(a, a.length);
            }),
            (c.binstring2buf = function (a) {
              for (
                var b = new e.Buf8(a.length), c = 0, d = b.length;
                c < d;
                c++
              )
                b[c] = a.charCodeAt(c);
              return b;
            }),
            (c.buf2string = function (a, b) {
              var c,
                e,
                f,
                g,
                h = b || a.length,
                j = new Array(2 * h);
              for (e = 0, c = 0; c < h; )
                if (((f = a[c++]), f < 128)) j[e++] = f;
                else if (((g = i[f]), g > 4)) (j[e++] = 65533), (c += g - 1);
                else {
                  for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && c < h; )
                    (f = (f << 6) | (63 & a[c++])), g--;
                  g > 1
                    ? (j[e++] = 65533)
                    : f < 65536
                    ? (j[e++] = f)
                    : ((f -= 65536),
                      (j[e++] = 55296 | ((f >> 10) & 1023)),
                      (j[e++] = 56320 | (1023 & f)));
                }
              return d(j, e);
            }),
            (c.utf8border = function (a, b) {
              var c;
              for (
                b = b || a.length, b > a.length && (b = a.length), c = b - 1;
                c >= 0 && 128 === (192 & a[c]);

              )
                c--;
              return c < 0 ? b : 0 === c ? b : c + i[a[c]] > b ? c : b;
            });
        },
        { "./common": 62 },
      ],
      64: [
        function (a, b, c) {
          "use strict";
          function d(a, b, c, d) {
            for (
              var e = (65535 & a) | 0, f = ((a >>> 16) & 65535) | 0, g = 0;
              0 !== c;

            ) {
              (g = c > 2e3 ? 2e3 : c), (c -= g);
              do (e = (e + b[d++]) | 0), (f = (f + e) | 0);
              while (--g);
              (e %= 65521), (f %= 65521);
            }
            return e | (f << 16) | 0;
          }
          b.exports = d;
        },
        {},
      ],
      65: [
        function (a, b, c) {
          "use strict";
          b.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8,
          };
        },
        {},
      ],
      66: [
        function (a, b, c) {
          "use strict";
          function d() {
            for (var a, b = [], c = 0; c < 256; c++) {
              a = c;
              for (var d = 0; d < 8; d++)
                a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1;
              b[c] = a;
            }
            return b;
          }
          function e(a, b, c, d) {
            var e = f,
              g = d + c;
            a ^= -1;
            for (var h = d; h < g; h++) a = (a >>> 8) ^ e[255 & (a ^ b[h])];
            return a ^ -1;
          }
          var f = d();
          b.exports = e;
        },
        {},
      ],
      67: [
        function (a, b, c) {
          "use strict";
          function d(a, b) {
            return (a.msg = I[b]), b;
          }
          function e(a) {
            return (a << 1) - (a > 4 ? 9 : 0);
          }
          function f(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function g(a) {
            var b = a.state,
              c = b.pending;
            c > a.avail_out && (c = a.avail_out),
              0 !== c &&
                (E.arraySet(
                  a.output,
                  b.pending_buf,
                  b.pending_out,
                  c,
                  a.next_out
                ),
                (a.next_out += c),
                (b.pending_out += c),
                (a.total_out += c),
                (a.avail_out -= c),
                (b.pending -= c),
                0 === b.pending && (b.pending_out = 0));
          }
          function h(a, b) {
            F._tr_flush_block(
              a,
              a.block_start >= 0 ? a.block_start : -1,
              a.strstart - a.block_start,
              b
            ),
              (a.block_start = a.strstart),
              g(a.strm);
          }
          function i(a, b) {
            a.pending_buf[a.pending++] = b;
          }
          function j(a, b) {
            (a.pending_buf[a.pending++] = (b >>> 8) & 255),
              (a.pending_buf[a.pending++] = 255 & b);
          }
          function k(a, b, c, d) {
            var e = a.avail_in;
            return (
              e > d && (e = d),
              0 === e
                ? 0
                : ((a.avail_in -= e),
                  E.arraySet(b, a.input, a.next_in, e, c),
                  1 === a.state.wrap
                    ? (a.adler = G(a.adler, b, e, c))
                    : 2 === a.state.wrap && (a.adler = H(a.adler, b, e, c)),
                  (a.next_in += e),
                  (a.total_in += e),
                  e)
            );
          }
          function l(a, b) {
            var c,
              d,
              e = a.max_chain_length,
              f = a.strstart,
              g = a.prev_length,
              h = a.nice_match,
              i = a.strstart > a.w_size - la ? a.strstart - (a.w_size - la) : 0,
              j = a.window,
              k = a.w_mask,
              l = a.prev,
              m = a.strstart + ka,
              n = j[f + g - 1],
              o = j[f + g];
            a.prev_length >= a.good_match && (e >>= 2),
              h > a.lookahead && (h = a.lookahead);
            do
              if (
                ((c = b),
                j[c + g] === o &&
                  j[c + g - 1] === n &&
                  j[c] === j[f] &&
                  j[++c] === j[f + 1])
              ) {
                (f += 2), c++;
                do;
                while (
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  f < m
                );
                if (((d = ka - (m - f)), (f = m - ka), d > g)) {
                  if (((a.match_start = b), (g = d), d >= h)) break;
                  (n = j[f + g - 1]), (o = j[f + g]);
                }
              }
            while ((b = l[b & k]) > i && 0 !== --e);
            return g <= a.lookahead ? g : a.lookahead;
          }
          function m(a) {
            var b,
              c,
              d,
              e,
              f,
              g = a.w_size;
            do {
              if (
                ((e = a.window_size - a.lookahead - a.strstart),
                a.strstart >= g + (g - la))
              ) {
                E.arraySet(a.window, a.window, g, g, 0),
                  (a.match_start -= g),
                  (a.strstart -= g),
                  (a.block_start -= g),
                  (c = a.hash_size),
                  (b = c);
                do (d = a.head[--b]), (a.head[b] = d >= g ? d - g : 0);
                while (--c);
                (c = g), (b = c);
                do (d = a.prev[--b]), (a.prev[b] = d >= g ? d - g : 0);
                while (--c);
                e += g;
              }
              if (0 === a.strm.avail_in) break;
              if (
                ((c = k(a.strm, a.window, a.strstart + a.lookahead, e)),
                (a.lookahead += c),
                a.lookahead + a.insert >= ja)
              )
                for (
                  f = a.strstart - a.insert,
                    a.ins_h = a.window[f],
                    a.ins_h =
                      ((a.ins_h << a.hash_shift) ^ a.window[f + 1]) &
                      a.hash_mask;
                  a.insert &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^ a.window[f + ja - 1]) &
                    a.hash_mask),
                  (a.prev[f & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = f),
                  f++,
                  a.insert--,
                  !(a.lookahead + a.insert < ja));

                );
            } while (a.lookahead < la && 0 !== a.strm.avail_in);
          }
          function n(a, b) {
            var c = 65535;
            for (
              c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);
              ;

            ) {
              if (a.lookahead <= 1) {
                if ((m(a), 0 === a.lookahead && b === J)) return ua;
                if (0 === a.lookahead) break;
              }
              (a.strstart += a.lookahead), (a.lookahead = 0);
              var d = a.block_start + c;
              if (
                (0 === a.strstart || a.strstart >= d) &&
                ((a.lookahead = a.strstart - d),
                (a.strstart = d),
                h(a, !1),
                0 === a.strm.avail_out)
              )
                return ua;
              if (
                a.strstart - a.block_start >= a.w_size - la &&
                (h(a, !1), 0 === a.strm.avail_out)
              )
                return ua;
            }
            return (
              (a.insert = 0),
              b === M
                ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa)
                : a.strstart > a.block_start &&
                  (h(a, !1), 0 === a.strm.avail_out)
                ? ua
                : ua
            );
          }
          function o(a, b) {
            for (var c, d; ; ) {
              if (a.lookahead < la) {
                if ((m(a), a.lookahead < la && b === J)) return ua;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= ja &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^
                      a.window[a.strstart + ja - 1]) &
                    a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                0 !== c &&
                  a.strstart - c <= a.w_size - la &&
                  (a.match_length = l(a, c)),
                a.match_length >= ja)
              )
                if (
                  ((d = F._tr_tally(
                    a,
                    a.strstart - a.match_start,
                    a.match_length - ja
                  )),
                  (a.lookahead -= a.match_length),
                  a.match_length <= a.max_lazy_match && a.lookahead >= ja)
                ) {
                  a.match_length--;
                  do
                    a.strstart++,
                      (a.ins_h =
                        ((a.ins_h << a.hash_shift) ^
                          a.window[a.strstart + ja - 1]) &
                        a.hash_mask),
                      (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                      (a.head[a.ins_h] = a.strstart);
                  while (0 !== --a.match_length);
                  a.strstart++;
                } else
                  (a.strstart += a.match_length),
                    (a.match_length = 0),
                    (a.ins_h = a.window[a.strstart]),
                    (a.ins_h =
                      ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + 1]) &
                      a.hash_mask);
              else
                (d = F._tr_tally(a, 0, a.window[a.strstart])),
                  a.lookahead--,
                  a.strstart++;
              if (d && (h(a, !1), 0 === a.strm.avail_out)) return ua;
            }
            return (
              (a.insert = a.strstart < ja - 1 ? a.strstart : ja - 1),
              b === M
                ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? ua
                : va
            );
          }
          function p(a, b) {
            for (var c, d, e; ; ) {
              if (a.lookahead < la) {
                if ((m(a), a.lookahead < la && b === J)) return ua;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= ja &&
                  ((a.ins_h =
                    ((a.ins_h << a.hash_shift) ^
                      a.window[a.strstart + ja - 1]) &
                    a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                (a.prev_length = a.match_length),
                (a.prev_match = a.match_start),
                (a.match_length = ja - 1),
                0 !== c &&
                  a.prev_length < a.max_lazy_match &&
                  a.strstart - c <= a.w_size - la &&
                  ((a.match_length = l(a, c)),
                  a.match_length <= 5 &&
                    (a.strategy === U ||
                      (a.match_length === ja &&
                        a.strstart - a.match_start > 4096)) &&
                    (a.match_length = ja - 1)),
                a.prev_length >= ja && a.match_length <= a.prev_length)
              ) {
                (e = a.strstart + a.lookahead - ja),
                  (d = F._tr_tally(
                    a,
                    a.strstart - 1 - a.prev_match,
                    a.prev_length - ja
                  )),
                  (a.lookahead -= a.prev_length - 1),
                  (a.prev_length -= 2);
                do
                  ++a.strstart <= e &&
                    ((a.ins_h =
                      ((a.ins_h << a.hash_shift) ^
                        a.window[a.strstart + ja - 1]) &
                      a.hash_mask),
                    (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                    (a.head[a.ins_h] = a.strstart));
                while (0 !== --a.prev_length);
                if (
                  ((a.match_available = 0),
                  (a.match_length = ja - 1),
                  a.strstart++,
                  d && (h(a, !1), 0 === a.strm.avail_out))
                )
                  return ua;
              } else if (a.match_available) {
                if (
                  ((d = F._tr_tally(a, 0, a.window[a.strstart - 1])),
                  d && h(a, !1),
                  a.strstart++,
                  a.lookahead--,
                  0 === a.strm.avail_out)
                )
                  return ua;
              } else (a.match_available = 1), a.strstart++, a.lookahead--;
            }
            return (
              a.match_available &&
                ((d = F._tr_tally(a, 0, a.window[a.strstart - 1])),
                (a.match_available = 0)),
              (a.insert = a.strstart < ja - 1 ? a.strstart : ja - 1),
              b === M
                ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? ua
                : va
            );
          }
          function q(a, b) {
            for (var c, d, e, f, g = a.window; ; ) {
              if (a.lookahead <= ka) {
                if ((m(a), a.lookahead <= ka && b === J)) return ua;
                if (0 === a.lookahead) break;
              }
              if (
                ((a.match_length = 0),
                a.lookahead >= ja &&
                  a.strstart > 0 &&
                  ((e = a.strstart - 1),
                  (d = g[e]),
                  d === g[++e] && d === g[++e] && d === g[++e]))
              ) {
                f = a.strstart + ka;
                do;
                while (
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  d === g[++e] &&
                  e < f
                );
                (a.match_length = ka - (f - e)),
                  a.match_length > a.lookahead &&
                    (a.match_length = a.lookahead);
              }
              if (
                (a.match_length >= ja
                  ? ((c = F._tr_tally(a, 1, a.match_length - ja)),
                    (a.lookahead -= a.match_length),
                    (a.strstart += a.match_length),
                    (a.match_length = 0))
                  : ((c = F._tr_tally(a, 0, a.window[a.strstart])),
                    a.lookahead--,
                    a.strstart++),
                c && (h(a, !1), 0 === a.strm.avail_out))
              )
                return ua;
            }
            return (
              (a.insert = 0),
              b === M
                ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? ua
                : va
            );
          }
          function r(a, b) {
            for (var c; ; ) {
              if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
                if (b === J) return ua;
                break;
              }
              if (
                ((a.match_length = 0),
                (c = F._tr_tally(a, 0, a.window[a.strstart])),
                a.lookahead--,
                a.strstart++,
                c && (h(a, !1), 0 === a.strm.avail_out))
              )
                return ua;
            }
            return (
              (a.insert = 0),
              b === M
                ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa)
                : a.last_lit && (h(a, !1), 0 === a.strm.avail_out)
                ? ua
                : va
            );
          }
          function s(a, b, c, d, e) {
            (this.good_length = a),
              (this.max_lazy = b),
              (this.nice_length = c),
              (this.max_chain = d),
              (this.func = e);
          }
          function t(a) {
            (a.window_size = 2 * a.w_size),
              f(a.head),
              (a.max_lazy_match = D[a.level].max_lazy),
              (a.good_match = D[a.level].good_length),
              (a.nice_match = D[a.level].nice_length),
              (a.max_chain_length = D[a.level].max_chain),
              (a.strstart = 0),
              (a.block_start = 0),
              (a.lookahead = 0),
              (a.insert = 0),
              (a.match_length = a.prev_length = ja - 1),
              (a.match_available = 0),
              (a.ins_h = 0);
          }
          function u() {
            (this.strm = null),
              (this.status = 0),
              (this.pending_buf = null),
              (this.pending_buf_size = 0),
              (this.pending_out = 0),
              (this.pending = 0),
              (this.wrap = 0),
              (this.gzhead = null),
              (this.gzindex = 0),
              (this.method = $),
              (this.last_flush = -1),
              (this.w_size = 0),
              (this.w_bits = 0),
              (this.w_mask = 0),
              (this.window = null),
              (this.window_size = 0),
              (this.prev = null),
              (this.head = null),
              (this.ins_h = 0),
              (this.hash_size = 0),
              (this.hash_bits = 0),
              (this.hash_mask = 0),
              (this.hash_shift = 0),
              (this.block_start = 0),
              (this.match_length = 0),
              (this.prev_match = 0),
              (this.match_available = 0),
              (this.strstart = 0),
              (this.match_start = 0),
              (this.lookahead = 0),
              (this.prev_length = 0),
              (this.max_chain_length = 0),
              (this.max_lazy_match = 0),
              (this.level = 0),
              (this.strategy = 0),
              (this.good_match = 0),
              (this.nice_match = 0),
              (this.dyn_ltree = new E.Buf16(2 * ha)),
              (this.dyn_dtree = new E.Buf16(2 * (2 * fa + 1))),
              (this.bl_tree = new E.Buf16(2 * (2 * ga + 1))),
              f(this.dyn_ltree),
              f(this.dyn_dtree),
              f(this.bl_tree),
              (this.l_desc = null),
              (this.d_desc = null),
              (this.bl_desc = null),
              (this.bl_count = new E.Buf16(ia + 1)),
              (this.heap = new E.Buf16(2 * ea + 1)),
              f(this.heap),
              (this.heap_len = 0),
              (this.heap_max = 0),
              (this.depth = new E.Buf16(2 * ea + 1)),
              f(this.depth),
              (this.l_buf = 0),
              (this.lit_bufsize = 0),
              (this.last_lit = 0),
              (this.d_buf = 0),
              (this.opt_len = 0),
              (this.static_len = 0),
              (this.matches = 0),
              (this.insert = 0),
              (this.bi_buf = 0),
              (this.bi_valid = 0);
          }
          function v(a) {
            var b;
            return a && a.state
              ? ((a.total_in = a.total_out = 0),
                (a.data_type = Z),
                (b = a.state),
                (b.pending = 0),
                (b.pending_out = 0),
                b.wrap < 0 && (b.wrap = -b.wrap),
                (b.status = b.wrap ? na : sa),
                (a.adler = 2 === b.wrap ? 0 : 1),
                (b.last_flush = J),
                F._tr_init(b),
                O)
              : d(a, Q);
          }
          function w(a) {
            var b = v(a);
            return b === O && t(a.state), b;
          }
          function x(a, b) {
            return a && a.state
              ? 2 !== a.state.wrap
                ? Q
                : ((a.state.gzhead = b), O)
              : Q;
          }
          function y(a, b, c, e, f, g) {
            if (!a) return Q;
            var h = 1;
            if (
              (b === T && (b = 6),
              e < 0 ? ((h = 0), (e = -e)) : e > 15 && ((h = 2), (e -= 16)),
              f < 1 ||
                f > _ ||
                c !== $ ||
                e < 8 ||
                e > 15 ||
                b < 0 ||
                b > 9 ||
                g < 0 ||
                g > X)
            )
              return d(a, Q);
            8 === e && (e = 9);
            var i = new u();
            return (
              (a.state = i),
              (i.strm = a),
              (i.wrap = h),
              (i.gzhead = null),
              (i.w_bits = e),
              (i.w_size = 1 << i.w_bits),
              (i.w_mask = i.w_size - 1),
              (i.hash_bits = f + 7),
              (i.hash_size = 1 << i.hash_bits),
              (i.hash_mask = i.hash_size - 1),
              (i.hash_shift = ~~((i.hash_bits + ja - 1) / ja)),
              (i.window = new E.Buf8(2 * i.w_size)),
              (i.head = new E.Buf16(i.hash_size)),
              (i.prev = new E.Buf16(i.w_size)),
              (i.lit_bufsize = 1 << (f + 6)),
              (i.pending_buf_size = 4 * i.lit_bufsize),
              (i.pending_buf = new E.Buf8(i.pending_buf_size)),
              (i.d_buf = 1 * i.lit_bufsize),
              (i.l_buf = 3 * i.lit_bufsize),
              (i.level = b),
              (i.strategy = g),
              (i.method = c),
              w(a)
            );
          }
          function z(a, b) {
            return y(a, b, $, aa, ba, Y);
          }
          function A(a, b) {
            var c, h, k, l;
            if (!a || !a.state || b > N || b < 0) return a ? d(a, Q) : Q;
            if (
              ((h = a.state),
              !a.output ||
                (!a.input && 0 !== a.avail_in) ||
                (h.status === ta && b !== M))
            )
              return d(a, 0 === a.avail_out ? S : Q);
            if (
              ((h.strm = a),
              (c = h.last_flush),
              (h.last_flush = b),
              h.status === na)
            )
              if (2 === h.wrap)
                (a.adler = 0),
                  i(h, 31),
                  i(h, 139),
                  i(h, 8),
                  h.gzhead
                    ? (i(
                        h,
                        (h.gzhead.text ? 1 : 0) +
                          (h.gzhead.hcrc ? 2 : 0) +
                          (h.gzhead.extra ? 4 : 0) +
                          (h.gzhead.name ? 8 : 0) +
                          (h.gzhead.comment ? 16 : 0)
                      ),
                      i(h, 255 & h.gzhead.time),
                      i(h, (h.gzhead.time >> 8) & 255),
                      i(h, (h.gzhead.time >> 16) & 255),
                      i(h, (h.gzhead.time >> 24) & 255),
                      i(
                        h,
                        9 === h.level
                          ? 2
                          : h.strategy >= V || h.level < 2
                          ? 4
                          : 0
                      ),
                      i(h, 255 & h.gzhead.os),
                      h.gzhead.extra &&
                        h.gzhead.extra.length &&
                        (i(h, 255 & h.gzhead.extra.length),
                        i(h, (h.gzhead.extra.length >> 8) & 255)),
                      h.gzhead.hcrc &&
                        (a.adler = H(a.adler, h.pending_buf, h.pending, 0)),
                      (h.gzindex = 0),
                      (h.status = oa))
                    : (i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(
                        h,
                        9 === h.level
                          ? 2
                          : h.strategy >= V || h.level < 2
                          ? 4
                          : 0
                      ),
                      i(h, ya),
                      (h.status = sa));
              else {
                var m = ($ + ((h.w_bits - 8) << 4)) << 8,
                  n = -1;
                (n =
                  h.strategy >= V || h.level < 2
                    ? 0
                    : h.level < 6
                    ? 1
                    : 6 === h.level
                    ? 2
                    : 3),
                  (m |= n << 6),
                  0 !== h.strstart && (m |= ma),
                  (m += 31 - (m % 31)),
                  (h.status = sa),
                  j(h, m),
                  0 !== h.strstart &&
                    (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                  (a.adler = 1);
              }
            if (h.status === oa)
              if (h.gzhead.extra) {
                for (
                  k = h.pending;
                  h.gzindex < (65535 & h.gzhead.extra.length) &&
                  (h.pending !== h.pending_buf_size ||
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending !== h.pending_buf_size));

                )
                  i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                  h.gzindex === h.gzhead.extra.length &&
                    ((h.gzindex = 0), (h.status = pa));
              } else h.status = pa;
            if (h.status === pa)
              if (h.gzhead.name) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l =
                    h.gzindex < h.gzhead.name.length
                      ? 255 & h.gzhead.name.charCodeAt(h.gzindex++)
                      : 0),
                    i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                  0 === l && ((h.gzindex = 0), (h.status = qa));
              } else h.status = qa;
            if (h.status === qa)
              if (h.gzhead.comment) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc &&
                      h.pending > k &&
                      (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l =
                    h.gzindex < h.gzhead.comment.length
                      ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++)
                      : 0),
                    i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc &&
                  h.pending > k &&
                  (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)),
                  0 === l && (h.status = ra);
              } else h.status = ra;
            if (
              (h.status === ra &&
                (h.gzhead.hcrc
                  ? (h.pending + 2 > h.pending_buf_size && g(a),
                    h.pending + 2 <= h.pending_buf_size &&
                      (i(h, 255 & a.adler),
                      i(h, (a.adler >> 8) & 255),
                      (a.adler = 0),
                      (h.status = sa)))
                  : (h.status = sa)),
              0 !== h.pending)
            ) {
              if ((g(a), 0 === a.avail_out)) return (h.last_flush = -1), O;
            } else if (0 === a.avail_in && e(b) <= e(c) && b !== M)
              return d(a, S);
            if (h.status === ta && 0 !== a.avail_in) return d(a, S);
            if (
              0 !== a.avail_in ||
              0 !== h.lookahead ||
              (b !== J && h.status !== ta)
            ) {
              var o =
                h.strategy === V
                  ? r(h, b)
                  : h.strategy === W
                  ? q(h, b)
                  : D[h.level].func(h, b);
              if (
                ((o !== wa && o !== xa) || (h.status = ta),
                o === ua || o === wa)
              )
                return 0 === a.avail_out && (h.last_flush = -1), O;
              if (
                o === va &&
                (b === K
                  ? F._tr_align(h)
                  : b !== N &&
                    (F._tr_stored_block(h, 0, 0, !1),
                    b === L &&
                      (f(h.head),
                      0 === h.lookahead &&
                        ((h.strstart = 0),
                        (h.block_start = 0),
                        (h.insert = 0)))),
                g(a),
                0 === a.avail_out)
              )
                return (h.last_flush = -1), O;
            }
            return b !== M
              ? O
              : h.wrap <= 0
              ? P
              : (2 === h.wrap
                  ? (i(h, 255 & a.adler),
                    i(h, (a.adler >> 8) & 255),
                    i(h, (a.adler >> 16) & 255),
                    i(h, (a.adler >> 24) & 255),
                    i(h, 255 & a.total_in),
                    i(h, (a.total_in >> 8) & 255),
                    i(h, (a.total_in >> 16) & 255),
                    i(h, (a.total_in >> 24) & 255))
                  : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                g(a),
                h.wrap > 0 && (h.wrap = -h.wrap),
                0 !== h.pending ? O : P);
          }
          function B(a) {
            var b;
            return a && a.state
              ? ((b = a.state.status),
                b !== na &&
                b !== oa &&
                b !== pa &&
                b !== qa &&
                b !== ra &&
                b !== sa &&
                b !== ta
                  ? d(a, Q)
                  : ((a.state = null), b === sa ? d(a, R) : O))
              : Q;
          }
          function C(a, b) {
            var c,
              d,
              e,
              g,
              h,
              i,
              j,
              k,
              l = b.length;
            if (!a || !a.state) return Q;
            if (
              ((c = a.state),
              (g = c.wrap),
              2 === g || (1 === g && c.status !== na) || c.lookahead)
            )
              return Q;
            for (
              1 === g && (a.adler = G(a.adler, b, l, 0)),
                c.wrap = 0,
                l >= c.w_size &&
                  (0 === g &&
                    (f(c.head),
                    (c.strstart = 0),
                    (c.block_start = 0),
                    (c.insert = 0)),
                  (k = new E.Buf8(c.w_size)),
                  E.arraySet(k, b, l - c.w_size, c.w_size, 0),
                  (b = k),
                  (l = c.w_size)),
                h = a.avail_in,
                i = a.next_in,
                j = a.input,
                a.avail_in = l,
                a.next_in = 0,
                a.input = b,
                m(c);
              c.lookahead >= ja;

            ) {
              (d = c.strstart), (e = c.lookahead - (ja - 1));
              do
                (c.ins_h =
                  ((c.ins_h << c.hash_shift) ^ c.window[d + ja - 1]) &
                  c.hash_mask),
                  (c.prev[d & c.w_mask] = c.head[c.ins_h]),
                  (c.head[c.ins_h] = d),
                  d++;
              while (--e);
              (c.strstart = d), (c.lookahead = ja - 1), m(c);
            }
            return (
              (c.strstart += c.lookahead),
              (c.block_start = c.strstart),
              (c.insert = c.lookahead),
              (c.lookahead = 0),
              (c.match_length = c.prev_length = ja - 1),
              (c.match_available = 0),
              (a.next_in = i),
              (a.input = j),
              (a.avail_in = h),
              (c.wrap = g),
              O
            );
          }
          var D,
            E = a("../utils/common"),
            F = a("./trees"),
            G = a("./adler32"),
            H = a("./crc32"),
            I = a("./messages"),
            J = 0,
            K = 1,
            L = 3,
            M = 4,
            N = 5,
            O = 0,
            P = 1,
            Q = -2,
            R = -3,
            S = -5,
            T = -1,
            U = 1,
            V = 2,
            W = 3,
            X = 4,
            Y = 0,
            Z = 2,
            $ = 8,
            _ = 9,
            aa = 15,
            ba = 8,
            ca = 29,
            da = 256,
            ea = da + 1 + ca,
            fa = 30,
            ga = 19,
            ha = 2 * ea + 1,
            ia = 15,
            ja = 3,
            ka = 258,
            la = ka + ja + 1,
            ma = 32,
            na = 42,
            oa = 69,
            pa = 73,
            qa = 91,
            ra = 103,
            sa = 113,
            ta = 666,
            ua = 1,
            va = 2,
            wa = 3,
            xa = 4,
            ya = 3;
          (D = [
            new s(0, 0, 0, 0, n),
            new s(4, 4, 8, 4, o),
            new s(4, 5, 16, 8, o),
            new s(4, 6, 32, 32, o),
            new s(4, 4, 16, 16, p),
            new s(8, 16, 32, 32, p),
            new s(8, 16, 128, 128, p),
            new s(8, 32, 128, 256, p),
            new s(32, 128, 258, 1024, p),
            new s(32, 258, 258, 4096, p),
          ]),
            (c.deflateInit = z),
            (c.deflateInit2 = y),
            (c.deflateReset = w),
            (c.deflateResetKeep = v),
            (c.deflateSetHeader = x),
            (c.deflate = A),
            (c.deflateEnd = B),
            (c.deflateSetDictionary = C),
            (c.deflateInfo = "pako deflate (from Nodeca project)");
        },
        {
          "../utils/common": 62,
          "./adler32": 64,
          "./crc32": 66,
          "./messages": 72,
          "./trees": 73,
        },
      ],
      68: [
        function (a, b, c) {
          "use strict";
          function d() {
            (this.text = 0),
              (this.time = 0),
              (this.xflags = 0),
              (this.os = 0),
              (this.extra = null),
              (this.extra_len = 0),
              (this.name = ""),
              (this.comment = ""),
              (this.hcrc = 0),
              (this.done = !1);
          }
          b.exports = d;
        },
        {},
      ],
      69: [
        function (a, b, c) {
          "use strict";
          var d = 30,
            e = 12;
          b.exports = function (a, b) {
            var c,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C;
            (c = a.state),
              (f = a.next_in),
              (B = a.input),
              (g = f + (a.avail_in - 5)),
              (h = a.next_out),
              (C = a.output),
              (i = h - (b - a.avail_out)),
              (j = h + (a.avail_out - 257)),
              (k = c.dmax),
              (l = c.wsize),
              (m = c.whave),
              (n = c.wnext),
              (o = c.window),
              (p = c.hold),
              (q = c.bits),
              (r = c.lencode),
              (s = c.distcode),
              (t = (1 << c.lenbits) - 1),
              (u = (1 << c.distbits) - 1);
            a: do {
              q < 15 &&
                ((p += B[f++] << q), (q += 8), (p += B[f++] << q), (q += 8)),
                (v = r[p & t]);
              b: for (;;) {
                if (
                  ((w = v >>> 24),
                  (p >>>= w),
                  (q -= w),
                  (w = (v >>> 16) & 255),
                  0 === w)
                )
                  C[h++] = 65535 & v;
                else {
                  if (!(16 & w)) {
                    if (0 === (64 & w)) {
                      v = r[(65535 & v) + (p & ((1 << w) - 1))];
                      continue b;
                    }
                    if (32 & w) {
                      c.mode = e;
                      break a;
                    }
                    (a.msg = "invalid literal/length code"), (c.mode = d);
                    break a;
                  }
                  (x = 65535 & v),
                    (w &= 15),
                    w &&
                      (q < w && ((p += B[f++] << q), (q += 8)),
                      (x += p & ((1 << w) - 1)),
                      (p >>>= w),
                      (q -= w)),
                    q < 15 &&
                      ((p += B[f++] << q),
                      (q += 8),
                      (p += B[f++] << q),
                      (q += 8)),
                    (v = s[p & u]);
                  c: for (;;) {
                    if (
                      ((w = v >>> 24),
                      (p >>>= w),
                      (q -= w),
                      (w = (v >>> 16) & 255),
                      !(16 & w))
                    ) {
                      if (0 === (64 & w)) {
                        v = s[(65535 & v) + (p & ((1 << w) - 1))];
                        continue c;
                      }
                      (a.msg = "invalid distance code"), (c.mode = d);
                      break a;
                    }
                    if (
                      ((y = 65535 & v),
                      (w &= 15),
                      q < w &&
                        ((p += B[f++] << q),
                        (q += 8),
                        q < w && ((p += B[f++] << q), (q += 8))),
                      (y += p & ((1 << w) - 1)),
                      y > k)
                    ) {
                      (a.msg = "invalid distance too far back"), (c.mode = d);
                      break a;
                    }
                    if (((p >>>= w), (q -= w), (w = h - i), y > w)) {
                      if (((w = y - w), w > m && c.sane)) {
                        (a.msg = "invalid distance too far back"), (c.mode = d);
                        break a;
                      }
                      if (((z = 0), (A = o), 0 === n)) {
                        if (((z += l - w), w < x)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          (z = h - y), (A = C);
                        }
                      } else if (n < w) {
                        if (((z += l + n - w), (w -= n), w < x)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          if (((z = 0), n < x)) {
                            (w = n), (x -= w);
                            do C[h++] = o[z++];
                            while (--w);
                            (z = h - y), (A = C);
                          }
                        }
                      } else if (((z += n - w), w < x)) {
                        x -= w;
                        do C[h++] = o[z++];
                        while (--w);
                        (z = h - y), (A = C);
                      }
                      for (; x > 2; )
                        (C[h++] = A[z++]),
                          (C[h++] = A[z++]),
                          (C[h++] = A[z++]),
                          (x -= 3);
                      x && ((C[h++] = A[z++]), x > 1 && (C[h++] = A[z++]));
                    } else {
                      z = h - y;
                      do
                        (C[h++] = C[z++]),
                          (C[h++] = C[z++]),
                          (C[h++] = C[z++]),
                          (x -= 3);
                      while (x > 2);
                      x && ((C[h++] = C[z++]), x > 1 && (C[h++] = C[z++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (f < g && h < j);
            (x = q >> 3),
              (f -= x),
              (q -= x << 3),
              (p &= (1 << q) - 1),
              (a.next_in = f),
              (a.next_out = h),
              (a.avail_in = f < g ? 5 + (g - f) : 5 - (f - g)),
              (a.avail_out = h < j ? 257 + (j - h) : 257 - (h - j)),
              (c.hold = p),
              (c.bits = q);
          };
        },
        {},
      ],
      70: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            return (
              ((a >>> 24) & 255) +
              ((a >>> 8) & 65280) +
              ((65280 & a) << 8) +
              ((255 & a) << 24)
            );
          }
          function e() {
            (this.mode = 0),
              (this.last = !1),
              (this.wrap = 0),
              (this.havedict = !1),
              (this.flags = 0),
              (this.dmax = 0),
              (this.check = 0),
              (this.total = 0),
              (this.head = null),
              (this.wbits = 0),
              (this.wsize = 0),
              (this.whave = 0),
              (this.wnext = 0),
              (this.window = null),
              (this.hold = 0),
              (this.bits = 0),
              (this.length = 0),
              (this.offset = 0),
              (this.extra = 0),
              (this.lencode = null),
              (this.distcode = null),
              (this.lenbits = 0),
              (this.distbits = 0),
              (this.ncode = 0),
              (this.nlen = 0),
              (this.ndist = 0),
              (this.have = 0),
              (this.next = null),
              (this.lens = new s.Buf16(320)),
              (this.work = new s.Buf16(288)),
              (this.lendyn = null),
              (this.distdyn = null),
              (this.sane = 0),
              (this.back = 0),
              (this.was = 0);
          }
          function f(a) {
            var b;
            return a && a.state
              ? ((b = a.state),
                (a.total_in = a.total_out = b.total = 0),
                (a.msg = ""),
                b.wrap && (a.adler = 1 & b.wrap),
                (b.mode = L),
                (b.last = 0),
                (b.havedict = 0),
                (b.dmax = 32768),
                (b.head = null),
                (b.hold = 0),
                (b.bits = 0),
                (b.lencode = b.lendyn = new s.Buf32(pa)),
                (b.distcode = b.distdyn = new s.Buf32(qa)),
                (b.sane = 1),
                (b.back = -1),
                D)
              : G;
          }
          function g(a) {
            var b;
            return a && a.state
              ? ((b = a.state),
                (b.wsize = 0),
                (b.whave = 0),
                (b.wnext = 0),
                f(a))
              : G;
          }
          function h(a, b) {
            var c, d;
            return a && a.state
              ? ((d = a.state),
                b < 0
                  ? ((c = 0), (b = -b))
                  : ((c = (b >> 4) + 1), b < 48 && (b &= 15)),
                b && (b < 8 || b > 15)
                  ? G
                  : (null !== d.window && d.wbits !== b && (d.window = null),
                    (d.wrap = c),
                    (d.wbits = b),
                    g(a)))
              : G;
          }
          function i(a, b) {
            var c, d;
            return a
              ? ((d = new e()),
                (a.state = d),
                (d.window = null),
                (c = h(a, b)),
                c !== D && (a.state = null),
                c)
              : G;
          }
          function j(a) {
            return i(a, sa);
          }
          function k(a) {
            if (ta) {
              var b;
              for (q = new s.Buf32(512), r = new s.Buf32(32), b = 0; b < 144; )
                a.lens[b++] = 8;
              for (; b < 256; ) a.lens[b++] = 9;
              for (; b < 280; ) a.lens[b++] = 7;
              for (; b < 288; ) a.lens[b++] = 8;
              for (
                w(y, a.lens, 0, 288, q, 0, a.work, { bits: 9 }), b = 0;
                b < 32;

              )
                a.lens[b++] = 5;
              w(z, a.lens, 0, 32, r, 0, a.work, { bits: 5 }), (ta = !1);
            }
            (a.lencode = q),
              (a.lenbits = 9),
              (a.distcode = r),
              (a.distbits = 5);
          }
          function l(a, b, c, d) {
            var e,
              f = a.state;
            return (
              null === f.window &&
                ((f.wsize = 1 << f.wbits),
                (f.wnext = 0),
                (f.whave = 0),
                (f.window = new s.Buf8(f.wsize))),
              d >= f.wsize
                ? (s.arraySet(f.window, b, c - f.wsize, f.wsize, 0),
                  (f.wnext = 0),
                  (f.whave = f.wsize))
                : ((e = f.wsize - f.wnext),
                  e > d && (e = d),
                  s.arraySet(f.window, b, c - d, e, f.wnext),
                  (d -= e),
                  d
                    ? (s.arraySet(f.window, b, c - d, d, 0),
                      (f.wnext = d),
                      (f.whave = f.wsize))
                    : ((f.wnext += e),
                      f.wnext === f.wsize && (f.wnext = 0),
                      f.whave < f.wsize && (f.whave += e))),
              0
            );
          }
          function m(a, b) {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              m,
              n,
              o,
              p,
              q,
              r,
              pa,
              qa,
              ra,
              sa,
              ta,
              ua,
              va,
              wa,
              xa,
              ya,
              za,
              Aa = 0,
              Ba = new s.Buf8(4),
              Ca = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ];
            if (!a || !a.state || !a.output || (!a.input && 0 !== a.avail_in))
              return G;
            (c = a.state),
              c.mode === W && (c.mode = X),
              (h = a.next_out),
              (f = a.output),
              (j = a.avail_out),
              (g = a.next_in),
              (e = a.input),
              (i = a.avail_in),
              (m = c.hold),
              (n = c.bits),
              (o = i),
              (p = j),
              (xa = D);
            a: for (;;)
              switch (c.mode) {
                case L:
                  if (0 === c.wrap) {
                    c.mode = X;
                    break;
                  }
                  for (; n < 16; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (2 & c.wrap && 35615 === m) {
                    (c.check = 0),
                      (Ba[0] = 255 & m),
                      (Ba[1] = (m >>> 8) & 255),
                      (c.check = u(c.check, Ba, 2, 0)),
                      (m = 0),
                      (n = 0),
                      (c.mode = M);
                    break;
                  }
                  if (
                    ((c.flags = 0),
                    c.head && (c.head.done = !1),
                    !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31)
                  ) {
                    (a.msg = "incorrect header check"), (c.mode = ma);
                    break;
                  }
                  if ((15 & m) !== K) {
                    (a.msg = "unknown compression method"), (c.mode = ma);
                    break;
                  }
                  if (
                    ((m >>>= 4), (n -= 4), (wa = (15 & m) + 8), 0 === c.wbits)
                  )
                    c.wbits = wa;
                  else if (wa > c.wbits) {
                    (a.msg = "invalid window size"), (c.mode = ma);
                    break;
                  }
                  (c.dmax = 1 << wa),
                    (a.adler = c.check = 1),
                    (c.mode = 512 & m ? U : W),
                    (m = 0),
                    (n = 0);
                  break;
                case M:
                  for (; n < 16; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (((c.flags = m), (255 & c.flags) !== K)) {
                    (a.msg = "unknown compression method"), (c.mode = ma);
                    break;
                  }
                  if (57344 & c.flags) {
                    (a.msg = "unknown header flags set"), (c.mode = ma);
                    break;
                  }
                  c.head && (c.head.text = (m >> 8) & 1),
                    512 & c.flags &&
                      ((Ba[0] = 255 & m),
                      (Ba[1] = (m >>> 8) & 255),
                      (c.check = u(c.check, Ba, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = N);
                case N:
                  for (; n < 32; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && (c.head.time = m),
                    512 & c.flags &&
                      ((Ba[0] = 255 & m),
                      (Ba[1] = (m >>> 8) & 255),
                      (Ba[2] = (m >>> 16) & 255),
                      (Ba[3] = (m >>> 24) & 255),
                      (c.check = u(c.check, Ba, 4, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = O);
                case O:
                  for (; n < 16; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && ((c.head.xflags = 255 & m), (c.head.os = m >> 8)),
                    512 & c.flags &&
                      ((Ba[0] = 255 & m),
                      (Ba[1] = (m >>> 8) & 255),
                      (c.check = u(c.check, Ba, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = P);
                case P:
                  if (1024 & c.flags) {
                    for (; n < 16; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length = m),
                      c.head && (c.head.extra_len = m),
                      512 & c.flags &&
                        ((Ba[0] = 255 & m),
                        (Ba[1] = (m >>> 8) & 255),
                        (c.check = u(c.check, Ba, 2, 0))),
                      (m = 0),
                      (n = 0);
                  } else c.head && (c.head.extra = null);
                  c.mode = Q;
                case Q:
                  if (
                    1024 & c.flags &&
                    ((q = c.length),
                    q > i && (q = i),
                    q &&
                      (c.head &&
                        ((wa = c.head.extra_len - c.length),
                        c.head.extra ||
                          (c.head.extra = new Array(c.head.extra_len)),
                        s.arraySet(c.head.extra, e, g, q, wa)),
                      512 & c.flags && (c.check = u(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      (c.length -= q)),
                    c.length)
                  )
                    break a;
                  (c.length = 0), (c.mode = R);
                case R:
                  if (2048 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do
                      (wa = e[g + q++]),
                        c.head &&
                          wa &&
                          c.length < 65536 &&
                          (c.head.name += String.fromCharCode(wa));
                    while (wa && q < i);
                    if (
                      (512 & c.flags && (c.check = u(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      wa)
                    )
                      break a;
                  } else c.head && (c.head.name = null);
                  (c.length = 0), (c.mode = S);
                case S:
                  if (4096 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do
                      (wa = e[g + q++]),
                        c.head &&
                          wa &&
                          c.length < 65536 &&
                          (c.head.comment += String.fromCharCode(wa));
                    while (wa && q < i);
                    if (
                      (512 & c.flags && (c.check = u(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      wa)
                    )
                      break a;
                  } else c.head && (c.head.comment = null);
                  c.mode = T;
                case T:
                  if (512 & c.flags) {
                    for (; n < 16; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (65535 & c.check)) {
                      (a.msg = "header crc mismatch"), (c.mode = ma);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.head &&
                    ((c.head.hcrc = (c.flags >> 9) & 1), (c.head.done = !0)),
                    (a.adler = c.check = 0),
                    (c.mode = W);
                  break;
                case U:
                  for (; n < 32; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  (a.adler = c.check = d(m)), (m = 0), (n = 0), (c.mode = V);
                case V:
                  if (0 === c.havedict)
                    return (
                      (a.next_out = h),
                      (a.avail_out = j),
                      (a.next_in = g),
                      (a.avail_in = i),
                      (c.hold = m),
                      (c.bits = n),
                      F
                    );
                  (a.adler = c.check = 1), (c.mode = W);
                case W:
                  if (b === B || b === C) break a;
                case X:
                  if (c.last) {
                    (m >>>= 7 & n), (n -= 7 & n), (c.mode = ja);
                    break;
                  }
                  for (; n < 3; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  switch (((c.last = 1 & m), (m >>>= 1), (n -= 1), 3 & m)) {
                    case 0:
                      c.mode = Y;
                      break;
                    case 1:
                      if ((k(c), (c.mode = ca), b === C)) {
                        (m >>>= 2), (n -= 2);
                        break a;
                      }
                      break;
                    case 2:
                      c.mode = _;
                      break;
                    case 3:
                      (a.msg = "invalid block type"), (c.mode = ma);
                  }
                  (m >>>= 2), (n -= 2);
                  break;
                case Y:
                  for (m >>>= 7 & n, n -= 7 & n; n < 32; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if ((65535 & m) !== ((m >>> 16) ^ 65535)) {
                    (a.msg = "invalid stored block lengths"), (c.mode = ma);
                    break;
                  }
                  if (
                    ((c.length = 65535 & m),
                    (m = 0),
                    (n = 0),
                    (c.mode = Z),
                    b === C)
                  )
                    break a;
                case Z:
                  c.mode = $;
                case $:
                  if ((q = c.length)) {
                    if ((q > i && (q = i), q > j && (q = j), 0 === q)) break a;
                    s.arraySet(f, e, g, q, h),
                      (i -= q),
                      (g += q),
                      (j -= q),
                      (h += q),
                      (c.length -= q);
                    break;
                  }
                  c.mode = W;
                  break;
                case _:
                  for (; n < 14; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (
                    ((c.nlen = (31 & m) + 257),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ndist = (31 & m) + 1),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ncode = (15 & m) + 4),
                    (m >>>= 4),
                    (n -= 4),
                    c.nlen > 286 || c.ndist > 30)
                  ) {
                    (a.msg = "too many length or distance symbols"),
                      (c.mode = ma);
                    break;
                  }
                  (c.have = 0), (c.mode = aa);
                case aa:
                  for (; c.have < c.ncode; ) {
                    for (; n < 3; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.lens[Ca[c.have++]] = 7 & m), (m >>>= 3), (n -= 3);
                  }
                  for (; c.have < 19; ) c.lens[Ca[c.have++]] = 0;
                  if (
                    ((c.lencode = c.lendyn),
                    (c.lenbits = 7),
                    (ya = { bits: c.lenbits }),
                    (xa = w(x, c.lens, 0, 19, c.lencode, 0, c.work, ya)),
                    (c.lenbits = ya.bits),
                    xa)
                  ) {
                    (a.msg = "invalid code lengths set"), (c.mode = ma);
                    break;
                  }
                  (c.have = 0), (c.mode = ba);
                case ba:
                  for (; c.have < c.nlen + c.ndist; ) {
                    for (
                      ;
                      (Aa = c.lencode[m & ((1 << c.lenbits) - 1)]),
                        (qa = Aa >>> 24),
                        (ra = (Aa >>> 16) & 255),
                        (sa = 65535 & Aa),
                        !(qa <= n);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (sa < 16)
                      (m >>>= qa), (n -= qa), (c.lens[c.have++] = sa);
                    else {
                      if (16 === sa) {
                        for (za = qa + 2; n < za; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        if (((m >>>= qa), (n -= qa), 0 === c.have)) {
                          (a.msg = "invalid bit length repeat"), (c.mode = ma);
                          break;
                        }
                        (wa = c.lens[c.have - 1]),
                          (q = 3 + (3 & m)),
                          (m >>>= 2),
                          (n -= 2);
                      } else if (17 === sa) {
                        for (za = qa + 3; n < za; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qa),
                          (n -= qa),
                          (wa = 0),
                          (q = 3 + (7 & m)),
                          (m >>>= 3),
                          (n -= 3);
                      } else {
                        for (za = qa + 7; n < za; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qa),
                          (n -= qa),
                          (wa = 0),
                          (q = 11 + (127 & m)),
                          (m >>>= 7),
                          (n -= 7);
                      }
                      if (c.have + q > c.nlen + c.ndist) {
                        (a.msg = "invalid bit length repeat"), (c.mode = ma);
                        break;
                      }
                      for (; q--; ) c.lens[c.have++] = wa;
                    }
                  }
                  if (c.mode === ma) break;
                  if (0 === c.lens[256]) {
                    (a.msg = "invalid code -- missing end-of-block"),
                      (c.mode = ma);
                    break;
                  }
                  if (
                    ((c.lenbits = 9),
                    (ya = { bits: c.lenbits }),
                    (xa = w(y, c.lens, 0, c.nlen, c.lencode, 0, c.work, ya)),
                    (c.lenbits = ya.bits),
                    xa)
                  ) {
                    (a.msg = "invalid literal/lengths set"), (c.mode = ma);
                    break;
                  }
                  if (
                    ((c.distbits = 6),
                    (c.distcode = c.distdyn),
                    (ya = { bits: c.distbits }),
                    (xa = w(
                      z,
                      c.lens,
                      c.nlen,
                      c.ndist,
                      c.distcode,
                      0,
                      c.work,
                      ya
                    )),
                    (c.distbits = ya.bits),
                    xa)
                  ) {
                    (a.msg = "invalid distances set"), (c.mode = ma);
                    break;
                  }
                  if (((c.mode = ca), b === C)) break a;
                case ca:
                  c.mode = da;
                case da:
                  if (i >= 6 && j >= 258) {
                    (a.next_out = h),
                      (a.avail_out = j),
                      (a.next_in = g),
                      (a.avail_in = i),
                      (c.hold = m),
                      (c.bits = n),
                      v(a, p),
                      (h = a.next_out),
                      (f = a.output),
                      (j = a.avail_out),
                      (g = a.next_in),
                      (e = a.input),
                      (i = a.avail_in),
                      (m = c.hold),
                      (n = c.bits),
                      c.mode === W && (c.back = -1);
                    break;
                  }
                  for (
                    c.back = 0;
                    (Aa = c.lencode[m & ((1 << c.lenbits) - 1)]),
                      (qa = Aa >>> 24),
                      (ra = (Aa >>> 16) & 255),
                      (sa = 65535 & Aa),
                      !(qa <= n);

                  ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (ra && 0 === (240 & ra)) {
                    for (
                      ta = qa, ua = ra, va = sa;
                      (Aa =
                        c.lencode[va + ((m & ((1 << (ta + ua)) - 1)) >> ta)]),
                        (qa = Aa >>> 24),
                        (ra = (Aa >>> 16) & 255),
                        (sa = 65535 & Aa),
                        !(ta + qa <= n);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= ta), (n -= ta), (c.back += ta);
                  }
                  if (
                    ((m >>>= qa),
                    (n -= qa),
                    (c.back += qa),
                    (c.length = sa),
                    0 === ra)
                  ) {
                    c.mode = ia;
                    break;
                  }
                  if (32 & ra) {
                    (c.back = -1), (c.mode = W);
                    break;
                  }
                  if (64 & ra) {
                    (a.msg = "invalid literal/length code"), (c.mode = ma);
                    break;
                  }
                  (c.extra = 15 & ra), (c.mode = ea);
                case ea:
                  if (c.extra) {
                    for (za = c.extra; n < za; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length += m & ((1 << c.extra) - 1)),
                      (m >>>= c.extra),
                      (n -= c.extra),
                      (c.back += c.extra);
                  }
                  (c.was = c.length), (c.mode = fa);
                case fa:
                  for (
                    ;
                    (Aa = c.distcode[m & ((1 << c.distbits) - 1)]),
                      (qa = Aa >>> 24),
                      (ra = (Aa >>> 16) & 255),
                      (sa = 65535 & Aa),
                      !(qa <= n);

                  ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (0 === (240 & ra)) {
                    for (
                      ta = qa, ua = ra, va = sa;
                      (Aa =
                        c.distcode[va + ((m & ((1 << (ta + ua)) - 1)) >> ta)]),
                        (qa = Aa >>> 24),
                        (ra = (Aa >>> 16) & 255),
                        (sa = 65535 & Aa),
                        !(ta + qa <= n);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= ta), (n -= ta), (c.back += ta);
                  }
                  if (((m >>>= qa), (n -= qa), (c.back += qa), 64 & ra)) {
                    (a.msg = "invalid distance code"), (c.mode = ma);
                    break;
                  }
                  (c.offset = sa), (c.extra = 15 & ra), (c.mode = ga);
                case ga:
                  if (c.extra) {
                    for (za = c.extra; n < za; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.offset += m & ((1 << c.extra) - 1)),
                      (m >>>= c.extra),
                      (n -= c.extra),
                      (c.back += c.extra);
                  }
                  if (c.offset > c.dmax) {
                    (a.msg = "invalid distance too far back"), (c.mode = ma);
                    break;
                  }
                  c.mode = ha;
                case ha:
                  if (0 === j) break a;
                  if (((q = p - j), c.offset > q)) {
                    if (((q = c.offset - q), q > c.whave && c.sane)) {
                      (a.msg = "invalid distance too far back"), (c.mode = ma);
                      break;
                    }
                    q > c.wnext
                      ? ((q -= c.wnext), (r = c.wsize - q))
                      : (r = c.wnext - q),
                      q > c.length && (q = c.length),
                      (pa = c.window);
                  } else (pa = f), (r = h - c.offset), (q = c.length);
                  q > j && (q = j), (j -= q), (c.length -= q);
                  do f[h++] = pa[r++];
                  while (--q);
                  0 === c.length && (c.mode = da);
                  break;
                case ia:
                  if (0 === j) break a;
                  (f[h++] = c.length), j--, (c.mode = da);
                  break;
                case ja:
                  if (c.wrap) {
                    for (; n < 32; ) {
                      if (0 === i) break a;
                      i--, (m |= e[g++] << n), (n += 8);
                    }
                    if (
                      ((p -= j),
                      (a.total_out += p),
                      (c.total += p),
                      p &&
                        (a.adler = c.check =
                          c.flags
                            ? u(c.check, f, p, h - p)
                            : t(c.check, f, p, h - p)),
                      (p = j),
                      (c.flags ? m : d(m)) !== c.check)
                    ) {
                      (a.msg = "incorrect data check"), (c.mode = ma);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = ka;
                case ka:
                  if (c.wrap && c.flags) {
                    for (; n < 32; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (4294967295 & c.total)) {
                      (a.msg = "incorrect length check"), (c.mode = ma);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = la;
                case la:
                  xa = E;
                  break a;
                case ma:
                  xa = H;
                  break a;
                case na:
                  return I;
                case oa:
                default:
                  return G;
              }
            return (
              (a.next_out = h),
              (a.avail_out = j),
              (a.next_in = g),
              (a.avail_in = i),
              (c.hold = m),
              (c.bits = n),
              (c.wsize ||
                (p !== a.avail_out &&
                  c.mode < ma &&
                  (c.mode < ja || b !== A))) &&
              l(a, a.output, a.next_out, p - a.avail_out)
                ? ((c.mode = na), I)
                : ((o -= a.avail_in),
                  (p -= a.avail_out),
                  (a.total_in += o),
                  (a.total_out += p),
                  (c.total += p),
                  c.wrap &&
                    p &&
                    (a.adler = c.check =
                      c.flags
                        ? u(c.check, f, p, a.next_out - p)
                        : t(c.check, f, p, a.next_out - p)),
                  (a.data_type =
                    c.bits +
                    (c.last ? 64 : 0) +
                    (c.mode === W ? 128 : 0) +
                    (c.mode === ca || c.mode === Z ? 256 : 0)),
                  ((0 === o && 0 === p) || b === A) && xa === D && (xa = J),
                  xa)
            );
          }
          function n(a) {
            if (!a || !a.state) return G;
            var b = a.state;
            return b.window && (b.window = null), (a.state = null), D;
          }
          function o(a, b) {
            var c;
            return a && a.state
              ? ((c = a.state),
                0 === (2 & c.wrap) ? G : ((c.head = b), (b.done = !1), D))
              : G;
          }
          function p(a, b) {
            var c,
              d,
              e,
              f = b.length;
            return a && a.state
              ? ((c = a.state),
                0 !== c.wrap && c.mode !== V
                  ? G
                  : c.mode === V &&
                    ((d = 1), (d = t(d, b, f, 0)), d !== c.check)
                  ? H
                  : (e = l(a, b, f, f))
                  ? ((c.mode = na), I)
                  : ((c.havedict = 1), D))
              : G;
          }
          var q,
            r,
            s = a("../utils/common"),
            t = a("./adler32"),
            u = a("./crc32"),
            v = a("./inffast"),
            w = a("./inftrees"),
            x = 0,
            y = 1,
            z = 2,
            A = 4,
            B = 5,
            C = 6,
            D = 0,
            E = 1,
            F = 2,
            G = -2,
            H = -3,
            I = -4,
            J = -5,
            K = 8,
            L = 1,
            M = 2,
            N = 3,
            O = 4,
            P = 5,
            Q = 6,
            R = 7,
            S = 8,
            T = 9,
            U = 10,
            V = 11,
            W = 12,
            X = 13,
            Y = 14,
            Z = 15,
            $ = 16,
            _ = 17,
            aa = 18,
            ba = 19,
            ca = 20,
            da = 21,
            ea = 22,
            fa = 23,
            ga = 24,
            ha = 25,
            ia = 26,
            ja = 27,
            ka = 28,
            la = 29,
            ma = 30,
            na = 31,
            oa = 32,
            pa = 852,
            qa = 592,
            ra = 15,
            sa = ra,
            ta = !0;
          (c.inflateReset = g),
            (c.inflateReset2 = h),
            (c.inflateResetKeep = f),
            (c.inflateInit = j),
            (c.inflateInit2 = i),
            (c.inflate = m),
            (c.inflateEnd = n),
            (c.inflateGetHeader = o),
            (c.inflateSetDictionary = p),
            (c.inflateInfo = "pako inflate (from Nodeca project)");
        },
        {
          "../utils/common": 62,
          "./adler32": 64,
          "./crc32": 66,
          "./inffast": 69,
          "./inftrees": 71,
        },
      ],
      71: [
        function (a, b, c) {
          "use strict";
          var d = a("../utils/common"),
            e = 15,
            f = 852,
            g = 592,
            h = 0,
            i = 1,
            j = 2,
            k = [
              3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
              51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
            ],
            l = [
              16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
              19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
            ],
            m = [
              1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
              385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
              16385, 24577, 0, 0,
            ],
            n = [
              16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
              23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
            ];
          b.exports = function (a, b, c, o, p, q, r, s) {
            var t,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C = s.bits,
              D = 0,
              E = 0,
              F = 0,
              G = 0,
              H = 0,
              I = 0,
              J = 0,
              K = 0,
              L = 0,
              M = 0,
              N = null,
              O = 0,
              P = new d.Buf16(e + 1),
              Q = new d.Buf16(e + 1),
              R = null,
              S = 0;
            for (D = 0; D <= e; D++) P[D] = 0;
            for (E = 0; E < o; E++) P[b[c + E]]++;
            for (H = C, G = e; G >= 1 && 0 === P[G]; G--);
            if ((H > G && (H = G), 0 === G))
              return (p[q++] = 20971520), (p[q++] = 20971520), (s.bits = 1), 0;
            for (F = 1; F < G && 0 === P[F]; F++);
            for (H < F && (H = F), K = 1, D = 1; D <= e; D++)
              if (((K <<= 1), (K -= P[D]), K < 0)) return -1;
            if (K > 0 && (a === h || 1 !== G)) return -1;
            for (Q[1] = 0, D = 1; D < e; D++) Q[D + 1] = Q[D] + P[D];
            for (E = 0; E < o; E++) 0 !== b[c + E] && (r[Q[b[c + E]]++] = E);
            if (
              (a === h
                ? ((N = R = r), (y = 19))
                : a === i
                ? ((N = k), (O -= 257), (R = l), (S -= 257), (y = 256))
                : ((N = m), (R = n), (y = -1)),
              (M = 0),
              (E = 0),
              (D = F),
              (x = q),
              (I = H),
              (J = 0),
              (v = -1),
              (L = 1 << H),
              (w = L - 1),
              (a === i && L > f) || (a === j && L > g))
            )
              return 1;
            for (var T = 0; ; ) {
              T++,
                (z = D - J),
                r[E] < y
                  ? ((A = 0), (B = r[E]))
                  : r[E] > y
                  ? ((A = R[S + r[E]]), (B = N[O + r[E]]))
                  : ((A = 96), (B = 0)),
                (t = 1 << (D - J)),
                (u = 1 << I),
                (F = u);
              do
                (u -= t), (p[x + (M >> J) + u] = (z << 24) | (A << 16) | B | 0);
              while (0 !== u);
              for (t = 1 << (D - 1); M & t; ) t >>= 1;
              if (
                (0 !== t ? ((M &= t - 1), (M += t)) : (M = 0),
                E++,
                0 === --P[D])
              ) {
                if (D === G) break;
                D = b[c + r[E]];
              }
              if (D > H && (M & w) !== v) {
                for (
                  0 === J && (J = H), x += F, I = D - J, K = 1 << I;
                  I + J < G && ((K -= P[I + J]), !(K <= 0));

                )
                  I++, (K <<= 1);
                if (((L += 1 << I), (a === i && L > f) || (a === j && L > g)))
                  return 1;
                (v = M & w), (p[v] = (H << 24) | (I << 16) | (x - q) | 0);
              }
            }
            return (
              0 !== M && (p[x + M] = ((D - J) << 24) | (64 << 16) | 0),
              (s.bits = H),
              0
            );
          };
        },
        { "../utils/common": 62 },
      ],
      72: [
        function (a, b, c) {
          "use strict";
          b.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version",
          };
        },
        {},
      ],
      73: [
        function (a, b, c) {
          "use strict";
          function d(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function e(a, b, c, d, e) {
            (this.static_tree = a),
              (this.extra_bits = b),
              (this.extra_base = c),
              (this.elems = d),
              (this.max_length = e),
              (this.has_stree = a && a.length);
          }
          function f(a, b) {
            (this.dyn_tree = a), (this.max_code = 0), (this.stat_desc = b);
          }
          function g(a) {
            return a < 256 ? ia[a] : ia[256 + (a >>> 7)];
          }
          function h(a, b) {
            (a.pending_buf[a.pending++] = 255 & b),
              (a.pending_buf[a.pending++] = (b >>> 8) & 255);
          }
          function i(a, b, c) {
            a.bi_valid > X - c
              ? ((a.bi_buf |= (b << a.bi_valid) & 65535),
                h(a, a.bi_buf),
                (a.bi_buf = b >> (X - a.bi_valid)),
                (a.bi_valid += c - X))
              : ((a.bi_buf |= (b << a.bi_valid) & 65535), (a.bi_valid += c));
          }
          function j(a, b, c) {
            i(a, c[2 * b], c[2 * b + 1]);
          }
          function k(a, b) {
            var c = 0;
            do (c |= 1 & a), (a >>>= 1), (c <<= 1);
            while (--b > 0);
            return c >>> 1;
          }
          function l(a) {
            16 === a.bi_valid
              ? (h(a, a.bi_buf), (a.bi_buf = 0), (a.bi_valid = 0))
              : a.bi_valid >= 8 &&
                ((a.pending_buf[a.pending++] = 255 & a.bi_buf),
                (a.bi_buf >>= 8),
                (a.bi_valid -= 8));
          }
          function m(a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = b.dyn_tree,
              j = b.max_code,
              k = b.stat_desc.static_tree,
              l = b.stat_desc.has_stree,
              m = b.stat_desc.extra_bits,
              n = b.stat_desc.extra_base,
              o = b.stat_desc.max_length,
              p = 0;
            for (f = 0; f <= W; f++) a.bl_count[f] = 0;
            for (
              i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1;
              c < V;
              c++
            )
              (d = a.heap[c]),
                (f = i[2 * i[2 * d + 1] + 1] + 1),
                f > o && ((f = o), p++),
                (i[2 * d + 1] = f),
                d > j ||
                  (a.bl_count[f]++,
                  (g = 0),
                  d >= n && (g = m[d - n]),
                  (h = i[2 * d]),
                  (a.opt_len += h * (f + g)),
                  l && (a.static_len += h * (k[2 * d + 1] + g)));
            if (0 !== p) {
              do {
                for (f = o - 1; 0 === a.bl_count[f]; ) f--;
                a.bl_count[f]--,
                  (a.bl_count[f + 1] += 2),
                  a.bl_count[o]--,
                  (p -= 2);
              } while (p > 0);
              for (f = o; 0 !== f; f--)
                for (d = a.bl_count[f]; 0 !== d; )
                  (e = a.heap[--c]),
                    e > j ||
                      (i[2 * e + 1] !== f &&
                        ((a.opt_len += (f - i[2 * e + 1]) * i[2 * e]),
                        (i[2 * e + 1] = f)),
                      d--);
            }
          }
          function n(a, b, c) {
            var d,
              e,
              f = new Array(W + 1),
              g = 0;
            for (d = 1; d <= W; d++) f[d] = g = (g + c[d - 1]) << 1;
            for (e = 0; e <= b; e++) {
              var h = a[2 * e + 1];
              0 !== h && (a[2 * e] = k(f[h]++, h));
            }
          }
          function o() {
            var a,
              b,
              c,
              d,
              f,
              g = new Array(W + 1);
            for (c = 0, d = 0; d < Q - 1; d++)
              for (ka[d] = c, a = 0; a < 1 << ba[d]; a++) ja[c++] = d;
            for (ja[c - 1] = d, f = 0, d = 0; d < 16; d++)
              for (la[d] = f, a = 0; a < 1 << ca[d]; a++) ia[f++] = d;
            for (f >>= 7; d < T; d++)
              for (la[d] = f << 7, a = 0; a < 1 << (ca[d] - 7); a++)
                ia[256 + f++] = d;
            for (b = 0; b <= W; b++) g[b] = 0;
            for (a = 0; a <= 143; ) (ga[2 * a + 1] = 8), a++, g[8]++;
            for (; a <= 255; ) (ga[2 * a + 1] = 9), a++, g[9]++;
            for (; a <= 279; ) (ga[2 * a + 1] = 7), a++, g[7]++;
            for (; a <= 287; ) (ga[2 * a + 1] = 8), a++, g[8]++;
            for (n(ga, S + 1, g), a = 0; a < T; a++)
              (ha[2 * a + 1] = 5), (ha[2 * a] = k(a, 5));
            (ma = new e(ga, ba, R + 1, S, W)),
              (na = new e(ha, ca, 0, T, W)),
              (oa = new e(new Array(0), da, 0, U, Y));
          }
          function p(a) {
            var b;
            for (b = 0; b < S; b++) a.dyn_ltree[2 * b] = 0;
            for (b = 0; b < T; b++) a.dyn_dtree[2 * b] = 0;
            for (b = 0; b < U; b++) a.bl_tree[2 * b] = 0;
            (a.dyn_ltree[2 * Z] = 1),
              (a.opt_len = a.static_len = 0),
              (a.last_lit = a.matches = 0);
          }
          function q(a) {
            a.bi_valid > 8
              ? h(a, a.bi_buf)
              : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf),
              (a.bi_buf = 0),
              (a.bi_valid = 0);
          }
          function r(a, b, c, d) {
            q(a),
              d && (h(a, c), h(a, ~c)),
              G.arraySet(a.pending_buf, a.window, b, c, a.pending),
              (a.pending += c);
          }
          function s(a, b, c, d) {
            var e = 2 * b,
              f = 2 * c;
            return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
          }
          function t(a, b, c) {
            for (
              var d = a.heap[c], e = c << 1;
              e <= a.heap_len &&
              (e < a.heap_len && s(b, a.heap[e + 1], a.heap[e], a.depth) && e++,
              !s(b, d, a.heap[e], a.depth));

            )
              (a.heap[c] = a.heap[e]), (c = e), (e <<= 1);
            a.heap[c] = d;
          }
          function u(a, b, c) {
            var d,
              e,
              f,
              h,
              k = 0;
            if (0 !== a.last_lit)
              do
                (d =
                  (a.pending_buf[a.d_buf + 2 * k] << 8) |
                  a.pending_buf[a.d_buf + 2 * k + 1]),
                  (e = a.pending_buf[a.l_buf + k]),
                  k++,
                  0 === d
                    ? j(a, e, b)
                    : ((f = ja[e]),
                      j(a, f + R + 1, b),
                      (h = ba[f]),
                      0 !== h && ((e -= ka[f]), i(a, e, h)),
                      d--,
                      (f = g(d)),
                      j(a, f, c),
                      (h = ca[f]),
                      0 !== h && ((d -= la[f]), i(a, d, h)));
              while (k < a.last_lit);
            j(a, Z, b);
          }
          function v(a, b) {
            var c,
              d,
              e,
              f = b.dyn_tree,
              g = b.stat_desc.static_tree,
              h = b.stat_desc.has_stree,
              i = b.stat_desc.elems,
              j = -1;
            for (a.heap_len = 0, a.heap_max = V, c = 0; c < i; c++)
              0 !== f[2 * c]
                ? ((a.heap[++a.heap_len] = j = c), (a.depth[c] = 0))
                : (f[2 * c + 1] = 0);
            for (; a.heap_len < 2; )
              (e = a.heap[++a.heap_len] = j < 2 ? ++j : 0),
                (f[2 * e] = 1),
                (a.depth[e] = 0),
                a.opt_len--,
                h && (a.static_len -= g[2 * e + 1]);
            for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) t(a, f, c);
            e = i;
            do
              (c = a.heap[1]),
                (a.heap[1] = a.heap[a.heap_len--]),
                t(a, f, 1),
                (d = a.heap[1]),
                (a.heap[--a.heap_max] = c),
                (a.heap[--a.heap_max] = d),
                (f[2 * e] = f[2 * c] + f[2 * d]),
                (a.depth[e] =
                  (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1),
                (f[2 * c + 1] = f[2 * d + 1] = e),
                (a.heap[1] = e++),
                t(a, f, 1);
            while (a.heap_len >= 2);
            (a.heap[--a.heap_max] = a.heap[1]), m(a, b), n(f, j, a.bl_count);
          }
          function w(a, b, c) {
            var d,
              e,
              f = -1,
              g = b[1],
              h = 0,
              i = 7,
              j = 4;
            for (
              0 === g && ((i = 138), (j = 3)),
                b[2 * (c + 1) + 1] = 65535,
                d = 0;
              d <= c;
              d++
            )
              (e = g),
                (g = b[2 * (d + 1) + 1]),
                (++h < i && e === g) ||
                  (h < j
                    ? (a.bl_tree[2 * e] += h)
                    : 0 !== e
                    ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * $]++)
                    : h <= 10
                    ? a.bl_tree[2 * _]++
                    : a.bl_tree[2 * aa]++,
                  (h = 0),
                  (f = e),
                  0 === g
                    ? ((i = 138), (j = 3))
                    : e === g
                    ? ((i = 6), (j = 3))
                    : ((i = 7), (j = 4)));
          }
          function x(a, b, c) {
            var d,
              e,
              f = -1,
              g = b[1],
              h = 0,
              k = 7,
              l = 4;
            for (0 === g && ((k = 138), (l = 3)), d = 0; d <= c; d++)
              if (((e = g), (g = b[2 * (d + 1) + 1]), !(++h < k && e === g))) {
                if (h < l) {
                  do j(a, e, a.bl_tree);
                  while (0 !== --h);
                } else
                  0 !== e
                    ? (e !== f && (j(a, e, a.bl_tree), h--),
                      j(a, $, a.bl_tree),
                      i(a, h - 3, 2))
                    : h <= 10
                    ? (j(a, _, a.bl_tree), i(a, h - 3, 3))
                    : (j(a, aa, a.bl_tree), i(a, h - 11, 7));
                (h = 0),
                  (f = e),
                  0 === g
                    ? ((k = 138), (l = 3))
                    : e === g
                    ? ((k = 6), (l = 3))
                    : ((k = 7), (l = 4));
              }
          }
          function y(a) {
            var b;
            for (
              w(a, a.dyn_ltree, a.l_desc.max_code),
                w(a, a.dyn_dtree, a.d_desc.max_code),
                v(a, a.bl_desc),
                b = U - 1;
              b >= 3 && 0 === a.bl_tree[2 * ea[b] + 1];
              b--
            );
            return (a.opt_len += 3 * (b + 1) + 5 + 5 + 4), b;
          }
          function z(a, b, c, d) {
            var e;
            for (
              i(a, b - 257, 5), i(a, c - 1, 5), i(a, d - 4, 4), e = 0;
              e < d;
              e++
            )
              i(a, a.bl_tree[2 * ea[e] + 1], 3);
            x(a, a.dyn_ltree, b - 1), x(a, a.dyn_dtree, c - 1);
          }
          function A(a) {
            var b,
              c = 4093624447;
            for (b = 0; b <= 31; b++, c >>>= 1)
              if (1 & c && 0 !== a.dyn_ltree[2 * b]) return I;
            if (
              0 !== a.dyn_ltree[18] ||
              0 !== a.dyn_ltree[20] ||
              0 !== a.dyn_ltree[26]
            )
              return J;
            for (b = 32; b < R; b++) if (0 !== a.dyn_ltree[2 * b]) return J;
            return I;
          }
          function B(a) {
            pa || (o(), (pa = !0)),
              (a.l_desc = new f(a.dyn_ltree, ma)),
              (a.d_desc = new f(a.dyn_dtree, na)),
              (a.bl_desc = new f(a.bl_tree, oa)),
              (a.bi_buf = 0),
              (a.bi_valid = 0),
              p(a);
          }
          function C(a, b, c, d) {
            i(a, (L << 1) + (d ? 1 : 0), 3), r(a, b, c, !0);
          }
          function D(a) {
            i(a, M << 1, 3), j(a, Z, ga), l(a);
          }
          function E(a, b, c, d) {
            var e,
              f,
              g = 0;
            a.level > 0
              ? (a.strm.data_type === K && (a.strm.data_type = A(a)),
                v(a, a.l_desc),
                v(a, a.d_desc),
                (g = y(a)),
                (e = (a.opt_len + 3 + 7) >>> 3),
                (f = (a.static_len + 3 + 7) >>> 3),
                f <= e && (e = f))
              : (e = f = c + 5),
              c + 4 <= e && b !== -1
                ? C(a, b, c, d)
                : a.strategy === H || f === e
                ? (i(a, (M << 1) + (d ? 1 : 0), 3), u(a, ga, ha))
                : (i(a, (N << 1) + (d ? 1 : 0), 3),
                  z(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, g + 1),
                  u(a, a.dyn_ltree, a.dyn_dtree)),
              p(a),
              d && q(a);
          }
          function F(a, b, c) {
            return (
              (a.pending_buf[a.d_buf + 2 * a.last_lit] = (b >>> 8) & 255),
              (a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b),
              (a.pending_buf[a.l_buf + a.last_lit] = 255 & c),
              a.last_lit++,
              0 === b
                ? a.dyn_ltree[2 * c]++
                : (a.matches++,
                  b--,
                  a.dyn_ltree[2 * (ja[c] + R + 1)]++,
                  a.dyn_dtree[2 * g(b)]++),
              a.last_lit === a.lit_bufsize - 1
            );
          }
          var G = a("../utils/common"),
            H = 4,
            I = 0,
            J = 1,
            K = 2,
            L = 0,
            M = 1,
            N = 2,
            O = 3,
            P = 258,
            Q = 29,
            R = 256,
            S = R + 1 + Q,
            T = 30,
            U = 19,
            V = 2 * S + 1,
            W = 15,
            X = 16,
            Y = 7,
            Z = 256,
            $ = 16,
            _ = 17,
            aa = 18,
            ba = [
              0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4,
              4, 4, 5, 5, 5, 5, 0,
            ],
            ca = [
              0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
              10, 10, 11, 11, 12, 12, 13, 13,
            ],
            da = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            ea = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ],
            fa = 512,
            ga = new Array(2 * (S + 2));
          d(ga);
          var ha = new Array(2 * T);
          d(ha);
          var ia = new Array(fa);
          d(ia);
          var ja = new Array(P - O + 1);
          d(ja);
          var ka = new Array(Q);
          d(ka);
          var la = new Array(T);
          d(la);
          var ma,
            na,
            oa,
            pa = !1;
          (c._tr_init = B),
            (c._tr_stored_block = C),
            (c._tr_flush_block = E),
            (c._tr_tally = F),
            (c._tr_align = D);
        },
        { "../utils/common": 62 },
      ],
      74: [
        function (a, b, c) {
          "use strict";
          function d() {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ""),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          }
          b.exports = d;
        },
        {},
      ],
    },
    {},
    [10]
  )(10);
});

/*!
    HTML5 export buttons for Buttons and DataTables.
    2016 SpryMedia Ltd - datatables.net/license

    FileSaver.js (1.3.3) - MIT license
    Copyright © 2016 Eli Grey - http://eligrey.com
    https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js
*/
(function (n) {
  "function" === typeof define && define.amd
    ? define(
        ["jquery", "datatables.net", "datatables.net-buttons"],
        function (u) {
          return n(u, window, document);
        }
      )
    : "object" === typeof exports
    ? (module.exports = function (u, x, E, F) {
        u || (u = window);
        (x && x.fn.dataTable) || (x = require("datatables.net")(u, x).$);
        x.fn.dataTable.Buttons || require("datatables.net-buttons")(u, x);
        return n(x, u, u.document, E, F);
      })
    : n(jQuery, window, document);
})(function (n, u, x, E, F, B) {
  function I(a) {
    for (var c = ""; 0 <= a; )
      (c = String.fromCharCode((a % 26) + 65) + c),
        (a = Math.floor(a / 26) - 1);
    return c;
  }
  function O(a, c) {
    J === B &&
      (J =
        -1 ===
        M.serializeToString(
          new u.DOMParser().parseFromString(
            P["xl/worksheets/sheet1.xml"],
            "text/xml"
          )
        ).indexOf("xmlns:r"));
    n.each(c, function (d, b) {
      if (n.isPlainObject(b)) (d = a.folder(d)), O(d, b);
      else {
        if (J) {
          var m = b.childNodes[0],
            e,
            f = [];
          for (e = m.attributes.length - 1; 0 <= e; e--) {
            var g = m.attributes[e].nodeName;
            var p = m.attributes[e].nodeValue;
            -1 !== g.indexOf(":") &&
              (f.push({ name: g, value: p }), m.removeAttribute(g));
          }
          e = 0;
          for (g = f.length; e < g; e++)
            (p = b.createAttribute(
              f[e].name.replace(":", "_dt_b_namespace_token_")
            )),
              (p.value = f[e].value),
              m.setAttributeNode(p);
        }
        b = M.serializeToString(b);
        J &&
          (-1 === b.indexOf("<?xml") &&
            (b = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + b),
          (b = b.replace(/_dt_b_namespace_token_/g, ":")),
          (b = b.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")));
        b = b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(d, b);
      }
    });
  }
  function y(a, c, d) {
    var b = a.createElement(c);
    d &&
      (d.attr && n(b).attr(d.attr),
      d.children &&
        n.each(d.children, function (m, e) {
          b.appendChild(e);
        }),
      null !== d.text &&
        d.text !== B &&
        b.appendChild(a.createTextNode(d.text)));
    return b;
  }
  function V(a, c) {
    var d = a.header[c].length;
    a.footer && a.footer[c].length > d && (d = a.footer[c].length);
    for (var b = 0, m = a.body.length; b < m; b++) {
      var e = a.body[b][c];
      e = null !== e && e !== B ? e.toString() : "";
      -1 !== e.indexOf("\n")
        ? ((e = e.split("\n")),
          e.sort(function (f, g) {
            return g.length - f.length;
          }),
          (e = e[0].length))
        : (e = e.length);
      e > d && (d = e);
      if (40 < d) return 54;
    }
    d *= 1.35;
    return 6 < d ? d : 6;
  }
  var D = n.fn.dataTable;
  D.Buttons.pdfMake = function (a) {
    if (!a) return F || u.pdfMake;
    F = a;
  };
  D.Buttons.jszip = function (a) {
    if (!a) return E || u.JSZip;
    E = a;
  };
  var K = (function (a) {
    if (
      !(
        "undefined" === typeof a ||
        ("undefined" !== typeof navigator &&
          /MSIE [1-9]\./.test(navigator.userAgent))
      )
    ) {
      var c = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        d = "download" in c,
        b = /constructor/i.test(a.HTMLElement) || a.safari,
        m = /CriOS\/[\d]+/.test(navigator.userAgent),
        e = function (h) {
          (a.setImmediate || a.setTimeout)(function () {
            throw h;
          }, 0);
        },
        f = function (h) {
          setTimeout(function () {
            "string" === typeof h
              ? (a.URL || a.webkitURL || a).revokeObjectURL(h)
              : h.remove();
          }, 4e4);
        },
        g = function (h) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            h.type
          )
            ? new Blob([String.fromCharCode(65279), h], { type: h.type })
            : h;
        },
        p = function (h, q, v) {
          v || (h = g(h));
          var r = this,
            w = "application/octet-stream" === h.type,
            C = function () {
              var l = ["writestart", "progress", "write", "writeend"];
              l = [].concat(l);
              for (var z = l.length; z--; ) {
                var G = r["on" + l[z]];
                if ("function" === typeof G)
                  try {
                    G.call(r, r);
                  } catch (A) {
                    e(A);
                  }
              }
            };
          r.readyState = r.INIT;
          if (d) {
            var k = (a.URL || a.webkitURL || a).createObjectURL(h);
            setTimeout(function () {
              c.href = k;
              c.download = q;
              var l = new MouseEvent("click");
              c.dispatchEvent(l);
              C();
              f(k);
              r.readyState = r.DONE;
            });
          } else
            (function () {
              if ((m || (w && b)) && a.FileReader) {
                var l = new FileReader();
                l.onloadend = function () {
                  var z = m
                    ? l.result
                    : l.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  a.open(z, "_blank") || (a.location.href = z);
                  r.readyState = r.DONE;
                  C();
                };
                l.readAsDataURL(h);
                r.readyState = r.INIT;
              } else
                k || (k = (a.URL || a.webkitURL || a).createObjectURL(h)),
                  w
                    ? (a.location.href = k)
                    : a.open(k, "_blank") || (a.location.href = k),
                  (r.readyState = r.DONE),
                  C(),
                  f(k);
            })();
        },
        t = p.prototype;
      if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob)
        return function (h, q, v) {
          q = q || h.name || "download";
          v || (h = g(h));
          return navigator.msSaveOrOpenBlob(h, q);
        };
      t.abort = function () {};
      t.readyState = t.INIT = 0;
      t.WRITING = 1;
      t.DONE = 2;
      t.error =
        t.onwritestart =
        t.onprogress =
        t.onwrite =
        t.onabort =
        t.onerror =
        t.onwriteend =
          null;
      return function (h, q, v) {
        return new p(h, q || h.name || "download", v);
      };
    }
  })(
    ("undefined" !== typeof self && self) ||
      ("undefined" !== typeof u && u) ||
      this.content
  );
  D.fileSave = K;
  var Q = function (a) {
      var c = "Sheet1";
      a.sheetName && (c = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
      return c;
    },
    R = function (a) {
      return a.newline
        ? a.newline
        : navigator.userAgent.match(/Windows/)
        ? "\r\n"
        : "\n";
    },
    S = function (a, c) {
      var d = R(c);
      a = a.buttons.exportData(c.exportOptions);
      var b = c.fieldBoundary,
        m = c.fieldSeparator,
        e = new RegExp(b, "g"),
        f = c.escapeChar !== B ? c.escapeChar : "\\",
        g = function (v) {
          for (var r = "", w = 0, C = v.length; w < C; w++)
            0 < w && (r += m),
              (r += b ? b + ("" + v[w]).replace(e, f + b) + b : v[w]);
          return r;
        },
        p = c.header ? g(a.header) + d : "";
      c = c.footer && a.footer ? d + g(a.footer) : "";
      for (var t = [], h = 0, q = a.body.length; h < q; h++)
        t.push(g(a.body[h]));
      return { str: p + t.join(d) + c, rows: t.length };
    },
    T = function () {
      if (
        -1 === navigator.userAgent.indexOf("Safari") ||
        -1 !== navigator.userAgent.indexOf("Chrome") ||
        -1 !== navigator.userAgent.indexOf("Opera")
      )
        return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1;
    };
  try {
    var M = new XMLSerializer(),
      J;
  } catch (a) {}
  var P = {
      "_rels/.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
      "xl/worksheets/sheet1.xml":
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml":
        '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>',
    },
    U = [
      {
        match: /^\-?\d+\.\d%$/,
        style: 60,
        fmt: function (a) {
          return a / 100;
        },
      },
      {
        match: /^\-?\d+\.?\d*%$/,
        style: 56,
        fmt: function (a) {
          return a / 100;
        },
      },
      { match: /^\-?\$[\d,]+.?\d*$/, style: 57 },
      { match: /^\-?£[\d,]+.?\d*$/, style: 58 },
      { match: /^\-?€[\d,]+.?\d*$/, style: 59 },
      { match: /^\-?\d+$/, style: 65 },
      { match: /^\-?\d+\.\d{2}$/, style: 66 },
      {
        match: /^\([\d,]+\)$/,
        style: 61,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      {
        match: /^\([\d,]+\.\d{2}\)$/,
        style: 62,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "");
        },
      },
      { match: /^\-?[\d,]+$/, style: 63 },
      { match: /^\-?[\d,]+\.\d{2}$/, style: 64 },
      {
        match: /^[\d]{4}\-[01][\d]\-[0123][\d]$/,
        style: 67,
        fmt: function (a) {
          return Math.round(25569 + Date.parse(a) / 864e5);
        },
      },
    ];
  D.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (a) {
      return a.i18n("buttons.copy", "Copy");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this;
      a = S(c, b);
      var e = c.buttons.exportInfo(b),
        f = R(b),
        g = a.str;
      d = n("<div/>").css({
        height: 1,
        width: 1,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      });
      e.title && (g = e.title + f + f + g);
      e.messageTop && (g = e.messageTop + f + f + g);
      e.messageBottom && (g = g + f + f + e.messageBottom);
      b.customize && (g = b.customize(g, b, c));
      b = n("<textarea readonly/>").val(g).appendTo(d);
      if (x.queryCommandSupported("copy")) {
        d.appendTo(c.table().container());
        b[0].focus();
        b[0].select();
        try {
          var p = x.execCommand("copy");
          d.remove();
          if (p) {
            c.buttons.info(
              c.i18n("buttons.copyTitle", "Copy to clipboard"),
              c.i18n(
                "buttons.copySuccess",
                {
                  1: "Copied one row to clipboard",
                  _: "Copied %d rows to clipboard",
                },
                a.rows
              ),
              2e3
            );
            this.processing(!1);
            return;
          }
        } catch (q) {}
      }
      p = n(
        "<span>" +
          c.i18n(
            "buttons.copyKeys",
            "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape."
          ) +
          "</span>"
      ).append(d);
      c.buttons.info(c.i18n("buttons.copyTitle", "Copy to clipboard"), p, 0);
      b[0].focus();
      b[0].select();
      var t = n(p).closest(".dt-button-info"),
        h = function () {
          t.off("click.buttons-copy");
          n(x).off(".buttons-copy");
          c.buttons.info(!1);
        };
      t.on("click.buttons-copy", h);
      n(x)
        .on("keydown.buttons-copy", function (q) {
          27 === q.keyCode && (h(), m.processing(!1));
        })
        .on("copy.buttons-copy cut.buttons-copy", function () {
          h();
          m.processing(!1);
        });
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
  };
  D.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function () {
      return u.FileReader !== B && u.Blob;
    },
    text: function (a) {
      return a.i18n("buttons.csv", "CSV");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      a = S(c, b).str;
      d = c.buttons.exportInfo(b);
      var m = b.charset;
      b.customize && (a = b.customize(a, b, c));
      !1 !== m
        ? (m || (m = x.characterSet || x.charset), m && (m = ";charset=" + m))
        : (m = "");
      b.bom && (a = String.fromCharCode(65279) + a);
      K(new Blob([a], { type: "text/csv" + m }), d.filename, !0);
      this.processing(!1);
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1,
  };
  D.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return u.FileReader !== B && (E || u.JSZip) !== B && !T() && M;
    },
    text: function (a) {
      return a.i18n("buttons.excel", "Excel");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this,
        e = 0;
      a = function (k) {
        return n.parseXML(P[k]);
      };
      var f = a("xl/worksheets/sheet1.xml"),
        g = f.getElementsByTagName("sheetData")[0];
      a = {
        _rels: { ".rels": a("_rels/.rels") },
        xl: {
          _rels: { "workbook.xml.rels": a("xl/_rels/workbook.xml.rels") },
          "workbook.xml": a("xl/workbook.xml"),
          "styles.xml": a("xl/styles.xml"),
          worksheets: { "sheet1.xml": f },
        },
        "[Content_Types].xml": a("[Content_Types].xml"),
      };
      var p = c.buttons.exportData(b.exportOptions),
        t,
        h,
        q = function (k) {
          t = e + 1;
          h = y(f, "row", { attr: { r: t } });
          for (var l = 0, z = k.length; l < z; l++) {
            var G = I(l) + "" + t,
              A = null;
            if (null === k[l] || k[l] === B || "" === k[l])
              if (!0 === b.createEmptyCells) k[l] = "";
              else continue;
            var H = k[l];
            k[l] = "function" === typeof k[l].trim ? k[l].trim() : k[l];
            for (var N = 0, W = U.length; N < W; N++) {
              var L = U[N];
              if (k[l].match && !k[l].match(/^0\d+/) && k[l].match(L.match)) {
                A = k[l].replace(/[^\d\.\-]/g, "");
                L.fmt && (A = L.fmt(A));
                A = y(f, "c", {
                  attr: { r: G, s: L.style },
                  children: [y(f, "v", { text: A })],
                });
                break;
              }
            }
            A ||
              ("number" === typeof k[l] ||
              (k[l].match &&
                k[l].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/) &&
                !k[l].match(/^0\d+/))
                ? (A = y(f, "c", {
                    attr: { t: "n", r: G },
                    children: [y(f, "v", { text: k[l] })],
                  }))
                : ((H = H.replace
                    ? H.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "")
                    : H),
                  (A = y(f, "c", {
                    attr: { t: "inlineStr", r: G },
                    children: {
                      row: y(f, "is", {
                        children: {
                          row: y(f, "t", {
                            text: H,
                            attr: { "xml:space": "preserve" },
                          }),
                        },
                      }),
                    },
                  }))));
            h.appendChild(A);
          }
          g.appendChild(h);
          e++;
        };
      b.customizeData && b.customizeData(p);
      var v = function (k, l) {
          var z = n("mergeCells", f);
          z[0].appendChild(
            y(f, "mergeCell", { attr: { ref: "A" + k + ":" + I(l) + k } })
          );
          z.attr("count", parseFloat(z.attr("count")) + 1);
          n("row:eq(" + (k - 1) + ") c", f).attr("s", "51");
        },
        r = c.buttons.exportInfo(b);
      r.title && (q([r.title], e), v(e, p.header.length - 1));
      r.messageTop && (q([r.messageTop], e), v(e, p.header.length - 1));
      b.header && (q(p.header, e), n("row:last c", f).attr("s", "2"));
      d = e;
      var w = 0;
      for (var C = p.body.length; w < C; w++) q(p.body[w], e);
      w = e;
      b.footer &&
        p.footer &&
        (q(p.footer, e), n("row:last c", f).attr("s", "2"));
      r.messageBottom && (q([r.messageBottom], e), v(e, p.header.length - 1));
      q = y(f, "cols");
      n("worksheet", f).prepend(q);
      v = 0;
      for (C = p.header.length; v < C; v++)
        q.appendChild(
          y(f, "col", {
            attr: { min: v + 1, max: v + 1, width: V(p, v), customWidth: 1 },
          })
        );
      q = a.xl["workbook.xml"];
      n("sheets sheet", q).attr("name", Q(b));
      b.autoFilter &&
        (n("mergeCells", f).before(
          y(f, "autoFilter", {
            attr: { ref: "A" + d + ":" + I(p.header.length - 1) + w },
          })
        ),
        n("definedNames", q).append(
          y(q, "definedName", {
            attr: {
              name: "_xlnm._FilterDatabase",
              localSheetId: "0",
              hidden: 1,
            },
            text: Q(b) + "!$A$" + d + ":" + I(p.header.length - 1) + w,
          })
        ));
      b.customize && b.customize(a, b, c);
      0 === n("mergeCells", f).children().length && n("mergeCells", f).remove();
      c = new (E || u.JSZip)();
      d = {
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      };
      O(c, a);
      c.generateAsync
        ? c.generateAsync(d).then(function (k) {
            K(k, r.filename);
            m.processing(!1);
          })
        : (K(c.generate(d), r.filename), this.processing(!1));
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: !1,
    autoFilter: !1,
    sheetName: "",
  };
  D.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return u.FileReader !== B && (F || u.pdfMake);
    },
    text: function (a) {
      return a.i18n("buttons.pdf", "PDF");
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      d = c.buttons.exportData(b.exportOptions);
      a = c.buttons.exportInfo(b);
      var m = [];
      b.header &&
        m.push(
          n.map(d.header, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableHeader",
            };
          })
        );
      for (var e = 0, f = d.body.length; e < f; e++)
        m.push(
          n.map(d.body[e], function (g) {
            if (null === g || g === B) g = "";
            return {
              text: "string" === typeof g ? g : g + "",
              style: e % 2 ? "tableBodyEven" : "tableBodyOdd",
            };
          })
        );
      b.footer &&
        d.footer &&
        m.push(
          n.map(d.footer, function (g) {
            return {
              text: "string" === typeof g ? g : g + "",
              style: "tableFooter",
            };
          })
        );
      d = {
        pageSize: b.pageSize,
        pageOrientation: b.orientation,
        content: [{ table: { headerRows: 1, body: m }, layout: "noBorders" }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center",
          },
          tableBodyEven: {},
          tableBodyOdd: { fillColor: "#f3f3f3" },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
          },
          title: { alignment: "center", fontSize: 15 },
          message: {},
        },
        defaultStyle: { fontSize: 10 },
      };
      a.messageTop &&
        d.content.unshift({
          text: a.messageTop,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.messageBottom &&
        d.content.push({
          text: a.messageBottom,
          style: "message",
          margin: [0, 0, 0, 12],
        });
      a.title &&
        d.content.unshift({
          text: a.title,
          style: "title",
          margin: [0, 0, 0, 12],
        });
      b.customize && b.customize(d, b, c);
      c = (F || u.pdfMake).createPdf(d);
      "open" !== b.download || T() ? c.download(a.filename) : c.open();
      this.processing(!1);
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download",
  };
  return D.Buttons;
});

/*!
 * csv_to_html_table.js
 * 로컬의 csv를 불러오게 해주는 js
 * cl-table-data 클래스 한개 추가함
 */
var CsvToHtmlTable = CsvToHtmlTable || {};

CsvToHtmlTable = {
  init: function (options) {
    options = options || {};
    var csv_path = options.csv_path || "";
    var el = options.element || "table-container";
    var allow_download = options.allow_download || false;
    var csv_options = options.csv_options || {};
    var datatables_options = options.datatables_options || {};
    var custom_formatting = options.custom_formatting || [];
    var customTemplates = {};
    $.each(custom_formatting, function (i, v) {
      var colIdx = v[0];
      var func = v[1];
      customTemplates[colIdx] = func;
    });

    var $table = $(
      "<table class='cl-table-data table table-striped table-condensed' id='" +
        el +
        "-table'></table>"
    );
    var $containerElement = $("#" + el);
    $containerElement.empty().append($table);

    $.when($.get(csv_path)).then(function (data) {
      var csvData = $.csv.toArrays(data, csv_options);
      var $tableHead = $("<thead></thead>");
      var csvHeaderRow = csvData[0];
      var $tableHeadRow = $("<tr></tr>");
      for (var headerIdx = 0; headerIdx < csvHeaderRow.length; headerIdx++) {
        $tableHeadRow.append($("<th></th>").text(csvHeaderRow[headerIdx]));
      }
      $tableHead.append($tableHeadRow);

      $table.append($tableHead);
      var $tableBody = $("<tbody></tbody>");

      for (var rowIdx = 1; rowIdx < csvData.length; rowIdx++) {
        var $tableBodyRow = $("<tr></tr>");
        for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
          var $tableBodyRowTd = $("<td></td>");
          var cellTemplateFunc = customTemplates[colIdx];
          if (cellTemplateFunc) {
            $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
          } else {
            $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
          }
          $tableBodyRow.append($tableBodyRowTd);
          $tableBody.append($tableBodyRow);
        }
      }
      $table.append($tableBody);

      $table.DataTable(datatables_options);

      if (allow_download) {
        $containerElement.append(
          "<p><a class='btn btn-info' href='" +
            csv_path +
            "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>"
        );
      }
    });
  },
};

/*!
 * 코딩리스트 스크립트 영역
 * 위는 라이브러리 영역
 */
// 세팅영역
var mySpreadsheet = `https://docs.google.com/spreadsheets/d/1yUSXCy46j9juyJFTwVrIBRq-4lAqEJ-FNQdyj9emTUE/edit#gid=0`; // 구글닥스 경로
var csv_local_path = "cl.csv"; // 로컬 CSV 경로
var uxdevlink = `http://uxdev.etribe.co.kr/uxg-boilerplate/`; // uxdev 링크
var cl_cell_directory = 7;
var cl_cell_etc = [11];
var paging = false;
var scrollX = false;
var searching = false;
var ordering = false;
var info = false;
var autoWidth = false;
var dom = '<"cl-util-group"Bifrlp>t';
var buttons = [];
var columns = [
  { className: "cl-cell-no" },
  { className: "cl-cell-category" },
  { className: "cl-cell-depth01" },
  { className: "cl-cell-depth02" },
  { className: "cl-cell-depth03" },
  { className: "cl-cell-depth04" },
  { className: "cl-cell-depth05" },
  { className: "cl-cell-directory" },
  { className: "cl-cell-worker" },
  { className: "cl-cell-status" },
  { className: "cl-cell-end" },
  { className: "cl-cell-etc" },
];
var hiddenColumn = [1]; // column 숨김처리
var columnDefs = [
  { visible: false, targets: hiddenColumn },
  {
    render: function (data, type, row) {
      let result = `<a href="${data}" class="cl-link-url" target="_blank">${data}</a>`;
      if (!data) {
        result = ``;
      }
      return result;
    },
    targets: cl_cell_directory,
  },
  {
    render: function (data, type, row) {
      let result = ``;
      if (data) {
        result =
          "<ul><li>" + data.replace(/(?:\r\n|\r|\n)/g, "</li><li>") + "</ul>";
      }
      return result;
    },
    targets: cl_cell_etc,
  },
];
var drawCallback = function (settings) {
  var api = this.api();
  var rows = api.rows({ page: "current" }).nodes();
  var last = null;

  api
    .column(1, { page: "current" })
    .data()
    .each(function (group, i) {
      if (last !== group) {
        $(rows)
          .eq(i)
          .before(
            '<tr class="group"><td colspan="100">' + group + "</td></tr>"
          );

        last = group;
      }
    });
};

// 구글닥스 연동
$("#statistics").sheetrock({
  url: mySpreadsheet,
  callback: makeSortable,
});

function makeSortable(error, options, response) {
  $(options.user.target).DataTable({
    paging: paging,
    scrollX: scrollX,
    searching: searching,
    ordering: ordering,
    info: info,
    autoWidth: autoWidth,
    dom: dom,
    buttons: buttons,
    columns: columns,
    columnDefs: columnDefs,
    drawCallback: drawCallback,
  });
  codinglistPageInfo();
}

// 로컬 CSV 데이터 연동
// CsvToHtmlTable.init({
//     csv_path: csv_local_path,
//     element: 'table-container',
//     csv_options: {separator: ',', delimiter: '"'},
//     datatables_options: {
//         "paging": paging,
//         "scrollX": scrollX,
//         "searching": searching,
//         "ordering": ordering,
//         "info": info,
//         "autoWidth": autoWidth,
//         "dom": dom,
//         "buttons": buttons,
//         "columns": columns,
//         "columnDefs": columnDefs,
//         "drawCallback": drawCallback
//     },
// });

// 페이지 수 정보
var codinglistPageInfo = function () {
  var noCount = $("td.cl-cell-status:contains(-)").length;
  var endCount = $("td.cl-cell-status:contains(완료)").length;
  var ingCount = $(
    "td.cl-cell-status:contains(진행중), td.cl-cell-status:contains(검수중), td.cl-cell-status:contains(기획검수)"
  ).length;
  var allCountFull = endCount + ingCount + noCount;
  var allCount = allCountFull - noCount;
  var percentCount = (endCount / allCount) * 100;

  $(".ui-all-number").text(allCount);
  $(".ui-ing-number").text(ingCount);
  $(".ui-end-number").text(endCount);
  $(".ui-percent-number").text(percentCount.toFixed(0) + "%");

  console.log("페이지수 제외항목 = " + noCount);
  console.log("완료 페이지 = " + endCount);
  console.log("진행중 페이지 = " + ingCount);
  console.log("전체 페이지(제외항목 뺀 숫자) = " + allCount);
  console.log("전체 Table rows = " + allCountFull);
};
