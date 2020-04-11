const form = document.getElementById('form');
const input = document.querySelector('.email');
const small = document.querySelector('.error-text');


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputValue = input.value;
    if(!validateEmail(inputValue)){
        input.classList.add('error');
        small.classList.add('error');
    }
    else{
        input.classList.remove('error');
        small.classList.remove('error');
        
    }
    
    
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}