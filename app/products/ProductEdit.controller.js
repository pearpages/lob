(function () {
	angular
		.module('app')
		.controller('ProductEditController',['product',ProductEditController]);

	function ProductEditController(product) {
		//product gets populated in the resolve in the app.js
		var vm = this;

		vm.product = product;

		vm.open = open;

		if(vm.product && vm.product.productId){
			vm.title = 'Edit: ' + vm.product.productName;
		}else{
			vm.title = "New Product";
		}

		function open($event) {
			$event.preventDefault();
			$event.stopPropagation();

			vm.opened = !vm.opened;
		}
	}	
})();