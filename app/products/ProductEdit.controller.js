(function () {
	angular
		.module('app')
		.controller('ProductEditController',['product',ProductEditController]);

	function ProductEditController(product) {
		//product gets populated in the resolve in the app.js
		var vm = this;

		vm.product = product;

		if(vm.product && vm.product.productId){
			vm.title = 'Edit: ' + vm.product.productName;
		}else{
			vm.title = "New Product";
		}
	}	
})();