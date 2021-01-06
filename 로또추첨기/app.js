const resultBar = document.querySelector('.resultBar');
const bonusBar = document.querySelector('.bonusBar');

// 숫자 생성
let numbers = [];

for(let i=1; i<46; i++) {
    numbers.push(i);
}

let maping = numbers.map(function(i, index) {
    return index + 1;
});

// 숫자 섞기
let shuffle = [];

while(maping.length>0) {
    let moveValue = maping.splice(Math.floor(Math.random() * maping.length), 1)[0]; // 이동값
    // Math.random은 실제로 완벽한 랜덤이 아님 ㅇㅋ?
    shuffle.push(moveValue);
}

// 결과 값
let bonus = shuffle[shuffle.length - 1];
let lottoArray = shuffle.slice(0, 6);
let lotto = lottoArray.sort((a,b) => a - b);

for(i=0; i<lotto.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerText = lotto[i];
    newDiv.classList = lotto[i];
    resultBar.append(newDiv);
}

bonusBar.innerText = shuffle[shuffle.length - 1];