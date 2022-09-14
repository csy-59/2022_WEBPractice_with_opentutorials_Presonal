const fs = require('fs').promises;

fs.writeFile('./newFile.txt', '나는 바보다')
    .then(() => {
        return fs.readFile('./newFile.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });