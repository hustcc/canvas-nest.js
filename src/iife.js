/**
 * Created by hustcc on 18/6/23.
 * Contract: i@hust.cc
 */

import CanvasNest from './CanvasNest';

const getScriptConfig = () => {
  const scripts = document.getElementsByTagName('script');
  const len = scripts.length;
  const script = scripts[len - 1]; // 当前加载的script
  return {
    zIndex: script.getAttribute('zIndex'),
    opacity: script.getAttribute('opacity'),
    color: script.getAttribute('color'),
    pointColor: script.getAttribute('pointColor'),
    count: Number(script.getAttribute('count')) || 99,
  };
};

new CanvasNest(document.body, getScriptConfig());
