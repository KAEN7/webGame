// 클릭 => 번갈아가면서 'x' or 'o' => 한줄이 됬는지 반복 => 한줄이면 승자 확인 아니면 다시 클릭
const td = document.querySelectorAll('td');

function clkTd(event) {
    const tdId = event.target.id;
    console.log(tdId);
}

for(i=0; i<9; i++) {
    td[i].addEventListener('click', clkTd);
}