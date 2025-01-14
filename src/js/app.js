// var diario = document.querySelector(".diario");
// var semanal = document.querySelector(".semanal");
// var quincenal = document.querySelector(".quincenal");
// var mensual = document.querySelector(".mensual");
// var micheck = document.getElementById('check');
// var bnacheck = document.getElementById('bna');

// var porcent_contado = 1.5;
// var porcent_cuotas = 1.10;
// var porcent_150 = 1.25;


// micheck.addEventListener('click', ()=>{
//     const mensaje = '';
// });

// diario.addEventListener("click", calculardiarias);
// semanal.addEventListener('click', calcularsemanales);
// quincenal.addEventListener('click', calcularquincenales);
// mensual.addEventListener('click', calcularmensuales);

// function calculardiarias(){
//     const listadoAnterior = document.querySelector('.listado');
//     if(listadoAnterior){
//         const mensaje = '';
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.removeChild(listadoAnterior);
//     }    
//     var costo = document.getElementById("costo").value;
//     var nombreProducto = document.getElementById('producto').value;
//     if(costo > 0){
//         //-------------- Se Crean Las Variables de Las Cuotas
//         var contado = Math.ceil(costo*porcent_contado);

//         var totalc20 = Math.ceil(contado*porcent_cuotas);
//         var c20 = Math.ceil(totalc20/20);
        
//         var totalc40 = Math.ceil(totalc20*porcent_cuotas);
//         var c40 = Math.ceil(totalc40/40);
        
//         var totalc60 = Math.ceil(totalc40*porcent_cuotas);
//         var c60 = Math.ceil(totalc60/60);
        
//         var totalc80 = Math.ceil(totalc60*porcent_cuotas);
//         var c80 = Math.ceil(totalc80/80);
        
//         var totalc100 = Math.ceil(totalc80*porcent_cuotas);
//         var c100 = Math.ceil(totalc100/100);
        
//         var totalc150 = Math.ceil(totalc100*porcent_150);
//         var c150 = Math.ceil(totalc150/150);
//         //--------------

//         //------------- Se Crea El Texto Para Mostrar En la Pagina
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.appendChild(texto);

//         if(micheck.checked){
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '20 Cuotas Diarias de $'+ c20 +
//             '<br>' +
//             '40 Cuotas Diarias de $'+ c40 +
//             '<br>' +
//             '60 Cuotas Diarias de $'+ c60 +
//             '<br>' +
//             '80 Cuotas Diarias de $'+ c80 +
//             '<br>' +
//             '100 Cuotas Diarias de $'+ c100 +
//             '<br>' +
//             '150 Cuotas Diarias de $'+ c150
//             ;
//         }else{
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '20 Cuotas Diarias de $'+ c20 +
//             '<br>' +
//             '40 Cuotas Diarias de $'+ c40 +
//             '<br>' +
//             '60 Cuotas Diarias de $'+ c60
//             ;          
//         }
//         //--------------

//         //------------- Se Crea El Mensaje Para Enviar
//         if(micheck.checked){
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '20 Cuotas Diarias de $'+ c20 +
//             '%0A' +
//             '40 Cuotas Diarias de $'+ c40 +
//             '%0A' +
//             '60 Cuotas Diarias de $'+ c60 +
//             '%0A' +
//             '80 Cuotas Diarias de $'+ c80 +
//             '%0A' +
//             '100 Cuotas Diarias de $'+ c100 +
//             '%0A' +
//             '150 Cuotas Diarias de $'+ c150
//             ;
//             mensaje = 'send?text=' + textoEnviar;
//         }else{
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '20 Cuotas Diarias de $'+ c20 +
//             '%0A' +
//             '40 Cuotas Diarias de $'+ c40 +
//             '%0A' +
//             '60 Cuotas Diarias de $'+ c60
//             ;
//             mensaje = 'send?text=' + textoEnviar;
//         }

//         // const botonEnviar = document.querySelector('.whatsapp');
//         // botonEnviar.addEventListener('click', ()=>{
//         //     window.open('https://api.whatsapp.com/' + mensaje, '_blank');
//         // });
//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             window.location.href = 'https://api.whatsapp.com/' + mensaje;
//         });
//     }
// };

// function calcularsemanales(){
//     const listadoAnterior = document.querySelector('.listado');
//     if(listadoAnterior){
//         const mensaje = '';
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.removeChild(listadoAnterior);
//     }
//     var costo = document.getElementById("costo").value;
//     var nombreProducto = document.getElementById('producto').value;
//     if(costo > 0){
//         //-------------- Se Crean Las Variables de Las Cuotas
//         var contado = Math.ceil(costo*porcent_contado);

