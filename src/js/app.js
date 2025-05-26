// //-------------------CHAT GPT

// // Variables globales
// // var bna = document.querySelector("#bna");
// var diario = document.querySelector(".diario");
// var semanal = document.querySelector(".semanal");
// var quincenal = document.querySelector(".quincenal");
// var mensual = document.querySelector(".mensual");
// var micheck = document.getElementById('check');

// // Porcentajes
// const porcent_contado = 1.4;
// const porcent_cuotas = 1.10;
// const porcent_150 = 1.25;

// // Event listeners
// bna.addEventListener('click', () => promoBNA());
// micheck.addEventListener('click', () => {});

// diario.addEventListener("click", () => calcularCuotas('diarias'));
// semanal.addEventListener('click', () => calcularCuotas('semanales'));
// quincenal.addEventListener('click', () => calcularCuotas('quincenales'));
// mensual.addEventListener('click', () => calcularCuotas('mensuales'));

// // Función principal para calcular cuotas
// function calcularCuotas(tipo) {
//     const listadoAnterior = document.querySelector('.listado');
//     if (listadoAnterior) {
//         listadoAnterior.remove();
//     }

//     const costo = document.getElementById("costo").value;
//     const nombreProducto = document.getElementById('producto').value;

//     if (costo > 0) {
//         const contado = Math.ceil(costo * porcent_contado);
//         const cuotas = calcularValores(tipo, contado);

//         // Crear y mostrar el texto
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotasElement = document.querySelector(".cuotas");
//         cuotasElement.appendChild(texto);

//         const cuotasTexto = generarTexto(tipo, nombreProducto, contado, cuotas);
//         texto.innerHTML = cuotasTexto;

//         // Crear el mensaje para WhatsApp
//         const mensaje = generarMensaje(tipo, nombreProducto, contado, cuotas);

//         // Enviar mensaje por WhatsApp
//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             // window.location.href = 'https://api.whatsapp.com/send?text=' + mensaje;
//             window.location.href = `https://wa.me/?text=${mensaje}`;

//         });
//     }
// }

// // Función para calcular los valores de las cuotas
// function calcularValores(tipo, contado) {
//     let cuotas = {};
//     if (tipo === 'diarias') {
//         cuotas = calcularCuotasDiarias(contado);
//     } else if (tipo === 'semanales') {
//         cuotas = calcularCuotasSemanales(contado);
//     } else if (tipo === 'quincenales') {
//         cuotas = calcularCuotasQuincenales(contado);
//     } else if (tipo === 'mensuales') {
//         cuotas = calcularCuotasMensuales(contado);
//     }
//     return cuotas;
// }

// // Funciones para calcular las cuotas de cada tipo
// function calcularCuotasDiarias(contado) {
//     if(micheck.checked){
//         return {
//             c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
//             c40: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40),
//             c60: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60),
//             c80: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80),
//             c100: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100),
//             c150: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150)
//         };
//     }else{
//         return {
//             c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
//             c40: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40),
//             c60: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60)
//         };
//     }    
// }

// function calcularCuotasSemanales(contado) {
//     if(micheck.checked){
//         return {
//             s4: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5,
//             s8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5,
//             s12: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5,
//             s16: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80) * 5,
//             s20: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100) * 5,
//             s30: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150) * 5
//         };
//     }else{
//         return {
//             s4: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5,
//             s8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5,
//             s12: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5
//         };
//     }
    
// }

// function calcularCuotasQuincenales(contado) {
//     if(micheck.checked){
//         return {
//             q2: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5 * 2,
//             q4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5 * 2,
//             q6: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5 * 2,
//             q8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80) * 5 * 2,
//             q10: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100) * 5 * 2,
//             q15: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150) * 5 * 2
//         };
//     }else{
//         return {
//             q2: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5 * 2,
//             q4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5 * 2,
//             q6: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5 * 2
//         };
//     }    
// }

// function calcularCuotasMensuales(contado) {
//     if(micheck.checked){
//         return {
//             m2: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 2),
//             m3: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 3),
//             m4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 4),
//             m5: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 5)
//         };
//     }else{
//         return {
//             m2: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 2),
//             m3: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 3)
//         };
//     }    
// }

// function promoBNA(){
//    const listadoAnterior = document.querySelector('.listado');
//     if (listadoAnterior) {
//         listadoAnterior.remove();
//     }
//     const costo = document.getElementById("costo").value;
//     const nombreProducto = document.getElementById('producto').value;
//     if (costo > 0) {
//         const contado = Math.ceil(costo * porcent_contado);
//         const monto = Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas));
//         const cuotasPromo = 12;
//         const montoCuotasPromo = Math.ceil(Math.ceil(monto/cuotasPromo));
//         const reintegro = Math.ceil(Math.ceil(contado * 15/100));

