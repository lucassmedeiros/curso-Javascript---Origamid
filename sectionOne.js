var buttons = document.querySelectorAll("button");
for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", sectionOne);
}

function sectionOne(event) {

  const target = event.target;
  console.clear();

  if (target.id === "exeOne") {

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

  } else if (target.id === "exeTwo") {

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

  } else if (target.id === "exeThree") {

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
}
