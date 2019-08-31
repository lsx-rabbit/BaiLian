(function(){
    //获取到回到顶部div
    var backTop = document.querySelector("div.back-top");
    var goTop = document.querySelector("div.go-top");
    //监听鼠标滚轮事件
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop?
                    document.documentElement.scrollTop:
                    document.body.scrollTop;
        if(scrollTop > 800){
            backTop.style.display = "block";
        }else{
            backTop.style.display = "none";

        }
        
    }
    //鼠标移上改变背景图
    backTop.onmouseenter = function(){
        backTop.style.backgroundPositionY = "-50px";
       
    }

    backTop.onmouseleave = function(){
        backTop.style.backgroundPositionY = 0;
    }

    //点击事件

    backTop.onclick = function(){
        //取得当前的scrollTOP
        var id = setInterval(function(){
            var current = document.documentElement.scrollTop ?
                    document.documentElement.scrollTop:
                    document.body.scrollTop;
                    
            document.documentElement.scrollTop = current -100;
            document.body.scrollTop = current -100;
            if(current === 0){
                clearInterval(id);
            }
        },16)
 
    }


    goTop.onclick = function(){
        //取得当前的scrollTOP
        var id = setInterval(function(){
            var current = document.documentElement.scrollTop ?
                    document.documentElement.scrollTop:
                    document.body.scrollTop;
                    
            document.documentElement.scrollTop = current -100;
            document.body.scrollTop = current -100;
            if(current === 0){
                clearInterval(id);
            }
        },16)
 
    }

})()