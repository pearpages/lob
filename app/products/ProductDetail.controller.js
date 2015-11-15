(function () {
	"use strict";

	angular
	.module("app")
	.controller("ProductDetailController",['product','productsService',ProductDetailController]);

	function ProductDetailController(product,productsService) {

		var vm = this;

		vm.product = product;
		vm.title = "Product Detail: " + vm.product.productName;
		vm.marginPercent = productsService.calculateMarginPercent(vm.product.price,vm.product.cost);

		activate();

		function activate() {
			if(vm.product.tags){
				vm.product.tagList = vm.product.tags.toString();
			}	
		}
		
	}	
})();