let practiceNumber = 1;

console.log(`${practiceNumber}`);
if(true)
{
    var a = 1;
}
console.log(a); // 이줄이 가장 위로 가도 정상작동함(?!)

// 여기서 오류! cosnt는 블록 스코프!
//if(true)
//{
//    const b = 2;
//}
//console.log(b);

console.log(`\n${++practiceNumber}`);
/* 템플릿 문자열: ` */
//이전 버전
var num1 = 1;
var num2 = 2;
var result1 = num1 + num2;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result1 + '\'';
console.log(string1);

//템플릿 문자열
const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);


console.log(`\n${++practiceNumber}`);
/* 객체 리터럴*/
//이전 버전
var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es+6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);
//객체 리터럴
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es+6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

console.log(`\n${++practiceNumber}`);
/* 화살표 함수 */
function add1(x,y)
{
    return x + y;
}
const add2 = (x,y) => {
    return x + y;
};
const add3 = (x, y) => x+y;
const add4 = (x,y) => (x + y);
//<< 여기까지 모두 동일한 함수

function not1(x)
{
    return !x;
}
const not2 = x => !x;
//<< 매개변수가 1개일 경우 소괄호를 생략해도 된다.

/* this 바인드 */
//이전 버전
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

//this 바인드
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

console.log(`\n${++practiceNumber}`);
/* 구조분해 할당 */
//이전 버전
//var candyMachine = {
//    status: {
//        name: 'node',
//        count: 5,
//    },
//    getCandy: function() {
//        this.status.count--;
//        return this.status.count;
//    },
//};
//var getCandy = candyMachine.getCandy;
//var count = candyMachine.status.count;

//구조분해 할당
const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status: {count}} = candyMachine;
console.log(candyMachine.status);

//var array = ['node.js', {}, 10, true];
//var node = array[0];
//var obj = array[1];
//var bool = array[3];

const array1 = ['node.js', {}, 10, true];
const [node, obj, ten, bool] = array1;
console.log(node);

console.log(`\n${++practiceNumber}`);
/* 클래스 */
//이전 버전
//var Human = function(type) {
//    this.type = type || 'human';
//};
//Human.isHuman = function(human) {
//    return human instanceof Human;
//}
//Human.prototype.breathe = function() {
//    alert('h-a-a-a-m');
//};
//
//var Zero = function(type, firstName, lastName) {
//    Human.apply(this, arguments);
//    this.firstName = firstName;
//    this.lastName = lastName;
//}
//Zero.prototype = Object.create(Human.prototype);
//Zero.prototype.constructor = Zero;
//Zero.prototype.sayName = function() {
//    alert(this.firstName + ' ' + this.lastName);
//};
//var oldZero = new Zero('human', 'Zero', 'Cho');
//Human.isHuman(oldZero);
//클래스 기반
class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName)
    {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        //alert(`${this.firstName} ${this.lastName}`);
    }
}
const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);