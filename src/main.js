import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './../src/age-cal.js';

$(document).ready(function() {
  $('#details-form').submit(function(event) {
    event.preventDefault();
    let nameInput = $("#addName").val();
    let dobInput = $("#date").val();
    let planetInput = $("select#planet").val();
    let countryInput = $("select#country").val();
    let activityInput = $("select#activity").val();
    let genderInput = $("input:radio[name=customRadioInline1]:checked").val();
    let newCalculator = new AgeCalculator(dobInput, genderInput, activityInput, countryInput);

    let result = `Name: Hello ${nameInput}
    Your DOB: ${newCalculator.dob}
    Your Age on ${planetInput}: ${newCalculator.calculatePlanetAge(planetInput)} Years
    Lifespan on Earth: ${newCalculator.calculateEarthLifeSpan()} Years
    Lifespan on ${planetInput}: ${newCalculator.calculatePlanetLifeSpan(planetInput)} Years
    Current Status: ${newCalculator.calculateYearsDiff(planetInput)}`;

    $("#output").text(result);
  });
});
