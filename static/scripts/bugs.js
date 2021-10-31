// This script comes from lunarclient.com

'use strict';

var BugDispatch = {
    options: {
        minDelay: 500,
        maxDelay: 10000,
        minBugs: 2,
        maxBugs: 20,
        minSpeed: 5,
        maxSpeed: 10,
        maxLargeTurnDeg: 150,
        maxSmallTurnDeg: 10,
        maxWiggleDeg: 5,
        imageSprite: 'fly-sprite.png',
        bugWidth: 13,
        bugHeight: 14,
        num_frames: 5,
        zoom: 10,
        canFly: !0,
        canDie: !0,
        numDeathTypes: 3,
        monitorMouseMovement: !1,
        eventDistanceToBug: 40,
        minTimeBetweenMultipy: 1000,
        mouseOver: 'random'
    },
    initialize: function (t) {
        if (this.options = mergeOptions(this.options, t), this.options.minBugs > this.options.maxBugs && (this.options.minBugs = this.options.maxBugs), this.modes = [
            'multiply',
            'nothing'
        ], this.options.canFly && this.modes.push('fly', 'flyoff'), this.options.canDie && this.modes.push('die'), - 1 == this.modes.indexOf(this.options.mouseOver) && (this.options.mouseOver = 'random'), this.transform = null, this.transforms = {
            Moz: function (t) {
                this.bug.style.MozTransform = t
            },
            webkit: function (t) {
                this.bug.style.webkitTransform = t
            },
            O: function (t) {
                this.bug.style.OTransform = t
            },
            ms: function (t) {
                this.bug.style.msTransform = t
            },
            Khtml: function (t) {
                this.bug.style.KhtmlTransform = t
            },
            w3c: function (t) {
                this.bug.style.transform = t
            }
        }, 'transform' in document.documentElement.style) this.transform = this.transforms.w3c;
         else {
            var i = [
                'Moz',
                'webkit',
                'O',
                'ms',
                'Khtml'
            ],
            e = 0;
            for (e = 0; e < i.length; e++) if (i[e] + 'Transform' in document.documentElement.style) {
                this.transform = this.transforms[i[e]];
                break
            }
        }
        if (this.transform) {
            this.bugs = [
            ];
            var s = 'multiply' === this.options.mouseOver ? this.options.minBugs : this.random(this.options.minBugs, this.options.maxBugs, !0),
            n = (e = 0, this);
            for (e = 0; e < s; e++) {
                t = JSON.parse(JSON.stringify(this.options));
                var o = SpawnBug();
                t.wingsOpen = !this.options.canFly || Math.random() > 0.5,
                t.walkSpeed = this.random(this.options.minSpeed, this.options.maxSpeed),
                o.initialize(this.transform, t),
                this.bugs.push(o)
            }
            for (this.spawnDelay = [
            ], e = 0; e < s; e++) {
                var h = this.random(this.options.minDelay, this.options.maxDelay, !0),
                a = this.bugs[e];
                this.spawnDelay[e] = setTimeout(function (t) {
                    return function () {
                        n.options.canFly ? t.flyIn() : t.walkIn()
                    }
                }(a), h),
                n.add_events_to_bug(a)
            }
            this.options.monitorMouseMovement && (window.onmousemove = function () {
                n.check_if_mouse_close_to_bug()
            })
        }
    },
    stop: function () {
        for (var t = 0; t < this.bugs.length; t++) this.spawnDelay[t] && clearTimeout(this.spawnDelay[t]),
        this.bugs[t].stop()
    },
    end: function () {
        for (var t = 0; t < this.bugs.length; t++) this.spawnDelay[t] && clearTimeout(this.spawnDelay[t]),
        this.bugs[t].stop(),
        this.bugs[t].remove()
    },
    reset: function () {
        this.stop();
        for (var t = 0; t < this.bugs.length; t++) this.bugs[t].reset(),
        this.bugs[t].walkIn()
    },
    killAll: function () {
        for (var t = 0; t < this.bugs.length; t++) this.spawnDelay[t] && clearTimeout(this.spawnDelay[t]),
        this.bugs[t].die()
    },
    add_events_to_bug: function (t) {
        var i = this;
        t.bug && (t.bug.addEventListener ? t.bug.addEventListener('mouseover', function (e) {
            i.on_bug(t)
        }) : t.bug.attachEvent && t.bug.attachEvent('onmouseover', function (e) {
            i.on_bug(t)
        }))
    },
    check_if_mouse_close_to_bug: function (t) {
        if (t = t || window.event) {
            var i = 0,
            e = 0;
            t.client && t.client.x ? (i = t.client.x, e = t.client.y) : t.clientX ? (i = t.clientX, e = t.clientY) : t.page && t.page.x ? (i = t.page.x - (document.body.scrollLeft + document.documentElement.scrollLeft), e = t.page.y - (document.body.scrollTop + document.documentElement.scrollTop)) : t.pageX && (i = t.pageX - (document.body.scrollLeft + document.documentElement.scrollLeft), e = t.pageY - (document.body.scrollTop + document.documentElement.scrollTop));
            var s = this.bugs.length,
            n = 0;
            for (n = 0; n < s; n++) {
                var o = this.bugs[n].getPos();
                o && Math.abs(o.top - e) + Math.abs(o.left - i) < this.options.eventDistanceToBug && !this.bugs[n].flyperiodical && this.near_bug(this.bugs[n])
            }
        }
    },
    near_bug: function (t) {
        this.on_bug(t)
    },
    on_bug: function (t) {
        if (t.alive) {
            var i = this.options.mouseOver;
            if ('random' === i && (i = this.modes[this.random(0, this.modes.length - 1, !0)]), 'fly' === i) t.stop(),
            t.flyRand();
             else {
                if ('nothing' === i) return;
                if ('flyoff' === i) t.stop(),
                t.flyOff();
                 else if ('die' === i) t.die();
                 else if ('multiply' === i && !this.multiplyDelay && this.bugs.length < this.options.maxBugs) {
                    var e = SpawnBug(),
                    s = JSON.parse(JSON.stringify(this.options)),
                    n = t.getPos(),
                    o = this;
                    s.wingsOpen = !this.options.canFly || Math.random() > 0.5,
                    s.walkSpeed = this.random(this.options.minSpeed, this.options.maxSpeed),
                    e.initialize(this.transform, s),
                    e.drawBug(n.top, n.left),
                    s.canFly ? (e.flyRand(), t.flyRand()) : (e.go(), t.go()),
                    this.bugs.push(e),
                    this.multiplyDelay = !0,
                    setTimeout(function () {
                        o.add_events_to_bug(e),
                        o.multiplyDelay = !1
                    }, this.options.minTimeBetweenMultipy)
                }
            }
        }
    },
    random: function (t, i, e) {
        if (t == i) return e ? Math.round(t) : t;
        var s = t - 0.5 + Math.random() * (i - t + 1);
        return s > i ? s = i : s < t && (s = t),
        e ? Math.round(s) : s
    }
},
BugController = function () {
    this.initialize.apply(this, arguments)
};
BugController.prototype = BugDispatch;

