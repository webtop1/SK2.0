/* 
 * Modernizr v1.6
 * http://www.modernizr.com
 *
 * Developed by: 
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
window.Modernizr = function(i, e, u) {
    function s(a, b) {
        return ("" + a).indexOf(b) !== -1
    }
    function D(a, b) {
        for (var c in a)
            if (j[a[c]] !== u && (!b || b(a[c], E)))
                return true
    }
    function n(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1);
        c = (a + " " + F.join(c + " ") + c).split(" ");
        return !!D(c, b)
    }
    function S() {
        f.input = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                L[a[b]] = !!(a[b] in h);
            return L
        }
        ("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        f.inputtypes = function(a) {
            for (var b = 0, c, k = a.length; b < 
            k; b++) {
                h.setAttribute("type", a[b]);
                if (c = h.type !== "text") {
                    h.value = M;
                    if (/^range$/.test(h.type) && h.style.WebkitAppearance !== u) {
                        l.appendChild(h);
                        c = e.defaultView;
                        c = c.getComputedStyle && c.getComputedStyle(h, null ).WebkitAppearance !== "textfield" && h.offsetHeight !== 0;
                        l.removeChild(h)
                    } else
                        /^(search|tel)$/.test(h.type) || (c = /^(url|email)$/.test(h.type) ? h.checkValidity && h.checkValidity() === false : h.value != M)
                }
                N[a[b]] = !!c
            }
            return N
        }
        ("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var f = {}, l = e.documentElement, E = e.createElement("modernizr"), j = E.style, h = e.createElement("input"), M = ":)", O = Object.prototype.toString, q = " -webkit- -moz- -o- -ms- -khtml- ".split(" "), F = "Webkit Moz O ms Khtml".split(" "), v = {
        svg: "http://www.w3.org/2000/svg"
    }, d = {}, N = {}, L = {}, P = [], w, Q = function(a) {
        var b = document.createElement("style")
          , c = e.createElement("div");
        b.textContent = a + "{#modernizr{height:3px}}";
        (e.head || e.getElementsByTagName("head")[0]).appendChild(b);
        c.id = "modernizr";
        l.appendChild(c);
        a = c.offsetHeight === 
        3;
        b.parentNode.removeChild(b);
        c.parentNode.removeChild(c);
        return !!a
    }
    , o = function() {
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(b, c) {
            c = c || document.createElement(a[b] || "div");
            b = "on" + b;
            var k = b in c;
            if (!k) {
                c.setAttribute || (c = document.createElement("div"));
                if (c.setAttribute && c.removeAttribute) {
                    c.setAttribute(b, "");
                    k = typeof c[b] == "function";
                    if (typeof c[b] != "undefined")
                        c[b] = u;
                    c.removeAttribute(b)
                }
            }
            return k
        }
    }
    (), G = {}.hasOwnProperty, R;
    R = 
    typeof G !== "undefined" && typeof G.call !== "undefined" ? function(a, b) {
        return G.call(a, b)
    }
     : function(a, b) {
        return b in a && typeof a.constructor.prototype[b] === "undefined"
    }
    ;
    d.flexbox = function() {
        var a = e.createElement("div")
          , b = e.createElement("div");
        (function(k, g, r, x) {
            g += ":";
            k.style.cssText = (g + q.join(r + ";" + g)).slice(0, -g.length) + (x || "")
        }
        )(a, "display", "box", "width:42px;padding:0;");
        b.style.cssText = q.join("box-flex:1;") + "width:10px;";
        a.appendChild(b);
        l.appendChild(a);
        var c = b.offsetWidth === 42;
        a.removeChild(b);
        l.removeChild(a);
        return c
    }
    ;
    d.canvas = function() {
        var a = e.createElement("canvas");
        return !!(a.getContext && a.getContext("2d"))
    }
    ;
    d.canvastext = function() {
        return !!(f.canvas && typeof e.createElement("canvas").getContext("2d").fillText == "function")
    }
    ;
    d.webgl = function() {
        var a = e.createElement("canvas");
        try {
            if (a.getContext("webgl"))
                return true
        } catch (b) {}
        try {
            if (a.getContext("experimental-webgl"))
                return true
        } catch (c) {}
        return false
    }
    ;
    d.touch = function() {
        return "ontouchstart" in i || Q("@media (" + q.join("touch-enabled),(") + 
        "modernizr)")
    }
    ;
    d.geolocation = function() {
        return !!navigator.geolocation
    }
    ;
    d.postmessage = function() {
        return !!i.postMessage
    }
    ;
    d.websqldatabase = function() {
        return !!i.openDatabase
    }
    ;
    d.indexedDB = function() {
        for (var a = -1, b = F.length; ++a < b; ) {
            var c = F[a].toLowerCase();
            if (i[c + "_indexedDB"] || i[c + "IndexedDB"])
                return true
        }
        return false
    }
    ;
    d.hashchange = function() {
        return o("hashchange", i) && (document.documentMode === u || document.documentMode > 7)
    }
    ;
    d.history = function() {
        return !!(i.history && history.pushState)
    }
    ;
    d.draganddrop = function() {
        return o("drag") && 
        o("dragstart") && o("dragenter") && o("dragover") && o("dragleave") && o("dragend") && o("drop")
    }
    ;
    d.websockets = function() {
        return "WebSocket" in i
    }
    ;
    d.rgba = function() {
        j.cssText = "background-color:rgba(150,255,150,.5)";
        return s(j.backgroundColor, "rgba")
    }
    ;
    d.hsla = function() {
        j.cssText = "background-color:hsla(120,40%,100%,.5)";
        return s(j.backgroundColor, "rgba") || s(j.backgroundColor, "hsla")
    }
    ;
    d.multiplebgs = function() {
        j.cssText = "background:url(//:),url(//:),red url(//:)";
        return /(url\s*\(.*?){3}/.test(j.background)
    }
    ;
    d.backgroundsize = 
    function() {
        return n("backgroundSize")
    }
    ;
    d.borderimage = function() {
        return n("borderImage")
    }
    ;
    d.borderradius = function() {
        return n("borderRadius", "", function(a) {
            return s(a, "orderRadius")
        }
        )
    }
    ;
    d.boxshadow = function() {
        return n("boxShadow")
    }
    ;
    d.textshadow = function() {
        return e.createElement("div").style.textShadow === ""
    }
    ;
    d.opacity = function() {
        var a = q.join("opacity:.5;") + "";
        j.cssText = a;
        return s(j.opacity, "0.5")
    }
    ;
    d.cssanimations = function() {
        return n("animationName")
    }
    ;
    d.csscolumns = function() {
        return n("columnCount")
    }
    ;
    d.cssgradients = 
    function() {
        var a = ("background-image:" + q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        j.cssText = a;
        return s(j.backgroundImage, "gradient")
    }
    ;
    d.cssreflections = function() {
        return n("boxReflect")
    }
    ;
    d.csstransforms = function() {
        return !!D(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
    }
    ;
    d.csstransforms3d = function() {
        var a = !!D(["perspectiveProperty", "WebkitPerspective", 
        "MozPerspective", "OPerspective", "msPerspective"]);
        if (a)
            a = Q("@media (" + q.join("transform-3d),(") + "modernizr)");
        return a
    }
    ;
    d.csstransitions = function() {
        return n("transitionProperty")
    }
    ;
    d.fontface = function() {
        var a, b = e.head || e.getElementsByTagName("head")[0] || l, c = e.createElement("style"), k = e.implementation || {
            hasFeature: function() {
                return false
            }
        };
        c.type = "text/css";
        b.insertBefore(c, b.firstChild);
        a = c.sheet || c.styleSheet;
        b = k.hasFeature("CSS2", "") ? function(g) {
            if (!(a && g))
                return false;
            var r = false;
            try {
                a.insertRule(g, 
                0);
                r = !/unknown/i.test(a.cssRules[0].cssText);
                a.deleteRule(a.cssRules.length - 1)
            } catch (x) {}
            return r
        }
         : function(g) {
            if (!(a && g))
                return false;
            a.cssText = g;
            return a.cssText.length !== 0 && !/unknown/i.test(a.cssText) && a.cssText.replace(/\r+|\n+/g, "").indexOf(g.split(" ")[0]) === 0
        }
        ;
        f._fontfaceready = function(g) {
            g(f.fontface)
        }
        ;
        return b('@font-face { font-family: "font"; src: "font.ttf"; }')
    }
    ;
    d.video = function() {
        var a = e.createElement("video")
          , b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('video/ogg; codecs="theora"');
            b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"') || a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"')
        }
        return b
    }
    ;
    d.audio = function() {
        var a = e.createElement("audio")
          , b = !!a.canPlayType;
        if (b) {
            b = new Boolean(b);
            b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"');
            b.mp3 = a.canPlayType("audio/mpeg;");
            b.wav = a.canPlayType('audio/wav; codecs="1"');
            b.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
        }
        return b
    }
    ;
    d.localstorage = function() {
        try {
            return "localStorage" in 
            i && i.localStorage !== null 
        } catch (a) {
            return false
        }
    }
    ;
    d.sessionstorage = function() {
        try {
            return "sessionStorage" in i && i.sessionStorage !== null 
        } catch (a) {
            return false
        }
    }
    ;
    d.webWorkers = function() {
        return !!i.Worker
    }
    ;
    d.applicationcache = function() {
        return !!i.applicationCache
    }
    ;
    d.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(v.svg, "svg").createSVGRect
    }
    ;
    d.inlinesvg = function() {
        var a = document.createElement("div");
        a.innerHTML = "<svg/>";
        return (a.firstChild && a.firstChild.namespaceURI) == v.svg
    }
    ;
    d.smil = function() {
        return !!e.createElementNS && 
        /SVG/.test(O.call(e.createElementNS(v.svg, "animate")))
    }
    ;
    d.svgclippaths = function() {
        return !!e.createElementNS && /SVG/.test(O.call(e.createElementNS(v.svg, "clipPath")))
    }
    ;
    for (var H in d)
        if (R(d, H)) {
            w = H.toLowerCase();
            f[w] = d[H]();
            P.push((f[w] ? "" : "no-") + w)
        }
    f.input || S();
    f.crosswindowmessaging = f.postmessage;
    f.historymanagement = f.history;
    f.addTest = function(a, b) {
        a = a.toLowerCase();
        if (!f[a]) {
            b = !!b();
            l.className += " " + (b ? "" : "no-") + a;
            f[a] = b;
            return f
        }
    }
    ;
    j.cssText = "";
    E = h = null ;
    i.attachEvent && function() {
        var a = e.createElement("div");
        a.innerHTML = "<elem></elem>";
        return a.childNodes.length !== 1
    }
    () && function(a, b) {
        function c(p) {
            for (var m = -1; ++m < r; )
                p.createElement(g[m])
        }
        function k(p, m) {
            for (var I = p.length, t = -1, y, J = []; ++t < I; ) {
                y = p[t];
                m = y.media || m;
                J.push(k(y.imports, m));
                J.push(y.cssText)
            }
            return J.join("")
        }
        var g = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|")
          , r = g.length
          , x = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", 
        "gi")
          , T = RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])", "gi")
          , z = b.createDocumentFragment()
          , A = b.documentElement
          , K = A.firstChild
          , B = b.createElement("style")
          , C = b.createElement("body");
        B.media = "all";
        c(b);
        c(z);
        a.attachEvent("onbeforeprint", function() {
            for (var p = -1; ++p < r; )
                for (var m = b.getElementsByTagName(g[p]), I = m.length, t = -1; ++t < I; )
                    if (m[t].className.indexOf("iepp_") < 0)
                        m[t].className += " iepp_" + 
                        g[p];
            K.insertBefore(B, K.firstChild);
            B.styleSheet.cssText = k(b.styleSheets, "all").replace(T, ".iepp_$1");
            z.appendChild(b.body);
            A.appendChild(C);
            C.innerHTML = z.firstChild.innerHTML.replace(x, "<$1bdo")
        }
        );
        a.attachEvent("onafterprint", function() {
            C.innerHTML = "";
            A.removeChild(C);
            K.removeChild(B);
            A.appendChild(z.firstChild)
        }
        )
    }
    (this, document);
    f._enableHTML5 = true;
    f._version = "1.6";
    l.className = l.className.replace(/\bno-js\b/, "") + " js";
    l.className += " " + P.join(" ");
    return f
}
(this, this.document);

/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) {
            b[c] = !0
        }
        ),
        b
    }
    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null  : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
                } catch (f) {}
                p.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b]))
                continue;if (b !== "toJSON")
                return !1
        }
        return !0
    }
    function ba() {
        return !1
    }
    function bb() {
        return !0
    }
    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function bi(a, b) {
        do
            a = a[b];
        while (a && a.nodeType !== 1);return a
    }
    function bj(a, b, c) {
        b = b || 0;
        if (p.isFunction(b))
            return p.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            }
            );
        if (b.nodeType)
            return p.grep(a, function(a, d) {
                return a === b === c
            }
            );
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                return a.nodeType === 1
            }
            );
            if (be.test(b))
                return p.filter(b, d, !c);
            b = p.filter(b, d)
        }
        return p.grep(a, function(a, d) {
            return p.inArray(a, b) >= 0 === c
        }
        )
    }
    function bk(a) {
        var b = bl.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a))
            return;
        var c, d, e, f = p._data(a), g = p._data(b, f), h = f.events;
        if (h) {
            delete g.handle,
            g.events = {};
            for (c in h)
                for (d = 0,
                e = h[c].length; d < e; d++)
                    p.event.add(b, c, h[c][d])
        }
        g.data && (g.data = p.extend({}, g.data))
    }
    function bE(a, b) {
        var c;
        if (b.nodeType !== 1)
            return;
        b.clearAttributes && b.clearAttributes(),
        b.mergeAttributes && b.mergeAttributes(a),
        c = b.nodeName.toLowerCase(),
        c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML),
        p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
        b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text),
        b.removeAttribute(p.expando)
    }
    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function bG(a) {
        bv.test(a.type) && (a.defaultChecked = a.checked)
    }
    function bY(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = bW.length;
        while (e--) {
            b = bW[e] + c;
            if (b in a)
                return b
        }
        return d
    }
    function bZ(a, b) {
        return a = b || a,
        p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    }
    function b$(a, b) {
        var c, d, e = [], f = 0, g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style)
                continue;e[f] = p._data(c, "olddisplay"),
            b ? (!e[f] && c.style.display === "none" && (c.style.display = ""),
            c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"),
            !e[f] && d !== "none" && p._data(c, "olddisplay", d))
        }
        for (f = 0; f < g; f++) {
            c = a[f];
            if (!c.style)
                continue;if (!b || c.style.display === "none" || c.style.display === "")
                c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }
    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0
          , f = 0;
        for (; e < 4; e += 2)
            c === "margin" && (f += p.css(a, c + bV[e], !0)),
            d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0,
            c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
        return f
    }
    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight
          , e = !0
          , f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null ) {
            d = bH(a, b);
            if (d < 0 || d == null )
                d = a.style[b];
            if (bQ.test(d))
                return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function cc(a) {
        if (bS[a])
            return bS[a];
        var b = p("<" + a + ">").appendTo(e.body)
          , c = b.css("display");
        b.remove();
        if (c === "none" || c === "") {
            bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!bJ || !bI.createElement)
                bJ = (bI.contentWindow || bI.contentDocument).document,
                bJ.write("<!doctype html><html><body>"),
                bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)),
            c = bH(b, "display"),
            e.body.removeChild(bI)
        }
        return bS[a] = c,
        c
    }
    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b))
            p.each(b, function(b, e) {
                c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            }
            );
        else if (!c && p.type(b) === "object")
            for (e in b)
                ci(a + "[" + e + "]", b[e], c, d);
        else
            d(a, b)
    }
    function cz(a) {
        return function(b, c) {
            typeof b != "string" && (c = b,
            b = "*");
            var d, e, f, g = b.toLowerCase().split(s), h = 0, i = g.length;
            if (p.isFunction(c))
                for (; h < i; h++)
                    d = g[h],
                    f = /^\+/.test(d),
                    f && (d = d.substr(1) || "*"),
                    e = a[d] = a[d] || [],
                    e[f ? "unshift" : "push"](c)
        }
    }
    function cA(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === cv;
        for (; j < k && (l || !h); j++)
            h = i[j](c, d, e),
            typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h),
            h = cA(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)),
        h
    }
    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e)
    }
    function cC(a, c, d) {
        var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
        for (f in k)
            f in d && (c[k[f]] = d[f]);
        while (j[0] === "*")
            j.shift(),
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d)
            g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g)
            return g !== j[0] && j.unshift(g),
            d[g]
    }
    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters)
                i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j]; )
            if (e !== "*") {
                if (h !== "*" && h !== e) {
                    c = i[h + " " + e] || i["* " + e];
                    if (!c)
                        for (d in i) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) {
                                    c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0],
                                    g.splice(j--, 0, e));
                                    break
                                }
                            }
                        }
                    if (c !== !0)
                        if (c && a["throws"])
                            b = c(b);
                        else
                            try {
                                b = c(b)
                            } catch (k) {
                                return {
                                    state: "parsererror",
                                    error: c ? k : "No conversion from " + h + " to " + e
                                }
                            }
                }
                h = e
            }
        return {
            state: "success",
            data: b
        }
    }
    function cL() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function cU() {
        return setTimeout(function() {
            cN = b
        }
        , 0),
        cN = p.now()
    }
    function cV(a, b) {
        p.each(b, function(b, c) {
            var d = (cT[b] || []).concat(cT["*"])
              , e = 0
              , f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c))
                    return
        }
        )
    }
    function cW(a, b, c) {
        var d, e = 0, f = 0, g = cS.length, h = p.Deferred().always(function() {
            delete i.elem
        }
        ), i = function() {
            var b = cN || cU()
              , c = Math.max(0, j.startTime + j.duration - b)
              , d = 1 - (c / j.duration || 0)
              , e = 0
              , f = j.tweens.length;
            for (; e < f; e++)
                j.tweens[e].run(d);
            return h.notifyWith(a, [j, d, c]),
            d < 1 && f ? c : (h.resolveWith(a, [j]),
            !1)
        }
        , j = h.promise({
            elem: a,
            props: p.extend({}, b),
            opts: p.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: cN || cU(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c, d) {
                var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(e),
                e
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                for (; c < d; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) {
            d = cS[e].call(j, a, k, j.opts);
            if (d)
                return d
        }
        return cV(j, k),
        p.isFunction(j.opts.start) && j.opts.start.call(a, j),
        p.fx.timer(p.extend(i, {
            anim: j,
            queue: j.opts.queue,
            elem: a
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = p.camelCase(c),
            e = b[d],
            f = a[c],
            p.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = p.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
        }
    }
    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"),
        j.unqueued == null  && (j.unqueued = 0,
        k = j.empty.fire,
        j.empty.fire = function() {
            j.unqueued || k()
        }
        ),
        j.unqueued++,
        l.always(function() {
            l.always(function() {
                j.unqueued--,
                p.queue(a, "fx").length || j.empty.fire()
            }
            )
        }
        )),
        a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY],
        p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)),
        c.overflow && (m.overflow = "hidden",
        p.support.shrinkWrapBlocks || l.done(function() {
            m.overflow = c.overflow[0],
            m.overflowX = c.overflow[1],
            m.overflowY = c.overflow[2]
        }
        ));
        for (d in b) {
            f = b[d];
            if (cP.exec(f)) {
                delete b[d];
                if (f === (q ? "hide" : "show"))
                    continue;o.push(d)
            }
        }
        g = o.length;
        if (g) {
            h = p._data(a, "fxshow") || p._data(a, "fxshow", {}),
            q ? p(a).show() : l.done(function() {
                p(a).hide()
            }
            ),
            l.done(function() {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n)
                    p.style(a, b, n[b])
            }
            );
            for (d = 0; d < g; d++)
                e = o[d],
                i = l.createTween(e, q ? h[e] : 0),
                n[e] = h[e] || p.style(a, e),
                e in h || (h[e] = i.start,
                q && (i.end = i.start,
                i.start = e === "width" || e === "height" ? 1 : 0))
        }
    }
    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a,b,c,d,e)
    }
    function c$(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b)
            c = bV[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document, f = a.location, g = a.navigator, h = a.jQuery, i = a.$, j = Array.prototype.push, k = Array.prototype.slice, l = Array.prototype.indexOf, m = Object.prototype.toString, n = Object.prototype.hasOwnProperty, o = String.prototype.trim, p = function(a, b) {
        return new p.fn.init(a,b,c)
    }
    , q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, r = /\S/, s = /\s+/, t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, A = /^-ms-/, B = /-([\da-z])/gi, C = function(a, b) {
        return (b + "").toUpperCase()
    }
    , D = function() {
        e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1),
        p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D),
        p.ready())
    }
    , E = {};
    p.fn = p.prototype = {
        constructor: p,
        init: function(a, c, d) {
            var f, g, h, i;
            if (!a)
                return this;
            if (a.nodeType)
                return this.context = this[0] = a,
                this.length = 1,
                this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null , a, null ] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1])
                        return c = c instanceof p ? c[0] : c,
                        i = c && c.nodeType ? c.ownerDocument || c : e,
                        a = p.parseHTML(f[1], i, !0),
                        v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
                        p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2])
                            return d.find(a);
                        this.length = 1,
                        this[0] = g
                    }
                    return this.context = e,
                    this.selector = a,
                    this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector,
            this.context = a.context),
            p.makeArray(a, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return a == null  ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this,
            d.context = this.context,
            b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
            d
        },
        each: function(a, b) {
            return p.each(this, a, b)
        },
        ready: function(a) {
            return p.ready.promise().done(a),
            this
        },
        eq: function(a) {
            return a = +a,
            a === -1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
        },
        map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                return a.call(b, c, b)
            }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: j,
        sort: [].sort,
        splice: [].splice
    },
    p.fn.init.prototype = p.fn,
    p.extend = p.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        typeof h == "boolean" && (k = h,
        h = arguments[1] || {},
        i = 2),
        typeof h != "object" && !p.isFunction(h) && (h = {}),
        j === i && (h = this,
        --i);
        for (; i < j; i++)
            if ((a = arguments[i]) != null )
                for (c in a) {
                    d = h[c],
                    e = a[c];
                    if (h === e)
                        continue;k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1,
                    g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {},
                    h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
                }
        return h
    }
    ,
    p.extend({
        noConflict: function(b) {
            return a.$ === p && (a.$ = i),
            b && a.jQuery === p && (a.jQuery = h),
            p
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? p.readyWait++ : p.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? --p.readyWait : p.isReady)
                return;
            if (!e.body)
                return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0)
                return;
            d.resolveWith(e, [p]),
            p.fn.trigger && p(e).trigger("ready").off("ready")
        },
        isFunction: function(a) {
            return p.type(a) === "function"
        },
        isArray: Array.isArray || function(a) {
            return p.type(a) === "array"
        }
        ,
        isWindow: function(a) {
            return a != null  && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(a) {
            return a == null  ? String(a) : E[m.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a))
                return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a)
                ;
            return d === b || n.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            return !a || typeof a != "string" ? null  : (typeof b == "boolean" && (c = b,
            b = 0),
            b = b || e,
            (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null  : []),
            p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(b) {
            if (!b || typeof b != "string")
                return null ;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse)
                return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, "")))
                return (new Function("return " + b))();
            p.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string")
                return null ;
            try {
                a.DOMParser ? (e = new DOMParser,
                d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                d.async = "false",
                d.loadXML(c))
            } catch (f) {
                d = b
            }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c),
            d
        },
        noop: function() {},
        globalEval: function(b) {
            b && r.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(A, "ms-").replace(B, C)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0, g = a.length, h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1)
                            break
                } else
                    for (; f < g; )
                        if (c.apply(a[f++], d) === !1)
                            break
            } else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1)
                        break
            } else
                for (; f < g; )
                    if (c.call(a[f], f, a[f++]) === !1)
                        break;
            return a
        },
        trim: o && !o.call("﻿ ") ? function(a) {
            return a == null  ? "" : o.call(a)
        }
         : function(a) {
            return a == null  ? "" : (a + "").replace(t, "")
        }
        ,
        makeArray: function(a, b) {
            var c, d = b || [];
            return a != null  && (c = p.type(a),
            a.length == null  || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)),
            d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (l)
                    return l.call(b, a, c);
                d = b.length,
                c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, c) {
            var d = c.length
              , e = a.length
              , f = 0;
            if (typeof d == "number")
                for (; f < d; f++)
                    a[e++] = c[f];
            else
                while (c[f] !== b)
                    a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c = !!c;
            for (; f < g; f++)
                d = !!b(a[f], f),
                c !== d && e.push(a[f]);
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [], h = 0, i = a.length, j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j)
                for (; h < i; h++)
                    e = c(a[h], h, d),
                    e != null  && (g[g.length] = e);
            else
                for (f in a)
                    e = c(a[f], f, d),
                    e != null  && (g[g.length] = e);
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c],
            c = a,
            a = d),
            p.isFunction(a) ? (e = k.call(arguments, 2),
            f = function() {
                return a.apply(c, e.concat(k.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || p.guid++,
            f) : b
        },
        access: function(a, c, d, e, f, g, h) {
            var i, j = d == null , k = 0, l = a.length;
            if (d && typeof d == "object") {
                for (k in d)
                    p.access(a, c, k, d[k], 1, g, e);
                f = 1
            } else if (e !== b) {
                i = h === b && p.isFunction(e),
                j && (i ? (i = c,
                c = function(a, b, c) {
                    return i.call(p(a), c)
                }
                ) : (c.call(a, e),
                c = null ));
                if (c)
                    for (; k < l; k++)
                        c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1
            }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    p.ready.promise = function(b) {
        if (!d) {
            d = p.Deferred();
            if (e.readyState === "complete")
                setTimeout(p.ready, 1);
            else if (e.addEventListener)
                e.addEventListener("DOMContentLoaded", D, !1),
                a.addEventListener("load", p.ready, !1);
            else {
                e.attachEvent("onreadystatechange", D),
                a.attachEvent("onload", p.ready);
                var c = !1;
                try {
                    c = a.frameElement == null  && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        p.ready()
                    }
                }
                ()
            }
        }
        return d.promise(b)
    }
    ,
    p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        E["[object " + b + "]"] = b.toLowerCase()
    }
    ),
    c = p(e);
    var F = {};
    p.Callbacks = function(a) {
        a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [], j = !a.once && [], k = function(b) {
            c = a.memory && b,
            d = !0,
            h = f || 0,
            f = 0,
            g = i.length,
            e = !0;
            for (; i && h < g; h++)
                if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            e = !1,
            i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }
        , l = {
            add: function() {
                if (i) {
                    var b = i.length;
                    (function d(b) {
                        p.each(b, function(b, c) {
                            var e = p.type(c);
                            e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
                        }
                        )
                    }
                    )(arguments),
                    e ? g = i.length : c && (f = b,
                    k(c))
                }
                return this
            },
            remove: function() {
                return i && p.each(arguments, function(a, b) {
                    var c;
                    while ((c = p.inArray(b, i, c)) > -1)
                        i.splice(c, 1),
                        e && (c <= g && g--,
                        c <= h && h--)
                }
                ),
                this
            },
            has: function(a) {
                return p.inArray(a, i) > -1
            },
            empty: function() {
                return i = [],
                this
            },
            disable: function() {
                return i = j = c = b,
                this
            },
            disabled: function() {
                return !i
            },
            lock: function() {
                return j = b,
                c || l.disable(),
                this
            },
            locked: function() {
                return !j
            },
            fireWith: function(a, b) {
                return b = b || [],
                b = [a, b.slice ? b.slice() : b],
                i && (!d || j) && (e ? j.push(b) : k(b)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return l
    }
    ,
    p.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return p.Deferred(function(c) {
                        p.each(b, function(b, d) {
                            var f = d[0]
                              , g = a[b];
                            e[d[1]](p.isFunction(g) ? function() {
                                var a = g.apply(this, arguments);
                                a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                            }
                             : c[f])
                        }
                        ),
                        a = null 
                    }
                    ).promise()
                },
                promise: function(a) {
                    return a != null  ? p.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            p.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }
                , b[a ^ 1][2].disable, b[2][2].lock),
                e[f[0]] = g.fire,
                e[f[0] + "With"] = g.fireWith
            }
            ),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = k.call(arguments), d = c.length, e = d !== 1 || a && p.isFunction(a.promise) ? d : 0, f = e === 1 ? a : p.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? k.call(arguments) : d,
                    c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            }
            , h, i, j;
            if (d > 1) {
                h = new Array(d),
                i = new Array(d),
                j = new Array(d);
                for (; b < d; b++)
                    c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c),
            f.promise()
        }
    }),
    p.support = function() {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        c = n.getElementsByTagName("*"),
        d = n.getElementsByTagName("a")[0],
        d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length)
            return {};
        f = e.createElement("select"),
        g = f.appendChild(e.createElement("option")),
        h = n.getElementsByTagName("input")[0],
        b = {
            leadingWhitespace: n.firstChild.nodeType === 3,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: h.value === "on",
            optSelected: g.selected,
            getSetAttribute: n.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        h.checked = !0,
        b.noCloneChecked = h.cloneNode(!0).checked,
        f.disabled = !0,
        b.optDisabled = !g.disabled;
        try {
            delete n.test
        } catch (o) {
            b.deleteExpando = !1
        }
        !n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
            b.noCloneEvent = !1
        }
        ),
        n.cloneNode(!0).fireEvent("onclick"),
        n.detachEvent("onclick", m)),
        h = e.createElement("input"),
        h.value = "t",
        h.setAttribute("type", "radio"),
        b.radioValue = h.value === "t",
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        n.appendChild(h),
        i = e.createDocumentFragment(),
        i.appendChild(n.lastChild),
        b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.appendChecked = h.checked,
        i.removeChild(h),
        i.appendChild(n);
        if (n.attachEvent)
            for (k in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                j = "on" + k,
                l = j in n,
                l || (n.setAttribute(j, "return;"),
                l = typeof n[j] == "function"),
                b[k + "Bubbles"] = l;
        return p(function() {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;", i = e.getElementsByTagName("body")[0];
            if (!i)
                return;
            c = e.createElement("div"),
            c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            i.insertBefore(c, i.firstChild),
            d = e.createElement("div"),
            c.appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            f = d.getElementsByTagName("td"),
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            l = f[0].offsetHeight === 0,
            f[0].style.display = "",
            f[1].style.display = "none",
            b.reliableHiddenOffsets = l && f[0].offsetHeight === 0,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            b.boxSizing = d.offsetWidth === 4,
            b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1,
            a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null ) || {}).top !== "1%",
            b.boxSizingReliable = (a.getComputedStyle(d, null ) || {
                width: "4px"
            }).width === "4px",
            g = e.createElement("div"),
            g.style.cssText = d.style.cssText = h,
            g.style.marginRight = g.style.width = "0",
            d.style.width = "1px",
            d.appendChild(g),
            b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null ) || {}).marginRight)),
            typeof d.style.zoom != "undefined" && (d.innerHTML = "",
            d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1",
            b.inlineBlockNeedsLayout = d.offsetWidth === 3,
            d.style.display = "block",
            d.style.overflow = "visible",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            b.shrinkWrapBlocks = d.offsetWidth !== 3,
            c.style.zoom = 1),
            i.removeChild(c),
            c = d = f = g = null 
        }
        ),
        i.removeChild(n),
        c = d = f = g = h = i = n = null ,
        b
    }
    ();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , I = /([A-Z])/g;
    p.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando],
            !!a && !K(a)
        },
        data: function(a, c, d, e) {
            if (!p.acceptData(a))
                return;
            var f, g, h = p.expando, i = typeof c == "string", j = a.nodeType, k = j ? p.cache : a, l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b)
                return;
            l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h),
            k[l] || (k[l] = {},
            j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function")
                e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l],
            e || (f.data || (f.data = {}),
            f = f.data),
            d !== b && (f[p.camelCase(c)] = d),
            i ? (g = f[c],
            g == null  && (g = f[p.camelCase(c)])) : g = f,
            g
        },
        removeData: function(a, b, c) {
            if (!p.acceptData(a))
                return;
            var d, e, f, g = a.nodeType, h = g ? p.cache : a, i = g ? a[p.expando] : p.expando;
            if (!h[i])
                return;
            if (b) {
                d = c ? h[i] : h[i].data;
                if (d) {
                    p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b),
                    b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0,
                    f = b.length; e < f; e++)
                        delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d))
                        return
                }
            }
            if (!c) {
                delete h[i].data;
                if (!K(h[i]))
                    return
            }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null 
        },
        _data: function(a, b, c) {
            return p.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }),
    p.fn.extend({
        data: function(a, c) {
            var d, e, f, g, h, i = this[0], j = 0, k = null ;
            if (a === b) {
                if (this.length) {
                    k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
                        f = i.attributes;
                        for (h = f.length; j < h; j++)
                            g = f[j].name,
                            g.indexOf("data-") || (g = p.camelCase(g.substring(5)),
                            J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0)
                    }
                }
                return k
            }
            return typeof a == "object" ? this.each(function() {
                p.data(this, a)
            }
            ) : (d = a.split(".", 2),
            d[1] = d[1] ? "." + d[1] : "",
            e = d[1] + "!",
            p.access(this, function(c) {
                if (c === b)
                    return k = this.triggerHandler("getData" + e, [d[0]]),
                    k === b && i && (k = p.data(i, a),
                    k = J(i, a, k)),
                    k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c,
                this.each(function() {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d),
                    p.data(this, a, c),
                    b.triggerHandler("changeData" + e, d)
                }
                )
            }
            , null , c, arguments.length > 1, null , !1))
        },
        removeData: function(a) {
            return this.each(function() {
                p.removeData(this, a)
            }
            )
        }
    }),
    p.extend({
        queue: function(a, b, c) {
            var d;
            if (a)
                return b = (b || "fx") + "queue",
                d = p._data(a, b),
                c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)),
                d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = p.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = p._queueHooks(a, b)
              , g = function() {
                p.dequeue(a, b)
            }
            ;
            e === "inprogress" && (e = c.shift(),
            d--),
            e && (b === "fx" && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, {
                empty: p.Callbacks("once memory").add(function() {
                    p.removeData(a, b + "queue", !0),
                    p.removeData(a, c, !0)
                }
                )
            })
        }
    }),
    p.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return typeof a != "string" && (c = a,
            a = "fx",
            d--),
            arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a),
                a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
            }
            )
        },
        dequeue: function(a) {
            return this.each(function() {
                p.dequeue(this, a)
            }
            )
        },
        delay: function(a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            }
            )
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1, f = p.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [g])
            }
            ;
            typeof a != "string" && (c = a,
            a = b),
            a = a || "fx";
            while (h--)
                d = p._data(g[h], a + "queueHooks"),
                d && d.empty && (e++,
                d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var L, M, N, O = /[\t\r\n]/g, P = /\r/g, Q = /^(?:button|input)$/i, R = /^(?:button|input|object|select|textarea)$/i, S = /^a(?:rea|)$/i, T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, U = p.support.getSetAttribute;
    p.fn.extend({
        attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                p.removeAttr(this, a)
            }
            )
        },
        prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = p.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch (c) {}
            }
            )
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a))
                return this.each(function(b) {
                    p(this).addClass(a.call(this, b, this.className))
                }
                );
            if (a && typeof a == "string") {
                b = a.split(s);
                for (c = 0,
                d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0,
                            h = b.length; g < h; g++)
                                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = p.trim(f)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a))
                return this.each(function(b) {
                    p(this).removeClass(a.call(this, b, this.className))
                }
                );
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(s);
                for (h = 0,
                i = this.length; h < i; h++) {
                    e = this[h];
                    if (e.nodeType === 1 && e.className) {
                        d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0,
                        g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") >= 0)
                                d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a
              , d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) {
                p(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            ) : this.each(function() {
                if (c === "string") {
                    var e, f = 0, g = p(this), h = b, i = a.split(s);
                    while (e = i[f++])
                        h = d ? h : !g.hasClass(e),
                        g[h ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")
                    this.className && p._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
            }
            )
        },
        hasClass: function(a) {
            var b = " " + a + " "
              , c = 0
              , d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f)
                    return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()],
                    c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value,
                    typeof d == "string" ? d.replace(P, "") : d == null  ? "" : d);
                return
            }
            return e = p.isFunction(a),
            this.each(function(d) {
                var f, g = p(this);
                if (this.nodeType !== 1)
                    return;
                e ? f = a.call(this, d, g.val()) : f = a,
                f == null  ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                    return a == null  ? "" : a + ""
                }
                )),
                c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b)
                    this.value = f
            }
            )
        }
    }),
    p.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = a.type === "select-one";
                    if (f < 0)
                        return null ;
                    c = i ? f : 0,
                    d = i ? f + 1 : h.length;
                    for (; c < d; c++) {
                        e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null ) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
                            b = p(e).val();
                            if (i)
                                return b;
                            g.push(b)
                        }
                    }
                    return i && !g.length && h.length ? p(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function() {
                        this.selected = p.inArray(p(this).val(), c) >= 0
                    }
                    ),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {},
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2)
                return;
            if (e && p.isFunction(p.fn[c]))
                return p(a)[c](d);
            if (typeof a.getAttribute == "undefined")
                return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a),
            h && (c = c.toLowerCase(),
            g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null ) {
                    p.removeAttr(a, c);
                    return
                }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""),
                d)
            }
            return g && "get" in g && h && (f = g.get(a, c)) !== null  ? f : (f = a.getAttribute(c),
            f === null  ? b : f)
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(s);
                for (; g < d.length; g++)
                    e = d[g],
                    e && (c = p.propFix[e] || e,
                    f = T.test(e),
                    f || p.attr(a, e, ""),
                    a.removeAttribute(U ? e : c),
                    f && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (Q.test(a.nodeName) && a.parentNode)
                        p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null 
                },
                set: function(a, b, c) {
                    if (L && p.nodeName(a, "button"))
                        return L.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2)
                return;
            return g = h !== 1 || !p.isXMLDoc(a),
            g && (c = p.propFix[c] || c,
            f = p.propHooks[c]),
            d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null  ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    M = {
        get: function(a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c,
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    U || (N = {
        name: !0,
        id: !0,
        coords: !0
    },
    L = p.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c),
            a.setAttributeNode(d)),
            d.value = b + ""
        }
    },
    p.each(["width", "height"], function(a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
            set: function(a, c) {
                if (c === "")
                    return a.setAttribute(b, "auto"),
                    c
            }
        })
    }
    ),
    p.attrHooks.contenteditable = {
        get: L.get,
        set: function(a, b, c) {
            b === "" && (b = "false"),
            L.set(a, b, c)
        }
    }),
    p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null  ? b : d
            }
        })
    }
    ),
    p.support.style || (p.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    }),
    p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null 
        }
    })),
    p.support.enctype || (p.propFix.enctype = "encoding"),
    p.support.checkOn || p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null  ? "on" : a.value
            }
        }
    }
    ),
    p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = p.extend(p.valHooks[this], {
            set: function(a, b) {
                if (p.isArray(b))
                    return a.checked = p.inArray(p(a).val(), b) >= 0
            }
        })
    }
    );
    var V = /^(?:textarea|input|select)$/i
      , W = /^([^\.]*|)(?:\.(.+)|)$/
      , X = /(?:^|\s)hover(\.\S+|)\b/
      , Y = /^key/
      , Z = /^(?:mouse|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = function(a) {
        return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
    }
    ;
    p.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, q, r;
            if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a)))
                return;
            d.handler && (o = d,
            d = o.handler,
            f = o.selector),
            d.guid || (d.guid = p.guid++),
            i = g.events,
            i || (g.events = i = {}),
            h = g.handle,
            h || (g.handle = h = function(a) {
                return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
            }
            ,
            h.elem = a),
            c = p.trim(_(c)).split(" ");
            for (j = 0; j < c.length; j++) {
                k = W.exec(c[j]) || [],
                l = k[1],
                m = (k[2] || "").split(".").sort(),
                r = p.event.special[l] || {},
                l = (f ? r.delegateType : r.bindType) || l,
                r = p.event.special[l] || {},
                n = p.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && p.expr.match.needsContext.test(f),
                    namespace: m.join(".")
                }, o),
                q = i[l];
                if (!q) {
                    q = i[l] = [],
                    q.delegateCount = 0;
                    if (!r.setup || r.setup.call(a, e, m, h) === !1)
                        a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
                }
                r.add && (r.add.call(a, n),
                n.handler.guid || (n.handler.guid = d.guid)),
                f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
                p.event.global[l] = !0
            }
            a = null 
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
            if (!r || !(m = r.events))
                return;
            b = p.trim(_(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g = W.exec(b[f]) || [],
                h = i = g[1],
                j = g[2];
                if (!h) {
                    for (h in m)
                        p.event.remove(a, h + b[f], c, d, !0);
                    continue
                }
                n = p.event.special[h] || {},
                h = (d ? n.delegateType : n.bindType) || h,
                o = m[h] || [],
                k = o.length,
                j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null ;
                for (l = 0; l < o.length; l++)
                    q = o[l],
                    (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1),
                    q.selector && o.delegateCount--,
                    n.remove && n.remove.call(a, q));
                o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle),
                delete m[h])
            }
            p.isEmptyObject(m) && (delete r.handle,
            p.removeData(a, "events", !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, f, g) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var h, i, j, k, l, m, n, o, q, r, s = c.type || c, t = [];
                if ($.test(s + p.event.triggered))
                    return;
                s.indexOf("!") >= 0 && (s = s.slice(0, -1),
                i = !0),
                s.indexOf(".") >= 0 && (t = s.split("."),
                s = t.shift(),
                t.sort());
                if ((!f || p.event.customEvent[s]) && !p.event.global[s])
                    return;
                c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s,c) : new p.Event(s),
                c.type = s,
                c.isTrigger = !0,
                c.exclusive = i,
                c.namespace = t.join("."),
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                m = s.indexOf(":") < 0 ? "on" + s : "";
                if (!f) {
                    h = p.cache;
                    for (j in h)
                        h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                    return
                }
                c.result = b,
                c.target || (c.target = f),
                d = d != null  ? p.makeArray(d) : [],
                d.unshift(c),
                n = p.event.special[s] || {};
                if (n.trigger && n.trigger.apply(f, d) === !1)
                    return;
                q = [[f, n.bindType || s]];
                if (!g && !n.noBubble && !p.isWindow(f)) {
                    r = n.delegateType || s,
                    k = $.test(r + s) ? f : f.parentNode;
                    for (l = f; k; k = k.parentNode)
                        q.push([k, r]),
                        l = k;
                    l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
                }
                for (j = 0; j < q.length && !c.isPropagationStopped(); j++)
                    k = q[j][0],
                    c.type = q[j][1],
                    o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"),
                    o && o.apply(k, d),
                    o = m && k[m],
                    o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
                return c.type = s,
                !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m],
                l && (f[m] = null ),
                p.event.triggered = s,
                f[s](),
                p.event.triggered = b,
                l && (f[m] = l)),
                c.result
            }
            return
        },
        dispatch: function(c) {
            c = p.event.fix(c || a.event);
            var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [], q = o.delegateCount, r = k.call(arguments), s = !c.exclusive && !c.namespace, t = p.event.special[c.type] || {}, u = [];
            r[0] = c,
            c.delegateTarget = this;
            if (t.preDispatch && t.preDispatch.call(this, c) === !1)
                return;
            if (q && (!c.button || c.type !== "click"))
                for (f = c.target; f != this; f = f.parentNode || this)
                    if (f.disabled !== !0 || c.type !== "click") {
                        h = {},
                        j = [];
                        for (d = 0; d < q; d++)
                            l = o[d],
                            m = l.selector,
                            h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null , [f]).length),
                            h[m] && j.push(l);
                        j.length && u.push({
                            elem: f,
                            matches: j
                        })
                    }
            o.length > q && u.push({
                elem: this,
                matches: o.slice(q)
            });
            for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
                i = u[d],
                c.currentTarget = i.elem;
                for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
                    l = i.matches[e];
                    if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace))
                        c.data = l.data,
                        c.handleObj = l,
                        g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r),
                        g !== b && (c.result = g,
                        g === !1 && (c.preventDefault(),
                        c.stopPropagation()))
                }
            }
            return t.postDispatch && t.postDispatch.call(this, c),
            c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return a.which == null  && (a.which = b.charCode != null  ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, f, g, h = c.button, i = c.fromElement;
                return a.pageX == null  && c.clientX != null  && (d = a.target.ownerDocument || e,
                f = d.documentElement,
                g = d.body,
                a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0),
                a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)),
                !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i),
                !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[p.expando])
                return a;
            var b, c, d = a, f = p.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            a = p.Event(d);
            for (b = g.length; b; )
                c = g[--b],
                a[c] = d[c];
            return a.target || (a.target = d.srcElement || e),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            f.filter ? f.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    p.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null )
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = p.extend(new p.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? p.event.trigger(e, null , b) : p.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    p.event.handle = p.event.dispatch,
    p.removeEvent = e.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
     : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null ),
        a.detachEvent(d, c))
    }
    ,
    p.Event = function(a, b) {
        if (this instanceof p.Event)
            a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a,
            b && p.extend(this, b),
            this.timeStamp = a && a.timeStamp || p.now(),
            this[p.expando] = !0;
        else
            return new p.Event(a,b)
    }
    ,
    p.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = bb;
            var a = this.originalEvent;
            if (!a)
                return;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = bb;
            var a = this.originalEvent;
            if (!a)
                return;
            a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb,
            this.stopPropagation()
        },
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba
    },
    p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        p.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj, g = f.selector;
                if (!e || e !== d && !p.contains(d, e))
                    a.type = f.origType,
                    c = f.handler.apply(this, arguments),
                    a.type = b;
                return c
            }
        }
    }
    ),
    p.support.submitBubbles || (p.event.special.submit = {
        setup: function() {
            if (p.nodeName(this, "form"))
                return !1;
            p.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target
                  , d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }
                ),
                p._data(d, "_submit_attached", !0))
            }
            )
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (p.nodeName(this, "form"))
                return !1;
            p.event.remove(this, "._submit")
        }
    }),
    p.support.changeBubbles || (p.event.special.change = {
        setup: function() {
            if (V.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")
                    p.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }
                    ),
                    p.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1),
                        p.event.simulate("change", this, a, !0)
                    }
                    );
                return !1
            }
            p.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
                }
                ),
                p._data(b, "_change_attached", !0))
            }
            )
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return p.event.remove(this, "._change"),
            !V.test(this.nodeName)
        }
    }),
    p.support.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0
          , d = function(a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0)
        }
        ;
        p.event.special[b] = {
            setup: function() {
                c++ === 0 && e.addEventListener(a, d, !0)
            },
            teardown: function() {
                --c === 0 && e.removeEventListener(a, d, !0)
            }
        }
    }
    ),
    p.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c,
                c = b);
                for (h in a)
                    this.on(h, c, d, a[h], f);
                return this
            }
            d == null  && e == null  ? (e = c,
            d = c = b) : e == null  && (typeof c == "string" ? (e = d,
            d = b) : (e = d,
            d = c,
            c = b));
            if (e === !1)
                e = ba;
            else if (!e)
                return this;
            return f === 1 && (g = e,
            e = function(a) {
                return p().off(a),
                g.apply(this, arguments)
            }
            ,
            e.guid = g.guid || (g.guid = p.guid++)),
            this.each(function() {
                p.event.add(this, a, e, d, c)
            }
            )
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj)
                return e = a.handleObj,
                p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler),
                this;
            if (typeof a == "object") {
                for (f in a)
                    this.off(f, c, a[f]);
                return this
            }
            if (c === !1 || typeof c == "function")
                d = c,
                c = b;
            return d === !1 && (d = ba),
            this.each(function() {
                p.event.remove(this, a, d, c)
            }
            )
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        live: function(a, b, c) {
            return p(this.context).on(a, this.selector, b, c),
            this
        },
        die: function(a, b) {
            return p(this.context).off(a, this.selector || "**", b),
            this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                p.event.trigger(a, b, this)
            }
            )
        },
        triggerHandler: function(a, b) {
            if (this[0])
                return p.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments
              , c = a.guid || p.guid++
              , d = 0
              , e = function(c) {
                var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                return p._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            }
            ;
            e.guid = c;
            while (d < b.length)
                b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        p.fn[b] = function(a, c) {
            return c == null  && (c = a,
            a = null ),
            arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
        ,
        Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
        Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
    }
    ),
    function(a, b) {
        function bc(a, b, c, d) {
            c = c || [],
            b = b || r;
            var e, f, i, j, k = b.nodeType;
            if (!a || typeof a != "string")
                return c;
            if (k !== 1 && k !== 9)
                return [];
            i = g(b);
            if (!i && !d)
                if (e = P.exec(a))
                    if (j = e[1]) {
                        if (k === 9) {
                            f = b.getElementById(j);
                            if (!f || !f.parentNode)
                                return c;
                            if (f.id === j)
                                return c.push(f),
                                c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j)
                            return c.push(f),
                            c
                    } else {
                        if (e[2])
                            return w.apply(c, x.call(b.getElementsByTagName(a), 0)),
                            c;
                        if ((j = e[3]) && _ && b.getElementsByClassName)
                            return w.apply(c, x.call(b.getElementsByClassName(j), 0)),
                            c
                    }
            return bp(a.replace(L, "$1"), b, c, d, i)
        }
        function bd(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }
        function be(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a
            }
        }
        function bf(a) {
            return z(function(b) {
                return b = +b,
                z(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                }
                )
            }
            )
        }
        function bg(a, b, c) {
            if (a === b)
                return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)
                    return -1;
                d = d.nextSibling
            }
            return 1
        }
        function bh(a, b) {
            var c, d, f, g, h, i, j, k = C[o][a];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = e.preFilter;
            while (h) {
                if (!c || (d = M.exec(h)))
                    d && (h = h.slice(d[0].length)),
                    i.push(f = []);
                c = !1;
                if (d = N.exec(h))
                    f.push(c = new q(d.shift())),
                    h = h.slice(c.length),
                    c.type = d[0].replace(L, " ");
                for (g in e.filter)
                    (d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())),
                    h = h.slice(c.length),
                    c.type = g,
                    c.matches = d);
                if (!c)
                    break
            }
            return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
        }
        function bi(a, b, d) {
            var e = b.dir
              , f = d && b.dir === "parentNode"
              , g = u++;
            return b.first ? function(b, c, d) {
                while (b = b[e])
                    if (f || b.nodeType === 1)
                        return a(b, c, d)
            }
             : function(b, d, h) {
                if (!h) {
                    var i, j = t + " " + g + " ", k = j + c;
                    while (b = b[e])
                        if (f || b.nodeType === 1) {
                            if ((i = b[o]) === k)
                                return b.sizset;
                            if (typeof i == "string" && i.indexOf(j) === 0) {
                                if (b.sizset)
                                    return b
                            } else {
                                b[o] = k;
                                if (a(b, d, h))
                                    return b.sizset = !0,
                                    b;
                                b.sizset = !1
                            }
                        }
                } else
                    while (b = b[e])
                        if (f || b.nodeType === 1)
                            if (a(b, d, h))
                                return b
            }
        }
        function bj(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function bk(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null ;
            for (; h < i; h++)
                if (f = a[h])
                    if (!c || c(f, d, e))
                        g.push(f),
                        j && b.push(h);
            return g
        }
        function bl(a, b, c, d, e, f) {
            return d && !d[o] && (d = bl(d)),
            e && !e[o] && (e = bl(e, f)),
            z(function(f, g, h, i) {
                if (f && e)
                    return;
                var j, k, l, m = [], n = [], o = g.length, p = f || bo(b || "*", h.nodeType ? [h] : h, [], f), q = a && (f || !b) ? bk(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                c && c(q, r, h, i);
                if (d) {
                    l = bk(r, n),
                    d(l, [], h, i),
                    j = l.length;
                    while (j--)
                        if (k = l[j])
                            r[n[j]] = !(q[n[j]] = k)
                }
                if (f) {
                    j = a && r.length;
                    while (j--)
                        if (k = r[j])
                            f[m[j]] = !(g[m[j]] = k)
                } else
                    r = bk(r === g ? r.splice(o, r.length) : r),
                    e ? e(null , g, r, i) : w.apply(g, r)
            }
            )
        }
        function bm(a) {
            var b, c, d, f = a.length, g = e.relative[a[0].type], h = g || e.relative[" "], i = g ? 1 : 0, j = bi(function(a) {
                return a === b
            }
            , h, !0), k = bi(function(a) {
                return y.call(b, a) > -1
            }
            , h, !0), m = [function(a, c, d) {
                return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
            }
            ];
            for (; i < f; i++)
                if (c = e.relative[a[i].type])
                    m = [bi(bj(m), c)];
                else {
                    c = e.filter[a[i].type].apply(null , a[i].matches);
                    if (c[o]) {
                        d = ++i;
                        for (; d < f; d++)
                            if (e.relative[a[d].type])
                                break;
                        return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
                    }
                    m.push(c)
                }
            return bj(m)
        }
        function bn(a, b) {
            var d = b.length > 0
              , f = a.length > 0
              , g = function(h, i, j, k, m) {
                var n, o, p, q = [], s = 0, u = "0", x = h && [], y = m != null , z = l, A = h || f && e.find.TAG("*", m && i.parentNode || i), B = t += z == null  ? 1 : Math.E;
                y && (l = i !== r && i,
                c = g.el);
                for (; (n = A[u]) != null ; u++) {
                    if (f && n) {
                        for (o = 0; p = a[o]; o++)
                            if (p(n, i, j)) {
                                k.push(n);
                                break
                            }
                        y && (t = B,
                        c = ++g.el)
                    }
                    d && ((n = !p && n) && s--,
                    h && x.push(n))
                }
                s += u;
                if (d && u !== s) {
                    for (o = 0; p = b[o]; o++)
                        p(x, q, i, j);
                    if (h) {
                        if (s > 0)
                            while (u--)
                                !x[u] && !q[u] && (q[u] = v.call(k));
                        q = bk(q)
                    }
                    w.apply(k, q),
                    y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
                }
                return y && (t = B,
                l = z),
                x
            }
            ;
            return g.el = 0,
            d ? z(g) : g
        }
        function bo(a, b, c, d) {
            var e = 0
              , f = b.length;
            for (; e < f; e++)
                bc(a, b[e], c, d);
            return c
        }
        function bp(a, b, c, d, f) {
            var g, h, j, k, l, m = bh(a), n = m.length;
            if (!d && m.length === 1) {
                h = m[0] = m[0].slice(0);
                if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
                    b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                    if (!b)
                        return c;
                    a = a.slice(h.shift().length)
                }
                for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
                    j = h[g];
                    if (e.relative[k = j.type])
                        break;
                    if (l = e.find[k])
                        if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
                            h.splice(g, 1),
                            a = d.length && h.join("");
                            if (!a)
                                return w.apply(c, x.call(d, 0)),
                                c;
                            break
                        }
                }
            }
            return i(a, m)(d, b, f, c, R.test(a)),
            c
        }
        function bq() {}
        var c, d, e, f, g, h, i, j, k, l, m = !0, n = "undefined", o = ("sizcache" + Math.random()).replace(".", ""), q = String, r = a.document, s = r.documentElement, t = 0, u = 0, v = [].pop, w = [].push, x = [].slice, y = [].indexOf || function(a) {
            var b = 0
              , c = this.length;
            for (; b < c; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , z = function(a, b) {
            return a[o] = b == null  || b,
            a
        }
        , A = function() {
            var a = {}
              , b = [];
            return z(function(c, d) {
                return b.push(c) > e.cacheLength && delete a[b.shift()],
                a[c] = d
            }
            , a)
        }
        , B = A(), C = A(), D = A(), E = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", G = F.replace("w", "w#"), H = "([*^$|!~]?=)", I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]", J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)", K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)", L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$","g"), M = new RegExp("^" + E + "*," + E + "*"), N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"), O = new RegExp(J), P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, Q = /^:not/, R = /[\x20\t\r\n\f]*[+~]/, S = /:not\($/, T = /h\d/i, U = /input|select|textarea|button/i, V = /\\(?!\\)/g, W = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
            TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + J),
            POS: new RegExp(K,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)","i"),
            needsContext: new RegExp("^" + E + "*[>+~]|" + K,"i")
        }, X = function(a) {
            var b = r.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null 
            }
        }
        , Y = X(function(a) {
            return a.appendChild(r.createComment("")),
            !a.getElementsByTagName("*").length
        }
        ), Z = X(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
        }
        ), $ = X(function(a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return b !== "boolean" && b !== "string"
        }
        ), _ = X(function(a) {
            return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e",
            a.getElementsByClassName("e").length === 2)
        }
        ), ba = X(function(a) {
            a.id = o + 0,
            a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>",
            s.insertBefore(a, s.firstChild);
            var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
            return d = !r.getElementById(o),
            s.removeChild(a),
            b
        }
        );
        try {
            x.call(s.childNodes, 0)[0].nodeType
        } catch (bb) {
            x = function(a) {
                var b, c = [];
                for (; b = this[a]; a++)
                    c.push(b);
                return c
            }
        }
        bc.matches = function(a, b) {
            return bc(a, null , null , b)
        }
        ,
        bc.matchesSelector = function(a, b) {
            return bc(b, null , null , [a]).length > 0
        }
        ,
        f = bc.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += f(a)
                } else if (e === 3 || e === 4)
                    return a.nodeValue
            } else
                for (; b = a[d]; d++)
                    c += f(b);
            return c
        }
        ,
        g = bc.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }
        ,
        h = bc.contains = s.contains ? function(a, b) {
            var c = a.nodeType === 9 ? a.documentElement : a
              , d = b && b.parentNode;
            return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
        }
         : s.compareDocumentPosition ? function(a, b) {
            return b && !!(a.compareDocumentPosition(b) & 16)
        }
         : function(a, b) {
            while (b = b.parentNode)
                if (b === a)
                    return !0;
            return !1
        }
        ,
        bc.attr = function(a, b) {
            var c, d = g(a);
            return d || (b = b.toLowerCase()),
            (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b),
            c ? typeof a[b] == "boolean" ? a[b] ? b : null  : c.specified ? c.value : null  : null )
        }
        ,
        e = bc.selectors = {
            cacheLength: 50,
            createPseudo: z,
            match: W,
            attrHandle: Z ? {} : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: d ? function(a, b, c) {
                    if (typeof b.getElementById !== n && !c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                }
                 : function(a, c, d) {
                    if (typeof c.getElementById !== n && !d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
                    }
                }
                ,
                TAG: Y ? function(a, b) {
                    if (typeof b.getElementsByTagName !== n)
                        return b.getElementsByTagName(a)
                }
                 : function(a, b) {
                    var c = b.getElementsByTagName(a);
                    if (a === "*") {
                        var d, e = [], f = 0;
                        for (; d = c[f]; f++)
                            d.nodeType === 1 && e.push(d);
                        return e
                    }
                    return c
                }
                ,
                NAME: ba && function(a, b) {
                    if (typeof b.getElementsByName !== n)
                        return b.getElementsByName(name)
                }
                ,
                CLASS: _ && function(a, b, c) {
                    if (typeof b.getElementsByClassName !== n && !c)
                        return b.getElementsByClassName(a)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(V, ""),
                    a[3] = (a[4] || a[5] || "").replace(V, ""),
                    a[2] === "~=" && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    a[1] === "nth" ? (a[2] || bc.error(a[0]),
                    a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")),
                    a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c;
                    if (W.CHILD.test(a[0]))
                        return null ;
                    if (a[3])
                        a[2] = a[3];
                    else if (b = a[4])
                        O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c),
                        a[0] = a[0].slice(0, c)),
                        a[2] = b;
                    return a.slice(0, 3)
                }
            },
            filter: {
                ID: d ? function(a) {
                    return a = a.replace(V, ""),
                    function(b) {
                        return b.getAttribute("id") === a
                    }
                }
                 : function(a) {
                    return a = a.replace(V, ""),
                    function(b) {
                        var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                }
                ,
                TAG: function(a) {
                    return a === "*" ? function() {
                        return !0
                    }
                     : (a = a.replace(V, "").toLowerCase(),
                    function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    }
                    )
                },
                CLASS: function(a) {
                    var b = B[o][a];
                    return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                    function(a) {
                        return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
                    }
                },
                ATTR: function(a, b, c) {
                    return function(d, e) {
                        var f = bc.attr(d, a);
                        return f == null  ? b === "!=" : b ? (f += "",
                        b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d) {
                    return a === "nth" ? function(a) {
                        var b, e, f = a.parentNode;
                        if (c === 1 && d === 0)
                            return !0;
                        if (f) {
                            e = 0;
                            for (b = f.firstChild; b; b = b.nextSibling)
                                if (b.nodeType === 1) {
                                    e++;
                                    if (a === b)
                                        break
                                }
                        }
                        return e -= d,
                        e === c || e % c === 0 && e / c >= 0
                    }
                     : function(b) {
                        var c = b;
                        switch (a) {
                        case "only":
                        case "first":
                            while (c = c.previousSibling)
                                if (c.nodeType === 1)
                                    return !1;
                            if (a === "first")
                                return !0;
                            c = b;
                        case "last":
                            while (c = c.nextSibling)
                                if (c.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                    return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b],
                    e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                        var e, f = d(a, b), g = f.length;
                        while (g--)
                            e = y.call(a, f[g]),
                            a[e] = !(c[e] = f[g])
                    }
                    ) : function(a) {
                        return d(a, 0, c)
                    }
                    ) : d
                }
            },
            pseudos: {
                not: z(function(a) {
                    var b = []
                      , c = []
                      , d = i(a.replace(L, "$1"));
                    return d[o] ? z(function(a, b, c, e) {
                        var f, g = d(a, null , e, []), h = a.length;
                        while (h--)
                            if (f = g[h])
                                a[h] = !(b[h] = f)
                    }
                    ) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        !c.pop()
                    }
                }
                ),
                has: z(function(a) {
                    return function(b) {
                        return bc(a, b).length > 0
                    }
                }
                ),
                contains: z(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                    }
                }
                ),
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                parent: function(a) {
                    return !e.pseudos.empty(a)
                },
                empty: function(a) {
                    var b;
                    a = a.firstChild;
                    while (a) {
                        if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4)
                            return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function(a) {
                    return T.test(a.nodeName)
                },
                text: function(a) {
                    var b, c;
                    return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null  || c.toLowerCase() === b)
                },
                radio: bd("radio"),
                checkbox: bd("checkbox"),
                file: bd("file"),
                password: bd("password"),
                image: bd("image"),
                submit: be("submit"),
                reset: be("reset"),
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button"
                },
                input: function(a) {
                    return U.test(a.nodeName)
                },
                focus: function(a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
                },
                active: function(a) {
                    return a === a.ownerDocument.activeElement
                },
                first: bf(function(a, b, c) {
                    return [0]
                }
                ),
                last: bf(function(a, b, c) {
                    return [b - 1]
                }
                ),
                eq: bf(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }
                ),
                even: bf(function(a, b, c) {
                    for (var d = 0; d < b; d += 2)
                        a.push(d);
                    return a
                }
                ),
                odd: bf(function(a, b, c) {
                    for (var d = 1; d < b; d += 2)
                        a.push(d);
                    return a
                }
                ),
                lt: bf(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }
                ),
                gt: bf(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                }
                )
            }
        },
        j = s.compareDocumentPosition ? function(a, b) {
            return a === b ? (k = !0,
            0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
        }
         : function(a, b) {
            if (a === b)
                return k = !0,
                0;
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, h = b.parentNode, i = g;
            if (g === h)
                return bg(a, b);
            if (!g)
                return -1;
            if (!h)
                return 1;
            while (i)
                e.unshift(i),
                i = i.parentNode;
            i = h;
            while (i)
                f.unshift(i),
                i = i.parentNode;
            c = e.length,
            d = f.length;
            for (var j = 0; j < c && j < d; j++)
                if (e[j] !== f[j])
                    return bg(e[j], f[j]);
            return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
        }
        ,
        [0, 0].sort(j),
        m = !k,
        bc.uniqueSort = function(a) {
            var b, c = 1;
            k = m,
            a.sort(j);
            if (k)
                for (; b = a[c]; c++)
                    b === a[c - 1] && a.splice(c--, 1);
            return a
        }
        ,
        bc.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        i = bc.compile = function(a, b) {
            var c, d = [], e = [], f = D[o][a];
            if (!f) {
                b || (b = bh(a)),
                c = b.length;
                while (c--)
                    f = bm(b[c]),
                    f[o] ? d.push(f) : e.push(f);
                f = D(a, bn(e, d))
            }
            return f
        }
        ,
        r.querySelectorAll && function() {
            var a, b = bp, c = /'|\\/g, d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [":focus"], f = [":active", ":focus"], h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
            X(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>",
                a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                a.querySelectorAll(":checked").length || e.push(":checked")
            }
            ),
            X(function(a) {
                a.innerHTML = "<p test=''></p>",
                a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"),
                a.innerHTML = "<input type='hidden'/>",
                a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            }
            ),
            e = new RegExp(e.join("|")),
            bp = function(a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                    var i, j, k = !0, l = o, m = d, n = d.nodeType === 9 && a;
                    if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                        i = bh(a),
                        (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l),
                        l = "[id='" + l + "'] ",
                        j = i.length;
                        while (j--)
                            i[j] = l + i[j].join("");
                        m = R.test(a) && d.parentNode || d,
                        n = i.join(",")
                    }
                    if (n)
                        try {
                            return w.apply(f, x.call(m.querySelectorAll(n), 0)),
                            f
                        } catch (p) {} finally {
                            k || d.removeAttribute("id")
                        }
                }
                return b(a, d, f, g, h)
            }
            ,
            h && (X(function(b) {
                a = h.call(b, "div");
                try {
                    h.call(b, "[test!='']:sizzle"),
                    f.push("!=", J)
                } catch (c) {}
            }
            ),
            f = new RegExp(f.join("|")),
            bc.matchesSelector = function(b, c) {
                c = c.replace(d, "='$1']");
                if (!g(b) && !f.test(c) && (!e || !e.test(c)))
                    try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11)
                            return i
                    } catch (j) {}
                return bc(c, null , null , [b]).length > 0
            }
            )
        }
        (),
        e.pseudos.nth = e.pseudos.eq,
        e.filters = bq.prototype = e.pseudos,
        e.setFilters = new bq,
        bc.attr = p.attr,
        p.find = bc,
        p.expr = bc.selectors,
        p.expr[":"] = p.expr.pseudos,
        p.unique = bc.uniqueSort,
        p.text = bc.getText,
        p.isXMLDoc = bc.isXML,
        p.contains = bc.contains
    }
    (a);
    var bc = /Until$/
      , bd = /^(?:parents|prev(?:Until|All))/
      , be = /^.[^:#\[\.,]*$/
      , bf = p.expr.match.needsContext
      , bg = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    p.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string")
                return p(a).filter(function() {
                    for (b = 0,
                    c = h.length; b < c; b++)
                        if (p.contains(h[b], this))
                            return !0
                }
                );
            g = this.pushStack("", "find", a);
            for (b = 0,
            c = this.length; b < c; b++) {
                d = g.length,
                p.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            }
            return g
        },
        has: function(a) {
            var b, c = p(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (p.contains(this, c[b]))
                        return !0
            }
            )
        },
        not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            return f = f.length > 1 ? p.unique(f) : f,
            this.pushStack(f, "closest", a)
        },
        index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a)
              , d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null  ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    p.fn.andSelf = p.fn.addBack,
    p.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null 
        },
        parents: function(a) {
            return p.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return p.dir(a, "parentNode", c)
        },
        next: function(a) {
            return bi(a, "nextSibling")
        },
        prev: function(a) {
            return bi(a, "previousSibling")
        },
        nextAll: function(a) {
            return p.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return p.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return p.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return p.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return p.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return p.sibling(a.firstChild)
        },
        contents: function(a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
        }
    }, function(a, b) {
        p.fn[a] = function(c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c),
            d && typeof d == "string" && (e = p.filter(d, e)),
            e = this.length > 1 && !bg[a] ? p.unique(e) : e,
            this.length > 1 && bd.test(a) && (e = e.reverse()),
            this.pushStack(e, a, k.call(arguments).join(","))
        }
    }
    ),
    p.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = []
              , f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d)))
                f.nodeType === 1 && e.push(f),
                f = f[c];
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , bm = / jQuery\d+="(?:null|\d+)"/g
      , bn = /^\s+/
      , bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bp = /<([\w:]+)/
      , bq = /<tbody/i
      , br = /<|&#?\w+;/
      , bs = /<(?:script|style|link)/i
      , bt = /<(?:script|object|embed|option|style)/i
      , bu = new RegExp("<(?:" + bl + ")[\\s/>]","i")
      , bv = /^(?:checkbox|radio)$/
      , bw = /checked\s*(?:[^=]|=\s*.checked.)/i
      , bx = /\/(java|ecma)script/i
      , by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , bz = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , bA = bk(e)
      , bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option,
    bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead,
    bz.th = bz.td,
    p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
    p.fn.extend({
        text: function(a) {
            return p.access(this, function(a) {
                return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
            }
            , null , a, arguments.length)
        },
        wrapAll: function(a) {
            if (p.isFunction(a))
                return this.each(function(b) {
                    p(this).wrapAll(a.call(this, b))
                }
                );
            if (this[0]) {
                var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)
                        a = a.firstChild;
                    return a
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return p.isFunction(a) ? this.each(function(b) {
                p(this).wrapInner(a.call(this, b))
            }
            ) : this.each(function() {
                var b = p(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = p.isFunction(a);
            return this.each(function(c) {
                p(this).wrapAll(b ? a.call(this, c) : a)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }
            ).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
            }
            )
        },
        before: function() {
            if (!bh(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                }
                );
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!bh(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                }
                );
            if (arguments.length) {
                var a = p.clean(arguments);
                return this.pushStack(p.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            var c, d = 0;
            for (; (c = this[d]) != null ; d++)
                if (!a || p.filter(a, [c]).length)
                    !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")),
                    p.cleanData([c])),
                    c.parentNode && c.parentNode.removeChild(c);
            return this
        },
        empty: function() {
            var a, b = 0;
            for (; (a = this[b]) != null ; b++) {
                a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                while (a.firstChild)
                    a.removeChild(a.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            return a = a == null  ? !1 : a,
            b = b == null  ? a : b,
            this.map(function() {
                return p.clone(this, a, b)
            }
            )
        },
        html: function(a) {
            return p.access(this, function(a) {
                var c = this[0] || {}
                  , d = 0
                  , e = this.length;
                if (a === b)
                    return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(bo, "<$1></$2>");
                    try {
                        for (; d < e; d++)
                            c = this[d] || {},
                            c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")),
                            c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }
            , null , a, arguments.length)
        },
        replaceWith: function(a) {
            return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                var c = p(this)
                  , d = c.html();
                c.replaceWith(a.call(this, b, d))
            }
            ) : (typeof a != "string" && (a = p(a).detach()),
            this.each(function() {
                var b = this.nextSibling
                  , c = this.parentNode;
                p(this).remove(),
                b ? p(b).before(a) : p(c).append(a)
            }
            ))
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, h, i = 0, j = a[0], k = [], l = this.length;
            if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j))
                return this.each(function() {
                    p(this).domManip(a, c, d)
                }
                );
            if (p.isFunction(j))
                return this.each(function(e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b),
                    f.domManip(a, c, d)
                }
                );
            if (this[0]) {
                e = p.buildFragment(a, this, k),
                g = e.fragment,
                f = g.firstChild,
                g.childNodes.length === 1 && (g = f);
                if (f) {
                    c = c && p.nodeName(f, "tr");
                    for (h = e.cacheable || l - 1; i < l; i++)
                        d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
                }
                g = f = null ,
                k.length && p.each(k, function(a, b) {
                    b.src ? p.ajax ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")),
                    b.parentNode && b.parentNode.removeChild(b)
                }
                )
            }
            return this
        }
    }),
    p.buildFragment = function(a, c, d) {
        var f, g, h, i = a[0];
        return c = c || e,
        c = !c.nodeType && c[0] || c,
        c = c.ownerDocument || c,
        a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0,
        f = p.fragments[i],
        h = f !== b),
        f || (f = c.createDocumentFragment(),
        p.clean(a, c, f, d),
        g && (p.fragments[i] = h && f)),
        {
            fragment: f,
            cacheable: g
        }
    }
    ,
    p.fragments = {},
    p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        p.fn[a] = function(c) {
            var d, e = 0, f = [], g = p(c), h = g.length, i = this.length === 1 && this[0].parentNode;
            if ((i == null  || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1)
                return g[b](this[0]),
                this;
            for (; e < h; e++)
                d = (e > 0 ? this.clone(!0) : this).get(),
                p(g[e])[b](d),
                f = f.concat(d);
            return this.pushStack(f, a, g.selector)
        }
    }
    ),
    p.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML,
            bB.removeChild(g = bB.firstChild));
            if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
                bE(a, g),
                d = bF(a),
                e = bF(g);
                for (f = 0; d[f]; ++f)
                    e[f] && bE(d[f], e[f])
            }
            if (b) {
                bD(a, g);
                if (c) {
                    d = bF(a),
                    e = bF(g);
                    for (f = 0; d[f]; ++f)
                        bD(d[f], e[f])
                }
            }
            return d = e = null ,
            g
        },
        clean: function(a, b, c, d) {
            var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA, t = [];
            if (!b || typeof b.createDocumentFragment == "undefined")
                b = e;
            for (f = 0; (h = a[f]) != null ; f++) {
                typeof h == "number" && (h += "");
                if (!h)
                    continue;if (typeof h == "string")
                    if (!br.test(h))
                        h = b.createTextNode(h);
                    else {
                        s = s || bk(b),
                        l = b.createElement("div"),
                        s.appendChild(l),
                        h = h.replace(bo, "<$1></$2>"),
                        i = (bp.exec(h) || ["", ""])[1].toLowerCase(),
                        j = bz[i] || bz._default,
                        k = j[0],
                        l.innerHTML = j[1] + h + j[2];
                        while (k--)
                            l = l.lastChild;
                        if (!p.support.tbody) {
                            m = bq.test(h),
                            n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                            for (g = n.length - 1; g >= 0; --g)
                                p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
                        }
                        !p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                        h = l.childNodes,
                        l.parentNode.removeChild(l)
                    }
                h.nodeType ? t.push(h) : p.merge(t, h)
            }
            l && (h = l = s = null );
            if (!p.support.appendChecked)
                for (f = 0; (h = t[f]) != null ; f++)
                    p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
            if (c) {
                q = function(a) {
                    if (!a.type || bx.test(a.type))
                        return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
                }
                ;
                for (f = 0; (h = t[f]) != null ; f++)
                    if (!p.nodeName(h, "script") || !q(h))
                        c.appendChild(h),
                        typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q),
                        t.splice.apply(t, [f + 1, 0].concat(r)),
                        f += r.length)
            }
            return t
        },
        cleanData: function(a, b) {
            var c, d, e, f, g = 0, h = p.expando, i = p.cache, j = p.support.deleteExpando, k = p.event.special;
            for (; (e = a[g]) != null ; g++)
                if (b || p.acceptData(e)) {
                    d = e[h],
                    c = d && i[d];
                    if (c) {
                        if (c.events)
                            for (f in c.events)
                                k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                        i[d] && (delete i[d],
                        j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null ,
                        p.deletedIds.push(d))
                    }
                }
        }
    }),
    function() {
        var a, b;
        p.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }
        ,
        a = p.uaMatch(g.userAgent),
        b = {},
        a.browser && (b[a.browser] = !0,
        b.version = a.version),
        b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0),
        p.browser = b,
        p.sub = function() {
            function a(b, c) {
                return new a.fn.init(b,c)
            }
            p.extend(!0, a, this),
            a.superclass = this,
            a.fn = a.prototype = this(),
            a.fn.constructor = a,
            a.sub = this.sub,
            a.fn.init = function c(c, d) {
                return d && d instanceof p && !(d instanceof a) && (d = a(d)),
                p.fn.init.call(this, c, d, b)
            }
            ,
            a.fn.init.prototype = a.fn;
            var b = a(e);
            return a
        }
    }
    ();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i, bL = /opacity=([^)]*)/, bM = /^(top|right|bottom|left)$/, bN = /^(none|table(?!-c[ea]).+)/, bO = /^margin/, bP = new RegExp("^(" + q + ")(.*)$","i"), bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$","i"), bR = new RegExp("^([-+])=(" + q + ")","i"), bS = {}, bT = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bU = {
        letterSpacing: 0,
        fontWeight: 400
    }, bV = ["Top", "Right", "Bottom", "Left"], bW = ["Webkit", "O", "Moz", "ms"], bX = p.fn.toggle;
    p.fn.extend({
        css: function(a, c) {
            return p.access(this, function(a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c)
            }
            , a, c, arguments.length > 1)
        },
        show: function() {
            return b$(this, !0)
        },
        hide: function() {
            return b$(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
                (c ? a : bZ(this)) ? p(this).show() : p(this).hide()
            }
            )
        }
    }),
    p.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": p.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)
                return;
            var f, g, h, i = p.camelCase(c), j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)),
            h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b)
                return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d,
            g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)),
            g = "number");
            if (d == null  || g === "number" && isNaN(d))
                return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b)
                try {
                    j[c] = d
                } catch (k) {}
        },
        css: function(a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)),
            h = p.cssHooks[c] || p.cssHooks[i],
            h && "get" in h && (f = h.get(a, !0, e)),
            f === b && (f = bH(a, c)),
            f === "normal" && c in bU && (f = bU[c]),
            d || e !== b ? (g = parseFloat(f),
            d || p.isNumeric(g) ? g || 0 : f) : f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b)
                f[e] = a.style[e],
                a.style[e] = b[e];
            d = c.call(a);
            for (e in b)
                a.style[e] = f[e];
            return d
        }
    }),
    a.getComputedStyle ? bH = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null ), i = b.style;
        return h && (d = h[c],
        d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)),
        bQ.test(d) && bO.test(c) && (e = i.width,
        f = i.minWidth,
        g = i.maxWidth,
        i.minWidth = i.maxWidth = i.width = d,
        d = h.width,
        i.width = e,
        i.minWidth = f,
        i.maxWidth = g)),
        d
    }
     : e.documentElement.currentStyle && (bH = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        return e == null  && f && f[b] && (e = f[b]),
        bQ.test(e) && !bM.test(b) && (c = f.left,
        d = a.runtimeStyle && a.runtimeStyle.left,
        d && (a.runtimeStyle.left = a.currentStyle.left),
        f.left = b === "fontSize" ? "1em" : e,
        e = f.pixelLeft + "px",
        f.left = c,
        d && (a.runtimeStyle.left = d)),
        e === "" ? "auto" : e
    }
    ),
    p.each(["height", "width"], function(a, b) {
        p.cssHooks[b] = {
            get: function(a, c, d) {
                if (c)
                    return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
                        return cb(a, b, d)
                    }
                    ) : cb(a, b, d)
            },
            set: function(a, c, d) {
                return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    }
    ),
    p.support.opacity || (p.cssHooks.opacity = {
        get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d && !d.filter)
                    return
            }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
        }
    }),
    p(function() {
        p.support.reliableMarginRight || (p.cssHooks.marginRight = {
            get: function(a, b) {
                return p.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b)
                        return bH(a, "marginRight")
                }
                )
            }
        }),
        !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
            p.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bQ.test(d) ? p(a).position()[b] + "px" : d
                    }
                }
            }
        }
        )
    }
    ),
    p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
    }
    ,
    p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a)
    }
    ),
    p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        p.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++)
                    f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        },
        bO.test(a) || (p.cssHooks[a + b].set = b_)
    }
    );
    var cd = /%20/g
      , ce = /\[\]$/
      , cf = /\r?\n/g
      , cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , ch = /^(?:select|textarea)/i;
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this
            }
            ).filter(function() {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
            }
            ).map(function(a, b) {
                var c = p(this).val();
                return c == null  ? null  : p.isArray(c) ? p.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(cf, "\r\n")
                    }
                }
                ) : {
                    name: b.name,
                    value: c.replace(cf, "\r\n")
                }
            }
            ).get()
        }
    }),
    p.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = p.isFunction(b) ? b() : b == null  ? "" : b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a))
            p.each(a, function() {
                f(this.name, this.value)
            }
            );
        else
            for (d in a)
                ci(d, a[d], c, f);
        return e.join("&").replace(cd, "+")
    }
    ;
    var cj, ck, cl = /#.*$/, cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, co = /^(?:GET|HEAD)$/, cp = /^\/\//, cq = /\?/, cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, cs = /([?&])_=[^&]*/, ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, cu = p.fn.load, cv = {}, cw = {}, cx = ["*/"] + ["*"];
    try {
        ck = f.href
    } catch (cy) {
        ck = e.createElement("a"),
        ck.href = "",
        ck = ck.href
    }
    cj = ct.exec(ck.toLowerCase()) || [],
    p.fn.load = function(a, c, d) {
        if (typeof a != "string" && cu)
            return cu.apply(this, arguments);
        if (!this.length)
            return this;
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length),
        a = a.slice(0, i)),
        p.isFunction(c) ? (d = c,
        c = b) : c && typeof c == "object" && (f = "POST"),
        p.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && h.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments,
            h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
        }
        ),
        this
    }
    ,
    p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        p.fn[b] = function(a) {
            return this.on(b, a)
        }
    }
    ),
    p.each(["get", "post"], function(a, c) {
        p[c] = function(a, d, e, f) {
            return p.isFunction(d) && (f = f || e,
            e = d,
            d = b),
            p.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }
    ),
    p.extend({
        getScript: function(a, c) {
            return p.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return p.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? cB(a, p.ajaxSettings) : (b = a,
            a = p.ajaxSettings),
            cB(a, b),
            a
        },
        ajaxSettings: {
            url: ck,
            isLocal: cn.test(cj[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cx
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: cz(cv),
        ajaxTransport: cz(cw),
        ajax: function(a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2)
                    return;
                v = 2,
                h && clearTimeout(h),
                g = b,
                e = i || "",
                x.readyState = a > 0 ? 4 : 0,
                f && (u = cC(l, x, f));
                if (a >= 200 && a < 300 || a === 304)
                    l.ifModified && (w = x.getResponseHeader("Last-Modified"),
                    w && (p.lastModified[d] = w),
                    w = x.getResponseHeader("Etag"),
                    w && (p.etag[d] = w)),
                    a === 304 ? (y = "notmodified",
                    k = !0) : (k = cD(l, u),
                    y = k.state,
                    s = k.data,
                    t = k.error,
                    k = !t);
                else {
                    t = y;
                    if (!y || a)
                        y = "error",
                        a < 0 && (a = 0)
                }
                x.status = a,
                x.statusText = (c || y) + "",
                k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
                x.statusCode(r),
                r = b,
                j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]),
                q.fireWith(m, [x, y]),
                j && (n.trigger("ajaxComplete", [x, l]),
                --p.active || p.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (c = a,
            a = b),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c), m = l.context || l, n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event, o = p.Deferred(), q = p.Callbacks("once memory"), r = l.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!v) {
                        var c = a.toLowerCase();
                        a = u[c] = u[c] || a,
                        t[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return v === 2 ? e : null 
                },
                getResponseHeader: function(a) {
                    var c;
                    if (v === 2) {
                        if (!f) {
                            f = {};
                            while (c = cm.exec(e))
                                f[c[1].toLowerCase()] = c[2]
                        }
                        c = f[a.toLowerCase()]
                    }
                    return c === b ? null  : c
                },
                overrideMimeType: function(a) {
                    return v || (l.mimeType = a),
                    this
                },
                abort: function(a) {
                    return a = a || w,
                    g && g.abort(a),
                    y(0, a),
                    this
                }
            };
            o.promise(x),
            x.success = x.done,
            x.error = x.fail,
            x.complete = q.add,
            x.statusCode = function(a) {
                if (a) {
                    var b;
                    if (v < 2)
                        for (b in a)
                            r[b] = [r[b], a[b]];
                    else
                        b = a[x.status],
                        x.always(b)
                }
                return this
            }
            ,
            l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"),
            l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s),
            l.crossDomain == null  && (i = ct.exec(l.url.toLowerCase()) || !1,
            l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)),
            l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)),
            cA(cv, l, c, x);
            if (v === 2)
                return x;
            j = l.global,
            l.type = l.type.toUpperCase(),
            l.hasContent = !co.test(l.type),
            j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) {
                l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data,
                delete l.data),
                d = l.url;
                if (l.cache === !1) {
                    var z = p.now()
                      , A = l.url.replace(cs, "$1_=" + z);
                    l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
                }
            }
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType),
            l.ifModified && (d = d || l.url,
            p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]),
            p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
            x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers)
                x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
                w = "abort";
                for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    x[k](l[k]);
                g = cA(cw, l, c, x);
                if (!g)
                    y(-1, "No Transport");
                else {
                    x.readyState = 1,
                    j && n.trigger("ajaxSend", [x, l]),
                    l.async && l.timeout > 0 && (h = setTimeout(function() {
                        x.abort("timeout")
                    }
                    , l.timeout));
                    try {
                        v = 1,
                        g.send(t, y)
                    } catch (B) {
                        if (v < 2)
                            y(-1, B);
                        else
                            throw B
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cE = []
      , cF = /\?/
      , cG = /(=)\?(?=&|$)|\?\?/
      , cH = p.now();
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0,
            a
        }
    }),
    p.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && cG.test(j), m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m)
            return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback,
            g = a[f],
            l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f),
            c.converters["script json"] = function() {
                return h || p.error(f + " was not called"),
                h[0]
            }
            ,
            c.dataTypes[0] = "json",
            a[f] = function() {
                h = arguments
            }
            ,
            e.always(function() {
                a[f] = g,
                c[f] && (c.jsonpCallback = d.jsonpCallback,
                cE.push(f)),
                h && p.isFunction(g) && g(h[0]),
                h = g = b
            }
            ),
            "script"
    }
    ),
    p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return p.globalEval(a),
                a
            }
        }
    }),
    p.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }
    ),
    p.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function(f, g) {
                    c = e.createElement("script"),
                    c.async = "async",
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState))
                            c.onload = c.onreadystatechange = null ,
                            d && c.parentNode && d.removeChild(c),
                            c = b,
                            e || g(200, "success")
                    }
                    ,
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    }
    );
    var cI, cJ = a.ActiveXObject ? function() {
        for (var a in cI)
            cI[a](0, 1)
    }
     : !1, cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && cL() || cM()
    }
     : cL,
    function(a) {
        p.extend(p.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    }
    (p.ajaxSettings.xhr()),
    p.support.ajax && p.ajaxTransport(function(c) {
        if (!c.crossDomain || p.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                    if (c.xhrFields)
                        for (h in c.xhrFields)
                            i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e)
                            i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null ),
                    d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || i.readyState === 4)) {
                                d = b,
                                g && (i.onreadystatechange = p.noop,
                                cJ && delete cI[g]);
                                if (e)
                                    i.readyState !== 4 && i.abort();
                                else {
                                    h = i.status,
                                    k = i.getAllResponseHeaders(),
                                    l = {},
                                    m = i.responseXML,
                                    m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {}
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    !h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
                                }
                            }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }
                    ,
                    c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK,
                    cJ && (cI || (cI = {},
                    p(a).unload(cJ)),
                    cI[g] = d),
                    i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    }
    );
    var cN, cO, cP = /^(?:toggle|show|hide)$/, cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$","i"), cR = /queueHooks$/, cS = [cY], cT = {
        "*": [function(a, b) {
            var c, d, e = this.createTween(a, b), f = cQ.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
            if (f) {
                c = +f[2],
                d = f[3] || (p.cssNumber[a] ? "" : "px");
                if (d !== "px" && h) {
                    h = p.css(e.elem, a, !0) || c || 1;
                    do
                        i = i || ".5",
                        h = h / i,
                        p.style(e.elem, a, h + d);
                    while (i !== (i = e.cur() / g) && i !== 1 && --j)
                }
                e.unit = d,
                e.start = h,
                e.end = f[1] ? h + (f[1] + 1) * c : c
            }
            return e
        }
        ]
    };
    p.Animation = p.extend(cW, {
        tweener: function(a, b) {
            p.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            var c, d = 0, e = a.length;
            for (; d < e; d++)
                c = a[d],
                cT[c] = cT[c] || [],
                cT[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? cS.unshift(a) : cS.push(a)
        }
    }),
    p.Tween = cZ,
    cZ.prototype = {
        constructor: cZ,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (p.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = cZ.propHooks[this.prop];
            return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = cZ.propHooks[this.prop];
            return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
            this
        }
    },
    cZ.prototype.init.prototype = cZ.prototype,
    cZ.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return a.elem[a.prop] == null  || !!a.elem.style && a.elem.style[a.prop] != null  ? (b = p.css(a.elem, a.prop, !1, ""),
                !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },
            set: function(a) {
                p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null  || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    p.each(["toggle", "show", "hide"], function(a, b) {
        var c = p.fn[b];
        p.fn[b] = function(d, e, f) {
            return d == null  || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
        }
    }
    ),
    p.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(bZ).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = p.isEmptyObject(a)
              , f = p.speed(b, c, d)
              , g = function() {
                var b = cW(this, p.extend({}, a), f);
                e && b.stop(!0)
            }
            ;
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            }
            ;
            return typeof a != "string" && (d = c,
            c = a,
            a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , c = a != null  && a + "queueHooks"
                  , f = p.timers
                  , g = p._data(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g)
                        g[c] && g[c].stop && cR.test(c) && e(g[c]);
                for (c = f.length; c--; )
                    f[c].elem === this && (a == null  || f[c].queue === a) && (f[c].anim.stop(d),
                    b = !1,
                    f.splice(c, 1));
                (b || !d) && p.dequeue(this, a)
            }
            )
        }
    }),
    p.each({
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        p.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }
    ),
    p.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : {
            complete: c || !c && b || p.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !p.isFunction(b) && b
        };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null  || d.queue === !0)
            d.queue = "fx";
        return d.old = d.complete,
        d.complete = function() {
            p.isFunction(d.old) && d.old.call(this),
            d.queue && p.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    p.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    p.timers = [],
    p.fx = cZ.prototype.init,
    p.fx.tick = function() {
        var a, b = p.timers, c = 0;
        for (; c < b.length; c++)
            a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop()
    }
    ,
    p.fx.timer = function(a) {
        a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
    }
    ,
    p.fx.interval = 13,
    p.fx.stop = function() {
        clearInterval(cO),
        cO = null 
    }
    ,
    p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    p.fx.step = {},
    p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
            return a === b.elem
        }
        ).length
    }
    );
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length)
            return a === b ? this : this.each(function(b) {
                p.offset.setOffset(this, a, b)
            }
            );
        var c, d, e, f, g, h, i, j = {
            top: 0,
            left: 0
        }, k = this[0], l = k && k.ownerDocument;
        if (!l)
            return;
        return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement,
        p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()),
        e = da(l),
        f = c.clientTop || d.clientTop || 0,
        g = c.clientLeft || d.clientLeft || 0,
        h = e.pageYOffset || c.scrollTop,
        i = e.pageXOffset || c.scrollLeft,
        {
            top: j.top + h - f,
            left: j.left + i - g
        }) : j)
    }
    ,
    p.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop
              , c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0,
            c += parseFloat(p.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a), f = e.offset(), g = p.css(a, "top"), h = p.css(a, "left"), i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1, j = {}, k = {}, l, m;
            i ? (k = e.position(),
            l = k.top,
            m = k.left) : (l = parseFloat(g) || 0,
            m = parseFloat(h) || 0),
            p.isFunction(b) && (b = b.call(a, c, f)),
            b.top != null  && (j.top = b.top - f.top + l),
            b.left != null  && (j.left = b.left - f.left + m),
            "using" in b ? b.using.call(a, j) : e.css(j)
        }
    },
    p.fn.extend({
        position: function() {
            if (!this[0])
                return;
            var a = this[0]
              , b = this.offsetParent()
              , c = this.offset()
              , d = c_.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0,
            c.left -= parseFloat(p.css(a, "marginLeft")) || 0,
            d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0,
            {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || e.body;
                while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static")
                    a = a.offsetParent;
                return a || e.body
            }
            )
        }
    }),
    p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function(e) {
            return p.access(this, function(a, e, f) {
                var g = da(a);
                if (f === b)
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
            }
            , a, e, arguments.length, null )
        }
    }
    ),
    p.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        p.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            p.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean")
                  , h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function(c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement,
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
                }
                , c, g ? e : b, g, null )
            }
        }
        )
    }
    ),
    a.jQuery = a.$ = p,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return p
    }
    )
}
)(window);

/* d3.js */
!function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }
    function t(n) {
        return null  === n ? 0 / 0 : +n
    }
    function e(n) {
        return !isNaN(n)
    }
    function r(n) {
        return {
            left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0),
                arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i
                }
                return r
            },
            right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0),
                arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1
                }
                return r
            }
        }
    }
    function u(n) {
        return n.length
    }
    function i(n) {
        for (var t = 1; n * t % 1; )
            t *= 10;
        return t
    }
    function o(n, t) {
        for (var e in t)
            Object.defineProperty(n.prototype, e, {
                value: t[e],
                enumerable: !1
            })
    }
    function a() {
        this._ = Object.create(null )
    }
    function c(n) {
        return (n += "") === la || n[0] === sa ? sa + n : n
    }
    function l(n) {
        return (n += "")[0] === sa ? n.slice(1) : n
    }
    function s(n) {
        return c(n) in this._
    }
    function f(n) {
        return (n = c(n)) in this._ && delete this._[n]
    }
    function h() {
        var n = [];
        for (var t in this._)
            n.push(l(t));
        return n
    }
    function g() {
        var n = 0;
        for (var t in this._)
            ++n;
        return n
    }
    function p() {
        for (var n in this._)
            return !1;
        return !0
    }
    function v() {
        this._ = Object.create(null )
    }
    function d(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }
    function m(n, t) {
        if (t in n)
            return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e = 0, r = fa.length; r > e; ++e) {
            var u = fa[e] + t;
            if (u in n)
                return u
        }
    }
    function y() {}
    function x() {}
    function M(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i; )
                (t = r[u].on) && t.apply(this, arguments);
            return n
        }
        var e = []
          , r = new a;
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null ,
            e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)),
            r.remove(t)),
            u && e.push(r.set(t, {
                on: u
            })),
            n)
        }
        ,
        t
    }
    function _() {
        Bo.event.preventDefault()
    }
    function b() {
        for (var n, t = Bo.event; n = t.sourceEvent; )
            t = n;
        return t
    }
    function w(n) {
        for (var t = new x, e = 0, r = arguments.length; ++e < r; )
            t[arguments[e]] = M(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = Bo.event;
                    u.target = n,
                    Bo.event = u,
                    t[u.type].apply(e, r)
                } finally {
                    Bo.event = i
                }
            }
        }
        ,
        t
    }
    function S(n) {
        return ga(n, ya),
        n
    }
    function k(n) {
        return "function" == typeof n ? n : function() {
            return pa(n, this)
        }
    }
    function E(n) {
        return "function" == typeof n ? n : function() {
            return va(n, this)
        }
    }
    function A(n, t) {
        function e() {
            this.removeAttribute(n)
        }
        function r() {
            this.removeAttributeNS(n.space, n.local)
        }
        function u() {
            this.setAttribute(n, t)
        }
        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }
        function o() {
            var e = t.apply(this, arguments);
            null  == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }
        function a() {
            var e = t.apply(this, arguments);
            null  == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = Bo.ns.qualify(n),
        null  == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }
    function C(n) {
        return n.trim().replace(/\s+/g, " ")
    }
    function N(n) {
        return new RegExp("(?:^|\\s+)" + Bo.requote(n) + "(?:\\s+|$)","g")
    }
    function z(n) {
        return (n + "").trim().split(/^|\s+/)
    }
    function L(n, t) {
        function e() {
            for (var e = -1; ++e < u; )
                n[e](this, t)
        }
        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u; )
                n[e](this, r)
        }
        n = z(n).map(T);
        var u = n.length;
        return "function" == typeof t ? r : e
    }
    function T(n) {
        var t = N(n);
        return function(e, r) {
            if (u = e.classList)
                return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0,
            t.test(u) || e.setAttribute("class", C(u + " " + n))) : e.setAttribute("class", C(u.replace(t, " ")))
        }
    }
    function q(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }
        function u() {
            this.style.setProperty(n, t, e)
        }
        function i() {
            var r = t.apply(this, arguments);
            null  == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null  == t ? r : "function" == typeof t ? i : u
    }
    function R(n, t) {
        function e() {
            delete this[n]
        }
        function r() {
            this[n] = t
        }
        function u() {
            var e = t.apply(this, arguments);
            null  == e ? delete this[n] : this[n] = e
        }
        return null  == t ? e : "function" == typeof t ? u : r
    }
    function D(n) {
        return "function" == typeof n ? n : (n = Bo.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local)
        }
         : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n)
        }
    }
    function P(n) {
        return {
            __data__: n
        }
    }
    function U(n) {
        return function() {
            return ma(this, n)
        }
    }
    function j(t) {
        return arguments.length || (t = n),
        function(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
        }
    }
    function F(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)
                (u = i[o]) && t(u, o, e);
        return n
    }
    function H(n) {
        return ga(n, Ma),
        n
    }
    function O(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update, c = a.length;
            for (i != e && (e = i,
            t = 0),
            u >= t && (t = u + 1); !(o = a[t]) && ++t < c; )
                ;
            return o
        }
    }
    function Y() {
        var n = this.__transition__;
        n && ++n.active
    }
    function I(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$),
            delete this[o])
        }
        function u() {
            var u = c(t, Jo(arguments));
            r.call(this),
            this.addEventListener(n, this[o] = u, u.$ = e),
            u._ = t
        }
        function i() {
            var t, e = new RegExp("^__on([^.]+)" + Bo.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$),
                    delete this[r]
                }
        }
        var o = "__on" + n
          , a = n.indexOf(".")
          , c = Z;
        a > 0 && (n = n.slice(0, a));
        var l = ba.get(n);
        return l && (n = l,
        c = V),
        a ? t ? u : r : t ? y : i
    }
    function Z(n, t) {
        return function(e) {
            var r = Bo.event;
            Bo.event = e,
            t[0] = this.__data__;
            try {
                n.apply(this, t)
            } finally {
                Bo.event = r
            }
        }
    }
    function V(n, t) {
        var e = Z(n, t);
        return function(n) {
            var t = this
              , r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }
    function X() {
        var n = ".dragsuppress-" + ++Sa
          , t = "click" + n
          , e = Bo.select(Qo).on("touchmove" + n, _).on("dragstart" + n, _).on("selectstart" + n, _);
        if (wa) {
            var r = Ko.style
              , u = r[wa];
            r[wa] = "none"
        }
        return function(i) {
            function o() {
                e.on(t, null )
            }
            e.on(n, null ),
            wa && (r[wa] = u),
            i && (e.on(t, function() {
                _(),
                o()
            }
            , !0),
            setTimeout(o, 0))
        }
    }
    function $(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > ka && (Qo.scrollX || Qo.scrollY)) {
                e = Bo.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var u = e[0][0].getScreenCTM();
                ka = !(u.f || u.e),
                e.remove()
            }
            return ka ? (r.x = t.pageX,
            r.y = t.pageY) : (r.x = t.clientX,
            r.y = t.clientY),
            r = r.matrixTransform(n.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        var i = n.getBoundingClientRect();
        return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
    }
    function B() {
        return Bo.event.changedTouches[0].identifier
    }
    function W() {
        return Bo.event.target
    }
    function J() {
        return Qo
    }
    function G(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }
    function K(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
    }
    function Q(n) {
        return n > 1 ? 0 : -1 > n ? Ea : Math.acos(n)
    }
    function nt(n) {
        return n > 1 ? Ca : -1 > n ? -Ca : Math.asin(n)
    }
    function tt(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }
    function et(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }
    function rt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }
    function ut(n) {
        return (n = Math.sin(n / 2)) * n
    }
    function it() {}
    function ot(n, t, e) {
        return this instanceof ot ? (this.h = +n,
        this.s = +t,
        void (this.l = +e)) : arguments.length < 2 ? n instanceof ot ? new ot(n.h,n.s,n.l) : Mt("" + n, _t, ot) : new ot(n,t,e)
    }
    function at(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360),
            60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }
        function u(n) {
            return Math.round(255 * r(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n,
        t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t,
        e = 0 > e ? 0 : e > 1 ? 1 : e,
        o = .5 >= e ? e * (1 + t) : e + t - e * t,
        i = 2 * e - o,
        new dt(u(n + 120),u(n),u(n - 120))
    }
    function ct(n, t, e) {
        return this instanceof ct ? (this.h = +n,
        this.c = +t,
        void (this.l = +e)) : arguments.length < 2 ? n instanceof ct ? new ct(n.h,n.c,n.l) : n instanceof st ? ht(n.l, n.a, n.b) : ht((n = bt((n = Bo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new ct(n,t,e)
    }
    function lt(n, t, e) {
        return isNaN(n) && (n = 0),
        isNaN(t) && (t = 0),
        new st(e,Math.cos(n *= La) * t,Math.sin(n) * t)
    }
    function st(n, t, e) {
        return this instanceof st ? (this.l = +n,
        this.a = +t,
        void (this.b = +e)) : arguments.length < 2 ? n instanceof st ? new st(n.l,n.a,n.b) : n instanceof ct ? lt(n.h, n.c, n.l) : bt((n = dt(n)).r, n.g, n.b) : new st(n,t,e)
    }
    function ft(n, t, e) {
        var r = (n + 16) / 116
          , u = r + t / 500
          , i = r - e / 200;
        return u = gt(u) * Ya,
        r = gt(r) * Ia,
        i = gt(i) * Za,
        new dt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i),vt(-.969266 * u + 1.8760108 * r + .041556 * i),vt(.0556434 * u - .2040259 * r + 1.0572252 * i))
    }
    function ht(n, t, e) {
        return n > 0 ? new ct(Math.atan2(e, t) * Ta,Math.sqrt(t * t + e * e),n) : new ct(0 / 0,0 / 0,n)
    }
    function gt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }
    function pt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }
    function vt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }
    function dt(n, t, e) {
        return this instanceof dt ? (this.r = ~~n,
        this.g = ~~t,
        void (this.b = ~~e)) : arguments.length < 2 ? n instanceof dt ? new dt(n.r,n.g,n.b) : Mt("" + n, dt, at) : new dt(n,t,e)
    }
    function mt(n) {
        return new dt(n >> 16,255 & n >> 8,255 & n)
    }
    function yt(n) {
        return mt(n) + ""
    }
    function xt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }
    function Mt(n, t, e) {
        var r, u, i, o = 0, a = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n))
            switch (u = r[2].split(","),
            r[1]) {
            case "hsl":
                return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(St(u[0]), St(u[1]), St(u[2]))
            }
        return (i = $a.get(n)) ? t(i.r, i.g, i.b) : (null  == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4,
        o = o >> 4 | o,
        a = 240 & i,
        a = a >> 4 | a,
        c = 15 & i,
        c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16,
        a = (65280 & i) >> 8,
        c = 255 & i)),
        t(o, a, c))
    }
    function _t(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i),
        r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4,
        r *= 60) : (r = 0 / 0,
        u = c > 0 && 1 > c ? 0 : r),
        new ot(r,u,c)
    }
    function bt(n, t, e) {
        n = wt(n),
        t = wt(t),
        e = wt(e);
        var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Ya)
          , u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Ia)
          , i = pt((.0193339 * n + .119192 * t + .9503041 * e) / Za);
        return st(116 * u - 16, 500 * (r - u), 200 * (u - i))
    }
    function wt(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }
    function St(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }
    function kt(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }
    function Et(n) {
        return n
    }
    function At(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e,
            e = null ),
            Ct(t, e, n, r)
        }
    }
    function Ct(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && zt(c) || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c)
                } catch (r) {
                    return o.error.call(i, r),
                    void 0
                }
                o.load.call(i, n)
            } else
                o.error.call(i, c)
        }
        var i = {}
          , o = Bo.dispatch("beforesend", "progress", "load", "error")
          , a = {}
          , c = new XMLHttpRequest
          , l = null ;
        return !Qo.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest),
        "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }
        ,
        c.onprogress = function(n) {
            var t = Bo.event;
            Bo.event = n;
            try {
                o.progress.call(i, c)
            } finally {
                Bo.event = t
            }
        }
        ,
        i.header = function(n, t) {
            return n = (n + "").toLowerCase(),
            arguments.length < 2 ? a[n] : (null  == t ? delete a[n] : a[n] = t + "",
            i)
        }
        ,
        i.mimeType = function(n) {
            return arguments.length ? (t = null  == n ? null  : n + "",
            i) : t
        }
        ,
        i.responseType = function(n) {
            return arguments.length ? (l = n,
            i) : l
        }
        ,
        i.response = function(n) {
            return e = n,
            i
        }
        ,
        ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(Jo(arguments)))
            }
        }
        ),
        i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r,
            r = null ),
            c.open(e, n, !0),
            null  == t || "accept" in a || (a.accept = t + ",*/*"),
            c.setRequestHeader)
                for (var s in a)
                    c.setRequestHeader(s, a[s]);
            return null  != t && c.overrideMimeType && c.overrideMimeType(t),
            null  != l && (c.responseType = l),
            null  != u && i.on("error", u).on("load", function(n) {
                u(null , n)
            }
            ),
            o.beforesend.call(i, c),
            c.send(null  == r ? null  : r),
            i
        }
        ,
        i.abort = function() {
            return c.abort(),
            i
        }
        ,
        Bo.rebind(i, o, "on"),
        null  == r ? i : i.get(Nt(r))
    }
    function Nt(n) {
        return 1 === n.length ? function(t, e) {
            n(null  == t ? e : null )
        }
         : n
    }
    function zt(n) {
        var t = n.responseType;
        return t && "text" !== t ? n.response : n.responseText
    }
    function Lt() {
        var n = Tt()
          , t = qt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(Ga),
        Ga = setTimeout(Lt, t)),
        Ja = 0) : (Ja = 1,
        Qa(Lt))
    }
    function Tt() {
        var n = Date.now();
        for (Ka = Ba; Ka; )
            n >= Ka.t && (Ka.f = Ka.c(n - Ka.t)),
            Ka = Ka.n;
        return n
    }
    function qt() {
        for (var n, t = Ba, e = 1 / 0; t; )
            t.f ? t = n ? n.n = t.n : Ba = t.n : (t.t < e && (e = t.t),
            t = (n = t).n);
        return Wa = n,
        e
    }
    function Rt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }
    function Dt(n, t) {
        var e = Math.pow(10, 3 * ca(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / e
            }
             : function(n) {
                return n * e
            }
            ,
            symbol: n
        }
    }
    function Pt(n) {
        var t = n.decimal
          , e = n.thousands
          , r = n.grouping
          , u = n.currency
          , i = r && e ? function(n, t) {
            for (var u = n.length, i = [], o = 0, a = r[0], c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)),
            i.push(n.substring(u -= a, u + a)),
            !((c += a + 1) > t)); )
                a = r[o = (o + 1) % r.length];
            return i.reverse().join(e)
        }
         : Et;
        return function(n) {
            var e = tc.exec(n)
              , r = e[1] || " "
              , o = e[2] || ">"
              , a = e[3] || "-"
              , c = e[4] || ""
              , l = e[5]
              , s = +e[6]
              , f = e[7]
              , h = e[8]
              , g = e[9]
              , p = 1
              , v = ""
              , d = ""
              , m = !1
              , y = !0;
            switch (h && (h = +h.substring(1)),
            (l || "0" === r && "=" === o) && (l = r = "0",
            o = "="),
            g) {
            case "n":
                f = !0,
                g = "g";
                break;
            case "%":
                p = 100,
                d = "%",
                g = "f";
                break;
            case "p":
                p = 100,
                d = "%",
                g = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X":
                "#" === c && (v = "0" + g.toLowerCase());
            case "c":
                y = !1;
            case "d":
                m = !0,
                h = 0;
                break;
            case "s":
                p = -1,
                g = "r"
            }
            "$" === c && (v = u[0],
            d = u[1]),
            "r" != g || h || (g = "g"),
            null  != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))),
            g = ec.get(g) || Ut;
            var x = l && f;
            return function(n) {
                var e = d;
                if (m && n % 1)
                    return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n,
                "-") : "-" === a ? "" : a;
                if (0 > p) {
                    var c = Bo.formatPrefix(n, h);
                    n = c.scale(n),
                    e = c.symbol + d
                } else
                    n *= p;
                n = g(n, h);
                var M, _, b = n.lastIndexOf(".");
                if (0 > b) {
                    var w = y ? n.lastIndexOf("e") : -1;
                    0 > w ? (M = n,
                    _ = "") : (M = n.substring(0, w),
                    _ = n.substring(w))
                } else
                    M = n.substring(0, b),
                    _ = t + n.substring(b + 1);
                !l && f && (M = i(M, 1 / 0));
                var S = v.length + M.length + _.length + (x ? 0 : u.length)
                  , k = s > S ? new Array(S = s - S + 1).join(r) : "";
                return x && (M = i(k + M, k.length ? s - _.length : 1 / 0)),
                u += v,
                n = M + _,
                ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (x ? n : k + n)) + e
            }
        }
    }
    function Ut(n) {
        return n + ""
    }
    function jt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function Ft(n, t, e) {
        function r(t) {
            var e = n(t)
              , r = i(e, 1);
            return r - t > t - e ? e : r
        }
        function u(e) {
            return t(e = n(new uc(e - 1)), 1),
            e
        }
        function i(n, e) {
            return t(n = new uc(+n), e),
            n
        }
        function o(n, r, i) {
            var o = u(n)
              , a = [];
            if (i > 1)
                for (; r > o; )
                    e(o) % i || a.push(new Date(+o)),
                    t(o, 1);
            else
                for (; r > o; )
                    a.push(new Date(+o)),
                    t(o, 1);
            return a
        }
        function a(n, t, e) {
            try {
                uc = jt;
                var r = new jt;
                return r._ = n,
                o(r, t, e)
            } finally {
                uc = Date
            }
        }
        n.floor = n,
        n.round = r,
        n.ceil = u,
        n.offset = i,
        n.range = o;
        var c = n.utc = Ht(n);
        return c.floor = c,
        c.round = Ht(r),
        c.ceil = Ht(u),
        c.offset = Ht(i),
        c.range = a,
        n
    }
    function Ht(n) {
        return function(t, e) {
            try {
                uc = jt;
                var r = new jt;
                return r._ = t,
                n(r, e)._
            } finally {
                uc = Date
            }
        }
    }
    function Ot(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r; )
                    37 === n.charCodeAt(a) && (o.push(n.slice(c, a)),
                    null  != (u = oc[e = n.charAt(++a)]) && (e = n.charAt(++a)),
                    (i = C[e]) && (e = i(t, null  == u ? "e" === e ? " " : "0" : u)),
                    o.push(e),
                    c = a + 1);
                return o.push(n.slice(c, a)),
                o.join("")
            }
            var r = n.length;
            return t.parse = function(t) {
                var r = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null 
                }
                  , u = e(r, n, t, 0);
                if (u != t.length)
                    return null ;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null  != r.Z && uc !== jt
                  , o = new (i ? jt : uc);
                return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1),
                o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d),
                o.setHours(r.H + (0 | r.Z / 100), r.M + r.Z % 100, r.S, r.L),
                i ? o._ : o
            }
            ,
            t.toString = function() {
                return n
            }
            ,
            t
        }
        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, l = e.length; c > a; ) {
                if (r >= l)
                    return -1;
                if (u = t.charCodeAt(a++),
                37 === u) {
                    if (o = t.charAt(a++),
                    i = N[o in oc ? t.charAt(a++) : o],
                    !i || (r = i(n, e, r)) < 0)
                        return -1
                } else if (u != e.charCodeAt(r++))
                    return -1
            }
            return r
        }
        function r(n, t, e) {
            b.lastIndex = 0;
            var r = b.exec(t.slice(e));
            return r ? (n.w = w.get(r[0].toLowerCase()),
            e + r[0].length) : -1
        }
        function u(n, t, e) {
            M.lastIndex = 0;
            var r = M.exec(t.slice(e));
            return r ? (n.w = _.get(r[0].toLowerCase()),
            e + r[0].length) : -1
        }
        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.slice(e));
            return r ? (n.m = A.get(r[0].toLowerCase()),
            e + r[0].length) : -1
        }
        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.slice(e));
            return r ? (n.m = k.get(r[0].toLowerCase()),
            e + r[0].length) : -1
        }
        function a(n, t, r) {
            return e(n, C.c.toString(), t, r)
        }
        function c(n, t, r) {
            return e(n, C.x.toString(), t, r)
        }
        function l(n, t, r) {
            return e(n, C.X.toString(), t, r)
        }
        function s(n, t, e) {
            var r = x.get(t.slice(e, e += 2).toLowerCase());
            return null  == r ? -1 : (n.p = r,
            e)
        }
        var f = n.dateTime
          , h = n.date
          , g = n.time
          , p = n.periods
          , v = n.days
          , d = n.shortDays
          , m = n.months
          , y = n.shortMonths;
        t.utc = function(n) {
            function e(n) {
                try {
                    uc = jt;
                    var t = new uc;
                    return t._ = n,
                    r(t)
                } finally {
                    uc = Date
                }
            }
            var r = t(n);
            return e.parse = function(n) {
                try {
                    uc = jt;
                    var t = r.parse(n);
                    return t && t._
                } finally {
                    uc = Date
                }
            }
            ,
            e.toString = r.toString,
            e
        }
        ,
        t.multi = t.utc.multi = ae;
        var x = Bo.map()
          , M = It(v)
          , _ = Zt(v)
          , b = It(d)
          , w = Zt(d)
          , S = It(m)
          , k = Zt(m)
          , E = It(y)
          , A = Zt(y);
        p.forEach(function(n, t) {
            x.set(n.toLowerCase(), t)
        }
        );
        var C = {
            a: function(n) {
                return d[n.getDay()]
            },
            A: function(n) {
                return v[n.getDay()]
            },
            b: function(n) {
                return y[n.getMonth()]
            },
            B: function(n) {
                return m[n.getMonth()]
            },
            c: t(f),
            d: function(n, t) {
                return Yt(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return Yt(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return Yt(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return Yt(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return Yt(1 + rc.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return Yt(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return Yt(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return Yt(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return p[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return Yt(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return Yt(rc.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return Yt(rc.mondayOfYear(n), t, 2)
            },
            x: t(h),
            X: t(g),
            y: function(n, t) {
                return Yt(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return Yt(n.getFullYear() % 1e4, t, 4)
            },
            Z: ie,
            "%": function() {
                return "%"
            }
        }
          , N = {
            a: r,
            A: u,
            b: i,
            B: o,
            c: a,
            d: Qt,
            e: Qt,
            H: te,
            I: te,
            j: ne,
            L: ue,
            m: Kt,
            M: ee,
            p: s,
            S: re,
            U: Xt,
            w: Vt,
            W: $t,
            x: c,
            X: l,
            y: Wt,
            Y: Bt,
            Z: Jt,
            "%": oe
        };
        return t
    }
    function Yt(n, t, e) {
        var r = 0 > n ? "-" : ""
          , u = (r ? -n : n) + ""
          , i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
    }
    function It(n) {
        return new RegExp("^(?:" + n.map(Bo.requote).join("|") + ")","i")
    }
    function Zt(n) {
        for (var t = new a, e = -1, r = n.length; ++e < r; )
            t.set(n[e].toLowerCase(), e);
        return t
    }
    function Vt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 1));
        return r ? (n.w = +r[0],
        e + r[0].length) : -1
    }
    function Xt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e));
        return r ? (n.U = +r[0],
        e + r[0].length) : -1
    }
    function $t(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e));
        return r ? (n.W = +r[0],
        e + r[0].length) : -1
    }
    function Bt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 4));
        return r ? (n.y = +r[0],
        e + r[0].length) : -1
    }
    function Wt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.y = Gt(+r[0]),
        e + r[0].length) : -1
    }
    function Jt(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t,
        e + 5) : -1
    }
    function Gt(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }
    function Kt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.m = r[0] - 1,
        e + r[0].length) : -1
    }
    function Qt(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.d = +r[0],
        e + r[0].length) : -1
    }
    function ne(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 3));
        return r ? (n.j = +r[0],
        e + r[0].length) : -1
    }
    function te(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.H = +r[0],
        e + r[0].length) : -1
    }
    function ee(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.M = +r[0],
        e + r[0].length) : -1
    }
    function re(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 2));
        return r ? (n.S = +r[0],
        e + r[0].length) : -1
    }
    function ue(n, t, e) {
        ac.lastIndex = 0;
        var r = ac.exec(t.slice(e, e + 3));
        return r ? (n.L = +r[0],
        e + r[0].length) : -1
    }
    function ie(n) {
        var t = n.getTimezoneOffset()
          , e = t > 0 ? "-" : "+"
          , r = 0 | ca(t) / 60
          , u = ca(t) % 60;
        return e + Yt(r, "0", 2) + Yt(u, "0", 2)
    }
    function oe(n, t, e) {
        cc.lastIndex = 0;
        var r = cc.exec(t.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }
    function ae(n) {
        for (var t = n.length, e = -1; ++e < t; )
            n[e][0] = this(n[e][0]);
        return function(t) {
            for (var e = 0, r = n[e]; !r[1](t); )
                r = n[++e];
            return r[0](t)
        }
    }
    function ce() {}
    function le(n, t, e) {
        var r = e.s = n + t
          , u = r - n
          , i = r - u;
        e.t = n - i + (t - u)
    }
    function se(n, t) {
        n && hc.hasOwnProperty(n.type) && hc[n.type](n, t)
    }
    function fe(n, t, e) {
        var r, u = -1, i = n.length - e;
        for (t.lineStart(); ++u < i; )
            r = n[u],
            t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }
    function he(n, t) {
        var e = -1
          , r = n.length;
        for (t.polygonStart(); ++e < r; )
            fe(n[e], t, 1);
        t.polygonEnd()
    }
    function ge() {
        function n(n, t) {
            n *= La,
            t = t * La / 2 + Ea / 4;
            var e = n - r
              , o = e >= 0 ? 1 : -1
              , a = o * e
              , c = Math.cos(t)
              , l = Math.sin(t)
              , s = i * l
              , f = u * c + s * Math.cos(a)
              , h = s * o * Math.sin(a);
            pc.add(Math.atan2(h, f)),
            r = n,
            u = c,
            i = l
        }
        var t, e, r, u, i;
        vc.point = function(o, a) {
            vc.point = n,
            r = (t = o) * La,
            u = Math.cos(a = (e = a) * La / 2 + Ea / 4),
            i = Math.sin(a)
        }
        ,
        vc.lineEnd = function() {
            n(t, e)
        }
    }
    function pe(n) {
        var t = n[0]
          , e = n[1]
          , r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }
    function ve(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }
    function de(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }
    function me(n, t) {
        n[0] += t[0],
        n[1] += t[1],
        n[2] += t[2]
    }
    function ye(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }
    function xe(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t,
        n[1] /= t,
        n[2] /= t
    }
    function Me(n) {
        return [Math.atan2(n[1], n[0]), nt(n[2])]
    }
    function _e(n, t) {
        return ca(n[0] - t[0]) < Na && ca(n[1] - t[1]) < Na
    }
    function be(n, t) {
        n *= La;
        var e = Math.cos(t *= La);
        we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }
    function we(n, t, e) {
        ++dc,
        yc += (n - yc) / dc,
        xc += (t - xc) / dc,
        Mc += (e - Mc) / dc
    }
    function Se() {
        function n(n, u) {
            n *= La;
            var i = Math.cos(u *= La)
              , o = i * Math.cos(n)
              , a = i * Math.sin(n)
              , c = Math.sin(u)
              , l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c);
            mc += l,
            _c += l * (t + (t = o)),
            bc += l * (e + (e = a)),
            wc += l * (r + (r = c)),
            we(t, e, r)
        }
        var t, e, r;
        Ac.point = function(u, i) {
            u *= La;
            var o = Math.cos(i *= La);
            t = o * Math.cos(u),
            e = o * Math.sin(u),
            r = Math.sin(i),
            Ac.point = n,
            we(t, e, r)
        }
    }
    function ke() {
        Ac.point = be
    }
    function Ee() {
        function n(n, t) {
            n *= La;
            var e = Math.cos(t *= La)
              , o = e * Math.cos(n)
              , a = e * Math.sin(n)
              , c = Math.sin(t)
              , l = u * c - i * a
              , s = i * o - r * c
              , f = r * a - u * o
              , h = Math.sqrt(l * l + s * s + f * f)
              , g = r * o + u * a + i * c
              , p = h && -Q(g) / h
              , v = Math.atan2(h, g);
            Sc += p * l,
            kc += p * s,
            Ec += p * f,
            mc += v,
            _c += v * (r + (r = o)),
            bc += v * (u + (u = a)),
            wc += v * (i + (i = c)),
            we(r, u, i)
        }
        var t, e, r, u, i;
        Ac.point = function(o, a) {
            t = o,
            e = a,
            Ac.point = n,
            o *= La;
            var c = Math.cos(a *= La);
            r = c * Math.cos(o),
            u = c * Math.sin(o),
            i = Math.sin(a),
            we(r, u, i)
        }
        ,
        Ac.lineEnd = function() {
            n(t, e),
            Ac.lineEnd = ke,
            Ac.point = be
        }
    }
    function Ae() {
        return !0
    }
    function Ce(n, t, e, r, u) {
        var i = []
          , o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, e = n[0], r = n[t];
                if (_e(e, r)) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a)
                        u.point((e = n[a])[0], e[1]);
                    return u.lineEnd(),
                    void 0
                }
                var c = new ze(e,n,null ,!0)
                  , l = new ze(e,null ,c,!1);
                c.o = l,
                i.push(c),
                o.push(l),
                c = new ze(r,n,null ,!1),
                l = new ze(r,null ,c,!0),
                c.o = l,
                i.push(c),
                o.push(l)
            }
        }
        ),
        o.sort(t),
        Ne(i),
        Ne(o),
        i.length) {
            for (var a = 0, c = e, l = o.length; l > a; ++a)
                o[a].e = c = !c;
            for (var s, f, h = i[0]; ; ) {
                for (var g = h, p = !0; g.v; )
                    if ((g = g.n) === h)
                        return;
                s = g.z,
                u.lineStart();
                do {
                    if (g.v = g.o.v = !0,
                    g.e) {
                        if (p)
                            for (var a = 0, l = s.length; l > a; ++a)
                                u.point((f = s[a])[0], f[1]);
                        else
                            r(g.x, g.n.x, 1, u);
                        g = g.n
                    } else {
                        if (p) {
                            s = g.p.z;
                            for (var a = s.length - 1; a >= 0; --a)
                                u.point((f = s[a])[0], f[1])
                        } else
                            r(g.x, g.p.x, -1, u);
                        g = g.p
                    }
                    g = g.o,
                    s = g.z,
                    p = !p
                } while (!g.v);u.lineEnd()
            }
        }
    }
    function Ne(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t; )
                u.n = e = n[r],
                e.p = u,
                u = e;
            u.n = e = n[0],
            e.p = u
        }
    }
    function ze(n, t, e, r) {
        this.x = n,
        this.z = t,
        this.o = e,
        this.e = r,
        this.v = !1,
        this.n = this.p = null 
    }
    function Le(n, t, e, r) {
        return function(u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e)
            }
            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1])
            }
            function c() {
                y.point = a,
                d.lineStart()
            }
            function l() {
                y.point = o,
                d.lineEnd()
            }
            function s(n, t) {
                v.push([n, t]);
                var e = u(n, t);
                M.point(e[0], e[1])
            }
            function f() {
                M.lineStart(),
                v = []
            }
            function h() {
                s(v[0][0], v[0][1]),
                M.lineEnd();
                var n, t = M.clean(), e = x.buffer(), r = e.length;
                if (v.pop(),
                p.push(v),
                v = null ,
                r)
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1, o = -1;
                        if (r > 0) {
                            for (_ || (i.polygonStart(),
                            _ = !0),
                            i.lineStart(); ++o < r; )
                                i.point((u = n[o])[0], u[1]);
                            i.lineEnd()
                        }
                    } else
                        r > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
                        g.push(e.filter(Te))
            }
            var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {
                point: o,
                lineStart: c,
                lineEnd: l,
                polygonStart: function() {
                    y.point = s,
                    y.lineStart = f,
                    y.lineEnd = h,
                    g = [],
                    p = []
                },
                polygonEnd: function() {
                    y.point = o,
                    y.lineStart = c,
                    y.lineEnd = l,
                    g = Bo.merge(g);
                    var n = je(m, p);
                    g.length ? (_ || (i.polygonStart(),
                    _ = !0),
                    Ce(g, Re, n, e, i)) : n && (_ || (i.polygonStart(),
                    _ = !0),
                    i.lineStart(),
                    e(null , null , 1, i),
                    i.lineEnd()),
                    _ && (i.polygonEnd(),
                    _ = !1),
                    g = p = null 
                },
                sphere: function() {
                    i.polygonStart(),
                    i.lineStart(),
                    e(null , null , 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                }
            }, x = qe(), M = t(x), _ = !1;
            return y
        }
    }
    function Te(n) {
        return n.length > 1
    }
    function qe() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = [])
            },
            point: function(t, e) {
                n.push([t, e])
            },
            lineEnd: y,
            buffer: function() {
                var e = t;
                return t = [],
                n = null ,
                e
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }
    function Re(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - Ca - Na : Ca - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ca - Na : Ca - t[1])
    }
    function De(n) {
        var t, e = 0 / 0, r = 0 / 0, u = 0 / 0;
        return {
            lineStart: function() {
                n.lineStart(),
                t = 1
            },
            point: function(i, o) {
                var a = i > 0 ? Ea : -Ea
                  , c = ca(i - e);
                ca(c - Ea) < Na ? (n.point(e, r = (r + o) / 2 > 0 ? Ca : -Ca),
                n.point(u, r),
                n.lineEnd(),
                n.lineStart(),
                n.point(a, r),
                n.point(i, r),
                t = 0) : u !== a && c >= Ea && (ca(e - u) < Na && (e -= u * Na),
                ca(i - a) < Na && (i -= a * Na),
                r = Pe(e, r, i, o),
                n.point(u, r),
                n.lineEnd(),
                n.lineStart(),
                n.point(a, r),
                t = 0),
                n.point(e = i, r = o),
                u = a
            },
            lineEnd: function() {
                n.lineEnd(),
                e = r = 0 / 0
            },
            clean: function() {
                return 2 - t
            }
        }
    }
    function Pe(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return ca(o) > Na ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
    }
    function Ue(n, t, e, r) {
        var u;
        if (null  == n)
            u = e * Ca,
            r.point(-Ea, u),
            r.point(0, u),
            r.point(Ea, u),
            r.point(Ea, 0),
            r.point(Ea, -u),
            r.point(0, -u),
            r.point(-Ea, -u),
            r.point(-Ea, 0),
            r.point(-Ea, u);
        else if (ca(n[0] - t[0]) > Na) {
            var i = n[0] < t[0] ? Ea : -Ea;
            u = e * i / 2,
            r.point(-i, u),
            r.point(0, u),
            r.point(i, u)
        } else
            r.point(t[0], t[1])
    }
    function je(n, t) {
        var e = n[0]
          , r = n[1]
          , u = [Math.sin(e), -Math.cos(e), 0]
          , i = 0
          , o = 0;
        pc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var l = t[a]
              , s = l.length;
            if (s)
                for (var f = l[0], h = f[0], g = f[1] / 2 + Ea / 4, p = Math.sin(g), v = Math.cos(g), d = 1; ; ) {
                    d === s && (d = 0),
                    n = l[d];
                    var m = n[0]
                      , y = n[1] / 2 + Ea / 4
                      , x = Math.sin(y)
                      , M = Math.cos(y)
                      , _ = m - h
                      , b = _ >= 0 ? 1 : -1
                      , w = b * _
                      , S = w > Ea
                      , k = p * x;
                    if (pc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))),
                    i += S ? _ + b * Aa : _,
                    S ^ h >= e ^ m >= e) {
                        var E = de(pe(f), pe(n));
                        xe(E);
                        var A = de(u, E);
                        xe(A);
                        var C = (S ^ _ >= 0 ? -1 : 1) * nt(A[2]);
                        (r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
                    }
                    if (!d++)
                        break;
                    h = m,
                    p = x,
                    v = M,
                    f = n
                }
        }
        return (-Na > i || Na > i && 0 > pc) ^ 1 & o
    }
    function Fe(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }
        function e(n) {
            var e, i, c, l, s;
            return {
                lineStart: function() {
                    l = c = !1,
                    s = 1
                },
                point: function(f, h) {
                    var g, p = [f, h], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Ea : -Ea), h) : 0;
                    if (!e && (l = c = v) && n.lineStart(),
                    v !== c && (g = r(e, p),
                    (_e(e, g) || _e(p, g)) && (p[0] += Na,
                    p[1] += Na,
                    v = t(p[0], p[1]))),
                    v !== c)
                        s = 0,
                        v ? (n.lineStart(),
                        g = r(p, e),
                        n.point(g[0], g[1])) : (g = r(e, p),
                        n.point(g[0], g[1]),
                        n.lineEnd()),
                        e = g;
                    else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (s = 0,
                        o ? (n.lineStart(),
                        n.point(m[0][0], m[0][1]),
                        n.point(m[1][0], m[1][1]),
                        n.lineEnd()) : (n.point(m[1][0], m[1][1]),
                        n.lineEnd(),
                        n.lineStart(),
                        n.point(m[0][0], m[0][1])))
                    }
                    !v || e && _e(e, p) || n.point(p[0], p[1]),
                    e = p,
                    c = v,
                    i = d
                },
                lineEnd: function() {
                    c && n.lineEnd(),
                    e = null 
                },
                clean: function() {
                    return s | (l && c) << 1
                }
            }
        }
        function r(n, t, e) {
            var r = pe(n)
              , u = pe(t)
              , o = [1, 0, 0]
              , a = de(r, u)
              , c = ve(a, a)
              , l = a[0]
              , s = c - l * l;
            if (!s)
                return !e && n;
            var f = i * c / s
              , h = -i * l / s
              , g = de(o, a)
              , p = ye(o, f)
              , v = ye(a, h);
            me(p, v);
            var d = g
              , m = ve(p, d)
              , y = ve(d, d)
              , x = m * m - y * (ve(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x)
                  , _ = ye(d, (-m - M) / y);
                if (me(_, p),
                _ = Me(_),
                !e)
                    return _;
                var b, w = n[0], S = t[0], k = n[1], E = t[1];
                w > S && (b = w,
                w = S,
                S = b);
                var A = S - w
                  , C = ca(A - Ea) < Na
                  , N = C || Na > A;
                if (!C && k > E && (b = k,
                k = E,
                E = b),
                N ? C ? k + E > 0 ^ _[1] < (ca(_[0] - w) < Na ? k : E) : k <= _[1] && _[1] <= E : A > Ea ^ (w <= _[0] && _[0] <= S)) {
                    var z = ye(d, (-m + M) / y);
                    return me(z, p),
                    [_, Me(z)]
                }
            }
        }
        function u(t, e) {
            var r = o ? n : Ea - n
              , u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2),
            -r > e ? u |= 4 : e > r && (u |= 8),
            u
        }
        var i = Math.cos(n)
          , o = i > 0
          , a = ca(i) > Na
          , c = gr(n, 6 * La);
        return Le(t, e, c, o ? [0, -n] : [-Ea, n - Ea])
    }
    function He(n, t, e, r) {
        return function(u) {
            var i, o = u.a, a = u.b, c = o.x, l = o.y, s = a.x, f = a.y, h = 0, g = 1, p = s - c, v = f - l;
            if (i = n - c,
            p || !(i > 0)) {
                if (i /= p,
                0 > p) {
                    if (h > i)
                        return;
                    g > i && (g = i)
                } else if (p > 0) {
                    if (i > g)
                        return;
                    i > h && (h = i)
                }
                if (i = e - c,
                p || !(0 > i)) {
                    if (i /= p,
                    0 > p) {
                        if (i > g)
                            return;
                        i > h && (h = i)
                    } else if (p > 0) {
                        if (h > i)
                            return;
                        g > i && (g = i)
                    }
                    if (i = t - l,
                    v || !(i > 0)) {
                        if (i /= v,
                        0 > v) {
                            if (h > i)
                                return;
                            g > i && (g = i)
                        } else if (v > 0) {
                            if (i > g)
                                return;
                            i > h && (h = i)
                        }
                        if (i = r - l,
                        v || !(0 > i)) {
                            if (i /= v,
                            0 > v) {
                                if (i > g)
                                    return;
                                i > h && (h = i)
                            } else if (v > 0) {
                                if (h > i)
                                    return;
                                g > i && (g = i)
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: l + h * v
                            }),
                            1 > g && (u.b = {
                                x: c + g * p,
                                y: l + g * v
                            }),
                            u
                        }
                    }
                }
            }
        }
    }
    function Oe(n, t, e, r) {
        function u(r, u) {
            return ca(r[0] - n) < Na ? u > 0 ? 0 : 3 : ca(r[0] - e) < Na ? u > 0 ? 2 : 1 : ca(r[1] - t) < Na ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }
        function i(n, t) {
            return o(n.x, t.x)
        }
        function o(n, t) {
            var e = u(n, 1)
              , r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }
        return function(a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o)
                        i = a[o],
                        l[1] <= r ? i[1] > r && K(l, i, n) > 0 && ++t : i[1] <= r && K(l, i, n) < 0 && --t,
                        l = i;
                return 0 !== t
            }
            function l(i, a, c, l) {
                var s = 0
                  , f = 0;
                if (null  == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do
                        l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
                    while ((s = (s + c + 4) % 4) !== f)
                } else
                    l.point(a[0], a[1])
            }
            function s(u, i) {
                return u >= n && e >= u && i >= t && r >= i
            }
            function f(n, t) {
                s(n, t) && a.point(n, t)
            }
            function h() {
                N.point = p,
                d && d.push(m = []),
                S = !0,
                w = !1,
                _ = b = 0 / 0
            }
            function g() {
                v && (p(y, x),
                M && w && A.rejoin(),
                v.push(A.buffer())),
                N.point = f,
                w && a.lineEnd()
            }
            function p(n, t) {
                n = Math.max(-Nc, Math.min(Nc, n)),
                t = Math.max(-Nc, Math.min(Nc, t));
                var e = s(n, t);
                if (d && m.push([n, t]),
                S)
                    y = n,
                    x = t,
                    M = e,
                    S = !1,
                    e && (a.lineStart(),
                    a.point(n, t));
                else if (e && w)
                    a.point(n, t);
                else {
                    var r = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    C(r) ? (w || (a.lineStart(),
                    a.point(r.a.x, r.a.y)),
                    a.point(r.b.x, r.b.y),
                    e || a.lineEnd(),
                    k = !1) : e && (a.lineStart(),
                    a.point(n, t),
                    k = !1)
                }
                _ = n,
                b = t,
                w = e
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a, A = qe(), C = He(n, t, e, r), N = {
                point: f,
                lineStart: h,
                lineEnd: g,
                polygonStart: function() {
                    a = A,
                    v = [],
                    d = [],
                    k = !0
                },
                polygonEnd: function() {
                    a = E,
                    v = Bo.merge(v);
                    var t = c([n, r])
                      , e = k && t
                      , u = v.length;
                    (e || u) && (a.polygonStart(),
                    e && (a.lineStart(),
                    l(null , null , 1, a),
                    a.lineEnd()),
                    u && Ce(v, i, t, l, a),
                    a.polygonEnd()),
                    v = d = m = null 
                }
            };
            return N
        }
    }
    function Ye(n, t) {
        function e(e, r) {
            return e = n(e, r),
            t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r),
            e && n.invert(e[0], e[1])
        }
        ),
        e
    }
    function Ie(n) {
        var t = 0
          , e = Ea / 3
          , r = ir(n)
          , u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * Ea / 180, e = n[1] * Ea / 180) : [180 * (t / Ea), 180 * (e / Ea)]
        }
        ,
        u
    }
    function Ze(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [e * Math.sin(n *= u), o - e * Math.cos(n)]
        }
        var r = Math.sin(n)
          , u = (r + Math.sin(t)) / 2
          , i = 1 + r * (2 * u - r)
          , o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [Math.atan2(n, e) / u, nt((i - (n * n + e * e) * u * u) / (2 * u))]
        }
        ,
        e
    }
    function Ve() {
        function n(n, t) {
            Lc += u * n - r * t,
            r = n,
            u = t
        }
        var t, e, r, u;
        Pc.point = function(i, o) {
            Pc.point = n,
            t = r = i,
            e = u = o
        }
        ,
        Pc.lineEnd = function() {
            n(t, e)
        }
    }
    function Xe(n, t) {
        Tc > n && (Tc = n),
        n > Rc && (Rc = n),
        qc > t && (qc = t),
        t > Dc && (Dc = t)
    }
    function $e() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }
        function t(n, t) {
            o.push("M", n, ",", t),
            a.point = e
        }
        function e(n, t) {
            o.push("L", n, ",", t)
        }
        function r() {
            a.point = n
        }
        function u() {
            o.push("Z")
        }
        var i = Be(4.5)
          , o = []
          , a = {
            point: n,
            lineStart: function() {
                a.point = t
            },
            lineEnd: r,
            polygonStart: function() {
                a.lineEnd = u
            },
            polygonEnd: function() {
                a.lineEnd = r,
                a.point = n
            },
            pointRadius: function(n) {
                return i = Be(n),
                a
            },
            result: function() {
                if (o.length) {
                    var n = o.join("");
                    return o = [],
                    n
                }
            }
        };
        return a
    }
    function Be(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }
    function We(n, t) {
        yc += n,
        xc += t,
        ++Mc
    }
    function Je() {
        function n(n, r) {
            var u = n - t
              , i = r - e
              , o = Math.sqrt(u * u + i * i);
            _c += o * (t + n) / 2,
            bc += o * (e + r) / 2,
            wc += o,
            We(t = n, e = r)
        }
        var t, e;
        jc.point = function(r, u) {
            jc.point = n,
            We(t = r, e = u)
        }
    }
    function Ge() {
        jc.point = We
    }
    function Ke() {
        function n(n, t) {
            var e = n - r
              , i = t - u
              , o = Math.sqrt(e * e + i * i);
            _c += o * (r + n) / 2,
            bc += o * (u + t) / 2,
            wc += o,
            o = u * n - r * t,
            Sc += o * (r + n),
            kc += o * (u + t),
            Ec += 3 * o,
            We(r = n, u = t)
        }
        var t, e, r, u;
        jc.point = function(i, o) {
            jc.point = n,
            We(t = r = i, e = u = o)
        }
        ,
        jc.lineEnd = function() {
            n(t, e)
        }
    }
    function Qe(n) {
        function t(t, e) {
            n.moveTo(t, e),
            n.arc(t, e, o, 0, Aa)
        }
        function e(t, e) {
            n.moveTo(t, e),
            a.point = r
        }
        function r(t, e) {
            n.lineTo(t, e)
        }
        function u() {
            a.point = t
        }
        function i() {
            n.closePath()
        }
        var o = 4.5
          , a = {
            point: t,
            lineStart: function() {
                a.point = e
            },
            lineEnd: u,
            polygonStart: function() {
                a.lineEnd = i
            },
            polygonEnd: function() {
                a.lineEnd = u,
                a.point = t
            },
            pointRadius: function(n) {
                return o = n,
                a
            },
            result: y
        };
        return a
    }
    function nr(n) {
        function t(n) {
            return (a ? r : e)(n)
        }
        function e(t) {
            return rr(t, function(e, r) {
                e = n(e, r),
                t.point(e[0], e[1])
            }
            )
        }
        function r(t) {
            function e(e, r) {
                e = n(e, r),
                t.point(e[0], e[1])
            }
            function r() {
                x = 0 / 0,
                S.point = i,
                t.lineStart()
            }
            function i(e, r) {
                var i = pe([e, r])
                  , o = n(e, r);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t),
                t.point(x, M)
            }
            function o() {
                S.point = e,
                t.lineEnd()
            }
            function c() {
                r(),
                S.point = l,
                S.lineEnd = s
            }
            function l(n, t) {
                i(f = n, h = t),
                g = x,
                p = M,
                v = _,
                d = b,
                m = w,
                S.point = i
            }
            function s() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t),
                S.lineEnd = o,
                o()
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                point: e,
                lineStart: r,
                lineEnd: o,
                polygonStart: function() {
                    t.polygonStart(),
                    S.lineStart = c
                },
                polygonEnd: function() {
                    t.polygonEnd(),
                    S.lineStart = r
                }
            };
            return S
        }
        function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) {
            var y = s - t
              , x = f - e
              , M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g
                  , b = c + p
                  , w = l + v
                  , S = Math.sqrt(_ * _ + b * b + w * w)
                  , k = Math.asin(w /= S)
                  , E = ca(ca(w) - 1) < Na || ca(r - h) < Na ? (r + h) / 2 : Math.atan2(b, _)
                  , A = n(E, k)
                  , C = A[0]
                  , N = A[1]
                  , z = C - t
                  , L = N - e
                  , T = x * z - y * L;
                (T * T / M > i || ca((y * z + x * L) / M - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, C, N, E, _ /= S, b /= S, w, d, m),
                m.point(C, N),
                u(C, N, E, _, b, w, s, f, h, g, p, v, d, m))
            }
        }
        var i = .5
          , o = Math.cos(30 * La)
          , a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16,
            t) : Math.sqrt(i)
        }
        ,
        t
    }
    function tr(n) {
        var t = nr(function(t, e) {
            return n([t * Ta, e * Ta])
        }
        );
        return function(n) {
            return or(t(n))
        }
    }
    function er(n) {
        this.stream = n
    }
    function rr(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }
    function ur(n) {
        return ir(function() {
            return n
        }
        )()
    }
    function ir(n) {
        function t(n) {
            return n = a(n[0] * La, n[1] * La),
            [n[0] * h + c, l - n[1] * h]
        }
        function e(n) {
            return n = a.invert((n[0] - c) / h, (l - n[1]) / h),
            n && [n[0] * Ta, n[1] * Ta]
        }
        function r() {
            a = Ye(o = lr(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h,
            l = p + n[1] * h,
            u()
        }
        function u() {
            return s && (s.valid = !1,
            s = null ),
            t
        }
        var i, o, a, c, l, s, f = nr(function(n, t) {
            return n = i(n, t),
            [n[0] * h + c, l - n[1] * h]
        }
        ), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, y = 0, x = 0, M = Cc, _ = Et, b = null , w = null ;
        return t.stream = function(n) {
            return s && (s.valid = !1),
            s = or(M(o, f(_(n)))),
            s.valid = !0,
            s
        }
        ,
        t.clipAngle = function(n) {
            return arguments.length ? (M = null  == n ? (b = n,
            Cc) : Fe((b = +n) * La),
            u()) : b
        }
        ,
        t.clipExtent = function(n) {
            return arguments.length ? (w = n,
            _ = n ? Oe(n[0][0], n[0][1], n[1][0], n[1][1]) : Et,
            u()) : w
        }
        ,
        t.scale = function(n) {
            return arguments.length ? (h = +n,
            r()) : h
        }
        ,
        t.translate = function(n) {
            return arguments.length ? (g = +n[0],
            p = +n[1],
            r()) : [g, p]
        }
        ,
        t.center = function(n) {
            return arguments.length ? (v = n[0] % 360 * La,
            d = n[1] % 360 * La,
            r()) : [v * Ta, d * Ta]
        }
        ,
        t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * La,
            y = n[1] % 360 * La,
            x = n.length > 2 ? n[2] % 360 * La : 0,
            r()) : [m * Ta, y * Ta, x * Ta]
        }
        ,
        Bo.rebind(t, f, "precision"),
        function() {
            return i = n.apply(this, arguments),
            t.invert = i.invert && e,
            r()
        }
    }
    function or(n) {
        return rr(n, function(t, e) {
            n.point(t * La, e * La)
        }
        )
    }
    function ar(n, t) {
        return [n, t]
    }
    function cr(n, t) {
        return [n > Ea ? n - Aa : -Ea > n ? n + Aa : n, t]
    }
    function lr(n, t, e) {
        return n ? t || e ? Ye(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
    }
    function sr(n) {
        return function(t, e) {
            return t += n,
            [t > Ea ? t - Aa : -Ea > t ? t + Aa : t, e]
        }
    }
    function fr(n) {
        var t = sr(n);
        return t.invert = sr(-n),
        t
    }
    function hr(n, t) {
        function e(n, t) {
            var e = Math.cos(t)
              , a = Math.cos(n) * e
              , c = Math.sin(n) * e
              , l = Math.sin(t)
              , s = l * r + a * u;
            return [Math.atan2(c * i - s * o, a * r - l * u), nt(s * i + c * o)]
        }
        var r = Math.cos(n)
          , u = Math.sin(n)
          , i = Math.cos(t)
          , o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t)
              , a = Math.cos(n) * e
              , c = Math.sin(n) * e
              , l = Math.sin(t)
              , s = l * i - c * o;
            return [Math.atan2(c * i + l * o, a * r + s * u), nt(s * r - a * u)]
        }
        ,
        e
    }
    function gr(n, t) {
        var e = Math.cos(n)
          , r = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null  != u ? (u = pr(e, u),
            i = pr(e, i),
            (o > 0 ? i > u : u > i) && (u += o * Aa)) : (u = n + o * Aa,
            i = n - .5 * c);
            for (var l, s = u; o > 0 ? s > i : i > s; s -= c)
                a.point((l = Me([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1])
        }
    }
    function pr(n, t) {
        var e = pe(t);
        e[0] -= n,
        xe(e);
        var r = Q(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Na) % (2 * Math.PI)
    }
    function vr(n, t, e) {
        var r = Bo.range(n, t - Na, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [n, t]
            }
            )
        }
    }
    function dr(n, t, e) {
        var r = Bo.range(n, t - Na, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [t, n]
            }
            )
        }
    }
    function mr(n) {
        return n.source
    }
    function yr(n) {
        return n.target
    }
    function xr(n, t, e, r) {
        var u = Math.cos(t)
          , i = Math.sin(t)
          , o = Math.cos(r)
          , a = Math.sin(r)
          , c = u * Math.cos(n)
          , l = u * Math.sin(n)
          , s = o * Math.cos(e)
          , f = o * Math.sin(e)
          , h = 2 * Math.asin(Math.sqrt(ut(r - t) + u * o * ut(e - n)))
          , g = 1 / Math.sin(h)
          , p = h ? function(n) {
            var t = Math.sin(n *= h) * g
              , e = Math.sin(h - n) * g
              , r = e * c + t * s
              , u = e * l + t * f
              , o = e * i + t * a;
            return [Math.atan2(u, r) * Ta, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ta]
        }
         : function() {
            return [n * Ta, t * Ta]
        }
        ;
        return p.distance = h,
        p
    }
    function Mr() {
        function n(n, u) {
            var i = Math.sin(u *= La)
              , o = Math.cos(u)
              , a = ca((n *= La) - t)
              , c = Math.cos(a);
            Fc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c),
            t = n,
            e = i,
            r = o
        }
        var t, e, r;
        Hc.point = function(u, i) {
            t = u * La,
            e = Math.sin(i *= La),
            r = Math.cos(i),
            Hc.point = n
        }
        ,
        Hc.lineEnd = function() {
            Hc.point = Hc.lineEnd = y
        }
    }
    function _r(n, t) {
        function e(t, e) {
            var r = Math.cos(t)
              , u = Math.cos(e)
              , i = n(r * u);
            return [i * u * Math.sin(t), i * Math.sin(e)]
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e)
              , u = t(r)
              , i = Math.sin(u)
              , o = Math.cos(u);
            return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
        }
        ,
        e
    }
    function br(n, t) {
        function e(n, t) {
            o > 0 ? -Ca + Na > t && (t = -Ca + Na) : t > Ca - Na && (t = Ca - Na);
            var e = o / Math.pow(u(t), i);
            return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
        }
        var r = Math.cos(n)
          , u = function(n) {
            return Math.tan(Ea / 4 + n / 2)
        }
          , i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n))
          , o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t
              , r = G(i) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ca]
        }
        ,
        e) : Sr
    }
    function wr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
        }
        var r = Math.cos(n)
          , u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n)
          , i = r / u + n;
        return ca(u) < Na ? ar : (e.invert = function(n, t) {
            var e = i - t;
            return [Math.atan2(n, e) / u, i - G(u) * Math.sqrt(n * n + e * e)]
        }
        ,
        e)
    }
    function Sr(n, t) {
        return [n, Math.log(Math.tan(Ea / 4 + t / 2))]
    }
    function kr(n) {
        var t, e = ur(n), r = e.scale, u = e.translate, i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null ) : e : n
        }
        ,
        e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null ) : e : n
        }
        ,
        e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null  == n) {
                    var a = Ea * r()
                      , c = u();
                    i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]])
                }
            } else
                t && (o = null );
            return o
        }
        ,
        e.clipExtent(null )
    }
    function Er(n, t) {
        return [Math.log(Math.tan(Ea / 4 + t / 2)), -n]
    }
    function Ar(n) {
        return n[0]
    }
    function Cr(n) {
        return n[1]
    }
    function Nr(n) {
        for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
            for (; r > 1 && K(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0; )
                --r;
            e[r++] = u
        }
        return e.slice(0, r)
    }
    function zr(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }
    function Lr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }
    function Tr(n, t, e, r) {
        var u = n[0]
          , i = e[0]
          , o = t[0] - u
          , a = r[0] - i
          , c = n[1]
          , l = e[1]
          , s = t[1] - c
          , f = r[1] - l
          , h = (a * (c - l) - f * (u - i)) / (f * o - a * s);
        return [u + h * o, c + h * s]
    }
    function qr(n) {
        var t = n[0]
          , e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }
    function Rr() {
        tu(this),
        this.edge = this.site = this.circle = null 
    }
    function Dr(n) {
        var t = Kc.pop() || new Rr;
        return t.site = n,
        t
    }
    function Pr(n) {
        Xr(n),
        Wc.remove(n),
        Kc.push(n),
        tu(n)
    }
    function Ur(n) {
        var t = n.circle
          , e = t.x
          , r = t.cy
          , u = {
            x: e,
            y: r
        }
          , i = n.P
          , o = n.N
          , a = [n];
        Pr(n);
        for (var c = i; c.circle && ca(e - c.circle.x) < Na && ca(r - c.circle.cy) < Na; )
            i = c.P,
            a.unshift(c),
            Pr(c),
            c = i;
        a.unshift(c),
        Xr(c);
        for (var l = o; l.circle && ca(e - l.circle.x) < Na && ca(r - l.circle.cy) < Na; )
            o = l.N,
            a.push(l),
            Pr(l),
            l = o;
        a.push(l),
        Xr(l);
        var s, f = a.length;
        for (s = 1; f > s; ++s)
            l = a[s],
            c = a[s - 1],
            Kr(l.edge, c.site, l.site, u);
        c = a[0],
        l = a[f - 1],
        l.edge = Jr(c.site, l.site, null , u),
        Vr(c),
        Vr(l)
    }
    function jr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = Wc._; a; )
            if (r = Fr(a, o) - i,
            r > Na)
                a = a.L;
            else {
                if (u = i - Hr(a, o),
                !(u > Na)) {
                    r > -Na ? (t = a.P,
                    e = a) : u > -Na ? (t = a,
                    e = a.N) : t = e = a;
                    break
                }
                if (!a.R) {
                    t = a;
                    break
                }
                a = a.R
            }
        var c = Dr(n);
        if (Wc.insert(t, c),
        t || e) {
            if (t === e)
                return Xr(t),
                e = Dr(t.site),
                Wc.insert(c, e),
                c.edge = e.edge = Jr(t.site, c.site),
                Vr(t),
                Vr(e),
                void 0;
            if (!e)
                return c.edge = Jr(t.site, c.site),
                void 0;
            Xr(t),
            Xr(e);
            var l = t.site
              , s = l.x
              , f = l.y
              , h = n.x - s
              , g = n.y - f
              , p = e.site
              , v = p.x - s
              , d = p.y - f
              , m = 2 * (h * d - g * v)
              , y = h * h + g * g
              , x = v * v + d * d
              , M = {
                x: (d * y - g * x) / m + s,
                y: (h * x - v * y) / m + f
            };
            Kr(e.edge, l, p, M),
            c.edge = Jr(l, n, null , M),
            e.edge = Jr(n, p, null , M),
            Vr(t),
            Vr(e)
        }
    }
    function Fr(n, t) {
        var e = n.site
          , r = e.x
          , u = e.y
          , i = u - t;
        if (!i)
            return r;
        var o = n.P;
        if (!o)
            return -1 / 0;
        e = o.site;
        var a = e.x
          , c = e.y
          , l = c - t;
        if (!l)
            return a;
        var s = a - r
          , f = 1 / i - 1 / l
          , h = s / l;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2
    }
    function Hr(n, t) {
        var e = n.N;
        if (e)
            return Fr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0
    }
    function Or(n) {
        this.site = n,
        this.edges = []
    }
    function Yr(n) {
        for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Bc, d = v.length; d--; )
            if (i = v[d],
            i && i.prepare())
                for (a = i.edges,
                c = a.length,
                o = 0; c > o; )
                    s = a[o].end(),
                    r = s.x,
                    u = s.y,
                    l = a[++o % c].start(),
                    t = l.x,
                    e = l.y,
                    (ca(r - t) > Na || ca(u - e) > Na) && (a.splice(o, 0, new Qr(Gr(i.site, s, ca(r - f) < Na && p - u > Na ? {
                        x: f,
                        y: ca(t - f) < Na ? e : p
                    } : ca(u - p) < Na && h - r > Na ? {
                        x: ca(e - p) < Na ? t : h,
                        y: p
                    } : ca(r - h) < Na && u - g > Na ? {
                        x: h,
                        y: ca(t - h) < Na ? e : g
                    } : ca(u - g) < Na && r - f > Na ? {
                        x: ca(e - g) < Na ? t : f,
                        y: g
                    } : null ),i.site,null )),
                    ++c)
    }
    function Ir(n, t) {
        return t.angle - n.angle
    }
    function Zr() {
        tu(this),
        this.x = this.y = this.arc = this.site = this.cy = null 
    }
    function Vr(n) {
        var t = n.P
          , e = n.N;
        if (t && e) {
            var r = t.site
              , u = n.site
              , i = e.site;
            if (r !== i) {
                var o = u.x
                  , a = u.y
                  , c = r.x - o
                  , l = r.y - a
                  , s = i.x - o
                  , f = i.y - a
                  , h = 2 * (c * f - l * s);
                if (!(h >= -za)) {
                    var g = c * c + l * l
                      , p = s * s + f * f
                      , v = (f * g - l * p) / h
                      , d = (c * p - s * g) / h
                      , f = d + a
                      , m = Qc.pop() || new Zr;
                    m.arc = n,
                    m.site = u,
                    m.x = v + o,
                    m.y = f + Math.sqrt(v * v + d * d),
                    m.cy = f,
                    n.circle = m;
                    for (var y = null , x = Gc._; x; )
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break
                            }
                            x = x.L
                        } else {
                            if (!x.R) {
                                y = x;
                                break
                            }
                            x = x.R
                        }
                    Gc.insert(y, m),
                    y || (Jc = m)
                }
            }
        }
    }
    function Xr(n) {
        var t = n.circle;
        t && (t.P || (Jc = t.N),
        Gc.remove(t),
        Qc.push(t),
        tu(t),
        n.circle = null )
    }
    function $r(n) {
        for (var t, e = $c, r = He(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--; )
            t = e[u],
            (!Br(t, n) || !r(t) || ca(t.a.x - t.b.x) < Na && ca(t.a.y - t.b.y) < Na) && (t.a = t.b = null ,
            e.splice(u, 1))
    }
    function Br(n, t) {
        var e = n.b;
        if (e)
            return !0;
        var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], s = n.l, f = n.r, h = s.x, g = s.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a)
                return;
            if (h > p) {
                if (i) {
                    if (i.y >= l)
                        return
                } else
                    i = {
                        x: d,
                        y: c
                    };
                e = {
                    x: d,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c)
                        return
                } else
                    i = {
                        x: d,
                        y: l
                    };
                e = {
                    x: d,
                    y: c
                }
            }
        } else if (r = (h - p) / (v - g),
        u = m - r * d,
        -1 > r || r > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= l)
                        return
                } else
                    i = {
                        x: (c - u) / r,
                        y: c
                    };
                e = {
                    x: (l - u) / r,
                    y: l
                }
            } else {
                if (i) {
                    if (i.y < c)
                        return
                } else
                    i = {
                        x: (l - u) / r,
                        y: l
                    };
                e = {
                    x: (c - u) / r,
                    y: c
                }
            }
        else if (v > g) {
            if (i) {
                if (i.x >= a)
                    return
            } else
                i = {
                    x: o,
                    y: r * o + u
                };
            e = {
                x: a,
                y: r * a + u
            }
        } else {
            if (i) {
                if (i.x < o)
                    return
            } else
                i = {
                    x: a,
                    y: r * a + u
                };
            e = {
                x: o,
                y: r * o + u
            }
        }
        return n.a = i,
        n.b = e,
        !0
    }
    function Wr(n, t) {
        this.l = n,
        this.r = t,
        this.a = this.b = null 
    }
    function Jr(n, t, e, r) {
        var u = new Wr(n,t);
        return $c.push(u),
        e && Kr(u, n, t, e),
        r && Kr(u, t, n, r),
        Bc[n.i].edges.push(new Qr(u,n,t)),
        Bc[t.i].edges.push(new Qr(u,t,n)),
        u
    }
    function Gr(n, t, e) {
        var r = new Wr(n,null );
        return r.a = t,
        r.b = e,
        $c.push(r),
        r
    }
    function Kr(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r,
        n.l = t,
        n.r = e)
    }
    function Qr(n, t, e) {
        var r = n.a
          , u = n.b;
        this.edge = n,
        this.site = t,
        this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }
    function nu() {
        this._ = null 
    }
    function tu(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null 
    }
    function eu(n, t) {
        var e = t
          , r = t.R
          , u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r,
        r.U = u,
        e.U = r,
        e.R = r.L,
        e.R && (e.R.U = e),
        r.L = e
    }
    function ru(n, t) {
        var e = t
          , r = t.L
          , u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r,
        r.U = u,
        e.U = r,
        e.L = r.R,
        e.L && (e.L.U = e),
        r.R = e
    }
    function uu(n) {
        for (; n.L; )
            n = n.L;
        return n
    }
    function iu(n, t) {
        var e, r, u, i = n.sort(ou).pop();
        for ($c = [],
        Bc = new Array(n.length),
        Wc = new nu,
        Gc = new nu; ; )
            if (u = Jc,
            i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))
                (i.x !== e || i.y !== r) && (Bc[i.i] = new Or(i),
                jr(i),
                e = i.x,
                r = i.y),
                i = n.pop();
            else {
                if (!u)
                    break;
                Ur(u.arc)
            }
        t && ($r(t),
        Yr(t));
        var o = {
            cells: Bc,
            edges: $c
        };
        return Wc = Gc = $c = Bc = null ,
        o
    }
    function ou(n, t) {
        return t.y - n.y || t.x - n.x
    }
    function au(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
    }
    function cu(n) {
        return n.x
    }
    function lu(n) {
        return n.y
    }
    function su() {
        return {
            leaf: !0,
            nodes: [],
            point: null ,
            x: null ,
            y: null 
        }
    }
    function fu(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u)
              , a = .5 * (r + i)
              , c = t.nodes;
            c[0] && fu(n, c[0], e, r, o, a),
            c[1] && fu(n, c[1], o, r, u, a),
            c[2] && fu(n, c[2], e, a, o, i),
            c[3] && fu(n, c[3], o, a, u, i)
        }
    }
    function hu(n, t) {
        n = Bo.rgb(n),
        t = Bo.rgb(t);
        var e = n.r
          , r = n.g
          , u = n.b
          , i = t.r - e
          , o = t.g - r
          , a = t.b - u;
        return function(n) {
            return "#" + xt(Math.round(e + i * n)) + xt(Math.round(r + o * n)) + xt(Math.round(u + a * n))
        }
    }
    function gu(n, t) {
        var e, r = {}, u = {};
        for (e in n)
            e in t ? r[e] = du(n[e], t[e]) : u[e] = n[e];
        for (e in t)
            e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r)
                u[e] = r[e](n);
            return u
        }
    }
    function pu(n, t) {
        return n = +n,
        t = +t,
        function(e) {
            return n * (1 - e) + t * e
        }
    }
    function vu(n, t) {
        var e, r, u, i = tl.lastIndex = el.lastIndex = 0, o = -1, a = [], c = [];
        for (n += "",
        t += ""; (e = tl.exec(n)) && (r = el.exec(t)); )
            (u = r.index) > i && (u = t.slice(i, u),
            a[o] ? a[o] += u : a[++o] = u),
            (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null ,
            c.push({
                i: o,
                x: pu(e, r)
            })),
            i = el.lastIndex;
        return i < t.length && (u = t.slice(i),
        a[o] ? a[o] += u : a[++o] = u),
        a.length < 2 ? c[0] ? (t = c[0].x,
        function(n) {
            return t(n) + ""
        }
        ) : function() {
            return t
        }
         : (t = c.length,
        function(n) {
            for (var e, r = 0; t > r; ++r)
                a[(e = c[r]).i] = e.x(n);
            return a.join("")
        }
        )
    }
    function du(n, t) {
        for (var e, r = Bo.interpolators.length; --r >= 0 && !(e = Bo.interpolators[r](n, t)); )
            ;
        return e
    }
    function mu(n, t) {
        var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e)
            r.push(du(n[e], t[e]));
        for (; i > e; ++e)
            u[e] = n[e];
        for (; o > e; ++e)
            u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e)
                u[e] = r[e](n);
            return u
        }
    }
    function yu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }
    function xu(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }
    function Mu(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }
    function _u(n) {
        return n * n
    }
    function bu(n) {
        return n * n * n
    }
    function wu(n) {
        if (0 >= n)
            return 0;
        if (n >= 1)
            return 1;
        var t = n * n
          , e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }
    function Su(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }
    function ku(n) {
        return 1 - Math.cos(n * Ca)
    }
    function Eu(n) {
        return Math.pow(2, 10 * (n - 1))
    }
    function Au(n) {
        return 1 - Math.sqrt(1 - n * n)
    }
    function Cu(n, t) {
        var e;
        return arguments.length < 2 && (t = .45),
        arguments.length ? e = t / Aa * Math.asin(1 / n) : (n = 1,
        e = t / 4),
        function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Aa / t)
        }
    }
    function Nu(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }
    function zu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }
    function Lu(n, t) {
        n = Bo.hcl(n),
        t = Bo.hcl(t);
        var e = n.h
          , r = n.c
          , u = n.l
          , i = t.h - e
          , o = t.c - r
          , a = t.l - u;
        return isNaN(o) && (o = 0,
        r = isNaN(r) ? t.c : r),
        isNaN(i) ? (i = 0,
        e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return lt(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function Tu(n, t) {
        n = Bo.hsl(n),
        t = Bo.hsl(t);
        var e = n.h
          , r = n.s
          , u = n.l
          , i = t.h - e
          , o = t.s - r
          , a = t.l - u;
        return isNaN(o) && (o = 0,
        r = isNaN(r) ? t.s : r),
        isNaN(i) ? (i = 0,
        e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return at(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function qu(n, t) {
        n = Bo.lab(n),
        t = Bo.lab(t);
        var e = n.l
          , r = n.a
          , u = n.b
          , i = t.l - e
          , o = t.a - r
          , a = t.b - u;
        return function(n) {
            return ft(e + i * n, r + o * n, u + a * n) + ""
        }
    }
    function Ru(n, t) {
        return t -= n,
        function(e) {
            return Math.round(n + t * e)
        }
    }
    function Du(n) {
        var t = [n.a, n.b]
          , e = [n.c, n.d]
          , r = Uu(t)
          , u = Pu(t, e)
          , i = Uu(ju(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1,
        t[1] *= -1,
        r *= -1,
        u *= -1),
        this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ta,
        this.translate = [n.e, n.f],
        this.scale = [r, i],
        this.skew = i ? Math.atan2(u, i) * Ta : 0
    }
    function Pu(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }
    function Uu(n) {
        var t = Math.sqrt(Pu(n, n));
        return t && (n[0] /= t,
        n[1] /= t),
        t
    }
    function ju(n, t, e) {
        return n[0] += e * t[0],
        n[1] += e * t[1],
        n
    }
    function Fu(n, t) {
        var e, r = [], u = [], i = Bo.transform(n), o = Bo.transform(t), a = i.translate, c = o.translate, l = i.rotate, s = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null , ",", null , ")"),
        u.push({
            i: 1,
            x: pu(a[0], c[0])
        }, {
            i: 3,
            x: pu(a[1], c[1])
        })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""),
        l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360),
        u.push({
            i: r.push(r.pop() + "rotate(", null , ")") - 2,
            x: pu(l, s)
        })) : s && r.push(r.pop() + "rotate(" + s + ")"),
        f != h ? u.push({
            i: r.push(r.pop() + "skewX(", null , ")") - 2,
            x: pu(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"),
        g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null , ",", null , ")"),
        u.push({
            i: e - 4,
            x: pu(g[0], p[0])
        }, {
            i: e - 2,
            x: pu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"),
        e = u.length,
        function(n) {
            for (var t, i = -1; ++i < e; )
                r[(t = u[i]).i] = t.x(n);
            return r.join("")
        }
    }
    function Hu(n, t) {
        return t = (t -= n = +n) || 1 / t,
        function(e) {
            return (e - n) / t
        }
    }
    function Ou(n, t) {
        return t = (t -= n = +n) || 1 / t,
        function(e) {
            return Math.max(0, Math.min(1, (e - n) / t))
        }
    }
    function Yu(n) {
        for (var t = n.source, e = n.target, r = Zu(t, e), u = [t]; t !== r; )
            t = t.parent,
            u.push(t);
        for (var i = u.length; e !== r; )
            u.splice(i, 0, e),
            e = e.parent;
        return u
    }
    function Iu(n) {
        for (var t = [], e = n.parent; null  != e; )
            t.push(n),
            n = e,
            e = e.parent;
        return t.push(n),
        t
    }
    function Zu(n, t) {
        if (n === t)
            return n;
        for (var e = Iu(n), r = Iu(t), u = e.pop(), i = r.pop(), o = null ; u === i; )
            o = u,
            u = e.pop(),
            i = r.pop();
        return o
    }
    function Vu(n) {
        n.fixed |= 2
    }
    function Xu(n) {
        n.fixed &= -7
    }
    function $u(n) {
        n.fixed |= 4,
        n.px = n.x,
        n.py = n.y
    }
    function Bu(n) {
        n.fixed &= -5
    }
    function Wu(n, t, e) {
        var r = 0
          , u = 0;
        if (n.charge = 0,
        !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a; )
                i = o[c],
                null  != i && (Wu(i, t, e),
                n.charge += i.charge,
                r += i.charge * i.cx,
                u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5,
            n.point.y += Math.random() - .5);
            var l = t * e[n.point.index];
            n.charge += n.pointCharge = l,
            r += l * n.point.x,
            u += l * n.point.y
        }
        n.cx = r / n.charge,
        n.cy = u / n.charge
    }
    function Ju(n, t) {
        return Bo.rebind(n, t, "sort", "children", "value"),
        n.nodes = n,
        n.links = ei,
        n
    }
    function Gu(n, t) {
        for (var e = [n]; null  != (n = e.pop()); )
            if (t(n),
            (u = n.children) && (r = u.length))
                for (var r, u; --r >= 0; )
                    e.push(u[r])
    }
    function Ku(n, t) {
        for (var e = [n], r = []; null  != (n = e.pop()); )
            if (r.push(n),
            (i = n.children) && (u = i.length))
                for (var u, i, o = -1; ++o < u; )
                    e.push(i[o]);
        for (; null  != (n = r.pop()); )
            t(n)
    }
    function Qu(n) {
        return n.children
    }
    function ni(n) {
        return n.value
    }
    function ti(n, t) {
        return t.value - n.value
    }
    function ei(n) {
        return Bo.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            }
            )
        }
        ))
    }
    function ri(n) {
        return n.x
    }
    function ui(n) {
        return n.y
    }
    function ii(n, t, e) {
        n.y0 = t,
        n.y = e
    }
    function oi(n) {
        return Bo.range(n.length)
    }
    function ai(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e; )
            r[t] = 0;
        return r
    }
    function ci(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)
            (t = n[e][1]) > u && (r = e,
            u = t);
        return r
    }
    function li(n) {
        return n.reduce(si, 0)
    }
    function si(n, t) {
        return n + t[1]
    }
    function fi(n, t) {
        return hi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }
    function hi(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t; )
            i[e] = u * e + r;
        return i
    }
    function gi(n) {
        return [Bo.min(n), Bo.max(n)]
    }
    function pi(n, t) {
        return n.value - t.value
    }
    function vi(n, t) {
        var e = n._pack_next;
        n._pack_next = t,
        t._pack_prev = n,
        t._pack_next = e,
        e._pack_prev = t
    }
    function di(n, t) {
        n._pack_next = t,
        t._pack_prev = n
    }
    function mi(n, t) {
        var e = t.x - n.x
          , r = t.y - n.y
          , u = n.r + t.r;
        return .999 * u * u > e * e + r * r
    }
    function yi(n) {
        function t(n) {
            s = Math.min(n.x - n.r, s),
            f = Math.max(n.x + n.r, f),
            h = Math.min(n.y - n.r, h),
            g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (l = e.length)) {
            var e, r, u, i, o, a, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
            if (e.forEach(xi),
            r = e[0],
            r.x = -r.r,
            r.y = 0,
            t(r),
            l > 1 && (u = e[1],
            u.x = u.r,
            u.y = 0,
            t(u),
            l > 2))
                for (i = e[2],
                bi(r, u, i),
                t(i),
                vi(r, i),
                r._pack_prev = i,
                vi(i, u),
                u = r._pack_next,
                o = 3; l > o; o++) {
                    bi(r, u, i = e[o]);
                    var p = 0
                      , v = 1
                      , d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next,
                    v++)
                        if (mi(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !mi(c, i); c = c._pack_prev,
                        d++)
                            ;
                    p ? (d > v || v == d && u.r < r.r ? di(r, u = a) : di(r = c, u),
                    o--) : (vi(r, i),
                    u = i,
                    t(i))
                }
            var m = (s + f) / 2
              , y = (h + g) / 2
              , x = 0;
            for (o = 0; l > o; o++)
                i = e[o],
                i.x -= m,
                i.y -= y,
                x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x,
            e.forEach(Mi)
        }
    }
    function xi(n) {
        n._pack_next = n._pack_prev = n
    }
    function Mi(n) {
        delete n._pack_next,
        delete n._pack_prev
    }
    function _i(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x,
        n.y = e += r * n.y,
        n.r *= r,
        u)
            for (var i = -1, o = u.length; ++i < o; )
                _i(u[i], t, e, r)
    }
    function bi(n, t, e) {
        var r = n.r + e.r
          , u = t.x - n.x
          , i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r
              , a = u * u + i * i;
            o *= o,
            r *= r;
            var c = .5 + (r - o) / (2 * a)
              , l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + l * i,
            e.y = n.y + c * i - l * u
        } else
            e.x = n.x + r,
            e.y = n.y
    }
    function wi(n, t) {
        return n.parent == t.parent ? 1 : 2
    }
    function Si(n) {
        var t = n.children;
        return t.length ? t[0] : n.t
    }
    function ki(n) {
        var t, e = n.children;
        return (t = e.length) ? e[t - 1] : n.t
    }
    function Ei(n, t, e) {
        var r = e / (t.i - n.i);
        t.c -= r,
        t.s += e,
        n.c += r,
        t.z += e,
        t.m += e
    }
    function Ai(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0; )
            t = u[i],
            t.z += e,
            t.m += e,
            e += t.s + (r += t.c)
    }
    function Ci(n, t, e) {
        return n.a.parent === t.parent ? n.a : e
    }
    function Ni(n) {
        return 1 + Bo.max(n, function(n) {
            return n.y
        }
        )
    }
    function zi(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }
        , 0) / n.length
    }
    function Li(n) {
        var t = n.children;
        return t && t.length ? Li(t[0]) : n
    }
    function Ti(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Ti(e[t - 1]) : n
    }
    function qi(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }
    function Ri(n, t) {
        var e = n.x + t[3]
          , r = n.y + t[0]
          , u = n.dx - t[1] - t[3]
          , i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2,
        u = 0),
        0 > i && (r += i / 2,
        i = 0),
        {
            x: e,
            y: r,
            dx: u,
            dy: i
        }
    }
    function Di(n) {
        var t = n[0]
          , e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }
    function Pi(n) {
        return n.rangeExtent ? n.rangeExtent() : Di(n.range())
    }
    function Ui(n, t, e, r) {
        var u = e(n[0], n[1])
          , i = r(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }
    function ji(n, t) {
        var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
        return i > o && (e = r,
        r = u,
        u = e,
        e = i,
        i = o,
        o = e),
        n[r] = t.floor(i),
        n[u] = t.ceil(o),
        n
    }
    function Fi(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : gl
    }
    function Hi(n, t, e, r) {
        var u = []
          , i = []
          , o = 0
          , a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(),
        t = t.slice().reverse()); ++o <= a; )
            u.push(e(n[o - 1], n[o])),
            i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = Bo.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t))
        }
    }
    function Oi(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Hi : Ui
              , c = r ? Ou : Hu;
            return o = u(n, t, c, e),
            a = u(t, n, c, du),
            i
        }
        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }
        ,
        i.domain = function(t) {
            return arguments.length ? (n = t.map(Number),
            u()) : n
        }
        ,
        i.range = function(n) {
            return arguments.length ? (t = n,
            u()) : t
        }
        ,
        i.rangeRound = function(n) {
            return i.range(n).interpolate(Ru)
        }
        ,
        i.clamp = function(n) {
            return arguments.length ? (r = n,
            u()) : r
        }
        ,
        i.interpolate = function(n) {
            return arguments.length ? (e = n,
            u()) : e
        }
        ,
        i.ticks = function(t) {
            return Vi(n, t)
        }
        ,
        i.tickFormat = function(t, e) {
            return Xi(n, t, e)
        }
        ,
        i.nice = function(t) {
            return Ii(n, t),
            u()
        }
        ,
        i.copy = function() {
            return Oi(n, t, e, r)
        }
        ,
        u()
    }
    function Yi(n, t) {
        return Bo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }
    function Ii(n, t) {
        return ji(n, Fi(Zi(n, t)[2]))
    }
    function Zi(n, t) {
        null  == t && (t = 10);
        var e = Di(n)
          , r = e[1] - e[0]
          , u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10))
          , i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2),
        e[0] = Math.ceil(e[0] / u) * u,
        e[1] = Math.floor(e[1] / u) * u + .5 * u,
        e[2] = u,
        e
    }
    function Vi(n, t) {
        return Bo.range.apply(Bo, Zi(n, t))
    }
    function Xi(n, t, e) {
        var r = Zi(n, t);
        if (e) {
            var u = tc.exec(e);
            if (u.shift(),
            "s" === u[8]) {
                var i = Bo.formatPrefix(Math.max(ca(r[0]), ca(r[1])));
                return u[7] || (u[7] = "." + $i(i.scale(r[2]))),
                u[8] = "f",
                e = Bo.format(u.join("")),
                function(n) {
                    return e(i.scale(n)) + i.symbol
                }
            }
            u[7] || (u[7] = "." + Bi(u[8], r)),
            e = u.join("")
        } else
            e = ",." + $i(r[2]) + "f";
        return Bo.format(e)
    }
    function $i(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }
    function Bi(n, t) {
        var e = $i(t[2]);
        return n in pl ? Math.abs(e - $i(Math.max(ca(t[0]), ca(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
    }
    function Wi(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }
        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }
        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }
        ,
        o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0,
            n.domain((r = t.map(Number)).map(u)),
            o) : r
        }
        ,
        o.base = function(e) {
            return arguments.length ? (t = +e,
            n.domain(r.map(u)),
            o) : t
        }
        ,
        o.nice = function() {
            var t = ji(r.map(u), e ? Math : dl);
            return n.domain(t),
            r = t.map(i),
            o
        }
        ,
        o.ticks = function() {
            var n = Di(r)
              , o = []
              , a = n[0]
              , c = n[1]
              , l = Math.floor(u(a))
              , s = Math.ceil(u(c))
              , f = t % 1 ? 2 : t;
            if (isFinite(s - l)) {
                if (e) {
                    for (; s > l; l++)
                        for (var h = 1; f > h; h++)
                            o.push(i(l) * h);
                    o.push(i(l))
                } else
                    for (o.push(i(l)); l++ < s; )
                        for (var h = f - 1; h > 0; h--)
                            o.push(i(l) * h);
                for (l = 0; o[l] < a; l++)
                    ;
                for (s = o.length; o[s - 1] > c; s--)
                    ;
                o = o.slice(l, s)
            }
            return o
        }
        ,
        o.tickFormat = function(n, t) {
            if (!arguments.length)
                return vl;
            arguments.length < 2 ? t = vl : "function" != typeof t && (t = Bo.format(t));
            var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12,
            Math.ceil) : (r = -1e-12,
            Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : ""
            }
        }
        ,
        o.copy = function() {
            return Wi(n.copy(), t, e, r)
        }
        ,
        Yi(o, n)
    }
    function Ji(n, t, e) {
        function r(t) {
            return n(u(t))
        }
        var u = Gi(t)
          , i = Gi(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t))
        }
        ,
        r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)),
            r) : e
        }
        ,
        r.ticks = function(n) {
            return Vi(e, n)
        }
        ,
        r.tickFormat = function(n, t) {
            return Xi(e, n, t)
        }
        ,
        r.nice = function(n) {
            return r.domain(Ii(e, n))
        }
        ,
        r.exponent = function(o) {
            return arguments.length ? (u = Gi(t = o),
            i = Gi(1 / t),
            n.domain(e.map(u)),
            r) : t
        }
        ,
        r.copy = function() {
            return Ji(n.copy(), t, e)
        }
        ,
        Yi(r, n)
    }
    function Gi(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }
    function Ki(n, t) {
        function e(e) {
            return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
        }
        function r(t, e) {
            return Bo.range(n.length).map(function(n) {
                return t + e * n
            }
            )
        }
        var u, i, o;
        return e.domain = function(r) {
            if (!arguments.length)
                return n;
            n = [],
            u = new a;
            for (var i, o = -1, c = r.length; ++o < c; )
                u.has(i = r[o]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a)
        }
        ,
        e.range = function(n) {
            return arguments.length ? (i = n,
            o = 0,
            t = {
                t: "range",
                a: arguments
            },
            e) : i
        }
        ,
        e.rangePoints = function(u, a) {
            arguments.length < 2 && (a = 0);
            var c = u[0]
              , l = u[1]
              , s = (l - c) / (Math.max(1, n.length - 1) + a);
            return i = r(n.length < 2 ? (c + l) / 2 : c + s * a / 2, s),
            o = 0,
            t = {
                t: "rangePoints",
                a: arguments
            },
            e
        }
        ,
        e.rangeBands = function(u, a, c) {
            arguments.length < 2 && (a = 0),
            arguments.length < 3 && (c = a);
            var l = u[1] < u[0]
              , s = u[l - 0]
              , f = u[1 - l]
              , h = (f - s) / (n.length - a + 2 * c);
            return i = r(s + h * c, h),
            l && i.reverse(),
            o = h * (1 - a),
            t = {
                t: "rangeBands",
                a: arguments
            },
            e
        }
        ,
        e.rangeRoundBands = function(u, a, c) {
            arguments.length < 2 && (a = 0),
            arguments.length < 3 && (c = a);
            var l = u[1] < u[0]
              , s = u[l - 0]
              , f = u[1 - l]
              , h = Math.floor((f - s) / (n.length - a + 2 * c))
              , g = f - s - (n.length - a) * h;
            return i = r(s + Math.round(g / 2), h),
            l && i.reverse(),
            o = Math.round(h * (1 - a)),
            t = {
                t: "rangeRoundBands",
                a: arguments
            },
            e
        }
        ,
        e.rangeBand = function() {
            return o
        }
        ,
        e.rangeExtent = function() {
            return Di(t.a[0])
        }
        ,
        e.copy = function() {
            return Ki(n, t)
        }
        ,
        e.domain(n)
    }
    function Qi(r, u) {
        function i() {
            var n = 0
              , t = u.length;
            for (a = []; ++n < t; )
                a[n - 1] = Bo.quantile(r, n / t);
            return o
        }
        function o(n) {
            return isNaN(n = +n) ? void 0 : u[Bo.bisect(a, n)]
        }
        var a;
        return o.domain = function(u) {
            return arguments.length ? (r = u.map(t).filter(e).sort(n),
            i()) : r
        }
        ,
        o.range = function(n) {
            return arguments.length ? (u = n,
            i()) : u
        }
        ,
        o.quantiles = function() {
            return a
        }
        ,
        o.invertExtent = function(n) {
            return n = u.indexOf(n),
            0 > n ? [0 / 0, 0 / 0] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]]
        }
        ,
        o.copy = function() {
            return Qi(r, u)
        }
        ,
        i()
    }
    function no(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }
        function u() {
            return i = e.length / (t - n),
            o = e.length - 1,
            r
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0],
            t = +e[e.length - 1],
            u()) : [n, t]
        }
        ,
        r.range = function(n) {
            return arguments.length ? (e = n,
            u()) : e
        }
        ,
        r.invertExtent = function(t) {
            return t = e.indexOf(t),
            t = 0 > t ? 0 / 0 : t / i + n,
            [t, t + 1 / i]
        }
        ,
        r.copy = function() {
            return no(n, t, e)
        }
        ,
        u()
    }
    function to(n, t) {
        function e(e) {
            return e >= e ? t[Bo.bisect(n, e)] : void 0
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t,
            e) : n
        }
        ,
        e.range = function(n) {
            return arguments.length ? (t = n,
            e) : t
        }
        ,
        e.invertExtent = function(e) {
            return e = t.indexOf(e),
            [n[e - 1], n[e]]
        }
        ,
        e.copy = function() {
            return to(n, t)
        }
        ,
        e
    }
    function eo(n) {
        function t(n) {
            return +n
        }
        return t.invert = t,
        t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t),
            t) : n
        }
        ,
        t.ticks = function(t) {
            return Vi(n, t)
        }
        ,
        t.tickFormat = function(t, e) {
            return Xi(n, t, e)
        }
        ,
        t.copy = function() {
            return eo(n)
        }
        ,
        t
    }
    function ro(n) {
        return n.innerRadius
    }
    function uo(n) {
        return n.outerRadius
    }
    function io(n) {
        return n.startAngle
    }
    function oo(n) {
        return n.endAngle
    }
    function ao(n) {
        function t(t) {
            function o() {
                l.push("M", i(n(s), a))
            }
            for (var c, l = [], s = [], f = -1, h = t.length, g = kt(e), p = kt(r); ++f < h; )
                u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(),
                s = []);
            return s.length && o(),
            l.length ? l.join("") : null 
        }
        var e = Ar
          , r = Cr
          , u = Ae
          , i = co
          , o = i.key
          , a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.y = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.defined = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = wl.get(n) || co).key,
            t) : o
        }
        ,
        t.tension = function(n) {
            return arguments.length ? (a = n,
            t) : a
        }
        ,
        t
    }
    function co(n) {
        return n.join("L")
    }
    function lo(n) {
        return co(n) + "Z"
    }
    function so(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]),
        u.join("")
    }
    function fo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("")
    }
    function ho(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e; )
            u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("")
    }
    function go(n, t) {
        return n.length < 4 ? co(n) : n[1] + mo(n.slice(1, n.length - 1), yo(n, t))
    }
    function po(n, t) {
        return n.length < 3 ? co(n) : n[0] + mo((n.push(n[0]),
        n), yo([n[n.length - 2]].concat(n, [n[1]]), t))
    }
    function vo(n, t) {
        return n.length < 3 ? co(n) : n[0] + mo(n, yo(n, t))
    }
    function mo(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
            return co(n);
        var e = n.length != t.length
          , r = ""
          , u = n[0]
          , i = n[1]
          , o = t[0]
          , a = o
          , c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1],
        u = n[1],
        c = 2),
        t.length > 1) {
            a = t[1],
            i = n[c],
            c++,
            r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var l = 2; l < t.length; l++,
            c++)
                i = n[c],
                a = t[l],
                r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (e) {
            var s = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1]
        }
        return r
    }
    function yo(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c; )
            e = i,
            i = o,
            o = n[a],
            r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
        return r
    }
    function xo(n) {
        if (n.length < 3)
            return co(n);
        var t = 1
          , e = n.length
          , r = n[0]
          , u = r[0]
          , i = r[1]
          , o = [u, u, u, (r = n[1])[0]]
          , a = [i, i, i, r[1]]
          , c = [u, ",", i, "L", wo(El, o), ",", wo(El, a)];
        for (n.push(n[e - 1]); ++t <= e; )
            r = n[t],
            o.shift(),
            o.push(r[0]),
            a.shift(),
            a.push(r[1]),
            So(c, o, a);
        return n.pop(),
        c.push("L", r),
        c.join("")
    }
    function Mo(n) {
        if (n.length < 4)
            return co(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3; )
            t = n[r],
            i.push(t[0]),
            o.push(t[1]);
        for (e.push(wo(El, i) + "," + wo(El, o)),
        --r; ++r < u; )
            t = n[r],
            i.shift(),
            i.push(t[0]),
            o.shift(),
            o.push(t[1]),
            So(e, i, o);
        return e.join("")
    }
    function _o(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4; )
            e = n[r % u],
            o.push(e[0]),
            a.push(e[1]);
        for (t = [wo(El, o), ",", wo(El, a)],
        --r; ++r < i; )
            e = n[r % u],
            o.shift(),
            o.push(e[0]),
            a.shift(),
            a.push(e[1]),
            So(t, o, a);
        return t.join("")
    }
    function bo(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e; )
                r = n[l],
                u = l / e,
                r[0] = t * r[0] + (1 - t) * (i + u * a),
                r[1] = t * r[1] + (1 - t) * (o + u * c);
        return xo(n)
    }
    function wo(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }
    function So(n, t, e) {
        n.push("C", wo(Sl, t), ",", wo(Sl, e), ",", wo(kl, t), ",", wo(kl, e), ",", wo(El, t), ",", wo(El, e))
    }
    function ko(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }
    function Eo(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = ko(u, i); ++t < e; )
            r[t] = (o + (o = ko(u = i, i = n[t + 1]))) / 2;
        return r[t] = o,
        r
    }
    function Ao(n) {
        for (var t, e, r, u, i = [], o = Eo(n), a = -1, c = n.length - 1; ++a < c; )
            t = ko(n[a], n[a + 1]),
            ca(t) < Na ? o[a] = o[a + 1] = 0 : (e = o[a] / t,
            r = o[a + 1] / t,
            u = e * e + r * r,
            u > 9 && (u = 3 * t / Math.sqrt(u),
            o[a] = u * e,
            o[a + 1] = u * r));
        for (a = -1; ++a <= c; )
            u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])),
            i.push([u || 0, o[a] * u || 0]);
        return i
    }
    function Co(n) {
        return n.length < 3 ? co(n) : n[0] + mo(n, Ao(n))
    }
    function No(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i; )
            t = n[u],
            e = t[0],
            r = t[1] + _l,
            t[0] = e * Math.cos(r),
            t[1] = e * Math.sin(r);
        return n
    }
    function zo(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = kt(e), _ = kt(u), b = e === r ? function() {
                return g
            }
             : kt(r), w = u === i ? function() {
                return p
            }
             : kt(i); ++y < x; )
                o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]),
                m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(),
                d = [],
                m = []);
            return d.length && c(),
            v.length ? v.join("") : null 
        }
        var e = Ar
          , r = Ar
          , u = 0
          , i = Cr
          , o = Ae
          , a = co
          , c = a.key
          , l = a
          , s = "L"
          , f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n,
            t) : r
        }
        ,
        t.x0 = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.x1 = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t.y = function(n) {
            return arguments.length ? (u = i = n,
            t) : i
        }
        ,
        t.y0 = function(n) {
            return arguments.length ? (u = n,
            t) : u
        }
        ,
        t.y1 = function(n) {
            return arguments.length ? (i = n,
            t) : i
        }
        ,
        t.defined = function(n) {
            return arguments.length ? (o = n,
            t) : o
        }
        ,
        t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = wl.get(n) || co).key,
            l = a.reverse || a,
            s = a.closed ? "M" : "L",
            t) : c
        }
        ,
        t.tension = function(n) {
            return arguments.length ? (f = n,
            t) : f
        }
        ,
        t
    }
    function Lo(n) {
        return n.radius
    }
    function To(n) {
        return [n.x, n.y]
    }
    function qo(n) {
        return function() {
            var t = n.apply(this, arguments)
              , e = t[0]
              , r = t[1] + _l;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }
    function Ro() {
        return 64
    }
    function Do() {
        return "circle"
    }
    function Po(n) {
        var t = Math.sqrt(n / Ea);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }
    function Uo(n, t) {
        return ga(n, Tl),
        n.id = t,
        n
    }
    function jo(n, t, e, r) {
        var u = n.id;
        return F(n, "function" == typeof e ? function(n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
        }
         : (e = r(e),
        function(n) {
            n.__transition__[u].tween.set(t, e)
        }
        ))
    }
    function Fo(n) {
        return null  == n && (n = ""),
        function() {
            this.textContent = n
        }
    }
    function Ho(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
            active: 0,
            count: 0
        })
          , i = u[e];
        if (!i) {
            var o = r.time;
            i = u[e] = {
                tween: new a,
                time: o,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            },
            ++u.count,
            Bo.timer(function(r) {
                function a(r) {
                    return u.active > e ? l() : (u.active = e,
                    i.event && i.event.start.call(n, s, t),
                    i.tween.forEach(function(e, r) {
                        (r = r.call(n, s, t)) && v.push(r)
                    }
                    ),
                    Bo.timer(function() {
                        return p.c = c(r || 1) ? Ae : c,
                        1
                    }
                    , 0, o),
                    void 0)
                }
                function c(r) {
                    if (u.active !== e)
                        return l();
                    for (var o = r / g, a = f(o), c = v.length; c > 0; )
                        v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, s, t),
                    l()) : void 0
                }
                function l() {
                    return --u.count ? delete u[e] : delete n.__transition__,
                    1
                }
                var s = n.__data__
                  , f = i.ease
                  , h = i.delay
                  , g = i.duration
                  , p = Ka
                  , v = [];
                return p.t = h + o,
                r >= h ? a(r - h) : (p.c = a,
                void 0)
            }
            , 0, o)
        }
    }
    function Oo(n, t, e) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"
        }
        )
    }
    function Yo(n, t, e) {
        n.attr("transform", function(n) {
            var r = t(n);
            return "translate(0," + (isFinite(r) ? r : e(n)) + ")"
        }
        )
    }
    function Io(n) {
        return n.toISOString()
    }
    function Zo(n, t, e) {
        function r(t) {
            return n(t)
        }
        function u(n, e) {
            var r = n[1] - n[0]
              , u = r / e
              , i = Bo.bisect(Ol, u);
            return i == Ol.length ? [t.year, Zi(n.map(function(n) {
                return n / 31536e6
            }
            ), e)[2]] : i ? t[u / Ol[i - 1] < Ol[i] / u ? i - 1 : i] : [Zl, Zi(n, e)[2]]
        }
        return r.invert = function(t) {
            return Vo(n.invert(t))
        }
        ,
        r.domain = function(t) {
            return arguments.length ? (n.domain(t),
            r) : n.domain().map(Vo)
        }
        ,
        r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Vo(+e + 1), t).length
            }
            var i = r.domain()
              , o = Di(i)
              , a = null  == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0],
            t = a[1]),
            r.domain(ji(i, t > 1 ? {
                floor: function(t) {
                    for (; e(t = n.floor(t)); )
                        t = Vo(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; e(t = n.ceil(t)); )
                        t = Vo(+t + 1);
                    return t
                }
            } : n))
        }
        ,
        r.ticks = function(n, t) {
            var e = Di(r.domain())
              , i = null  == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
                range: n
            }, t];
            return i && (n = i[0],
            t = i[1]),
            n.range(e[0], Vo(+e[1] + 1), 1 > t ? 1 : t)
        }
        ,
        r.tickFormat = function() {
            return e
        }
        ,
        r.copy = function() {
            return Zo(n.copy(), t, e)
        }
        ,
        Yi(r, n)
    }
    function Vo(n) {
        return new Date(n)
    }
    function Xo(n) {
        return JSON.parse(n.responseText)
    }
    function $o(n) {
        var t = Go.createRange();
        return t.selectNode(Go.body),
        t.createContextualFragment(n.responseText)
    }
    var Bo = {
        version: "3.4.13"
    };
    Date.now || (Date.now = function() {
        return +new Date
    }
    );
    var Wo = [].slice
      , Jo = function(n) {
        return Wo.call(n)
    }
      , Go = document
      , Ko = Go.documentElement
      , Qo = window;
    try {
        Jo(Ko.childNodes)[0].nodeType
    } catch (na) {
        Jo = function(n) {
            for (var t = n.length, e = new Array(t); t--; )
                e[t] = n[t];
            return e
        }
    }
    try {
        Go.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ta) {
        var ea = Qo.Element.prototype
          , ra = ea.setAttribute
          , ua = ea.setAttributeNS
          , ia = Qo.CSSStyleDeclaration.prototype
          , oa = ia.setProperty;
        ea.setAttribute = function(n, t) {
            ra.call(this, n, t + "")
        }
        ,
        ea.setAttributeNS = function(n, t, e) {
            ua.call(this, n, t, e + "")
        }
        ,
        ia.setProperty = function(n, t, e) {
            oa.call(this, n, t + "", e)
        }
    }
    Bo.ascending = n,
    Bo.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }
    ,
    Bo.min = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null  != (e = n[u]) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null  != (r = n[u]) && e > r && (e = r)
        } else {
            for (; ++u < i && !(null  != (e = t.call(n, n[u], u)) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null  != (r = t.call(n, n[u], u)) && e > r && (e = r)
        }
        return e
    }
    ,
    Bo.max = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null  != (e = n[u]) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null  != (r = n[u]) && r > e && (e = r)
        } else {
            for (; ++u < i && !(null  != (e = t.call(n, n[u], u)) && e >= e); )
                e = void 0;
            for (; ++u < i; )
                null  != (r = t.call(n, n[u], u)) && r > e && (e = r)
        }
        return e
    }
    ,
    Bo.extent = function(n, t) {
        var e, r, u, i = -1, o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null  != (e = u = n[i]) && e >= e); )
                e = u = void 0;
            for (; ++i < o; )
                null  != (r = n[i]) && (e > r && (e = r),
                r > u && (u = r))
        } else {
            for (; ++i < o && !(null  != (e = u = t.call(n, n[i], i)) && e >= e); )
                e = void 0;
            for (; ++i < o; )
                null  != (r = t.call(n, n[i], i)) && (e > r && (e = r),
                r > u && (u = r))
        }
        return [e, u]
    }
    ,
    Bo.sum = function(n, t) {
        var r, u = 0, i = n.length, o = -1;
        if (1 === arguments.length)
            for (; ++o < i; )
                e(r = +n[o]) && (u += r);
        else
            for (; ++o < i; )
                e(r = +t.call(n, n[o], o)) && (u += r);
        return u
    }
    ,
    Bo.mean = function(n, r) {
        var u, i = 0, o = n.length, a = -1, c = o;
        if (1 === arguments.length)
            for (; ++a < o; )
                e(u = t(n[a])) ? i += u : --c;
        else
            for (; ++a < o; )
                e(u = t(r.call(n, n[a], a))) ? i += u : --c;
        return c ? i / c : void 0
    }
    ,
    Bo.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1
          , r = Math.floor(e)
          , u = +n[r - 1]
          , i = e - r;
        return i ? u + i * (n[r] - u) : u
    }
    ,
    Bo.median = function(r, u) {
        var i, o = [], a = r.length, c = -1;
        if (1 === arguments.length)
            for (; ++c < a; )
                e(i = t(r[c])) && o.push(i);
        else
            for (; ++c < a; )
                e(i = t(u.call(r, r[c], c))) && o.push(i);
        return o.length ? Bo.quantile(o.sort(n), .5) : void 0
    }
    ;
    var aa = r(n);
    Bo.bisectLeft = aa.left,
    Bo.bisect = Bo.bisectRight = aa.right,
    Bo.bisector = function(t) {
        return r(1 === t.length ? function(e, r) {
            return n(t(e), r)
        }
         : t)
    }
    ,
    Bo.shuffle = function(n) {
        for (var t, e, r = n.length; r; )
            e = 0 | Math.random() * r--,
            t = n[r],
            n[r] = n[e],
            n[e] = t;
        return n
    }
    ,
    Bo.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--; )
            r[e] = n[t[e]];
        return r
    }
    ,
    Bo.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e; )
            i[e] = [t = u, u = n[++e]];
        return i
    }
    ,
    Bo.zip = function() {
        if (!(r = arguments.length))
            return [];
        for (var n = -1, t = Bo.min(arguments, u), e = new Array(t); ++n < t; )
            for (var r, i = -1, o = e[n] = new Array(r); ++i < r; )
                o[i] = arguments[i][n];
        return e
    }
    ,
    Bo.transpose = function(n) {
        return Bo.zip.apply(Bo, n)
    }
    ,
    Bo.keys = function(n) {
        var t = [];
        for (var e in n)
            t.push(e);
        return t
    }
    ,
    Bo.values = function(n) {
        var t = [];
        for (var e in n)
            t.push(n[e]);
        return t
    }
    ,
    Bo.entries = function(n) {
        var t = [];
        for (var e in n)
            t.push({
                key: e,
                value: n[e]
            });
        return t
    }
    ,
    Bo.merge = function(n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u; )
            o += n[i].length;
        for (e = new Array(o); --u >= 0; )
            for (r = n[u],
            t = r.length; --t >= 0; )
                e[--o] = r[t];
        return e
    }
    ;
    var ca = Math.abs;
    Bo.range = function(n, t, e) {
        if (arguments.length < 3 && (e = 1,
        arguments.length < 2 && (t = n,
        n = 0)),
        1 / 0 === (t - n) / e)
            throw new Error("infinite range");
        var r, u = [], o = i(ca(e)), a = -1;
        if (n *= o,
        t *= o,
        e *= o,
        0 > e)
            for (; (r = n + e * ++a) > t; )
                u.push(r / o);
        else
            for (; (r = n + e * ++a) < t; )
                u.push(r / o);
        return u
    }
    ,
    Bo.map = function(n) {
        var t = new a;
        if (n instanceof a)
            n.forEach(function(n, e) {
                t.set(n, e)
            }
            );
        else
            for (var e in n)
                t.set(e, n[e]);
        return t
    }
    ;
    var la = "__proto__"
      , sa = "\x00";
    o(a, {
        has: s,
        get: function(n) {
            return this._[c(n)]
        },
        set: function(n, t) {
            return this._[c(n)] = t
        },
        remove: f,
        keys: h,
        values: function() {
            var n = [];
            for (var t in this._)
                n.push(this._[t]);
            return n
        },
        entries: function() {
            var n = [];
            for (var t in this._)
                n.push({
                    key: l(t),
                    value: this._[t]
                });
            return n
        },
        size: g,
        empty: p,
        forEach: function(n) {
            for (var t in this._)
                n.call(this, l(t), this._[t])
        }
    }),
    Bo.nest = function() {
        function n(t, o, c) {
            if (c >= i.length)
                return r ? r.call(u, o) : e ? o.sort(e) : o;
            for (var l, s, f, h, g = -1, p = o.length, v = i[c++], d = new a; ++g < p; )
                (h = d.get(l = v(s = o[g]))) ? h.push(s) : d.set(l, [s]);
            return t ? (s = t(),
            f = function(e, r) {
                s.set(e, n(t, r, c))
            }
            ) : (s = {},
            f = function(e, r) {
                s[e] = n(t, r, c)
            }
            ),
            d.forEach(f),
            s
        }
        function t(n, e) {
            if (e >= i.length)
                return n;
            var r = []
              , u = o[e++];
            return n.forEach(function(n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                })
            }
            ),
            u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }
            ) : r
        }
        var e, r, u = {}, i = [], o = [];
        return u.map = function(t, e) {
            return n(e, t, 0)
        }
        ,
        u.entries = function(e) {
            return t(n(Bo.map, e, 0), 0)
        }
        ,
        u.key = function(n) {
            return i.push(n),
            u
        }
        ,
        u.sortKeys = function(n) {
            return o[i.length - 1] = n,
            u
        }
        ,
        u.sortValues = function(n) {
            return e = n,
            u
        }
        ,
        u.rollup = function(n) {
            return r = n,
            u
        }
        ,
        u
    }
    ,
    Bo.set = function(n) {
        var t = new v;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e)
                t.add(n[e]);
        return t
    }
    ,
    o(v, {
        has: s,
        add: function(n) {
            return this._[c(n += "")] = !0,
            n
        },
        remove: f,
        values: h,
        size: g,
        empty: p,
        forEach: function(n) {
            for (var t in this._)
                n.call(this, l(t))
        }
    }),
    Bo.behavior = {},
    Bo.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u; )
            n[e = arguments[r]] = d(n, t, t[e]);
        return n
    }
    ;
    var fa = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Bo.dispatch = function() {
        for (var n = new x, t = -1, e = arguments.length; ++t < e; )
            n[arguments[t]] = M(n);
        return n
    }
    ,
    x.prototype.on = function(n, t) {
        var e = n.indexOf(".")
          , r = "";
        if (e >= 0 && (r = n.slice(e + 1),
        n = n.slice(0, e)),
        n)
            return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null  == t)
                for (n in this)
                    this.hasOwnProperty(n) && this[n].on(r, null );
            return this
        }
    }
    ,
    Bo.event = null ,
    Bo.requote = function(n) {
        return n.replace(ha, "\\$&")
    }
    ;
    var ha = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
      , ga = {}.__proto__ ? function(n, t) {
        n.__proto__ = t
    }
     : function(n, t) {
        for (var e in t)
            n[e] = t[e]
    }
      , pa = function(n, t) {
        return t.querySelector(n)
    }
      , va = function(n, t) {
        return t.querySelectorAll(n)
    }
      , da = Ko.matches || Ko[m(Ko, "matchesSelector")]
      , ma = function(n, t) {
        return da.call(n, t)
    }
    ;
    "function" == typeof Sizzle && (pa = function(n, t) {
        return Sizzle(n, t)[0] || null 
    }
    ,
    va = Sizzle,
    ma = Sizzle.matchesSelector),
    Bo.selection = function() {
        return _a
    }
    ;
    var ya = Bo.selection.prototype = [];
    ya.select = function(n) {
        var t, e, r, u, i = [];
        n = k(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []),
            t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, l = r.length; ++c < l; )
                (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)),
                e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null )
        }
        return S(i)
    }
    ,
    ya.selectAll = function(n) {
        var t, e, r = [];
        n = E(n);
        for (var u = -1, i = this.length; ++u < i; )
            for (var o = this[u], a = -1, c = o.length; ++a < c; )
                (e = o[a]) && (r.push(t = Jo(n.call(e, e.__data__, a, u))),
                t.parentNode = e);
        return S(r)
    }
    ;
    var xa = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Bo.ns = {
        prefix: xa,
        qualify: function(n) {
            var t = n.indexOf(":")
              , e = n;
            return t >= 0 && (e = n.slice(0, t),
            n = n.slice(t + 1)),
            xa.hasOwnProperty(e) ? {
                space: xa[e],
                local: n
            } : n
        }
    },
    ya.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = Bo.ns.qualify(n),
                n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n)
                this.each(A(t, n[t]));
            return this
        }
        return this.each(A(n, t))
    }
    ,
    ya.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node()
                  , r = (n = z(n)).length
                  , u = -1;
                if (t = e.classList) {
                    for (; ++u < r; )
                        if (!t.contains(n[u]))
                            return !1
                } else
                    for (t = e.getAttribute("class"); ++u < r; )
                        if (!N(n[u]).test(t))
                            return !1;
                return !0
            }
            for (t in n)
                this.each(L(t, n[t]));
            return this
        }
        return this.each(L(n, t))
    }
    ,
    ya.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n)
                    this.each(q(e, n[e], t));
                return this
            }
            if (2 > r)
                return Qo.getComputedStyle(this.node(), null ).getPropertyValue(n);
            e = ""
        }
        return this.each(q(n, t, e))
    }
    ,
    ya.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n)
                return this.node()[n];
            for (t in n)
                this.each(R(t, n[t]));
            return this
        }
        return this.each(R(n, t))
    }
    ,
    ya.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null  == t ? "" : t
        }
         : null  == n ? function() {
            this.textContent = ""
        }
         : function() {
            this.textContent = n
        }
        ) : this.node().textContent
    }
    ,
    ya.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null  == t ? "" : t
        }
         : null  == n ? function() {
            this.innerHTML = ""
        }
         : function() {
            this.innerHTML = n
        }
        ) : this.node().innerHTML
    }
    ,
    ya.append = function(n) {
        return n = D(n),
        this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        }
        )
    }
    ,
    ya.insert = function(n, t) {
        return n = D(n),
        t = k(t),
        this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null )
        }
        )
    }
    ,
    ya.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        }
        )
    }
    ,
    ya.data = function(n, t) {
        function e(n, e) {
            var r, u, i, o = n.length, f = e.length, h = Math.min(o, f), g = new Array(f), p = new Array(f), v = new Array(o);
            if (t) {
                var d, m = new a, y = new Array(o);
                for (r = -1; ++r < o; )
                    m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u),
                    y[r] = d;
                for (r = -1; ++r < f; )
                    (u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u,
                    u.__data__ = i) : p[r] = P(i),
                    m.set(d, !0);
                for (r = -1; ++r < o; )
                    m.get(y[r]) !== !0 && (v[r] = n[r])
            } else {
                for (r = -1; ++r < h; )
                    u = n[r],
                    i = e[r],
                    u ? (u.__data__ = i,
                    g[r] = u) : p[r] = P(i);
                for (; f > r; ++r)
                    p[r] = P(e[r]);
                for (; o > r; ++r)
                    v[r] = n[r]
            }
            p.update = g,
            p.parentNode = g.parentNode = v.parentNode = n.parentNode,
            c.push(p),
            l.push(g),
            s.push(v)
        }
        var r, u, i = -1, o = this.length;
        if (!arguments.length) {
            for (n = new Array(o = (r = this[0]).length); ++i < o; )
                (u = r[i]) && (n[i] = u.__data__);
            return n
        }
        var c = H([])
          , l = S([])
          , s = S([]);
        if ("function" == typeof n)
            for (; ++i < o; )
                e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < o; )
                e(r = this[i], n);
        return l.enter = function() {
            return c
        }
        ,
        l.exit = function() {
            return s
        }
        ,
        l
    }
    ,
    ya.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }
    ,
    ya.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = U(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []),
            t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return S(u)
    }
    ,
    ya.order = function() {
        for (var n = -1, t = this.length; ++n < t; )
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0; )
                (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i),
                i = e);
        return this
    }
    ,
    ya.sort = function(n) {
        n = j.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e; )
            this[t].sort(n);
        return this.order()
    }
    ,
    ya.each = function(n) {
        return F(this, function(t, e, r) {
            n.call(t, t.__data__, e, r)
        }
        )
    }
    ,
    ya.call = function(n) {
        var t = Jo(arguments);
        return n.apply(t[0] = this, t),
        this
    }
    ,
    ya.empty = function() {
        return !this.node()
    }
    ,
    ya.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i)
                    return i
            }
        return null 
    }
    ,
    ya.size = function() {
        var n = 0;
        return F(this, function() {
            ++n
        }
        ),
        n
    }
    ;
    var Ma = [];
    Bo.selection.enter = H,
    Bo.selection.enter.prototype = Ma,
    Ma.append = ya.append,
    Ma.empty = ya.empty,
    Ma.node = ya.node,
    Ma.call = ya.call,
    Ma.size = ya.size,
    Ma.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c; ) {
            r = (u = this[a]).update,
            o.push(t = []),
            t.parentNode = u.parentNode;
            for (var l = -1, s = u.length; ++l < s; )
                (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)),
                e.__data__ = i.__data__) : t.push(null )
        }
        return S(o)
    }
    ,
    Ma.insert = function(n, t) {
        return arguments.length < 2 && (t = O(this)),
        ya.insert.call(this, n, t)
    }
    ,
    ya.transition = function() {
        for (var n, t, e = Cl || ++ql, r = [], u = Nl || {
            time: Date.now(),
            ease: wu,
            delay: 0,
            duration: 250
        }, i = -1, o = this.length; ++i < o; ) {
            r.push(n = []);
            for (var a = this[i], c = -1, l = a.length; ++c < l; )
                (t = a[c]) && Ho(t, c, e, u),
                n.push(t)
        }
        return Uo(r, e)
    }
    ,
    ya.interrupt = function() {
        return this.each(Y)
    }
    ,
    Bo.select = function(n) {
        var t = ["string" == typeof n ? pa(n, Go) : n];
        return t.parentNode = Ko,
        S([t])
    }
    ,
    Bo.selectAll = function(n) {
        var t = Jo("string" == typeof n ? va(n, Go) : n);
        return t.parentNode = Ko,
        S([t])
    }
    ;
    var _a = Bo.select(Ko);
    ya.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n)
                    this.each(I(e, n[e], t));
                return this
            }
            if (2 > r)
                return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(I(n, t, e))
    }
    ;
    var ba = Bo.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    ba.forEach(function(n) {
        "on" + n in Go && ba.remove(n)
    }
    );
    var wa = "onselectstart" in Go ? null  : m(Ko.style, "userSelect")
      , Sa = 0;
    Bo.mouse = function(n) {
        return $(n, b())
    }
    ;
    var ka = /WebKit/.test(Qo.navigator.userAgent) ? -1 : 0;
    Bo.touch = function(n, t, e) {
        if (arguments.length < 3 && (e = t,
        t = b().changedTouches),
        t)
            for (var r, u = 0, i = t.length; i > u; ++u)
                if ((r = t[u]).identifier === e)
                    return $(n, r)
    }
    ,
    Bo.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i)
        }
        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - x[0],
                    e = r[1] - x[1],
                    p |= n | e,
                    x = r,
                    g({
                        type: "drag",
                        x: r[0] + l[0],
                        y: r[1] + l[1],
                        dx: n,
                        dy: e
                    }))
                }
                function c() {
                    t(h, v) && (m.on(i + d, null ).on(o + d, null ),
                    y(p && Bo.event.target === f),
                    g({
                        type: "dragend"
                    }))
                }
                var l, s = this, f = Bo.event.target, h = s.parentNode, g = e.of(s, arguments), p = 0, v = n(), d = ".drag" + (null  == v ? "" : "-" + v), m = Bo.select(u()).on(i + d, a).on(o + d, c), y = X(), x = t(h, v);
                r ? (l = r.apply(s, arguments),
                l = [l.x - x[0], l.y - x[1]]) : l = [0, 0],
                g({
                    type: "dragstart"
                })
            }
        }
        var e = w(n, "drag", "dragstart", "dragend")
          , r = null 
          , u = t(y, Bo.mouse, J, "mousemove", "mouseup")
          , i = t(B, Bo.touch, W, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        Bo.rebind(n, e, "on")
    }
    ,
    Bo.touches = function(n, t) {
        return arguments.length < 2 && (t = b().touches),
        t ? Jo(t).map(function(t) {
            var e = $(n, t);
            return e.identifier = t.identifier,
            e
        }
        ) : []
    }
    ;
    var Ea = Math.PI
      , Aa = 2 * Ea
      , Ca = Ea / 2
      , Na = 1e-6
      , za = Na * Na
      , La = Ea / 180
      , Ta = 180 / Ea
      , qa = Math.SQRT2
      , Ra = 2
      , Da = 4;
    Bo.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = et(v)
                  , o = i / (Ra * h) * (e * rt(qa * t + v) - tt(v));
                return [r + o * l, u + o * s, i * e / et(qa * t + v)]
            }
            return [r + n * l, u + n * s, i * Math.exp(qa * t)]
        }
        var r = n[0]
          , u = n[1]
          , i = n[2]
          , o = t[0]
          , a = t[1]
          , c = t[2]
          , l = o - r
          , s = a - u
          , f = l * l + s * s
          , h = Math.sqrt(f)
          , g = (c * c - i * i + Da * f) / (2 * i * Ra * h)
          , p = (c * c - i * i - Da * f) / (2 * c * Ra * h)
          , v = Math.log(Math.sqrt(g * g + 1) - g)
          , d = Math.log(Math.sqrt(p * p + 1) - p)
          , m = d - v
          , y = (m || Math.log(c / i)) / qa;
        return e.duration = 1e3 * y,
        e
    }
    ,
    Bo.behavior.zoom = function() {
        function n(n) {
            n.on(A, l).on(ja + ".zoom", f).on("dblclick.zoom", h).on(z, s)
        }
        function t(n) {
            return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
        }
        function e(n) {
            return [n[0] * S.k + S.x, n[1] * S.k + S.y]
        }
        function r(n) {
            S.k = Math.max(E[0], Math.min(E[1], n))
        }
        function u(n, t) {
            t = e(t),
            S.x += n[0] - t[0],
            S.y += n[1] - t[1]
        }
        function i() {
            x && x.domain(y.range().map(function(n) {
                return (n - S.x) / S.k
            }
            ).map(y.invert)),
            b && b.domain(M.range().map(function(n) {
                return (n - S.y) / S.k
            }
            ).map(M.invert))
        }
        function o(n) {
            n({
                type: "zoomstart"
            })
        }
        function a(n) {
            i(),
            n({
                type: "zoom",
                scale: S.k,
                translate: [S.x, S.y]
            })
        }
        function c(n) {
            n({
                type: "zoomend"
            })
        }
        function l() {
            function n() {
                s = 1,
                u(Bo.mouse(r), h),
                a(l)
            }
            function e() {
                f.on(C, null ).on(N, null ),
                g(s && Bo.event.target === i),
                c(l)
            }
            var r = this
              , i = Bo.event.target
              , l = L.of(r, arguments)
              , s = 0
              , f = Bo.select(Qo).on(C, n).on(N, e)
              , h = t(Bo.mouse(r))
              , g = X();
            Y.call(r),
            o(l)
        }
        function s() {
            function n() {
                var n = Bo.touches(g);
                return h = S.k,
                n.forEach(function(n) {
                    n.identifier in v && (v[n.identifier] = t(n))
                }
                ),
                n
            }
            function e() {
                var t = Bo.event.target;
                Bo.select(t).on(x, i).on(M, f),
                b.push(t);
                for (var e = Bo.event.changedTouches, o = 0, c = e.length; c > o; ++o)
                    v[e[o].identifier] = null ;
                var l = n()
                  , s = Date.now();
                if (1 === l.length) {
                    if (500 > s - m) {
                        var h = l[0]
                          , g = v[h.identifier];
                        r(2 * S.k),
                        u(h, g),
                        _(),
                        a(p)
                    }
                    m = s
                } else if (l.length > 1) {
                    var h = l[0]
                      , y = l[1]
                      , w = h[0] - y[0]
                      , k = h[1] - y[1];
                    d = w * w + k * k
                }
            }
            function i() {
                for (var n, t, e, i, o = Bo.touches(g), c = 0, l = o.length; l > c; ++c,
                i = null )
                    if (e = o[c],
                    i = v[e.identifier]) {
                        if (t)
                            break;
                        n = e,
                        t = i
                    }
                if (i) {
                    var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s
                      , f = d && Math.sqrt(s / d);
                    n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2],
                    t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
                    r(f * h)
                }
                m = null ,
                u(n, t),
                a(p)
            }
            function f() {
                if (Bo.event.touches.length) {
                    for (var t = Bo.event.changedTouches, e = 0, r = t.length; r > e; ++e)
                        delete v[t[e].identifier];
                    for (var u in v)
                        return void n()
                }
                Bo.selectAll(b).on(y, null ),
                w.on(A, l).on(z, s),
                k(),
                c(p)
            }
            var h, g = this, p = L.of(g, arguments), v = {}, d = 0, y = ".zoom-" + Bo.event.changedTouches[0].identifier, x = "touchmove" + y, M = "touchend" + y, b = [], w = Bo.select(g), k = X();
            Y.call(g),
            e(),
            o(p),
            w.on(A, null ).on(z, e)
        }
        function f() {
            var n = L.of(this, arguments);
            d ? clearTimeout(d) : (g = t(p = v || Bo.mouse(this)),
            Y.call(this),
            o(n)),
            d = setTimeout(function() {
                d = null ,
                c(n)
            }
            , 50),
            _(),
            r(Math.pow(2, .002 * Pa()) * S.k),
            u(p, g),
            a(n)
        }
        function h() {
            var n = L.of(this, arguments)
              , e = Bo.mouse(this)
              , i = t(e)
              , l = Math.log(S.k) / Math.LN2;
            o(n),
            r(Math.pow(2, Bo.event.shiftKey ? Math.ceil(l) - 1 : Math.floor(l) + 1)),
            u(e, i),
            a(n),
            c(n)
        }
        var g, p, v, d, m, y, x, M, b, S = {
            x: 0,
            y: 0,
            k: 1
        }, k = [960, 500], E = Ua, A = "mousedown.zoom", C = "mousemove.zoom", N = "mouseup.zoom", z = "touchstart.zoom", L = w(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = L.of(this, arguments)
                  , t = S;
                Cl ? Bo.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    o(n)
                }
                ).tween("zoom:zoom", function() {
                    var e = k[0]
                      , r = k[1]
                      , u = e / 2
                      , i = r / 2
                      , o = Bo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                    return function(t) {
                        var r = o(t)
                          , c = e / r[2];
                        this.__chart__ = S = {
                            x: u - r[0] * c,
                            y: i - r[1] * c,
                            k: c
                        },
                        a(n)
                    }
                }
                ).each("end.zoom", function() {
                    c(n)
                }
                ) : (this.__chart__ = S,
                o(n),
                a(n),
                c(n))
            }
            )
        }
        ,
        n.translate = function(t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            },
            i(),
            n) : [S.x, S.y]
        }
        ,
        n.scale = function(t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            },
            i(),
            n) : S.k
        }
        ,
        n.scaleExtent = function(t) {
            return arguments.length ? (E = null  == t ? Ua : [+t[0], +t[1]],
            n) : E
        }
        ,
        n.center = function(t) {
            return arguments.length ? (v = t && [+t[0], +t[1]],
            n) : v
        }
        ,
        n.size = function(t) {
            return arguments.length ? (k = t && [+t[0], +t[1]],
            n) : k
        }
        ,
        n.x = function(t) {
            return arguments.length ? (x = t,
            y = t.copy(),
            S = {
                x: 0,
                y: 0,
                k: 1
            },
            n) : x
        }
        ,
        n.y = function(t) {
            return arguments.length ? (b = t,
            M = t.copy(),
            S = {
                x: 0,
                y: 0,
                k: 1
            },
            n) : b
        }
        ,
        Bo.rebind(n, L, "on")
    }
    ;
    var Pa, Ua = [0, 1 / 0], ja = "onwheel" in Go ? (Pa = function() {
        return -Bo.event.deltaY * (Bo.event.deltaMode ? 120 : 1)
    }
    ,
    "wheel") : "onmousewheel" in Go ? (Pa = function() {
        return Bo.event.wheelDelta
    }
    ,
    "mousewheel") : (Pa = function() {
        return -Bo.event.detail
    }
    ,
    "MozMousePixelScroll");
    Bo.color = it,
    it.prototype.toString = function() {
        return this.rgb() + ""
    }
    ,
    Bo.hsl = ot;
    var Fa = ot.prototype = new it;
    Fa.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        new ot(this.h,this.s,this.l / n)
    }
    ,
    Fa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        new ot(this.h,this.s,n * this.l)
    }
    ,
    Fa.rgb = function() {
        return at(this.h, this.s, this.l)
    }
    ,
    Bo.hcl = ct;
    var Ha = ct.prototype = new it;
    Ha.brighter = function(n) {
        return new ct(this.h,this.c,Math.min(100, this.l + Oa * (arguments.length ? n : 1)))
    }
    ,
    Ha.darker = function(n) {
        return new ct(this.h,this.c,Math.max(0, this.l - Oa * (arguments.length ? n : 1)))
    }
    ,
    Ha.rgb = function() {
        return lt(this.h, this.c, this.l).rgb()
    }
    ,
    Bo.lab = st;
    var Oa = 18
      , Ya = .95047
      , Ia = 1
      , Za = 1.08883
      , Va = st.prototype = new it;
    Va.brighter = function(n) {
        return new st(Math.min(100, this.l + Oa * (arguments.length ? n : 1)),this.a,this.b)
    }
    ,
    Va.darker = function(n) {
        return new st(Math.max(0, this.l - Oa * (arguments.length ? n : 1)),this.a,this.b)
    }
    ,
    Va.rgb = function() {
        return ft(this.l, this.a, this.b)
    }
    ,
    Bo.rgb = dt;
    var Xa = dt.prototype = new it;
    Xa.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r
          , e = this.g
          , r = this.b
          , u = 30;
        return t || e || r ? (t && u > t && (t = u),
        e && u > e && (e = u),
        r && u > r && (r = u),
        new dt(Math.min(255, t / n),Math.min(255, e / n),Math.min(255, r / n))) : new dt(u,u,u)
    }
    ,
    Xa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1),
        new dt(n * this.r,n * this.g,n * this.b)
    }
    ,
    Xa.hsl = function() {
        return _t(this.r, this.g, this.b)
    }
    ,
    Xa.toString = function() {
        return "#" + xt(this.r) + xt(this.g) + xt(this.b)
    }
    ;
    var $a = Bo.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    $a.forEach(function(n, t) {
        $a.set(n, mt(t))
    }
    ),
    Bo.functor = kt,
    Bo.xhr = At(Et),
    Bo.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e,
            e = null );
            var o = Ct(n, t, null  == e ? r : u(e), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null  == (e = n) ? r : u(n)) : e
            }
            ,
            o
        }
        function r(n) {
            return e.parse(n.responseText)
        }
        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n)
            }
        }
        function i(t) {
            return t.map(o).join(n)
        }
        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var a = new RegExp('["' + n + "\n]")
          , c = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r)
                    return r(n, e - 1);
                var u = new Function("d","return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }
                ).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e)
                }
                 : u
            }
            )
        }
        ,
        e.parseRows = function(n, t) {
            function e() {
                if (s >= l)
                    return o;
                if (u)
                    return u = !1,
                    i;
                var t = s;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < l; )
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1))
                                break;
                            ++e
                        }
                    s = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0,
                    10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0),
                    n.slice(t + 1, e).replace(/""/g, '"')
                }
                for (; l > s; ) {
                    var r = n.charCodeAt(s++)
                      , a = 1;
                    if (10 === r)
                        u = !0;
                    else if (13 === r)
                        u = !0,
                        10 === n.charCodeAt(s) && (++s,
                        ++a);
                    else if (r !== c)
                        continue;return n.slice(t, s - a)
                }
                return n.slice(t)
            }
            for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0; (r = e()) !== o; ) {
                for (var h = []; r !== i && r !== o; )
                    h.push(r),
                    r = e();
                t && null  == (h = t(h, f++)) || a.push(h)
            }
            return a
        }
        ,
        e.format = function(t) {
            if (Array.isArray(t[0]))
                return e.formatRows(t);
            var r = new v
              , u = [];
            return t.forEach(function(n) {
                for (var t in n)
                    r.has(t) || u.push(r.add(t))
            }
            ),
            [u.map(o).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n])
                }
                ).join(n)
            }
            )).join("\n")
        }
        ,
        e.formatRows = function(n) {
            return n.map(i).join("\n")
        }
        ,
        e
    }
    ,
    Bo.csv = Bo.dsv(",", "text/csv"),
    Bo.tsv = Bo.dsv("	", "text/tab-separated-values");
    var Ba, Wa, Ja, Ga, Ka, Qa = Qo[m(Qo, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17)
    }
    ;
    Bo.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0),
        3 > r && (e = Date.now());
        var u = e + t
          , i = {
            c: n,
            t: u,
            f: !1,
            n: null 
        };
        Wa ? Wa.n = i : Ba = i,
        Wa = i,
        Ja || (Ga = clearTimeout(Ga),
        Ja = 1,
        Qa(Lt))
    }
    ,
    Bo.timer.flush = function() {
        Tt(),
        qt()
    }
    ,
    Bo.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    }
    ;
    var nc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    Bo.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1),
        t && (n = Bo.round(n, Rt(n, t))),
        e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10),
        e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))),
        nc[8 + e / 3]
    }
    ;
    var tc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
      , ec = Bo.map({
        b: function(n) {
            return n.toString(2)
        },
        c: function(n) {
            return String.fromCharCode(n)
        },
        o: function(n) {
            return n.toString(8)
        },
        x: function(n) {
            return n.toString(16)
        },
        X: function(n) {
            return n.toString(16).toUpperCase()
        },
        g: function(n, t) {
            return n.toPrecision(t)
        },
        e: function(n, t) {
            return n.toExponential(t)
        },
        f: function(n, t) {
            return n.toFixed(t)
        },
        r: function(n, t) {
            return (n = Bo.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
        }
    })
      , rc = Bo.time = {}
      , uc = Date;
    jt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            ic.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            ic.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            ic.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            ic.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            ic.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            ic.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            ic.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            ic.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            ic.setTime.apply(this._, arguments)
        }
    };
    var ic = Date.prototype;
    rc.year = Ft(function(n) {
        return n = rc.day(n),
        n.setMonth(0, 1),
        n
    }
    , function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }
    , function(n) {
        return n.getFullYear()
    }
    ),
    rc.years = rc.year.range,
    rc.years.utc = rc.year.utc.range,
    rc.day = Ft(function(n) {
        var t = new uc(2e3,0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
        t
    }
    , function(n, t) {
        n.setDate(n.getDate() + t)
    }
    , function(n) {
        return n.getDate() - 1
    }
    ),
    rc.days = rc.day.range,
    rc.days.utc = rc.day.utc.range,
    rc.dayOfYear = function(n) {
        var t = rc.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }
    ,
    ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var e = rc[n] = Ft(function(n) {
            return (n = rc.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7),
            n
        }
        , function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }
        , function(n) {
            var e = rc.year(n).getDay();
            return Math.floor((rc.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        }
        );
        rc[n + "s"] = e.range,
        rc[n + "s"].utc = e.utc.range,
        rc[n + "OfYear"] = function(n) {
            var e = rc.year(n).getDay();
            return Math.floor((rc.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }
    ),
    rc.week = rc.sunday,
    rc.weeks = rc.sunday.range,
    rc.weeks.utc = rc.sunday.utc.range,
    rc.weekOfYear = rc.sundayOfYear;
    var oc = {
        "-": "",
        _: " ",
        0: "0"
    }
      , ac = /^\s*\d+/
      , cc = /^%/;
    Bo.locale = function(n) {
        return {
            numberFormat: Pt(n),
            timeFormat: Ot(n)
        }
    }
    ;
    var lc = Bo.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Bo.format = lc.numberFormat,
    Bo.geo = {},
    ce.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            le(n, this.t, sc),
            le(sc.s, this.s, this),
            this.s ? this.t += sc.t : this.s = sc.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var sc = new ce;
    Bo.geo.stream = function(n, t) {
        n && fc.hasOwnProperty(n.type) ? fc[n.type](n, t) : se(n, t)
    }
    ;
    var fc = {
        Feature: function(n, t) {
            se(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var e = n.features, r = -1, u = e.length; ++r < u; )
                se(e[r].geometry, t)
        }
    }
      , hc = {
        Sphere: function(n, t) {
            t.sphere()
        },
        Point: function(n, t) {
            n = n.coordinates,
            t.point(n[0], n[1], n[2])
        },
        MultiPoint: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                n = e[r],
                t.point(n[0], n[1], n[2])
        },
        LineString: function(n, t) {
            fe(n.coordinates, t, 0)
        },
        MultiLineString: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                fe(e[r], t, 0)
        },
        Polygon: function(n, t) {
            he(n.coordinates, t)
        },
        MultiPolygon: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                he(e[r], t)
        },
        GeometryCollection: function(n, t) {
            for (var e = n.geometries, r = -1, u = e.length; ++r < u; )
                se(e[r], t)
        }
    };
    Bo.geo.area = function(n) {
        return gc = 0,
        Bo.geo.stream(n, vc),
        gc
    }
    ;
    var gc, pc = new ce, vc = {
        sphere: function() {
            gc += 4 * Ea
        },
        point: y,
        lineStart: y,
        lineEnd: y,
        polygonStart: function() {
            pc.reset(),
            vc.lineStart = ge
        },
        polygonEnd: function() {
            var n = 2 * pc;
            gc += 0 > n ? 4 * Ea + n : n,
            vc.lineStart = vc.lineEnd = vc.point = y
        }
    };
    Bo.geo.bounds = function() {
        function n(n, t) {
            x.push(M = [s = n, h = n]),
            f > t && (f = t),
            t > g && (g = t)
        }
        function t(t, e) {
            var r = pe([t * La, e * La]);
            if (m) {
                var u = de(m, r)
                  , i = [u[1], -u[0], 0]
                  , o = de(i, u);
                xe(o),
                o = Me(o);
                var c = t - p
                  , l = c > 0 ? 1 : -1
                  , v = o[0] * Ta * l
                  , d = ca(c) > 180;
                if (d ^ (v > l * p && l * t > v)) {
                    var y = o[1] * Ta;
                    y > g && (g = y)
                } else if (v = (v + 360) % 360 - 180,
                d ^ (v > l * p && l * t > v)) {
                    var y = -o[1] * Ta;
                    f > y && (f = y)
                } else
                    f > e && (f = e),
                    e > g && (g = e);
                d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t),
                t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t)
            } else
                n(t, e);
            m = r,
            p = t
        }
        function e() {
            _.point = t
        }
        function r() {
            M[0] = s,
            M[1] = h,
            _.point = n,
            m = null 
        }
        function u(n, e) {
            if (m) {
                var r = n - p;
                y += ca(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else
                v = n,
                d = e;
            vc.point(n, e),
            t(n, e)
        }
        function i() {
            vc.lineStart()
        }
        function o() {
            u(v, d),
            vc.lineEnd(),
            ca(y) > Na && (s = -(h = 180)),
            M[0] = s,
            M[1] = h,
            m = null 
        }
        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }
        function c(n, t) {
            return n[0] - t[0]
        }
        function l(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var s, f, h, g, p, v, d, m, y, x, M, _ = {
            point: n,
            lineStart: e,
            lineEnd: r,
            polygonStart: function() {
                _.point = u,
                _.lineStart = i,
                _.lineEnd = o,
                y = 0,
                vc.polygonStart()
            },
            polygonEnd: function() {
                vc.polygonEnd(),
                _.point = n,
                _.lineStart = e,
                _.lineEnd = r,
                0 > pc ? (s = -(h = 180),
                f = -(g = 90)) : y > Na ? g = 90 : -Na > y && (f = -90),
                M[0] = s,
                M[1] = h
            }
        };
        return function(n) {
            g = h = -(s = f = 1 / 0),
            x = [],
            Bo.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var e, r = 1, u = x[0], i = [u]; t > r; ++r)
                    e = x[r],
                    l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]),
                    a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e,
                ++r)
                    e = i[r],
                    (o = a(u[1], e[0])) > p && (p = o,
                    s = e[0],
                    h = u[1])
            }
            return x = M = null ,
            1 / 0 === s || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[s, f], [h, g]]
        }
    }
    (),
    Bo.geo.centroid = function(n) {
        dc = mc = yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = 0,
        Bo.geo.stream(n, Ac);
        var t = Sc
          , e = kc
          , r = Ec
          , u = t * t + e * e + r * r;
        return za > u && (t = _c,
        e = bc,
        r = wc,
        Na > mc && (t = yc,
        e = xc,
        r = Mc),
        u = t * t + e * e + r * r,
        za > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ta, nt(r / Math.sqrt(u)) * Ta]
    }
    ;
    var dc, mc, yc, xc, Mc, _c, bc, wc, Sc, kc, Ec, Ac = {
        sphere: y,
        point: be,
        lineStart: Se,
        lineEnd: ke,
        polygonStart: function() {
            Ac.lineStart = Ee
        },
        polygonEnd: function() {
            Ac.lineStart = Se
        }
    }, Cc = Le(Ae, De, Ue, [-Ea, -Ea / 2]), Nc = 1e9;
    Bo.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {
            stream: function(n) {
                return u && (u.valid = !1),
                u = i(n),
                u.valid = !0,
                u
            },
            extent: function(a) {
                return arguments.length ? (i = Oe(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]),
                u && (u.valid = !1,
                u = null ),
                o) : [[n, t], [e, r]]
            }
        };
        return o.extent([[0, 0], [960, 500]])
    }
    ,
    (Bo.geo.conicEqualArea = function() {
        return Ie(Ze)
    }
    ).raw = Ze,
    Bo.geo.albers = function() {
        return Bo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }
    ,
    Bo.geo.albersUsa = function() {
        function n(n) {
            var i = n[0]
              , o = n[1];
            return t = null ,
            e(i, o),
            t || (r(i, o),
            t) || u(i, o),
            t
        }
        var t, e, r, u, i = Bo.geo.albers(), o = Bo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = Bo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {
            point: function(n, e) {
                t = [n, e]
            }
        };
        return n.invert = function(n) {
            var t = i.scale()
              , e = i.translate()
              , r = (n[0] - e[0]) / t
              , u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
        }
        ,
        n.stream = function(n) {
            var t = i.stream(n)
              , e = o.stream(n)
              , r = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u),
                    e.point(n, u),
                    r.point(n, u)
                },
                sphere: function() {
                    t.sphere(),
                    e.sphere(),
                    r.sphere()
                },
                lineStart: function() {
                    t.lineStart(),
                    e.lineStart(),
                    r.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(),
                    e.lineEnd(),
                    r.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(),
                    e.polygonStart(),
                    r.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(),
                    e.polygonEnd(),
                    r.polygonEnd()
                }
            }
        }
        ,
        n.precision = function(t) {
            return arguments.length ? (i.precision(t),
            o.precision(t),
            a.precision(t),
            n) : i.precision()
        }
        ,
        n.scale = function(t) {
            return arguments.length ? (i.scale(t),
            o.scale(.35 * t),
            a.scale(t),
            n.translate(i.translate())) : i.scale()
        }
        ,
        n.translate = function(t) {
            if (!arguments.length)
                return i.translate();
            var l = i.scale()
              , s = +t[0]
              , f = +t[1];
            return e = i.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point,
            r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + Na, f + .12 * l + Na], [s - .214 * l - Na, f + .234 * l - Na]]).stream(c).point,
            u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + Na, f + .166 * l + Na], [s - .115 * l - Na, f + .234 * l - Na]]).stream(c).point,
            n
        }
        ,
        n.scale(1070)
    }
    ;
    var zc, Lc, Tc, qc, Rc, Dc, Pc = {
        point: y,
        lineStart: y,
        lineEnd: y,
        polygonStart: function() {
            Lc = 0,
            Pc.lineStart = Ve
        },
        polygonEnd: function() {
            Pc.lineStart = Pc.lineEnd = Pc.point = y,
            zc += ca(Lc / 2)
        }
    }, Uc = {
        point: Xe,
        lineStart: y,
        lineEnd: y,
        polygonStart: y,
        polygonEnd: y
    }, jc = {
        point: We,
        lineStart: Je,
        lineEnd: Ge,
        polygonStart: function() {
            jc.lineStart = Ke
        },
        polygonEnd: function() {
            jc.point = We,
            jc.lineStart = Je,
            jc.lineEnd = Ge
        }
    };
    Bo.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)),
            o && o.valid || (o = u(i)),
            Bo.geo.stream(n, o)),
            i.result()
        }
        function t() {
            return o = null ,
            n
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return zc = 0,
            Bo.geo.stream(n, u(Pc)),
            zc
        }
        ,
        n.centroid = function(n) {
            return yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = 0,
            Bo.geo.stream(n, u(jc)),
            Ec ? [Sc / Ec, kc / Ec] : wc ? [_c / wc, bc / wc] : Mc ? [yc / Mc, xc / Mc] : [0 / 0, 0 / 0]
        }
        ,
        n.bounds = function(n) {
            return Rc = Dc = -(Tc = qc = 1 / 0),
            Bo.geo.stream(n, u(Uc)),
            [[Tc, qc], [Rc, Dc]]
        }
        ,
        n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || tr(n) : Et,
            t()) : e
        }
        ,
        n.context = function(n) {
            return arguments.length ? (i = null  == (r = n) ? new $e : new Qe(n),
            "function" != typeof a && i.pointRadius(a),
            t()) : r
        }
        ,
        n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t),
            +t),
            n) : a
        }
        ,
        n.projection(Bo.geo.albersUsa()).context(null )
    }
    ,
    Bo.geo.transform = function(n) {
        return {
            stream: function(t) {
                var e = new er(t);
                for (var r in n)
                    e[r] = n[r];
                return e
            }
        }
    }
    ,
    er.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    },
    Bo.geo.projection = ur,
    Bo.geo.projectionMutator = ir,
    (Bo.geo.equirectangular = function() {
        return ur(ar)
    }
    ).raw = ar.invert = ar,
    Bo.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * La, t[1] * La),
            t[0] *= Ta,
            t[1] *= Ta,
            t
        }
        return n = lr(n[0] % 360 * La, n[1] * La, n.length > 2 ? n[2] * La : 0),
        t.invert = function(t) {
            return t = n.invert(t[0] * La, t[1] * La),
            t[0] *= Ta,
            t[1] *= Ta,
            t
        }
        ,
        t
    }
    ,
    cr.invert = ar,
    Bo.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r
              , t = lr(-n[0] * La, -n[1] * La, 0).invert
              , u = [];
            return e(null , null , 1, {
                point: function(n, e) {
                    u.push(n = t(n, e)),
                    n[0] *= Ta,
                    n[1] *= Ta
                }
            }),
            {
                type: "Polygon",
                coordinates: [u]
            }
        }
        var t, e, r = [0, 0], u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n.angle = function(r) {
            return arguments.length ? (e = gr((t = +r) * La, u * La),
            n) : t
        }
        ,
        n.precision = function(r) {
            return arguments.length ? (e = gr(t * La, (u = +r) * La),
            n) : u
        }
        ,
        n.angle(90)
    }
    ,
    Bo.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * La, u = n[1] * La, i = t[1] * La, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), l = Math.cos(u), s = Math.sin(i), f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a)
    }
    ,
    Bo.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }
        function t() {
            return Bo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Bo.range(Math.ceil(l / m) * m, c, m).map(g)).concat(Bo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return ca(n % d) > Na
            }
            ).map(s)).concat(Bo.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return ca(n % m) > Na
            }
            ).map(f))
        }
        var e, r, u, i, o, a, c, l, s, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            }
            )
        }
        ,
        n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
            }
        }
        ,
        n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }
        ,
        n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0],
            u = +t[1][0],
            l = +t[0][1],
            c = +t[1][1],
            i > u && (t = i,
            i = u,
            u = t),
            l > c && (t = l,
            l = c,
            c = t),
            n.precision(y)) : [[i, l], [u, c]]
        }
        ,
        n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0],
            e = +t[1][0],
            a = +t[0][1],
            o = +t[1][1],
            r > e && (t = r,
            r = e,
            e = t),
            a > o && (t = a,
            a = o,
            o = t),
            n.precision(y)) : [[r, a], [e, o]]
        }
        ,
        n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }
        ,
        n.majorStep = function(t) {
            return arguments.length ? (d = +t[0],
            m = +t[1],
            n) : [d, m]
        }
        ,
        n.minorStep = function(t) {
            return arguments.length ? (p = +t[0],
            v = +t[1],
            n) : [p, v]
        }
        ,
        n.precision = function(t) {
            return arguments.length ? (y = +t,
            s = vr(a, o, 90),
            f = dr(r, e, y),
            h = vr(l, c, 90),
            g = dr(i, u, y),
            n) : y
        }
        ,
        n.majorExtent([[-180, -90 + Na], [180, 90 - Na]]).minorExtent([[-180, -80 - Na], [180, 80 + Na]])
    }
    ,
    Bo.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
            }
        }
        var t, e, r = mr, u = yr;
        return n.distance = function() {
            return Bo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
        }
        ,
        n.source = function(e) {
            return arguments.length ? (r = e,
            t = "function" == typeof e ? null  : e,
            n) : r
        }
        ,
        n.target = function(t) {
            return arguments.length ? (u = t,
            e = "function" == typeof t ? null  : t,
            n) : u
        }
        ,
        n.precision = function() {
            return arguments.length ? n : 0
        }
        ,
        n
    }
    ,
    Bo.geo.interpolate = function(n, t) {
        return xr(n[0] * La, n[1] * La, t[0] * La, t[1] * La)
    }
    ,
    Bo.geo.length = function(n) {
        return Fc = 0,
        Bo.geo.stream(n, Hc),
        Fc
    }
    ;
    var Fc, Hc = {
        sphere: y,
        point: y,
        lineStart: Mr,
        lineEnd: y,
        polygonStart: y,
        polygonEnd: y
    }, Oc = _r(function(n) {
        return Math.sqrt(2 / (1 + n))
    }
    , function(n) {
        return 2 * Math.asin(n / 2)
    }
    );
    (Bo.geo.azimuthalEqualArea = function() {
        return ur(Oc)
    }
    ).raw = Oc;
    var Yc = _r(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }
    , Et);
    (Bo.geo.azimuthalEquidistant = function() {
        return ur(Yc)
    }
    ).raw = Yc,
    (Bo.geo.conicConformal = function() {
        return Ie(br)
    }
    ).raw = br,
    (Bo.geo.conicEquidistant = function() {
        return Ie(wr)
    }
    ).raw = wr;
    var Ic = _r(function(n) {
        return 1 / n
    }
    , Math.atan);
    (Bo.geo.gnomonic = function() {
        return ur(Ic)
    }
    ).raw = Ic,
    Sr.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - Ca]
    }
    ,
    (Bo.geo.mercator = function() {
        return kr(Sr)
    }
    ).raw = Sr;
    var Zc = _r(function() {
        return 1
    }
    , Math.asin);
    (Bo.geo.orthographic = function() {
        return ur(Zc)
    }
    ).raw = Zc;
    var Vc = _r(function(n) {
        return 1 / (1 + n)
    }
    , function(n) {
        return 2 * Math.atan(n)
    }
    );
    (Bo.geo.stereographic = function() {
        return ur(Vc)
    }
    ).raw = Vc,
    Er.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - Ca]
    }
    ,
    (Bo.geo.transverseMercator = function() {
        var n = kr(Er)
          , t = n.center
          , e = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(),
            [n[1], -n[0]])
        }
        ,
        n.rotate = function(n) {
            return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(),
            [n[0], n[1], n[2] - 90])
        }
        ,
        e([0, 0, 90])
    }
    ).raw = Er,
    Bo.geom = {},
    Bo.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3)
                return [];
            var t, u = kt(e), i = kt(r), o = n.length, a = [], c = [];
            for (t = 0; o > t; t++)
                a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
            for (a.sort(zr),
            t = 0; o > t; t++)
                c.push([a[t][0], -a[t][1]]);
            var l = Nr(a)
              , s = Nr(c)
              , f = s[0] === l[0]
              , h = s[s.length - 1] === l[l.length - 1]
              , g = [];
            for (t = l.length - 1; t >= 0; --t)
                g.push(n[a[l[t]][2]]);
            for (t = +f; t < s.length - h; ++t)
                g.push(n[a[s[t]][2]]);
            return g
        }
        var e = Ar
          , r = Cr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n,
            t) : e
        }
        ,
        t.y = function(n) {
            return arguments.length ? (r = n,
            t) : r
        }
        ,
        t)
    }
    ,
    Bo.geom.polygon = function(n) {
        return ga(n, Xc),
        n
    }
    ;
    var Xc = Bo.geom.polygon.prototype = [];
    Xc.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e; )
            n = r,
            r = this[t],
            u += n[1] * r[0] - n[0] * r[1];
        return .5 * u
    }
    ,
    Xc.centroid = function(n) {
        var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u; )
            t = a,
            a = this[r],
            e = t[0] * a[1] - a[0] * t[1],
            i += (t[0] + a[0]) * e,
            o += (t[1] + a[1]) * e;
        return [i * n, o * n]
    }
    ,
    Xc.clip = function(n) {
        for (var t, e, r, u, i, o, a = qr(n), c = -1, l = this.length - qr(this), s = this[l - 1]; ++c < l; ) {
            for (t = n.slice(),
            n.length = 0,
            u = this[c],
            i = t[(r = t.length - a) - 1],
            e = -1; ++e < r; )
                o = t[e],
                Lr(o, s, u) ? (Lr(i, s, u) || n.push(Tr(i, o, s, u)),
                n.push(o)) : Lr(i, s, u) && n.push(Tr(i, o, s, u)),
                i = o;
            a && n.push(n[0]),
            s = u
        }
        return n
    }
    ;
    var $c, Bc, Wc, Jc, Gc, Kc = [], Qc = [];
    Or.prototype.prepare = function() {
        for (var n, t = this.edges, e = t.length; e--; )
            n = t[e].edge,
            n.b && n.a || t.splice(e, 1);
        return t.sort(Ir),
        t.length
    }
    ,
    Qr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    },
    nu.prototype = {
        insert: function(n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n,
                t.N = n.N,
                n.N && (n.N.P = t),
                n.N = t,
                n.R) {
                    for (n = n.R; n.L; )
                        n = n.L;
                    n.L = t
                } else
                    n.R = t;
                e = n
            } else
                this._ ? (n = uu(this._),
                t.P = null ,
                t.N = n,
                n.P = n.L = t,
                e = n) : (t.P = t.N = null ,
                this._ = t,
                e = null );
            for (t.L = t.R = null ,
            t.U = e,
            t.C = !0,
            n = t; e && e.C; )
                r = e.U,
                e === r.L ? (u = r.R,
                u && u.C ? (e.C = u.C = !1,
                r.C = !0,
                n = r) : (n === e.R && (eu(this, e),
                n = e,
                e = n.U),
                e.C = !1,
                r.C = !0,
                ru(this, r))) : (u = r.L,
                u && u.C ? (e.C = u.C = !1,
                r.C = !0,
                n = r) : (n === e.L && (ru(this, e),
                n = e,
                e = n.U),
                e.C = !1,
                r.C = !0,
                eu(this, r))),
                e = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P),
            n.P && (n.P.N = n.N),
            n.N = n.P = null ;
            var t, e, r, u = n.U, i = n.L, o = n.R;
            if (e = i ? o ? uu(o) : i : o,
            u ? u.L === n ? u.L = e : u.R = e : this._ = e,
            i && o ? (r = e.C,
            e.C = n.C,
            e.L = i,
            i.U = e,
            e !== o ? (u = e.U,
            e.U = n.U,
            n = e.R,
            u.L = n,
            e.R = o,
            o.U = e) : (e.U = u,
            u = e,
            n = e.R)) : (r = n.C,
            n = e),
            n && (n.U = u),
            !r) {
                if (n && n.C)
                    return n.C = !1,
                    void 0;
                do {
                    if (n === this._)
                        break;
                    if (n === u.L) {
                        if (t = u.R,
                        t.C && (t.C = !1,
                        u.C = !0,
                        eu(this, u),
                        t = u.R),
                        t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1,
                            t.C = !0,
                            ru(this, t),
                            t = u.R),
                            t.C = u.C,
                            u.C = t.R.C = !1,
                            eu(this, u),
                            n = this._;
                            break
                        }
                    } else if (t = u.L,
                    t.C && (t.C = !1,
                    u.C = !0,
                    ru(this, u),
                    t = u.L),
                    t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1,
                        t.C = !0,
                        eu(this, t),
                        t = u.L),
                        t.C = u.C,
                        u.C = t.L.C = !1,
                        ru(this, u),
                        n = this._;
                        break
                    }
                    t.C = !0,
                    n = u,
                    u = u.U
                } while (!n.C);n && (n.C = !1)
            }
        }
    },
    Bo.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length)
              , r = a[0][0]
              , u = a[0][1]
              , i = a[1][0]
              , o = a[1][1];
            return iu(e(n), a).cells.forEach(function(e, a) {
                var c = e.edges
                  , l = e.site
                  , s = t[a] = c.length ? c.map(function(n) {
                    var t = n.start();
                    return [t.x, t.y]
                }
                ) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [[r, o], [i, o], [i, u], [r, u]] : [];
                s.point = n[a]
            }
            ),
            t
        }
        function e(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / Na) * Na,
                    y: Math.round(o(n, t) / Na) * Na,
                    i: t
                }
            }
            )
        }
        var r = Ar
          , u = Cr
          , i = r
          , o = u
          , a = nl;
        return n ? t(n) : (t.links = function(n) {
            return iu(e(n)).edges.filter(function(n) {
                return n.l && n.r
            }
            ).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            }
            )
        }
        ,
        t.triangles = function(n) {
            var t = [];
            return iu(e(n)).cells.forEach(function(e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Ir), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l; )
                    u = s,
                    i = f,
                    s = a[c].edge,
                    f = s.l === o ? s.r : s.l,
                    r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
            }
            ),
            t
        }
        ,
        t.x = function(n) {
            return arguments.length ? (i = kt(r = n),
            t) : r
        }
        ,
        t.y = function(n) {
            return arguments.length ? (o = kt(u = n),
            t) : u
        }
        ,
        t.clipExtent = function(n) {
            return arguments.length ? (a = null  == n ? nl : n,
            t) : a === nl ? null  : a
        }
        ,
        t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === nl ? null  : a && a[1]
        }
        ,
        t)
    }
    ;
    var nl = [[-1e6, -1e6], [1e6, 1e6]];
    Bo.geom.delaunay = function(n) {
        return Bo.geom.voronoi().triangles(n)
    }
    ,
    Bo.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x
                          , s = n.y;
                        if (null  != c)
                            if (ca(c - e) + ca(s - r) < .01)
                                l(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null ,
                                l(n, f, c, s, u, i, o, a),
                                l(n, t, e, r, u, i, o, a)
                            }
                        else
                            n.x = e,
                            n.y = r,
                            n.point = t
                    } else
                        l(n, t, e, r, u, i, o, a)
            }
            function l(n, t, e, r, u, o, a, c) {
                var l = .5 * (u + a)
                  , s = .5 * (o + c)
                  , f = e >= l
                  , h = r >= s
                  , g = (h << 1) + f;
                n.leaf = !1,
                n = n.nodes[g] || (n.nodes[g] = su()),
                f ? u = l : a = l,
                h ? o = s : c = s,
                i(n, t, e, r, u, o, a, c)
            }
            var s, f, h, g, p, v, d, m, y, x = kt(a), M = kt(c);
            if (null  != t)
                v = t,
                d = e,
                m = r,
                y = u;
            else if (m = y = -(v = d = 1 / 0),
            f = [],
            h = [],
            p = n.length,
            o)
                for (g = 0; p > g; ++g)
                    s = n[g],
                    s.x < v && (v = s.x),
                    s.y < d && (d = s.y),
                    s.x > m && (m = s.x),
                    s.y > y && (y = s.y),
                    f.push(s.x),
                    h.push(s.y);
            else
                for (g = 0; p > g; ++g) {
                    var _ = +x(s = n[g], g)
                      , b = +M(s, g);
                    v > _ && (v = _),
                    d > b && (d = b),
                    _ > m && (m = _),
                    b > y && (y = b),
                    f.push(_),
                    h.push(b)
                }
            var w = m - v
              , S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = su();
            if (k.add = function(n) {
                i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
            }
            ,
            k.visit = function(n) {
                fu(n, k, v, d, m, y)
            }
            ,
            g = -1,
            null  == t) {
                for (; ++g < p; )
                    i(k, n[g], f[g], h[g], v, d, m, y);
                --g
            } else
                n.forEach(k.add);
            return f = h = n = s = null ,
            k
        }
        var o, a = Ar, c = Cr;
        return (o = arguments.length) ? (a = cu,
        c = lu,
        3 === o && (u = e,
        r = t,
        e = t = 0),
        i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n,
            i) : a
        }
        ,
        i.y = function(n) {
            return arguments.length ? (c = n,
            i) : c
        }
        ,
        i.extent = function(n) {
            return arguments.length ? (null  == n ? t = e = r = u = null  : (t = +n[0][0],
            e = +n[0][1],
            r = +n[1][0],
            u = +n[1][1]),
            i) : null  == t ? null  : [[t, e], [r, u]]
        }
        ,
        i.size = function(n) {
            return arguments.length ? (null  == n ? t = e = r = u = null  : (t = e = 0,
            r = +n[0],
            u = +n[1]),
            i) : null  == t ? null  : [r - t, u - e]
        }
        ,
        i)
    }
    ,
    Bo.interpolateRgb = hu,
    Bo.interpolateObject = gu,
    Bo.interpolateNumber = pu,
    Bo.interpolateString = vu;
    var tl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , el = new RegExp(tl.source,"g");
    Bo.interpolate = du,
    Bo.interpolators = [function(n, t) {
        var e = typeof t;
        return ("string" === e ? $a.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? hu : vu : t instanceof it ? hu : Array.isArray(t) ? mu : "object" === e && isNaN(t) ? gu : pu)(n, t)
    }
    ],
    Bo.interpolateArray = mu;
    var rl = function() {
        return Et
    }
      , ul = Bo.map({
        linear: rl,
        poly: Su,
        quad: function() {
            return _u
        },
        cubic: function() {
            return bu
        },
        sin: function() {
            return ku
        },
        exp: function() {
            return Eu
        },
        circle: function() {
            return Au
        },
        elastic: Cu,
        back: Nu,
        bounce: function() {
            return zu
        }
    })
      , il = Bo.map({
        "in": Et,
        out: xu,
        "in-out": Mu,
        "out-in": function(n) {
            return Mu(xu(n))
        }
    });
    Bo.ease = function(n) {
        var t = n.indexOf("-")
          , e = t >= 0 ? n.slice(0, t) : n
          , r = t >= 0 ? n.slice(t + 1) : "in";
        return e = ul.get(e) || rl,
        r = il.get(r) || Et,
        yu(r(e.apply(null , Wo.call(arguments, 1))))
    }
    ,
    Bo.interpolateHcl = Lu,
    Bo.interpolateHsl = Tu,
    Bo.interpolateLab = qu,
    Bo.interpolateRound = Ru,
    Bo.transform = function(n) {
        var t = Go.createElementNS(Bo.ns.prefix.svg, "g");
        return (Bo.transform = function(n) {
            if (null  != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Du(e ? e.matrix : ol)
        }
        )(n)
    }
    ,
    Du.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    }
    ;
    var ol = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Bo.interpolateTransform = Fu,
    Bo.layout = {},
    Bo.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r; )
                t.push(Yu(n[e]));
            return t
        }
    }
    ,
    Bo.layout.chord = function() {
        function n() {
            var n, l, f, h, g, p = {}, v = [], d = Bo.range(i), m = [];
            for (e = [],
            r = [],
            n = 0,
            h = -1; ++h < i; ) {
                for (l = 0,
                g = -1; ++g < i; )
                    l += u[h][g];
                v.push(l),
                m.push(Bo.range(i)),
                n += l
            }
            for (o && d.sort(function(n, t) {
                return o(v[n], v[t])
            }
            ),
            a && m.forEach(function(n, t) {
                n.sort(function(n, e) {
                    return a(u[t][n], u[t][e])
                }
                )
            }
            ),
            n = (Aa - s * i) / n,
            l = 0,
            h = -1; ++h < i; ) {
                for (f = l,
                g = -1; ++g < i; ) {
                    var y = d[h]
                      , x = m[y][g]
                      , M = u[y][x]
                      , _ = l
                      , b = l += M * n;
                    p[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / n
                },
                l += s
            }
            for (h = -1; ++h < i; )
                for (g = h - 1; ++g < i; ) {
                    var w = p[h + "-" + g]
                      , S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                        source: S,
                        target: w
                    } : {
                        source: w,
                        target: S
                    })
                }
            c && t()
        }
        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            }
            )
        }
        var e, r, u, i, o, a, c, l = {}, s = 0;
        return l.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length,
            e = r = null ,
            l) : u
        }
        ,
        l.padding = function(n) {
            return arguments.length ? (s = n,
            e = r = null ,
            l) : s
        }
        ,
        l.sortGroups = function(n) {
            return arguments.length ? (o = n,
            e = r = null ,
            l) : o
        }
        ,
        l.sortSubgroups = function(n) {
            return arguments.length ? (a = n,
            e = null ,
            l) : a
        }
        ,
        l.sortChords = function(n) {
            return arguments.length ? (c = n,
            e && t(),
            l) : c
        }
        ,
        l.chords = function() {
            return e || n(),
            e
        }
        ,
        l.groups = function() {
            return r || n(),
            r
        }
        ,
        l
    }
    ,
    Bo.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x
                      , o = t.cy - n.y
                      , a = u - e
                      , c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var l = t.charge / c;
                            n.px -= i * l,
                            n.py -= o * l
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var l = t.pointCharge / c;
                        n.px -= i * l,
                        n.py -= o * l
                    }
                }
                return !t.charge
            }
        }
        function t(n) {
            n.px = Bo.event.x,
            n.py = Bo.event.y,
            a.resume()
        }
        var e, r, u, i, o, a = {}, c = Bo.dispatch("start", "tick", "end"), l = [1, 1], s = .9, f = al, h = cl, g = -30, p = ll, v = .1, d = .64, m = [], y = [];
        return a.tick = function() {
            if ((r *= .99) < .005)
                return c.end({
                    type: "end",
                    alpha: r = 0
                }),
                !0;
            var t, e, a, f, h, p, d, x, M, _ = m.length, b = y.length;
            for (e = 0; b > e; ++e)
                a = y[e],
                f = a.source,
                h = a.target,
                x = h.x - f.x,
                M = h.y - f.y,
                (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p,
                x *= p,
                M *= p,
                h.x -= x * (d = f.weight / (h.weight + f.weight)),
                h.y -= M * d,
                f.x += x * (d = 1 - d),
                f.y += M * d);
            if ((d = r * v) && (x = l[0] / 2,
            M = l[1] / 2,
            e = -1,
            d))
                for (; ++e < _; )
                    a = m[e],
                    a.x += (x - a.x) * d,
                    a.y += (M - a.y) * d;
            if (g)
                for (Wu(t = Bo.geom.quadtree(m), r, o),
                e = -1; ++e < _; )
                    (a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < _; )
                a = m[e],
                a.fixed ? (a.x = a.px,
                a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s,
                a.y -= (a.py - (a.py = a.y)) * s);
            c.tick({
                type: "tick",
                alpha: r
            })
        }
        ,
        a.nodes = function(n) {
            return arguments.length ? (m = n,
            a) : m
        }
        ,
        a.links = function(n) {
            return arguments.length ? (y = n,
            a) : y
        }
        ,
        a.size = function(n) {
            return arguments.length ? (l = n,
            a) : l
        }
        ,
        a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n,
            a) : f
        }
        ,
        a.distance = a.linkDistance,
        a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n,
            a) : h
        }
        ,
        a.friction = function(n) {
            return arguments.length ? (s = +n,
            a) : s
        }
        ,
        a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n,
            a) : g
        }
        ,
        a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n,
            a) : Math.sqrt(p)
        }
        ,
        a.gravity = function(n) {
            return arguments.length ? (v = +n,
            a) : v
        }
        ,
        a.theta = function(n) {
            return arguments.length ? (d = n * n,
            a) : Math.sqrt(d)
        }
        ,
        a.alpha = function(n) {
            return arguments.length ? (n = +n,
            r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: r = n
            }),
            Bo.timer(a.tick)),
            a) : r
        }
        ,
        a.start = function() {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c),
                    a = 0; c > a; ++a)
                        e[a] = [];
                    for (a = 0; l > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target),
                        e[u.target.index].push(u.source)
                    }
                }
                for (var i, o = e[t], a = -1, l = o.length; ++a < l; )
                    if (!isNaN(i = o[a][n]))
                        return i;
                return Math.random() * r
            }
            var t, e, r, c = m.length, s = y.length, p = l[0], v = l[1];
            for (t = 0; c > t; ++t)
                (r = m[t]).index = t,
                r.weight = 0;
            for (t = 0; s > t; ++t)
                r = y[t],
                "number" == typeof r.source && (r.source = m[r.source]),
                "number" == typeof r.target && (r.target = m[r.target]),
                ++r.source.weight,
                ++r.target.weight;
            for (t = 0; c > t; ++t)
                r = m[t],
                isNaN(r.x) && (r.x = n("x", p)),
                isNaN(r.y) && (r.y = n("y", v)),
                isNaN(r.px) && (r.px = r.x),
                isNaN(r.py) && (r.py = r.y);
            if (u = [],
            "function" == typeof f)
                for (t = 0; s > t; ++t)
                    u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t)
                    u[t] = f;
            if (i = [],
            "function" == typeof h)
                for (t = 0; s > t; ++t)
                    i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; s > t; ++t)
                    i[t] = h;
            if (o = [],
            "function" == typeof g)
                for (t = 0; c > t; ++t)
                    o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t)
                    o[t] = g;
            return a.resume()
        }
        ,
        a.resume = function() {
            return a.alpha(.1)
        }
        ,
        a.stop = function() {
            return a.alpha(0)
        }
        ,
        a.drag = function() {
            return e || (e = Bo.behavior.drag().origin(Et).on("dragstart.force", Vu).on("drag.force", t).on("dragend.force", Xu)),
            arguments.length ? (this.on("mouseover.force", $u).on("mouseout.force", Bu).call(e),
            void 0) : e
        }
        ,
        Bo.rebind(a, c, "on")
    }
    ;
    var al = 20
      , cl = 1
      , ll = 1 / 0;
    Bo.layout.hierarchy = function() {
        function n(u) {
            var i, o = [u], a = [];
            for (u.depth = 0; null  != (i = o.pop()); )
                if (a.push(i),
                (l = e.call(n, i, i.depth)) && (c = l.length)) {
                    for (var c, l, s; --c >= 0; )
                        o.push(s = l[c]),
                        s.parent = i,
                        s.depth = i.depth + 1;
                    r && (i.value = 0),
                    i.children = l
                } else
                    r && (i.value = +r.call(n, i, i.depth) || 0),
                    delete i.children;
            return Ku(u, function(n) {
                var e, u;
                t && (e = n.children) && e.sort(t),
                r && (u = n.parent) && (u.value += n.value)
            }
            ),
            a
        }
        var t = ti
          , e = Qu
          , r = ni;
        return n.sort = function(e) {
            return arguments.length ? (t = e,
            n) : t
        }
        ,
        n.children = function(t) {
            return arguments.length ? (e = t,
            n) : e
        }
        ,
        n.value = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n.revalue = function(t) {
            return r && (Gu(t, function(n) {
                n.children && (n.value = 0)
            }
            ),
            Ku(t, function(t) {
                var e;
                t.children || (t.value = +r.call(n, t, t.depth) || 0),
                (e = t.parent) && (e.value += t.value)
            }
            )),
            t
        }
        ,
        n
    }
    ,
    Bo.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e,
            t.y = t.depth * u,
            t.dx = r,
            t.dy = u,
            i && (o = i.length)) {
                var o, a, c, l = -1;
                for (r = t.value ? r / t.value : 0; ++l < o; )
                    n(a = i[l], e, c = a.value * r, u),
                    e += c
            }
        }
        function t(n) {
            var e = n.children
              , r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u; )
                    r = Math.max(r, t(e[i]));
            return 1 + r
        }
        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])),
            o
        }
        var r = Bo.layout.hierarchy()
          , u = [1, 1];
        return e.size = function(n) {
            return arguments.length ? (u = n,
            e) : u
        }
        ,
        Ju(e, r)
    }
    ,
    Bo.layout.pie = function() {
        function n(i) {
            var o = i.map(function(e, r) {
                return +t.call(n, e, r)
            }
            )
              , a = +("function" == typeof r ? r.apply(this, arguments) : r)
              , c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Bo.sum(o)
              , l = Bo.range(i.length);
            null  != e && l.sort(e === sl ? function(n, t) {
                return o[t] - o[n]
            }
             : function(n, t) {
                return e(i[n], i[t])
            }
            );
            var s = [];
            return l.forEach(function(n) {
                var t;
                s[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                }
            }
            ),
            s
        }
        var t = Number
          , e = sl
          , r = 0
          , u = Aa;
        return n.value = function(e) {
            return arguments.length ? (t = e,
            n) : t
        }
        ,
        n.sort = function(t) {
            return arguments.length ? (e = t,
            n) : e
        }
        ,
        n.startAngle = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n.endAngle = function(t) {
            return arguments.length ? (u = t,
            n) : u
        }
        ,
        n
    }
    ;
    var sl = {};
    Bo.layout.stack = function() {
        function n(a, c) {
            if (!(h = a.length))
                return a;
            var l = a.map(function(e, r) {
                return t.call(n, e, r)
            }
            )
              , s = l.map(function(t) {
                return t.map(function(t, e) {
                    return [i.call(n, t, e), o.call(n, t, e)]
                }
                )
            }
            )
              , f = e.call(n, s, c);
            l = Bo.permute(l, f),
            s = Bo.permute(s, f);
            var h, g, p, v, d = r.call(n, s, c), m = l[0].length;
            for (p = 0; m > p; ++p)
                for (u.call(n, l[0][p], v = d[p], s[0][p][1]),
                g = 1; h > g; ++g)
                    u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]);
            return a
        }
        var t = Et
          , e = oi
          , r = ai
          , u = ii
          , i = ri
          , o = ui;
        return n.values = function(e) {
            return arguments.length ? (t = e,
            n) : t
        }
        ,
        n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : fl.get(t) || oi,
            n) : e
        }
        ,
        n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : hl.get(t) || ai,
            n) : r
        }
        ,
        n.x = function(t) {
            return arguments.length ? (i = t,
            n) : i
        }
        ,
        n.y = function(t) {
            return arguments.length ? (o = t,
            n) : o
        }
        ,
        n.out = function(t) {
            return arguments.length ? (u = t,
            n) : u
        }
        ,
        n
    }
    ;
    var fl = Bo.map({
        "inside-out": function(n) {
            var t, e, r = n.length, u = n.map(ci), i = n.map(li), o = Bo.range(r).sort(function(n, t) {
                return u[n] - u[t]
            }
            ), a = 0, c = 0, l = [], s = [];
            for (t = 0; r > t; ++t)
                e = o[t],
                c > a ? (a += i[e],
                l.push(e)) : (c += i[e],
                s.push(e));
            return s.reverse().concat(l)
        },
        reverse: function(n) {
            return Bo.range(n.length).reverse()
        },
        "default": oi
    })
      , hl = Bo.map({
        silhouette: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
            for (e = 0; i > e; ++e) {
                for (t = 0,
                r = 0; u > t; t++)
                    r += n[t][e][1];
                r > a && (a = r),
                o.push(r)
            }
            for (e = 0; i > e; ++e)
                c[e] = (a - o[e]) / 2;
            return c
        },
        wiggle: function(n) {
            var t, e, r, u, i, o, a, c, l, s = n.length, f = n[0], h = f.length, g = [];
            for (g[0] = c = l = 0,
            e = 1; h > e; ++e) {
                for (t = 0,
                u = 0; s > t; ++t)
                    u += n[t][e][1];
                for (t = 0,
                i = 0,
                a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                    for (r = 0,
                    o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                        o += (n[r][e][1] - n[r][e - 1][1]) / a;
                    i += o * n[t][e][1]
                }
                g[e] = c -= u ? i / u * a : 0,
                l > c && (l = c)
            }
            for (e = 0; h > e; ++e)
                g[e] -= l;
            return g
        },
        expand: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
            for (e = 0; i > e; ++e) {
                for (t = 0,
                r = 0; u > t; t++)
                    r += n[t][e][1];
                if (r)
                    for (t = 0; u > t; t++)
                        n[t][e][1] /= r;
                else
                    for (t = 0; u > t; t++)
                        n[t][e][1] = o
            }
            for (e = 0; i > e; ++e)
                a[e] = 0;
            return a
        },
        zero: ai
    });
    Bo.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g; )
                o = c[i] = [],
                o.dx = f[i + 1] - (o.x = f[i]),
                o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h; )
                    a = l[i],
                    a >= s[0] && a <= s[1] && (o = c[Bo.bisect(f, a, 1, g) - 1],
                    o.y += p,
                    o.push(n[i]));
            return c
        }
        var t = !0
          , e = Number
          , r = gi
          , u = fi;
        return n.value = function(t) {
            return arguments.length ? (e = t,
            n) : e
        }
        ,
        n.range = function(t) {
            return arguments.length ? (r = kt(t),
            n) : r
        }
        ,
        n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return hi(n, t)
            }
             : kt(t),
            n) : u
        }
        ,
        n.frequency = function(e) {
            return arguments.length ? (t = !!e,
            n) : t
        }
        ,
        n
    }
    ,
    Bo.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i)
              , a = o[0]
              , c = u[0]
              , l = u[1]
              , s = null  == t ? Math.sqrt : "function" == typeof t ? t : function() {
                return t
            }
            ;
            if (a.x = a.y = 0,
            Ku(a, function(n) {
                n.r = +s(n.value)
            }
            ),
            Ku(a, yi),
            r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                Ku(a, function(n) {
                    n.r += f
                }
                ),
                Ku(a, yi),
                Ku(a, function(n) {
                    n.r -= f
                }
                )
            }
            return _i(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)),
            o
        }
        var t, e = Bo.layout.hierarchy().sort(pi), r = 0, u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t,
            n) : u
        }
        ,
        n.radius = function(e) {
            return arguments.length ? (t = null  == e || "function" == typeof e ? e : +e,
            n) : t
        }
        ,
        n.padding = function(t) {
            return arguments.length ? (r = +t,
            n) : r
        }
        ,
        Ju(n, e)
    }
    ,
    Bo.layout.tree = function() {
        function n(n, u) {
            var s = o.call(this, n, u)
              , f = s[0]
              , h = t(f);
            if (Ku(h, e),
            h.parent.m = -h.z,
            Gu(h, r),
            l)
                Gu(f, i);
            else {
                var g = f
                  , p = f
                  , v = f;
                Gu(f, function(n) {
                    n.x < g.x && (g = n),
                    n.x > p.x && (p = n),
                    n.depth > v.depth && (v = n)
                }
                );
                var d = a(g, p) / 2 - g.x
                  , m = c[0] / (p.x + a(p, g) / 2 + d)
                  , y = c[1] / (v.depth || 1);
                Gu(f, function(n) {
                    n.x = (n.x + d) * m,
                    n.y = n.depth * y
                }
                )
            }
            return s
        }
        function t(n) {
            for (var t, e = {
                A: null ,
                children: [n]
            }, r = [e]; null  != (t = r.pop()); )
                for (var u, i = t.children, o = 0, a = i.length; a > o; ++o)
                    r.push((i[o] = u = {
                        _: i[o],
                        parent: t,
                        children: (u = i[o].children) && u.slice() || [],
                        A: null ,
                        a: null ,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null ,
                        i: o
                    }).a = u);
            return e.children[0]
        }
        function e(n) {
            var t = n.children
              , e = n.parent.children
              , r = n.i ? e[n.i - 1] : null ;
            if (t.length) {
                Ai(n);
                var i = (t[0].z + t[t.length - 1].z) / 2;
                r ? (n.z = r.z + a(n._, r._),
                n.m = n.z - i) : n.z = i
            } else
                r && (n.z = r.z + a(n._, r._));
            n.parent.A = u(n, r, n.parent.A || e[0])
        }
        function r(n) {
            n._.x = n.z + n.parent.m,
            n.m += n.parent.m
        }
        function u(n, t, e) {
            if (t) {
                for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = ki(o),
                u = Si(u),
                o && u; )
                    c = Si(c),
                    i = ki(i),
                    i.a = n,
                    r = o.z + f - u.z - l + a(o._, u._),
                    r > 0 && (Ei(Ci(o, n, e), n, r),
                    l += r,
                    s += r),
                    f += o.m,
                    l += u.m,
                    h += c.m,
                    s += i.m;
                o && !ki(i) && (i.t = o,
                i.m += f - s),
                u && !Si(c) && (c.t = u,
                c.m += l - h,
                e = n)
            }
            return e
        }
        function i(n) {
            n.x *= c[0],
            n.y = n.depth * c[1]
        }
        var o = Bo.layout.hierarchy().sort(null ).value(null )
          , a = wi
          , c = [1, 1]
          , l = null ;
        return n.separation = function(t) {
            return arguments.length ? (a = t,
            n) : a
        }
        ,
        n.size = function(t) {
            return arguments.length ? (l = null  == (c = t) ? i : null ,
            n) : l ? null  : c
        }
        ,
        n.nodeSize = function(t) {
            return arguments.length ? (l = null  == (c = t) ? null  : i,
            n) : l ? c : null 
        }
        ,
        Ju(n, o)
    }
    ,
    Bo.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i), c = a[0], l = 0;
            Ku(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = zi(t),
                n.y = Ni(t)) : (n.x = o ? l += e(n, o) : 0,
                n.y = 0,
                o = n)
            }
            );
            var s = Li(c)
              , f = Ti(c)
              , h = s.x - e(s, f) / 2
              , g = f.x + e(f, s) / 2;
            return Ku(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0],
                n.y = (c.y - n.y) * r[1]
            }
             : function(n) {
                n.x = (n.x - h) / (g - h) * r[0],
                n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }
            ),
            a
        }
        var t = Bo.layout.hierarchy().sort(null ).value(null )
          , e = wi
          , r = [1, 1]
          , u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t,
            n) : e
        }
        ,
        n.size = function(t) {
            return arguments.length ? (u = null  == (r = t),
            n) : u ? null  : r
        }
        ,
        n.nodeSize = function(t) {
            return arguments.length ? (u = null  != (r = t),
            n) : u ? r : null 
        }
        ,
        Ju(n, t)
    }
    ,
    Bo.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i; )
                r = (e = n[u]).value * (0 > t ? 0 : t),
                e.area = isNaN(r) || 0 >= r ? 0 : r
        }
        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, l = f(e), s = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (n(h, l.dx * l.dy / e.value),
                s.area = 0; (c = h.length) > 0; )
                    s.push(o = h[c - 1]),
                    s.area += o.area,
                    "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(),
                    p = a) : (s.area -= s.pop().area,
                    u(s, v, l, !1),
                    v = Math.min(l.dx, l.dy),
                    s.length = s.area = 0,
                    p = 1 / 0);
                s.length && (u(s, v, l, !0),
                s.length = s.area = 0),
                i.forEach(t)
            }
        }
        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t), a = r.slice(), c = [];
                for (n(a, o.dx * o.dy / t.value),
                c.area = 0; i = a.pop(); )
                    c.push(i),
                    c.area += i.area,
                    null  != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length),
                    c.length = c.area = 0);
                r.forEach(e)
            }
        }
        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a; )
                (e = n[o].area) && (i > e && (i = e),
                e > u && (u = e));
            return r *= r,
            t *= t,
            r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
        }
        function u(n, t, e, r) {
            var u, i = -1, o = n.length, a = e.x, l = e.y, s = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || s > e.dy) && (s = e.dy); ++i < o; )
                    u = n[i],
                    u.x = a,
                    u.y = l,
                    u.dy = s,
                    a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
                u.z = !0,
                u.dx += e.x + e.dx - a,
                e.y += s,
                e.dy -= s
            } else {
                for ((r || s > e.dx) && (s = e.dx); ++i < o; )
                    u = n[i],
                    u.x = a,
                    u.y = l,
                    u.dx = s,
                    l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
                u.z = !1,
                u.dy += e.y + e.dy - l,
                e.x += s,
                e.dx -= s
            }
        }
        function i(r) {
            var u = o || a(r)
              , i = u[0];
            return i.x = 0,
            i.y = 0,
            i.dx = l[0],
            i.dy = l[1],
            o && a.revalue(i),
            n([i], i.dx * i.dy / i.value),
            (o ? e : t)(i),
            h && (o = u),
            u
        }
        var o, a = Bo.layout.hierarchy(), c = Math.round, l = [1, 1], s = null , f = qi, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (l = n,
            i) : l
        }
        ,
        i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null  == e ? qi(t) : Ri(t, "number" == typeof e ? [e, e, e, e] : e)
            }
            function e(t) {
                return Ri(t, n)
            }
            if (!arguments.length)
                return s;
            var r;
            return f = null  == (s = n) ? qi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n],
            e) : e,
            i
        }
        ,
        i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number,
            i) : c != Number
        }
        ,
        i.sticky = function(n) {
            return arguments.length ? (h = n,
            o = null ,
            i) : h
        }
        ,
        i.ratio = function(n) {
            return arguments.length ? (p = n,
            i) : p
        }
        ,
        i.mode = function(n) {
            return arguments.length ? (g = n + "",
            i) : g
        }
        ,
        Ju(i, a)
    }
    ,
    Bo.random = {
        normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1),
            1 > e && (n = 0),
            function() {
                var e, r, u;
                do
                    e = 2 * Math.random() - 1,
                    r = 2 * Math.random() - 1,
                    u = e * e + r * r;
                while (!u || u > 1);return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
            }
        },
        logNormal: function() {
            var n = Bo.random.normal.apply(Bo, arguments);
            return function() {
                return Math.exp(n())
            }
        },
        bates: function(n) {
            var t = Bo.random.irwinHall(n);
            return function() {
                return t() / n
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++)
                    t += Math.random();
                return t
            }
        }
    },
    Bo.scale = {};
    var gl = {
        floor: Et,
        ceil: Et
    };
    Bo.scale.linear = function() {
        return Oi([0, 1], [0, 1], du, !1)
    }
    ;
    var pl = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Bo.scale.log = function() {
        return Wi(Bo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    }
    ;
    var vl = Bo.format(".0e")
      , dl = {
        floor: function(n) {
            return -Math.ceil(-n)
        },
        ceil: function(n) {
            return -Math.floor(-n)
        }
    };
    Bo.scale.pow = function() {
        return Ji(Bo.scale.linear(), 1, [0, 1])
    }
    ,
    Bo.scale.sqrt = function() {
        return Bo.scale.pow().exponent(.5)
    }
    ,
    Bo.scale.ordinal = function() {
        return Ki([], {
            t: "range",
            a: [[]]
        })
    }
    ,
    Bo.scale.category10 = function() {
        return Bo.scale.ordinal().range(ml)
    }
    ,
    Bo.scale.category20 = function() {
        return Bo.scale.ordinal().range(yl)
    }
    ,
    Bo.scale.category20b = function() {
        return Bo.scale.ordinal().range(xl)
    }
    ,
    Bo.scale.category20c = function() {
        return Bo.scale.ordinal().range(Ml)
    }
    ;
    var ml = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(yt)
      , yl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(yt)
      , xl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(yt)
      , Ml = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(yt);
    Bo.scale.quantile = function() {
        return Qi([], [])
    }
    ,
    Bo.scale.quantize = function() {
        return no(0, 1, [0, 1])
    }
    ,
    Bo.scale.threshold = function() {
        return to([.5], [0, 1])
    }
    ,
    Bo.scale.identity = function() {
        return eo([0, 1])
    }
    ,
    Bo.svg = {},
    Bo.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments)
              , i = e.apply(this, arguments)
              , o = r.apply(this, arguments) + _l
              , a = u.apply(this, arguments) + _l
              , c = (o > a && (c = o,
            o = a,
            a = c),
            a - o)
              , l = Ea > c ? "0" : "1"
              , s = Math.cos(o)
              , f = Math.sin(o)
              , h = Math.cos(a)
              , g = Math.sin(a);
            return c >= bl ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * s + "," + n * f + "Z" : "M" + i * s + "," + i * f + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
        }
        var t = ro
          , e = uo
          , r = io
          , u = oo;
        return n.innerRadius = function(e) {
            return arguments.length ? (t = kt(e),
            n) : t
        }
        ,
        n.outerRadius = function(t) {
            return arguments.length ? (e = kt(t),
            n) : e
        }
        ,
        n.startAngle = function(t) {
            return arguments.length ? (r = kt(t),
            n) : r
        }
        ,
        n.endAngle = function(t) {
            return arguments.length ? (u = kt(t),
            n) : u
        }
        ,
        n.centroid = function() {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2
              , i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + _l;
            return [Math.cos(i) * n, Math.sin(i) * n]
        }
        ,
        n
    }
    ;
    var _l = -Ca
      , bl = Aa - Na;
    Bo.svg.line = function() {
        return ao(Et)
    }
    ;
    var wl = Bo.map({
        linear: co,
        "linear-closed": lo,
        step: so,
        "step-before": fo,
        "step-after": ho,
        basis: xo,
        "basis-open": Mo,
        "basis-closed": _o,
        bundle: bo,
        cardinal: vo,
        "cardinal-open": go,
        "cardinal-closed": po,
        monotone: Co
    });
    wl.forEach(function(n, t) {
        t.key = n,
        t.closed = /-closed$/.test(n)
    }
    );
    var Sl = [0, 2 / 3, 1 / 3, 0]
      , kl = [0, 1 / 3, 2 / 3, 0]
      , El = [0, 1 / 6, 2 / 3, 1 / 6];
    Bo.svg.line.radial = function() {
        var n = ao(No);
        return n.radius = n.x,
        delete n.x,
        n.angle = n.y,
        delete n.y,
        n
    }
    ,
    fo.reverse = ho,
    ho.reverse = fo,
    Bo.svg.area = function() {
        return zo(Et)
    }
    ,
    Bo.svg.area.radial = function() {
        var n = zo(No);
        return n.radius = n.x,
        delete n.x,
        n.innerRadius = n.x0,
        delete n.x0,
        n.outerRadius = n.x1,
        delete n.x1,
        n.angle = n.y,
        delete n.y,
        n.startAngle = n.y0,
        delete n.y0,
        n.endAngle = n.y1,
        delete n.y1,
        n
    }
    ,
    Bo.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a)
              , l = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
        }
        function t(n, t, e, r) {
            var u = t.call(n, e, r)
              , i = a.call(n, u, r)
              , o = c.call(n, u, r) + _l
              , s = l.call(n, u, r) + _l;
            return {
                r: i,
                a0: o,
                a1: s,
                p0: [i * Math.cos(o), i * Math.sin(o)],
                p1: [i * Math.cos(s), i * Math.sin(s)]
            }
        }
        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }
        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Ea) + ",1 " + t
        }
        function u(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var i = mr
          , o = yr
          , a = Lo
          , c = io
          , l = oo;
        return n.radius = function(t) {
            return arguments.length ? (a = kt(t),
            n) : a
        }
        ,
        n.source = function(t) {
            return arguments.length ? (i = kt(t),
            n) : i
        }
        ,
        n.target = function(t) {
            return arguments.length ? (o = kt(t),
            n) : o
        }
        ,
        n.startAngle = function(t) {
            return arguments.length ? (c = kt(t),
            n) : c
        }
        ,
        n.endAngle = function(t) {
            return arguments.length ? (l = kt(t),
            n) : l
        }
        ,
        n
    }
    ,
    Bo.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u)
              , o = e.call(this, n, u)
              , a = (i.y + o.y) / 2
              , c = [i, {
                x: i.x,
                y: a
            }, {
                x: o.x,
                y: a
            }, o];
            return c = c.map(r),
            "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = mr
          , e = yr
          , r = To;
        return n.source = function(e) {
            return arguments.length ? (t = kt(e),
            n) : t
        }
        ,
        n.target = function(t) {
            return arguments.length ? (e = kt(t),
            n) : e
        }
        ,
        n.projection = function(t) {
            return arguments.length ? (r = t,
            n) : r
        }
        ,
        n
    }
    ,
    Bo.svg.diagonal.radial = function() {
        var n = Bo.svg.diagonal()
          , t = To
          , e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(qo(t = n)) : t
        }
        ,
        n
    }
    ,
    Bo.svg.symbol = function() {
        function n(n, r) {
            return (Al.get(t.call(this, n, r)) || Po)(e.call(this, n, r))
        }
        var t = Do
          , e = Ro;
        return n.type = function(e) {
            return arguments.length ? (t = kt(e),
            n) : t
        }
        ,
        n.size = function(t) {
            return arguments.length ? (e = kt(t),
            n) : e
        }
        ,
        n
    }
    ;
    var Al = Bo.map({
        circle: Po,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * Ll))
              , e = t * Ll;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / zl)
              , e = t * zl / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / zl)
              , e = t * zl / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }
    });
    Bo.svg.symbolTypes = Al.keys();
    var Cl, Nl, zl = Math.sqrt(3), Ll = Math.tan(30 * La), Tl = [], ql = 0;
    Tl.call = ya.call,
    Tl.empty = ya.empty,
    Tl.node = ya.node,
    Tl.size = ya.size,
    Bo.transition = function(n) {
        return arguments.length ? Cl ? n.transition() : n : _a.transition()
    }
    ,
    Bo.transition.prototype = Tl,
    Tl.select = function(n) {
        var t, e, r, u = this.id, i = [];
        n = k(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []);
            for (var c = this[o], l = -1, s = c.length; ++l < s; )
                (r = c[l]) && (e = n.call(r, r.__data__, l, o)) ? ("__data__" in r && (e.__data__ = r.__data__),
                Ho(e, l, u, r.__transition__[u]),
                t.push(e)) : t.push(null )
        }
        return Uo(i, u)
    }
    ,
    Tl.selectAll = function(n) {
        var t, e, r, u, i, o = this.id, a = [];
        n = E(n);
        for (var c = -1, l = this.length; ++c < l; )
            for (var s = this[c], f = -1, h = s.length; ++f < h; )
                if (r = s[f]) {
                    i = r.__transition__[o],
                    e = n.call(r, r.__data__, f, c),
                    a.push(t = []);
                    for (var g = -1, p = e.length; ++g < p; )
                        (u = e[g]) && Ho(u, g, o, i),
                        t.push(u)
                }
        return Uo(a, o)
    }
    ,
    Tl.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = U(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)
                (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return Uo(u, this.id)
    }
    ,
    Tl.tween = function(n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : F(this, null  == t ? function(t) {
            t.__transition__[e].tween.remove(n)
        }
         : function(r) {
            r.__transition__[e].tween.set(n, t)
        }
        )
    }
    ,
    Tl.attr = function(n, t) {
        function e() {
            this.removeAttribute(a)
        }
        function r() {
            this.removeAttributeNS(a.space, a.local)
        }
        function u(n) {
            return null  == n ? e : (n += "",
            function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n),
                function(n) {
                    this.setAttribute(a, t(n))
                }
                )
            }
            )
        }
        function i(n) {
            return null  == n ? r : (n += "",
            function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n),
                function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                }
                )
            }
            )
        }
        if (arguments.length < 2) {
            for (t in n)
                this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Fu : du
          , a = Bo.ns.qualify(n);
        return jo(this, "attr." + n, t, a.local ? i : u)
    }
    ,
    Tl.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n))
            }
        }
        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n))
            }
        }
        var u = Bo.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e)
    }
    ,
    Tl.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }
        function u(t) {
            return null  == t ? r : (t += "",
            function() {
                var r, u = Qo.getComputedStyle(this, null ).getPropertyValue(n);
                return u !== t && (r = du(u, t),
                function(t) {
                    this.style.setProperty(n, r(t), e)
                }
                )
            }
            )
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n)
                    this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return jo(this, "style." + n, t, u)
    }
    ,
    Tl.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, Qo.getComputedStyle(this, null ).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e)
            }
        }
        return arguments.length < 3 && (e = ""),
        this.tween("style." + n, r)
    }
    ,
    Tl.text = function(n) {
        return jo(this, "text", n, Fo)
    }
    ,
    Tl.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        }
        )
    }
    ,
    Tl.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Bo.ease.apply(Bo, arguments)),
        F(this, function(e) {
            e.__transition__[t].ease = n
        }
        ))
    }
    ,
    Tl.delay = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : F(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
        }
         : (n = +n,
        function(e) {
            e.__transition__[t].delay = n
        }
        ))
    }
    ,
    Tl.duration = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : F(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
        }
         : (n = Math.max(1, n),
        function(e) {
            e.__transition__[t].duration = n
        }
        ))
    }
    ,
    Tl.each = function(n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Nl
              , u = Cl;
            Cl = e,
            F(this, function(t, r, u) {
                Nl = t.__transition__[e],
                n.call(t, t.__data__, r, u)
            }
            ),
            Nl = r,
            Cl = u
        } else
            F(this, function(r) {
                var u = r.__transition__[e];
                (u.event || (u.event = Bo.dispatch("start", "end"))).on(n, t)
            }
            );
        return this
    }
    ,
    Tl.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++ql, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], l = 0, s = t.length; s > l; l++)
                (e = t[l]) && (r = Object.create(e.__transition__[u]),
                r.delay += r.duration,
                Ho(e, l, i, r)),
                n.push(e)
        }
        return Uo(o, i)
    }
    ,
    Bo.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, l = Bo.select(this), s = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null  == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null  == t ? f.tickFormat ? f.tickFormat.apply(f, a) : Et : t, p = l.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Na), d = Bo.transition(p.exit()).style("opacity", Na).remove(), m = Bo.transition(p.order()).style("opacity", 1), y = Math.max(u, 0) + o, x = Pi(f), M = l.selectAll(".domain").data([0]), _ = (M.enter().append("path").attr("class", "domain"),
                Bo.transition(M));
                v.append("line"),
                v.append("text");
                var b, w, S, k, E = v.select("line"), A = m.select("line"), C = p.select("text").text(g), N = v.select("text"), z = m.select("text"), L = "top" === r || "left" === r ? -1 : 1;
                if ("bottom" === r || "top" === r ? (n = Oo,
                b = "x",
                S = "y",
                w = "x2",
                k = "y2",
                C.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"),
                _.attr("d", "M" + x[0] + "," + L * i + "V0H" + x[1] + "V" + L * i)) : (n = Yo,
                b = "y",
                S = "x",
                w = "y2",
                k = "x2",
                C.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"),
                _.attr("d", "M" + L * i + "," + x[0] + "H0V" + x[1] + "H" + L * i)),
                E.attr(k, L * u),
                N.attr(S, L * y),
                A.attr(w, 0).attr(k, L * u),
                z.attr(b, 0).attr(S, L * y),
                f.rangeBand) {
                    var T = f
                      , q = T.rangeBand() / 2;
                    s = f = function(n) {
                        return T(n) + q
                    }
                } else
                    s.rangeBand ? s = f : d.call(n, f, s);
                v.call(n, s, f),
                m.call(n, f, f)
            }
            )
        }
        var t, e = Bo.scale.linear(), r = Rl, u = 6, i = 6, o = 3, a = [10], c = null ;
        return n.scale = function(t) {
            return arguments.length ? (e = t,
            n) : e
        }
        ,
        n.orient = function(t) {
            return arguments.length ? (r = t in Dl ? t + "" : Rl,
            n) : r
        }
        ,
        n.ticks = function() {
            return arguments.length ? (a = arguments,
            n) : a
        }
        ,
        n.tickValues = function(t) {
            return arguments.length ? (c = t,
            n) : c
        }
        ,
        n.tickFormat = function(e) {
            return arguments.length ? (t = e,
            n) : t
        }
        ,
        n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t,
            i = +arguments[e - 1],
            n) : u
        }
        ,
        n.innerTickSize = function(t) {
            return arguments.length ? (u = +t,
            n) : u
        }
        ,
        n.outerTickSize = function(t) {
            return arguments.length ? (i = +t,
            n) : i
        }
        ,
        n.tickPadding = function(t) {
            return arguments.length ? (o = +t,
            n) : o
        }
        ,
        n.tickSubdivide = function() {
            return arguments.length && n
        }
        ,
        n
    }
    ;
    var Rl = "bottom"
      , Dl = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    Bo.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = Bo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u)
                  , o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, Et);
                a.exit().remove(),
                a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }
                ).style("cursor", function(n) {
                    return Pl[n]
                }
                ).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null 
                }
                ).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null 
                }
                ).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                a.style("display", n.empty() ? "none" : null );
                var s, f = Bo.transition(i), h = Bo.transition(o);
                c && (s = Pi(c),
                h.attr("x", s[0]).attr("width", s[1] - s[0]),
                e(f)),
                l && (s = Pi(l),
                h.attr("y", s[0]).attr("height", s[1] - s[0]),
                r(f)),
                t(f)
            }
            )
        }
        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + s[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
            }
            )
        }
        function e(n) {
            n.select(".extent").attr("x", s[0]),
            n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0])
        }
        function r(n) {
            n.select(".extent").attr("y", f[0]),
            n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
        }
        function u() {
            function u() {
                32 == Bo.event.keyCode && (C || (y = null ,
                z[0] -= s[1],
                z[1] -= f[1],
                C = 2),
                _())
            }
            function p() {
                32 == Bo.event.keyCode && 2 == C && (z[0] += s[1],
                z[1] += f[1],
                C = 0,
                _())
            }
            function v() {
                var n = Bo.mouse(M)
                  , u = !1;
                x && (n[0] += x[0],
                n[1] += x[1]),
                C || (Bo.event.altKey ? (y || (y = [(s[0] + s[1]) / 2, (f[0] + f[1]) / 2]),
                z[0] = s[+(n[0] < y[0])],
                z[1] = f[+(n[1] < y[1])]) : y = null ),
                E && d(n, c, 0) && (e(S),
                u = !0),
                A && d(n, l, 1) && (r(S),
                u = !0),
                u && (t(S),
                w({
                    type: "brush",
                    mode: C ? "move" : "resize"
                }))
            }
            function d(n, t, e) {
                var r, u, a = Pi(t), c = a[0], l = a[1], p = z[e], v = e ? f : s, d = v[1] - v[0];
                return C && (c -= p,
                l -= d + p),
                r = (e ? g : h) ? Math.max(c, Math.min(l, n[e])) : n[e],
                C ? u = (r += p) + d : (y && (p = Math.max(c, Math.min(l, 2 * y[e] - r))),
                r > p ? (u = r,
                r = p) : u = p),
                v[0] != r || v[1] != u ? (e ? o = null  : i = null ,
                v[0] = r,
                v[1] = u,
                !0) : void 0
            }
            function m() {
                v(),
                S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null ),
                Bo.select("body").style("cursor", null ),
                L.on("mousemove.brush", null ).on("mouseup.brush", null ).on("touchmove.brush", null ).on("touchend.brush", null ).on("keydown.brush", null ).on("keyup.brush", null ),
                N(),
                w({
                    type: "brushend"
                })
            }
            var y, x, M = this, b = Bo.select(Bo.event.target), w = a.of(M, arguments), S = Bo.select(M), k = b.datum(), E = !/^(n|s)$/.test(k) && c, A = !/^(e|w)$/.test(k) && l, C = b.classed("extent"), N = X(), z = Bo.mouse(M), L = Bo.select(Qo).on("keydown.brush", u).on("keyup.brush", p);
            if (Bo.event.changedTouches ? L.on("touchmove.brush", v).on("touchend.brush", m) : L.on("mousemove.brush", v).on("mouseup.brush", m),
            S.interrupt().selectAll("*").interrupt(),
            C)
                z[0] = s[0] - z[0],
                z[1] = f[0] - z[1];
            else if (k) {
                var T = +/w$/.test(k)
                  , q = +/^n/.test(k);
                x = [s[1 - T] - z[0], f[1 - q] - z[1]],
                z[0] = s[T],
                z[1] = f[q]
            } else
                Bo.event.altKey && (y = z.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null ),
            Bo.select("body").style("cursor", b.style("cursor")),
            w({
                type: "brushstart"
            }),
            v()
        }
        var i, o, a = w(n, "brushstart", "brush", "brushend"), c = null , l = null , s = [0, 0], f = [0, 0], h = !0, g = !0, p = Ul[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments)
                  , t = {
                    x: s,
                    y: f,
                    i: i,
                    j: o
                }
                  , e = this.__chart__ || t;
                this.__chart__ = t,
                Cl ? Bo.select(this).transition().each("start.brush", function() {
                    i = e.i,
                    o = e.j,
                    s = e.x,
                    f = e.y,
                    n({
                        type: "brushstart"
                    })
                }
                ).tween("brush:brush", function() {
                    var e = mu(s, t.x)
                      , r = mu(f, t.y);
                    return i = o = null ,
                    function(u) {
                        s = t.x = e(u),
                        f = t.y = r(u),
                        n({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }
                ).each("end.brush", function() {
                    i = t.i,
                    o = t.j,
                    n({
                        type: "brush",
                        mode: "resize"
                    }),
                    n({
                        type: "brushend"
                    })
                }
                ) : (n({
                    type: "brushstart"
                }),
                n({
                    type: "brush",
                    mode: "resize"
                }),
                n({
                    type: "brushend"
                }))
            }
            )
        }
        ,
        n.x = function(t) {
            return arguments.length ? (c = t,
            p = Ul[!c << 1 | !l],
            n) : c
        }
        ,
        n.y = function(t) {
            return arguments.length ? (l = t,
            p = Ul[!c << 1 | !l],
            n) : l
        }
        ,
        n.clamp = function(t) {
            return arguments.length ? (c && l ? (h = !!t[0],
            g = !!t[1]) : c ? h = !!t : l && (g = !!t),
            n) : c && l ? [h, g] : c ? h : l ? g : null 
        }
        ,
        n.extent = function(t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0],
            r = t[1],
            l && (e = e[0],
            r = r[0]),
            i = [e, r],
            c.invert && (e = c(e),
            r = c(r)),
            e > r && (h = e,
            e = r,
            r = h),
            (e != s[0] || r != s[1]) && (s = [e, r])),
            l && (u = t[0],
            a = t[1],
            c && (u = u[1],
            a = a[1]),
            o = [u, a],
            l.invert && (u = l(u),
            a = l(a)),
            u > a && (h = u,
            u = a,
            a = h),
            (u != f[0] || a != f[1]) && (f = [u, a])),
            n) : (c && (i ? (e = i[0],
            r = i[1]) : (e = s[0],
            r = s[1],
            c.invert && (e = c.invert(e),
            r = c.invert(r)),
            e > r && (h = e,
            e = r,
            r = h))),
            l && (o ? (u = o[0],
            a = o[1]) : (u = f[0],
            a = f[1],
            l.invert && (u = l.invert(u),
            a = l.invert(a)),
            u > a && (h = u,
            u = a,
            a = h))),
            c && l ? [[e, u], [r, a]] : c ? [e, r] : l && [u, a])
        }
        ,
        n.clear = function() {
            return n.empty() || (s = [0, 0],
            f = [0, 0],
            i = o = null ),
            n
        }
        ,
        n.empty = function() {
            return !!c && s[0] == s[1] || !!l && f[0] == f[1]
        }
        ,
        Bo.rebind(n, a, "on")
    }
    ;
    var Pl = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }
      , Ul = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []]
      , jl = rc.format = lc.timeFormat
      , Fl = jl.utc
      , Hl = Fl("%Y-%m-%dT%H:%M:%S.%LZ");
    jl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Io : Hl,
    Io.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null  : t
    }
    ,
    Io.toString = Hl.toString,
    rc.second = Ft(function(n) {
        return new uc(1e3 * Math.floor(n / 1e3))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }
    , function(n) {
        return n.getSeconds()
    }
    ),
    rc.seconds = rc.second.range,
    rc.seconds.utc = rc.second.utc.range,
    rc.minute = Ft(function(n) {
        return new uc(6e4 * Math.floor(n / 6e4))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }
    , function(n) {
        return n.getMinutes()
    }
    ),
    rc.minutes = rc.minute.range,
    rc.minutes.utc = rc.minute.utc.range,
    rc.hour = Ft(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new uc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }
    , function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }
    , function(n) {
        return n.getHours()
    }
    ),
    rc.hours = rc.hour.range,
    rc.hours.utc = rc.hour.utc.range,
    rc.month = Ft(function(n) {
        return n = rc.day(n),
        n.setDate(1),
        n
    }
    , function(n, t) {
        n.setMonth(n.getMonth() + t)
    }
    , function(n) {
        return n.getMonth()
    }
    ),
    rc.months = rc.month.range,
    rc.months.utc = rc.month.utc.range;
    var Ol = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
      , Yl = [[rc.second, 1], [rc.second, 5], [rc.second, 15], [rc.second, 30], [rc.minute, 1], [rc.minute, 5], [rc.minute, 15], [rc.minute, 30], [rc.hour, 1], [rc.hour, 3], [rc.hour, 6], [rc.hour, 12], [rc.day, 1], [rc.day, 2], [rc.week, 1], [rc.month, 1], [rc.month, 3], [rc.year, 1]]
      , Il = jl.multi([[".%L", function(n) {
        return n.getMilliseconds()
    }
    ], [":%S", function(n) {
        return n.getSeconds()
    }
    ], ["%I:%M", function(n) {
        return n.getMinutes()
    }
    ], ["%I %p", function(n) {
        return n.getHours()
    }
    ], ["%a %d", function(n) {
        return n.getDay() && 1 != n.getDate()
    }
    ], ["%b %d", function(n) {
        return 1 != n.getDate()
    }
    ], ["%B", function(n) {
        return n.getMonth()
    }
    ], ["%Y", Ae]])
      , Zl = {
        range: function(n, t, e) {
            return Bo.range(Math.ceil(n / e) * e, +t, e).map(Vo)
        },
        floor: Et,
        ceil: Et
    };
    Yl.year = rc.year,
    rc.scale = function() {
        return Zo(Bo.scale.linear(), Yl, Il)
    }
    ;
    var Vl = Yl.map(function(n) {
        return [n[0].utc, n[1]]
    }
    )
      , Xl = Fl.multi([[".%L", function(n) {
        return n.getUTCMilliseconds()
    }
    ], [":%S", function(n) {
        return n.getUTCSeconds()
    }
    ], ["%I:%M", function(n) {
        return n.getUTCMinutes()
    }
    ], ["%I %p", function(n) {
        return n.getUTCHours()
    }
    ], ["%a %d", function(n) {
        return n.getUTCDay() && 1 != n.getUTCDate()
    }
    ], ["%b %d", function(n) {
        return 1 != n.getUTCDate()
    }
    ], ["%B", function(n) {
        return n.getUTCMonth()
    }
    ], ["%Y", Ae]]);
    Vl.year = rc.year.utc,
    rc.scale.utc = function() {
        return Zo(Bo.scale.linear(), Vl, Xl)
    }
    ,
    Bo.text = At(function(n) {
        return n.responseText
    }
    ),
    Bo.json = function(n, t) {
        return Ct(n, "application/json", Xo, t)
    }
    ,
    Bo.html = function(n, t) {
        return Ct(n, "text/html", $o, t)
    }
    ,
    Bo.xml = At(function(n) {
        return n.responseXML
    }
    ),
    "function" == typeof define && define.amd ? define(Bo) : "object" == typeof module && module.exports && (module.exports = Bo),
    this.d3 = Bo
}
();

/*
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
    $.extend({
        tablesorter: new 
        function() {
            var parsers = []
              , widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "desc",
                sortMultiSortKey: "shiftKey",
                sortForce: null ,
                sortAppend: null ,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null ,
                selectorHeaders: 'thead th',
                debug: false
            };
            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }
            this.benchmark = benchmark;
            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }
            function buildParserCache(table, $headers) {
                if (table.config.debug) {
                    var parsersDebug = "";
                }
                if (table.tBodies.length == 0)
                    return;
                var rows = table.tBodies[0].rows;
                if (rows[0]) {
                    var list = []
                      , cells = rows[0].cells
                      , l = cells.length;
                    for (var i = 0; i < l; i++) {
                        var p = false;
                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {
                            p = getParserById($($headers[i]).metadata().sorter);
                        } else if ((table.config.headers[i] && table.config.headers[i].sorter) ) {
                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {
                            p = detectParserForColumn(table, rows, -1, i);
                        }
                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }
                        list.push(p);
                    }
                }
                if (table.config.debug) {
                    log(parsersDebug);
                }
                return list;
            }
            ;function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length
                  , node = false
                  , nodeValue = false
                  , keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                return parsers[0];
            }
            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }
            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }
            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }
            function buildCache(table) {
                if (table.config.debug) {
                    var cacheTime = new Date();
                }
                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0
                  , totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0
                  , parsers = table.config.parsers
                  , cache = {
                    row: [],
                    normalized: []
                };
                for (var i = 0; i < totalRows; ++i) {
                    var c = $(table.tBodies[0].rows[i])
                      , cols = [];
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        continue;
                    }
                    cache.row.push(c);
                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }
                    cols.push(cache.normalized.length);
                    cache.normalized.push(cols);
                    cols = null ;
                }
                ;if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }
                return cache;
            }
            ;function getElementText(config, node) {
                var text = "";
                if (!node)
                    return "";
                if (!config.supportsTextContent)
                    config.supportsTextContent = node.textContent || false;
                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof (config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }
            function appendToTable(table, cache) {
                if (table.config.debug) {
                    var appendTime = new Date()
                }
                var c = cache
                  , r = c.row
                  , n = c.normalized
                  , totalRows = n.length
                  , checkCell = (n[0].length - 1)
                  , tableBody = $(table.tBodies[0])
                  , rows = [];
                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];
                    rows.push(r[pos]);
                    if (!table.config.appender) {
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }
                    }
                }
                if (table.config.appender) {
                    table.config.appender(table, rows);
                }
                rows = null ;
                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }
                applyWidget(table);
                setTimeout(function() {
                    $(table).trigger("sortEnd");
                }
                , 0);
            }
            ;function buildHeaders(table) {
                if (table.config.debug) {
                    var time = new Date();
                }
                var meta = ($.metadata) ? true : false;
                var header_index = computeTableHeaderCellIndexes(table);
                $tableHeaders = $(table.config.selectorHeaders, table).each(function(index) {
                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index))
                        this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(table, index))
                        this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader)
                            table.config.onRenderHeader.apply($th);
                    }
                    table.config.headerList[index] = this;
                }
                );
                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }
                return $tableHeaders;
            }
            ;function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');
                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];
                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof (matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof (matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof (matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }
            function checkCellColSpan(table, rows, row) {
                var arr = []
                  , r = table.tHead.rows
                  , c = r[row].cells;
                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];
                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                    }
                }
                return arr;
            }
            ;function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                }
                ;return false;
            }
            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                }
                ;return false;
            }
            function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder))
                    return table.config.headers[i].lockedOrder;
                return false;
            }
            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {
                    getWidgetById(c[i]).format(table);
                }
            }
            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            }
            ;function formatSortingOrder(v) {
                if (typeof (v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }
            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }
            function setHeadersCss(table, $headers, list, css) {
                $headers.removeClass(css[0]).removeClass(css[1]);
                var h = [];
                $headers.each(function(offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                }
                );
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }
            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function() {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    }
                    );
                    $(table).prepend(colgroup);
                }
                ;
            }
            function updateHeaderSortCount(table, sortList) {
                var c = table.config
                  , l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i]
                      , o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }
            function multisort(table, sortList, cache) {
                if (table.config.debug) {
                    var sortTime = new Date();
                }
                var dynamicExp = "var sortWrapper = function(a,b) {"
                  , l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;
                    dynamicExp += "var " + e + " = " + s;
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }
                dynamicExp += "return 0; ";
                dynamicExp += "}; ";
                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }
                eval(dynamicExp);
                cache.normalized.sort(sortWrapper);
                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }
                return cache;
            }
            ;function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]"
                  , b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            }
            ;function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            }
            ;function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            }
            ;function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            }
            ;function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            }
            ;function sortText(a, b) {
                if (table.config.sortLocaleCompare)
                    return a.localeCompare(b);
                return ( (a < b) ? -1 : ((a > b) ? 1 : 0)) ;
            }
            ;function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare)
                    return b.localeCompare(a);
                return ( (b < a) ? -1 : ((b > a) ? 1 : 0)) ;
            }
            ;function sortNumeric(a, b) {
                return a - b;
            }
            ;function sortNumericDesc(a, b) {
                return b - a;
            }
            ;function getCachedSortType(parsers, i) {
                return parsers[i].type;
            }
            ;this.construct = function(settings) {
                return this.each(function() {
                    if (!this.tHead || !this.tBodies)
                        return;
                    var $this, $document, $headers, cache, config, shiftDown = 0, sortOrder;
                    this.config = {};
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    $this = $(this);
                    $.data(this, "tablesorter", config);
                    $headers = buildHeaders(this);
                    this.config.parsers = buildParserCache(this, $headers);
                    cache = buildCache(this);
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    fixColumnWidth(this);
                    $headers.click(function(e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            $this.trigger("sortStart");
                            var $cell = $(this);
                            var i = this.column;
                            this.order = this.count++ % 2;
                            if (this.lockedOrder)
                                this.order = this.lockedOrder;
                            if (!e[config.sortMultiSortKey]) {
                                config.sortList = [];
                                if (config.sortForce != null ) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                config.sortList.push([i, this.order]);
                            } else {
                                if (isValueInArray(i, config.sortList)) {
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j]
                                          , o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    config.sortList.push([i, this.order]);
                                }
                            }
                            ;setTimeout(function() {
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable($this[0], multisort($this[0], config.sortList, cache));
                            }
                            , 1);
                            return false;
                        }
                    }
                    ).mousedown(function() {
                        if (config.cancelSelection) {
                            this.onselectstart = function() {
                                return false
                            }
                            ;
                            return false;
                        }
                    }
                    );
                    $this.bind("update", function() {
                        var me = this;
                        setTimeout(function() {
                            me.config.parsers = buildParserCache(me, $headers);
                            cache = buildCache(me);
                        }
                        , 1);
                    }
                    ).bind("updateCell", function(e, cell) {
                        var config = this.config;
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
                    }
                    ).bind("sorton", function(e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        var sortList = config.sortList;
                        updateHeaderSortCount(this, sortList);
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        appendToTable(this, multisort(this, sortList, cache));
                    }
                    ).bind("appendCache", function() {
                        appendToTable(this, cache);
                    }
                    ).bind("applyWidgetId", function(e, id) {
                        getWidgetById(id).format(this);
                    }
                    ).bind("applyWidgets", function() {
                        applyWidget(this);
                    }
                    );
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    applyWidget(this);
                }
                );
            }
            ;
            this.addParser = function(parser) {
                var l = parsers.length
                  , a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                }
                ;
            }
            ;
            this.addWidget = function(widget) {
                widgets.push(widget);
            }
            ;
            this.formatFloat = function(s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            }
            ;
            this.formatInt = function(s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            }
            ;
            this.isDigit = function(s, config) {
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            }
            ;
            this.clearTableBody = function(table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild)
                            this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            }
            ;
        }
    });
    $.fn.extend({
        tablesorter: $.tablesorter.construct
    });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function(s) {
            return true;
        },
        format: function(s) {
            return $.trim(s.toLocaleLowerCase());
        },
        type: "text"
    });
    ts.addParser({
        id: "digit",
        is: function(s, table) {
            var c = table.config;
            return $.tablesorter.isDigit(s, c);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "currency",
        is: function(s) {
            return /^[£$€?.]/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "ipAddress",
        is: function(s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        },
        format: function(s) {
            var a = s.split(".")
              , r = ""
              , l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter.formatFloat(r);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "url",
        is: function(s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        },
        format: function(s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        },
        type: "text"
    });
    ts.addParser({
        id: "isoDate",
        is: function(s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
        },
        type: "numeric"
    });
    ts.addParser({
        id: "percent",
        is: function(s) {
            return /\%$/.test($.trim(s));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "usLongDate",
        is: function(s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "shortDate",
        is: function(s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        },
        format: function(s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "pt") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "uk") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function(s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function(s) {
            return false;
        },
        format: function(s, table, cell) {
            var c = table.config
              , p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        },
        type: "numeric"
    });
    ts.addWidget({
        id: "zebra",
        format: function(table) {
            if (table.config.debug) {
                var time = new Date();
            }
            var $tr, row = -1, odd;
            $("tr:visible", table.tBodies[0]).each(function(i) {
                $tr = $(this);
                if (!$tr.hasClass(table.config.cssChildRow))
                    row++;
                odd = (row % 2 == 0);
                $tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
            }
            );
            if (table.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", time);
            }
        }
    });
}
)(jQuery);

/*
 * jQuery Tools 1.2.6
 */
(function(a, b) {
    function g(a, b) {
        return (new Date(a,b + 1,0)).getDate()
    }
    function h(a, b) {
        a = "" + a,
        b = b || 2;
        while (a.length < b)
            a = "0" + a;
        return a
    }
    function k(a, b, c) {
        var d = a.getDate()
          , e = a.getDay()
          , g = a.getMonth()
          , k = a.getFullYear()
          , l = {
            d: d,
            dd: h(d),
            ddd: f[c].shortDays[e],
            dddd: f[c].days[e],
            m: g + 1,
            mm: h(g + 1),
            mmm: f[c].shortMonths[g],
            mmmm: f[c].months[g],
            yy: String(k).slice(2),
            yyyy: k
        }
          , m = b.replace(i, function(a) {
            return a in l ? l[a] : a.slice(1, a.length - 1)
        }
        );
        return j.html(m).html()
    }
    function l(a) {
        return parseInt(a, 10)
    }
    function m(a, b) {
        return a.getFullYear() === b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate()
    }
    function n(a) {
        if (a === b)
            return;
        if (a.constructor == Date)
            return a;
        if (typeof a == "string") {
            var c = a.split("-");
            if (c.length == 3)
                return new Date(l(c[0]),l(c[1]) - 1,l(c[2]));
            if (!/^-?\d+$/.test(a))
                return;
            a = l(a)
        }
        var d = new Date;
        return d.setDate(d.getDate() + a),
        d
    }
    function o(d, h) {
        function M(b, c, e) {
            z = b,
            w = b.getFullYear(),
            x = b.getMonth(),
            y = b.getDate(),
            e = e || a.Event("api"),
            e.type = "beforeChange",
            G.trigger(e, [b]);
            if (e.isDefaultPrevented())
                return;
            d.val(k(b, c.format, c.lang)),
            e.type = "change",
            G.trigger(e),
            d.data("date", b),
            i.hide(e)
        }
        function N(b) {
            b.type = "onShow",
            G.trigger(b),
            a(document).bind("keydown.d", function(b) {
                if (b.ctrlKey)
                    return !0;
                var c = b.keyCode;
                if (c == 8)
                    return d.val(""),
                    i.hide(b);
                if (c == 27 || c == 9)
                    return i.hide(b);
                if (a(e).index(c) >= 0) {
                    if (!C)
                        return i.show(b),
                        b.preventDefault();
                    var f = a("#" + p.weeks + " a")
                      , g = a("." + p.focus)
                      , h = f.index(g);
                    g.removeClass(p.focus);
                    if (c == 74 || c == 40)
                        h += 7;
                    else if (c == 75 || c == 38)
                        h -= 7;
                    else if (c == 76 || c == 39)
                        h += 1;
                    else if (c == 72 || c == 37)
                        h -= 1;
                    return h > 41 ? (i.addMonth(),
                    g = a("#" + p.weeks + " a:eq(" + (h - 42) + ")")) : h < 0 ? (i.addMonth(-1),
                    g = a("#" + p.weeks + " a:eq(" + (h + 42) + ")")) : g = f.eq(h),
                    g.addClass(p.focus),
                    b.preventDefault()
                }
                return c == 34 ? i.addMonth() : c == 33 ? i.addMonth(-1) : c == 36 ? i.today() : (c == 13 && (a(b.target).is("select") || a("." + p.focus).click()),
                a([16, 17, 18, 9]).index(c) >= 0)
            }
            ),
            a(document).bind("click.d", function(b) {
                var c = b.target;
                !a(c).parents("#" + p.root).length && c != d[0] && (!t || c != t[0]) && i.hide(b)
            }
            )
        }
        var i = this, j = new Date, o = j.getFullYear(), p = h.css, q = f[h.lang], r = a("#" + p.root), s = r.find("#" + p.title), t, u, v, w, x, y, z = d.attr("data-value") || h.value || d.val(), A = d.attr("min") || h.min, B = d.attr("max") || h.max, C, D;
        A === 0 && (A = "0"),
        z = n(z) || j,
        A = n(A || new Date(o + h.yearRange[0],1,1)),
        B = n(B || new Date(o + h.yearRange[1] + 1,1,-1));
        if (!q)
            throw "Dateinput: invalid language: " + h.lang;
        if (d.attr("type") == "date") {
            var D = d.clone()
              , E = D.wrap("<div/>").parent().html()
              , F = a(E.replace(/type/i, "type=text data-orig-type"));
            h.value && F.val(h.value),
            d.replaceWith(F),
            d = F
        }
        d.addClass(p.input);
        var G = d.add(i);
        if (!r.length) {
            r = a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({
                position: "absolute"
            }).attr("id", p.root),
            r.children().eq(0).attr("id", p.head).end().eq(1).attr("id", p.body).children().eq(0).attr("id", p.days).end().eq(1).attr("id", p.weeks).end().end().end().find("a").eq(0).attr("id", p.prev).end().eq(1).attr("id", p.next),
            s = r.find("#" + p.head).find("div").attr("id", p.title);
            if (h.selectors) {
                var H = a("<select/>").attr("id", p.month)
                  , I = a("<select/>").attr("id", p.year);
                s.html(H.add(I))
            }
            var J = r.find("#" + p.days);
            for (var K = 0; K < 7; K++)
                J.append(a("<span/>").text(q.shortDays[(K + h.firstDay) % 7]));
            a("body").append(r)
        }
        h.trigger && (t = a("<a/>").attr("href", "#").addClass(p.trigger).click(function(a) {
            return h.toggle ? i.toggle() : i.show(),
            a.preventDefault()
        }
        ).insertAfter(d));
        var L = r.find("#" + p.weeks);
        I = r.find("#" + p.year),
        H = r.find("#" + p.month),
        a.extend(i, {
            show: function(b) {
                if (d.attr("readonly") || d.attr("disabled") || C)
                    return;
                b = b || a.Event(),
                b.type = "onBeforeShow",
                G.trigger(b);
                if (b.isDefaultPrevented())
                    return;
                a.each(c, function() {
                    this.hide()
                }
                ),
                C = !0,
                H.unbind("change").change(function() {
                    i.setValue(I.val(), a(this).val())
                }
                ),
                I.unbind("change").change(function() {
                    i.setValue(a(this).val(), H.val())
                }
                ),
                u = r.find("#" + p.prev).unbind("click").click(function(a) {
                    return u.hasClass(p.disabled) || i.addMonth(-1),
                    !1
                }
                ),
                v = r.find("#" + p.next).unbind("click").click(function(a) {
                    return v.hasClass(p.disabled) || i.addMonth(),
                    !1
                }
                ),
                i.setValue(z);
                var e = d.offset();
                return /iPad/i.test(navigator.userAgent) && (e.top -= a(window).scrollTop()),
                r.css({
                    top: e.top + d.outerHeight({
                        margins: !0
                    }) + h.offset[0],
                    left: e.left + h.offset[1]
                }),
                h.speed ? r.show(h.speed, function() {
                    N(b)
                }
                ) : (r.show(),
                N(b)),
                i
            },
            setValue: function(c, d, e) {
                var f = l(d) >= -1 ? new Date(l(c),l(d),l(e == b || isNaN(e) ? 1 : e)) : c || z;
                f < A ? f = A : f > B && (f = B),
                typeof c == "string" && (f = n(c)),
                c = f.getFullYear(),
                d = f.getMonth(),
                e = f.getDate(),
                d == -1 ? (d = 11,
                c--) : d == 12 && (d = 0,
                c++);
                if (!C)
                    return M(f, h),
                    i;
                x = d,
                w = c,
                y = e;
                var k = new Date(c,d,1 - h.firstDay), o = k.getDay(), r = g(c, d), t = g(c, d - 1), D;
                if (h.selectors) {
                    H.empty(),
                    a.each(q.months, function(b, d) {
                        A < new Date(c,b + 1,1) && B > new Date(c,b,0) && H.append(a("<option/>").html(d).attr("value", b))
                    }
                    ),
                    I.empty();
                    var E = j.getFullYear();
                    for (var F = E + h.yearRange[0]; F < E + h.yearRange[1]; F++)
                        A < new Date(F + 1,0,1) && B > new Date(F,0,0) && I.append(a("<option/>").text(F));
                    H.val(d),
                    I.val(c)
                } else
                    s.html(q.months[d] + " " + c);
                L.empty(),
                u.add(v).removeClass(p.disabled);
                for (var G = o ? 0 : -7, J, K; G < (o ? 42 : 35); G++)
                    J = a("<a/>"),
                    G % 7 === 0 && (D = a("<div/>").addClass(p.week),
                    L.append(D)),
                    G < o ? (J.addClass(p.off),
                    K = t - o + G + 1,
                    f = new Date(c,d - 1,K)) : G >= o + r ? (J.addClass(p.off),
                    K = G - r - o + 1,
                    f = new Date(c,d + 1,K)) : (K = G - o + 1,
                    f = new Date(c,d,K),
                    m(z, f) ? J.attr("id", p.current).addClass(p.focus) : m(j, f) && J.attr("id", p.today)),
                    A && f < A && J.add(u).addClass(p.disabled),
                    B && f > B && J.add(v).addClass(p.disabled),
                    J.attr("href", "#" + K).text(K).data("date", f),
                    D.append(J);
                return L.find("a").click(function(b) {
                    var c = a(this);
                    return c.hasClass(p.disabled) || (a("#" + p.current).removeAttr("id"),
                    c.attr("id", p.current),
                    M(c.data("date"), h, b)),
                    !1
                }
                ),
                p.sunday && L.find(p.week).each(function() {
                    var b = h.firstDay ? 7 - h.firstDay : 0;
                    a(this).children().slice(b, b + 1).addClass(p.sunday)
                }
                ),
                i
            },
            setMin: function(a, b) {
                return A = n(a),
                b && z < A && i.setValue(A),
                i
            },
            setMax: function(a, b) {
                return B = n(a),
                b && z > B && i.setValue(B),
                i
            },
            today: function() {
                return i.setValue(j)
            },
            addDay: function(a) {
                return this.setValue(w, x, y + (a || 1))
            },
            addMonth: function(a) {
                var b = x + (a || 1)
                  , c = g(w, b)
                  , d = y <= c ? y : c;
                return this.setValue(w, b, d)
            },
            addYear: function(a) {
                return this.setValue(w + (a || 1), x, y)
            },
            destroy: function() {
                d.add(document).unbind("click.d").unbind("keydown.d"),
                r.add(t).remove(),
                d.removeData("dateinput").removeClass(p.input),
                D && d.replaceWith(D)
            },
            hide: function(b) {
                if (C) {
                    b = a.Event(),
                    b.type = "onHide",
                    G.trigger(b),
                    a(document).unbind("click.d").unbind("keydown.d");
                    if (b.isDefaultPrevented())
                        return;
                    r.hide(),
                    C = !1
                }
                return i
            },
            toggle: function() {
                return i.isOpen() ? i.hide() : i.show()
            },
            getConf: function() {
                return h
            },
            getInput: function() {
                return d
            },
            getCalendar: function() {
                return r
            },
            getValue: function(a) {
                return a ? k(z, a, h.lang) : z
            },
            isOpen: function() {
                return C
            }
        }),
        a.each(["onBeforeShow", "onShow", "change", "onHide"], function(b, c) {
            a.isFunction(h[c]) && a(i).bind(c, h[c]),
            i[c] = function(b) {
                return b && a(i).bind(c, b),
                i
            }
        }
        ),
        h.editable || d.bind("focus.d click.d", i.show).keydown(function(b) {
            var c = b.keyCode;
            return !C && a(e).index(c) >= 0 ? (i.show(b),
            b.preventDefault()) : b.shiftKey || b.ctrlKey || b.altKey || c == 9 ? !0 : b.preventDefault()
        }
        ),
        n(d.val()) && M(z, h)
    }
    a.tools = a.tools || {
        version: "1.2.6"
    };
    var c = [], d, e = [75, 76, 38, 39, 74, 72, 40, 37], f = {};
    d = a.tools.dateinput = {
        conf: {
            format: "mm/dd/yy",
            selectors: !1,
            yearRange: [-5, 5],
            lang: "en",
            offset: [0, 0],
            speed: 0,
            firstDay: 0,
            min: b,
            max: b,
            trigger: 0,
            toggle: 0,
            editable: 0,
            css: {
                prefix: "cal",
                input: "date",
                root: 0,
                head: 0,
                title: 0,
                prev: 0,
                next: 0,
                month: 0,
                year: 0,
                days: 0,
                body: 0,
                weeks: 0,
                today: 0,
                current: 0,
                week: 0,
                off: 0,
                sunday: 0,
                focus: 0,
                disabled: 0,
                trigger: 0
            }
        },
        localize: function(b, c) {
            a.each(c, function(a, b) {
                c[a] = b.split(",")
            }
            ),
            f[b] = c
        }
    },
    d.localize("en", {
        months: "January,February,March,April,May,June,July,August,September,October,November,December",
        shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
        days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
        shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
    });
    var i = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g
      , j = a("<a/>");
    a.expr[":"].date = function(b) {
        var c = b.getAttribute("type");
        return c && c == "date" || !!a(b).data("dateinput")
    }
    ,
    a.fn.dateinput = function(b) {
        if (this.data("dateinput"))
            return this;
        b = a.extend(!0, {}, d.conf, b),
        a.each(b.css, function(a, c) {
            !c && a != "prefix" && (b.css[a] = (b.css.prefix || "") + (c || a))
        }
        );
        var e;
        return this.each(function() {
            var d = new o(a(this),b);
            c.push(d);
            var f = d.getInput().data("dateinput", d);
            e = e ? e.add(f) : f
        }
        ),
        e ? e : this
    }
}
)(jQuery),
function(a) {
    function d(d, e) {
        var f = this, g = d.add(f), h = a(window), i, j, k, l = a.tools.expose && (e.mask || e.expose), m = Math.random().toString().slice(10);
        l && (typeof l == "string" && (l = {
            color: l
        }),
        l.closeOnClick = l.closeOnEsc = !1);
        var n = e.target || d.attr("rel");
        j = n ? a(n) : null  || d;
        if (!j.length)
            throw "Could not find Overlay: " + n;
        d && d.index(j) == -1 && d.click(function(a) {
            return f.load(a),
            a.preventDefault()
        }
        ),
        a.extend(f, {
            load: function(d) {
                if (f.isOpened())
                    return f;
                var i = c[e.effect];
                if (!i)
                    throw 'Overlay: cannot find effect : "' + e.effect + '"';
                e.oneInstance && a.each(b, function() {
                    this.close(d)
                }
                ),
                d = d || a.Event(),
                d.type = "onBeforeLoad",
                g.trigger(d);
                if (d.isDefaultPrevented())
                    return f;
                k = !0,
                l && a(j).expose(l);
                var n = e.top
                  , o = e.left
                  , p = j.outerWidth({
                    margin: !0
                })
                  , q = j.outerHeight({
                    margin: !0
                });
                return typeof n == "string" && (n = n == "center" ? Math.max((h.height() - q) / 2, 0) : parseInt(n, 10) / 100 * h.height()),
                o == "center" && (o = Math.max((h.width() - p) / 2, 0)),
                i[0].call(f, {
                    top: n,
                    left: o
                }, function() {
                    k && (d.type = "onLoad",
                    g.trigger(d))
                }
                ),
                l && e.closeOnClick && a.mask.getMask().one("click", f.close),
                e.closeOnClick && a(document).bind("click." + m, function(b) {
                    a(b.target).parents(j).length || f.close(b)
                }
                ),
                e.closeOnEsc && a(document).bind("keydown." + m, function(a) {
                    a.keyCode == 27 && f.close(a)
                }
                ),
                f
            },
            close: function(b) {
                if (!f.isOpened())
                    return f;
                b = b || a.Event(),
                b.type = "onBeforeClose",
                g.trigger(b);
                if (b.isDefaultPrevented())
                    return;
                return k = !1,
                c[e.effect][1].call(f, function() {
                    b.type = "onClose",
                    g.trigger(b)
                }
                ),
                a(document).unbind("click." + m).unbind("keydown." + m),
                l && a.mask.close(),
                f
            },
            getOverlay: function() {
                return j
            },
            getTrigger: function() {
                return d
            },
            getClosers: function() {
                return i
            },
            isOpened: function() {
                return k
            },
            getConf: function() {
                return e
            }
        }),
        a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]),
            f[c] = function(b) {
                return b && a(f).bind(c, b),
                f
            }
        }
        ),
        i = j.find(e.close || ".close"),
        !i.length && !e.close && (i = a('<a class="close"></a>'),
        j.prepend(i)),
        i.click(function(a) {
            f.close(a)
        }
        ),
        e.load && f.load()
    }
    a.tools = a.tools || {
        version: "1.2.6"
    },
    a.tools.overlay = {
        addEffect: function(a, b, d) {
            c[a] = [b, d]
        },
        conf: {
            close: null ,
            closeOnClick: !0,
            closeOnEsc: !0,
            closeSpeed: "fast",
            effect: "default",
            fixed: !a.browser.msie || a.browser.version > 6,
            left: "center",
            load: !1,
            mask: null ,
            oneInstance: !0,
            speed: "normal",
            target: null ,
            top: "10%"
        }
    };
    var b = []
      , c = {};
    a.tools.overlay.addEffect("default", function(b, c) {
        var d = this.getConf()
          , e = a(window);
        d.fixed || (b.top += e.scrollTop(),
        b.left += e.scrollLeft()),
        b.position = d.fixed ? "fixed" : "absolute",
        this.getOverlay().css(b).fadeIn(d.speed, c)
    }
    , function(a) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, a)
    }
    ),
    a.fn.overlay = function(c) {
        var e = this.data("overlay");
        return e ? e : (a.isFunction(c) && (c = {
            onBeforeLoad: c
        }),
        c = a.extend(!0, {}, a.tools.overlay.conf, c),
        this.each(function() {
            e = new d(a(this),c),
            b.push(e),
            a(this).data("overlay", e)
        }
        ),
        c.api ? e : this)
    }
}
(jQuery),
function(a) {
    function d(a) {
        var b = a.offset();
        return {
            top: b.top + a.height() / 2,
            left: b.left + a.width() / 2
        }
    }
    var b = a.tools.overlay
      , c = a(window);
    a.extend(b.conf, {
        start: {
            top: null ,
            left: null 
        },
        fadeInSpeed: "fast",
        zIndex: 9999
    });
    var e = function(b, e) {
        var f = this.getOverlay()
          , g = this.getConf()
          , h = this.getTrigger()
          , i = this
          , j = f.outerWidth({
            margin: !0
        })
          , k = f.data("img")
          , l = g.fixed ? "fixed" : "absolute";
        if (!k) {
            var m = f.css("backgroundImage");
            if (!m)
                throw "background-image CSS property not set for overlay";
            m = m.slice(m.indexOf("(") + 1, m.indexOf(")")).replace(/\"/g, ""),
            f.css("backgroundImage", "none"),
            k = a('<img src="' + m + '"/>'),
            k.css({
                border: 0,
                display: "none"
            }).width(j),
            a("body").append(k),
            f.data("img", k)
        }
        var n = g.start.top || Math.round(c.height() / 2)
          , o = g.start.left || Math.round(c.width() / 2);
        if (h) {
            var p = d(h);
            n = p.top,
            o = p.left
        }
        g.fixed ? (n -= c.scrollTop(),
        o -= c.scrollLeft()) : (b.top += c.scrollTop(),
        b.left += c.scrollLeft()),
        k.css({
            position: "absolute",
            top: n,
            left: o,
            width: 0,
            zIndex: g.zIndex
        }).show(),
        b.position = l,
        f.css(b),
        k.animate({
            top: f.css("top"),
            left: f.css("left"),
            width: j
        }, g.speed, function() {
            f.css("zIndex", g.zIndex + 1).fadeIn(g.fadeInSpeed, function() {
                i.isOpened() && !a(this).index(f) ? e.call() : f.hide()
            }
            )
        }
        ).css("position", l)
    }
      , f = function(b) {
        var e = this.getOverlay().hide()
          , f = this.getConf()
          , g = this.getTrigger()
          , h = e.data("img")
          , i = {
            top: f.start.top,
            left: f.start.left,
            width: 0
        };
        g && a.extend(i, d(g)),
        f.fixed && h.css({
            position: "absolute"
        }).animate({
            top: "+=" + c.scrollTop(),
            left: "+=" + c.scrollLeft()
        }, 0),
        h.animate(i, f.closeSpeed, b)
    }
    ;
    b.addEffect("apple", e, f)
}
(jQuery),
function(a) {
    function e(a, b) {
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    }
    function f(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c)
            return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }
    function g(a) {
        var b = a.data("events");
        return b && b.onSlide
    }
    function h(b, c) {
        function y(a, f, g, h) {
            g === undefined ? g = f / m * q : h && (g -= c.min),
            r && (g = Math.round(g / r) * r);
            if (f === undefined || r)
                f = g * m / q;
            if (isNaN(g))
                return d;
            f = Math.max(0, Math.min(f, m)),
            g = f / m * q;
            if (h || !j)
                g += c.min;
            j && (h ? f = m - f : g = c.max - g),
            g = e(g, s);
            var i = a.type == "click";
            if (x && k !== undefined && !i) {
                a.type = "onSlide",
                w.trigger(a, [g, f]);
                if (a.isDefaultPrevented())
                    return d
            }
            var l = i ? c.speed : 0
              , t = i ? function() {
                a.type = "change",
                w.trigger(a, [g])
            }
             : null ;
            return j ? (o.animate({
                top: f
            }, l, t),
            c.progress && p.animate({
                height: m - f + o.height() / 2
            }, l)) : (o.animate({
                left: f
            }, l, t),
            c.progress && p.animate({
                width: f + o.width() / 2
            }, l)),
            k = g,
            n = f,
            b.val(g),
            d
        }
        function z() {
            j = c.vertical || f(i, "height") > f(i, "width"),
            j ? (m = f(i, "height") - f(o, "height"),
            l = i.offset().top + m) : (m = f(i, "width") - f(o, "width"),
            l = i.offset().left)
        }
        function A() {
            z(),
            d.setValue(c.value !== undefined ? c.value : c.min)
        }
        var d = this, h = c.css, i = a("<div><div/><a href='#'/></div>").data("rangeinput", d), j, k, l, m, n;
        b.before(i);
        var o = i.addClass(h.slider).find("a").addClass(h.handle)
          , p = i.find("div").addClass(h.progress);
        a.each("min,max,step,value".split(","), function(a, d) {
            var e = b.attr(d);
            parseFloat(e) && (c[d] = parseFloat(e, 10))
        }
        );
        var q = c.max - c.min
          , r = c.step == "any" ? 0 : c.step
          , s = c.precision;
        if (s === undefined)
            try {
                s = r.toString().split(".")[1].length
            } catch (t) {
                s = 0
            }
        if (b.attr("type") == "range") {
            var u = b.clone().wrap("<div/>").parent().html()
              , v = a(u.replace(/type/i, "type=text data-orig-type"));
            v.val(c.value),
            b.replaceWith(v),
            b = v
        }
        b.addClass(h.input);
        var w = a(d).add(b)
          , x = !0;
        a.extend(d, {
            getValue: function() {
                return k
            },
            setValue: function(b, c) {
                return z(),
                y(c || a.Event("api"), undefined, b, !0)
            },
            getConf: function() {
                return c
            },
            getProgress: function() {
                return p
            },
            getHandle: function() {
                return o
            },
            getInput: function() {
                return b
            },
            step: function(b, e) {
                e = e || a.Event();
                var f = c.step == "any" ? 1 : c.step;
                d.setValue(k + f * (b || 1), e)
            },
            stepUp: function(a) {
                return d.step(a || 1)
            },
            stepDown: function(a) {
                return d.step(-a || -1)
            }
        }),
        a.each("onSlide,change".split(","), function(b, e) {
            a.isFunction(c[e]) && a(d).bind(e, c[e]),
            d[e] = function(b) {
                return b && a(d).bind(e, b),
                d
            }
        }
        ),
        o.drag({
            drag: !1
        }).bind("dragStart", function() {
            z(),
            x = g(a(d)) || g(b)
        }
        ).bind("drag", function(a, c, d) {
            if (b.is(":disabled"))
                return !1;
            y(a, j ? c : d)
        }
        ).bind("dragEnd", function(a) {
            a.isDefaultPrevented() || (a.type = "change",
            w.trigger(a, [k]))
        }
        ).click(function(a) {
            return a.preventDefault()
        }
        ),
        i.click(function(a) {
            if (b.is(":disabled") || a.target == o[0])
                return a.preventDefault();
            z();
            var c = j ? o.height() / 2 : o.width() / 2;
            y(a, j ? m - l - c + a.pageY : a.pageX - l - c)
        }
        ),
        c.keyboard && b.keydown(function(c) {
            if (b.attr("readonly"))
                return;
            var e = c.keyCode
              , f = a([75, 76, 38, 33, 39]).index(e) != -1
              , g = a([74, 72, 40, 34, 37]).index(e) != -1;
            if ((f || g) && !(c.shiftKey || c.altKey || c.ctrlKey))
                return f ? d.step(e == 33 ? 10 : 1, c) : g && d.step(e == 34 ? -10 : -1, c),
                c.preventDefault()
        }
        ),
        b.blur(function(b) {
            var c = a(this).val();
            c !== k && d.setValue(c, b)
        }
        ),
        a.extend(b[0], {
            stepUp: d.stepUp,
            stepDown: d.stepDown
        }),
        A(),
        m || a(window).load(A)
    }
    a.tools = a.tools || {
        version: "1.2.6"
    };
    var b;
    b = a.tools.rangeinput = {
        conf: {
            min: 0,
            max: 100,
            step: "any",
            steps: 0,
            value: 0,
            precision: undefined,
            vertical: 0,
            keyboard: !0,
            progress: !1,
            speed: 100,
            css: {
                input: "range",
                slider: "slider",
                progress: "progress",
                handle: "handle"
            }
        }
    };
    var c, d;
    a.fn.drag = function(b) {
        return document.ondragstart = function() {
            return !1
        }
        ,
        b = a.extend({
            x: !0,
            y: !0,
            drag: !0
        }, b),
        c = c || a(document).bind("mousedown mouseup", function(e) {
            var f = a(e.target);
            if (e.type == "mousedown" && f.data("drag")) {
                var g = f.position()
                  , h = e.pageX - g.left
                  , i = e.pageY - g.top
                  , j = !0;
                c.bind("mousemove.drag", function(a) {
                    var c = a.pageX - h
                      , e = a.pageY - i
                      , g = {};
                    b.x && (g.left = c),
                    b.y && (g.top = e),
                    j && (f.trigger("dragStart"),
                    j = !1),
                    b.drag && f.css(g),
                    f.trigger("drag", [e, c]),
                    d = f
                }
                ),
                e.preventDefault()
            } else
                try {
                    d && d.trigger("dragEnd")
                } finally {
                    c.unbind("mousemove.drag"),
                    d = null 
                }
        }
        ),
        this.data("drag", !0)
    }
    ,
    a.expr[":"].range = function(b) {
        var c = b.getAttribute("type");
        return c && c == "range" || !!a(b).filter("input").data("rangeinput")
    }
    ,
    a.fn.rangeinput = function(c) {
        if (this.data("rangeinput"))
            return this;
        c = a.extend(!0, {}, b.conf, c);
        var d;
        return this.each(function() {
            var b = new h(a(this),a.extend(!0, {}, c))
              , e = b.getInput().data("rangeinput", b);
            d = d ? d.add(e) : e
        }
        ),
        d ? d : this
    }
}
(jQuery),
function(a) {
    function b(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c)
            return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }
    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d : b.parent().find(c)
    }
    function e(b, e) {
        var f = this
          , g = b.add(f)
          , h = b.children()
          , i = 0
          , j = e.vertical;
        d || (d = f),
        h.length > 1 && (h = a(e.items, b)),
        e.size > 1 && (e.circular = !1),
        a.extend(f, {
            getConf: function() {
                return e
            },
            getIndex: function() {
                return i
            },
            getSize: function() {
                return f.getItems().size()
            },
            getNaviButtons: function() {
                return n.add(o)
            },
            getRoot: function() {
                return b
            },
            getItemWrap: function() {
                return h
            },
            getItems: function() {
                return h.find(e.item).not("." + e.clonedClass)
            },
            move: function(a, b) {
                return f.seekTo(i + a, b)
            },
            next: function(a) {
                return f.move(e.size, a)
            },
            prev: function(a) {
                return f.move(-e.size, a)
            },
            begin: function(a) {
                return f.seekTo(0, a)
            },
            end: function(a) {
                return f.seekTo(f.getSize() - 1, a)
            },
            focus: function() {
                return d = f,
                f
            },
            addItem: function(b) {
                return b = a(b),
                e.circular ? (h.children().last().before(b),
                h.children().first().replaceWith(b.clone().addClass(e.clonedClass))) : (h.append(b),
                o.removeClass("disabled")),
                g.trigger("onAddItem", [b]),
                f
            },
            seekTo: function(b, c, k) {
                b.jquery || (b *= 1);
                if (e.circular && b === 0 && i == -1 && c !== 0)
                    return f;
                if (!e.circular && b < 0 || b > f.getSize() || b < -1)
                    return f;
                var l = b;
                b.jquery ? b = f.getItems().index(b) : l = f.getItems().eq(b);
                var m = a.Event("onBeforeSeek");
                if (!k) {
                    g.trigger(m, [b, c]);
                    if (m.isDefaultPrevented() || !l.length)
                        return f
                }
                var n = j ? {
                    top: -l.position().top
                } : {
                    left: -l.position().left
                };
                return i = b,
                d = f,
                c === undefined && (c = e.speed),
                h.animate(n, c, e.easing, k || function() {
                    g.trigger("onSeek", [b])
                }
                ),
                f
            }
        }),
        a.each(["onBeforeSeek", "onSeek", "onAddItem"], function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]),
            f[c] = function(b) {
                return b && a(f).bind(c, b),
                f
            }
        }
        );
        if (e.circular) {
            var k = f.getItems().slice(-1).clone().prependTo(h)
              , l = f.getItems().eq(1).clone().appendTo(h);
            k.add(l).addClass(e.clonedClass),
            f.onBeforeSeek(function(a, b, c) {
                if (a.isDefaultPrevented())
                    return;
                if (b == -1)
                    return f.seekTo(k, c, function() {
                        f.end(0)
                    }
                    ),
                    a.preventDefault();
                b == f.getSize() && f.seekTo(l, c, function() {
                    f.begin(0)
                }
                )
            }
            );
            var m = b.parents().add(b).filter(function() {
                if (a(this).css("display") === "none")
                    return !0
            }
            );
            m.length ? (m.show(),
            f.seekTo(0, 0, function() {}
            ),
            m.hide()) : f.seekTo(0, 0, function() {}
            )
        }
        var n = c(b, e.prev).click(function(a) {
            a.stopPropagation(),
            f.prev()
        }
        )
          , o = c(b, e.next).click(function(a) {
            a.stopPropagation(),
            f.next()
        }
        );
        e.circular || (f.onBeforeSeek(function(a, b) {
            setTimeout(function() {
                a.isDefaultPrevented() || (n.toggleClass(e.disabledClass, b <= 0),
                o.toggleClass(e.disabledClass, b >= f.getSize() - 1))
            }
            , 1)
        }
        ),
        e.initialIndex || n.addClass(e.disabledClass)),
        f.getSize() < 2 && n.add(o).addClass(e.disabledClass),
        e.mousewheel && a.fn.mousewheel && b.mousewheel(function(a, b) {
            if (e.mousewheel)
                return f.move(b < 0 ? 1 : -1, e.wheelSpeed || 50),
                !1
        }
        );
        if (e.touch) {
            var p = {};
            h[0].ontouchstart = function(a) {
                var b = a.touches[0];
                p.x = b.clientX,
                p.y = b.clientY
            }
            ,
            h[0].ontouchmove = function(a) {
                if (a.touches.length == 1 && !h.is(":animated")) {
                    var b = a.touches[0]
                      , c = p.x - b.clientX
                      , d = p.y - b.clientY;
                    f[j && d > 0 || !j && c > 0 ? "next" : "prev"](),
                    a.preventDefault()
                }
            }
        }
        e.keyboard && a(document).bind("keydown.scrollable", function(b) {
            if (!e.keyboard || b.altKey || b.ctrlKey || b.metaKey || a(b.target).is(":input"))
                return;
            if (e.keyboard != "static" && d != f)
                return;
            var c = b.keyCode;
            if (!(!j || c != 38 && c != 40))
                return f.move(c == 38 ? -1 : 1),
                b.preventDefault();
            if (!j && (c == 37 || c == 39))
                return f.move(c == 37 ? -1 : 1),
                b.preventDefault()
        }
        ),
        e.initialIndex && f.seekTo(e.initialIndex, 0, function() {}
        )
    }
    a.tools = a.tools || {
        version: "1.2.6"
    },
    a.tools.scrollable = {
        conf: {
            activeClass: "active",
            circular: !1,
            clonedClass: "cloned",
            disabledClass: "disabled",
            easing: "swing",
            initialIndex: 0,
            item: "> *",
            items: ".items",
            keyboard: !0,
            mousewheel: !1,
            next: ".next",
            prev: ".prev",
            size: 1,
            speed: 400,
            vertical: !1,
            touch: !0,
            wheelSpeed: 0
        }
    };
    var d;
    a.fn.scrollable = function(b) {
        var c = this.data("scrollable");
        return c ? c : (b = a.extend({}, a.tools.scrollable.conf, b),
        this.each(function() {
            c = new e(a(this),b),
            a(this).data("scrollable", c)
        }
        ),
        b.api ? c : this)
    }
}
(jQuery),
function(a) {
    var b = a.tools.scrollable;
    b.autoscroll = {
        conf: {
            autoplay: !0,
            interval: 3e3,
            autopause: !0
        }
    },
    a.fn.autoscroll = function(c) {
        typeof c == "number" && (c = {
            interval: c
        });
        var d = a.extend({}, b.autoscroll.conf, c), e;
        return this.each(function() {
            function h() {
                f = setTimeout(function() {
                    b.next()
                }
                , d.interval)
            }
            var b = a(this).data("scrollable"), c = b.getRoot(), f, g = !1;
            b && (e = b),
            b.play = function() {
                if (f)
                    return;
                g = !1,
                c.bind("onSeek", h),
                h()
            }
            ,
            b.pause = function() {
                f = clearTimeout(f),
                c.unbind("onSeek", h)
            }
            ,
            b.resume = function() {
                g || b.play()
            }
            ,
            b.stop = function() {
                g = !0,
                b.pause()
            }
            ,
            d.autopause && c.add(b.getNaviButtons()).hover(b.pause, b.resume),
            d.autoplay && b.play()
        }
        ),
        d.api ? e : this
    }
}
(jQuery),
function(a) {
    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d : b.parent().find(c)
    }
    var b = a.tools.scrollable;
    b.navigator = {
        conf: {
            navi: ".navi",
            naviItem: null ,
            activeClass: "active",
            indexed: !1,
            idPrefix: null ,
            history: !1
        }
    },
    a.fn.navigator = function(d) {
        typeof d == "string" && (d = {
            navi: d
        }),
        d = a.extend({}, b.navigator.conf, d);
        var e;
        return this.each(function() {
            function k(a, c, d) {
                b.seekTo(c),
                d.preventDefault(),
                i && history.pushState({
                    i: c
                })
            }
            function l() {
                return f.find(d.naviItem || "> *")
            }
            function m(b) {
                var c = a("<" + (d.naviItem || "a") + "/>").click(function(c) {
                    k(a(this), b, c)
                }
                );
                return b === 0 && c.addClass(h),
                d.indexed && c.text(b + 1),
                d.idPrefix && c.attr("id", d.idPrefix + b),
                c.appendTo(f)
            }
            var b = a(this).data("scrollable")
              , f = d.navi.jquery ? d.navi : c(b.getRoot(), d.navi)
              , g = b.getNaviButtons()
              , h = d.activeClass
              , i = d.history && !!history.pushState
              , j = b.getConf().size;
            b && (e = b),
            b.getNaviButtons = function() {
                return g.add(f)
            }
            ,
            i && (history.pushState({
                i: 0
            }),
            a(window).bind("popstate", function(a) {
                var c = a.originalEvent.state;
                c && b.seekTo(c.i)
            }
            )),
            l().length ? l().each(function(b) {
                a(this).click(function(c) {
                    k(a(this), b, c)
                }
                )
            }
            ) : a.each(b.getItems(), function(a) {
                a % j == 0 && m(a)
            }
            ),
            b.onBeforeSeek(function(a, b) {
                setTimeout(function() {
                    if (!a.isDefaultPrevented()) {
                        var c = b / j
                          , d = l().eq(c);
                        d.length && l().removeClass(h).eq(c).addClass(h)
                    }
                }
                , 1)
            }
            ),
            b.onAddItem(function(a, c) {
                var d = b.getItems().index(c);
                d % j == 0 && m(d)
            }
            )
        }
        ),
        d.api ? e : this
    }
}
(jQuery),
function(a) {
    function e(c, d, e) {
        var f = this, g = c.add(this), h = c.find(e.tabs), i = d.jquery ? d : c.children(d), j;
        h.length || (h = c.children()),
        i.length || (i = c.parent().find(d)),
        i.length || (i = a(d)),
        a.extend(this, {
            click: function(c, d) {
                var i = h.eq(c);
                typeof c == "string" && c.replace("#", "") && (i = h.filter("[href*=" + c.replace("#", "") + "]"),
                c = Math.max(h.index(i), 0));
                if (e.rotate) {
                    var k = h.length - 1;
                    if (c < 0)
                        return f.click(k, d);
                    if (c > k)
                        return f.click(0, d)
                }
                if (!i.length) {
                    if (j >= 0)
                        return f;
                    c = e.initialIndex,
                    i = h.eq(c)
                }
                if (c === j)
                    return f;
                d = d || a.Event(),
                d.type = "onBeforeClick",
                g.trigger(d, [c]);
                if (d.isDefaultPrevented())
                    return;
                return b[e.effect].call(f, c, function() {
                    j = c,
                    d.type = "onClick",
                    g.trigger(d, [c])
                }
                ),
                h.removeClass(e.current),
                i.addClass(e.current),
                f
            },
            getConf: function() {
                return e
            },
            getTabs: function() {
                return h
            },
            getPanes: function() {
                return i
            },
            getCurrentPane: function() {
                return i.eq(j)
            },
            getCurrentTab: function() {
                return h.eq(j)
            },
            getIndex: function() {
                return j
            },
            next: function() {
                return f.click(j + 1)
            },
            prev: function() {
                return f.click(j - 1)
            },
            destroy: function() {
                return h.unbind(e.event).removeClass(e.current),
                i.find("a[href^=#]").unbind("click.T"),
                f
            }
        }),
        a.each("onBeforeClick,onClick".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]),
            f[c] = function(b) {
                return b && a(f).bind(c, b),
                f
            }
        }
        ),
        e.history && a.fn.history && (a.tools.history.init(h),
        e.event = "history"),
        h.each(function(b) {
            a(this).bind(e.event, function(a) {
                return f.click(b, a),
                a.preventDefault()
            }
            )
        }
        ),
        i.find("a[href^=#]").bind("click.T", function(b) {
            f.click(a(this).attr("href"), b)
        }
        ),
        location.hash && e.tabs == "a" && c.find("[href=" + location.hash + "]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex)
    }
    a.tools = a.tools || {
        version: "1.2.6"
    },
    a.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null ,
            onClick: null ,
            effect: "default",
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function(a, c) {
            b[a] = c
        }
    };
    var b = {
        "default": function(a, b) {
            this.getPanes().hide().eq(a).show(),
            b.call()
        },
        fade: function(a, b) {
            var c = this.getConf()
              , d = c.fadeOutSpeed
              , e = this.getPanes();
            d ? e.fadeOut(d) : e.hide(),
            e.eq(a).fadeIn(c.fadeInSpeed, b)
        },
        slide: function(a, b) {
            var c = this.getConf();
            this.getPanes().slideUp(c.slideUpSpeed),
            this.getPanes().eq(a).slideDown(c.slideDownSpeed, b)
        },
        ajax: function(a, b) {
            this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
        }
    }, c, d;
    a.tools.tabs.addEffect("horizontal", function(b, e) {
        if (c)
            return;
        var f = this.getPanes().eq(b)
          , g = this.getCurrentPane();
        d || (d = this.getPanes().eq(0).width()),
        c = !0,
        f.show(),
        g.animate({
            width: 0
        }, {
            step: function(a) {
                f.css("width", d - a)
            },
            complete: function() {
                a(this).hide(),
                e.call(),
                c = !1
            }
        }),
        g.length || (e.call(),
        c = !1)
    }
    ),
    a.fn.tabs = function(b, c) {
        var d = this.data("tabs");
        return d && (d.destroy(),
        this.removeData("tabs")),
        a.isFunction(c) && (c = {
            onBeforeClick: c
        }),
        c = a.extend({}, a.tools.tabs.conf, c),
        this.each(function() {
            d = new e(a(this),b,c),
            a(this).data("tabs", d)
        }
        ),
        c.api ? d : this
    }
}
(jQuery),
function(a) {
    function c(b, c) {
        function i(c) {
            var d = a(c);
            return d.length < 2 ? d : b.parent().find(c)
        }
        function l() {
            g = setTimeout(function() {
                f.next()
            }
            , c.interval)
        }
        var d = this, e = b.add(this), f = b.data("tabs"), g, h = !0, j = i(c.next).click(function() {
            f.next()
        }
        ), k = i(c.prev).click(function() {
            f.prev()
        }
        );
        a.extend(d, {
            getTabs: function() {
                return f
            },
            getConf: function() {
                return c
            },
            play: function() {
                if (g)
                    return d;
                var b = a.Event("onBeforePlay");
                return e.trigger(b),
                b.isDefaultPrevented() ? d : (h = !1,
                e.trigger("onPlay"),
                e.bind("onClick", l),
                l(),
                d)
            },
            pause: function() {
                if (!g)
                    return d;
                var b = a.Event("onBeforePause");
                return e.trigger(b),
                b.isDefaultPrevented() ? d : (g = clearTimeout(g),
                e.trigger("onPause"),
                e.unbind("onClick", l),
                d)
            },
            resume: function() {
                h || d.play()
            },
            stop: function() {
                d.pause(),
                h = !0
            }
        }),
        a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","), function(b, e) {
            a.isFunction(c[e]) && a(d).bind(e, c[e]),
            d[e] = function(b) {
                return a(d).bind(e, b)
            }
        }
        ),
        c.autopause && f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause, d.resume),
        c.autoplay && d.play(),
        c.clickable && f.getPanes().click(function() {
            f.next()
        }
        );
        if (!f.getConf().rotate) {
            var m = c.disabledClass;
            f.getIndex() || k.addClass(m),
            f.onBeforeClick(function(a, b) {
                k.toggleClass(m, !b),
                j.toggleClass(m, b == f.getTabs().length - 1)
            }
            )
        }
    }
    var b;
    b = a.tools.tabs.slideshow = {
        conf: {
            next: ".forward",
            prev: ".backward",
            disabledClass: "disabled",
            autoplay: !1,
            autopause: !0,
            interval: 3e3,
            clickable: !0,
            api: !1
        }
    },
    a.fn.slideshow = function(d) {
        var e = this.data("slideshow");
        return e ? e : (d = a.extend({}, b.conf, d),
        this.each(function() {
            e = new c(a(this),d),
            a(this).data("slideshow", e)
        }
        ),
        d.api ? e : this)
    }
}
(jQuery),
function(a) {
    function c() {
        if (a.browser.msie) {
            var b = a(document).height()
              , c = a(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, b - c < 20 ? c : b]
        }
        return [a(document).width(), a(document).height()]
    }
    function d(b) {
        if (b)
            return b.call(a.mask)
    }
    a.tools = a.tools || {
        version: "1.2.6"
    };
    var b;
    b = a.tools.expose = {
        conf: {
            maskId: "exposeMask",
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: !0,
            closeOnEsc: !0,
            zIndex: 9998,
            opacity: .8,
            startOpacity: 0,
            color: "#fff",
            onLoad: null ,
            onClose: null 
        }
    };
    var e, f, g, h, i;
    a.mask = {
        load: function(j, k) {
            if (g)
                return this;
            typeof j == "string" && (j = {
                color: j
            }),
            j = j || h,
            h = j = a.extend(a.extend({}, b.conf), j),
            e = a("#" + j.maskId),
            e.length || (e = a("<div/>").attr("id", j.maskId),
            a("body").append(e));
            var l = c();
            return e.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: l[0],
                height: l[1],
                display: "none",
                opacity: j.startOpacity,
                zIndex: j.zIndex
            }),
            j.color && e.css("backgroundColor", j.color),
            d(j.onBeforeLoad) === !1 ? this : (j.closeOnEsc && a(document).bind("keydown.mask", function(b) {
                b.keyCode == 27 && a.mask.close(b)
            }
            ),
            j.closeOnClick && e.bind("click.mask", function(b) {
                a.mask.close(b)
            }
            ),
            a(window).bind("resize.mask", function() {
                a.mask.fit()
            }
            ),
            k && k.length && (i = k.eq(0).css("zIndex"),
            a.each(k, function() {
                var b = a(this);
                /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
            }
            ),
            f = k.css({
                zIndex: Math.max(j.zIndex + 1, i == "auto" ? 0 : i)
            })),
            e.css({
                display: "block"
            }).fadeTo(j.loadSpeed, j.opacity, function() {
                a.mask.fit(),
                d(j.onLoad),
                g = "full"
            }
            ),
            g = !0,
            this)
        },
        close: function() {
            if (g) {
                if (d(h.onBeforeClose) === !1)
                    return this;
                e.fadeOut(h.closeSpeed, function() {
                    d(h.onClose),
                    f && f.css({
                        zIndex: i
                    }),
                    g = !1
                }
                ),
                a(document).unbind("keydown.mask"),
                e.unbind("click.mask"),
                a(window).unbind("resize.mask")
            }
            return this
        },
        fit: function() {
            if (g) {
                var a = c();
                e.css({
                    width: a[0],
                    height: a[1]
                })
            }
        },
        getMask: function() {
            return e
        },
        isLoaded: function(a) {
            return a ? g == "full" : g
        },
        getConf: function() {
            return h
        },
        getExposed: function() {
            return f
        }
    },
    a.fn.mask = function(b) {
        return a.mask.load(b),
        this
    }
    ,
    a.fn.expose = function(b) {
        return a.mask.load(b, this),
        this
    }
}
(jQuery),
function() {
    function f(a, b) {
        if (b)
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    function g(a, b) {
        var c = [];
        for (var d in a)
            a.hasOwnProperty(d) && (c[d] = b(a[d]));
        return c
    }
    function j(c, d, e) {
        if (h.isSupported(d.version))
            c.innerHTML = h.getHTML(d, e);
        else if (d.expressInstall && h.isSupported([6, 65]))
            c.innerHTML = h.getHTML(f(d, {
                src: d.expressInstall
            }), {
                MMredirectURL: location.href,
                MMplayerType: "PlugIn",
                MMdoctitle: document.title
            });
        else {
            c.innerHTML.replace(/\s/g, "") || (c.innerHTML = "<h2>Flash version " + d.version + " or greater is required</h2>" + "<h3>" + (i[0] > 0 ? "Your version is " + i : "You have no flash plugin installed") + "</h3>" + (c.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + b + "'>here</a></p>"),
            c.tagName == "A" && (c.onclick = function() {
                location.href = b
            }
            ));
            if (d.onFail) {
                var g = d.onFail.call(this);
                typeof g == "string" && (c.innerHTML = g)
            }
        }
        a && (window[d.id] = document.getElementById(d.id)),
        f(this, {
            getRoot: function() {
                return c
            },
            getOptions: function() {
                return d
            },
            getConf: function() {
                return e
            },
            getApi: function() {
                return c.firstChild
            }
        })
    }
    var a = document.all
      , b = "http://www.adobe.com/go/getflashplayer"
      , c = typeof jQuery == "function"
      , d = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/
      , e = {
        width: "100%",
        height: "100%",
        id: "_" + ("" + Math.random()).slice(9),
        allowfullscreen: !0,
        allowscriptaccess: "always",
        quality: "high",
        version: [3, 0],
        onFail: null ,
        expressInstall: null ,
        w3c: !1,
        cachebusting: !1
    };
    window.attachEvent && window.attachEvent("onbeforeunload", function() {
        __flash_unloadHandler = function() {}
        ,
        __flash_savedUnloadHandler = function() {}
    }
    ),
    window.flashembed = function(a, b, c) {
        typeof a == "string" && (a = document.getElementById(a.replace("#", "")));
        if (!a)
            return;
        return typeof b == "string" && (b = {
            src: b
        }),
        new j(a,f(f({}, e), b),c)
    }
    ;
    var h = f(window.flashembed, {
        conf: e,
        getVersion: function() {
            var a, b;
            try {
                b = navigator.plugins["Shockwave Flash"].description.slice(16)
            } catch (c) {
                try {
                    a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                    b = a && a.GetVariable("$version")
                } catch (e) {
                    try {
                        a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                        b = a && a.GetVariable("$version")
                    } catch (f) {}
                }
            }
            return b = d.exec(b),
            b ? [b[1], b[3]] : [0, 0]
        },
        asString: function(a) {
            if (a === null  || a === undefined)
                return null ;
            var b = typeof a;
            b == "object" && a.push && (b = "array");
            switch (b) {
            case "string":
                return a = a.replace(new RegExp('(["\\\\])',"g"), "\\$1"),
                a = a.replace(/^\s?(\d+\.?\d*)%/, "$1pct"),
                '"' + a + '"';
            case "array":
                return "[" + g(a, function(a) {
                    return h.asString(a)
                }
                ).join(",") + "]";
            case "function":
                return '"function()"';
            case "object":
                var c = [];
                for (var d in a)
                    a.hasOwnProperty(d) && c.push('"' + d + '":' + h.asString(a[d]));
                return "{" + c.join(",") + "}"
            }
            return String(a).replace(/\s/g, " ").replace(/\'/g, '"')
        },
        getHTML: function(b, c) {
            b = f({}, b);
            var d = '<object width="' + b.width + '" height="' + b.height + '" id="' + b.id + '" name="' + b.id + '"';
            b.cachebusting && (b.src += (b.src.indexOf("?") != -1 ? "&" : "?") + Math.random()),
            b.w3c || !a ? d += ' data="' + b.src + '" type="application/x-shockwave-flash"' : d += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
            d += ">";
            if (b.w3c || a)
                d += '<param name="movie" value="' + b.src + '" />';
            b.width = b.height = b.id = b.w3c = b.src = null ,
            b.onFail = b.version = b.expressInstall = null ;
            for (var e in b)
                b[e] && (d += '<param name="' + e + '" value="' + b[e] + '" />');
            var g = "";
            if (c) {
                for (var i in c)
                    if (c[i]) {
                        var j = c[i];
                        g += i + "=" + encodeURIComponent(/function|object/.test(typeof j) ? h.asString(j) : j) + "&"
                    }
                g = g.slice(0, -1),
                d += '<param name="flashvars" value=\'' + g + "' />"
            }
            return d += "</object>",
            d
        },
        isSupported: function(a) {
            return i[0] > a[0] || i[0] == a[0] && i[1] >= a[1]
        }
    })
      , i = h.getVersion();
    c && (jQuery.tools = jQuery.tools || {
        version: "1.2.6"
    },
    jQuery.tools.flashembed = {
        conf: e
    },
    jQuery.fn.flashembed = function(a, b) {
        return this.each
        (function() {
            jQuery(this).data("flashembed", flashembed(this, a, b))
        }
        )
    }
    )
}
(),
function(a) {
    function f(a) {
        if (a) {
            var b = c.contentWindow.document;
            b.open().close(),
            b.location.hash = a
        }
    }
    var b, c, d, e;
    a.tools = a.tools || {
        version: "1.2.6"
    },
    a.tools.history = {
        init: function(g) {
            if (e)
                return;
            a.browser.msie && a.browser.version < "8" ? c || (c = a("<iframe/>").attr("src", "javascript:false;").hide().get(0),
            a("body").prepend(c),
            setInterval(function() {
                var d = c.contentWindow.document
                  , e = d.location.hash;
                b !== e && a(window).trigger("hash", e)
            }
            , 100),
            f(location.hash || "#")) : setInterval(function() {
                var c = location.hash;
                c !== b && a(window).trigger("hash", c)
            }
            , 100),
            d = d ? d.add(g) : g,
            g.click(function(b) {
                var d = a(this).attr("href");
                c && f(d);
                if (d.slice(0, 1) != "#")
                    return location.href = "#" + d,
                    b.preventDefault()
            }
            ),
            e = !0
        }
    },
    a(window).bind("hash", function(c, e) {
        e ? d.filter(function() {
            var b = a(this).attr("href");
            return b == e || b == e.replace("#", "")
        }
        ).trigger("history", [e]) : d.eq(0).trigger("history", [e]),
        b = e
    }
    ),
    a.fn.history = function(b) {
        return a.tools.history.init(this),
        this.bind("history", b)
    }
}
(jQuery),
function(a) {
    function c(b) {
        switch (b.type) {
        case "mousemove":
            return a.extend(b.data, {
                clientX: b.clientX,
                clientY: b.clientY,
                pageX: b.pageX,
                pageY: b.pageY
            });
        case "DOMMouseScroll":
            a.extend(b, b.data),
            b.delta = -b.detail / 3;
            break;
        case "mousewheel":
            b.delta = b.wheelDelta / 120
        }
        return b.type = "wheel",
        a.event.handle.call(this, b, b.delta)
    }
    a.fn.mousewheel = function(a) {
        return this[a ? "bind" : "trigger"]("wheel", a)
    }
    ,
    a.event.special.wheel = {
        setup: function() {
            a.event.add(this, b, c, {})
        },
        teardown: function() {
            a.event.remove(this, b, c)
        }
    };
    var b = a.browser.mozilla ? "DOMMouseScroll" + (a.browser.version < "1.9" ? " mousemove" : "") : "mousewheel"
}
(jQuery),
function(a) {
    function c(b, c, d) {
        var e = d.relative ? b.position().top : b.offset().top
          , f = d.relative ? b.position().left : b.offset().left
          , g = d.position[0];
        e -= c.outerHeight() - d.offset[0],
        f += b.outerWidth() + d.offset[1],
        /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var h = c.outerHeight() + b.outerHeight();
        g == "center" && (e += h / 2),
        g == "bottom" && (e += h),
        g = d.position[1];
        var i = c.outerWidth() + b.outerWidth();
        return g == "center" && (f -= i / 2),
        g == "left" && (f -= i),
        {
            top: e,
            left: f
        }
    }
    function d(d, e) {
        var f = this, g = d.add(f), h, i = 0, j = 0, k = d.attr("title"), l = d.attr("data-tooltip"), m = b[e.effect], n, o = d.is(":input"), p = o && d.is(":checkbox, :radio, select, :button, :submit"), q = d.attr("type"), r = e.events[q] || e.events[o ? p ? "widget" : "input" : "def"];
        if (!m)
            throw 'Nonexistent effect "' + e.effect + '"';
        r = r.split(/,\s*/);
        if (r.length != 2)
            throw "Tooltip: bad events configuration for " + q;
        d.bind(r[0], function(a) {
            clearTimeout(i),
            e.predelay ? j = setTimeout(function() {
                f.show(a)
            }
            , e.predelay) : f.show(a)
        }
        ).bind(r[1], function(a) {
            clearTimeout(j),
            e.delay ? i = setTimeout(function() {
                f.hide(a)
            }
            , e.delay) : f.hide(a)
        }
        ),
        k && e.cancelDefault && (d.removeAttr("title"),
        d.data("title", k)),
        a.extend(f, {
            show: function(b) {
                if (!h) {
                    l ? h = a(l) : e.tip ? h = a(e.tip).eq(0) : k ? h = a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k) : (h = d.next(),
                    h.length || (h = d.parent().next()));
                    if (!h.length)
                        throw "Cannot find tooltip for " + d
                }
                if (f.isShown())
                    return f;
                h.stop(!0, !0);
                var o = c(d, h, e);
                e.tip && h.html(d.data("title")),
                b = a.Event(),
                b.type = "onBeforeShow",
                g.trigger(b, [o]);
                if (b.isDefaultPrevented())
                    return f;
                o = c(d, h, e),
                h.css({
                    position: "absolute",
                    top: o.top,
                    left: o.left
                }),
                n = !0,
                m[0].call(f, function() {
                    b.type = "onShow",
                    n = "full",
                    g.trigger(b)
                }
                );
                var p = e.events.tooltip.split(/,\s*/);
                return h.data("__set") || (h.unbind(p[0]).bind(p[0], function() {
                    clearTimeout(i),
                    clearTimeout(j)
                }
                ),
                p[1] && !d.is("input:not(:checkbox, :radio), textarea") && h.unbind(p[1]).bind(p[1], function(a) {
                    a.relatedTarget != d[0] && d.trigger(r[1].split(" ")[0])
                }
                ),
                e.tip || h.data("__set", !0)),
                f
            },
            hide: function(c) {
                if (!h || !f.isShown())
                    return f;
                c = a.Event(),
                c.type = "onBeforeHide",
                g.trigger(c);
                if (c.isDefaultPrevented())
                    return;
                return n = !1,
                b[e.effect][1].call(f, function() {
                    c.type = "onHide",
                    g.trigger(c)
                }
                ),
                f
            },
            isShown: function(a) {
                return a ? n == "full" : n
            },
            getConf: function() {
                return e
            },
            getTip: function() {
                return h
            },
            getTrigger: function() {
                return d
            }
        }),
        a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]),
            f[c] = function(b) {
                return b && a(f).bind(c, b),
                f
            }
        }
        )
    }
    a.tools = a.tools || {
        version: "1.2.6"
    },
    a.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            fadeIE: !1,
            position: ["top", "center"],
            offset: [0, 0],
            relative: !1,
            cancelDefault: !0,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function(a, c, d) {
            b[a] = [c, d]
        }
    };
    var b = {
        toggle: [function(a) {
            var b = this.getConf()
              , c = this.getTip()
              , d = b.opacity;
            d < 1 && c.css({
                opacity: d
            }),
            c.show(),
            a.call()
        }
        , function(a) {
            this.getTip().hide(),
            a.call()
        }
        ],
        fade: [function(b) {
            var c = this.getConf();
            !a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, b) : (this.getTip().show(),
            b())
        }
        , function(b) {
            var c = this.getConf();
            !a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, b) : (this.getTip().hide(),
            b())
        }
        ]
    };
    a.fn.tooltip = function(b) {
        var c = this.data("tooltip");
        return c ? c : (b = a.extend(!0, {}, a.tools.tooltip.conf, b),
        typeof b.position == "string" && (b.position = b.position.split(/,?\s/)),
        this.each(function() {
            c = new d(a(this),b),
            a(this).data("tooltip", c)
        }
        ),
        b.api ? c : this)
    }
}
(jQuery),
function(a) {
    function c(b) {
        var c = a(window)
          , d = c.width() + c.scrollLeft()
          , e = c.height() + c.scrollTop();
        return [b.offset().top <= c.scrollTop(), d <= b.offset().left + b.width(), e <= b.offset().top + b.height(), c.scrollLeft() >= b.offset().left]
    }
    function d(a) {
        var b = a.length;
        while (b--)
            if (a[b])
                return !1;
        return !0
    }
    var b = a.tools.tooltip;
    b.dynamic = {
        conf: {
            classNames: "top right bottom left"
        }
    },
    a.fn.dynamic = function(e) {
        typeof e == "number" && (e = {
            speed: e
        }),
        e = a.extend({}, b.dynamic.conf, e);
        var f = a.extend(!0, {}, e), g = e.classNames.split(/\s/), h;
        return this.each(function() {
            var b = a(this).tooltip().onBeforeShow(function(b, e) {
                var i = this.getTip()
                  , j = this.getConf();
                h || (h = [j.position[0], j.position[1], j.offset[0], j.offset[1], a.extend({}, j)]),
                a.extend(j, h[4]),
                j.position = [h[0], h[1]],
                j.offset = [h[2], h[3]],
                i.css({
                    visibility: "hidden",
                    position: "absolute",
                    top: e.top,
                    left: e.left
                }).show();
                var k = a.extend(!0, {}, f)
                  , l = c(i);
                if (!d(l)) {
                    l[2] && (a.extend(j, k.top),
                    j.position[0] = "top",
                    i.addClass(g[0])),
                    l[3] && (a.extend(j, k.right),
                    j.position[1] = "right",
                    i.addClass(g[1])),
                    l[0] && (a.extend(j, k.bottom),
                    j.position[0] = "bottom",
                    i.addClass(g[2])),
                    l[1] && (a.extend(j, k.left),
                    j.position[1] = "left",
                    i.addClass(g[3]));
                    if (l[0] || l[2])
                        j.offset[0] *= -1;
                    if (l[1] || l[3])
                        j.offset[1] *= -1
                }
                i.css({
                    visibility: "visible"
                }).hide()
            }
            );
            b.onBeforeShow(function() {
                var a = this.getConf()
                  , b = this.getTip();
                setTimeout(function() {
                    a.position = [h[0], h[1]],
                    a.offset = [h[2], h[3]]
                }
                , 0)
            }
            ),
            b.onHide(function() {
                var a = this.getTip();
                a.removeClass(e.classNames)
            }
            ),
            ret = b
        }
        ),
        e.api ? ret : this
    }
}
(jQuery),
function(a) {
    var b = a.tools.tooltip;
    a.extend(b.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !a.browser.msie
    });
    var c = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    b.addEffect("slide", function(a) {
        var b = this.getConf()
          , d = this.getTip()
          , e = b.slideFade ? {
            opacity: b.opacity
        } : {}
          , f = c[b.direction] || c.up;
        e[f[1]] = f[0] + "=" + b.slideOffset,
        b.slideFade && d.css({
            opacity: 0
        }),
        d.show().animate(e, b.slideInSpeed, a)
    }
    , function(b) {
        var d = this.getConf()
          , e = d.slideOffset
          , f = d.slideFade ? {
            opacity: 0
        } : {}
          , g = c[d.direction] || c.up
          , h = "" + g[0];
        d.bounce && (h = h == "+" ? "-" : "+"),
        f[g[1]] = h + "=" + e,
        this.getTip().animate(f, d.slideOutSpeed, function() {
            a(this).hide(),
            b.call()
        }
        )
    }
    )
}
(jQuery),
function(a) {
    function h(b, c, d) {
        var e = b.offset().top
          , f = b.offset().left
          , g = d.position.split(/,?\s+/)
          , h = g[0]
          , i = g[1];
        e -= c.outerHeight() - d.offset[0],
        f += b.outerWidth() + d.offset[1],
        /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var j = c.outerHeight() + b.outerHeight();
        h == "center" && (e += j / 2),
        h == "bottom" && (e += j);
        var k = b.outerWidth();
        return i == "center" && (f -= (k + c.outerWidth()) / 2),
        i == "left" && (f -= k),
        {
            top: e,
            left: f
        }
    }
    function i(a) {
        function b() {
            return this.getAttribute("type") == a
        }
        return b.key = "[type=" + a + "]",
        b
    }
    function l(b, c, e) {
        function l(b, c, d) {
            if (!e.grouped && b.length)
                return;
            var f;
            if (d === !1 || a.isArray(d)) {
                f = g.messages[c.key || c] || g.messages["*"],
                f = f[e.lang] || g.messages["*"].en;
                var h = f.match(/\$\d/g);
                h && a.isArray(d) && a.each(h, function(a) {
                    f = f.replace(this, d[a])
                }
                )
            } else
                f = d[e.lang] || d;
            b.push(f)
        }
        var f = this
          , i = c.add(f);
        b = b.not(":button, :image, :reset, :submit"),
        c.attr("novalidate", "novalidate"),
        a.extend(f, {
            getConf: function() {
                return e
            },
            getForm: function() {
                return c
            },
            getInputs: function() {
                return b
            },
            reflow: function() {
                return b.each(function() {
                    var b = a(this)
                      , c = b.data("msg.el");
                    if (c) {
                        var d = h(b, c, e);
                        c.css({
                            top: d.top,
                            left: d.left
                        })
                    }
                }
                ),
                f
            },
            invalidate: function(c, d) {
                if (!d) {
                    var g = [];
                    a.each(c, function(a, c) {
                        var d = b.filter("[name='" + a + "']");
                        d.length && (d.trigger("OI", [c]),
                        g.push({
                            input: d,
                            messages: [c]
                        }))
                    }
                    ),
                    c = g,
                    d = a.Event()
                }
                return d.type = "onFail",
                i.trigger(d, [c]),
                d.isDefaultPrevented() || k[e.effect][0].call(f, c, d),
                f
            },
            reset: function(c) {
                return c = c || b,
                c.removeClass(e.errorClass).each(function() {
                    var b = a(this).data("msg.el");
                    b && (b.remove(),
                    a(this).data("msg.el", null ))
                }
                ).unbind(e.errorInputEvent || ""),
                f
            },
            destroy: function() {
                return c.unbind(e.formEvent + ".V").unbind("reset.V"),
                b.unbind(e.inputEvent + ".V").unbind("change.V"),
                f.reset()
            },
            checkValidity: function(c, g) {
                c = c || b,
                c = c.not(":disabled");
                if (!c.length)
                    return !0;
                g = g || a.Event(),
                g.type = "onBeforeValidate",
                i.trigger(g, [c]);
                if (g.isDefaultPrevented())
                    return g.result;
                var h = [];
                c.not(":radio:not(:checked)").each(function() {
                    var b = []
                      , c = a(this).data("messages", b)
                      , k = d && c.is(":date") ? "onHide.v" : e.errorInputEvent + ".v";
                    c.unbind(k),
                    a.each(j, function() {
                        var a = this
                          , d = a[0];
                        if (c.filter(d).length) {
                            var h = a[1].call(f, c, c.val());
                            if (h !== !0) {
                                g.type = "onBeforeFail",
                                i.trigger(g, [c, d]);
                                if (g.isDefaultPrevented())
                                    return !1;
                                var j = c.attr(e.messageAttr);
                                if (j)
                                    return b = [j],
                                    !1;
                                l(b, d, h)
                            }
                        }
                    }
                    ),
                    b.length && (h.push({
                        input: c,
                        messages: b
                    }),
                    c.trigger("OI", [b]),
                    e.errorInputEvent && c.bind(k, function(a) {
                        f.checkValidity(c, a)
                    }
                    ));
                    if (e.singleError && h.length)
                        return !1
                }
                );
                var m = k[e.effect];
                if (!m)
                    throw 'Validator: cannot find effect "' + e.effect + '"';
                return h.length ? (f.invalidate(h, g),
                !1) : (m[1].call(f, c, g),
                g.type = "onSuccess",
                i.trigger(g, [c]),
                c.unbind(e.errorInputEvent + ".v"),
                !0)
            }
        }),
        a.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).bind(c, e[c]),
            f[c] = function(b) {
                return b && a(f).bind(c, b),
                f
            }
        }
        ),
        e.formEvent && c.bind(e.formEvent + ".V", function(a) {
            if (!f.checkValidity(null , a))
                return a.preventDefault();
            a.target = c,
            a.type = e.formEvent
        }
        ),
        c.bind("reset.V", function() {
            f.reset()
        }
        ),
        b[0] && b[0].validity && b.each(function() {
            this.oninvalid = function() {
                return !1
            }
        }
        ),
        c[0] && (c[0].checkValidity = f.checkValidity),
        e.inputEvent && b.bind(e.inputEvent + ".V", function(b) {
            f.checkValidity(a(this), b)
        }
        ),
        b.filter(":checkbox, select").filter("[required]").bind("change.V", function(b) {
            var c = a(this);
            (this.checked || c.is("select") && a(this).val()) && k[e.effect][1].call(f, c, b)
        }
        );
        var m = b.filter(":radio").change(function(a) {
            f.checkValidity(m, a)
        }
        );
        a(window).resize(function() {
            f.reflow()
        }
        )
    }
    a.tools = a.tools || {
        version: "1.2.6"
    };
    var b = /\[type=([a-z]+)\]/, c = /^-?[0-9]*(\.[0-9]+)?$/, d = a.tools.dateinput, e = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i, f = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i, g;
    g = a.tools.validator = {
        conf: {
            grouped: !1,
            effect: "default",
            errorClass: "invalid",
            inputEvent: null ,
            errorInputEvent: "keyup",
            formEvent: "submit",
            lang: "en",
            message: "<div/>",
            messageAttr: "data-message",
            messageClass: "error",
            offset: [0, 0],
            position: "center right",
            singleError: !1,
            speed: "normal"
        },
        messages: {
            "*": {
                en: "Please correct this value"
            }
        },
        localize: function(b, c) {
            a.each(c, function(a, c) {
                g.messages[a] = g.messages[a] || {},
                g.messages[a][b] = c
            }
            )
        },
        localizeFn: function(b, c) {
            g.messages[b] = g.messages[b] || {},
            a.extend(g.messages[b], c)
        },
        fn: function(c, d, e) {
            a.isFunction(d) ? e = d : (typeof d == "string" && (d = {
                en: d
            }),
            this.messages[c.key || c] = d);
            var f = b.exec(c);
            f && (c = i(f[1])),
            j.push([c, e])
        },
        addEffect: function(a, b, c) {
            k[a] = [b, c]
        }
    };
    var j = []
      , k = {
        "default": [function(b) {
            var c = this.getConf();
            a.each(b, function(b, d) {
                var e = d.input;
                e.addClass(c.errorClass);
                var f = e.data("msg.el");
                f || (f = a(c.message).addClass(c.messageClass).appendTo(document.body),
                e.data("msg.el", f)),
                f.css({
                    visibility: "hidden"
                }).find("p").remove(),
                a.each(d.messages, function(b, c) {
                    a("<p/>").html(c).appendTo(f)
                }
                ),
                f.outerWidth() == f.parent().width() && f.add(f.find("p")).css({
                    display: "inline"
                });
                var g = h(e, f, c);
                f.css({
                    visibility: "visible",
                    position: "absolute",
                    top: g.top,
                    left: g.left
                }).fadeIn(c.speed)
            }
            )
        }
        , function(b) {
            var c = this.getConf();
            b.removeClass(c.errorClass).each(function() {
                var b = a(this).data("msg.el");
                b && b.css({
                    visibility: "hidden"
                })
            }
            )
        }
        ]
    };
    a.each("email,url,number".split(","), function(b, c) {
        a.expr[":"][c] = function(a) {
            return a.getAttribute("type") === c
        }
    }
    ),
    a.fn.oninvalid = function(a) {
        return this[a ? "bind" : "trigger"]("OI", a)
    }
    ,
    g.fn(":email", "Please enter a valid email address", function(a, b) {
        return !b || e.test(b)
    }
    ),
    g.fn(":url", "Please enter a valid URL", function(a, b) {
        return !b || f.test(b)
    }
    ),
    g.fn(":number", "Please enter a numeric value.", function(a, b) {
        return c.test(b)
    }
    ),
    g.fn("[max]", "Please enter a value no larger than $1", function(a, b) {
        if (b === "" || d && a.is(":date"))
            return !0;
        var c = a.attr("max");
        return parseFloat(b) <= parseFloat(c) ? !0 : [c]
    }
    ),
    g.fn("[min]", "Please enter a value of at least $1", function(a, b) {
        if (b === "" || d && a.is(":date"))
            return !0;
        var c = a.attr("min");
        return parseFloat(b) >= parseFloat(c) ? !0 : [c]
    }
    ),
    g.fn("[required]", "Please complete this mandatory field.", function(a, b) {
        return a.is(":checkbox") ? a.is(":checked") : !!b
    }
    ),
    g.fn("[pattern]", function(a) {
        var b = new RegExp("^" + a.attr("pattern") + "$");
        return b.test(a.val())
    }
    ),
    a.fn.validator = function(b) {
        var c = this.data("validator");
        return c && (c.destroy(),
        this.removeData("validator")),
        b = a.extend(!0, {}, g.conf, b),
        this.is("form") ? this.each(function() {
            var d = a(this);
            c = new l(d.find(":input"),d,b),
            d.data("validator", c)
        }
        ) : (c = new l(this,this.eq(0).closest("form"),b),
        this.data("validator", c))
    }
}
(jQuery)

/* Fix conflict with jquery UI which the CMS console is using. Use .jtabs() instead of .tabs() */
var oldTabs = $.fn.tabs;
delete $.fn.tabs;
$.fn.jTabs = oldTabs;

var oldToolTips = $.fn.tooltip;
delete $.fn.tooltip;
$.fn.jTooltip = oldToolTips;


/*! Magnific Popup - v0.9.9 - 2014-09-06
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */
(function(e) {
    var t, n, i, o, r, a, s, l = "Close", c = "BeforeClose", d = "AfterClose", u = "BeforeAppend", p = "MarkupParse", f = "Open", m = "Change", g = "mfp", h = "." + g, v = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close", w = function() {}
    , b = !!window.jQuery, I = e(window), x = function(e, n) {
        t.ev.on(g + e + h, n)
    }
    , k = function(t, n, i, o) {
        var r = document.createElement("div");
        return r.className = "mfp-" + t,
        i && (r.innerHTML = i),
        o ? n && n.appendChild(r) : (r = e(r),
        n && r.appendTo(n)),
        r
    }
    , T = function(n, i) {
        t.ev.triggerHandler(g + n, i),
        t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1),
        t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
    }
    , E = function(n) {
        return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        s = n),
        t.currTemplate.closeBtn
    }
    , _ = function() {
        e.magnificPopup.instance || (t = new w,
        t.init(),
        e.magnificPopup.instance = t)
    }
    , S = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition" in e)
                return !0;
        return !1
    }
    ;
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."),
            t.isIE8 = -1 !== n.indexOf("MSIE 8."),
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = S(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            o = e(document),
            t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(),
                t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r],
                    s.parsed && (s = s.el[0]),
                    s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else
                t.items = e.isArray(n.items) ? n.items : [n.items],
                t.index = n.index || 0;
            if (t.isOpen)
                return t.updateItemHTML(),
                void 0;
            t.types = [],
            a = "",
            t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o,
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
            t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }
            ),
            t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }
            ),
            t.container = k("container", t.wrap)),
            t.contentContainer = k("content"),
            t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1),
                t["init" + d].call(t)
            }
            T("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }
            ),
            a += " mfp-close-btn-in") : t.wrap.append(E())),
            t.st.alignTop && (a += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }
            ),
            I.on("resize" + h, function() {
                t.updateSize()
            }
            ),
            t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
            a && t.wrap.addClass(a);
            var u = t.wH = I.height()
              , m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"),
            C && t._addClassToMFP(C),
            t.updateItemHTML(),
            T("BuildControls"),
            e("html").css(m),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(v),
                t._setFocus()) : t.bgOverlay.addClass(v),
                o.on("focusin" + h, t._onFocusIn)
            }
            , 16),
            t.isOpen = !0,
            t.updateSize(u),
            T(f),
            n
        },
        close: function() {
            t.isOpen && (T(c),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C),
            setTimeout(function() {
                t._close()
            }
            , t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (n += t.st.mainClass + " "),
            t._removeClassFromMFP(n),
            t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "",
                e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h),
            t.ev.off(h),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null ,
            t.content = null ,
            t.currTemplate = null ,
            t.prevHeight = 0,
            T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth
                  , i = window.innerHeight * n;
                t.wrap.css("height", i),
                t.wH = i
            } else
                t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
            t.currItem = n,
            !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o),
                t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i),
            n.preloaded = !0,
            T(m, n),
            r = n.type,
            t.container.prepend(t.contentContainer),
            T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "",
            T(u),
            t.container.addClass("mfp-" + n + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type,
            o = {
                data: o,
                src: o.src
            }),
            o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"),
                o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline",
            o.index = n,
            o.parsed = !0,
            t.items[n] = o,
            T("ElementParse", o),
            t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this,
                t._openClick(i, e, n)
            }
            ;
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e,
            n.items ? (n.isObj = !0,
            e.off(o).on(o, i)) : (n.isObj = !1,
            n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e,
            e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t))
                            return !0
                    } else if (a > I.width())
                        return !0;
                n.type && (n.preventDefault(),
                t.isOpen && n.stopPropagation()),
                o.el = e(n.mfpEl),
                o.delegate && (o.items = i.find(o.delegate)),
                t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o),
                e = o.status,
                i = o.text,
                t.preloader.html(i),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }
                ),
                t.container.addClass("mfp-s-" + e),
                n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick
                  , o = t.st.closeOnBgClick;
                if (i && o)
                    return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0])
                    return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i)
                        return !0
                } else if (o && e.contains(document, n))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(),
            !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)),
            T(p, [t, n, i]),
            e.each(n, function(e, n) {
                if (void 0 === n || n === !1)
                    return !0;
                if (o = e.split("_"),
                o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else
                    t.find(h + "-" + e).html(n)
            }
            )
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null ,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = n || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null ,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null ,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i,
                r.delegate && (o = o.find(r.delegate)),
                o = o.eq(a)),
                t._openClick({
                    mfpEl: o
                }, i, r)
            } else
                t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            n = e.extend(!0, {}, n),
            b ? i.data("magnificPopup", n) : i[0].magnificPopup = n,
            t.addGroup(i, n);
        return i
    }
    ;
    var P, O, z, M = "inline", B = function() {
        z && (O.after(z.addClass(P)).detach(),
        z = null )
    }
    ;
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M),
                x(l + "." + M, function() {
                    B()
                }
                )
            },
            getInline: function(n, i) {
                if (B(),
                n.src) {
                    var o = t.st.inline
                      , r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass,
                        O = k(P),
                        P = "mfp-" + P),
                        z = r.after(O).detach().removeClass(P)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", o.tNotFound),
                        r = e("<div>");
                    return n.inlineElement = r,
                    r
                }
                return t.updateStatus("ready"),
                t._parseMarkup(i, {}, n),
                i
            }
        }
    });
    var F, H = "ajax", L = function() {
        F && i.removeClass(F)
    }
    , A = function() {
        L(),
        t.req && t.req.abort()
    }
    ;
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null ,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H),
                F = t.st.ajax.cursor,
                x(l + "." + H, A),
                x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F),
                t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a),
                        t.appendContent(e(a.data), H),
                        n.finished = !0,
                        L(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(v)
                        }
                        , 16),
                        t.updateStatus("ready"),
                        T("AjaxContentAdded")
                    },
                    error: function() {
                        L(),
                        n.finished = n.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o),
                ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title)
            return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i))
                return i.call(t, n);
            if (n.el)
                return n.el.attr(i) || ""
        }
        return ""
    }
    ;
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image
                  , n = ".image";
                t.types.push("image"),
                x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }
                ),
                x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor),
                    I.off("resize" + h)
                }
                ),
                x("Resize" + n, t.resizeImage),
                t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                j && clearInterval(j),
                e.isCheckingImgSize = !1,
                T("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0
                  , i = e.img[0]
                  , o = function(r) {
                    j && clearInterval(j),
                    j = setInterval(function() {
                        return i.naturalWidth > 0 ? (t._onImageHasSize(e),
                        void 0) : (n > 200 && clearInterval(j),
                        n++,
                        3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500),
                        void 0)
                    }
                    , r)
                }
                ;
                o(1)
            },
            getImage: function(n, i) {
                var o = 0
                  , r = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("ready")),
                    n.hasSize = !0,
                    n.loaded = !0,
                    T("ImageLoadComplete")) : (o++,
                    200 > o ? setTimeout(r, 100) : a()))
                }
                  , a = function() {
                    n && (n.img.off(".mfploader"),
                    n === t.currItem && (t._onImageHasSize(n),
                    t.updateStatus("error", s.tError.replace("%url%", n.src))),
                    n.hasSize = !0,
                    n.loaded = !0,
                    n.loadError = !0)
                }
                  , s = t.st.image
                  , l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    n.img = e(c).on("load.mfploader", r).on("error.mfploader", a),
                    c.src = n.src,
                    l.is("img") && (n.img = n.img.clone()),
                    c = n.img[0],
                    c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n),
                t.resizeImage(),
                n.hasSize ? (j && clearInterval(j),
                n.loadError ? (i.addClass("mfp-loading"),
                t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                i) : (t.updateStatus("loading"),
                n.loading = !0,
                n.hasSize || (n.imgHidden = !0,
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
                i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform),
        W
    }
    ;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom, i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration, s = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , i = "all " + n.duration / 1e3 + "s " + n.easing
                          , o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , r = "transition";
                        return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i,
                        t.css(o),
                        t
                    }
                    , d = function() {
                        t.content.css("visibility", "visible")
                    }
                    ;
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return d(),
                                void 0;
                            r = s(e),
                            r.css(t._getOffset()),
                            t.wrap.append(r),
                            o = setTimeout(function() {
                                r.css(t._getOffset(!0)),
                                o = setTimeout(function() {
                                    d(),
                                    setTimeout(function() {
                                        r.remove(),
                                        e = r = null ,
                                        T("ZoomAnimationEnded")
                                    }
                                    , 16)
                                }
                                , a)
                            }
                            , 16)
                        }
                    }
                    ),
                    x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o),
                            t.st.removalDelay = a,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)),
                            t.wrap.append(r),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                r.css(t._getOffset())
                            }
                            , 16)
                        }
                    }
                    ),
                    x(l + i, function() {
                        t._allowZoom() && (d(),
                        r && r.remove(),
                        e = null )
                    }
                    )
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset()
                  , r = parseInt(i.css("padding-top"), 10)
                  , a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left,
                s.top = o.top),
                s
            }
        }
    });
    var Z = "iframe"
      , q = "//about:blank"
      , D = function(e) {
        if (t.currTemplate[Z]) {
            var n = t.currTemplate[Z].find("iframe");
            n.length && (e || (n[0].src = q),
            t.isIE8 && n.css("display", e ? "block" : "none"))
        }
    }
    ;
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1&amp;rel=0"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z),
                x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }
                ),
                x(l + "." + Z, function() {
                    D()
                }
                )
            },
            getIframe: function(n, i) {
                var o = n.src
                  , r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)),
                    o = this.src.replace("%id%", o),
                    !1) : void 0
                }
                );
                var a = {};
                return r.srcAction && (a[r.srcAction] = o),
                t._parseMarkup(i, a, n),
                t.updateStatus("ready"),
                i
            }
        }
    });
    var K = function(e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    }
      , Y = function(e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    }
    ;
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery
                  , i = ".mfp-gallery"
                  , r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0,
                n && n.enabled ? (a += " mfp-gallery",
                x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(),
                        !1) : void 0
                    }
                    ),
                    o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    }
                    )
                }
                ),
                x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }
                ),
                x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }
                ),
                x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup
                          , o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y)
                          , a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y)
                          , s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }
                        ),
                        a[s](function() {
                            t.next()
                        }
                        ),
                        t.isIE7 && (k("b", o[0], !1, !0),
                        k("a", o[0], !1, !0),
                        k("b", a[0], !1, !0),
                        k("a", a[0], !1, !0)),
                        t.container.append(o.add(a))
                    }
                }
                ),
                x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null 
                    }
                    , 16)
                }
                ),
                x(l + i, function() {
                    o.off(i),
                    t.wrap.off("click" + i),
                    t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                    t.arrowRight = t.arrowLeft = null 
                }
                ),
                void 0) : !1
            },
            next: function() {
                t.direction = !0,
                t.index = K(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = K(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload, i = Math.min(n[0], t.items.length), o = Math.min(n[1], t.items.length);
                for (e = 1; (t.direction ? o : i) >= e; e++)
                    t._preloadItem(t.index + e);
                for (e = 1; (t.direction ? i : o) >= e; e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n),
                !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                    T("LazyLoad", i),
                    "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }
                    ).on("error.mfploader", function() {
                        i.hasSize = !0,
                        i.loadError = !0,
                        T("LazyLoadError", i)
                    }
                    ).attr("src", i.src)),
                    i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                }
                )
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , n = e.ratio;
                    n = isNaN(n) ? n() : n,
                    n > 1 && (x("ImageHasSize." + U, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }
                    ),
                    x("ElementParse." + U, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }
                    ))
                }
            }
        }
    }),
    function() {
        var t = 1e3
          , n = "ontouchstart" in window
          , i = function() {
            I.off("touchmove" + r + " touchend" + r)
        }
          , o = "mfpFastClick"
          , r = "." + o;
        e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
                var a, s = e(this);
                if (n) {
                    var l, c, d, u, p, f;
                    s.on("touchstart" + r, function(e) {
                        u = !1,
                        f = 1,
                        p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        c = p.clientX,
                        d = p.clientY,
                        I.on("touchmove" + r, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches,
                            f = p.length,
                            p = p[0],
                            (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0,
                            i())
                        }
                        ).on("touchend" + r, function(e) {
                            i(),
                            u || f > 1 || (a = !0,
                            e.preventDefault(),
                            clearTimeout(l),
                            l = setTimeout(function() {
                                a = !1
                            }
                            , t),
                            o())
                        }
                        )
                    }
                    )
                }
                s.on("click" + r, function() {
                    a || o()
                }
                )
            }
            )
        }
        ,
        e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + r + " click" + r),
            n && I.off("touchmove" + r + " touchend" + r)
        }
    }
    (),
    _()
}
)(window.jQuery || window.Zepto);

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a) {
    a.flexslider = function(b, c) {
        var d = a(b);
        d.vars = a.extend({}, a.flexslider.defaults, c);
        var j, e = d.vars.namespace, f = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, g = ("ontouchstart" in window || f || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch, h = "click touchend MSPointerUp", i = "", k = "vertical" === d.vars.direction, l = d.vars.reverse, m = d.vars.itemWidth > 0, n = "fade" === d.vars.animation, o = "" !== d.vars.asNavFor, p = {}, q = !0;
        a.data(b, "flexslider", d),
        p = {
            init: function() {
                d.animating = !1,
                d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10),
                isNaN(d.currentSlide) && (d.currentSlide = 0),
                d.animatingTo = d.currentSlide,
                d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last,
                d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")),
                d.slides = a(d.vars.selector, d),
                d.container = a(d.containerSelector, d),
                d.count = d.slides.length,
                d.syncExists = a(d.vars.sync).length > 0,
                "slide" === d.vars.animation && (d.vars.animation = "swing"),
                d.prop = k ? "top" : "marginLeft",
                d.args = {},
                d.manualPause = !1,
                d.stopped = !1,
                d.started = !1,
                d.startTimeout = null ,
                d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
                    var a = document.createElement("div")
                      , b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return d.pfx = b[c].replace("Perspective", "").toLowerCase(),
                            d.prop = "-" + d.pfx + "-transform",
                            !0;
                    return !1
                }
                (),
                d.ensureAnimationEnd = "",
                "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)),
                "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)),
                d.vars.randomize && (d.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }
                ),
                d.container.empty().append(d.slides)),
                d.doMath(),
                d.setup("init"),
                d.vars.controlNav && p.controlNav.setup(),
                d.vars.directionNav && p.directionNav.setup(),
                d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
                    var b = a.keyCode;
                    if (!d.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                }
                ),
                d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
                    a.preventDefault();
                    var f = 0 > b ? d.getTarget("next") : d.getTarget("prev");
                    d.flexAnimate(f, d.vars.pauseOnAction)
                }
                ),
                d.vars.pausePlay && p.pausePlay.setup(),
                d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(),
                d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
                    d.manualPlay || d.manualPause || d.pause()
                }
                , function() {
                    d.manualPause || d.manualPlay || d.stopped || d.play()
                }
                ),
                d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())),
                o && p.asNav.setup(),
                g && d.vars.touch && p.touch(),
                (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize),
                d.find("img").attr("draggable", "false"),
                setTimeout(function() {
                    d.vars.start(d)
                }
                , 200)
            },
            asNav: {
                setup: function() {
                    d.asNav = !0,
                    d.animatingTo = Math.floor(d.currentSlide / d.move),
                    d.currentItem = d.currentSlide,
                    d.slides.removeClass(e + "active-slide").eq(d.currentItem).addClass(e + "active-slide"),
                    f ? (b._slider = d,
                    d.slides.each(function() {
                        var b = this;
                        b._gesture = new MSGesture,
                        b._gesture.target = b,
                        b.addEventListener("MSPointerDown", function(a) {
                            a.preventDefault(),
                            a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }
                        , !1),
                        b.addEventListener("MSGestureTap", function(b) {
                            b.preventDefault();
                            var c = a(this)
                              , e = c.index();
                            a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev",
                            d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
                        }
                        )
                    }
                    )) : d.slides.on(h, function(b) {
                        b.preventDefault();
                        var c = a(this)
                          , f = c.index()
                          , g = c.offset().left - a(d).scrollLeft();
                        0 >= g && c.hasClass(e + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(e + "active-slide") || (d.direction = d.currentItem < f ? "next" : "prev",
                        d.flexAnimate(f, d.vars.pauseOnAction, !1, !0, !0))
                    }
                    )
                }
            },
            controlNav: {
                setup: function() {
                    d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var f, g, b = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging", c = 1;
                    if (d.controlNavScaffold = a('<ol class="' + e + "control-nav " + e + b + '"></ol>'),
                    d.pagingCount > 1)
                        for (var j = 0; j < d.pagingCount; j++) {
                            if (g = d.slides.eq(j),
                            f = "thumbnails" === d.vars.controlNav ? '<img src="' + g.attr("data-thumb") + '"/>' : "<a>" + c + "</a>",
                            "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
                                var k = g.attr("data-thumbcaption");
                                "" != k && void 0 != k && (f += '<span class="' + e + 'caption">' + k + "</span>")
                            }
                            d.controlNavScaffold.append("<li>" + f + "</li>"),
                            c++
                        }
                    d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold),
                    p.controlNav.set(),
                    p.controlNav.active(),
                    d.controlNavScaffold.delegate("a, img", h, function(b) {
                        if (b.preventDefault(),
                        "" === i || i === b.type) {
                            var c = a(this)
                              , f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    }
                    )
                },
                setupManual: function() {
                    d.controlNav = d.manualControls,
                    p.controlNav.active(),
                    d.controlNav.bind(h, function(b) {
                        if (b.preventDefault(),
                        "" === i || i === b.type) {
                            var c = a(this)
                              , f = d.controlNav.index(c);
                            c.hasClass(e + "active") || (d.direction = f > d.currentSlide ? "next" : "prev",
                            d.flexAnimate(f, d.vars.pauseOnAction))
                        }
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    }
                    )
                },
                set: function() {
                    var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
                    d.controlNav = a("." + e + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                },
                active: function() {
                    d.controlNav.removeClass(e + "active").eq(d.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(),
                    p.controlNav.set(),
                    d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = a('<ul class="' + e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + d.vars.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
                    d.controlsContainer ? (a(d.controlsContainer).append(b),
                    d.directionNav = a("." + e + "direction-nav li a", d.controlsContainer)) : (d.append(b),
                    d.directionNav = a("." + e + "direction-nav li a", d)),
                    p.directionNav.update(),
                    d.directionNav.bind(h, function(b) {
                        b.preventDefault();
                        var c;
                        ("" === i || i === b.type) && (c = a(this).hasClass(e + "next") ? d.getTarget("next") : d.getTarget("prev"),
                        d.flexAnimate(c, d.vars.pauseOnAction)),
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    }
                    )
                },
                update: function() {
                    var a = e + "disabled";
                    1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + e + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + e + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var b = a('<div class="' + e + 'pauseplay"><a></a></div>');
                    d.controlsContainer ? (d.controlsContainer.append(b),
                    d.pausePlay = a("." + e + "pauseplay a", d.controlsContainer)) : (d.append(b),
                    d.pausePlay = a("." + e + "pauseplay a", d)),
                    p.pausePlay.update(d.vars.slideshow ? e + "pause" : e + "play"),
                    d.pausePlay.bind(h, function(b) {
                        b.preventDefault(),
                        ("" === i || i === b.type) && (a(this).hasClass(e + "pause") ? (d.manualPause = !0,
                        d.manualPlay = !1,
                        d.pause()) : (d.manualPause = !1,
                        d.manualPlay = !0,
                        d.play())),
                        "" === i && (i = b.type),
                        p.setToClearWatchedEvent()
                    }
                    )
                },
                update: function(a) {
                    "play" === a ? d.pausePlay.removeClass(e + "pause").addClass(e + "play").html(d.vars.playText) : d.pausePlay.removeClass(e + "play").addClass(e + "pause").html(d.vars.pauseText)
                }
            },
            touch: function() {
                function r(f) {
                    d.animating ? f.preventDefault() : (window.navigator.msPointerEnabled || 1 === f.touches.length) && (d.pause(),
                    g = k ? d.h : d.w,
                    i = Number(new Date),
                    o = f.touches[0].pageX,
                    p = f.touches[0].pageY,
                    e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g,
                    a = k ? p : o,
                    c = k ? o : p,
                    b.addEventListener("touchmove", s, !1),
                    b.addEventListener("touchend", t, !1))
                }
                function s(b) {
                    o = b.touches[0].pageX,
                    p = b.touches[0].pageY,
                    h = k ? a - p : a - o,
                    j = k ? Math.abs(h) < Math.abs(o - c) : Math.abs(h) < Math.abs(p - c);
                    var f = 500;
                    (!j || Number(new Date) - i > f) && (b.preventDefault(),
                    !n && d.transitions && (d.vars.animationLoop || (h /= 0 === d.currentSlide && 0 > h || d.currentSlide === d.last && h > 0 ? Math.abs(h) / g + 2 : 1),
                    d.setProps(e + h, "setTouch")))
                }
                function t() {
                    if (b.removeEventListener("touchmove", s, !1),
                    d.animatingTo === d.currentSlide && !j && null  !== h) {
                        var k = l ? -h : h
                          , m = k > 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.canAdvance(m) && (Number(new Date) - i < 550 && Math.abs(k) > 50 || Math.abs(k) > g / 2) ? d.flexAnimate(m, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                    }
                    b.removeEventListener("touchend", t, !1),
                    a = null ,
                    c = null ,
                    h = null ,
                    e = null 
                }
                function u(a) {
                    a.stopPropagation(),
                    d.animating ? a.preventDefault() : (d.pause(),
                    b._gesture.addPointer(a.pointerId),
                    q = 0,
                    g = k ? d.h : d.w,
                    i = Number(new Date),
                    e = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * g : (d.currentSlide + d.cloneOffset) * g)
                }
                function v(a) {
                    a.stopPropagation();
                    var c = a.target._slider;
                    if (c) {
                        var d = -a.translationX
                          , f = -a.translationY;
                        return q += k ? f : d,
                        h = q,
                        j = k ? Math.abs(q) < Math.abs(-d) : Math.abs(q) < Math.abs(-f),
                        a.detail === a.MSGESTURE_FLAG_INERTIA ? (setImmediate(function() {
                            b._gesture.stop()
                        }
                        ),
                        void 0) : ((!j || Number(new Date) - i > 500) && (a.preventDefault(),
                        !n && c.transitions && (c.vars.animationLoop || (h = q / (0 === c.currentSlide && 0 > q || c.currentSlide === c.last && q > 0 ? Math.abs(q) / g + 2 : 1)),
                        c.setProps(e + h, "setTouch"))),
                        void 0)
                    }
                }
                function w(b) {
                    b.stopPropagation();
                    var d = b.target._slider;
                    if (d) {
                        if (d.animatingTo === d.currentSlide && !j && null  !== h) {
                            var f = l ? -h : h
                              , k = f > 0 ? d.getTarget("next") : d.getTarget("prev");
                            d.canAdvance(k) && (Number(new Date) - i < 550 && Math.abs(f) > 50 || Math.abs(f) > g / 2) ? d.flexAnimate(k, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
                        }
                        a = null ,
                        c = null ,
                        h = null ,
                        e = null ,
                        q = 0
                    }
                }
                var a, c, e, g, h, i, j = !1, o = 0, p = 0, q = 0;
                f ? (b.style.msTouchAction = "none",
                b._gesture = new MSGesture,
                b._gesture.target = b,
                b.addEventListener("MSPointerDown", u, !1),
                b._slider = d,
                b.addEventListener("MSGestureChange", v, !1),
                b.addEventListener("MSGestureEnd", w, !1)) : b.addEventListener("touchstart", r, !1)
            },
            resize: function() {
                !d.animating && d.is(":visible") && (m || d.doMath(),
                n ? p.smoothHeight() : m ? (d.slides.width(d.computedW),
                d.update(d.pagingCount),
                d.setProps()) : k ? (d.viewport.height(d.h),
                d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(),
                d.newSlides.width(d.computedW),
                d.setProps(d.computedW, "setTotal")))
            },
            smoothHeight: function(a) {
                if (!k || n) {
                    var b = n ? d : d.viewport;
                    a ? b.animate({
                        height: d.slides.eq(d.animatingTo).height()
                    }, a) : b.height(d.slides.eq(d.animatingTo).height())
                }
            },
            sync: function(b) {
                var c = a(d.vars.sync).data("flexslider")
                  , e = d.animatingTo;
                switch (b) {
                case "animate":
                    c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    c.playing || c.asNav || c.play();
                    break;
                case "pause":
                    c.pause()
                }
            },
            uniqueID: function(b) {
                return b.find("[id]").each(function() {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }
                ),
                b
            },
            pauseInvisible: {
                visProp: null ,
                init: function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)
                        return "hidden";
                    for (var b = 0; b < a.length; b++)
                        a[b] + "Hidden" in document && (p.pauseInvisible.visProp = a[b] + "Hidden");
                    if (p.pauseInvisible.visProp) {
                        var c = p.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(c, function() {
                            p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
                        }
                        )
                    }
                },
                isHidden: function() {
                    return document[p.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(j),
                j = setTimeout(function() {
                    i = ""
                }
                , 3e3)
            }
        },
        d.flexAnimate = function(b, c, f, h, i) {
            if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"),
            o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"),
            !d.animating && (d.canAdvance(b, i) || f) && d.is(":visible")) {
                if (o && h) {
                    var j = a(d.vars.asNavFor).data("flexslider");
                    if (d.atEnd = 0 === b || b === d.count - 1,
                    j.flexAnimate(b, !0, !1, !0, i),
                    d.direction = d.currentItem < b ? "next" : "prev",
                    j.direction = d.direction,
                    Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b)
                        return d.currentItem = b,
                        d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                        !1;
                    d.currentItem = b,
                    d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                    b = Math.floor(b / d.visible)
                }
                if (d.animating = !0,
                d.animatingTo = b,
                c && d.pause(),
                d.vars.before(d),
                d.syncExists && !i && p.sync("animate"),
                d.vars.controlNav && p.controlNav.active(),
                m || d.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"),
                d.atEnd = 0 === b || b === d.last,
                d.vars.directionNav && p.directionNav.update(),
                b === d.last && (d.vars.end(d),
                d.vars.animationLoop || d.pause()),
                n)
                    g ? (d.slides.eq(d.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }),
                    d.slides.eq(b).css({
                        opacity: 1,
                        zIndex: 2
                    }),
                    d.wrapup(q)) : (d.slides.eq(d.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, d.vars.animationSpeed, d.vars.easing),
                    d.slides.eq(b).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
                else {
                    var r, s, t, q = k ? d.slides.filter(":first").height() : d.computedW;
                    m ? (r = d.vars.itemMargin,
                    t = (d.itemW + r) * d.move * d.animatingTo,
                    s = t > d.limit && 1 !== d.visible ? d.limit : t) : s = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * q : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * q : l ? (d.count - 1 - b + d.cloneOffset) * q : (b + d.cloneOffset) * q,
                    d.setProps(s, "", d.vars.animationSpeed),
                    d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1,
                    d.currentSlide = d.animatingTo),
                    d.container.unbind("webkitTransitionEnd transitionend"),
                    d.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(d.ensureAnimationEnd),
                        d.wrapup(q)
                    }
                    ),
                    clearTimeout(d.ensureAnimationEnd),
                    d.ensureAnimationEnd = setTimeout(function() {
                        d.wrapup(q)
                    }
                    , d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
                        d.wrapup(q)
                    }
                    )
                }
                d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
            }
        }
        ,
        d.wrapup = function(a) {
            n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")),
            d.animating = !1,
            d.currentSlide = d.animatingTo,
            d.vars.after(d)
        }
        ,
        d.animateSlides = function() {
            !d.animating && q && d.flexAnimate(d.getTarget("next"))
        }
        ,
        d.pause = function() {
            clearInterval(d.animatedSlides),
            d.animatedSlides = null ,
            d.playing = !1,
            d.vars.pausePlay && p.pausePlay.update("play"),
            d.syncExists && p.sync("pause")
        }
        ,
        d.play = function() {
            d.playing && clearInterval(d.animatedSlides),
            d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed),
            d.started = d.playing = !0,
            d.vars.pausePlay && p.pausePlay.update("pause"),
            d.syncExists && p.sync("play")
        }
        ,
        d.stop = function() {
            d.pause(),
            d.stopped = !0
        }
        ,
        d.canAdvance = function(a, b) {
            var c = o ? d.pagingCount - 1 : d.last;
            return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
        }
        ,
        d.getTarget = function(a) {
            return d.direction = a,
            "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
        }
        ,
        d.setProps = function(a, b, c) {
            var e = function() {
                var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo
                  , e = function() {
                    if (m)
                        return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                    switch (b) {
                    case "setTotal":
                        return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                    case "setTouch":
                        return l ? a : a;
                    case "jumpEnd":
                        return l ? a : d.count * a;
                    case "jumpStart":
                        return l ? d.count * a : a;
                    default:
                        return a
                    }
                }
                ();
                return -1 * e + "px"
            }
            ();
            d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)",
            c = void 0 !== c ? c / 1e3 + "s" : "0s",
            d.container.css("-" + d.pfx + "-transition-duration", c),
            d.container.css("transition-duration", c)),
            d.args[d.prop] = e,
            (d.transitions || void 0 === c) && d.container.css(d.args),
            d.container.css("transform", e)
        }
        ,
        d.setup = function(b) {
            if (n)
                d.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }),
                "init" === b && (g ? d.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : d.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(d.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, d.vars.animationSpeed, d.vars.easing)),
                d.vars.smoothHeight && p.smoothHeight();
            else {
                var c, f;
                "init" === b && (d.viewport = a('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(d).append(d.container),
                d.cloneCount = 0,
                d.cloneOffset = 0,
                l && (f = a.makeArray(d.slides).reverse(),
                d.slides = a(f),
                d.container.empty().append(d.slides))),
                d.vars.animationLoop && !m && (d.cloneCount = 2,
                d.cloneOffset = 1,
                "init" !== b && d.container.find(".clone").remove(),
                p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(d.container),
                p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(d.container)),
                d.newSlides = a(d.vars.selector, d),
                c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset,
                k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"),
                setTimeout(function() {
                    d.newSlides.css({
                        display: "block"
                    }),
                    d.doMath(),
                    d.viewport.height(d.h),
                    d.setProps(c * d.h, "init")
                }
                , "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"),
                d.setProps(c * d.computedW, "init"),
                setTimeout(function() {
                    d.doMath(),
                    d.newSlides.css({
                        width: d.computedW,
                        "float": "left",
                        display: "block"
                    }),
                    d.vars.smoothHeight && p.smoothHeight()
                }
                , "init" === b ? 100 : 0))
            }
            m || d.slides.removeClass(e + "active-slide").eq(d.currentSlide).addClass(e + "active-slide"),
            d.vars.init(d)
        }
        ,
        d.doMath = function() {
            var a = d.slides.first()
              , b = d.vars.itemMargin
              , c = d.vars.minItems
              , e = d.vars.maxItems;
            d.w = void 0 === d.viewport ? d.width() : d.viewport.width(),
            d.h = a.height(),
            d.boxPadding = a.outerWidth() - a.width(),
            m ? (d.itemT = d.vars.itemWidth + b,
            d.minW = c ? c * d.itemT : d.w,
            d.maxW = e ? e * d.itemT - b : d.w,
            d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth,
            d.visible = Math.floor(d.w / d.itemW),
            d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible,
            d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1),
            d.last = d.pagingCount - 1,
            d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w,
            d.pagingCount = d.count,
            d.last = d.count - 1),
            d.computedW = d.itemW - d.boxPadding
        }
        ,
        d.update = function(a, b) {
            d.doMath(),
            m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1),
            d.animatingTo = d.currentSlide),
            d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1,
            d.animatingTo -= 1),
            p.controlNav.update("remove", d.last))),
            d.vars.directionNav && p.directionNav.update()
        }
        ,
        d.addSlide = function(b, c) {
            var e = a(b);
            d.count += 1,
            d.last = d.count - 1,
            k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e),
            d.update(c, "add"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.added(d)
        }
        ,
        d.removeSlide = function(b) {
            var c = isNaN(b) ? d.slides.index(a(b)) : b;
            d.count -= 1,
            d.last = d.count - 1,
            isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(),
            d.doMath(),
            d.update(c, "remove"),
            d.slides = a(d.vars.selector + ":not(.clone)", d),
            d.setup(),
            d.vars.removed(d)
        }
        ,
        p.init()
    }
    ,
    a(window).blur(function() {
        focused = !1
    }
    ).focus(function() {
        focused = !0
    }
    ),
    a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    },
    a.fn.flexslider = function(b) {
        if (void 0 === b && (b = {}),
        "object" == typeof b)
            return this.each(function() {
                var c = a(this)
                  , d = b.selector ? b.selector : ".slides > li"
                  , e = c.find(d);
                1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400),
                b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this,b)
            }
            );
        var c = a(this).data("flexslider");
        switch (b) {
        case "play":
            c.play();
            break;
        case "pause":
            c.pause();
            break;
        case "stop":
            c.stop();
            break;
        case "next":
            c.flexAnimate(c.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            c.flexAnimate(c.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}
(jQuery);


/*
 * jQuery Simple Slider: Unobtrusive Numerical Slider
 * Version 1.0.0
 *
 * Copyright (c) 2014 James Smith (http://loopj.com)
 *
 * Licensed under the MIT license (http://mit-license.org/)
 */
//	Newfangled Steve: Added touch support patch found here: https://github.com/loopj/jquery-simple-slider/issues/54
var __slice = [].slice
  , __indexOf = [].indexOf || function(e) {
    for (var t = 0, n = this.length; t < n; t++) {
        if (t in this && this[t] === e)
            return t
    }
    return -1
}
;
(function(e, t) {
    var n;
    n = function() {
        function t(t, n) {
            var r, i = this;
            this.input = t;
            this.defaultOptions = {
                animate: true,
                snapMid: false,
                classPrefix: null ,
                classSuffix: null ,
                theme: null ,
                highlight: false
            };
            this.settings = e.extend({}, this.defaultOptions, n);
            if (this.settings.theme) {
                this.settings.classSuffix = "-" + this.settings.theme
            }
            this.input.hide();
            this.slider = e("<div>").addClass("slider" + (this.settings.classSuffix || "")).css({
                position: "relative",
                userSelect: "none",
                boxSizing: "border-box"
            }).insertBefore(this.input);
            if (this.input.attr("id")) {
                this.slider.attr("id", this.input.attr("id") + "-slider")
            }
            this.track = this.createDivElement("track").css({
                width: "100%"
            });
            if (this.settings.highlight) {
                this.highlightTrack = this.createDivElement("highlight-track").css({
                    width: "0"
                })
            }
            this.dragger = this.createDivElement("dragger");
            this.slider.css({
                minHeight: this.dragger.outerHeight(),
                marginLeft: this.dragger.outerWidth() / 2,
                marginRight: this.dragger.outerWidth() / 2
            });
            this.track.css({
                marginTop: this.track.outerHeight() / -2
            });
            if (this.settings.highlight) {
                this.highlightTrack.css({
                    marginTop: this.track.outerHeight() / -2
                })
            }
            this.dragger.css({
                marginTop: this.dragger.outerHeight() / -2,
                marginLeft: this.dragger.outerWidth() / -2
            });
            this.track.mousedown(function(e) {
                return i.trackEvent(e)
            }
            );
            if (this.settings.highlight) {
                this.highlightTrack.mousedown(function(e) {
                    return i.trackEvent(e)
                }
                )
            }
            this.dragger.mousedown(function(e) {
                if (e.which !== 1) {
                    return
                }
                i.dragging = true;
                i.dragger.addClass("dragging");
                i.domDrag(e.pageX, e.pageY);
                return false
            }
            );
            e("body").mousemove(function(t) {
                if (i.dragging) {
                    i.domDrag(t.pageX, t.pageY);
                    return e("body").css({
                        cursor: "pointer"
                    })
                }
            }
            ).mouseup(function(t) {
                if (i.dragging) {
                    i.dragging = false;
                    i.dragger.removeClass("dragging");
                    return e("body").css({
                        cursor: "auto"
                    })
                }
            }
            );
            this.pagePos = 0;
            if (this.input.val() === "") {
                this.value = this.getRange().min;
                this.input.val(this.value)
            } else {
                this.value = this.nearestValidValue(this.input.val())
            }
            this.setSliderPositionFromValue(this.value);
            r = this.valueToRatio(this.value);
            this.input.trigger("slider:ready", {
                value: this.value,
                ratio: r,
                position: r * this.slider.outerWidth(),
                el: this.slider
            });
            this.dragger.bind("touchstart", function(e) {
                i.dragging = true;
                i.dragger.addClass("dragging");
                i.domDrag(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
                return false
            }
            );
            e("body").bind("touchmove", function(e) {
                if (i.dragging) {
                    i.domDrag(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
                    return false
                }
            }
            ).bind("touchend", function(t) {
                if (i.dragging) {
                    i.dragging = false;
                    i.dragger.removeClass("dragging");
                    return e("body").css({
                        cursor: "auto"
                    })
                }
            }
            )
        }
        t.prototype.createDivElement = function(t) {
            var n;
            n = e("<div>").addClass(t).css({
                position: "absolute",
                top: "50%",
                userSelect: "none",
                cursor: "pointer"
            }).appendTo(this.slider);
            return n
        }
        ;
        t.prototype.setRatio = function(e) {
            var t;
            e = Math.min(1, e);
            e = Math.max(0, e);
            t = this.ratioToValue(e);
            this.setSliderPositionFromValue(t);
            return this.valueChanged(t, e, "setRatio")
        }
        ;
        t.prototype.setValue = function(e) {
            var t;
            e = this.nearestValidValue(e);
            t = this.valueToRatio(e);
            this.setSliderPositionFromValue(e);
            return this.valueChanged(e, t, "setValue")
        }
        ;
        t.prototype.trackEvent = function(e) {
            if (e.which !== 1) {
                return
            }
            this.domDrag(e.pageX, e.pageY, true);
            this.dragging = true;
            return false
        }
        ;
        t.prototype.domDrag = function(e, t, n) {
            var r, i, s;
            if (n == null ) {
                n = false
            }
            r = e - this.slider.offset().left;
            r = Math.min(this.slider.outerWidth(), r);
            r = Math.max(0, r);
            if (this.pagePos !== r) {
                this.pagePos = r;
                i = r / this.slider.outerWidth();
                s = this.ratioToValue(i);
                this.valueChanged(s, i, "domDrag");
                if (this.settings.snap) {
                    return this.setSliderPositionFromValue(s, n)
                } else {
                    return this.setSliderPosition(r, n)
                }
            }
        }
        ;
        t.prototype.setSliderPosition = function(e, t) {
            if (t == null ) {
                t = false
            }
            if (t && this.settings.animate) {
                this.dragger.animate({
                    left: e
                }, 200);
                if (this.settings.highlight) {
                    return this.highlightTrack.animate({
                        width: e
                    }, 200)
                }
            } else {
                this.dragger.css({
                    left: e
                });
                if (this.settings.highlight) {
                    return this.highlightTrack.css({
                        width: e
                    })
                }
            }
        }
        ;
        t.prototype.setSliderPositionFromValue = function(e, t) {
            var n;
            if (t == null ) {
                t = false
            }
            n = this.valueToRatio(e);
            return this.setSliderPosition(n * this.slider.outerWidth(), t)
        }
        ;
        t.prototype.getRange = function() {
            if (this.settings.allowedValues) {
                return {
                    min: Math.min.apply(Math, this.settings.allowedValues),
                    max: Math.max.apply(Math, this.settings.allowedValues)
                }
            } else if (this.settings.range) {
                return {
                    min: parseFloat(this.settings.range[0]),
                    max: parseFloat(this.settings.range[1])
                }
            } else {
                return {
                    min: 0,
                    max: 1
                }
            }
        }
        ;
        t.prototype.nearestValidValue = function(t) {
            var n, r, i, s;
            i = this.getRange();
            t = Math.min(i.max, t);
            t = Math.max(i.min, t);
            if (this.settings.allowedValues) {
                n = null ;
                e.each(this.settings.allowedValues, function() {
                    if (n === null  || Math.abs(this - t) < Math.abs(n - t)) {
                        return n = this
                    }
                }
                );
                return n
            } else if (this.settings.step) {
                r = (i.max - i.min) / this.settings.step;
                s = Math.floor((t - i.min) / this.settings.step);
                if ((t - i.min) % this.settings.step > this.settings.step / 2 && s < r) {
                    s += 1
                }
                return s * this.settings.step + i.min
            } else {
                return t
            }
        }
        ;
        t.prototype.valueToRatio = function(e) {
            var t, n, r, i, s, o, u, a;
            if (this.settings.equalSteps) {
                a = this.settings.allowedValues;
                for (i = o = 0,
                u = a.length; o < u; i = ++o) {
                    t = a[i];
                    if (!(typeof n !== "undefined" && n !== null ) || Math.abs(t - e) < Math.abs(n - e)) {
                        n = t;
                        r = i
                    }
                }
                if (this.settings.snapMid) {
                    return (r + .5) / this.settings.allowedValues.length
                } else {
                    return r / (this.settings.allowedValues.length - 1)
                }
            } else {
                s = this.getRange();
                return (e - s.min) / (s.max - s.min)
            }
        }
        ;
        t.prototype.ratioToValue = function(e) {
            var t, n, r, i, s;
            if (this.settings.equalSteps) {
                s = this.settings.allowedValues.length;
                i = Math.round(e * s - .5);
                t = Math.min(i, this.settings.allowedValues.length - 1);
                return this.settings.allowedValues[t]
            } else {
                n = this.getRange();
                r = e * (n.max - n.min) + n.min;
                return this.nearestValidValue(r)
            }
        }
        ;
        t.prototype.valueChanged = function(t, n, r) {
            var i;
            if (t.toString() === this.value.toString()) {
                return
            }
            this.value = t;
            i = {
                value: t,
                ratio: n,
                position: n * this.slider.outerWidth(),
                trigger: r,
                el: this.slider
            };
            return this.input.val(t).trigger(e.Event("change", i)).trigger("slider:changed", i)
        }
        ;
        return t
    }
    ();
    e.extend(e.fn, {
        simpleSlider: function() {
            var t, r, i;
            i = arguments[0],
            t = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            r = ["setRatio", "setValue"];
            return e(this).each(function() {
                var s, o;
                if (i && __indexOf.call(r, i) >= 0) {
                    s = e(this).data("slider-object");
                    return s[i].apply(s, t)
                } else {
                    o = i;
                    return e(this).data("slider-object", new n(e(this),o))
                }
            }
            )
        }
    });
    return e(function() {
        return e("[data-slider]").each(function() {
            var t, n, r, i;
            t = e(this);
            r = {};
            n = t.data("slider-values");
            if (n) {
                r.allowedValues = function() {
                    var e, t, r, s;
                    r = n.split(",");
                    s = [];
                    for (e = 0,
                    t = r.length; e < t; e++) {
                        i = r[e];
                        s.push(parseFloat(i))
                    }
                    return s
                }
                ()
            }
            if (t.data("slider-range")) {
                r.range = t.data("slider-range").split(",")
            }
            if (t.data("slider-step")) {
                r.step = t.data("slider-step")
            }
            r.snap = t.data("slider-snap");
            r.equalSteps = t.data("slider-equal-steps");
            if (t.data("slider-theme")) {
                r.theme = t.data("slider-theme")
            }
            if (t.attr("data-slider-highlight")) {
                r.highlight = t.data("slider-highlight")
            }
            if (t.data("slider-animate") != null ) {
                r.animate = t.data("slider-animate")
            }
            return t.simpleSlider(r)
        }
        )
    }
    )
}
)(this.jQuery || this.Zepto, this)

/***
@title: Live Search
@version: 2.0
@author: Andreas Lagerkvist
@date: 2008-08-31
@url: http://andreaslagerkvist.com/jquery/live-search/
@license: http://creativecommons.org/licenses/by/3.0/
@copyright: 2008 Andreas Lagerkvist (andreaslagerkvist.com)
@requires: jquery, jquery.liveSearch.css
@exampleJS: jQuery('#jquery-live-search-example input[name="q"]').liveSearch({url: WEBROOT +'?module=SearchResults&q='});
***/
jQuery.fn.liveSearch = function(e) {
    var t = jQuery.extend({
        url: "/?module=SearchResults&q=",
        id: "jquery-live-search",
        duration: 100,
        typeDelay: 100,
        loadingClass: "loading",
        onSlideUp: function() {}
    }, e);
    var n = jQuery("#" + t.id);
    if (!n.length) {
        n = jQuery('<div id="' + t.id + '"></div>').appendTo(document.body).hide().fadeOut("0");
        jQuery(document.body).click(function(e) {
            var r = jQuery(e.target);
            if (!(r.is("#" + t.id) || r.parents("#" + t.id).length || r.is("input"))) {
                n.fadeOut(200, function() {
                    t.onSlideUp()
                }
                )
            }
        }
        )
    }
    return this.each(function() {
        var e = jQuery(this).attr("autocomplete", "off");
        var r = parseInt(n.css("paddingLeft"), 10) + parseInt(n.css("paddingRight"), 10) + parseInt(n.css("borderLeftWidth"), 10) + parseInt(n.css("borderRightWidth"), 10);
        e.focus(function() {
            if (this.value !== "") {
                if (n.html() == "") {
                    this.lastValue = "";
                    e.keyup()
                } else {
                    n.fadeIn(200)
                }
            }
        }
        ).keyup(function() {
            if (this.value != this.lastValue) {
                e.addClass(t.loadingClass);
                var r = this.value;
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(function() {
                    jQuery.get(t.url + r, function(i) {
                        e.removeClass(t.loadingClass);
                        if (i.length && r.length) {
                            var s = e.offset();
                            var o = {
                                left: s.left,
                                top: s.top,
                                width: e.outerWidth(),
                                height: e.outerHeight()
                            };
                            o.topNHeight = o.top + o.height;
                            o.widthNShit = o.width;
                            if (o.left && o.topNHeight && o.widthNShit) {
                                n.css({
                                    position: "absolute",
                                    left: o.left + "px",
                                    top: o.topNHeight + "px",
                                    width: o.widthNShit + "px"
                                })
                            }
                            n.html(i).fadeIn(200)
                        } else {
                            n.fadeOut(200, function() {
                                t.onSlideUp()
                            }
                            )
                        }
                    }
                    )
                }
                , t.typeDelay);
                this.lastValue = this.value
            }
        }
        )
    }
    )
}

/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(t, e) {
    function n(t, e, n) {
        var r = t.children()
          , o = !1;
        t.empty();
        for (var i = 0, d = r.length; d > i; i++) {
            var l = r.eq(i);
            if (t.append(l),
            n && t.append(n),
            a(t, e)) {
                l.remove(),
                o = !0;
                break
            }
            n && n.detach()
        }
        return o
    }
    function r(e, n, i, d, l) {
        var s = !1
          , c = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
          , u = "script, .dotdotdot-keep";
        return e.contents().detach().each(function() {
            var f = this
              , h = t(f);
            if ("undefined" == typeof f || 3 == f.nodeType && 0 == t.trim(f.data).length)
                return !0;
            if (h.is(u))
                e.append(h);
            else {
                if (s)
                    return !0;
                e.append(h),
                l && e[e.is(c) ? "after" : "append"](l),
                a(i, d) && (s = 3 == f.nodeType ? o(h, n, i, d, l) : r(h, n, i, d, l),
                s || (h.detach(),
                s = !0)),
                s || l && l.detach()
            }
        }
        ),
        s
    }
    function o(e, n, r, o, d) {
        var c = e[0];
        if (!c)
            return !1;
        var f = s(c)
          , h = -1 !== f.indexOf(" ") ? " " : "　"
          , p = "letter" == o.wrap ? "" : h
          , g = f.split(p)
          , v = -1
          , w = -1
          , b = 0
          , y = g.length - 1;
        for (o.fallbackToLetter && 0 == b && 0 == y && (p = "",
        g = f.split(p),
        y = g.length - 1); y >= b && (0 != b || 0 != y); ) {
            var m = Math.floor((b + y) / 2);
            if (m == w)
                break;
            w = m,
            l(c, g.slice(0, w + 1).join(p) + o.ellipsis),
            a(r, o) ? (y = w,
            o.fallbackToLetter && 0 == b && 0 == y && (p = "",
            g = g[0].split(p),
            v = -1,
            w = -1,
            b = 0,
            y = g.length - 1)) : (v = w,
            b = w)
        }
        if (-1 == v || 1 == g.length && 0 == g[0].length) {
            var x = e.parent();
            e.detach();
            var T = d && d.closest(x).length ? d.length : 0;
            x.contents().length > T ? c = u(x.contents().eq(-1 - T), n) : (c = u(x, n, !0),
            T || x.detach()),
            c && (f = i(s(c), o),
            l(c, f),
            T && d && t(c).parent().append(d))
        } else
            f = i(g.slice(0, v + 1).join(p), o),
            l(c, f);
        return !0
    }
    function a(t, e) {
        return t.innerHeight() > e.maxHeight
    }
    function i(e, n) {
        for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; )
            e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis),
        e
    }
    function d(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }
    function l(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }
    function s(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }
    function c(t) {
        do
            t = t.previousSibling;
        while (t && 1 !== t.nodeType && 3 !== t.nodeType);return t
    }
    function u(e, n, r) {
        var o, a = e && e[0];
        if (a) {
            if (!r) {
                if (3 === a.nodeType)
                    return a;
                if (t.trim(e.text()))
                    return u(e.contents().last(), n)
            }
            for (o = c(a); !o; ) {
                if (e = e.parent(),
                e.is(n) || !e.length)
                    return !1;
                o = c(e[0])
            }
            if (o)
                return u(t(o), n)
        }
        return !1
    }
    function f(e, n) {
        return e ? "string" == typeof e ? (e = t(e, n),
        e.length ? e : !1) : e.jquery ? e : !1 : !1
    }
    function h(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; o > r; r++) {
            var a = parseInt(t.css(n[r]), 10);
            isNaN(a) && (a = 0),
            e -= a
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length)
                return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                this;
            if (this.length > 1)
                return this.each(function() {
                    t(this).dotdotdot(e)
                }
                );
            var o = this;
            o.data("dotdotdot") && o.trigger("destroy.dot"),
            o.data("dotdotdot-style", o.attr("style") || ""),
            o.css("word-wrap", "break-word"),
            "nowrap" === o.css("white-space") && o.css("white-space", "normal"),
            o.bind_events = function() {
                return o.bind("update.dot", function(e, d) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    l.maxHeight = "number" == typeof l.height ? l.height : h(o),
                    l.maxHeight += l.tolerance,
                    "undefined" != typeof d && (("string" == typeof d || d instanceof HTMLElement) && (d = t("<div />").append(d).contents()),
                    d instanceof t && (i = d)),
                    g = o.wrapInner('<div class="dotdotdot" />').children(),
                    g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c = !1
                      , u = !1;
                    return s.afterElement && (c = s.afterElement.clone(!0),
                    c.show(),
                    s.afterElement.detach()),
                    a(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)),
                    g.replaceWith(g.contents()),
                    g = null ,
                    t.isFunction(l.callback) && l.callback.call(o[0], u, i),
                    s.isTruncated = u,
                    u
                }
                ).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], s.isTruncated),
                    s.isTruncated
                }
                ).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], i),
                    i
                }
                ).bind("destroy.dot", function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }
                ),
                o
            }
            ,
            o.unbind_events = function() {
                return o.unbind(".dot"),
                o
            }
            ,
            o.watch = function() {
                if (o.unwatch(),
                "window" == l.watch) {
                    var e = t(window)
                      , n = e.width()
                      , r = e.height();
                    e.bind("resize.dot" + s.dotId, function() {
                        n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(),
                        r = e.height(),
                        u && clearInterval(u),
                        u = setTimeout(function() {
                            o.trigger("update.dot")
                        }
                        , 100))
                    }
                    )
                } else
                    c = d(o),
                    u = setInterval(function() {
                        if (o.is(":visible")) {
                            var t = d(o);
                            (c.width != t.width || c.height != t.height) && (o.trigger("update.dot"),
                            c = t)
                        }
                    }
                    , 500);
                return o
            }
            ,
            o.unwatch = function() {
                return t(window).unbind("resize.dot" + s.dotId),
                u && clearInterval(u),
                o
            }
            ;
            var i = o.contents()
              , l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e)
              , s = {}
              , c = {}
              , u = null 
              , g = null ;
            return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove),
            l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
            s.afterElement = f(l.after, o),
            s.isTruncated = !1,
            s.dotId = p++,
            o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
            l.watch && o.watch(),
            o
        }
        ,
        t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null ,
            after: null ,
            height: null ,
            watch: !1,
            windowResizeFix: !0
        },
        t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        },
        t.fn.dotdotdot.debug = function() {}
        ;
        var p = 1
          , g = t.fn.html;
        t.fn.html = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        }
        ;
        var v = t.fn.text;
        t.fn.text = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(),
            this.trigger("update", [n])) : v.apply(this, arguments)
        }
    }
}
(jQuery);

//	Scro9ll to fixed
!function(o) {
    o.isScrollToFixed = function(i) {
        return void 0 !== o(i).data("ScrollToFixed")
    }
    ,
    o.ScrollToFixed = function(i, e) {
        function t() {
            m.trigger("preUnfixed.ScrollToFixed"),
            p(),
            m.trigger("unfixed.ScrollToFixed"),
            O = -1,
            w = m.offset().top,
            v = m.offset().left,
            g.options.offsets && (v += m.offset().left - m.position().left),
            -1 == U && (U = v),
            T = m.css("position"),
            h = !0,
            -1 != g.options.bottom && (m.trigger("preFixed.ScrollToFixed"),
            d(),
            m.trigger("fixed.ScrollToFixed"))
        }
        function n() {
            var o = g.options.limit;
            return o ? "function" == typeof o ? o.apply(m) : o : 0
        }
        function l() {
            return "fixed" === T
        }
        function s() {
            return "absolute" === T
        }
        function r() {
            return !(l() || s())
        }
        function d() {
            l() || (y.css({
                display: m.css("display"),
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                "float": m.css("float")
            }),
            cssOptions = {
                position: "fixed",
                top: -1 == g.options.bottom ? f() : "",
                bottom: -1 == g.options.bottom ? "" : g.options.bottom,
                "margin-left": "0px"
            },
            g.options.dontSetWidth || (cssOptions.width = m.width()),
            m.css(cssOptions),
            m.addClass("scroll-to-fixed-fixed"),
            g.options.className && m.addClass(g.options.className),
            T = "fixed")
        }
        function c() {
            var o = n()
              , i = v;
            g.options.removeOffsets && (i = 0,
            o -= w),
            cssOptions = {
                position: "absolute",
                top: o,
                left: i,
                "margin-left": "0px",
                bottom: ""
            },
            g.options.dontSetWidth || (cssOptions.width = m.width()),
            m.css(cssOptions),
            T = "absolute"
        }
        function p() {
            r() || (O = -1,
            y.css("display", "none"),
            m.css({
                width: "",
                position: S,
                left: "",
                top: b.top,
                "margin-left": ""
            }),
            m.removeClass("scroll-to-fixed-fixed"),
            g.options.className && m.removeClass(g.options.className),
            T = null )
        }
        function x(o) {
            o != O && (m.css("left", v - o),
            O = o)
        }
        function f() {
            var o = g.options.marginTop;
            return o ? "function" == typeof o ? o.apply(m) : o : 0
        }
        function u() {
            if (o.isScrollToFixed(m)) {
                var i = h;
                h || t();
                var e = o(window).scrollLeft()
                  , u = o(window).scrollTop()
                  , T = n();
                g.options.minWidth && o(window).width() < g.options.minWidth ? r() && i || (F(),
                m.trigger("preUnfixed.ScrollToFixed"),
                p(),
                m.trigger("unfixed.ScrollToFixed")) : -1 == g.options.bottom ? T > 0 && u >= T - f() ? s() && i || (F(),
                m.trigger("preAbsolute.ScrollToFixed"),
                c(),
                m.trigger("unfixed.ScrollToFixed")) : u >= w - f() ? (l() && i || (F(),
                m.trigger("preFixed.ScrollToFixed"),
                d(),
                O = -1,
                m.trigger("fixed.ScrollToFixed")),
                x(e)) : r() && i || (F(),
                m.trigger("preUnfixed.ScrollToFixed"),
                p(),
                m.trigger("unfixed.ScrollToFixed")) : T > 0 ? u + o(window).height() - m.outerHeight(!0) >= T - (f() || -a()) ? l() && (F(),
                m.trigger("preUnfixed.ScrollToFixed"),
                "absolute" === S ? c() : p(),
                m.trigger("unfixed.ScrollToFixed")) : (l() || (F(),
                m.trigger("preFixed.ScrollToFixed"),
                d()),
                x(e),
                m.trigger("fixed.ScrollToFixed")) : x(e)
            }
        }
        function a() {
            return g.options.bottom ? g.options.bottom : 0
        }
        function F() {
            var o = m.css("position");
            "absolute" == o ? m.trigger("postAbsolute.ScrollToFixed") : "fixed" == o ? m.trigger("postFixed.ScrollToFixed") : m.trigger("postUnfixed.ScrollToFixed")
        }
        var g = this;
        g.$el = o(i),
        g.el = i,
        g.$el.data("ScrollToFixed", g);
        var T, S, b, h = !1, m = g.$el, w = 0, v = 0, U = -1, O = -1, y = null , A = function(o) {
            m.is(":visible") && (h = !1,
            u())
        }
        , C = function(o) {
            u()
        }
        , z = function(o) {
            o = o || window.event,
            o.preventDefault && o.preventDefault(),
            o.returnValue = !1
        }
        ;
        g.init = function() {
            g.options = o.extend({}, o.ScrollToFixed.defaultOptions, e),
            g.$el.css("z-index", g.options.zIndex),
            y = o("<div />"),
            T = m.css("position"),
            S = m.css("position"),
            b = o.extend({}, m.offset()),
            r() && g.$el.after(y),
            o(window).bind("resize.ScrollToFixed", A),
            o(window).bind("scroll.ScrollToFixed", C),
            g.options.preFixed && m.bind("preFixed.ScrollToFixed", g.options.preFixed),
            g.options.postFixed && m.bind("postFixed.ScrollToFixed", g.options.postFixed),
            g.options.preUnfixed && m.bind("preUnfixed.ScrollToFixed", g.options.preUnfixed),
            g.options.postUnfixed && m.bind("postUnfixed.ScrollToFixed", g.options.postUnfixed),
            g.options.preAbsolute && m.bind("preAbsolute.ScrollToFixed", g.options.preAbsolute),
            g.options.postAbsolute && m.bind("postAbsolute.ScrollToFixed", g.options.postAbsolute),
            g.options.fixed && m.bind("fixed.ScrollToFixed", g.options.fixed),
            g.options.unfixed && m.bind("unfixed.ScrollToFixed", g.options.unfixed),
            g.options.spacerClass && y.addClass(g.options.spacerClass),
            m.bind("resize.ScrollToFixed", function() {
                y.height(m.height())
            }
            ),
            m.bind("scroll.ScrollToFixed", function() {
                m.trigger("preUnfixed.ScrollToFixed"),
                p(),
                m.trigger("unfixed.ScrollToFixed"),
                u()
            }
            ),
            m.bind("detach.ScrollToFixed", function(i) {
                z(i),
                m.trigger("preUnfixed.ScrollToFixed"),
                p(),
                m.trigger("unfixed.ScrollToFixed"),
                o(window).unbind("resize.ScrollToFixed", A),
                o(window).unbind("scroll.ScrollToFixed", C),
                m.unbind(".ScrollToFixed"),
                g.$el.removeData("ScrollToFixed")
            }
            ),
            A()
        }
        ,
        g.init()
    }
    ,
    o.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3
    },
    o.fn.scrollToFixed = function(i) {
        return this.each(function() {
            new o.ScrollToFixed(this,i)
        }
        )
    }
}
(jQuery);

/*
 * @name DoubleScroll
 * @desc displays scroll bar on top and on the bottom of the div
 * @requires jQuery
 *
 * @author Pawel Suwala - http://suwala.eu/
 * @author Antoine Vianey - http://www.astek.fr/
 * @version 0.4 (18-06-2014)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * Usage:
 * https://github.com/avianey/jqDoubleScroll
 */
jQuery.fn.doubleScroll = function(l) {
    var e = jQuery
      , o = {
        contentElement: void 0,
        scrollCss: {
            "overflow-x": "auto",
            "overflow-y": "hidden"
        },
        contentCss: {
            "overflow-x": "auto",
            "overflow-y": "hidden"
        },
        onlyIfScroll: !0,
        resetOnWindowResize: !1,
        timeToWaitForResize: 30
    };
    e.extend(!0, o, l),
    e.extend(o, {
        topScrollBarMarkup: '<div class="doubleScroll-scroll-wrapper" style="height: 20px;"><div class="doubleScroll-scroll" style="height: 20px;"></div></div>',
        topScrollBarWrapperSelector: ".doubleScroll-scroll-wrapper",
        topScrollBarInnerSelector: ".doubleScroll-scroll"
    });
    var r = function(l, o) {
        if (o.onlyIfScroll && l.get(0).scrollWidth <= l.width())
            return void l.prev(o.topScrollBarWrapperSelector).remove();
        var r = l.prev(o.topScrollBarWrapperSelector);
        if (0 == r.length) {
            r = e(o.topScrollBarMarkup),
            l.before(r),
            r.css(o.scrollCss),
            l.css(o.contentCss),
            r.bind("scroll.doubleScroll", function() {
                l.scrollLeft(r.scrollLeft())
            }
            );
            var t = function() {
                r.scrollLeft(l.scrollLeft())
            }
            ;
            l.bind("scroll.doubleScroll", t)
        }
        var c;
        c = void 0 !== o.contentElement && 0 !== l.find(o.contentElement).length ? l.find(o.contentElement) : l.find(">:first-child"),
        e(o.topScrollBarInnerSelector, r).width(c.outerWidth()),
        r.width(l.width()),
        r.scrollLeft(l.scrollLeft())
    }
    ;
    return this.each(function() {
        var l = e(this);
        if (r(l, o),
        o.resetOnWindowResize) {
            var t, c = function(e) {
                r(l, o)
            }
            ;
            e(window).bind("resize.doubleScroll", function() {
                clearTimeout(t),
                t = setTimeout(c, o.timeToWaitForResize)
            }
            )
        }
    }
    )
}
;

//	Acton minified
(function($) {
    $.ActOnForm = function(element, options) {
        var defaults = {
            formid: '',
            formtype: '',
            formname: '',
            guid: new Date().getTime(),
            profileurl: '/acton/getformdata.php',
            profilevalues: {},
            requiredfields: {},
            nonrequiredfields: {}
        }
        var plugin = this;
        plugin.thisId = element.id;
        plugin.settings = {}
        var $element = $(element)
          , element = element;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.settings.formid = plugin.thisId;
            plugin.settings.formtype = $element.find('input[name="fields[form_type]"]').val();
            plugin.settings.formname = $element.attr('name');
            if (!plugin.settings.formtype || $element.attr('action') != '/formsmgr/process.php') {
                plugin.unhookForm();
                return;
            }
            plugin.setupForm();
        }
        plugin.unhookForm = function() {
            $element.removeData('ActOnForm');
        }
        plugin.setupForm = function() {
            $.ajax({
                url: plugin.settings.profileurl + '?v=' + plugin.settings.guid,
                method: 'GET',
                data: {
                    formtype: plugin.settings.formtype,
                    formid: plugin.settings.formid
                },
                success: function(data, statusCode) {
                    if (!data) {
                        plugin.unhookForm();
                        return;
                    }
                    response = $.parseJSON(data);
                    plugin.settings.profilevalues = response.profilevalues;
                    plugin.settings.requiredfields = response.requiredfields;
                    plugin.settings.nonrequiredfields = response.nonrequiredfields;
                    plugin.setProfileValues();
                    plugin.setRequiredFields();
                    plugin.setSubmitAction();
                },
                error: function(data, statusCode) {
                    plugin.unhookForm();
                }
            })
        }
        plugin.setProfileValues = function() {
            if (!plugin.settings.profilevalues) {
                return;
            }
            profile = plugin.settings.profilevalues;
            $.each(profile, function(key, value) {
                if ($element.find('input[data-fieldgroup="' + key + '"],input[fieldgroup="' + key + '"]').length) 
                {
                    var numOptions = $element.find('input[data-fieldgroup="' + key + '"],input[fieldgroup="' + key + '"]').length;
                    for (i = 1; i <= numOptions; i++) 
                    {
                        optionId = key + i;
                        if ($element.find('#' + optionId).val() == value) 
                        {
                            $element.find('#' + optionId).attr("checked", 1);
                        }
                    }
                } 
                else if ($element.find('#' + key).attr('type') == 'checkbox') 
                {
                    if (value == 1 || value == 'on') 
                    {
                        $element.find('#' + key).attr('checked', true);
                    }
                } 
                else 
                {
                    value = $("<div/>").html(value).text();
                    $element.find('#' + key).val(value);
                }
                $element.find('#fieldblock-' + key).addClass('profile-autofill');
            }
            );
        }
        plugin.setRequiredFields = function() {
            if (!plugin.settings.requiredfields) {
                return;
            }
            required = plugin.settings.requiredfields;
            nonrequired = plugin.settings.nonrequiredfields;
            $.each(required, function(key, value) {
                innertext = $element.find('#label' + value).text();
                $element.find('#fieldblock-' + value).addClass('profile-required');
                if (innertext.indexOf("*") >= 0) {} 
                else {
                    text = innertext;
                    text = text.replace(text, text + '* <span id="fielderror-' + value + '" class="fielderror">');
                    $element.find('#label' + value).html(text);
                }
            }
            );
            $.each(nonrequired, function(key, value) {
                $element.find('#fieldblock-' + value).addClass('profile-nonrequired');
            }
            );
        }
        plugin.setSubmitAction = function() {
            element.onsubmit = '';
            $element.submit(function() {
                plugin.makeValidationCall($element.attr('name'));
                return false;
            }
            );
        }
        plugin.processExtraValidation = function() {
            if (!plugin.settings.requiredfields) {
                var isajax = $element.attr('data-ajax-submit');
                if (isajax) {
                    ajax_submitForm(formname);
                } else {
                    element.submit();
                }
                return;
            }
            extraerrors = 0;
            formname = plugin.settings.formname;
            required = plugin.settings.requiredfields;
            $.each(required, function(key, value) {
                if ($element.find('input[data-fieldgroup="' + value + '"],input[fieldgroup="' + value + '"]').length) 
                {
                    var radioChecked = false;
                    var numOptions = $element.find('input[data-fieldgroup="' + value + '"],input[fieldgroup="' + value + '"]').length;
                    for (i = 1; i <= numOptions; i++) 
                    {
                        optionId = value + i;
                        if ($element.find('#' + optionId).attr("checked")) 
                        {
                            radioChecked = true;
                        }
                    }
                    if (!radioChecked) 
                    {
                        extraerrors++;
                        showError(formname, extraerrors, '', value, value);
                    }
                } 
                else if (($element.find('#' + value).attr('data-fieldgroup') || $element.find('#' + value).attr('fieldgroup')) && $element.find('input[data-fieldgroup="' + $element.find('#' + value).attr('data-fieldgroup') + '"],input[fieldgroup="' + $element.find('#' + value).attr('fieldgroup') + '"]').length) 
                {
                    var boxChecked = false;
                    $.each($element.find('input[data-fieldgroup="' + $element.find('#' + value).attr('data-fieldgroup') + '"],input[fieldgroup="' + $element.find('#' + value).attr('fieldgroup') + '"]'), function(obj) {
                        if ($(this).attr("checked")) 
                        {
                            boxChecked = true;
                        }
                    }
                    );
                    if (!boxChecked) 
                    {
                        extraerrors++;
                        showError(formname, extraerrors, '', value, value);
                    }
                } 
                else 
                {
                    if (!$element.find('#' + value).val()) {
                        extraerrors++;
                        showError(formname, extraerrors, '', value, value);
                    }
                }
            }
            );
            if (!extraerrors) {
                var isajax = $element.attr('data-ajax-submit');
                if (isajax) {
                    ajax_submitForm(formname);
                } else {
                    element.submit();
                }
                return;
            } 
            else {
                $('html, body').animate({
                    scrollTop: $element.offset().top - 130
                }, 200);
            }
        }
        plugin.makeValidationCall = function(form_name, callback) {
            if (validationRunning) 
            {
                return;
            }
            validationRunning = true;
            clearFieldErrors(form_name);
            formObj = $('#' + form_name);
            if (!formObj) 
            {
                validationDone();
            }
            postParms = compileAllFieldValues(element);
            if (!postParms) 
            {
                validationDone();
            }
            postURL = '/formsmgr/validate.php';
            var xmlhttp = initHTTPObject();
            xmlhttp.open('POST', postURL, true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.onreadystatechange = function() 
            {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {
                    plugin.processValidationResponse(form_name, xmlhttp.responseText);
                }
            }
            ;
            xmlhttp.send(postParms);
        }
        plugin.processValidationResponse = function(form_name, response) {
            validationRunning = false;
            found_errors = new Array();
            if (!response) 
            {
                plugin.processExtraValidation();
                return;
            }
            eval(response);
            if (!found_errors[0]) 
            {
                plugin.processExtraValidation();
                return;
            }
            for (i = 0; i <= (found_errors.length - 1); i++) 
            {
                errornumber = i + 1;
                errormessage = found_errors[i][0];
                fieldname = found_errors[i][1];
                fieldid = found_errors[i][2];
                showError(form_name, errornumber, errormessage, fieldname, fieldid);
            }
            $('html, body').animate({
                scrollTop: $("#" + form_name).offset().top - 130
            }, 200);
            validationDone();
        }
        plugin.init();
    }
    $.fn.ActOnForm = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('ActOnForm')) {
                var plugin = new $.ActOnForm(this,options);
                $(this).data('ActOnForm', plugin);
            }
        }
        );
    }
}
)(jQuery);

//	Site minified
var wide = 1200;
var desktop = 960;
var tablet = 768;
var mobile = 480;
var pageWidth = 0;
var pageHeight = 0;
var topOffset = 103;
function hasTouch() {
    try {
        document.createEvent("TouchEvent");
        return ( true) ;
    } catch (e) {
        return ( false) ;
    }
}
function resizeEffects() {
    pageWidth = $(window).width();
    pageHeight = $(window).height();
    $(".ellipsis").dotdotdot({
        after: "a.more-link"
    });
    if (pageWidth <= tablet) {
        topOffset = 0;
        $('#right').detach().appendTo('#body').addClass('moved');
        $('#globalnav ul').detach().appendTo('#mainnav').addClass('moved');
    } else {
        $('#right.moved').detach().prependTo('#body').removeClass('moved');
        $('#mainnav ul.moved').detach().prependTo('#globalnav').removeClass('moved');
    }
    $('#slider a.active').click();
    var heroHeight = (pageHeight - $('#header').height() - 110) + 'px';
    $('.home-page #hero-container').css('max-height', heroHeight);
}
function scrollEffects() {
    if (pageWidth > tablet) {
        if ($(window).scrollTop() > 300) {
            $('#scroll-top').fadeIn(800);
        } else {
            $('#scroll-top').fadeOut(800);
        }
    }
    ;
}
$(window).load(function(event) {
    $("#left").scrollToFixed({
        marginTop: 103,
        limit: function() {
            return $('#footer').offset().top - $('#left').outerHeight()
        },
        maxWidth: tablet,
        zIndex: 1,
        spacerClass: 'spacerleft',
    });
    if ($("#right").outerHeight() < $('#main').outerHeight()) {
        $("#right").scrollToFixed({
            minWidth: tablet,
            marginTop: 103,
            limit: function() {
                if ($("#right").outerHeight() > $('#main').outerHeight()) {
                    $("#right").css('position', 'static');
                    $('.spacerright').css('display', 'none');
                    return $("#right").outerHeight() + $('#right').offset().top;
                } 
                else {
                    return $('#footer').offset().top - $('#right').outerHeight();
                    $('.spacerright').css('display', 'block');
                }
            },
            maxWidth: tablet,
            zIndex: 1,
            dontSetWidth: true,
            spacerClass: 'spacerright',
        });
    }
    ;
}
)
$(document).ready(function() {
    scrollEffects();
    $(window).scroll(function() {
        waitForFinalEvent(function() {
            scrollEffects();
        }
        , 500, 'scrollme');
    }
    );
    $('#share').on('click', 'a', function() {
        ga('send', 'event', 'share', 'click', $(this).attr('id'));
    }
    );
    $('body').on('change', '#country', function(event) {
        if ($(this).val() == 'CA') {
            $(this).closest('form').find('#fieldblock-candadianoptin').show();
        } else {
            $(this).closest('form').find('#fieldblock-candadianoptin').hide();
        }
        if ($(this).val() == 'DE') {
            $(this).closest('form').find('#fieldblock-germanoptin').show();
        } else {
            $(this).closest('form').find('#fieldblock-germanoptin').hide();
        }
    }
    );
    var hastouch = hasTouch();
    if (hastouch) {
        $('#body,#home-content').on('touchend', function(e) {
            var activeli = $('#mainnav li:hover').next();
            var next = activeli.next();
            var item = activeli.detach();
            next.before(item);
        }
        )
    }
    ;$('.upload-button :file').change(function() {
        var msg = this.files.length.toString() + ' files selected';
        $(this).closest('.upload-button').next('span').html(msg);
    }
    )
    $('body').on('click', '.overlay-close', function(event) {
        $.magnificPopup.close();
    }
    );
    $('#slider a').click(function(event) {
        event.preventDefault();
        var selection = $(this).attr('href');
        var position = $(selection).position();
        var offset = parseInt($(selection).css('margin-top')) + 20;
        $('#scroller').animate({
            marginTop: -(position.top + offset)
        }, 500);
        $('#slider a').removeClass('active');
        $(this).addClass('active');
        var width = $('#slider nav').width() / 2;
        var itemPosition = $(this).position();
        $('#slider nav ul').animate({
            left: width - itemPosition.left - ($(this).width() / 2)
        }, 500);
        if ($('#slider a.active').closest('li').next().find('a').length == 0) {
            $('.slide-right').removeClass('active');
        } else {
            $('.slide-right').addClass('active');
        }
        if ($('#slider a.active').closest('li').prev().find('a').length == 0) {
            $('.slide-left').removeClass('active');
        } else {
            $('.slide-left').addClass('active');
        }
    }
    );
    $('#slider').on('click', '.slide-right.active', function(event) {
        event.preventDefault();
        $('#slider a.active').closest('li').next().find('a').click();
    }
    );
    $('#slider').on('click', '.slide-left.active', function(event) {
        event.preventDefault();
        $('#slider a.active').closest('li').prev().find('a').click();
    }
    );
    $('#property-filter .close').click(function(event) {
        event.preventDefault();
        $('#property-filter form').hide();
    }
    );
    $('body').on('click', '.salesrep .button-small', function(event) {
        event.preventDefault();
        var repid = $(this).attr('data-value');
        $('#salesrep').val(repid);
        $('#geoform').show();
        var formTop = $("#form-grid").offset().top;
        formTop = formTop - 200;
        $('html, body').animate({
            scrollTop: formTop
        }, 2000);
    }
    );
    $('#scroll-top').click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: "0px"
        });
    }
    );
    resizeEffects();
    $(window).resize(function() {
        waitForFinalEvent(function() {
            resizeEffects();
        }
        , 500, 'resizeme');
    }
    );
    $('body').on('click', '.scroll-to', function(event) {
        event.preventDefault();
        var target = $(this).attr('data-target');
        var position = parseInt($(target).offset().top) - topOffset - 30;
        $('html, body').animate({
            scrollTop: position
        });
    }
    );
    $('body').on('click', '.scroll-to-and-submit', function(event) {
        var target = $(this).attr('data-target');
        var position = parseInt($(target).offset().top) - topOffset - 30;
        $('html, body').animate({
            scrollTop: position
        });
    }
    );
    $('body').on('click', '.clear', function(event) {
        event.preventDefault();
        $('[data-slider]').simpleSlider("setValue", 0);
        $('#imperial-filter').submit();
    }
    );
    $('#menu-trigger').click(function(event) {
        event.preventDefault();
        $('#mainnav').toggle();
    }
    );
    $('#mainnav a').each(function() {
        var submenu = $(this).closest('li').children('ul');
        if (submenu.length > 0) {
            $(this).addClass('has-submenu');
            var url = $(this).attr('href');
            var html = '<li class="responsive-only"><a href="' + url + '">' + overviewtrans + '</a></li>';
            $(this).next('ul').prepend(html);
        }
        ;
    }
    );
    $('#mainnav a').click(function(event) {
        if (pageWidth <= desktop) {
            var submenu = $(this).closest('li').children('ul');
            if (submenu.length > 0) {
                event.preventDefault();
                submenu.slideToggle();
                $(this).toggleClass('open');
            }
            ;
        }
        ;
    }
    );
    $('#cookie-consent .close').click(function(event) {
        event.preventDefault();
        $.post("/site/consent.php", {
            consent: 1
        }, function(data) {
            $('#cookie-consent').remove();
        }
        );
    }
    );
    $('iframe[src*="youtube.com"]').each(function() {
        var url = $(this).attr("src")
        if (url.indexOf('?') > 0) {
            url = url + "&wmode=transparent";
        } else {
            url = url + "?wmode=transparent";
        }
        $(this).attr("src", url);
    }
    );
    $('#results').on('click', '#clear-filter', function(event) {
        event.preventDefault();
        var url = $(this).attr('href');
        $('#filter-form select,#filter-form input').each(function() {
            $(this).val('');
        }
        );
        $('#filter-form').submit();
    }
    );
    $('body').on('click', '.ajax-link', function(event) {
        event.preventDefault();
        var button = $(this);
        var url = button.attr('href');
        $(this).remove();
        $("<div>").addClass('hidden').load(url, function() {
            $("#results").append($(this));
            $(this).slideDown();
            $(".ellipsis").dotdotdot({
                after: "a.more-link"
            });
        }
        );
    }
    );
    $('.map-overlay .close').click(function(event) {
        event.preventDefault();
        $(this).closest('.map-overlay').hide();
    }
    );
    $('form').ActOnForm();
    $('select#industry').change(function(event) {
        var value = $(this).val();
        if (value == 'Other') {
            $('#industry-other').show();
        } else {
            $('#industry-other').hide();
            $('#industry-other input').val('');
        }
        ;
    }
    );
    $('#results').on('change', '.compare', function(event) {
        if ($('.compare:checked').length) {
            $(this).closest('.compare-container').addClass('compare-active');
        } else {
            $(this).closest('.compare-container').removeClass('compare-active');
        }
    }
    );
    $('#results').on('click', '#results-compare', function(event) {
        $('input.compare').each(function() {
            if ($(this).is(':checked')) {
                $(this).closest('tr').show();
            } else {
                $(this).closest('tr').hide();
            }
        }
        );
    }
    );
    $('#results').on('click', '#results-reset', function(event) {
        $('.compare').attr('checked', false).closest('tr').show();
        $('#compare-buttons').hide();
    }
    );
    $('.results-button').click(function(event) {
        $('.results-field').val(materialsResults);
        $('.search-field').val(materialsSearch);
        $('.query-field').val(materialsQuery);
    }
    );
    $('.center-x').on('change', '.autosubmit', function(event) {
        $(this).closest('form').submit();
    }
    );
    $('.center-x').on('submit', '.ajaxsubmit', function(event) {
        var target = $(this).attr('data-target');
        target = (typeof target === "undefined") ? '#results' : target;
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(data) {
                $(target).html(data);
                $(target + " .ellipsis").dotdotdot({
                    after: "a.more-link"
                });
                $(target + ' ul.tabs').jTabs('div.panes .pane');
                $(target + " table.sortable").tablesorter({
                    textExtraction: function(node) {
                        return node.getAttribute('data-value');
                    }
                });
                $(target + ' .overlay-trigger').magnificPopup({
                    type: 'inline'
                });
            },
            error: function(xhr, err) {
                alert('Error');
            }
        });
        return false;
    }
    );
    $("table.sortable").tablesorter({
        textExtraction: function(node) {
            var value = node.getAttribute('data-value');
            return value
        }
    });
    $("ul.tabs").jTabs('div.panes .pane');
    $('body').on('change', '#tab-selector', function(event) {
        var selected = $(this).val();
        $('.materials-results #materials-guide-panes.panes .pane').removeClass('activepane');
        $('.materials-results #materials-guide-panes.panes ' + selected).addClass('activepane');
    }
    );
    $('body').on('click', '.toggle-imperial', function(event) {
        event.preventDefault();
        $('.toggle-imperial').addClass('active');
        $('.toggle-metric').removeClass('active');
        $('.metric').hide();
        $('.metric [data-slider]').simpleSlider("setValue", 0);
        $('.imperial').show();
    }
    );
    $('body').on('click', '.toggle-metric', function(event) {
        event.preventDefault();
        $('.toggle-metric').addClass('active');
        $('.toggle-imperial').removeClass('active');
        $('.metric').show();
        $('.imperial').hide();
        $('.imperial [data-slider]').simpleSlider("setValue", 0);
    }
    );
    $('.select-toggle').change(function(event) {
        var target_str = $(this).attr('data-toggle');
        var targets = target_str.split(',');
        var values_str = $(this).attr('data-values');
        var values = values_str.split(',');
        var target_class = $(this).attr('data-toggle-class');
        var value = $(this).val();
        $(target_class).hide();
        $(target_class).find('select').val('');
        for (i = 0; i < targets.length; i++) {
            if (values[i] == value) 
            {
                $(targets[i]).show();
            }
        }
    }
    );
    $('.flexslider').flexslider({
        animation: "slide",
        before: function() {
            $(window).resize();
        },
    });
    $('a.play').click(function(event) {
        event.preventDefault();
        var videoElement = $(this).next('video')
        var video = videoElement.get(0);
        var button = $(this);
        button.hide();
        video.play();
        videoElement.attr('controls', '');
        video.onended = function(e) {
            button.show();
            videoElement.removeAttr('controls');
        }
        ;
    }
    );
    $('a.play-feature').click(function(event) {
        event.preventDefault();
        var videoElement = $(this).next('video')
        var button = $(this);
        var newmp4 = $(this).attr('data-mp4');
        var newwebm = $(this).attr('data-webm');
        var ambienthtml = videoElement.html();
        var maxheight = $('#hero-container').height();
        button.hide();
        $('#hero-container').css('max-height', 'none');
        $('#hero-container h1').hide();
        $('.slide-container video').show();
        $('.slide-container .flexslider').hide();
        sourcehtml = '';
        if (newwebm) {
            sourcehtml = '<source src="' + newwebm + '" type="video/webm">'
        }
        if (newmp4) {
            sourcehtml = sourcehtml + '<source src="' + newmp4 + '" type="video/mp4">';
        }
        ;videoElement.attr('controls', '').attr('loop', false).removeClass('ambient').html(sourcehtml);
        videoElement[0].load();
        videoElement[0].play();
        videoElement.on('ended', function(event) {
            button.show();
            $('#hero-container').css('max-height', maxheight + 'px');
            videoElement.removeAttr('controls').attr('loop', 'loop').addClass('ambient').html(ambienthtml);
            var poster = videoElement.attr('poster');
            videoElement[0].load();
            $('#hero-container h1').show();
            $('.slide-container video').hide();
            $('.slide-container .flexslider').show();
        }
        );
    }
    );
    $('.faq-toggle').toggle(function(event) {
        $(this).addClass('active').html('Close').closest('.faq-item').find('.answer').slideDown()
    }
    , function(event) {
        $(this).removeClass('active').html('Expand').closest('.faq-item').find('.answer').slideUp()
    }
    );
    $('#search-overlay input[name="findtext"]').liveSearch({
        url: '/search/predictive_search.php?findtext='
    });
    var search_open = false;
    $('#search-overlay').overlay({
        top: 0,
        onLoad: function() {
            $('#findtext').focus();
            search_open = true;
        },
        load: false,
        mask: {
            maskId: 'expose',
            zindex: 5,
            color: '#fff',
            opacity: 0.9,
        },
        onBeforeClose: function() {
            $('#jquery-live-search').hide();
            search_open = false;
        }
    });
    $('#search-button').click(function(event) {
        if (pageWidth > tablet) {
            event.preventDefault();
            if (search_open) {
                $('#search-overlay').data('overlay').close();
            } else {
                $('#search-overlay').data('overlay').load();
            }
        }
    }
    );
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    }
    );
    $('a[href^="http://"]').attr("target", "_blank");
    $('a[href^="https://"]').attr("target", "_blank");
    $('.overlay-trigger').magnificPopup({
        type: 'inline',
        callbacks: {
            close: function() {
                popupinstance = $.magnificPopup.instance;
                var overlayform = {};
                overlayform = popupinstance.content.find('.ajaxvalidate');
                if (overlayform.length > 0) {
                    if (typeof overlayform.data('orginalhtml') !== 'undefined') {
                        overlayform.html(overlayform.data('orginalhtml'));
                    }
                    ;
                }
                ;
            }
        }
    });
    $('.overlay-trigger-large').magnificPopup({
        type: 'inline',
        showCloseBtn: true,
        mainClass: 'iframe-container-large'
    });
    $('.overlay-trigger-iframe').magnificPopup({
        type: 'iframe',
        showCloseBtn: true
    });
    $('.overlay-trigger-ajax').magnificPopup({
        type: 'ajax'
    });
    $('.overlay-trigger-iframe2').magnificPopup({
        type: 'iframe',
        mainClass: 'iframe-container-2',
    });
    $(".tooltip-trigger").jTooltip();
    $('.toggle-reset').click(function() {
        $('#reset-location').slideToggle();
    }
    );
    $('.toggle-trigger').click(function(event) {
        var isActive = $(this).hasClass('active');
        if (isActive) {
            var expandtext = $(this).attr('data-expand-text');
            $(this).html(expandtext).removeClass('active').siblings('.toggle').slideUp();
        } else {
            var closetext = $(this).attr('data-close-text');
            $(this).html(closetext).addClass('active').siblings('.toggle').slideDown();
        }
    }
    );
    $("[data-slider]").bind("slider:ready slider:changed", function(event, data) {
        var units = $(this).attr('data-units');
        $(this).nextAll(".output:first").html('> ' + data.value.toFixed(1) + ' ' + units);
    }
    );
    $("a#share-facebook,a#share-twitter,a#share-linkedin,a#share-pinterest").click(function(event) {
        var category = 'Share';
        var subcategory = $(this).attr("id");
        subcategory = subcategory.split("-");
        subcategory = subcategory[(subcategory.length - 1)];
        var label = $(document).attr("title");
        var attributes = "width=550,height=300,location=0,menubar=0,toolbar=0";
        window.open($(this).attr("href"), "share", attributes, true);
        event.preventDefault();
    }
    );
    $("a.download,a[href$='pdf'],a[href$='doc'],a[href$='mp3']").click(function() {
        var category = 'Downloads';
        var filepath = $(this).attr("href");
        filepath = filepath.split(".");
        var filetype = filepath[(filepath.length - 1)].toUpperCase();
        var label = $(this).attr("title");
        if (!label) 
        {
            label = $(this).attr("href");
        }
        _gaq.push(['_trackEvent', category, filetype, label]);
        $(this).attr("target", "_blank");
    }
    );
    $(".expand").click(function() {
        $(this).next(".expandable").slideToggle(function() {
            $(window).scroll();
        }
        );
        $(this).toggleClass('active');
    }
    );
    $(".expand-previous").click(function() {
        $(this).prev(".expandable").slideToggle(function() {
            $(window).scroll();
        }
        );
        $(this).toggleClass('active');
    }
    );
    $('.inline-label input,.inline-label textarea').each(function() {
        $(this).focus(function() {
            $(this).siblings("label").fadeTo(75, 0);
        }
        );
        $(this).blur(function() {
            if ($(this).val()) 
            {
                fade_on_blur = 0;
            } 
            else 
            {
                fade_on_blur = 1.0;
            }
            $(this).siblings("label").fadeTo(75, fade_on_blur);
        }
        );
    }
    );
    $("nav#mainnav li.i1").find("ul").parent().each(function() {
        $(this).find("a.a1").addClass("showsub");
    }
    );
    (function() {
        $.event.props = ['altKey', 'attrChange', 'attrName', 'bubbles', 'button', 'cancelable', 'charCode', 'clientX', 'clientY', 'ctrlKey', 'currentTarget', 'data', 'detail', 'eventPhase', 'fromElement', 'handler', 'keyCode', 'layerX', 'layerY', 'metaKey', 'newValue', 'offsetX', 'offsetY', 'pageX', 'pageY', 'prevValue', 'relatedNode', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'srcElement', 'target', 'toElement', 'view', 'wheelDelta', 'which'];
        if ($.event.props[17] == 'layerX') {
            $.event.props.splice(17, 2);
        }
    }
    ());
}
);
var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    }
    ;
}
)();
var validationRunning = false;
$(document).ready(function() {
    $('body').on('submit', '.ajaxvalidate form', function(event) {
        event.preventDefault();
        var form_name = $(this).attr('name');
        ajax_makeValidationCall(form_name);
    }
    );
}
);
$('.ajaxprogressive form').submit(function(event) {
    alert('test');
    return false;
}
);
function ajax_makeValidationCall(form_name) 
{
    if (validationRunning) 
    {
        return;
    }
    validationRunning = true;
    clearFieldErrors(form_name);
    formObj = document.forms[form_name];
    if (!formObj) 
    {
        validationDone();
    }
    postParms = compileAllFieldValues(formObj);
    if (!postParms) 
    {
        validationDone();
    }
    postURL = '/formsmgr/validate.php';
    var xmlhttp = initHTTPObject();
    xmlhttp.open('POST', postURL, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() 
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
            ajax_processValidationResponse(form_name, xmlhttp.responseText)
        }
    }
    ;
    xmlhttp.send(postParms);
}
function ajax_processValidationResponse(form_name, response) 
{
    validationRunning = false;
    found_errors = new Array();
    form_name = form_name.toString();
    if (!response) 
    {
        ajax_submitForm(form_name);
        return;
    }
    eval(response);
    if (!found_errors[0]) 
    {
        ajax_submitForm(form_name);
        return;
    }
    for (i = 0; i <= (found_errors.length - 1); i++) 
    {
        errornumber = i + 1;
        errormessage = found_errors[i][0];
        fieldname = found_errors[i][1];
        fieldid = found_errors[i][2];
        showError(form_name, errornumber, errormessage, fieldname, fieldid);
    }
    window.location = '#fieldblock-' + found_errors[0][2];
    validationDone();
}
function ajax_submitForm(formname) 
{
    var form = $('#' + formname);
    var formObj = document.getElementById(formname);
    var data = new FormData(formObj);
    var action = form.attr('action');
    var container = $('#' + formname + '-container');
    var _formObj = formObj;
    var iframe = $('<iframe style="display:none;" id="cmsformpost" name="postform"></iframe>');
    $("body").append(iframe);
    $(formObj).attr('target', 'postform');
    formObj.submit();
    iframe.load(function(event) {
        var iframeContents = $(event.currentTarget).contents().find("body").html();
        $('#cmsformpost').remove();
        if (iframeContents) 
        {
            var orginalhtml = container.html();
            container.html(iframeContents).data('orginalhtml', orginalhtml);
            var position = parseInt(container.offset().top) - topOffset - 30;
            $('html, body').animate({
                scrollTop: position
            });
        }
    }
    );
    ga('send', 'event', 'CTA', 'submit', formname);
    validationDone();
}
