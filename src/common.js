function isInteger(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function isFunction(func) {
  return 'function' === typeof func;
}

module.exports = {
  isInteger,
  isFunction
};
