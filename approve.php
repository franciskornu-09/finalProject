<?php
session_start();
if (!isset($_SESSION['USER_ID'])){
header("Location:index.html");
exit();
}
  
        $number = $_REQUEST['number'];
        $sender="Predator";
        $message="We are pleased to inform you that, your request for a booking has been approved. Please keep to the specified time. If for some reason you can not make it, please inform the Hotel as soon as possible. Thank you for using Predator.";
        $message=preg_replace('/\s+/', '%20', $message);
        // $sender = urlencode($sender);
        // $message = urlencode($message);
      $url="http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=$number&from=$sender&text=$message";
      
      $ch = curl_init($url);   
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
      $result = curl_exec($ch);
         curl_close($ch);

      $data=array("result"=>"1");
        echo json_encode($data);
      return; 
?>