var SpiderController = function () {
    this.options = mergeOptions(this.options, {
        imageSprite: 'spider-sprite.png',
        bugWidth: 69,
        bugHeight: 90,
        num_frames: 7,
        canFly: !1,
        canDie: !0,
        numDeathTypes: 2,
        zoom: 6,
        minDelay: 200,
        maxDelay: 3000,
        minSpeed: 6,
        maxSpeed: 13,
        minBugs: 3,
        maxBugs: 10
    }),
    this.initialize.apply(this, arguments)
};
SpiderController.prototype = BugDispatch;
var Bug = {
    options: {
        wingsOpen: !1,
        walkSpeed: 2,
        flySpeed: 40,
        edge_resistance: 50,
        zoom: 10
    },
    initialize: function (t, i) {
        this.options = mergeOptions(this.options, i),
        this.NEAR_TOP_EDGE = 1,
        this.NEAR_BOTTOM_EDGE = 2,
        this.NEAR_LEFT_EDGE = 4,
        this.NEAR_RIGHT_EDGE = 8,
        this.directions = {
        },
        this.directions[this.NEAR_TOP_EDGE] = 270,
        this.directions[this.NEAR_BOTTOM_EDGE] = 90,
        this.directions[this.NEAR_LEFT_EDGE] = 0,
        this.directions[this.NEAR_RIGHT_EDGE] = 180,
        this.directions[this.NEAR_TOP_EDGE + this.NEAR_LEFT_EDGE] = 315,
        this.directions[this.NEAR_TOP_EDGE + this.NEAR_RIGHT_EDGE] = 225,
        this.directions[this.NEAR_BOTTOM_EDGE + this.NEAR_LEFT_EDGE] = 45,
        this.directions[this.NEAR_BOTTOM_EDGE + this.NEAR_RIGHT_EDGE] = 135,
        this.angle_deg = 0,
        this.angle_rad = 0,
        this.large_turn_angle_deg = 0,
        this.near_edge = !1,
        this.edge_test_counter = 10,
        this.small_turn_counter = 0,
        this.large_turn_counter = 0,
        this.fly_counter = 0,
        this.toggle_stationary_counter = 50 * Math.random(),
        this.zoom = this.random(this.options.zoom, 10) / 10,
        this.stationary = !1,
        this.bug = null,
        this.active = !0,
        this.wingsOpen = this.options.wingsOpen,
        this.transform = t,
        this.walkIndex = 0,
        this.flyIndex = 0,
        this.alive = !0,
        this.twitchTimer = null,
        this.rad2deg_k = 180 / Math.PI,
        this.deg2rad_k = Math.PI / 180,
        this.makeBug(),
        this.angle_rad = this.deg2rad(this.angle_deg),
        this.angle_deg = this.random(0, 360, !0)
    },
    go: function () {
        if (this.transform) {
            this.drawBug();
            var t = this;
            this.animating = !0,
            this.going = requestAnimFrame(function (i) {
                t.animate(i)
            })
        }
    },
    stop: function () {
        this.animating = !1,
        this.going && (clearTimeout(this.going), this.going = null),
        this.flyperiodical && (clearTimeout(this.flyperiodical), this.flyperiodical = null),
        this.twitchTimer && (clearTimeout(this.twitchTimer), this.twitchTimer = null)
    },
    remove: function () {
        this.active = !1,
        this.inserted && this.bug.parentNode && (this.bug.parentNode.removeChild(this.bug), this.inserted = !1)
    },
    reset: function () {
        this.alive = !0,
        this.active = !0,
        this.bug.style.bottom = '',
        this.bug.style.top = 0,
        this.bug.style.left = 0,
        this.bug.classList.remove('bug-dead')
    },
    animate: function (t) {
        if (this.animating && this.alive && this.active) {
            var i = this;
            this.going = requestAnimFrame(function (t) {
                i.animate(t)
            }),
            '_lastTimestamp' in this || (this._lastTimestamp = t);
            var e = t - this._lastTimestamp;
            if (!(e < 40 || (e > 200 && (e = 200), this._lastTimestamp = t, --this.toggle_stationary_counter <= 0 && this.toggleStationary(), this.stationary))) {
                if (--this.edge_test_counter <= 0 && this.bug_near_window_edge() && (this.angle_deg %= 360, this.angle_deg < 0 && (this.angle_deg += 360), Math.abs(this.directions[this.near_edge] - this.angle_deg) > 15)) {
                    var s = this.directions[this.near_edge] - this.angle_deg,
                    n = 360 - this.angle_deg + this.directions[this.near_edge];
                    this.large_turn_angle_deg = Math.abs(s) < Math.abs(n) ? s : n,
                    this.edge_test_counter = 10,
                    this.large_turn_counter = 100,
                    this.small_turn_counter = 30
                }
                if (--this.large_turn_counter <= 0 && (this.large_turn_angle_deg = this.random(1, this.options.maxLargeTurnDeg, !0), this.next_large_turn()), --this.small_turn_counter <= 0) this.angle_deg += this.random(1, this.options.maxSmallTurnDeg),
                this.next_small_turn();
                 else {
                    var o = this.random(1, this.options.maxWiggleDeg, !0);
                    (this.large_turn_angle_deg > 0 && o < 0 || this.large_turn_angle_deg < 0 && o > 0) && (o = - o),
                    this.large_turn_angle_deg -= o,
                    this.angle_deg += o
                }
                this.angle_rad = this.deg2rad(this.angle_deg);
                var h = Math.cos(this.angle_rad) * this.options.walkSpeed * (e / 100),
                a = - Math.sin(this.angle_rad) * this.options.walkSpeed * (e / 100);
                this.moveBug(this.bug.left + h, this.bug.top + a, 90 - this.angle_deg),
                this.walkFrame()
            }
        }
    },
    makeBug: function () {
        if (!this.bug && this.active) {
            var t = this.wingsOpen ? '0' : '-' + this.options.bugHeight + 'px',
            i = document.createElement('div');
            i.className = 'bug',
            i.style.background = 'transparent url(' + this.options.imageSprite + ') no-repeat 0 ' + t,
            i.style.width = this.options.bugWidth + 'px',
            i.style.height = this.options.bugHeight + 'px',
            i.style.position = 'fixed',
            i.style.top = 0,
            i.style.left = 0,
            i.style.zIndex = '9999999',
            this.bug = i,
            this.setPos()
        }
    },
    setPos: function (t, i) {
        this.bug.top = t || this.random(this.options.edge_resistance, document.documentElement.clientHeight - this.options.edge_resistance),
        this.bug.left = i || this.random(this.options.edge_resistance, document.documentElement.clientWidth - this.options.edge_resistance),
        this.moveBug(this.bug.left, this.bug.top, 90 - this.angle_deg)
    },
    moveBug: function (t, i, e) {
        this.bug.left = t,
        this.bug.top = i;
        var s = 'translate(' + parseInt(t) + 'px,' + parseInt(i) + 'px)';
        e && (s += ' rotate(' + e + 'deg)'),
        s += ' scale(' + this.zoom + ')',
        this.transform(s)
    },
    drawBug: function (t, i) {
        this.bug || this.makeBug(),
        this.bug && (t && i ? this.setPos(t, i) : this.setPos(this.bug.top, this.bug.left), this.inserted || (this.inserted = !0, document.body.appendChild(this.bug)))
    },
    toggleStationary: function () {
        this.stationary = !this.stationary,
        this.next_stationary();
        var t = this.wingsOpen ? '0' : '-' + this.options.bugHeight + 'px';
        this.stationary ? this.bug.style.backgroundPosition = '0 ' + t : this.bug.style.backgroundPosition = '-' + this.options.bugWidth + 'px ' + t
    },
    walkFrame: function () {
        var t = this.walkIndex * this.options.bugWidth * - 1 + 'px',
        i = this.wingsOpen ? '0' : '-' + this.options.bugHeight + 'px';
        this.bug.style.backgroundPosition = t + ' ' + i,
        this.walkIndex++,
        this.walkIndex >= this.options.num_frames && (this.walkIndex = 0)
    },
    fly: function (t) {
        var i = this.bug.top,
        e = this.bug.left,
        s = e - t.left,
        n = i - t.top,
        o = Math.atan(n / s);
        if (Math.abs(s) + Math.abs(n) < 50 && (this.bug.style.backgroundPosition = - 2 * this.options.bugWidth + 'px -' + 2 * this.options.bugHeight + 'px'), Math.abs(s) + Math.abs(n) < 30 && (this.bug.style.backgroundPosition = - 1 * this.options.bugWidth + 'px -' + 2 * this.options.bugHeight + 'px'), Math.abs(s) + Math.abs(n) < 10) return this.bug.style.backgroundPosition = '0 0',
        this.stop(),
        void this.go();
        var h = Math.cos(o) * this.options.flySpeed,
        a = Math.sin(o) * this.options.flySpeed;
        (e > t.left && h > 0 || e > t.left && h < 0) && (h *= - 1, Math.abs(s) < Math.abs(h) && (h /= 4)),
        (i < t.top && a < 0 || i > t.top && a > 0) && (a *= - 1, Math.abs(n) < Math.abs(a) && (a /= 4)),
        this.moveBug(e + h, i + a)
    },
    flyRand: function () {
        this.stop();
        var t = {
        };
        t.top = this.random(this.options.edge_resistance, document.documentElement.clientHeight - this.options.edge_resistance),
        t.left = this.random(this.options.edge_resistance, document.documentElement.clientWidth - this.options.edge_resistance),
        this.startFlying(t)
    },
    startFlying: function (t) {
        var i = this.bug.top,
        e = this.bug.left,
        s = t.left - e,
        n = t.top - i;
        this.bug.left = t.left,
        this.bug.top = t.top,
        this.angle_rad = Math.atan(n / s),
        this.angle_deg = this.rad2deg(this.angle_rad),
        this.angle_deg = s > 0 ? 90 + this.angle_deg : 270 + this.angle_deg,
        this.moveBug(e, i, this.angle_deg);
        var o = this;
        this.flyperiodical = setInterval(function () {
            o.fly(t)
        }, 10)
    },
    flyIn: function () {
        if (this.bug || this.makeBug(), this.bug) {
            this.stop();
            var t = Math.round(4 * Math.random() - 0.5),
            i = document,
            e = i.documentElement,
            s = i.getElementsByTagName('body') [0],
            n = window.innerWidth || e.clientWidth || s.clientWidth,
            o = window.innerHeight || e.clientHeight || s.clientHeight;
            t > 3 && (t = 3),
            t < 0 && (t = 0);
            var h = {
            };
            0 === t ? (h.top = - 2 * this.options.bugHeight, h.left = Math.random() * n) : 1 === t ? (h.top = Math.random() * o, h.left = n + 2 * this.options.bugWidth) : 2 === t ? (h.top = o + 2 * this.options.bugHeight, h.left = Math.random() * n) : (h.top = Math.random() * o, h.left = - 3 * this.options.bugWidth);
            var a = this.wingsOpen ? '0' : '-' + this.options.bugHeight + 'px';
            this.bug.style.backgroundPosition = - 3 * this.options.bugWidth + 'px ' + a,
            this.bug.top = h.top,
            this.bug.left = h.left,
            this.drawBug();
            var r = {
            };
            r.top = this.random(this.options.edge_resistance, document.documentElement.clientHeight - this.options.edge_resistance),
            r.left = this.random(this.options.edge_resistance, document.documentElement.clientWidth - this.options.edge_resistance),
            this.startFlying(r)
        }
    },
    walkIn: function () {
        if (this.bug || this.makeBug(), this.bug) {
            this.stop();
            var t = Math.round(4 * Math.random() - 0.5),
            i = document,
            e = i.documentElement,
            s = i.getElementsByTagName('body') [0],
            n = window.innerWidth || e.clientWidth || s.clientWidth,
            o = window.innerHeight || e.clientHeight || s.clientHeight;
            t > 3 && (t = 3),
            t < 0 && (t = 0);
            var h = {
            };
            0 === t ? (h.top = - 1.3 * this.options.bugHeight, h.left = Math.random() * n) : 1 === t ? (h.top = Math.random() * o, h.left = n + 0.3 * this.options.bugWidth) : 2 === t ? (h.top = o + 0.3 * this.options.bugHeight, h.left = Math.random() * n) : (h.top = Math.random() * o, h.left = - 1.3 * this.options.bugWidth);
            var a = this.wingsOpen ? '0' : '-' + this.options.bugHeight + 'px';
            this.bug.style.backgroundPosition = - 3 * this.options.bugWidth + 'px ' + a,
            this.bug.top = h.top,
            this.bug.left = h.left,
            this.drawBug(),
            this.go()
        }
    },
    flyOff: function () {
        this.stop();
        var t = this.random(0, 3),
        i = {
        },
        e = document,
        s = e.documentElement,
        n = e.getElementsByTagName('body') [0],
        o = window.innerWidth || s.clientWidth || n.clientWidth,
        h = window.innerHeight || s.clientHeight || n.clientHeight;
        0 === t ? (i.top = - 200, i.left = Math.random() * o) : 1 === t ? (i.top = Math.random() * h, i.left = o + 200) : 2 === t ? (i.top = h + 200, i.left = Math.random() * o) : (i.top = Math.random() * h, i.left = - 200),
        this.startFlying(i)
    },
    die: function () {
        this.stop();
        var t = this.random(0, this.options.numDeathTypes - 1);
        this.alive = !1,
        this.drop(t)
    },
    drop: function (t) {
        var i = this.bug.top,
        e = document,
        s = e.documentElement,
        n = e.getElementsByTagName('body') [0],
        o = (o = window.innerHeight || s.clientHeight || n.clientHeight) - this.options.bugHeight,
        h = this.random(0, 20, !0),
        a = (Date.now(), this);
        this.bug.classList.add('bug-dead'),
        setTimeout(() =>{
            this.bug.style.display = 'none'
        }, 2000),
        this.dropTimer = requestAnimFrame(function (e) {
            a._lastTimestamp = e,
            a.dropping(e, i, o, h, t)
        })
    },
    dropping: function (t, i, e, s, n) {
        var o = t - this._lastTimestamp,
        h = i + o * o * 0.002,
        a = this;
        if (h >= e) {
            h = e,
            clearTimeout(this.dropTimer),
            this.angle_deg = 0,
            this.angle_rad = this.deg2rad(this.angle_deg),
            this.transform('rotate(' + (90 - this.angle_deg) + 'deg) scale(' + this.zoom + ')'),
            this.bug.style.top = null;
            var r = (this.options.bugWidth * this.zoom - this.options.bugHeight * this.zoom) / 2,
            g = this.options.bugHeight / 2 * (1 - this.zoom);
            return this.bug.style.bottom = Math.ceil(r - g) + 'px',
            this.bug.style.left = this.bug.left + 'px',
            this.bug.style.backgroundPosition = '-' + 2 * n * this.options.bugWidth + 'px 100%',
            void this.twitch(n)
        }
        this.dropTimer = requestAnimFrame(function (t) {
            a.dropping(t, i, e, s, n)
        }),
        o < 20 || (this.angle_deg = (this.angle_deg + s) % 360, this.angle_rad = this.deg2rad(this.angle_deg), this.moveBug(this.bug.left, h, this.angle_deg))
    },
    twitch: function (t, i) {
        i || (i = 0);
        var e = this;
        0 !== t && 1 !== t || (e.twitchTimer = setTimeout(function () {
            e.bug.style.backgroundPosition = '-' + (2 * t + i % 2) * e.options.bugWidth + 'px 100%',
            e.twitchTimer = setTimeout(function () {
                i++,
                e.bug.style.backgroundPosition = '-' + (2 * t + i % 2) * e.options.bugWidth + 'px 100%',
                e.twitch(t, ++i)
            }, e.random(300, 800))
        }, this.random(1000, 10000)))
    },
    rad2deg: function (t) {
        return t * this.rad2deg_k
    },
    deg2rad: function (t) {
        return t * this.deg2rad_k
    },
    random: function (t, i, e) {
        if (t == i) return t;
        var s = Math.round(t - 0.5 + Math.random() * (i - t + 1));
        return e ? Math.random() > 0.5 ? s : - s : s
    },
    next_small_turn: function () {
        this.small_turn_counter = Math.round(10 * Math.random())
    },
    next_large_turn: function () {
        this.large_turn_counter = Math.round(40 * Math.random())
    },
    next_stationary: function () {
        this.toggle_stationary_counter = this.random(50, 300)
    },
    bug_near_window_edge: function () {
        return this.near_edge = 0,
        this.bug.top < this.options.edge_resistance ? this.near_edge |= this.NEAR_TOP_EDGE : this.bug.top > document.documentElement.clientHeight - this.options.edge_resistance && (this.near_edge |= this.NEAR_BOTTOM_EDGE),
        this.bug.left < this.options.edge_resistance ? this.near_edge |= this.NEAR_LEFT_EDGE : this.bug.left > document.documentElement.clientWidth - this.options.edge_resistance && (this.near_edge |= this.NEAR_RIGHT_EDGE),
        this.near_edge
    },
    getPos: function () {
        return this.inserted && this.bug && this.bug.style ? {
            top: parseInt(this.bug.top, 10),
            left: parseInt(this.bug.left, 10)
        }
         : null
    }
},
SpawnBug = function () {
    var t,
    i = {
    };
    for (t in Bug) Bug.hasOwnProperty(t) && (i[t] = Bug[t]);
    return i
},
mergeOptions = function (t, i, e) {
    void 0 === e && (e = !0);
    var s = e ? cloneOf(t) : t;
    for (var n in i) i.hasOwnProperty(n) && (s[n] = i[n]);
    return s
},
cloneOf = function (t) {
    if (null == t || 'object' != typeof t) return t;
    var i = t.constructor();
    for (var e in t) t.hasOwnProperty(e) && (i[e] = cloneOf(t[e]));
    return i
};

window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, i) {
    window.setTimeout(t, 1000 / 60)
};