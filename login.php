<?php
include 'connection.php';
$db="thinkivatedb";
$date =date('Y_m_d H:i:s');
mysqli_select_db($conn,$db);
 
if(isset($_POST['username'])){
    $uname=$_POST['username'];
    $password=$_POST['password'];
	$user_type=$_POST['user_type'];
    $sql="select * from loginform where user_name='".$uname."' AND user_password='".$password."' limit 1";
    $result=mysqli_query($conn,$sql);
    
   /*if(mysqli_num_rows($result)==1){ */
	if($result)
	    $sql="update loginform set login_date='$date' where user_name='".$uname."' ";
        $res=mysqli_query($conn,$sql);
        header("Location: dashboard.html");
        //echo " You Have Successfully Logged in";
        exit();
		
        /*$_SESSION['username']=$username;
        $_SESSION['logged']=1;
        $date = date('Y-m-d H:i:s');
        $query = "INSERT INTO loginform(login_date) VALUES('" . $date . "')WHERE user_name = '" . $username . "'";
        mysqli_query($query, $db) or die (mysql_error($db));
        //header('Refresh: 5; URL = main.php');
        echo "Login successful, redirecting...";
        die();*/
    }
    else{
        echo "Sorry!...Invalid credentials";
        exit();
    }

?>