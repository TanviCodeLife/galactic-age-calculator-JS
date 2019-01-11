export class AgeCalculator{
  constructor(dateOfBirth, gender, activity, country){
    this.dob = new Date(dateOfBirth);
    this.current = new Date();
    this.age = 0;
    this.gender = gender;
    this.activity = activity;
    this.country = country;
    this.earthLife = 90;
    this.planets = {
      "Earth": 1,
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    };
    // this.planetAge = {
    //   "Mercury" = this.calculatePlanetAge("Mercury"),
    //   "Venus" = this.calculatePlanetAge("Venus"),
    //   "Mars" = this.calculatePlanetAge("Mars"),
    //   "Jupiter" = this.calculatePlanetAge("Jupiter"),
    // };
    // this.planetLife = {
    //   "Earth": this.calculateEarthLifeSpan()
    // };
  }

  calculateEarthAge(){
    const convertFactor = (365.25 * 24 * 60 * 60 * 1000);
    const timeNow = Date.now();
    let diffInAge = (timeNow - Date.parse(this.dob)) / convertFactor;
    this.age = Math.round(diffInAge * 100)/ 100;
    //console.log(this.age);
  }

  calculatePlanetAge(planet){
    this.calculateEarthAge();
    const galacticAge = this.age / this.planets[planet];
    //console.log(galacticAge);
    return Math.round(galacticAge * 100)/ 100;
  }

  calculateEarthLifeSpan(){
    switch(this.gender){
      case "M":
        this.earthLife -= 3;
        break;
      case "F":
        this.earthLife -= 1;
        break;
    }
    console.log(this.earthLife);
    switch(this.country){
      case "Sweden":
        this.earthLife -= 5;
        break;
      case "United States":
        this.earthLife -= 10;
        break;
      case "China":
        this.earthLife -= 12;
        break;
      case "India":
        this.earthLife -= 15;
        break;
    }
    console.log(this.earthLife);
    switch(this.activity){
      case "High":
        this.earthLife -= 0;
        break;
      case "Medium":
        this.earthLife -= 10;
        break;
      case "Low":
        this.earthLife -= 20;
        break;
      case "None":
        this.earthLife -= 30;
        break;
    }
     return this.earthLife;
  }

  // yearsLeft(planet){
  //   this.age
  //
  // }
}
