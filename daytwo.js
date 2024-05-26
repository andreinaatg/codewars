/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 */
function filter_list(list) {
    // Return a new array with the strings filtered out
    //using filter method to filter out strings
     return list.filter(function(item){
       return typeof item === "number";
     })
  }
