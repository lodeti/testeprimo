function verificaNumeroPrimo(numero) {
    var numero = parseInt(document.getElementById('numero').value);
    var resultado = document.getElementById('resultado');  
    var divisores = 0;
        for(var count=1 ; count<=numero ; count++)
            if(numero % count == 0)
                divisores++;
            if(divisores==2)
  	            resultado.innerHTML='Este número é primo, ou seja, é divisível apenas por 1 ou por ele mesmo.';
            else
  	            resultado.innerHTML='Este não é um número primo, já que possui outros divisores além de 1 e dele mesmo.';
}