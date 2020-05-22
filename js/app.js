(function ($) {
  $(function () {
    $(".cpf").mask("000.000.000-00", { reverse: true });
  });
})(jQuery);

//Verificação do formulário
function verificarDados() {
  var txtnome = document.getElementById("txtnome");
  var cpf = document.getElementById("cpf");
  var email = document.getElementById("email");

  var nome = txtnome.value;
  var cpf = cpf.value;
  var email = email.value;
  if (nome == "") {
    alert("Por favor, informe seu nome");
    txtnome.focus();
    return;
  }
  if (cpf == "") {
    alert("Por favor, informe o CPF corretamente");
    cpf.focus();
    return;
  }
  if (email == "") {
    alert("Por favor, informe o e-mail corretamente");
    email.focus();
    return;
  }

  else{
    alert("Obrigado por ter interesse em participar da nossa empresa, estaremos analisando sua solicitação e entrando em contato em breve!")
  }
}
