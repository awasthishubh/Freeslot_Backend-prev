$('#z').click(function(){
    console.log("Inside fn");
    $.ajax({
        type:'POST',
        url:'http://192.168.43.126/request/index.php/post/',
        data: { 
        'foo': 'bar', 
        'z': $("#x").val()
        },
        beforeSend: function() {
            $("#z").hide();
            console.log("begoresend");
        }
    }).done(function(data){
        console.log("sent");
        data=jQuery.parseJSON(data)
        console.log(data);
        $("#z").show();
    }).catch(function(err){
        $("#z").show();
        console.log(err);
    });
});
//     console.log("Inside function");
    
//     $.ajax({
//         type: 'POST',
//         url: 'http://139.59.65.102/postReq',
//         data: {
//             "username" : $('#username').val(),
//             "songname" : $('#song').val()
//         },
//         beforeSend: function() {
//             $("#submit-btn").hide();
//             $("#submit-btn-loading").show();
//             $("#success").hide();
//         }
//     }).done(function(data) {
//         console.log(data);
//         console.log("Sab shi hai");
//         loadTable();
//         $("#submit-btn").show();
//         $("#submit-btn-loading").hide();
//         $("#success").show();
//         $('#username').val('');
//         $('#song').val('');
//     }).catch(function(err) {
//         console.log(err);
//                 console.log("Sab galat hai");
//         $("#submit-btn").show();
//         $("#submit-btn-loading").hide();
//         $('#username').val('');
//         $('#song').val('');
        
//     });

// });

// function loadTable(){
//     $.ajax({
//       url: "http://139.59.65.102/getreq",
//       beforeSend: function(xhr)  {
//             // $('#submit-btn-2').val('submitting..');
//             console.log("Before send");
//         }
//     })
//     .done(function( data ) {
//       console.log( "Sample of data:", data);
//             // $('#submit-btn-2').val('submit');
//             console.log("After send");
//             var html=`<table class="centered">
//             <thead>
//             <tr>
//             <th>Name</th>
//             <th>Song</th>
//             </tr>
//             </thead>
//             <tbody>`;
//             for(var i=0;i<data.length;i++){
//                 html+="<tr>";
//                 html+="<td>"+data[i].Username+"</td>";
//                 html+="<td>"+data[i].Songname+"</td>";
//                 html+="</tr>";
//             }
//             html+="</tbody></table>";
//             $("#all").html(html);
//         });
// }
// $("#username").change(function(){
//     chrome.storage.local.set({"username": $("#username").val()});
// })
// $(document).ready(function(){
//     loadTable();
//     chrome.storage.local.get(["username"],function(items){
//         if(items.username){
//             $("#username").val(items.username);
//             Materialize.updateTextFields()
//         }
//     });
// })
