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
          console.log(insertionSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(insertionSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(insertionSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(insertionSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(insertionSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(insertionSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(insertionSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(insertionSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(insertionSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(insertionSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(insertionSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(insertionSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(insertionSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(insertionSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(insertionSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(insertionSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(insertionSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(insertionSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(insertionSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(insertionSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(insertionSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(insertionSort(ListaQuaseOrdenadaUmMilhao));
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
function insertionSort(vetor) {
  var inicio = new Date().getTime();
  var movimentos = 0;
  var comparacoes = 0;
  SetAux: for (var i = 1; i < vetor.length; i++) {
    var aux = vetor[i];
    for (var j = i - 1; j >= 0; j--) {
      comparacoes++;
      if (aux >= vetor[j]) {
        vetor[j + 1] = aux;
        movimentos++;
        continue SetAux;
      } else {
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
        movimentos++;
        continue;
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
    .concat(movimentos, " movimentos, em ")
    .concat(tempoExecucao / 1000, " segundos");
}
