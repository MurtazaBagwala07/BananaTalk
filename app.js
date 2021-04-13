var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');


console.log(txtInput)
function clickHandler(){
    outputDiv.innerText = "MiniMoona " + txtInput.value;
};
btnTranslate.addEventListener("click", clickHandler)
