var buttonThree = document.getElementById("exeThree");
buttonThree.addEventListener("click", exercicioLog);

function exercicioLog() {
  var titulo = "EXERCÍCIO THREE";
  console.log(titulo);
  // Verifique se a sua idade é maior do que a de algum parente
  var minhaIdade = 18;
  var parentIdade = 20;
  if (parentIdade > minhaIdade) {
    console.log("é maior");
  } else {
    console.log("não é maior");
  }
  // Qual valor é retornado na seguinte expressão?
  var expressao = 5 - 2 && 5 - " " && 5 - 2;
  console.log(expressao);
  // Verifique se as seguintes variáveis são Truthy ou Falsy
  var nome = "Andre";
  console.log(!!nome);
  var idade = 28;
  console.log(!!idade);
  var possuiDoutorado = false;
  console.log(!!possuiDoutorado);
  var empregoFuturo;
  console.log(!!empregoFuturo);
  var dinheiroNaConta = 0;
  console.log(!!dinheiroNaConta);
  // Compare o total de habitantes do Brasil com China (valor em milões)
  var brasil = 10e6;
  var china = 18e6;
  console.log(brasil >= china);
  // O que irá aparecer no console?
  if ("Gato" === "gato" && 5 > 2) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }
  // O que irá aparecer no console?
  if ("Gato" === "gato" || 5 > 2) {
    console.log("Gato" && "Cão");
  } else {
    console.log("Falso");
  }
}
