/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('rlab.benchmark module', function() {

		beforeEach(module('rlab.benchmark'));

		describe('benchmark controller', function(){

			it('should ....', inject(function($controller) {
			//spec body
			var benchmarkCtrl = $controller('BenchmarkCtrl', { $scope: {} });
			expect(benchmarkCtrl).toBeDefined();
		}));

		});
	});
});