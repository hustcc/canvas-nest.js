# canvas-nest.js

> 一个基于 html5 canvas 绘制的网页背景效果。

[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://git.hust.cc/canvas-nest.js)
[![npm](https://img.shields.io/npm/v/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![npm](https://img.shields.io/npm/dm/canvas-nest.js.svg)](https://www.npmjs.com/package/canvas-nest.js)
[![gzip](http://img.badgesize.io/https://unpkg.com/canvas-nest.js/dist/canvas-nest.js?compression=gzip)](https://unpkg.com/canvas-nest.js/dist/canvas-nest.js)

![screenshot](/screenshot.png)

## 安装
```sh
# 使用 npm
npm install --save canvas-nest.js

# 或者使用 yarn
yarn add canvas-nest.js
```

## 特性

 - 不依赖 jQuery，使用原生的 javascript。
 - 非常小，只有 2 Kb。
 - 非常容易实现，配置简单，即使你不是 web 开发者，也能简单搞定。
 - 模块化 & 区域渲染。


## 使用

 - 快捷使用

将下面的代码插入到 `<body> 和 </body> 之间`.

```html
<script type="text/javascript" src="dist/canvas-nest.js"></script>
```

强烈建议在 `</body>`标签上方. 例如下面的代码结构:

```html
<html>
<head>
	...
</head>
<body>
	...
	...
	<script type="text/javascript" src="dist/canvas-nest.js"></script>
</body>
</html>
```

然后就完成了，打开网页即可看到效果!`请注意不要将代码置于 <head> </head>里面`.


 - 模块化区域绘制（定制开发）

完成安装好，可以使用模块化方式 import。

并且只有一个 API，使用如下：

```js
import CanvasNest from 'canvas-nest.js';

const config = {
  color: '255,0,0',
  count: 88,
};

// 在 element 地方使用 config 渲染效果
const cn = new CanvasNest(element, config);

// destroy
cn.destroy();
```


## 配置

 - **`color`**: 线条颜色, 默认: `'0,0,0'` ；三个数字分别为(R,G,B)，注意用,分割
 - **`pointColor`**: 交点颜色, 默认: `'0,0,0'` ；三个数字分别为(R,G,B)，注意用,分割
 - **`opacity`**: 线条透明度（0~1）, 默认: `0.5`
 - **`count`**: 线条的总数量, 默认: `150`
 - **`zIndex`**: 背景的z-index属性，css属性用于控制所在层的位置, 默认: `-1`


Example:

 - 快捷使用

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="dist/canvas-nest.js"></script>
```

 - 模块化区域绘制（定制开发）

```js
{
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99,
};
```

**注意: 所有的配置项都有默认值，如果你不知道怎么设置，可以先不设置这些配置项，就使用默认值看看效果也可以的。**


## 相关项目

 - [canvas-nest-for-wp](https://github.com/aTool-org/canvas-nest-for-wp): WP 插件，在插件市场搜索 `canvas-nest` 即可安装。
 - [vue-canvas-nest](https://github.com/ZYSzys/vue-canvas-nest): VUE 组件包装。
 - [react-canvas-nest](https://github.com/flyerH/react-canvas-nest): React 组件包装。
 - [canvas-nest-for-vscode](https://github.com/AShujiao/vscode-nest): vscode 扩展, 在vscode扩展市场中搜索`nest` 即可安装。

## 使用项目

 - [A Tool](https://atool.vip): 一个好用的工具集合.


## License

MIT@[hustcc](https://github.com/hustcc).
