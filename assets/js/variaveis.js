const fs_1 = require("fs");

var DicionarioAleatorio29855 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioAleatorio-29855.txt",
  "utf-8"
).split("\r\n");
var DicionarioAleatorio261791 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioAleatorio-261791.txt",
  "utf-8"
).split("\r\n");
var DicionarioInversamenteOrdenado29855 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioInversamenteOrdenado-29855.txt",
  "utf-8"
).split("\r\n");
var DicionarioInversamenteOrdenado261791 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioInversamenteOrdenado-261791.txt",
  "utf-8"
).split("\r\n");
var DicionarioOrdenado29855 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioOrdenado-29855.txt",
  "utf-8"
).split("\r\n");
var DicionarioOrdenado261791 = (0, fs_1.readFileSync)(
  "../../instancias/DicionarioOrdenado-261791.txt",
  "utf8"
).split("\r\n");
var ListaAleatoriaMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaAleatoria-1000.txt",
  "utf-8"
).split("\n");
var ListaAleatoriaDezMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaAleatoria-10000.txt",
  "utf-8"
).split("\n");
var ListaAleatoriaCemMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaAleatoria-100000.txt",
  "utf-8"
).split("\n");
var ListaAleatoriaUmMilhao = (0, fs_1.readFileSync)(
  "../../instancias/ListaAleatoria-1000000.txt",
  "utf-8"
).split("\n");
var ListaInversamenteOrdenadaMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaInversamenteOrdenada-1000.txt",
  "utf-8"
).split("\n");
var ListaInversamenteOrdenadaDezMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaInversamenteOrdenada-10000.txt",
  "utf-8"
).split("\n");
var ListaInversamenteOrdenadaCemMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaInversamenteOrdenada-100000.txt",
  "utf-8"
).split("\n");
var ListaInversamenteOrdenadaUmMilhao = (0, fs_1.readFileSync)(
  "../../instancias/ListaInversamenteOrdenada-1000000.txt",
  "utf-8"
).split("\n");
var ListaOrdenadaMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaOrdenada-1000.txt",
  "utf-8"
).split("\n");
var ListaOrdenadaDezMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaOrdenada-10000.txt",
  "utf-8"
).split("\n");
var ListaOrdenadaCemMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaOrdenada-100000.txt",
  "utf-8"
).split("\n");
var ListaOrdenadaUmMilhao = (0, fs_1.readFileSync)(
  "../../instancias/ListaOrdenada-1000000.txt",
  "utf-8"
).split("\n");
var ListaQuaseOrdenadaMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaQuaseOrdenada-1000.txt",
  "utf-8"
).split("\n");
var ListaQuaseOrdenadaDezMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaQuaseOrdenada-10000.txt",
  "utf-8"
).split("\n");
var ListaQuaseOrdenadaCemMil = (0, fs_1.readFileSync)(
  "../../instancias/ListaQuaseOrdenada-100000.txt",
  "utf-8"
).split("\n");
var ListaQuaseOrdenadaUmMilhao = (0, fs_1.readFileSync)(
  "../../instancias/ListaQuaseOrdenada-1000000.txt",
  "utf-8"
).split("\n");
module.exports = {
  //exporta as variaveis declaradas
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
};
const uai = Uint32Array.from(DicionarioAleatorio261791);
fs_1.writeFileSync(
  "variaveis.txt",
  JSON.stringify(DicionarioAleatorio261791),
  function (err) {
    if (err) {
      console.error("deu ruim berg");
    }
  }
);
console.log(dicionario);
