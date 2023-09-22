let Mapz = {
    mapContainer: document.getElementById('map'),
    inputAutocomplete: document.getElementById('searchfield'),
    inputLat: $("input[name=lat]"),
    inputLng: $("input[name=lng]"),
    inputlokasi: $("#usergmaps"),
    map: {},
    geocoder: new google.maps.Geocoder(),
    autocomplete: {},
    init: function () {
        let _this = this;

        this.autocomplete = new google.maps.places.Autocomplete(this.inputAutocomplete);

        let latLng = new google.maps.LatLng(-6.2445432, 106.8006869);
        console.log(this.inputLat.val());
        if(this.inputLat.val() && this.inputLng.val()){
            latLng = new google.maps.LatLng(this.inputLat.val(), this.inputLng.val());
        }

        this.map = new google.maps.Map(this.mapContainer, {
            zoom: 15,
            center: latLng
        });

        this.autocomplete.addListener('place_changed', function () {
            let place = _this.autocomplete.getPlace();

            _this.inputlokasi.val('https://www.google.com/search?q='+'('+ place.geometry.location.lat() +')'+ ' ' +'('+ place.geometry.location.lng() +')');    
            _this.inputLat.val(place.geometry.location.lat());
            _this.inputLng.val(place.geometry.location.lng());

            let latlng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());

            // create marker
            let marker = new google.maps.Marker({
                position: latlng,
                map: _this.map,
                draggable: true
            });
            _this.map.setCenter(latlng);

            marker.addListener('dragend', function () {
                _this.inputlokasi.val('https://www.google.com/search?q='+'('+ marker.getPosition().lat() +')'+ ' ' +'('+ marker.getPosition().lng() +')');
                _this.inputLat.val(marker.getPosition().lat());
                _this.inputLng.val(marker.getPosition().lng());
                _this.geocodePosition(marker.getPosition());
                _this.map.setCenter(marker.getPosition());
            })
        })
    },
    geocodePosition: function (pos) {
        let _this = this;

        this.geocoder.geocode({
            latLng: pos
        }, function (responses) {
            if (responses && responses.length > 0) {
                _this.updateMarkerAddress(responses[0].formatted_address);
            } else {
                _this.updateMarkerAddress('');
            }
        });
    },
    updateMarkerAddress: function (str) {
        this.inputAutocomplete.value = str;
    },
    renderMap: function ($el) {
        let _this = this;
        let $markers = $el.find('.marker');

        let args = {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            mapTypeControl: false
        };

        let map = new google.maps.Map($el[0], args);

        map.markers = [];

        $markers.each(function () {
            _this.add_marker($(this), map);
        });

        _this.center_map(map);
    },
    add_marker: function ($marker, map) {
        let latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        let marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        map.markers.push(marker);
    },
    center_map: function (map) {
        let bounds = new google.maps.LatLngBounds();

        $.each(map.markers, function (i, marker) {
            let latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
            bounds.extend(latlng);
        });

        if (map.markers.length == 1) {
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        } else {
            map.fitBounds(bounds);
        }
    },

};

$(document).ready(function(){
    Mapz.init();
});
