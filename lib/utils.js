"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by hustcc on 18/6/23.
 * Contract: i@hust.cc
 */

var requestAnimationFrame = exports.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (func) {
  return window.setTimeout(func, 1000 / 60);
};

var cancelAnimationFrame = exports.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || window.clearTimeout;

var range = exports.range = Array.fill ? function (n) {
  return new Array(n).fill(0).map(function (e, idx) {
    return idx;
  });
} : function (n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};
var canvasStyle = exports.canvasStyle = function canvasStyle(config) {
  return "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:" + config.zIndex + ";opacity:" + config.opacity;
};