(function (){
	"use strict"

	angular
	.module("productResourceMock",["ngMockE2E"])
	.run(function ($httpBackend){

		var products = [
		{
			"productId" : 1,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://r.ddmcdn.com/w_600/s_f/o_1/cx_50/cy_0/cw_540/ch_360/APL/uploads/2014/07/1405106713345B029HH_12670801101197_Beagle.jpg" 
		},
		{
			"productId" : 2,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",			
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		},
		{
			"productId" : 3,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",			
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		},
		{
			"productId" : 4,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",			
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		},
		{
			"productId" : 5,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",			
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		},
		{
			"productId" : 6,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",			
			"releaseDate": "March 19, 2009",
			"description": "Leaf rake with 48-inch handle.",
			"cost": 9.00,
			"price": 19.95,
			"category": "garden",
			"tags": ["leaf","tool"],
			"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		}
		];	

		var productUrl = '/api/products';
		$httpBackend.whenGET(productUrl).respond(products);

		var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
		$httpBackend.whenGET(editingRegex).respond(function (method,url,data) {
			var product = {"productId": 0};
			var parameters = url.split('/');
			var length = parameters.length;
			var id = parameters[length - 1];

			if(id>0){
				for (var i = 0; i < products.length; i++) {
					if(products[i].productId == id){
						product = products[i];
						break;
					}
				};
			}
			return [200, product, {}];
		});

		$httpBackend.whenPOST(productUrl).respond(function (method,url,data){
			var product = angular.fromJson(data);

			if(!product.productId){
				//new porduct id
				product.porductId = products[products.length - 1].productId + 1;
				products.push(product);
			}
			else{
				//updated product
				for (var i = 0; i < products.length; i++) {
					if(products[i].productId == product.productId){
						product[i] = product;
						break;
					}
				};
			}
			return [200, product, {}];
		});

		// Pass through any requests for application files
		$httpBackend.whenGET('/app/').passThrough();
	});

})();