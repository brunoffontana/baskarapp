$(document).ready(function() { 
    $('#reload').click(function() { 
        $.blockUI({
            message:  $('#load'),
			theme: true,
			showOverlay: false, 
            centerY: true,
			centerX: true
        }); 
 
        setTimeout(function() { 
            $.unblockUI({ 
                onUnblock: function(){ 
                    $("#a").val("");
                    $("#b").val("");
                    $("#c").val("");
                    document.getElementById("mostrarDelta").innerHTML = '';
                    document.getElementById("mostrarX1").innerHTML = '';
                    document.getElementById("mostrarX2").innerHTML = '';
                    var error = '';
                    $('#botao').hide();
                    $('#botao1').show();
                } 
            }); 
        }, 3000); 
    }); 
}); 