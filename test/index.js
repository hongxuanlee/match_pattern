const {
  matchPattern
} = require('../src');
const assert = require('assert');

describe('testUtil', () => {
  it('matchPattern: base', () => {
    assert(matchPattern('s', '*'));
    assert(matchPattern('s', 's'));
    assert(matchPattern('abc', 'abc'));
    assert(!matchPattern('abc', 'ab'));
    assert(!matchPattern('abc', 'b*'));
    assert(matchPattern('s', '**'));
    assert(matchPattern('https://developer.chrome.com/extensions/match_patterns', '*://developer.chrome.com/*'));
  });
  
  it('matchPattern: base2', () => {
    assert(matchPattern('mississippi', 'm*issip*'));
    assert(matchPattern('ac', '*ac'));
    assert(matchPattern('acbded', '*ac*'));
    assert(!matchPattern('acbuusded', '*ac*e'));
    assert(matchPattern('mail.google.com', '*.google.com'));
    assert(matchPattern('a.news.google.com', '*.google.com'));
    assert(matchPattern('abcdacde', '*ac*e'));
    assert(!matchPattern('abcdacde', 'a*b*c*f'));
  });

  it("matchPattern: error", () => {
    assert.throws(() => matchPattern(1, '*'), TypeError);
  })

});
