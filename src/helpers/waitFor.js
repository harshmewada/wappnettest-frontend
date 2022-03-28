const waitTimeout = (time, cb) => {
  setTimeout(() => {
    cb();
  }, time);
};
export default waitTimeout;
