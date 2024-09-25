function tipCalc(){
    
    var amt= Number(document.getElementById('amt').value);
    var tip=Number(document.getElementById('tip').value)/100;
    var people=Number(document.getElementById('persons').value);
    tip=(amt*tip)/people;
    document.getElementById('tipval').innerText='₹ '+tip.toFixed(2)+((people>1)?' Each':'');

}    