/**
 * Strong password regular expression
 *
 * **Rules**
 *
 * *- at least eight characters long*
 *
 * *- at least one capital letter*

 * *- at least one small letter*
 *
 * *- at least one number*
 *
 * *- at least one special character*
 */
const STRONG_PASSWORD_REGEXP =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

/**
 * Returns true if a given is considered a strong password, false otherwise
 *
 * ### Usage
 * ```ts
 * import { isStrongPassword } from '@lerado/typescript-toolbox';
 *
 * isStrongPassword('123456');
 * // => false
 * isStrongPassword('password123');
 * // => false
 * isStrongPassword('Password123');
 * // => false
 * isStrongPassword('Password!123');
 * // => true
 * ```
 * @param password - string representing a password to check
 * @see STRONG_PASSWORD_REGEXP
 */
function isStrongPassword(password: string): boolean {
  return STRONG_PASSWORD_REGEXP.test(password);
}

export { STRONG_PASSWORD_REGEXP, isStrongPassword };
