// 用户名验证
$('#user').on('blur',function(){
    //获取value 
    if(/[0-9A-Za-z]{6,20}/.test($(this).val())){
        //为true 证明可以
        $('div.conf-user').addClass('hidden');
    }else{
        $('div.conf-user').removeClass('hidden');
    }
})

// 密码验证
$("#pw").on("blur",function(){
    if(/[0-9A-Za-z]{8,20}/.test($(this).val())){
        //为true 证明可以
        $('div.conf-pw').addClass('hidden');
    }else{
        $('div.conf-pw').removeClass('hidden');
    }
})


// 登录按钮的提交事件
$(".login-sub").on("click",function(){

    // 如果用户名 密码不为空，并且都 有hidden的类才能发送请求
    if($("#user").val() === null || $("#pw").val()===null){
        return;
    }
    if(!$(".conf-user").hasClass("hidden") || !$(".conf-pw").hasClass("hidden")){
        return;
    }
    //发送ajax

    $.ajax({
        method :"post",
        url:"../../api/login.php",
        data:{
            username : $("#user").val(),
            password : $("#pw").val()
        },
        success:function(resp){
            if(resp.result){
                //为true 跳转到首页
                $("div.login-success")[0].style.display="block";

                var id = setInterval(function(){
                    var index = $("div.login-success .go3 span").html()
                    if(index === '1'){
                        // 跳转
                        clearInterval(id);
                        location.href= "../index.html";
                        return;
                    }
                    index--;
                    $("div.login-success .go3 span").html(index);
                },1000)


            }else{
                $('.nomatch').removeClass('hidden');
            }
        },
        error:function(){
            //请求错误
        }
    })

})


