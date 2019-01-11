import { AgeCalculator } from './../src/age-cal.js';

describe('AgeCalculator', function() {

  let testCalculator;

  beforeEach(function(){
    testCalculator = new AgeCalculator("2018-2-15", "f");
  });

  it('should create testCalculator class with date of birth and gender', function() {
    expect(testCalculator.dob.getUTCDate()).toEqual(15);
    expect(testCalculator.dob.getUTCMonth()).toEqual(1);
    expect(testCalculator.dob.getUTCFullYear()).toEqual(2018);
    expect(testCalculator.gender).toEqual("f");
  });
});
