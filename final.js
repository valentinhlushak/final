
//№1(вход)
let email = document.getElementById('form1__email');
let password = document.getElementById('form1__password');

console.log(email);
console.log(password);

let button = document.getElementById('form1__btn');
button.type = 'submit';
button.addEventListener('click', checkValid);
function checkValid(){
    if (email.value == '' && password.value == '') {
        alert('пустое поле, введите еще раз')
        return false; 
    } else if (email.value == "valik6426588@gmail.com") {
        alert('Добро пожаловать,Валентин!')
    }else if (email.value !== "@") {
        alert('ошибка заполнения, введите @');
        return false;
    }else {
        alert('Добро пожаловать, уважаемый гость')
        return true
    }  
}
//     let logValue = document.getElementById('form1__email').value;
//     let pasValue = document.getElementById('form1__password').value;
    

// console.log(localStorage)

//№1 (регистрация)

let email2 = document.getElementById('group1__mail');
let pass = document.getElementById('group1__fild');
let pass2 = document.getElementById('group1__fild2');
let buttonReg = document.getElementById('form2__btn');
buttonReg.addEventListener('click', checkValid2);
function checkValid2() {
    if (email2.value == '') {
        alert('пустое поле, введите еще раз')
        return false;
    } else if(pass.value == ''){
        alert('пустое поле, введите еще раз')
        return false;
    }else if(pass2.value == ''){
        alert('пустое поле, введите еще раз')
        return false;
    } else if (pass.value !== pass2.value) {
        alert('пароль не совпадает')
        return false;
    }else{alert ('Вы успешно зарегестрировались')}
}
let a = document.getElementById('group1__mail').value;
localStorage.setItem('email',a)
