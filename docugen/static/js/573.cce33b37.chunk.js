/*! For license information please see 573.cce33b37.chunk.js.LICENSE.txt */
(self.webpackChunkmfts_docugen = self.webpackChunkmfts_docugen || []).push([
  [573],
  {
    6724: function (t, e, r) {
      var n = r(9218),
        i = r(1772),
        a = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw a(i(t) + " is not a function");
      };
    },
    611: function (t, e, r) {
      var n = r(1219),
        i = r(1772),
        a = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw a(i(t) + " is not a constructor");
      };
    },
    6299: function (t, e, r) {
      var n = r(9218),
        i = String,
        a = TypeError;
      t.exports = function (t) {
        if ("object" == typeof t || n(t)) return t;
        throw a("Can't set " + i(t) + " as a prototype");
      };
    },
    5715: function (t, e, r) {
      var n = r(5028),
        i = r(4385),
        a = r(1592).f,
        o = n("unscopables"),
        s = Array.prototype;
      void 0 == s[o] && a(s, o, { configurable: !0, value: i(null) }),
        (t.exports = function (t) {
          s[o][t] = !0;
        });
    },
    5466: function (t, e, r) {
      "use strict";
      var n = r(8424).charAt;
      t.exports = function (t, e, r) {
        return e + (r ? n(t, e).length : 1);
      };
    },
    4817: function (t, e, r) {
      var n = r(8946),
        i = TypeError;
      t.exports = function (t, e) {
        if (n(e, t)) return t;
        throw i("Incorrect invocation");
      };
    },
    5884: function (t, e, r) {
      var n = r(3931),
        i = String,
        a = TypeError;
      t.exports = function (t) {
        if (n(t)) return t;
        throw a(i(t) + " is not an object");
      };
    },
    488: function (t, e, r) {
      var n = r(5770),
        i = r(1823),
        a = r(3385),
        o = function (t) {
          return function (e, r, o) {
            var s,
              u = n(e),
              c = a(u),
              l = i(o, c);
            if (t && r != r) {
              for (; c > l; ) if ((s = u[l++]) != s) return !0;
            } else
              for (; c > l; l++)
                if ((t || l in u) && u[l] === r) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: o(!0), indexOf: o(!1) };
    },
    2241: function (t, e, r) {
      "use strict";
      var n = r(2837);
      t.exports = function (t, e) {
        var r = [][t];
        return (
          !!r &&
          n(function () {
            r.call(
              null,
              e ||
                function () {
                  return 1;
                },
              1
            );
          })
        );
      };
    },
    4512: function (t, e, r) {
      var n = r(6724),
        i = r(8385),
        a = r(1036),
        o = r(3385),
        s = TypeError,
        u = function (t) {
          return function (e, r, u, c) {
            n(r);
            var l = i(e),
              h = a(l),
              f = o(l),
              p = t ? f - 1 : 0,
              v = t ? -1 : 1;
            if (u < 2)
              for (;;) {
                if (p in h) {
                  (c = h[p]), (p += v);
                  break;
                }
                if (((p += v), t ? p < 0 : f <= p))
                  throw s("Reduce of empty array with no initial value");
              }
            for (; t ? p >= 0 : f > p; p += v) p in h && (c = r(c, h[p], p, l));
            return c;
          };
        };
      t.exports = { left: u(!1), right: u(!0) };
    },
    3278: function (t, e, r) {
      var n = r(1823),
        i = r(3385),
        a = r(3055),
        o = Array,
        s = Math.max;
      t.exports = function (t, e, r) {
        for (
          var u = i(t),
            c = n(e, u),
            l = n(void 0 === r ? u : r, u),
            h = o(s(l - c, 0)),
            f = 0;
          c < l;
          c++, f++
        )
          a(h, f, t[c]);
        return (h.length = f), h;
      };
    },
    5618: function (t, e, r) {
      var n = r(4932);
      t.exports = n([].slice);
    },
    6225: function (t, e, r) {
      var n = r(5028)("iterator"),
        i = !1;
      try {
        var a = 0,
          o = {
            next: function () {
              return { done: !!a++ };
            },
            return: function () {
              i = !0;
            },
          };
        (o[n] = function () {
          return this;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (s) {}
      t.exports = function (t, e) {
        if (!e && !i) return !1;
        var r = !1;
        try {
          var a = {};
          (a[n] = function () {
            return {
              next: function () {
                return { done: (r = !0) };
              },
            };
          }),
            t(a);
        } catch (s) {}
        return r;
      };
    },
    2933: function (t, e, r) {
      var n = r(4932),
        i = n({}.toString),
        a = n("".slice);
      t.exports = function (t) {
        return a(i(t), 8, -1);
      };
    },
    7205: function (t, e, r) {
      var n = r(6042),
        i = r(9218),
        a = r(2933),
        o = r(5028)("toStringTag"),
        s = Object,
        u =
          "Arguments" ==
          a(
            (function () {
              return arguments;
            })()
          );
      t.exports = n
        ? a
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                  try {
                    return t[e];
                  } catch (r) {}
                })((e = s(t)), o))
              ? r
              : u
              ? a(e)
              : "Object" == (n = a(e)) && i(e.callee)
              ? "Arguments"
              : n;
          };
    },
    189: function (t, e, r) {
      var n = r(3013),
        i = r(7273),
        a = r(2573),
        o = r(1592);
      t.exports = function (t, e, r) {
        for (var s = i(e), u = o.f, c = a.f, l = 0; l < s.length; l++) {
          var h = s[l];
          n(t, h) || (r && n(r, h)) || u(t, h, c(e, h));
        }
      };
    },
    2525: function (t, e, r) {
      var n = r(5028)("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (r) {
          try {
            return (e[n] = !1), "/./"[t](e);
          } catch (i) {}
        }
        return !1;
      };
    },
    1586: function (t, e, r) {
      var n = r(2837);
      t.exports = !n(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    5927: function (t) {
      t.exports = function (t, e) {
        return { value: t, done: e };
      };
    },
    3873: function (t, e, r) {
      var n = r(1196),
        i = r(1592),
        a = r(2037);
      t.exports = n
        ? function (t, e, r) {
            return i.f(t, e, a(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    },
    2037: function (t) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    3055: function (t, e, r) {
      "use strict";
      var n = r(4655),
        i = r(1592),
        a = r(2037);
      t.exports = function (t, e, r) {
        var o = n(e);
        o in t ? i.f(t, o, a(0, r)) : (t[o] = r);
      };
    },
    695: function (t, e, r) {
      var n = r(2557),
        i = r(1592);
      t.exports = function (t, e, r) {
        return (
          r.get && n(r.get, e, { getter: !0 }),
          r.set && n(r.set, e, { setter: !0 }),
          i.f(t, e, r)
        );
      };
    },
    7543: function (t, e, r) {
      var n = r(9218),
        i = r(1592),
        a = r(2557),
        o = r(9131);
      t.exports = function (t, e, r, s) {
        s || (s = {});
        var u = s.enumerable,
          c = void 0 !== s.name ? s.name : e;
        if ((n(r) && a(r, c, s), s.global)) u ? (t[e] = r) : o(e, r);
        else {
          try {
            s.unsafe ? t[e] && (u = !0) : delete t[e];
          } catch (l) {}
          u
            ? (t[e] = r)
            : i.f(t, e, {
                value: r,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable,
              });
        }
        return t;
      };
    },
    9131: function (t, e, r) {
      var n = r(6840),
        i = Object.defineProperty;
      t.exports = function (t, e) {
        try {
          i(n, t, { value: e, configurable: !0, writable: !0 });
        } catch (r) {
          n[t] = e;
        }
        return e;
      };
    },
    1196: function (t, e, r) {
      var n = r(2837);
      t.exports = !n(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    4363: function (t) {
      var e = "object" == typeof document && document.all,
        r = "undefined" == typeof e && void 0 !== e;
      t.exports = { all: e, IS_HTMLDDA: r };
    },
    937: function (t, e, r) {
      var n = r(6840),
        i = r(3931),
        a = n.document,
        o = i(a) && i(a.createElement);
      t.exports = function (t) {
        return o ? a.createElement(t) : {};
      };
    },
    650: function (t) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    2752: function (t, e, r) {
      var n = r(937)("span").classList,
        i = n && n.constructor && n.constructor.prototype;
      t.exports = i === Object.prototype ? void 0 : i;
    },
    4163: function (t, e, r) {
      var n = r(6681),
        i = r(1653);
      t.exports =
        !n && !i && "object" == typeof window && "object" == typeof document;
    },
    6681: function (t) {
      t.exports =
        "object" == typeof Deno && Deno && "object" == typeof Deno.version;
    },
    1070: function (t, e, r) {
      var n = r(4839);
      t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
    },
    3929: function (t, e, r) {
      var n = r(4839);
      t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
    },
    1653: function (t, e, r) {
      var n = r(2933);
      t.exports = "undefined" != typeof process && "process" == n(process);
    },
    1785: function (t, e, r) {
      var n = r(4839);
      t.exports = /web0s(?!.*chrome)/i.test(n);
    },
    4839: function (t) {
      t.exports =
        ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
    },
    5372: function (t, e, r) {
      var n,
        i,
        a = r(6840),
        o = r(4839),
        s = a.process,
        u = a.Deno,
        c = (s && s.versions) || (u && u.version),
        l = c && c.v8;
      l && (i = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !i &&
          o &&
          (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
          (n = o.match(/Chrome\/(\d+)/)) &&
          (i = +n[1]),
        (t.exports = i);
    },
    2080: function (t) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    7768: function (t, e, r) {
      var n = r(6840),
        i = r(2573).f,
        a = r(3873),
        o = r(7543),
        s = r(9131),
        u = r(189),
        c = r(6673);
      t.exports = function (t, e) {
        var r,
          l,
          h,
          f,
          p,
          v = t.target,
          g = t.global,
          y = t.stat;
        if ((r = g ? n : y ? n[v] || s(v, {}) : (n[v] || {}).prototype))
          for (l in e) {
            if (
              ((f = e[l]),
              (h = t.dontCallGetSet ? (p = i(r, l)) && p.value : r[l]),
              !c(g ? l : v + (y ? "." : "#") + l, t.forced) && void 0 !== h)
            ) {
              if (typeof f == typeof h) continue;
              u(f, h);
            }
            (t.sham || (h && h.sham)) && a(f, "sham", !0), o(r, l, f, t);
          }
      };
    },
    2837: function (t) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    8093: function (t, e, r) {
      "use strict";
      r(447);
      var n = r(7926),
        i = r(7543),
        a = r(4087),
        o = r(2837),
        s = r(5028),
        u = r(3873),
        c = s("species"),
        l = RegExp.prototype;
      t.exports = function (t, e, r, h) {
        var f = s(t),
          p = !o(function () {
            var e = {};
            return (
              (e[f] = function () {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          v =
            p &&
            !o(function () {
              var e = !1,
                r = /a/;
              return (
                "split" === t &&
                  (((r = {}).constructor = {}),
                  (r.constructor[c] = function () {
                    return r;
                  }),
                  (r.flags = ""),
                  (r[f] = /./[f])),
                (r.exec = function () {
                  return (e = !0), null;
                }),
                r[f](""),
                !e
              );
            });
        if (!p || !v || r) {
          var g = n(/./[f]),
            y = e(f, ""[t], function (t, e, r, i, o) {
              var s = n(t),
                u = e.exec;
              return u === a || u === l.exec
                ? p && !o
                  ? { done: !0, value: g(e, r, i) }
                  : { done: !0, value: s(r, e, i) }
                : { done: !1 };
            });
          i(String.prototype, t, y[0]), i(l, f, y[1]);
        }
        h && u(l[f], "sham", !0);
      };
    },
    6339: function (t, e, r) {
      var n = r(4138),
        i = Function.prototype,
        a = i.apply,
        o = i.call;
      t.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (n
          ? o.bind(a)
          : function () {
              return o.apply(a, arguments);
            });
    },
    5851: function (t, e, r) {
      var n = r(7926),
        i = r(6724),
        a = r(4138),
        o = n(n.bind);
      t.exports = function (t, e) {
        return (
          i(t),
          void 0 === e
            ? t
            : a
            ? o(t, e)
            : function () {
                return t.apply(e, arguments);
              }
        );
      };
    },
    4138: function (t, e, r) {
      var n = r(2837);
      t.exports = !n(function () {
        var t = function () {}.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype");
      });
    },
    8513: function (t, e, r) {
      var n = r(4138),
        i = Function.prototype.call;
      t.exports = n
        ? i.bind(i)
        : function () {
            return i.apply(i, arguments);
          };
    },
    3211: function (t, e, r) {
      var n = r(1196),
        i = r(3013),
        a = Function.prototype,
        o = n && Object.getOwnPropertyDescriptor,
        s = i(a, "name"),
        u = s && "something" === function () {}.name,
        c = s && (!n || (n && o(a, "name").configurable));
      t.exports = { EXISTS: s, PROPER: u, CONFIGURABLE: c };
    },
    5951: function (t, e, r) {
      var n = r(4932),
        i = r(6724);
      t.exports = function (t, e, r) {
        try {
          return n(i(Object.getOwnPropertyDescriptor(t, e)[r]));
        } catch (a) {}
      };
    },
    7926: function (t, e, r) {
      var n = r(2933),
        i = r(4932);
      t.exports = function (t) {
        if ("Function" === n(t)) return i(t);
      };
    },
    4932: function (t, e, r) {
      var n = r(4138),
        i = Function.prototype,
        a = i.call,
        o = n && i.bind.bind(a, a);
      t.exports = n
        ? o
        : function (t) {
            return function () {
              return a.apply(t, arguments);
            };
          };
    },
    1240: function (t, e, r) {
      var n = r(6840),
        i = r(9218);
      t.exports = function (t, e) {
        return arguments.length < 2
          ? ((r = n[t]), i(r) ? r : void 0)
          : n[t] && n[t][e];
        var r;
      };
    },
    443: function (t, e, r) {
      var n = r(7205),
        i = r(3863),
        a = r(9055),
        o = r(9706),
        s = r(5028)("iterator");
      t.exports = function (t) {
        if (!a(t)) return i(t, s) || i(t, "@@iterator") || o[n(t)];
      };
    },
    8131: function (t, e, r) {
      var n = r(8513),
        i = r(6724),
        a = r(5884),
        o = r(1772),
        s = r(443),
        u = TypeError;
      t.exports = function (t, e) {
        var r = arguments.length < 2 ? s(t) : e;
        if (i(r)) return a(n(r, t));
        throw u(o(t) + " is not iterable");
      };
    },
    3863: function (t, e, r) {
      var n = r(6724),
        i = r(9055);
      t.exports = function (t, e) {
        var r = t[e];
        return i(r) ? void 0 : n(r);
      };
    },
    7794: function (t, e, r) {
      var n = r(4932),
        i = r(8385),
        a = Math.floor,
        o = n("".charAt),
        s = n("".replace),
        u = n("".slice),
        c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        l = /\$([$&'`]|\d{1,2})/g;
      t.exports = function (t, e, r, n, h, f) {
        var p = r + t.length,
          v = n.length,
          g = l;
        return (
          void 0 !== h && ((h = i(h)), (g = c)),
          s(f, g, function (i, s) {
            var c;
            switch (o(s, 0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return u(e, 0, r);
              case "'":
                return u(e, p);
              case "<":
                c = h[u(s, 1, -1)];
                break;
              default:
                var l = +s;
                if (0 === l) return i;
                if (l > v) {
                  var f = a(l / 10);
                  return 0 === f
                    ? i
                    : f <= v
                    ? void 0 === n[f - 1]
                      ? o(s, 1)
                      : n[f - 1] + o(s, 1)
                    : i;
                }
                c = n[l - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      };
    },
    6840: function (t, e, r) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof r.g && r.g) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    3013: function (t, e, r) {
      var n = r(4932),
        i = r(8385),
        a = n({}.hasOwnProperty);
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return a(i(t), e);
        };
    },
    6196: function (t) {
      t.exports = {};
    },
    5995: function (t) {
      t.exports = function (t, e) {
        try {
          1 == arguments.length ? console.error(t) : console.error(t, e);
        } catch (r) {}
      };
    },
    2012: function (t, e, r) {
      var n = r(1240);
      t.exports = n("document", "documentElement");
    },
    6707: function (t, e, r) {
      var n = r(1196),
        i = r(2837),
        a = r(937);
      t.exports =
        !n &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(a("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    1036: function (t, e, r) {
      var n = r(4932),
        i = r(2837),
        a = r(2933),
        o = Object,
        s = n("".split);
      t.exports = i(function () {
        return !o("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == a(t) ? s(t, "") : o(t);
          }
        : o;
    },
    8589: function (t, e, r) {
      var n = r(4932),
        i = r(9218),
        a = r(4460),
        o = n(Function.toString);
      i(a.inspectSource) ||
        (a.inspectSource = function (t) {
          return o(t);
        }),
        (t.exports = a.inspectSource);
    },
    9671: function (t, e, r) {
      var n,
        i,
        a,
        o = r(1615),
        s = r(6840),
        u = r(3931),
        c = r(3873),
        l = r(3013),
        h = r(4460),
        f = r(9378),
        p = r(6196),
        v = "Object already initialized",
        g = s.TypeError,
        y = s.WeakMap;
      if (o || h.state) {
        var d = h.state || (h.state = new y());
        (d.get = d.get),
          (d.has = d.has),
          (d.set = d.set),
          (n = function (t, e) {
            if (d.has(t)) throw g(v);
            return (e.facade = t), d.set(t, e), e;
          }),
          (i = function (t) {
            return d.get(t) || {};
          }),
          (a = function (t) {
            return d.has(t);
          });
      } else {
        var m = f("state");
        (p[m] = !0),
          (n = function (t, e) {
            if (l(t, m)) throw g(v);
            return (e.facade = t), c(t, m, e), e;
          }),
          (i = function (t) {
            return l(t, m) ? t[m] : {};
          }),
          (a = function (t) {
            return l(t, m);
          });
      }
      t.exports = {
        set: n,
        get: i,
        has: a,
        enforce: function (t) {
          return a(t) ? i(t) : n(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var r;
            if (!u(e) || (r = i(e)).type !== t)
              throw g("Incompatible receiver, " + t + " required");
            return r;
          };
        },
      };
    },
    8205: function (t, e, r) {
      var n = r(5028),
        i = r(9706),
        a = n("iterator"),
        o = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || o[a] === t);
      };
    },
    9218: function (t, e, r) {
      var n = r(4363),
        i = n.all;
      t.exports = n.IS_HTMLDDA
        ? function (t) {
            return "function" == typeof t || t === i;
          }
        : function (t) {
            return "function" == typeof t;
          };
    },
    1219: function (t, e, r) {
      var n = r(4932),
        i = r(2837),
        a = r(9218),
        o = r(7205),
        s = r(1240),
        u = r(8589),
        c = function () {},
        l = [],
        h = s("Reflect", "construct"),
        f = /^\s*(?:class|function)\b/,
        p = n(f.exec),
        v = !f.exec(c),
        g = function (t) {
          if (!a(t)) return !1;
          try {
            return h(c, l, t), !0;
          } catch (e) {
            return !1;
          }
        },
        y = function (t) {
          if (!a(t)) return !1;
          switch (o(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return !1;
          }
          try {
            return v || !!p(f, u(t));
          } catch (e) {
            return !0;
          }
        };
      (y.sham = !0),
        (t.exports =
          !h ||
          i(function () {
            var t;
            return (
              g(g.call) ||
              !g(Object) ||
              !g(function () {
                t = !0;
              }) ||
              t
            );
          })
            ? y
            : g);
    },
    6673: function (t, e, r) {
      var n = r(2837),
        i = r(9218),
        a = /#|\.prototype\./,
        o = function (t, e) {
          var r = u[s(t)];
          return r == l || (r != c && (i(e) ? n(e) : !!e));
        },
        s = (o.normalize = function (t) {
          return String(t).replace(a, ".").toLowerCase();
        }),
        u = (o.data = {}),
        c = (o.NATIVE = "N"),
        l = (o.POLYFILL = "P");
      t.exports = o;
    },
    9055: function (t) {
      t.exports = function (t) {
        return null === t || void 0 === t;
      };
    },
    3931: function (t, e, r) {
      var n = r(9218),
        i = r(4363),
        a = i.all;
      t.exports = i.IS_HTMLDDA
        ? function (t) {
            return "object" == typeof t ? null !== t : n(t) || t === a;
          }
        : function (t) {
            return "object" == typeof t ? null !== t : n(t);
          };
    },
    3608: function (t) {
      t.exports = !1;
    },
    670: function (t, e, r) {
      var n = r(3931),
        i = r(2933),
        a = r(5028)("match");
      t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t));
      };
    },
    8287: function (t, e, r) {
      var n = r(1240),
        i = r(9218),
        a = r(8946),
        o = r(7611),
        s = Object;
      t.exports = o
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = n("Symbol");
            return i(e) && a(e.prototype, s(t));
          };
    },
    4439: function (t, e, r) {
      var n = r(5851),
        i = r(8513),
        a = r(5884),
        o = r(1772),
        s = r(8205),
        u = r(3385),
        c = r(8946),
        l = r(8131),
        h = r(443),
        f = r(9053),
        p = TypeError,
        v = function (t, e) {
          (this.stopped = t), (this.result = e);
        },
        g = v.prototype;
      t.exports = function (t, e, r) {
        var y,
          d,
          m,
          x,
          b,
          w,
          S,
          k = r && r.that,
          T = !(!r || !r.AS_ENTRIES),
          O = !(!r || !r.IS_RECORD),
          A = !(!r || !r.IS_ITERATOR),
          E = !(!r || !r.INTERRUPTED),
          P = n(e, k),
          C = function (t) {
            return y && f(y, "normal", t), new v(!0, t);
          },
          M = function (t) {
            return T
              ? (a(t), E ? P(t[0], t[1], C) : P(t[0], t[1]))
              : E
              ? P(t, C)
              : P(t);
          };
        if (O) y = t.iterator;
        else if (A) y = t;
        else {
          if (!(d = h(t))) throw p(o(t) + " is not iterable");
          if (s(d)) {
            for (m = 0, x = u(t); x > m; m++)
              if ((b = M(t[m])) && c(g, b)) return b;
            return new v(!1);
          }
          y = l(t, d);
        }
        for (w = O ? t.next : y.next; !(S = i(w, y)).done; ) {
          try {
            b = M(S.value);
          } catch (N) {
            f(y, "throw", N);
          }
          if ("object" == typeof b && b && c(g, b)) return b;
        }
        return new v(!1);
      };
    },
    9053: function (t, e, r) {
      var n = r(8513),
        i = r(5884),
        a = r(3863);
      t.exports = function (t, e, r) {
        var o, s;
        i(t);
        try {
          if (!(o = a(t, "return"))) {
            if ("throw" === e) throw r;
            return r;
          }
          o = n(o, t);
        } catch (u) {
          (s = !0), (o = u);
        }
        if ("throw" === e) throw r;
        if (s) throw o;
        return i(o), r;
      };
    },
    1331: function (t, e, r) {
      "use strict";
      var n = r(7022).IteratorPrototype,
        i = r(4385),
        a = r(2037),
        o = r(3370),
        s = r(9706),
        u = function () {
          return this;
        };
      t.exports = function (t, e, r, c) {
        var l = e + " Iterator";
        return (
          (t.prototype = i(n, { next: a(+!c, r) })),
          o(t, l, !1, !0),
          (s[l] = u),
          t
        );
      };
    },
    4931: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(8513),
        a = r(3608),
        o = r(3211),
        s = r(9218),
        u = r(1331),
        c = r(4305),
        l = r(4381),
        h = r(3370),
        f = r(3873),
        p = r(7543),
        v = r(5028),
        g = r(9706),
        y = r(7022),
        d = o.PROPER,
        m = o.CONFIGURABLE,
        x = y.IteratorPrototype,
        b = y.BUGGY_SAFARI_ITERATORS,
        w = v("iterator"),
        S = "keys",
        k = "values",
        T = "entries",
        O = function () {
          return this;
        };
      t.exports = function (t, e, r, o, v, y, A) {
        u(r, e, o);
        var E,
          P,
          C,
          M = function (t) {
            if (t === v && I) return I;
            if (!b && t in R) return R[t];
            switch (t) {
              case S:
              case k:
              case T:
                return function () {
                  return new r(this, t);
                };
            }
            return function () {
              return new r(this);
            };
          },
          N = e + " Iterator",
          _ = !1,
          R = t.prototype,
          V = R[w] || R["@@iterator"] || (v && R[v]),
          I = (!b && V) || M(v),
          L = ("Array" == e && R.entries) || V;
        if (
          (L &&
            (E = c(L.call(new t()))) !== Object.prototype &&
            E.next &&
            (a || c(E) === x || (l ? l(E, x) : s(E[w]) || p(E, w, O)),
            h(E, N, !0, !0),
            a && (g[N] = O)),
          d &&
            v == k &&
            V &&
            V.name !== k &&
            (!a && m
              ? f(R, "name", k)
              : ((_ = !0),
                (I = function () {
                  return i(V, this);
                }))),
          v)
        )
          if (((P = { values: M(k), keys: y ? I : M(S), entries: M(T) }), A))
            for (C in P) (b || _ || !(C in R)) && p(R, C, P[C]);
          else n({ target: e, proto: !0, forced: b || _ }, P);
        return (
          (a && !A) || R[w] === I || p(R, w, I, { name: v }), (g[e] = I), P
        );
      };
    },
    7022: function (t, e, r) {
      "use strict";
      var n,
        i,
        a,
        o = r(2837),
        s = r(9218),
        u = r(3931),
        c = r(4385),
        l = r(4305),
        h = r(7543),
        f = r(5028),
        p = r(3608),
        v = f("iterator"),
        g = !1;
      [].keys &&
        ("next" in (a = [].keys())
          ? (i = l(l(a))) !== Object.prototype && (n = i)
          : (g = !0)),
        !u(n) ||
        o(function () {
          var t = {};
          return n[v].call(t) !== t;
        })
          ? (n = {})
          : p && (n = c(n)),
        s(n[v]) ||
          h(n, v, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: g });
    },
    9706: function (t) {
      t.exports = {};
    },
    3385: function (t, e, r) {
      var n = r(2347);
      t.exports = function (t) {
        return n(t.length);
      };
    },
    2557: function (t, e, r) {
      var n = r(4932),
        i = r(2837),
        a = r(9218),
        o = r(3013),
        s = r(1196),
        u = r(3211).CONFIGURABLE,
        c = r(8589),
        l = r(9671),
        h = l.enforce,
        f = l.get,
        p = String,
        v = Object.defineProperty,
        g = n("".slice),
        y = n("".replace),
        d = n([].join),
        m =
          s &&
          !i(function () {
            return 8 !== v(function () {}, "length", { value: 8 }).length;
          }),
        x = String(String).split("String"),
        b = (t.exports = function (t, e, r) {
          "Symbol(" === g(p(e), 0, 7) &&
            (e = "[" + y(p(e), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            r && r.getter && (e = "get " + e),
            r && r.setter && (e = "set " + e),
            (!o(t, "name") || (u && t.name !== e)) &&
              (s ? v(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
            m &&
              r &&
              o(r, "arity") &&
              t.length !== r.arity &&
              v(t, "length", { value: r.arity });
          try {
            r && o(r, "constructor") && r.constructor
              ? s && v(t, "prototype", { writable: !1 })
              : t.prototype && (t.prototype = void 0);
          } catch (i) {}
          var n = h(t);
          return (
            o(n, "source") || (n.source = d(x, "string" == typeof e ? e : "")),
            t
          );
        });
      Function.prototype.toString = b(function () {
        return (a(this) && f(this).source) || c(this);
      }, "toString");
    },
    1246: function (t) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports =
        Math.trunc ||
        function (t) {
          var n = +t;
          return (n > 0 ? r : e)(n);
        };
    },
    4410: function (t, e, r) {
      var n,
        i,
        a,
        o,
        s,
        u = r(6840),
        c = r(5851),
        l = r(2573).f,
        h = r(1625).set,
        f = r(9033),
        p = r(3929),
        v = r(1070),
        g = r(1785),
        y = r(1653),
        d = u.MutationObserver || u.WebKitMutationObserver,
        m = u.document,
        x = u.process,
        b = u.Promise,
        w = l(u, "queueMicrotask"),
        S = w && w.value;
      if (!S) {
        var k = new f(),
          T = function () {
            var t, e;
            for (y && (t = x.domain) && t.exit(); (e = k.get()); )
              try {
                e();
              } catch (r) {
                throw (k.head && n(), r);
              }
            t && t.enter();
          };
        p || y || g || !d || !m
          ? !v && b && b.resolve
            ? (((o = b.resolve(void 0)).constructor = b),
              (s = c(o.then, o)),
              (n = function () {
                s(T);
              }))
            : y
            ? (n = function () {
                x.nextTick(T);
              })
            : ((h = c(h, u)),
              (n = function () {
                h(T);
              }))
          : ((i = !0),
            (a = m.createTextNode("")),
            new d(T).observe(a, { characterData: !0 }),
            (n = function () {
              a.data = i = !i;
            })),
          (S = function (t) {
            k.head || n(), k.add(t);
          });
      }
      t.exports = S;
    },
    246: function (t, e, r) {
      "use strict";
      var n = r(6724),
        i = TypeError,
        a = function (t) {
          var e, r;
          (this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r)
              throw i("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this.resolve = n(e)),
            (this.reject = n(r));
        };
      t.exports.f = function (t) {
        return new a(t);
      };
    },
    9693: function (t, e, r) {
      var n = r(670),
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) throw i("The method doesn't accept regular expressions");
        return t;
      };
    },
    4385: function (t, e, r) {
      var n,
        i = r(5884),
        a = r(1697),
        o = r(2080),
        s = r(6196),
        u = r(2012),
        c = r(937),
        l = r(9378),
        h = "prototype",
        f = "script",
        p = l("IE_PROTO"),
        v = function () {},
        g = function (t) {
          return "<" + f + ">" + t + "</" + f + ">";
        },
        y = function (t) {
          t.write(g("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        d = function () {
          try {
            n = new ActiveXObject("htmlfile");
          } catch (e) {}
          d =
            "undefined" != typeof document
              ? document.domain && n
                ? y(n)
                : (function () {
                    var t,
                      e = c("iframe"),
                      r = "java" + f + ":";
                    return (
                      (e.style.display = "none"),
                      u.appendChild(e),
                      (e.src = String(r)),
                      (t = e.contentWindow.document).open(),
                      t.write(g("document.F=Object")),
                      t.close(),
                      t.F
                    );
                  })()
              : y(n);
          for (var t = o.length; t--; ) delete d[h][o[t]];
          return d();
        };
      (s[p] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var r;
            return (
              null !== t
                ? ((v[h] = i(t)), (r = new v()), (v[h] = null), (r[p] = t))
                : (r = d()),
              void 0 === e ? r : a.f(r, e)
            );
          });
    },
    1697: function (t, e, r) {
      var n = r(1196),
        i = r(6056),
        a = r(1592),
        o = r(5884),
        s = r(5770),
        u = r(8084);
      e.f =
        n && !i
          ? Object.defineProperties
          : function (t, e) {
              o(t);
              for (var r, n = s(e), i = u(e), c = i.length, l = 0; c > l; )
                a.f(t, (r = i[l++]), n[r]);
              return t;
            };
    },
    1592: function (t, e, r) {
      var n = r(1196),
        i = r(6707),
        a = r(6056),
        o = r(5884),
        s = r(4655),
        u = TypeError,
        c = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        h = "enumerable",
        f = "configurable",
        p = "writable";
      e.f = n
        ? a
          ? function (t, e, r) {
              if (
                (o(t),
                (e = s(e)),
                o(r),
                "function" === typeof t &&
                  "prototype" === e &&
                  "value" in r &&
                  p in r &&
                  !r[p])
              ) {
                var n = l(t, e);
                n &&
                  n[p] &&
                  ((t[e] = r.value),
                  (r = {
                    configurable: f in r ? r[f] : n[f],
                    enumerable: h in r ? r[h] : n[h],
                    writable: !1,
                  }));
              }
              return c(t, e, r);
            }
          : c
        : function (t, e, r) {
            if ((o(t), (e = s(e)), o(r), i))
              try {
                return c(t, e, r);
              } catch (n) {}
            if ("get" in r || "set" in r) throw u("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          };
    },
    2573: function (t, e, r) {
      var n = r(1196),
        i = r(8513),
        a = r(8306),
        o = r(2037),
        s = r(5770),
        u = r(4655),
        c = r(3013),
        l = r(6707),
        h = Object.getOwnPropertyDescriptor;
      e.f = n
        ? h
        : function (t, e) {
            if (((t = s(t)), (e = u(e)), l))
              try {
                return h(t, e);
              } catch (r) {}
            if (c(t, e)) return o(!i(a.f, t, e), t[e]);
          };
    },
    3772: function (t, e, r) {
      var n = r(3080),
        i = r(2080).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return n(t, i);
        };
    },
    400: function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    4305: function (t, e, r) {
      var n = r(3013),
        i = r(9218),
        a = r(8385),
        o = r(9378),
        s = r(1586),
        u = o("IE_PROTO"),
        c = Object,
        l = c.prototype;
      t.exports = s
        ? c.getPrototypeOf
        : function (t) {
            var e = a(t);
            if (n(e, u)) return e[u];
            var r = e.constructor;
            return i(r) && e instanceof r
              ? r.prototype
              : e instanceof c
              ? l
              : null;
          };
    },
    8946: function (t, e, r) {
      var n = r(4932);
      t.exports = n({}.isPrototypeOf);
    },
    3080: function (t, e, r) {
      var n = r(4932),
        i = r(3013),
        a = r(5770),
        o = r(488).indexOf,
        s = r(6196),
        u = n([].push);
      t.exports = function (t, e) {
        var r,
          n = a(t),
          c = 0,
          l = [];
        for (r in n) !i(s, r) && i(n, r) && u(l, r);
        for (; e.length > c; ) i(n, (r = e[c++])) && (~o(l, r) || u(l, r));
        return l;
      };
    },
    8084: function (t, e, r) {
      var n = r(3080),
        i = r(2080);
      t.exports =
        Object.keys ||
        function (t) {
          return n(t, i);
        };
    },
    8306: function (t, e) {
      "use strict";
      var r = {}.propertyIsEnumerable,
        n = Object.getOwnPropertyDescriptor,
        i = n && !r.call({ 1: 2 }, 1);
      e.f = i
        ? function (t) {
            var e = n(this, t);
            return !!e && e.enumerable;
          }
        : r;
    },
    4381: function (t, e, r) {
      var n = r(5951),
        i = r(5884),
        a = r(6299);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                r = {};
              try {
                (t = n(Object.prototype, "__proto__", "set"))(r, []),
                  (e = r instanceof Array);
              } catch (o) {}
              return function (r, n) {
                return i(r), a(n), e ? t(r, n) : (r.__proto__ = n), r;
              };
            })()
          : void 0);
    },
    7772: function (t, e, r) {
      var n = r(8513),
        i = r(9218),
        a = r(3931),
        o = TypeError;
      t.exports = function (t, e) {
        var r, s;
        if ("string" === e && i((r = t.toString)) && !a((s = n(r, t))))
          return s;
        if (i((r = t.valueOf)) && !a((s = n(r, t)))) return s;
        if ("string" !== e && i((r = t.toString)) && !a((s = n(r, t))))
          return s;
        throw o("Can't convert object to primitive value");
      };
    },
    7273: function (t, e, r) {
      var n = r(1240),
        i = r(4932),
        a = r(3772),
        o = r(400),
        s = r(5884),
        u = i([].concat);
      t.exports =
        n("Reflect", "ownKeys") ||
        function (t) {
          var e = a.f(s(t)),
            r = o.f;
          return r ? u(e, r(t)) : e;
        };
    },
    3752: function (t) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    7426: function (t, e, r) {
      var n = r(6840),
        i = r(31),
        a = r(9218),
        o = r(6673),
        s = r(8589),
        u = r(5028),
        c = r(4163),
        l = r(6681),
        h = r(3608),
        f = r(5372),
        p = i && i.prototype,
        v = u("species"),
        g = !1,
        y = a(n.PromiseRejectionEvent),
        d = o("Promise", function () {
          var t = s(i),
            e = t !== String(i);
          if (!e && 66 === f) return !0;
          if (h && (!p.catch || !p.finally)) return !0;
          if (!f || f < 51 || !/native code/.test(t)) {
            var r = new i(function (t) {
                t(1);
              }),
              n = function (t) {
                t(
                  function () {},
                  function () {}
                );
              };
            if (
              (((r.constructor = {})[v] = n),
              !(g = r.then(function () {}) instanceof n))
            )
              return !0;
          }
          return !e && (c || l) && !y;
        });
      t.exports = { CONSTRUCTOR: d, REJECTION_EVENT: y, SUBCLASSING: g };
    },
    31: function (t, e, r) {
      var n = r(6840);
      t.exports = n.Promise;
    },
    6321: function (t, e, r) {
      var n = r(5884),
        i = r(3931),
        a = r(246);
      t.exports = function (t, e) {
        if ((n(t), i(e) && e.constructor === t)) return e;
        var r = a.f(t);
        return (0, r.resolve)(e), r.promise;
      };
    },
    1321: function (t, e, r) {
      var n = r(31),
        i = r(6225),
        a = r(7426).CONSTRUCTOR;
      t.exports =
        a ||
        !i(function (t) {
          n.all(t).then(void 0, function () {});
        });
    },
    9033: function (t) {
      var e = function () {
        (this.head = null), (this.tail = null);
      };
      (e.prototype = {
        add: function (t) {
          var e = { item: t, next: null },
            r = this.tail;
          r ? (r.next = e) : (this.head = e), (this.tail = e);
        },
        get: function () {
          var t = this.head;
          if (t)
            return null === (this.head = t.next) && (this.tail = null), t.item;
        },
      }),
        (t.exports = e);
    },
    2781: function (t, e, r) {
      var n = r(8513),
        i = r(5884),
        a = r(9218),
        o = r(2933),
        s = r(4087),
        u = TypeError;
      t.exports = function (t, e) {
        var r = t.exec;
        if (a(r)) {
          var c = n(r, t, e);
          return null !== c && i(c), c;
        }
        if ("RegExp" === o(t)) return n(s, t, e);
        throw u("RegExp#exec called on incompatible receiver");
      };
    },
    4087: function (t, e, r) {
      "use strict";
      var n = r(8513),
        i = r(4932),
        a = r(6124),
        o = r(7687),
        s = r(8596),
        u = r(1778),
        c = r(4385),
        l = r(9671).get,
        h = r(2047),
        f = r(2063),
        p = u("native-string-replace", String.prototype.replace),
        v = RegExp.prototype.exec,
        g = v,
        y = i("".charAt),
        d = i("".indexOf),
        m = i("".replace),
        x = i("".slice),
        b = (function () {
          var t = /a/,
            e = /b*/g;
          return (
            n(v, t, "a"), n(v, e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        w = s.BROKEN_CARET,
        S = void 0 !== /()??/.exec("")[1];
      (b || S || w || h || f) &&
        (g = function (t) {
          var e,
            r,
            i,
            s,
            u,
            h,
            f,
            k = this,
            T = l(k),
            O = a(t),
            A = T.raw;
          if (A)
            return (
              (A.lastIndex = k.lastIndex),
              (e = n(g, A, O)),
              (k.lastIndex = A.lastIndex),
              e
            );
          var E = T.groups,
            P = w && k.sticky,
            C = n(o, k),
            M = k.source,
            N = 0,
            _ = O;
          if (
            (P &&
              ((C = m(C, "y", "")),
              -1 === d(C, "g") && (C += "g"),
              (_ = x(O, k.lastIndex)),
              k.lastIndex > 0 &&
                (!k.multiline ||
                  (k.multiline && "\n" !== y(O, k.lastIndex - 1))) &&
                ((M = "(?: " + M + ")"), (_ = " " + _), N++),
              (r = new RegExp("^(?:" + M + ")", C))),
            S && (r = new RegExp("^" + M + "$(?!\\s)", C)),
            b && (i = k.lastIndex),
            (s = n(v, P ? r : k, _)),
            P
              ? s
                ? ((s.input = x(s.input, N)),
                  (s[0] = x(s[0], N)),
                  (s.index = k.lastIndex),
                  (k.lastIndex += s[0].length))
                : (k.lastIndex = 0)
              : b && s && (k.lastIndex = k.global ? s.index + s[0].length : i),
            S &&
              s &&
              s.length > 1 &&
              n(p, s[0], r, function () {
                for (u = 1; u < arguments.length - 2; u++)
                  void 0 === arguments[u] && (s[u] = void 0);
              }),
            s && E)
          )
            for (s.groups = h = c(null), u = 0; u < E.length; u++)
              h[(f = E[u])[0]] = s[f[1]];
          return s;
        }),
        (t.exports = g);
    },
    7687: function (t, e, r) {
      "use strict";
      var n = r(5884);
      t.exports = function () {
        var t = n(this),
          e = "";
        return (
          t.hasIndices && (e += "d"),
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.unicodeSets && (e += "v"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    7667: function (t, e, r) {
      var n = r(8513),
        i = r(3013),
        a = r(8946),
        o = r(7687),
        s = RegExp.prototype;
      t.exports = function (t) {
        var e = t.flags;
        return void 0 !== e || "flags" in s || i(t, "flags") || !a(s, t)
          ? e
          : n(o, t);
      };
    },
    8596: function (t, e, r) {
      var n = r(2837),
        i = r(6840).RegExp,
        a = n(function () {
          var t = i("a", "y");
          return (t.lastIndex = 2), null != t.exec("abcd");
        }),
        o =
          a ||
          n(function () {
            return !i("a", "y").sticky;
          }),
        s =
          a ||
          n(function () {
            var t = i("^r", "gy");
            return (t.lastIndex = 2), null != t.exec("str");
          });
      t.exports = { BROKEN_CARET: s, MISSED_STICKY: o, UNSUPPORTED_Y: a };
    },
    2047: function (t, e, r) {
      var n = r(2837),
        i = r(6840).RegExp;
      t.exports = n(function () {
        var t = i(".", "s");
        return !(t.dotAll && t.exec("\n") && "s" === t.flags);
      });
    },
    2063: function (t, e, r) {
      var n = r(2837),
        i = r(6840).RegExp;
      t.exports = n(function () {
        var t = i("(?<a>b)", "g");
        return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
      });
    },
    2244: function (t, e, r) {
      var n = r(9055),
        i = TypeError;
      t.exports = function (t) {
        if (n(t)) throw i("Can't call method on " + t);
        return t;
      };
    },
    2267: function (t, e, r) {
      "use strict";
      var n = r(1240),
        i = r(695),
        a = r(5028),
        o = r(1196),
        s = a("species");
      t.exports = function (t) {
        var e = n(t);
        o &&
          e &&
          !e[s] &&
          i(e, s, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    3370: function (t, e, r) {
      var n = r(1592).f,
        i = r(3013),
        a = r(5028)("toStringTag");
      t.exports = function (t, e, r) {
        t && !r && (t = t.prototype),
          t && !i(t, a) && n(t, a, { configurable: !0, value: e });
      };
    },
    9378: function (t, e, r) {
      var n = r(1778),
        i = r(6520),
        a = n("keys");
      t.exports = function (t) {
        return a[t] || (a[t] = i(t));
      };
    },
    4460: function (t, e, r) {
      var n = r(6840),
        i = r(9131),
        a = "__core-js_shared__",
        o = n[a] || i(a, {});
      t.exports = o;
    },
    1778: function (t, e, r) {
      var n = r(3608),
        i = r(4460);
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.29.1",
        mode: n ? "pure" : "global",
        copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    917: function (t, e, r) {
      var n = r(5884),
        i = r(611),
        a = r(9055),
        o = r(5028)("species");
      t.exports = function (t, e) {
        var r,
          s = n(t).constructor;
        return void 0 === s || a((r = n(s)[o])) ? e : i(r);
      };
    },
    8424: function (t, e, r) {
      var n = r(4932),
        i = r(2128),
        a = r(6124),
        o = r(2244),
        s = n("".charAt),
        u = n("".charCodeAt),
        c = n("".slice),
        l = function (t) {
          return function (e, r) {
            var n,
              l,
              h = a(o(e)),
              f = i(r),
              p = h.length;
            return f < 0 || f >= p
              ? t
                ? ""
                : void 0
              : (n = u(h, f)) < 55296 ||
                n > 56319 ||
                f + 1 === p ||
                (l = u(h, f + 1)) < 56320 ||
                l > 57343
              ? t
                ? s(h, f)
                : n
              : t
              ? c(h, f, f + 2)
              : l - 56320 + ((n - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: l(!1), charAt: l(!0) };
    },
    1879: function (t, e, r) {
      var n = r(3211).PROPER,
        i = r(2837),
        a = r(5450);
      t.exports = function (t) {
        return i(function () {
          return (
            !!a[t]() ||
            "\u200b\x85\u180e" !== "\u200b\x85\u180e"[t]() ||
            (n && a[t].name !== t)
          );
        });
      };
    },
    6889: function (t, e, r) {
      var n = r(4932),
        i = r(2244),
        a = r(6124),
        o = r(5450),
        s = n("".replace),
        u = RegExp("^[" + o + "]+"),
        c = RegExp("(^|[^" + o + "])[" + o + "]+$"),
        l = function (t) {
          return function (e) {
            var r = a(i(e));
            return 1 & t && (r = s(r, u, "")), 2 & t && (r = s(r, c, "$1")), r;
          };
        };
      t.exports = { start: l(1), end: l(2), trim: l(3) };
    },
    166: function (t, e, r) {
      var n = r(5372),
        i = r(2837);
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && n && n < 41)
          );
        });
    },
    1625: function (t, e, r) {
      var n,
        i,
        a,
        o,
        s = r(6840),
        u = r(6339),
        c = r(5851),
        l = r(9218),
        h = r(3013),
        f = r(2837),
        p = r(2012),
        v = r(5618),
        g = r(937),
        y = r(4974),
        d = r(3929),
        m = r(1653),
        x = s.setImmediate,
        b = s.clearImmediate,
        w = s.process,
        S = s.Dispatch,
        k = s.Function,
        T = s.MessageChannel,
        O = s.String,
        A = 0,
        E = {},
        P = "onreadystatechange";
      f(function () {
        n = s.location;
      });
      var C = function (t) {
          if (h(E, t)) {
            var e = E[t];
            delete E[t], e();
          }
        },
        M = function (t) {
          return function () {
            C(t);
          };
        },
        N = function (t) {
          C(t.data);
        },
        _ = function (t) {
          s.postMessage(O(t), n.protocol + "//" + n.host);
        };
      (x && b) ||
        ((x = function (t) {
          y(arguments.length, 1);
          var e = l(t) ? t : k(t),
            r = v(arguments, 1);
          return (
            (E[++A] = function () {
              u(e, void 0, r);
            }),
            i(A),
            A
          );
        }),
        (b = function (t) {
          delete E[t];
        }),
        m
          ? (i = function (t) {
              w.nextTick(M(t));
            })
          : S && S.now
          ? (i = function (t) {
              S.now(M(t));
            })
          : T && !d
          ? ((o = (a = new T()).port2),
            (a.port1.onmessage = N),
            (i = c(o.postMessage, o)))
          : s.addEventListener &&
            l(s.postMessage) &&
            !s.importScripts &&
            n &&
            "file:" !== n.protocol &&
            !f(_)
          ? ((i = _), s.addEventListener("message", N, !1))
          : (i =
              P in g("script")
                ? function (t) {
                    p.appendChild(g("script"))[P] = function () {
                      p.removeChild(this), C(t);
                    };
                  }
                : function (t) {
                    setTimeout(M(t), 0);
                  })),
        (t.exports = { set: x, clear: b });
    },
    1823: function (t, e, r) {
      var n = r(2128),
        i = Math.max,
        a = Math.min;
      t.exports = function (t, e) {
        var r = n(t);
        return r < 0 ? i(r + e, 0) : a(r, e);
      };
    },
    5770: function (t, e, r) {
      var n = r(1036),
        i = r(2244);
      t.exports = function (t) {
        return n(i(t));
      };
    },
    2128: function (t, e, r) {
      var n = r(1246);
      t.exports = function (t) {
        var e = +t;
        return e !== e || 0 === e ? 0 : n(e);
      };
    },
    2347: function (t, e, r) {
      var n = r(2128),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0;
      };
    },
    8385: function (t, e, r) {
      var n = r(2244),
        i = Object;
      t.exports = function (t) {
        return i(n(t));
      };
    },
    6740: function (t, e, r) {
      var n = r(8513),
        i = r(3931),
        a = r(8287),
        o = r(3863),
        s = r(7772),
        u = r(5028),
        c = TypeError,
        l = u("toPrimitive");
      t.exports = function (t, e) {
        if (!i(t) || a(t)) return t;
        var r,
          u = o(t, l);
        if (u) {
          if (
            (void 0 === e && (e = "default"), (r = n(u, t, e)), !i(r) || a(r))
          )
            return r;
          throw c("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), s(t, e);
      };
    },
    4655: function (t, e, r) {
      var n = r(6740),
        i = r(8287);
      t.exports = function (t) {
        var e = n(t, "string");
        return i(e) ? e : e + "";
      };
    },
    6042: function (t, e, r) {
      var n = {};
      (n[r(5028)("toStringTag")] = "z"),
        (t.exports = "[object z]" === String(n));
    },
    6124: function (t, e, r) {
      var n = r(7205),
        i = String;
      t.exports = function (t) {
        if ("Symbol" === n(t))
          throw TypeError("Cannot convert a Symbol value to a string");
        return i(t);
      };
    },
    1772: function (t) {
      var e = String;
      t.exports = function (t) {
        try {
          return e(t);
        } catch (r) {
          return "Object";
        }
      };
    },
    6520: function (t, e, r) {
      var n = r(4932),
        i = 0,
        a = Math.random(),
        o = n((1).toString);
      t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + o(++i + a, 36);
      };
    },
    7611: function (t, e, r) {
      var n = r(166);
      t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    6056: function (t, e, r) {
      var n = r(1196),
        i = r(2837);
      t.exports =
        n &&
        i(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    4974: function (t) {
      var e = TypeError;
      t.exports = function (t, r) {
        if (t < r) throw e("Not enough arguments");
        return t;
      };
    },
    1615: function (t, e, r) {
      var n = r(6840),
        i = r(9218),
        a = n.WeakMap;
      t.exports = i(a) && /native code/.test(String(a));
    },
    5028: function (t, e, r) {
      var n = r(6840),
        i = r(1778),
        a = r(3013),
        o = r(6520),
        s = r(166),
        u = r(7611),
        c = n.Symbol,
        l = i("wks"),
        h = u ? c.for || c : (c && c.withoutSetter) || o;
      t.exports = function (t) {
        return a(l, t) || (l[t] = s && a(c, t) ? c[t] : h("Symbol." + t)), l[t];
      };
    },
    5450: function (t) {
      t.exports =
        "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    },
    5036: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(7926),
        a = r(488).indexOf,
        o = r(2241),
        s = i([].indexOf),
        u = !!s && 1 / s([1], 1, -0) < 0;
      n(
        { target: "Array", proto: !0, forced: u || !o("indexOf") },
        {
          indexOf: function (t) {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            return u ? s(this, t, e) || 0 : a(this, t, e);
          },
        }
      );
    },
    8887: function (t, e, r) {
      "use strict";
      var n = r(5770),
        i = r(5715),
        a = r(9706),
        o = r(9671),
        s = r(1592).f,
        u = r(4931),
        c = r(5927),
        l = r(3608),
        h = r(1196),
        f = "Array Iterator",
        p = o.set,
        v = o.getterFor(f);
      t.exports = u(
        Array,
        "Array",
        function (t, e) {
          p(this, { type: f, target: n(t), index: 0, kind: e });
        },
        function () {
          var t = v(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
          return !e || n >= e.length
            ? ((t.target = void 0), c(void 0, !0))
            : c("keys" == r ? n : "values" == r ? e[n] : [n, e[n]], !1);
        },
        "values"
      );
      var g = (a.Arguments = a.Array);
      if (
        (i("keys"), i("values"), i("entries"), !l && h && "values" !== g.name)
      )
        try {
          s(g, "name", { value: "values" });
        } catch (y) {}
    },
    2603: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(4512).left,
        a = r(2241),
        o = r(5372);
      n(
        {
          target: "Array",
          proto: !0,
          forced: (!r(1653) && o > 79 && o < 83) || !a("reduce"),
        },
        {
          reduce: function (t) {
            var e = arguments.length;
            return i(this, t, e, e > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    7506: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(8513),
        a = r(6724),
        o = r(246),
        s = r(3752),
        u = r(4439);
      n(
        { target: "Promise", stat: !0, forced: r(1321) },
        {
          all: function (t) {
            var e = this,
              r = o.f(e),
              n = r.resolve,
              c = r.reject,
              l = s(function () {
                var r = a(e.resolve),
                  o = [],
                  s = 0,
                  l = 1;
                u(t, function (t) {
                  var a = s++,
                    u = !1;
                  l++,
                    i(r, e, t).then(function (t) {
                      u || ((u = !0), (o[a] = t), --l || n(o));
                    }, c);
                }),
                  --l || n(o);
              });
            return l.error && c(l.value), r.promise;
          },
        }
      );
    },
    223: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(3608),
        a = r(7426).CONSTRUCTOR,
        o = r(31),
        s = r(1240),
        u = r(9218),
        c = r(7543),
        l = o && o.prototype;
      if (
        (n(
          { target: "Promise", proto: !0, forced: a, real: !0 },
          {
            catch: function (t) {
              return this.then(void 0, t);
            },
          }
        ),
        !i && u(o))
      ) {
        var h = s("Promise").prototype.catch;
        l.catch !== h && c(l, "catch", h, { unsafe: !0 });
      }
    },
    5072: function (t, e, r) {
      "use strict";
      var n,
        i,
        a,
        o = r(7768),
        s = r(3608),
        u = r(1653),
        c = r(6840),
        l = r(8513),
        h = r(7543),
        f = r(4381),
        p = r(3370),
        v = r(2267),
        g = r(6724),
        y = r(9218),
        d = r(3931),
        m = r(4817),
        x = r(917),
        b = r(1625).set,
        w = r(4410),
        S = r(5995),
        k = r(3752),
        T = r(9033),
        O = r(9671),
        A = r(31),
        E = r(7426),
        P = r(246),
        C = "Promise",
        M = E.CONSTRUCTOR,
        N = E.REJECTION_EVENT,
        _ = E.SUBCLASSING,
        R = O.getterFor(C),
        V = O.set,
        I = A && A.prototype,
        L = A,
        D = I,
        j = c.TypeError,
        B = c.document,
        F = c.process,
        z = P.f,
        U = z,
        H = !!(B && B.createEvent && c.dispatchEvent),
        X = "unhandledrejection",
        Y = function (t) {
          var e;
          return !(!d(t) || !y((e = t.then))) && e;
        },
        G = function (t, e) {
          var r,
            n,
            i,
            a = e.value,
            o = 1 == e.state,
            s = o ? t.ok : t.fail,
            u = t.resolve,
            c = t.reject,
            h = t.domain;
          try {
            s
              ? (o || (2 === e.rejection && $(e), (e.rejection = 1)),
                !0 === s
                  ? (r = a)
                  : (h && h.enter(), (r = s(a)), h && (h.exit(), (i = !0))),
                r === t.promise
                  ? c(j("Promise-chain cycle"))
                  : (n = Y(r))
                  ? l(n, r, u, c)
                  : u(r))
              : c(a);
          } catch (f) {
            h && !i && h.exit(), c(f);
          }
        },
        W = function (t, e) {
          t.notified ||
            ((t.notified = !0),
            w(function () {
              for (var r, n = t.reactions; (r = n.get()); ) G(r, t);
              (t.notified = !1), e && !t.rejection && q(t);
            }));
        },
        Z = function (t, e, r) {
          var n, i;
          H
            ? (((n = B.createEvent("Event")).promise = e),
              (n.reason = r),
              n.initEvent(t, !1, !0),
              c.dispatchEvent(n))
            : (n = { promise: e, reason: r }),
            !N && (i = c["on" + t])
              ? i(n)
              : t === X && S("Unhandled promise rejection", r);
        },
        q = function (t) {
          l(b, c, function () {
            var e,
              r = t.facade,
              n = t.value;
            if (
              Q(t) &&
              ((e = k(function () {
                u ? F.emit("unhandledRejection", n, r) : Z(X, r, n);
              })),
              (t.rejection = u || Q(t) ? 2 : 1),
              e.error)
            )
              throw e.value;
          });
        },
        Q = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        $ = function (t) {
          l(b, c, function () {
            var e = t.facade;
            u
              ? F.emit("rejectionHandled", e)
              : Z("rejectionhandled", e, t.value);
          });
        },
        K = function (t, e, r) {
          return function (n) {
            t(e, n, r);
          };
        },
        J = function (t, e, r) {
          t.done ||
            ((t.done = !0),
            r && (t = r),
            (t.value = e),
            (t.state = 2),
            W(t, !0));
        },
        tt = function t(e, r, n) {
          if (!e.done) {
            (e.done = !0), n && (e = n);
            try {
              if (e.facade === r) throw j("Promise can't be resolved itself");
              var i = Y(r);
              i
                ? w(function () {
                    var n = { done: !1 };
                    try {
                      l(i, r, K(t, n, e), K(J, n, e));
                    } catch (a) {
                      J(n, a, e);
                    }
                  })
                : ((e.value = r), (e.state = 1), W(e, !1));
            } catch (a) {
              J({ done: !1 }, a, e);
            }
          }
        };
      if (
        M &&
        ((D = (L = function (t) {
          m(this, D), g(t), l(n, this);
          var e = R(this);
          try {
            t(K(tt, e), K(J, e));
          } catch (r) {
            J(e, r);
          }
        }).prototype),
        ((n = function (t) {
          V(this, {
            type: C,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new T(),
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = h(D, "then", function (t, e) {
          var r = R(this),
            n = z(x(this, L));
          return (
            (r.parent = !0),
            (n.ok = !y(t) || t),
            (n.fail = y(e) && e),
            (n.domain = u ? F.domain : void 0),
            0 == r.state
              ? r.reactions.add(n)
              : w(function () {
                  G(n, r);
                }),
            n.promise
          );
        })),
        (i = function () {
          var t = new n(),
            e = R(t);
          (this.promise = t),
            (this.resolve = K(tt, e)),
            (this.reject = K(J, e));
        }),
        (P.f = z =
          function (t) {
            return t === L || undefined === t ? new i(t) : U(t);
          }),
        !s && y(A) && I !== Object.prototype)
      ) {
        (a = I.then),
          _ ||
            h(
              I,
              "then",
              function (t, e) {
                var r = this;
                return new L(function (t, e) {
                  l(a, r, t, e);
                }).then(t, e);
              },
              { unsafe: !0 }
            );
        try {
          delete I.constructor;
        } catch (et) {}
        f && f(I, D);
      }
      o({ global: !0, constructor: !0, wrap: !0, forced: M }, { Promise: L }),
        p(L, C, !1, !0),
        v(C);
    },
    7675: function (t, e, r) {
      r(5072), r(7506), r(223), r(6522), r(8001), r(7510);
    },
    6522: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(8513),
        a = r(6724),
        o = r(246),
        s = r(3752),
        u = r(4439);
      n(
        { target: "Promise", stat: !0, forced: r(1321) },
        {
          race: function (t) {
            var e = this,
              r = o.f(e),
              n = r.reject,
              c = s(function () {
                var o = a(e.resolve);
                u(t, function (t) {
                  i(o, e, t).then(r.resolve, n);
                });
              });
            return c.error && n(c.value), r.promise;
          },
        }
      );
    },
    8001: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(8513),
        a = r(246);
      n(
        { target: "Promise", stat: !0, forced: r(7426).CONSTRUCTOR },
        {
          reject: function (t) {
            var e = a.f(this);
            return i(e.reject, void 0, t), e.promise;
          },
        }
      );
    },
    7510: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(1240),
        a = r(3608),
        o = r(31),
        s = r(7426).CONSTRUCTOR,
        u = r(6321),
        c = i("Promise"),
        l = a && !s;
      n(
        { target: "Promise", stat: !0, forced: a || s },
        {
          resolve: function (t) {
            return u(l && this === c ? o : this, t);
          },
        }
      );
    },
    447: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(4087);
      n({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    4208: function (t, e, r) {
      "use strict";
      var n = r(3211).PROPER,
        i = r(7543),
        a = r(5884),
        o = r(6124),
        s = r(2837),
        u = r(7667),
        c = "toString",
        l = RegExp.prototype[c],
        h = s(function () {
          return "/a/b" != l.call({ source: "a", flags: "b" });
        }),
        f = n && l.name != c;
      (h || f) &&
        i(
          RegExp.prototype,
          c,
          function () {
            var t = a(this);
            return "/" + o(t.source) + "/" + o(u(t));
          },
          { unsafe: !0 }
        );
    },
    3898: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(7926),
        a = r(2573).f,
        o = r(2347),
        s = r(6124),
        u = r(9693),
        c = r(2244),
        l = r(2525),
        h = r(3608),
        f = i("".endsWith),
        p = i("".slice),
        v = Math.min,
        g = l("endsWith");
      n(
        {
          target: "String",
          proto: !0,
          forced:
            !(
              !h &&
              !g &&
              !!(function () {
                var t = a(String.prototype, "endsWith");
                return t && !t.writable;
              })()
            ) && !g,
        },
        {
          endsWith: function (t) {
            var e = s(c(this));
            u(t);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = e.length,
              i = void 0 === r ? n : v(o(r), n),
              a = s(t);
            return f ? f(e, a, i) : p(e, i - a.length, i) === a;
          },
        }
      );
    },
    4121: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(4932),
        a = r(9693),
        o = r(2244),
        s = r(6124),
        u = r(2525),
        c = i("".indexOf);
      n(
        { target: "String", proto: !0, forced: !u("includes") },
        {
          includes: function (t) {
            return !!~c(
              s(o(this)),
              s(a(t)),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    6245: function (t, e, r) {
      "use strict";
      var n = r(8513),
        i = r(8093),
        a = r(5884),
        o = r(9055),
        s = r(2347),
        u = r(6124),
        c = r(2244),
        l = r(3863),
        h = r(5466),
        f = r(2781);
      i("match", function (t, e, r) {
        return [
          function (e) {
            var r = c(this),
              i = o(e) ? void 0 : l(e, t);
            return i ? n(i, e, r) : new RegExp(e)[t](u(r));
          },
          function (t) {
            var n = a(this),
              i = u(t),
              o = r(e, n, i);
            if (o.done) return o.value;
            if (!n.global) return f(n, i);
            var c = n.unicode;
            n.lastIndex = 0;
            for (var l, p = [], v = 0; null !== (l = f(n, i)); ) {
              var g = u(l[0]);
              (p[v] = g),
                "" === g && (n.lastIndex = h(i, s(n.lastIndex), c)),
                v++;
            }
            return 0 === v ? null : p;
          },
        ];
      });
    },
    4178: function (t, e, r) {
      "use strict";
      var n = r(6339),
        i = r(8513),
        a = r(4932),
        o = r(8093),
        s = r(2837),
        u = r(5884),
        c = r(9218),
        l = r(9055),
        h = r(2128),
        f = r(2347),
        p = r(6124),
        v = r(2244),
        g = r(5466),
        y = r(3863),
        d = r(7794),
        m = r(2781),
        x = r(5028)("replace"),
        b = Math.max,
        w = Math.min,
        S = a([].concat),
        k = a([].push),
        T = a("".indexOf),
        O = a("".slice),
        A = "$0" === "a".replace(/./, "$0"),
        E = !!/./[x] && "" === /./[x]("a", "$0");
      o(
        "replace",
        function (t, e, r) {
          var a = E ? "$" : "$0";
          return [
            function (t, r) {
              var n = v(this),
                a = l(t) ? void 0 : y(t, x);
              return a ? i(a, t, n, r) : i(e, p(n), t, r);
            },
            function (t, i) {
              var o = u(this),
                s = p(t);
              if ("string" == typeof i && -1 === T(i, a) && -1 === T(i, "$<")) {
                var l = r(e, o, s, i);
                if (l.done) return l.value;
              }
              var v = c(i);
              v || (i = p(i));
              var y = o.global;
              if (y) {
                var x = o.unicode;
                o.lastIndex = 0;
              }
              for (var A = []; ; ) {
                var E = m(o, s);
                if (null === E) break;
                if ((k(A, E), !y)) break;
                "" === p(E[0]) && (o.lastIndex = g(s, f(o.lastIndex), x));
              }
              for (var P, C = "", M = 0, N = 0; N < A.length; N++) {
                for (
                  var _ = p((E = A[N])[0]),
                    R = b(w(h(E.index), s.length), 0),
                    V = [],
                    I = 1;
                  I < E.length;
                  I++
                )
                  k(V, void 0 === (P = E[I]) ? P : String(P));
                var L = E.groups;
                if (v) {
                  var D = S([_], V, R, s);
                  void 0 !== L && k(D, L);
                  var j = p(n(i, void 0, D));
                } else j = d(_, s, R, V, L, i);
                R >= M && ((C += O(s, M, R) + j), (M = R + _.length));
              }
              return C + O(s, M);
            },
          ];
        },
        !!s(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }) ||
          !A ||
          E
      );
    },
    2872: function (t, e, r) {
      "use strict";
      var n = r(6339),
        i = r(8513),
        a = r(4932),
        o = r(8093),
        s = r(5884),
        u = r(9055),
        c = r(670),
        l = r(2244),
        h = r(917),
        f = r(5466),
        p = r(2347),
        v = r(6124),
        g = r(3863),
        y = r(3278),
        d = r(2781),
        m = r(4087),
        x = r(8596),
        b = r(2837),
        w = x.UNSUPPORTED_Y,
        S = 4294967295,
        k = Math.min,
        T = [].push,
        O = a(/./.exec),
        A = a(T),
        E = a("".slice),
        P = !b(function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
        });
      o(
        "split",
        function (t, e, r) {
          var a;
          return (
            (a =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (t, r) {
                    var a = v(l(this)),
                      o = void 0 === r ? S : r >>> 0;
                    if (0 === o) return [];
                    if (void 0 === t) return [a];
                    if (!c(t)) return i(e, a, t, o);
                    for (
                      var s,
                        u,
                        h,
                        f = [],
                        p =
                          (t.ignoreCase ? "i" : "") +
                          (t.multiline ? "m" : "") +
                          (t.unicode ? "u" : "") +
                          (t.sticky ? "y" : ""),
                        g = 0,
                        d = new RegExp(t.source, p + "g");
                      (s = i(m, d, a)) &&
                      !(
                        (u = d.lastIndex) > g &&
                        (A(f, E(a, g, s.index)),
                        s.length > 1 && s.index < a.length && n(T, f, y(s, 1)),
                        (h = s[0].length),
                        (g = u),
                        f.length >= o)
                      );

                    )
                      d.lastIndex === s.index && d.lastIndex++;
                    return (
                      g === a.length
                        ? (!h && O(d, "")) || A(f, "")
                        : A(f, E(a, g)),
                      f.length > o ? y(f, 0, o) : f
                    );
                  }
                : "0".split(void 0, 0).length
                ? function (t, r) {
                    return void 0 === t && 0 === r ? [] : i(e, this, t, r);
                  }
                : e),
            [
              function (e, r) {
                var n = l(this),
                  o = u(e) ? void 0 : g(e, t);
                return o ? i(o, e, n, r) : i(a, v(n), e, r);
              },
              function (t, n) {
                var i = s(this),
                  o = v(t),
                  u = r(a, i, o, n, a !== e);
                if (u.done) return u.value;
                var c = h(i, RegExp),
                  l = i.unicode,
                  g =
                    (i.ignoreCase ? "i" : "") +
                    (i.multiline ? "m" : "") +
                    (i.unicode ? "u" : "") +
                    (w ? "g" : "y"),
                  y = new c(w ? "^(?:" + i.source + ")" : i, g),
                  m = void 0 === n ? S : n >>> 0;
                if (0 === m) return [];
                if (0 === o.length) return null === d(y, o) ? [o] : [];
                for (var x = 0, b = 0, T = []; b < o.length; ) {
                  y.lastIndex = w ? 0 : b;
                  var O,
                    P = d(y, w ? E(o, b) : o);
                  if (
                    null === P ||
                    (O = k(p(y.lastIndex + (w ? b : 0)), o.length)) === x
                  )
                    b = f(o, b, l);
                  else {
                    if ((A(T, E(o, x, b)), T.length === m)) return T;
                    for (var C = 1; C <= P.length - 1; C++)
                      if ((A(T, P[C]), T.length === m)) return T;
                    b = x = O;
                  }
                }
                return A(T, E(o, x)), T;
              },
            ]
          );
        },
        !P,
        w
      );
    },
    288: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(7926),
        a = r(2573).f,
        o = r(2347),
        s = r(6124),
        u = r(9693),
        c = r(2244),
        l = r(2525),
        h = r(3608),
        f = i("".startsWith),
        p = i("".slice),
        v = Math.min,
        g = l("startsWith");
      n(
        {
          target: "String",
          proto: !0,
          forced:
            !(
              !h &&
              !g &&
              !!(function () {
                var t = a(String.prototype, "startsWith");
                return t && !t.writable;
              })()
            ) && !g,
        },
        {
          startsWith: function (t) {
            var e = s(c(this));
            u(t);
            var r = o(
                v(arguments.length > 1 ? arguments[1] : void 0, e.length)
              ),
              n = s(t);
            return f ? f(e, n, r) : p(e, r, r + n.length) === n;
          },
        }
      );
    },
    2934: function (t, e, r) {
      "use strict";
      var n = r(7768),
        i = r(6889).trim;
      n(
        { target: "String", proto: !0, forced: r(1879)("trim") },
        {
          trim: function () {
            return i(this);
          },
        }
      );
    },
    1740: function (t, e, r) {
      var n = r(6840),
        i = r(650),
        a = r(2752),
        o = r(8887),
        s = r(3873),
        u = r(5028),
        c = u("iterator"),
        l = u("toStringTag"),
        h = o.values,
        f = function (t, e) {
          if (t) {
            if (t[c] !== h)
              try {
                s(t, c, h);
              } catch (n) {
                t[c] = h;
              }
            if ((t[l] || s(t, l, e), i[e]))
              for (var r in o)
                if (t[r] !== o[r])
                  try {
                    s(t, r, o[r]);
                  } catch (n) {
                    t[r] = o[r];
                  }
          }
        };
      for (var p in i) f(n[p] && n[p].prototype, p);
      f(a, "DOMTokenList");
    },
    8872: function (t) {
      (function () {
        var e, r, n, i, a, o;
        "undefined" !== typeof performance &&
        null !== performance &&
        performance.now
          ? (t.exports = function () {
              return performance.now();
            })
          : "undefined" !== typeof process && null !== process && process.hrtime
          ? ((t.exports = function () {
              return (e() - a) / 1e6;
            }),
            (r = process.hrtime),
            (i = (e = function () {
              var t;
              return 1e9 * (t = r())[0] + t[1];
            })()),
            (o = 1e9 * process.uptime()),
            (a = i - o))
          : Date.now
          ? ((t.exports = function () {
              return Date.now() - n;
            }),
            (n = Date.now()))
          : ((t.exports = function () {
              return new Date().getTime() - n;
            }),
            (n = new Date().getTime()));
      }).call(this);
    },
    5475: function (t, e, r) {
      for (
        var n = r(8872),
          i = "undefined" === typeof window ? r.g : window,
          a = ["moz", "webkit"],
          o = "AnimationFrame",
          s = i["request" + o],
          u = i["cancel" + o] || i["cancelRequest" + o],
          c = 0;
        !s && c < a.length;
        c++
      )
        (s = i[a[c] + "Request" + o]),
          (u = i[a[c] + "Cancel" + o] || i[a[c] + "CancelRequest" + o]);
      if (!s || !u) {
        var l = 0,
          h = 0,
          f = [];
        (s = function (t) {
          if (0 === f.length) {
            var e = n(),
              r = Math.max(0, 16.666666666666668 - (e - l));
            (l = r + e),
              setTimeout(function () {
                var t = f.slice(0);
                f.length = 0;
                for (
                  var e = function () {
                      if (!t[r].cancelled)
                        try {
                          t[r].callback(l);
                        } catch (e) {
                          setTimeout(function () {
                            throw e;
                          }, 0);
                        }
                    },
                    r = 0;
                  r < t.length;
                  r++
                )
                  e();
              }, Math.round(r));
          }
          return f.push({ handle: ++h, callback: t, cancelled: !1 }), h;
        }),
          (u = function (t) {
            for (var e = 0; e < f.length; e++)
              f[e].handle === t && (f[e].cancelled = !0);
          });
      }
      (t.exports = function (t) {
        return s.call(i, t);
      }),
        (t.exports.cancel = function () {
          u.apply(i, arguments);
        }),
        (t.exports.polyfill = function (t) {
          t || (t = i),
            (t.requestAnimationFrame = s),
            (t.cancelAnimationFrame = u);
        });
    },
    5001: function (t) {
      t.exports = function (t) {
        (this.ok = !1),
          (this.alpha = 1),
          "#" == t.charAt(0) && (t = t.substr(1, 6)),
          (t = (t = t.replace(/ /g, "")).toLowerCase());
        var e = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32",
        };
        t = e[t] || t;
        for (
          var r = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                process: function (t) {
                  return [
                    parseInt(t[1]),
                    parseInt(t[2]),
                    parseInt(t[3]),
                    parseFloat(t[4]),
                  ];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ["#00ff00", "336699"],
                process: function (t) {
                  return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16),
                  ];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ["#fb0", "f0f"],
                process: function (t) {
                  return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16),
                  ];
                },
              },
            ],
            n = 0;
          n < r.length;
          n++
        ) {
          var i = r[n].re,
            a = r[n].process,
            o = i.exec(t);
          if (o) {
            var s = a(o);
            (this.r = s[0]),
              (this.g = s[1]),
              (this.b = s[2]),
              s.length > 3 && (this.alpha = s[3]),
              (this.ok = !0);
          }
        }
        (this.r =
          this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g =
            this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b =
            this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha =
            this.alpha < 0
              ? 0
              : this.alpha > 1 || isNaN(this.alpha)
              ? 1
              : this.alpha),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toRGBA = function () {
            return (
              "rgba(" +
              this.r +
              ", " +
              this.g +
              ", " +
              this.b +
              ", " +
              this.alpha +
              ")"
            );
          }),
          (this.toHex = function () {
            var t = this.r.toString(16),
              e = this.g.toString(16),
              r = this.b.toString(16);
            return (
              1 == t.length && (t = "0" + t),
              1 == e.length && (e = "0" + e),
              1 == r.length && (r = "0" + r),
              "#" + t + e + r
            );
          }),
          (this.getHelpXML = function () {
            for (var t = new Array(), n = 0; n < r.length; n++)
              for (var i = r[n].example, a = 0; a < i.length; a++)
                t[t.length] = i[a];
            for (var o in e) t[t.length] = o;
            var s = document.createElement("ul");
            s.setAttribute("id", "rgbcolor-examples");
            for (n = 0; n < t.length; n++)
              try {
                var u = document.createElement("li"),
                  c = new RGBColor(t[n]),
                  l = document.createElement("div");
                (l.style.cssText =
                  "margin: 3px; border: 1px solid black; background:" +
                  c.toHex() +
                  "; color:" +
                  c.toHex()),
                  l.appendChild(document.createTextNode("test"));
                var h = document.createTextNode(
                  " " + t[n] + " -> " + c.toRGB() + " -> " + c.toHex()
                );
                u.appendChild(l), u.appendChild(h), s.appendChild(u);
              } catch (f) {}
            return s;
          });
      };
    },
    4573: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          AElement: function () {
            return Ae;
          },
          AnimateColorElement: function () {
            return be;
          },
          AnimateElement: function () {
            return xe;
          },
          AnimateTransformElement: function () {
            return we;
          },
          BoundingBox: function () {
            return Qt;
          },
          CB1: function () {
            return xt;
          },
          CB2: function () {
            return bt;
          },
          CB3: function () {
            return wt;
          },
          CB4: function () {
            return St;
          },
          Canvg: function () {
            return nr;
          },
          CircleElement: function () {
            return oe;
          },
          ClipPathElement: function () {
            return He;
          },
          DefsElement: function () {
            return pe;
          },
          DescElement: function () {
            return Qe;
          },
          Document: function () {
            return tr;
          },
          Element: function () {
            return Xt;
          },
          EllipseElement: function () {
            return se;
          },
          FeColorMatrixElement: function () {
            return Fe;
          },
          FeCompositeElement: function () {
            return We;
          },
          FeDropShadowElement: function () {
            return Ye;
          },
          FeGaussianBlurElement: function () {
            return Ze;
          },
          FeMorphologyElement: function () {
            return Ge;
          },
          FilterElement: function () {
            return Xe;
          },
          Font: function () {
            return qt;
          },
          FontElement: function () {
            return Se;
          },
          FontFaceElement: function () {
            return ke;
          },
          GElement: function () {
            return ve;
          },
          GlyphElement: function () {
            return te;
          },
          GradientElement: function () {
            return ge;
          },
          ImageElement: function () {
            return Ne;
          },
          LineElement: function () {
            return ue;
          },
          LinearGradientElement: function () {
            return ye;
          },
          MarkerElement: function () {
            return fe;
          },
          MaskElement: function () {
            return ze;
          },
          Matrix: function () {
            return Bt;
          },
          MissingGlyphElement: function () {
            return Te;
          },
          Mouse: function () {
            return Ct;
          },
          PSEUDO_ZERO: function () {
            return gt;
          },
          Parser: function () {
            return It;
          },
          PathElement: function () {
            return Jt;
          },
          PathParser: function () {
            return $t;
          },
          PatternElement: function () {
            return he;
          },
          Point: function () {
            return Pt;
          },
          PolygonElement: function () {
            return le;
          },
          PolylineElement: function () {
            return ce;
          },
          Property: function () {
            return At;
          },
          QB1: function () {
            return kt;
          },
          QB2: function () {
            return Tt;
          },
          QB3: function () {
            return Ot;
          },
          RadialGradientElement: function () {
            return de;
          },
          RectElement: function () {
            return ae;
          },
          RenderedElement: function () {
            return Kt;
          },
          Rotate: function () {
            return Dt;
          },
          SVGElement: function () {
            return ie;
          },
          SVGFontLoader: function () {
            return Re;
          },
          Scale: function () {
            return jt;
          },
          Screen: function () {
            return _t;
          },
          Skew: function () {
            return Ft;
          },
          SkewX: function () {
            return zt;
          },
          SkewY: function () {
            return Ut;
          },
          StopElement: function () {
            return me;
          },
          StyleElement: function () {
            return Ve;
          },
          SymbolElement: function () {
            return _e;
          },
          TRefElement: function () {
            return Oe;
          },
          TSpanElement: function () {
            return re;
          },
          TextElement: function () {
            return ee;
          },
          TextPathElement: function () {
            return Ce;
          },
          TitleElement: function () {
            return qe;
          },
          Transform: function () {
            return Ht;
          },
          Translate: function () {
            return Lt;
          },
          UnknownElement: function () {
            return Yt;
          },
          UseElement: function () {
            return Ie;
          },
          ViewPort: function () {
            return Et;
          },
          compressSpaces: function () {
            return K;
          },
          default: function () {
            return nr;
          },
          getSelectorSpecificity: function () {
            return vt;
          },
          normalizeAttributeName: function () {
            return nt;
          },
          normalizeColor: function () {
            return at;
          },
          parseExternalUrl: function () {
            return it;
          },
          presets: function () {
            return $;
          },
          toNumbers: function () {
            return et;
          },
          trimLeft: function () {
            return J;
          },
          trimRight: function () {
            return tt;
          },
          vectorMagnitude: function () {
            return yt;
          },
          vectorsAngle: function () {
            return mt;
          },
          vectorsRatio: function () {
            return dt;
          },
        });
      var n = r(1002);
      function i(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function a(t, e) {
        if (e && ("object" === (0, n.Z)(e) || "function" === typeof e))
          return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return i(t);
      }
      var o = r(181);
      function s(t, e) {
        var r =
          ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!r) {
          if (
            Array.isArray(t) ||
            (r = (0, o.Z)(t)) ||
            (e && t && "number" === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return n >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[n++] };
              },
              e: function (t) {
                throw t;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          s = !0,
          u = !1;
        return {
          s: function () {
            r = r.call(t);
          },
          n: function () {
            var t = r.next();
            return (s = t.done), t;
          },
          e: function (t) {
            (u = !0), (a = t);
          },
          f: function () {
            try {
              s || null == r.return || r.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function u(t) {
        return (
          (u = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          u(t)
        );
      }
      function c() {
        return (
          (c =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, r) {
                  var n = (function (t, e) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(t, e) &&
                      null !== (t = u(t));

                    );
                    return t;
                  })(t, e);
                  if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, e);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? t : r)
                      : i.value;
                  }
                }),
          c.apply(this, arguments)
        );
      }
      var l = r(2982);
      function h(t, e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          h(t, e)
        );
      }
      function f(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && h(t, e);
      }
      function p(t) {
        var e = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = u(t);
          if (e) {
            var i = u(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return a(this, r);
        };
      }
      function v(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var g = r(9142);
      function y(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, (0, g.Z)(n.key), n);
        }
      }
      function d(t, e, r) {
        return (
          e && y(t.prototype, e),
          r && y(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      var m = r(885);
      function x() {
        x = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          r = e.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          s = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function c(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (M) {
          c = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            s = new E(n || []);
          return i(o, "_invoke", { value: k(t, r, s) }), o;
        }
        function h(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (M) {
            return { type: "throw", arg: M };
          }
        }
        t.wrap = l;
        var f = {};
        function p() {}
        function v() {}
        function g() {}
        var y = {};
        c(y, o, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          m = d && d(d(P([])));
        m && m !== e && r.call(m, o) && (y = m);
        var b = (g.prototype = p.prototype = Object.create(y));
        function w(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function S(t, e) {
          function a(i, o, s, u) {
            var c = h(t[i], t, o);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == (0, n.Z)(f) && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      a("next", t, s, u);
                    },
                    function (t) {
                      a("throw", t, s, u);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), s(l);
                    },
                    function (t) {
                      return a("throw", t, s, u);
                    }
                  );
            }
            u(c.arg);
          }
          var o;
          i(this, "_invoke", {
            value: function (t, r) {
              function n() {
                return new e(function (e, n) {
                  a(t, r, e, n);
                });
              }
              return (o = o ? o.then(n, n) : n());
            },
          });
        }
        function k(t, e, r) {
          var n = "suspendedStart";
          return function (i, a) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === i) throw a;
              return C();
            }
            for (r.method = i, r.arg = a; ; ) {
              var o = r.delegate;
              if (o) {
                var s = T(o, r);
                if (s) {
                  if (s === f) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = h(t, e, r);
              if ("normal" === u.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
            }
          };
        }
        function T(t, e) {
          var r = e.method,
            n = t.iterator[r];
          if (void 0 === n)
            return (
              (e.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = void 0),
                T(t, e),
                "throw" === e.method)) ||
                ("return" !== r &&
                  ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              f
            );
          var i = h(n, t.iterator, e.arg);
          if ("throw" === i.type)
            return (
              (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), f
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((e[t.resultName] = a.value),
                (e.next = t.nextLoc),
                "return" !== e.method &&
                  ((e.method = "next"), (e.arg = void 0)),
                (e.delegate = null),
                f)
              : a
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              f);
        }
        function O(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function A(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(O, this),
            this.reset(!0);
        }
        function P(t) {
          if (t) {
            var e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = g),
          i(b, "constructor", { value: g, configurable: !0 }),
          i(g, "constructor", { value: v, configurable: !0 }),
          (v.displayName = c(g, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(b)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          w(S.prototype),
          c(S.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, r, n, i, a) {
            void 0 === a && (a = Promise);
            var o = new S(l(e, r, n, i), a);
            return t.isGeneratorFunction(r)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          w(b),
          c(b, u, "Generator"),
          c(b, o, function () {
            return this;
          }),
          c(b, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = P),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(A),
                !t)
              )
                for (var e in this)
                  "t" === e.charAt(0) &&
                    r.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function n(r, n) {
                return (
                  (o.type = "throw"),
                  (o.arg = t),
                  (e.next = r),
                  n && ((e.method = "next"), (e.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  o = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (s && u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                f
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), A(r), f;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    A(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, r) {
              return (
                (this.delegate = { iterator: P(t), resultName: e, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          t
        );
      }
      r(7675);
      function b(t, e, r, n, i, a, o) {
        try {
          var s = t[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? e(u) : Promise.resolve(u).then(n, i);
      }
      function w(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (n, i) {
            var a = t.apply(e, r);
            function o(t) {
              b(a, n, i, o, s, "next", t);
            }
            function s(t) {
              b(a, n, i, o, s, "throw", t);
            }
            o(void 0);
          });
        };
      }
      r(6245), r(4178), r(288), r(8887), r(1740);
      var S = r(4942),
        k = (r(2603), r(3898), r(2872), r(5475)),
        T = (r(2934), r(5001)),
        O =
          (r(5036),
          r(4121),
          function (t, e) {
            return (O =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(t, e);
          });
      function A(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function r() {
          this.constructor = t;
        }
        O(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      function E(t, e) {
        var r = t[0],
          n = t[1];
        return [
          r * Math.cos(e) - n * Math.sin(e),
          r * Math.sin(e) + n * Math.cos(e),
        ];
      }
      function P() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = 0; r < t.length; r++)
          if ("number" != typeof t[r])
            throw new Error(
              "assertNumbers arguments[" +
                r +
                "] is not a number. " +
                typeof t[r] +
                " == typeof " +
                t[r]
            );
        return !0;
      }
      var C = Math.PI;
      function M(t, e, r) {
        (t.lArcFlag = 0 === t.lArcFlag ? 0 : 1),
          (t.sweepFlag = 0 === t.sweepFlag ? 0 : 1);
        var n = t.rX,
          i = t.rY,
          a = t.x,
          o = t.y;
        (n = Math.abs(t.rX)), (i = Math.abs(t.rY));
        var s = E([(e - a) / 2, (r - o) / 2], (-t.xRot / 180) * C),
          u = s[0],
          c = s[1],
          l = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
        1 < l && ((n *= Math.sqrt(l)), (i *= Math.sqrt(l))),
          (t.rX = n),
          (t.rY = i);
        var h =
            Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2),
          f =
            (t.lArcFlag !== t.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - h) / h)),
          p = ((n * c) / i) * f,
          v = ((-i * u) / n) * f,
          g = E([p, v], (t.xRot / 180) * C);
        (t.cX = g[0] + (e + a) / 2),
          (t.cY = g[1] + (r + o) / 2),
          (t.phi1 = Math.atan2((c - v) / i, (u - p) / n)),
          (t.phi2 = Math.atan2((-c - v) / i, (-u - p) / n)),
          0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * C),
          1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * C),
          (t.phi1 *= 180 / C),
          (t.phi2 *= 180 / C);
      }
      function N(t, e, r) {
        P(t, e, r);
        var n = t * t + e * e - r * r;
        if (0 > n) return [];
        if (0 === n)
          return [[(t * r) / (t * t + e * e), (e * r) / (t * t + e * e)]];
        var i = Math.sqrt(n);
        return [
          [
            (t * r + e * i) / (t * t + e * e),
            (e * r - t * i) / (t * t + e * e),
          ],
          [
            (t * r - e * i) / (t * t + e * e),
            (e * r + t * i) / (t * t + e * e),
          ],
        ];
      }
      var _,
        R = Math.PI / 180;
      function V(t, e, r) {
        return (1 - r) * t + r * e;
      }
      function I(t, e, r, n) {
        return t + Math.cos((n / 180) * C) * e + Math.sin((n / 180) * C) * r;
      }
      function L(t, e, r, n) {
        var i = 1e-6,
          a = e - t,
          o = r - e,
          s = 3 * a + 3 * (n - r) - 6 * o,
          u = 6 * (o - a),
          c = 3 * a;
        return Math.abs(s) < i
          ? [-c / u]
          : (function (t, e, r) {
              void 0 === r && (r = 1e-6);
              var n = (t * t) / 4 - e;
              if (n < -r) return [];
              if (n <= r) return [-t / 2];
              var i = Math.sqrt(n);
              return [-t / 2 - i, -t / 2 + i];
            })(u / s, c / s, i);
      }
      function D(t, e, r, n, i) {
        var a = 1 - i;
        return (
          t * (a * a * a) +
          e * (3 * a * a * i) +
          r * (3 * a * i * i) +
          n * (i * i * i)
        );
      }
      !(function (t) {
        function e() {
          return i(function (t, e, r) {
            return (
              t.relative &&
                (void 0 !== t.x1 && (t.x1 += e),
                void 0 !== t.y1 && (t.y1 += r),
                void 0 !== t.x2 && (t.x2 += e),
                void 0 !== t.y2 && (t.y2 += r),
                void 0 !== t.x && (t.x += e),
                void 0 !== t.y && (t.y += r),
                (t.relative = !1)),
              t
            );
          });
        }
        function r() {
          var t = NaN,
            e = NaN,
            r = NaN,
            n = NaN;
          return i(function (i, a, o) {
            return (
              i.type & H.SMOOTH_CURVE_TO &&
                ((i.type = H.CURVE_TO),
                (t = isNaN(t) ? a : t),
                (e = isNaN(e) ? o : e),
                (i.x1 = i.relative ? a - t : 2 * a - t),
                (i.y1 = i.relative ? o - e : 2 * o - e)),
              i.type & H.CURVE_TO
                ? ((t = i.relative ? a + i.x2 : i.x2),
                  (e = i.relative ? o + i.y2 : i.y2))
                : ((t = NaN), (e = NaN)),
              i.type & H.SMOOTH_QUAD_TO &&
                ((i.type = H.QUAD_TO),
                (r = isNaN(r) ? a : r),
                (n = isNaN(n) ? o : n),
                (i.x1 = i.relative ? a - r : 2 * a - r),
                (i.y1 = i.relative ? o - n : 2 * o - n)),
              i.type & H.QUAD_TO
                ? ((r = i.relative ? a + i.x1 : i.x1),
                  (n = i.relative ? o + i.y1 : i.y1))
                : ((r = NaN), (n = NaN)),
              i
            );
          });
        }
        function n() {
          var t = NaN,
            e = NaN;
          return i(function (r, n, i) {
            if (
              (r.type & H.SMOOTH_QUAD_TO &&
                ((r.type = H.QUAD_TO),
                (t = isNaN(t) ? n : t),
                (e = isNaN(e) ? i : e),
                (r.x1 = r.relative ? n - t : 2 * n - t),
                (r.y1 = r.relative ? i - e : 2 * i - e)),
              r.type & H.QUAD_TO)
            ) {
              (t = r.relative ? n + r.x1 : r.x1),
                (e = r.relative ? i + r.y1 : r.y1);
              var a = r.x1,
                o = r.y1;
              (r.type = H.CURVE_TO),
                (r.x1 = ((r.relative ? 0 : n) + 2 * a) / 3),
                (r.y1 = ((r.relative ? 0 : i) + 2 * o) / 3),
                (r.x2 = (r.x + 2 * a) / 3),
                (r.y2 = (r.y + 2 * o) / 3);
            } else (t = NaN), (e = NaN);
            return r;
          });
        }
        function i(t) {
          var e = 0,
            r = 0,
            n = NaN,
            i = NaN;
          return function (a) {
            if (isNaN(n) && !(a.type & H.MOVE_TO))
              throw new Error("path must start with moveto");
            var o = t(a, e, r, n, i);
            return (
              a.type & H.CLOSE_PATH && ((e = n), (r = i)),
              void 0 !== a.x && (e = a.relative ? e + a.x : a.x),
              void 0 !== a.y && (r = a.relative ? r + a.y : a.y),
              a.type & H.MOVE_TO && ((n = e), (i = r)),
              o
            );
          };
        }
        function a(t, e, r, n, a, o) {
          return (
            P(t, e, r, n, a, o),
            i(function (i, s, u, c) {
              var l = i.x1,
                h = i.x2,
                f = i.relative && !isNaN(c),
                p = void 0 !== i.x ? i.x : f ? 0 : s,
                v = void 0 !== i.y ? i.y : f ? 0 : u;
              function g(t) {
                return t * t;
              }
              i.type & H.HORIZ_LINE_TO &&
                0 !== e &&
                ((i.type = H.LINE_TO), (i.y = i.relative ? 0 : u)),
                i.type & H.VERT_LINE_TO &&
                  0 !== r &&
                  ((i.type = H.LINE_TO), (i.x = i.relative ? 0 : s)),
                void 0 !== i.x && (i.x = i.x * t + v * r + (f ? 0 : a)),
                void 0 !== i.y && (i.y = p * e + i.y * n + (f ? 0 : o)),
                void 0 !== i.x1 && (i.x1 = i.x1 * t + i.y1 * r + (f ? 0 : a)),
                void 0 !== i.y1 && (i.y1 = l * e + i.y1 * n + (f ? 0 : o)),
                void 0 !== i.x2 && (i.x2 = i.x2 * t + i.y2 * r + (f ? 0 : a)),
                void 0 !== i.y2 && (i.y2 = h * e + i.y2 * n + (f ? 0 : o));
              var y = t * n - e * r;
              if (
                void 0 !== i.xRot &&
                (1 !== t || 0 !== e || 0 !== r || 1 !== n)
              )
                if (0 === y)
                  delete i.rX,
                    delete i.rY,
                    delete i.xRot,
                    delete i.lArcFlag,
                    delete i.sweepFlag,
                    (i.type = H.LINE_TO);
                else {
                  var d = (i.xRot * Math.PI) / 180,
                    m = Math.sin(d),
                    x = Math.cos(d),
                    b = 1 / g(i.rX),
                    w = 1 / g(i.rY),
                    S = g(x) * b + g(m) * w,
                    k = 2 * m * x * (b - w),
                    T = g(m) * b + g(x) * w,
                    O = S * n * n - k * e * n + T * e * e,
                    A = k * (t * n + e * r) - 2 * (S * r * n + T * t * e),
                    E = S * r * r - k * t * r + T * t * t,
                    P = ((Math.atan2(A, O - E) + Math.PI) % Math.PI) / 2,
                    C = Math.sin(P),
                    M = Math.cos(P);
                  (i.rX =
                    Math.abs(y) / Math.sqrt(O * g(M) + A * C * M + E * g(C))),
                    (i.rY =
                      Math.abs(y) / Math.sqrt(O * g(C) - A * C * M + E * g(M))),
                    (i.xRot = (180 * P) / Math.PI);
                }
              return (
                void 0 !== i.sweepFlag &&
                  0 > y &&
                  (i.sweepFlag = +!i.sweepFlag),
                i
              );
            })
          );
        }
        (t.ROUND = function (t) {
          function e(e) {
            return Math.round(e * t) / t;
          }
          return (
            void 0 === t && (t = 1e13),
            P(t),
            function (t) {
              return (
                void 0 !== t.x1 && (t.x1 = e(t.x1)),
                void 0 !== t.y1 && (t.y1 = e(t.y1)),
                void 0 !== t.x2 && (t.x2 = e(t.x2)),
                void 0 !== t.y2 && (t.y2 = e(t.y2)),
                void 0 !== t.x && (t.x = e(t.x)),
                void 0 !== t.y && (t.y = e(t.y)),
                void 0 !== t.rX && (t.rX = e(t.rX)),
                void 0 !== t.rY && (t.rY = e(t.rY)),
                t
              );
            }
          );
        }),
          (t.TO_ABS = e),
          (t.TO_REL = function () {
            return i(function (t, e, r) {
              return (
                t.relative ||
                  (void 0 !== t.x1 && (t.x1 -= e),
                  void 0 !== t.y1 && (t.y1 -= r),
                  void 0 !== t.x2 && (t.x2 -= e),
                  void 0 !== t.y2 && (t.y2 -= r),
                  void 0 !== t.x && (t.x -= e),
                  void 0 !== t.y && (t.y -= r),
                  (t.relative = !0)),
                t
              );
            });
          }),
          (t.NORMALIZE_HVZ = function (t, e, r) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              i(function (n, i, a, o, s) {
                if (isNaN(o) && !(n.type & H.MOVE_TO))
                  throw new Error("path must start with moveto");
                return (
                  e &&
                    n.type & H.HORIZ_LINE_TO &&
                    ((n.type = H.LINE_TO), (n.y = n.relative ? 0 : a)),
                  r &&
                    n.type & H.VERT_LINE_TO &&
                    ((n.type = H.LINE_TO), (n.x = n.relative ? 0 : i)),
                  t &&
                    n.type & H.CLOSE_PATH &&
                    ((n.type = H.LINE_TO),
                    (n.x = n.relative ? o - i : o),
                    (n.y = n.relative ? s - a : s)),
                  n.type & H.ARC &&
                    (0 === n.rX || 0 === n.rY) &&
                    ((n.type = H.LINE_TO),
                    delete n.rX,
                    delete n.rY,
                    delete n.xRot,
                    delete n.lArcFlag,
                    delete n.sweepFlag),
                  n
                );
              })
            );
          }),
          (t.NORMALIZE_ST = r),
          (t.QT_TO_C = n),
          (t.INFO = i),
          (t.SANITIZE = function (t) {
            void 0 === t && (t = 0), P(t);
            var e = NaN,
              r = NaN,
              n = NaN,
              a = NaN;
            return i(function (i, o, s, u, c) {
              var l = Math.abs,
                h = !1,
                f = 0,
                p = 0;
              if (
                (i.type & H.SMOOTH_CURVE_TO &&
                  ((f = isNaN(e) ? 0 : o - e), (p = isNaN(r) ? 0 : s - r)),
                i.type & (H.CURVE_TO | H.SMOOTH_CURVE_TO)
                  ? ((e = i.relative ? o + i.x2 : i.x2),
                    (r = i.relative ? s + i.y2 : i.y2))
                  : ((e = NaN), (r = NaN)),
                i.type & H.SMOOTH_QUAD_TO
                  ? ((n = isNaN(n) ? o : 2 * o - n),
                    (a = isNaN(a) ? s : 2 * s - a))
                  : i.type & H.QUAD_TO
                  ? ((n = i.relative ? o + i.x1 : i.x1),
                    (a = i.relative ? s + i.y1 : i.y2))
                  : ((n = NaN), (a = NaN)),
                i.type & H.LINE_COMMANDS ||
                  (i.type & H.ARC &&
                    (0 === i.rX || 0 === i.rY || !i.lArcFlag)) ||
                  i.type & H.CURVE_TO ||
                  i.type & H.SMOOTH_CURVE_TO ||
                  i.type & H.QUAD_TO ||
                  i.type & H.SMOOTH_QUAD_TO)
              ) {
                var v = void 0 === i.x ? 0 : i.relative ? i.x : i.x - o,
                  g = void 0 === i.y ? 0 : i.relative ? i.y : i.y - s;
                (f = isNaN(n)
                  ? void 0 === i.x1
                    ? f
                    : i.relative
                    ? i.x
                    : i.x1 - o
                  : n - o),
                  (p = isNaN(a)
                    ? void 0 === i.y1
                      ? p
                      : i.relative
                      ? i.y
                      : i.y1 - s
                    : a - s);
                var y = void 0 === i.x2 ? 0 : i.relative ? i.x : i.x2 - o,
                  d = void 0 === i.y2 ? 0 : i.relative ? i.y : i.y2 - s;
                l(v) <= t &&
                  l(g) <= t &&
                  l(f) <= t &&
                  l(p) <= t &&
                  l(y) <= t &&
                  l(d) <= t &&
                  (h = !0);
              }
              return (
                i.type & H.CLOSE_PATH &&
                  l(o - u) <= t &&
                  l(s - c) <= t &&
                  (h = !0),
                h ? [] : i
              );
            });
          }),
          (t.MATRIX = a),
          (t.ROTATE = function (t, e, r) {
            void 0 === e && (e = 0), void 0 === r && (r = 0), P(t, e, r);
            var n = Math.sin(t),
              i = Math.cos(t);
            return a(i, n, -n, i, e - e * i + r * n, r - e * n - r * i);
          }),
          (t.TRANSLATE = function (t, e) {
            return void 0 === e && (e = 0), P(t, e), a(1, 0, 0, 1, t, e);
          }),
          (t.SCALE = function (t, e) {
            return void 0 === e && (e = t), P(t, e), a(t, 0, 0, e, 0, 0);
          }),
          (t.SKEW_X = function (t) {
            return P(t), a(1, 0, Math.atan(t), 1, 0, 0);
          }),
          (t.SKEW_Y = function (t) {
            return P(t), a(1, Math.atan(t), 0, 1, 0, 0);
          }),
          (t.X_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), P(t), a(-1, 0, 0, 1, t, 0);
          }),
          (t.Y_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), P(t), a(1, 0, 0, -1, 0, t);
          }),
          (t.A_TO_C = function () {
            return i(function (t, e, r) {
              return H.ARC === t.type
                ? (function (t, e, r) {
                    var n, i, a, o;
                    t.cX || M(t, e, r);
                    for (
                      var s = Math.min(t.phi1, t.phi2),
                        u = Math.max(t.phi1, t.phi2) - s,
                        c = Math.ceil(u / 90),
                        l = new Array(c),
                        h = e,
                        f = r,
                        p = 0;
                      p < c;
                      p++
                    ) {
                      var v = V(t.phi1, t.phi2, p / c),
                        g = V(t.phi1, t.phi2, (p + 1) / c),
                        y = g - v,
                        d = (4 / 3) * Math.tan((y * R) / 4),
                        m = [
                          Math.cos(v * R) - d * Math.sin(v * R),
                          Math.sin(v * R) + d * Math.cos(v * R),
                        ],
                        x = m[0],
                        b = m[1],
                        w = [Math.cos(g * R), Math.sin(g * R)],
                        S = w[0],
                        k = w[1],
                        T = [S + d * Math.sin(g * R), k - d * Math.cos(g * R)],
                        O = T[0],
                        A = T[1];
                      l[p] = { relative: t.relative, type: H.CURVE_TO };
                      var P = function (e, r) {
                        var n = E([e * t.rX, r * t.rY], t.xRot),
                          i = n[0],
                          a = n[1];
                        return [t.cX + i, t.cY + a];
                      };
                      (n = P(x, b)),
                        (l[p].x1 = n[0]),
                        (l[p].y1 = n[1]),
                        (i = P(O, A)),
                        (l[p].x2 = i[0]),
                        (l[p].y2 = i[1]),
                        (a = P(S, k)),
                        (l[p].x = a[0]),
                        (l[p].y = a[1]),
                        t.relative &&
                          ((l[p].x1 -= h),
                          (l[p].y1 -= f),
                          (l[p].x2 -= h),
                          (l[p].y2 -= f),
                          (l[p].x -= h),
                          (l[p].y -= f)),
                        (h = (o = [l[p].x, l[p].y])[0]),
                        (f = o[1]);
                    }
                    return l;
                  })(t, t.relative ? 0 : e, t.relative ? 0 : r)
                : t;
            });
          }),
          (t.ANNOTATE_ARCS = function () {
            return i(function (t, e, r) {
              return (
                t.relative && ((e = 0), (r = 0)),
                H.ARC === t.type && M(t, e, r),
                t
              );
            });
          }),
          (t.CLONE = function () {
            return function (t) {
              var e = {};
              for (var r in t) e[r] = t[r];
              return e;
            };
          }),
          (t.CALCULATE_BOUNDS = function () {
            var t = e(),
              a = n(),
              o = r(),
              s = i(function (e, r, n) {
                var i = o(
                  a(
                    t(
                      (function (t) {
                        var e = {};
                        for (var r in t) e[r] = t[r];
                        return e;
                      })(e)
                    )
                  )
                );
                function u(t) {
                  t > s.maxX && (s.maxX = t), t < s.minX && (s.minX = t);
                }
                function c(t) {
                  t > s.maxY && (s.maxY = t), t < s.minY && (s.minY = t);
                }
                if (
                  (i.type & H.DRAWING_COMMANDS && (u(r), c(n)),
                  i.type & H.HORIZ_LINE_TO && u(i.x),
                  i.type & H.VERT_LINE_TO && c(i.y),
                  i.type & H.LINE_TO && (u(i.x), c(i.y)),
                  i.type & H.CURVE_TO)
                ) {
                  u(i.x), c(i.y);
                  for (var l = 0, h = L(r, i.x1, i.x2, i.x); l < h.length; l++)
                    0 < (E = h[l]) && 1 > E && u(D(r, i.x1, i.x2, i.x, E));
                  for (var f = 0, p = L(n, i.y1, i.y2, i.y); f < p.length; f++)
                    0 < (E = p[f]) && 1 > E && c(D(n, i.y1, i.y2, i.y, E));
                }
                if (i.type & H.ARC) {
                  u(i.x), c(i.y), M(i, r, n);
                  for (
                    var v = (i.xRot / 180) * Math.PI,
                      g = Math.cos(v) * i.rX,
                      y = Math.sin(v) * i.rX,
                      d = -Math.sin(v) * i.rY,
                      m = Math.cos(v) * i.rY,
                      x =
                        i.phi1 < i.phi2
                          ? [i.phi1, i.phi2]
                          : -180 > i.phi2
                          ? [i.phi2 + 360, i.phi1 + 360]
                          : [i.phi2, i.phi1],
                      b = x[0],
                      w = x[1],
                      S = function (t) {
                        var e = t[0],
                          r = t[1],
                          n = (180 * Math.atan2(r, e)) / Math.PI;
                        return n < b ? n + 360 : n;
                      },
                      k = 0,
                      T = N(d, -g, 0).map(S);
                    k < T.length;
                    k++
                  )
                    (E = T[k]) > b && E < w && u(I(i.cX, g, d, E));
                  for (var O = 0, A = N(m, -y, 0).map(S); O < A.length; O++) {
                    var E;
                    (E = A[O]) > b && E < w && c(I(i.cY, y, m, E));
                  }
                }
                return e;
              });
            return (
              (s.minX = 1 / 0),
              (s.maxX = -1 / 0),
              (s.minY = 1 / 0),
              (s.maxY = -1 / 0),
              s
            );
          });
      })(_ || (_ = {}));
      var j,
        B = (function () {
          function t() {}
          return (
            (t.prototype.round = function (t) {
              return this.transform(_.ROUND(t));
            }),
            (t.prototype.toAbs = function () {
              return this.transform(_.TO_ABS());
            }),
            (t.prototype.toRel = function () {
              return this.transform(_.TO_REL());
            }),
            (t.prototype.normalizeHVZ = function (t, e, r) {
              return this.transform(_.NORMALIZE_HVZ(t, e, r));
            }),
            (t.prototype.normalizeST = function () {
              return this.transform(_.NORMALIZE_ST());
            }),
            (t.prototype.qtToC = function () {
              return this.transform(_.QT_TO_C());
            }),
            (t.prototype.aToC = function () {
              return this.transform(_.A_TO_C());
            }),
            (t.prototype.sanitize = function (t) {
              return this.transform(_.SANITIZE(t));
            }),
            (t.prototype.translate = function (t, e) {
              return this.transform(_.TRANSLATE(t, e));
            }),
            (t.prototype.scale = function (t, e) {
              return this.transform(_.SCALE(t, e));
            }),
            (t.prototype.rotate = function (t, e, r) {
              return this.transform(_.ROTATE(t, e, r));
            }),
            (t.prototype.matrix = function (t, e, r, n, i, a) {
              return this.transform(_.MATRIX(t, e, r, n, i, a));
            }),
            (t.prototype.skewX = function (t) {
              return this.transform(_.SKEW_X(t));
            }),
            (t.prototype.skewY = function (t) {
              return this.transform(_.SKEW_Y(t));
            }),
            (t.prototype.xSymmetry = function (t) {
              return this.transform(_.X_AXIS_SYMMETRY(t));
            }),
            (t.prototype.ySymmetry = function (t) {
              return this.transform(_.Y_AXIS_SYMMETRY(t));
            }),
            (t.prototype.annotateArcs = function () {
              return this.transform(_.ANNOTATE_ARCS());
            }),
            t
          );
        })(),
        F = function (t) {
          return " " === t || "\t" === t || "\r" === t || "\n" === t;
        },
        z = function (t) {
          return (
            "0".charCodeAt(0) <= t.charCodeAt(0) &&
            t.charCodeAt(0) <= "9".charCodeAt(0)
          );
        },
        U = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.curNumber = ""),
              (e.curCommandType = -1),
              (e.curCommandRelative = !1),
              (e.canParseCommandOrComma = !0),
              (e.curNumberHasExp = !1),
              (e.curNumberHasExpDigits = !1),
              (e.curNumberHasDecimal = !1),
              (e.curArgs = []),
              e
            );
          }
          return (
            A(e, t),
            (e.prototype.finish = function (t) {
              if (
                (void 0 === t && (t = []),
                this.parse(" ", t),
                0 !== this.curArgs.length || !this.canParseCommandOrComma)
              )
                throw new SyntaxError("Unterminated command at the path end.");
              return t;
            }),
            (e.prototype.parse = function (t, e) {
              var r = this;
              void 0 === e && (e = []);
              for (
                var n = function (t) {
                    e.push(t),
                      (r.curArgs.length = 0),
                      (r.canParseCommandOrComma = !0);
                  },
                  i = 0;
                i < t.length;
                i++
              ) {
                var a = t[i],
                  o = !(
                    this.curCommandType !== H.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ("0" !== this.curNumber && "1" !== this.curNumber)
                  ),
                  s = z(a) && (("0" === this.curNumber && "0" === a) || o);
                if (!z(a) || s)
                  if ("e" !== a && "E" !== a)
                    if (
                      ("-" !== a && "+" !== a) ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if (
                        "." !== a ||
                        this.curNumberHasExp ||
                        this.curNumberHasDecimal ||
                        o
                      ) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var u = Number(this.curNumber);
                          if (isNaN(u))
                            throw new SyntaxError(
                              "Invalid number ending at " + i
                            );
                          if (this.curCommandType === H.ARC)
                            if (
                              0 === this.curArgs.length ||
                              1 === this.curArgs.length
                            ) {
                              if (0 > u)
                                throw new SyntaxError(
                                  'Expected positive number, got "' +
                                    u +
                                    '" at index "' +
                                    i +
                                    '"'
                                );
                            } else if (
                              (3 === this.curArgs.length ||
                                4 === this.curArgs.length) &&
                              "0" !== this.curNumber &&
                              "1" !== this.curNumber
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  i +
                                  '"'
                              );
                          this.curArgs.push(u),
                            this.curArgs.length === X[this.curCommandType] &&
                              (H.HORIZ_LINE_TO === this.curCommandType
                                ? n({
                                    type: H.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: u,
                                  })
                                : H.VERT_LINE_TO === this.curCommandType
                                ? n({
                                    type: H.VERT_LINE_TO,
                                    relative: this.curCommandRelative,
                                    y: u,
                                  })
                                : this.curCommandType === H.MOVE_TO ||
                                  this.curCommandType === H.LINE_TO ||
                                  this.curCommandType === H.SMOOTH_QUAD_TO
                                ? (n({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1],
                                  }),
                                  H.MOVE_TO === this.curCommandType &&
                                    (this.curCommandType = H.LINE_TO))
                                : this.curCommandType === H.CURVE_TO
                                ? n({
                                    type: H.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5],
                                  })
                                : this.curCommandType === H.SMOOTH_CURVE_TO
                                ? n({
                                    type: H.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === H.QUAD_TO
                                ? n({
                                    type: H.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3],
                                  })
                                : this.curCommandType === H.ARC &&
                                  n({
                                    type: H.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6],
                                  })),
                            (this.curNumber = ""),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!F(a))
                          if ("," === a && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if ("+" !== a && "-" !== a && "." !== a)
                            if (s)
                              (this.curNumber = a),
                                (this.curNumberHasDecimal = !1);
                            else {
                              if (0 !== this.curArgs.length)
                                throw new SyntaxError(
                                  "Unterminated command at index " + i + "."
                                );
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    a +
                                    '" at index ' +
                                    i +
                                    ". Command cannot follow comma"
                                );
                              if (
                                ((this.canParseCommandOrComma = !1),
                                "z" !== a && "Z" !== a)
                              )
                                if ("h" === a || "H" === a)
                                  (this.curCommandType = H.HORIZ_LINE_TO),
                                    (this.curCommandRelative = "h" === a);
                                else if ("v" === a || "V" === a)
                                  (this.curCommandType = H.VERT_LINE_TO),
                                    (this.curCommandRelative = "v" === a);
                                else if ("m" === a || "M" === a)
                                  (this.curCommandType = H.MOVE_TO),
                                    (this.curCommandRelative = "m" === a);
                                else if ("l" === a || "L" === a)
                                  (this.curCommandType = H.LINE_TO),
                                    (this.curCommandRelative = "l" === a);
                                else if ("c" === a || "C" === a)
                                  (this.curCommandType = H.CURVE_TO),
                                    (this.curCommandRelative = "c" === a);
                                else if ("s" === a || "S" === a)
                                  (this.curCommandType = H.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = "s" === a);
                                else if ("q" === a || "Q" === a)
                                  (this.curCommandType = H.QUAD_TO),
                                    (this.curCommandRelative = "q" === a);
                                else if ("t" === a || "T" === a)
                                  (this.curCommandType = H.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = "t" === a);
                                else {
                                  if ("a" !== a && "A" !== a)
                                    throw new SyntaxError(
                                      'Unexpected character "' +
                                        a +
                                        '" at index ' +
                                        i +
                                        "."
                                    );
                                  (this.curCommandType = H.ARC),
                                    (this.curCommandRelative = "a" === a);
                                }
                              else
                                e.push({ type: H.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1);
                            }
                          else
                            (this.curNumber = a),
                              (this.curNumberHasDecimal = "." === a);
                      } else
                        (this.curNumber += a), (this.curNumberHasDecimal = !0);
                    else this.curNumber += a;
                  else (this.curNumber += a), (this.curNumberHasExp = !0);
                else
                  (this.curNumber += a),
                    (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return e;
            }),
            (e.prototype.transform = function (t) {
              return Object.create(this, {
                parse: {
                  value: function (e, r) {
                    void 0 === r && (r = []);
                    for (
                      var n = 0,
                        i = Object.getPrototypeOf(this).parse.call(this, e);
                      n < i.length;
                      n++
                    ) {
                      var a = i[n],
                        o = t(a);
                      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
                    }
                    return r;
                  },
                },
              });
            }),
            e
          );
        })(B),
        H = (function (t) {
          function e(r) {
            var n = t.call(this) || this;
            return (n.commands = "string" == typeof r ? e.parse(r) : r), n;
          }
          return (
            A(e, t),
            (e.prototype.encode = function () {
              return e.encode(this.commands);
            }),
            (e.prototype.getBounds = function () {
              var t = _.CALCULATE_BOUNDS();
              return this.transform(t), t;
            }),
            (e.prototype.transform = function (t) {
              for (var e = [], r = 0, n = this.commands; r < n.length; r++) {
                var i = t(n[r]);
                Array.isArray(i) ? e.push.apply(e, i) : e.push(i);
              }
              return (this.commands = e), this;
            }),
            (e.encode = function (t) {
              return (function (t) {
                var e = "";
                Array.isArray(t) || (t = [t]);
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  if (n.type === H.CLOSE_PATH) e += "z";
                  else if (n.type === H.HORIZ_LINE_TO)
                    e += (n.relative ? "h" : "H") + n.x;
                  else if (n.type === H.VERT_LINE_TO)
                    e += (n.relative ? "v" : "V") + n.y;
                  else if (n.type === H.MOVE_TO)
                    e += (n.relative ? "m" : "M") + n.x + " " + n.y;
                  else if (n.type === H.LINE_TO)
                    e += (n.relative ? "l" : "L") + n.x + " " + n.y;
                  else if (n.type === H.CURVE_TO)
                    e +=
                      (n.relative ? "c" : "C") +
                      n.x1 +
                      " " +
                      n.y1 +
                      " " +
                      n.x2 +
                      " " +
                      n.y2 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === H.SMOOTH_CURVE_TO)
                    e +=
                      (n.relative ? "s" : "S") +
                      n.x2 +
                      " " +
                      n.y2 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === H.QUAD_TO)
                    e +=
                      (n.relative ? "q" : "Q") +
                      n.x1 +
                      " " +
                      n.y1 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === H.SMOOTH_QUAD_TO)
                    e += (n.relative ? "t" : "T") + n.x + " " + n.y;
                  else {
                    if (n.type !== H.ARC)
                      throw new Error(
                        'Unexpected command type "' +
                          n.type +
                          '" at index ' +
                          r +
                          "."
                      );
                    e +=
                      (n.relative ? "a" : "A") +
                      n.rX +
                      " " +
                      n.rY +
                      " " +
                      n.xRot +
                      " " +
                      +n.lArcFlag +
                      " " +
                      +n.sweepFlag +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  }
                }
                return e;
              })(t);
            }),
            (e.parse = function (t) {
              var e = new U(),
                r = [];
              return e.parse(t, r), e.finish(r), r;
            }),
            (e.CLOSE_PATH = 1),
            (e.MOVE_TO = 2),
            (e.HORIZ_LINE_TO = 4),
            (e.VERT_LINE_TO = 8),
            (e.LINE_TO = 16),
            (e.CURVE_TO = 32),
            (e.SMOOTH_CURVE_TO = 64),
            (e.QUAD_TO = 128),
            (e.SMOOTH_QUAD_TO = 256),
            (e.ARC = 512),
            (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
            (e.DRAWING_COMMANDS =
              e.HORIZ_LINE_TO |
              e.VERT_LINE_TO |
              e.LINE_TO |
              e.CURVE_TO |
              e.SMOOTH_CURVE_TO |
              e.QUAD_TO |
              e.SMOOTH_QUAD_TO |
              e.ARC),
            e
          );
        })(B),
        X =
          (((j = {})[H.MOVE_TO] = 2),
          (j[H.LINE_TO] = 2),
          (j[H.HORIZ_LINE_TO] = 1),
          (j[H.VERT_LINE_TO] = 1),
          (j[H.CLOSE_PATH] = 0),
          (j[H.QUAD_TO] = 4),
          (j[H.SMOOTH_QUAD_TO] = 2),
          (j[H.CURVE_TO] = 6),
          (j[H.SMOOTH_CURVE_TO] = 4),
          (j[H.ARC] = 7),
          j);
      r(4208);
      function Y(t) {
        return (
          (Y =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Y(t)
        );
      }
      var G = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        W = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function Z(t, e, r, n, i) {
        if (
          ("string" === typeof t && (t = document.getElementById(t)),
          !t || "object" !== Y(t) || !("getContext" in t))
        )
          throw new TypeError(
            "Expecting canvas with `getContext` method in processCanvasRGB(A) calls!"
          );
        var a = t.getContext("2d");
        try {
          return a.getImageData(e, r, n, i);
        } catch (o) {
          throw new Error("unable to access image data: " + o);
        }
      }
      function q(t, e, r, n, i, a) {
        if (!(isNaN(a) || a < 1)) {
          a |= 0;
          var o = Z(t, e, r, n, i);
          (o = (function (t, e, r, n, i, a) {
            for (
              var o,
                s = t.data,
                u = 2 * a + 1,
                c = n - 1,
                l = i - 1,
                h = a + 1,
                f = (h * (h + 1)) / 2,
                p = new Q(),
                v = p,
                g = 1;
              g < u;
              g++
            )
              (v = v.next = new Q()), g === h && (o = v);
            v.next = p;
            for (
              var y = null, d = null, m = 0, x = 0, b = G[a], w = W[a], S = 0;
              S < i;
              S++
            ) {
              v = p;
              for (
                var k = s[x], T = s[x + 1], O = s[x + 2], A = s[x + 3], E = 0;
                E < h;
                E++
              )
                (v.r = k), (v.g = T), (v.b = O), (v.a = A), (v = v.next);
              for (
                var P = 0,
                  C = 0,
                  M = 0,
                  N = 0,
                  _ = h * k,
                  R = h * T,
                  V = h * O,
                  I = h * A,
                  L = f * k,
                  D = f * T,
                  j = f * O,
                  B = f * A,
                  F = 1;
                F < h;
                F++
              ) {
                var z = x + ((c < F ? c : F) << 2),
                  U = s[z],
                  H = s[z + 1],
                  X = s[z + 2],
                  Y = s[z + 3],
                  Z = h - F;
                (L += (v.r = U) * Z),
                  (D += (v.g = H) * Z),
                  (j += (v.b = X) * Z),
                  (B += (v.a = Y) * Z),
                  (P += U),
                  (C += H),
                  (M += X),
                  (N += Y),
                  (v = v.next);
              }
              (y = p), (d = o);
              for (var q = 0; q < n; q++) {
                var $ = (B * b) >> w;
                if (((s[x + 3] = $), 0 !== $)) {
                  var K = 255 / $;
                  (s[x] = ((L * b) >> w) * K),
                    (s[x + 1] = ((D * b) >> w) * K),
                    (s[x + 2] = ((j * b) >> w) * K);
                } else s[x] = s[x + 1] = s[x + 2] = 0;
                (L -= _),
                  (D -= R),
                  (j -= V),
                  (B -= I),
                  (_ -= y.r),
                  (R -= y.g),
                  (V -= y.b),
                  (I -= y.a);
                var J = q + a + 1;
                (J = (m + (J < c ? J : c)) << 2),
                  (L += P += y.r = s[J]),
                  (D += C += y.g = s[J + 1]),
                  (j += M += y.b = s[J + 2]),
                  (B += N += y.a = s[J + 3]),
                  (y = y.next);
                var tt = d,
                  et = tt.r,
                  rt = tt.g,
                  nt = tt.b,
                  it = tt.a;
                (_ += et),
                  (R += rt),
                  (V += nt),
                  (I += it),
                  (P -= et),
                  (C -= rt),
                  (M -= nt),
                  (N -= it),
                  (d = d.next),
                  (x += 4);
              }
              m += n;
            }
            for (var at = 0; at < n; at++) {
              var ot = s[(x = at << 2)],
                st = s[x + 1],
                ut = s[x + 2],
                ct = s[x + 3],
                lt = h * ot,
                ht = h * st,
                ft = h * ut,
                pt = h * ct,
                vt = f * ot,
                gt = f * st,
                yt = f * ut,
                dt = f * ct;
              v = p;
              for (var mt = 0; mt < h; mt++)
                (v.r = ot), (v.g = st), (v.b = ut), (v.a = ct), (v = v.next);
              for (
                var xt = n, bt = 0, wt = 0, St = 0, kt = 0, Tt = 1;
                Tt <= a;
                Tt++
              ) {
                x = (xt + at) << 2;
                var Ot = h - Tt;
                (vt += (v.r = ot = s[x]) * Ot),
                  (gt += (v.g = st = s[x + 1]) * Ot),
                  (yt += (v.b = ut = s[x + 2]) * Ot),
                  (dt += (v.a = ct = s[x + 3]) * Ot),
                  (kt += ot),
                  (bt += st),
                  (wt += ut),
                  (St += ct),
                  (v = v.next),
                  Tt < l && (xt += n);
              }
              (x = at), (y = p), (d = o);
              for (var At = 0; At < i; At++) {
                var Et = x << 2;
                (s[Et + 3] = ct = (dt * b) >> w),
                  ct > 0
                    ? ((ct = 255 / ct),
                      (s[Et] = ((vt * b) >> w) * ct),
                      (s[Et + 1] = ((gt * b) >> w) * ct),
                      (s[Et + 2] = ((yt * b) >> w) * ct))
                    : (s[Et] = s[Et + 1] = s[Et + 2] = 0),
                  (vt -= lt),
                  (gt -= ht),
                  (yt -= ft),
                  (dt -= pt),
                  (lt -= y.r),
                  (ht -= y.g),
                  (ft -= y.b),
                  (pt -= y.a),
                  (Et = (at + ((Et = At + h) < l ? Et : l) * n) << 2),
                  (vt += kt += y.r = s[Et]),
                  (gt += bt += y.g = s[Et + 1]),
                  (yt += wt += y.b = s[Et + 2]),
                  (dt += St += y.a = s[Et + 3]),
                  (y = y.next),
                  (lt += ot = d.r),
                  (ht += st = d.g),
                  (ft += ut = d.b),
                  (pt += ct = d.a),
                  (kt -= ot),
                  (bt -= st),
                  (wt -= ut),
                  (St -= ct),
                  (d = d.next),
                  (x += n);
              }
            }
            return t;
          })(o, 0, 0, n, i, a)),
            t.getContext("2d").putImageData(o, e, r);
        }
      }
      var Q = function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      };
      var $ = Object.freeze({
        __proto__: null,
        offscreen: function () {
          var t = (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ).DOMParser,
            e = {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: t,
              createCanvas: function (t, e) {
                return new OffscreenCanvas(t, e);
              },
              createImage: function (t) {
                return w(
                  x().mark(function e() {
                    var r, n, i;
                    return x().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), fetch(t);
                          case 2:
                            return (r = e.sent), (e.next = 5), r.blob();
                          case 5:
                            return (
                              (n = e.sent), (e.next = 8), createImageBitmap(n)
                            );
                          case 8:
                            return (i = e.sent), e.abrupt("return", i);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            };
          return (
            ("undefined" === typeof DOMParser && "undefined" !== typeof t) ||
              Reflect.deleteProperty(e, "DOMParser"),
            e
          );
        },
        node: function (t) {
          var e = t.DOMParser,
            r = t.canvas;
          return {
            window: null,
            ignoreAnimation: !0,
            ignoreMouse: !0,
            DOMParser: e,
            fetch: t.fetch,
            createCanvas: r.createCanvas,
            createImage: r.loadImage,
          };
        },
      });
      function K(t) {
        return t.replace(/(?!\u3000)\s+/gm, " ");
      }
      function J(t) {
        return t.replace(/^[\n \t]+/, "");
      }
      function tt(t) {
        return t.replace(/[\n \t]+$/, "");
      }
      function et(t) {
        return (
          (t || "").match(
            /-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm
          ) || []
        ).map(parseFloat);
      }
      var rt = /^[A-Z-]+$/;
      function nt(t) {
        return rt.test(t) ? t.toLowerCase() : t;
      }
      function it(t) {
        var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(t) || [];
        return e[2] || e[3] || e[4];
      }
      function at(t) {
        if (!t.startsWith("rgb")) return t;
        var e = 3;
        return t.replace(/\d+(\.\d+)?/g, function (t, r) {
          return e-- && r ? String(Math.round(parseFloat(t))) : t;
        });
      }
      var ot = /(\[[^\]]+\])/g,
        st = /(#[^\s+>~.[:]+)/g,
        ut = /(\.[^\s+>~.[:]+)/g,
        ct = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        lt = /(:[\w-]+\([^)]*\))/gi,
        ht = /(:[^\s+>~.[:]+)/g,
        ft = /([^\s+>~.[:]+)/g;
      function pt(t, e) {
        var r = e.exec(t);
        return r ? [t.replace(e, " "), r.length] : [t, 0];
      }
      function vt(t) {
        var e = [0, 0, 0],
          r = t
            .replace(/:not\(([^)]*)\)/g, "     $1 ")
            .replace(/{[\s\S]*/gm, " "),
          n = 0,
          i = pt(r, ot),
          a = (0, m.Z)(i, 2);
        (r = a[0]), (n = a[1]), (e[1] += n);
        var o = pt(r, st),
          s = (0, m.Z)(o, 2);
        (r = s[0]), (n = s[1]), (e[0] += n);
        var u = pt(r, ut),
          c = (0, m.Z)(u, 2);
        (r = c[0]), (n = c[1]), (e[1] += n);
        var l = pt(r, ct),
          h = (0, m.Z)(l, 2);
        (r = h[0]), (n = h[1]), (e[2] += n);
        var f = pt(r, lt),
          p = (0, m.Z)(f, 2);
        (r = p[0]), (n = p[1]), (e[1] += n);
        var v = pt(r, ht),
          g = (0, m.Z)(v, 2);
        (r = g[0]), (n = g[1]), (e[1] += n);
        var y = pt((r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")), ft),
          d = (0, m.Z)(y, 2);
        return (r = d[0]), (n = d[1]), (e[2] += n), e.join("");
      }
      var gt = 1e-8;
      function yt(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
      }
      function dt(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (yt(t) * yt(e));
      }
      function mt(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(dt(t, e));
      }
      function xt(t) {
        return t * t * t;
      }
      function bt(t) {
        return 3 * t * t * (1 - t);
      }
      function wt(t) {
        return 3 * t * (1 - t) * (1 - t);
      }
      function St(t) {
        return (1 - t) * (1 - t) * (1 - t);
      }
      function kt(t) {
        return t * t;
      }
      function Tt(t) {
        return 2 * t * (1 - t);
      }
      function Ot(t) {
        return (1 - t) * (1 - t);
      }
      var At = (function () {
        function t(e, r, n) {
          v(this, t),
            (this.document = e),
            (this.name = r),
            (this.value = n),
            (this.isNormalizedColor = !1);
        }
        return (
          d(
            t,
            [
              {
                key: "split",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ",
                    r = this.document,
                    n = this.name;
                  return K(this.getString())
                    .trim()
                    .split(e)
                    .map(function (e) {
                      return new t(r, n, e);
                    });
                },
              },
              {
                key: "hasValue",
                value: function (t) {
                  var e = this.value;
                  return (
                    null !== e &&
                    "" !== e &&
                    (t || 0 !== e) &&
                    "undefined" !== typeof e
                  );
                },
              },
              {
                key: "isString",
                value: function (t) {
                  var e = this.value,
                    r = "string" === typeof e;
                  return r && t ? t.test(e) : r;
                },
              },
              {
                key: "isUrlDefinition",
                value: function () {
                  return this.isString(/^url\(/);
                },
              },
              {
                key: "isPixels",
                value: function () {
                  if (!this.hasValue()) return !1;
                  var t = this.getString();
                  switch (!0) {
                    case t.endsWith("px"):
                    case /^[0-9]+$/.test(t):
                      return !0;
                    default:
                      return !1;
                  }
                },
              },
              {
                key: "setValue",
                value: function (t) {
                  return (this.value = t), this;
                },
              },
              {
                key: "getValue",
                value: function (t) {
                  return "undefined" === typeof t || this.hasValue()
                    ? this.value
                    : t;
                },
              },
              {
                key: "getNumber",
                value: function (t) {
                  if (!this.hasValue())
                    return "undefined" === typeof t ? 0 : parseFloat(t);
                  var e = this.value,
                    r = parseFloat(e);
                  return this.isString(/%$/) && (r /= 100), r;
                },
              },
              {
                key: "getString",
                value: function (t) {
                  return "undefined" === typeof t || this.hasValue()
                    ? "undefined" === typeof this.value
                      ? ""
                      : String(this.value)
                    : String(t);
                },
              },
              {
                key: "getColor",
                value: function (t) {
                  var e = this.getString(t);
                  return (
                    this.isNormalizedColor ||
                      ((this.isNormalizedColor = !0),
                      (e = at(e)),
                      (this.value = e)),
                    e
                  );
                },
              },
              {
                key: "getDpi",
                value: function () {
                  return 96;
                },
              },
              {
                key: "getRem",
                value: function () {
                  return this.document.rootEmSize;
                },
              },
              {
                key: "getEm",
                value: function () {
                  return this.document.emSize;
                },
              },
              {
                key: "getUnits",
                value: function () {
                  return this.getString().replace(/[0-9.-]/g, "");
                },
              },
              {
                key: "getPixels",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!this.hasValue()) return 0;
                  var r = "boolean" === typeof t ? [void 0, t] : [t],
                    n = (0, m.Z)(r, 2),
                    i = n[0],
                    a = n[1],
                    o = this.document.screen.viewPort;
                  switch (!0) {
                    case this.isString(/vmin$/):
                      return (
                        (this.getNumber() / 100) *
                        Math.min(o.computeSize("x"), o.computeSize("y"))
                      );
                    case this.isString(/vmax$/):
                      return (
                        (this.getNumber() / 100) *
                        Math.max(o.computeSize("x"), o.computeSize("y"))
                      );
                    case this.isString(/vw$/):
                      return (this.getNumber() / 100) * o.computeSize("x");
                    case this.isString(/vh$/):
                      return (this.getNumber() / 100) * o.computeSize("y");
                    case this.isString(/rem$/):
                      return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                      return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                      return (this.getNumber() * this.getEm()) / 2;
                    case this.isString(/px$/):
                      return this.getNumber();
                    case this.isString(/pt$/):
                      return this.getNumber() * this.getDpi() * (1 / 72);
                    case this.isString(/pc$/):
                      return 15 * this.getNumber();
                    case this.isString(/cm$/):
                      return (this.getNumber() * this.getDpi()) / 2.54;
                    case this.isString(/mm$/):
                      return (this.getNumber() * this.getDpi()) / 25.4;
                    case this.isString(/in$/):
                      return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && a:
                      return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                      return this.getNumber() * o.computeSize(i);
                    default:
                      var s = this.getNumber();
                      return e && s < 1 ? s * o.computeSize(i) : s;
                  }
                },
              },
              {
                key: "getMilliseconds",
                value: function () {
                  return this.hasValue()
                    ? this.isString(/ms$/)
                      ? this.getNumber()
                      : 1e3 * this.getNumber()
                    : 0;
                },
              },
              {
                key: "getRadians",
                value: function () {
                  if (!this.hasValue()) return 0;
                  switch (!0) {
                    case this.isString(/deg$/):
                      return this.getNumber() * (Math.PI / 180);
                    case this.isString(/grad$/):
                      return this.getNumber() * (Math.PI / 200);
                    case this.isString(/rad$/):
                      return this.getNumber();
                    default:
                      return this.getNumber() * (Math.PI / 180);
                  }
                },
              },
              {
                key: "getDefinition",
                value: function () {
                  var t = this.getString(),
                    e = /#([^)'"]+)/.exec(t);
                  return (
                    e && (e = e[1]), e || (e = t), this.document.definitions[e]
                  );
                },
              },
              {
                key: "getFillStyleDefinition",
                value: function (t, e) {
                  var r = this.getDefinition();
                  if (!r) return null;
                  if ("function" === typeof r.createGradient)
                    return r.createGradient(this.document.ctx, t, e);
                  if ("function" === typeof r.createPattern) {
                    if (r.getHrefAttribute().hasValue()) {
                      var n = r.getAttribute("patternTransform");
                      (r = r.getHrefAttribute().getDefinition()),
                        n.hasValue() &&
                          r
                            .getAttribute("patternTransform", !0)
                            .setValue(n.value);
                    }
                    return r.createPattern(this.document.ctx, t, e);
                  }
                  return null;
                },
              },
              {
                key: "getTextBaseline",
                value: function () {
                  return this.hasValue()
                    ? t.textBaselineMapping[this.getString()]
                    : null;
                },
              },
              {
                key: "addOpacity",
                value: function (e) {
                  for (
                    var r = this.getColor(), n = r.length, i = 0, a = 0;
                    a < n && ("," === r[a] && i++, 3 !== i);
                    a++
                  );
                  if (e.hasValue() && this.isString() && 3 !== i) {
                    var o = new T(r);
                    o.ok && ((o.alpha = e.getNumber()), (r = o.toRGBA()));
                  }
                  return new t(this.document, this.name, r);
                },
              },
            ],
            [
              {
                key: "empty",
                value: function (e) {
                  return new t(e, "EMPTY", "");
                },
              },
            ]
          ),
          t
        );
      })();
      At.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic",
      };
      var Et = (function () {
          function t() {
            v(this, t), (this.viewPorts = []);
          }
          return (
            d(t, [
              {
                key: "clear",
                value: function () {
                  this.viewPorts = [];
                },
              },
              {
                key: "setCurrent",
                value: function (t, e) {
                  this.viewPorts.push({ width: t, height: e });
                },
              },
              {
                key: "removeCurrent",
                value: function () {
                  this.viewPorts.pop();
                },
              },
              {
                key: "getCurrent",
                value: function () {
                  var t = this.viewPorts;
                  return t[t.length - 1];
                },
              },
              {
                key: "width",
                get: function () {
                  return this.getCurrent().width;
                },
              },
              {
                key: "height",
                get: function () {
                  return this.getCurrent().height;
                },
              },
              {
                key: "computeSize",
                value: function (t) {
                  return "number" === typeof t
                    ? t
                    : "x" === t
                    ? this.width
                    : "y" === t
                    ? this.height
                    : Math.sqrt(
                        Math.pow(this.width, 2) + Math.pow(this.height, 2)
                      ) / Math.sqrt(2);
                },
              },
            ]),
            t
          );
        })(),
        Pt = (function () {
          function t(e, r) {
            v(this, t), (this.x = e), (this.y = r);
          }
          return (
            d(
              t,
              [
                {
                  key: "angleTo",
                  value: function (t) {
                    return Math.atan2(t.y - this.y, t.x - this.x);
                  },
                },
                {
                  key: "applyTransform",
                  value: function (t) {
                    var e = this.x,
                      r = this.y,
                      n = e * t[0] + r * t[2] + t[4],
                      i = e * t[1] + r * t[3] + t[5];
                    (this.x = n), (this.y = i);
                  },
                },
              ],
              [
                {
                  key: "parse",
                  value: function (e) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = et(e),
                      i = (0, m.Z)(n, 2),
                      a = i[0],
                      o = void 0 === a ? r : a,
                      s = i[1];
                    return new t(o, void 0 === s ? r : s);
                  },
                },
                {
                  key: "parseScale",
                  value: function (e) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      n = et(e),
                      i = (0, m.Z)(n, 2),
                      a = i[0],
                      o = void 0 === a ? r : a,
                      s = i[1];
                    return new t(o, void 0 === s ? o : s);
                  },
                },
                {
                  key: "parsePath",
                  value: function (e) {
                    for (
                      var r = et(e), n = r.length, i = [], a = 0;
                      a < n;
                      a += 2
                    )
                      i.push(new t(r[a], r[a + 1]));
                    return i;
                  },
                },
              ]
            ),
            t
          );
        })(),
        Ct = (function () {
          function t(e) {
            v(this, t),
              (this.screen = e),
              (this.working = !1),
              (this.events = []),
              (this.eventElements = []),
              (this.onClick = this.onClick.bind(this)),
              (this.onMouseMove = this.onMouseMove.bind(this));
          }
          return (
            d(t, [
              {
                key: "isWorking",
                value: function () {
                  return this.working;
                },
              },
              {
                key: "start",
                value: function () {
                  if (!this.working) {
                    var t = this.screen,
                      e = this.onClick,
                      r = this.onMouseMove,
                      n = t.ctx.canvas;
                    (n.onclick = e), (n.onmousemove = r), (this.working = !0);
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  if (this.working) {
                    var t = this.screen.ctx.canvas;
                    (this.working = !1),
                      (t.onclick = null),
                      (t.onmousemove = null);
                  }
                },
              },
              {
                key: "hasEvents",
                value: function () {
                  return this.working && this.events.length > 0;
                },
              },
              {
                key: "runEvents",
                value: function () {
                  if (this.working) {
                    var t = this.screen,
                      e = this.events,
                      r = this.eventElements,
                      n = t.ctx.canvas.style;
                    n && (n.cursor = ""),
                      e.forEach(function (t, e) {
                        for (var n = t.run, i = r[e]; i; ) n(i), (i = i.parent);
                      }),
                      (this.events = []),
                      (this.eventElements = []);
                  }
                },
              },
              {
                key: "checkPath",
                value: function (t, e) {
                  if (this.working && e) {
                    var r = this.events,
                      n = this.eventElements;
                    r.forEach(function (r, i) {
                      var a = r.x,
                        o = r.y;
                      !n[i] &&
                        e.isPointInPath &&
                        e.isPointInPath(a, o) &&
                        (n[i] = t);
                    });
                  }
                },
              },
              {
                key: "checkBoundingBox",
                value: function (t, e) {
                  if (this.working && e) {
                    var r = this.events,
                      n = this.eventElements;
                    r.forEach(function (r, i) {
                      var a = r.x,
                        o = r.y;
                      !n[i] && e.isPointInBox(a, o) && (n[i] = t);
                    });
                  }
                },
              },
              {
                key: "mapXY",
                value: function (t, e) {
                  for (
                    var r = this.screen,
                      n = r.window,
                      i = r.ctx,
                      a = new Pt(t, e),
                      o = i.canvas;
                    o;

                  )
                    (a.x -= o.offsetLeft),
                      (a.y -= o.offsetTop),
                      (o = o.offsetParent);
                  return (
                    n.scrollX && (a.x += n.scrollX),
                    n.scrollY && (a.y += n.scrollY),
                    a
                  );
                },
              },
              {
                key: "onClick",
                value: function (t) {
                  var e = this.mapXY(t.clientX, t.clientY),
                    r = e.x,
                    n = e.y;
                  this.events.push({
                    type: "onclick",
                    x: r,
                    y: n,
                    run: function (t) {
                      t.onClick && t.onClick();
                    },
                  });
                },
              },
              {
                key: "onMouseMove",
                value: function (t) {
                  var e = this.mapXY(t.clientX, t.clientY),
                    r = e.x,
                    n = e.y;
                  this.events.push({
                    type: "onmousemove",
                    x: r,
                    y: n,
                    run: function (t) {
                      t.onMouseMove && t.onMouseMove();
                    },
                  });
                },
              },
            ]),
            t
          );
        })(),
        Mt = "undefined" !== typeof window ? window : null,
        Nt = "undefined" !== typeof fetch ? fetch.bind(void 0) : null,
        _t = (function () {
          function t(e) {
            v(this, t);
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.fetch,
              i = void 0 === n ? Nt : n,
              a = r.window,
              o = void 0 === a ? Mt : a;
            (this.ctx = e),
              (this.FRAMERATE = 30),
              (this.MAX_VIRTUAL_PIXELS = 3e4),
              (this.CLIENT_WIDTH = 800),
              (this.CLIENT_HEIGHT = 600),
              (this.viewPort = new Et()),
              (this.mouse = new Ct(this)),
              (this.animations = []),
              (this.waits = []),
              (this.frameDuration = 0),
              (this.isReadyLock = !1),
              (this.isFirstRender = !0),
              (this.intervalId = null),
              (this.window = o),
              (this.fetch = i);
          }
          return (
            d(t, [
              {
                key: "wait",
                value: function (t) {
                  this.waits.push(t);
                },
              },
              {
                key: "ready",
                value: function () {
                  return this.readyPromise
                    ? this.readyPromise
                    : Promise.resolve();
                },
              },
              {
                key: "isReady",
                value: function () {
                  if (this.isReadyLock) return !0;
                  var t = this.waits.every(function (t) {
                    return t();
                  });
                  return (
                    t &&
                      ((this.waits = []),
                      this.resolveReady && this.resolveReady()),
                    (this.isReadyLock = t),
                    t
                  );
                },
              },
              {
                key: "setDefaults",
                value: function (t) {
                  (t.strokeStyle = "rgba(0,0,0,0)"),
                    (t.lineCap = "butt"),
                    (t.lineJoin = "miter"),
                    (t.miterLimit = 4);
                },
              },
              {
                key: "setViewBox",
                value: function (t) {
                  var e = t.document,
                    r = t.ctx,
                    n = t.aspectRatio,
                    i = t.width,
                    a = t.desiredWidth,
                    o = t.height,
                    s = t.desiredHeight,
                    u = t.minX,
                    c = void 0 === u ? 0 : u,
                    l = t.minY,
                    h = void 0 === l ? 0 : l,
                    f = t.refX,
                    p = t.refY,
                    v = t.clip,
                    g = void 0 !== v && v,
                    y = t.clipX,
                    d = void 0 === y ? 0 : y,
                    x = t.clipY,
                    b = void 0 === x ? 0 : x,
                    w = K(n)
                      .replace(/^defer\s/, "")
                      .split(" "),
                    S = (0, m.Z)(w, 2),
                    k = S[0] || "xMidYMid",
                    T = S[1] || "meet",
                    O = i / a,
                    A = o / s,
                    E = Math.min(O, A),
                    P = Math.max(O, A),
                    C = a,
                    M = s;
                  "meet" === T && ((C *= E), (M *= E)),
                    "slice" === T && ((C *= P), (M *= P));
                  var N = new At(e, "refX", f),
                    _ = new At(e, "refY", p),
                    R = N.hasValue() && _.hasValue();
                  if (
                    (R &&
                      r.translate(-E * N.getPixels("x"), -E * _.getPixels("y")),
                    g)
                  ) {
                    var V = E * d,
                      I = E * b;
                    r.beginPath(),
                      r.moveTo(V, I),
                      r.lineTo(i, I),
                      r.lineTo(i, o),
                      r.lineTo(V, o),
                      r.closePath(),
                      r.clip();
                  }
                  if (!R) {
                    var L = "meet" === T && E === A,
                      D = "slice" === T && P === A,
                      j = "meet" === T && E === O,
                      B = "slice" === T && P === O;
                    k.startsWith("xMid") &&
                      (L || D) &&
                      r.translate(i / 2 - C / 2, 0),
                      k.endsWith("YMid") &&
                        (j || B) &&
                        r.translate(0, o / 2 - M / 2),
                      k.startsWith("xMax") && (L || D) && r.translate(i - C, 0),
                      k.endsWith("YMax") && (j || B) && r.translate(0, o - M);
                  }
                  switch (!0) {
                    case "none" === k:
                      r.scale(O, A);
                      break;
                    case "meet" === T:
                      r.scale(E, E);
                      break;
                    case "slice" === T:
                      r.scale(P, P);
                  }
                  r.translate(-c, -h);
                },
              },
              {
                key: "start",
                value: function (t) {
                  var e = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = r.enableRedraw,
                    i = void 0 !== n && n,
                    a = r.ignoreMouse,
                    o = void 0 !== a && a,
                    s = r.ignoreAnimation,
                    u = void 0 !== s && s,
                    c = r.ignoreDimensions,
                    l = void 0 !== c && c,
                    h = r.ignoreClear,
                    f = void 0 !== h && h,
                    p = r.forceRedraw,
                    v = r.scaleWidth,
                    g = r.scaleHeight,
                    y = r.offsetX,
                    d = r.offsetY,
                    m = this.FRAMERATE,
                    x = this.mouse,
                    b = 1e3 / m;
                  if (
                    ((this.frameDuration = b),
                    (this.readyPromise = new Promise(function (t) {
                      e.resolveReady = t;
                    })),
                    this.isReady() && this.render(t, l, f, v, g, y, d),
                    i)
                  ) {
                    var w = Date.now(),
                      S = w,
                      T = 0;
                    o || x.start(),
                      (this.intervalId = k(function r() {
                        (w = Date.now()),
                          (T = w - S) >= b &&
                            ((S = w - (T % b)),
                            e.shouldUpdate(u, p) &&
                              (e.render(t, l, f, v, g, y, d), x.runEvents())),
                          (e.intervalId = k(r));
                      }));
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  this.intervalId &&
                    (k.cancel(this.intervalId), (this.intervalId = null)),
                    this.mouse.stop();
                },
              },
              {
                key: "shouldUpdate",
                value: function (t, e) {
                  if (!t) {
                    var r = this.frameDuration,
                      n = this.animations.reduce(function (t, e) {
                        return e.update(r) || t;
                      }, !1);
                    if (n) return !0;
                  }
                  return (
                    !("function" !== typeof e || !e()) ||
                    !(this.isReadyLock || !this.isReady()) ||
                    !!this.mouse.hasEvents()
                  );
                },
              },
              {
                key: "render",
                value: function (t, e, r, n, i, a, o) {
                  var s = this.CLIENT_WIDTH,
                    u = this.CLIENT_HEIGHT,
                    c = this.viewPort,
                    l = this.ctx,
                    h = this.isFirstRender,
                    f = l.canvas;
                  c.clear(),
                    f.width && f.height
                      ? c.setCurrent(f.width, f.height)
                      : c.setCurrent(s, u);
                  var p = t.getStyle("width"),
                    v = t.getStyle("height");
                  !e &&
                    (h || ("number" !== typeof n && "number" !== typeof i)) &&
                    (p.hasValue() &&
                      ((f.width = p.getPixels("x")),
                      f.style && (f.style.width = "".concat(f.width, "px"))),
                    v.hasValue() &&
                      ((f.height = v.getPixels("y")),
                      f.style && (f.style.height = "".concat(f.height, "px"))));
                  var g = f.clientWidth || f.width,
                    y = f.clientHeight || f.height;
                  if (
                    (e &&
                      p.hasValue() &&
                      v.hasValue() &&
                      ((g = p.getPixels("x")), (y = v.getPixels("y"))),
                    c.setCurrent(g, y),
                    "number" === typeof a &&
                      t.getAttribute("x", !0).setValue(a),
                    "number" === typeof o &&
                      t.getAttribute("y", !0).setValue(o),
                    "number" === typeof n || "number" === typeof i)
                  ) {
                    var d = et(t.getAttribute("viewBox").getString()),
                      m = 0,
                      x = 0;
                    if ("number" === typeof n) {
                      var b = t.getStyle("width");
                      b.hasValue()
                        ? (m = b.getPixels("x") / n)
                        : isNaN(d[2]) || (m = d[2] / n);
                    }
                    if ("number" === typeof i) {
                      var w = t.getStyle("height");
                      w.hasValue()
                        ? (x = w.getPixels("y") / i)
                        : isNaN(d[3]) || (x = d[3] / i);
                    }
                    m || (m = x),
                      x || (x = m),
                      t.getAttribute("width", !0).setValue(n),
                      t.getAttribute("height", !0).setValue(i);
                    var S = t.getStyle("transform", !0, !0);
                    S.setValue(
                      ""
                        .concat(S.getString(), " scale(")
                        .concat(1 / m, ", ")
                        .concat(1 / x, ")")
                    );
                  }
                  r || l.clearRect(0, 0, g, y),
                    t.render(l),
                    h && (this.isFirstRender = !1);
                },
              },
            ]),
            t
          );
        })();
      (_t.defaultWindow = Mt), (_t.defaultFetch = Nt);
      var Rt = _t.defaultFetch,
        Vt = "undefined" !== typeof DOMParser ? DOMParser : null,
        It = (function () {
          function t() {
            v(this, t);
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.fetch,
              n = void 0 === r ? Rt : r,
              i = e.DOMParser,
              a = void 0 === i ? Vt : i;
            (this.fetch = n), (this.DOMParser = a);
          }
          return (
            d(t, [
              {
                key: "parse",
                value: function (t) {
                  var e = this;
                  return w(
                    x().mark(function r() {
                      return x().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (!t.startsWith("<")) {
                                r.next = 2;
                                break;
                              }
                              return r.abrupt("return", e.parseFromString(t));
                            case 2:
                              return r.abrupt("return", e.load(t));
                            case 3:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  )();
                },
              },
              {
                key: "parseFromString",
                value: function (t) {
                  var e = new this.DOMParser();
                  try {
                    return this.checkDocument(
                      e.parseFromString(t, "image/svg+xml")
                    );
                  } catch (r) {
                    return this.checkDocument(e.parseFromString(t, "text/xml"));
                  }
                },
              },
              {
                key: "checkDocument",
                value: function (t) {
                  var e = t.getElementsByTagName("parsererror")[0];
                  if (e) throw new Error(e.textContent);
                  return t;
                },
              },
              {
                key: "load",
                value: function (t) {
                  var e = this;
                  return w(
                    x().mark(function r() {
                      var n, i;
                      return x().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (r.next = 2), e.fetch(t);
                            case 2:
                              return (n = r.sent), (r.next = 5), n.text();
                            case 5:
                              return (
                                (i = r.sent),
                                r.abrupt("return", e.parseFromString(i))
                              );
                            case 7:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  )();
                },
              },
            ]),
            t
          );
        })(),
        Lt = (function () {
          function t(e, r) {
            v(this, t),
              (this.type = "translate"),
              (this.point = null),
              (this.point = Pt.parse(r));
          }
          return (
            d(t, [
              {
                key: "apply",
                value: function (t) {
                  var e = this.point,
                    r = e.x,
                    n = e.y;
                  t.translate(r || 0, n || 0);
                },
              },
              {
                key: "unapply",
                value: function (t) {
                  var e = this.point,
                    r = e.x,
                    n = e.y;
                  t.translate(-1 * r || 0, -1 * n || 0);
                },
              },
              {
                key: "applyToPoint",
                value: function (t) {
                  var e = this.point,
                    r = e.x,
                    n = e.y;
                  t.applyTransform([1, 0, 0, 1, r || 0, n || 0]);
                },
              },
            ]),
            t
          );
        })(),
        Dt = (function () {
          function t(e, r, n) {
            v(this, t),
              (this.type = "rotate"),
              (this.angle = null),
              (this.originX = null),
              (this.originY = null),
              (this.cx = 0),
              (this.cy = 0);
            var i = et(r);
            (this.angle = new At(e, "angle", i[0])),
              (this.originX = n[0]),
              (this.originY = n[1]),
              (this.cx = i[1] || 0),
              (this.cy = i[2] || 0);
          }
          return (
            d(t, [
              {
                key: "apply",
                value: function (t) {
                  var e = this.cx,
                    r = this.cy,
                    n = this.originX,
                    i = this.originY,
                    a = this.angle,
                    o = e + n.getPixels("x"),
                    s = r + i.getPixels("y");
                  t.translate(o, s),
                    t.rotate(a.getRadians()),
                    t.translate(-o, -s);
                },
              },
              {
                key: "unapply",
                value: function (t) {
                  var e = this.cx,
                    r = this.cy,
                    n = this.originX,
                    i = this.originY,
                    a = this.angle,
                    o = e + n.getPixels("x"),
                    s = r + i.getPixels("y");
                  t.translate(o, s),
                    t.rotate(-1 * a.getRadians()),
                    t.translate(-o, -s);
                },
              },
              {
                key: "applyToPoint",
                value: function (t) {
                  var e = this.cx,
                    r = this.cy,
                    n = this.angle.getRadians();
                  t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
                    t.applyTransform([
                      Math.cos(n),
                      Math.sin(n),
                      -Math.sin(n),
                      Math.cos(n),
                      0,
                      0,
                    ]),
                    t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
                },
              },
            ]),
            t
          );
        })(),
        jt = (function () {
          function t(e, r, n) {
            v(this, t),
              (this.type = "scale"),
              (this.scale = null),
              (this.originX = null),
              (this.originY = null);
            var i = Pt.parseScale(r);
            (0 !== i.x && 0 !== i.y) || ((i.x = gt), (i.y = gt)),
              (this.scale = i),
              (this.originX = n[0]),
              (this.originY = n[1]);
          }
          return (
            d(t, [
              {
                key: "apply",
                value: function (t) {
                  var e = this.scale,
                    r = e.x,
                    n = e.y,
                    i = this.originX,
                    a = this.originY,
                    o = i.getPixels("x"),
                    s = a.getPixels("y");
                  t.translate(o, s), t.scale(r, n || r), t.translate(-o, -s);
                },
              },
              {
                key: "unapply",
                value: function (t) {
                  var e = this.scale,
                    r = e.x,
                    n = e.y,
                    i = this.originX,
                    a = this.originY,
                    o = i.getPixels("x"),
                    s = a.getPixels("y");
                  t.translate(o, s),
                    t.scale(1 / r, 1 / n || r),
                    t.translate(-o, -s);
                },
              },
              {
                key: "applyToPoint",
                value: function (t) {
                  var e = this.scale,
                    r = e.x,
                    n = e.y;
                  t.applyTransform([r || 0, 0, 0, n || 0, 0, 0]);
                },
              },
            ]),
            t
          );
        })(),
        Bt = (function () {
          function t(e, r, n) {
            v(this, t),
              (this.type = "matrix"),
              (this.matrix = []),
              (this.originX = null),
              (this.originY = null),
              (this.matrix = et(r)),
              (this.originX = n[0]),
              (this.originY = n[1]);
          }
          return (
            d(t, [
              {
                key: "apply",
                value: function (t) {
                  var e = this.originX,
                    r = this.originY,
                    n = this.matrix,
                    i = e.getPixels("x"),
                    a = r.getPixels("y");
                  t.translate(i, a),
                    t.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
                    t.translate(-i, -a);
                },
              },
              {
                key: "unapply",
                value: function (t) {
                  var e = this.originX,
                    r = this.originY,
                    n = this.matrix,
                    i = n[0],
                    a = n[2],
                    o = n[4],
                    s = n[1],
                    u = n[3],
                    c = n[5],
                    l =
                      1 /
                      (i * (1 * u - 0 * c) -
                        a * (1 * s - 0 * c) +
                        o * (0 * s - 0 * u)),
                    h = e.getPixels("x"),
                    f = r.getPixels("y");
                  t.translate(h, f),
                    t.transform(
                      l * (1 * u - 0 * c),
                      l * (0 * c - 1 * s),
                      l * (0 * o - 1 * a),
                      l * (1 * i - 0 * o),
                      l * (a * c - o * u),
                      l * (o * s - i * c)
                    ),
                    t.translate(-h, -f);
                },
              },
              {
                key: "applyToPoint",
                value: function (t) {
                  t.applyTransform(this.matrix);
                },
              },
            ]),
            t
          );
        })(),
        Ft = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "skew"),
              (a.angle = null),
              (a.angle = new At(t, "angle", n)),
              a
            );
          }
          return d(r);
        })(Bt),
        zt = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "skewX"),
              (a.matrix = [1, 0, Math.tan(a.angle.getRadians()), 1, 0, 0]),
              a
            );
          }
          return d(r);
        })(Ft),
        Ut = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "skewY"),
              (a.matrix = [1, Math.tan(a.angle.getRadians()), 0, 1, 0, 0]),
              a
            );
          }
          return d(r);
        })(Ft);
      var Ht = (function () {
        function t(e, r, n) {
          var i = this;
          v(this, t), (this.document = e), (this.transforms = []);
          var a = (function (t) {
            return K(t)
              .trim()
              .replace(/\)([a-zA-Z])/g, ") $1")
              .replace(/\)(\s?,\s?)/g, ") ")
              .split(/\s(?=[a-z])/);
          })(r);
          a.forEach(function (e) {
            if ("none" !== e) {
              var r = (function (t) {
                  var e = t.split("("),
                    r = (0, m.Z)(e, 2),
                    n = r[0],
                    i = r[1];
                  return [n.trim(), i.trim().replace(")", "")];
                })(e),
                a = (0, m.Z)(r, 2),
                o = a[0],
                s = a[1],
                u = t.transformTypes[o];
              "undefined" !== typeof u &&
                i.transforms.push(new u(i.document, s, n));
            }
          });
        }
        return (
          d(
            t,
            [
              {
                key: "apply",
                value: function (t) {
                  for (var e = this.transforms, r = e.length, n = 0; n < r; n++)
                    e[n].apply(t);
                },
              },
              {
                key: "unapply",
                value: function (t) {
                  for (var e = this.transforms, r = e.length - 1; r >= 0; r--)
                    e[r].unapply(t);
                },
              },
              {
                key: "applyToPoint",
                value: function (t) {
                  for (var e = this.transforms, r = e.length, n = 0; n < r; n++)
                    e[n].applyToPoint(t);
                },
              },
            ],
            [
              {
                key: "fromElement",
                value: function (e, r) {
                  var n = r.getStyle("transform", !1, !0),
                    i = r.getStyle("transform-origin", !1, !0).split(),
                    a = (0, m.Z)(i, 2),
                    o = a[0],
                    s = a[1],
                    u = [o, void 0 === s ? o : s];
                  return n.hasValue() ? new t(e, n.getString(), u) : null;
                },
              },
            ]
          ),
          t
        );
      })();
      Ht.transformTypes = {
        translate: Lt,
        rotate: Dt,
        scale: jt,
        matrix: Bt,
        skewX: zt,
        skewY: Ut,
      };
      var Xt = (function () {
        function t(e, r) {
          var n = this;
          v(this, t);
          var i =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (
            ((this.document = e),
            (this.node = r),
            (this.captureTextNodes = i),
            (this.attributes = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.animationFrozen = !1),
            (this.animationFrozenValue = ""),
            (this.parent = null),
            (this.children = []),
            r && 1 === r.nodeType)
          ) {
            if (
              (Array.from(r.attributes).forEach(function (t) {
                var r = nt(t.nodeName);
                n.attributes[r] = new At(e, r, t.value);
              }),
              this.addStylesFromStyleDefinition(),
              this.getAttribute("style").hasValue())
            ) {
              var a = this.getAttribute("style")
                .getString()
                .split(";")
                .map(function (t) {
                  return t.trim();
                });
              a.forEach(function (t) {
                if (t) {
                  var r = t.split(":").map(function (t) {
                      return t.trim();
                    }),
                    i = (0, m.Z)(r, 2),
                    a = i[0],
                    o = i[1];
                  n.styles[a] = new At(e, a, o);
                }
              });
            }
            var o = e.definitions,
              s = this.getAttribute("id");
            s.hasValue() && (o[s.getString()] || (o[s.getString()] = this)),
              Array.from(r.childNodes).forEach(function (t) {
                if (1 === t.nodeType) n.addChild(t);
                else if (i && (3 === t.nodeType || 4 === t.nodeType)) {
                  var r = e.createTextNode(t);
                  r.getText().length > 0 && n.addChild(r);
                }
              });
          }
        }
        return (
          d(t, [
            {
              key: "getAttribute",
              value: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = this.attributes[t];
                if (!r && e) {
                  var n = new At(this.document, t, "");
                  return (this.attributes[t] = n), n;
                }
                return r || At.empty(this.document);
              },
            },
            {
              key: "getHrefAttribute",
              value: function () {
                for (var t in this.attributes)
                  if ("href" === t || t.endsWith(":href"))
                    return this.attributes[t];
                return At.empty(this.document);
              },
            },
            {
              key: "getStyle",
              value: function (t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  n = this.styles[t];
                if (n) return n;
                var i = this.getAttribute(t);
                if (null !== i && void 0 !== i && i.hasValue())
                  return (this.styles[t] = i), i;
                if (!r) {
                  var a = this.parent;
                  if (a) {
                    var o = a.getStyle(t);
                    if (null !== o && void 0 !== o && o.hasValue()) return o;
                  }
                }
                if (e) {
                  var s = new At(this.document, t, "");
                  return (this.styles[t] = s), s;
                }
                return n || At.empty(this.document);
              },
            },
            {
              key: "render",
              value: function (t) {
                if (
                  "none" !== this.getStyle("display").getString() &&
                  "hidden" !== this.getStyle("visibility").getString()
                ) {
                  if ((t.save(), this.getStyle("mask").hasValue())) {
                    var e = this.getStyle("mask").getDefinition();
                    e && (this.applyEffects(t), e.apply(t, this));
                  } else if (
                    "none" !== this.getStyle("filter").getValue("none")
                  ) {
                    var r = this.getStyle("filter").getDefinition();
                    r && (this.applyEffects(t), r.apply(t, this));
                  } else
                    this.setContext(t),
                      this.renderChildren(t),
                      this.clearContext(t);
                  t.restore();
                }
              },
            },
            { key: "setContext", value: function (t) {} },
            {
              key: "applyEffects",
              value: function (t) {
                var e = Ht.fromElement(this.document, this);
                e && e.apply(t);
                var r = this.getStyle("clip-path", !1, !0);
                if (r.hasValue()) {
                  var n = r.getDefinition();
                  n && n.apply(t);
                }
              },
            },
            { key: "clearContext", value: function (t) {} },
            {
              key: "renderChildren",
              value: function (t) {
                this.children.forEach(function (e) {
                  e.render(t);
                });
              },
            },
            {
              key: "addChild",
              value: function (e) {
                var r = e instanceof t ? e : this.document.createElement(e);
                (r.parent = this),
                  t.ignoreChildTypes.includes(r.type) || this.children.push(r);
              },
            },
            {
              key: "matchesSelector",
              value: function (t) {
                var e,
                  r = this.node;
                if ("function" === typeof r.matches) return r.matches(t);
                var n =
                  null === (e = r.getAttribute) || void 0 === e
                    ? void 0
                    : e.call(r, "class");
                return (
                  !(!n || "" === n) &&
                  n.split(" ").some(function (e) {
                    return ".".concat(e) === t;
                  })
                );
              },
            },
            {
              key: "addStylesFromStyleDefinition",
              value: function () {
                var t = this.document,
                  e = t.styles,
                  r = t.stylesSpecificity;
                for (var n in e)
                  if (!n.startsWith("@") && this.matchesSelector(n)) {
                    var i = e[n],
                      a = r[n];
                    if (i)
                      for (var o in i) {
                        var s = this.stylesSpecificity[o];
                        "undefined" === typeof s && (s = "000"),
                          a >= s &&
                            ((this.styles[o] = i[o]),
                            (this.stylesSpecificity[o] = a));
                      }
                  }
              },
            },
            {
              key: "removeStyles",
              value: function (t, e) {
                return e.reduce(function (e, r) {
                  var n = t.getStyle(r);
                  if (!n.hasValue()) return e;
                  var i = n.getString();
                  return n.setValue(""), [].concat((0, l.Z)(e), [[r, i]]);
                }, []);
              },
            },
            {
              key: "restoreStyles",
              value: function (t, e) {
                e.forEach(function (e) {
                  var r = (0, m.Z)(e, 2),
                    n = r[0],
                    i = r[1];
                  t.getStyle(n, !0).setValue(i);
                });
              },
            },
            {
              key: "isFirstChild",
              value: function () {
                var t;
                return (
                  0 ===
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.children.indexOf(this))
                );
              },
            },
          ]),
          t
        );
      })();
      Xt.ignoreChildTypes = ["title"];
      var Yt = (function (t) {
        f(r, t);
        var e = p(r);
        function r(t, n, i) {
          return v(this, r), e.call(this, t, n, i);
        }
        return d(r);
      })(Xt);
      function Gt(t) {
        var e = t.trim();
        return /^('|")/.test(e) ? e : '"'.concat(e, '"');
      }
      function Wt(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "italic":
          case "oblique":
          case "inherit":
          case "initial":
          case "unset":
            return e;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
        }
      }
      function Zt(t) {
        if (!t) return "";
        var e = t.trim().toLowerCase();
        switch (e) {
          case "normal":
          case "bold":
          case "lighter":
          case "bolder":
          case "inherit":
          case "initial":
          case "unset":
            return e;
          default:
            return /^[\d.]+$/.test(e) ? e : "";
        }
      }
      var qt = (function () {
        function t(e, r, n, i, a, o) {
          v(this, t);
          var s = o ? ("string" === typeof o ? t.parse(o) : o) : {};
          (this.fontFamily = a || s.fontFamily),
            (this.fontSize = i || s.fontSize),
            (this.fontStyle = e || s.fontStyle),
            (this.fontWeight = n || s.fontWeight),
            (this.fontVariant = r || s.fontVariant);
        }
        return (
          d(
            t,
            [
              {
                key: "toString",
                value: function () {
                  return [
                    Wt(this.fontStyle),
                    this.fontVariant,
                    Zt(this.fontWeight),
                    this.fontSize,
                    ((t = this.fontFamily),
                    "undefined" === typeof process
                      ? t
                      : t.trim().split(",").map(Gt).join(",")),
                  ]
                    .join(" ")
                    .trim();
                  var t;
                },
              },
            ],
            [
              {
                key: "parse",
                value: function () {
                  var e = arguments.length > 1 ? arguments[1] : void 0,
                    r = "",
                    n = "",
                    i = "",
                    a = "",
                    o = "",
                    s = K(
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ""
                    )
                      .trim()
                      .split(" "),
                    u = {
                      fontSize: !1,
                      fontStyle: !1,
                      fontWeight: !1,
                      fontVariant: !1,
                    };
                  return (
                    s.forEach(function (e) {
                      switch (!0) {
                        case !u.fontStyle && t.styles.includes(e):
                          "inherit" !== e && (r = e), (u.fontStyle = !0);
                          break;
                        case !u.fontVariant && t.variants.includes(e):
                          "inherit" !== e && (n = e),
                            (u.fontStyle = !0),
                            (u.fontVariant = !0);
                          break;
                        case !u.fontWeight && t.weights.includes(e):
                          "inherit" !== e && (i = e),
                            (u.fontStyle = !0),
                            (u.fontVariant = !0),
                            (u.fontWeight = !0);
                          break;
                        case !u.fontSize:
                          if ("inherit" !== e) {
                            var s = e.split("/"),
                              c = (0, m.Z)(s, 1);
                            a = c[0];
                          }
                          (u.fontStyle = !0),
                            (u.fontVariant = !0),
                            (u.fontWeight = !0),
                            (u.fontSize = !0);
                          break;
                        default:
                          "inherit" !== e && (o += e);
                      }
                    }),
                    new t(r, n, i, a, o, e)
                  );
                },
              },
            ]
          ),
          t
        );
      })();
      (qt.styles = "normal|italic|oblique|inherit"),
        (qt.variants = "normal|small-caps|inherit"),
        (qt.weights =
          "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit");
      var Qt = (function () {
          function t() {
            v(this, t);
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Number.NaN,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.NaN,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.NaN,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Number.NaN;
            (this.x1 = e),
              (this.y1 = r),
              (this.x2 = n),
              (this.y2 = i),
              this.addPoint(e, r),
              this.addPoint(n, i);
          }
          return (
            d(t, [
              {
                key: "x",
                get: function () {
                  return this.x1;
                },
              },
              {
                key: "y",
                get: function () {
                  return this.y1;
                },
              },
              {
                key: "width",
                get: function () {
                  return this.x2 - this.x1;
                },
              },
              {
                key: "height",
                get: function () {
                  return this.y2 - this.y1;
                },
              },
              {
                key: "addPoint",
                value: function (t, e) {
                  "undefined" !== typeof t &&
                    ((isNaN(this.x1) || isNaN(this.x2)) &&
                      ((this.x1 = t), (this.x2 = t)),
                    t < this.x1 && (this.x1 = t),
                    t > this.x2 && (this.x2 = t)),
                    "undefined" !== typeof e &&
                      ((isNaN(this.y1) || isNaN(this.y2)) &&
                        ((this.y1 = e), (this.y2 = e)),
                      e < this.y1 && (this.y1 = e),
                      e > this.y2 && (this.y2 = e));
                },
              },
              {
                key: "addX",
                value: function (t) {
                  this.addPoint(t, null);
                },
              },
              {
                key: "addY",
                value: function (t) {
                  this.addPoint(null, t);
                },
              },
              {
                key: "addBoundingBox",
                value: function (t) {
                  if (t) {
                    var e = t.x1,
                      r = t.y1,
                      n = t.x2,
                      i = t.y2;
                    this.addPoint(e, r), this.addPoint(n, i);
                  }
                },
              },
              {
                key: "sumCubic",
                value: function (t, e, r, n, i) {
                  return (
                    Math.pow(1 - t, 3) * e +
                    3 * Math.pow(1 - t, 2) * t * r +
                    3 * (1 - t) * Math.pow(t, 2) * n +
                    Math.pow(t, 3) * i
                  );
                },
              },
              {
                key: "bezierCurveAdd",
                value: function (t, e, r, n, i) {
                  var a = 6 * e - 12 * r + 6 * n,
                    o = -3 * e + 9 * r - 9 * n + 3 * i,
                    s = 3 * r - 3 * e;
                  if (0 !== o) {
                    var u = Math.pow(a, 2) - 4 * s * o;
                    if (!(u < 0)) {
                      var c = (-a + Math.sqrt(u)) / (2 * o);
                      0 < c &&
                        c < 1 &&
                        (t
                          ? this.addX(this.sumCubic(c, e, r, n, i))
                          : this.addY(this.sumCubic(c, e, r, n, i)));
                      var l = (-a - Math.sqrt(u)) / (2 * o);
                      0 < l &&
                        l < 1 &&
                        (t
                          ? this.addX(this.sumCubic(l, e, r, n, i))
                          : this.addY(this.sumCubic(l, e, r, n, i)));
                    }
                  } else {
                    if (0 === a) return;
                    var h = -s / a;
                    0 < h &&
                      h < 1 &&
                      (t
                        ? this.addX(this.sumCubic(h, e, r, n, i))
                        : this.addY(this.sumCubic(h, e, r, n, i)));
                  }
                },
              },
              {
                key: "addBezierCurve",
                value: function (t, e, r, n, i, a, o, s) {
                  this.addPoint(t, e),
                    this.addPoint(o, s),
                    this.bezierCurveAdd(!0, t, r, i, o),
                    this.bezierCurveAdd(!1, e, n, a, s);
                },
              },
              {
                key: "addQuadraticCurve",
                value: function (t, e, r, n, i, a) {
                  var o = t + (2 / 3) * (r - t),
                    s = e + (2 / 3) * (n - e),
                    u = o + (1 / 3) * (i - t),
                    c = s + (1 / 3) * (a - e);
                  this.addBezierCurve(t, e, o, u, s, c, i, a);
                },
              },
              {
                key: "isPointInBox",
                value: function (t, e) {
                  var r = this.x1,
                    n = this.y1,
                    i = this.x2,
                    a = this.y2;
                  return r <= t && t <= i && n <= e && e <= a;
                },
              },
            ]),
            t
          );
        })(),
        $t = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t) {
            var n;
            return (
              v(this, r),
              ((n = e.call(
                this,
                t
                  .replace(/([+\-.])\s+/gm, "$1")
                  .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")
              )).control = null),
              (n.start = null),
              (n.current = null),
              (n.command = null),
              (n.commands = n.commands),
              (n.i = -1),
              (n.previousCommand = null),
              (n.points = []),
              (n.angles = []),
              n
            );
          }
          return (
            d(r, [
              {
                key: "reset",
                value: function () {
                  (this.i = -1),
                    (this.command = null),
                    (this.previousCommand = null),
                    (this.start = new Pt(0, 0)),
                    (this.control = new Pt(0, 0)),
                    (this.current = new Pt(0, 0)),
                    (this.points = []),
                    (this.angles = []);
                },
              },
              {
                key: "isEnd",
                value: function () {
                  return this.i >= this.commands.length - 1;
                },
              },
              {
                key: "next",
                value: function () {
                  var t = this.commands[++this.i];
                  return (
                    (this.previousCommand = this.command), (this.command = t), t
                  );
                },
              },
              {
                key: "getPoint",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "x",
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "y",
                    r = new Pt(this.command[t], this.command[e]);
                  return this.makeAbsolute(r);
                },
              },
              {
                key: "getAsControlPoint",
                value: function (t, e) {
                  var r = this.getPoint(t, e);
                  return (this.control = r), r;
                },
              },
              {
                key: "getAsCurrentPoint",
                value: function (t, e) {
                  var r = this.getPoint(t, e);
                  return (this.current = r), r;
                },
              },
              {
                key: "getReflectedControlPoint",
                value: function () {
                  var t = this.previousCommand.type;
                  if (
                    t !== H.CURVE_TO &&
                    t !== H.SMOOTH_CURVE_TO &&
                    t !== H.QUAD_TO &&
                    t !== H.SMOOTH_QUAD_TO
                  )
                    return this.current;
                  var e = this.current,
                    r = e.x,
                    n = e.y,
                    i = this.control,
                    a = i.x,
                    o = i.y;
                  return new Pt(2 * r - a, 2 * n - o);
                },
              },
              {
                key: "makeAbsolute",
                value: function (t) {
                  if (this.command.relative) {
                    var e = this.current,
                      r = e.x,
                      n = e.y;
                    (t.x += r), (t.y += n);
                  }
                  return t;
                },
              },
              {
                key: "addMarker",
                value: function (t, e, r) {
                  var n = this.points,
                    i = this.angles;
                  r &&
                    i.length > 0 &&
                    !i[i.length - 1] &&
                    (i[i.length - 1] = n[n.length - 1].angleTo(r)),
                    this.addMarkerAngle(t, e ? e.angleTo(t) : null);
                },
              },
              {
                key: "addMarkerAngle",
                value: function (t, e) {
                  this.points.push(t), this.angles.push(e);
                },
              },
              {
                key: "getMarkerPoints",
                value: function () {
                  return this.points;
                },
              },
              {
                key: "getMarkerAngles",
                value: function () {
                  for (var t = this.angles, e = t.length, r = 0; r < e; r++)
                    if (!t[r])
                      for (var n = r + 1; n < e; n++)
                        if (t[n]) {
                          t[r] = t[n];
                          break;
                        }
                  return t;
                },
              },
            ]),
            r
          );
        })(H),
        Kt = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).modifiedEmSizeStack = !1),
              t
            );
          }
          return (
            d(r, [
              {
                key: "calculateOpacity",
                value: function () {
                  for (var t = 1, e = this; e; ) {
                    var r = e.getStyle("opacity", !1, !0);
                    r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent);
                  }
                  return t;
                },
              },
              {
                key: "setContext",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!e) {
                    var r = this.getStyle("fill"),
                      n = this.getStyle("fill-opacity"),
                      i = this.getStyle("stroke"),
                      a = this.getStyle("stroke-opacity");
                    if (r.isUrlDefinition()) {
                      var o = r.getFillStyleDefinition(this, n);
                      o && (t.fillStyle = o);
                    } else if (r.hasValue()) {
                      "currentColor" === r.getString() &&
                        r.setValue(this.getStyle("color").getColor());
                      var s = r.getColor();
                      "inherit" !== s &&
                        (t.fillStyle = "none" === s ? "rgba(0,0,0,0)" : s);
                    }
                    if (n.hasValue()) {
                      var u = new At(this.document, "fill", t.fillStyle)
                        .addOpacity(n)
                        .getColor();
                      t.fillStyle = u;
                    }
                    if (i.isUrlDefinition()) {
                      var c = i.getFillStyleDefinition(this, a);
                      c && (t.strokeStyle = c);
                    } else if (i.hasValue()) {
                      "currentColor" === i.getString() &&
                        i.setValue(this.getStyle("color").getColor());
                      var l = i.getString();
                      "inherit" !== l &&
                        (t.strokeStyle = "none" === l ? "rgba(0,0,0,0)" : l);
                    }
                    if (a.hasValue()) {
                      var h = new At(this.document, "stroke", t.strokeStyle)
                        .addOpacity(a)
                        .getString();
                      t.strokeStyle = h;
                    }
                    var f = this.getStyle("stroke-width");
                    if (f.hasValue()) {
                      var p = f.getPixels();
                      t.lineWidth = p || gt;
                    }
                    var v = this.getStyle("stroke-linecap"),
                      g = this.getStyle("stroke-linejoin"),
                      y = this.getStyle("stroke-miterlimit"),
                      d = this.getStyle("stroke-dasharray"),
                      m = this.getStyle("stroke-dashoffset");
                    if (
                      (v.hasValue() && (t.lineCap = v.getString()),
                      g.hasValue() && (t.lineJoin = g.getString()),
                      y.hasValue() && (t.miterLimit = y.getNumber()),
                      d.hasValue() && "none" !== d.getString())
                    ) {
                      var x = et(d.getString());
                      "undefined" !== typeof t.setLineDash
                        ? t.setLineDash(x)
                        : "undefined" !== typeof t.webkitLineDash
                        ? (t.webkitLineDash = x)
                        : "undefined" === typeof t.mozDash ||
                          (1 === x.length && 0 === x[0]) ||
                          (t.mozDash = x);
                      var b = m.getPixels();
                      "undefined" !== typeof t.lineDashOffset
                        ? (t.lineDashOffset = b)
                        : "undefined" !== typeof t.webkitLineDashOffset
                        ? (t.webkitLineDashOffset = b)
                        : "undefined" !== typeof t.mozDashOffset &&
                          (t.mozDashOffset = b);
                    }
                  }
                  if (
                    ((this.modifiedEmSizeStack = !1),
                    "undefined" !== typeof t.font)
                  ) {
                    var w = this.getStyle("font"),
                      S = this.getStyle("font-style"),
                      k = this.getStyle("font-variant"),
                      T = this.getStyle("font-weight"),
                      O = this.getStyle("font-size"),
                      A = this.getStyle("font-family"),
                      E = new qt(
                        S.getString(),
                        k.getString(),
                        T.getString(),
                        O.hasValue() ? "".concat(O.getPixels(!0), "px") : "",
                        A.getString(),
                        qt.parse(w.getString(), t.font)
                      );
                    S.setValue(E.fontStyle),
                      k.setValue(E.fontVariant),
                      T.setValue(E.fontWeight),
                      O.setValue(E.fontSize),
                      A.setValue(E.fontFamily),
                      (t.font = E.toString()),
                      O.isPixels() &&
                        ((this.document.emSize = O.getPixels()),
                        (this.modifiedEmSizeStack = !0));
                  }
                  e ||
                    (this.applyEffects(t),
                    (t.globalAlpha = this.calculateOpacity()));
                },
              },
              {
                key: "clearContext",
                value: function (t) {
                  c(u(r.prototype), "clearContext", this).call(this, t),
                    this.modifiedEmSizeStack && this.document.popEmSize();
                },
              },
            ]),
            r
          );
        })(Xt),
        Jt = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "path"),
              (a.pathParser = null),
              (a.pathParser = new $t(a.getAttribute("d").getString())),
              a
            );
          }
          return (
            d(
              r,
              [
                {
                  key: "path",
                  value: function (t) {
                    var e = this.pathParser,
                      r = new Qt();
                    for (e.reset(), t && t.beginPath(); !e.isEnd(); )
                      switch (e.next().type) {
                        case $t.MOVE_TO:
                          this.pathM(t, r);
                          break;
                        case $t.LINE_TO:
                          this.pathL(t, r);
                          break;
                        case $t.HORIZ_LINE_TO:
                          this.pathH(t, r);
                          break;
                        case $t.VERT_LINE_TO:
                          this.pathV(t, r);
                          break;
                        case $t.CURVE_TO:
                          this.pathC(t, r);
                          break;
                        case $t.SMOOTH_CURVE_TO:
                          this.pathS(t, r);
                          break;
                        case $t.QUAD_TO:
                          this.pathQ(t, r);
                          break;
                        case $t.SMOOTH_QUAD_TO:
                          this.pathT(t, r);
                          break;
                        case $t.ARC:
                          this.pathA(t, r);
                          break;
                        case $t.CLOSE_PATH:
                          this.pathZ(t, r);
                      }
                    return r;
                  },
                },
                {
                  key: "getBoundingBox",
                  value: function (t) {
                    return this.path();
                  },
                },
                {
                  key: "getMarkers",
                  value: function () {
                    var t = this.pathParser,
                      e = t.getMarkerPoints(),
                      r = t.getMarkerAngles(),
                      n = e.map(function (t, e) {
                        return [t, r[e]];
                      });
                    return n;
                  },
                },
                {
                  key: "renderChildren",
                  value: function (t) {
                    this.path(t), this.document.screen.mouse.checkPath(this, t);
                    var e = this.getStyle("fill-rule");
                    "" !== t.fillStyle &&
                      ("inherit" !== e.getString("inherit")
                        ? t.fill(e.getString())
                        : t.fill()),
                      "" !== t.strokeStyle &&
                        ("non-scaling-stroke" ===
                        this.getAttribute("vector-effect").getString()
                          ? (t.save(),
                            t.setTransform(1, 0, 0, 1, 0, 0),
                            t.stroke(),
                            t.restore())
                          : t.stroke());
                    var r = this.getMarkers();
                    if (r) {
                      var n = r.length - 1,
                        i = this.getStyle("marker-start"),
                        a = this.getStyle("marker-mid"),
                        o = this.getStyle("marker-end");
                      if (i.isUrlDefinition()) {
                        var s = i.getDefinition(),
                          u = (0, m.Z)(r[0], 2),
                          c = u[0],
                          l = u[1];
                        s.render(t, c, l);
                      }
                      if (a.isUrlDefinition())
                        for (var h = a.getDefinition(), f = 1; f < n; f++) {
                          var p = (0, m.Z)(r[f], 2),
                            v = p[0],
                            g = p[1];
                          h.render(t, v, g);
                        }
                      if (o.isUrlDefinition()) {
                        var y = o.getDefinition(),
                          d = (0, m.Z)(r[n], 2),
                          x = d[0],
                          b = d[1];
                        y.render(t, x, b);
                      }
                    }
                  },
                },
                {
                  key: "pathM",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathM(n).point,
                      a = i.x,
                      o = i.y;
                    n.addMarker(i), e.addPoint(a, o), t && t.moveTo(a, o);
                  },
                },
                {
                  key: "pathL",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathL(n),
                      a = i.current,
                      o = i.point,
                      s = o.x,
                      u = o.y;
                    n.addMarker(o, a), e.addPoint(s, u), t && t.lineTo(s, u);
                  },
                },
                {
                  key: "pathH",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathH(n),
                      a = i.current,
                      o = i.point,
                      s = o.x,
                      u = o.y;
                    n.addMarker(o, a), e.addPoint(s, u), t && t.lineTo(s, u);
                  },
                },
                {
                  key: "pathV",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathV(n),
                      a = i.current,
                      o = i.point,
                      s = o.x,
                      u = o.y;
                    n.addMarker(o, a), e.addPoint(s, u), t && t.lineTo(s, u);
                  },
                },
                {
                  key: "pathC",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathC(n),
                      a = i.current,
                      o = i.point,
                      s = i.controlPoint,
                      u = i.currentPoint;
                    n.addMarker(u, s, o),
                      e.addBezierCurve(a.x, a.y, o.x, o.y, s.x, s.y, u.x, u.y),
                      t && t.bezierCurveTo(o.x, o.y, s.x, s.y, u.x, u.y);
                  },
                },
                {
                  key: "pathS",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathS(n),
                      a = i.current,
                      o = i.point,
                      s = i.controlPoint,
                      u = i.currentPoint;
                    n.addMarker(u, s, o),
                      e.addBezierCurve(a.x, a.y, o.x, o.y, s.x, s.y, u.x, u.y),
                      t && t.bezierCurveTo(o.x, o.y, s.x, s.y, u.x, u.y);
                  },
                },
                {
                  key: "pathQ",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathQ(n),
                      a = i.current,
                      o = i.controlPoint,
                      s = i.currentPoint;
                    n.addMarker(s, o, o),
                      e.addQuadraticCurve(a.x, a.y, o.x, o.y, s.x, s.y),
                      t && t.quadraticCurveTo(o.x, o.y, s.x, s.y);
                  },
                },
                {
                  key: "pathT",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathT(n),
                      a = i.current,
                      o = i.controlPoint,
                      s = i.currentPoint;
                    n.addMarker(s, o, o),
                      e.addQuadraticCurve(a.x, a.y, o.x, o.y, s.x, s.y),
                      t && t.quadraticCurveTo(o.x, o.y, s.x, s.y);
                  },
                },
                {
                  key: "pathA",
                  value: function (t, e) {
                    var n = this.pathParser,
                      i = r.pathA(n),
                      a = i.currentPoint,
                      o = i.rX,
                      s = i.rY,
                      u = i.sweepFlag,
                      c = i.xAxisRotation,
                      l = i.centp,
                      h = i.a1,
                      f = i.ad,
                      p = 1 - u ? 1 : -1,
                      v = h + p * (f / 2),
                      g = new Pt(l.x + o * Math.cos(v), l.y + s * Math.sin(v));
                    if (
                      (n.addMarkerAngle(g, v - (p * Math.PI) / 2),
                      n.addMarkerAngle(a, v - p * Math.PI),
                      e.addPoint(a.x, a.y),
                      t && !isNaN(h) && !isNaN(f))
                    ) {
                      var y = o > s ? o : s,
                        d = o > s ? 1 : o / s,
                        m = o > s ? s / o : 1;
                      t.translate(l.x, l.y),
                        t.rotate(c),
                        t.scale(d, m),
                        t.arc(0, 0, y, h, h + f, Boolean(1 - u)),
                        t.scale(1 / d, 1 / m),
                        t.rotate(-c),
                        t.translate(-l.x, -l.y);
                    }
                  },
                },
                {
                  key: "pathZ",
                  value: function (t, e) {
                    r.pathZ(this.pathParser),
                      t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
                  },
                },
              ],
              [
                {
                  key: "pathM",
                  value: function (t) {
                    var e = t.getAsCurrentPoint();
                    return (t.start = t.current), { point: e };
                  },
                },
                {
                  key: "pathL",
                  value: function (t) {
                    return { current: t.current, point: t.getAsCurrentPoint() };
                  },
                },
                {
                  key: "pathH",
                  value: function (t) {
                    var e = t.current,
                      r = t.command,
                      n = new Pt((r.relative ? e.x : 0) + r.x, e.y);
                    return (t.current = n), { current: e, point: n };
                  },
                },
                {
                  key: "pathV",
                  value: function (t) {
                    var e = t.current,
                      r = t.command,
                      n = new Pt(e.x, (r.relative ? e.y : 0) + r.y);
                    return (t.current = n), { current: e, point: n };
                  },
                },
                {
                  key: "pathC",
                  value: function (t) {
                    return {
                      current: t.current,
                      point: t.getPoint("x1", "y1"),
                      controlPoint: t.getAsControlPoint("x2", "y2"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathS",
                  value: function (t) {
                    return {
                      current: t.current,
                      point: t.getReflectedControlPoint(),
                      controlPoint: t.getAsControlPoint("x2", "y2"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathQ",
                  value: function (t) {
                    return {
                      current: t.current,
                      controlPoint: t.getAsControlPoint("x1", "y1"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathT",
                  value: function (t) {
                    var e = t.current,
                      r = t.getReflectedControlPoint();
                    return (
                      (t.control = r),
                      {
                        current: e,
                        controlPoint: r,
                        currentPoint: t.getAsCurrentPoint(),
                      }
                    );
                  },
                },
                {
                  key: "pathA",
                  value: function (t) {
                    var e = t.current,
                      r = t.command,
                      n = r.rX,
                      i = r.rY,
                      a = r.xRot,
                      o = r.lArcFlag,
                      s = r.sweepFlag,
                      u = a * (Math.PI / 180),
                      c = t.getAsCurrentPoint(),
                      l = new Pt(
                        (Math.cos(u) * (e.x - c.x)) / 2 +
                          (Math.sin(u) * (e.y - c.y)) / 2,
                        (-Math.sin(u) * (e.x - c.x)) / 2 +
                          (Math.cos(u) * (e.y - c.y)) / 2
                      ),
                      h =
                        Math.pow(l.x, 2) / Math.pow(n, 2) +
                        Math.pow(l.y, 2) / Math.pow(i, 2);
                    h > 1 && ((n *= Math.sqrt(h)), (i *= Math.sqrt(h)));
                    var f =
                      (o === s ? -1 : 1) *
                      Math.sqrt(
                        (Math.pow(n, 2) * Math.pow(i, 2) -
                          Math.pow(n, 2) * Math.pow(l.y, 2) -
                          Math.pow(i, 2) * Math.pow(l.x, 2)) /
                          (Math.pow(n, 2) * Math.pow(l.y, 2) +
                            Math.pow(i, 2) * Math.pow(l.x, 2))
                      );
                    isNaN(f) && (f = 0);
                    var p = new Pt((f * n * l.y) / i, (f * -i * l.x) / n),
                      v = new Pt(
                        (e.x + c.x) / 2 + Math.cos(u) * p.x - Math.sin(u) * p.y,
                        (e.y + c.y) / 2 + Math.sin(u) * p.x + Math.cos(u) * p.y
                      ),
                      g = mt([1, 0], [(l.x - p.x) / n, (l.y - p.y) / i]),
                      y = [(l.x - p.x) / n, (l.y - p.y) / i],
                      d = [(-l.x - p.x) / n, (-l.y - p.y) / i],
                      m = mt(y, d);
                    return (
                      dt(y, d) <= -1 && (m = Math.PI),
                      dt(y, d) >= 1 && (m = 0),
                      {
                        currentPoint: c,
                        rX: n,
                        rY: i,
                        sweepFlag: s,
                        xAxisRotation: u,
                        centp: v,
                        a1: g,
                        ad: m,
                      }
                    );
                  },
                },
                {
                  key: "pathZ",
                  value: function (t) {
                    t.current = t.start;
                  },
                },
              ]
            ),
            r
          );
        })(Kt),
        te = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "glyph"),
              (a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber()),
              (a.unicode = a.getAttribute("unicode").getString()),
              (a.arabicForm = a.getAttribute("arabic-form").getString()),
              a
            );
          }
          return d(r);
        })(Jt),
        ee = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(
                this,
                t,
                n,
                (this instanceof r ? this.constructor : void 0) === r || i
              )).type = "text"),
              (a.x = 0),
              (a.y = 0),
              (a.measureCache = -1),
              a
            );
          }
          return (
            d(r, [
              {
                key: "setContext",
                value: function (t) {
                  var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  c(u(r.prototype), "setContext", this).call(this, t, e);
                  var n =
                    this.getStyle("dominant-baseline").getTextBaseline() ||
                    this.getStyle("alignment-baseline").getTextBaseline();
                  n && (t.textBaseline = n);
                },
              },
              {
                key: "initializeCoordinates",
                value: function () {
                  (this.x = 0),
                    (this.y = 0),
                    (this.leafTexts = []),
                    (this.textChunkStart = 0),
                    (this.minX = Number.POSITIVE_INFINITY),
                    (this.maxX = Number.NEGATIVE_INFINITY);
                },
              },
              {
                key: "getBoundingBox",
                value: function (t) {
                  var e = this;
                  if ("text" !== this.type)
                    return this.getTElementBoundingBox(t);
                  this.initializeCoordinates(),
                    this.adjustChildCoordinatesRecursive(t);
                  var r = null;
                  return (
                    this.children.forEach(function (n, i) {
                      var a = e.getChildBoundingBox(t, e, e, i);
                      r ? r.addBoundingBox(a) : (r = a);
                    }),
                    r
                  );
                },
              },
              {
                key: "getFontSize",
                value: function () {
                  var t = this.document,
                    e = this.parent,
                    r = qt.parse(t.ctx.font).fontSize;
                  return e.getStyle("font-size").getNumber(r);
                },
              },
              {
                key: "getTElementBoundingBox",
                value: function (t) {
                  var e = this.getFontSize();
                  return new Qt(
                    this.x,
                    this.y - e,
                    this.x + this.measureText(t),
                    this.y
                  );
                },
              },
              {
                key: "getGlyph",
                value: function (t, e, r) {
                  var n = e[r],
                    i = null;
                  if (t.isArabic) {
                    var a = e.length,
                      o = e[r - 1],
                      s = e[r + 1],
                      u = "isolated";
                    if (
                      ((0 === r || " " === o) &&
                        r < a - 1 &&
                        " " !== s &&
                        (u = "terminal"),
                      r > 0 &&
                        " " !== o &&
                        r < a - 1 &&
                        " " !== s &&
                        (u = "medial"),
                      r > 0 &&
                        " " !== o &&
                        (r === a - 1 || " " === s) &&
                        (u = "initial"),
                      "undefined" !== typeof t.glyphs[n])
                    ) {
                      var c = t.glyphs[n];
                      i = c instanceof te ? c : c[u];
                    }
                  } else i = t.glyphs[n];
                  return i || (i = t.missingGlyph), i;
                },
              },
              {
                key: "getText",
                value: function () {
                  return "";
                },
              },
              {
                key: "getTextFromNode",
                value: function (t) {
                  var e = t || this.node,
                    r = Array.from(e.parentNode.childNodes),
                    n = r.indexOf(e),
                    i = r.length - 1,
                    a = K(e.textContent || "");
                  return 0 === n && (a = J(a)), n === i && (a = tt(a)), a;
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  var e = this;
                  if ("text" === this.type) {
                    this.initializeCoordinates(),
                      this.adjustChildCoordinatesRecursive(t),
                      this.children.forEach(function (r, n) {
                        e.renderChild(t, e, e, n);
                      });
                    var r = this.document.screen.mouse;
                    r.isWorking() &&
                      r.checkBoundingBox(this, this.getBoundingBox(t));
                  } else this.renderTElementChildren(t);
                },
              },
              {
                key: "renderTElementChildren",
                value: function (t) {
                  var e = this.document,
                    r = this.parent,
                    n = this.getText(),
                    i = r.getStyle("font-family").getDefinition();
                  if (i)
                    for (
                      var a = i.fontFace.unitsPerEm,
                        o = qt.parse(e.ctx.font),
                        s = r.getStyle("font-size").getNumber(o.fontSize),
                        u = r.getStyle("font-style").getString(o.fontStyle),
                        c = s / a,
                        l = i.isRTL ? n.split("").reverse().join("") : n,
                        h = et(r.getAttribute("dx").getString()),
                        f = l.length,
                        p = 0;
                      p < f;
                      p++
                    ) {
                      var v = this.getGlyph(i, l, p);
                      t.translate(this.x, this.y), t.scale(c, -c);
                      var g = t.lineWidth;
                      (t.lineWidth = (t.lineWidth * a) / s),
                        "italic" === u && t.transform(1, 0, 0.4, 1, 0, 0),
                        v.render(t),
                        "italic" === u && t.transform(1, 0, -0.4, 1, 0, 0),
                        (t.lineWidth = g),
                        t.scale(1 / c, -1 / c),
                        t.translate(-this.x, -this.y),
                        (this.x += (s * (v.horizAdvX || i.horizAdvX)) / a),
                        "undefined" === typeof h[p] ||
                          isNaN(h[p]) ||
                          (this.x += h[p]);
                    }
                  else {
                    var y = this.x,
                      d = this.y;
                    t.fillStyle && t.fillText(n, y, d),
                      t.strokeStyle && t.strokeText(n, y, d);
                  }
                },
              },
              {
                key: "applyAnchoring",
                value: function () {
                  if (!(this.textChunkStart >= this.leafTexts.length)) {
                    var t = this.leafTexts[this.textChunkStart],
                      e = t.getStyle("text-anchor").getString("start"),
                      r = 0;
                    r =
                      "start" === e
                        ? t.x - this.minX
                        : "end" === e
                        ? t.x - this.maxX
                        : t.x - (this.minX + this.maxX) / 2;
                    for (
                      var n = this.textChunkStart;
                      n < this.leafTexts.length;
                      n++
                    )
                      this.leafTexts[n].x += r;
                    (this.minX = Number.POSITIVE_INFINITY),
                      (this.maxX = Number.NEGATIVE_INFINITY),
                      (this.textChunkStart = this.leafTexts.length);
                  }
                },
              },
              {
                key: "adjustChildCoordinatesRecursive",
                value: function (t) {
                  var e = this;
                  this.children.forEach(function (r, n) {
                    e.adjustChildCoordinatesRecursiveCore(t, e, e, n);
                  }),
                    this.applyAnchoring();
                },
              },
              {
                key: "adjustChildCoordinatesRecursiveCore",
                value: function (t, e, r, n) {
                  var i = r.children[n];
                  i.children.length > 0
                    ? i.children.forEach(function (r, n) {
                        e.adjustChildCoordinatesRecursiveCore(t, e, i, n);
                      })
                    : this.adjustChildCoordinates(t, e, r, n);
                },
              },
              {
                key: "adjustChildCoordinates",
                value: function (t, e, r, n) {
                  var i = r.children[n];
                  if ("function" !== typeof i.measureText) return i;
                  t.save(), i.setContext(t, !0);
                  var a = i.getAttribute("x"),
                    o = i.getAttribute("y"),
                    s = i.getAttribute("dx"),
                    u = i.getAttribute("dy"),
                    c = i.getStyle("font-family").getDefinition(),
                    l = Boolean(c) && c.isRTL;
                  0 === n &&
                    (a.hasValue() || a.setValue(i.getInheritedAttribute("x")),
                    o.hasValue() || o.setValue(i.getInheritedAttribute("y")),
                    s.hasValue() || s.setValue(i.getInheritedAttribute("dx")),
                    u.hasValue() || u.setValue(i.getInheritedAttribute("dy")));
                  var h = i.measureText(t);
                  return (
                    l && (e.x -= h),
                    a.hasValue()
                      ? (e.applyAnchoring(),
                        (i.x = a.getPixels("x")),
                        s.hasValue() && (i.x += s.getPixels("x")))
                      : (s.hasValue() && (e.x += s.getPixels("x")),
                        (i.x = e.x)),
                    (e.x = i.x),
                    l || (e.x += h),
                    o.hasValue()
                      ? ((i.y = o.getPixels("y")),
                        u.hasValue() && (i.y += u.getPixels("y")))
                      : (u.hasValue() && (e.y += u.getPixels("y")),
                        (i.y = e.y)),
                    (e.y = i.y),
                    e.leafTexts.push(i),
                    (e.minX = Math.min(e.minX, i.x, i.x + h)),
                    (e.maxX = Math.max(e.maxX, i.x, i.x + h)),
                    i.clearContext(t),
                    t.restore(),
                    i
                  );
                },
              },
              {
                key: "getChildBoundingBox",
                value: function (t, e, r, n) {
                  var i = r.children[n];
                  if ("function" !== typeof i.getBoundingBox) return null;
                  var a = i.getBoundingBox(t);
                  return a
                    ? (i.children.forEach(function (r, n) {
                        var o = e.getChildBoundingBox(t, e, i, n);
                        a.addBoundingBox(o);
                      }),
                      a)
                    : null;
                },
              },
              {
                key: "renderChild",
                value: function (t, e, r, n) {
                  var i = r.children[n];
                  i.render(t),
                    i.children.forEach(function (r, n) {
                      e.renderChild(t, e, i, n);
                    });
                },
              },
              {
                key: "measureText",
                value: function (t) {
                  var e = this.measureCache;
                  if (~e) return e;
                  var r = this.getText(),
                    n = this.measureTargetText(t, r);
                  return (this.measureCache = n), n;
                },
              },
              {
                key: "measureTargetText",
                value: function (t, e) {
                  if (!e.length) return 0;
                  var r = this.parent,
                    n = r.getStyle("font-family").getDefinition();
                  if (n) {
                    for (
                      var i = this.getFontSize(),
                        a = n.isRTL ? e.split("").reverse().join("") : e,
                        o = et(r.getAttribute("dx").getString()),
                        s = a.length,
                        u = 0,
                        c = 0;
                      c < s;
                      c++
                    ) {
                      (u +=
                        ((this.getGlyph(n, a, c).horizAdvX || n.horizAdvX) *
                          i) /
                        n.fontFace.unitsPerEm),
                        "undefined" === typeof o[c] ||
                          isNaN(o[c]) ||
                          (u += o[c]);
                    }
                    return u;
                  }
                  if (!t.measureText) return 10 * e.length;
                  t.save(), this.setContext(t, !0);
                  var l = t.measureText(e).width;
                  return this.clearContext(t), t.restore(), l;
                },
              },
              {
                key: "getInheritedAttribute",
                value: function (t) {
                  for (var e = this; e instanceof r && e.isFirstChild(); ) {
                    var n = e.parent.getAttribute(t);
                    if (n.hasValue(!0)) return n.getValue("0");
                    e = e.parent;
                  }
                  return null;
                },
              },
            ]),
            r
          );
        })(Kt),
        re = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(
                this,
                t,
                n,
                (this instanceof r ? this.constructor : void 0) === r || i
              )).type = "tspan"),
              (a.text = a.children.length > 0 ? "" : a.getTextFromNode()),
              a
            );
          }
          return (
            d(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
            ]),
            r
          );
        })(ee),
        ne = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "textNode"), t
            );
          }
          return d(r);
        })(re),
        ie = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "svg"),
              (t.root = !1),
              t
            );
          }
          return (
            d(r, [
              {
                key: "setContext",
                value: function (t) {
                  var e,
                    n = this.document,
                    i = n.screen,
                    a = n.window,
                    o = t.canvas;
                  if (
                    (i.setDefaults(t),
                    o.style &&
                      "undefined" !== typeof t.font &&
                      a &&
                      "undefined" !== typeof a.getComputedStyle)
                  ) {
                    t.font = a.getComputedStyle(o).getPropertyValue("font");
                    var s = new At(n, "fontSize", qt.parse(t.font).fontSize);
                    s.hasValue() &&
                      ((n.rootEmSize = s.getPixels("y")),
                      (n.emSize = n.rootEmSize));
                  }
                  this.getAttribute("x").hasValue() ||
                    this.getAttribute("x", !0).setValue(0),
                    this.getAttribute("y").hasValue() ||
                      this.getAttribute("y", !0).setValue(0);
                  var l = i.viewPort,
                    h = l.width,
                    f = l.height;
                  this.getStyle("width").hasValue() ||
                    this.getStyle("width", !0).setValue("100%"),
                    this.getStyle("height").hasValue() ||
                      this.getStyle("height", !0).setValue("100%"),
                    this.getStyle("color").hasValue() ||
                      this.getStyle("color", !0).setValue("black");
                  var p = this.getAttribute("refX"),
                    v = this.getAttribute("refY"),
                    g = this.getAttribute("viewBox"),
                    y = g.hasValue() ? et(g.getString()) : null,
                    d =
                      !this.root &&
                      "visible" !==
                        this.getStyle("overflow").getValue("hidden"),
                    m = 0,
                    x = 0,
                    b = 0,
                    w = 0;
                  y && ((m = y[0]), (x = y[1])),
                    this.root ||
                      ((h = this.getStyle("width").getPixels("x")),
                      (f = this.getStyle("height").getPixels("y")),
                      "marker" === this.type &&
                        ((b = m), (w = x), (m = 0), (x = 0))),
                    i.viewPort.setCurrent(h, f),
                    !this.node ||
                      (this.parent &&
                        "foreignObject" !==
                          (null === (e = this.node.parentNode) || void 0 === e
                            ? void 0
                            : e.nodeName)) ||
                      !this.getStyle("transform", !1, !0).hasValue() ||
                      this.getStyle("transform-origin", !1, !0).hasValue() ||
                      this.getStyle("transform-origin", !0, !0).setValue(
                        "50% 50%"
                      ),
                    c(u(r.prototype), "setContext", this).call(this, t),
                    t.translate(
                      this.getAttribute("x").getPixels("x"),
                      this.getAttribute("y").getPixels("y")
                    ),
                    y && ((h = y[2]), (f = y[3])),
                    n.setViewBox({
                      ctx: t,
                      aspectRatio: this.getAttribute(
                        "preserveAspectRatio"
                      ).getString(),
                      width: i.viewPort.width,
                      desiredWidth: h,
                      height: i.viewPort.height,
                      desiredHeight: f,
                      minX: m,
                      minY: x,
                      refX: p.getValue(),
                      refY: v.getValue(),
                      clip: d,
                      clipX: b,
                      clipY: w,
                    }),
                    y &&
                      (i.viewPort.removeCurrent(), i.viewPort.setCurrent(h, f));
                },
              },
              {
                key: "clearContext",
                value: function (t) {
                  c(u(r.prototype), "clearContext", this).call(this, t),
                    this.document.screen.viewPort.removeCurrent();
                },
              },
              {
                key: "resize",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : t,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    n = this.getAttribute("width", !0),
                    i = this.getAttribute("height", !0),
                    a = this.getAttribute("viewBox"),
                    o = this.getAttribute("style"),
                    s = n.getNumber(0),
                    u = i.getNumber(0);
                  if (r)
                    if ("string" === typeof r)
                      this.getAttribute("preserveAspectRatio", !0).setValue(r);
                    else {
                      var c = this.getAttribute("preserveAspectRatio");
                      c.hasValue() &&
                        c.setValue(
                          c.getString().replace(/^\s*(\S.*\S)\s*$/, "$1")
                        );
                    }
                  if (
                    (n.setValue(t),
                    i.setValue(e),
                    a.hasValue() ||
                      a.setValue("0 0 ".concat(s || t, " ").concat(u || e)),
                    o.hasValue())
                  ) {
                    var l = this.getStyle("width"),
                      h = this.getStyle("height");
                    l.hasValue() && l.setValue("".concat(t, "px")),
                      h.hasValue() && h.setValue("".concat(e, "px"));
                  }
                },
              },
            ]),
            r
          );
        })(Kt),
        ae = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "rect"), t
            );
          }
          return (
            d(r, [
              {
                key: "path",
                value: function (t) {
                  var e = this.getAttribute("x").getPixels("x"),
                    r = this.getAttribute("y").getPixels("y"),
                    n = this.getStyle("width", !1, !0).getPixels("x"),
                    i = this.getStyle("height", !1, !0).getPixels("y"),
                    a = this.getAttribute("rx"),
                    o = this.getAttribute("ry"),
                    s = a.getPixels("x"),
                    u = o.getPixels("y");
                  if (
                    (a.hasValue() && !o.hasValue() && (u = s),
                    o.hasValue() && !a.hasValue() && (s = u),
                    (s = Math.min(s, n / 2)),
                    (u = Math.min(u, i / 2)),
                    t)
                  ) {
                    var c = ((Math.sqrt(2) - 1) / 3) * 4;
                    t.beginPath(),
                      i > 0 &&
                        n > 0 &&
                        (t.moveTo(e + s, r),
                        t.lineTo(e + n - s, r),
                        t.bezierCurveTo(
                          e + n - s + c * s,
                          r,
                          e + n,
                          r + u - c * u,
                          e + n,
                          r + u
                        ),
                        t.lineTo(e + n, r + i - u),
                        t.bezierCurveTo(
                          e + n,
                          r + i - u + c * u,
                          e + n - s + c * s,
                          r + i,
                          e + n - s,
                          r + i
                        ),
                        t.lineTo(e + s, r + i),
                        t.bezierCurveTo(
                          e + s - c * s,
                          r + i,
                          e,
                          r + i - u + c * u,
                          e,
                          r + i - u
                        ),
                        t.lineTo(e, r + u),
                        t.bezierCurveTo(
                          e,
                          r + u - c * u,
                          e + s - c * s,
                          r,
                          e + s,
                          r
                        ),
                        t.closePath());
                  }
                  return new Qt(e, r, e + n, r + i);
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(Jt),
        oe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "circle"), t
            );
          }
          return (
            d(r, [
              {
                key: "path",
                value: function (t) {
                  var e = this.getAttribute("cx").getPixels("x"),
                    r = this.getAttribute("cy").getPixels("y"),
                    n = this.getAttribute("r").getPixels();
                  return (
                    t &&
                      n > 0 &&
                      (t.beginPath(),
                      t.arc(e, r, n, 0, 2 * Math.PI, !1),
                      t.closePath()),
                    new Qt(e - n, r - n, e + n, r + n)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(Jt),
        se = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "ellipse"), t
            );
          }
          return (
            d(r, [
              {
                key: "path",
                value: function (t) {
                  var e = ((Math.sqrt(2) - 1) / 3) * 4,
                    r = this.getAttribute("rx").getPixels("x"),
                    n = this.getAttribute("ry").getPixels("y"),
                    i = this.getAttribute("cx").getPixels("x"),
                    a = this.getAttribute("cy").getPixels("y");
                  return (
                    t &&
                      r > 0 &&
                      n > 0 &&
                      (t.beginPath(),
                      t.moveTo(i + r, a),
                      t.bezierCurveTo(
                        i + r,
                        a + e * n,
                        i + e * r,
                        a + n,
                        i,
                        a + n
                      ),
                      t.bezierCurveTo(
                        i - e * r,
                        a + n,
                        i - r,
                        a + e * n,
                        i - r,
                        a
                      ),
                      t.bezierCurveTo(
                        i - r,
                        a - e * n,
                        i - e * r,
                        a - n,
                        i,
                        a - n
                      ),
                      t.bezierCurveTo(
                        i + e * r,
                        a - n,
                        i + r,
                        a - e * n,
                        i + r,
                        a
                      ),
                      t.closePath()),
                    new Qt(i - r, a - n, i + r, a + n)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(Jt),
        ue = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "line"), t
            );
          }
          return (
            d(r, [
              {
                key: "getPoints",
                value: function () {
                  return [
                    new Pt(
                      this.getAttribute("x1").getPixels("x"),
                      this.getAttribute("y1").getPixels("y")
                    ),
                    new Pt(
                      this.getAttribute("x2").getPixels("x"),
                      this.getAttribute("y2").getPixels("y")
                    ),
                  ];
                },
              },
              {
                key: "path",
                value: function (t) {
                  var e = this.getPoints(),
                    r = (0, m.Z)(e, 2),
                    n = r[0],
                    i = n.x,
                    a = n.y,
                    o = r[1],
                    s = o.x,
                    u = o.y;
                  return (
                    t && (t.beginPath(), t.moveTo(i, a), t.lineTo(s, u)),
                    new Qt(i, a, s, u)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  var t = this.getPoints(),
                    e = (0, m.Z)(t, 2),
                    r = e[0],
                    n = e[1],
                    i = r.angleTo(n);
                  return [
                    [r, i],
                    [n, i],
                  ];
                },
              },
            ]),
            r
          );
        })(Jt),
        ce = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "polyline"),
              (a.points = []),
              (a.points = Pt.parsePath(a.getAttribute("points").getString())),
              a
            );
          }
          return (
            d(r, [
              {
                key: "path",
                value: function (t) {
                  var e = this.points,
                    r = (0, m.Z)(e, 1)[0],
                    n = r.x,
                    i = r.y,
                    a = new Qt(n, i);
                  return (
                    t && (t.beginPath(), t.moveTo(n, i)),
                    e.forEach(function (e) {
                      var r = e.x,
                        n = e.y;
                      a.addPoint(r, n), t && t.lineTo(r, n);
                    }),
                    a
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  var t = this.points,
                    e = t.length - 1,
                    r = [];
                  return (
                    t.forEach(function (n, i) {
                      i !== e && r.push([n, n.angleTo(t[i + 1])]);
                    }),
                    r.length > 0 &&
                      r.push([t[t.length - 1], r[r.length - 1][1]]),
                    r
                  );
                },
              },
            ]),
            r
          );
        })(Jt),
        le = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "polygon"), t
            );
          }
          return (
            d(r, [
              {
                key: "path",
                value: function (t) {
                  var e = c(u(r.prototype), "path", this).call(this, t),
                    n = (0, m.Z)(this.points, 1)[0],
                    i = n.x,
                    a = n.y;
                  return t && (t.lineTo(i, a), t.closePath()), e;
                },
              },
            ]),
            r
          );
        })(ce),
        he = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "pattern"), t
            );
          }
          return (
            d(r, [
              {
                key: "createPattern",
                value: function (t, e, r) {
                  var n = this.getStyle("width").getPixels("x", !0),
                    i = this.getStyle("height").getPixels("y", !0),
                    a = new ie(this.document, null);
                  (a.attributes.viewBox = new At(
                    this.document,
                    "viewBox",
                    this.getAttribute("viewBox").getValue()
                  )),
                    (a.attributes.width = new At(
                      this.document,
                      "width",
                      "".concat(n, "px")
                    )),
                    (a.attributes.height = new At(
                      this.document,
                      "height",
                      "".concat(i, "px")
                    )),
                    (a.attributes.transform = new At(
                      this.document,
                      "transform",
                      this.getAttribute("patternTransform").getValue()
                    )),
                    (a.children = this.children);
                  var o = this.document.createCanvas(n, i),
                    s = o.getContext("2d"),
                    u = this.getAttribute("x"),
                    c = this.getAttribute("y");
                  u.hasValue() &&
                    c.hasValue() &&
                    s.translate(u.getPixels("x", !0), c.getPixels("y", !0)),
                    r.hasValue()
                      ? (this.styles["fill-opacity"] = r)
                      : Reflect.deleteProperty(this.styles, "fill-opacity");
                  for (var l = -1; l <= 1; l++)
                    for (var h = -1; h <= 1; h++)
                      s.save(),
                        (a.attributes.x = new At(
                          this.document,
                          "x",
                          l * o.width
                        )),
                        (a.attributes.y = new At(
                          this.document,
                          "y",
                          h * o.height
                        )),
                        a.render(s),
                        s.restore();
                  return t.createPattern(o, "repeat");
                },
              },
            ]),
            r
          );
        })(Xt),
        fe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "marker"), t
            );
          }
          return (
            d(r, [
              {
                key: "render",
                value: function (t, e, r) {
                  if (e) {
                    var n = e.x,
                      i = e.y,
                      a = this.getAttribute("orient").getString("auto"),
                      o =
                        this.getAttribute("markerUnits").getString(
                          "strokeWidth"
                        );
                    t.translate(n, i),
                      "auto" === a && t.rotate(r),
                      "strokeWidth" === o && t.scale(t.lineWidth, t.lineWidth),
                      t.save();
                    var s = new ie(this.document, null);
                    (s.type = this.type),
                      (s.attributes.viewBox = new At(
                        this.document,
                        "viewBox",
                        this.getAttribute("viewBox").getValue()
                      )),
                      (s.attributes.refX = new At(
                        this.document,
                        "refX",
                        this.getAttribute("refX").getValue()
                      )),
                      (s.attributes.refY = new At(
                        this.document,
                        "refY",
                        this.getAttribute("refY").getValue()
                      )),
                      (s.attributes.width = new At(
                        this.document,
                        "width",
                        this.getAttribute("markerWidth").getValue()
                      )),
                      (s.attributes.height = new At(
                        this.document,
                        "height",
                        this.getAttribute("markerHeight").getValue()
                      )),
                      (s.attributes.overflow = new At(
                        this.document,
                        "overflow",
                        this.getAttribute("overflow").getValue()
                      )),
                      (s.attributes.fill = new At(
                        this.document,
                        "fill",
                        this.getAttribute("fill").getColor("black")
                      )),
                      (s.attributes.stroke = new At(
                        this.document,
                        "stroke",
                        this.getAttribute("stroke").getValue("none")
                      )),
                      (s.children = this.children),
                      s.render(t),
                      t.restore(),
                      "strokeWidth" === o &&
                        t.scale(1 / t.lineWidth, 1 / t.lineWidth),
                      "auto" === a && t.rotate(-r),
                      t.translate(-n, -i);
                  }
                },
              },
            ]),
            r
          );
        })(Xt),
        pe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "defs"), t
            );
          }
          return d(r, [{ key: "render", value: function () {} }]), r;
        })(Xt),
        ve = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return v(this, r), ((t = e.apply(this, arguments)).type = "g"), t;
          }
          return (
            d(r, [
              {
                key: "getBoundingBox",
                value: function (t) {
                  var e = new Qt();
                  return (
                    this.children.forEach(function (r) {
                      e.addBoundingBox(r.getBoundingBox(t));
                    }),
                    e
                  );
                },
              },
            ]),
            r
          );
        })(Kt),
        ge = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, a) {
            var o;
            v(this, r),
              ((o = e.call(this, t, n, a)).attributesToInherit = [
                "gradientUnits",
              ]),
              (o.stops = []);
            var s = i(o),
              u = s.stops;
            return (
              s.children.forEach(function (t) {
                "stop" === t.type && u.push(t);
              }),
              o
            );
          }
          return (
            d(r, [
              {
                key: "getGradientUnits",
                value: function () {
                  return this.getAttribute("gradientUnits").getString(
                    "objectBoundingBox"
                  );
                },
              },
              {
                key: "createGradient",
                value: function (t, e, r) {
                  var n = this,
                    i = this;
                  this.getHrefAttribute().hasValue() &&
                    ((i = this.getHrefAttribute().getDefinition()),
                    this.inheritStopContainer(i));
                  var a = i.stops,
                    o = this.getGradient(t, e);
                  if (!o)
                    return this.addParentOpacity(r, a[a.length - 1].color);
                  if (
                    (a.forEach(function (t) {
                      o.addColorStop(t.offset, n.addParentOpacity(r, t.color));
                    }),
                    this.getAttribute("gradientTransform").hasValue())
                  ) {
                    var s = this.document,
                      u = s.screen,
                      c = u.MAX_VIRTUAL_PIXELS,
                      l = u.viewPort,
                      h = (0, m.Z)(l.viewPorts, 1)[0],
                      f = new ae(s, null);
                    (f.attributes.x = new At(s, "x", -c / 3)),
                      (f.attributes.y = new At(s, "y", -c / 3)),
                      (f.attributes.width = new At(s, "width", c)),
                      (f.attributes.height = new At(s, "height", c));
                    var p = new ve(s, null);
                    (p.attributes.transform = new At(
                      s,
                      "transform",
                      this.getAttribute("gradientTransform").getValue()
                    )),
                      (p.children = [f]);
                    var v = new ie(s, null);
                    (v.attributes.x = new At(s, "x", 0)),
                      (v.attributes.y = new At(s, "y", 0)),
                      (v.attributes.width = new At(s, "width", h.width)),
                      (v.attributes.height = new At(s, "height", h.height)),
                      (v.children = [p]);
                    var g = s.createCanvas(h.width, h.height),
                      y = g.getContext("2d");
                    return (
                      (y.fillStyle = o),
                      v.render(y),
                      y.createPattern(g, "no-repeat")
                    );
                  }
                  return o;
                },
              },
              {
                key: "inheritStopContainer",
                value: function (t) {
                  var e = this;
                  this.attributesToInherit.forEach(function (r) {
                    !e.getAttribute(r).hasValue() &&
                      t.getAttribute(r).hasValue() &&
                      e
                        .getAttribute(r, !0)
                        .setValue(t.getAttribute(r).getValue());
                  });
                },
              },
              {
                key: "addParentOpacity",
                value: function (t, e) {
                  return t.hasValue()
                    ? new At(this.document, "color", e).addOpacity(t).getColor()
                    : e;
                },
              },
            ]),
            r
          );
        })(Xt),
        ye = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "linearGradient"),
              a.attributesToInherit.push("x1", "y1", "x2", "y2"),
              a
            );
          }
          return (
            d(r, [
              {
                key: "getGradient",
                value: function (t, e) {
                  var r = "objectBoundingBox" === this.getGradientUnits(),
                    n = r ? e.getBoundingBox(t) : null;
                  if (r && !n) return null;
                  this.getAttribute("x1").hasValue() ||
                    this.getAttribute("y1").hasValue() ||
                    this.getAttribute("x2").hasValue() ||
                    this.getAttribute("y2").hasValue() ||
                    (this.getAttribute("x1", !0).setValue(0),
                    this.getAttribute("y1", !0).setValue(0),
                    this.getAttribute("x2", !0).setValue(1),
                    this.getAttribute("y2", !0).setValue(0));
                  var i = r
                      ? n.x + n.width * this.getAttribute("x1").getNumber()
                      : this.getAttribute("x1").getPixels("x"),
                    a = r
                      ? n.y + n.height * this.getAttribute("y1").getNumber()
                      : this.getAttribute("y1").getPixels("y"),
                    o = r
                      ? n.x + n.width * this.getAttribute("x2").getNumber()
                      : this.getAttribute("x2").getPixels("x"),
                    s = r
                      ? n.y + n.height * this.getAttribute("y2").getNumber()
                      : this.getAttribute("y2").getPixels("y");
                  return i === o && a === s
                    ? null
                    : t.createLinearGradient(i, a, o, s);
                },
              },
            ]),
            r
          );
        })(ge),
        de = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "radialGradient"),
              a.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"),
              a
            );
          }
          return (
            d(r, [
              {
                key: "getGradient",
                value: function (t, e) {
                  var r = "objectBoundingBox" === this.getGradientUnits(),
                    n = e.getBoundingBox(t);
                  if (r && !n) return null;
                  this.getAttribute("cx").hasValue() ||
                    this.getAttribute("cx", !0).setValue("50%"),
                    this.getAttribute("cy").hasValue() ||
                      this.getAttribute("cy", !0).setValue("50%"),
                    this.getAttribute("r").hasValue() ||
                      this.getAttribute("r", !0).setValue("50%");
                  var i = r
                      ? n.x + n.width * this.getAttribute("cx").getNumber()
                      : this.getAttribute("cx").getPixels("x"),
                    a = r
                      ? n.y + n.height * this.getAttribute("cy").getNumber()
                      : this.getAttribute("cy").getPixels("y"),
                    o = i,
                    s = a;
                  this.getAttribute("fx").hasValue() &&
                    (o = r
                      ? n.x + n.width * this.getAttribute("fx").getNumber()
                      : this.getAttribute("fx").getPixels("x")),
                    this.getAttribute("fy").hasValue() &&
                      (s = r
                        ? n.y + n.height * this.getAttribute("fy").getNumber()
                        : this.getAttribute("fy").getPixels("y"));
                  var u = r
                      ? ((n.width + n.height) / 2) *
                        this.getAttribute("r").getNumber()
                      : this.getAttribute("r").getPixels(),
                    c = this.getAttribute("fr").getPixels();
                  return t.createRadialGradient(o, s, c, i, a, u);
                },
              },
            ]),
            r
          );
        })(ge),
        me = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            v(this, r), ((a = e.call(this, t, n, i)).type = "stop");
            var o = Math.max(
                0,
                Math.min(1, a.getAttribute("offset").getNumber())
              ),
              s = a.getStyle("stop-opacity"),
              u = a.getStyle("stop-color", !0);
            return (
              "" === u.getString() && u.setValue("#000"),
              s.hasValue() && (u = u.addOpacity(s)),
              (a.offset = o),
              (a.color = u.getColor()),
              a
            );
          }
          return d(r);
        })(Xt),
        xe = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, a) {
            var o;
            v(this, r),
              ((o = e.call(this, t, n, a)).type = "animate"),
              (o.duration = 0),
              (o.initialValue = null),
              (o.initialUnits = ""),
              (o.removed = !1),
              (o.frozen = !1),
              t.screen.animations.push(i(o)),
              (o.begin = o.getAttribute("begin").getMilliseconds()),
              (o.maxDuration =
                o.begin + o.getAttribute("dur").getMilliseconds()),
              (o.from = o.getAttribute("from")),
              (o.to = o.getAttribute("to")),
              (o.values = new At(t, "values", null));
            var s = o.getAttribute("values");
            return (
              s.hasValue() && o.values.setValue(s.getString().split(";")), o
            );
          }
          return (
            d(r, [
              {
                key: "getProperty",
                value: function () {
                  var t = this.getAttribute("attributeType").getString(),
                    e = this.getAttribute("attributeName").getString();
                  return "CSS" === t
                    ? this.parent.getStyle(e, !0)
                    : this.parent.getAttribute(e, !0);
                },
              },
              {
                key: "calcValue",
                value: function () {
                  var t = this.initialUnits,
                    e = this.getProgress(),
                    r = e.progress,
                    n = e.from,
                    i = e.to,
                    a = n.getNumber() + (i.getNumber() - n.getNumber()) * r;
                  return "%" === t && (a *= 100), "".concat(a).concat(t);
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = this.parent,
                    r = this.getProperty();
                  if (
                    (this.initialValue ||
                      ((this.initialValue = r.getString()),
                      (this.initialUnits = r.getUnits())),
                    this.duration > this.maxDuration)
                  ) {
                    var n = this.getAttribute("fill").getString("remove");
                    if (
                      "indefinite" ===
                        this.getAttribute("repeatCount").getString() ||
                      "indefinite" ===
                        this.getAttribute("repeatDur").getString()
                    )
                      this.duration = 0;
                    else if ("freeze" !== n || this.frozen) {
                      if ("remove" === n && !this.removed)
                        return (
                          (this.removed = !0),
                          r.setValue(
                            e.animationFrozen
                              ? e.animationFrozenValue
                              : this.initialValue
                          ),
                          !0
                        );
                    } else
                      (this.frozen = !0),
                        (e.animationFrozen = !0),
                        (e.animationFrozenValue = r.getString());
                    return !1;
                  }
                  this.duration += t;
                  var i = !1;
                  if (this.begin < this.duration) {
                    var a = this.calcValue(),
                      o = this.getAttribute("type");
                    if (o.hasValue()) {
                      var s = o.getString();
                      a = "".concat(s, "(").concat(a, ")");
                    }
                    r.setValue(a), (i = !0);
                  }
                  return i;
                },
              },
              {
                key: "getProgress",
                value: function () {
                  var t = this.document,
                    e = this.values,
                    r = {
                      progress:
                        (this.duration - this.begin) /
                        (this.maxDuration - this.begin),
                    };
                  if (e.hasValue()) {
                    var n = r.progress * (e.getValue().length - 1),
                      i = Math.floor(n),
                      a = Math.ceil(n);
                    (r.from = new At(t, "from", parseFloat(e.getValue()[i]))),
                      (r.to = new At(t, "to", parseFloat(e.getValue()[a]))),
                      (r.progress = (n - i) / (a - i));
                  } else (r.from = this.from), (r.to = this.to);
                  return r;
                },
              },
            ]),
            r
          );
        })(Xt),
        be = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "animateColor"),
              t
            );
          }
          return (
            d(r, [
              {
                key: "calcValue",
                value: function () {
                  var t = this.getProgress(),
                    e = t.progress,
                    r = t.from,
                    n = t.to,
                    i = new T(r.getColor()),
                    a = new T(n.getColor());
                  if (i.ok && a.ok) {
                    var o = i.r + (a.r - i.r) * e,
                      s = i.g + (a.g - i.g) * e,
                      u = i.b + (a.b - i.b) * e;
                    return "rgb("
                      .concat(Math.floor(o), ", ")
                      .concat(Math.floor(s), ", ")
                      .concat(Math.floor(u), ")");
                  }
                  return this.getAttribute("from").getColor();
                },
              },
            ]),
            r
          );
        })(xe),
        we = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "animateTransform"),
              t
            );
          }
          return (
            d(r, [
              {
                key: "calcValue",
                value: function () {
                  var t = this.getProgress(),
                    e = t.progress,
                    r = t.from,
                    n = t.to,
                    i = et(r.getString()),
                    a = et(n.getString()),
                    o = i
                      .map(function (t, r) {
                        return t + (a[r] - t) * e;
                      })
                      .join(" ");
                  return o;
                },
              },
            ]),
            r
          );
        })(xe),
        Se = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, a) {
            var o;
            v(this, r),
              ((o = e.call(this, t, n, a)).type = "font"),
              (o.glyphs = {}),
              (o.horizAdvX = o.getAttribute("horiz-adv-x").getNumber());
            var u,
              c = t.definitions,
              l = s(i(o).children);
            try {
              for (l.s(); !(u = l.n()).done; ) {
                var h = u.value;
                switch (h.type) {
                  case "font-face":
                    o.fontFace = h;
                    var f = h.getStyle("font-family");
                    f.hasValue() && (c[f.getString()] = i(o));
                    break;
                  case "missing-glyph":
                    o.missingGlyph = h;
                    break;
                  case "glyph":
                    var p = h;
                    p.arabicForm
                      ? ((o.isRTL = !0),
                        (o.isArabic = !0),
                        "undefined" === typeof o.glyphs[p.unicode] &&
                          (o.glyphs[p.unicode] = {}),
                        (o.glyphs[p.unicode][p.arabicForm] = p))
                      : (o.glyphs[p.unicode] = p);
                }
              }
            } catch (g) {
              l.e(g);
            } finally {
              l.f();
            }
            return o;
          }
          return d(r, [{ key: "render", value: function () {} }]), r;
        })(Xt),
        ke = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "font-face"),
              (a.ascent = a.getAttribute("ascent").getNumber()),
              (a.descent = a.getAttribute("descent").getNumber()),
              (a.unitsPerEm = a.getAttribute("units-per-em").getNumber()),
              a
            );
          }
          return d(r);
        })(Xt),
        Te = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "missing-glyph"),
              (t.horizAdvX = 0),
              t
            );
          }
          return d(r);
        })(Jt),
        Oe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "tref"), t
            );
          }
          return (
            d(r, [
              {
                key: "getText",
                value: function () {
                  var t = this.getHrefAttribute().getDefinition();
                  if (t) {
                    var e = t.children[0];
                    if (e) return e.getText();
                  }
                  return "";
                },
              },
            ]),
            r
          );
        })(ee),
        Ae = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            v(this, r), ((a = e.call(this, t, n, i)).type = "a");
            var o = n.childNodes,
              s = o[0],
              u =
                o.length > 0 &&
                Array.from(o).every(function (t) {
                  return 3 === t.nodeType;
                });
            return (a.hasText = u), (a.text = u ? a.getTextFromNode(s) : ""), a;
          }
          return (
            d(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  if (this.hasText) {
                    c(u(r.prototype), "renderChildren", this).call(this, t);
                    var e = this.document,
                      n = this.x,
                      i = this.y,
                      a = e.screen.mouse,
                      o = new At(e, "fontSize", qt.parse(e.ctx.font).fontSize);
                    a.isWorking() &&
                      a.checkBoundingBox(
                        this,
                        new Qt(
                          n,
                          i - o.getPixels("y"),
                          n + this.measureText(t),
                          i
                        )
                      );
                  } else if (this.children.length > 0) {
                    var s = new ve(this.document, null);
                    (s.children = this.children),
                      (s.parent = this),
                      s.render(t);
                  }
                },
              },
              {
                key: "onClick",
                value: function () {
                  var t = this.document.window;
                  t && t.open(this.getHrefAttribute().getString());
                },
              },
              {
                key: "onMouseMove",
                value: function () {
                  this.document.ctx.canvas.style.cursor = "pointer";
                },
              },
            ]),
            r
          );
        })(ee);
      function Ee(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Pe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ee(Object(r), !0).forEach(function (e) {
                (0, S.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : Ee(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var Ce = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            v(this, r),
              ((a = e.call(this, t, n, i)).type = "textPath"),
              (a.textWidth = 0),
              (a.textHeight = 0),
              (a.pathLength = -1),
              (a.glyphInfo = null),
              (a.letterSpacingCache = []),
              (a.measuresCache = new Map([["", 0]]));
            var o = a.getHrefAttribute().getDefinition();
            return (
              (a.text = a.getTextFromNode()),
              (a.dataArray = a.parsePathData(o)),
              a
            );
          }
          return (
            d(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
              {
                key: "path",
                value: function (t) {
                  var e = this.dataArray;
                  t && t.beginPath(),
                    e.forEach(function (e) {
                      var r = e.type,
                        n = e.points;
                      switch (r) {
                        case $t.LINE_TO:
                          t && t.lineTo(n[0], n[1]);
                          break;
                        case $t.MOVE_TO:
                          t && t.moveTo(n[0], n[1]);
                          break;
                        case $t.CURVE_TO:
                          t &&
                            t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                          break;
                        case $t.QUAD_TO:
                          t && t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                          break;
                        case $t.ARC:
                          var i = (0, m.Z)(n, 8),
                            a = i[0],
                            o = i[1],
                            s = i[2],
                            u = i[3],
                            c = i[4],
                            l = i[5],
                            h = i[6],
                            f = i[7],
                            p = s > u ? s : u,
                            v = s > u ? 1 : s / u,
                            g = s > u ? u / s : 1;
                          t &&
                            (t.translate(a, o),
                            t.rotate(h),
                            t.scale(v, g),
                            t.arc(0, 0, p, c, c + l, Boolean(1 - f)),
                            t.scale(1 / v, 1 / g),
                            t.rotate(-h),
                            t.translate(-a, -o));
                          break;
                        case $t.CLOSE_PATH:
                          t && t.closePath();
                      }
                    });
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  this.setTextData(t), t.save();
                  var e = this.parent.getStyle("text-decoration").getString(),
                    r = this.getFontSize(),
                    n = this.glyphInfo,
                    i = t.fillStyle;
                  "underline" === e && t.beginPath(),
                    n.forEach(function (n, i) {
                      var a = n.p0,
                        o = n.p1,
                        s = n.rotation,
                        u = n.text;
                      t.save(),
                        t.translate(a.x, a.y),
                        t.rotate(s),
                        t.fillStyle && t.fillText(u, 0, 0),
                        t.strokeStyle && t.strokeText(u, 0, 0),
                        t.restore(),
                        "underline" === e &&
                          (0 === i && t.moveTo(a.x, a.y + r / 8),
                          t.lineTo(o.x, o.y + r / 5));
                    }),
                    "underline" === e &&
                      ((t.lineWidth = r / 20),
                      (t.strokeStyle = i),
                      t.stroke(),
                      t.closePath()),
                    t.restore();
                },
              },
              {
                key: "getLetterSpacingAt",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return this.letterSpacingCache[t] || 0;
                },
              },
              {
                key: "findSegmentToFitChar",
                value: function (t, e, r, n, i, a, o, s, u) {
                  var c = a,
                    l = this.measureText(t, s);
                  " " === s && "justify" === e && r < n && (l += (n - r) / i),
                    u > -1 && (c += this.getLetterSpacingAt(u));
                  var h = this.textHeight / 20,
                    f = this.getEquidistantPointOnPath(c, h, 0),
                    p = this.getEquidistantPointOnPath(c + l, h, 0),
                    v = { p0: f, p1: p },
                    g = f && p ? Math.atan2(p.y - f.y, p.x - f.x) : 0;
                  if (o) {
                    var y = Math.cos(Math.PI / 2 + g) * o,
                      d = Math.cos(-g) * o;
                    (v.p0 = Pe(Pe({}, f), {}, { x: f.x + y, y: f.y + d })),
                      (v.p1 = Pe(Pe({}, p), {}, { x: p.x + y, y: p.y + d }));
                  }
                  return { offset: (c += l), segment: v, rotation: g };
                },
              },
              {
                key: "measureText",
                value: function (t, e) {
                  var r = this.measuresCache,
                    n = e || this.getText();
                  if (r.has(n)) return r.get(n);
                  var i = this.measureTargetText(t, n);
                  return r.set(n, i), i;
                },
              },
              {
                key: "setTextData",
                value: function (t) {
                  var e = this;
                  if (!this.glyphInfo) {
                    var r = this.getText(),
                      n = r.split(""),
                      i = r.split(" ").length - 1,
                      a = this.parent
                        .getAttribute("dx")
                        .split()
                        .map(function (t) {
                          return t.getPixels("x");
                        }),
                      o = this.parent.getAttribute("dy").getPixels("y"),
                      s = this.parent
                        .getStyle("text-anchor")
                        .getString("start"),
                      u = this.getStyle("letter-spacing"),
                      c = this.parent.getStyle("letter-spacing"),
                      l = 0;
                    u.hasValue() && "inherit" !== u.getValue()
                      ? u.hasValue() &&
                        "initial" !== u.getValue() &&
                        "unset" !== u.getValue() &&
                        (l = u.getPixels())
                      : (l = c.getPixels());
                    var h = [],
                      f = r.length;
                    this.letterSpacingCache = h;
                    for (var p = 0; p < f; p++)
                      h.push("undefined" !== typeof a[p] ? a[p] : l);
                    var v = h.reduce(function (t, e, r) {
                        return 0 === r ? 0 : t + e || 0;
                      }, 0),
                      g = this.measureText(t),
                      y = Math.max(g + v, 0);
                    (this.textWidth = g),
                      (this.textHeight = this.getFontSize()),
                      (this.glyphInfo = []);
                    var d = this.getPathLength(),
                      m = this.getStyle("startOffset").getNumber(0) * d,
                      x = 0;
                    ("middle" !== s && "center" !== s) || (x = -y / 2),
                      ("end" !== s && "right" !== s) || (x = -y),
                      (x += m),
                      n.forEach(function (r, a) {
                        var u = e.findSegmentToFitChar(
                            t,
                            s,
                            y,
                            d,
                            i,
                            x,
                            o,
                            r,
                            a
                          ),
                          c = u.offset,
                          l = u.segment,
                          h = u.rotation;
                        (x = c),
                          l.p0 &&
                            l.p1 &&
                            e.glyphInfo.push({
                              text: n[a],
                              p0: l.p0,
                              p1: l.p1,
                              rotation: h,
                            });
                      });
                  }
                },
              },
              {
                key: "parsePathData",
                value: function (t) {
                  if (((this.pathLength = -1), !t)) return [];
                  var e = [],
                    r = t.pathParser;
                  for (r.reset(); !r.isEnd(); ) {
                    var n = r.current,
                      i = n ? n.x : 0,
                      a = n ? n.y : 0,
                      o = r.next(),
                      s = o.type,
                      u = [];
                    switch (o.type) {
                      case $t.MOVE_TO:
                        this.pathM(r, u);
                        break;
                      case $t.LINE_TO:
                        s = this.pathL(r, u);
                        break;
                      case $t.HORIZ_LINE_TO:
                        s = this.pathH(r, u);
                        break;
                      case $t.VERT_LINE_TO:
                        s = this.pathV(r, u);
                        break;
                      case $t.CURVE_TO:
                        this.pathC(r, u);
                        break;
                      case $t.SMOOTH_CURVE_TO:
                        s = this.pathS(r, u);
                        break;
                      case $t.QUAD_TO:
                        this.pathQ(r, u);
                        break;
                      case $t.SMOOTH_QUAD_TO:
                        s = this.pathT(r, u);
                        break;
                      case $t.ARC:
                        u = this.pathA(r);
                        break;
                      case $t.CLOSE_PATH:
                        Jt.pathZ(r);
                    }
                    o.type !== $t.CLOSE_PATH
                      ? e.push({
                          type: s,
                          points: u,
                          start: { x: i, y: a },
                          pathLength: this.calcLength(i, a, s, u),
                        })
                      : e.push({
                          type: $t.CLOSE_PATH,
                          points: [],
                          pathLength: 0,
                        });
                  }
                  return e;
                },
              },
              {
                key: "pathM",
                value: function (t, e) {
                  var r = Jt.pathM(t).point,
                    n = r.x,
                    i = r.y;
                  e.push(n, i);
                },
              },
              {
                key: "pathL",
                value: function (t, e) {
                  var r = Jt.pathL(t).point,
                    n = r.x,
                    i = r.y;
                  return e.push(n, i), $t.LINE_TO;
                },
              },
              {
                key: "pathH",
                value: function (t, e) {
                  var r = Jt.pathH(t).point,
                    n = r.x,
                    i = r.y;
                  return e.push(n, i), $t.LINE_TO;
                },
              },
              {
                key: "pathV",
                value: function (t, e) {
                  var r = Jt.pathV(t).point,
                    n = r.x,
                    i = r.y;
                  return e.push(n, i), $t.LINE_TO;
                },
              },
              {
                key: "pathC",
                value: function (t, e) {
                  var r = Jt.pathC(t),
                    n = r.point,
                    i = r.controlPoint,
                    a = r.currentPoint;
                  e.push(n.x, n.y, i.x, i.y, a.x, a.y);
                },
              },
              {
                key: "pathS",
                value: function (t, e) {
                  var r = Jt.pathS(t),
                    n = r.point,
                    i = r.controlPoint,
                    a = r.currentPoint;
                  return e.push(n.x, n.y, i.x, i.y, a.x, a.y), $t.CURVE_TO;
                },
              },
              {
                key: "pathQ",
                value: function (t, e) {
                  var r = Jt.pathQ(t),
                    n = r.controlPoint,
                    i = r.currentPoint;
                  e.push(n.x, n.y, i.x, i.y);
                },
              },
              {
                key: "pathT",
                value: function (t, e) {
                  var r = Jt.pathT(t),
                    n = r.controlPoint,
                    i = r.currentPoint;
                  return e.push(n.x, n.y, i.x, i.y), $t.QUAD_TO;
                },
              },
              {
                key: "pathA",
                value: function (t) {
                  var e = Jt.pathA(t),
                    r = e.rX,
                    n = e.rY,
                    i = e.sweepFlag,
                    a = e.xAxisRotation,
                    o = e.centp,
                    s = e.a1,
                    u = e.ad;
                  return (
                    0 === i && u > 0 && (u -= 2 * Math.PI),
                    1 === i && u < 0 && (u += 2 * Math.PI),
                    [o.x, o.y, r, n, s, u, a, i]
                  );
                },
              },
              {
                key: "calcLength",
                value: function (t, e, r, n) {
                  var i = 0,
                    a = null,
                    o = null,
                    s = 0;
                  switch (r) {
                    case $t.LINE_TO:
                      return this.getLineLength(t, e, n[0], n[1]);
                    case $t.CURVE_TO:
                      for (
                        i = 0,
                          a = this.getPointOnCubicBezier(
                            0,
                            t,
                            e,
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            n[4],
                            n[5]
                          ),
                          s = 0.01;
                        s <= 1;
                        s += 0.01
                      )
                        (o = this.getPointOnCubicBezier(
                          s,
                          t,
                          e,
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          n[4],
                          n[5]
                        )),
                          (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                          (a = o);
                      return i;
                    case $t.QUAD_TO:
                      for (
                        i = 0,
                          a = this.getPointOnQuadraticBezier(
                            0,
                            t,
                            e,
                            n[0],
                            n[1],
                            n[2],
                            n[3]
                          ),
                          s = 0.01;
                        s <= 1;
                        s += 0.01
                      )
                        (o = this.getPointOnQuadraticBezier(
                          s,
                          t,
                          e,
                          n[0],
                          n[1],
                          n[2],
                          n[3]
                        )),
                          (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                          (a = o);
                      return i;
                    case $t.ARC:
                      i = 0;
                      var u = n[4],
                        c = n[5],
                        l = n[4] + c,
                        h = Math.PI / 180;
                      if (
                        (Math.abs(u - l) < h && (h = Math.abs(u - l)),
                        (a = this.getPointOnEllipticalArc(
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          u,
                          0
                        )),
                        c < 0)
                      )
                        for (s = u - h; s > l; s -= h)
                          (o = this.getPointOnEllipticalArc(
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            s,
                            0
                          )),
                            (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                            (a = o);
                      else
                        for (s = u + h; s < l; s += h)
                          (o = this.getPointOnEllipticalArc(
                            n[0],
                            n[1],
                            n[2],
                            n[3],
                            s,
                            0
                          )),
                            (i += this.getLineLength(a.x, a.y, o.x, o.y)),
                            (a = o);
                      return (
                        (o = this.getPointOnEllipticalArc(
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          l,
                          0
                        )),
                        (i += this.getLineLength(a.x, a.y, o.x, o.y))
                      );
                  }
                  return 0;
                },
              },
              {
                key: "getPointOnLine",
                value: function (t, e, r, n, i) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : e,
                    o =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : r,
                    s = (i - r) / (n - e + gt),
                    u = Math.sqrt((t * t) / (1 + s * s));
                  n < e && (u *= -1);
                  var c = s * u,
                    l = null;
                  if (n === e) l = { x: a, y: o + c };
                  else if ((o - r) / (a - e + gt) === s)
                    l = { x: a + u, y: o + c };
                  else {
                    var h,
                      f,
                      p = this.getLineLength(e, r, n, i);
                    if (p < gt) return null;
                    var v = (a - e) * (n - e) + (o - r) * (i - r);
                    (h = e + (v /= p * p) * (n - e)), (f = r + v * (i - r));
                    var g = this.getLineLength(a, o, h, f),
                      y = Math.sqrt(t * t - g * g);
                    (u = Math.sqrt((y * y) / (1 + s * s))),
                      n < e && (u *= -1),
                      (l = { x: h + u, y: f + (c = s * u) });
                  }
                  return l;
                },
              },
              {
                key: "getPointOnPath",
                value: function (t) {
                  var e = this.getPathLength(),
                    r = 0,
                    n = null;
                  if (t < -5e-5 || t - 5e-5 > e) return null;
                  var i,
                    a = s(this.dataArray);
                  try {
                    for (a.s(); !(i = a.n()).done; ) {
                      var o = i.value;
                      if (
                        !o ||
                        !(o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < t)
                      ) {
                        var u = t - r,
                          c = 0;
                        switch (o.type) {
                          case $t.LINE_TO:
                            n = this.getPointOnLine(
                              u,
                              o.start.x,
                              o.start.y,
                              o.points[0],
                              o.points[1],
                              o.start.x,
                              o.start.y
                            );
                            break;
                          case $t.ARC:
                            var l = o.points[4],
                              h = o.points[5],
                              f = o.points[4] + h;
                            if (
                              ((c = l + (u / o.pathLength) * h),
                              (h < 0 && c < f) || (h >= 0 && c > f))
                            )
                              break;
                            n = this.getPointOnEllipticalArc(
                              o.points[0],
                              o.points[1],
                              o.points[2],
                              o.points[3],
                              c,
                              o.points[6]
                            );
                            break;
                          case $t.CURVE_TO:
                            (c = u / o.pathLength) > 1 && (c = 1),
                              (n = this.getPointOnCubicBezier(
                                c,
                                o.start.x,
                                o.start.y,
                                o.points[0],
                                o.points[1],
                                o.points[2],
                                o.points[3],
                                o.points[4],
                                o.points[5]
                              ));
                            break;
                          case $t.QUAD_TO:
                            (c = u / o.pathLength) > 1 && (c = 1),
                              (n = this.getPointOnQuadraticBezier(
                                c,
                                o.start.x,
                                o.start.y,
                                o.points[0],
                                o.points[1],
                                o.points[2],
                                o.points[3]
                              ));
                        }
                        if (n) return n;
                        break;
                      }
                      r += o.pathLength;
                    }
                  } catch (p) {
                    a.e(p);
                  } finally {
                    a.f();
                  }
                  return null;
                },
              },
              {
                key: "getLineLength",
                value: function (t, e, r, n) {
                  return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
                },
              },
              {
                key: "getPathLength",
                value: function () {
                  return (
                    -1 === this.pathLength &&
                      (this.pathLength = this.dataArray.reduce(function (t, e) {
                        return e.pathLength > 0 ? t + e.pathLength : t;
                      }, 0)),
                    this.pathLength
                  );
                },
              },
              {
                key: "getPointOnCubicBezier",
                value: function (t, e, r, n, i, a, o, s, u) {
                  return {
                    x: s * xt(t) + a * bt(t) + n * wt(t) + e * St(t),
                    y: u * xt(t) + o * bt(t) + i * wt(t) + r * St(t),
                  };
                },
              },
              {
                key: "getPointOnQuadraticBezier",
                value: function (t, e, r, n, i, a, o) {
                  return {
                    x: a * kt(t) + n * Tt(t) + e * Ot(t),
                    y: o * kt(t) + i * Tt(t) + r * Ot(t),
                  };
                },
              },
              {
                key: "getPointOnEllipticalArc",
                value: function (t, e, r, n, i, a) {
                  var o = Math.cos(a),
                    s = Math.sin(a),
                    u = r * Math.cos(i),
                    c = n * Math.sin(i);
                  return { x: t + (u * o - c * s), y: e + (u * s + c * o) };
                },
              },
              {
                key: "buildEquidistantCache",
                value: function (t, e) {
                  var r = this.getPathLength(),
                    n = e || 0.25,
                    i = t || r / 100;
                  if (
                    !this.equidistantCache ||
                    this.equidistantCache.step !== i ||
                    this.equidistantCache.precision !== n
                  ) {
                    this.equidistantCache = {
                      step: i,
                      precision: n,
                      points: [],
                    };
                    for (var a = 0, o = 0; o <= r; o += n) {
                      var s = this.getPointOnPath(o),
                        u = this.getPointOnPath(o + n);
                      s &&
                        u &&
                        (a += this.getLineLength(s.x, s.y, u.x, u.y)) >= i &&
                        (this.equidistantCache.points.push({
                          x: s.x,
                          y: s.y,
                          distance: o,
                        }),
                        (a -= i));
                    }
                  }
                },
              },
              {
                key: "getEquidistantPointOnPath",
                value: function (t, e, r) {
                  if (
                    (this.buildEquidistantCache(e, r),
                    t < 0 || t - this.getPathLength() > 5e-5)
                  )
                    return null;
                  var n = Math.round(
                    (t / this.getPathLength()) *
                      (this.equidistantCache.points.length - 1)
                  );
                  return this.equidistantCache.points[n] || null;
                },
              },
            ]),
            r
          );
        })(ee),
        Me =
          /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i,
        Ne = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, o) {
            var s;
            v(this, r),
              ((s = e.call(this, t, n, o)).type = "image"),
              (s.loaded = !1);
            var u = s.getHrefAttribute().getString();
            if (!u) return a(s);
            var c = u.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(u);
            return (
              t.images.push(i(s)),
              c ? s.loadSvg(u) : s.loadImage(u),
              (s.isSvg = c),
              s
            );
          }
          return (
            d(r, [
              {
                key: "loadImage",
                value: function (t) {
                  var e = this;
                  return w(
                    x().mark(function r() {
                      var n;
                      return x().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.prev = 0),
                                  (r.next = 3),
                                  e.document.createImage(t)
                                );
                              case 3:
                                (n = r.sent), (e.image = n), (r.next = 10);
                                break;
                              case 7:
                                (r.prev = 7),
                                  (r.t0 = r.catch(0)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      t,
                                      '":'
                                    ),
                                    r.t0
                                  );
                              case 10:
                                e.loaded = !0;
                              case 11:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[0, 7]]
                      );
                    })
                  )();
                },
              },
              {
                key: "loadSvg",
                value: function (t) {
                  var e = this;
                  return w(
                    x().mark(function r() {
                      var n, i, a, o;
                      return x().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!(n = Me.exec(t))) {
                                  r.next = 6;
                                  break;
                                }
                                (i = n[5]),
                                  "base64" === n[4]
                                    ? (e.image = atob(i))
                                    : (e.image = decodeURIComponent(i)),
                                  (r.next = 19);
                                break;
                              case 6:
                                return (
                                  (r.prev = 6),
                                  (r.next = 9),
                                  e.document.fetch(t)
                                );
                              case 9:
                                return (a = r.sent), (r.next = 12), a.text();
                              case 12:
                                (o = r.sent), (e.image = o), (r.next = 19);
                                break;
                              case 16:
                                (r.prev = 16),
                                  (r.t0 = r.catch(6)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      t,
                                      '":'
                                    ),
                                    r.t0
                                  );
                              case 19:
                                e.loaded = !0;
                              case 20:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[6, 16]]
                      );
                    })
                  )();
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  var e = this.document,
                    r = this.image,
                    n = this.loaded,
                    i = this.getAttribute("x").getPixels("x"),
                    a = this.getAttribute("y").getPixels("y"),
                    o = this.getStyle("width").getPixels("x"),
                    s = this.getStyle("height").getPixels("y");
                  if (n && r && o && s) {
                    if ((t.save(), t.translate(i, a), this.isSvg)) {
                      var u = e.canvg.forkString(t, this.image, {
                        ignoreMouse: !0,
                        ignoreAnimation: !0,
                        ignoreDimensions: !0,
                        ignoreClear: !0,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: o,
                        scaleHeight: s,
                      });
                      (u.document.documentElement.parent = this), u.render();
                    } else {
                      var c = this.image;
                      e.setViewBox({
                        ctx: t,
                        aspectRatio: this.getAttribute(
                          "preserveAspectRatio"
                        ).getString(),
                        width: o,
                        desiredWidth: c.width,
                        height: s,
                        desiredHeight: c.height,
                      }),
                        this.loaded &&
                          ("undefined" === typeof c.complete || c.complete) &&
                          t.drawImage(c, 0, 0);
                    }
                    t.restore();
                  }
                },
              },
              {
                key: "getBoundingBox",
                value: function () {
                  var t = this.getAttribute("x").getPixels("x"),
                    e = this.getAttribute("y").getPixels("y"),
                    r = this.getStyle("width").getPixels("x"),
                    n = this.getStyle("height").getPixels("y");
                  return new Qt(t, e, t + r, e + n);
                },
              },
            ]),
            r
          );
        })(Kt),
        _e = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "symbol"), t
            );
          }
          return d(r, [{ key: "render", value: function (t) {} }]), r;
        })(Kt),
        Re = (function () {
          function t(e) {
            v(this, t),
              (this.document = e),
              (this.loaded = !1),
              e.fonts.push(this);
          }
          return (
            d(t, [
              {
                key: "load",
                value: function (t, e) {
                  var r = this;
                  return w(
                    x().mark(function n() {
                      var i, a, o;
                      return x().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.prev = 0),
                                  (i = r.document),
                                  (n.next = 4),
                                  i.canvg.parser.load(e)
                                );
                              case 4:
                                (a = n.sent),
                                  (o = a.getElementsByTagName("font")),
                                  Array.from(o).forEach(function (e) {
                                    var r = i.createElement(e);
                                    i.definitions[t] = r;
                                  }),
                                  (n.next = 12);
                                break;
                              case 9:
                                (n.prev = 9),
                                  (n.t0 = n.catch(0)),
                                  console.error(
                                    'Error while loading font "'.concat(
                                      e,
                                      '":'
                                    ),
                                    n.t0
                                  );
                              case 12:
                                r.loaded = !0;
                              case 13:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[0, 9]]
                      );
                    })
                  )();
                },
              },
            ]),
            t
          );
        })(),
        Ve = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            v(this, r), ((a = e.call(this, t, n, i)).type = "style");
            var o = K(
              Array.from(n.childNodes)
                .map(function (t) {
                  return t.textContent;
                })
                .join("")
                .replace(
                  /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                  ""
                )
                .replace(/@import.*;/g, "")
            );
            return (
              o.split("}").forEach(function (e) {
                var r = e.trim();
                if (r) {
                  var n = r.split("{"),
                    i = n[0].split(","),
                    a = n[1].split(";");
                  i.forEach(function (e) {
                    var r = e.trim();
                    if (r) {
                      var n = t.styles[r] || {};
                      if (
                        (a.forEach(function (e) {
                          var r = e.indexOf(":"),
                            i = e.substr(0, r).trim(),
                            a = e.substr(r + 1, e.length - r).trim();
                          i && a && (n[i] = new At(t, i, a));
                        }),
                        (t.styles[r] = n),
                        (t.stylesSpecificity[r] = vt(r)),
                        "@font-face" === r)
                      ) {
                        var i = n["font-family"]
                          .getString()
                          .replace(/"|'/g, "");
                        n.src
                          .getString()
                          .split(",")
                          .forEach(function (e) {
                            if (e.indexOf('format("svg")') > 0) {
                              var r = it(e);
                              r && new Re(t).load(i, r);
                            }
                          });
                      }
                    }
                  });
                }
              }),
              a
            );
          }
          return d(r);
        })(Xt);
      Ve.parseExternalUrl = it;
      var Ie = (function (t) {
        f(r, t);
        var e = p(r);
        function r() {
          var t;
          return v(this, r), ((t = e.apply(this, arguments)).type = "use"), t;
        }
        return (
          d(r, [
            {
              key: "setContext",
              value: function (t) {
                c(u(r.prototype), "setContext", this).call(this, t);
                var e = this.getAttribute("x"),
                  n = this.getAttribute("y");
                e.hasValue() && t.translate(e.getPixels("x"), 0),
                  n.hasValue() && t.translate(0, n.getPixels("y"));
              },
            },
            {
              key: "path",
              value: function (t) {
                var e = this.element;
                e && e.path(t);
              },
            },
            {
              key: "renderChildren",
              value: function (t) {
                var e = this.document,
                  r = this.element;
                if (r) {
                  var n = r;
                  if (
                    ("symbol" === r.type &&
                      (((n = new ie(e, null)).attributes.viewBox = new At(
                        e,
                        "viewBox",
                        r.getAttribute("viewBox").getString()
                      )),
                      (n.attributes.preserveAspectRatio = new At(
                        e,
                        "preserveAspectRatio",
                        r.getAttribute("preserveAspectRatio").getString()
                      )),
                      (n.attributes.overflow = new At(
                        e,
                        "overflow",
                        r.getAttribute("overflow").getString()
                      )),
                      (n.children = r.children),
                      (r.styles.opacity = new At(
                        e,
                        "opacity",
                        this.calculateOpacity()
                      ))),
                    "svg" === n.type)
                  ) {
                    var i = this.getStyle("width", !1, !0),
                      a = this.getStyle("height", !1, !0);
                    i.hasValue() &&
                      (n.attributes.width = new At(e, "width", i.getString())),
                      a.hasValue() &&
                        (n.attributes.height = new At(
                          e,
                          "height",
                          a.getString()
                        ));
                  }
                  var o = n.parent;
                  (n.parent = this), n.render(t), (n.parent = o);
                }
              },
            },
            {
              key: "getBoundingBox",
              value: function (t) {
                var e = this.element;
                return e ? e.getBoundingBox(t) : null;
              },
            },
            {
              key: "elementTransform",
              value: function () {
                var t = this.document,
                  e = this.element;
                return Ht.fromElement(t, e);
              },
            },
            {
              key: "element",
              get: function () {
                return (
                  this.cachedElement ||
                    (this.cachedElement =
                      this.getHrefAttribute().getDefinition()),
                  this.cachedElement
                );
              },
            },
          ]),
          r
        );
      })(Kt);
      function Le(t, e, r, n, i, a) {
        return t[r * n * 4 + 4 * e + a];
      }
      function De(t, e, r, n, i, a, o) {
        t[r * n * 4 + 4 * e + a] = o;
      }
      function je(t, e, r) {
        return t[e] * r;
      }
      function Be(t, e, r, n) {
        return e + Math.cos(t) * r + Math.sin(t) * n;
      }
      var Fe = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            v(this, r), ((a = e.call(this, t, n, i)).type = "feColorMatrix");
            var o = et(a.getAttribute("values").getString());
            switch (a.getAttribute("type").getString("matrix")) {
              case "saturate":
                var s = o[0];
                o = [
                  0.213 + 0.787 * s,
                  0.715 - 0.715 * s,
                  0.072 - 0.072 * s,
                  0,
                  0,
                  0.213 - 0.213 * s,
                  0.715 + 0.285 * s,
                  0.072 - 0.072 * s,
                  0,
                  0,
                  0.213 - 0.213 * s,
                  0.715 - 0.715 * s,
                  0.072 + 0.928 * s,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "hueRotate":
                var u = (o[0] * Math.PI) / 180;
                o = [
                  Be(u, 0.213, 0.787, -0.213),
                  Be(u, 0.715, -0.715, -0.715),
                  Be(u, 0.072, -0.072, 0.928),
                  0,
                  0,
                  Be(u, 0.213, -0.213, 0.143),
                  Be(u, 0.715, 0.285, 0.14),
                  Be(u, 0.072, -0.072, -0.283),
                  0,
                  0,
                  Be(u, 0.213, -0.213, -0.787),
                  Be(u, 0.715, -0.715, 0.715),
                  Be(u, 0.072, 0.928, 0.072),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "luminanceToAlpha":
                o = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
                  0.0721, 0, 0, 0, 0, 0, 0, 1,
                ];
            }
            return (
              (a.matrix = o),
              (a.includeOpacity = a.getAttribute("includeOpacity").hasValue()),
              a
            );
          }
          return (
            d(r, [
              {
                key: "apply",
                value: function (t, e, r, n, i) {
                  for (
                    var a = this.includeOpacity,
                      o = this.matrix,
                      s = t.getImageData(0, 0, n, i),
                      u = 0;
                    u < i;
                    u++
                  )
                    for (var c = 0; c < n; c++) {
                      var l = Le(s.data, c, u, n, 0, 0),
                        h = Le(s.data, c, u, n, 0, 1),
                        f = Le(s.data, c, u, n, 0, 2),
                        p = Le(s.data, c, u, n, 0, 3),
                        v =
                          je(o, 0, l) +
                          je(o, 1, h) +
                          je(o, 2, f) +
                          je(o, 3, p) +
                          je(o, 4, 1),
                        g =
                          je(o, 5, l) +
                          je(o, 6, h) +
                          je(o, 7, f) +
                          je(o, 8, p) +
                          je(o, 9, 1),
                        y =
                          je(o, 10, l) +
                          je(o, 11, h) +
                          je(o, 12, f) +
                          je(o, 13, p) +
                          je(o, 14, 1),
                        d =
                          je(o, 15, l) +
                          je(o, 16, h) +
                          je(o, 17, f) +
                          je(o, 18, p) +
                          je(o, 19, 1);
                      a && ((v = 0), (g = 0), (y = 0), (d *= p / 255)),
                        De(s.data, c, u, n, 0, 0, v),
                        De(s.data, c, u, n, 0, 1, g),
                        De(s.data, c, u, n, 0, 2, y),
                        De(s.data, c, u, n, 0, 3, d);
                    }
                  t.clearRect(0, 0, n, i), t.putImageData(s, 0, 0);
                },
              },
            ]),
            r
          );
        })(Xt),
        ze = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "mask"), t
            );
          }
          return (
            d(r, [
              {
                key: "apply",
                value: function (t, e) {
                  var n = this.document,
                    i = this.getAttribute("x").getPixels("x"),
                    a = this.getAttribute("y").getPixels("y"),
                    o = this.getStyle("width").getPixels("x"),
                    s = this.getStyle("height").getPixels("y");
                  if (!o && !s) {
                    var u = new Qt();
                    this.children.forEach(function (e) {
                      u.addBoundingBox(e.getBoundingBox(t));
                    }),
                      (i = Math.floor(u.x1)),
                      (a = Math.floor(u.y1)),
                      (o = Math.floor(u.width)),
                      (s = Math.floor(u.height));
                  }
                  var c = this.removeStyles(e, r.ignoreStyles),
                    l = n.createCanvas(i + o, a + s),
                    h = l.getContext("2d");
                  n.screen.setDefaults(h),
                    this.renderChildren(h),
                    new Fe(n, {
                      nodeType: 1,
                      childNodes: [],
                      attributes: [
                        { nodeName: "type", value: "luminanceToAlpha" },
                        { nodeName: "includeOpacity", value: "true" },
                      ],
                    }).apply(h, 0, 0, i + o, a + s);
                  var f = n.createCanvas(i + o, a + s),
                    p = f.getContext("2d");
                  n.screen.setDefaults(p),
                    e.render(p),
                    (p.globalCompositeOperation = "destination-in"),
                    (p.fillStyle = h.createPattern(l, "no-repeat")),
                    p.fillRect(0, 0, i + o, a + s),
                    (t.fillStyle = p.createPattern(f, "no-repeat")),
                    t.fillRect(0, 0, i + o, a + s),
                    this.restoreStyles(e, c);
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Xt);
      ze.ignoreStyles = ["mask", "transform", "clip-path"];
      var Ue = function () {},
        He = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "clipPath"), t
            );
          }
          return (
            d(r, [
              {
                key: "apply",
                value: function (t) {
                  var e = this.document,
                    r = Reflect.getPrototypeOf(t),
                    n = t.beginPath,
                    i = t.closePath;
                  r && ((r.beginPath = Ue), (r.closePath = Ue)),
                    Reflect.apply(n, t, []),
                    this.children.forEach(function (n) {
                      if ("undefined" !== typeof n.path) {
                        var a =
                          "undefined" !== typeof n.elementTransform
                            ? n.elementTransform()
                            : null;
                        a || (a = Ht.fromElement(e, n)),
                          a && a.apply(t),
                          n.path(t),
                          r && (r.closePath = i),
                          a && a.unapply(t);
                      }
                    }),
                    Reflect.apply(i, t, []),
                    t.clip(),
                    r && ((r.beginPath = n), (r.closePath = i));
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Xt),
        Xe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "filter"), t
            );
          }
          return (
            d(r, [
              {
                key: "apply",
                value: function (t, e) {
                  var n = this.document,
                    i = this.children,
                    a = e.getBoundingBox(t);
                  if (a) {
                    var o = 0,
                      s = 0;
                    i.forEach(function (t) {
                      var e = t.extraFilterDistance || 0;
                      (o = Math.max(o, e)), (s = Math.max(s, e));
                    });
                    var u = Math.floor(a.width),
                      c = Math.floor(a.height),
                      l = u + 2 * o,
                      h = c + 2 * s;
                    if (!(l < 1 || h < 1)) {
                      var f = Math.floor(a.x),
                        p = Math.floor(a.y),
                        v = this.removeStyles(e, r.ignoreStyles),
                        g = n.createCanvas(l, h),
                        y = g.getContext("2d");
                      n.screen.setDefaults(y),
                        y.translate(-f + o, -p + s),
                        e.render(y),
                        i.forEach(function (t) {
                          "function" === typeof t.apply &&
                            t.apply(y, 0, 0, l, h);
                        }),
                        t.drawImage(g, 0, 0, l, h, f - o, p - s, l, h),
                        this.restoreStyles(e, v);
                    }
                  }
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Xt);
      Xe.ignoreStyles = ["filter", "transform", "clip-path"];
      var Ye = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "feDropShadow"),
              a.addStylesFromStyleDefinition(),
              a
            );
          }
          return (
            d(r, [{ key: "apply", value: function (t, e, r, n, i) {} }]), r
          );
        })(Xt),
        Ge = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "feMorphology"),
              t
            );
          }
          return (
            d(r, [{ key: "apply", value: function (t, e, r, n, i) {} }]), r
          );
        })(Xt),
        We = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r),
              ((t = e.apply(this, arguments)).type = "feComposite"),
              t
            );
          }
          return (
            d(r, [{ key: "apply", value: function (t, e, r, n, i) {} }]), r
          );
        })(Xt),
        Ze = (function (t) {
          f(r, t);
          var e = p(r);
          function r(t, n, i) {
            var a;
            return (
              v(this, r),
              ((a = e.call(this, t, n, i)).type = "feGaussianBlur"),
              (a.blurRadius = Math.floor(
                a.getAttribute("stdDeviation").getNumber()
              )),
              (a.extraFilterDistance = a.blurRadius),
              a
            );
          }
          return (
            d(r, [
              {
                key: "apply",
                value: function (t, e, r, n, i) {
                  var a = this.document,
                    o = this.blurRadius,
                    s = a.window ? a.window.document.body : null,
                    u = t.canvas;
                  (u.id = a.getUniqueId()),
                    s && ((u.style.display = "none"), s.appendChild(u)),
                    q(u, e, r, n, i, o),
                    s && s.removeChild(u);
                },
              },
            ]),
            r
          );
        })(Xt),
        qe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "title"), t
            );
          }
          return d(r);
        })(Xt),
        Qe = (function (t) {
          f(r, t);
          var e = p(r);
          function r() {
            var t;
            return (
              v(this, r), ((t = e.apply(this, arguments)).type = "desc"), t
            );
          }
          return d(r);
        })(Xt),
        $e = {
          svg: ie,
          rect: ae,
          circle: oe,
          ellipse: se,
          line: ue,
          polyline: ce,
          polygon: le,
          path: Jt,
          pattern: he,
          marker: fe,
          defs: pe,
          linearGradient: ye,
          radialGradient: de,
          stop: me,
          animate: xe,
          animateColor: be,
          animateTransform: we,
          font: Se,
          "font-face": ke,
          "missing-glyph": Te,
          glyph: te,
          text: ee,
          tspan: re,
          tref: Oe,
          a: Ae,
          textPath: Ce,
          image: Ne,
          g: ve,
          symbol: _e,
          style: Ve,
          use: Ie,
          mask: ze,
          clipPath: He,
          filter: Xe,
          feDropShadow: Ye,
          feMorphology: Ge,
          feComposite: We,
          feColorMatrix: Fe,
          feGaussianBlur: Ze,
          title: qe,
          desc: Qe,
        };
      function Ke(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Je() {
        return (
          (Je = w(
            x().mark(function t(e) {
              var r,
                n,
                i = arguments;
              return x().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = i.length > 1 && void 0 !== i[1] && i[1]),
                        (n = document.createElement("img")),
                        r && (n.crossOrigin = "Anonymous"),
                        t.abrupt(
                          "return",
                          new Promise(function (t, r) {
                            (n.onload = function () {
                              t(n);
                            }),
                              (n.onerror = function (t, e, n, i, a) {
                                r(a);
                              }),
                              (n.src = e);
                          })
                        )
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )),
          Je.apply(this, arguments)
        );
      }
      var tr = (function () {
        function t(e) {
          v(this, t);
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.rootEmSize,
            i = void 0 === n ? 12 : n,
            a = r.emSize,
            o = void 0 === a ? 12 : a,
            s = r.createCanvas,
            u = void 0 === s ? t.createCanvas : s,
            c = r.createImage,
            l = void 0 === c ? t.createImage : c,
            h = r.anonymousCrossOrigin;
          (this.canvg = e),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = e.screen),
            (this.rootEmSize = i),
            (this.emSize = o),
            (this.createCanvas = u),
            (this.createImage = this.bindCreateImage(l, h)),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this));
        }
        return (
          d(t, [
            {
              key: "bindCreateImage",
              value: function (t, e) {
                return "boolean" === typeof e
                  ? function (r, n) {
                      return t(r, "boolean" === typeof n ? n : e);
                    }
                  : t;
              },
            },
            {
              key: "window",
              get: function () {
                return this.screen.window;
              },
            },
            {
              key: "fetch",
              get: function () {
                return this.screen.fetch;
              },
            },
            {
              key: "ctx",
              get: function () {
                return this.screen.ctx;
              },
            },
            {
              key: "emSize",
              get: function () {
                var t = this.emSizeStack;
                return t[t.length - 1];
              },
              set: function (t) {
                this.emSizeStack.push(t);
              },
            },
            {
              key: "popEmSize",
              value: function () {
                this.emSizeStack.pop();
              },
            },
            {
              key: "getUniqueId",
              value: function () {
                return "canvg".concat(++this.uniqueId);
              },
            },
            {
              key: "isImagesLoaded",
              value: function () {
                return this.images.every(function (t) {
                  return t.loaded;
                });
              },
            },
            {
              key: "isFontsLoaded",
              value: function () {
                return this.fonts.every(function (t) {
                  return t.loaded;
                });
              },
            },
            {
              key: "createDocumentElement",
              value: function (t) {
                var e = this.createElement(t.documentElement);
                return (
                  (e.root = !0),
                  e.addStylesFromStyleDefinition(),
                  (this.documentElement = e),
                  e
                );
              },
            },
            {
              key: "createElement",
              value: function (e) {
                var r = e.nodeName.replace(/^[^:]+:/, ""),
                  n = t.elementTypes[r];
                return "undefined" !== typeof n
                  ? new n(this, e)
                  : new Yt(this, e);
              },
            },
            {
              key: "createTextNode",
              value: function (t) {
                return new ne(this, t);
              },
            },
            {
              key: "setViewBox",
              value: function (t) {
                this.screen.setViewBox(
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? Ke(Object(r), !0).forEach(function (e) {
                            (0, S.Z)(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : Ke(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })({ document: this }, t)
                );
              },
            },
          ]),
          t
        );
      })();
      function er(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function rr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? er(Object(r), !0).forEach(function (e) {
                (0, S.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : er(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      (tr.createCanvas = function (t, e) {
        var r = document.createElement("canvas");
        return (r.width = t), (r.height = e), r;
      }),
        (tr.createImage = function (t) {
          return Je.apply(this, arguments);
        }),
        (tr.elementTypes = $e);
      var nr = (function () {
        function t(e, r) {
          v(this, t);
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          (this.parser = new It(n)),
            (this.screen = new _t(e, n)),
            (this.options = n);
          var i = new tr(this, n),
            a = i.createDocumentElement(r);
          (this.document = i), (this.documentElement = a);
        }
        return (
          d(
            t,
            [
              {
                key: "fork",
                value: function (e, r) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return t.from(e, r, rr(rr({}, this.options), n));
                },
              },
              {
                key: "forkString",
                value: function (e, r) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return t.fromString(e, r, rr(rr({}, this.options), n));
                },
              },
              {
                key: "ready",
                value: function () {
                  return this.screen.ready();
                },
              },
              {
                key: "isReady",
                value: function () {
                  return this.screen.isReady();
                },
              },
              {
                key: "render",
                value: function () {
                  var t = arguments,
                    e = this;
                  return w(
                    x().mark(function r() {
                      var n;
                      return x().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (n =
                                  t.length > 0 && void 0 !== t[0] ? t[0] : {}),
                                e.start(
                                  rr(
                                    {
                                      enableRedraw: !0,
                                      ignoreAnimation: !0,
                                      ignoreMouse: !0,
                                    },
                                    n
                                  )
                                ),
                                (r.next = 4),
                                e.ready()
                              );
                            case 4:
                              e.stop();
                            case 5:
                            case "end":
                              return r.stop();
                          }
                      }, r);
                    })
                  )();
                },
              },
              {
                key: "start",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = this.documentElement,
                    r = this.screen,
                    n = this.options;
                  r.start(e, rr(rr({ enableRedraw: !0 }, n), t));
                },
              },
              {
                key: "stop",
                value: function () {
                  this.screen.stop();
                },
              },
              {
                key: "resize",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : t,
                    r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  this.documentElement.resize(t, e, r);
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e, r) {
                  var n = arguments;
                  return w(
                    x().mark(function i() {
                      var a, o, s;
                      return x().wrap(function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (o = new It(
                                  (a =
                                    n.length > 2 && void 0 !== n[2] ? n[2] : {})
                                )),
                                (i.next = 4),
                                o.parse(r)
                              );
                            case 4:
                              return (
                                (s = i.sent), i.abrupt("return", new t(e, s, a))
                              );
                            case 6:
                            case "end":
                              return i.stop();
                          }
                      }, i);
                    })
                  )();
                },
              },
              {
                key: "fromString",
                value: function (e, r) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return new t(e, new It(n).parseFromString(r), n);
                },
              },
            ]
          ),
          t
        );
      })();
    },
  },
]);
//# sourceMappingURL=573.cce33b37.chunk.js.map
