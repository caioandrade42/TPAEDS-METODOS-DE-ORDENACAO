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
          console.log(mergeSort(DicionarioAleatorio29855));
          break;

        case "2":
          console.log(mergeSort(DicionarioAleatorio261791));
          break;

        case "3":
          console.log(mergeSort(DicionarioInversamenteOrdenado29855));
          break;

        case "4":
          console.log(mergeSort(DicionarioInversamenteOrdenado261791));
          break;

        case "5":
          console.log(mergeSort(DicionarioOrdenado29855));
          break;

        case "6":
          console.log(mergeSort(DicionarioOrdenado261791));
          break;

        case "7":
          console.log(mergeSort(ListaAleatoriaMil));
          break;

        case "8":
          console.log(mergeSort(ListaAleatoriaDezMil));
          break;

        case "9":
          console.log(mergeSort(ListaAleatoriaCemMil));
          break;

        case "10":
          console.log(mergeSort(ListaAleatoriaUmMilhao));
          break;

        case "11":
          console.log(mergeSort(ListaInversamenteOrdenadaMil));
          break;

        case "12":
          console.log(mergeSort(ListaInversamenteOrdenadaDezMil));
          break;

        case "13":
          console.log(mergeSort(ListaInversamenteOrdenadaCemMil));
          break;

        case "14":
          console.log(mergeSort(ListaInversamenteOrdenadaUmMilhao));
          break;

        case "15":
          console.log(mergeSort(ListaOrdenadaMil));
          break;

        case "16":
          console.log(mergeSort(ListaOrdenadaDezMil));
          break;

        case "17":
          console.log(mergeSort(ListaOrdenadaCemMil));
          break;

        case "18":
          console.log(mergeSort(ListaOrdenadaUmMilhao));
          break;

        case "19":
          console.log(mergeSort(ListaQuaseOrdenadaMil));
          break;

        case "20":
          console.log(mergeSort(ListaQuaseOrdenadaDezMil));
          break;

        case "21":
          console.log(mergeSort(ListaQuaseOrdenadaCemMil));
          break;

        case "22":
          console.log(mergeSort(ListaQuaseOrdenadaUmMilhao));
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

function merge(esquerda, direita) {
  let vetor = [];
  var count = 0;
  var comparacoes = 0;
  const inicio = new Date().getTime();
  while (esquerda.length && direita.length) {
    comparacoes++;
    if (esquerda[0] < direita[0]) {
      vetor.push(esquerda.shift());
      count++;
    } else {
      vetor.push(direita.shift());
      count++;
    }
    console.log(esquerda, vetor, direita);
  }
  const tempoExecucao = new Date().getTime() - inicio;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "foram feitos "
    .concat(count, " movimentos, e ")
    .concat(comparacoes, " comparações em ")
    .concat(tempoExecucao / 1000, " segundos");
  return [...vetor, ...esquerda, ...direita]; // concatenando os elementos que podem ter ficado para tras
}

function mergeSort(vetor) {
  const half = Math.ceil(vetor.length / 2);

  // Base case or terminating case
  if (vetor.length < 2) {
    return vetor;
  }

  const esquerda = vetor.splice(0, half);
  return merge(mergeSort(esquerda), mergeSort(vetor));
}
