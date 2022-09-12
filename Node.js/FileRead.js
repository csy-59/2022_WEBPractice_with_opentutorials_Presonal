const fs = require('fs');
fs.readFile('../Node.js/sample.txt', 'utf8', function(err, data) {
    //if(err) throw err;
    console.log(data);
});
