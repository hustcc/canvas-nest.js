# canvas-nest.js

> A nest background of website draw on canvas. [中文 Readme 帮助文档](README-zh.md).

[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://git.hust.cc/canvas-nest.js)
[![npm](https://img.shields.io/npm/v/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![npm](https://img.shields.io/npm/dm/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![gzip](http://img.badgesize.io/https://unpkg.com/canvas-nest.js/dist/canvas-nest.js?compression=gzip)](https://unpkg.com/canvas-nest.js/dist/canvas-nest.js)

![screenshot](/screenshot.png)

## Feature

 - It does not depend on jQuery and original javascrpit is used.
 - Small size, only 2 Kb.
 - Easy to implement, simple configuration.
 - You do not have to be a web developer to use it.
 - Modularized with area rendering.


## Install
```sh
# use npm
npm install --save canvas-nest.js

# or use yarn
yarn add canvas-nest.js
```


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

After installation, you can import this as module.

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


## Configuration

 - **`color`**: color of lines, default: `'0,0,0'`; RGB values: (R,G,B).(note: use ',' to separate.)
 - **`pointColor`**: color of points, default: `'0,0,0'`; RGB values: (R,G,B).(note: use ',' to separate.)
 - **`opacity`**: the opacity of line (0~1), default: `0.5`.
 - **`count`**: the number of lines, default: `99`.
 - **`zIndex`**: z-index property of the background, default: `-1`.

Example:

 - Script tag

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="dist/canvas-nest.js"></script>
```

 - Modular usage (Area render)

```js
{
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99,
};
```

**Note: If the Configuration isn't customized, default values are available as well.**


## Related projects

 - [canvas-nest-for-wp](https://github.com/aTool-org/canvas-nest-for-wp): a wordpress plugin, search `canvas-nest` in wordpress store.
 - [vue-canvas-nest](https://github.com/ZYSzys/vue-canvas-nest): vue component wrapper.
 - [react-canvas-nest](https://github.com/flyerH/react-canvas-nest): react component wrapper.
 - [canvas-nest-for-vscode](https://github.com/AShujiao/vscode-nest): a vscode extensions, search `nest` in vscode extensions.

## Used by

 - [A Tool](https://atool.vip): a convenient tool box.



## License

MIT@[hustcc](https://github.com/hustcc).
