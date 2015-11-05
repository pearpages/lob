(function () {
	"use strict";
	angular.module("app")
	.controller("ProductListController", ['productResource',ProductListController]);

	function ProductListController(productResource){
		
		var vm = this;
		
		vm.showImage = false;
		vm.products = [];
		vm.toggleImage = toggleImage;

		activate();

		function activate() {
			productResource.query(function (data) {
				vm.products = data;
			});
		};

		function toggleImage() {
			vm.showImage = !vm.showImage;
		}

		// function getProducts() {
		// 	return [
		// 	{
		// 		"productId" : 1,
		// 		"productName": "Leaf Rake",
		// 		"productCode": "GDN-0011",
		// 		"releaseDate": "March 19, 2009",
		// 		"description": "Leaf rake with 48-inch handle.",
		// 		"cost": 9.00,
		// 		"price": 19.95,
		// 		"category": "garden",
		// 		"tags": ["leaf","tool"],
		// 		"imageUrl": "http://r.ddmcdn.com/w_600/s_f/o_1/cx_50/cy_0/cw_540/ch_360/APL/uploads/2014/07/1405106713345B029HH_12670801101197_Beagle.jpg" 
		// 	},
		// 	{
		// 		"productId" : 2,
		// 		"productName": "Leaf Rake",
		// 		"productCode": "GDN-0011",			
		// 		"releaseDate": "March 19, 2009",
		// 		"description": "Leaf rake with 48-inch handle.",
		// 		"cost": 9.00,
		// 		"price": 19.95,
		// 		"category": "garden",
		// 		"tags": ["leaf","tool"],
		// 		"imageUrl": "http://www.petsandparasites.org/images/uploads/images/Mixed_Breed_Puppy_Four_Months.jpg" 
		// 	}
		// 	];	
		// }
		

	}
})();