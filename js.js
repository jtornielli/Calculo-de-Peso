let pesoAbonado;
let pesoReal;
let paisSeleccionado;
let descuento = 0;
let precioDelKilo = 0;
$("#btnCalcular").click(calcularPeso);

function calcularPeso(){
    pesoAbonado = Number($("#txtPesoAbonado").val());
    pesoReal = Number($("#txtPesoReal").val());
    paisSeleccionado = $("#slcPais").val();
        if(paisSeleccionado === "ur"){
            if(pesoReal >= 0.1 && pesoReal <= 3){
                precioDelKilo = 19.90; // U$S 19.90 x kilo 
            }
            if(pesoReal >= 3.1 && pesoReal <= 5){
                precioDelKilo = 13.93; //30% de descuento = U$S 13.93 x kilo
            }
            if (pesoReal >= 5.1 ){
                precioDelKilo = 9.95; // 50% de descuento = U$S 9.95 x kilo
            }
        }
        if(paisSeleccionado === "ar"){
            if(pesoReal >= 0.1 && pesoReal <= 3){
                precioDelKilo = 22.99; // U$S 22.99 x kilo 
            }
            if(pesoReal >= 3.1 && pesoReal <= 5){
                precioDelKilo = 16.09; //30% de descuento = U$S 16.09 x kilo
            }
            if (pesoReal >= 5.1 ){
                precioDelKilo = 11.50; // 50% de descuento = U$S 11.50 x kilo
            }
        }
        if(paisSeleccionado === "pe"){
            if(pesoReal >= 0.1 && pesoReal <= 3){
                precioDelKilo = 19,81 ; // U$S 19,81 x kilo 
            }
            if(pesoReal >= 3.1 && pesoReal <= 5){
                precioDelKilo = 13.69; //30% de descuento = U$S 13.69 x kilo
            }
            if (pesoReal >= 5.1 ){
                precioDelKilo = 9.90; // 50% de descuento = U$S 9.90 x kilo
            }
        }
        if(paisSeleccionado === "br"){
            if(pesoReal >= 0.1 && pesoReal <= 3){
                precioDelKilo = 23.40 ; // U$S 23.40 x kilo 
            }
            if(pesoReal >= 3.1 && pesoReal <= 5){
                precioDelKilo = 13.69; //30% de descuento = U$S 13.69 x kilo
            }
            if (pesoReal >= 5.1 ){
                precioDelKilo = 9.90; // 50% de descuento = U$S 9.90 x kilo
            }
        }
        

}