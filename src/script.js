import hsl23 from './lib/campagne-23.json';
import hsl24 from './lib/campagne-24.json';

const MAIN = document.querySelector('main');
const FORM = document.querySelector('form');
const SWITCH = document.querySelector('#btn-switch');
const RANDOM = document.querySelector('#btn-random');
let INPUTS = document.querySelectorAll('input');



for (let [i, input] of document.querySelectorAll('input[type="range"]').entries()) {

  let rangeValues = () => { document.querySelectorAll('.input-value')[i].innerHTML = updateValue(i); }
  updateValue = (n) => { return INPUTS[n].value; }
  hslBackground = () => { return MAIN.style.backgroundColor = `hsl(${updateValue(0)}, ${updateValue(1)}%, ${updateValue(2)}%)` }

  window.onload = rangeValues(), hslBackground();
  input.addEventListener('input', () => { hslBackground(), rangeValues(); });
}

function switchColor(hsl) {
  for (let [i, input] of document.querySelectorAll('input[type="range"]').entries()) {

    input.min = hsl[i].min;
    input.max = hsl[i].max;
    input.value = hsl[i].value;

    let rangeValues = () => { document.querySelectorAll('.input-value')[i].innerHTML = updateValue(i); }
    updateValue = (n) => { return INPUTS[n].value; }
    hslBackground = () => { return MAIN.style.backgroundColor = `hsl(${updateValue(0)}, ${updateValue(1)}%, ${updateValue(2)}%)` }

    rangeValues();
    hslBackground();
  }
}

SWITCH.addEventListener("click", function () {
  if (FORM.classList.contains('campagne-23')) {
    switchColor(hsl24)
    FORM.classList.remove('campagne-23');
    FORM.classList.add('campagne-24');
  } else if (FORM.classList.contains('campagne-24')) {
    switchColor(hsl23)
    FORM.classList.remove('campagne-24');
    FORM.classList.add('campagne-23');
  }
});

RANDOM.addEventListener("click", function (e) {
  e.preventDefault();
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  function randomOutput(hsl) {
    let randArray = [];
    for (let [i, v] of hsl.entries()) {
      let rand = random(hsl[i].min, hsl[i].max);
      document.querySelectorAll('input')[i].value = rand;
      document.querySelectorAll('.input-value')[i].innerHTML = rand;
      randArray.push(rand)
    }
    MAIN.style.backgroundColor = `hsl(${randArray[0]}, ${randArray[1]}%, ${randArray[2]}%)`
  }
  if (FORM.classList.contains('campagne-23')) {
    randomOutput(hsl23)
  } else if (FORM.classList.contains('campagne-24')) {
    randomOutput(hsl24)
  }
});