        $(function($){
           $('#botao').hide();
            $('#enviar').click(function(){
                var a = $('#a').val();
                var b = $('#b').val();
                var c = $('#c').val();
        
                var delta = Math.pow(b,2)-4*a*c;
                var x1 = (- b + Math.sqrt(delta)) /2*a;
                var x2 = (- b - Math.sqrt(delta)) /2*a; 
                 $('#botao').show();
                 $('#botao1').hide();
                if(delta<=0){
                    var error = '<center> Erro! Delta negativo</center>';
                    document.getElementById("erro").innerHTML = error;
                    $('#erro').fadeOut(3500);	
                }
                else{
                    document.getElementById("mostrarDelta").innerHTML = 
                        'RESULTADO<br><img src="images/delta.png" width="50" /> = ' + delta;
                    document.getElementById("mostrarX1").innerHTML = 'X1 = ' + x1;
                    document.getElementById("mostrarX2").innerHTML = 'X2 = ' + x2 +'<br> ';	
                }

            });
        });
        