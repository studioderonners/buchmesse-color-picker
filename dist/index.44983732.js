const MAIN = document.querySelector("main");
let inputs = document.querySelectorAll("input");
const BTN_SUBMIT = document.querySelector("#btn-submit");
const BTN_RANDOM = document.querySelector("#btn-random");
for (let [i, input] of document.querySelectorAll('input[type="range"]').entries()){
    let rangeValues = ()=>{
        document.querySelectorAll(".input-value")[i].innerHTML = updateValue(i);
    };
    updateValue = (n)=>{
        return inputs[n].value;
    };
    hslBackground = ()=>{
        return MAIN.style.backgroundColor = `hsl(${updateValue(0)}, ${updateValue(1)}%, ${updateValue(2)}%)`;
    };
    window.onload = rangeValues(), hslBackground();
    input.addEventListener("input", ()=>{
        hslBackground(), rangeValues();
    });
}

//# sourceMappingURL=index.44983732.js.map
