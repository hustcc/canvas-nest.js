/**
 * Created by hustcc on 18/6/23.
 * Contract: i@hust.cc
 */

export const requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(func) {
    return window.setTimeout(func, 1000 / 60);
  };

export const cancelAnimationFrame = window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.msCancelAnimationFrame ||
  window.oCancelAnimationFrame ||
  window.clearTimeout;

export const range = n =>
  new Array(n).fill(0).map((e, idx) => idx);

export const canvasStyle = config =>
  `display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:${config.zIndex};opacity:${config.opacity}`;
