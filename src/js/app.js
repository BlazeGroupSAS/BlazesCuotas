// //-------------------CHAT GPT

// // Variables globales
// var diario = document.querySelector(".diario");
// var semanal = document.querySelector(".semanal");
// var quincenal = document.querySelector(".quincenal");
// var mensual = document.querySelector(".mensual");
// var micheck = document.getElementById('check');
// var bna = document.querySelector("#bna");

// // Variable global del mensaje WhatsApp
// let mensajeWhatsApp = '';

// // Porcentajes
// // const porcent_contado = 1.4; // Día del Padre 2025
// const porcent_contado = 1.5;
// const porcent_cuotas = 1.10;
// const porcent_150 = 1.25;

// // Event listeners
// bna.addEventListener('click', () => promoBNA());
// micheck.addEventListener('click', () => {});
// diario.addEventListener("click", () => calcularCuotas('diarias'));
// semanal.addEventListener('click', () => calcularCuotas('semanales'));
// quincenal.addEventListener('click', () => calcularCuotas('quincenales'));
// mensual.addEventListener('click', () => calcularCuotas('mensuales'));

// // Listener único de WhatsApp
// const botonEnviar = document.querySelector('.whatsapp');
// botonEnviar.addEventListener('click', () => {
//     if (mensajeWhatsApp) {
//         window.location.href = `https://wa.me/?text=${mensajeWhatsApp}`;
//     } else {
//         alert("Primero generá un plan de cuotas.");
//     }
// });

// // Función principal para calcular cuotas
// function calcularCuotas(tipo) {
//     const listadoAnterior = document.querySelector('.listado');
//     if (listadoAnterior) listadoAnterior.remove();

//     const costo = document.getElementById("costo").value;
//     const nombreProducto = document.getElementById('producto').value;

//     if (costo > 0) {
//         const contado = Math.ceil(costo * porcent_contado);
//         const cuotas = calcularValores(tipo, contado);

//         // Mostrar cuotas en pantalla
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotasElement = document.querySelector(".cuotas");
//         cuotasElement.appendChild(texto);

//         const cuotasTexto = generarTexto(tipo, nombreProducto, contado, cuotas);
//         texto.innerHTML = cuotasTexto;

//         // Actualizar mensaje global de WhatsApp
//         mensajeWhatsApp = generarMensaje(tipo, nombreProducto, contado, cuotas);
//     }
// }

// // Funciones de cálculo de cuotas (sin cambios)
// function calcularValores(tipo, contado) {
//     let cuotas = {};
//     if (tipo === 'diarias') cuotas = calcularCuotasDiarias(contado);
//     else if (tipo === 'semanales') cuotas = calcularCuotasSemanales(contado);
//     else if (tipo === 'quincenales') cuotas = calcularCuotasQuincenales(contado);
//     else if (tipo === 'mensuales') cuotas = calcularCuotasMensuales(contado);
//     return cuotas;
// }

// function calcularCuotasDiarias(contado) {
//     if(micheck.checked){
//         return {
//             c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
//             c40: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             c60: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 60),
//             c80: Math.ceil(Math.ceil(contado * porcent_cuotas ** 4) / 80),
//             c100: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5) / 100),
//             c150: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
//         };
//     } else {
//         return {
//             c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
//             c40: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             c60: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 60)
//         };
//     }    
// }

// function calcularCuotasSemanales(contado) {
//     const mult = (val) => Math.ceil(val) * 5;
//     if(micheck.checked){
//         return {
//             s4: mult(Math.ceil(contado * porcent_cuotas) / 20),
//             s8: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             s12: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60),
//             s16: mult(Math.ceil(contado * porcent_cuotas ** 4) / 80),
//             s20: mult(Math.ceil(contado * porcent_cuotas ** 5) / 100),
//             s30: mult(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
//         };
//     } else {
//         return {
//             s4: mult(Math.ceil(contado * porcent_cuotas) / 20),
//             s8: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             s12: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60)
//         };
//     }
// }

// function calcularCuotasQuincenales(contado) {
//     const mult = (val) => Math.ceil(val) * 10; // 5 * 2
//     if(micheck.checked){
//         return {
//             q2: mult(Math.ceil(contado * porcent_cuotas) / 20),
//             q4: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             q6: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60),
//             q8: mult(Math.ceil(contado * porcent_cuotas ** 4) / 80),
//             q10: mult(Math.ceil(contado * porcent_cuotas ** 5) / 100),
//             q15: mult(Math.ceil(contado * porcent_cuotas ** 5 * porcent_150) / 150)
//         };
//     } else {
//         return {
//             q2: mult(Math.ceil(contado * porcent_cuotas) / 20),
//             q4: mult(Math.ceil(contado * porcent_cuotas ** 2) / 40),
//             q6: mult(Math.ceil(contado * porcent_cuotas ** 3) / 60)
//         };
//     }    
// }

