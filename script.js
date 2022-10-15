// Executa o botão Login
const btnLogin = document.getElementById('btn-login');
const inputLoginEmail = document.getElementById('email');
const inputLoginPassword = document.getElementById('password');
function loginVerify() {
  if (inputLoginEmail.value === 'tryber@teste.com' && inputLoginPassword.value === '123456') {
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

// Executa o botão Enviar
const formEvaluation = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const userEmail = document.getElementById('input-email');
const userHouse = document.getElementById('house');
const families = document.getElementsByName('family');
const desiredContents = document.getElementsByName('desiredContent');
const rates = document.getElementsByName('rate');
function whatFamily() {
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) {
      return families[index].value;
    }
  }
  // for (const family of families) {
  //   if (family.checked) {
  //     return family.value;
  //   }
  // }
}
function desiredContent() {
  let contentsToReturn = '';
  for (let index = 0; index < desiredContents.length; index += 1) {
    if (desiredContents[index].checked) {
      contentsToReturn += `${desiredContents[index].value}, `;
    }
  }
  // for (const content of desiredContents) {
  //   if (content.checked) {
  //     contentsToReturn += `${content.value}, `;
  //   }
  // }
  return contentsToReturn.slice(0, contentsToReturn.length - 2);
}
function whatRate() {
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked) {
      return rates[index].value;
    }
  }
  // for (const rate of rates) {
  //   if (rate.checked) {
  //     return rate.value;
  //   }
  // }
}
function submit(event) {
  event.preventDefault();
  formEvaluation.style.display = 'none';
  formData.innerText = `
    Nome: ${inputName.value} ${inputLastName.value}\n
    Email: ${userEmail.value}\n
    Casa: ${userHouse.value}\n
    Família: ${whatFamily()}\n
    Matérias: ${desiredContent()}\n
    Avaliação: ${whatRate()}\n
    Observações: ${inputTextarea.value}
  `;
  formData.style.display = '';
}
btnSubmit.addEventListener('click', submit);
