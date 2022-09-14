const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme.txt');
console.log(`1: ${data}`);
data = fs.readFileSync('./readme.txt');
console.log(`2: ${data}`);
data = fs.readFileSync('./readme.txt');
console.log(`3: ${data}`);
console.log('끝');