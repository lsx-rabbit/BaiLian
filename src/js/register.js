// 用户注册
// 用户名的验证
var a = false;
var b = false;
var c = false;
var d = true;
document.querySelector(".right input[name='username']").onblur = function(){
    //取得用户输入的value
    var username = this.value;
    //用户名的正则
    var regusername = /[0-9A-Za-z]{6,20}/;
    if(regusername.test(username)){
        document.querySelector(".user-validation").classList.remove("ng");
        document.querySelector(".user-validation").classList.add("ok");
        a = true;
    }else{
        document.querySelector(".user-validation").classList.add("ng");
        a= false;
    }
}

// 密码的验证
var obj = {};
document.querySelector(".right input[name='password']").onblur = function(){
    //取得用户输入的value
    var password = this.value;
    // 密码的验证
    var regpassword = /[0-9A-Za-z]{8,20}/;
    if(regpassword.test(password)){
        document.querySelector(".pw-validation").classList.remove("ng");
        document.querySelector(".pw-validation").classList.add("ok");
        b= true;
    }else{
        document.querySelector(".pw-validation").classList.add("ng");
        b=false;
    }
    obj.pw = this.value;

}

// 确认密码的验证
document.querySelector(".right input[name='confirm-password']").onblur = function(){
    //取得用户输入的value
    var confirmpassword = this.value;
    var passwordvalue = obj.pw;
    console.log(confirmpassword,passwordvalue)
    // 密码的验证
    if(confirmpassword === passwordvalue){
        document.querySelector(".confirm-validation").classList.remove("ng");
        document.querySelector(".confirm-validation").classList.add("ok");
        c= true;
    }else{
        document.querySelector(".confirm-validation").classList.add("ng");
        c=false;
    }

}

// 判断我已阅读的check 状态
// 取到input的checked状态

var agreebtn = $(".agree input[type='checkbox']");
agreebtn.on("change",function(){
    if($(".agree input[type='checkbox']").is(':checked')){
        d = true;
    }else{
        d= false;
        alert("请接收百联用户协议后才能注册，谢谢♪(･ω･)ﾉ");
    }
})

console.log(a,b,c,d)
// 获取提交按钮
$('.regis').on('click',function(){
    if(a && b && c && d){

        //发送ajax请求
        $.ajax({
            method:"post",
            url:"../../api/register.php",
            data:{
                username : $("#user").val(),
                password : $("#pw").val()
            },
            success: function(resp){     
                $("div.success")[0].style.display="block";
            },
            error:function(){
                
            }
        })
    }else{
        return;
    }
})

$("div.success").on("click",function(){
    location.href="../html/login.html";
})