//         var totals4 = Math.ceil(contado*porcent_cuotas);
//         var s4 = Math.ceil(totals4/20)*5;

//         var totals8 = Math.ceil(totals4*porcent_cuotas);
//         var s8 = Math.ceil(totals8/40)*5;

//         var totals12 = Math.ceil(totals8*porcent_cuotas);
//         var s12 = Math.ceil(totals12/60)*5;

//         var totals16 = Math.ceil(totals12*porcent_cuotas);
//         var s16 = Math.ceil(totals16/80)*5;

//         var totals20 = Math.ceil(totals16*porcent_cuotas);
//         var s20 = Math.ceil(totals20/100)*5;
        
//         var totals30 = Math.ceil(totals20*porcent_150);
//         var s30 = Math.ceil(totals30/150)*5;
//         //--------------

//         //------------- Se Crea El Texto Para Mostrar En la Pagina
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.appendChild(texto);

//         if(micheck.checked){
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '4 Cuotas Semanales de $'+ s4 +
//             '<br>' +
//             '8 Cuotas Semanales de $'+ s8 +
//             '<br>' +
//             '12 Cuotas Semanales de $'+ s12 +
//             '<br>' +
//             '16 Cuotas Semanales de $'+ s16 +
//             '<br>' +
//             '20 Cuotas Semanales de $'+ s20 +
//             '<br>' +
//             '30 Cuotas Semanales de $'+ s30
//             ;
//         }else{
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '4 Cuotas Semanales de $'+ s4 +
//             '<br>' +
//             '8 Cuotas Semanales de $'+ s8 +
//             '<br>' +
//             '12 Cuotas Semanales de $'+ s12
//             ;
//         }
//         //--------------


//         //------------- Se Crea El Mensaje Para Enviar
//         if(micheck.checked){
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '4 Cuotas Semanales de $'+ s4 +
//             '%0A' +
//             '8 Cuotas Semanales de $'+ s8 +
//             '%0A' +
//             '12 Cuotas Semanales de $'+ s12 +
//             '%0A' +
//             '16 Cuotas Semanales de $'+ s16 +
//             '%0A' +
//             '20 Cuotas Semanales de $'+ s20 +
//             '%0A' +
//             '30 Cuotas Semanales de $'+ s30
//             ;
//             mensaje = 'send?text=' + textoEnviar;
//         }else{
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '4 Cuotas Semanales de $'+ s4 +
//             '%0A' +
//             '8 Cuotas Semanales de $'+ s8 +
//             '%0A' +
//             '12 Cuotas Semanales de $'+ s12
//             ;
//             mensaje = 'send?text=' + textoEnviar;                
//         }
//         //--------------

//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             window.location.href = 'https://api.whatsapp.com/' + mensaje;
//         });
//     }
// };

// function calcularquincenales(){
//     const listadoAnterior = document.querySelector('.listado');
//     if(listadoAnterior){
//         const mensaje = '';
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.removeChild(listadoAnterior);
//     }
//     var costo = document.getElementById("costo").value;
//     var nombreProducto = document.getElementById('producto').value;
//     if(costo > 0){
//         //-------------- Se Crean Las Variables de Las Cuotas
//         var contado = Math.ceil(costo*porcent_contado);

//         var totals4 = Math.ceil(contado*porcent_cuotas);
//         var s4 = Math.ceil(totals4/20)*5;
//         var q2 = s4*2;

//         var totals8 = Math.ceil(totals4*porcent_cuotas);
//         var s8 = Math.ceil(totals8/40)*5;
//         var q4 = s8*2;

//         var totals12 = Math.ceil(totals8*porcent_cuotas);
//         var s12 = Math.ceil(totals12/60)*5;
//         var q6 = s12*2;

//         var totals16 = Math.ceil(totals12*porcent_cuotas);
//         var s16 = Math.ceil(totals16/80)*5;
//         var q8 = s16*2;

//         var totals20 = Math.ceil(totals16*porcent_cuotas);
//         var s20 = Math.ceil(totals20/100)*5;
//         var q10 = s20*2;
        
//         var totals30 = Math.ceil(totals20*porcent_150);
//         var s30 = Math.ceil(totals30/150)*5;
//         var q15 = s30*2;
//         //--------------

