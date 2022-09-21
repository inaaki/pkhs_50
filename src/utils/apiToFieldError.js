function apiToFieldError(apiErrors) {
  //apiErrors === { password: ['pass error'], phone: ['phone err']}

  const obj = {};
  for (const key in apiErrors) {
    obj[key] = apiErrors[key][0];
  }
  return obj;
}

export default apiToFieldError;
