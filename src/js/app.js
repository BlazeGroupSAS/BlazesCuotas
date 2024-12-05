var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var quincenal = document.querySelector(".quincenal");
var mensual = document.querySelector(".mensual");
var micheck = document.getElementById('check');

var porcent_contado = 1.5;
var porcent_cuotas = 1.10;
var porcent_150 = 1.25;
// var nombreProducto = document.getElementById('producto').value;
// console.log(nombreProducto);
micheck.addEventListener('click', ()=>{
    const mensaje = '';
});
// const input = document.getElementById("files");
// const file = input.files;
// if(file.length !== 0){
//     console.log('si hay');
// }

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}

diario.addEventListener("click", calculardiarias);
semanal.addEventListener('click', calcularsemanales);
quincenal.addEventListener('click', calcularquincenales);
mensual.addEventListener('click', calcularmensuales);

function calculardiarias(){
    const listadoAnterior = document.querySelector('.listado');
    if(listadoAnterior){
        const mensaje = '';
        const cuotas = document.querySelector(".cuotas");
        cuotas.removeChild(listadoAnterior);
    }    
    var costo = document.getElementById("costo").value;
    var nombreProducto = document.getElementById('producto').value;
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*porcent_contado);

        var totalc20 = Math.ceil(contado*porcent_cuotas);
        var c20 = Math.ceil(totalc20/20);
        
        var totalc40 = Math.ceil(totalc20*porcent_cuotas);
        var c40 = Math.ceil(totalc40/40);
        
        var totalc60 = Math.ceil(totalc40*porcent_cuotas);
        var c60 = Math.ceil(totalc60/60);
        
        var totalc80 = Math.ceil(totalc60*porcent_cuotas);
        var c80 = Math.ceil(totalc80/80);
        
        var totalc100 = Math.ceil(totalc80*porcent_cuotas);
        var c100 = Math.ceil(totalc100/100);
        
        var totalc150 = Math.ceil(totalc100*porcent_150);
        var c150 = Math.ceil(totalc150/150);
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '20 Cuotas Diarias de $'+ c20 +
            '<br>' +
            '40 Cuotas Diarias de $'+ c40 +
            '<br>' +
            '60 Cuotas Diarias de $'+ c60 +
            '<br>' +
            '80 Cuotas Diarias de $'+ c80 +
            '<br>' +
            '100 Cuotas Diarias de $'+ c100 +
            '<br>' +
            '150 Cuotas Diarias de $'+ c150
            ;
        }else{
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '20 Cuotas Diarias de $'+ c20 +
            '<br>' +
            '40 Cuotas Diarias de $'+ c40 +
            '<br>' +
            '60 Cuotas Diarias de $'+ c60
            ;          
        }
        //--------------

        //------------- Se Crea El Mensaje Para Enviar
        if(micheck.checked){
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '20 Cuotas Diarias de $'+ c20 +
            '%0A' +
            '40 Cuotas Diarias de $'+ c40 +
            '%0A' +
            '60 Cuotas Diarias de $'+ c60 +
            '%0A' +
            '80 Cuotas Diarias de $'+ c80 +
            '%0A' +
            '100 Cuotas Diarias de $'+ c100 +
            '%0A' +
            '150 Cuotas Diarias de $'+ c150
            ;
            mensaje = 'send?text=' + textoEnviar;
        }else{
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '20 Cuotas Diarias de $'+ c20 +
            '%0A' +
            '40 Cuotas Diarias de $'+ c40 +
            '%0A' +
            '60 Cuotas Diarias de $'+ c60
            ;
            mensaje = 'send?text=' + textoEnviar;
        }

        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', ()=>{
            window.open('https://api.whatsapp.com/' + mensaje, '_blank');
        });
    }
};

