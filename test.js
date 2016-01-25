'use strict';
var test = require('ava');
var childProcess = require('child_process');

test.cb(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['--cwd=fixture'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.ifError(err);
		t.is(stdout.trim(), __dirname);
		t.end();
	});
});
