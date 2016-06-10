# canvas-nest.js
A nest backgroud of website draw on canvas. [中文Readme帮助文档](https://github.com/hustcc/canvas-nest.js/blob/master/README-zh.md). For `wordpress plugin`, search `canvas-nest` or see [canvas-nest-for-wp](https://github.com/aTool-org/canvas-nest-for-wp).

![travis-ci](https://travis-ci.org/hustcc/canvas-nest.js.svg?branch=master)

## feature

 - do not depend on jQuery or other javascript framework.
 - very light, only 1.66kb. can be smaller after gzip.
 - so easy to use, even you are not a web developer.

## usage

so eazy that I do not want write the chapter.

insert the code below `between <body> and </body>`.

```html
<script src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js"></script>
```

suggest before the tag `</body>`. like below:

```html
<html>
<head>
	...
</head>
<body>
	...
	...
	...
	<script src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js"></script>
</body>
</html>
```


`please do not add the code in the <head> </head>`.

then ok!

## config

 - **`color`**: the canvas line color, default: `'0,0,0'` ; the color is (R,G,B)
 - **`opacity`**: the opacity of line (0~1), default: `0.5`
 - **`count`**: the number of lines, default: `150`
 - **`zIndex`**: the index of z space, default: `-1`

Example:

```html
<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" count="99" src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js"></script>
```

set the config on the script node `as a attribute`. all the config has the default value, you can choose to set any of them.

## preview

1. [OnlineTool: http://www.atool.org/](http://www.atool.org/)

if you has used this project, pls let me know, I can add your website on.

![screenshot](https://raw.githubusercontent.com/hustcc/canvas-nest.js/master/screenshot.png)

## other

project lib cdn url: [http://www.bootcdn.cn/canvas-nest.js/](http://www.bootcdn.cn/canvas-nest.js/).

any bug or question, welcome to push request and issue.
