export class FizzBuzz{

    static fizzBuzz(n:number,divisible_by_num1:number,divisible_by_num2:number){
        var fizz_buzz =""; 
        fizz_buzz = (n%divisible_by_num1 == 0 ? 'Fizz': '') + (n%divisible_by_num2 == 0 ? 'Buzz' : '');
        return fizz_buzz.length > 0 ? fizz_buzz : n;
    }
}


console.log("15 is a "+FizzBuzz.fizzBuzz(15,3,5));
console.log("9 is a "+FizzBuzz.fizzBuzz(9,3,5));
console.log("10 is a "+FizzBuzz.fizzBuzz(10,3,5));
console.log("None "+FizzBuzz.fizzBuzz(4,3,5));