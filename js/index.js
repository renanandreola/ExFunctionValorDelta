//3) Crie uma função que receba três valores, 'a', 'b' e 'c', que
//são os coeficientes de uma equação do segundo grau e retorne o
//valor do delta, que é dado por 'b² - 4ac'

var a = parseInt(prompt("Digite o valor de A:"));
var b = parseInt(prompt("Digite o valor de B:"));
var c = parseInt(prompt("Digite o valor de c:"));

function delta (a, b, c) {
  return (b * b) - (4 * a * c);
}
var result = delta (a, b, c);
  document.body.append(result);
