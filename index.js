//join 2 strings with a space//
function combine(word1, word2){
  return `${word1} ${word2}`;
}
console.log(combine ('hi', 'there'));

//if number is even = true//
function isEven(n){
  return n % 2 === 0;
}
console.log(`isEven(999): ${isEven(999)}`);
console.log(`isEven(82):  ${isEven(82)}`);

//if number is odd = true//
function isOdd(n){
  return n % 2 === 1;
}
console.log(`isOdd(999): ${isOdd(999)}`);
console.log(`isOdd(82):  ${isOdd(82)}`);

//if a=b then true//
function areEqual(a,b){
  return a===b;
}
console.log(`areEqual(5,8): ${areEqual(5,8)}`);
console.log(`areEqual(5,5): ${areEqual(5,5)}`);

//converts number to string//
function numberToString(n){
  return (n).toString();
}
console.log(`numberToString(6): ${numberToString(6)}`);

//add 2 numbers//
function add(n1,n2) {
  return n1 + n2;
}
console.log(`sum: ${add(6,9)}`);


//introduce someone first name, last name//
function introduce(firstName, lastName) {
  console.log(`Hi my name is ${firstName} ${lastName}`);
}

//Hypotenuse //
function hypotenuse(a,b){
  return (Math.hypot (a,b));
}
console.log(`hypotenuse(3,4): ${hypotenuse(3,4)}`);

//volume//
 function volume(a,b,c){
   return (a*b*c);
 }
console.log(`prism volume:  ${volume(3,4,3)}`);

//farenheit to celsius//
//return (farenheit-32)*(5/9);, declaring a variable is not needed//
function farenheitToCelsius(farenheit) {
  var fTemp = farenheit;
  return (fTemp - 32) * 5/9;
}
console.log(`Celsius temp: ${farenheitToCelsius(48)}`);


//celsius to farenheit//
function celsiusToFarenheit(celsius) {
  var cTemp = celsius;
  return cTemp * 9/5 + 32;
}
console.log(`Farenheit temp: ${celsiusToFarenheit(8)}`);


//troll - string replace. need to do it for all instances of the initial word, so /g needs to be used//
function troll(str) {
  return str.replace("crossfit","jellyfish fishing");
}
console.log(troll("my name is crossfit.  I like crossfit"));


//Control Flow - print out equation//







 //return smaller value of 2 numbers//
 function minimum(x,y) {
   if (x < y) {
     return x;
   } else {
     return y;
   }
}
console.log(`minimum(10,8): ${minimum(10,8)}`);

//return the larger value of 2 numbers//
function maximum(x,y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(`maximum(10,8): ${maximum(10,8)}`);

//Control-Flow - return a letter grade//
function letterGrade(score,total) {
 var percent = score / total * 100;

 if (percent>=90) {
   return `A`;
 } else if (percent>=80) {
   return 'B';
 } else if (percent>=70){
   return 'C';
 } else if (percent>=60){
   return 'D';
} else if (percent<=59){
  return 'F';
}
}
console.log(`letterGrade(75,100): ${letterGrade(75,100)}`);


//control Flow - temperature conversion.  Use the conversions from above - call them for this//
function convertTemperature(temp,scale){
if (scale === 'f') {
  return farenheitToCelsius(temp);
} else if (scale==='c'){
  return celsiustoFarenheit(temp);
}
}



}
