## EasyPass 2

Pronounceable Password Generator for Node.js,

## Installation

npm install easypass-2

## API

    /**
     * The generate method creates a single string password of described length.
     * If you want to include numbers, set includeNumbers to true
     */
    generate(length = 8, includeNumbers = false)

    /**
     * This will generate a batch of passwords of the total number passed
     * and return them as an array of strings.  You can also set the length
     * and if they include numbers
     */
    batch(total, length, includeNumbers)

## Usage

#### ES6
```javascript
import {generate, batch} from 'easypass-2';

const newPassword = generate(12, true);
const passwords = batch(100, 12, true);

```

### ES5

```javascript
var easypass = require('easypass-2');
var newPassword = easypass.generate(12, true);
var passwords = easypass.batch(100, 12, true);
````

## Credits

Based on the [original easypass](https://github.com/inadarei/easypass) by Irakli Nadareishvili

Based on the [original algorithm by Aktagon](http://snippets.aktagon.com/snippets/137-how-to-generate-a-pronouncable-password-with-php)
