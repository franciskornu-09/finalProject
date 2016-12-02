<?php

include_once("wrapper.php");

class users extends wrapper{
	function users(){}
    
    function login($username,$password){
    	$strQuery="select USERNAME,PASSWORD from user where USERNAME='$username' and PASSWORD=MD5($password)";
    	return $this->query($strQuery);
    }

    function newUser($firstname,$lastname,$username,$phone,$password,$email){
        $strQuery="insert into user set FIRSTNAME='$firstname',LASTNAME='$lastname',USERNAME='$username',PHONE='$phone',PASSWORD=MD5($password),EMAIL='$email'";
        return $this->query($strQuery);
    }
}
?>