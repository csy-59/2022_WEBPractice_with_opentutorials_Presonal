const fs = require('fs');

console.log("시작");
fs.readFile('readme.txt', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(`1: ${data}`);
});
fs.readFile('readme.txt', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(`2: ${data}`);
});
fs.readFile('readme.txt', (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(`3: ${data}`);
});
console.log('끝');