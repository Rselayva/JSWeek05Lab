// Challenge 1
const getCelsius = fahrenheit => (fahrenheit - 32)/1.8

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
const minMax = arr => ({min: Math.min(...arr), max: Math.max(...arr)})

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
(function(len, wid){
    const area = len * wid;
    console.log(`The area of a rectangle with a length of ${len} and a width of ${wid} is ${area}.`);
})(10, 5);





