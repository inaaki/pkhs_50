const helper = async (schema, target) => {
  try {
    const result = await schema.validate(target, {
      abortEarly: false,
    });
    return Promise.resolve(result);
  } catch (e) {
    const newErrors = {};
    e.inner.forEach(obj => {
      const { path, message } = obj;
      newErrors[path] = message;
    });
    return Promise.reject(newErrors);
  }
};

export default helper;
