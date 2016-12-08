<?php
session_start();
if (!isset($_SESSION['USER_ID'])){
header("Location:index.html");
exit();
}

include_once("users.php");
	$obj=new users();

  $book = $obj->bookRoom($_REQUEST['hotel'],$_REQUEST['firstname'],$_REQUEST['lastname'],$_REQUEST['phone'],$_REQUEST['email']);
    
    if (!$book){
      $data=array("result"=>"0");
         echo json_encode($data);
       return;
    }else{
      $data=array("result"=>"1");
         echo json_encode($data);
       return;
    }
?>