(function(){
    var person = document.querySelector("div.person")
    // var shopcar = document.querySelector("div.shopcar")
    var collect = document.querySelector("div.collect")
    var history = document.querySelector("div.history")
    var rslide = document.querySelector("#rslide");
    var rslidecon= document.querySelector(".rslide-con")
    person.onclick = function(){
        if(rslide.className.indexOf('off') !== -1) {
            rslide.className = 'switch-on';
            rslidecon.innerHTML = "欢迎来到百联";
        } else {
            rslide.className = 'switch-off'
        }

    }

    // shopcar.onclick = function(){
    //     if(rslide.className.indexOf('off') !== -1) {
    //         rslide.className = 'switch-on'
    //     } else {
    //         rslide.className = 'switch-off'
    //     }

    // }

    collect.onclick = function(){
        if(rslide.className.indexOf('off') !== -1) {
            rslide.className = 'switch-on'
        } else {
            rslide.className = 'switch-off'
        }

    }

    history.onclick = function(){
        if(rslide.className.indexOf('off') !== -1) {
            rslide.className = 'switch-on'
        } else {
            rslide.className = 'switch-off'
        }

    }


})()