import { AgeCalculator } from './../src/age-cal.js';

describe('AgeCalculator', function() {

  let testCalculator;

  beforeEach(function(){
    testCalculator = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
  });

  it('should create testCalculator class with date of birth, gender and user specs', function() {
    expect(testCalculator.dob.getDate()).toEqual(5);
    expect(testCalculator.dob.getMonth()).toEqual(2);
    expect(testCalculator.dob.getUTCFullYear()).toEqual(1985);
    expect(testCalculator.current.getDate()).toEqual(12);
    expect(testCalculator.current.getMonth()).toEqual(0);
    expect(testCalculator.current.getUTCFullYear()).toEqual(2019);
    expect(testCalculator.gender).toEqual("F");
    expect(testCalculator.planets["Earth"]).toEqual(1);
  });

  it('should calculate current age of user on Earth', function() {
    testCalculator.calculateEarthAge();
    expect(testCalculator.age).toEqual(33.86);
  });

  it('should calculate current age of user for selected planet', function() {
    expect(testCalculator.calculatePlanetAge("Mercury")).toEqual(141.08);
    expect(testCalculator.calculatePlanetAge("Venus")).toEqual(54.61);
    expect(testCalculator.calculatePlanetAge("Mars")).toEqual(18.01);
    expect(testCalculator.calculatePlanetAge("Jupiter")).toEqual(2.85);
  });

  it('should calculate life expectancy for user on Earth based on user info', function() {
    let testCalculator = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    expect(testCalculator.calculateEarthLifeSpan()).toEqual(69);
  });

  it('should calculate life expectancy for user on selected planet', function() {
    testCalculator.calculateEarthLifeSpan();
    expect(testCalculator.calculatePlanetLifeSpan("Mercury")).toEqual(288);
    expect(testCalculator.calculatePlanetLifeSpan("Venus")).toEqual(111);
    expect(testCalculator.calculatePlanetLifeSpan("Mars")).toEqual(37);
    expect(testCalculator.calculatePlanetLifeSpan("Jupiter")).toEqual(6);
  });

  it('should calculate age is less than the life expectancy', function() {
    testCalculator.calculateEarthLifeSpan();
    expect(testCalculator.calculateYearsDiff("Mercury")).toEqual("Remaining Years: 146.92");
    expect(testCalculator.calculateYearsDiff("Venus")).toEqual("Remaining Years: 56.39");
    expect(testCalculator.calculateYearsDiff("Mars")).toEqual("Remaining Years: 18.99");
    expect(testCalculator.calculateYearsDiff("Jupiter")).toEqual("Remaining Years: 3.15");
  });

  it('should calculate age is more than the life expectancy', function() {
    let testCalculator1 = new AgeCalculator("1940-1-1", "F", "High", "United States");
    testCalculator1.calculateEarthLifeSpan();
    expect(testCalculator1.calculateYearsDiff("Mercury")).toEqual("Years Over: 0.29");
    expect(testCalculator1.calculateYearsDiff("Venus")).toEqual("Years Over: 0.47");
    expect(testCalculator1.calculateYearsDiff("Mars")).toEqual("Years Over: 0.04");
    expect(testCalculator1.calculateYearsDiff("Jupiter")).toEqual("Years Over: 0.34");
  });

});
