#!/usr/bin/env node

var data = require('./data.json');
var adjNoun = require('./adj-noun');

var items = parseInt(process.argv[2], 10) || 1;

with(Math) {
  adjNoun.seed(floor(random() * data.adjs.length * data.nouns.length));

  for (var i = 0; i < items; i++) {
    console.log(adjNoun.next().join(' '));
  }
}
