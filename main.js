const form = document.getElementById('form')
const inputs = document.querySelectorAll('.required')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/i;
const span = document.querySelectorAll('.span-required')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    emailValidate()
    passwordValidate()
    repeatPassValidate()
})

function setError(index){
    inputs[index].style.border = '2px solid #FF0000'
    span[index].style.display = 'block'
}

function noError(index){
    inputs[index].style.border = 'none'
    span[index].style.display = 'none'
}

function nameValidate(){
    if(inputs[0].value.length < 3){
        setError(0);
    }else{
        noError(0);
    }
}

function emailValidate(){
    if(emailRegex.test(inputs[1].value)){
        noError(1);
    }else{
        setError(1);
    }
}

function passwordValidate(){
    if(inputs[2].value.length < 8){
        setError(2);
    }else{
        noError(2);
    }
}
function repeatPassValidate(){
    if(inputs[3].value == inputs[2].value){
        noError(3);
    }else{
        setError(3);
    }
}