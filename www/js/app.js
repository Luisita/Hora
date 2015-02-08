// Evento device ready
$(document).on('deviceready', function(){ 
    var d = new Date();//Obtiene la fecha Actual
    $("#fechaAct").html(d.toDateString(););
    $.mobile.changePage("#fecha");
      $.mobile.loading( "show", {
          text: "Device Ready cargado",
          textVisible: true,
          theme: "e",
          html: ""
      });
});
