const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorEle = document.getElementById('error');


document.addEventListener('submit',(e)=>{
    messages = [];
    if(name.value === '' || name.value === null){
        messages.push('name is required')
    }
    if(password.value.length <= 5 ){
        messages.push('passwrod should be more than 6 charecters ')
    }
    if(password.value >= 20 ){
        messages.push('passwrod should be less than 20 charecters ')
    }
    if(password.value === 'password' ){
        messages.push('passwrod can not be password')
    }
    if(messages > 0 ){
        e.preventDefault()
        errorEle.innerText = messages.join(', ')
    }

})