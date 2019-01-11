export class AgeCalculator{
  constructor(dateOfBirth, gender){
    this.dob = new Date(dateOfBirth);
    this.gender = gender;
    this.planets = {
      "Earth": 1,
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    };

    // convertDateFormat(){
    //
    // }

  }
}
