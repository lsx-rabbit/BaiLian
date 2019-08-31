<?php
header("content-type:text/json");

//取出cookie
if(!empty($_COOKIE["userid"])){
    $userid = $_COOKIE["userid"];
}else{
    echo '[]';
}

// 连接数据库
$servername = "localhost";
$mysql_name = "root";
$mysql_password = "";
$db_name="bailian";

$conn = new mysqli($servername,$mysql_name,$mysql_password,$db_name);

if($conn->connect_error){
    echo "连接失败";
    return;
}
$conn->query("set names utf8");

// // 更新userid 的值了
// $sql="update `users` set `userid` = $userid
// where `users`.`id` = $userid
// ";

// 先查询购物车里面是否

// $result = $conn->query($sql);
// sql语句
// $sql ="
//     select `name`,`price`, `img`, `count`,`shop`
//     from `product` p
//     left join `users` u on u.userid = `cart`.`userid`
//     left join `cart` c on p.productid = c.productid

//     where `cart`.`userid` = $userid
// ";

$sql ="
        SELECT
            p.name,
            p.price,
            p.img,
            c.count,
            p.shop
        FROM
            `cart` c
        LEFT JOIN
            `product` p ON p.productid = c.productid
        WHERE
            c.userid = $userid
        GROUP BY p.id
    ";

//执行sql语句
$result = $conn->query($sql);

$resp = array();
if($result && $result->num_rows >0){
    
    $rows = $result->fetch_assoc();
    while($rows != null){
        $resp[] = $rows;
        $rows = $result->fetch_assoc();
    }

    echo json_encode($resp);
    
}else{
    echo "购物车是空的";
}


$conn->close();




?>