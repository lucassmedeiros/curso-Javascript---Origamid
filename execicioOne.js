var buttonOne = document.getElementById("exeOne");
buttonOne.addEventListener("click", exercicioLog);

function exercicioLog() {
  var titulo = "EXERCÍCIO ONE";
  console.log(titulo);
  // Declarar uma variável com o seu nome
  var nome = "Jaqueline";
  console.log("nome = " + nome);
  // Declarar uma variável com a sua idade
  var idade = 18;
  console.log("idade = " + idade);
  // Declarar uma variável com a sua comida favorita
  var comidaFav = "Lasanha";
  console.log("comida favorita = " + comidaFav);
  // Declarar variável e não atribuir valor
  var noValue;
  console.log(noValue);
  // Atribuir valor a sua comida favorita
  var comidaFav = 10;
  console.log("valor comida favorita = " + comidaFav);
  // Declarar 5 variáveis diferentes sem valores
  var one;
  var two;
  var three;
  var four;
  var five;
}