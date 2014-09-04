# adj-noun [![Build Status](https://travis-ci.org/btford/adj-noun.svg?branch=master)](https://travis-ci.org/btford/adj-noun)

Gives you a random adj-noun pair that you can use as a unique identifier.
Great for generating readable URLs.

## Install

```shell
$ npm install adj-noun
```

## Use

```javascript
var adjNoun = require('adj-noun');

// seed it so your pairs are different than someone else using this lib
adjNoun.seed(123);
// -> true

// optionally you can provide primes to adjust how words are chosen:
adjNoun.adjPrime(3);
adjNoun.nounPrime(7);

for (var i = 0; i < 10; i++) {
  // generate and log pairs
  console.log(adjNoun().join('-'));
}
// console.logs ->
//   lasting-meaning
//   numerical-excerpt
//   unresponsive-madman
//   royal-haircut
//   squeaky-schedule
//   respectable-compressor
//   northern-knife
//   shrewd-tribute
//   blank-volcano
//   rhenish-periodical

// after you start generating pairs, you cannot change the seed or primes
// otherwise you might end up with non-unique pairs
adjNoun.seed(456);
// -> false
```

## CLI

Install it globally:

```shell
$ npm install -g
```

Then you can:

```shell
$ adj-noun
royal-haircut
```

You can also specify the number of unique names to generate:

```shell
$ adj-noun 5
unlined octet
luckier gospel
wordy shading
slothful groomsmen
devotional newsletter
```

It randomly seeds between runs with `Math.random()`.


## Word list

The script for generating the word list uses [NLTK](http://www.nltk.org/).
See `scripts/data.py` for more.

## License
MIT
