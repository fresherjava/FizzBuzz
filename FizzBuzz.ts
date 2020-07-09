export class FizzBuzz{

    static fizzBuzz(n:number,divisible_by_num1:number,divisible_by_num2:number){
        
        return n%divisible_by_num1 ==0 && n%divisible_by_num2 == 0 ? 'FizzBuzz' : n%divisible_by_num1 ==0 ? 'Fizz' : n%divisible_by_num2 == 0 ? 'Buzz' : n; 
        
    }
}






console.log("15 is a "+FizzBuzz.fizzBuzz(15,3,5));
console.log("9 is a "+FizzBuzz.fizzBuzz(9,3,5));
console.log("10 is a "+FizzBuzz.fizzBuzz(10,3,5));
console.log("None "+FizzBuzz.fizzBuzz(4,3,5));