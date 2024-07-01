//variables
let numeroMaximoPosible = 100;
let numeroSecreto = (Math.floor (Math.random()*numeroMaximoPosible)+1);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log("valor intento:", typeof(numeroUsuario));
    /*
    Este codigo realiza la comparacion
    */

    if (numeroUsuario == numeroSecreto) {
        //acertamos la condicion 
        alert (`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
    } else {
        //no acertamos la condicion 
            if (numeroUsuario > numeroSecreto) {
                alert ("El numero es menor");
            } else {
                alert ("el numero secreto es mayor");
            } //incrementamos el contador cuando no aciert
            //intentos= intentos +1
            //intentos += 1;
            intentos ++;
            //palabraVeces = "veces";
            if (intentos > maximosIntentos) {alert (`llegaste al número maximo de ${maximosIntentos} intentos`); break;
            }
            //la condicion no se cumplio
            // alert ("lo siento, no acertaste el numero")
        }
}
