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

export function cloneDeepObject(obj) {
  const result = {};
  for (let key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = cloneDeepObject(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
