<?php
// 获取到请求的数据

$username = $_POST["username"];
$password = $_POST["password"];

// 连接数据库
$servername = "localhost";
$mysql_name="root";
$mysql_password="";
$db_name="bailian";

$conn = new mysqli($servername,$mysql_name,$mysql_password,$db_name);

if($conn->connect_error){
    echo "连接数据库失败";
    return;
}

$conn->query("set names utf8");
// 连接成功
$sql = "
select `id` from `users`
where `username` = '$username' and `password`='$password'
";

//返回的是json格式的数据
header("content-type:text/json");
// 执行sql
$result = $conn->query($sql);

if($result->num_rows > 0){
    //有数据，允许登录
    //设置cookie
    $user = $result->fetch_assoc(); //从$result中取出一条数据
    $userid = $user['id'];          //取得$user是一个关联数组，我们通过['id']访问了关联数组的一个属性
    header("set-cookie:userid=$userid;path=/");
    // // 更新userid 的值了
    $sql="update `users` set `userid` = $userid
    where `users`.`id` = $userid
    ";     
    $result = $conn->query($sql);
    echo '{"result" : true}';
}else{
    echo '{"result" :false}';
}

$conn->close();


?>