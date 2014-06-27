#!/usr/bin/env node

var data = require('./data.json');

with(Math) {
  console.log(data.adjs[floor(random() * data.adjs.length)],
      data.nouns[floor(random() * data.nouns.length)]);
}
