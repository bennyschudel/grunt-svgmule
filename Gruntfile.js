/*
 * grunt-svgmule
 * https://github.com/bennyschudel/grunt-svgmule
 *
 * Copyright (c) 2014 Benny Schudel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

      // svgmule configuration
    svgmule: {
      dev: {
        options: {
          verbose : true,
          input_dir: './example/',
          output_dir: './_build/',
          svgo: {
            full: false,
            plugins: [
              { removeTitle: true },
              { removeDimensions: true },
              { removeAttr: {
                  attrs: '(fill|color)'
              }},
            ],
          },
        },
      },
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dev', ['svgmule:dev',]);

  grunt.registerTask('default', ['jshint', 'dev']);

};
