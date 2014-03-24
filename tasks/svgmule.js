/*
 * grunt-svgmule
 * https://github.com/bennyschudel/grunt-svgmule
 *
 * Copyright (c) 2014 Benny Schudel
 * Licensed under the MIT license.
 */

'use strict';

var svgmule = require('svgmule');

var log = console.log;

module.exports = function(grunt) {

	grunt.registerMultiTask(
		'svgmule',
		'Combines and minimizes your original SVG\'s on a per folder basis into one single file each.',
		function() {

			var done = this.async();

			var options = this.options({
				verbose : false
			});

			var params = {
				config: {
					svgmule: options
				}
			};

			svgmule(params)
				.then(function(rapport, data) {
					done();
				})
				.done();

	});

};
