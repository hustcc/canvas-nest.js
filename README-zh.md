# canvas-nest.js

> 一个基于 html5 canvas 绘制的网页背景效果，非常赞！如果需要 `wordpress插件`，在插件库搜索 `canvas-nest` 或者看看项目 [canvas-nest-for-wp](https://github.com/aTool-org/canvas-nest-for-wp)。

[![npm](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://git.hust.cc/canvas-nest.js)
![npm](https://img.shields.io/npm/v/canvas-nest.js.svg)
![npm](https://img.shields.io/npm/dm/canvas-nest.js.svg)

> npm i --save canvas-nest.js


## 特性

 - 不依赖 jQuery，使用原生的 javascript。
 - 非常小，只有 2 Kb。
 - 非常容易实现，配置简单，即使你不是 web 开发者，也能简单搞定。
 - 模块化 & 区域徐然。


## 使用

 - 快捷使用

将下面的代码插入到 `<body> 和 </body> 之间`.

```html
<script type="text/javascript" src="//cdn.bootcss.com/canvas-nest.js/x.x.x/canvas-nest.js"></script>
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
	<script type="text/javascript" src="//cdn.bootcss.com/canvas-nest.js/x.x.x/canvas-nest.js"></script>
</body>
</html>
```

然后就完成了，打开网页即可看到效果!`请注意不要将代码置于 <head> </head>里面`.


 - 模块化区域绘制（定制开发）

> npm i --save canvas-nest.js

然后可以使用 script 方式引入 umd 包，当然也可使用模块化方式 import。并且只有一个 API，使用如下：

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


## 配置和配置项

 - **`color`**: 线条颜色, 默认: `'0,0,0'` ；三个数字分别为(R,G,B)，注意用,分割
 - **`opacity`**: 线条透明度（0~1）, 默认: `0.5`
 - **`count`**: 线条的总数量, 默认: `150`
 - **`zIndex`**: 背景的z-index属性，css属性用于控制所在层的位置, 默认: `-1`


Example:

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="//cdn.bootcss.com/canvas-nest.js/x.x.x/canvas-nest.js"></script>
```

这些属性配置在引用js的script标签中，作为它的一个属性值。所有的配置项都有默认值，如果你不知道怎么设置，可以先不设置这些配置项，就使用默认值看看效果也可以的。

或者模块化调用的时候，写成：

```js
{
  color: '0,0,255',
  opacity: 0.7,
  zIndex: -2,
  count: 99,
};
```


## 示例

1. [在线工具: https://atool.vip/](https://atool.vip/)

如果你使用的了本项目，也可以修改此处文件，并 pr，我会接受的。

![screenshot](https://raw.githubusercontent.com/hustcc/canvas-nest.js/master/screenshot.png)


## 其他

本项目的 Javascript 文件已经存储在 CDN 上，可以直接使用，地址为： [http://www.bootcdn.cn/canvas-nest.js/](http://www.bootcdn.cn/canvas-nest.js/)，如果你不需要 CDN 或者有自己的 CDN，可以直接下载源码 dist 目录中的 `canvas-nest.js`，然后相应的修改使用地址即可。


## License

MIT@[hustcc](https://github.com/hustcc).
