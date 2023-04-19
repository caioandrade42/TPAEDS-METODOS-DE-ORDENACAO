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
          console.log(selectionSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(selectionSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(selectionSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(selectionSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(selectionSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(selectionSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(selectionSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(selectionSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(selectionSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(selectionSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(selectionSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(selectionSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(selectionSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(selectionSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(selectionSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(selectionSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(selectionSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(selectionSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(selectionSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(selectionSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(selectionSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(selectionSort(ListaQuaseOrdenadaUmMilhao));
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

function selectionSort(vetor) {
  var inicio = new Date().getTime();
  var count = 0;
  var comparacoes = 0;
  for (var i = 0; i < vetor.length; i++) {
    var min = i;
    for (var j = i + 1; j < vetor.length; j++) {
      comparacoes++;
      if (vetor[j] < vetor[min]) {
        min = j;
        count++;
      }
    }
    var aux = vetor[min];
    vetor[min] = vetor[i];
    vetor[i] = aux;
    console.log(vetor);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "foram feitos "
    .concat(count, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
  return "foram feitos "
    .concat(count, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
}
