const convertToCelsius = function (degree = 0) {
  return Number(((degree - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function (degree = 0) {
  return Number((degree * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
