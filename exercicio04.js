/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var Outros = 19848.53;


var totalMensal = SP + RJ + MG + ES + Outros;

var percentSP = (SP/totalMensal)*100;
var percentMG = (MG/totalMensal)*100;
var percentRJ = (RJ/totalMensal)*100;
var percentES = (ES/totalMensal)*100;
var percentOutros = (Outros/totalMensal)*100;

console.log('Os percentuais de cada estado são: ');
console.log('SP: ' + percentSP.toFixed(2)  + '%  MG: ' + percentMG.toFixed(2) + '%  RJ: ' + percentRJ.toFixed(2) + '%  ES: ' + percentES.toFixed(2) + '%  Outros:' + percentOutros.toFixed(2) + '%');

