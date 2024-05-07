$(document).ready(function () {
    $("#btn_calcular_liquido").click(function () {
        let salario = parseFloat($("#ingreso_salario").val());
        let bonificacion = parseFloat($("#ingreso_bonificacion").val());
        let comision = parseFloat($("#ingreso_comision").val());
        let ahorro = parseFloat($("#egresos_ahorro").val());
        let prestamos = parseFloat($("#egresos_prestamos").val());

        




        //abajo se ponen los resultados
        let total_ingreso = salario + bonificacion + comision;
        $("#total_ingreso").text("Q"+ total_ingreso);
        
        let igss = parseFloat(total_ingreso * (4.83)/100);
        $("#egresos_igss").val(igss);

        let total_egresos = ahorro + igss + prestamos;
        $("#total_egreso").text("Q" + total_egresos);

        let total = parseFloat(total_ingreso - total_egresos);
        $("#total").text("Q" + total);
    });

})