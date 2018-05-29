/**
  * Contains static string utility methods.
  */
export default class Str {

    /**
     * Ensures that a given string starts with a slash and does not have a leading slash
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a slash and ends without a slasg (e.g. a valid location pathname)
     */
    static normalizePath(str) {
        return this.removeTrailingSlash(this.forceLeadingSlash(str));
    }

    /**
     * Joins all given arguments to a string with slashes.
     * Ensures there are no duplicate slashes (e.g. in case one of the arguments already had a slash at its start or end)
     * @param {...string} parts - Any number of strings
     * @return {string} A string that contains all given strings, concatenated with slashes
     */
    static joinPath(...parts) {
        return this.normalizePath(
            (parts || [])
                .filter(p => !!p)
                .join("/")
                .replace(/\/\//g, "/")
        );
    }

    /**
     * Ensures that a string does not end with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that does not end with a slash
     */
    static removeTrailingSlash(str) {
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
    static removeLeadingSlash(str) {
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
    static forceTrailingSlash(str) {
        if (str && str.length && str[str.length - 1] === "/") {
            return str;
        }
        return `${str}/`;
    }

    /**
     * Ensures that a string starts with a slash
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a slash
     */
    static forceLeadingSlash(str) {
        if (str && str[0] === "/") {
            return str;
        }
        return `/${str}`;
    }

    /**
     * Ensures that the first character of a string is in uppercase.
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a uppercase letter
     */
    static ucFirst(str) {
        if (!str) {
            return "";
        }
        return `${str[0].toUpperCase()}${str.substr(1, str.length - 1)}`;
    }

    /**
     * Ensures that the first character of a string is in lowercase.
     * @param {string} str - The string in question 
     * @return {string} A string that starts with a lowercase letter
     */
    static lcFirst(str) {
        if (!str) {
            return "";
        }
        return `${str[0].toLowerCase()}${str.substr(1, str.length - 1)}`;
    }

    /**
     * Checks whether a given string ends with a given other string
     * @param {string} str1 - The string in question
     * @param {string} str2 - The string that is possibly contained at the end of `str1`
     * @return {boolean} true if str1 ends with str2
     */
    static endsWith(str1, str2) {
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
    static startsWith(str1, str2) {
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
    static leftPad(value, length = 2, fill="0") {
        const pad =
            (length >= 1 ? fill : "") + String(Math.pow(10, length)).slice(1);
        return pad.substring(0, pad.length - String(value).length) + value;
    }
};
