var wrap = document.querySelector('.one-content');
var lop = document.querySelector('#lop');
var tatd = document.querySelector('.sub').querySelectorAll('li');
var leftlog = document.querySelector('#leftlog');
var rightlog = document.querySelector('#rightlog');
var oneWidth = lop.querySelectorAll('li')[0].offsetWidth;
var cnt = 0;
var timer = null;
console.log(wrap)
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
    }, 3000);
}
wrap.onmouseover = function() {
    clearInterval(timer)
    timer = null;
}
wrap.onmouseout = function() {
    autoPlay();
}
autoPlay();
var home = document.getElementById('home');
home.addEventListener('click', function() {
    location.replace('home.html');
});