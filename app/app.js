(function (){
	"use strict";
	angular
	.module('app',['common.services','ui.router','productResourceMock'])
	.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('home',{
				url : '/',
				templateUrl: 'app/welcomeView.html'
			})
			//products
			.state('productList',{
				url: '/products',
				templateUrl: 'app/products/productListView.html',
				controller: 'ProductListController as vm'
			})
			.state('productEdit',{
				url: '/products/edit/:productId',
				templateUrl: 'app/products/productEditView.html',
				controller: 'ProductEditController as vm'
			});
			$urlRouterProvider.otherwise('/');
	}]
	);
})();