$(document).ready(function () {
    $("#btn_calcular_indemnizacion").click(function () {
        let sueldo = parseInt($("#ingreso_sueldo_base").val());
        let pendiete = parseInt($("#pendiente").val());
        let deuda = parseInt($("#deuda").val());
        //dias abajo
        let fechaInicio = new Date($("#ingreso_fechaInicio").val());
        let fechaFin = new Date($("#ingreso_fechaFinal").val());
        let diff = fechaFin.getTime() - fechaInicio.getTime();

        let years = (Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12))); //año

        let month = (Math.round(diff / (1000 * 60 * 60 * 24 * 30))); //meses

        $("#total_years").text(years);
        $("#total_days").text(month);

        //abajo bono 14
        let bono = parseInt((sueldo / 12) * month);
        $("#bonoo").val(bono);

        //abajo aguinaldo
        let aguinaldo = parseInt((sueldo * month) /12 -250);
        $("#aguinaldoo").val(aguinaldo);

        let indemnizacion = parseInt((sueldo * years) + bono + aguinaldo + pendiete - deuda );
        $("#total").text("Q"+ indemnizacion);


        if (fechaFin != null && fechaFin < fechaInicio) {
            alert("La fecha final debe ser mayor a la fecha de Inicio");
            $("#total").text();
            $("#total_years").text();
            $("#total_days").text();
        }

        



        

    })
})