// script.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculateButton').addEventListener('click', function() {
    calculateFare();
  });

  function calculateFare() {
    var distance = parseFloat(document.getElementById('distance').value);
    var passengers = parseInt(document.getElementById('passengers').value);

    if (isNaN(distance) || isNaN(passengers)) {
      document.getElementById('result').innerHTML = 'Please enter valid values.';
      return;
    }

    // Your fare calculation logic goes here
    var fare = distance * 2.5 + passengers * 1.5;

    document.getElementById('result').innerHTML = 'Estimated Fare: £' + fare.toFixed(2);
  }
});
