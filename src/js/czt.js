(function(){
    // 获取ul
var list = document.querySelector("ul.first");


// 取得左右按钮
var left = document.querySelector(".czt-right .prev")
var right = document.querySelector(".czt-right .next")


// next的点击事件
var slidenext = document.querySelector("a.next");
var slideprev = document.querySelector("a.prev");

slidenext.onclick = function(){
    list.style.left= "-966px";
    slidenext.style.display = "none";
    slideprev.style.display = "block";
}

slideprev.onclick = function(){
    list.style.left= "0";
    slidenext.style.display = "block";
    slideprev.style.display = "none";
}
})()
