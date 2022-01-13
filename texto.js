

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
      
      