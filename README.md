# Make UUID
This module generates random string or identifier.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save make-uuid
```
    
```js

const makeUuid = require('make-uuid');

console.log( makeUuid(2 ) ); // return a string like this 'uK'

console.log( makeUuid(20 ) ); // return a string like this 'NGPUYkGjBgezjnaGGbBD'
```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).