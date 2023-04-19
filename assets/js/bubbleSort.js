$(document).ready(function () {
  let instancia = 0;
  $("#instancias").on("change", function () {
    instancia = $("#instancias").val();
    console.log(instancia);
    $("#ordenar").on("click", function () {
      switch (instancia) {
        case "0":
          swal(
            "ERRO!",
            "Voce deve selecionar uma instancia antes de continuar",
            "error"
          );
          break;

        case "1":
          console.log(bubbleSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(bubbleSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(bubbleSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(bubbleSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(bubbleSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(bubbleSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(bubbleSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(bubbleSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(bubbleSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(bubbleSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(bubbleSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(bubbleSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(bubbleSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(bubbleSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(bubbleSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(bubbleSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(bubbleSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(bubbleSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(bubbleSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(bubbleSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(bubbleSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(bubbleSort(ListaQuaseOrdenadaUmMilhao));
          break;

        default:
          break;
      }
    });
  });
  $("#download").on("click", function () {
    var text = document.getElementById("resultado").innerHTML;
    var nome = "resultado";
    var elemento = document.createElement("a");
    elemento.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    elemento.setAttribute("download", nome);
    elemento.style.display = "none";
    elemento.click();
  });
});
function bubbleSort(vetor) {
  var aux;
  var movimentos = 0;
  var comparacoes = 0;
  var inicio = new Date().getTime();
  for (var i = 0; i < vetor.length; i++) {
    for (var j = 0; j < vetor.length; j++) {
      comparacoes++;
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
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "foram feitos "
    .concat(movimentos, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
  return "foram feitos "
    .concat(movimentos, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
}
