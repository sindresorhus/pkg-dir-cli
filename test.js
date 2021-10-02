import path from 'node:path';
import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['fixture/foo']);
	t.is(stdout, path.resolve('fixture'));
});
