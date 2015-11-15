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
		vm.addTags = addTags;
		vm.removeTag = removeTag;

		activate();

		function activate() {
			if(vm.product && vm.product.productId){
				vm.title = 'Edit: ' + vm.product.productName;
			}else{
				vm.title = "New Product";
			}	
		}
		

		function open($event) {
			$event.preventDefault();
			$event.stopPropagation();

			vm.opened = !vm.opened;
		}

		function submit(isValid) {
			if(isValid){
				vm.product.$save(function (data){
					toastr.success("Save Successful");
				});
			}else{
				alert('Please correct the validation errors first.');
			}
		}

		function cancel() {
			$state.go('productList');
		}

		function addTags(tags) {
			if(tags){
				var array = tags.split(',');
				vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
				vm.newTags = "";
			}else{
				alert("plase enter one or more tags seperated by commas");
			}
		}

		function removeTag(idx) {
			vm.product.tags.splice(idx,1);
		}
	}	
})();