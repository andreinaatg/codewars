/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */


function XO(str) {
    // Converting the string to lowercase for case insensitivity
    str = str.toLowerCase();
    
    // Initialize counters for 'x' and 'o'
    let countX = 0;
    let countO = 0;
    
    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is 'x' or 'o' and update the respective counter
        if (str[i] === 'x') {
            countX++;
        } else if (str[i] === 'o') {
            countO++;
        }
    }
    
    // Return true if the counts of 'x' and 'o' are equal, otherwise false
    return countX === countO;
}