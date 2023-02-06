const mathOperations = require('./calculator');
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      // arrange and act
      var result = mathOperations.sum(1,2)
    
      // assert
      expect(result).toBe(3);
    });

    test("subtracting 2 form 10 should return 8", () => {
        //arrange the act
        var result = mathOperations.diff(10,2)
        //assert
        expect(result).toBe(8);
    });

    test("multiplying 2 and 5 should return 10", () => {
        //arrange the act
        var result = mathOperations.product(2,5);
        //assert
        expect(result).toBe(10);
  });
   })