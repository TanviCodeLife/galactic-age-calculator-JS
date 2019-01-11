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
    testCalculator.calculateEarthAge();
    expect(testCalculator.age).toEqual(0.91);
  });

  it('should calculate current age of user for selected planet', function() {
    //testCalculator.calculateEarthAge();
    expect(testCalculator.calculatePlanetAge("Mercury")).toEqual(3.79);
    expect(testCalculator.calculatePlanetAge("Venus")).toEqual(1.47);
    expect(testCalculator.calculatePlanetAge("Mars")).toEqual(0.48);
    expect(testCalculator.calculatePlanetAge("Jupiter")).toEqual(0.08);
  });

  it('should calculate life expectancy for user on Earth based on user info', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
     expect(testCalculator1.calculateEarthLifeSpan()).toEqual(69);
  });

  it('should calculate life expectancy for user on selected planet', function() {
    let testCalculator1 = new AgeCalculator("1985-3-5", "F", "Medium", "United States");
     expect(testCalculator1.calculatePlanetLifeSpan("Mercury")).toEqual(75);
     expect(testCalculator.calculatePlanetLifeSpan("Venus")).toEqual(65);
     expect(testCalculator.calculatePlanetLifeSpan("Mars")).toEqual(36);
     expect(testCalculator.calculatePlanetLifeSpan("Jupiter")).toEqual(25);
  });


});
