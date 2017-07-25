/* global describe, it, expect, beforeEach, afterEach, module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('rlab.version module', function() {
		beforeEach(module('rlab.version'));

		describe('version service', function() {
			it('should return current version', inject(function(version) {
				expect(version).toEqual('0.3');
			}));
		});
	});
});