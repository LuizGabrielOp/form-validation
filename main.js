const form = document.getElementById('form')
const inputs = document.querySelectorAll('.required')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i
const span = document.querySelectorAll('.span-required')

function nameValidate(){
    if(inputs[0].value.length < 3){
        alert('valor invalido')
    }else{}
}