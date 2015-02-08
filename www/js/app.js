$(document).on('deviceready', function(){ 
	var d = new Date();

    $("#f").val(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
    $("#h").val(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
     $.mobile.changePage("#fecha")
});