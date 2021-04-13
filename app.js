var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector('#txt-input');
console.log(txtInput)
function clickHandler(){
    console.log("Clicked");
    console.log("input",txtInput.value);
};
btnTranslate.addEventListener("click", clickHandler)
