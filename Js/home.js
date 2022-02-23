/*实现轮播图*/
var activeMap = document.querySelector('#active-map');
var lop = document.querySelector('#lop');
var tatd = document.querySelector('.sub').querySelectorAll('li');
var leftlog = document.querySelector('#leftlog');
var rightlog = document.querySelector('#rightlog');
var oneWidth = lop.querySelectorAll('li')[0].offsetWidth;
var cnt = 0;
var timer = null;
console.log(activeMap)
for (var i = 0; i < tatd.length; i++) {
    tatd[i].onclick = function() {
        for (var j = 0; j < tatd.length; j++) {
            tatd[j].className = '';
        }
        this.className = 'current';
        cnt = this.getAttribute("number");
        lop.style.left = -oneWidth * cnt + 'px';
    }
}
leftlog.onclick = function() {
    for (var j = 0; j < tatd.length; j++) {
        tatd[j].className = '';
    }
    cnt = cnt <= 0 ? 3 : --cnt;
    tatd[cnt].className = 'current';
    lop.style.left = -oneWidth * cnt + 'px';
}
rightlog.onclick = function() {
    for (var j = 0; j < tatd.length; j++) {
        tatd[j].className = '';
    }
    cnt = cnt >= 3 ? 0 : ++cnt;
    tatd[cnt].className = 'current';
    lop.style.left = -oneWidth * cnt + 'px';
}

function autoPlay() {
    timer = setInterval(function() {
        for (var m = 0; m < tatd.length; m++) {
            tatd[m].className = '';
        }
        cnt = cnt >= 3 ? 0 : ++cnt;
        tatd[cnt].className = 'current';
        lop.style.left = -oneWidth * cnt + 'px';
    }, 5000);
}
activeMap.onmouseover = function() {
    clearInterval(timer)
    timer = null;
}
activeMap.onmouseout = function() {
    autoPlay()
}
autoPlay();

/*获取时间*/
var t = null;
t = setTimeout(time, 1000); //运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    var w = dt.W;
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.querySelector(".showTime").innerHTML =
        "<h2>" +
        h +
        " : " +
        m +
        " : " +
        s + "</h2>" +
        y +
        "/" +
        mt +
        "/" +
        day;
    t = setTimeout(time, 1000); //设定定时器，循环运行
}

/*背景音乐*/
function play() {
    var music = document.getElementById("music");
    //判断如果音乐停止播放中，就让他播放。。。
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
/*切换图 */
$(function() {
    $(".menu-item").click(function() {
        $(this).addClass("active").siblings("li").removeClass("active");
        var index = $(".menu-item").index(this);
        $(".content-item").eq(index).addClass("active").siblings("li").removeClass("active");
    });
    //退出开关
    $('.quit-logo').click(function() {
        if (confirm('您是否确定要退出？')) {
            location.replace('login.html')
        }
    });
});