//FIRST and SECOND STEP
const km = prompt("Quanti km vuoi percorrere?",20);
const age = prompt("Quanti anni hai?");

console.log( km, age );

//THIRD STEP
let price = ( 0.21 * km );
console.log( price)

//FOURTH STEP
let outputMessage = "";

//PRICE UNDER 18


/*let under18discount = ( price - discount20 )
console.log (under18discount);
//PRICE OVER 65


let over65discount = ( price - discount40 )
console.log (over65discount);*/

//DISCOUNT
if (age < 18){
  let discount20 = ( 20 * price / 100 );
  console.log( discount20 );
}else if (age > 65){
  let discount40 = ( 40 * price / 100);
  console.log( discount40 );
}