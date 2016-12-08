document.getElementById("search").addEventListener("click",findContact);

function findContact(){
	var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["displayName"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
   function contactfindSuccess(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         alert("Display Name = " + contacts[i].displayName);
      }
   }
	
   function contactfindError(message) {
      alert('Failed because: ' + message);
   }
}
