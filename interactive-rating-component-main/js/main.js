let buttons = document.querySelectorAll('.choices-btns button');
let starForm = document.querySelector('.star-form');
let formBox = document.getElementById('form-box');
let thanksBox = document.getElementById('thanks-box');
let thankMessage = document.querySelector('#thanks-box h4');
let errorMessage = document.getElementById('error-msg');
let selected = '';

buttons.forEach(btn => {
    btn.type = 'button';
    btn.addEventListener('click', function (event) {
        buttons.forEach((btn) => {
            btn.classList.remove('selected');
        });
        event.target.classList.add("selected");
        selected = event.target.innerText;
        errorMessage.style.display = 'none'
    });
});


starForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (selected === '') {
        errorMessage.style.display = 'block';
    } else {
        formBox.style.display = 'none';
        thanksBox.style.display = 'block';
        thankMessage.innerHTML = `You selected ${selected} out of 5`;
    }
});
