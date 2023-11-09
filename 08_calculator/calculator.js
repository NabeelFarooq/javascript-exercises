const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arrayToBeSummed) {
  let sum=0;
	for(let i=0;i<arrayToBeSummed.length;i++){
    sum += arrayToBeSummed[i];
  }
  return sum;
};

const multiply = function(arrayToBeMultiplied) {
  let mult=1;
	for(let i=0;i<arrayToBeMultiplied.length;i++){
    mult *= arrayToBeMultiplied[i];
  }
  return mult;
};

const power = function(base,exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	let factorial = 1;
  for(let i=number;i>=2;i--){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
