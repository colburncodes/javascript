/**
 * Let's create the double() function. It will take either a number or an array containing numbers as an argument.
    If the user inputs a number, the function must double it. That is, the function should return the input number multiplied by 2.
    If the user inputs an array of numbers instead, the function should return an array in which the value of each element in the original array is doubled.
    By the way, remember that you can use the map() function to perform an operation on each of the elements in an array.
 * @param {*} value 
 */

function double(value) {
  // write your code here
  if (Array.isArray(value)) {
    return value.map((val) => val * 2);
  }
  return value * 2;
}

double(2); // 4
double([1, 2, 3]); // [2, 4, 6]
