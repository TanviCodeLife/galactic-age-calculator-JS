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
    expect(testCalculator.current.getUTCDate()).toEqual(11);
    expect(testCalculator.current.getUTCMonth()).toEqual(0);
    expect(testCalculator.current.getUTCFullYear()).toEqual(2019);
    expect(testCalculator.gender).toEqual("f");
    expect(testCalculator.planetsExpect["Earth"]).toEqual(1);
  });

  it('should calculate current age of user on Earth', function() {
    testCalculator.calculateEarthAge();
    expect(testCalculator.age).toEqual(0.91);
  });

  it('should calculate current age of user for selected planet', function() {
    testCalculator.calculateEarthAge();
    const galacticAge = testCalculator.calculatePlanetAge();
    expect(galacticAge).toEqual();
  });
});
