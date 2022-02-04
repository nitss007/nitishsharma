if (function(t, e) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";
        var n = [],
            i = t.document,
            o = Object.getPrototypeOf,
            r = n.slice,
            s = n.concat,
            a = n.push,
            l = n.indexOf,
            u = {},
            c = u.toString,
            f = u.hasOwnProperty,
            p = f.toString,
            d = p.call(Object),
            h = {},
            g = function(t) { return "function" == typeof t && "number" != typeof t.nodeType },
            m = function(t) { return null != t && t === t.window },
            v = { type: !0, src: !0, nonce: !0, noModule: !0 };

        function y(t, e, n) {
            var o, r, s = (n = n || i).createElement("script");
            if (s.text = t, e)
                for (o in v)(r = e[o] || e.getAttribute && e.getAttribute(o)) && s.setAttribute(o, r);
            n.head.appendChild(s).parentNode.removeChild(s)
        }

        function b(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t }
        var x = "3.4.1",
            w = function(t, e) { return new w.fn.init(t, e) },
            T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function C(t) {
            var e = !!t && "length" in t && t.length,
                n = b(t);
            return !g(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
        }
        w.fn = w.prototype = {
            jquery: x,
            constructor: w,
            length: 0,
            toArray: function() { return r.call(this) },
            get: function(t) { return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t] },
            pushStack: function(t) { var e = w.merge(this.constructor(), t); return e.prevObject = this, e },
            each: function(t) { return w.each(this, t) },
            map: function(t) { return this.pushStack(w.map(this, function(e, n) { return t.call(e, n, e) })) },
            slice: function() { return this.pushStack(r.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(0 <= n && n < e ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: a,
            sort: n.sort,
            splice: n.splice
        }, w.extend = w.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = t[e], "__proto__" !== e && s !== i && (u && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e], r = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}, o = !1, s[e] = w.extend(u, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, w.extend({
            expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) { throw new Error(t) },
            noop: function() {},
            isPlainObject: function(t) { var e, n; return !(!t || "[object Object]" !== c.call(t) || (e = o(t)) && ("function" != typeof(n = f.call(e, "constructor") && e.constructor) || p.call(n) !== d)) },
            isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
            globalEval: function(t, e) { y(t, { nonce: e && e.nonce }) },
            each: function(t, e) {
                var n, i = 0;
                if (C(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break; return t
            },
            trim: function(t) { return null == t ? "" : (t + "").replace(T, "") },
            makeArray: function(t, e) { var n = e || []; return null != t && (C(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n },
            inArray: function(t, e, n) { return null == e ? -1 : l.call(e, t, n) },
            merge: function(t, e) { for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i]; return t.length = o, t },
            grep: function(t, e, n) { for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]); return i },
            map: function(t, e, n) {
                var i, o, r = 0,
                    a = [];
                if (C(t))
                    for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
                else
                    for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
                return s.apply([], a)
            },
            guid: 1,
            support: h
        }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { u["[object " + e + "]"] = e.toLowerCase() });
        var E = function(t) {
            var e, n, i, o, r, s, a, l, u, c, f, p, d, h, g, m, v, y, b, x = "sizzle" + 1 * new Date,
                w = t.document,
                T = 0,
                C = 0,
                E = lt(),
                S = lt(),
                $ = lt(),
                k = lt(),
                D = function(t, e) { return t === e && (f = !0), 0 },
                A = {}.hasOwnProperty,
                N = [],
                j = N.pop,
                O = N.push,
                L = N.push,
                I = N.slice,
                R = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + P + "*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
                F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                W = new RegExp(P + "+", "g"),
                B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                U = new RegExp("^" + P + "*," + P + "*"),
                _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                z = new RegExp(P + "|>"),
                V = new RegExp(F),
                Q = new RegExp("^" + H + "$"),
                X = { ID: new RegExp("^#(" + H + ")"), CLASS: new RegExp("^\\.(" + H + ")"), TAG: new RegExp("^(" + H + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: new RegExp("^(?:" + q + ")$", "i"), needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
                G = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                nt = function(t, e, n) { var i = "0x" + e - 65536; return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ot = function(t, e) { return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                rt = function() { p() },
                st = xt(function(t) { return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
            try { L.apply(N = I.call(w.childNodes), w.childNodes) } catch (e) {
                L = {
                    apply: N.length ? function(t, e) { O.apply(t, I.call(e)) } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }

            function at(t, e, i, o) {
                var r, a, u, c, f, h, v, y = e && e.ownerDocument,
                    T = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return i;
                if (!o && ((e ? e.ownerDocument || e : w) !== d && p(e), e = e || d, g)) {
                    if (11 !== T && (f = Z.exec(t)))
                        if (r = f[1]) { if (9 === T) { if (!(u = e.getElementById(r))) return i; if (u.id === r) return i.push(u), i } else if (y && (u = y.getElementById(r)) && b(e, u) && u.id === r) return i.push(u), i } else { if (f[2]) return L.apply(i, e.getElementsByTagName(t)), i; if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(r)), i }
                    if (n.qsa && !k[t + " "] && (!m || !m.test(t)) && (1 !== T || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === T && z.test(t)) {
                            for ((c = e.getAttribute("id")) ? c = c.replace(it, ot) : e.setAttribute("id", c = x), a = (h = s(t)).length; a--;) h[a] = "#" + c + " " + bt(h[a]);
                            v = h.join(","), y = tt.test(t) && vt(e.parentNode) || e
                        }
                        try { return L.apply(i, y.querySelectorAll(v)), i } catch (e) { k(t, !0) } finally { c === x && e.removeAttribute("id") }
                    }
                }
                return l(t.replace(B, "$1"), e, i, o)
            }

            function lt() { var t = []; return function e(n, o) { return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o } }

            function ut(t) { return t[x] = !0, t }

            function ct(t) { var e = d.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function ft(t, e) { for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e }

            function pt(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function dt(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

            function ht(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }

            function gt(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

            function mt(t) { return ut(function(e) { return e = +e, ut(function(n, i) { for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o])) }) }) }

            function vt(t) { return t && void 0 !== t.getElementsByTagName && t }
            for (e in n = at.support = {}, r = at.isXML = function(t) { var e = (t.ownerDocument || t).documentElement; return !G.test(t.namespaceURI || e && e.nodeName || "HTML") }, p = at.setDocument = function(t) {
                    var e, o, s = t ? t.ownerDocument || t : w;
                    return s !== d && 9 === s.nodeType && s.documentElement && (h = (d = s).documentElement, g = !r(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), n.attributes = ct(function(t) { return t.className = "i", !t.getAttribute("className") }), n.getElementsByTagName = ct(function(t) { return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ct(function(t) { return h.appendChild(t).id = x, !d.getElementsByName || !d.getElementsByName(x).length }), n.getById ? (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { return t.getAttribute("id") === e } }, i.find.ID = function(t, e) { if (void 0 !== e.getElementById && g) { var n = e.getElementById(t); return n ? [n] : [] } }) : (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }, i.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n, i, o, r = e.getElementById(t);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                    if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                            }
                            return []
                        }
                    }), i.find.TAG = n.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                        var n, i = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) { for (; n = r[o++];) 1 === n.nodeType && i.push(n); return i }
                        return r
                    }, i.find.CLASS = n.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t) }, v = [], m = [], (n.qsa = K.test(d.querySelectorAll)) && (ct(function(t) { h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + q + ")"), t.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]") }), ct(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = d.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ct(function(t) { n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", F) }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = K.test(h.compareDocumentPosition), b = e || K.test(h.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, D = e ? function(t, e) { if (t === e) return f = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === w && b(w, t) ? -1 : e === d || e.ownerDocument === w && b(w, e) ? 1 : c ? R(c, t) - R(c, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                        if (t === e) return f = !0, 0;
                        var n, i = 0,
                            o = t.parentNode,
                            r = e.parentNode,
                            s = [t],
                            a = [e];
                        if (!o || !r) return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : c ? R(c, t) - R(c, e) : 0;
                        if (o === r) return pt(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? pt(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                    }), d
                }, at.matches = function(t, e) { return at(t, null, null, e) }, at.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== d && p(t), n.matchesSelector && g && !k[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try { var i = y.call(t, e); if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (t) { k(e, !0) }
                    return 0 < at(e, d, null, [t]).length
                }, at.contains = function(t, e) { return (t.ownerDocument || t) !== d && p(t), b(t, e) }, at.attr = function(t, e) {
                    (t.ownerDocument || t) !== d && p(t);
                    var o = i.attrHandle[e.toLowerCase()],
                        r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, at.escape = function(t) { return (t + "").replace(it, ot) }, at.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, at.uniqueSort = function(t) {
                    var e, i = [],
                        o = 0,
                        r = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(D), f) { for (; e = t[r++];) e === t[r] && (o = i.push(r)); for (; o--;) t.splice(i[o], 1) }
                    return c = null, t
                }, o = at.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += o(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                        for (; e = t[i++];) n += o(e);
                    return n
                }, (i = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ut,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(t) { return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } },
                    filter: {
                        TAG: function(t) { var e = t.replace(et, nt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                        CLASS: function(t) { var e = E[t + " "]; return e || (e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) && E(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                        ATTR: function(t, e, n) { return function(i) { var o = at.attr(i, t); return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && -1 < o.indexOf(n) : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? -1 < (" " + o.replace(W, " ") + " ").indexOf(n) : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) { return !!t.parentNode } : function(e, n, l) {
                                var u, c, f, p, d, h, g = r !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (p = e; p = p[g];)
                                                if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === t && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (b = (d = (u = (c = (f = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] || [])[0] === T && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++b && p === e) { c[t] = [T, d, b]; break }
                                    } else if (y && (b = d = (u = (c = (f = (p = e)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] || [])[0] === T && u[1]), !1 === b)
                                        for (;
                                            (p = ++d && p && p[g] || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((c = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] = [T, b]), p !== e)););
                                    return (b -= o) === i || b % i == 0 && 0 <= b / i
                                }
                            }
                        },
                        PSEUDO: function(t, e) { var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t); return o[x] ? o(e) : 1 < o.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut(function(t, n) { for (var i, r = o(t, e), s = r.length; s--;) t[i = R(t, r[s])] = !(n[i] = r[s]) }) : function(t) { return o(t, 0, n) }) : o }
                    },
                    pseudos: {
                        not: ut(function(t) {
                            var e = [],
                                n = [],
                                i = a(t.replace(B, "$1"));
                            return i[x] ? ut(function(t, e, n, o) { for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r)) }) : function(t, o, r) { return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop() }
                        }),
                        has: ut(function(t) { return function(e) { return 0 < at(t, e).length } }),
                        contains: ut(function(t) {
                            return t = t.replace(et, nt),
                                function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                        }),
                        lang: ut(function(t) {
                            return Q.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do { if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id },
                        root: function(t) { return t === h },
                        focus: function(t) { return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                        selected: function(t) { return !0 === t.selected },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) { return !i.pseudos.empty(t) },
                        header: function(t) { return J.test(t.nodeName) },
                        input: function(t) { return Y.test(t.nodeName) },
                        button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                        text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                        first: mt(function() { return [0] }),
                        last: mt(function(t, e) { return [e - 1] }),
                        eq: mt(function(t, e, n) { return [n < 0 ? n + e : n] }),
                        even: mt(function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t }),
                        odd: mt(function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t }),
                        lt: mt(function(t, e, n) { for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i); return t }),
                        gt: mt(function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t })
                    }
                }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[e] = dt(e);
            for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ht(e);

            function yt() {}

            function bt(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

            function xt(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    r = o || i,
                    s = n && "parentNode" === r,
                    a = C++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, o);
                    return !1
                } : function(e, n, l) {
                    var u, c, f, p = [T, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (c = (f = e[x] || (e[x] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else { if ((u = c[r]) && u[0] === T && u[1] === a) return p[2] = u[2]; if ((c[r] = p)[2] = t(e, n, l)) return !0 } return !1
                }
            }

            function wt(t) {
                return 1 < t.length ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function Tt(t, e, n, i, o) { for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a))); return s }

            function Ct(t, e, n, i, o, r) {
                return i && !i[x] && (i = Ct(i)), o && !o[x] && (o = Ct(o, r)), ut(function(r, s, a, l) {
                    var u, c, f, p = [],
                        d = [],
                        h = s.length,
                        g = r || function(t, e, n) { for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n); return n }(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !r && e ? g : Tt(g, p, t, a, l),
                        v = n ? o || (r ? t : h || i) ? [] : s : m;
                    if (n && n(m, v, a, l), i)
                        for (u = Tt(v, d), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(m[c] = f);
                                o(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(f = v[c]) && -1 < (u = o ? R(r, f) : p[c]) && (r[u] = !(s[u] = f))
                        }
                    } else v = Tt(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : L.apply(s, v)
                })
            }

            function Et(t) {
                for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = xt(function(t) { return t === e }, a, !0), f = xt(function(t) { return -1 < R(e, t) }, a, !0), p = [function(t, n, i) { var o = !s && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : f(t, n, i)); return e = null, o }]; l < r; l++)
                    if (n = i.relative[t[l].type]) p = [xt(wt(p), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) { for (o = ++l; o < r && !i.relative[t[o].type]; o++); return Ct(1 < l && wt(p), 1 < l && bt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(B, "$1"), n, l < o && Et(t.slice(l, o)), o < r && Et(t = t.slice(o)), o < r && bt(t)) }
                        p.push(n)
                    }
                return wt(p)
            }
            return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function(t, e) { var n, o, r, s, a, l, u, c = S[t + " "]; if (c) return e ? 0 : c.slice(0); for (a = t, l = [], u = i.preFilter; a;) { for (s in n && !(o = U.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = _.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(B, " ") }), a = a.slice(n.length)), i.filter) !(o = X[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length)); if (!n) break } return e ? a.length : a ? at.error(t) : S(t, l).slice(0) }, a = at.compile = function(t, e) {
                var n, o, r, a, l, c, f = [],
                    h = [],
                    m = $[t + " "];
                if (!m) {
                    for (e || (e = s(t)), n = e.length; n--;)(m = Et(e[n]))[x] ? f.push(m) : h.push(m);
                    (m = $(t, (o = h, a = 0 < (r = f).length, l = 0 < o.length, c = function(t, e, n, s, c) {
                        var f, h, m, v = 0,
                            y = "0",
                            b = t && [],
                            x = [],
                            w = u,
                            C = t || l && i.find.TAG("*", c),
                            E = T += null == w ? 1 : Math.random() || .1,
                            S = C.length;
                        for (c && (u = e === d || e || c); y !== S && null != (f = C[y]); y++) {
                            if (l && f) {
                                for (h = 0, e || f.ownerDocument === d || (p(f), n = !g); m = o[h++];)
                                    if (m(f, e || d, n)) { s.push(f); break }
                                c && (T = E)
                            }
                            a && ((f = !m && f) && v--, t && b.push(f))
                        }
                        if (v += y, a && y !== v) {
                            for (h = 0; m = r[h++];) m(b, x, e, n);
                            if (t) {
                                if (0 < v)
                                    for (; y--;) b[y] || x[y] || (x[y] = j.call(s));
                                x = Tt(x)
                            }
                            L.apply(s, x), c && !t && 0 < x.length && 1 < v + r.length && at.uniqueSort(s)
                        }
                        return c && (T = E, u = w), b
                    }, a ? ut(c) : c))).selector = t
                }
                return m
            }, l = at.select = function(t, e, n, o) {
                var r, l, u, c, f, p = "function" == typeof t && t,
                    d = !o && s(t = p.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                        p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (r = X.needsContext.test(t) ? 0 : l.length; r-- && !i.relative[c = (u = l[r]).type];)
                        if ((f = i.find[c]) && (o = f(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) { if (l.splice(r, 1), !(t = o.length && bt(l))) return L.apply(n, o), n; break }
                }
                return (p || a(t, d))(o, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
            }, n.sortStable = x.split("").sort(D).join("") === x, n.detectDuplicates = !!f, p(), n.sortDetached = ct(function(t) { return 1 & t.compareDocumentPosition(d.createElement("fieldset")) }), ct(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || ft("type|href|height|width", function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), n.attributes && ct(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || ft("value", function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), ct(function(t) { return null == t.getAttribute("disabled") }) || ft(q, function(t, e, n) { var i; if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null }), at
        }(t);
        w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
        var S = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && w(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            $ = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
            k = w.expr.match.needsContext;

        function D(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function N(t, e, n) { return g(e) ? w.grep(t, function(t, i) { return !!e.call(t, i, t) !== n }) : e.nodeType ? w.grep(t, function(t) { return t === e !== n }) : "string" != typeof e ? w.grep(t, function(t) { return -1 < l.call(e, t) !== n }) : w.filter(e, t, n) }
        w.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function(t) { return 1 === t.nodeType })) }, w.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(w(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (w.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, o[e], n);
                return 1 < i ? w.uniqueSort(n) : n
            },
            filter: function(t) { return this.pushStack(N(this, t || [], !1)) },
            not: function(t) { return this.pushStack(N(this, t || [], !0)) },
            is: function(t) { return !!N(this, "string" == typeof t && k.test(t) ? w(t) : t || [], !1).length }
        });
        var j, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (w.fn.init = function(t, e, n) {
            var o, r;
            if (!t) return this;
            if (n = n || j, "string" == typeof t) {
                if (!(o = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (o[1]) {
                    if (w.merge(this, w.parseHTML(o[1], (e = e instanceof w ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i, !0)), A.test(o[1]) && w.isPlainObject(e))
                        for (o in e) g(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                    return this
                }
                return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
        }).prototype = w.fn, j = w(i);
        var L = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };

        function R(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        w.fn.extend({
            has: function(t) {
                var e = w(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (w.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && w(t);
                if (!k.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) { r.push(n); break }
                return this.pushStack(1 < r.length ? w.uniqueSort(r) : r)
            },
            index: function(t) { return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(t, e) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e)))) },
            addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
        }), w.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return S(t, "parentNode") }, parentsUntil: function(t, e, n) { return S(t, "parentNode", n) }, next: function(t) { return R(t, "nextSibling") }, prev: function(t) { return R(t, "previousSibling") }, nextAll: function(t) { return S(t, "nextSibling") }, prevAll: function(t) { return S(t, "previousSibling") }, nextUntil: function(t, e, n) { return S(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return S(t, "previousSibling", n) }, siblings: function(t) { return $((t.parentNode || {}).firstChild, t) }, children: function(t) { return $(t.firstChild) }, contents: function(t) { return void 0 !== t.contentDocument ? t.contentDocument : (D(t, "template") && (t = t.content || t), w.merge([], t.childNodes)) } }, function(t, e) { w.fn[t] = function(n, i) { var o = w.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), 1 < this.length && (I[t] || w.uniqueSort(o), L.test(t) && o.reverse()), this.pushStack(o) } });
        var q = /[^\x20\t\r\n\f]+/g;

        function P(t) { return t }

        function H(t) { throw t }

        function M(t, e, n, i) { var o; try { t && g(o = t.promise) ? o.call(t).done(e).fail(n) : t && g(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i)) } catch (t) { n.apply(void 0, [t]) } }
        w.Callbacks = function(t) {
            var e;
            t = "string" == typeof t ? (e = {}, w.each(t.match(q) || [], function(t, n) { e[n] = !0 }), e) : w.extend({}, t);
            var n, i, o, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = r || t.once, o = n = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < s.length;) !1 === s[l].apply(i[0], i[1]) && t.stopOnFalse && (l = s.length, i = !1);
                    t.memory || (i = !1), n = !1, r && (s = i ? [] : "")
                },
                c = { add: function() { return s && (i && !n && (l = s.length - 1, a.push(i)), function e(n) { w.each(n, function(n, i) { g(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== b(i) && e(i) }) }(arguments), i && !n && u()), this }, remove: function() { return w.each(arguments, function(t, e) { for (var n; - 1 < (n = w.inArray(e, s, n));) s.splice(n, 1), n <= l && l-- }), this }, has: function(t) { return t ? -1 < w.inArray(t, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return r = a = [], s = i = "", this }, disabled: function() { return !s }, lock: function() { return r = a = [], i || n || (s = i = ""), this }, locked: function() { return !!r }, fireWith: function(t, e) { return r || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), n || u()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!o } };
            return c
        }, w.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() { return i },
                        always: function() { return r.done(arguments).fail(arguments), this },
                        catch: function(t) { return o.then(null, t) },
                        pipe: function() {
                            var t = arguments;
                            return w.Deferred(function(e) {
                                w.each(n, function(n, i) {
                                    var o = g(t[i[4]]) && t[i[4]];
                                    r[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, o) {
                            var r = 0;

                            function s(e, n, i, o) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        u = function() {
                                            var t, u;
                                            if (!(e < r)) {
                                                if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                g(u = t && ("object" == typeof t || "function" == typeof t) && t.then) ? o ? u.call(t, s(r, n, P, o), s(r, n, H, o)) : u.call(t, s(++r, n, P, o), s(r, n, H, o), s(r, n, P, n.notifyWith)) : (i !== P && (a = void 0, l = [t]), (o || n.resolveWith)(a, l))
                                            }
                                        },
                                        c = o ? u : function() { try { u() } catch (u) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(u, c.stackTrace), r <= e + 1 && (i !== H && (a = void 0, l = [u]), n.rejectWith(a, l)) } };
                                    e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                }
                            }
                            return w.Deferred(function(t) { n[0][3].add(s(0, t, g(o) ? o : P, t.notifyWith)), n[1][3].add(s(0, t, g(e) ? e : P)), n[2][3].add(s(0, t, g(i) ? i : H)) }).promise()
                        },
                        promise: function(t) { return null != t ? w.extend(t, o) : o }
                    },
                    r = {};
                return w.each(n, function(t, e) {
                    var s = e[2],
                        a = e[5];
                    o[e[1]] = s.add, a && s.add(function() { i = a }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), r[e[0]] = function() { return r[e[0] + "With"](this === r ? void 0 : this, arguments), this }, r[e[0] + "With"] = s.fireWith
                }), o.promise(r), e && e.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = r.call(arguments),
                    s = w.Deferred(),
                    a = function(t) { return function(n) { i[t] = this, o[t] = 1 < arguments.length ? r.call(arguments) : n, --e || s.resolveWith(i, o) } };
                if (e <= 1 && (M(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || g(o[n] && o[n].then))) return s.then();
                for (; n--;) M(o[n], a(n), s.reject);
                return s.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function(e, n) { t.console && t.console.warn && e && F.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n) }, w.readyException = function(e) { t.setTimeout(function() { throw e }) };
        var W = w.Deferred();

        function B() { i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready() }
        w.fn.ready = function(t) { return W.then(t).catch(function(t) { w.readyException(t) }), this }, w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || W.resolveWith(i, [w])
            }
        }), w.ready.then = W.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
        var U = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === b(n))
                    for (a in o = !0, n) U(t, e, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, g(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) { return u.call(w(t), n) })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            _ = /^-ms-/,
            z = /-([a-z])/g;

        function V(t, e) { return e.toUpperCase() }

        function Q(t) { return t.replace(_, "ms-").replace(z, V) }
        var X = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };

        function G() { this.expando = w.expando + G.uid++ }
        G.uid = 1, G.prototype = {
            cache: function(t) { var e = t[this.expando]; return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[Q(e)] = n;
                else
                    for (i in e) o[Q(i)] = e[i];
                return o
            },
            get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)] },
            access: function(t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) },
            remove: function(t, e) { var n, i = t[this.expando]; if (void 0 !== i) { if (void 0 !== e) { n = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in i ? [e] : e.match(q) || []).length; for (; n--;) delete i[e[n]] }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
            hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !w.isEmptyObject(e) }
        };
        var Y = new G,
            J = new G,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;

        function tt(t, e, n) {
            var i, o;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try { n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o) } catch (t) {}
                    J.set(t, e, n)
                } else n = void 0;
            return n
        }
        w.extend({ hasData: function(t) { return J.hasData(t) || Y.hasData(t) }, data: function(t, e, n) { return J.access(t, e, n) }, removeData: function(t, e) { J.remove(t, e) }, _data: function(t, e, n) { return Y.access(t, e, n) }, _removeData: function(t, e) { Y.remove(t, e) } }), w.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = J.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), tt(r, i, o[i]));
                        Y.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() { J.set(this, t) }) : U(this, function(e) {
                    var n;
                    if (r && void 0 === e) return void 0 !== (n = J.get(r, t)) ? n : void 0 !== (n = tt(r, t)) ? n : void 0;
                    this.each(function() { J.set(this, t, e) })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(t) { return this.each(function() { J.remove(this, t) }) }
        }), w.extend({
            queue: function(t, e, n) { var i; if (t) return i = Y.get(t, e = (e || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = Y.access(t, e, w.makeArray(n)) : i.push(n)), i || [] },
            dequeue: function(t, e) {
                var n = w.queue(t, e = e || "fx"),
                    i = n.length,
                    o = n.shift(),
                    r = w._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() { w.dequeue(t, e) }, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) { var n = e + "queueHooks"; return Y.get(t, n) || Y.access(t, n, { empty: w.Callbacks("once memory").add(function() { Y.remove(t, [e + "queue", n]) }) }) }
        }), w.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = w.queue(this, t, e);
                    w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
                })
            },
            dequeue: function(t) { return this.each(function() { w.dequeue(this, t) }) },
            clearQueue: function(t) { return this.queue(t || "fx", []) },
            promise: function(t, e) {
                var n, i = 1,
                    o = w.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {--i || o.resolveWith(r, [r]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Y.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            ot = i.documentElement,
            rt = function(t) { return w.contains(t.ownerDocument, t) },
            st = { composed: !0 };
        ot.getRootNode && (rt = function(t) { return w.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument });
        var at = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === w.css(t, "display") },
            lt = function(t, e, n, i) { var o, r, s = {}; for (r in e) s[r] = t.style[r], t.style[r] = e[r]; for (r in o = n.apply(t, i || []), e) t.style[r] = s[r]; return o };

        function ut(t, e, n, i) {
            var o, r, s = 20,
                a = i ? function() { return i.cur() } : function() { return w.css(t, e, "") },
                l = a(),
                u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
                c = t.nodeType && (w.cssNumber[e] || "px" !== u && +l) && nt.exec(w.css(t, e));
            if (c && c[3] !== u) {
                for (u = u || c[3], c = +(l /= 2) || 1; s--;) w.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
                w.style(t, e, (c *= 2) + u), n = n || []
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }
        var ct = {};

        function ft(t, e) { for (var n, i, o, r, s, a, l, u = [], c = 0, f = t.length; c < f; c++)(i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = Y.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && at(i) && (u[c] = (l = s = r = void 0, s = (o = i).ownerDocument, (l = ct[a = o.nodeName]) || (r = s.body.appendChild(s.createElement(a)), l = w.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ct[a] = l)))) : "none" !== n && (u[c] = "none", Y.set(i, "display", n))); for (c = 0; c < f; c++) null != u[c] && (t[c].style.display = u[c]); return t }
        w.fn.extend({ show: function() { return ft(this, !0) }, hide: function() { return ft(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { at(this) ? w(this).show() : w(this).hide() }) } });
        var pt = /^(?:checkbox|radio)$/i,
            dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ht = /^$|^module$|\/(?:java|ecma)script/i,
            gt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

        function mt(t, e) { var n; return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? w.merge([t], n) : n }

        function vt(t, e) { for (var n = 0, i = t.length; n < i; n++) Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval")) }
        gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td;
        var yt, bt, xt = /<|&#?\w+;/;

        function wt(t, e, n, i, o) {
            for (var r, s, a, l, u, c, f = e.createDocumentFragment(), p = [], d = 0, h = t.length; d < h; d++)
                if ((r = t[d]) || 0 === r)
                    if ("object" === b(r)) w.merge(p, r.nodeType ? [r] : r);
                    else if (xt.test(r)) {
                for (s = s || f.appendChild(e.createElement("div")), a = (dt.exec(r) || ["", ""])[1].toLowerCase(), s.innerHTML = (l = gt[a] || gt._default)[1] + w.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
                w.merge(p, s.childNodes), (s = f.firstChild).textContent = ""
            } else p.push(e.createTextNode(r));
            for (f.textContent = "", d = 0; r = p[d++];)
                if (i && -1 < w.inArray(r, i)) o && o.push(r);
                else if (u = rt(r), s = mt(f.appendChild(r), "script"), u && vt(s), n)
                for (c = 0; r = s[c++];) ht.test(r.type || "") && n.push(r);
            return f
        }
        yt = i.createDocumentFragment().appendChild(i.createElement("div")), (bt = i.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), h.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
        var Tt = /^key/,
            Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Et = /^([^.]*)(?:\.(.+)|)/;

        function St() { return !0 }

        function $t() { return !1 }

        function kt(t, e) { return t === function() { try { return i.activeElement } catch (t) {} }() == ("focus" === e) }

        function Dt(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) { for (a in "string" != typeof n && (i = i || n, n = void 0), e) Dt(t, a, n, i, e[a], r); return t }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = $t;
            else if (!o) return t;
            return 1 === r && (s = o, (o = function(t) { return w().off(t), s.apply(this, arguments) }).guid = s.guid || (s.guid = w.guid++)), t.each(function() { w.event.add(this, e, o, i, n) })
        }

        function At(t, e, n) {
            n ? (Y.set(t, e, !1), w.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var i, o, s = Y.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (s.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (s = r.call(arguments), Y.set(this, e, s), i = n(this, e), this[e](), s !== (o = Y.get(this, e)) || i ? Y.set(this, e, !1) : o = {}, s !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value
                    } else s.length && (Y.set(this, e, { value: w.event.trigger(w.extend(s[0], w.Event.prototype), s.slice(1), this) }), t.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(t, e) && w.event.add(t, e, St)
        }
        w.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, p, d, h, g, m = Y.get(t);
                if (m)
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(ot, o), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) { return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0 }), u = (e = (e || "").match(q) || [""]).length; u--;) d = g = (a = Et.exec(e[u]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, f = w.event.special[d = (o ? f.delegateType : f.bindType) || d] || {}, c = w.extend({ type: d, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && w.expr.match.needsContext.test(o), namespace: h.join(".") }, r), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, p, d, h, g, m = Y.hasData(t) && Y.get(t);
                if (m && (l = m.events)) {
                    for (u = (e = (e || "").match(q) || [""]).length; u--;)
                        if (d = g = (a = Et.exec(e[u]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                            for (f = w.event.special[d] || {}, p = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            s && !p.length && (f.teardown && !1 !== f.teardown.call(t, h, m.handle) || w.removeEvent(t, d, m.handle), delete l[d])
                        } else
                            for (d in l) w.event.remove(t, d + e[u], n, i, !0);
                    w.isEmptyObject(l) && Y.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, s, a = w.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Y.get(this, "events") || {})[a.type] || [],
                    c = w.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (s = w.event.handlers.call(this, a, u), e = 0;
                        (o = s[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < w(o, this).index(u) : w.find(o, this, null, [u]).length), s[o] && r.push(i);
                            r.length && a.push({ elem: u, handlers: r })
                        }
                return u = this, l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a
            },
            addProp: function(t, e) { Object.defineProperty(w.Event.prototype, t, { enumerable: !0, configurable: !0, get: g(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
            fix: function(t) { return t[w.expando] ? t : new w.Event(t) },
            special: { load: { noBubble: !0 }, click: { setup: function(t) { var e = this || t; return pt.test(e.type) && e.click && D(e, "input") && At(e, "click", St), !1 }, trigger: function(t) { var e = this || t; return pt.test(e.type) && e.click && D(e, "input") && At(e, "click"), !0 }, _default: function(t) { var e = t.target; return pt.test(e.type) && e.click && D(e, "input") && Y.get(e, "click") || D(e, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
        }, w.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, w.Event = function(t, e) {
            if (!(this instanceof w.Event)) return new w.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : $t, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
        }, w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: $t,
            isPropagationStopped: $t,
            isImmediatePropagationStopped: $t,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && Tt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ct.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, w.event.addProp), w.each({ focus: "focusin", blur: "focusout" }, function(t, e) { w.event.special[t] = { setup: function() { return At(this, t, kt), !1 }, trigger: function() { return At(this, t), !0 }, delegateType: e } }), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            w.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget,
                        o = t.handleObj;
                    return i && (i === this || w.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), w.fn.extend({ on: function(t, e, n, i) { return Dt(this, t, e, n, i) }, one: function(t, e, n, i) { return Dt(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, o; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (o in t) this.off(o, e, t[o]); return this } return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = $t), this.each(function() { w.event.remove(this, t, n, e) }) } });
        var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            jt = /<script|<style|<link/i,
            Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function It(t, e) { return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t }

        function Rt(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function qt(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

        function Pt(t, e) {
            var n, i, o, r, s, a, l, u;
            if (1 === e.nodeType) {
                if (Y.hasData(t) && (r = Y.access(t), s = Y.set(e, r), u = r.events))
                    for (o in delete s.handle, s.events = {}, u)
                        for (n = 0, i = u[o].length; n < i; n++) w.event.add(e, o, u[o][n]);
                J.hasData(t) && (a = J.access(t), l = w.extend({}, a), J.set(e, l))
            }
        }

        function Ht(t, e, n, i) {
            e = s.apply([], e);
            var o, r, a, l, u, c, f = 0,
                p = t.length,
                d = p - 1,
                m = e[0],
                v = g(m);
            if (v || 1 < p && "string" == typeof m && !h.checkClone && Ot.test(m)) return t.each(function(o) {
                var r = t.eq(o);
                v && (e[0] = m.call(this, o, r.html())), Ht(r, e, n, i)
            });
            if (p && (r = (o = wt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (l = (a = w.map(mt(o, "script"), Rt)).length; f < p; f++) u = o, f !== d && (u = w.clone(u, !0, !0), l && w.merge(a, mt(u, "script"))), n.call(t[f], u, f);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, w.map(a, qt), f = 0; f < l; f++) ht.test((u = a[f]).type || "") && !Y.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : y(u.textContent.replace(Lt, ""), u, c))
            }
            return t
        }

        function Mt(t, e, n) { for (var i, o = e ? w.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || w.cleanData(mt(i)), i.parentNode && (n && rt(i) && vt(mt(i, "script")), i.parentNode.removeChild(i)); return t }
        w.extend({
            htmlPrefilter: function(t) { return t.replace(Nt, "<$1></$2>") },
            clone: function(t, e, n) {
                var i, o, r, s, a, l, u, c = t.cloneNode(!0),
                    f = rt(t);
                if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                    for (s = mt(c), i = 0, o = (r = mt(t)).length; i < o; i++) a = r[i], "input" === (u = (l = s[i]).nodeName.toLowerCase()) && pt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
                if (e)
                    if (n)
                        for (r = r || mt(t), s = s || mt(c), i = 0, o = r.length; i < o; i++) Pt(r[i], s[i]);
                    else Pt(t, c);
                return 0 < (s = mt(c, "script")).length && vt(s, !f && mt(t, "script")), c
            },
            cleanData: function(t) {
                for (var e, n, i, o = w.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (X(n)) {
                        if (e = n[Y.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                            n[Y.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), w.fn.extend({
            detach: function(t) { return Mt(this, t, !0) },
            remove: function(t) { return Mt(this, t) },
            text: function(t) { return U(this, function(t) { return void 0 === t ? w.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
            append: function() { return Ht(this, arguments, function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t) }) },
            prepend: function() {
                return Ht(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = It(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() { return Ht(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return Ht(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(mt(t, !1)), t.textContent = ""); return this },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return w.clone(this, t, e) }) },
            html: function(t) {
                return U(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !jt.test(t) && !gt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = w.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(mt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Ht(this, arguments, function(e) {
                    var n = this.parentNode;
                    w.inArray(this, t) < 0 && (w.cleanData(mt(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { w.fn[t] = function(t) { for (var n, i = [], o = w(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), w(o[s])[e](n), a.apply(i, n.get()); return this.pushStack(i) } });
        var Ft = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
            Wt = function(e) { var n = e.ownerDocument.defaultView; return n && n.opener || (n = t), n.getComputedStyle(e) },
            Bt = new RegExp(it.join("|"), "i");

        function Ut(t, e, n) { var i, o, r, s, a = t.style; return (n = n || Wt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || rt(t) || (s = w.style(t, e)), !h.pixelBoxStyles() && Ft.test(s) && Bt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s }

        function _t(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(u).appendChild(c);
                    var e = t.getComputedStyle(c);
                    o = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), r = 36 === n(e.width), c.style.position = "absolute", s = 12 === n(c.offsetWidth / 3), ot.removeChild(u), c = null
                }
            }

            function n(t) { return Math.round(parseFloat(t)) }
            var o, r, s, a, l, u = i.createElement("div"),
                c = i.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), a }, pixelPosition: function() { return e(), o }, reliableMarginLeft: function() { return e(), l }, scrollboxSize: function() { return e(), s } }))
        }();
        var zt = ["Webkit", "Moz", "ms"],
            Vt = i.createElement("div").style,
            Qt = {};

        function Xt(t) {
            return w.cssProps[t] || Qt[t] || (t in Vt ? t : Qt[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
                    if ((t = zt[n] + e) in Vt) return t
            }(t) || t)
        }
        var Gt = /^(none|table(?!-c[ea]).+)/,
            Yt = /^--/,
            Jt = { position: "absolute", visibility: "hidden", display: "block" },
            Kt = { letterSpacing: "0", fontWeight: "400" };

        function Zt(t, e, n) { var i = nt.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

        function te(t, e, n, i, o, r) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += w.css(t, n + it[s], !0, o)), i ? ("content" === n && (l -= w.css(t, "padding" + it[s], !0, o)), "margin" !== n && (l -= w.css(t, "border" + it[s] + "Width", !0, o))) : (l += w.css(t, "padding" + it[s], !0, o), "padding" !== n ? l += w.css(t, "border" + it[s] + "Width", !0, o) : a += w.css(t, "border" + it[s] + "Width", !0, o));
            return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
        }

        function ee(t, e, n) {
            var i = Wt(t),
                o = (!h.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
                r = o,
                s = Ut(t, e, i),
                a = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Ft.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!h.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === w.css(t, "boxSizing", !1, i), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + te(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
        }

        function ne(t, e, n, i, o) { return new ne.prototype.init(t, e, n, i, o) }
        w.extend({
            cssHooks: { opacity: { get: function(t, e) { if (e) { var n = Ut(t, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = Q(e),
                        l = Yt.test(e),
                        u = t.style;
                    if (l || (e = Xt(a)), s = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];
                    "string" == (r = typeof n) && (o = nt.exec(n)) && o[1] && (n = ut(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) { var o, r, s, a = Q(e); return Yt.test(e) || (e = Xt(a)), (s = w.cssHooks[e] || w.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Ut(t, e, i)), "normal" === o && e in Kt && (o = Kt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o }
        }), w.each(["height", "width"], function(t, e) {
            w.cssHooks[e] = {
                get: function(t, n, i) { if (n) return !Gt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, i) : lt(t, Jt, function() { return ee(t, e, i) }) },
                set: function(t, n, i) {
                    var o, r = Wt(t),
                        s = !h.scrollboxSize() && "absolute" === r.position,
                        a = (s || i) && "border-box" === w.css(t, "boxSizing", !1, r),
                        l = i ? te(t, e, i, a, r) : 0;
                    return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - te(t, e, "border", !1, r) - .5)), l && (o = nt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Zt(0, n, l)
                }
            }
        }), w.cssHooks.marginLeft = _t(h.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function(t, e) { w.cssHooks[t + e] = { expand: function(n) { for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + it[i] + e] = r[i] || r[i - 2] || r[0]; return o } }, "margin" !== t && (w.cssHooks[t + e].set = Zt) }), w.fn.extend({
            css: function(t, e) {
                return U(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) { for (i = Wt(t), o = e.length; s < o; s++) r[e[s]] = w.css(t, e[s], !1, i); return r }
                    return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
                }, t, e, 1 < arguments.length)
            }
        }), ((w.Tween = ne).prototype = { constructor: ne, init: function(t, e, n, i, o, r) { this.elem = t, this.prop = n, this.easing = o || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px") }, cur: function() { var t = ne.propHooks[this.prop]; return t && t.get ? t.get(this) : ne.propHooks._default.get(this) }, run: function(t) { var e, n = ne.propHooks[this.prop]; return this.pos = e = this.options.duration ? w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this } }).init.prototype = ne.prototype, (ne.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Xt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit) } } }).scrollTop = ne.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, w.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, w.fx = ne.prototype.init, w.fx.step = {};
        var ie, oe, re, se, ae = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;

        function ue() { oe && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ue) : t.setTimeout(ue, w.fx.interval), w.fx.tick()) }

        function ce() { return t.setTimeout(function() { ie = void 0 }), ie = Date.now() }

        function fe(t, e) {
            var n, i = 0,
                o = { height: t };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = it[i])] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function pe(t, e, n) {
            for (var i, o = (de.tweeners[e] || []).concat(de.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function de(t, e, n) {
            var i, o, r = 0,
                s = de.prefilters.length,
                a = w.Deferred().always(function() { delete l.elem }),
                l = function() { if (o) return !1; for (var e = ie || ce(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(i); return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1) },
                u = a.promise({
                    elem: t,
                    props: w.extend({}, e),
                    opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ie || ce(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) { var i = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(i), i },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (function(t, e) {
                    var n, i, o, r, s;
                    for (n in t)
                        if (o = e[i = Q(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = w.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                        else e[i] = o
                }(c, u.opts.specialEasing); r < s; r++)
                if (i = de.prefilters[r].call(u, t, c, u.opts)) return g(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
            return w.map(c, pe, u), g(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u
        }
        w.Animation = w.extend(de, {
            tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return ut(n.elem, t, nt.exec(e), n), n }] },
            tweener: function(t, e) { g(t) ? (e = t, t = ["*"]) : t = t.match(q); for (var n, i = 0, o = t.length; i < o; i++)(de.tweeners[n = t[i]] = de.tweeners[n] || []).unshift(e) },
            prefilters: [function(t, e, n) {
                var i, o, r, s, a, l, u, c, f = "width" in e || "height" in e,
                    p = this,
                    d = {},
                    h = t.style,
                    g = t.nodeType && at(t),
                    m = Y.get(t, "fxshow");
                for (i in n.queue || (null == (s = w._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, p.always(function() { p.always(function() { s.unqueued--, w.queue(t, "fx").length || s.empty.fire() }) })), e)
                    if (ae.test(o = e[i])) {
                        if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        d[i] = m && m[i] || w.style(t, i)
                    }
                if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(d))
                    for (i in f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = Y.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (ft([t], !0), u = t.style.display || u, c = w.css(t, "display"), ft([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (l || (p.done(function() { h.display = u }), null == u && (u = "none" === (c = h.display) ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(t, "fxshow", { display: u }), r && (m.hidden = !g), g && ft([t], !0), p.done(function() { for (i in g || ft([t]), Y.remove(t, "fxshow"), d) w.style(t, i, d[i]) })), l = pe(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) { e ? de.prefilters.unshift(t) : de.prefilters.push(t) }
        }), w.speed = function(t, e, n) { var i = t && "object" == typeof t ? w.extend({}, t) : { complete: n || !n && e || g(t) && t, duration: t, easing: n && e || e && !g(e) && e }; return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue) }, i }, w.fn.extend({
            fadeTo: function(t, e, n, i) { return this.filter(at).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) },
            animate: function(t, e, n, i) {
                var o = w.isEmptyObject(t),
                    r = w.speed(e, n, i),
                    s = function() {
                        var e = de(this, w.extend({}, t), r);
                        (o || Y.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = w.timers,
                        s = Y.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && le.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || w.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, n = Y.get(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        r = w.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, w.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(t, e) {
            var n = w.fn[e];
            w.fn[e] = function(t, i, o) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(fe(e, !0), t, i, o) }
        }), w.each({ slideDown: fe("show"), slideUp: fe("hide"), slideToggle: fe("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { w.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } }), w.timers = [], w.fx.tick = function() {
            var t, e = 0,
                n = w.timers;
            for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || w.fx.stop(), ie = void 0
        }, w.fx.timer = function(t) { w.timers.push(t), w.fx.start() }, w.fx.interval = 13, w.fx.start = function() { oe || (oe = !0, ue()) }, w.fx.stop = function() { oe = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function(e, n) {
            return e = w.fx && w.fx.speeds[e] || e, this.queue(n = n || "fx", function(n, i) {
                var o = t.setTimeout(n, e);
                i.stop = function() { t.clearTimeout(o) }
            })
        }, re = i.createElement("input"), se = i.createElement("select").appendChild(i.createElement("option")), re.type = "checkbox", h.checkOn = "" !== re.value, h.optSelected = se.selected, (re = i.createElement("input")).value = "t", re.type = "radio", h.radioValue = "t" === re.value;
        var he, ge = w.expr.attrHandle;
        w.fn.extend({ attr: function(t, e) { return U(this, w.attr, t, e, 1 < arguments.length) }, removeAttr: function(t) { return this.each(function() { w.removeAttr(this, t) }) } }), w.extend({
            attr: function(t, e, n) { var i, o, r = t.nodeType; if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === r && w.isXMLDoc(t) || (o = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i) },
            attrHooks: { type: { set: function(t, e) { if (!h.radioValue && "radio" === e && D(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(q);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), he = { set: function(t, e, n) { return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ge[e] || w.find.attr;
            ge[e] = function(t, e, i) { var o, r, s = e.toLowerCase(); return i || (r = ge[s], ge[s] = o, o = null != n(t, e, i) ? s : null, ge[s] = r), o }
        });
        var me = /^(?:input|select|textarea|button)$/i,
            ve = /^(?:a|area)$/i;

        function ye(t) { return (t.match(q) || []).join(" ") }

        function be(t) { return t.getAttribute && t.getAttribute("class") || "" }

        function xe(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(q) || [] }
        w.fn.extend({ prop: function(t, e) { return U(this, w.prop, t, e, 1 < arguments.length) }, removeProp: function(t) { return this.each(function() { delete this[w.propFix[t] || t] }) } }), w.extend({ prop: function(t, e, n) { var i, o, r = t.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(t) || (o = w.propHooks[e = w.propFix[e] || e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = w.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), h.optSelected || (w.propHooks.selected = { get: function(t) { return null }, set: function(t) {} }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { w.propFix[this.toLowerCase()] = this }), w.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (g(t)) return this.each(function(e) { w(this).addClass(t.call(this, e, be(this))) });
                if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = ye(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (g(t)) return this.each(function(e) { w(this).removeClass(t.call(this, e, be(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            o !== (a = ye(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function(n) { w(this).toggleClass(t.call(this, n, be(this), e), e) }) : this.each(function() {
                    var e, o, r, s;
                    if (i)
                        for (o = 0, r = w(this), s = xe(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = be(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + ye(be(n)) + " ").indexOf(e)) return !0;
                return !1
            }
        });
        var we = /\r/g;
        w.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = g(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, w(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function(t) { return null == t ? "" : t + "" })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(we, "") : null == n ? "" : n : void 0
            }
        }), w.extend({
            valHooks: {
                option: { get: function(t) { var e = w.find.attr(t, "value"); return null != e ? e : ye(w.text(t)) } },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options,
                            r = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (e = w(n).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) { for (var n, i, o = t.options, r = w.makeArray(e), s = o.length; s--;)((i = o[s]).selected = -1 < w.inArray(w.valHooks.option.get(i), r)) && (n = !0); return n || (t.selectedIndex = -1), r }
                }
            }
        }), w.each(["radio", "checkbox"], function() { w.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e) } }, h.checkOn || (w.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), h.focusin = "onfocusin" in t;
        var Te = /^(?:focusinfocus|focusoutblur)$/,
            Ce = function(t) { t.stopPropagation() };
        w.extend(w.event, {
            trigger: function(e, n, o, r) {
                var s, a, l, u, c, p, d, h, v = [o || i],
                    y = f.call(e, "type") ? e.type : e,
                    b = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = h = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !Te.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[y] || {}, r || !d.trigger || !1 !== d.trigger.apply(o, n))) {
                    if (!r && !d.noBubble && !m(o)) {
                        for (Te.test((u = d.delegateType || y) + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                        l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
                    }
                    for (s = 0;
                        (a = v[s++]) && !e.isPropagationStopped();) h = a, e.type = 1 < s ? u : d.bindType || y, (p = (Y.get(a, "events") || {})[e.type] && Y.get(a, "handle")) && p.apply(a, n), (p = c && a[c]) && p.apply && X(a) && (e.result = p.apply(a, n), !1 === e.result && e.preventDefault());
                    return e.type = y, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !X(o) || c && g(o[y]) && !m(o) && ((l = o[c]) && (o[c] = null), w.event.triggered = y, e.isPropagationStopped() && h.addEventListener(y, Ce), o[y](), e.isPropagationStopped() && h.removeEventListener(y, Ce), w.event.triggered = void 0, l && (o[c] = l)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = w.extend(new w.Event, n, { type: t, isSimulated: !0 });
                w.event.trigger(i, null, e)
            }
        }), w.fn.extend({ trigger: function(t, e) { return this.each(function() { w.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return w.event.trigger(t, e, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var n = function(t) { w.event.simulate(e, t.target, w.event.fix(t)) };
            w.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Y.access(i, e);
                    o || i.addEventListener(t, n, !0), Y.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Y.access(i, e) - 1;
                    o ? Y.access(i, e, o) : (i.removeEventListener(t, n, !0), Y.remove(i, e))
                }
            }
        });
        var Ee = t.location,
            Se = Date.now(),
            $e = /\?/;
        w.parseXML = function(e) { var n; if (!e || "string" != typeof e) return null; try { n = (new t.DOMParser).parseFromString(e, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n };
        var ke = /\[\]$/,
            De = /\r?\n/g,
            Ae = /^(?:submit|button|image|reset|file)$/i,
            Ne = /^(?:input|select|textarea|keygen)/i;

        function je(t, e, n, i) {
            var o;
            if (Array.isArray(e)) w.each(e, function(e, o) { n || ke.test(t) ? i(t, o) : je(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i) });
            else if (n || "object" !== b(e)) i(t, e);
            else
                for (o in e) je(t + "[" + o + "]", e[o], n, i)
        }
        w.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = g(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function() { o(this.name, this.value) });
            else
                for (n in t) je(n, t[n], e, o);
            return i.join("&")
        }, w.fn.extend({ serialize: function() { return w.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = w.prop(this, "elements"); return t ? w.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !w(this).is(":disabled") && Ne.test(this.nodeName) && !Ae.test(t) && (this.checked || !pt.test(t)) }).map(function(t, e) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function(t) { return { name: e.name, value: t.replace(De, "\r\n") } }) : { name: e.name, value: n.replace(De, "\r\n") } }).get() } });
        var Oe = /%20/g,
            Le = /#.*$/,
            Ie = /([?&])_=[^&]*/,
            Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            qe = /^(?:GET|HEAD)$/,
            Pe = /^\/\//,
            He = {},
            Me = {},
            Fe = "*/".concat("*"),
            We = i.createElement("a");

        function Be(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(q) || [];
                if (g(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function Ue(t, e, n, i) {
            var o = {},
                r = t === Me;

            function s(a) { var l; return o[a] = !0, w.each(t[a] || [], function(t, a) { var u = a(e, n, i); return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1) }), l }
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function _e(t, e) { var n, i, o = w.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]); return i && w.extend(!0, t, i), t }
        We.href = Ee.href, w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ee.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Fe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) { return e ? _e(_e(t, w.ajaxSettings), e) : _e(w.ajaxSettings, t) },
            ajaxPrefilter: Be(He),
            ajaxTransport: Be(Me),
            ajax: function(e, n) {
                "object" == typeof e && (n = e, e = void 0);
                var o, r, s, a, l, u, c, f, p, d, h = w.ajaxSetup({}, n = n || {}),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                    v = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    b = h.statusCode || {},
                    x = {},
                    T = {},
                    C = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = Re.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = a[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() { return c ? s : null },
                        setRequestHeader: function(t, e) { return null == c && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t, x[t] = e), this },
                        overrideMimeType: function(t) { return null == c && (h.mimeType = t), this },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) E.always(t[E.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) { var e = t || C; return o && o.abort(e), S(0, e), this }
                    };
                if (v.promise(E), h.url = ((e || h.url || Ee.href) + "").replace(Pe, Ee.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) { u = i.createElement("a"); try { u.href = h.url, u.href = u.href, h.crossDomain = We.protocol + "//" + We.host != u.protocol + "//" + u.host } catch (e) { h.crossDomain = !0 } }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Ue(He, h, n, E), c) return E;
                for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qe.test(h.type), r = h.url.replace(Le, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Oe, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += ($e.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(Ie, "$1"), d = ($e.test(r) ? "&" : "?") + "_=" + Se++ + d), h.url = r + d), h.ifModified && (w.lastModified[r] && E.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && E.setRequestHeader("If-None-Match", w.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                if (C = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), o = Ue(Me, h, n, E)) {
                    if (E.readyState = 1, f && m.trigger("ajaxSend", [E, h]), c) return E;
                    h.async && 0 < h.timeout && (l = t.setTimeout(function() { E.abort("timeout") }, h.timeout));
                    try { c = !1, o.send(x, S) } catch (e) {
                        if (c) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, n, i, a) {
                    var u, p, d, x, T, C = n;
                    c || (c = !0, l && t.clearTimeout(l), o = void 0, s = a || "", E.readyState = 0 < e ? 4 : 0, u = 200 <= e && e < 300 || 304 === e, i && (x = function(t, e, n) {
                        for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) { l.unshift(o); break }
                        if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || t.converters[o + " " + l[0]]) { r = o; break }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(h, E, i)), x = function(t, e, n, i) {
                        var o, r, s, a, l, u = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                        for (r = c.shift(); r;)
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = u[l + " " + r] || u["* " + r]))
                                for (o in u)
                                    if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {!0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1])); break }
                            if (!0 !== s)
                                if (s && t.throws) e = s(e);
                                else try { e = s(e) } catch (t) { return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r } }
                        }
                        return { state: "success", data: e }
                    }(h, x, E, u), u ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[r] = T), (T = E.getResponseHeader("etag")) && (w.etag[r] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, p = x.data, u = !(d = x.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", u ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? p : d]), y.fireWith(g, [E, C]), f && (m.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                }
                return E
            },
            getJSON: function(t, e, n) { return w.get(t, e, n, "json") },
            getScript: function(t, e) { return w.get(t, void 0, e, "script") }
        }), w.each(["get", "post"], function(t, e) { w[e] = function(t, n, i, o) { return g(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({ url: t, type: e, dataType: o, data: n, success: i }, w.isPlainObject(t) && t)) } }), w._evalUrl = function(t, e) { return w.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(t) { w.globalEval(t, e) } }) }, w.fn.extend({
            wrapAll: function(t) { var e; return this[0] && (g(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
            wrapInner: function(t) {
                return g(t) ? this.each(function(e) { w(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = w(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = g(t); return this.each(function(n) { w(this).wrapAll(e ? t.call(this, n) : t) }) },
            unwrap: function(t) { return this.parent(t).not("body").each(function() { w(this).replaceWith(this.childNodes) }), this }
        }), w.expr.pseudos.hidden = function(t) { return !w.expr.pseudos.visible(t) }, w.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, w.ajaxSettings.xhr = function() { try { return new t.XMLHttpRequest } catch (e) {} };
        var ze = { 0: 200, 1223: 204 },
            Ve = w.ajaxSettings.xhr();
        h.cors = !!Ve && "withCredentials" in Ve, h.ajax = Ve = !!Ve, w.ajaxTransport(function(e) {
            var n, i;
            if (h.cors || Ve && !e.crossDomain) return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    n = function(t) { return function() { n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(ze[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && t.setTimeout(function() { n && i() }) }, n = n("abort");
                    try { a.send(e.hasContent && e.data || null) } catch (o) { if (n) throw o }
                },
                abort: function() { n && n() }
            }
        }), w.ajaxPrefilter(function(t) { t.crossDomain && (t.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return w.globalEval(t), t } } }), w.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), w.ajaxTransport("script", function(t) { var e, n; if (t.crossDomain || t.scriptAttrs) return { send: function(o, r) { e = w("<script>").attr(t.scriptAttrs || {}).prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type) }), i.head.appendChild(e[0]) }, abort: function() { n && n() } } });
        var Qe, Xe = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Xe.pop() || w.expando + "_" + Se++; return this[t] = !0, t } }), w.ajaxPrefilter("json jsonp", function(e, n, i) { var o, r, s, a = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ge, "$1" + o) : !1 !== e.jsonp && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() { return s || w.error(o + " was not called"), s[0] }, e.dataTypes[0] = "json", r = t[o], t[o] = function() { s = arguments }, i.always(function() { void 0 === r ? w(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Xe.push(o)), s && g(r) && r(s[0]), s = r = void 0 }), "script" }), h.createHTMLDocument = ((Qe = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qe.childNodes.length), w.parseHTML = function(t, e, n) { return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (h.createHTMLDocument ? ((o = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(o)) : e = i), s = !n && [], (r = A.exec(t)) ? [e.createElement(r[1])] : (r = wt([t], e, s), s && s.length && w(s).remove(), w.merge([], r.childNodes))); var o, r, s }, w.fn.load = function(t, e, n) {
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return -1 < a && (i = ye(t.slice(a)), t = t.slice(0, a)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && w.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function(t) { r = arguments, s.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t) }).always(n && function(t, e) { s.each(function() { n.apply(this, r || [t.responseText, e, t]) }) }), this
        }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { w.fn[e] = function(t) { return this.on(e, t) } }), w.expr.pseudos.animated = function(t) { return w.grep(w.timers, function(e) { return t === e.elem }).length }, w.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u = w.css(t, "position"),
                    c = w(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = c.offset(), r = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (s = (i = c.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + o), "using" in e ? e.using.call(t, f) : c.css(f)
            }
        }, w.fn.extend({
            offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { w.offset.setOffset(this, t, e) }); var e, n, i = this[0]; return i ? i.getClientRects().length ? { top: (e = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset, left: e.left + n.pageXOffset } : { top: 0, left: 0 } : void 0 },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((o = w(t).offset()).top += w.css(t, "borderTopWidth", !0), o.left += w.css(t, "borderLeftWidth", !0))
                    }
                    return { top: e.top - o.top - w.css(i, "marginTop", !0), left: e.left - o.left - w.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent; return t || ot }) }
        }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
            var n = "pageYOffset" === e;
            w.fn[t] = function(i) {
                return U(this, function(t, i, o) {
                    var r;
                    if (m(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), w.each(["top", "left"], function(t, e) { w.cssHooks[e] = _t(h.pixelPosition, function(t, n) { if (n) return n = Ut(t, e), Ft.test(n) ? w(t).position()[e] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function(t, e) {
            w.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(n, i) {
                w.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return U(this, function(e, n, o) { var r; return m(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? w.css(e, n, a) : w.style(e, n, o, a) }, e, s ? o : void 0, s)
                }
            })
        }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) { w.fn[e] = function(t, n) { return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e) } }), w.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), w.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) } }), w.proxy = function(t, e) { var n, i, o; if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return i = r.call(arguments, 2), (o = function() { return t.apply(e || this, i.concat(r.call(arguments))) }).guid = t.guid = t.guid || w.guid++, o }, w.holdReady = function(t) { t ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = D, w.isFunction = g, w.isWindow = m, w.camelCase = Q, w.type = b, w.now = Date.now, w.isNumeric = function(t) { var e = w.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return w });
        var Ye = t.jQuery,
            Je = t.$;
        return w.noConflict = function(e) { return t.$ === w && (t.$ = Je), e && t.jQuery === w && (t.jQuery = Ye), w }, e || (t.jQuery = t.$ = w), w
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) { "use strict"; var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        return t(this).one("bsTransitionEnd", function() { n = !0 }), setTimeout(function() { n || t(i).trigger(t.support.transition.end) }, e), this
    }, t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var n in e)
                if (void 0 !== t.style[n]) return { end: e[n] };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        n = function(n) { t(n).on("click", e, this.close) };
    n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        var i = t(this),
            o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), o = "#" === o ? [] : o;
        var r = t(document).find(o);

        function s() { r.detach().trigger("closed.bs.alert").remove() }
        e && e.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s())
    };
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() { return t.fn.alert = i, this }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) { this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1 };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button");
            o || i.data("bs.button", o = new e(this, "object" == typeof n && n)), "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }
    e.VERSION = "3.4.1", e.DEFAULTS = { loadingText: "loading..." }, e.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() { i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1)) }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) { var n = this.$element.find("input"); "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function() { return t.fn.button = i, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = t(e.target).closest(".btn");
        n.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, n) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                s = "string" == typeof n ? n : r.slide;
            o || i.data("bs.carousel", o = new e(this, r)), "number" == typeof n ? o.to(n) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, e.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, e.prototype.getItemForDirection = function(t, e) { var n = this.getItemIndex(e); return ("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap ? e : this.$items.eq((n + ("prev" == t ? -1 : 1)) % this.$items.length) }, e.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, e.prototype.next = function() { if (!this.sliding) return this.slide("next") }, e.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, e.prototype.slide = function(n, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(n, o),
            s = this.interval,
            a = "next" == n ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var u = r[0],
            c = t.Event("slide.bs.carousel", { relatedTarget: u, direction: a });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", { relatedTarget: u, direction: a });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() { r.removeClass([n, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(p) }, 0) }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() { return t.fn.carousel = i, this };
    var o = function(e) {
        var i = t(this),
            o = i.attr("href");
        o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
        var r = i.attr("data-target") || o,
            s = t(document).find(r);
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), i.data()),
                l = i.attr("data-slide-to");
            l && (a.interval = !1), n.call(s, a), l && s.data("bs.carousel").to(l), e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) { this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };

    function n(e) { var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(document).find(i) }

    function i(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || i.data("bs.collapse", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = { toggle: !0 }, e.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (n = o.data("bs.collapse")) && n.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), n || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var n = t.Event("hide.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]()), this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                if (!t.support.transition) return o.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
            }
        }
    }, e.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, e.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(e, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(n(o), o)
        }, this)).end()
    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() { return t.fn.collapse = o, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var o = t(this);
        o.attr("data-target") || e.preventDefault();
        var r = n(o),
            s = r.data("bs.collapse") ? "toggle" : o.data();
        i.call(r, s)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        n = function(e) { t(e).on("click.bs.dropdown", this.toggle) };

    function i(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? t(document).find(n) : null;
        return i && i.length ? i : e.parent()
    }

    function o(n) {
        n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each(function() {
            var e = t(this),
                o = i(e),
                r = { relatedTarget: this };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }
    n.VERSION = "3.4.1", n.prototype.toggle = function(e) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var r = i(n),
                s = r.hasClass("open");
            if (o(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                var a = { relatedTarget: this };
                if (r.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, n.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var o = t(this);
            if (n.preventDefault(), n.stopPropagation(), !o.is(".disabled, :disabled")) {
                var r = i(o),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(e).trigger("focus"), o.trigger("click");
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(n.target);
                    38 == n.which && 0 < l && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var e = function(e, n) { this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };

    function n(n, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
            r || o.data("bs.modal", r = new e(this, s)), "string" == typeof n ? r[n](i) : s.show && r.show(i)
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, e.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, e.prototype.show = function(n) {
        var i = this,
            o = t.Event("show.bs.modal", { relatedTarget: n });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { i.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", { relatedTarget: n });
            o ? i.$dialog.one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, e.prototype.hide = function(n) { n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal()) }, e.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, e.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, e.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }, e.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, e.prototype.backdrop = function(n) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()) }, this)), this.$backdrop.addClass("in"), !n) return;
            r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() { i.removeBackdrop(), n && n() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
        } else n && n()
    }, e.prototype.handleUpdate = function() { this.adjustDialog() }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }, e.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function(e, i) {
            var o = i.style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
        }))
    }, e.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function(e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
        })
    }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() { return t.fn.modal = i, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            o = i.attr("href"),
            r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(document).find(r),
            a = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), n.call(s, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    var e = ["sanitize", "whiteList", "sanitizeFn"],
        n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function r(e, r) {
        var s = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(s, r)) return -1 === t.inArray(s, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(o));
        for (var a = t(r).filter(function(t, e) { return e instanceof RegExp }), l = 0, u = a.length; l < u; l++)
            if (s.match(a[l])) return !0;
        return !1
    }

    function s(e, n, i) {
        if (0 === e.length) return e;
        if (i && "function" == typeof i) return i(e);
        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = e;
        for (var s = t.map(n, function(t, e) { return e }), a = t(o.body).find("*"), l = 0, u = a.length; l < u; l++) {
            var c = a[l],
                f = c.nodeName.toLowerCase();
            if (-1 !== t.inArray(f, s))
                for (var p = t.map(c.attributes, function(t) { return t }), d = [].concat(n["*"] || [], n[f] || []), h = 0, g = p.length; h < g; h++) r(p[h], d) || c.removeAttribute(p[h].nodeName);
            else c.parentNode.removeChild(c)
        }
        return o.body.innerHTML
    }
    var a = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 }, sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } }, a.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(("hover" == s ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, a.prototype.getDefaults = function() { return a.DEFAULTS }, a.prototype.getOptions = function(n) { var i = this.$element.data(); for (var o in i) i.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete i[o]; return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = { show: n.delay, hide: n.delay }), n.sanitize && (n.template = s(n.template, n.whiteList, n.sanitizeFn)), n }, a.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) { n[t] != i && (e[t] = i) }), e
    }, a.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
            n.timeout = setTimeout(function() { "in" == n.hoverState && n.show() }, n.options.delay.show)
        }
    }, a.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, a.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() { "out" == n.hoverState && n.hide() }, n.options.delay.hide)
        }
    }, a.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var i = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(s);
            u && (s = s.replace(l, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                f = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (u) {
                var d = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && c.bottom + p > h.bottom ? "top" : "top" == s && c.top - p < h.top ? "bottom" : "right" == s && c.right + f > h.width ? "left" : "left" == s && c.left - f < h.left ? "right" : s, o.removeClass(d).addClass(s)
            }
            var g = this.getCalculatedOffset(s, c, f, p);
            this.applyPlacement(g, s);
            var m = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(a.TRANSITION_DURATION) : m()
        }
    }, a.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != r && (e.top = e.top + r - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
            p = f ? 2 * c.left - o + l : 2 * c.top - r + u,
            d = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(p, i[0][d], f)
    }, a.prototype.replaceArrow = function(t, e, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "") }, a.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, a.prototype.hide = function(e) {
        var n = this,
            i = t(this.$tip),
            o = t.Event("hide.bs." + this.type);

        function r() { "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e() }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(a.TRANSITION_DURATION) : r(), this.hoverState = null, this
    }, a.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, a.prototype.hasContent = function() { return this.getTitle() }, a.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? { top: 0, left: 0 } : r ? null : e.offset(),
            a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            l = i ? { width: t(window).width(), height: t(window).height() } : null;
        return t.extend({}, o, a, l, s)
    }, a.prototype.getCalculatedOffset = function(t, e, n, i) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 } : "top" == t ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 } : "left" == t ? { top: e.top + e.height / 2 - i / 2, left: e.left - n } : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width } }, a.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var u = e.left - r,
                c = e.left + r + n;
            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, a.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, a.prototype.getUID = function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, a.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, a.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, a.prototype.enable = function() { this.enabled = !0 }, a.prototype.disable = function() { this.enabled = !1 }, a.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, a.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, a.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null })
    }, a.prototype.sanitizeHtml = function(t) { return s(t, this.options.whiteList, this.options.sanitizeFn) };
    var l = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new a(this, o)), "string" == typeof e && i[e]())
        })
    }, t.fn.tooltip.Constructor = a, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = l, this }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() { return e.DEFAULTS }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof n && n;
            !o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() { return t.fn.popover = n, this }
}(jQuery),
function(t) {
    "use strict";

    function e(n, i) { this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy");
            o || i.data("bs.scrollspy", o = new e(this, "object" == typeof n && n)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), i <= e) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = t(this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]').parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = i, this }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = function(e) { this.element = t(e) };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new e(this)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                s = t.Event("show.bs.tab", { relatedTarget: o[0] });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(document).find(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) })
            }
        }
    }, e.prototype.activate = function(n, i, o) {
        var r = i.find("> .active"),
            s = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);

        function a() { r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? n.addClass("in") : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() }
        r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() { return t.fn.tab = i, this };
    var o = function(e) { e.preventDefault(), n.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
    "use strict";
    var e = function(n, i) {
        this.options = t.extend({}, e.DEFAULTS, i);
        var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix");
            o || i.data("bs.affix", o = new e(this, "object" == typeof n && n)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0, target: window }, e.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed;
        return null != n && o <= n ? "top" : null != i && t - i <= (a ? o : r.top) + (a ? s : e) && "bottom"
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }, e.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, n, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({ top: s - n - r })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() { return t.fn.affix = i, this }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i)
        })
    })
}(jQuery);