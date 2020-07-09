import {FizzBuzz} from '../src/FizzBuzz';
import { expect } from 'chai';
import 'mocha';

describe('FizzBuzz Unit Test', () => {

    it('should return FizzBuzz', () => {
      const result = FizzBuzz.fizzBuzz(15,3,5);
      expect(result).to.equal('FizzBuzz');
    });

    it('should not return FizzBuzz', () => {
      const result = FizzBuzz.fizzBuzz(19,3,5);
      expect(result).not.equal('FizzBuzz');
    });

    it('should return Fizz', () => {
      const result = FizzBuzz.fizzBuzz(9,3,5);
      expect(result).to.equal('Fizz');
    });

    it('should not return Fizz', () => {
      const result = FizzBuzz.fizzBuzz(19,3,5);
      expect(result).not.equal('Fizz');
    });

    it('should return Buzz', () => {
      const result = FizzBuzz.fizzBuzz(10,3,5);
      expect(result).to.equal('Buzz');
    });

    it('should not return Buzz', () => {
      const result = FizzBuzz.fizzBuzz(19,3,5);
      expect(result).not.equal('Buzz');
    });

    it('should return number', () => {
      const result = FizzBuzz.fizzBuzz(19,3,5);
      expect(result).to.equal(19);
    });
  
  });