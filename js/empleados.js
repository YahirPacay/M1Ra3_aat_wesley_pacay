$(document).ready(function () {
    $("#btn_save").on("click", function () {
        let name = $("#name").val();
        let fecha = $("#fecha").val();
        let puesto = $("#puesto").val();
        let salario = parseInt($("#salario").val());

        $("#tabla>tbody").append("<tr><td> " + name + "</td><td> " + fecha + "</td><td> " + puesto + "</td><td> " + "Q" + salario + "</td></tr>")

    })
    $("#btn_delete_first").click(function(){
        $("tbody>tr:first").remove();
    })
    $("#btn_delete_last").click(function(){
        $("tbody>tr:last").remove();
    })

})