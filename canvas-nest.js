"use strict";
! function() {
    function C(f, a, b) {
        return f.getAttribute(a) || b
    }

    function l() {
        var a = document.getElementsByTagName("script"),
            f = a[a.length - 1],
            h, g, b;
        h = C(f, "zIndex", -1);
        g = C(f, "opacity", 0.5);
        b = C(f, "color", "0,0,0");
        return {
            z: h,
            o: g,
            c: b
        }
    }

    function t() {
        A.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, A.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function d() {
        e.clearRect(0, 0, A.width, A.height);
        var b = [D].concat(n);
        n.forEach(function(h) {
            h.x += h.xa, h.y += h.ya, h.xa *= h.x > A.width || h.x < 0 ? -1 : 1, h.ya *= h.y > A.height || h.y < 0 ? -1 : 1, e.fillRect(h.x - 0.5, h.y - 0.5, 1, 1);
            for (var a = 0; a < b.length; a++) {
                var g = b[a];
                if (h !== g && null !== g.x && null !== g.y) {
                    var j, f = h.x - g.x,
                        o = h.y - g.y,
                        k = f * f + o * o;
                    k < g.max && (g === D && k >= g.max / 2 && (h.x -= 0.03 * f, h.y -= 0.03 * o), j = (g.max - k) / g.max, e.beginPath(), e.lineWidth = j / 2, e.strokeStyle = "rgba(" + i.c + "," + (j + 0.2) + ")", e.moveTo(h.x, h.y), e.lineTo(g.x, g.y), e.stroke())
                }
            }
            b.splice(b.indexOf(h), 1)
        }), u(d)
    }
    var c = "canvas_nest",
        r = document.createElement("canvas"),
        i = l();
    r.id = c;
    r.style.position = "fixed";
    r.style.top = 0;
    r.style.left = 0;
    r.style.zIndex = i.z;
    r.style.opacity = i.o;
    document.getElementsByTagName("body")[0].appendChild(r);
    var A = document.getElementById(c),
        e = A.getContext("2d");
    t(), window.onresize = t;
    var u = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
            window.setTimeout(b, 1000 / 60)
        }
    }(),
        D = {
            x: null,
            y: null,
            max: 20000
        };
    window.onmousemove = function(b) {
        b = b || window.event, D.x = b.clientX, D.y = b.clientY
    }, window.onmouseout = function(b) {
        D.x = null, D.y = null
    };
    for (var n = [], F = 0; 150 > F; F++) {
        var B = Math.random() * A.width,
            E = Math.random() * A.height,
            z = 2 * Math.random() - 1,
            m = 2 * Math.random() - 1;
        n.push({
            x: B,
            y: E,
            xa: z,
            ya: m,
            max: 6000
        })
    }
    setTimeout(function() {
        d()
    }, 100)
}();