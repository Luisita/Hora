$(document).on('deviceready', function(){ 
	var d = new Date();

    $("#fechaAct").val("Fecha Actual: "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear());
     $.mobile.changePage("#fecha")
});