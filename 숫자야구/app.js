// SELECTOR
const result = document.querySelector('.resultJs');
const input = document.querySelector('.inputJs');
const btn = document.querySelector('.inputBtn');

// LET
let numbers = [1,2,3,4,5,6,7,8,9];

let numberArray = [];

for (let i = 0; i < 4; i += 1) {
    let result = numbers.splice(Math.floor(Math.random() * (9 -i)), 1)[0];
    numberArray.push(result);
}

console.log(numberArray.join(''));

// 배열.join('') -> 문자
// 문자.split('') -> 배열

// FUNCTION
function maxLengthCheck(object) {
    if(object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
    }
}

function testNumber(event) {
    event.preventDefault();
    const answer = input.value;
    if(numberArray.join('') === answer) {
        result.innerText = '홈런!!!'
    } else if(numberArray[i] === answer[i]) {
        if() {
            
        }
    }
}

// if
if(btn) {
    btn.addEventListener('click', testNumber);
}