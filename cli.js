#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkgDir = require('pkg-dir');

const cli = meow(`
	Usage
	  $ pkg-dir <cwd>

	Examples
	  $ echo $PWD
	  /Users/sindresorhus/foo/bar
	  $ pkg-dir
	  /Users/sindresorhus/foo
`);

const filepath = pkgDir.sync(cli.input[0]);

if (filepath) {
	console.log(filepath);
	process.exit();
} else {
	process.exit(1);
}
