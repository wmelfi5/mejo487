var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: new google.maps.LatLng(35.95,-79.03),
    mapTypeId: "roadmap",
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }],
    disableDefaultUI: true,
    zoomControl: true,
  });
  var script = document.createElement("script");
  script.src =
    "data.geojson";
  document.getElementsByTagName("head")[0].appendChild(script);
}

var tests = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);
    const location = results.features[i].properties.title;
    const address = results.features[i].properties.address;
    const phoneNumber = results.features[i].properties.phoneNumber;
    const website = results.features[i].properties.website;
    const appointmentRequired = results.features[i].properties.appointmentRequired;
    const drivethru = results.features[i].properties.drivethru;
    var marker = new google.maps.Marker({
      position: latLng,
      icon:{
        url: 'icon.png',
        scaledSize: new google.maps.Size(20, 20)
        },
      content: location,
      map: map
    });
    var infoWindow = new google.maps.InfoWindow();
      //Attach click event to the marker.
      (function (marker, data) {
          google.maps.event.addListener(marker, "click", function (e) {
              //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
              infoWindow.setContent("<div class=popup style = 'width:200px;min-height:auto;text-align:left;font-size:14px'>" + '<b>' + location + '</b>' + '<br><b>Address: </b>' + address + '<br><b>Phone Number: </b>' + phoneNumber + '<br><b>Appointment Required: </b>' + appointmentRequired + "</div>");
              infoWindow.open(map, marker);
          });
      })(marker, map)
  }
};

$(document).ready(function() {
    $('table.table').DataTable( {
        "ajax": "data.json",
        "columns": [
            { "data": "title" },
            { "data": "address" },
            { "data": "phoneNumber" },
            { "data": "appointmentRequired" },
            { "data": "drivethru" }
        ]
    } );
} );

function listView() {
  var x = document.getElementById("list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if  ($('#list').is(":visible")) {
        $("#map").hide();
    }
}

function mapView() {
  var x = document.getElementById("map");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if  ($('#map').is(":visible")) {
        $("#list").hide();
    }
}

var header = document.getElementById("footer");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
