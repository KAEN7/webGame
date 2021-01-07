const hand = document.querySelector('#hand');
const result = document.querySelector('#result');

// 문제 값
hand.innerText = '가위';
let inertvalJS = setInterval(() => {
    if(hand.innerText === '가위') {
        hand.innerText = '바위';
    } else if(hand.innerText === '바위') {
        hand.innerText = '보';
    } else if(hand.innerText === '보') {
        hand.innerText = '가위';
    }
}, 10);


// 정답 찾기
function answer() {
    const btnValue = this.innerText;
    const handValue = hand.innerText;
    if(btnValue === handValue) {
        clearInterval(inertvalJS);
        result.innerText = 'win :)';
        setTimeout(() => inertvalJS, 1000);
    } else {
        result.innerText = 'lose :(';
    }
}

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', answer);
});

// setInterval, clearTimeout, setTimeout
// Object.entries(객체) 를 사용하면 객체를 배열로
// find 배열안에 인덱스(몇번째인지)를 찾음, findIndex 인덱스 값을 찾음