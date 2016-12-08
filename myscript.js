 function loginComplete(xhr,status){
			if(status!="success"){
						alert("Error");
						return;
					}

			 var block=$.parseJSON(xhr.responseText);
			 if (block.result==0){
			 	document.getElementById('display').innerHTML ="USERNAME OR PASSWORD IS WRONG";
				 }else if(block.result==1){
			 document.location.href ="home.html";
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
           document.location.href="loginUser.html";
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
           document.location.href="home.html";
        }
  }
  function report(){
     var area = $("#area").val();
     var firstname = $("#first_name").val();
     var lastname = $("#last_name").val();
     var phone  = $("#phone").val();
     var email = $("#email").val();
     var issue = $("#issue").val();

     var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=8&area="+area+"&firstname="+firstname+"&lastname="+lastname+"&phone="+phone+"&email="+email+"&issue="+issue;
      $.ajax(theUrl,
                {
                async:true,
                complete:reportComplete}
                ); 
  }

  function reportComplete(xhr,status){
    if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              
              if (obj.result==0){
                alert("Error");
                return;
                }else{
                alert("Report successfully made");
                document.location.href="home.html";
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
          var hotel = $("#hotel").val();
          var firstname = $("#first_name").val();
          var lastname = $("#last_name").val();
          var phone  = $("#phone").val();
          var email = $("#email").val();

          var theUrl="http://52.89.116.249/~francis.kornu/predator/myJoin.php?firstname="+firstname+"&lastname="+lastname+"&phone="+phone+"&email="+email+"&hotel="+hotel;
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
              
              if(obj.result==0){
                  alert("You were not to book the room. Please try again");
                  return;
                }else if(obj.result==1){
                  alert("Request for Hotel Room was successfully made");
                  document.location.href="home.html";
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
                document.location.href="adminHome.html";
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
                document.location.href="adminHome.html";
              }
        }

        function userBookings(){
           var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=10";
          $.ajax(theUrl,
                {
                async:true,
                complete:bookComplete}
                );
        }

        function bookComplete(xhr,status){
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
                for (var i in obj.book){
                req += "<div class='card #bf360c deep-orange darken-4'>";
                req += "<div class='card-content white-text'>";
                req += "<span class='card-title' style='color: white'>"+obj.book[i].HOTEL_NAME+"</span>";
                req += "<h6>"+"Firstname: "+"<b>"+obj.book[i].FIRSTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Lastname: "+"<b>"+obj.book[i].LASTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Email: "+"<b>"+obj.book[i].EMAIL+"</b>"+"</h6>";
                req += "<h6>"+"Phone Number: "+"<b>"+obj.book[i].PHONE+"</b>"+"</h6>";
                req += "<h6>"+"Date: "+"<b>"+obj.book[i].DATE+"</b>"+"</h6>";
                req += "</div>";
                req += "<div class='card-action'>";
                req += "<a onclick='approve("+obj.book[i].PHONE+")'>"+"APPROVE"+"</a>";
                req += "</div>";
                req += "</div>";
              }
              $("#booking").html(req);
        }

        function approve(number){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/approve.php?number="+number;
          $.ajax(theUrl,
                {
                async:true,
                complete:approveComplete}
                );
        }

        function approveComplete(xhr,status){
          if(status!="success"){
              alert("Error");
                  return;
              }
              var obj=$.parseJSON(xhr.responseText);
              if (obj.result==0){
                alert("Failed to approve");
                return;
              }else{
                alert("Request was successfully approved");
                document.location.href="adminHome.html";
              }
        }
        function userReport(){
          var theUrl="http://52.89.116.249/~francis.kornu/predator/myPhp.php?cmd=9";
          $.ajax(theUrl,
                {
                async:true,
                complete:repComplete}
                );
        }

        function repComplete(xhr,status){
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
                for (var i in obj.report){
                req += "<div class='card #bf360c deep-orange darken-4'>";
                req += "<div class='card-content white-text'>";
                req += "<span class='card-title' style='color: white'>"+obj.report[i].AREA+"</span>";
                req += "<h6>"+"Firstname: "+"<b>"+obj.report[i].FIRSTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Lastname: "+"<b>"+obj.report[i].LASTNAME+"</b>"+"</h6>";
                req += "<h6>"+"Issue: "+"<b>"+obj.report[i].ISSUE+"</b>"+"</h6>";
                req += "<h6>"+"Email: "+"<b>"+obj.report[i].EMAIL+"</b>"+"</h6>";
                req += "<h6>"+"Phone Number: "+"<b>"+obj.report[i].PHONE+"</b>"+"</h6>";
                req += "<h6>"+"Date: "+"<b>"+obj.report[i].DATE+"</b>"+"</h6>";
                req += "</div>";
                req += "<div class='card-action'>";
                req += "</div>";
                req += "</div>";
              }
              $("#reportU").html(req);
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
