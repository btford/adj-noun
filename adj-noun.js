
var data = require('./data.json');

var ADJ_COUNT = data.adjs.length,
    NOUN_COUNT = data.nouns.length;

var adjPrime = 379,
    nounPrime = 2027,
    seed = 0,
    current = 0;

module.exports = next;
module.exports.next = next;

function next () {
  current += 1;
  return [
    data.adjs[ (seed + (current * adjPrime)) % ADJ_COUNT ],
    data.nouns[ (seed + (current * nounPrime)) % NOUN_COUNT ]
  ];
}

// these options are only configurable before
// you call `next` for the first time
module.exports.seed = function (newSeed) {
  return current === 0 && (seed = newSeed, true);
};

module.exports.adjPrime = function (newPrime) {
  return current === 0 && (adjPrime = newPrime, true);
};

module.exports.nounPrime = function (newPrime) {
  return current === 0 && (nounPrime = newPrime, true);
};
