if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        num = parseInt(num,10).toString(2);
        num >> bit;
    },

    base10: function(str) {
    return str.parseInt(binary,10).toString(2);

    },

    convertToBinary: function(num) {
        return parseInt(num,10).toString(2);
    },

    multiply: function(a, b) {
        a *= 1000;
        b *= 1000;

        return (a * b) / 1000000;

    }
  };
});

