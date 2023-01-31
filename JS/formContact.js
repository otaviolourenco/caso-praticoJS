let form = document.getElementById('form-contact');
let nameimp = document.getElementById('nameimp');
let email = document.getElementById('email');
let msg = document.getElementById('msg');

//Função para validar nome
nameimp.addEventListener('input', (e) => {
    e.preventDefault();
    checkNameImp();
});

function checkNameImp() {
    let nameimpValue = nameimp.value;

    if (nameimpValue == '') {
        setErrorFor(nameimp, "Por favor, digite o seu nome!");
    } else if (!checkName(nameimpValue)) {
        setErrorFor(nameimp, "Digite o seu nome e apelido.");
    } else {
        setSuccessFor(nameimp);
    }
}; 

function checkName(nameimp) {
    return /^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/i.test(nameimp)
};

//Função para validar e-mail
email.addEventListener('input', (e) => {
    e.preventDefault();
    checkEmailImp();
});

function checkEmailImp() {
    const emailValue = email.value;

    if (emailValue == '') {
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido");
    }else {
        setSuccessFor(email);
    }
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//Função para validar textarea
msg.addEventListener('input', (e) => {
    e.preventDefault();
    checkMsgImp();
});

function checkMsgImp() {
    const msgValue = msg.value;

    if (msgValue == '') {
        setErrorFor(msg, "Por favor, digite a sua mensagem!")
    } else if (!checkMsg(msgValue)) {
        setErrorFor(msg, 'Digite a sua mensagem com mais detalhes.');
    }else {
        setSuccessFor(msg);
    } 
}

function checkMsg(msg) {
    return (form.msg.value.length >= 200);
}

var textArea = document.querySelector('textarea');
textArea.addEventListener('input', function(){
var caraterMin = Number(200);
var digitando = textArea.value.length;
    document.getElementById('counter').innerHTML = (caraterMin - digitando)
    console.log();
});


//function para mostrar o erro
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    // mensagem de erro 
    small.innerText = message;
    // adicionar a classe do erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    // adicionar a classe do sucesso
    formControl.className = "form-control success";
}