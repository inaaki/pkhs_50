export const submitData = value => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value) {
        res('success');
      } else rej('error');
    }, 3000);
  });
};
