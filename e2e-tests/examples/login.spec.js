/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('rlab.login module', function() {

		beforeEach(module('rlab.login'));

		describe('login controller', function() {
			it('should ....', inject(function($controller) {
				//spec body
				var loginCtrl = $controller('LoginCtrl');
				expect(loginCtrl).toBeDefined();
			}));
		});
	});
});