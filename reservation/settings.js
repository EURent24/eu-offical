'use-strict'
var cars_rosenheim = [ 1,2,3,12,5,6,7,8,9,10,11]
var settings = {
	winter_start: 11,
	winter_end: 2,
	winter_discount: 10,
    we_surcharge: 0,
	one_day_we_surcharge: 25,
    km_per_day: 150,
    locations: [
		{
			id: 1,
			plz: "86316",
            name: "Friedberg",
			street: "Winterbruckenweg 53",
            price: 400,
            cars: cars_rosenheim
        },
		{
			id: 2,
			plz: "6020",
            name: "Innsbruck",
			street: "Amraser-See-Str. 56b",
            price: 300,
            cars: cars_rosenheim
        },
		{
			id: 3,
			plz: "84034",
            name: "Landshut",
			street: "Luitpoldstraße 34",
            price: 400,
            cars: cars_rosenheim
        },
		{
			id: 4,
			plz: "85521",
            name: "Ottobrunn", 
			street: "An der Westumgehung 1",
            price: 150,
            cars: cars_rosenheim
        },
        {
			id: 5,
			plz: "83026",
            name: "Rosenheim",
			street: "Oberaustraße 34",
            price: 0,
            cars: cars_rosenheim
        },
        {
			id: 6,
			plz: "5020",
            name: "Salzburg",
			street: "Innsbrucker Bundesstr. 97",
            price: 200,
            cars: cars_rosenheim
        },
        {
			id: 7,
			plz: "6330",
            name: "Kufstein",
			street: "Oskar-Pirlo Straße 32",
            price: 150,
            cars: cars_rosenheim
        }
    ],
    /* locations: [
		{
			id: 1,
			plz: "86316",
            name: "Friedberg",
			street: "Winterbruckenweg 53",
            price: 400,
            cars: cars_rosenheim
        },
		{
			id: 2,
			plz: "85053",
            name: "Ingolstadt",
			street: "Manchinger Str. 84",
            price: 400,
            cars: cars_rosenheim
        },
		{
			id: 3,
			plz: "6020",
            name: "Innsbruck",
			street: "Amraser-See-Str. 56b",
            price: 300,
            cars: cars_rosenheim
        },
		{
			id: 4,
			plz: "84034",
            name: "Landshut",
			street: "Luitpoldstraße 34",
            price: 350,
            cars: cars_rosenheim
        },
		{
			id: 5,
			plz: "85521",
            name: "Ottobrunn", 
			street: "An der Westumgehung 1",
            price: 150,
            cars: cars_rosenheim
        },
		{
			id: 6,
			plz: "90537",
            name: "Feucht",
			street: "Wendelsteiner Str. 3-5",
            price: 600,
            cars: cars_rosenheim
        },
		{
			id: 7,
			plz: "84347",
            name: "Pfarrkirchen",
			street: "Franz-Stelzenberger-Str. 1",
            price: 350,
            cars: cars_rosenheim
        },
        {
			id: 8,
			plz: "83026",
            name: "Rosenheim",
			street: "Oberaustraße 34",
            price: 0,
            cars: cars_rosenheim
        },
        {
			id: 9,
			plz: "5020",
            name: "Salzburg",
			street: "Innsbrucker Bundesstr. 97",
            price: 200,
            cars: cars_rosenheim
        },
		{
			id: 10,
			plz: "86956",
            name: "Schongau",
			street: "Tannenberger Str. 2",
            price: 400,
            cars: cars_rosenheim
        },
		{
			id: 11,
			plz: "3100",
            name: "St. Pölten",
			street: "Mariazeller Str. 95",
            price: 900,
            cars: cars_rosenheim
        }
    ],*/
	cars: [
		{
            id: 1,
            image_url: "https://www.dc-rent.de/files/dcrent/images/ford-mustang-mieten.jpg",
            name: "Ford Mustang GT",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.s
        },
        {
            id: 2,
            image_url: "https://www.dc-rent.de/files/dcrent/images/mercedes-c63-amg-mieten.jpg",
            name: "Mercedes-AMG C63",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.s

        },
		{
            id: 3,
            image_url: "https://www.dc-rent.de/files/dcrent/images/bmw-m4-mieten.jpg",
            name: "BMW M4 competition",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.m

        },
        {
            id: 4,
            image_url: "https://www.dc-rent.de/files/dcrent/images/nissan-gtr-mieten.jpg",
            name: "Nissan GT-R",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.l
        },
        {
            id: 5,
            image_url: "https://www.dc-rent.de/files/dcrent/images/audi-rs6-mieten.jpg",
            name: "Audi RS6",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.l

        },
		{
            id: 6,
            image_url: "https://www.dc-rent.de/files/dcrent/images/mercedes-g63-amg-mieten.jpg",
            name: "Mercedes-AMG G63",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.l

        },
		{
            id: 7,
            image_url: "https://www.dc-rent.de/files/dcrent/images/bmw-x6m-mieten.jpg",
            name: "BMW X6 M Competition",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.l
        },
        {
            id: 8,
            image_url: "https://www.dc-rent.de/files/dcrent/images/audi-r8-mieten.jpg",
            name: "Audi R8 V10 performance",
            min_age: 23,
            deposit: 2500,
            insurance: 10000,
			pricing: car_prices.l
        },
		{
            id: 9,
            image_url: "https://www.dc-rent.de/files/dcrent/images/porsche-911-gt3-mieten.jpg",
            name: "Porsche 911 GT3",
            min_age: 23,
            deposit: 5000,
            insurance: 10000,
			pricing: car_prices.xl

        },
		{
            id: 10,
            image_url: "https://www.dc-rent.de/files/dcrent/images/ferrari-488-gtb-mieten.jpg",
            name: "Ferrari 488 GTB",
            min_age: 23,
            deposit: 5000,
            insurance: 10000,
			pricing: car_prices.xxxxl
		},
		{
			
            id: 11,
            image_url: "https://www.dc-rent.de/files/dcrent/images/lamborghini-huracan-mieten.jpg",
            name: "Lamborghini Huracan Spyder",
            min_age: 23,
            deposit: 5000,
            insurance: 10000,
			pricing: car_prices.xxxxl

        },
		{
            id: 12,
            image_url: "https://www.dc-rent.de/files/dcrent/images/bmw-m5-mieten.jpg",
            name: "BMW M5 competition",
            min_age: 21,
            deposit: 2500,
            insurance: 5000,
			pricing: car_prices.m

        }
		
	]
}