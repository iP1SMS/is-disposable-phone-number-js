var blacklist = require('@ip1sms/disposable-phone-numbers');

/**
 * Expose `isDisposablePhoneNumber`.
 */

module.exports = isDisposablePhoneNumber;

/**
 * Determine whether a phone number is disposable.
 *
 * @param {String} phoneNumber
 * @return {Boolean}
 */

function isDisposablePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/[^0-9]/, "");
    return phoneNumber in blacklist;
}
