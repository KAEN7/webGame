// 클릭 => 번갈아가면서 'x' or 'o' => 한줄이 됬는지 반복 => 한줄이면 승자 확인 아니면 다시 클릭

// CONST
const td = document.querySelectorAll('td');
const winLose = document.querySelector('h3');

let turn = 'X';

function clkTd(event) {
    const tdId = event.target.id;
    console.log(tdId);
    // 턴 체크
    if(event.target.innerText = ' ') {
        event.target.innerText = turn;
        if(turn === 'O') {
            turn = 'X';
        } else if(turn = 'X') {
            turn = 'O';
        }
    }
    // 줄 체크
    let winnerCheck = false;
    console.log(td[0].innerText, td[4].innerText, td[8].innerText);
    if(
        td[0].innerText === turn && 
        td[4].innerText === turn && 
        td[8].innerText === turn
        ) {
        console.log('동작되면안됨');
        winnerCheck = true;
    }
    
    if(winnerCheck === true) {
        winLose.innerText = 'WIN!!!'
    }
}


for(i=0; i<9; i++) {
    td[i].addEventListener('click', clkTd);
}