//         //------------- Se Crea El Texto Para Mostrar En la Pagina
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.appendChild(texto);

//         if(micheck.checked){
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '2 Cuotas Quincenales de $'+ q2 +
//             '<br>' +
//             '4 Cuotas Quincenales de $'+ q4 +
//             '<br>' +
//             '6 Cuotas Quincenales de $'+ q6 +
//             '<br>' +
//             '8 Cuotas Quincenales de $'+ q8 +
//             '<br>' +
//             '10 Cuotas Quincenales de $'+ q10 +
//             '<br>' +
//             '15 Cuotas Quincenales de $'+ q15
//             ;
//         }else{
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             '2 Cuotas Quincenales de $'+ q2 +
//             '<br>' +
//             '4 Cuotas Quincenales de $'+ q4 +
//             '<br>' +
//             '6 Cuotas Quincenales de $'+ q6
//             ;
//         }
//         //--------------


//         //------------- Se Crea El Mensaje Para Enviar
//         if(micheck.checked){
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '2 Cuotas Quincenales de $'+ q2 +
//             '%0A' +
//             '4 Cuotas Quincenales de $'+ q4 +
//             '%0A' +
//             '6 Cuotas Quincenales de $'+ q6 +
//             '%0A' +
//             '8 Cuotas Quincenales de $'+ q8 +
//             '%0A' +
//             '10 Cuotas Quincenales de $'+ q10 +
//             '%0A' +
//             '15 Cuotas Quincenales de $'+ q15
//             ;
//             mensaje = 'send?text=' + textoEnviar;
//         }else{
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             '2 Cuotas Quincenales de $'+ q2 +
//             '%0A' +
//             '4 Cuotas Quincenales de $'+ q4 +
//             '%0A' +
//             '6 Cuotas Quincenales de $'+ q6
//             ;
//             mensaje = 'send?text=' + textoEnviar;                
//         }
//         //--------------

//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             window.location.href = 'https://api.whatsapp.com/' + mensaje;
//         });
//     }
// };

// function calcularmensuales(){
//     const listadoAnterior = document.querySelector('.listado');
//     if(listadoAnterior){
//         const mensaje = '';
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.removeChild(listadoAnterior);
//     }
//     var costo = document.getElementById("costo").value;
//     var nombreProducto = document.getElementById('producto').value;
//     if(costo > 0){
//         //-------------- Se Crean Las Variables de Las Cuotas
//         var contado = Math.ceil(costo*porcent_contado);

//         var totals4 = Math.ceil(contado*porcent_cuotas);
//         var m1 = totals4;

//         var totals8 = Math.ceil(totals4*porcent_cuotas);
//         var m2 = Math.ceil(totals8/2);

//         var totals12 = Math.ceil(totals8*porcent_cuotas);
//         var m3 = Math.ceil(totals12/3);

//         var totals16 = Math.ceil(totals12*porcent_cuotas);
//         var m4 = Math.ceil(totals16/4);

//         var totals20 = Math.ceil(totals16*porcent_cuotas);
//         var m5 = Math.ceil(totals20/5);
//         //--------------

//         //------------- Se Crea El Texto Para Mostrar En la Pagina
//         const texto = document.createElement('P');
//         texto.classList.add('listado');
//         const cuotas = document.querySelector(".cuotas");
//         cuotas.appendChild(texto);

//         if(micheck.checked){
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             // '1 Cuota Mensual de $'+ m1 +
//             // '<br>' +
//             '2 Cuotas Mensuales de $'+ m2 +
//             '<br>' +
//             '3 Cuotas Mensuales de $'+ m3 +
//             '<br>' +
//             '4 Cuotas Mensuales de $'+ m4 +
//             '<br>' +
//             '5 Cuotas Mensuales de $'+ m5
//             ;
//         }else{
//             texto.innerHTML = 'Producto: ' + nombreProducto +
//             '<br>' +
//             '<br>' +
//             'Contado: $'+ contado +
//             '<br>' +
//             // '1 Cuota Mensual de $'+ m1 +
//             // '<br>' +
//             '2 Cuotas Mensuales de $'+ m2 +
//             '<br>' +
//             '3 Cuotas Mensuales de $'+ m3
//             ;
//         }
//         //--------------


