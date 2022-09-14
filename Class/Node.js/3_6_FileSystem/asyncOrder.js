const fs = require('fs').promises;

fs.readFile('./readme.txt')
.then((data) => {
    console.log('시작');
    console.log(`1: ${data}`);
    return fs.readFile('./readme.txt')
})
.then((data) => {
    console.log(`2: ${data}`);
    return fs.readFile('./readme.txt')
})
.then((data) => {
    console.log(`3: ${data}`);
    console.log('끝');
    return fs.readFile('./readme.txt')
})