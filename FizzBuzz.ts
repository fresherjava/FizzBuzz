export class FizzBuzz{

    static fizzBuzz(n){
        if(n%3 ==0 && n%5 == 0){
            return "FizzBuzz";
        }else if(n%3 ==0){
            return "Fizz";
        }else if(n%5 == 0){
            return "Buzz";
        }else{
            return n;
        }
    }
}






console.log("15 is a "+FizzBuzz.fizzBuzz(15));
console.log("9 is a "+FizzBuzz.fizzBuzz(9));
console.log("10 is a "+FizzBuzz.fizzBuzz(10));
console.log("None "+FizzBuzz.fizzBuzz(4));