# canvas-nest.js

> A nest backgroud of website draw on canvas. [中文 Readme 帮助文档](README-zh.md).

[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://git.hust.cc/canvas-nest.js)
[![npm](https://img.shields.io/npm/v/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![npm](https://img.shields.io/npm/dm/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![gzip](http://img.badgesize.io/https://unpkg.com/canvas-nest.js/dist/canvas-nest.js?compression=gzip)](https://unpkg.com/canvas-nest.js/dist/canvas-nest.js)

> **npm i --save canvas-nest.js**


## Feature

 - No need jQuery.
 - Light, only 2 Kb.
 - Easy to use, even you are not a web developer.
 - Modular & area render.


## Usage

 - Script tag

Insert the code below `between <body> and </body>`.

```html
<script src="dist/canvas-nest.js"></script>
```

Suggest before the tag `</body>`, like below:

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


 - Module usage (Area render)

> npm i --save canvas-nest.js

Or import the `umd` package use `script` tag.

There is only one API, use it like:

```js
import CanvasNest from 'canvas-nest.js';

const config = {
  color: '255,0,0',
  count: 88,
};

// render nest on element with config.
const cn = new CanvasNest(element, config);

// destroy
cn.destroy();
```


## Config

 - **`color`**: the canvas line color, default: `'0,0,0'`; the color is (R,G,B).
 - **`opacity`**: the opacity of line (0~1), default: `0.5`.
 - **`count`**: the number of lines, default: `99`.
 - **`zIndex`**: the index of z space, default: `-1`.

Example:

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="dist/canvas-nest.js"></script>
```

Or

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

 - [A Tool](https://atools.vip/): Tools for human.



## License

MIT@[hustcc](https://github.com/hustcc).