function calcularsemanales(){
    const listadoAnterior = document.querySelector('.listado');
    if(listadoAnterior){
        const mensaje = '';
        const cuotas = document.querySelector(".cuotas");
        cuotas.removeChild(listadoAnterior);
    }
    var costo = document.getElementById("costo").value;
    var nombreProducto = document.getElementById('producto').value;
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*porcent_contado);

        var totals4 = Math.ceil(contado*porcent_cuotas);
        var s4 = Math.ceil(totals4/20)*5;

        var totals8 = Math.ceil(totals4*porcent_cuotas);
        var s8 = Math.ceil(totals8/40)*5;

        var totals12 = Math.ceil(totals8*porcent_cuotas);
        var s12 = Math.ceil(totals12/60)*5;

        var totals16 = Math.ceil(totals12*porcent_cuotas);
        var s16 = Math.ceil(totals16/80)*5;

        var totals20 = Math.ceil(totals16*porcent_cuotas);
        var s20 = Math.ceil(totals20/100)*5;
        
        var totals30 = Math.ceil(totals20*porcent_150);
        var s30 = Math.ceil(totals30/150)*5;
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '4 Cuotas Semanales de $'+ s4 +
            '<br>' +
            '8 Cuotas Semanales de $'+ s8 +
            '<br>' +
            '12 Cuotas Semanales de $'+ s12 +
            '<br>' +
            '16 Cuotas Semanales de $'+ s16 +
            '<br>' +
            '20 Cuotas Semanales de $'+ s20 +
            '<br>' +
            '30 Cuotas Semanales de $'+ s30
            ;
        }else{
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '4 Cuotas Semanales de $'+ s4 +
            '<br>' +
            '8 Cuotas Semanales de $'+ s8 +
            '<br>' +
            '12 Cuotas Semanales de $'+ s12
            ;
        }
        //--------------


        //------------- Se Crea El Mensaje Para Enviar
        if(micheck.checked){
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '4 Cuotas Semanales de $'+ s4 +
            '%0A' +
            '8 Cuotas Semanales de $'+ s8 +
            '%0A' +
            '12 Cuotas Semanales de $'+ s12 +
            '%0A' +
            '16 Cuotas Semanales de $'+ s16 +
            '%0A' +
            '20 Cuotas Semanales de $'+ s20 +
            '%0A' +
            '30 Cuotas Semanales de $'+ s30
            ;
            mensaje = 'send?text=' + textoEnviar;
        }else{
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '4 Cuotas Semanales de $'+ s4 +
            '%0A' +
            '8 Cuotas Semanales de $'+ s8 +
            '%0A' +
            '12 Cuotas Semanales de $'+ s12
            ;
            mensaje = 'send?text=' + textoEnviar;                
        }
        //--------------

        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', ()=>{
            window.open('https://api.whatsapp.com/' + mensaje, '_blank');
        });
    }
};

function calcularquincenales(){
    const listadoAnterior = document.querySelector('.listado');
    if(listadoAnterior){
        const mensaje = '';
        const cuotas = document.querySelector(".cuotas");
        cuotas.removeChild(listadoAnterior);
    }
    var costo = document.getElementById("costo").value;
    var nombreProducto = document.getElementById('producto').value;
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*porcent_contado);

        var totals4 = Math.ceil(contado*porcent_cuotas);
        var s4 = Math.ceil(totals4/20)*5;
        var q2 = s4*2;

        var totals8 = Math.ceil(totals4*porcent_cuotas);
        var s8 = Math.ceil(totals8/40)*5;
        var q4 = s8*2;

        var totals12 = Math.ceil(totals8*porcent_cuotas);
        var s12 = Math.ceil(totals12/60)*5;
        var q6 = s12*2;

        var totals16 = Math.ceil(totals12*porcent_cuotas);
        var s16 = Math.ceil(totals16/80)*5;
        var q8 = s16*2;

        var totals20 = Math.ceil(totals16*porcent_cuotas);
        var s20 = Math.ceil(totals20/100)*5;
        var q10 = s20*2;
        
        var totals30 = Math.ceil(totals20*porcent_150);
        var s30 = Math.ceil(totals30/150)*5;
        var q15 = s30*2;
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '2 Cuotas Quincenales de $'+ q2 +
            '<br>' +
            '4 Cuotas Quincenales de $'+ q4 +
            '<br>' +
            '6 Cuotas Quincenales de $'+ q6 +
            '<br>' +
            '8 Cuotas Quincenales de $'+ q8 +
            '<br>' +
            '10 Cuotas Quincenales de $'+ q10 +
            '<br>' +
            '15 Cuotas Quincenales de $'+ q15
            ;
        }else{
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            '2 Cuotas Quincenales de $'+ q2 +
            '<br>' +
            '4 Cuotas Quincenales de $'+ q4 +
            '<br>' +
            '6 Cuotas Quincenales de $'+ q6
            ;
        }
        //--------------


        //------------- Se Crea El Mensaje Para Enviar
        if(micheck.checked){
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '2 Cuotas Quincenales de $'+ q2 +
            '%0A' +
            '4 Cuotas Quincenales de $'+ q4 +
            '%0A' +
            '6 Cuotas Quincenales de $'+ q6 +
            '%0A' +
            '8 Cuotas Quincenales de $'+ q8 +
            '%0A' +
            '10 Cuotas Quincenales de $'+ q10 +
            '%0A' +
            '15 Cuotas Quincenales de $'+ q15
            ;
            mensaje = 'send?text=' + textoEnviar;
        }else{
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            '2 Cuotas Quincenales de $'+ q2 +
            '%0A' +
            '4 Cuotas Quincenales de $'+ q4 +
            '%0A' +
            '6 Cuotas Quincenales de $'+ q6
            ;
            mensaje = 'send?text=' + textoEnviar;                
        }
        //--------------

        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', ()=>{
            window.open('https://api.whatsapp.com/' + mensaje, '_blank');
        });
    }
};

