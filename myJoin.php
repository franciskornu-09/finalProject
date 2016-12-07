<?php
session_start();
if (!isset($_SESSION['USER_ID'])){
header("Location:index.html");
exit();
}

include_once("users.php");
	$obj=new users();
  $main=new users();
  $red = new users();
    
  $bookId=$_REQUEST['bId'];

    $number = $obj->getNumber($bookId);
    
    $result=$obj->fetch();
    $zero = $result['ROOM_AVAILABLE'];
    if ($zero < 1){
      $data=array("result"=>"0");
         echo json_encode($data);
       return;
    }

    $book = $main->bookRoom($bookId,$_SESSION['USER_ID']);
    $reduce = $red->reduceRoom($bookId);
    if ($book && $reduce){
      $data=array("result"=>"1");
         echo json_encode($data);
       return;
    }else{
      $data=array("result"=>"2");
         echo json_encode($data);
       return;
    }
?>