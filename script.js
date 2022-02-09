// get password inputs DOM and add listeners
const pwdInput = document.querySelector('#pwd');
const pwdInputConfirm = document.querySelector('#pwd-confirm');
// listeners to validate is password inputs match each other
// and if password matches required pattern
pwdInput.addEventListener('input', validatePasswordMatch);
pwdInputConfirm.addEventListener('input', validatePasswordMatch);
pwdInput.addEventListener('input', validatePassword);

// get DOM to update message that passwords have to match 
const pwdMatch = document.querySelector('.pwd-match');
// the whole password fieldset to enlarge it when the message shows
const pwdFieldset = document.querySelector('.pwd-fieldset');

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
    
let strength = 0;
function validatePassword(e) {
    let validations = [];

    const password = e.target.value;
    const pwdLi = document.querySelectorAll('.pwd-li');

    validations = [
        (password.length >= 8),
        (password.search(/[A-Z]/) > -1),
        (password.search(/[0-9]/) > -1),
        (password.search(/[!@#$%^&*()~`{}:"|<>?/.,\';]/) > -1)
    ]
    strength = validations.reduce((accumulated, current) => accumulated + current);

    // update markers
    function updateMarkers() {
        for (let i = 0; i < 4; i++) {
            if (validations[i]) {
                pwdLi[i].classList.remove('cross');
                pwdLi[i].classList.add('tick');
            }
            else {
                pwdLi[i].classList.add('cross');
                pwdLi[i].classList.remove('tick');
            }
        }
    };
    updateMarkers();
    
    // update strength bars
    function updateBars () {
        const bars = document.querySelectorAll('.bar');
        switch (strength) {
            case 0:
                bars[0].classList.remove('bar-show');
                bars[1].classList.remove('bar-show');
                bars[2].classList.remove('bar-show');
                bars[3].classList.remove('bar-show');
                break;
            case 1:
                bars[0].classList.add('bar-show');
                bars[1].classList.remove('bar-show');
                bars[2].classList.remove('bar-show');
                bars[3].classList.remove('bar-show');
                break;
            case 2:
                bars[0].classList.add('bar-show');
                bars[1].classList.add('bar-show');
                bars[2].classList.remove('bar-show');
                bars[3].classList.remove('bar-show');
                break;
            case 3:
                bars[0].classList.add('bar-show');
                bars[1].classList.add('bar-show');
                bars[2].classList.add('bar-show');
                bars[3].classList.remove('bar-show');
                break;
            case 4:
                bars[0].classList.add('bar-show');
                bars[1].classList.add('bar-show');
                bars[2].classList.add('bar-show');
                bars[3].classList.add('bar-show');
                break;
        }
    }
    updateBars();
}

function validatePasswordMatch(e) {

        // if (!pwdInput.value && !pwdInputConfirm.value) return; //on 0 character password
        if (pwdInput.value != pwdInputConfirm.value) {
            pwdMatch.classList.remove('invisible');
            pwdFieldset.classList.add('enlarged');
        }
        else {
            pwdMatch.classList.add('invisible')
            pwdFieldset.classList.remove('enlarged');
        }
}

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
function submitForm(e) {
    if (pwdInput.value != pwdInputConfirm.value) {
        e.preventDefault();
    }
}
