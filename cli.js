#!/usr/bin/env node
'use strict';
var meow = require('meow');
var pkgDir = require('pkg-dir');

var cli = meow({
	help: [
		'Usage',
		'  $ pkg-dir <cwd>',
		'',
		'Examples',
		'  $ echo $PWD',
		'  /Users/sindresorhus/foo/bar',
		'  $ pkg-dir',
		'  /Users/sindresorhus/foo'
	]
});

var filepath = pkgDir.sync(cli.input[0], cli.flags);

if (filepath) {
	console.log(filepath);
	process.exit();
} else {
	process.exit(1);
}