//         //------------- Se Crea El Mensaje Para Enviar
//         if(micheck.checked){
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             // '1 Cuota Mensual de $'+ m1 +
//             // '%0A' +
//             '2 Cuotas Mensuales de $'+ m2 +
//             '%0A' +
//             '3 Cuotas Mensuales de $'+ m3 +
//             '%0A' +
//             '4 Cuotas Mensuales de $'+ m4 +
//             '%0A' +
//             '5 Cuotas Mensuales de $'+ m5
//             ;
//             mensaje = 'send?text=' + textoEnviar;
//         }else{
//             const textoEnviar = 'Producto: ' + nombreProducto +
//             '%0A' +
//             '%0A' +
//             'Contado: $'+ contado +
//             '%0A' +
//             // '1 Cuota Mensual de $'+ m1 +
//             // '%0A' +
//             '2 Cuotas Mensuales de $'+ m2 +
//             '%0A' +
//             '3 Cuotas Mensuales de $'+ m3
//             ;
//             mensaje = 'send?text=' + textoEnviar;                
//         }
//         //--------------

//         // const botonEnviar = document.querySelector('.whatsapp');
//         // botonEnviar.addEventListener('click', ()=>{
//         //     window.open('https://api.whatsapp.com/' + mensaje, '_blank');
//         // });
//         const botonEnviar = document.querySelector('.whatsapp');
//         botonEnviar.addEventListener('click', () => {
//             window.location.href = 'https://api.whatsapp.com/' + mensaje;
//         });
//     }
// };


//-------------------CHAT GPT

// Variables globales
var bna = document.querySelector("#bna");
var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var quincenal = document.querySelector(".quincenal");
var mensual = document.querySelector(".mensual");
var micheck = document.getElementById('check');

// Porcentajes
const porcent_contado = 1.5;
const porcent_cuotas = 1.10;
const porcent_150 = 1.25;

// Event listeners
bna.addEventListener('click', () => promoBNA());
micheck.addEventListener('click', () => {});

diario.addEventListener("click", () => calcularCuotas('diarias'));
semanal.addEventListener('click', () => calcularCuotas('semanales'));
quincenal.addEventListener('click', () => calcularCuotas('quincenales'));
mensual.addEventListener('click', () => calcularCuotas('mensuales'));

// Función principal para calcular cuotas
function calcularCuotas(tipo) {
    const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) {
        listadoAnterior.remove();
    }

    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;

    if (costo > 0) {
        const contado = Math.ceil(costo * porcent_contado);
        const cuotas = calcularValores(tipo, contado);

        // Crear y mostrar el texto
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotasElement = document.querySelector(".cuotas");
        cuotasElement.appendChild(texto);

        const cuotasTexto = generarTexto(tipo, nombreProducto, contado, cuotas);
        texto.innerHTML = cuotasTexto;

        // Crear el mensaje para WhatsApp
        const mensaje = generarMensaje(tipo, nombreProducto, contado, cuotas);

        // Enviar mensaje por WhatsApp
        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', () => {
            window.location.href = 'https://api.whatsapp.com/send?text=' + mensaje;
        });
    }
}

// Función para calcular los valores de las cuotas
function calcularValores(tipo, contado) {
    let cuotas = {};
    if (tipo === 'diarias') {
        cuotas = calcularCuotasDiarias(contado);
    } else if (tipo === 'semanales') {
        cuotas = calcularCuotasSemanales(contado);
    } else if (tipo === 'quincenales') {
        cuotas = calcularCuotasQuincenales(contado);
    } else if (tipo === 'mensuales') {
        cuotas = calcularCuotasMensuales(contado);
    }
    return cuotas;
}

// Funciones para calcular las cuotas de cada tipo
function calcularCuotasDiarias(contado) {
    if(micheck.checked){
        return {
            c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
            c40: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40),
            c60: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60),
            c80: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80),
            c100: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100),
            c150: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150)
        };
    }else{
        return {
            c20: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20),
            c40: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40),
            c60: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60)
        };
    }    
}

function calcularCuotasSemanales(contado) {
    if(micheck.checked){
        return {
            s4: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5,
            s8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5,
            s12: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5,
            s16: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80) * 5,
            s20: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100) * 5,
            s30: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150) * 5
        };
    }else{
        return {
            s4: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5,
            s8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5,
            s12: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5
        };
    }
    
}

