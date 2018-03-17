var marker;
var dpos={lat:12.9717796, lng: 79.1589042}
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: dpos,
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        marker= new google.maps.Marker({
              map: map,
              title:"Vellore Institute Of Technology",
              position: dpos,
              draggable: true
            });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('search');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }


          place=places[0];

          

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          
           

            // Create a marker for each place.
            marker= new google.maps.Marker({
              map: map,
              title: place.name,
              position: place.geometry.location,
              draggable: true
            });

            

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          
          map.fitBounds(bounds);
        });

      }