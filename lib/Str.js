"use strict";

module.exports = {
  normalizePath: function normalizePath(str) {
    return this.removeTrailingSlash(this.forceLeadingSlash(str));
  },
  joinPath: function joinPath() {
    for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
      parts[_key] = arguments[_key];
    }

    return this.normalizePath((parts || []).filter(function (p) {
      return !!p;
    }).join("/").replace(/\/\//g, "/"));
  },
  removeTrailingSlash: function removeTrailingSlash(str) {
    if (!str) {
      return "";
    }

    if (str && str.length && str[str.length - 1] === "/") {
      return str.substr(0, str.length - 1) || "";
    }

    return str;
  },
  removeLeadingSlash: function removeLeadingSlash(str) {
    if (!str) {
      return "";
    }

    if (str && str.length && str[0] === "/") {
      return str.substr(1, str.length);
    }

    return str;
  },
  forceLeadingSlash: function forceLeadingSlash(str) {
    if (str && str[0] === "/") {
      return str;
    }

    return "/".concat(str);
  },
  ucFirst: function ucFirst(str) {
    if (!str) {
      return "";
    }

    return "".concat(str[0].toUpperCase()).concat(str.substr(1, str.length - 1));
  },
  lcFirst: function lcFirst(str) {
    if (!str) {
      return "";
    }

    return "".concat(str[0].toLowerCase()).concat(str.substr(1, str.length - 1));
  },

  /**
   * @return true if str1 ends with str2
   */
  endsWith: function endsWith(str1, str2) {
    if (str1 && str2) {
      if (str1.substr(str1.length - str2.length, str1.length) === str2) {
        return true;
      }
    }

    return false;
  },

  /**
   * @return true if str1 starts with str2
   */
  startsWith: function startsWith(str1, str2) {
    if (str1 && str2) {
      if (str1.substr(0, str2.length) === str2) {
        return true;
      }
    }

    return false;
  },
  leftPad: function leftPad(val) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var pad = (digits >= 1 ? "0" : "") + String(Math.pow(10, digits)).slice(1);
    return pad.substring(0, pad.length - String(val).length) + val;
  }
};