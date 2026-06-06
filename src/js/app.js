// Variables globales
var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var quincenal = document.querySelector(".quincenal");
var mensual = document.querySelector(".mensual");
var micheck = document.getElementById('check'); // Ya no se usa, pero lo dejo si el HTML lo tiene
// var bna = document.querySelector("#bna");

document.querySelectorAll('input[name="estrategia"]').forEach(function(radio) {
    radio.addEventListener('change', actualizarBotonesPorEstrategia);
});

actualizarBotonesPorEstrategia();

// Variable global del mensaje WhatsApp
let mensajeWhatsApp = '';

// Porcentajes
// const porcent_contado = 1.6; // Precio contado = costo * 1.5
const porcent_contado = 1.7; // Precio contado = costo * 1.5
const PORCENT_CONTADO_NORMAL = 1.7;
const PORCENT_CONTADO_DORADA = 1.3;
const interes_mensual = 1.10; // 10% por mes (interés compuesto)


// Event listeners
// bna.addEventListener('click', () => promoBNA());
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

// function obtenerEstrategiaSeleccionada() {
//     return document.querySelector('input[name="estrategia"]:checked')?.value || 'normal';
// }
function obtenerEstrategiaSeleccionada() {
    const estrategiaSeleccionada = document.querySelector('input[name="estrategia"]:checked');

    if (!estrategiaSeleccionada) {
        return 'normal';
    }

    return estrategiaSeleccionada.value;
}

function obtenerCoeficienteContado() {
    const estrategia = obtenerEstrategiaSeleccionada();

    if (estrategia === 'dorada') {
        return PORCENT_CONTADO_DORADA;
    }

    return PORCENT_CONTADO_NORMAL;
}

function calcularFinanciacionExtendida(contado) {
    const cuotaAntes = Math.ceil((contado * Math.pow(interes_mensual, 7.5)) / 30);
    const cuotaAhora = Math.ceil((contado * Math.pow(interes_mensual, 5)) / 30);

    return {
        cuotaAntes,
        cuotaAhora
    };
}

// Función principal para calcular cuotas
function calcularCuotas(tipo) {
    const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) listadoAnterior.remove();

    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;

    if (costo > 0) {
        // const contado = Math.ceil(costo * porcent_contado);
        const estrategia = obtenerEstrategiaSeleccionada();

        const contado = Math.ceil(costo * obtenerCoeficienteContado());

        if (estrategia === 'plateada') {
            if (tipo !== 'semanales') {
                alert('Águilas Plateadas solo aplica a financiación semanal extendida.');
                return;
            }

            const extendida = calcularFinanciacionExtendida(contado);

            const texto = document.createElement('P');
            texto.classList.add('listado');

            const cuotasElement = document.querySelector(".cuotas");
            cuotasElement.appendChild(texto);

            texto.innerHTML = generarTextoFinanciacionExtendida(nombreProducto, extendida);
            mensajeWhatsApp = generarMensajeFinanciacionExtendida(nombreProducto, extendida);

            return;
        }
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
// function promoBNA() {
//     const listadoAnterior = document.querySelector('.listado');
//     if (listadoAnterior) listadoAnterior.remove();

//     const costo = document.getElementById("costo").value;
//     const nombreProducto = document.getElementById('producto').value;

//     if (costo > 0) {
//         const contado = Math.ceil(costo * porcent_contado);
//         const monto = Math.ceil(contado * interes_mensual ** 2);
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

function generarTexto(tipo, nombreProducto, contado, cuotas) {
    // let texto = `Producto: ${nombreProducto}<br><br>Contado: $${contado}<br>`;
    let texto = `Producto: ${nombreProducto}<br>`;
    const letraTipo = tipo[0];
    for (let cuota in cuotas) {
        let numeroCuotas = cuota.replace(letraTipo, '');
        texto += `${numeroCuotas} cuotas ${tipo} de $${cuotas[cuota]}<br>`;
    }
    return texto;
}

function generarMensaje(tipo, nombreProducto, contado, cuotas) {
    let mensaje = `Producto: ${nombreProducto}%0A`;
    const letra = tipo[0];
    for (let cuota in cuotas) {
        let cuotaTexto = cuota.slice(1).toUpperCase().replace(/_/g, ' ');
        mensaje += `${cuotaTexto} cuotas ${tipo} de $${cuotas[cuota]}%0A`;
    }
    return mensaje;
}

function generarTextoFinanciacionExtendida(nombreProducto, extendida) {
    let texto = `Producto: ${nombreProducto}<br>`;
    texto += `Antes: 30 cuotas semanales de $${extendida.cuotaAntes}<br>`;
    texto += `Ahora!: 30 cuotas semanales de $${extendida.cuotaAhora}<br>`;

    return texto;
}

function generarMensajeFinanciacionExtendida(nombreProducto, extendida) {
    let mensaje = `Producto: ${nombreProducto}%0A`;
    mensaje += `Antes: 30 cuotas semanales de $${extendida.cuotaAntes}%0A`;
    mensaje += `Ahora!: 30 cuotas semanales de $${extendida.cuotaAhora}%0A`;

    return mensaje;
}

function actualizarBotonesPorEstrategia() {
    const estrategia = obtenerEstrategiaSeleccionada();
    const esPlateada = estrategia === 'plateada';

    diario.disabled = esPlateada;
    quincenal.disabled = esPlateada;
    mensual.disabled = esPlateada;

    diario.classList.toggle('deshabilitado', esPlateada);
    quincenal.classList.toggle('deshabilitado', esPlateada);
    mensual.classList.toggle('deshabilitado', esPlateada);
}