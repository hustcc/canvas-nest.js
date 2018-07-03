# canvas-nest.js

> This background effect for web pages is drawn using tools based on html5 canvas. The final result is pretty awesome! [中文 Readme 帮助文档](README-zh.md).

[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://git.hust.cc/canvas-nest.js)
[![npm](https://img.shields.io/npm/v/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![npm](https://img.shields.io/npm/dm/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![gzip](http://img.badgesize.io/https://unpkg.com/canvas-nest.js/dist/canvas-nest.js?compression=gzip)](https://unpkg.com/canvas-nest.js/dist/canvas-nest.js)

> **npm i --save canvas-nest.js**


## Feature

 - It does not depend on jQuery and original javascrpit is used.
 - Small size, only 2 Kb.
 - Easy to implement, simple configuration.
 - You do not have to be a web developer to use it.
 - Modularized with area rendering.


## Usage

 - Script tag

Insert the code below `between <body> and </body>`.

```html
<script src="dist/canvas-nest.js"></script>
```

Strongly suggest to insert before the tag `</body>`, as the following:

```html
<html>
<head>
	...
</head>
<body>
	...
	...
	<script src="dist/canvas-nest.js"></script>
</body>
</html>
```

Then ok! `Please do not add the code in the <head> </head>`.


 - Modular usage (Area render)

> npm i --save canvas-nest.js

You could import `umd` packages with `script` tag or with modules.

There is only one API, use it as below:

```js
import CanvasNest from 'canvas-nest.js';

const config = {
  color: '255,0,0',
  count: 88,
};

// Using config rendering effect at 'element'.
const cn = new CanvasNest(element, config);

// destroy
cn.destroy();
```


## Configurations and settings

 - **`color`**: color of lines, default: `'0,0,0'`; RGB values: (R,G,B).(note: use ',' to separate.)
 - **`opacity`**: the opacity of line (0~1), default: `0.5`.
 - **`count`**: the number of lines, default: `99`.
 - **`zIndex`**: z-index property of the background, default: `-1`.

Example:

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="dist/canvas-nest.js"></script>
```

These property configuration settings are in the js script tag as its property values. If these settings are not customized, default values are available as well.

With modules，use config values as below：

```js
{
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99,
};
```


## Related projects

 - [canvas-nest-for-wp](https://github.com/aTool-org/canvas-nest-for-wp): a wordpress plugin, search `canvas-nest` in wordpress store.
 - [vue-canvas-nest](https://github.com/ZYSzys/vue-canvas-nest): vue component wrapper.


## Used by

 - [A Tool](https://atools.vip/): a convenient tool box.



## License

MIT@[hustcc](https://github.com/hustcc).
