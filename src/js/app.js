var diario = document.querySelector(".diario");
var semanal = document.querySelector(".semanal");
var micheck = document.getElementById('check');
micheck.addEventListener('click', ()=>{
    const mensaje = '';
});


diario.addEventListener("click", calculardiarias);
semanal.addEventListener('click', calcularsemanales);

function calculardiarias(){
    const listadoAnterior = document.querySelector('.listado');
    if(listadoAnterior){
        const mensaje = '';
        const cuotas = document.querySelector(".cuotas");
        cuotas.removeChild(listadoAnterior);
    }    
    var costo = document.getElementById("costo").value;
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*1.35);
        var c20 = Math.ceil(costo*1.6/20);
        var c40 = Math.ceil(costo*1.85/40);
        var c60 = Math.ceil(costo*2.1/60);
        var c80 = Math.ceil(costo*2.5/80);
        var c100 = Math.ceil(costo*2.9/100);
        var c150 = Math.ceil(costo*3.3/150);
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Contado: $'+ contado +
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
            texto.innerHTML = 'Contado: $'+ contado +
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
            const textoEnviar = 'Contado: $'+ contado +
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
            const textoEnviar = 'Contado: $'+ contado +
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
    if(costo > 0){
        //-------------- Se Crean Las Variables de Las Cuotas
        var contado = Math.ceil(costo*1.35);
        var s4 = Math.ceil(costo*1.6/20)*5;
        var s8 = Math.ceil(costo*1.85/40)*5;
        var s12 = Math.ceil(costo*2.1/60)*5;
        var s16 = Math.ceil(costo*2.5/80)*5;
        var s20 = Math.ceil(costo*2.9/100)*5;
        var s30 = Math.ceil(costo*3.3/150)*5;
        //--------------

        //------------- Se Crea El Texto Para Mostrar En la Pagina
        const texto = document.createElement('P');
        texto.classList.add('listado');
        const cuotas = document.querySelector(".cuotas");
        cuotas.appendChild(texto);

        if(micheck.checked){
            texto.innerHTML = 'Contado: $'+ contado +
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
            texto.innerHTML = 'Contado: $'+ contado +
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
            const textoEnviar = 'Contado: $'+ contado +
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
            const textoEnviar = 'Contado: $'+ contado +
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

