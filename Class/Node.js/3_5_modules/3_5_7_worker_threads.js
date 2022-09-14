const { clear } = require('console');
const {
    Worker, isMainThread, parentPort
} = require('worker_threads');

if(isMainThread) {
    const worker = new Worker(__filename);
    
    let timeTick = 1;
    const messageToWorker = setInterval(() => {
        worker.postMessage(timeTick);
        ++timeTick;
    }, 1000);
    
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => {
        console.log('worker exit');
        clearInterval(messageToWorker);
    });
} else {
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        if(value == 3)
        {
            parentPort.postMessage('pong');
            parentPort.close();
        }
    });
};