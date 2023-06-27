// Celsius to Farenheit (0 Celsius x 9/5) + 32 = 32 Farenheit
// Farenheit to Celsius (32 Farenheit - 32) x 5/9 = 0 Ceslius

function convertToCelsius(temperature) {
  let farenheit = temperature;
  let celsius = ((temperature - 32) * 5/9);
  if (!(Number.isInteger(celsius))) {
    return Number(celsius.toFixed(1));
  } else {
    return celsius;
  }
};

function convertToFahrenheit(temperature) {
  let celsius = temperature;
  let farenheit = ((temperature * 9/5) + 32);
  if (!(Number.isInteger(farenheit))) {
    return Number(farenheit.toFixed(1));
  } else {
    return farenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
