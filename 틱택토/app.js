// 클릭 => 번갈아가면서 'x' or 'o' => 한줄이 됬는지 반복 => 한줄이면 승자 확인 아니면 다시 클릭

// CONST
const td = document.querySelectorAll('td');
const winLose = document.querySelector('h3');

// LET
let turn = 'O';

// FUNCTION
function clkTd(event) {
    const tdId = event.target.innerText;
    
    // 줄 체크
    let winnerCheck = false;

    if(
        td[0].innerText === turn && 
        td[4].innerText === turn && 
        td[8].innerText === turn
    ) {
        winnerCheck = true;
    }
    if(
        td[2].innerText === turn && 
        td[4].innerText === turn && 
        td[6].innerText === turn
    ) {
        console.log('동작되야됨');
        winnerCheck = true;
    }
    
    if(winnerCheck === true) {
        winLose.innerText = 'WIN!!!'
    }

    // 턴 체크
    if(tdId === '') {
        event.target.innerText = turn;
        if(turn === 'O') {
            turn = 'X';
        } else {
            turn = 'O';
        }
    }
}

// FOR
for(i=0; i<9; i++) {
    td[i].addEventListener('click', clkTd);
}