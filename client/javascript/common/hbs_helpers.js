var Handlebars, HandlebarsExpressionRegistry, eR, isHelper, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Handlebars = require('hbsfy/runtime');

_ = require('underscore');

HandlebarsExpressionRegistry = (function() {
  function HandlebarsExpressionRegistry() {
    this.add = __bind(this.add, this);
    this.expressions = {};
  }

  HandlebarsExpressionRegistry.prototype.add = function(operator, method) {
    return this.expressions[operator] = method;
  };

  HandlebarsExpressionRegistry.prototype.call = function(operator, left, right) {
    if (!this.expressions.hasOwnProperty(operator)) {
      throw new Error('Unknown operator \'' + operator + '\'');
    }
    return this.expressions[operator](left, right);
  };

  HandlebarsExpressionRegistry.prototype.isArray = function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };

  return HandlebarsExpressionRegistry;

})();

eR = new HandlebarsExpressionRegistry;

eR.add('not', function(left, right) {
  return left !== right;
});

eR.add('>', function(left, right) {
  return left > right;
});

eR.add('<', function(left, right) {
  return left < right;
});

eR.add('>=', function(left, right) {
  return left >= right;
});

eR.add('<=', function(left, right) {
  return left <= right;
});

eR.add('===', function(left, right) {
  return left === right;
});

eR.add('!==', function(left, right) {
  return left !== right;
});

eR.add('in', function(left, right) {
  if (!eR.isArray(right)) {
    right = right.split(',');
  }
  return right.indexOf(left) !== -1;
});

isHelper = function() {
  var args, left, operator, options, right;
  args = arguments;
  left = args[0];
  operator = args[1];
  right = args[2];
  options = args[3];
  if (args.length === 2) {
    options = args[1];
    if (left) {
      options.fn(this);
    }
    options.inverse(this);
  }
  if (args.length === 3) {
    right = args[1];
    options = args[2];
    if (left === right) {
      options.fn(this);
    }
    options.inverse(this);
  }
  if (eR.call(operator, left, right)) {
    return options.fn(this);
  }
  return options.inverse(this);
};

Handlebars.registerHelper('is', isHelper);

Handlebars.registerHelper('nl2br', function(text) {
  var nl2br;
  nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
  return new Handlebars.SafeString(nl2br);
});

Handlebars.registerHelper('log', function() {
  return console.log(['Values:'].concat(Array.prototype.slice.call(arguments, 0, -1)));
});

Handlebars.registerHelper('debug', function() {
  console.log('Context:', this);
  return console.log(['Values:'].concat(Array.prototype.slice.call(arguments, 0, -1)));
});

module.exports = Handlebars;
