import { AgeCalculator } from './../src/age-cal.js';

describe('AgeCalculator', function() {

  let testCalculator;

  beforeEach(function(){
    testCalculator = new AgeCalculator("2018-2-15", "F");
  });

  it('should create testCalculator class with date of birth and gender', function() {
    expect(testCalculator.dob.getUTCDate()).toEqual(15);
    expect(testCalculator.dob.getUTCMonth()).toEqual(1);
    expect(testCalculator.dob.getUTCFullYear()).toEqual(2018);
    expect(testCalculator.current.getUTCDate()).toEqual(11);
    expect(testCalculator.current.getUTCMonth()).toEqual(0);
    expect(testCalculator.current.getUTCFullYear()).toEqual(2019);
    expect(testCalculator.gender).toEqual("F");
    expect(testCalculator.planets["Earth"]).toEqual(1);
  });

  it('should calculate current age of user on Earth', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    testCalculator1.calculateEarthAge();
    expect(testCalculator1.age).toEqual(33.86);
  });

  it('should calculate current age of user for selected planet', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    expect(testCalculator1.calculatePlanetAge("Mercury")).toEqual(141.08);
    expect(testCalculator1.calculatePlanetAge("Venus")).toEqual(54.61);
    expect(testCalculator1.calculatePlanetAge("Mars")).toEqual(18.01);
    expect(testCalculator1.calculatePlanetAge("Jupiter")).toEqual(2.85);
  });

  it('should calculate life expectancy for user on Earth based on user info', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    expect(testCalculator1.calculateEarthLifeSpan()).toEqual(69);
  });

  it('should calculate life expectancy for user on selected planet', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    testCalculator1.calculateEarthLifeSpan();
    expect(testCalculator1.calculatePlanetLifeSpan("Mercury")).toEqual(288);
    expect(testCalculator1.calculatePlanetLifeSpan("Venus")).toEqual(111);
    expect(testCalculator1.calculatePlanetLifeSpan("Mars")).toEqual(37);
    expect(testCalculator1.calculatePlanetLifeSpan("Jupiter")).toEqual(6);
  });

  it('should calculate age is exceeding life expectancy or not', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
    testCalculator1.calculateEarthLifeSpan();
    expect(testCalculator1.calculateYearsDiff("Mercury")).toEqual(288);
    expect(testCalculator1.calculateYearsDiff("Venus")).toEqual(111);
    expect(testCalculator1.calculateYearsDiff("Mars")).toEqual(37);
    expect(testCalculator1.calculateYearsDiff("Jupiter")).toEqual(6);
  });

});
