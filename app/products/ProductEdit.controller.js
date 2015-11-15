(function () {
	angular
	.module('app')
	.controller('ProductEditController',['product','$state','productsService',ProductEditController]);

	function ProductEditController(product, $state,productsService) {
		//product gets populated in the resolve in the app.js
		var vm = this;

		vm.product = product;
		vm.open = open;
		vm.submit = submit;
		vm.cancel = cancel;
		vm.addTags = addTags;
		vm.removeTag = removeTag;
		vm.priceOption = 'percent';
		vm.marginPercent = calculateMarginPercent;
		vm.calculatePrice = calculatePrice;

		activate();

		function activate() {
			if(vm.product && vm.product.productId){
				vm.title = 'Edit: ' + vm.product.productName;
			}else{
				vm.title = "New Product";
			}	
		}
		
		function calculateMarginPercent() {
			return productsService.calculateMarginPercent(vm.product.price,vm.product.cost);
		}

		function calculatePrice () {
			var price = 0;

			if(vm.priceOption == 'amount'){
				price = productsService.calculatePriceFromAmount(vm.product.cost,vm.markupAmount);
			}else if(vm.priceOption == 'percent'){
				price = productsService.calculatePriceFromPercent(vm.product.cost,vm.markupPercent);
			}

			vm.product.price = price;
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