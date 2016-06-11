function convert(num) {
//Function can only last to 4000
//Must refactor function to make it go up to an N number of length
 var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
 var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
 var romanNumeral = '';

//Did not put any checkers if it goes pass beyond 4000 or below 0;
//  if (<=0 || value >= 4000) { return value // 

 for (i = 0; i < roman.length; i++) {
   while (num >= decimal[i]) {
     num -= decimal[i];
     romanNumeral += roman[i];
   }
 }
  return romanNumeral;
}

console.log(convert(1000))