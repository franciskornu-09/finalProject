 function loginComplete(xhr,status){
			if(status!="success"){
						alert("Error");
						return;
					}

			 var block=$.parseJSON(xhr.responseText);
			 if (block.result==0){
			 	document.getElementById('display').innerHTML ="USERNAME OR PASSWORD IS WRONG";
				 }else if(block.result==1){
			 window.location ="home.html";
			}
	}

	function login(){
		var username=$("#username").val();
		var password=$("#password").val();
		if (!username){
			alert("Please fill the fields");
			return;
		}
		var theUrl="myPhp.php?cmd=1&username="+username+"&password="+password;
		$.ajax(theUrl,
					{
					async:true,
					complete:loginComplete}
					);
	}

function signUp(){
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var username = $("#username").val();
    var phone  = $("#phone").val();
    var password = $("#password").val();
    var email = $("#email").val();

    var theUrl="myPhp.php?cmd=2&firstname="+firstname+"&lastname="+lastname+"&username="+username+"&phone="+phone+"&password="+password+"&email="+email;
    $.ajax(theUrl,
          {
          async:true,
          complete:signUpComplete}
          );
  }

  function signUpComplete(xhr,status){
    if(status!="success"){
      alert("Error");
          return;
        }
            
        var obj=$.parseJSON(xhr.responseText);
        if (obj.result==0){
          alert("You were not able register");
        return;
        }else{
           alert("Account successfully created");
           window.location="index.html";
        }
  }