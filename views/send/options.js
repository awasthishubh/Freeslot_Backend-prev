


$('#btn2').click(function(event) {
    console.log("Inside function");
    event.preventDefault();
    $.ajax({
      url: "http://139.59.65.102/getreq",
      beforeSend: function(xhr)  {
            // $('#submit-btn-2').val('submitting..');
            console.log("Before send");
        }
      })
      .done(function( data ) {
          console.log( "Sample of data:", data);
            // $('#submit-btn-2').val('submit');
            console.log("After send");
      });

});
