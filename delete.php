<?php
include_once("users.php");
	
	//checking for user code
	
	$pid = $_REQUEST['user'];
	$newDel = new users();
	$Del = $newDel->deleteUser($pid);
	if (!$Del){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			$data=array("result"=>"1");
		    echo json_encode($data);
			return;
		}

	
?>