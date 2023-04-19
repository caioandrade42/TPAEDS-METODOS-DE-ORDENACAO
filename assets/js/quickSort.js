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
          console.log(quickSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(quickSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(quickSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(quickSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(quickSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(quickSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(quickSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(quickSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(quickSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(quickSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(quickSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(quickSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(quickSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(quickSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(quickSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(quickSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(quickSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(quickSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(quickSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(quickSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(quickSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(quickSort(ListaQuaseOrdenadaUmMilhao));
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

function quickSort(vetor, comeco, final) {
  if (comeco === void 0) {
    comeco = 0;
  }
  if (final === void 0) {
    final = vetor.length;
  }
  var inicio = new Date().getTime();
  var count = 0;
  var comparacoes = 0;
  var i = comeco;
  var j = final;
  var pivot = vetor[Math.floor((comeco + final) / 2)];
  while (i <= j) {
    comparacoes++;
    while (vetor[i] < pivot) i++;
    while (vetor[j] > pivot) j--;
    if (i <= j) {
      var aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
      i++;
      j--;
      count++;
      console.log(vetor);
    }
  }
  if (comeco < j) {
    quickSort(vetor, comeco, j);
  }
  if (i < final) {
    quickSort(vetor, i, final);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "foram feitos "
    .concat(count, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
  return "Foram feitos "
    .concat(count, " movimentos em ")
    .concat(tempoExecucao / 1000, " segundos");
}
