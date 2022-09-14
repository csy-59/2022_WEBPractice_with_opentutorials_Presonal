var relationship1 = { // 호이스팅에 의해서 앞에서 잡히게 된다.
    name : 'zero',
    friends: ['nero', 'hero', 'xero'],

    logFriends : function() {
        var that = this; // 하지만 this는 런타임에서 주소를 가리킴.
        //이 시간적 차이로 this가 다른 것을 가리키게 된다.
        this.friends.forEach(function (friend) { 
            //여기에서의 this는 relationship1을 가리킴
            console.log(that.name, friend);
            //여기에서 만약 this.name을 했다면 undefined가 뜸.
            //반복문 안쪽을 this로 잡기 때문
        });
    },
};

const relationship2 = {
    name : 'zero',
    firends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.firends.forEach(friend => { 
            // 화살표 함수를 썻기 때문에 바깥 스코프인 this를 물려받아 사용할 수 있게 되었다.
            console.log(this.name, friend);
        });
    },
};