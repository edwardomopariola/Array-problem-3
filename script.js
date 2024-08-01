/*Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least. 
(Note: do NOT use the "reverse" method.)
*/
const nums = [5, 8, 4, -6, 34, 12, -22, 5, 35];

function sortNumsInt(array) { // i define my function with an array in the parameter
    return nums.sort(function(a,b){ //Using the .sort method, i can compare the two values a and b
        return b - a; // to sorrt this in descendinng order, we subtract the second parameter from the first parameter
    });
}
console.log(sortNumsInt(nums));


