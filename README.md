# match_pattern

### install 

```
   npm install wildcard-pattern
```

### usage 

```js
  const {
    matchPattern
  } = require('wildcard-pattern');
  matchPattern('mail.google.com', '*.google.com') // true
  matchPattern('mail.google.com', 'google.com') // false
```
