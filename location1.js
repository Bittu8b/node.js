function fn(addr){
    var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'miami, us'}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    //alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
    console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
    
  } else {
    //alert("Something got wrong " + status);
    console.log('Something wrong');
    
  }
});
};

fn('asdf');