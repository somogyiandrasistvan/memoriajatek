import { KEPEKLISTA } from "./adat.js";

$(function () {
  let txt = osszealit(KEPEKLISTA);
  const ARTICLEELEM = $("article");
  ARTICLEELEM.append(txt);
  kattintas(KEPEKLISTA, txt);
  megfordit();
});

function osszealit(KEPEKLISTA) {
  let txt = "";
  for (let index = 0; index < KEPEKLISTA.length; index++) {
    txt += "<div><img src='" + KEPEKLISTA[index] + "' alt='kep'></div>";
  }
  return txt;
}

function megfordit() {
  const KEPELEM = $("article img");
  KEPELEM.attr("src", "kepek/hatter.jpg");
}

function kattintas(KEPEKLISTA, txt) {
  let szamlalo = 0;
  let i = 0;
  let aktElem = [];
  let aktIndex = [];
  const KEPELEM = $("article img");


  KEPELEM.each(function (index) {
    $(this).on("click", function () {
      $(this).attr("src", KEPEKLISTA[index]);
      aktIndex[i] = index;
      aktElem[i] = KEPEKLISTA[index];
      szamlalo++;
      i++;
      if (aktElem[0] == aktElem[1]) {
        if(aktIndex[0] > aktIndex[1]){
          KEPEKLISTA.splice(aktIndex[1], 1);
          KEPEKLISTA.splice(aktIndex[0]-1, 1);
          console.log("bement");
        }
        if(aktIndex[0] < aktIndex[1]){
          KEPEKLISTA.splice(aktIndex[0], 1);
          KEPEKLISTA.splice(aktIndex[1]-1, 1);
          console.log("bement2");
        }
      }
      if (szamlalo == 2) {
        i = 0;
        aktElem = [];
        aktIndex = [];
      }
      if (szamlalo == 3) {
        szamlalo = 1;
        megfordit();
        $(this).attr("src", KEPEKLISTA[index]);
      }
    })
  })
}
