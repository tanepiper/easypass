/**
 * generate - description
 *
 * @param  {type} length description
 * @return {type}        description
 */
function generate(length, includeNumbers) {
  'use strict';

  length = length || 8;

  const vowels =  ["a", "e", "i", "o", "u"];
  const cons  =   ["b", "c", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "u", "v", "w", "tr", "cr", "br", "fr", "th", "dr", "ch", "ph", "wr", "st", "sp", "sw", "pr", "sl", "cl"];

  const num_vowels = vowels.length;
  const num_cons   = cons.length;
  let password   = '';

  for(let i = 0; i < length; i++) {
    password += cons[Math.floor(Math.random() * num_cons)] + vowels[Math.floor(Math.random() * num_vowels)];
    if (includeNumbers) {
      password += Math.floor(Math.random() * 100);
    }
  }

  return password.substr(0, length);
}

exports.generate = generate;

function batch(total, length, includeNumbers) {
  'use strict';

  const passwords = [];
  for (let i = 0; i < total; i++) {
    passwords.push(generate(length, includeNumbers));
  }

  return passwords;
}

exports.batch = batch;
