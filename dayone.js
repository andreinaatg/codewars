/* Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

// create Function find needle
function findNeedle(haystack) {
    // Find the index of "needle" in the haystack array
    const position = haystack.indexOf("needle");
    
    // Return the message with the found position
    return `found the needle at position ${position}`;
}

//I thought this problem to not be as hard as i thought, it still took me  some time to figure it out tho.  I re-did it like 2 times becuase i was the solution i was going for was too long and unnessary.




//problem 2
/*Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive(arr) {
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is not exactly 1 larger than the previous element
        if (arr[i] !== arr[i - 1] + 1) {
            // If not, return the current element
            return arr[i];
        }
    }
    // If all elements are consecutive, return null
    return null;
}

// this problem actually took me a long time, I was working on learn Javascript and the foreach method got introduced so i thouht of using it for this but that approach did not work, so i ended up using a for loop but this took me a while to figure out too.