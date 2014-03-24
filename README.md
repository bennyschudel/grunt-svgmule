# grunt-svgmule

> Grunt task for [svgmule](https://github.com/bennyschudel/grunt-svgmule).

Combines and minimizes your original SVG's on a per folder basis into one single file each.


## Getting started

install and save dependencies
```shell
npm install grunt-svgmule --save-dev
```

enable it in Gruntfile.js
```js
grunt.loadNpmTasks('grunt-svgmule');
```


## The "svgmule" task

### Overview
In your project's Gruntfile, add a section named `svgmule` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svgmule: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

Please check [defaults.yml](https://github.com/bennyschudel/node-svgmule/blob/master/lib/defaults.yml) for a list of available options. You can find defaults.yml within your local node_modules/svgmule/lib/ folder.


## About

Feedback welcome! Contact me [@bennyschudel](https://github.com/bennyschudel) or follow me on [twitter](http://twitter.com/bennyschudel).


Copyright (c) 2014 Benny Schudel - [MIT-License](https://raw.github.com/bennyschudel/grunt-svgmule/master/LICENSE)