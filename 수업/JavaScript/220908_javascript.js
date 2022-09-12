// 바보 가위바위보: 컴퓨터는 문제를 제안하고, 2초 안에 정답을 말해야 되는 게임

const isGameOver = false
const rockScissorsPaper = ['가위', '바위', '보'];
while(!isGameOver) {
    const number = Math.floor(Math.random() * 3);
    console.log(rockScissorsPaper[number]);
    const answerNumber = (number + 1) % 3;

    const question = new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(answerNumber);
        }, 2500);

        const answer = prompt('정답은?>> ');
        if(answer === rockScissorsPaper[answerNumber]) {
            clearTimeout(timeoutId);
            resolve();
        } else {
            clearTimeout(timeoutId);
            reject(answerNumber);
        }
    });


    question.
    then ( () => {console.log("맞았습니다!");})
    .catch ( (answer) => { console.log(`틀렸습니다! 정답은 ${rockScissorsPaper[answer]}`)});
}