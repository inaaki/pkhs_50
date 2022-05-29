export const camelToMultiWords = str =>
  str.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);
