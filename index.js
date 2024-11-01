/*
# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
Bons estudos 😉

*/
let nrVitorias = parseInt(process.argv[2]) || 0;
let nrDerrotas = parseInt(process.argv[3]) || 0;

let saldoVitorias = getSaldoVitoria(nrVitorias,nrDerrotas);
let nivel =  getNivel(saldoVitorias);


console.log('O Herói tem de saldo de ** ' + saldoVitorias + ' ** está no nível de ** ' + nivel + ' **');

function getSaldoVitoria(qtdVitoria,qtdDerrota){
    let resultado = qtdVitoria-qtdDerrota;
    return resultado;
}

function getNivel(saldoPartida){

    if (saldoPartida <= 10){
        return "Ferro";
    }else if(saldoPartida > 10 && saldoPartida <= 20){
        return "Bronze";
    }else if(saldoPartida > 21 && saldoPartida <= 50){
        return "Prata";
    }else if(saldoPartida > 51 && saldoPartida <= 80){
        return "Ouro";
    }else if(saldoPartida > 80 && saldoPartida <= 90){
        return "Diamante";
    }else if(saldoPartida > 90 && saldoPartida <= 100){
        return "Lendário";
    }else if(saldoPartida >= 101){
        return "Imortal";
    }
    
}

