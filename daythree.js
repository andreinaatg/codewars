/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses! */

function createPhoneNumber(numbers) {
    // Join the array of numbers into a single string
    numbers = numbers.join('');
    
    // Extract portions of the string and format the phone number
    return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}
// Example

//problem 2
/*Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
 */
function capitals(word) {
    const indices = [];

    // Iterate through each character of the string
    for (let i = 0; i < word.length; i++) {
        // Check if the character is uppercase
        if (word[i] === word[i].toUpperCase()) {
            // If uppercase, push its index into the array
            indices.push(i);
        }
    }

    return indices;
}
