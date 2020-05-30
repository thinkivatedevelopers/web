<?php
$conn=new mysqli('localhost','root','root123','thinkivatedb');
if ($conn === false){
	die("ERROR: could not connect" .mysqli_connect_error());
}

?>