(function(){
    var currentIndex = 0;
var bgColor = ["rgb(255,238,155)","rgb(240,187,197)","rgb(238,200,200)","rgb(97,158,128)","rgb(17,88,104)","rgb(85,8,165)","rgb(58,174,214)"]

var lis = document.querySelectorAll("#banner .imglist li")
var dots = document.querySelectorAll("#banner .w .dots li");

function slideto(index){
  
    if(index === 7){
        currentIndex = index = 0;
    }
    
    //遍历bgColor
    for(var i = 0; i < bgColor.length; i++){
        if(i === index){
            lis[index].style.backgroundColor = bgColor[i];
        }
    }

    document.querySelector("li.current").className = "";
    lis[index].className = "current";
    
    document.querySelector("li.focus").className = "";
    dots[index].className = "focus";
}

//向后
function slideNext(){
    currentIndex++;
    slideto(currentIndex);
}


//自动
var id;
function autoplay(){
    id = setInterval(function(){
        slideNext();
    },4000)
}
autoplay();

function stop(){
    clearInterval(id);
}

//获取banner
document.querySelector(".imglist").onmouseover = function(){
    stop();
}

document.querySelector(".imglist").onmouseout = function(){
    autoplay();
}

//dots的鼠标移上事件
    for(let i = 0; i < dots.length ;i++){
        dots[i].onmouseover = function(){
            slideto(i);
        }
    }



})()

