var assert = require('assert')
var adjNoun = require('./adj-noun');

assert(adjNoun.seed(123));

assert(adjNoun.adjPrime(3));
assert(adjNoun.nounPrime(7));

assert.deepEqual(adjNoun(), [ 'lasting', 'streamside' ]);

assert(adjNoun.seed(456) === false);
