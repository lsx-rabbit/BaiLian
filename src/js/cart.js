
//把整个功能添加到一个函数里面 === 因为当我发送ajax请求的时候，append 到innerhtml里面了，重新画dom树了
//所以 当前写好的事件，不立即生效了，所以在发送ajax得到数据之后，再重新执行一遍这个函数

// 实现全选按钮功能
function util(){

// 1、购物车标题的全选按钮 点击事件
$(".cart-head input.all").on("click", function () {
    //它的状态就是下面所有商品的状态
    //取得商品的按钮
    $(".cart-body input.product").prop("checked", $(".cart-head input.all").prop("checked"))
    $(".pay-list .pay-all").prop("checked", $(".cart-head input.all").prop("checked"))
    $(".cart-body input.shop").prop("checked", $(".cart-head input.all").prop("checked"))
    
    if($(".cart-head input.all").prop("checked")){
        // 都选中的话 已选择的数量 等于所有商品的数量
        $(".pay-list span.nums").html($("input.product").length)
    }else{
        $(".pay-list span.nums").html(0)
    }
    allsum();
})

// 2、总计的全选按钮 点击事件
$(".pay-list .pay-all").on("click", function () {
    //它的状态就是下面所有商品的状态
    //取得商品的按钮
    $(".cart-head input.all").prop("checked", $(".pay-list .pay-all").prop("checked"))
    $(".cart-body input.product").prop("checked", $(".pay-list .pay-all").prop("checked"))
    $(".cart-body input.shop").prop("checked", $(".pay-list .pay-all").prop("checked"))

    // 已选择的数量
    if($(".pay-list .pay-all").prop("checked")){
        // 都选中的话 已选择的数量 等于所有商品的数量
        $(".pay-list span.nums").html($("input.product").length)
    }else{
        $(".pay-list span.nums").html(0)
    }
    allsum();
})
// 3. 商品的按钮功能
// shop 选中 下面的商品也选中
$("input.shop").on("click", function () {
    // $(".cart-body input.product").prop("checked",$("input.shop").prop("checked"))
    $(this).parent().parent().next().find("input.product").prop("checked", $(this).prop("checked"));

    //shop都选中的话，全选按钮也要选中

        $(".cart-head input.all").prop("checked",$("input.shop:checked").length === $("input.shop").length);
        $(".pay-list .pay-all").prop("checked",$("input.shop:checked").length === $("input.shop").length);

        // 已选择的数量
    $(".pay-list span.nums").html($("input.shop:checked").length)
    allsum();
})

// 4.product 没选中的话，上面的shop也不选中
$("input.product").on("click", function () {
    
    $(this).parent().parent().prev().find("input.shop").prop("checked",$(this).prop("checked"));
    $(".cart-head input.all").prop("checked",$("input.product:checked").length === $("input.product").length);
    $(".pay-list .pay-all").prop("checked",$("input.product:checked").length === $("input.product").length);
    
    // 已选择的数量
    $(".pay-list span.nums").html($("input.product:checked").length)
    allsum();
})


//数量的增加或减少 
// 事件代理
// 1.增加
$(".cart-table").on("click",".add",function(){
    // 当前个数
    var count = $(this).prevAll("span.count").html();
    count++;
    $(this).prevAll("span.count").html(count);

    // 调用小计函数
    sum($(this).parents(".cart-body-con"));
    allsum();
})
// 2.减少
$(".cart-table").on("click",".minus",function(){
    // 当前个数
    var count = $(this).nextAll("span.count").html();
    if(count === '1'){
        count = '1';
        return;
    }
    count--;
    console.log(count)
    $(this).nextAll("span.count").html(count);
    sum($(this).parents(".cart-body-con"));
    allsum();
 
})

// 实现金额 小计
function sum($div){
    // 取得单价
    var price = parseFloat($div.find(".price-detail").html().slice(1))
    // 取得数量
    var count = parseInt($div.find(".count").html())
    var all = (price*count).toFixed(2)
    $div.find(".price-box").html("¥"+all)
}

// 总计的金额
// 取到总计
    function allsum(){
        var sum = 0;
        var pricebox = document.querySelectorAll(".price-box")
        for(var i = 0 ;i < pricebox.length ;i ++){
            console.log($(pricebox[i]).parent().prev().find("input.shop"))
            if($(pricebox[i]).parent().find("input.product").prop("checked") ||$(pricebox[i]).parent().prev().find("input.shop").prop("checked")){
                sum += parseFloat($(pricebox[i]).html().slice(1));
               
                console.log(sum)
            }
            
        }
        $("span.total").html(`￥${sum}`)
        // document.querySelector("span.total").innerHTML = "￥"+sum;
        
    }
     //allsum();

    $('a.register').click(function () {
        removeCookie('userid', '/')
        location.href = '../html/login.html';
    })

}


    // 发送ajax请求
$.get('../../api/cart.php',function(resp){
    console.log("购物车返回值:");
    console.log(resp);
    var trs = resp.map(function (product) {
        console.log(product)
        return `
         <div class="cart-body">
                <div class="cart-body-name">
                    <label><input type="checkbox" class="shop"><i></i><span>${product.shop}</span></label>
                    <div class="r free"><a href="#">免运费凑单</a></div>
                    <div class="r fee">运费:¥5</div>
                </div>
                <div class="cart-body-con">
                    <label class="l"><input type="checkbox" class="product"></label>
                    <div class="l item-box">
                        <a href="#" class="l"><img src="${product.img}"></a>
                        <div class="l item-name"><a href="#">${product.name}</a></div>
                    </div>
                    <div class="l type-box"></div>
                    <div class="l item-price-box">
                        <div class="price-detail">￥${product.price}</div>
                    </div>
                    <div class="l number-box">
                        <button type="submit" class="l minus">-</button>
                        <span class="count l">${product.count}</span>
                        <button type="submit" class="l add">+</button>
                    </div>
                    <div class="l price-box">￥${product.price*product.count}</div>
                    <div class="r action-box">
                        <a href="#">移入收藏夹</a>
                        <a href="javascript:void(0);" class="remove">删除</a>
                    </div>
                </div>
            </div>
    `})
    
    document.querySelector(".cart-body-wrap").innerHTML += trs.join('');
    
    util();
   
})

    