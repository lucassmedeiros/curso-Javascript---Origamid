var buttonTwo = document.getElementById("exeTwo");
buttonTwo.addEventListener("click", exercicioLog);

function exercicioLog() {
  var titulo = "EXERCÍCIO TWO";
  console.log(titulo);
  // Declare uma variável contendo uma string
  var string = "String";
  console.log(string);
  // Declare uma variável contendo um número dentro de uma string
  var numberString = "18";
  console.log(numberString);
  // Declare uma variável com a sua idade
  var idade = 18;
  console.log(idade);
  // Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
  var nome = "Jaqueline";
  var sobrenome = "Uchôa";
  console.log(nome + " " + sobrenome);
  // Coloque a seguinte frase em uma variável: It's time
  var frase = "It's time";
  console.log(frase);
  // Verifique o tipo da variável que contém o seu nome
  typeof nome;
}
