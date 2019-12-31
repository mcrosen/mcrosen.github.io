function updater() {
  var name_1 = document.getElementById("name_1_id").value;
  var name_2 = document.getElementById("name_2_id").value;

  document.getElementById("name-1").innerHTML = name_1;
  document.getElementById("name-2").innerHTML = name_2;
}

// This example uses the autocomplete feature of the Google Places API.
      // It allows the user to find all hotels in a given place, within a given
      // country. It then displays markers for all the hotels returned,
      // with on-click details for each hotel.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var countryRestrict = {'country': 'us'};
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');

      var countries = {
        'au': {
          center: {lat: -25.3, lng: 133.8},
          zoom: 4
        },
        'br': {
          center: {lat: -14.2, lng: -51.9},
          zoom: 3
        },
        'ca': {
          center: {lat: 62, lng: -110.0},
          zoom: 3
        },
        'fr': {
          center: {lat: 46.2, lng: 2.2},
          zoom: 5
        },
        'de': {
          center: {lat: 51.2, lng: 10.4},
          zoom: 5
        },
        'mx': {
          center: {lat: 23.6, lng: -102.5},
          zoom: 4
        },
        'nz': {
          center: {lat: -40.9, lng: 174.9},
          zoom: 5
        },
        'it': {
          center: {lat: 41.9, lng: 12.6},
          zoom: 5
        },
        'za': {
          center: {lat: -30.6, lng: 22.9},
          zoom: 5
        },
        'es': {
          center: {lat: 40.5, lng: -3.7},
          zoom: 5
        },
        'pt': {
          center: {lat: 39.4, lng: -8.2},
          zoom: 6
        },
        'us': {
          center: {lat: 37.1, lng: -95.7},
          zoom: 3
        },
        'uk': {
          center: {lat: 54.8, lng: -4.6},
          zoom: 5
        }
      };

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: countries['us'].zoom,
          center: countries['us'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false,

          styles: [{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#444444"}]},{"featureType": "administrative.country","elementType": "all","stylers": [{"visibility": "on"}]},
          {"featureType": "administrative.neighborhood","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},
          {"featureType": "landscape.man_made","elementType": "all","stylers": [{"color": "#d6cfce"}]},{"featureType": "landscape.natural","elementType": "all","stylers": [{"visibility": "on"},
          {"color": "#e0e0e0"},{"weight": "0.36"}]},{"featureType": "landscape.natural","elementType": "geometry.fill","stylers": [{
          "visibility": "on"},{"hue": "#00ff75"}]},{"featureType": "landscape.natural","elementType": "labels.text","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.terrain","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "landscape.natural.terrain","elementType": "geometry","stylers": [{"visibility": "on"}]},
          {"featureType": "landscape.natural.terrain","elementType": "labels.text","stylers": [{"visibility": "on"},{"color": "#ff0000"},{"weight": "0.57"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.attraction","elementType": "all","stylers": [{"visibility": "on"},{"color": "#595554"},{"weight": "0.63"}]},
          {"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "on"},{"color": "#867f7e"},{"weight": "0.54"}]},{"featureType": "poi.park","elementType": "all","stylers": [{"visibility": "on"},{"color": "#9e8c88"},{"weight": "0.45"}]},
          {"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45},{"visibility": "on"},{"hue": "#e0ff00"}]},{"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
          {"featureType": "road.highway.controlled_access","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
          {"featureType": "water","elementType": "all","stylers": [{"color": "#9c8a86"},{"visibility": "on"}]},{"featureType": "water","elementType": "labels.text","stylers": [{"visibility": "on"}]}]
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: ['geocode'],
              
            });
        places = new google.maps.places.PlacesService(map);


        autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);
      }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          search();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }

      $( function() {
    $( ".draggable" ).draggable();
  } );
