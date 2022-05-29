import isPlainObject from 'lodash/isPlainObject';

export function nestedToSingleObject(obj) {
  let result = {};
  for (let key in obj) {
    const value = obj[key];
    if (isPlainObject(value)) {
      result = { ...result, ...nestedToSingleObject(value) };
    } else {
      result[key] = value;
    }
  }
  return result;
}
