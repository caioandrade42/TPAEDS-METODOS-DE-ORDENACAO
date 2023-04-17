const {
  DicionarioAleatorio261791,
  DicionarioAleatorio29855,
  DicionarioInversamenteOrdenado261791,
  DicionarioInversamenteOrdenado29855,
  DicionarioOrdenado261791,
  DicionarioOrdenado29855,
  ListaAleatoriaMil,
  ListaAleatoriaDezMil,
  ListaAleatoriaCemMil,
  ListaAleatoriaUmMilhao,
  ListaInversamenteOrdenadaMil,
  ListaInversamenteOrdenadaDezMil,
  ListaInversamenteOrdenadaCemMil,
  ListaInversamenteOrdenadaUmMilhao,
  ListaOrdenadaMil,
  ListaOrdenadaDezMil,
  ListaOrdenadaCemMil,
  ListaOrdenadaUmMilhao,
  ListaQuaseOrdenadaMil,
  ListaQuaseOrdenadaDezMil,
  ListaQuaseOrdenadaCemMil,
  ListaQuaseOrdenadaUmMilhao,
} = require("../../assets/js/variaveis"); // puxa as instancias declaradas como variaveis
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
function insertionSort(vetor) {
  var inicio = new Date().getTime();
  var count = 0;
  SetAux: for (var i = 1; i < vetor.length; i++) {
    var aux = vetor[i];
    for (var j = i - 1; j >= 0; j--) {
      if (aux >= vetor[j]) {
        vetor[j + 1] = aux;
        count++;
        continue SetAux;
      } else {
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
        count++;
        continue;
      }
    }
    console.log(vetor);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  return "foram feitos "
    .concat(count, " movimentos, em ")
    .concat(tempoExecucao / 1000, " segundos");
}
function selectionSort(vetor) {
  var inicio = new Date().getTime();
  var count = 0;
  for (var i = 0; i < vetor.length; i++) {
    var min = i;
    for (var j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[min]) {
        min = j;
      }
    }
    var aux = vetor[min];
    vetor[min] = vetor[i];
    vetor[i] = aux;
    count++;
    console.log(vetor);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  return "foram feitos "
    .concat(count, " movimentos, em ")
    .concat(tempoExecucao / 1000, " segundos e o vetor resultado e ")
    .concat(vetor);
}
function shellSort(vetor) {
  var inicio = new Date().getTime();
  var count = 0;
  var h = 0;
  while (h < Math.floor(vetor.length / 3)) {
    h = h * 3 + 1;
  }
  while (h > 0) {
    for (var i = h; i < vetor.length; i++) {
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
  return "foram feitos "
    .concat(count, " movimentos, em ")
    .concat(tempoExecucao / 1000, " segundos e o vetor resultado e ")
    .concat(vetor);
}
function QuickSort(vetor, comeco, final) {
  if (comeco === void 0) {
    comeco = 0;
  }
  if (final === void 0) {
    final = vetor.length;
  }
  var inicio = new Date().getTime();
  var count = 0;
  var i = comeco;
  var j = final;
  var pivot = vetor[Math.floor((comeco + final) / 2)];
  while (i <= j) {
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
    QuickSort(vetor, comeco, j);
  }
  if (i < final) {
    QuickSort(vetor, i, final);
  }
  var tempoExecucao = new Date().getTime() - inicio;
  return "Foram feitos "
    .concat(count, " movimentos em ")
    .concat(tempoExecucao / 1000, " segundos e o vetor resultado e:  ")
    .concat(vetor);
}
function MergeSort(items) {
  return divide(items);
}
function divide(items) {
  var halfLength = Math.ceil(items.length / 2);
  var low = items.slice(0, halfLength);
  var high = items.slice(halfLength);
  if (halfLength > 1) {
    low = divide(low);
    high = divide(high);
  }
  return combine(low, high);
}
function combine(low, high) {
  var indexLow = 0;
  var indexHigh = 0;
  var lengthLow = low.length;
  var lengthHigh = high.length;
  var combined = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
    var lowItem = low[indexLow];
    var highItem = high[indexHigh];
    if (lowItem !== undefined) {
      if (highItem === undefined) {
        combined.push(lowItem);
        indexLow++;
      } else {
        if (lowItem <= highItem) {
          combined.push(lowItem);
          indexLow++;
        } else {
          combined.push(highItem);
          indexHigh++;
        }
      }
    } else {
      if (highItem !== undefined) {
        combined.push(highItem);
        indexHigh++;
      }
    }
  }
  return combined;
}

console.log(ListaAleatoriaDezMil);
