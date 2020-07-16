// let ndt = new Date();
function reserva(){
   
    let checkIn = document.getElementById('checkin').value;
    let checkOut = document.getElementById('checkout').value;

    let tempo = checkIn - checkOut;

    return tempo;
    
    console.log(tempo);
}



// // console.log(chekOut);
// // console.log(chekIn);

// let diaSemana = ndt.getDay();
// let dia = ndt.getDay();//dia
// let mes = ndt.getMonth(); //dias do mes
// let ano = ndt.getFullYear();//ano

// let horas = ndt.getHours();
// let minutos = ndt.getMinutes();
// let seguntos = ndt.getSeconds();

// let meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","julho","Agosto","Setembro","Outubro","Novembro","Desembro");
// let semanas = new Array("Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado");

// // for(i = 0; i < meses.length; i++){

//     // console.log( i + " "+ meses[i]);
    
// // }

// // console.log(semanas[diaSemana] + ","+ dia + " dia " + meses[mes] + " de " + ano + " <br/> ");

// // console.log(diaSemana);
// var p1 = 7;

// function somaSubtrair(p1 = 3,p2 =5){
//     p1 ++;
//     p2--;
//     return p1 + p2
// }

// console.log(p1);