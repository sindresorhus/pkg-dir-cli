#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {packageDirectorySync} from 'pkg-dir';

const cli = meow(`
	Usage
	  $ pkg-dir <cwd>

	Examples
	  $ echo $PWD
	  /Users/sindresorhus/foo/bar
	  $ pkg-dir
	  /Users/sindresorhus/foo
`, {
	importMeta: import.meta,
});

const filePath = packageDirectorySync({cwd: cli.input[0]});

if (filePath) {
	console.log(filePath);
} else {
	process.exitCode = 1;
}
