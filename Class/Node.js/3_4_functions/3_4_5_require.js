console.log("require이 가장 위에 오지 않아도 됩니다.");

module.exports = '저를 찾아보세용';

require('./var')

console.log('require.cache is...');
console.log(require.cache);
console.log('require.main is...');
console.log(require.main === module);
console.log(require.main.filename);