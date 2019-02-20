import { get, isNil } from 'lodash';
import locales from '../../locales/es.json';

const placeholderRegex = /{{([^{}]*)}}/g;

/**
 * Simple function to return a translation for the key.
 * Passing parameters replaces the content using the matched regex pattern.
 * @param key
 * @param [params]
 * @returns {string}
 */
export function translate(key, params) {
  const str = get(locales, key, `Missing translation: ${key}`);

  if (!params) return str;

  return str.replace(placeholderRegex, (match, prop) => {
    const value = params[prop];

    if (typeof value === 'function') {
      return value(prop, params);
    }

    return !isNil(value) ? value : '';
  });
}

/**
 * Returns the translation
 * @param value {number} - the value to check
 * @param prefix {string} - prefix is used for all keys
 * @param [keySingle] {string} - if value === 1 or value === -1 then this key is appended to prefix
 * @param [keyMultiple] {string} - any other value, this key is appended to prefix
 * @param [params] {object} - Additional parameters for the translation
 * @returns {string}
 */
export function pluralize(value, prefix, keySingle = '', keyMultiple = '', params) {
  if (Math.abs(value) === 1) {
    return translate(`${prefix}${keySingle}`, params);
  }

  return translate(`${prefix}${keyMultiple}`, params);
}