function calcularmensuales(){
    const listadoAnterior = document.querySelector('.listado');
    if(listadoAnterior){
        const mensaje = '';
        const cuotas = document.querySelector(".cuotas");
        cuotas.removeChild(listadoAnterior);
    }
    var costo = document.getElementById("costo").value;
    var nombreProducto = document.getElementById('producto').value;
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*porcent_contado);

        var totals4 = Math.ceil(contado*porcent_cuotas);
        var m1 = totals4;

        var totals8 = Math.ceil(totals4*porcent_cuotas);
        var m2 = Math.ceil(totals8/2);

        var totals12 = Math.ceil(totals8*porcent_cuotas);
        var m3 = Math.ceil(totals12/3);

        var totals16 = Math.ceil(totals12*porcent_cuotas);
        var m4 = Math.ceil(totals16/4);

        var totals20 = Math.ceil(totals16*porcent_cuotas);
        var m5 = Math.ceil(totals20/5);
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            // '1 Cuota Mensual de $'+ m1 +
            // '<br>' +
            '2 Cuotas Mensuales de $'+ m2 +
            '<br>' +
            '3 Cuotas Mensuales de $'+ m3 +
            '<br>' +
            '4 Cuotas Mensuales de $'+ m4 +
            '<br>' +
            '5 Cuotas Mensuales de $'+ m5
            ;
        }else{
            texto.innerHTML = 'Producto: ' + nombreProducto +
            '<br>' +
            '<br>' +
            'Contado: $'+ contado +
            '<br>' +
            // '1 Cuota Mensual de $'+ m1 +
            // '<br>' +
            '2 Cuotas Mensuales de $'+ m2 +
            '<br>' +
            '3 Cuotas Mensuales de $'+ m3
            ;
        }
        //--------------


        //------------- Se Crea El Mensaje Para Enviar
        if(micheck.checked){
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            // '1 Cuota Mensual de $'+ m1 +
            // '%0A' +
            '2 Cuotas Mensuales de $'+ m2 +
            '%0A' +
            '3 Cuotas Mensuales de $'+ m3 +
            '%0A' +
            '4 Cuotas Mensuales de $'+ m4 +
            '%0A' +
            '5 Cuotas Mensuales de $'+ m5
            ;
            mensaje = 'send?text=' + textoEnviar;
        }else{
            const textoEnviar = 'Producto: ' + nombreProducto +
            '%0A' +
            '%0A' +
            'Contado: $'+ contado +
            '%0A' +
            // '1 Cuota Mensual de $'+ m1 +
            // '%0A' +
            '2 Cuotas Mensuales de $'+ m2 +
            '%0A' +
            '3 Cuotas Mensuales de $'+ m3
            ;
            mensaje = 'send?text=' + textoEnviar;                
        }
        //--------------

        const botonEnviar = document.querySelector('.whatsapp');
        botonEnviar.addEventListener('click', ()=>{
            window.open('https://api.whatsapp.com/' + mensaje, '_blank');
        });
    }
};

