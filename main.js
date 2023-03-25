import { KEPEKLISTA } from "./adat.js";

$(function () {
  let txt = osszealit(KEPEKLISTA);
  const ARTICLEELEM = $("article");
  ARTICLEELEM.append(txt);
  megfordit();

  kattintas(KEPEKLISTA, txt);

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
      console.log("szamlalo: " + szamlalo);
      console.log("aktIndex: " + aktIndex);
      console.log("aktElem: " + aktElem)
      szamlalo++;
      i++;
      if (aktElem[0] == aktElem[1]) {
        console.log("Sikerült")
        KEPEKLISTA.splice(aktIndex[0], 1);
        KEPEKLISTA.splice(aktIndex[1]-1, 1);
      }
      if (szamlalo == 2) {
        i = 0;
        aktElem = [];
        aktIndex = [];
      }
      if (szamlalo == 3) {
        szamlalo = 1;
        KEPELEM.attr("src", "kepek/hatter.jpg");
        $(this).attr("src", KEPEKLISTA[index]);
      }
    })
  })
}

/*
function kattintas(KEPEKLISTA) {
  const KEPELEM = $("article img");
  for (let index = 0; index < KEPEKLISTA.length; index++) {
    KEPELEM[index].addEventListener("click", function () {
      KEPELEM[index].src = KEPEKLISTA[index]
    });
  }
}
*/
//KEPEKLISTA.splice(aktIndex, 1);