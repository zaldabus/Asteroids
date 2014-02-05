function sum() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  args.forEach(function (el) {
    sum += el;
  });
  return sum;
};


Function.prototype.myBind = function(obj) {
  var that = this;
  var args = Array.prototype.slice.call(arguments);

  return function () {
     that.apply(obj, args.slice(1));
  }
};

function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  age_n_years: function (years) {
    this.age += years;
    console.log(this.age);
  }
};

times(3, cat.age_n_years.myBind(cat, 3));
