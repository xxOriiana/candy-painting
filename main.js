

(function(){
    setInterval(function(){

        var letraP = document.getElementById('color-p'),
            letraA = document.getElementById('color-a'),
            letraI = document.getElementById('color-i')
            letraN = document.getElementById('color-n')
            letraT = document.getElementById('color-t')
            letraII = document.getElementById('color-ii')
            letraNN = document.getElementById('color-nn')
            letraG =document.getElementById('color-g')
            

        coloresDegradados = ["#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
                             "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];
        
        coloresDegradados2 = ["#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090","#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados3 = ["#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados4 = ["#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090","#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados5 = ["#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados6 = ["#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090","#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados7 = ["#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        coloresDegradados8 = ["#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090","#9FE2BF","#6495ED","#DE3163","#DE3163","#DE3163","#A1B28B","#FFFF00",
        "#BDB76B", "#EE82EE", "#FF00FF","#8A2BE2","#F0FFF0","#FF69B4","#CD5C5C","#4B0082","#708090"];

        letraP.style.color = coloresDegradados[Math.floor(Math.random() * coloresDegradados.length)];
        letraA.style.color = coloresDegradados2[Math.floor(Math.random() * coloresDegradados.length)];
        letraI.style.color = coloresDegradados3[Math.floor(Math.random() * coloresDegradados.length)];
        letraN.style.color = coloresDegradados4[Math.floor(Math.random() * coloresDegradados.length)];
        letraT.style.color = coloresDegradados5[Math.floor(Math.random() * coloresDegradados.length)];
        letraII.style.color = coloresDegradados6[Math.floor(Math.random() * coloresDegradados.length)];
        letraNN.style.color = coloresDegradados7[Math.floor(Math.random() * coloresDegradados.length)];
        letraG.style.color = coloresDegradados8[Math.floor(Math.random() * coloresDegradados.length)];

    },1000);
}())




// ======================= GALLERY SECTION =============================

$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      
// ============================= contacto ===========================================

(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);



$(window).scroll(function() {

    var position =$(this).scrollTop();
   
    // Si el usuario baja el scroll muestro el div qeu contiene el enlace botón
    if (position > 300) {
       $(".boton-subir").fadeIn('slow');
     } else {
     $(".boton-subir").fadeOut('slow');
    }
   });