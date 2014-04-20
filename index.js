'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 255 &&
		buf[1] === 216 &&
		buf[2] === 255 &&
		(buf[3] === 224 || buf[3] === 225);
};
