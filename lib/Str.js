"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
  * Contains static string utility methods.
  */
var Str =
/*#__PURE__*/
function () {
  function Str() {
    _classCallCheck(this, Str);
  }

  _createClass(Str, null, [{
    key: "normalizePath",

    /**
     * Ensures that a given string starts with a slash and does not have a leading slash
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a slash and ends without a slasg (e.g. a valid location pathname)
     */
    value: function normalizePath(str) {
      return this.removeTrailingSlash(this.forceLeadingSlash(str));
    }
    /**
     * Joins all given arguments to a string with slashes.
     * Ensures there are no duplicate slashes (e.g. in case one of the arguments already had a slash at its start or end)
     * @param {...string} parts - Any number of strings
     * @return {string} A string that contains all given strings, concatenated with slashes
     */

  }, {
    key: "joinPath",
    value: function joinPath() {
      for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
        parts[_key] = arguments[_key];
      }

      return this.normalizePath((parts || []).filter(function (p) {
        return !!p;
      }).join("/").replace(/\/\//g, "/"));
    }
    /**
     * Ensures that a string does not end with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that does not end with a slash
     */

  }, {
    key: "removeTrailingSlash",
    value: function removeTrailingSlash(str) {
      if (!str) {
        return "";
      }

      if (str && str.length && str[str.length - 1] === "/") {
        return str.substr(0, str.length - 1) || "";
      }

      return str;
    }
    /**
     * Ensures that a string does not start with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that does not start with a slash
     */

  }, {
    key: "removeLeadingSlash",
    value: function removeLeadingSlash(str) {
      if (!str) {
        return "";
      }

      if (str && str.length && str[0] === "/") {
        return str.substr(1, str.length);
      }

      return str;
    }
    /**
     * Ensures that a string ends with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that ends with a slash
     */

  }, {
    key: "forceTrailingSlash",
    value: function forceTrailingSlash(str) {
      if (str && str.length && str[str.length - 1] === "/") {
        return str;
      }

      return "".concat(str, "/");
    }
    /**
     * Ensures that a string starts with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a slash
     */

  }, {
    key: "forceLeadingSlash",
    value: function forceLeadingSlash(str) {
      if (str && str[0] === "/") {
        return str;
      }

      return "/".concat(str);
    }
    /**
     * Ensures that the first character of a string is in uppercase.
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a uppercase letter
     */

  }, {
    key: "ucFirst",
    value: function ucFirst(str) {
      if (!str) {
        return "";
      }

      return "".concat(str[0].toUpperCase()).concat(str.substr(1, str.length - 1));
    }
    /**
     * Ensures that the first character of a string is in lowercase.
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a lowercase letter
     */

  }, {
    key: "lcFirst",
    value: function lcFirst(str) {
      if (!str) {
        return "";
      }

      return "".concat(str[0].toLowerCase()).concat(str.substr(1, str.length - 1));
    }
    /**
     * Checks whether a given string ends with a given other string
     * @param {string} str1 - The string in question
     * @param {string} str2 - The string that is possibly contained at the end of `str1`
     * @return {boolean} true if str1 ends with str2
     */

  }, {
    key: "endsWith",
    value: function endsWith(str1, str2) {
      if (str1 && str2) {
        if (str1.substr(str1.length - str2.length, str1.length) === str2) {
          return true;
        }
      }

      return false;
    }
    /**
     * Checks whether a given string starts with a given other string
     * @param {string} str1 - The string in question
     * @param {string} str2 - The string that is possibly contained at the beginning of `str1`
     * @return {boolean} true if str1 starts with str2
     */

  }, {
    key: "startsWith",
    value: function startsWith(str1, str2) {
      if (str1 && str2) {
        if (str1.substr(0, str2.length) === str2) {
          return true;
        }
      }

      return false;
    }
    /**
     * Ensures that a string has a specified length.
     * Fills up missing length by inserting a `fill` chartacter before the original value.
     * @param {string} value - The string in question
     * @param {number} [length=2] - The desired length for `value`
     * @param {string} [fill="0"] - The character to insert until `length` has been reached
     * @return {string} A string that ends in `value` and has `length` chars
     */

  }, {
    key: "leftPad",
    value: function leftPad(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      var pad = (length >= 1 ? fill : "") + String(Math.pow(10, length)).slice(1);
      return pad.substring(0, pad.length - String(value).length) + value;
    }
  }]);

  return Str;
}();

exports.default = Str;
;