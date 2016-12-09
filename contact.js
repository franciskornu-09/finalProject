(function() {

document.addEventListener('deviceready', onDeviceReady.bind(this), false);
function onDeviceReady() {

document.getElementById("contact").onclick = function() {
navigator.contacts.pickContact(function(contact){
       alert('The following contact has been selected:' + JSON.stringify(contact));

       document.getElementById("search").value=contact.phoneNumbers[0].value;
       alert(contact.phoneNumbers[0].value);
   },function(err){
       alert('Error: ' + err);
   });
}
} ;
})();

