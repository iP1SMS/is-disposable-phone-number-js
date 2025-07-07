import blacklist from '@ip1sms/disposable-phone-numbers';

/**
 * Expose `isDisposablePhoneNumber`.
 */
export default isDisposablePhoneNumber;

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
