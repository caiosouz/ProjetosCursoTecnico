function idade() {
    var atual = new Date(),
        ano_atual = atual.getFullYear(),
        mes_atual = atual.getMonth() + 1,
        dia_atual = atual.getDate();

    var dia_aniversario = document.getElementById("dia").value;
    var mes_aniversario = document.getElementById("mes").value;
    var ano_aniversario = document.getElementById("ano").value;

    quantos_anos = ano_atual - ano_aniversario;

    if(mes_atual != mes_aniversario){
        if (mes_atual < mes_aniversario) {
            quantos_anos--;
        }
    }
    else {
        if(dia_atual < dia_aniversario){
            anos--
        }

    }

    var total_dias_dia = "",
    total_dias_mes = "",
    total_dias_ano = "";

    total_dias_ano =+ (quantos_anos * 365);
    total_dias_mes =+ (mes_aniversario * 30);
    total_dias_dia =+ dia_aniversario;



document.getElementById("result").innerHTML = "A pessoa tem " + quantos_anos + " anos de idade e ela tem " + total_dias_ano 
                                            + " dias aqui na terra " + total_dias_mes + " dias em mes e " + total_dias_dia + " dias. " 
 }
