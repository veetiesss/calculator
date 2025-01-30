const ac = document.querySelector('#ac');
const change = document.querySelector('#change');
const percent = document.querySelector('#percent');
const divide = document.querySelector('#divide');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const multiply = document.querySelector('#multiply');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const plus = document.querySelector('#plus');
const nulll = document.querySelector('#null');
const point = document.querySelector('#point');
const equal = document.querySelector('#equal');
const result = document.querySelector('#result');


const acvalue = '';
const changevalue = -1;
const percentvalue = 0.01;
const dividevalue = '/';
const multiplyvalue = '*';
const minusvalue = '-';
const plusvalue = '+';
const pointvalue = '.';
const equalvalue = '=';
const onevalue = 1;
const twovalue = 2;
const threevalue = 3;
const fourvalue = 4;
const fivevalue = 5;
const sixvalue = 6;
const sevenvalue = 7;
const eightvalue = 8;
const ninevalue = 9;
const nullvalue = 0;

one.addEventListener('click', () => {
  result.value += onevalue;
});
two.addEventListener('click', () => {
  result.value += twovalue;
});
three.addEventListener('click', () => {
  result.value += threevalue;
});
four.addEventListener('click', () => {
  result.value += fourvalue;
});
five.addEventListener('click', () => {
  result.value += fivevalue;
});
six.addEventListener('click', () => {
  result.value += sixvalue;
});
seven.addEventListener('click', () => {
  result.value += sevenvalue;
});
eight.addEventListener('click', () => {
  result.value += eightvalue;
});
nine.addEventListener('click', () => {
  result.value += ninevalue;
});
nulll.addEventListener('click', () => {
  result.value += nullvalue;
});
point.addEventListener('click', () => {
  result.value += pointvalue;
});
ac.addEventListener('click', () => {
  result.value = acvalue;
});
change.addEventListener('click', () => {
  result.value *= changevalue;
});
percent.addEventListener('click', () => {
  result.value *= percentvalue;
});
divide.addEventListener('click', () => {
  result.value += dividevalue;
});
multiply.addEventListener('click', () => {
  result.value += multiplyvalue;
});
minus.addEventListener('click', () => {
  result.value += minusvalue;
});
plus.addEventListener('click', () => {
  result.value += plusvalue;
});
equal.addEventListener("click", () => {
    result.value = Function("return " + result.value)();
});
