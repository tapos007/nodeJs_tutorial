
const os = require('os');
const fs = require('fs');
const test = require('./test.js');
var _ = require('lodash');


var numbers = [2,5,7,6];

// console.log(myOs.cpus());
//
// console.log(os.userInfo());
//
// fs.appendFile('message.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
//
// console.log(module);

console.log(test.sum);
console.log(test.add(4,7));
console.log(_.isString("hello world"));
console.log(_.isString(1));
console.log(_.shuffle(numbers));
