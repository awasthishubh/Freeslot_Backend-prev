$('#z').click(function(){
    console.log("Insidsdvvffn");
    $.ajax({
        type:'POST',
        url:'http://192.168.43.126/request/index.php/post/',
        data: { 
        'lat': marker.getPosition().lat(),
        'lng': marker.getPosition().lng(),
        'title': marker.title,
        },
        beforeSend: function() {
            
            console.log("begoresend");
        }
    }).done(function(data){
        console.log("sent");
        data=jQuery.parseJSON(data)
        console.log(data);
       
    }).catch(function(err){
        console.log("galat");
        console.log(err);
    });
});