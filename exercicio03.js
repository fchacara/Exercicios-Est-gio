

const DadosDeFaturamento = require("./dados.json");
var faturamentoTOTAL = 0;
var faturamentoVALOR = [];
var contarZero = 0;


//inserindo os dados dos valores do JSON em uma lista e calculando o faturamento mensal TOTAL
for (i = 0; i<DadosDeFaturamento.length; i++) {
        if(DadosDeFaturamento[i].valor == 0) {
            contarZero = contarZero + 1;
        }

        faturamentoVALOR.push(DadosDeFaturamento[i].valor);
        faturamentoTOTAL = faturamentoVALOR[i] + faturamentoTOTAL;

}
//Calculo da média removendo os dias que o faturamento é  '0'

var mediaTOTAL = faturamentoTOTAL/(30 - contarZero);
console.log(mediaTOTAL);


//retirando os 0 da array para achar o valor minimo
function MaiorqueZero(valor1) {
    return valor1 > 0;
}

var SemZero = faturamentoVALOR.filter(MaiorqueZero)

// encontrando o valor minimo e maximo dentro da array

var min = Math.min(...SemZero);
var max = Math.max(...faturamentoVALOR);

console.log('O menor faturamento do mês foi: ' + min);
console.log('O maior faturamento do mês foi: ' + max);

//Filtrando os faturamentos que foram acima da media mensal

function AcimaDaMedia(valor) {
    return valor >= mediaTOTAL;
}

var NumerosAcimaDaMedia = faturamentoVALOR.filter(AcimaDaMedia);

console.log('Os faturamentos que estão acima da media mensal são: ' + NumerosAcimaDaMedia);
  