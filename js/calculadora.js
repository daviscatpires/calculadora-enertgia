function enviar(){
    var select = document.getElementById("fase");
    var fasico = select.options[select.selectedIndex].value;
    console.log(fasico);

    var eletrica = document.getElementById("valor-energia-eletrica").value.replace(",",".");
    var eletric =parseFloat(eletrica);
    console.log(eletric);

    var iluminacao = document.getElementById("iluminacao-publica").value.replace(",",".");
    var luz =parseFloat(iluminacao);
    console.log(luz);

    var consum = document.getElementById("consumo").value;
    var consu =parseFloat(consum);
    console.log(consu);

    var tarif = document.getElementById("tarifa").value.replace(",",".");
    var tari =parseFloat(tarif);
    console.log(tarif);


    /* com a (re) energisa*/
    var custo = fasico*tari;
    console.log(custo);
    var pis = eletric*(5/100);
    console.log(pis);
    var totalre = custo + pis + luz;
    console.log(totalre);
    

    /* boleto (re)energisa*/
    var kwh = consu-fasico;
    console.log(kwh);
    var tarifkwh = tari-(tari*(18/100));
    console.log(tarifkwh);
    var boletore = kwh * tarifkwh;
    console.log(boletore);
    var totaldesc = boletore+totalre;
    console.log(totaldesc);


    var desconto = document.getElementById("valor-desconto");
    valordesconto = (eletric+luz) - totaldesc;
    desconto.innerHTML = valordesconto.toFixed(2);

    var pagar = document.getElementById("valor-desc-total");
    pagar.innerHTML = totaldesc.toFixed(2);

    var anual = document.getElementById("valor-anual");
    valoranual = valordesconto*12;
    anual.innerHTML = valoranual.toFixed(2);

}