var s = function() {
    function t(t) {
        this.constants = t
    }
    return t.prototype.getBrowserVersion = function() {
        var t, e = navigator.userAgent, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
        {
            name: "IE",
            version: t[1]
        }) : "Chrome" === n[1] && null != (t = e.match(/\bOPR\/(\d+)/)) ? {
            name: "Opera",
            version: t[1]
        } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (t = e.match(/version\/(\d+)/i)) && n.splice(1, 1, t[1]),
        {
            name: n[0],
            version: n[1]
        })
    }
    ,
    t.prototype.getDeviceUUID = function() {
        return this.genGuid()
    }
    ,
    t.prototype.genGuid = function() {
        return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4()
    }
    ,
    t.prototype.s4 = function() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    ,
    t.prototype.getCurrentKnownCulture = function(t) {
        var e = this.constants.KNOWN_CULTURE_ENLISH_US;
        return t.toUpperCase() == this.constants.CULTURE_SHORTNAME_THAI && (e = this.constants.KNOWN_CULTURE_THAI),
        e
    }
    ,
    t.prototype.downloadStreamFile = function(t, e) {
        if (t) {
            if ("SAFARI" == this.getBrowserVersion().name.toUpperCase()) {
                var n = "data:application/pdf;base64," + t;
                this.openTab(n)
            } else {
                var i = Base64Binary.decodeArrayBuffer(t)
                  , r = new Blob([i],{
                    type: "application/pdf"
                });
                saveAs(r, e)
            }
        }
    }
    ,
    t.prototype.cloneObject = function(t) {
        var e = t;
        return t && (e = JSON.parse(JSON.stringify(t))),
        e
    }
    ,
    t.prototype.arrayObjectIndexOf = function(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e)
                return n;
        return -1
    }
    ,
    t.prototype.openTab = function(t) {
        function e(t, e) {
            if (t.fireEvent)
                t.fireEvent("on" + e);
            else {
                var n = document.createEvent("Events");
                n.initEvent(e, !0, !1),
                t.dispatchEvent(n)
            }
        }
        var n = window.document.createElement("a");
        n.target = "_blank",
        n.href = t,
        e(n, "click")
    }
    ,
    t.prototype.scrollToTop = function() {
        try {
            if (window != window.top) {
                var t = {
                    key: "scrollTop",
                    value: ""
                };
                window.parent.postMessage(JSON.stringify(t), "*")
            } else
                window.scrollTo(0, 0)
        } catch (t) {}
    }
    ,
    t.prototype.pageLoad = function(t) {
        void 0 === t && (t = null);
        try {
            if (window != window.top) {
                var e = {
                    key: "offsetHeight",
                    value: this.getDocHeight(t)
                };
                window.parent.postMessage(JSON.stringify(e), "*")
            }
        } catch (t) {}
    }
    ,
    t.prototype.setPageHeight = function(t) {
        try {
            if (window != window.top) {
                var e = {
                    key: "offsetHeight",
                    value: t
                };
                window.parent.postMessage(JSON.stringify(e), "*")
            }
        } catch (t) {}
    }
    ,
    t.prototype.resetInputState = function(t, e) {
        var n = t.controls[e];
        void 0 !== n && (n.markAsPristine(),
        n.markAsUntouched())
    }
    ,
    t.prototype.getDocHeight = function(t) {
        var e = document
          , n = null == t ? 0 : t;
        return Math.max(Math.max(e.body.scrollHeight, e.documentElement.scrollHeight) + n, Math.max(e.body.offsetHeight, e.documentElement.offsetHeight) + n, Math.max(e.body.clientHeight, e.documentElement.clientHeight) + n)
    }
    ,
    t.prototype.getBillerIcon = function(t) {
        return this.constants.BILLER_ICON_URL + t.billerProfileId + ".png?v=57"
    }
    ,
    t.prototype.getDefaultBillerIcon = function(t) {
        t.target.src = this.constants.DEFAULT_BILLER_ICON + "?v=57"
    }
    ,
    t.prototype.getDefaultBillerIconPath = function() {
        return this.constants.DEFAULT_BILLER_ICON + "?v=57"
    }
    ,
    t.prototype.getEDonateIcon = function(t) {
        return this.constants.BILLER_ICON_URL + t.billerProfileId + ".png?v=57"
    }
    ,
    t.prototype.getDefaultEDonateIcon = function(t) {
        t.target.src = this.constants.DEFAULT_E_DONATE_BILLER_ICON + "?v=57"
    }
    ,
    t.prototype.getDefaultEDonateIconPath = function() {
        return this.constants.DEFAULT_E_DONATE_BILLER_ICON + "?v=57"
    }
    ,
    t.prototype.validSpecialChar = function(t) {
        return new RegExp("[-!$%^&*()_+|~=`{}[:;<>?,.@#\\]]","g").test(t)
    }
    ,
    t.prototype.validNewline = function(t) {
        return new RegExp("\\n\\r|\\n|\\r","g").test(t)
    }
    ,
    t = a([n.i(i.Injectable)(), o("design:paramtypes", ["function" == typeof (e = void 0 !== r.a && r.a) && e || Object])], t);
    var e
}()
