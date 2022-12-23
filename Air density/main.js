
function airDensity() {
     var w0 = 0;
     var w1 = eval(document.getElementById('temp2').value) + 273;
     var w2 = eval(document.getElementById('barPress').value);
    

     w2 = (1.2 * 293 * w2);
     w1 = (1013 * w1);
     w0 = (w2 / w1);
     w0 = (Math.round(w0 * 1000) / 1000);
     console.log('result',w0)

     document.getElementById('resultadoFinal').innerHTML = w0;

     //document.getElementById('temp').focus();

     return false;
}

