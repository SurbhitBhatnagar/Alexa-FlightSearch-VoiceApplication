var x = {
    "kind": "qpxExpress#tripsSearch",
    "trips": {
        "kind": "qpxexpress#tripOptions",
        "requestId": "ZtdjPVTQV4osefDmR0RZkZ",
        "data": {
            "kind": "qpxexpress#data",
            "airport": [
                {
                    "kind": "qpxexpress#airportData",
                    "code": "BOS",
                    "city": "BOS",
                    "name": "Boston Edward L. Logan International"
                },
                {
                    "kind": "qpxexpress#airportData",
                    "code": "SFO",
                    "city": "SFO",
                    "name": "San Francisco International"
                }
            ],
            "city": [
                {
                    "kind": "qpxexpress#cityData",
                    "code": "BOS",
                    "name": "Boston"
                },
                {
                    "kind": "qpxexpress#cityData",
                    "code": "SFO",
                    "name": "San Francisco"
                }
            ],
            "aircraft": [
                {
                    "kind": "qpxexpress#aircraftData",
                    "code": "757",
                    "name": "Boeing 757"
                }
            ],
            "tax": [
                {
                    "kind": "qpxexpress#taxData",
                    "id": "ZP",
                    "name": "US Flight Segment Tax"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "AY_001",
                    "name": "US September 11th Security Fee"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "US_001",
                    "name": "US Transportation Tax"
                },
                {
                    "kind": "qpxexpress#taxData",
                    "id": "XF",
                    "name": "US Passenger Facility Charge"
                }
            ],
            "carrier": [
                {
                    "kind": "qpxexpress#carrierData",
                    "code": "UA",
                    "name": "United Airlines"
                }
            ]
        },
        "tripOption": [
            {
                "kind": "qpxexpress#tripOption",
                "saleTotal": "USD143.20",
                "id": "bfX91pq5LHTPKN3gUbokq5001",
                "slice": [
                    {
                        "kind": "qpxexpress#sliceInfo",
                        "duration": 338,
                        "segment": [
                            {
                                "kind": "qpxexpress#segmentInfo",
                                "duration": 338,
                                "flight": {
                                    "carrier": "UA",
                                    "number": "2396"
                                },
                                "id": "Ggs-3DvUsCo4rEPF",
                                "cabin": "COACH",
                                "bookingCode": "N",
                                "bookingCodeCount": 9,
                                "marriedSegmentGroup": "0",
                                "leg": [
                                    {
                                        "kind": "qpxexpress#legInfo",
                                        "id": "LgjyfOi03nuuOnSj",
                                        "aircraft": "757",
                                        "arrivalTime": "2017-12-26T14:38-05:00",
                                        "departureTime": "2017-12-26T06:00-08:00",
                                        "origin": "SFO",
                                        "destination": "BOS",
                                        "originTerminal": "3",
                                        "destinationTerminal": "B",
                                        "duration": 338,
                                        "onTimePerformance": 60,
                                        "mileage": 2697,
                                        "meal": "Food for Purchase",
                                        "secure": true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "pricing": [
                    {
                        "kind": "qpxexpress#pricingInfo",
                        "fare": [
                            {
                                "kind": "qpxexpress#fareInfo",
                                "id": "ANbHh060HedvNjIBoN0KZwweTwLvFEk7/Gj4M2aFdbAo",
                                "carrier": "UA",
                                "origin": "SFO",
                                "destination": "BOS",
                                "basisCode": "GAA2AHBN"
                            }
                        ],
                        "segmentPricing": [
                            {
                                "kind": "qpxexpress#segmentPricing",
                                "fareId": "ANbHh060HedvNjIBoN0KZwweTwLvFEk7/Gj4M2aFdbAo",
                                "segmentId": "Ggs-3DvUsCo4rEPF"
                            }
                        ],
                        "baseFareTotal": "USD120.00",
                        "saleFareTotal": "USD120.00",
                        "saleTaxTotal": "USD23.20",
                        "saleTotal": "USD143.20",
                        "passengers": {
                            "kind": "qpxexpress#passengerCounts",
                            "adultCount": 1
                        },
                        "tax": [
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "US_001",
                                "chargeType": "GOVERNMENT",
                                "code": "US",
                                "country": "US",
                                "salePrice": "USD9.00"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "AY_001",
                                "chargeType": "GOVERNMENT",
                                "code": "AY",
                                "country": "US",
                                "salePrice": "USD5.60"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "XF",
                                "chargeType": "GOVERNMENT",
                                "code": "XF",
                                "country": "US",
                                "salePrice": "USD4.50"
                            },
                            {
                                "kind": "qpxexpress#taxInfo",
                                "id": "ZP",
                                "chargeType": "GOVERNMENT",
                                "code": "ZP",
                                "country": "US",
                                "salePrice": "USD4.10"
                            }
                        ],
                        "fareCalculation": "SFO UA BOS 120.00GAA2AHBN USD 120.00 END ZP SFO XT 9.00US 4.10ZP 5.60AY 4.50XF SFO4.50",
                        "latestTicketingTime": "2017-11-02T23:59-04:00",
                        "ptc": "ADT"
                    }
                ]
            }
        ]
    }
}