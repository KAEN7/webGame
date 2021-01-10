document.querySelector('#exec').addEventListener('click', function() {
    let hor = parseInt(document.querySelector('#hor').value);
    let ver = parseInt(document.querySelector('#ver').value);
    let mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);

    // 지뢰 뽑기
    let ready = Array(hor * ver)
        .fill()
        .map(function(current, index) {
            return index + 1;
        });
    let shuflle = [];
    while(ready.length > 80) {
        let moveValue = ready.splice(Math.floor(Math.random() * ready.length), 1)[0];
        shuflle.push(moveValue);
    }

    let dataset = []; // 지뢰찾기판
    let tbody = document.querySelector('#table tbody');
    for(let i=0; i<ver; i++) { // 세로값
        let arr = [];
        let tr = document.createElement('tr');
        dataset.push(arr);
        for(let j=0; j<hor; j++) { // 가로값
            arr.push(1);
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = 1;
        }
        tbody.appendChild(tr);
    }
    // 지뢰 심기
    for(let k=0; k<shuflle.length; k++) { // ex 59
        let height = Math.floor(shuflle[k] / 10); // ex 5
        let width = Math.floor(shuflle[k] % 10 - 1); // ex 9 > 8
        console.log(height, width);
        tbody.children[height].children[width] = 'X';
    }
});