! function() {
    //封装方法，压缩之后减少文件大小
    function get_attribute(node, attr, default_value) {
        return node.getAttribute(attr) || default_value;
    }
    //封装方法，压缩之后减少文件大小
    function get_by_tagname(name) {
        return document.getElementsByTagName(name);
    }
    //获取配置参数
    function get_config_option() {
        var scripts = get_by_tagname("script"),
            script_len = scripts.length,
            script = scripts[script_len - 1]; //当前加载的script
        return {
            l: script_len, //长度，用于生成id用
            z: get_attribute(script, "zIndex", -1), //z-index
            o: get_attribute(script, "opacity", 0.7), //opacity
            c: get_attribute(script, "color", "0,0,255"), //color
            n: get_attribute(script, "count", 99) //count
        };
    }
    //设置canvas的高宽
    function set_canvas_size() {
        canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    //绘制过程
    function draw_canvas(max_2, min_2) {
        context.clearRect(0, 0, canvas_width, canvas_height);
        //随机的线条和当前位置合并为新数组，当前位置为第一元素
        var random_lines_ = random_lines.concat();
        var i, d, x_dist, y_dist, dist, a, red, blue, max_2 =40000, min_2 = 6400,style;
        //遍历处理每一个点
        random_lines.forEach(function(p1) {
            a = 0;
            // blue=255;
            // red=0;
            style="rgba(0,63,255,1)";//默认蓝色
            //移动
            p1.x += p1.vx;
            p1.y += p1.vy;
            //碰到边界，速度反
            p1.vx *= p1.x > canvas_width || p1.x < 0 ? -1 : 1;
            p1.vy *= p1.y > canvas_height || p1.y < 0 ? -1 : 1;
            //判断与鼠标位置距离
            current_point.x && (x_dist = p1.x - current_point.x, y_dist = p1.y - current_point.y, dist = x_dist * x_dist + y_dist * y_dist, //总距离的平方
                dist < max_2 && (
                    dist >= min_2 && (a = (dist - min_2) / (max_2 - min_2), p1.x -= 0.03 * a * x_dist, p1.y -= 0.03 * a * y_dist),
                    style="rgba(255,63,0,1)",//设为红色
                    context.beginPath(),
                    context.lineWidth = 0.3*(1-a),
                    context.strokeStyle = style,
                    context.moveTo(p1.x, p1.y),
                    context.lineTo(current_point.x, current_point.y),
                    context.stroke()
                    ));
            //绘制一个宽高为1的点
            context.fillStyle = style;
            context.fillRect(p1.x - 0.5, p1.y - 0.5, 1, 1);
            // 判断到其他各点的距离
            for (i = 0; i < random_lines_.length; i++) {
                p2 = random_lines_[i];
                p1 !== p2 && (x_dist = p1.x - p2.x, y_dist = p1.y - p2.y, dist = x_dist * x_dist + y_dist * y_dist,//总距离的平方
                    dist < max_2/4 && (a = (dist - min_2/4) / (max_2/4 - min_2/4),
                        context.beginPath(),
                        context.lineWidth = 0.5*(1 - a),
                        context.strokeStyle = style,
                        context.moveTo(p1.x, p1.y),
                        context.lineTo(p2.x+p2.vx, p2.y+p2.vy),
                        context.stroke()));
            }
            random_lines_.splice(random_lines_.indexOf(p1), 1);//已处理的点出数组
        });
        frame_func(draw_canvas);
    }
    //创建画布，并添加到body中
    var the_canvas = document.createElement("canvas"), //画布
        config = get_config_option(), //配置
        canvas_id = "c_n" + config.l, //canvas id
        context = the_canvas.getContext("2d"), canvas_width, canvas_height,
        frame_func = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(func) {
            window.setTimeout(func, 1000 / 45);
        }, random = Math.random,
        current_point = {
            x: null, //当前鼠标x
            y: null, //当前鼠标y
        };
    the_canvas.id = canvas_id;
    the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
    get_by_tagname("body")[0].appendChild(the_canvas);
    //初始化画布大小

    set_canvas_size(), window.onresize = set_canvas_size;
    //当时鼠标位置存储，离开的时候，释放当前位置信息
    window.onmousemove = function(e) {
        e = e || window.event, current_point.x = e.clientX, current_point.y = e.clientY;
    }, window.onmouseout = function() {
        current_point.x = null, current_point.y = null;
    };
    //随机生成config.n条线位置信息
    for (var random_lines = [], i = 0; config.n > i; i++) {
        var x = random() * canvas_width, //随机位置
            y = random() * canvas_height,
            vx = 2 * random() - 1, //随机运动方向
            vy = 2 * random() - 1;
        random_lines.push({
            x: x,
            y: y,
            vx: vx,
            vy: vy,
        });
    }
    //0.1秒后绘制
    setTimeout(function() {
        draw_canvas();
    }, 100);
} ();