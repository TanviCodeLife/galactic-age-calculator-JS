export class AgeCalculator{
  constructor(dateOfBirth, gender, activity, country){
    this.dob = new Date(dateOfBirth);
    this.current = new Date();
    this.age = 0;
    this.gender = gender;
    this.activity = activity;
    this.country = country;
    this.planets = {
      "Earth": 1,
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    };
    this.planetAge = {
      "Mercury" = this.calculatePlanetAge("Mercury"),
      "Venus" = this.calculatePlanetAge("Venus"),
      "Mars" = this.calculatePlanetAge("Mars"),
      "Jupiter" = this.calculatePlanetAge("Jupiter"),
    };
    this.planetLife = {
      "Earth": getEarthLifeSpan()
    };
  }

  calculateEarthAge(){
    const convertFactor = (365.25 * 24 * 60 * 60 * 1000);
    const timeNow = Date.now();
    let diffInAge = (timeNow - Date.parse(this.dob)) / convertFactor;
    this.age = Math.round(diffInAge * 100)/ 100;
    console.log(this.age);
  }

  calculatePlanetAge(planet){
    this.calculateEarthAge();
    const galacticAge = this.age / this.planets[planet];
    console.log(galacticAge);
    return Math.round(galacticAge * 100)/ 100;
  }

  getEarthLifeSpan(){

  }

  // yearsLeft(planet){
  //   this.age
  //
  // }
}
