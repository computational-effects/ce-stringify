'use strict';

var pbp = require('@ce/pbp');

var Stringify = Object.create(null, {
  toString: pbp.enumerableValue(function() {
    return this.type + (this.args.length > 0 ? '(' + this.args + ')' : '');
  }),
});

module.exports = {
  Stringify: Stringify,
};
