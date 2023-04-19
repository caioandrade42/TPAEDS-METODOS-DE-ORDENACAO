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
          console.log(shellSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(shellSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(shellSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(shellSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(shellSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(shellSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(shellSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(shellSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(shellSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(shellSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(shellSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(shellSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(shellSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(shellSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(shellSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(shellSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(shellSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(shellSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(shellSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(shellSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(shellSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(shellSort(ListaQuaseOrdenadaUmMilhao));
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

function shellSort(vetor) {
  var inicio = new Date().getTime();
  var count = 0;
  var comparacoes = 0;
  var h = 0;
  while (h < Math.floor(vetor.length / 3)) {
    h = h * 3 + 1;
  }
  while (h > 0) {
    for (var i = h; i < vetor.length; i++) {
      comparacoes++;
      var aux = vetor[i];
      var j = i;
      while (j >= h && vetor[j - h] > aux) {
        vetor[j] = vetor[j - h];
        j -= h;
      }
      vetor[j] = aux;
      count++;
      console.log(vetor);
    }
    h = Math.floor((h - 1) / 3);
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
