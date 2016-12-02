(function(){

	document.addEventListener('deviceready',onDeviceReady.bind(this),false);
	var pictureSource;
	var destinationType;

	function onDeviceReady(){
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("photo").onclick = function(){
			navigator.camera.getPicture(cameraSuccess,cameraError,
			{
				quality: 50,
				destinationType :destinationType.DATA_URL
			});
		}

		document.getElementById("geolocation").addEventListener("click",function()
		{
		  navigator.geolocation.getCurrentPosition(locationSuccess,locationError,{
		  	enableHighAccuracy : true
		  });
		});	

		var watchId = navigator.geolocation.watchPosition(watchSuccess,watchError,{
			timeout : 3000
		});

		document.getElementById("watchLocation").addEventListener("click", function(){
			navigator.geolocation.clearWatch(watchId);
		});
	};

	function cameraSuccess(imageData){
		var image = document.getElementById('smallImage');
		image.style.display = 'block';
		image.src = "data.image/jpeg;base64" + imageData;
	}

	function cameraError(message){
		alert('Failed because: '+message);
	}	

	var locationSuccess = function(position){
		alert('Latitude: '+ position.coords.latitude + '\n'+ 'Longitude: '+ position.coords.longitude+'\n');
	}

	function locationError(error){
		alert('code: '+ error.code + '\n' + 'message: '+ error.message + '\n');
	}

	var watchSuccess = function(position){
		var element = document.getElementById('divPosition');
		element.innerHTML = 'Latitude: '+ position.coords.latitude + '<br />' + 'Longitude: '+position.coords.longitude + '<br />'+ '<hr />'+element.innerHTML;
	};

	function watchError(error){
		alert('code: '+ error.code + '\n' + 'message: ' + error.message + '\n')
	}
})();