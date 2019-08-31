

// 产品页面的 按钮的点击事件
$("button.addto").on("click",function(){
    // 取得数据
    var index = $("span.number").html();
    index++;
    $("span.number").html(index);
})

$("button.min").on("click",function(){
    // 取得数据
    var index = $("span.number").html();
    if(index === '1'){
        return;
    }
    index--;
    $("span.number").html(index);
})


// 加入购物车的点击事件
$("button.add-cart").on("click",function(){
    // 取得查看购物车的内容
    // 取得count的内容
    $("em.no").html($("span.number").html())   
    $.ajax({
        method:"post",
        url:"../../api/addproduct.php",
        data:{
            // f发送 产品名称 产品价格，产品id，购买数量，商铺,下面的缩略图
            productid: "105",
            name : $(".product-name h1 span").html(),
            shop : $(".product-name h1 i").html(),
            count : $("span.number").html(),
            price : $(".product-price span.two").html().slice(1),
            image: $("div.items img.first").attr('src')
        },
        success:function(resp){
            
            if(resp.result){
                // 插入成功
                $(".shopcar").on("click",function(){
                    

                })
            }
        },
        error:function(){
            // 请求失败了
        }
    })

})

// // // 当查看购物车 发生点击事件的时候
// $(".shopcar").on("click",function(){
//     // 发送ajax请求购物车页面
//   location.href="../html/cart.html";
//     $.ajax({
//         method:"post",
//         url:"../../api/cart.php",
//         data:{

//         },
//         success:function(){

//         },
//         error:function(){

//         }
//     })
// })