function calcularCuotasQuincenales(contado) {
    if(micheck.checked){
        return {
            q2: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5 * 2,
            q4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5 * 2,
            q6: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5 * 2,
            q8: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 80) * 5 * 2,
            q10: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 100) * 5 * 2,
            q15: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_150) / 150) * 5 * 2
        };
    }else{
        return {
            q2: Math.ceil(Math.ceil(contado * porcent_cuotas) / 20) * 5 * 2,
            q4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 40) * 5 * 2,
            q6: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 60) * 5 * 2
        };
    }    
}

function calcularCuotasMensuales(contado) {
    if(micheck.checked){
        return {
            m2: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 2),
            m3: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 3),
            m4: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 4),
            m5: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 5)
        };
    }else{
        return {
            m2: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas) / 2),
            m3: Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas * porcent_cuotas) / 3)
        };
    }    
}

function promoBNA(){
   const listadoAnterior = document.querySelector('.listado');
    if (listadoAnterior) {
        listadoAnterior.remove();
    }
    const costo = document.getElementById("costo").value;
    const nombreProducto = document.getElementById('producto').value;
    if (costo > 0) {
        const contado = Math.ceil(costo * porcent_contado);
        const monto = Math.ceil(Math.ceil(contado * porcent_cuotas * porcent_cuotas));
        const cuotasPromo = 12;
        const montoCuotasPromo = Math.ceil(Math.ceil(monto/cuotasPromo));
        const reintegro = Math.ceil(Math.ceil(contado * 15/100));

        // Crear y mostrar el texto
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotasElement = document.querySelector(".cuotas");
        cuotasElement.appendChild(texto);
        let textoMostrar = `Producto: ${nombreProducto}<br><br>Monto: $${monto}<br>`;            
            // Armamos el texto con el formato adecuado
            textoMostrar += `${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}<br>`;
            textoMostrar += `$${reintegro} de Reintegro!<br>`;       
        texto.innerHTML = textoMostrar;

        // Crear el mensaje para WhatsApp
        let textoEnviar = `Producto: ${nombreProducto}%0A%0AMonto: $${monto}%0A`;            
            // Armamos el texto con el formato adecuado
            textoEnviar += `${cuotasPromo} cuotas mensuales de $${montoCuotasPromo}%0A`;
            textoEnviar += `$${reintegro} de Reintegro!%0A`;       
        texto.innerHTML = textoMostrar;
        // const mensaje = generarMensaje(tipo, nombreProducto, contado, cuotas);

        // Enviar mensaje por WhatsApp
        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', () => {
            window.location.href = 'https://api.whatsapp.com/send?text=' + textoEnviar;
        });
    }
}

// Función para generar el texto a mostrar en la página
function generarTexto(tipo, nombreProducto, contado, cuotas) {
    let texto = `Producto: ${nombreProducto}<br><br>Contado: $${contado}<br>`;

    // Establecemos qué letra cortar según el tipo
    let letraTipo = '';
    if (tipo === 'diarias') {
        letraTipo = 'c';
    } else if (tipo === 'semanales') {
        letraTipo = 's';
    } else if (tipo === 'quincenales') {
        letraTipo = 'q';
    } else if (tipo === 'mensuales') {
        letraTipo = 'm';
    }

    // Recorremos las cuotas y las formateamos
    for (let cuota in cuotas) {
        // Cortamos la letra correspondiente del nombre de la cuota
        let numeroCuotas = cuota.replace(letraTipo, '');
        
        // Armamos el texto con el formato adecuado
        texto += `${numeroCuotas} cuotas ${tipo} de $${cuotas[cuota]}<br>`;
    }

    return texto;
}


// Función para generar el mensaje para WhatsApp
function generarMensaje(tipo, nombreProducto, contado, cuotas) {
    let mensaje = `Producto: ${nombreProducto}%0A%0AContado: $${contado}%0A`;
    
    // Determinamos la letra que se debe cortar según el tipo de plan
    let letra = '';
    switch (tipo) {
        case 'diarias':
            letra = 'c';
            break;
        case 'semanales':
            letra = 's';
            break;
        case 'quincenales':
            letra = 'q';
            break;
        case 'mensuales':
            letra = 'm';
            break;
    }

    // Generamos el mensaje con el formato adecuado
    for (let cuota in cuotas) {
        // Cortamos la letra correspondiente de la cuota y la formateamos
        let cuotaTexto = cuota.slice(1).toUpperCase().replace(/_/g, ' ');
        mensaje += `${cuotaTexto} cuotas ${tipo} de $${cuotas[cuota]}%0A`;
        // mensaje += `${cuotaTexto} de $${cuotas[cuota]}%0A`;
    }

    return mensaje;
}
