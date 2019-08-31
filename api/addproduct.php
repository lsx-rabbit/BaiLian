<?php

header("content-type:text/json");
// 取得发送过来的数据

// 取出cookie
if(!empty($_COOKIE["userid"])){
    $userid = $_COOKIE["userid"]*1;
}else{
    echo '[]';
}


$productid = $_POST["productid"];
$name = $_POST["name"];
$shop = $_POST["shop"];
$count=$_POST["count"];
$price = $_POST["price"];
$image = $_POST["image"];

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

$sql = "select `id` from `product`
    where `productid` = '$productid'
";

$result = $conn->query($sql);

if($result->num_rows>0){
    //说明有产品已经寄存了，不用再添加进表中了
    // echo '{"result": false}';
    

} else {
    $sql = "insert into `product`
    (`id`,`productid`,`name`,`price`,`img`,`shop`)
    values
    (NULL,'$productid','$name',$price,'$image','$shop')
    ";
    $result = $conn->query($sql);
}

$sql = "insert into `cart`
(`id`,`userid`,`productid`,`count`)
values
(NULL,$userid,'$productid','$count')
";
$result = $conn->query($sql);
// 执行sql语句


if($result){
    //插入进去
       echo '{"result" : true}';

}else{
    echo '{"result" :false}';
}



?>