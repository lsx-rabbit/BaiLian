(function(){
    //监听鼠标的滚动事件
    //取得吸顶div
    var topdiv = document.querySelector("#fileheader")
    var scrolltop = document.documentElement.scrollTop ?
        document.documentElement.scrollTop:
        document.body.scrollTop;

        if (scrolltop > 500){
            topdiv.style.top = 0;
        }else{
            topdiv.style.top = "-80px";
        }
 
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop ?
        document.documentElement.scrollTop:
        document.body.scrollTop;

        if (scrolltop > 400){
            topdiv.style.top = 0;
        }else{
            topdiv.style.top = "-80px";
        }
    }

    

})()