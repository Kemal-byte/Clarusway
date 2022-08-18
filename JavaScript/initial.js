var celcius = prompt('What will be the converted celcius');
var fahreneit = prompt('Enter a fahreneit value');

var celTfah = (9*celcius + (32*5))/5;
var fahTcel = (5/(fahreneit - 32))/9;


console.log(`${celcius} deg celcius to ${fahTcel} fahreneit `);
console.log(`${fahreneit} deg fahreneit to ${celTfah} celcius `);