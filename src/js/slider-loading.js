(function(){

    var currentIndex = 0;
    var leftload = document.querySelector(".show-dots .next .firstone");
    var rightload = document.querySelector(".show-dots .prev .secondone");
    function slideTo(index) {
        var liW = document.querySelector('.show-slide li').offsetWidth
        let list = document.querySelector('.show-slide')

        if (index === 3) {

            //  1. 去掉ul的过渡
            list.style.transitionDuration = '0s';
            //  2. 设定left值为0
            list.style.left = 0;
            currentIndex = 1;
            setTimeout(() => {
                //  3. 加上过渡
                list.style.transitionDuration = ''  //删除了行内的过渡，使用选择器内的过渡
                //  4. 过渡到真1
                list.style.left = -liW + 'px'
            }, 50)
            

            return;
        }

        var left = -index * liW
        document.querySelector('.show-slide').style.left = left + 'px'
    }

    function slideNext() {
        currentIndex++;
        slideTo(currentIndex)
    }


    // document.querySelector('.show-dots .next .firstone').onclick = function () {
    //     slideNext();
    // }

    var id;
    function first(){
        var leftwidth = leftload.offsetWidth;
        id = setInterval(function(){
            leftwidth++;
            leftload.style.width = leftwidth + "px";
            leftload.style.backgroundColor = "hotpink";
            if(leftwidth == 30){
                clearInterval(id);
                leftload.style.width = 0;
                leftload.style.backgroundColor = "";
                slideNext();
                second();
            }
        },200)
        
    }
    first();

    
    var id1;
    function second(){
        var rightwidth = rightload.offsetWidth;
        id1 = setInterval(function(){
            rightwidth++;
            rightload.style.width = rightwidth + "px";
            rightload.style.backgroundColor = "hotpink";
            if(rightwidth == 30){
                clearInterval(id1);
                rightload.style.width = 0;
                rightload.style.backgroundColor = "";
                slideNext();
                first();
            }
        },200)
 
    }
  


  
    document.querySelector('.show-slide').onmouseover = function(){
        clearInterval(id1);
        clearInterval(id);
        if(currentIndex % 2 == 0){
            leftload.style.width = 30 + "px";
            leftload.style.backgroundColor = "hotpink";
        }else{
            rightload.style.width = 30 + "px";
            rightload.style.backgroundColor = "hotpink";
        }
       
    }
    document.querySelector('.show-slide').onmouseout = function(){
            leftload.style.width = 0;
            leftload.style.backgroundColor = "";
            rightload.style.width = 0;
            rightload.style.backgroundColor = "";
            if(currentIndex % 2  == 0){
                first();
            }else{
                second();
            }
    }


})()