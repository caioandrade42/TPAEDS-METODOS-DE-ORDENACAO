var DicionarioAleatorio29855 = new FileReader(
  "../../instancias/DicionarioAleatorio-29855.txt",
  "utf-8"
);

const dicionario = readFileSync("variaveis.txt");
window.onload = function () {
  var instancia = document.getElementById("instancias");
  console.log(DicionarioAleatorio29855);
};

function bubbleSort(vetor) {
  var aux;
  var movimentos = 0;
  var inicio = new Date().getTime();
  console.log(inicio);
  for (var i = 0; i < vetor.length; i++) {
    for (var j = 0; j < vetor.length; j++) {
      if (vetor[i] < vetor[j]) {
        aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        movimentos++;
      }
    }
    console.log(vetor);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  return "foram feitos "
    .concat(movimentos, " movimentos, em ")
    .concat(tempoExecucao / 1000, " segundos");
}
