There is an issue with Gulp and MacOS/Node v11. When trying to start this project via `gulp` command, you may catch an error like this:
```js
fs.js:25
'use strict';
^

ReferenceError: internalBinding is not defined
```

If you will catch this error, please follow [this](https://github.com/gulpjs/gulp/issues/2246#issuecomment-435646661) instructions.
