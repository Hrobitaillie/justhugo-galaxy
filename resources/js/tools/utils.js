/**
 * Uppercases the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
export function uppercaseFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}