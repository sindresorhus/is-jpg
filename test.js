import test from 'ava';
import readChunk from 'read-chunk';
import m from '.';

const check = filename => m(readChunk.sync(filename, 0, 3));

test('detects JPEG from Buffer', t => {
	t.true(check('fixture.jpg'));
	t.true(check('fixture-imageoptim.jpg'));
	t.true(check('fixture-issue1.jpg'));
	t.true(check('fixture-tiny.jpg'));
	t.true(!check('fixture.png'));
});

test('detects JPEG from Uint8Array', t => {
	const buf = new Uint8Array([255, 216, 255, 225, 0]);
	t.true(m(buf));
	buf[0] = 0;
	t.true(!m(buf));
});
