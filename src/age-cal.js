export class AgeCalculator{
  constructor(dateOfBirth, gender){
    this.dob = new Date(dateOfBirth);
    this.current = new Date();
    this.age = 0;
    this.gender = gender;
    this.planetsExpect = {
      "Earth": 1,
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    };

  }

  calculateEarthAge(){
    const convertFactor = (365.25 * 24 * 60 * 60 * 1000);
    const timeNow = Date.now();
    let diffInAge = (timeNow - Date.parse(this.dob)) / convertFactor;
    this.age = Math.round(diffInAge * 100)/ 100;
  }

  // calculatePlanetAge(){
  //
  // }
}
