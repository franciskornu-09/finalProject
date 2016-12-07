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
		var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=1&username="+username+"&password="+password;
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

    var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=2&firstname="+firstname+"&lastname="+lastname+"&username="+username+"&phone="+phone+"&password="+password+"&email="+email;
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
           window.location="http://52.89.116.249/~francis.kornu/predator/loginUser.html";
        }
  }

  function request(){
    var firstname = $("#first_name").val();
    var lastname = $("#last_name").val();
    var phone  = $("#phone").val();
    var account = $("#account").val();
    var email = $("#email").val();
    var bank = $("#bank").val();

    var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=3&firstname="+firstname+"&lastname="+lastname+"&bank="+bank+"&phone="+phone+"&account="+account+"&email="+email;
    alert(theUrl);
    $.ajax(theUrl,
          {
          async:true,
          complete:requestComplete}
          );
  }

   function requestComplete(xhr,status){
    if(status!="success"){
      alert("Error");
          return;
        }
            
        var obj=$.parseJSON(xhr.responseText);
        if (obj.result==0){
          alert("You were not make the necesary request for an ATM");
        return;
        }else{
           alert("Request successfully made");
           window.location="http://52.89.116.249/~francis.kornu/predator/home.html";
        }
  }

  function hotel(){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=4";
          $.ajax(theUrl,
                {
                async:true,
                complete:hotelDetails}
                );
        }

        function hotelDetails(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              
              if (obj.result==0){
                alert("Error");
                return;
                }

            var pdetails="";
            for (var i in obj.hotels){
            pdetails += "<div class='card #e53935 red darken-1'>";
            pdetails += "<div class='card-content white-text'>";
            pdetails += "<span class='card-title' style='color: black'>"+obj.hotels[i].HOTEL_NAME+"</span>";
            pdetails += "<h6>"+"Number of Rooms: "+"<b>"+obj.hotels[i].ROOM_AVAILABLE+"</b>"+"</h6>";
            pdetails += "<h6>"+"Phone Number: "+"<b>"+obj.hotels[i].PHONE_NUMBER+"</b>"+"</h6>";
            pdetails += "</div>";
            pdetails += "<div class='card-action'>";
            pdetails += "<a onclick='join("+obj.hotels[i].BOOK_ID+")'>"+"BOOK"+"</a>";
            pdetails += "</div>";
            pdetails += "</div>";
          }
          $("#details").html(pdetails);
        } 


        function join(book){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myJoin.php?bId="+book;
          $.ajax(theUrl,
                {
                async:true,
                complete:joinComplete}
                );
        }

        function joinComplete(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              
              if (obj.result==0){
                alert("There are no rooms available");
                return;
                }else if(obj.result==2){
                  alert("You were not to book the room. Please try again");
                  return;
                }else if(obj.result==1){
                  alert("Hotel Room was successfully booked");
                  window.location="http://52.89.116.249/~francis.kornu/predator/home.html";
                }
        }

        function loginAd(){
          var username = $("#adUsername").val();
          var password = $("#adPassword").val();
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=5&username="+username+"&password="+password;
          $.ajax(theUrl,
                {
                async:true,
                complete:loginAdComplete}
                );
        }

        function loginAdComplete(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              if (obj.result==0){
                document.getElementById('display').innerHTML ="USERNAME OR PASSWORD IS WRONG";
                return;
              }else{
                alert("Log In was successful");
                window.location="http://52.89.116.249/~francis.kornu/predator/adminHome.html";
              }
        }

        function active(){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=6";
          $.ajax(theUrl,
                {
                async:true,
                complete:activeComplete}
                );
        }

        function activeComplete(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              if (obj.result==0){
                alert("There are no users using the application");
                return;
              }

              var active="";
                for (var i in obj.active){
                active += "<div class='card #bf360c deep-orange darken-4'>";
                active += "<div class='card-content white-text'>";
                active += "<span class='card-title' style='color: white'>"+obj.active[i].USERNAME+"</span>";
                active += "<h6>"+"User ID: "+"<b>"+obj.active[i].USER_ID+"</b>"+"</h6>";
                active += "<h6>"+"Firstname: "+"<b>"+obj.active[i].FIRSTNAME+"</b>"+"</h6>";
                active += "<h6>"+"Lastname: "+"<b>"+obj.active[i].LASTNAME+"</b>"+"</h6>";
                active += "<h6>"+"Email: "+"<b>"+obj.active[i].EMAIL+"</b>"+"</h6>";
                active += "<h6>"+"Phone Number: "+"<b>"+obj.active[i].PHONE+"</b>"+"</h6>";
                active += "</div>";
                active += "<div class='card-action'>";
                active += "<a onclick='deleteUser("+obj.active[i].USER_ID+")'>"+"DELETE"+"</a>";
                active += "</div>";
                active += "</div>";
              }
              $("#activeB").html(active);
        }

        function deleteUser(uId){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/delete.php?user="+uId;
          $.ajax(theUrl,
                {
                async:true,
                complete:deleteComplete}
                );
        }

        function deleteComplete(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              if (obj.result==0){
                alert("Failed to delete User");
                return;
              }else{
                alert("User was successfully deleted");
                document.location.href="http://52.89.116.249/~francis.kornu/predator/adminHome.html";
              }
        }

        function userRequest(){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=7";
          $.ajax(theUrl,
                {
                async:true,
                complete:reqComplete}
                );
        }

        function reqComplete(xhr,status){
           if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              if (obj.result==0){
                alert("Failed to delete User");
                return;
              }

              var req="";
                for (var i in obj.userR){
                req += "<div class='card #bf360c deep-orange darken-4'>";
                req += "<div class='card-content white-text'>";
                req += "<span class='card-title' style='color: white'>"+obj.userR[i].BANK+"</span>";
                req += "<h6>"+"Firstname: "+"<b>"+obj.userR[i].FIRSTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Lastname: "+"<b>"+obj.userR[i].LASTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Account N0: "+"<b>"+obj.userR[i].ACCOUNT+"</b>"+"</h6>";
                req += "<h6>"+"Email: "+"<b>"+obj.userR[i].EMAIL+"</b>"+"</h6>";
                req += "<h6>"+"Phone Number: "+"<b>"+obj.userR[i].PHONE+"</b>"+"</h6>";
                req += "<h6>"+"Date: "+"<b>"+obj.userR[i].DATE+"</b>"+"</h6>";
                req += "</div>";
                req += "<div class='card-action'>";
                req += "</div>";
                req += "</div>";
              }
              $("#requestU").html(req);
        }
