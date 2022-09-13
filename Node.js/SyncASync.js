const fs = require('fs');

//readFileSync
console.log("Sync >>>>>>>>>>>>>>>>>")
console.log('[파일 읽기 시작]');
const result = fs.readFileSync('./Node.js/sample.txt', 'utf8');
console.log(result);
console.log('[파일 읽기 끝]');

//readFile
console.log("\nAsync >>>>>>>>>>>>>>>>>")
console.log('[파일 읽기 시작]');
fs.readFile('./Node.js/sample.txt', 'utf8', (err, result) => {
    console.log(result);
});
console.log('[파일 읽기 끝]');