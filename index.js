
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

