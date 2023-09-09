const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const divideBtn = document.querySelector('.divideBtn');
const sumbitBtn = document.querySelector('.sumbitBtn');
const resultEl = document.querySelector('.result');
let action = '+';

plusBtn.onclick = function (){
    action = '+';
}
minusBtn.onclick = function (){
    action = '-';
}
multiplyBtn.onclick = function (){
    action = '*'
}
divideBtn.onclick = function (){
    action = '/';
}

sumbitBtn.onclick = function () {
    if (action === '+'){
        const sum = Number (inputOne.value) + Number(inputTwo.value)
        console.log(sum)
        resultEl.textContent = sum;
    } else if (action === '-'){
        const sum = Number (inputOne.value) - Number(inputTwo.value)
        resultEl.textContent = sum;
    }else if (action === '*'){
        const sum = Number (inputOne.value) * Number(inputTwo.value)
        resultEl.textContent = sum;
    }else if (action === '/'){
        const sum = Number (inputOne.value) / Number(inputTwo.value)
        resultEl.textContent = sum;
    }
}
