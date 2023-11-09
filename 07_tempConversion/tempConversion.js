const convertToCelsius = function(tempinfahr) {
  let celsius = (5/9)*(tempinfahr-32);
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(cel) {
  let fahr = (9/5)*cel+32;
  return Math.round(fahr * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
