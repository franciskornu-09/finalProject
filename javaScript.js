var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function () {
        //app.receivedEvent('deviceready');
        //pictureSource = navigator.camera.PictureSourceType;
        //destinationType = navigator.camera.DestinationType;
        //decode function
        
        //Barcode start
        $(function () {
            "use strict";
            $("#decode").click(function () {
                //alert("clicked");
                cordova.plugins.barcodeScanner.scan(
                    function (result) {
                        alert("Information: " + result.text + "\n" +
                            "Format: " + result.format + "\n");
                    },
                    function (error) {
                        alert(error);
                    }
                );
                //end
            });
        });
        //Barcode end

        //Geolocation start
        var c = function (pos) {
            var lat = pos.coords.latitude,
                long = pos.coords.longitude,
                coords = lat + ', ' + long;

            document.getElementById('google-map').setAttribute('src', 'http://maps.google.co.uk?q=' + coords + '&z=60&output=embed');

        }

        //get location function
        document.getElementById("getloc").onclick = function () {
            navigator.geolocation.getCurrentPosition(c);
            return false;
        }
        //Geolocation end

        //document.getElementById("camera").onclick = function () {
        //    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        //        quality: 50,
        //
        //        destinationType: destinationType.DATA_URL
        //    });
        //}
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

