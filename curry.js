function curriedSum(numArgs) {
  var numbers = [];
  return function _curriedSum(n) {
    numbers.push(n);
    if (numbers.length === numArgs ) {
      var sum = 0;
      numbers.forEach( function(el) {
        sum += el;
      })
      return sum;
    }
    return _curriedSum
  }
};



Function.prototype.curry = function(numArgs) {
  var func = this;
  var args = [];

  return function _function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(func, args);
    }
    return _function;
  }
};