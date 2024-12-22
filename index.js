'use strict';

//fs - file sistem

const fs = require('fs').promises;

const p = fs.readFile('./text.txt', 'utf8');
p.then(data=>console.log(data));