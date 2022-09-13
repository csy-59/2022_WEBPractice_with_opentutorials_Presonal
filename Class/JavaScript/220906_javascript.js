function sayHello(name) {
    console.log(`Hello, ${name}`);
}

sayHello('Mike');

function sayHello1(name)
{
    console.log(name); // undefined; >> 즉 false이다.
    let message = 'Hello';
    if(name)
    {
        message += `, ${name}`;
    }
    console.log(message);
}

sayHello1();

function sayHello2(name)
{
    let newName = name || 'Firend';
    let message = `Hello, ${newName}`;
    console.log(message);
}

sayHello2(); // name을 얻지 못함. Hello만 출력

function add(num1, num2) {
	return num1 + num2; // 해당 값을 반환함
}

const result = add(2, 3);
console.log(result); // 5

//function showError() {
//    alert('에러가 발생했습니다.');
//}
//const errorResult = showError();
//console.log(errorResult);

const superman = {
    name : 'clark',
    age: 33,
}

console.log(superman.birthDay);

function makeObject(name, age) {
    return {
        name: name,
        age: age,
        hobby: 'football'
    };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);

function isAdult(user)
{
    if(!('age' in user) || user.age < 20){
        return false;
    }

    return true;
}

const Max = {
    name: 'Max',
    age: 30
};

const Jane = {
    name: 'Jane',
}

console.log(isAdult(Max));
console.log(isAdult(Jane));

const car = {
    wheels: 4,
    drive() {
        console.log("drive...");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

bmw.__proto__ = car;

const Bmw = function (color) {
    this.color = color;
};

//Bmw.prototype.wheels = 4;
//Bmw.prototype.drive = function() {
//    console.log("drive...");
//};
//Bmw.prototype.navigation = 1;
//Bmw.prototype.stop = function() {
//    console.log("Stop!");
//};

Bmw.prototype = {
    constructor: Bmw,
    wheels: 4,
    drive() {
        console.log('drive...');
    },
    navigation: 4,
    stop() {
        console.log('drive...');
    },
}

const x5 = new Bmw('red');
const x3 = new Bmw('blue');