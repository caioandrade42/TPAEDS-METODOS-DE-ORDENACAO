window.onload = function () {
  let instancia = 0;
  $("#instancias").on("change", function () {
    instancia = $("#instancias").val();
    console.log(instancia);
  });
  $("#ordenar").on("click", function () {
    console.log("vc clicou ai hein");
    switch (instancia) {
      case 0:
        swal(
          "ERRO!",
          "Voce deve selecionar uma instancia antes de continuar",
          "error"
        );
        break;

      default:
        break;
    }
  });
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
