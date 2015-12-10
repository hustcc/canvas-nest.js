# canvas-nest.js
A nest backgroud of website draw on canvas. [中文Readme帮助文档](https://github.com/hustcc/canvas-nest.js/blob/master/README-zh.md)

## feature

 - do not depend on jQuery or other javascript framework.
 - very light, only 1.75kb. can be smaller after gzip.
 - so easy to use, even you are not a web developer.

## usage

so eazy that I do not want write the chapter.

insert the code below `between <body> and </body>`.

	<script type="text/javascript" src="//github.atool.org/canvas-nest.min.js"></script>

suggest before the tag `</body>`. like below:
	
	<html>
	<head>
		...
	</head>
	<body>
		...
		...
		...
    	<script type="text/javascript" src="//github.atool.org/canvas-nest.min.js"></script>
	</body
	</html>


`please do not add the code in the <head> </head>`.

then ok!

## config

 - `color`: the canvas line color, default: `'0,0,0'` ; the color is (R,G,B)
 - `opacity`: the opacity of line, default: `0.5`
 - `zIndex`: the index of z space, default: `-1`

Example:

	<script type="text/javascript" color="0,0,255" opacity='0.7' zIndex="-2" src="//github.atool.org/canvas-nest.min.js"></script>

set the config on the script node `as a attribute`. all the config has the default value, you can choose to set any of them.

## preview 

1. [OnlineTool: http://www.atool.org/](http://www.atool.org/)

if you has used this project, pls let me know, I can add your website on.

![screenshot](https://raw.githubusercontent.com/hustcc/canvas-nest.js/master/screenshot.png)

## other

project lib cdn url: [http://github.atool.org/canvas-nest.min.js](http://github.atool.org/canvas-nest.min.js), if you has your own cdn, download `canvas-nest.min.js` and use your own url.

any bug or question, welcome to push request and issue.
