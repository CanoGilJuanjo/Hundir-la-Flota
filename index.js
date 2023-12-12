
/**
 * Creador Juan Jose Cano Gil
 */
var mapa = [[]];
var vida = 20;
var barco1 = [],
  barco2 = [],
  barco3 = [],
  barco4 = [];

function crearMapa() {
  document.write("<table>");
  for (let i = 0; i < 8; i++) {
    document.write("<tr>");
    for (let j = 0; j < 12; j++) {
      document.write(
        `<td id="fila${i}columna${j}" value="0"><input type='button' id="fila${i}columna${j}button" value="0" onclick='comprobar("` +
          `fila${i}columna${j}button` +
          `",${i},${j})'></td>`
      );
      mapa[i].push(0);
    }
    document.write("</tr>");
    if (i < 7) {
      mapa.push([]);
    }
  }
  document.write("</table>");
}

/**
 *
 * @param {*} cantidad cuantos barcos habra en el tablero
 *  1 -> barco de 1 casilla
 *  2 -> barco de 2 casillas
 *  3 -> barco de 3 casillas
 *  4 -> barco de 4 casillas
 *  7 -> mina
 */

function crearEnemigos() {
  let random1 = Math.floor(Math.random() * mapa.length); //Fila
  let random2 = Math.floor(Math.random() * mapa[0].length); //Columna
  let salir = false;
  //Colocamos primero el barco de 1 casilla
  do {
    if (mapa[random1][random2] == 0) {
      mapa[random1][random2] = 1;
      barco1.push(random1, random2, false);
    } else {
      random1 = Math.floor(Math.random() * mapa.length);
      random2 = Math.floor(Math.random() * mapa[0].length);
    }
  } while (mapa[random1][random2] != 0);

  //Comprobamos para colocar el barco de 2 celdas

  // MEJORA: que el barco se posicione aleatoriamente hacia ariba o los lados y se compruebe
  salir = false;
  while (!salir) {
    if (mapa[random1][random2] == 0) {
      if (random2 + 1 < mapa[0].length && mapa[random1][random2 + 1] == 0) {
        mapa[random1][random2] = 2;
        mapa[random1][random2 + 1] = 2;
        salir = true;
        barco2.push([random1, random2, false]);
        barco2.push([random1, random2 + 1, false]);
      } else if (random2 - 1 >= 0 && mapa[random1][random2 - 1] == 0) {
        mapa[random1][random2] = 2;
        mapa[random1][random2 - 1] = 2;
        salir = true;
        barco2.push([random1, random2, false]);
        barco2.push([random1, random2 - 1, false]);
      } else if (random1 + 1 < mapa.length && mapa[random1 + 1][random2] == 0) {
        mapa[random1][random2] = 2;
        mapa[random1 + 1][random2] = 2;
        salir = true;
        barco2.push([random1, random2, false]);
        barco2.push([random1 + 1, random2, false]);
      } else if (random1 - 1 >= 0 && mapa[random1 - 1][random2] == 0) {
        mapa[random1][random2] = 2;
        mapa[random1 - 1][random2] = 2;
        salir = true;
        barco2.push([random1, random2, false]);
        barco2.push([random1 - 1, random2, false]);
      } else {
        random1 = Math.floor(Math.random() * mapa.length);
        random2 = Math.floor(Math.random() * mapa[0].length);
      }
    } else {
      random1 = Math.floor(Math.random() * mapa.length);
      random2 = Math.floor(Math.random() * mapa[0].length);
    }
  }
  //Barco de 3 celdas
  //Misma mejora que el anterior

  salir = false;
  while (!salir) {
    if (mapa[random1][random2] == 0) {
      if (
        random2 + 2 < mapa[0].length &&
        mapa[random1][random2 + 2] == 0 &&
        mapa[random1][random2 + 1] == 0
      ) {
        mapa[random1][random2] = 3;
        mapa[random1][random2 + 1] = 3;
        mapa[random1][random2 + 2] = 3;
        salir = true;
        barco3.push(
          [random1, random2, false],
          [random1, random2 + 1, false],
          [random1, random2 + 2, false]
        );
      } else if (
        random1 + 2 < mapa.length &&
        mapa[random1 + 2][random2] == 0 &&
        mapa[random1 + 1][random2] == 0
      ) {
        mapa[random1][random2] = 3;
        mapa[random1 + 1][random2] = 3;
        mapa[random1 + 2][random2] = 3;
        salir = true;
        barco3.push(
          [random1, random2, false],
          [random1 + 1, random2, false],
          [random1 + 2, random2, false]
        );
      } else {
        random1 = Math.floor(Math.random() * mapa.length);
        random2 = Math.floor(Math.random() * mapa[0].length);
      }
    } else {
      random1 = Math.floor(Math.random() * mapa.length);
      random2 = Math.floor(Math.random() * mapa[0].length);
    }
  }

  //Barco de 4 posiciones
  salir = false;
  while (!salir) {
    if (mapa[random1][random2] == 0) {
      if (
        random1 + 3 < mapa.length &&
        mapa[random1 + 1][random2] == 0 &&
        mapa[random1 + 2][random2] == 0 &&
        mapa[random1 + 3][random2] == 0
      ) {
        mapa[random1][random2] = 4;
        mapa[random1 + 1][random2] = 4;
        mapa[random1 + 2][random2] = 4;
        mapa[random1 + 3][random2] = 4;
        salir = true;
        barco4.push(
          [random1, random2, false],
          [random1 + 1, random2, false],
          [random1 + 2, random2, false],
          [random1 + 3, random2, false]
        );
      } else if (
        random2 + 3 < mapa[0].length &&
        mapa[random1][random2 + 2] == 0 &&
        mapa[random1][random2 + 1] == 0 &&
        mapa[random1][random2 + 3] == 0
      ) {
        mapa[random1][random2] = 4;
        mapa[random1][random2 + 1] = 4;
        mapa[random1][random2 + 2] = 4;
        mapa[random1][random2 + 3] = 4;
        salir = true;
        barco4.push(
          [random1, random2, false],
          [random1, random2 + 1, false],
          [random1, random2 + 2, false],
          [random1, random2 + 3, false]
        );
      } else {
        random1 = Math.floor(Math.random() * mapa.length);
        random2 = Math.floor(Math.random() * mapa[0].length);
      }
    } else {
      random1 = Math.floor(Math.random() * mapa.length);
      random2 = Math.floor(Math.random() * mapa[0].length);
    }
  }

  //minas
  let contador = 0;
  while (contador < 5) {
    if (mapa[random1][random2] == 0) {
      mapa[random1][random2] = 7;
      contador++;
    } else {
      random1 = Math.floor(Math.random() * mapa.length);
      random2 = Math.floor(Math.random() * mapa[0].length);
    }
  }
}

