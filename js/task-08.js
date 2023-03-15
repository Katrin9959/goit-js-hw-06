// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector('form.login-form');
form.onsubmit = (e) => {
    e.preventDefault();

    let emailVal = form.elements.email.value;
    let passwordVal = form.elements.password.value;
    
    if(emailVal === '' || passwordVal === ''){
        alert ("All inputs must not be empty")
    } else {

        let emailName = form.elements.email.name;
        let passwordName = form.elements.password.name;

        let formData = {};

        formData[emailName] = emailVal;
        formData[passwordName] = passwordVal;
        console.log(formData);
        form.reset();
    }
}