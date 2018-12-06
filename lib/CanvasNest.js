'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by hustcc on 18/6/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contract: i@hust.cc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _sizeSensor = require('size-sensor');

var _utils = require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasNest = function () {
  function CanvasNest(el, config) {
    var _this = this;

    _classCallCheck(this, CanvasNest);

    this.randomPoints = function () {
      return (0, _utils.range)(_this.c.count).map(function () {
        return {
          x: Math.random() * _this.canvas.width,
          y: Math.random() * _this.canvas.height,
          xa: 2 * Math.random() - 1, // 随机运动返现
          ya: 2 * Math.random() - 1,
          max: 6000 // 沾附距离
        };
      });
    };

    this.el = el;

    this.c = _extends({
      zIndex: -1, // z-index
      opacity: 0.5, // opacity
      color: '0,0,0', // color of lines
      pointColor: '0,0,0', // color of points
      count: 99 }, config);

    this.canvas = this.newCanvas();
    this.context = this.canvas.getContext('2d');

    this.points = this.randomPoints();
    this.current = {
      x: null, // 当前鼠标x
      y: null, // 当前鼠标y
      max: 20000 // 圈半径的平方
    };
    this.all = this.points.concat([this.current]);

    this.bindEvent();

    this.requestFrame(this.drawCanvas);
  }

  _createClass(CanvasNest, [{
    key: 'bindEvent',
    value: function bindEvent() {
      var _this2 = this;

      (0, _sizeSensor.bind)(this.el, function () {
        _this2.canvas.width = _this2.el.clientWidth;
        _this2.canvas.height = _this2.el.clientHeight;
      });

      this.onmousemove = window.onmousemove;
      window.onmousemove = function (e) {
        _this2.current.x = e.clientX - _this2.el.offsetLeft + document.scrollingElement.scrollLeft; // 当存在横向滚动条时，x坐标再往右移动滚动条拉动的距离
        _this2.current.y = e.clientY - _this2.el.offsetTop + document.scrollingElement.scrollTop; // 当存在纵向滚动条时，y坐标再往下移动滚动条拉动的距离
        _this2.onmousemove && _this2.onmousemove(e);
      };

      this.onmouseout = window.onmouseout;
      window.onmouseout = function () {
        _this2.current.x = null;
        _this2.current.y = null;
        _this2.onmouseout && _this2.onmouseout();
      };
    }
  }, {
    key: 'newCanvas',
    value: function newCanvas() {
      if (getComputedStyle(this.el).position === 'static') {
        this.el.style.position = 'relative';
      }
      var canvas = document.createElement('canvas'); // 画布
      canvas.style.cssText = (0, _utils.canvasStyle)(this.c);

      canvas.width = this.el.clientWidth;
      canvas.height = this.el.clientHeight;

      this.el.appendChild(canvas);
      return canvas;
    }
  }, {
    key: 'requestFrame',
    value: function requestFrame(func) {
      var _this3 = this;

      this.tid = (0, _utils.requestAnimationFrame)(function () {
        return func.call(_this3);
      });
    }
  }, {
    key: 'drawCanvas',
    value: function drawCanvas() {
      var _this4 = this;

      var context = this.context;
      var width = this.canvas.width;
      var height = this.canvas.height;
      var current = this.current;
      var points = this.points;
      var all = this.all;

      context.clearRect(0, 0, width, height);
      // 随机的线条和当前位置联合数组
      var e = void 0,
          i = void 0,
          d = void 0,
          x_dist = void 0,
          y_dist = void 0,
          dist = void 0; // 临时节点
      // 遍历处理每一个点
      points.forEach(function (r, idx) {
        r.x += r.xa;
        r.y += r.ya; // 移动
        r.xa *= r.x > width || r.x < 0 ? -1 : 1;
        r.ya *= r.y > height || r.y < 0 ? -1 : 1; // 碰到边界，反向反弹
        context.fillStyle = 'rgba(' + _this4.c.pointColor + ')';
        context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); // 绘制一个宽高为1的点
        // 从下一个点开始
        for (i = idx + 1; i < all.length; i++) {
          e = all[i];
          // 当前点存在
          if (null !== e.x && null !== e.y) {
            x_dist = r.x - e.x; // x轴距离 l
            y_dist = r.y - e.y; // y轴距离 n
            dist = x_dist * x_dist + y_dist * y_dist; // 总距离, m

            dist < e.max && (e === current && dist >= e.max / 2 && (r.x -= 0.03 * x_dist, r.y -= 0.03 * y_dist), // 靠近的时候加速
            d = (e.max - dist) / e.max, context.beginPath(), context.lineWidth = d / 2, context.strokeStyle = 'rgba(' + _this4.c.color + ',' + (d + 0.2) + ')', context.moveTo(r.x, r.y), context.lineTo(e.x, e.y), context.stroke());
          }
        }
      });
      this.requestFrame(this.drawCanvas);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // 清除事件
      (0, _sizeSensor.clear)(this.el);

      // mouse 事件清除
      window.onmousemove = this.onmousemove; // 回滚方法
      window.onmouseout = this.onmouseout;

      // 删除轮询
      (0, _utils.cancelAnimationFrame)(this.tid);

      // 删除 dom
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }]);

  return CanvasNest;
}();

CanvasNest.version = '2.0.4';
exports.default = CanvasNest;
module.exports = exports['default'];