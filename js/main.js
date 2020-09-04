/* 
Las tijeras cortan el papel.
El papel envuelve piedra.
La piedra aplasta al lagarto.
El lagarto envenena a Spock.
Spock aplasta las tijeras.
Las tijeras decapitan lagarto.
El lagarto se come el papel.
El papel desaprueba a Spock.
Spock desintegra piedra.
La piedra aplasta las tijeras.*/


/* CONTENEDOR MAGICO 

0-Piedra
1-Papel
2-Tijeras
3-Lagarto
4-Spock

0-Empatas
1-Ganas
2-Pierdes
*/

function opcion(humano) {

    var resultadoTxt = ["Empate", "Ganas", "Pierdes"];
    var nombre = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    var jugada = [
        [0, 1, 2, 2, 1],
        [2, 0, 1, 1, 2],
        [1, 2, 0, 2, 1],
        [1, 2, 1, 0, 2],
        [2, 1, 2, 1, 0]
    ];

    var cpu = Math.floor((Math.random() * 5));
    var resultado = jugada[cpu][humano];

    var id_tu = document.getElementById("tu");
    var id_cpu = document.getElementById("cpu");
    var id_vs = document.getElementById("vs");
    var id_resultado = document.getElementById("resultado");

    if (nombre[humano] == nombre[0]) {
        id_tu.style.background = "url('../image/piedra.png')";
    }
    if (nombre[humano] == nombre[1]) {
        id_tu.style.background = "url('../image/papel.png')";
    }
    if (nombre[humano] == nombre[2]) {
        id_tu.style.background = "url('../image/tijera.png')";
    }
    if (nombre[humano] == nombre[3]) {
        id_tu.style.background = "url('../image/lagarto.png')";
    }
    if (nombre[humano] == nombre[4]) {
        id_tu.style.background = "url('../image/spock.png')";
    }


    if (nombre[cpu] == nombre[0]) {
        id_cpu.style.background = "url('/image/piedra.png')";
    }
    if (nombre[cpu] == nombre[1]) {
        id_cpu.style.background = "url('../image/papel.png')";
    }
    if (nombre[cpu] == nombre[2]) {
        id_cpu.style.background = "url('../image/tijera.png')";
    }
    if (nombre[cpu] == nombre[3]) {
        id_cpu.style.background = "url('../image/lagarto.png')";
    }
    if (nombre[cpu] == nombre[4]) {
        id_cpu.style.background = "url('../image/spock.png')";
    }


    if (resultadoTxt[resultado] == resultadoTxt[0] || (resultadoTxt[resultado] == resultadoTxt[1]) || (resultadoTxt[resultado] == resultadoTxt[2])) {
        id_vs.style.background = "url('../image/versus.webp') no-repeat";
        id_vs.style.backgroundSize = "150px 150px";
    }

    if (resultadoTxt[resultado] == resultadoTxt[0]) {
        // id_resultado.value = "Empate";
        id_resultado.textContent = "Empatas"
    }

    if (resultadoTxt[resultado] == resultadoTxt[1]) {
        // id_resultado.value = "Tu Ganas";
        id_resultado.textContent = "¡ Ganaste ! "
    }

    if (resultadoTxt[resultado] == resultadoTxt[2]) {
        // id_resultado.value = "Tu Pierdes";
        id_resultado.textContent = " Has perdido"
    }

    console.log("Has elegido " + nombre[humano]); /* muestra en consola los parámmetros */
    console.log("La máquina ha elegido " + nombre[cpu]);
    console.log("Has " + resultadoTxt[resultado]);
}