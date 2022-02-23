var submit = document.getElementById('submit');
var uname = document.getElementById('name');
var pwd = document.getElementById('pwd');
submit.addEventListener('click', function() {

    if (uname.value == "" || pwd.value == "") {
        confirm("您未输入用户名或者密码！");
    } else {
        alert("请稍后...");
        var i = 0;
        var time = setInterval(() => {
            if (i == 3) {
                clearInterval(time);
                alert("登录成功！");
                location.replace("complect.html");
            }
            i++;
        }, 1000);
    }
});