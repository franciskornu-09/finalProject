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
		case 3:
			request();
			break;
		case 4:
			book();
			break;
		case 5:
			logAd();
			break;
		case 6:
			active();
			break;
		case 7:
			req();
			break;
		case 8:
			report();
			break;
		case 9:
			userReport();
			break;
		case 10:
			userBook();
			break;
		default:
			exit();
		}

	function userBook(){
		include_once("users.php");
		$obj=new users();
		
		$userReq = $obj->pullBookings();
		if (!$userReq){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}

		$result = $obj->fetch();

   	    if (!$result){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			echo '{"result":1, "book":[';

        while ($result) {
            echo json_encode($result);
            $result = $obj->fetch();

            if ($result) {
                echo ",";
            }
        }
        echo "]}";
		}	
	}

	function userReport(){
		include_once("users.php");
		$obj=new users();
		
		$userReq = $obj->pullReport();
		if (!$userReq){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}

		$result = $obj->fetch();

   	    if (!$result){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			echo '{"result":1, "report":[';

        while ($result) {
            echo json_encode($result);
            $result = $obj->fetch();

            if ($result) {
                echo ",";
            }
        }
        echo "]}";
		}	

	}
	function report(){
		include_once("users.php");
   	    $obj=new users();
   	    $request=$obj->report($_REQUEST['area'],$_REQUEST['firstname'],$_REQUEST['lastname'],$_REQUEST['issue'],$_REQUEST['phone'],$_REQUEST['email']);
   	    if (!$request){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
   	    }else{
   	    	$data=array("result"=>"1");
		    echo json_encode($data);
			return;
   	    }
	}
	function req(){
		include_once("users.php");
		$obj=new users();
		
		$userReq = $obj->pullReq();
		if (!$userReq){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}

		$result = $obj->fetch();

   	    if (!$result){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			echo '{"result":1, "userR":[';

        while ($result) {
            echo json_encode($result);
            $result = $obj->fetch();

            if ($result) {
                echo ",";
            }
        }
        echo "]}";
		}	

	}
	
	function active(){
		include_once("users.php");
		$obj=new users();
		
		$active = $obj->pullUsers();
		if (!$active){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}

		$result = $obj->fetch();

   	    if (!$result){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			echo '{"result":1, "active":[';

        while ($result) {
            echo json_encode($result);
            $result = $obj->fetch();

            if ($result) {
                echo ",";
            }
        }
        echo "]}";
		}	


	}

	function logAd(){
		include_once("users.php");
		$obj=new users();

		$admin = $obj->loginAdmin($_REQUEST['username'],$_REQUEST['password']);
		if (!$admin){
			$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			$data=array("result"=>"1");
		    echo json_encode($data);
			return;
		}
	}
	function book(){
		include_once("users.php");
   	    $obj=new users();

   	    $book=$obj->pullHotel();
   	    if (!$book){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
   	    }
   	    $result = $obj->fetch();

   	    if (!$result){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
   	    }else{
   	    echo '{"result":1, "hotels":[';

        while ($result) {
            echo json_encode($result);
            $result = $obj->fetch();

            if ($result) {
                echo ",";
            }
        }
        echo "]}";
      }     	
	}
	function request(){
		include_once("users.php");
   	    $obj=new users();
   	    
   	    $request=$obj->addRequest($_REQUEST['firstname'],$_REQUEST['lastname'],$_REQUEST['bank'],$_REQUEST['phone'],$_REQUEST['account'],$_REQUEST['email']);
   	    if (!$request){
   	    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
   	    }else{
   	    	$data=array("result"=>"1");
		    echo json_encode($data);
			return;
   	    }
	}

	function login(){
		include_once("users.php");
   	    $obj=new users();
		
		$logDetails=$obj->login($_REQUEST['username'],$_REQUEST['password']);
	 	
		 if (!$logDetails){
		 	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		 } else {
		 	$result = $obj->fetch();
		 	$id = $result['USER_ID'];
		 	session_start();
	 	    $_SESSION['USER_ID']=$id;

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
    $validate= mt_rand(1000,5000);

    $row=$obj->newUser($firstname,$lastname,$username,$phone,$password,$email,$validate);
    if (!$row){
    	$data=array("result"=>"0");
		    echo json_encode($data);
			return;
		}else{
			$number = $phone;
		    $sender="Predator";
		    $message="You have successfully registered onto Predator. If your phone number was used without your knowledge for this registration, PLEASE reply NOT ME to +233244504815. If the number is yours, please log in and enjoy the services Predator offers";
		    $message=preg_replace('/\s+/', '%20', $message);
		    $sender = urlencode($sender);
		    $message = urlencode($message);
			$url="http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=$number&from=$sender&text=$message";
			
			$ch = curl_init($url);   
		    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
			$result = curl_exec($ch);
		     curl_close($ch);

			$data=array("result"=>"1");
		    echo json_encode($data);
			return;	
		}
	}
?>