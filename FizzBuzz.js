"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.fizzBuzz = function (n, divisible_by_num1, divisible_by_num2) {
        if (n % divisible_by_num1 == 0 && n % divisible_by_num2 == 0) {
            return "FizzBuzz";
        }
        else if (n % divisible_by_num1 == 0) {
            return "Fizz";
        }
        else if (n % divisible_by_num2 == 0) {
            return "Buzz";
        }
        else {
            return n;
        }
    };
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
console.log("15 is a " + FizzBuzz.fizzBuzz(15, 3, 5));
console.log("9 is a " + FizzBuzz.fizzBuzz(9, 3, 5));
console.log("10 is a " + FizzBuzz.fizzBuzz(10, 3, 5));
console.log("None " + FizzBuzz.fizzBuzz(4, 3, 5));
