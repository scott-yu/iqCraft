Handlebars = require "hbsfy/runtime"
_ = require 'underscore'

class HandlebarsExpressionRegistry
  constructor: ->
    @expressions = {}

  add: (operator, method) =>
    @expressions[operator] = method

  call: (operator, left, right) ->
    throw new Error("Unknown operator \"" + operator + "\"")  unless @expressions.hasOwnProperty(operator)
    @expressions[operator] left, right

  isArray: (value) ->
    Object::toString.call(value) is "[object Array]"

eR = new HandlebarsExpressionRegistry

eR.add "not", (left, right) ->
  left isnt right

eR.add ">", (left, right) ->
  left > right

eR.add "<", (left, right) ->
  left < right

eR.add ">=", (left, right) ->
  left >= right

eR.add "<=", (left, right) ->
  left <= right

eR.add "===", (left, right) ->
  left is right

eR.add "!==", (left, right) ->
  left isnt right

eR.add "in", (left, right) ->
  right = right.split(",")  unless eR.isArray(right)
  right.indexOf(left) isnt -1

isHelper = ->
  args = arguments
  left = args[0]
  operator = args[1]
  right = args[2]
  options = args[3]
  if args.length is 2
    options = args[1]
    options.fn(this) if left
    options.inverse(this)
  if args.length is 3
    right = args[1]
    options = args[2]
    options.fn(this) if left is right
    options.inverse(this)
  return options.fn(this)  if eR.call(operator, left, right)
  options.inverse this

Handlebars.registerHelper "is", isHelper

Handlebars.registerHelper "nl2br", (text) ->
  nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2")
  new Handlebars.SafeString(nl2br)

Handlebars.registerHelper "log", ->
  console.log ["Values:"].concat(Array::slice.call(arguments, 0, -1))

Handlebars.registerHelper "debug", ->
  console.log "Context:", this
  console.log ["Values:"].concat(Array::slice.call(arguments, 0, -1))

module.exports = Handlebars
