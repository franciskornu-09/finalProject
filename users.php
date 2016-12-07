<?php

include_once("wrapper.php");

class users extends wrapper{
	function users(){}
    
    function login($username,$password){
    	$strQuery="select USERNAME,PASSWORD,USER_ID from user where USERNAME='$username' AND PASSWORD=MD5($password)";
    	return $this->query($strQuery);
    }

    function newUser($firstname,$lastname,$username,$phone,$password,$email,$validate){
        $strQuery="insert into user set FIRSTNAME='$firstname',LASTNAME='$lastname',USERNAME='$username',PHONE='$phone',PASSWORD=MD5($password),EMAIL='$email',VALIDATE=$validate";
        return $this->query($strQuery);
    }
    
    function addRequest($firstname,$lastname,$bank,$phone,$account,$email){
    	$strQuery="insert into request set FIRSTNAME='$firstname', LASTNAME='$lastname',PHONE='$phone',ACCOUNT=$account,BANK='$bank',EMAIL='$email',DATE=NOW()";
    	return $this->query($strQuery);
    }

    function pullHotel(){
    	$strQuery="select BOOK_ID,HOTEL_NAME,ROOM_AVAILABLE,PHONE_NUMBER from book";
    	return $this->query($strQuery); 
    }

    function getNumber($id){
        $strQuery="select ROOM_AVAILABLE from book where BOOK_ID=$id";
        return $this->query($strQuery);
    }

    function bookRoom($bId,$uId){
    	$strQuery="insert into relationship set USER_ID=$uId, BOOK_ID=$bId";
    	return $this->query($strQuery);
    }

    function reduceRoom($bId){
    	$strQuery="update book set ROOM_AVAILABLE = ROOM_AVAILABLE-1 where BOOK_ID = $bId";
    	return $this->query($strQuery);
    }

    function loginAdmin($username,$password){
    	$strQuery="select USERNAME,PASSWORD from admin where USERNAME='$username' and PASSWORD=MD5($password)";
    	return $this->query($strQuery);
    }

    function pullUsers(){
    	$strQuery="select USER_ID,USERNAME,FIRSTNAME,LASTNAME,EMAIL,PHONE from user";
    	return $this->query($strQuery);
    }	

    function pullReq(){
    	$strQuery="select FIRSTNAME,LASTNAME,PHONE,ACCOUNT,BANK,DATE,EMAIL from request";
    	return $this->query($strQuery);
    }

    function deleteUser($uid){
    	$strQuery="delete from user where USER_ID = $uid";
    	return $this->query($strQuery);
    }
}
?>