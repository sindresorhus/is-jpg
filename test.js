import test from 'ava';
import {readChunkSync} from 'read-chunk';
import isJpg from './index.js';

const check = filename => isJpg(readChunkSync(filename, {length: 3}));

test('detects JPEG from Buffer', t => {
	t.true(check('fixture.jpg'));
	t.true(check('fixture-imageoptim.jpg'));
	t.true(check('fixture-issue1.jpg'));
	t.true(check('fixture-tiny.jpg'));
	t.true(!check('fixture.png'));
});

test('detects JPEG from Uint8Array', t => {
	const buffer = new Uint8Array([255, 216, 255, 225, 0]);
	t.true(isJpg(buffer));
	buffer[0] = 0;
	t.true(!isJpg(buffer));
});
