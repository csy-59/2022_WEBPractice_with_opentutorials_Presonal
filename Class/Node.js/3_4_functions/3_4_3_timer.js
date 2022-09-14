const timeout = setTimeout(() => { // 3
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(()=>{ // 2, 4
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => { // 5
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => { // 1
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => { // 0
    console.log('실행되지 않음');
});

clearImmediate(immediate2); // 0-1