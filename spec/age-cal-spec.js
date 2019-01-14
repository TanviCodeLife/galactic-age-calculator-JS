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
    expect(testCalculator.current.getDate()).toEqual(14);
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
    expect(testCalculator.calculateYearsDiff("Mercury")).toEqual("146.92 Remaining Years");
    expect(testCalculator.calculateYearsDiff("Venus")).toEqual("56.39 Remaining Years");
    expect(testCalculator.calculateYearsDiff("Mars")).toEqual("18.99 Remaining Years");
    expect(testCalculator.calculateYearsDiff("Jupiter")).toEqual("3.15 Remaining Years");
  });

  it('should calculate age is more than the life expectancy', function() {
    let testCalculator1 = new AgeCalculator("1930-1-1", "F", "High", "United States");
    testCalculator1.calculateEarthLifeSpan();
    expect(testCalculator1.calculateYearsDiff("Mercury")).toEqual("42 Years Over");
    expect(testCalculator1.calculateYearsDiff("Venus")).toEqual("16.61 Years Over");
    expect(testCalculator1.calculateYearsDiff("Mars")).toEqual("5.36 Years Over");
    expect(testCalculator1.calculateYearsDiff("Jupiter")).toEqual("0.51 Years Over");
  });

});
