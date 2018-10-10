$(document).ready(function () {
    checkSession();
    $("#submit").click(validateAllElements);
});

function getCity(city) {
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json",
        type: "GET",
        data: {
            address: 4,
            key: "AIzaSyCbPa4XCTfAYmCPf9EyYN7QNt86doNzMF4"
        },
        success: function(response) {

        },
        error: function(xhr) {
            alert(xhr);
        }
    });

    var data = {
             address: city,
            key: "AIzaSyCbPa4XCTfAYmCPf9EyYN7QNt86doNzMF4"
        };

    $.getJSON( "ajax/test.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "body" );
    });

    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + data.address + "&key=" + data.key;
    $.getJSON(url, function (data) {
        for(var i=0;i<data.results.length;i++) {
            var adress = data.results[i].formatted_address;
            alert(adress);
        }
    })
}
