// Executa o botão Login
const btnLogin = document.getElementById('btn-login');
function loginVerify() {
  const inputEmail = document.getElementById('email').value;
  const inputPassword = document.getElementById('password').value;
  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', loginVerify);

// Ativa o botão Enviar
const checkBoxAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
function agreement() {
  btnSubmit.removeAttribute('disabled');
}
checkBoxAgreement.addEventListener('click', agreement);

// Conta os caracteres do comentário
const inputTextarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxCharacters = 500;
let count = null;
function counterTextarea() {
  count = inputTextarea.value.length;
  counter.innerText = maxCharacters - count;
}
inputTextarea.addEventListener('input', counterTextarea);

//Executa o botão Enviar
const formEvaluation = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
function submit(event) {
  event.preventDefault();
  formEvaluation.style.display = 'none';
  formData.style.display = '';
}

btnSubmit.addEventListener('click', submit);
