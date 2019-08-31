<?php
//获取到请求来的数据
$username = $_POST["username"];
$password = $_POST["password"];

// 连接数据库
$servername = "localhost";
$mysql_name="root";
$mysql_password = "";
$db_name = "bailian";

$conn = new mysqli($servername,$mysql_name,$mysql_password,$db_name);

if($conn->connect_error){
    echo "连接数据库失败";
    return;
}
//连接数据库成功
//sql语句

$sql = "select `id` from `users`
    where `username` = '$username' and `password` = '$password'
";

//执行sql语句
$result = $conn->query($sql);

header("content-type:text/json");
if($result->num_rows>0){
    //说明有数据寄存，不能注册
    echo '{"result": false}';
    return;
}

$sql = "insert into `users`
(`id`,`username`,`password`,`phone`,`email`)
values
(NULL,'$username','$password','12345','836040@qq.com')
";
// 执行插入语句
$result = $conn->query($sql);
if($result){
    echo '{"result": true}';
    
}else{
    echo '{"result": falseeeeee}';
}




$conn->close();  
?>