//         // Crear y mostrar el texto
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotasElement = document.querySelector(".cuotas");
//         cuotasElement.appendChild(texto);
//         let textoMostrar = `Producto: ${nombreProducto}<br><br>Monto: $${monto}<br>`;            
//             // Armamos el texto con el formato adecuado
//             textoMostrar += `${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}<br>`;
//             textoMostrar += `$${reintegro} de Reintegro!<br>`;       
//         texto.innerHTML = textoMostrar;

//         // Crear el mensaje para WhatsApp
//         let textoEnviar = `Producto: ${nombreProducto}%0A%0AMonto: $${monto}%0A`;            
//             // Armamos el texto con el formato adecuado
//             textoEnviar += `${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}%0A`;
//             textoEnviar += `$${reintegro} de Reintegro!%0A`;       
//         texto.innerHTML = textoMostrar;
//         // const mensaje = generarMensaje(tipo, nombreProducto, contado, cuotas);

//         // Enviar mensaje por WhatsApp
//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             window.location.href = 'https://api.whatsapp.com/send?text=' + textoEnviar;
//         });
//     }
// }

// // Función para generar el texto a mostrar en la página
// function generarTexto(tipo, nombreProducto, contado, cuotas) {
//     let texto = `Producto: ${nombreProducto}<br><br>Contado: $${contado}<br>`;

//     // Establecemos qué letra cortar según el tipo
//     let letraTipo = '';
//     if (tipo === 'diarias') {
//         letraTipo = 'c';
//     } else if (tipo === 'semanales') {
//         letraTipo = 's';
//     } else if (tipo === 'quincenales') {
//         letraTipo = 'q';
//     } else if (tipo === 'mensuales') {
//         letraTipo = 'm';
//     }

//     // Recorremos las cuotas y las formateamos
//     for (let cuota in cuotas) {
//         // Cortamos la letra correspondiente del nombre de la cuota
//         let numeroCuotas = cuota.replace(letraTipo, '');
        
//         // Armamos el texto con el formato adecuado
//         texto += `${numeroCuotas} cuotas ${tipo} de $${cuotas[cuota]}<br>`;
//     }

//     return texto;
// }


// // Función para generar el mensaje para WhatsApp
// function generarMensaje(tipo, nombreProducto, contado, cuotas) {
//     let mensaje = `Producto: ${nombreProducto}%0A%0AContado: $${contado}%0A`;
    
//     // Determinamos la letra que se debe cortar según el tipo de plan
//     let letra = '';
//     switch (tipo) {
//         case 'diarias':
//             letra = 'c';
//             break;
//         case 'semanales':
//             letra = 's';
//             break;
//         case 'quincenales':
//             letra = 'q';
//             break;
//         case 'mensuales':
//             letra = 'm';
//             break;
//     }

//     // Generamos el mensaje con el formato adecuado
//     for (let cuota in cuotas) {
//         // Cortamos la letra correspondiente de la cuota y la formateamos
//         let cuotaTexto = cuota.slice(1).toUpperCase().replace(/_/g, ' ');
//         mensaje += `${cuotaTexto} cuotas ${tipo} de $${cuotas[cuota]}%0A`;
//         // mensaje += `${cuotaTexto} de $${cuotas[cuota]}%0A`;
//     }

//     return mensaje;
// }

//--------------------------------------------------------//
//-------------------CHAT GPT

// Variables globales
var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var quincenal = document.querySelector(".quincenal");
var mensual = document.querySelector(".mensual");
var micheck = document.getElementById('check');
var bna = document.querySelector("#bna");

// Variable global del mensaje WhatsApp
let mensajeWhatsApp = '';

// Porcentajes
const porcent_contado = 1.4;
const porcent_cuotas = 1.10;
const porcent_150 = 1.25;

// Event listeners
bna.addEventListener('click', () => promoBNA());
micheck.addEventListener('click', () => {});
diario.addEventListener("click", () => calcularCuotas('diarias'));
semanal.addEventListener('click', () => calcularCuotas('semanales'));
quincenal.addEventListener('click', () => calcularCuotas('quincenales'));
mensual.addEventListener('click', () => calcularCuotas('mensuales'));

// Listener único de WhatsApp
const botonEnviar = document.querySelector('.whatsapp');
botonEnviar.addEventListener('click', () => {
    if (mensajeWhatsApp) {
        window.location.href = `https://wa.me/?text=${mensajeWhatsApp}`;
    } else {
        alert("Primero generá un plan de cuotas.");
    }
});

