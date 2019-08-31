$(document).ready(function(){  
    // 初始化内容
    var a = getCookie("userid");
    if (a != null && a != '' && a != undefined) {
        $("ul.right a.login span").html("Hi ,"+ a);
    }
});