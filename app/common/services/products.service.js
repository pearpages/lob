(function () {
	"use strict";

	angular.module("common.services")
	.factory('productsService', productsService);

	function productsService() {

		function calculateMarginPercent(price,cost) {
			var margin = 0;
			if(price && cost){
				margin = ( 100 * (price - cost)) / price;
			}
			margin = Math.round(margin);
			return margin;
		}

		function calculateMarginAmount(price,cost) {
			var margin = 0;
			if(price && cost){
				margin = price - cost;
			}
			return margin;
		}

		function calculatePriceFromPercent(cost,percent) {
			var price = cost;
			if(cost && percent){
				price = cost + (cost * percent / 100);
				price = (Math.round(price * 100)) / 100;
			}
			return price;
		}

		function calculatePriceFromAmount(cost,amount) {
			var price = cost;
			if(cost && percent){
				price = cost + amount;
				price = (Math.round(price * 100)) / 100;
			}
			return price;
		}

		return {
			calculateMarginPercent : calculateMarginPercent,
			calculateMarginAmount: calculateMarginAmount,
			calculatePriceFromPercent : calculatePriceFromPercent,
			calculatePriceFromAmount: calculatePriceFromAmount
		};
	}
})();