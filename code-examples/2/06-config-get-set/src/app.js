var app = {

  foo: 42,

  bar: function() {

    var bazz = function(n) {
      console.log(n);
      return n;
    };

    return bazz(7);
  }

};
