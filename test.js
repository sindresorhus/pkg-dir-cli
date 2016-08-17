import path from 'path';
import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(await execa.stdout('./cli.js', ['fixture/foo']), path.resolve('fixture'));
});
