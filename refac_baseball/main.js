// get random numbers 
function getRandNum() {
    const min = 1;
    const max = 9;
    let arr = [];
    while (arr.length !== 3) {
        let n = Math.floor(Math.random() * max) + min;
        if (arr.includes(n)) {
            n = Math.floor(Math.random() * max) + min;
        } else {
            arr.push(n);
        }
    }
    return arr;
}

// check error
function isNum(n) {
    if (isNaN(n) || n > 9 || n < 1) {
        alert('1~9 사이의 서로 다른 숫자를 입력하세요.');
    }
    return n;
}

// get input value
function input() {
    let inputNum = [];
    inputNum.push(isNum(Number(inputNum1.value)));
    inputNum.push(isNum(Number(inputNum2.value)));
    inputNum.push(isNum(Number(inputNum3.value)));

    if (inputNum[0] === inputNum[1] || inputNum[0] === inputNum[2] || inputNum[1] === inputNum[2]) {
        alert('겹치지 않는 숫자를 입력하세요.');
    }
    return inputNum;
}

// check strikes
function checkStrikes(arr1, arr2) {
    let strike = 0
    for (let i = 0; i < 3; i++) {
        if (arr1[i] === arr2[i]) {
            strike++;
        }
    }
    return strike;
}

// check balls
function checkBalls(arr1, arr2) {
    let ball = 0
    for (let i = 0; i < 3; i++) {
        if (arr1[i] != arr2[i] && arr1.includes(arr2[i])) {
            ball++;
        }
    }
    return ball;
}

// timer
function startTimer() {
    let seconds = 0;
    timer = setInterval(function () {
        seconds++;
        document.getElementById("timeCheck").innerText = seconds + '초 경과';
    }, 1000);
}

// game
const ref = getRandNum();
console.log('컴퓨터 숫자는 ' + ref);
startTimer();

function game() {
    const userNum = input();
    const strike = checkStrikes(userNum, ref);
    const ball = checkBalls(userNum, ref);
    console.log('스트라이크 ' + strike + '개' + '     볼 ' + ball + '개');

    if (strike !== 3) {
        document.getElementById('result').innerHTML = '스트라이크 ' + strike + '개' + '     볼 ' + ball + '개' + '<br>' + '숫자를 다시 입력하세요!';
    } else {
        clearInterval(timer);
        document.getElementById('result').innerHTML = '게임 끝! YOU WIN!'
    }
}