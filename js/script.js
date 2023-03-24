//CHIEDERE ALL'UTENTE I KM CHE VUOLE PERCORRERE E LA SUA ETA'
const km = prompt('inserisci i km che vuoi percorrere')
const age = prompt('inserisci la tua età')
console.log('km', 'age')
const name = prompt('inserisci il tuo nome');
console.log('name')

//PREZZO TOTALE DEL VIAGGIO
const price = 0.21;
console.log(price);
const totalPrice = (price * km);

//SCONTISTICA

//UNDER18
const discount20 =  (20/100) * totalPrice;
console.log(discount20)

const under18 = totalPrice - discount20;
console.log(under18)


//OVER65
const discount40 = (40/100) * totalPrice;
console.log(discount40)

const over65 = totalPrice - discount40;
console.log(over65)


let ticket="";
//CONDIZIONE
if(age < 18){
  ticket = under18;
  document.getElementById('young').innerHTML = `
  Ciao ${name}, <br> hai diritto a uno sconto del 20%! <br> Spenderai ${under18} anziché ${totalPrice}
  `
}else if ( age > 18 && age <65){
  ticket = totalPrice;
  document.getElementById('age-range').innerHTML = `
  Ciao ${name}, il prezzo del tuo biglietto è di  ${totalPrice}.
  `
}

if(age > 65){
  ticket = over65;
  document.getElementById('senior').innerHTML = `
  Ciao ${name}, <br> hai diritto a uno sconto del 40%! <br> Spenderai ${over65} anziché ${totalPrice}
  `
}





