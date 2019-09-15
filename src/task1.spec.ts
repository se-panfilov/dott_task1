import { addN } from './task1';

describe('addN', () => {

  it('should return funtion', () => {
    expect(typeof addN(8)).toEqual(typeof Function)
  });

  describe('addN -> AddNumberFunction', () => {
    it('should do the stuff from the task', () => {
      const addEight = addN(8);
      expect(addEight(7)).toEqual(15);
      expect(addEight(100)).toEqual(108);
    });

    it('should add any other numbers', () => {
      const addOne = addN(1);
      expect(addOne(5)).toEqual(6);

      const addTen = addN(10);
      expect(addTen(5)).toEqual(15);
    });

    it('should not change value on 0', () => {
      const addZero = addN(0);
      expect(addZero(5)).toEqual(5);
      expect(addZero(15)).toEqual(15);
      expect(addZero(0)).toEqual(0);
      expect(addZero(-15)).toEqual(-15);
    });

    it('should throw an error on infinity', () => {
      expect(() => addN(Infinity)).toThrow();
      expect(() => addN(-Infinity)).toThrow();
    });

    it('should throw an error on invalid numbers', () => {
      expect(() => addN(Number.NaN)).toThrow();
    });

  });


});
