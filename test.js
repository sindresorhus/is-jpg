'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isJpg = require('./index');

function check(filename) {
	return isJpg(readChunk.sync(filename, 0, 4));
}

it('should detect JPEG from Buffer', function () {
	assert(check('fixture.jpg'));
	assert(check('fixture-imageoptim.jpg'));
	assert(!check('fixture.png'));
});

it('should detect JPEG from Uint8Array', function () {
	var buf = new Uint8Array([255, 216, 255, 225, 0]);
	assert(isJpg(buf));
	buf[0] = 0;
	assert(!isJpg(buf));
});