// function calcularCuotasMensuales(contado) {
//     if(micheck.checked){
//         return {
//             m2: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 2),
//             m3: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 3),
//             m4: Math.ceil(Math.ceil(contado * porcent_cuotas ** 4) / 4),
//             m5: Math.ceil(Math.ceil(contado * porcent_cuotas ** 5) / 5)
//         };
//     } else {
//         return {
//             m2: Math.ceil(Math.ceil(contado * porcent_cuotas ** 2) / 2),
//             m3: Math.ceil(Math.ceil(contado * porcent_cuotas ** 3) / 3)
//         };
//     }    
// }

// function promoBNA() {
//     const listadoAnterior = document.querySelector('.listado');
//     if (listadoAnterior) listadoAnterior.remove();

//     const costo = document.getElementById("costo").value;
//     const nombreProducto = document.getElementById('producto').value;

//     if (costo > 0) {
//         const contado = Math.ceil(costo * porcent_contado);
//         const monto = Math.ceil(contado * porcent_cuotas ** 2);
//         const cuotasPromo = 12;
//         const montoCuotasPromo = Math.ceil(monto / cuotasPromo);
//         const reintegro = Math.ceil(contado * 15 / 100);

//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotasElement = document.querySelector(".cuotas");
//         cuotasElement.appendChild(texto);

//         const textoMostrar = `
//             Producto: ${nombreProducto}<br><br>
//             Monto: $${monto}<br>
//             ${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}<br>
//             $${reintegro} de Reintegro!<br>
//         `;
//         texto.innerHTML = textoMostrar;

//         mensajeWhatsApp = `Producto: ${nombreProducto}%0A%0AMonto: $${monto}%0A${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}%0A$${reintegro} de Reintegro!%0A`;
//     }
// }

// function generarTexto(tipo, nombreProducto, contado, cuotas) {
//     let texto = `Producto: ${nombreProducto}<br><br>Contado: $${contado}<br>`;
//     const letraTipo = tipo[0];
//     for (let cuota in cuotas) {
//         let numeroCuotas = cuota.replace(letraTipo, '');
//         texto += `${numeroCuotas} cuotas ${tipo} de $${cuotas[cuota]}<br>`;
//     }
//     return texto;
// }

// function generarMensaje(tipo, nombreProducto, contado, cuotas) {
//     let mensaje = `Producto: ${nombreProducto}%0A%0AContado: $${contado}%0A`;
//     const letra = tipo[0];
//     for (let cuota in cuotas) {
//         let cuotaTexto = cuota.slice(1).toUpperCase().replace(/_/g, ' ');
//         mensaje += `${cuotaTexto} cuotas ${tipo} de $${cuotas[cuota]}%0A`;
//     }
//     return mensaje;
// }


// Variables globales
var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var quincenal = document.querySelector(".quincenal");
var mensual = document.querySelector(".mensual");
var micheck = document.getElementById('check'); // Ya no se usa, pero lo dejo si el HTML lo tiene
var bna = document.querySelector("#bna");

// Variable global del mensaje WhatsApp
let mensajeWhatsApp = '';

// Porcentajes
const porcent_contado = 1.6; // Precio contado = costo * 1.5
const interes_mensual = 1.10; // 10% por mes (interés compuesto)

// Event listeners
bna.addEventListener('click', () => promoBNA());
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

// Nueva función para calcular cuotas según tipo
function calcularValores(tipo, contado) {
    let planes = {};

    if (tipo === 'diarias') {
        const opciones = micheck.checked ? [20, 40, 60, 80, 100, 150] : [20, 40, 60];
        opciones.forEach(cuotas => {
            const meses = cuotas / 20; // 20 días hábiles ≈ 1 mes
            const total = contado * Math.pow(interes_mensual, meses);
            planes[`c${cuotas}`] = Math.ceil(total / cuotas);
        });
    }

    if (tipo === 'semanales') {
        const opciones = micheck.checked ? [4, 8, 12, 16, 20, 30] : [4, 8, 12];
        opciones.forEach(cuotas => {
            const meses = cuotas / 4; // 4 semanas ≈ 1 mes
            const total = contado * Math.pow(interes_mensual, meses);
            planes[`s${cuotas}`] = Math.ceil(total / cuotas);
        });
    }

    if (tipo === 'quincenales') {
        const opciones = micheck.checked ? [2, 4, 6, 8, 10, 15] : [2, 4, 6];
        opciones.forEach(cuotas => {
            const meses = cuotas / 2; // 2 quincenas = 1 mes
            const total = contado * Math.pow(interes_mensual, meses);
            planes[`q${cuotas}`] = Math.ceil(total / cuotas);
        });
    }

    if (tipo === 'mensuales') {
        const opciones = micheck.checked ? [2, 3, 4, 5] : [2, 3];
        opciones.forEach(cuotas => {
            const meses = cuotas; // mensual = 1 cuota por mes
            const total = contado * Math.pow(interes_mensual, meses);
            planes[`m${cuotas}`] = Math.ceil(total / cuotas);
        });
    }

    return planes;
}

// Promo BNA (mantiene la lógica original)
function promoBNA() {
    const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) listadoAnterior.remove();

    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;

    if (costo > 0) {
        const contado = Math.ceil(costo * porcent_contado);
        const monto = Math.ceil(contado * interes_mensual ** 2);
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
