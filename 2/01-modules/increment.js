
var add = require('./math').add;

exports.increment = function(b) {
  return add(b, 1);
};
