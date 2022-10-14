// "tryber@teste.com" e a senha seja "123456"
const btnLogin = document.getElementById('btn-login');

function loginVerify() {
  const inputEmail = document.getElementById('email').value;
  const inputPassword = document.getElementById('password').value;
  if (inputEmail === "tryber@teste.com" && inputPassword === "123456"){
    alert('Olá, Tryber!');
  }else{
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', loginVerify);