t.prototype.getTransactionDate = function() {
            var t = new Date
              , e = t.getFullYear().toString()
              , n = (t.getMonth() + 1).toString();
            n = this.padnum(n, 2);
            var i = t.getDate().toString();
            i = this.padnum(i, 2);
            var r = t.getHours().toString();
            r = this.padnum(r, 2);
            var a = t.getMinutes().toString();
            a = this.padnum(a, 2);
            var o = t.getSeconds().toString();
            return o = this.padnum(o, 2),
            e + n + i + r + a + o
        }
        ,
        t.prototype.getReferenceNo = function() {
            var t = this.getTransactionDate()
              , e = Math.floor(998 * Math.random() + 1).toString();
            return t + this.padnum(e, 3)
        }
        ,
        t.prototype.parseDate = function(t) {
            var e = /(\d{2})\/(\d{2})\/(\d{4})/
              , n = e.exec(t);
            return null == n ? null : new Date(+n[3],+n[2] - 1,+n[1])
        }
        ,
        t.prototype.parseDateTime = function(t) {
            var e = /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/
              , n = e.exec(t);
            return null == n ? null : new Date(+n[3],+n[2] - 1,+n[1],+n[4],+n[5],+n[6])
        }
        ,
        t.prototype.formatDate = function(t, e, n) {
            return void 0 === n && (n = this.constants.KNOWN_CULTURE_ENLISH_US),
            i.locale(n),
            i(t).format(e)
        }
        ,
        t.prototype.toString = function(t) {
            return ("0" + (t.getDate() + 1)).slice(-2) + "/" + ("0" + (t.getMonth() + 1)).slice(-2) + "/" + t.getFullYear()
        }
        ,
        t.prototype.toISOFormat = function(t) {
            var e = t
              , n = e.split(" ");
            if (n.length > 0) {
                var i = "/";
                n[0].indexOf("/") > -1 ? i = "/" : n[0].indexOf("-") > -1 && (i = "-"),
                e = n[0].split(i)[1] + "/" + n[0].split(i)[0] + "/" + n[0].split(i)[2] + " " + (n[1] ? n[1] : "")
            }
            return e
        }
        ,
        t.prototype.getMasterDates = function() {
            return {
                dayShortNames: ["label.weekDay.Sun", "label.weekDay.Mon", "label.weekDay.Tue", "label.weekDay.Wed", "label.weekDay.Thu", "label.weekDay.Fri", "label.weekDay.Sat"],
                dayNames: ["label.weekDay.Sunday", "label.weekDay.Monday", "label.weekDay.Tuesday", "label.weekDay.Wednesday", "label.weekDay.Thursday", "label.weekDay.Friday", "label.weekDay.Saturday"],
                monthShortNames: ["label.months.Jan", "label.months.Feb", "label.months.Mar", "label.months.Apr", "label.months.May", "label.months.Jun", "label.months.Jul", "label.months.Aug", "label.months.Sep", "label.months.Oct", "label.months.Nov", "label.months.Dec"],
                monthNames: ["label.months.January", "label.months.February", "label.months.March", "label.months.April", "label.months.MayFullName", "label.months.June", "label.months.July", "label.months.August", "label.months.September", "label.months.October", "label.months.November", "label.months.December"]
            }
        }
        ,
        t.prototype.parseMomentDate = function(t, e) {
            return i(t, e)
        }
        ,
        t.prototype.formatISODate = function(t, e) {
            return this.formatDate(new Date(t), e)
        }
