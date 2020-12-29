// SELECTOR
const resultHeader = document.querySelector('.resultJs');
const input = document.querySelector('.inputJs');
const btn = document.querySelector('.inputBtn');

// 배열.join('') -> 문자
// 문자.split('') -> 배열

//LET
let numbers;

let numberArray;

// FUNCTION
function randomNumber() {
    numbers = [1,2,3,4,5,6,7,8,9];

    numberArray = [];

    for (let i = 0; i < 4; i += 1) {
        let result = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numberArray.push(result);
    }

    console.log(numberArray.join(''));
}
randomNumber();

function resetInput() {
    input.value = '';
    input.focus();
}

function maxLengthCheck(object) {
    if(object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}

function testNumber(event) {
    event.preventDefault();
    const answer = input.value;
    if(numberArray.join('') === answer) { // 홈런일때
        resultHeader.innerText = '홈런!!!'
        resetInput();
        randomNumber();
    } else { // 홈런이 아닐때
        let resultArray = answer.split(''); // split는 string을 여러개의 문자열로 나눔
        let strike = 0;
        let ball = 0;
        for(let i = 0; i < 3; i++) {
            if(Number(resultArray[i]) === numberArray[i]) {
                strike += 1;
            } else if(numberArray.indexOf(Number(resultArray[i])) > -1) { // 배열.indexOf(값) 하면 값의 위치를 알 수 있음, 없으면 -1
                ball += 1;
            }
        }
        input.value = '';
        input.focus();
        resultHeader.innerText = `${strike}S ${ball}B`;
        const out = `${0}S ${0}B`;
        if(out === resultHeader.innerText) {
            resultHeader.innerText = 'OUT!';
        }
    }
}

// if
if(btn) {
    btn.addEventListener('click', testNumber);
}