// Función principal para calcular cuotas
function calcularCuotas(tipo) {
    const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) listadoAnterior.remove();

    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;

    if (costo > 0) {
        const contado = Math.ceil(costo * porcent_contado);
        const cuotas = calcularValores(tipo, contado);

        // Mostrar cuotas en pantalla
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotasElement = document.querySelector(".cuotas");
        cuotasElement.appendChild(texto);

        const cuotasTexto = generarTexto(tipo, nombreProducto, contado, cuotas);
        texto.innerHTML = cuotasTexto;

        // Actualizar mensaje global de WhatsApp
        mensajeWhatsApp = generarMensaje(tipo, nombreProducto, contado, cuotas);
    }
}

// Funciones de cálculo de cuotas (sin cambios)
function calcularValores(tipo, contado) {
    let cuotas = {};
    if (tipo === 'diarias') cuotas = calcularCuotasDiarias(contado);
    else if (tipo === 'semanales') cuotas = calcularCuotasSemanales(contado);
    else if (tipo === 'quincenales') cuotas = calcularCuotasQuincenales(contado);
    else if (tipo === 'mensuales') cuotas = calcularCuotasMensuales(contado);
    return cuotas;
}

function calcularCuotasDiarias(contado) {
    if(micheck.checked){
        return {
            c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
            c40: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            c60: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 60),
            c80: Math.ceil(Math.ceil(contado * porcent_cuotas ** 4) / 80),
            c100: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5) / 100),
            c150: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
        };
    } else {
        return {
            c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
            c40: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            c60: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 60)
        };
    }    
}

function calcularCuotasSemanales(contado) {
    const mult = (val) => Math.ceil(val) * 5;
    if(micheck.checked){
        return {
            s4: mult(Math.ceil(contado * porcent_cuotas) / 20),
            s8: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            s12: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60),
            s16: mult(Math.ceil(contado * porcent_cuotas ** 4) / 80),
            s20: mult(Math.ceil(contado * porcent_cuotas ** 5) / 100),
            s30: mult(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
        };
    } else {
        return {
            s4: mult(Math.ceil(contado * porcent_cuotas) / 20),
            s8: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            s12: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60)
        };
    }
}

function calcularCuotasQuincenales(contado) {
    const mult = (val) => Math.ceil(val) * 10; // 5 * 2
    if(micheck.checked){
        return {
            q2: mult(Math.ceil(contado * porcent_cuotas) / 20),
            q4: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            q6: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60),
            q8: mult(Math.ceil(contado * porcent_cuotas ** 4) / 80),
            q10: mult(Math.ceil(contado * porcent_cuotas ** 5) / 100),
            q15: mult(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
        };
    } else {
        return {
            q2: mult(Math.ceil(contado * porcent_cuotas) / 20),
            q4: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
            q6: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60)
        };
    }    
}

function calcularCuotasMensuales(contado) {
    if(micheck.checked){
        return {
            m2: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 2),
            m3: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 3),
            m4: Math.ceil(Math.ceil(contado * porcent_cuotas ** 4) / 4),
            m5: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5) / 5)
        };
    } else {
        return {
            m2: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 2),
            m3: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 3)
        };
    }    
}

function promoBNA() {
    const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) listadoAnterior.remove();

    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;

    if (costo > 0) {
        const contado = Math.ceil(costo * porcent_contado);
        const monto = Math.ceil(contado * porcent_cuotas ** 2);
        const cuotasPromo = 12;
        const montoCuotasPromo = Math.ceil(monto / cuotasPromo);
        const reintegro = Math.ceil(contado * 15 / 100);

        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotasElement = document.querySelector(".cuotas");
        cuotasElement.appendChild(texto);

        const textoMostrar = `
            Producto: ${nombreProducto}<br><br>
            Monto: $${monto}<br>
            ${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}<br>
            $${reintegro} de Reintegro!<br>
        `;
        texto.innerHTML = textoMostrar;

        mensajeWhatsApp = `Producto: ${nombreProducto}%0A%0AMonto: $${monto}%0A${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}%0A$${reintegro} de Reintegro!%0A`;
    }
}

function generarTexto(tipo, nombreProducto, contado, cuotas) {
    let texto = `Producto: ${nombreProducto}<br><br>Contado: $${contado}<br>`;
    const letraTipo = tipo[0];
    for (let cuota in cuotas) {
        let numeroCuotas = cuota.replace(letraTipo, '');
        texto += `${numeroCuotas} cuotas ${tipo} de $${cuotas[cuota]}<br>`;
    }
    return texto;
}

function generarMensaje(tipo, nombreProducto, contado, cuotas) {
    let mensaje = `Producto: ${nombreProducto}%0A%0AContado: $${contado}%0A`;
    const letra = tipo[0];
    for (let cuota in cuotas) {
        let cuotaTexto = cuota.slice(1).toUpperCase().replace(/_/g, ' ');
        mensaje += `${cuotaTexto} cuotas ${tipo} de $${cuotas[cuota]}%0A`;
    }
    return mensaje;
}
