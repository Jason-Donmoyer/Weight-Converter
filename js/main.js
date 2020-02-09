// BUTTON

const convertButton = document.querySelector('#convert_button');
const weightInput = document.querySelector('#weight_input');
const outputSpan = document.getElementById('converted_weight');

convertButton.addEventListener('click', function() {
    let weightInPounds = weightInput.value;
    let kilos = weightInPounds / 2.205;
    console.log(kilos);
    outputSpan.innerHTML = kilos;

});

