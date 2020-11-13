
function enviar() {

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var fone = document.getElementById('telefone');
  var login = document.getElementById('login');
  var senha = document.getElementById('password');
  var idade = document.getElementById('idade');

  var enviar=0;


if (nome.value=='' || email.value==''  || login.value==''|| senha.value=='') {
  enviar=1;
  alert("Por favor preencha todos os campo obrigatórios.");
}
else if (enviar== 0) {
  document.getElementById('confirmar').style.color="green";
  document.getElementById('confirmar').innerHTML="Formulário Enviado!";
}
else {
  document.getElementById('confirmar').style.color="red";
  document.getElementById('confirmar').innerHTML= "Campo obrigatório não preenchido!";
}
}
