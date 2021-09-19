# is-jpg

> Check if a Buffer/Uint8Array is a [JPEG](https://en.wikipedia.org/wiki/JPEG) image

## Install

```sh
npm install is-jpg
```

## Usage

##### Node.js

```js
import {readChunk} from 'read-chunk';
import isJpg from 'is-jpg';

const buffer = await readChunk('unicorn.jpg', {length: 3});

isJpg(buffer);
//=> true
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.jpg');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	isJpg(new Uint8Array(this.response));
	//=> true
};

xhr.send();
```

## API

### isJpg(buffer)

Accepts a `Buffer` (Node.js) or `Uint8Array`.

It only needs the first 3 bytes.

## Related

- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer/Uint8Array
