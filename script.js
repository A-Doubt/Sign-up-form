const pwdInput = document.querySelector('#pwd');
const pwdInputConfirm = document.querySelector('#pwd-confirm');

pwdInput.addEventListener('input', checkPassowrdMatch);
pwdInputConfirm.addEventListener('input', checkPassowrdMatch);

const pwdMatch = document.querySelector('.pwd-match');
const pwdLength = document.querySelector('.pwd-length');

pwdMatch.textContent = 'Passwords have to match!';
pwdMatch.classList.add('invisible');

const pwdFieldset = document.querySelector('.pwd-fieldset');

// check if both password inputs match
function checkPassowrdMatch() {
    if (!pwdInput.value && !pwdInputConfirm.value) return;
    if (pwdInput.value != pwdInputConfirm.value) {
        // pwdInput.classList.add('invalid');
        // pwdInputConfirm.classList.add('invalid');
        pwdMatch.classList.remove('invisible');
        pwdFieldset.classList.add('enlarged');
    }
    else {
        // pwdInput.classList.remove('invalid');
        // pwdInputConfirm.classList.remove('invalid');
        pwdMatch.classList.add('invisible')
        pwdFieldset.classList.remove('enlarged');
    }
}

pwdInput.addEventListener('input', validatePassowrd);
pwdInputConfirm.addEventListener('input', validatePassowrd);

// check if password has at least 1 lowercase letter, 1 uppercase letter, 1 special character and is long enough.
function validatePassowrd() {
    if(pwdInput.value.length < 8 || pwdInput.value.length > 20) {

    }
    if (pwdInput.validity.valid) {
        pwdInput.classList.add('pwd-valid');
    }
    else {
        pwdInput.classList.remove('pwd-valid');
    }
}
















pwdFieldset.appendChild(pwdMatch);
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('input', validateInput);
    function validateInput() {
        if (!input.id.includes('pwd')){
            if (!input.validity.valid) {
                input.classList.add('invalid');
            }
            else {
                input.classList.remove('invalid');
            }
        }
    };
});
    


