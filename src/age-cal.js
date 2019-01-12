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
    this.message = "";
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
    console.log(this.earthLife);
     return this.earthLife;
  }

  calculatePlanetLifeSpan(planet){
    const planetLife = Math.round( this.earthLife / this.planets[planet]);
    return planetLife;
  }

  calculateYearsDiff(planet){
    const yearsDiff = this.calculatePlanetAge(planet) - this.calculatePlanetLifeSpan(planet);
    const diff = Math.round(yearsDiff * 100) / 100;
    switch(yearsDiff){
      case yearsDiff < 0:
        this.message = `Remaining Years: ${Math.abs(yearsDiff)}`;
        break;
      case yearsDiff > 0:
        this.message = `Years Over: ${diff}`;
        break;
    }
    return this.message;
  }

}
