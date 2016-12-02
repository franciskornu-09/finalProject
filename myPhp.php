<?php
if(!isset($_REQUEST['cmd'])){
		echo "cmd is not provided";
		exit();
	}
	$data ="";

$cmd=$_REQUEST['cmd'];
	switch($cmd){
		case 1:
			login();
			break;
		case 2:
			signUp();
			break;
		}

	function login(){
		include_once("users.php");
   	    $obj=new users();
  //       $username=$_REQUEST['username'];
		// $password=$_REQUEST['password'];
		
		$logDetails=$obj->login($_REQUEST['username'],$_REQUEST['password']);
	 	
		 if (!$logDetails){
		 	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		 } else {
		 // 	session_start();
	 	// $_SESSION['USERNAME']=$_REQUEST['username'];

		 	$data=array("result"=>"1");
			echo json_encode($data);
			return;
		 }
	}

	function signUp(){
	include_once("users.php");
    $obj=new users();
 
    $firstname=$_REQUEST['firstname'];
    $lastname=$_REQUEST['lastname'];
    $username=$_REQUEST['username'];
    $phone=$_REQUEST['phone'];
    $password=$_REQUEST['password'];
    $email=$_REQUEST['email'];

    $row=$obj->newUser($firstname,$lastname,$username,$phone,$password,$email);
    if (!$row){
    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			$data=array("result"=>"1");
		    echo json_encode($data);
			return;	
		}
	}
?>