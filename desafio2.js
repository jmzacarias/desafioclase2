let edad = prompt ("¿Cuántos años tenés?");
let anioNacimiento = prompt ("¿En qué año naciste?");

let edadParseada = parseInt(edad);
let anioParseado = parseInt(anioNacimiento);

if (anioParseado + edadParseada == 2021) {
    alert ("Ya cumpliste años en 2021")
}
else {
    alert ("Aún no cumpliste años en 2021")
}