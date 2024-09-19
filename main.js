let cantidad = document.getElementById ('cantidad');
let boton = document.getElementById ('generar');
let contrasema = document.getElementById('contrasena');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';



function generar () {
    
    let numerDigitado = parseInt (cantidad.value);
    
    if ( numerDigitado < 8){
        alert ("La cantidad de caracters debe ser mayor que 8");
    }
    let password = '';

    for (let i=0; i < numerDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres [Math.floor (Math.random() * cadenaCaracteres.length)];
    
        password+= caracterAleatorio;
        
    }

    contrasema.value = password;
}