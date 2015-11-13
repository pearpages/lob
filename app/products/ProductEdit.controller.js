(function () {
	angular
		.module('app')
		.controller('ProductEditController',['product','$state',ProductEditController]);

	function ProductEditController(product, $state) {
		//product gets populated in the resolve in the app.js
		var vm = this;

		vm.product = product;

		vm.open = open;

		vm.submit = submit;

		vm.cancel = cancel;

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

		function submit() {
			vm.product.$save();
		}

		function cancel() {
			$state.go('productList');
		}
	}	
})();