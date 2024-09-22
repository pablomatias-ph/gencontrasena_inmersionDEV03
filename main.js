let cantidad = document.getElementById("cantidad");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";

function generar() {
    let numerDigitado = parseInt(cantidad.value);

    if (isNaN(numerDigitado) || numerDigitado < 8) {
        alert("ERROR de seguridad: La cantidad de caracteres debe ser mayor que 8");
        cantidad.value = "0";
        return;
    }

    let password = "";
    for (let i = 0; i < numerDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
}

function verificar(Contrasena) {
    let verificarMinusculas = 0;
    let verificarMayusculas = 0;
    let verificarNumeros = 0;
    let verificarCaracteres = 0;

    if (Contrasena.match(/[a-z]/)) verificarMinusculas += 1;
    if (Contrasena.match(/[A-Z]/)) verificarMayusculas += 1;
    if (Contrasena.match(/[0-9]/)) verificarNumeros += 1;
    if (Contrasena.match(/[!#$%&()*+,-./:;<=>?@[\]^_`{|}~]/)) verificarCaracteres += 1;

    if (verificarMinusculas >= 1 && verificarMayusculas >= 1 && verificarNumeros >= 1 && verificarCaracteres >= 1) {
        alert("SEGURIDAD ACTIVADA");
    } else {
        alert("Se aconseja generar una contraseña más segura");
    }
}

function limpiar() {
    cantidad.value = "0";
    contrasena.value = "";
}