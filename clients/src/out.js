(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/luxon/build/cjs-browser/luxon.js
  var require_luxon = __commonJS({
    "node_modules/luxon/build/cjs-browser/luxon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [null];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n2 = Object.prototype.toString.call(o).slice(8, -1);
        if (n2 === "Object" && o.constructor)
          n2 = o.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(n2);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o) {
        var i = 0;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (o = _unsupportedIterableToArray(o)))
            return function() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            };
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        i = o[Symbol.iterator]();
        return i.next.bind(i);
      }
      var LuxonError = /* @__PURE__ */ function(_Error) {
        _inheritsLoose(LuxonError2, _Error);
        function LuxonError2() {
          return _Error.apply(this, arguments) || this;
        }
        return LuxonError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
      var InvalidDateTimeError = /* @__PURE__ */ function(_LuxonError) {
        _inheritsLoose(InvalidDateTimeError2, _LuxonError);
        function InvalidDateTimeError2(reason) {
          return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
        }
        return InvalidDateTimeError2;
      }(LuxonError);
      var InvalidIntervalError = /* @__PURE__ */ function(_LuxonError2) {
        _inheritsLoose(InvalidIntervalError2, _LuxonError2);
        function InvalidIntervalError2(reason) {
          return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
        }
        return InvalidIntervalError2;
      }(LuxonError);
      var InvalidDurationError = /* @__PURE__ */ function(_LuxonError3) {
        _inheritsLoose(InvalidDurationError2, _LuxonError3);
        function InvalidDurationError2(reason) {
          return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
        }
        return InvalidDurationError2;
      }(LuxonError);
      var ConflictingSpecificationError = /* @__PURE__ */ function(_LuxonError4) {
        _inheritsLoose(ConflictingSpecificationError2, _LuxonError4);
        function ConflictingSpecificationError2() {
          return _LuxonError4.apply(this, arguments) || this;
        }
        return ConflictingSpecificationError2;
      }(LuxonError);
      var InvalidUnitError = /* @__PURE__ */ function(_LuxonError5) {
        _inheritsLoose(InvalidUnitError2, _LuxonError5);
        function InvalidUnitError2(unit) {
          return _LuxonError5.call(this, "Invalid unit " + unit) || this;
        }
        return InvalidUnitError2;
      }(LuxonError);
      var InvalidArgumentError = /* @__PURE__ */ function(_LuxonError6) {
        _inheritsLoose(InvalidArgumentError2, _LuxonError6);
        function InvalidArgumentError2() {
          return _LuxonError6.apply(this, arguments) || this;
        }
        return InvalidArgumentError2;
      }(LuxonError);
      var ZoneIsAbstractError = /* @__PURE__ */ function(_LuxonError7) {
        _inheritsLoose(ZoneIsAbstractError2, _LuxonError7);
        function ZoneIsAbstractError2() {
          return _LuxonError7.call(this, "Zone is an abstract class") || this;
        }
        return ZoneIsAbstractError2;
      }(LuxonError);
      var n = "numeric";
      var s = "short";
      var l = "long";
      var DATE_SHORT = {
        year: n,
        month: n,
        day: n
      };
      var DATE_MED = {
        year: n,
        month: s,
        day: n
      };
      var DATE_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s
      };
      var DATE_FULL = {
        year: n,
        month: l,
        day: n
      };
      var DATE_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l
      };
      var TIME_SIMPLE = {
        hour: n,
        minute: n
      };
      var TIME_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n
      };
      var TIME_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var TIME_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      var TIME_24_SIMPLE = {
        hour: n,
        minute: n,
        hour12: false
      };
      var TIME_24_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n,
        hour12: false
      };
      var TIME_24_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hour12: false,
        timeZoneName: s
      };
      var TIME_24_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hour12: false,
        timeZoneName: l
      };
      var DATETIME_SHORT = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_SHORT_WITH_SECONDS = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_MED_WITH_SECONDS = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s,
        hour: n,
        minute: n
      };
      var DATETIME_FULL = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        timeZoneName: s
      };
      var DATETIME_FULL_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var DATETIME_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        timeZoneName: l
      };
      var DATETIME_HUGE_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      function isUndefined(o) {
        return typeof o === "undefined";
      }
      function isNumber(o) {
        return typeof o === "number";
      }
      function isInteger(o) {
        return typeof o === "number" && o % 1 === 0;
      }
      function isString(o) {
        return typeof o === "string";
      }
      function isDate(o) {
        return Object.prototype.toString.call(o) === "[object Date]";
      }
      function hasIntl() {
        try {
          return typeof Intl !== "undefined" && Intl.DateTimeFormat;
        } catch (e) {
          return false;
        }
      }
      function hasFormatToParts() {
        return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
      }
      function hasRelative() {
        try {
          return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
        } catch (e) {
          return false;
        }
      }
      function maybeArray(thing) {
        return Array.isArray(thing) ? thing : [thing];
      }
      function bestBy(arr, by, compare) {
        if (arr.length === 0) {
          return void 0;
        }
        return arr.reduce(function(best, next) {
          var pair = [by(next), next];
          if (!best) {
            return pair;
          } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
          } else {
            return pair;
          }
        }, null)[1];
      }
      function pick(obj, keys) {
        return keys.reduce(function(a, k) {
          a[k] = obj[k];
          return a;
        }, {});
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function integerBetween(thing, bottom, top) {
        return isInteger(thing) && thing >= bottom && thing <= top;
      }
      function floorMod(x, n2) {
        return x - n2 * Math.floor(x / n2);
      }
      function padStart(input, n2) {
        if (n2 === void 0) {
          n2 = 2;
        }
        var minus = input < 0 ? "-" : "";
        var target = minus ? input * -1 : input;
        var result;
        if (target.toString().length < n2) {
          result = ("0".repeat(n2) + target).slice(-n2);
        } else {
          result = target.toString();
        }
        return "" + minus + result;
      }
      function parseInteger(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseInt(string, 10);
        }
      }
      function parseMillis(fraction) {
        if (isUndefined(fraction) || fraction === null || fraction === "") {
          return void 0;
        } else {
          var f = parseFloat("0." + fraction) * 1e3;
          return Math.floor(f);
        }
      }
      function roundTo(number, digits, towardZero) {
        if (towardZero === void 0) {
          towardZero = false;
        }
        var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
        return rounder(number * factor) / factor;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      }
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      function daysInMonth(year, month) {
        var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
        if (modMonth === 2) {
          return isLeapYear(modYear) ? 29 : 28;
        } else {
          return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
        }
      }
      function objToLocalTS(obj) {
        var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
        if (obj.year < 100 && obj.year >= 0) {
          d = new Date(d);
          d.setUTCFullYear(d.getUTCFullYear() - 1900);
        }
        return +d;
      }
      function weeksInWeekYear(weekYear) {
        var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
        return p1 === 4 || p2 === 3 ? 53 : 52;
      }
      function untruncateYear(year) {
        if (year > 99) {
          return year;
        } else
          return year > 60 ? 1900 + year : 2e3 + year;
      }
      function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
        if (timeZone === void 0) {
          timeZone = null;
        }
        var date = new Date(ts), intlOpts = {
          hour12: false,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
        if (timeZone) {
          intlOpts.timeZone = timeZone;
        }
        var modified = Object.assign({
          timeZoneName: offsetFormat
        }, intlOpts), intl = hasIntl();
        if (intl && hasFormatToParts()) {
          var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m) {
            return m.type.toLowerCase() === "timezonename";
          });
          return parsed ? parsed.value : null;
        } else if (intl) {
          var without = new Intl.DateTimeFormat(locale, intlOpts).format(date), included = new Intl.DateTimeFormat(locale, modified).format(date), diffed = included.substring(without.length), trimmed = diffed.replace(/^[, \u200e]+/, "");
          return trimmed;
        } else {
          return null;
        }
      }
      function signedOffset(offHourStr, offMinuteStr) {
        var offHour = parseInt(offHourStr, 10);
        if (Number.isNaN(offHour)) {
          offHour = 0;
        }
        var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
        return offHour * 60 + offMinSigned;
      }
      function asNumber(value) {
        var numericValue = Number(value);
        if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
          throw new InvalidArgumentError("Invalid unit value " + value);
        return numericValue;
      }
      function normalizeObject(obj, normalizer, nonUnitKeys) {
        var normalized = {};
        for (var u in obj) {
          if (hasOwnProperty(obj, u)) {
            if (nonUnitKeys.indexOf(u) >= 0)
              continue;
            var v = obj[u];
            if (v === void 0 || v === null)
              continue;
            normalized[normalizer(u)] = asNumber(v);
          }
        }
        return normalized;
      }
      function formatOffset(offset2, format) {
        var hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
        switch (format) {
          case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
          case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
          case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
          default:
            throw new RangeError("Value format " + format + " is out of range for property format");
        }
      }
      function timeObject(obj) {
        return pick(obj, ["hour", "minute", "second", "millisecond"]);
      }
      var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
      function stringify(obj) {
        return JSON.stringify(obj, Object.keys(obj).sort());
      }
      var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function months(length) {
        switch (length) {
          case "narrow":
            return [].concat(monthsNarrow);
          case "short":
            return [].concat(monthsShort);
          case "long":
            return [].concat(monthsLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
      function weekdays(length) {
        switch (length) {
          case "narrow":
            return [].concat(weekdaysNarrow);
          case "short":
            return [].concat(weekdaysShort);
          case "long":
            return [].concat(weekdaysLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var meridiems = ["AM", "PM"];
      var erasLong = ["Before Christ", "Anno Domini"];
      var erasShort = ["BC", "AD"];
      var erasNarrow = ["B", "A"];
      function eras(length) {
        switch (length) {
          case "narrow":
            return [].concat(erasNarrow);
          case "short":
            return [].concat(erasShort);
          case "long":
            return [].concat(erasLong);
          default:
            return null;
        }
      }
      function meridiemForDateTime(dt) {
        return meridiems[dt.hour < 12 ? 0 : 1];
      }
      function weekdayForDateTime(dt, length) {
        return weekdays(length)[dt.weekday - 1];
      }
      function monthForDateTime(dt, length) {
        return months(length)[dt.month - 1];
      }
      function eraForDateTime(dt, length) {
        return eras(length)[dt.year < 0 ? 0 : 1];
      }
      function formatRelativeTime(unit, count, numeric, narrow) {
        if (numeric === void 0) {
          numeric = "always";
        }
        if (narrow === void 0) {
          narrow = false;
        }
        var units = {
          years: ["year", "yr."],
          quarters: ["quarter", "qtr."],
          months: ["month", "mo."],
          weeks: ["week", "wk."],
          days: ["day", "day", "days"],
          hours: ["hour", "hr."],
          minutes: ["minute", "min."],
          seconds: ["second", "sec."]
        };
        var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
        if (numeric === "auto" && lastable) {
          var isDay = unit === "days";
          switch (count) {
            case 1:
              return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
              return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
              return isDay ? "today" : "this " + units[unit][0];
          }
        }
        var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
        return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
      }
      function formatString(knownFormat) {
        var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]), key = stringify(filtered), dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";
        switch (key) {
          case stringify(DATE_SHORT):
            return "M/d/yyyy";
          case stringify(DATE_MED):
            return "LLL d, yyyy";
          case stringify(DATE_MED_WITH_WEEKDAY):
            return "EEE, LLL d, yyyy";
          case stringify(DATE_FULL):
            return "LLLL d, yyyy";
          case stringify(DATE_HUGE):
            return "EEEE, LLLL d, yyyy";
          case stringify(TIME_SIMPLE):
            return "h:mm a";
          case stringify(TIME_WITH_SECONDS):
            return "h:mm:ss a";
          case stringify(TIME_WITH_SHORT_OFFSET):
            return "h:mm a";
          case stringify(TIME_WITH_LONG_OFFSET):
            return "h:mm a";
          case stringify(TIME_24_SIMPLE):
            return "HH:mm";
          case stringify(TIME_24_WITH_SECONDS):
            return "HH:mm:ss";
          case stringify(TIME_24_WITH_SHORT_OFFSET):
            return "HH:mm";
          case stringify(TIME_24_WITH_LONG_OFFSET):
            return "HH:mm";
          case stringify(DATETIME_SHORT):
            return "M/d/yyyy, h:mm a";
          case stringify(DATETIME_MED):
            return "LLL d, yyyy, h:mm a";
          case stringify(DATETIME_FULL):
            return "LLLL d, yyyy, h:mm a";
          case stringify(DATETIME_HUGE):
            return dateTimeHuge;
          case stringify(DATETIME_SHORT_WITH_SECONDS):
            return "M/d/yyyy, h:mm:ss a";
          case stringify(DATETIME_MED_WITH_SECONDS):
            return "LLL d, yyyy, h:mm:ss a";
          case stringify(DATETIME_MED_WITH_WEEKDAY):
            return "EEE, d LLL yyyy, h:mm a";
          case stringify(DATETIME_FULL_WITH_SECONDS):
            return "LLLL d, yyyy, h:mm:ss a";
          case stringify(DATETIME_HUGE_WITH_SECONDS):
            return "EEEE, LLLL d, yyyy, h:mm:ss a";
          default:
            return dateTimeHuge;
        }
      }
      function stringifyTokens(splits, tokenToString) {
        var s2 = "";
        for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done; ) {
          var token = _step.value;
          if (token.literal) {
            s2 += token.val;
          } else {
            s2 += tokenToString(token.val);
          }
        }
        return s2;
      }
      var _macroTokenToFormatOpts = {
        D: DATE_SHORT,
        DD: DATE_MED,
        DDD: DATE_FULL,
        DDDD: DATE_HUGE,
        t: TIME_SIMPLE,
        tt: TIME_WITH_SECONDS,
        ttt: TIME_WITH_SHORT_OFFSET,
        tttt: TIME_WITH_LONG_OFFSET,
        T: TIME_24_SIMPLE,
        TT: TIME_24_WITH_SECONDS,
        TTT: TIME_24_WITH_SHORT_OFFSET,
        TTTT: TIME_24_WITH_LONG_OFFSET,
        f: DATETIME_SHORT,
        ff: DATETIME_MED,
        fff: DATETIME_FULL,
        ffff: DATETIME_HUGE,
        F: DATETIME_SHORT_WITH_SECONDS,
        FF: DATETIME_MED_WITH_SECONDS,
        FFF: DATETIME_FULL_WITH_SECONDS,
        FFFF: DATETIME_HUGE_WITH_SECONDS
      };
      var Formatter = /* @__PURE__ */ function() {
        Formatter2.create = function create(locale, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new Formatter2(locale, opts);
        };
        Formatter2.parseFormat = function parseFormat(fmt) {
          var current = null, currentFull = "", bracketed = false;
          var splits = [];
          for (var i = 0; i < fmt.length; i++) {
            var c = fmt.charAt(i);
            if (c === "'") {
              if (currentFull.length > 0) {
                splits.push({
                  literal: bracketed,
                  val: currentFull
                });
              }
              current = null;
              currentFull = "";
              bracketed = !bracketed;
            } else if (bracketed) {
              currentFull += c;
            } else if (c === current) {
              currentFull += c;
            } else {
              if (currentFull.length > 0) {
                splits.push({
                  literal: false,
                  val: currentFull
                });
              }
              currentFull = c;
              current = c;
            }
          }
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          return splits;
        };
        Formatter2.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
          return _macroTokenToFormatOpts[token];
        };
        function Formatter2(locale, formatOpts) {
          this.opts = formatOpts;
          this.loc = locale;
          this.systemLoc = null;
        }
        var _proto = Formatter2.prototype;
        _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
          if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
          }
          var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTime = function formatDateTime(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
          return df.formatToParts();
        };
        _proto.resolvedOptions = function resolvedOptions(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
          return df.resolvedOptions();
        };
        _proto.num = function num(n2, p) {
          if (p === void 0) {
            p = 0;
          }
          if (this.opts.forceSimple) {
            return padStart(n2, p);
          }
          var opts = Object.assign({}, this.opts);
          if (p > 0) {
            opts.padTo = p;
          }
          return this.loc.numberFormatter(opts).format(n2);
        };
        _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
          var _this = this;
          var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(), string = function string2(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
          }, formatOffset2 = function formatOffset3(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          }, meridiem = function meridiem2() {
            return knownEnglish ? meridiemForDateTime(dt) : string({
              hour: "numeric",
              hour12: true
            }, "dayperiod");
          }, month = function month2(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
              month: length
            } : {
              month: length,
              day: "numeric"
            }, "month");
          }, weekday = function weekday2(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
              weekday: length
            } : {
              weekday: length,
              month: "long",
              day: "numeric"
            }, "weekday");
          }, maybeMacro = function maybeMacro2(token) {
            var formatOpts = Formatter2.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return _this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          }, era = function era2(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string({
              era: length
            }, "era");
          }, tokenToString = function tokenToString2(token) {
            switch (token) {
              case "S":
                return _this.num(dt.millisecond);
              case "u":
              case "SSS":
                return _this.num(dt.millisecond, 3);
              case "s":
                return _this.num(dt.second);
              case "ss":
                return _this.num(dt.second, 2);
              case "m":
                return _this.num(dt.minute);
              case "mm":
                return _this.num(dt.minute, 2);
              case "h":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return _this.num(dt.hour);
              case "HH":
                return _this.num(dt.hour, 2);
              case "Z":
                return formatOffset2({
                  format: "narrow",
                  allowZ: _this.opts.allowZ
                });
              case "ZZ":
                return formatOffset2({
                  format: "short",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZ":
                return formatOffset2({
                  format: "techie",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "short",
                  locale: _this.loc.locale
                });
              case "ZZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "long",
                  locale: _this.loc.locale
                });
              case "z":
                return dt.zoneName;
              case "a":
                return meridiem();
              case "d":
                return useDateTimeFormatter ? string({
                  day: "numeric"
                }, "day") : _this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string({
                  day: "2-digit"
                }, "day") : _this.num(dt.day, 2);
              case "c":
                return _this.num(dt.weekday);
              case "ccc":
                return weekday("short", true);
              case "cccc":
                return weekday("long", true);
              case "ccccc":
                return weekday("narrow", true);
              case "E":
                return _this.num(dt.weekday);
              case "EEE":
                return weekday("short", false);
              case "EEEE":
                return weekday("long", false);
              case "EEEEE":
                return weekday("narrow", false);
              case "L":
                return useDateTimeFormatter ? string({
                  month: "numeric",
                  day: "numeric"
                }, "month") : _this.num(dt.month);
              case "LL":
                return useDateTimeFormatter ? string({
                  month: "2-digit",
                  day: "numeric"
                }, "month") : _this.num(dt.month, 2);
              case "LLL":
                return month("short", true);
              case "LLLL":
                return month("long", true);
              case "LLLLL":
                return month("narrow", true);
              case "M":
                return useDateTimeFormatter ? string({
                  month: "numeric"
                }, "month") : _this.num(dt.month);
              case "MM":
                return useDateTimeFormatter ? string({
                  month: "2-digit"
                }, "month") : _this.num(dt.month, 2);
              case "MMM":
                return month("short", false);
              case "MMMM":
                return month("long", false);
              case "MMMMM":
                return month("narrow", false);
              case "y":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year);
              case "yy":
                return useDateTimeFormatter ? string({
                  year: "2-digit"
                }, "year") : _this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 4);
              case "yyyyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 6);
              case "G":
                return era("short");
              case "GG":
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return _this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return _this.num(dt.weekYear, 4);
              case "W":
                return _this.num(dt.weekNumber);
              case "WW":
                return _this.num(dt.weekNumber, 2);
              case "o":
                return _this.num(dt.ordinal);
              case "ooo":
                return _this.num(dt.ordinal, 3);
              case "q":
                return _this.num(dt.quarter);
              case "qq":
                return _this.num(dt.quarter, 2);
              case "X":
                return _this.num(Math.floor(dt.ts / 1e3));
              case "x":
                return _this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };
          return stringifyTokens(Formatter2.parseFormat(fmt), tokenToString);
        };
        _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
          var _this2 = this;
          var tokenToField = function tokenToField2(token) {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, tokenToString = function tokenToString2(lildur) {
            return function(token) {
              var mapped = tokenToField(token);
              if (mapped) {
                return _this2.num(lildur.get(mapped), token.length);
              } else {
                return token;
              }
            };
          }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal = _ref.literal, val = _ref.val;
            return literal ? found : found.concat(val);
          }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t) {
            return t;
          }));
          return stringifyTokens(tokens, tokenToString(collapsed));
        };
        return Formatter2;
      }();
      var Invalid = /* @__PURE__ */ function() {
        function Invalid2(reason, explanation) {
          this.reason = reason;
          this.explanation = explanation;
        }
        var _proto = Invalid2.prototype;
        _proto.toMessage = function toMessage() {
          if (this.explanation) {
            return this.reason + ": " + this.explanation;
          } else {
            return this.reason;
          }
        };
        return Invalid2;
      }();
      var Zone = /* @__PURE__ */ function() {
        function Zone2() {
        }
        var _proto = Zone2.prototype;
        _proto.offsetName = function offsetName(ts, opts) {
          throw new ZoneIsAbstractError();
        };
        _proto.formatOffset = function formatOffset2(ts, format) {
          throw new ZoneIsAbstractError();
        };
        _proto.offset = function offset2(ts) {
          throw new ZoneIsAbstractError();
        };
        _proto.equals = function equals(otherZone) {
          throw new ZoneIsAbstractError();
        };
        _createClass(Zone2, [{
          key: "type",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "name",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "universal",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isValid",
          get: function get() {
            throw new ZoneIsAbstractError();
          }
        }]);
        return Zone2;
      }();
      var singleton = null;
      var LocalZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(LocalZone2, _Zone);
        function LocalZone2() {
          return _Zone.apply(this, arguments) || this;
        }
        var _proto = LocalZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          return -new Date(ts).getTimezoneOffset();
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "local";
        };
        _createClass(LocalZone2, [{
          key: "type",
          get: function get() {
            return "local";
          }
        }, {
          key: "name",
          get: function get() {
            if (hasIntl()) {
              return new Intl.DateTimeFormat().resolvedOptions().timeZone;
            } else
              return "local";
          }
        }, {
          key: "universal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (singleton === null) {
              singleton = new LocalZone2();
            }
            return singleton;
          }
        }]);
        return LocalZone2;
      }(Zone);
      var matchingRegex = RegExp("^" + ianaRegex.source + "$");
      var dtfCache = {};
      function makeDTF(zone) {
        if (!dtfCache[zone]) {
          dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
        }
        return dtfCache[zone];
      }
      var typeToPos = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      };
      function hackyOffset(dtf, date) {
        var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
        return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
      }
      function partsOffset(dtf, date) {
        var formatted = dtf.formatToParts(date), filled = [];
        for (var i = 0; i < formatted.length; i++) {
          var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value, pos = typeToPos[type];
          if (!isUndefined(pos)) {
            filled[pos] = parseInt(value, 10);
          }
        }
        return filled;
      }
      var ianaZoneCache = {};
      var IANAZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(IANAZone2, _Zone);
        IANAZone2.create = function create(name) {
          if (!ianaZoneCache[name]) {
            ianaZoneCache[name] = new IANAZone2(name);
          }
          return ianaZoneCache[name];
        };
        IANAZone2.resetCache = function resetCache() {
          ianaZoneCache = {};
          dtfCache = {};
        };
        IANAZone2.isValidSpecifier = function isValidSpecifier(s2) {
          return !!(s2 && s2.match(matchingRegex));
        };
        IANAZone2.isValidZone = function isValidZone(zone) {
          try {
            new Intl.DateTimeFormat("en-US", {
              timeZone: zone
            }).format();
            return true;
          } catch (e) {
            return false;
          }
        };
        IANAZone2.parseGMTOffset = function parseGMTOffset(specifier) {
          if (specifier) {
            var match2 = specifier.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
            if (match2) {
              return -60 * parseInt(match2[1]);
            }
          }
          return null;
        };
        function IANAZone2(name) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = name;
          _this.valid = IANAZone2.isValidZone(name);
          return _this;
        }
        var _proto = IANAZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale, this.name);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          var date = new Date(ts);
          if (isNaN(date))
            return NaN;
          var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5], adjustedHour = hour === 24 ? 0 : hour;
          var asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
          });
          var asTS = +date;
          var over = asTS % 1e3;
          asTS -= over >= 0 ? over : 1e3 + over;
          return (asUTC - asTS) / (60 * 1e3);
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "iana" && otherZone.name === this.name;
        };
        _createClass(IANAZone2, [{
          key: "type",
          get: function get() {
            return "iana";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "universal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.valid;
          }
        }]);
        return IANAZone2;
      }(Zone);
      var singleton$1 = null;
      var FixedOffsetZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(FixedOffsetZone2, _Zone);
        FixedOffsetZone2.instance = function instance(offset2) {
          return offset2 === 0 ? FixedOffsetZone2.utcInstance : new FixedOffsetZone2(offset2);
        };
        FixedOffsetZone2.parseSpecifier = function parseSpecifier(s2) {
          if (s2) {
            var r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) {
              return new FixedOffsetZone2(signedOffset(r[1], r[2]));
            }
          }
          return null;
        };
        _createClass(FixedOffsetZone2, null, [{
          key: "utcInstance",
          get: function get() {
            if (singleton$1 === null) {
              singleton$1 = new FixedOffsetZone2(0);
            }
            return singleton$1;
          }
        }]);
        function FixedOffsetZone2(offset2) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.fixed = offset2;
          return _this;
        }
        var _proto = FixedOffsetZone2.prototype;
        _proto.offsetName = function offsetName() {
          return this.name;
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.fixed, format);
        };
        _proto.offset = function offset2() {
          return this.fixed;
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
        };
        _createClass(FixedOffsetZone2, [{
          key: "type",
          get: function get() {
            return "fixed";
          }
        }, {
          key: "name",
          get: function get() {
            return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
          }
        }, {
          key: "universal",
          get: function get() {
            return true;
          }
        }, {
          key: "isValid",
          get: function get() {
            return true;
          }
        }]);
        return FixedOffsetZone2;
      }(Zone);
      var InvalidZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose(InvalidZone2, _Zone);
        function InvalidZone2(zoneName) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = zoneName;
          return _this;
        }
        var _proto = InvalidZone2.prototype;
        _proto.offsetName = function offsetName() {
          return null;
        };
        _proto.formatOffset = function formatOffset2() {
          return "";
        };
        _proto.offset = function offset2() {
          return NaN;
        };
        _proto.equals = function equals() {
          return false;
        };
        _createClass(InvalidZone2, [{
          key: "type",
          get: function get() {
            return "invalid";
          }
        }, {
          key: "name",
          get: function get() {
            return this.zoneName;
          }
        }, {
          key: "universal",
          get: function get() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get() {
            return false;
          }
        }]);
        return InvalidZone2;
      }(Zone);
      function normalizeZone(input, defaultZone2) {
        var offset2;
        if (isUndefined(input) || input === null) {
          return defaultZone2;
        } else if (input instanceof Zone) {
          return input;
        } else if (isString(input)) {
          var lowered = input.toLowerCase();
          if (lowered === "local")
            return defaultZone2;
          else if (lowered === "utc" || lowered === "gmt")
            return FixedOffsetZone.utcInstance;
          else if ((offset2 = IANAZone.parseGMTOffset(input)) != null) {
            return FixedOffsetZone.instance(offset2);
          } else if (IANAZone.isValidSpecifier(lowered))
            return IANAZone.create(input);
          else
            return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
        } else if (isNumber(input)) {
          return FixedOffsetZone.instance(input);
        } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
          return input;
        } else {
          return new InvalidZone(input);
        }
      }
      var now = function now2() {
        return Date.now();
      };
      var defaultZone = null;
      var defaultLocale = null;
      var defaultNumberingSystem = null;
      var defaultOutputCalendar = null;
      var throwOnInvalid = false;
      var Settings = /* @__PURE__ */ function() {
        function Settings2() {
        }
        Settings2.resetCaches = function resetCaches() {
          Locale.resetCache();
          IANAZone.resetCache();
        };
        _createClass(Settings2, null, [{
          key: "now",
          get: function get() {
            return now;
          },
          set: function set(n2) {
            now = n2;
          }
        }, {
          key: "defaultZoneName",
          get: function get() {
            return Settings2.defaultZone.name;
          },
          set: function set(z) {
            if (!z) {
              defaultZone = null;
            } else {
              defaultZone = normalizeZone(z);
            }
          }
        }, {
          key: "defaultZone",
          get: function get() {
            return defaultZone || LocalZone.instance;
          }
        }, {
          key: "defaultLocale",
          get: function get() {
            return defaultLocale;
          },
          set: function set(locale) {
            defaultLocale = locale;
          }
        }, {
          key: "defaultNumberingSystem",
          get: function get() {
            return defaultNumberingSystem;
          },
          set: function set(numberingSystem) {
            defaultNumberingSystem = numberingSystem;
          }
        }, {
          key: "defaultOutputCalendar",
          get: function get() {
            return defaultOutputCalendar;
          },
          set: function set(outputCalendar) {
            defaultOutputCalendar = outputCalendar;
          }
        }, {
          key: "throwOnInvalid",
          get: function get() {
            return throwOnInvalid;
          },
          set: function set(t) {
            throwOnInvalid = t;
          }
        }]);
        return Settings2;
      }();
      var intlDTCache = {};
      function getCachedDTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var dtf = intlDTCache[key];
        if (!dtf) {
          dtf = new Intl.DateTimeFormat(locString, opts);
          intlDTCache[key] = dtf;
        }
        return dtf;
      }
      var intlNumCache = {};
      function getCachedINF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var inf = intlNumCache[key];
        if (!inf) {
          inf = new Intl.NumberFormat(locString, opts);
          intlNumCache[key] = inf;
        }
        return inf;
      }
      var intlRelCache = {};
      function getCachedRTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts, base = _opts.base, cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]);
        var key = JSON.stringify([locString, cacheKeyOpts]);
        var inf = intlRelCache[key];
        if (!inf) {
          inf = new Intl.RelativeTimeFormat(locString, opts);
          intlRelCache[key] = inf;
        }
        return inf;
      }
      var sysLocaleCache = null;
      function systemLocale() {
        if (sysLocaleCache) {
          return sysLocaleCache;
        } else if (hasIntl()) {
          var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale;
          sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
          return sysLocaleCache;
        } else {
          sysLocaleCache = "en-US";
          return sysLocaleCache;
        }
      }
      function parseLocaleString(localeStr) {
        var uIndex = localeStr.indexOf("-u-");
        if (uIndex === -1) {
          return [localeStr];
        } else {
          var options2;
          var smaller = localeStr.substring(0, uIndex);
          try {
            options2 = getCachedDTF(localeStr).resolvedOptions();
          } catch (e) {
            options2 = getCachedDTF(smaller).resolvedOptions();
          }
          var _options = options2, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
          return [smaller, numberingSystem, calendar];
        }
      }
      function intlConfigString(localeStr, numberingSystem, outputCalendar) {
        if (hasIntl()) {
          if (outputCalendar || numberingSystem) {
            localeStr += "-u";
            if (outputCalendar) {
              localeStr += "-ca-" + outputCalendar;
            }
            if (numberingSystem) {
              localeStr += "-nu-" + numberingSystem;
            }
            return localeStr;
          } else {
            return localeStr;
          }
        } else {
          return [];
        }
      }
      function mapMonths(f) {
        var ms = [];
        for (var i = 1; i <= 12; i++) {
          var dt = DateTime.utc(2016, i, 1);
          ms.push(f(dt));
        }
        return ms;
      }
      function mapWeekdays(f) {
        var ms = [];
        for (var i = 1; i <= 7; i++) {
          var dt = DateTime.utc(2016, 11, 13 + i);
          ms.push(f(dt));
        }
        return ms;
      }
      function listStuff(loc, length, defaultOK, englishFn, intlFn) {
        var mode = loc.listingMode(defaultOK);
        if (mode === "error") {
          return null;
        } else if (mode === "en") {
          return englishFn(length);
        } else {
          return intlFn(length);
        }
      }
      function supportsFastNumbers(loc) {
        if (loc.numberingSystem && loc.numberingSystem !== "latn") {
          return false;
        } else {
          return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
        }
      }
      var PolyNumberFormatter = /* @__PURE__ */ function() {
        function PolyNumberFormatter2(intl, forceSimple, opts) {
          this.padTo = opts.padTo || 0;
          this.floor = opts.floor || false;
          if (!forceSimple && hasIntl()) {
            var intlOpts = {
              useGrouping: false
            };
            if (opts.padTo > 0)
              intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
          }
        }
        var _proto = PolyNumberFormatter2.prototype;
        _proto.format = function format(i) {
          if (this.inf) {
            var fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
          } else {
            var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(_fixed, this.padTo);
          }
        };
        return PolyNumberFormatter2;
      }();
      var PolyDateFormatter = /* @__PURE__ */ function() {
        function PolyDateFormatter2(dt, intl, opts) {
          this.opts = opts;
          this.hasIntl = hasIntl();
          var z;
          if (dt.zone.universal && this.hasIntl) {
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            var isOffsetZoneSupported = IANAZone.isValidZone(offsetZ);
            if (dt.offset !== 0 && isOffsetZoneSupported) {
              z = offsetZ;
              this.dt = dt;
            } else {
              z = "UTC";
              if (opts.timeZoneName) {
                this.dt = dt;
              } else {
                this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
              }
            }
          } else if (dt.zone.type === "local") {
            this.dt = dt;
          } else {
            this.dt = dt;
            z = dt.zone.name;
          }
          if (this.hasIntl) {
            var intlOpts = Object.assign({}, this.opts);
            if (z) {
              intlOpts.timeZone = z;
            }
            this.dtf = getCachedDTF(intl, intlOpts);
          }
        }
        var _proto2 = PolyDateFormatter2.prototype;
        _proto2.format = function format() {
          if (this.hasIntl) {
            return this.dtf.format(this.dt.toJSDate());
          } else {
            var tokenFormat = formatString(this.opts), loc = Locale.create("en-US");
            return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
          }
        };
        _proto2.formatToParts = function formatToParts() {
          if (this.hasIntl && hasFormatToParts()) {
            return this.dtf.formatToParts(this.dt.toJSDate());
          } else {
            return [];
          }
        };
        _proto2.resolvedOptions = function resolvedOptions() {
          if (this.hasIntl) {
            return this.dtf.resolvedOptions();
          } else {
            return {
              locale: "en-US",
              numberingSystem: "latn",
              outputCalendar: "gregory"
            };
          }
        };
        return PolyDateFormatter2;
      }();
      var PolyRelFormatter = /* @__PURE__ */ function() {
        function PolyRelFormatter2(intl, isEnglish, opts) {
          this.opts = Object.assign({
            style: "long"
          }, opts);
          if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
          }
        }
        var _proto3 = PolyRelFormatter2.prototype;
        _proto3.format = function format(count, unit) {
          if (this.rtf) {
            return this.rtf.format(count, unit);
          } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
          }
        };
        _proto3.formatToParts = function formatToParts(count, unit) {
          if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
          } else {
            return [];
          }
        };
        return PolyRelFormatter2;
      }();
      var Locale = /* @__PURE__ */ function() {
        Locale2.fromOpts = function fromOpts(opts) {
          return Locale2.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
        };
        Locale2.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
          if (defaultToEN === void 0) {
            defaultToEN = false;
          }
          var specifiedLocale = locale || Settings.defaultLocale, localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()), numberingSystemR = numberingSystem || Settings.defaultNumberingSystem, outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
          return new Locale2(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        };
        Locale2.resetCache = function resetCache() {
          sysLocaleCache = null;
          intlDTCache = {};
          intlNumCache = {};
          intlRelCache = {};
        };
        Locale2.fromObject = function fromObject(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
          return Locale2.create(locale, numberingSystem, outputCalendar);
        };
        function Locale2(locale, numbering, outputCalendar, specifiedLocale) {
          var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
          this.locale = parsedLocale;
          this.numberingSystem = numbering || parsedNumberingSystem || null;
          this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
          this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
          this.weekdaysCache = {
            format: {},
            standalone: {}
          };
          this.monthsCache = {
            format: {},
            standalone: {}
          };
          this.meridiemCache = null;
          this.eraCache = {};
          this.specifiedLocale = specifiedLocale;
          this.fastNumbersCached = null;
        }
        var _proto4 = Locale2.prototype;
        _proto4.listingMode = function listingMode(defaultOK) {
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          var intl = hasIntl(), hasFTP = intl && hasFormatToParts(), isActuallyEn = this.isEnglish(), hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
          if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
            return "error";
          } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
            return "en";
          } else {
            return "intl";
          }
        };
        _proto4.clone = function clone2(alts) {
          if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
          } else {
            return Locale2.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
          }
        };
        _proto4.redefaultToEN = function redefaultToEN(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(Object.assign({}, alts, {
            defaultToEN: true
          }));
        };
        _proto4.redefaultToSystem = function redefaultToSystem(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(Object.assign({}, alts, {
            defaultToEN: false
          }));
        };
        _proto4.months = function months$1(length, format, defaultOK) {
          var _this = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
              month: length,
              day: "numeric"
            } : {
              month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) {
              _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
              });
            }
            return _this.monthsCache[formatStr][length];
          });
        };
        _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
          var _this2 = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric"
            } : {
              weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) {
              _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
              });
            }
            return _this2.weekdaysCache[formatStr][length];
          });
        };
        _proto4.meridiems = function meridiems$1(defaultOK) {
          var _this3 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, void 0, defaultOK, function() {
            return meridiems;
          }, function() {
            if (!_this3.meridiemCache) {
              var intl = {
                hour: "numeric",
                hour12: true
              };
              _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function(dt) {
                return _this3.extract(dt, intl, "dayperiod");
              });
            }
            return _this3.meridiemCache;
          });
        };
        _proto4.eras = function eras$1(length, defaultOK) {
          var _this4 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
              era: length
            };
            if (!_this4.eraCache[length]) {
              _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function(dt) {
                return _this4.extract(dt, intl, "era");
              });
            }
            return _this4.eraCache[length];
          });
        };
        _proto4.extract = function extract(dt, intlOpts, field) {
          var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m) {
            return m.type.toLowerCase() === field;
          });
          return matching ? matching.value : null;
        };
        _proto4.numberFormatter = function numberFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
        };
        _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
          if (intlOpts === void 0) {
            intlOpts = {};
          }
          return new PolyDateFormatter(dt, this.intl, intlOpts);
        };
        _proto4.relFormatter = function relFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
        };
        _proto4.isEnglish = function isEnglish() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        };
        _proto4.equals = function equals(other) {
          return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
        };
        _createClass(Locale2, [{
          key: "fastNumbers",
          get: function get() {
            if (this.fastNumbersCached == null) {
              this.fastNumbersCached = supportsFastNumbers(this);
            }
            return this.fastNumbersCached;
          }
        }]);
        return Locale2;
      }();
      function combineRegexes() {
        for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
          regexes[_key] = arguments[_key];
        }
        var full = regexes.reduce(function(f, r) {
          return f + r.source;
        }, "");
        return RegExp("^" + full + "$");
      }
      function combineExtractors() {
        for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          extractors[_key2] = arguments[_key2];
        }
        return function(m) {
          return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [Object.assign(mergedVals, val), mergedZone || zone, next];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function parse(s2) {
        if (s2 == null) {
          return [null, null];
        }
        for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          patterns[_key3 - 1] = arguments[_key3];
        }
        for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
          var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
          var m = regex.exec(s2);
          if (m) {
            return extractor(m);
          }
        }
        return [null, null];
      }
      function simpleParse() {
        for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          keys[_key4] = arguments[_key4];
        }
        return function(match2, cursor) {
          var ret = {};
          var i;
          for (i = 0; i < keys.length; i++) {
            ret[keys[i]] = parseInteger(match2[cursor + i]);
          }
          return [ret, null, cursor + i];
        };
      }
      var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?");
      var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
      var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
      var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
      var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
      var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
      var extractISOOrdinalData = simpleParse("year", "ordinal");
      var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
      var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
      var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
      function int(match2, pos, fallback) {
        var m = match2[pos];
        return isUndefined(m) ? fallback : parseInteger(m);
      }
      function extractISOYmd(match2, cursor) {
        var item = {
          year: int(match2, cursor),
          month: int(match2, cursor + 1, 1),
          day: int(match2, cursor + 2, 1)
        };
        return [item, null, cursor + 3];
      }
      function extractISOTime(match2, cursor) {
        var item = {
          hours: int(match2, cursor, 0),
          minutes: int(match2, cursor + 1, 0),
          seconds: int(match2, cursor + 2, 0),
          milliseconds: parseMillis(match2[cursor + 3])
        };
        return [item, null, cursor + 4];
      }
      function extractISOOffset(match2, cursor) {
        var local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
        return [{}, zone, cursor + 3];
      }
      function extractIANAZone(match2, cursor) {
        var zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
        return [{}, zone, cursor + 1];
      }
      var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
      var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function extractISODuration(match2) {
        var s2 = match2[0], yearStr = match2[1], monthStr = match2[2], weekStr = match2[3], dayStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], millisecondsStr = match2[8];
        var hasNegativePrefix = s2[0] === "-";
        var negativeSeconds = secondStr && secondStr[0] === "-";
        var maybeNegate = function maybeNegate2(num, force) {
          if (force === void 0) {
            force = false;
          }
          return num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
        };
        return [{
          years: maybeNegate(parseInteger(yearStr)),
          months: maybeNegate(parseInteger(monthStr)),
          weeks: maybeNegate(parseInteger(weekStr)),
          days: maybeNegate(parseInteger(dayStr)),
          hours: maybeNegate(parseInteger(hourStr)),
          minutes: maybeNegate(parseInteger(minuteStr)),
          seconds: maybeNegate(parseInteger(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }];
      }
      var obsOffsets = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = {
          year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
          month: monthsShort.indexOf(monthStr) + 1,
          day: parseInteger(dayStr),
          hour: parseInteger(hourStr),
          minute: parseInteger(minuteStr)
        };
        if (secondStr)
          result.second = parseInteger(secondStr);
        if (weekdayStr) {
          result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
        }
        return result;
      }
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function extractRFC2822(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], obsOffset = match2[8], milOffset = match2[9], offHourStr = match2[10], offMinuteStr = match2[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        var offset2;
        if (obsOffset) {
          offset2 = obsOffsets[obsOffset];
        } else if (milOffset) {
          offset2 = 0;
        } else {
          offset2 = signedOffset(offHourStr, offMinuteStr);
        }
        return [result, new FixedOffsetZone(offset2)];
      }
      function preprocessRFC2822(s2) {
        return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }
      var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function extractRFC1123Or850(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      function extractASCII(match2) {
        var weekdayStr = match2[1], monthStr = match2[2], dayStr = match2[3], hourStr = match2[4], minuteStr = match2[5], secondStr = match2[6], yearStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
      var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
      var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
      var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
      var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
      var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
      var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
      var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
      function parseISODate(s2) {
        return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
      }
      function parseRFC2822Date(s2) {
        return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
      }
      function parseHTTPDate(s2) {
        return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
      }
      function parseISODuration(s2) {
        return parse(s2, [isoDuration, extractISODuration]);
      }
      var extractISOTimeOnly = combineExtractors(extractISOTime);
      function parseISOTimeOnly(s2) {
        return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
      }
      var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
      var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
      var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseSQL(s2) {
        return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
      }
      var INVALID = "Invalid Duration";
      var lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
          minutes: 60,
          seconds: 60 * 60,
          milliseconds: 60 * 60 * 1e3
        },
        minutes: {
          seconds: 60,
          milliseconds: 60 * 1e3
        },
        seconds: {
          milliseconds: 1e3
        }
      };
      var casualMatrix = Object.assign({
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var daysInYearAccurate = 146097 / 400;
      var daysInMonthAccurate = 146097 / 4800;
      var accurateMatrix = Object.assign({
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: daysInYearAccurate * 24 / 4,
          minutes: daysInYearAccurate * 24 * 60 / 4,
          seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
      var reverseUnits = orderedUnits.slice(0).reverse();
      function clone(dur, alts, clear) {
        if (clear === void 0) {
          clear = false;
        }
        var conf = {
          values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
          loc: dur.loc.clone(alts.loc),
          conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
        };
        return new Duration(conf);
      }
      function antiTrunc(n2) {
        return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
      }
      function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
        var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
        toMap[toUnit] += added;
        fromMap[fromUnit] -= added * conv;
      }
      function normalizeValues(matrix, vals) {
        reverseUnits.reduce(function(previous, current) {
          if (!isUndefined(vals[current])) {
            if (previous) {
              convert(matrix, vals, previous, vals, current);
            }
            return current;
          } else {
            return previous;
          }
        }, null);
      }
      var Duration = /* @__PURE__ */ function() {
        function Duration2(config) {
          var accurate = config.conversionAccuracy === "longterm" || false;
          this.values = config.values;
          this.loc = config.loc || Locale.create();
          this.conversionAccuracy = accurate ? "longterm" : "casual";
          this.invalid = config.invalid || null;
          this.matrix = accurate ? accurateMatrix : casualMatrix;
          this.isLuxonDuration = true;
        }
        Duration2.fromMillis = function fromMillis(count, opts) {
          return Duration2.fromObject(Object.assign({
            milliseconds: count
          }, opts));
        };
        Duration2.fromObject = function fromObject(obj) {
          if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
          }
          return new Duration2({
            values: normalizeObject(obj, Duration2.normalizeUnit, [
              "locale",
              "numberingSystem",
              "conversionAccuracy",
              "zone"
            ]),
            loc: Locale.fromObject(obj),
            conversionAccuracy: obj.conversionAccuracy
          });
        };
        Duration2.fromISO = function fromISO(text, opts) {
          var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
          if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration2.fromObject(obj);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.fromISOTime = function fromISOTime(text, opts) {
          var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
          if (parsed) {
            var obj = Object.assign(parsed, opts);
            return Duration2.fromObject(obj);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid2);
          } else {
            return new Duration2({
              invalid: invalid2
            });
          }
        };
        Duration2.normalizeUnit = function normalizeUnit2(unit) {
          var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[unit ? unit.toLowerCase() : unit];
          if (!normalized)
            throw new InvalidUnitError(unit);
          return normalized;
        };
        Duration2.isDuration = function isDuration(o) {
          return o && o.isLuxonDuration || false;
        };
        var _proto = Duration2.prototype;
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var fmtOpts = Object.assign({}, opts, {
            floor: opts.round !== false && opts.floor !== false
          });
          return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
        };
        _proto.toObject = function toObject(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return {};
          var base = Object.assign({}, this.values);
          if (opts.includeConfig) {
            base.conversionAccuracy = this.conversionAccuracy;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        };
        _proto.toISO = function toISO() {
          if (!this.isValid)
            return null;
          var s2 = "P";
          if (this.years !== 0)
            s2 += this.years + "Y";
          if (this.months !== 0 || this.quarters !== 0)
            s2 += this.months + this.quarters * 3 + "M";
          if (this.weeks !== 0)
            s2 += this.weeks + "W";
          if (this.days !== 0)
            s2 += this.days + "D";
          if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
            s2 += "T";
          if (this.hours !== 0)
            s2 += this.hours + "H";
          if (this.minutes !== 0)
            s2 += this.minutes + "M";
          if (this.seconds !== 0 || this.milliseconds !== 0)
            s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
          if (s2 === "P")
            s2 += "T0S";
          return s2;
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return null;
          var millis = this.toMillis();
          if (millis < 0 || millis >= 864e5)
            return null;
          opts = Object.assign({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
          }, opts);
          var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
          if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
              fmt += ".SSS";
            }
          }
          var str = value.toFormat(fmt);
          if (opts.includePrefix) {
            str = "T" + str;
          }
          return str;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toString = function toString() {
          return this.toISO();
        };
        _proto.toMillis = function toMillis() {
          return this.as("milliseconds");
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = friendlyDuration(duration), result = {};
          for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done; ) {
            var k = _step.value;
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
              result[k] = dur.get(k) + this.get(k);
            }
          }
          return clone(this, {
            values: result
          }, true);
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = friendlyDuration(duration);
          return this.plus(dur.negate());
        };
        _proto.mapUnits = function mapUnits(fn) {
          if (!this.isValid)
            return this;
          var result = {};
          for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
            var k = _Object$keys[_i];
            result[k] = asNumber(fn(this.values[k], k));
          }
          return clone(this, {
            values: result
          }, true);
        };
        _proto.get = function get(unit) {
          return this[Duration2.normalizeUnit(unit)];
        };
        _proto.set = function set(values) {
          if (!this.isValid)
            return this;
          var mixed = Object.assign(this.values, normalizeObject(values, Duration2.normalizeUnit, []));
          return clone(this, {
            values: mixed
          });
        };
        _proto.reconfigure = function reconfigure(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
          var loc = this.loc.clone({
            locale,
            numberingSystem
          }), opts = {
            loc
          };
          if (conversionAccuracy) {
            opts.conversionAccuracy = conversionAccuracy;
          }
          return clone(this, opts);
        };
        _proto.as = function as(unit) {
          return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
        };
        _proto.normalize = function normalize() {
          if (!this.isValid)
            return this;
          var vals = this.toObject();
          normalizeValues(this.matrix, vals);
          return clone(this, {
            values: vals
          }, true);
        };
        _proto.shiftTo = function shiftTo() {
          for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
            units[_key] = arguments[_key];
          }
          if (!this.isValid)
            return this;
          if (units.length === 0) {
            return this;
          }
          units = units.map(function(u) {
            return Duration2.normalizeUnit(u);
          });
          var built = {}, accumulated = {}, vals = this.toObject();
          var lastUnit;
          for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done; ) {
            var k = _step2.value;
            if (units.indexOf(k) >= 0) {
              lastUnit = k;
              var own = 0;
              for (var ak in accumulated) {
                own += this.matrix[ak][k] * accumulated[ak];
                accumulated[ak] = 0;
              }
              if (isNumber(vals[k])) {
                own += vals[k];
              }
              var i = Math.trunc(own);
              built[k] = i;
              accumulated[k] = own - i;
              for (var down in vals) {
                if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
                  convert(this.matrix, vals, down, built, k);
                }
              }
            } else if (isNumber(vals[k])) {
              accumulated[k] = vals[k];
            }
          }
          for (var key in accumulated) {
            if (accumulated[key] !== 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
          return clone(this, {
            values: built
          }, true).normalize();
        };
        _proto.negate = function negate() {
          if (!this.isValid)
            return this;
          var negated = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            negated[k] = -this.values[k];
          }
          return clone(this, {
            values: negated
          }, true);
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          if (!this.loc.equals(other.loc)) {
            return false;
          }
          function eq(v1, v2) {
            if (v1 === void 0 || v1 === 0)
              return v2 === void 0 || v2 === 0;
            return v1 === v2;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            if (!eq(this.values[u], other.values[u])) {
              return false;
            }
          }
          return true;
        };
        _createClass(Duration2, [{
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "years",
          get: function get() {
            return this.isValid ? this.values.years || 0 : NaN;
          }
        }, {
          key: "quarters",
          get: function get() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          }
        }, {
          key: "months",
          get: function get() {
            return this.isValid ? this.values.months || 0 : NaN;
          }
        }, {
          key: "weeks",
          get: function get() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          }
        }, {
          key: "days",
          get: function get() {
            return this.isValid ? this.values.days || 0 : NaN;
          }
        }, {
          key: "hours",
          get: function get() {
            return this.isValid ? this.values.hours || 0 : NaN;
          }
        }, {
          key: "minutes",
          get: function get() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          }
        }, {
          key: "seconds",
          get: function get() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          }
        }, {
          key: "milliseconds",
          get: function get() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Duration2;
      }();
      function friendlyDuration(durationish) {
        if (isNumber(durationish)) {
          return Duration.fromMillis(durationish);
        } else if (Duration.isDuration(durationish)) {
          return durationish;
        } else if (typeof durationish === "object") {
          return Duration.fromObject(durationish);
        } else {
          throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
        }
      }
      var INVALID$1 = "Invalid Interval";
      function validateStartEnd(start, end) {
        if (!start || !start.isValid) {
          return Interval.invalid("missing or invalid start");
        } else if (!end || !end.isValid) {
          return Interval.invalid("missing or invalid end");
        } else if (end < start) {
          return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
        } else {
          return null;
        }
      }
      var Interval = /* @__PURE__ */ function() {
        function Interval2(config) {
          this.s = config.start;
          this.e = config.end;
          this.invalid = config.invalid || null;
          this.isLuxonInterval = true;
        }
        Interval2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid2);
          } else {
            return new Interval2({
              invalid: invalid2
            });
          }
        };
        Interval2.fromDateTimes = function fromDateTimes(start, end) {
          var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
          var validateError = validateStartEnd(builtStart, builtEnd);
          if (validateError == null) {
            return new Interval2({
              start: builtStart,
              end: builtEnd
            });
          } else {
            return validateError;
          }
        };
        Interval2.after = function after(start, duration) {
          var dur = friendlyDuration(duration), dt = friendlyDateTime(start);
          return Interval2.fromDateTimes(dt, dt.plus(dur));
        };
        Interval2.before = function before(end, duration) {
          var dur = friendlyDuration(duration), dt = friendlyDateTime(end);
          return Interval2.fromDateTimes(dt.minus(dur), dt);
        };
        Interval2.fromISO = function fromISO(text, opts) {
          var _split = (text || "").split("/", 2), s2 = _split[0], e = _split[1];
          if (s2 && e) {
            var start, startIsValid;
            try {
              start = DateTime.fromISO(s2, opts);
              startIsValid = start.isValid;
            } catch (e2) {
              startIsValid = false;
            }
            var end, endIsValid;
            try {
              end = DateTime.fromISO(e, opts);
              endIsValid = end.isValid;
            } catch (e2) {
              endIsValid = false;
            }
            if (startIsValid && endIsValid) {
              return Interval2.fromDateTimes(start, end);
            }
            if (startIsValid) {
              var dur = Duration.fromISO(e, opts);
              if (dur.isValid) {
                return Interval2.after(start, dur);
              }
            } else if (endIsValid) {
              var _dur = Duration.fromISO(s2, opts);
              if (_dur.isValid) {
                return Interval2.before(end, _dur);
              }
            }
          }
          return Interval2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
        };
        Interval2.isInterval = function isInterval(o) {
          return o && o.isLuxonInterval || false;
        };
        var _proto = Interval2.prototype;
        _proto.length = function length(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
        };
        _proto.count = function count(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (!this.isValid)
            return NaN;
          var start = this.start.startOf(unit), end = this.end.startOf(unit);
          return Math.floor(end.diff(start, unit).get(unit)) + 1;
        };
        _proto.hasSame = function hasSame(unit) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
        };
        _proto.isEmpty = function isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        };
        _proto.isAfter = function isAfter(dateTime) {
          if (!this.isValid)
            return false;
          return this.s > dateTime;
        };
        _proto.isBefore = function isBefore(dateTime) {
          if (!this.isValid)
            return false;
          return this.e <= dateTime;
        };
        _proto.contains = function contains(dateTime) {
          if (!this.isValid)
            return false;
          return this.s <= dateTime && this.e > dateTime;
        };
        _proto.set = function set(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
          if (!this.isValid)
            return this;
          return Interval2.fromDateTimes(start || this.s, end || this.e);
        };
        _proto.splitAt = function splitAt() {
          var _this = this;
          if (!this.isValid)
            return [];
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          var sorted = dateTimes.map(friendlyDateTime).filter(function(d) {
            return _this.contains(d);
          }).sort(), results = [];
          var s2 = this.s, i = 0;
          while (s2 < this.e) {
            var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            i += 1;
          }
          return results;
        };
        _proto.splitBy = function splitBy(duration) {
          var dur = friendlyDuration(duration);
          if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
          }
          var s2 = this.s, idx = 1, next;
          var results = [];
          while (s2 < this.e) {
            var added = this.start.plus(dur.mapUnits(function(x) {
              return x * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s2, next));
            s2 = next;
            idx += 1;
          }
          return results;
        };
        _proto.divideEqually = function divideEqually(numberOfParts) {
          if (!this.isValid)
            return [];
          return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
        };
        _proto.overlaps = function overlaps(other) {
          return this.e > other.s && this.s < other.e;
        };
        _proto.abutsStart = function abutsStart(other) {
          if (!this.isValid)
            return false;
          return +this.e === +other.s;
        };
        _proto.abutsEnd = function abutsEnd(other) {
          if (!this.isValid)
            return false;
          return +other.e === +this.s;
        };
        _proto.engulfs = function engulfs(other) {
          if (!this.isValid)
            return false;
          return this.s <= other.s && this.e >= other.e;
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          return this.s.equals(other.s) && this.e.equals(other.e);
        };
        _proto.intersection = function intersection(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
          if (s2 >= e) {
            return null;
          } else {
            return Interval2.fromDateTimes(s2, e);
          }
        };
        _proto.union = function union(other) {
          if (!this.isValid)
            return this;
          var s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
          return Interval2.fromDateTimes(s2, e);
        };
        Interval2.merge = function merge(intervals) {
          var _intervals$sort$reduc = intervals.sort(function(a, b) {
            return a.s - b.s;
          }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          }, [[], null]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
          if (final) {
            found.push(final);
          }
          return found;
        };
        Interval2.xor = function xor(intervals) {
          var _Array$prototype;
          var start = null, currentCount = 0;
          var results = [], ends = intervals.map(function(i2) {
            return [{
              time: i2.s,
              type: "s"
            }, {
              time: i2.e,
              type: "e"
            }];
          }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a, b) {
            return a.time - b.time;
          });
          for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done; ) {
            var i = _step.value;
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) {
              start = i.time;
            } else {
              if (start && +start !== +i.time) {
                results.push(Interval2.fromDateTimes(start, i.time));
              }
              start = null;
            }
          }
          return Interval2.merge(results);
        };
        _proto.difference = function difference() {
          var _this2 = this;
          for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            intervals[_key2] = arguments[_key2];
          }
          return Interval2.xor([this].concat(intervals)).map(function(i) {
            return _this2.intersection(i);
          }).filter(function(i) {
            return i && !i.isEmpty();
          });
        };
        _proto.toString = function toString() {
          if (!this.isValid)
            return INVALID$1;
          return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
        };
        _proto.toISO = function toISO(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISO(opts) + "/" + this.e.toISO(opts);
        };
        _proto.toISODate = function toISODate() {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISODate() + "/" + this.e.toISODate();
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
        };
        _proto.toFormat = function toFormat(dateFormat, _temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
          if (!this.isValid)
            return INVALID$1;
          return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
        };
        _proto.toDuration = function toDuration(unit, opts) {
          if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
          }
          return this.e.diff(this.s, unit, opts);
        };
        _proto.mapEndpoints = function mapEndpoints(mapFn) {
          return Interval2.fromDateTimes(mapFn(this.s), mapFn(this.e));
        };
        _createClass(Interval2, [{
          key: "start",
          get: function get() {
            return this.isValid ? this.s : null;
          }
        }, {
          key: "end",
          get: function get() {
            return this.isValid ? this.e : null;
          }
        }, {
          key: "isValid",
          get: function get() {
            return this.invalidReason === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Interval2;
      }();
      var Info = /* @__PURE__ */ function() {
        function Info2() {
        }
        Info2.hasDST = function hasDST(zone) {
          if (zone === void 0) {
            zone = Settings.defaultZone;
          }
          var proto = DateTime.now().setZone(zone).set({
            month: 12
          });
          return !zone.universal && proto.offset !== proto.set({
            month: 6
          }).offset;
        };
        Info2.isValidIANAZone = function isValidIANAZone(zone) {
          return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
        };
        Info2.normalizeZone = function normalizeZone$1(input) {
          return normalizeZone(input, Settings.defaultZone);
        };
        Info2.months = function months2(length, _temp) {
          if (length === void 0) {
            length = "long";
          }
          var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
        };
        Info2.monthsFormat = function monthsFormat(length, _temp2) {
          if (length === void 0) {
            length = "long";
          }
          var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
        };
        Info2.weekdays = function weekdays2(length, _temp3) {
          if (length === void 0) {
            length = "long";
          }
          var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
        };
        Info2.weekdaysFormat = function weekdaysFormat(length, _temp4) {
          if (length === void 0) {
            length = "long";
          }
          var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
        };
        Info2.meridiems = function meridiems2(_temp5) {
          var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
          return Locale.create(locale).meridiems();
        };
        Info2.eras = function eras2(length, _temp6) {
          if (length === void 0) {
            length = "short";
          }
          var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
          return Locale.create(locale, null, "gregory").eras(length);
        };
        Info2.features = function features() {
          var intl = false, intlTokens = false, zones = false, relative = false;
          if (hasIntl()) {
            intl = true;
            intlTokens = hasFormatToParts();
            relative = hasRelative();
            try {
              zones = new Intl.DateTimeFormat("en", {
                timeZone: "America/New_York"
              }).resolvedOptions().timeZone === "America/New_York";
            } catch (e) {
              zones = false;
            }
          }
          return {
            intl,
            intlTokens,
            zones,
            relative
          };
        };
        return Info2;
      }();
      function dayDiff(earlier, later) {
        var utcDayStart = function utcDayStart2(dt) {
          return dt.toUTC(0, {
            keepLocalTime: true
          }).startOf("day").valueOf();
        }, ms = utcDayStart(later) - utcDayStart(earlier);
        return Math.floor(Duration.fromMillis(ms).as("days"));
      }
      function highOrderDiffs(cursor, later, units) {
        var differs = [["years", function(a, b) {
          return b.year - a.year;
        }], ["quarters", function(a, b) {
          return b.quarter - a.quarter;
        }], ["months", function(a, b) {
          return b.month - a.month + (b.year - a.year) * 12;
        }], ["weeks", function(a, b) {
          var days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }], ["days", dayDiff]];
        var results = {};
        var lowestOrder, highWater;
        for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
          var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
          if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
              var _cursor$plus2;
              cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
              delta -= 1;
            } else {
              cursor = highWater;
            }
            results[unit] = delta;
          }
        }
        return [cursor, results, highWater, lowestOrder];
      }
      function _diff(earlier, later, units, opts) {
        var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
        var remainingMillis = later - cursor;
        var lowerOrderUnits = units.filter(function(u) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
        });
        if (lowerOrderUnits.length === 0) {
          if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
          }
          if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
          }
        }
        var duration = Duration.fromObject(Object.assign(results, opts));
        if (lowerOrderUnits.length > 0) {
          var _Duration$fromMillis;
          return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
        } else {
          return duration;
        }
      }
      var numberingSystems = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d"
      };
      var numberingSystemsUTF16 = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
      };
      var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
      function parseDigits(str) {
        var value = parseInt(str, 10);
        if (isNaN(value)) {
          value = "";
          for (var i = 0; i < str.length; i++) {
            var code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) {
              value += hanidecChars.indexOf(str[i]);
            } else {
              for (var key in numberingSystemsUTF16) {
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) {
                  value += code - min;
                }
              }
            }
          }
          return parseInt(value, 10);
        } else {
          return value;
        }
      }
      function digitRegex(_ref, append) {
        var numberingSystem = _ref.numberingSystem;
        if (append === void 0) {
          append = "";
        }
        return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
      }
      var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
      function intUnit(regex, post) {
        if (post === void 0) {
          post = function post2(i) {
            return i;
          };
        }
        return {
          regex,
          deser: function deser(_ref) {
            var s2 = _ref[0];
            return post(parseDigits(s2));
          }
        };
      }
      var NBSP = String.fromCharCode(160);
      var spaceOrNBSP = "( |" + NBSP + ")";
      var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
      function fixListRegex(s2) {
        return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
      }
      function stripInsensitivities(s2) {
        return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
      }
      function oneOf(strings, startIndex) {
        if (strings === null) {
          return null;
        } else {
          return {
            regex: RegExp(strings.map(fixListRegex).join("|")),
            deser: function deser(_ref2) {
              var s2 = _ref2[0];
              return strings.findIndex(function(i) {
                return stripInsensitivities(s2) === stripInsensitivities(i);
              }) + startIndex;
            }
          };
        }
      }
      function offset(regex, groups) {
        return {
          regex,
          deser: function deser(_ref3) {
            var h = _ref3[1], m = _ref3[2];
            return signedOffset(h, m);
          },
          groups
        };
      }
      function simple(regex) {
        return {
          regex,
          deser: function deser(_ref4) {
            var s2 = _ref4[0];
            return s2;
          }
        };
      }
      function escapeToken(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function unitForToken(token, loc) {
        var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal2(t) {
          return {
            regex: RegExp(escapeToken(t.val)),
            deser: function deser(_ref5) {
              var s2 = _ref5[0];
              return s2;
            },
            literal: true
          };
        }, unitate = function unitate2(t) {
          if (token.literal) {
            return literal(t);
          }
          switch (t.val) {
            case "G":
              return oneOf(loc.eras("short", false), 0);
            case "GG":
              return oneOf(loc.eras("long", false), 0);
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
              return oneOf(loc.months("long", true, false), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false, false), 1);
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "a":
              return oneOf(loc.meridiems(), 0);
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true, false), 1);
            case "Z":
            case "ZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            default:
              return literal(t);
          }
        };
        var unit = unitate(token) || {
          invalidReason: MISSING_FTP
        };
        unit.token = token;
        return unit;
      }
      var partTypeStyleToTokenVal = {
        year: {
          "2-digit": "yy",
          numeric: "yyyyy"
        },
        month: {
          numeric: "M",
          "2-digit": "MM",
          short: "MMM",
          long: "MMMM"
        },
        day: {
          numeric: "d",
          "2-digit": "dd"
        },
        weekday: {
          short: "EEE",
          long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour: {
          numeric: "h",
          "2-digit": "hh"
        },
        minute: {
          numeric: "m",
          "2-digit": "mm"
        },
        second: {
          numeric: "s",
          "2-digit": "ss"
        }
      };
      function tokenForPart(part, locale, formatOpts) {
        var type = part.type, value = part.value;
        if (type === "literal") {
          return {
            literal: true,
            val: value
          };
        }
        var style = formatOpts[type];
        var val = partTypeStyleToTokenVal[type];
        if (typeof val === "object") {
          val = val[style];
        }
        if (val) {
          return {
            literal: false,
            val
          };
        }
        return void 0;
      }
      function buildRegex(units) {
        var re = units.map(function(u) {
          return u.regex;
        }).reduce(function(f, r) {
          return f + "(" + r.source + ")";
        }, "");
        return ["^" + re + "$", units];
      }
      function match(input, regex, handlers) {
        var matches = input.match(regex);
        if (matches) {
          var all = {};
          var matchIndex = 1;
          for (var i in handlers) {
            if (hasOwnProperty(handlers, i)) {
              var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
              if (!h.literal && h.token) {
                all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
              }
              matchIndex += groups;
            }
          }
          return [matches, all];
        } else {
          return [matches, {}];
        }
      }
      function dateTimeFromMatches(matches) {
        var toField = function toField2(token) {
          switch (token) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        };
        var zone;
        if (!isUndefined(matches.Z)) {
          zone = new FixedOffsetZone(matches.Z);
        } else if (!isUndefined(matches.z)) {
          zone = IANAZone.create(matches.z);
        } else {
          zone = null;
        }
        if (!isUndefined(matches.q)) {
          matches.M = (matches.q - 1) * 3 + 1;
        }
        if (!isUndefined(matches.h)) {
          if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
          } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
          }
        }
        if (matches.G === 0 && matches.y) {
          matches.y = -matches.y;
        }
        if (!isUndefined(matches.u)) {
          matches.S = parseMillis(matches.u);
        }
        var vals = Object.keys(matches).reduce(function(r, k) {
          var f = toField(k);
          if (f) {
            r[f] = matches[k];
          }
          return r;
        }, {});
        return [vals, zone];
      }
      var dummyDateTimeCache = null;
      function getDummyDateTime() {
        if (!dummyDateTimeCache) {
          dummyDateTimeCache = DateTime.fromMillis(1555555555555);
        }
        return dummyDateTimeCache;
      }
      function maybeExpandMacroToken(token, locale) {
        if (token.literal) {
          return token;
        }
        var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
        if (!formatOpts) {
          return token;
        }
        var formatter = Formatter.create(locale, formatOpts);
        var parts = formatter.formatDateTimeParts(getDummyDateTime());
        var tokens = parts.map(function(p) {
          return tokenForPart(p, locale, formatOpts);
        });
        if (tokens.includes(void 0)) {
          return token;
        }
        return tokens;
      }
      function expandMacroTokens(tokens, locale) {
        var _Array$prototype;
        return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t) {
          return maybeExpandMacroToken(t, locale);
        }));
      }
      function explainFromTokens(locale, input, format) {
        var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t) {
          return unitForToken(t, locale);
        }), disqualifyingUnit = units.find(function(t) {
          return t.invalidReason;
        });
        if (disqualifyingUnit) {
          return {
            input,
            tokens,
            invalidReason: disqualifyingUnit.invalidReason
          };
        } else {
          var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [null, null], result = _ref6[0], zone = _ref6[1];
          if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
            throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
          }
          return {
            input,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone
          };
        }
      }
      function parseFromTokens(locale, input, format) {
        var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, invalidReason = _explainFromTokens.invalidReason;
        return [result, zone, invalidReason];
      }
      var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function unitOutOfRange(unit, value) {
        return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
      }
      function dayOfWeek(year, month, day) {
        var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
        return js === 0 ? 7 : js;
      }
      function computeOrdinal(year, month, day) {
        return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
      }
      function uncomputeOrdinal(year, ordinal) {
        var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex(function(i) {
          return i < ordinal;
        }), day = ordinal - table[month0];
        return {
          month: month0 + 1,
          day
        };
      }
      function gregorianToWeek(gregObj) {
        var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
        var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
        if (weekNumber < 1) {
          weekYear = year - 1;
          weekNumber = weeksInWeekYear(weekYear);
        } else if (weekNumber > weeksInWeekYear(year)) {
          weekYear = year + 1;
          weekNumber = 1;
        } else {
          weekYear = year;
        }
        return Object.assign({
          weekYear,
          weekNumber,
          weekday
        }, timeObject(gregObj));
      }
      function weekToGregorian(weekData) {
        var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
        var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
        if (ordinal < 1) {
          year = weekYear - 1;
          ordinal += daysInYear(year);
        } else if (ordinal > yearInDays) {
          year = weekYear + 1;
          ordinal -= daysInYear(weekYear);
        } else {
          year = weekYear;
        }
        var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
        return Object.assign({
          year,
          month,
          day
        }, timeObject(weekData));
      }
      function gregorianToOrdinal(gregData) {
        var year = gregData.year, month = gregData.month, day = gregData.day, ordinal = computeOrdinal(year, month, day);
        return Object.assign({
          year,
          ordinal
        }, timeObject(gregData));
      }
      function ordinalToGregorian(ordinalData) {
        var year = ordinalData.year, ordinal = ordinalData.ordinal, _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
        return Object.assign({
          year,
          month,
          day
        }, timeObject(ordinalData));
      }
      function hasInvalidWeekData(obj) {
        var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
        if (!validYear) {
          return unitOutOfRange("weekYear", obj.weekYear);
        } else if (!validWeek) {
          return unitOutOfRange("week", obj.week);
        } else if (!validWeekday) {
          return unitOutOfRange("weekday", obj.weekday);
        } else
          return false;
      }
      function hasInvalidOrdinalData(obj) {
        var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validOrdinal) {
          return unitOutOfRange("ordinal", obj.ordinal);
        } else
          return false;
      }
      function hasInvalidGregorianData(obj) {
        var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validMonth) {
          return unitOutOfRange("month", obj.month);
        } else if (!validDay) {
          return unitOutOfRange("day", obj.day);
        } else
          return false;
      }
      function hasInvalidTimeData(obj) {
        var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
        var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
        if (!validHour) {
          return unitOutOfRange("hour", hour);
        } else if (!validMinute) {
          return unitOutOfRange("minute", minute);
        } else if (!validSecond) {
          return unitOutOfRange("second", second);
        } else if (!validMillisecond) {
          return unitOutOfRange("millisecond", millisecond);
        } else
          return false;
      }
      var INVALID$2 = "Invalid DateTime";
      var MAX_DATE = 864e13;
      function unsupportedZone(zone) {
        return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
      }
      function possiblyCachedWeekData(dt) {
        if (dt.weekData === null) {
          dt.weekData = gregorianToWeek(dt.c);
        }
        return dt.weekData;
      }
      function clone$1(inst, alts) {
        var current = {
          ts: inst.ts,
          zone: inst.zone,
          c: inst.c,
          o: inst.o,
          loc: inst.loc,
          invalid: inst.invalid
        };
        return new DateTime(Object.assign({}, current, alts, {
          old: current
        }));
      }
      function fixOffset(localTS, o, tz) {
        var utcGuess = localTS - o * 60 * 1e3;
        var o2 = tz.offset(utcGuess);
        if (o === o2) {
          return [utcGuess, o];
        }
        utcGuess -= (o2 - o) * 60 * 1e3;
        var o3 = tz.offset(utcGuess);
        if (o2 === o3) {
          return [utcGuess, o2];
        }
        return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
      }
      function tsToObj(ts, offset2) {
        ts += offset2 * 60 * 1e3;
        var d = new Date(ts);
        return {
          year: d.getUTCFullYear(),
          month: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          hour: d.getUTCHours(),
          minute: d.getUTCMinutes(),
          second: d.getUTCSeconds(),
          millisecond: d.getUTCMilliseconds()
        };
      }
      function objToTS(obj, offset2, zone) {
        return fixOffset(objToLocalTS(obj), offset2, zone);
      }
      function adjustTime(inst, dur) {
        var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = Object.assign({}, inst.c, {
          year,
          month,
          day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
        }), millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds
        }).as("milliseconds"), localTS = objToLocalTS(c);
        var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
        if (millisToAdd !== 0) {
          ts += millisToAdd;
          o = inst.zone.offset(ts);
        }
        return {
          ts,
          o
        };
      }
      function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
        var setZone = opts.setZone, zone = opts.zone;
        if (parsed && Object.keys(parsed).length !== 0) {
          var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(Object.assign(parsed, opts, {
            zone: interpretationZone,
            setZone: void 0
          }));
          return setZone ? inst : inst.setZone(zone);
        } else {
          return DateTime.invalid(new Invalid("unparsable", 'the input "' + text + `" can't be parsed as ` + format));
        }
      }
      function toTechFormat(dt, format, allowZ) {
        if (allowZ === void 0) {
          allowZ = true;
        }
        return dt.isValid ? Formatter.create(Locale.create("en-US"), {
          allowZ,
          forceSimple: true
        }).formatDateTimeFromString(dt, format) : null;
      }
      function toTechTimeFormat(dt, _ref) {
        var _ref$suppressSeconds = _ref.suppressSeconds, suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds, _ref$suppressMillisec = _ref.suppressMilliseconds, suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec, includeOffset = _ref.includeOffset, _ref$includePrefix = _ref.includePrefix, includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix, _ref$includeZone = _ref.includeZone, includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone, _ref$spaceZone = _ref.spaceZone, spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone, _ref$format = _ref.format, format = _ref$format === void 0 ? "extended" : _ref$format;
        var fmt = format === "basic" ? "HHmm" : "HH:mm";
        if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
          fmt += format === "basic" ? "ss" : ":ss";
          if (!suppressMilliseconds || dt.millisecond !== 0) {
            fmt += ".SSS";
          }
        }
        if ((includeZone || includeOffset) && spaceZone) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += format === "basic" ? "ZZZ" : "ZZ";
        }
        var str = toTechFormat(dt, fmt);
        if (includePrefix) {
          str = "T" + str;
        }
        return str;
      }
      var defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
      var orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
      var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function normalizeUnit(unit) {
        var normalized = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[unit.toLowerCase()];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      function quickDT(obj, zone) {
        for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done; ) {
          var u = _step.value;
          if (isUndefined(obj[u])) {
            obj[u] = defaultUnitValues[u];
          }
        }
        var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) {
          return DateTime.invalid(invalid);
        }
        var tsNow = Settings.now(), offsetProvis = zone.offset(tsNow), _objToTS = objToTS(obj, offsetProvis, zone), ts = _objToTS[0], o = _objToTS[1];
        return new DateTime({
          ts,
          zone,
          o
        });
      }
      function diffRelative(start, end, opts) {
        var round = isUndefined(opts.round) ? true : opts.round, format = function format2(c, unit2) {
          c = roundTo(c, round || opts.calendary ? 0 : 2, true);
          var formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c, unit2);
        }, differ = function differ2(unit2) {
          if (opts.calendary) {
            if (!end.hasSame(start, unit2)) {
              return end.startOf(unit2).diff(start.startOf(unit2), unit2).get(unit2);
            } else
              return 0;
          } else {
            return end.diff(start, unit2).get(unit2);
          }
        };
        if (opts.unit) {
          return format(differ(opts.unit), opts.unit);
        }
        for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done; ) {
          var unit = _step2.value;
          var count = differ(unit);
          if (Math.abs(count) >= 1) {
            return format(count, unit);
          }
        }
        return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
      }
      var DateTime = /* @__PURE__ */ function() {
        function DateTime2(config) {
          var zone = config.zone || Settings.defaultZone;
          var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
          this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
          var c = null, o = null;
          if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
              var _ref2 = [config.old.c, config.old.o];
              c = _ref2[0];
              o = _ref2[1];
            } else {
              var ot = zone.offset(this.ts);
              c = tsToObj(this.ts, ot);
              invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
              c = invalid ? null : c;
              o = invalid ? null : ot;
            }
          }
          this._zone = zone;
          this.loc = config.loc || Locale.create();
          this.invalid = invalid;
          this.weekData = null;
          this.c = c;
          this.o = o;
          this.isLuxonDateTime = true;
        }
        DateTime2.now = function now2() {
          return new DateTime2({});
        };
        DateTime2.local = function local(year, month, day, hour, minute, second, millisecond) {
          if (isUndefined(year)) {
            return DateTime2.now();
          } else {
            return quickDT({
              year,
              month,
              day,
              hour,
              minute,
              second,
              millisecond
            }, Settings.defaultZone);
          }
        };
        DateTime2.utc = function utc(year, month, day, hour, minute, second, millisecond) {
          if (isUndefined(year)) {
            return new DateTime2({
              ts: Settings.now(),
              zone: FixedOffsetZone.utcInstance
            });
          } else {
            return quickDT({
              year,
              month,
              day,
              hour,
              minute,
              second,
              millisecond
            }, FixedOffsetZone.utcInstance);
          }
        };
        DateTime2.fromJSDate = function fromJSDate(date, options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          var ts = isDate(date) ? date.valueOf() : NaN;
          if (Number.isNaN(ts)) {
            return DateTime2.invalid("invalid input");
          }
          var zoneToUse = normalizeZone(options2.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime2.invalid(unsupportedZone(zoneToUse));
          }
          return new DateTime2({
            ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options2)
          });
        };
        DateTime2.fromMillis = function fromMillis(milliseconds, options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          if (!isNumber(milliseconds)) {
            throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
          } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            return DateTime2.invalid("Timestamp out of range");
          } else {
            return new DateTime2({
              ts: milliseconds,
              zone: normalizeZone(options2.zone, Settings.defaultZone),
              loc: Locale.fromObject(options2)
            });
          }
        };
        DateTime2.fromSeconds = function fromSeconds(seconds, options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          if (!isNumber(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
          } else {
            return new DateTime2({
              ts: seconds * 1e3,
              zone: normalizeZone(options2.zone, Settings.defaultZone),
              loc: Locale.fromObject(options2)
            });
          }
        };
        DateTime2.fromObject = function fromObject(obj) {
          var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime2.invalid(unsupportedZone(zoneToUse));
          }
          var tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(obj);
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
          var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
          if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
          } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
          } else {
            units = orderedUnits$1;
            defaultValues = defaultUnitValues;
          }
          var foundFirst = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done; ) {
            var u = _step3.value;
            var v = normalized[u];
            if (!isUndefined(v)) {
              foundFirst = true;
            } else if (foundFirst) {
              normalized[u] = defaultValues[u];
            } else {
              normalized[u] = objNow[u];
            }
          }
          var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
          if (invalid) {
            return DateTime2.invalid(invalid);
          }
          var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime2({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
          });
          if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime2.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
          }
          return inst;
        };
        DateTime2.fromISO = function fromISO(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
        };
        DateTime2.fromRFC2822 = function fromRFC2822(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
          return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
        };
        DateTime2.fromHTTP = function fromHTTP(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
        };
        DateTime2.fromFormat = function fromFormat(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
          }
          var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], invalid = _parseFromTokens[2];
          if (invalid) {
            return DateTime2.invalid(invalid);
          } else {
            return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
          }
        };
        DateTime2.fromString = function fromString(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return DateTime2.fromFormat(text, fmt, opts);
        };
        DateTime2.fromSQL = function fromSQL(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
          return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
        };
        DateTime2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid2);
          } else {
            return new DateTime2({
              invalid: invalid2
            });
          }
        };
        DateTime2.isDateTime = function isDateTime(o) {
          return o && o.isLuxonDateTime || false;
        };
        var _proto = DateTime2.prototype;
        _proto.get = function get(unit) {
          return this[unit];
        };
        _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
          return {
            locale,
            numberingSystem,
            outputCalendar: calendar
          };
        };
        _proto.toUTC = function toUTC(offset2, opts) {
          if (offset2 === void 0) {
            offset2 = 0;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.setZone(FixedOffsetZone.instance(offset2), opts);
        };
        _proto.toLocal = function toLocal() {
          return this.setZone(Settings.defaultZone);
        };
        _proto.setZone = function setZone(zone, _temp) {
          var _ref3 = _temp === void 0 ? {} : _temp, _ref3$keepLocalTime = _ref3.keepLocalTime, keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime, _ref3$keepCalendarTim = _ref3.keepCalendarTime, keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;
          zone = normalizeZone(zone, Settings.defaultZone);
          if (zone.equals(this.zone)) {
            return this;
          } else if (!zone.isValid) {
            return DateTime2.invalid(unsupportedZone(zone));
          } else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
              var offsetGuess = zone.offset(this.ts);
              var asObj = this.toObject();
              var _objToTS3 = objToTS(asObj, offsetGuess, zone);
              newTS = _objToTS3[0];
            }
            return clone$1(this, {
              ts: newTS,
              zone
            });
          }
        };
        _proto.reconfigure = function reconfigure(_temp2) {
          var _ref4 = _temp2 === void 0 ? {} : _temp2, locale = _ref4.locale, numberingSystem = _ref4.numberingSystem, outputCalendar = _ref4.outputCalendar;
          var loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
          });
          return clone$1(this, {
            loc
          });
        };
        _proto.setLocale = function setLocale(locale) {
          return this.reconfigure({
            locale
          });
        };
        _proto.set = function set(values) {
          if (!this.isValid)
            return this;
          var normalized = normalizeObject(values, normalizeUnit, []), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var mixed;
          if (settingWeekStuff) {
            mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
          } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
          } else {
            mixed = Object.assign(this.toObject(), normalized);
            if (isUndefined(normalized.day)) {
              mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
          }
          var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
          return clone$1(this, {
            ts,
            o
          });
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = friendlyDuration(duration);
          return clone$1(this, adjustTime(this, dur));
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = friendlyDuration(duration).negate();
          return clone$1(this, adjustTime(this, dur));
        };
        _proto.startOf = function startOf(unit) {
          if (!this.isValid)
            return this;
          var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
          switch (normalizedUnit) {
            case "years":
              o.month = 1;
            case "quarters":
            case "months":
              o.day = 1;
            case "weeks":
            case "days":
              o.hour = 0;
            case "hours":
              o.minute = 0;
            case "minutes":
              o.second = 0;
            case "seconds":
              o.millisecond = 0;
              break;
          }
          if (normalizedUnit === "weeks") {
            o.weekday = 1;
          }
          if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
          }
          return this.set(o);
        };
        _proto.endOf = function endOf(unit) {
          var _this$plus;
          return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
        };
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
        };
        _proto.toLocaleString = function toLocaleString(opts) {
          if (opts === void 0) {
            opts = DATE_SHORT;
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
        };
        _proto.toLocaleParts = function toLocaleParts(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
        };
        _proto.toISO = function toISO(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toISODate(opts) + "T" + this.toISOTime(opts);
        };
        _proto.toISODate = function toISODate(_temp3) {
          var _ref5 = _temp3 === void 0 ? {} : _temp3, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
          var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
          if (this.year > 9999) {
            fmt = "+" + fmt;
          }
          return toTechFormat(this, fmt);
        };
        _proto.toISOWeekDate = function toISOWeekDate() {
          return toTechFormat(this, "kkkk-'W'WW-c");
        };
        _proto.toISOTime = function toISOTime(_temp4) {
          var _ref6 = _temp4 === void 0 ? {} : _temp4, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
          return toTechTimeFormat(this, {
            suppressSeconds,
            suppressMilliseconds,
            includeOffset,
            includePrefix,
            format
          });
        };
        _proto.toRFC2822 = function toRFC2822() {
          return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
        };
        _proto.toHTTP = function toHTTP() {
          return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        };
        _proto.toSQLDate = function toSQLDate() {
          return toTechFormat(this, "yyyy-MM-dd");
        };
        _proto.toSQLTime = function toSQLTime(_temp5) {
          var _ref7 = _temp5 === void 0 ? {} : _temp5, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;
          return toTechTimeFormat(this, {
            includeOffset,
            includeZone,
            spaceZone: true
          });
        };
        _proto.toSQL = function toSQL(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toSQLDate() + " " + this.toSQLTime(opts);
        };
        _proto.toString = function toString() {
          return this.isValid ? this.toISO() : INVALID$2;
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.toMillis = function toMillis() {
          return this.isValid ? this.ts : NaN;
        };
        _proto.toSeconds = function toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        };
        _proto.toJSON = function toJSON() {
          return this.toISO();
        };
        _proto.toBSON = function toBSON() {
          return this.toJSDate();
        };
        _proto.toObject = function toObject(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return {};
          var base = Object.assign({}, this.c);
          if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        };
        _proto.toJSDate = function toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        };
        _proto.diff = function diff(otherDateTime, unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
          }
          var durOpts = Object.assign({
            locale: this.locale,
            numberingSystem: this.numberingSystem
          }, opts);
          var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
          return otherIsLater ? diffed.negate() : diffed;
        };
        _proto.diffNow = function diffNow(unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.diff(DateTime2.now(), unit, opts);
        };
        _proto.until = function until(otherDateTime) {
          return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
        };
        _proto.hasSame = function hasSame(otherDateTime, unit) {
          if (!this.isValid)
            return false;
          var inputMs = otherDateTime.valueOf();
          var otherZoneDateTime = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
          });
          return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
        };
        _proto.equals = function equals(other) {
          return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
        };
        _proto.toRelative = function toRelative(options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          if (!this.isValid)
            return null;
          var base = options2.base || DateTime2.fromObject({
            zone: this.zone
          }), padding = options2.padding ? this < base ? -options2.padding : options2.padding : 0;
          var units = ["years", "months", "days", "hours", "minutes", "seconds"];
          var unit = options2.unit;
          if (Array.isArray(options2.unit)) {
            units = options2.unit;
            unit = void 0;
          }
          return diffRelative(base, this.plus(padding), Object.assign(options2, {
            numeric: "always",
            units,
            unit
          }));
        };
        _proto.toRelativeCalendar = function toRelativeCalendar(options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          if (!this.isValid)
            return null;
          return diffRelative(options2.base || DateTime2.fromObject({
            zone: this.zone
          }), this, Object.assign(options2, {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: true
          }));
        };
        DateTime2.min = function min() {
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          if (!dateTimes.every(DateTime2.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.min);
        };
        DateTime2.max = function max() {
          for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            dateTimes[_key2] = arguments[_key2];
          }
          if (!dateTimes.every(DateTime2.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i) {
            return i.valueOf();
          }, Math.max);
        };
        DateTime2.fromFormatExplain = function fromFormatExplain(text, fmt, options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          var _options = options2, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          });
          return explainFromTokens(localeToUse, text, fmt);
        };
        DateTime2.fromStringExplain = function fromStringExplain(text, fmt, options2) {
          if (options2 === void 0) {
            options2 = {};
          }
          return DateTime2.fromFormatExplain(text, fmt, options2);
        };
        _createClass(DateTime2, [{
          key: "isValid",
          get: function get() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }, {
          key: "locale",
          get: function get() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "outputCalendar",
          get: function get() {
            return this.isValid ? this.loc.outputCalendar : null;
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "zoneName",
          get: function get() {
            return this.isValid ? this.zone.name : null;
          }
        }, {
          key: "year",
          get: function get() {
            return this.isValid ? this.c.year : NaN;
          }
        }, {
          key: "quarter",
          get: function get() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
          }
        }, {
          key: "month",
          get: function get() {
            return this.isValid ? this.c.month : NaN;
          }
        }, {
          key: "day",
          get: function get() {
            return this.isValid ? this.c.day : NaN;
          }
        }, {
          key: "hour",
          get: function get() {
            return this.isValid ? this.c.hour : NaN;
          }
        }, {
          key: "minute",
          get: function get() {
            return this.isValid ? this.c.minute : NaN;
          }
        }, {
          key: "second",
          get: function get() {
            return this.isValid ? this.c.second : NaN;
          }
        }, {
          key: "millisecond",
          get: function get() {
            return this.isValid ? this.c.millisecond : NaN;
          }
        }, {
          key: "weekYear",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
          }
        }, {
          key: "weekNumber",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
          }
        }, {
          key: "weekday",
          get: function get() {
            return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
          }
        }, {
          key: "ordinal",
          get: function get() {
            return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
          }
        }, {
          key: "monthShort",
          get: function get() {
            return this.isValid ? Info.months("short", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "monthLong",
          get: function get() {
            return this.isValid ? Info.months("long", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "weekdayShort",
          get: function get() {
            return this.isValid ? Info.weekdays("short", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "weekdayLong",
          get: function get() {
            return this.isValid ? Info.weekdays("long", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "offset",
          get: function get() {
            return this.isValid ? +this.o : NaN;
          }
        }, {
          key: "offsetNameShort",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "offsetNameLong",
          get: function get() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "isOffsetFixed",
          get: function get() {
            return this.isValid ? this.zone.universal : null;
          }
        }, {
          key: "isInDST",
          get: function get() {
            if (this.isOffsetFixed) {
              return false;
            } else {
              return this.offset > this.set({
                month: 1
              }).offset || this.offset > this.set({
                month: 5
              }).offset;
            }
          }
        }, {
          key: "isInLeapYear",
          get: function get() {
            return isLeapYear(this.year);
          }
        }, {
          key: "daysInMonth",
          get: function get() {
            return daysInMonth(this.year, this.month);
          }
        }, {
          key: "daysInYear",
          get: function get() {
            return this.isValid ? daysInYear(this.year) : NaN;
          }
        }, {
          key: "weeksInWeekYear",
          get: function get() {
            return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
          }
        }], [{
          key: "DATE_SHORT",
          get: function get() {
            return DATE_SHORT;
          }
        }, {
          key: "DATE_MED",
          get: function get() {
            return DATE_MED;
          }
        }, {
          key: "DATE_MED_WITH_WEEKDAY",
          get: function get() {
            return DATE_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATE_FULL",
          get: function get() {
            return DATE_FULL;
          }
        }, {
          key: "DATE_HUGE",
          get: function get() {
            return DATE_HUGE;
          }
        }, {
          key: "TIME_SIMPLE",
          get: function get() {
            return TIME_SIMPLE;
          }
        }, {
          key: "TIME_WITH_SECONDS",
          get: function get() {
            return TIME_WITH_SECONDS;
          }
        }, {
          key: "TIME_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_WITH_LONG_OFFSET;
          }
        }, {
          key: "TIME_24_SIMPLE",
          get: function get() {
            return TIME_24_SIMPLE;
          }
        }, {
          key: "TIME_24_WITH_SECONDS",
          get: function get() {
            return TIME_24_WITH_SECONDS;
          }
        }, {
          key: "TIME_24_WITH_SHORT_OFFSET",
          get: function get() {
            return TIME_24_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_24_WITH_LONG_OFFSET",
          get: function get() {
            return TIME_24_WITH_LONG_OFFSET;
          }
        }, {
          key: "DATETIME_SHORT",
          get: function get() {
            return DATETIME_SHORT;
          }
        }, {
          key: "DATETIME_SHORT_WITH_SECONDS",
          get: function get() {
            return DATETIME_SHORT_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED",
          get: function get() {
            return DATETIME_MED;
          }
        }, {
          key: "DATETIME_MED_WITH_SECONDS",
          get: function get() {
            return DATETIME_MED_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED_WITH_WEEKDAY",
          get: function get() {
            return DATETIME_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATETIME_FULL",
          get: function get() {
            return DATETIME_FULL;
          }
        }, {
          key: "DATETIME_FULL_WITH_SECONDS",
          get: function get() {
            return DATETIME_FULL_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_HUGE",
          get: function get() {
            return DATETIME_HUGE;
          }
        }, {
          key: "DATETIME_HUGE_WITH_SECONDS",
          get: function get() {
            return DATETIME_HUGE_WITH_SECONDS;
          }
        }]);
        return DateTime2;
      }();
      function friendlyDateTime(dateTimeish) {
        if (DateTime.isDateTime(dateTimeish)) {
          return dateTimeish;
        } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
          return DateTime.fromJSDate(dateTimeish);
        } else if (dateTimeish && typeof dateTimeish === "object") {
          return DateTime.fromObject(dateTimeish);
        } else {
          throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
        }
      }
      var VERSION = "1.27.0";
      exports.DateTime = DateTime;
      exports.Duration = Duration;
      exports.FixedOffsetZone = FixedOffsetZone;
      exports.IANAZone = IANAZone;
      exports.Info = Info;
      exports.Interval = Interval;
      exports.InvalidZone = InvalidZone;
      exports.LocalZone = LocalZone;
      exports.Settings = Settings;
      exports.VERSION = VERSION;
      exports.Zone = Zone;
    }
  });

  // clients/pollGameState.js
  var Luxon = __toModule(require_luxon());
  console.log("luxon");
  console.log(Luxon);
  var LogWindow = document.getElementById("activityLogWindow");
  var StatsWindow = document.getElementById("statsWindow");
  var ScheduleWindow = document.getElementById("scheduleWindow");
  var GoalWindow = document.getElementById("goalWindow");
  var Utils = {
    clearChildren(node) {
      while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };
  var Renderer = {
    renderCurrentInfo(data) {
      if (data.error && data.error.includes("game not found")) {
        Utils.clearChildren(GoalWindow);
        this.showEndState("Game not found.", "Make sure to start first and set game params.");
        window.clearInterval(window.PollingIntervalId);
      }
      this.showStats(data.stats);
      this.showSchedule(data.schedule);
      data.events.forEach((event) => this.showLine(event));
      if (data.events.length > 0) {
        window.sinceTimestamp = data.events[data.events.length - 1].registered_at;
      }
    },
    showSchedule(schedule) {
      if (schedule.length > 0) {
        Utils.clearChildren(ScheduleWindow);
      }
      schedule.forEach((line) => {
        const newChild = document.createElement("li");
        newChild.appendChild(document.createTextNode(line));
        ScheduleWindow.appendChild(newChild);
      });
    },
    showStats(stats) {
      if (!stats)
        return;
      Utils.clearChildren(StatsWindow);
      const newChild = document.createElement("li");
      newChild.appendChild(document.createTextNode(JSON.stringify(stats)));
      StatsWindow.appendChild(newChild);
    },
    showLine(event) {
      const newLi = document.createElement("li");
      const newContent = document.createTextNode(this.buildLogLine(event));
      newLi.appendChild(newContent);
      LogWindow.appendChild(newLi);
      if (event.end_state) {
        Utils.clearChildren(GoalWindow);
        this.showEndState("Goal achieved!", `It took you ${event.elapsed} seconds to get there. Can you do it faster?`);
        window.clearInterval(window.PollingIntervalId);
      }
      const childNodes = LogWindow.childNodes;
      if (childNodes.length > 10) {
        const oldestLi = childNodes[0];
        LogWindow.removeChild(oldestLi);
      }
    },
    buildLogLine(event) {
      let result = "";
      if (event.violations.length > 0) {
        result = `Failed. ${event.violations.join(" ")}`;
      }
      let base = `${Utils.capitalize(event.action)} ${event.target}. ${result}`;
      if (event.game_time) {
        const dateTime = Luxon.DateTime.fromISO(event.game_time);
        return dateTime.toFormat("yyyy LLL dd");
      } else {
        return ` ${base}`;
      }
    },
    showEndState(headerText, contentText) {
      const header = document.createElement("h1");
      header.appendChild(document.createTextNode(headerText));
      const contents = document.createElement("h4");
      const base = contentText;
      contents.appendChild(document.createTextNode(base));
      GoalWindow.prepend(contents);
      GoalWindow.prepend(header);
    }
  };

  // clients/staticComponents.js
  var JobListWindow = document.getElementById("jobList");
  var ItemListWindow = document.getElementById("itemList");
  function renderItems(list) {
    renderCategory(list.items, ItemListWindow);
    renderCategory(list.jobs, JobListWindow);
  }
  function renderCategory(items, parentNode) {
    Object.entries(items).forEach(([target, obj]) => {
      const targetNode = document.createElement("li");
      const targetName = document.createTextNode(target);
      const innerList = document.createElement("ul");
      targetNode.appendChild(targetName);
      targetNode.appendChild(innerList);
      parentNode.appendChild(targetNode);
      Object.entries(obj.actions).forEach(([actionName, details]) => {
        console.info(details.rules);
        const base = `${actionName} (${details.vectors.join(", ")})`;
        const text = document.createTextNode(base);
        const innerLi = document.createElement("li");
        innerLi.appendChild(text);
        innerList.appendChild(innerLi);
        const ruleLi = document.createElement("ul");
        details.rules.forEach((rule) => {
          const text2 = document.createTextNode(`${rule.rule}`);
          const eachRule = document.createElement("li");
          eachRule.appendChild(text2);
          ruleLi.append(eachRule);
        });
        innerLi.appendChild(ruleLi);
      });
    });
  }

  // clients/main.js
  console.log("loaded");
  var urlParams = new URLSearchParams(window.location.search);
  var gameId = urlParams.get("game");
  var URL = "https://polar-citadel-77237.herokuapp.com";
  var options = { method: "GET", headers: { "MY_JOB_GAME_ID": gameId } };
  function fetchLogs() {
    const logsRequest = new Request(URL + `/logs?since=${window.sinceTimestamp}`, options);
    fetch(logsRequest).then((res) => res.json()).then((data) => Renderer.renderCurrentInfo(data));
  }
  window.PollingIntervalId = window.setInterval(fetchLogs, 1e3);
  listRequest = new Request(URL + `/list`);
  fetch(listRequest).then((res) => res.json()).then((data) => renderItems(data));
})();
