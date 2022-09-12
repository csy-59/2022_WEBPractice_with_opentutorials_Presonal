const condition = true;
const promise = new Promise((resolve, reject) => { // resolve와 reject는 함수임
	if(condition) { resolve('성공');} // 외부의 condition이 true이면 실행
	else { reject('실패'); }
});

//promise
//	.then((message) => { console.log(message); }) // 성공시 실행
//	.catch((error) => { console.error(error); }) // 실패 시 실행
//	.finally(() => { console.log('무조건'); }); // 끝나고 무조건 실행 

promise
.then((message) => {
    return new Promise((resolve, reject) =>{
      //if(!condition)
      //    resolve(message1);
      //else
      //    reject("호짜");
      resolve('호짜');
    })
})
.then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        if(!condition)
                resolve(message2);
        else
            reject("메롱");
    });
})
.then((message3) => {
    console.log(message3);
})
.catch((error) => {
    console.log(`나는 빡빡이다 그리고 ${error}`);
})

//function findAndSaveUser(Users) {
//    Users.findOne({}, (err, user) => {
//        if(err) {
//            return console.error(err);
//        }
//        user.name = 'zero';
//        user.save((err) => {
//            if(err) {
//                return console.error(err);
//            }
//            Users.findOne({gender: 'm'}, (err, user) => {
//
//            });
//        });
//    });
//}

function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({gender: 'm'});
    })
    .then((user) => {

    })
    .catch(err => {
        console.error(err);
    });
}

async function findAndSaveUser(Users) {
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender: 'm'});
    } catch (error) {
        console.error(error);
    }
}

async function findAndSaveUser(Users) {[
    // 생략
]}
findAndSaveUser().then(() => {});
//혹은
async function other() {
    const result = await findAndSaveUser();
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });