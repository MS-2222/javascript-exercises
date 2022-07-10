const ftoc = function(fDegrees) {
  let celcius = Math.round(((fDegrees - 32) * (5/9)) * 10) / 10;
  return celcius;
};

const ctof = function(cDegrees) {
  let fahrenheit = Math.round((cDegrees * (9/5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
