var http = require("https");

var options = {
    "method": "POST",
    "hostname": "www.googleapis.com",
    "port": null,
    "path": "/qpxExpress/v1/trips/search?key=AIzaSyBvF1pNL7Mm3N6KK6dI05j4Wey-b7t1W40",
    "headers": {
        "content-type": "application/json"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    })

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        var jbody = body.toString();
        console.log(jbody)
        jbody = JSON.parse(jbody);
        var cheapest_price = jbody.trips.tripOption[0].saleTotal;
        var destination_airport = jbody.trips.data.airport[0].name; //
        var origin_airport = jbody.trips.data.airport[1].name;  //
        var aircraft = jbody.trips.data.aircraft[0].name;   //
        var flight_carrier = jbody.trips.data.carrier[0].name;  //
        var departure = jbody.trips.tripOption[0].slice[0].segment[0].leg[0].departureTime; //
        var flight_num = jbody.trips.tripOption[0].slice[0].segment[0].flight.number;   //
        var flight_code = jbody.trips.data.carrier[0].code; //
        var return_flight_num = jbody.trips.tripOption[0].slice[1].segment[0].flight.number;
        var departure2 = jbody.trips.tripOption[0].slice[1].segment[0].leg[0].departureTime;
        //var flight_code = jbody.trips.data.carrier[0].code; //
        var Source ="san francisco";
        var Destination = "boston";
        console.log("The most economic trip is at the price of " + cheapest_price + ". The flights operate between the airports "+ origin_airport+ " and " + destination_airport+ ". The flight from " + Source + " to " + Destination + " is " + flight_carrier + ", " + flight_code+ " " + flight_num+" on "+ departure+ ". The return flight from " + Destination + " to " + Source + " is " + flight_carrier + ", " + flight_code+ " " + return_flight_num+" on " + departure2 +".");
        console.log("The most economic flight is at the price of " + cheapest_price + ". The flight is " +flight_carrier + ", flight number "+ flight_code+ " " + flight_num+ ". It is a " + aircraft +" originating from " + origin_airport + " airport and destined to " + destination_airport + " airport. It departs on " + departure + ".");
    });
});

req.write(JSON.stringify({ request:
    { slice: [ { origin: 'SFO', destination: 'BOS', date: '2017-12-26' },{ origin: 'BOS', destination: 'SFO', date: '2017-12-29' } ],
        passengers:
            { adultCount: 1,
                infantInLapCount: 0,
                infantInSeatCount: 0,
                childCount: 0,
                seniorCount: 0 },
        solutions: 1,
        refundable: false } }));
req.end();