//Funcion para representar

/**
 *  0 -> agua
 *  1 2 3 4 -> barcos, no se representan
 *  5 -> barco muerto, se dibuja en rojo
 *  7 -> mina
 */
function mostrar() {
  for (let i = 0; i < mapa.length; i++) {
    for (let j = 0; j < mapa[i].length; j++) {
      let celda = document.getElementById(`fila${i}columna${j}`);
      let boton = document.getElementById(`fila${i}columna${j}button`);

      //Esta parte comentarla para el final
      boton.value = mapa[i][j];
      if (mapa[i][j] == 1) {
        boton.style.backgroundColor = celda.style.backgroundColor = "orange";
      } else if (mapa[i][j] == 2) {
        boton.style.backgroundColor = celda.style.backgroundColor = "violet";
      } else if (mapa[i][j] == 3) {
        boton.style.backgroundColor = celda.style.backgroundColor = "purple";
      } else if (mapa[i][j] == 4) {
        boton.style.backgroundColor = celda.style.backgroundColor = "green";
      } else if (mapa[i][j] == 7) {
        boton.style.backgroundColor = celda.style.backgroundColor = "black";
      }
    }
  }
}

function comprobar(posicion, i, j) {
  if (vida > 0) {
    if (
      mapa[i][j] == 1 ||
      mapa[i][j] == 2 ||
      mapa[i][j] == 3 ||
      mapa[i][j] == 4
    ) {
      mapa[i][j] = 5;
      document.getElementById(posicion).style.backgroundColor = "red";
      document.getElementById(
        posicion.split("button")[0]
      ).style.backgroundColor = "red";
    } else if (mapa[i][j] == 0) {
      document.getElementById(posicion).style.backgroundColor = "white";
      document.getElementById(
        posicion.split("button")[0]
      ).style.backgroundColor = "white";
      vida--;
    } else if (mapa[i][j] == 7) {
      vida -= 2;
      document.getElementById(posicion).style.backgroundColor = "orange";
      document.getElementById(
        posicion.split("button")[0]
      ).style.backgroundColor = "orange";
    }

    document.getElementById("barco1").innerHTML = "";
    document.getElementById("barco2").innerHTML = "";
    document.getElementById("barco3").innerHTML = "";
    document.getElementById("barco4").innerHTML = "";

    //Barco de 1 celda
    if (i == barco1[0] && j == barco1[1] && !barco1[2]) {
      barco1[2] = true;
      vida += 1;
    }
    if (barco1[2]) {
      document.getElementById("barco1").innerHTML = "[X]";
    } else {
      document.getElementById("barco1").innerHTML = "[  ]";
    }
    //Barco de 2 celdas
    for (let k = 0; k < barco2.length; k++) {
      if (barco2[k][0] == i && barco2[k][1] == j && !barco2[k][2]) {
        barco2[k][2] = true;
        if (barco2[0][2] && barco2[1][2]) {
          vida += 2;
        }
      }
      if (barco2[k][2]) {
        document.getElementById("barco2").innerHTML += "[X]";
      } else {
        document.getElementById("barco2").innerHTML += "[  ]";
      }
    }
    //Barco de 3 celdas
    for (let k = 0; k < barco3.length; k++) {
      if (barco3[k][0] == i && barco3[k][1] == j && !barco3[k][2]) {
        barco3[k][2] = true;
        if (barco3[0][2] && barco3[1][2] && barco3[2][2]) {
          vida += 3;
        }
      }
      if (barco3[k][2]) {
        document.getElementById("barco3").innerHTML += "[X]";
      } else {
        document.getElementById("barco3").innerHTML += "[  ]";
      }
    }
    //Barco de 4 celdas
    for (let k = 0; k < barco4.length; k++) {
      if (barco4[k][0] == i && barco4[k][1] == j && !barco4[k][2]) {
        barco4[k][2] = true;
        if (barco4[0][2] && barco4[1][2] && barco4[2][2] && barco4[3][2]) {
          vida += 4;
        }
      }
      if (barco4[k][2]) {
        document.getElementById("barco4").innerHTML += "[X]";
      } else {
        document.getElementById("barco4").innerHTML += "[  ]";
      }
    }

    document.getElementById("vida").innerHTML = "Vidas: " + vida;
  } else {
    mostrar();
  }
}

crearMapa();
crearEnemigos();

document.write(`<p id='vida'>Vidas: ${vida}</p>`);
document.write(`<p id='barco1'>[  ]</p>`);
document.write(`<p id='barco2'>[  ][  ]</p>`);
document.write(`<p id='barco3'>[  ][  ][  ]</p>`);
document.write(`<p id='barco4'>[  ][  ][  ][  ]</p>`);
