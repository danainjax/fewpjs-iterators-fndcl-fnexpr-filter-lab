// Code your solution here
function findMatching(array, match){

  return array.filter(item => item.toUpperCase() === match.toUpperCase())
      
  }

//passes in the array and what we are matching against. Then need to return the results of the filter
//so call filter on the array passed in, takes a callback function that evaluates to true if condition is met
//I wrote as an arrow function. Passes in the element of the array, takes the element and lower cases it and evaluates it with === against the right side of the expression which is the item we are matching against, converted to lower case//works with upper case also, as long as we equalize the string element being passed in.
 function fuzzyMatch(drivers, query) {
     return drivers.filter(driver => 
        driver.indexOf(query) === 0)
    //  takes in the array of drivers and the match possible, each element of drivers array passes in and is uppercased and then .indexOf is called...that's where I get confused
    //OK got it now, indexOf is checking the index position of the string , so 0 is first letter, 1 is second letter and so on. So if I am checking against ===0 that is the first letter, if I wanted to check against second letter I would === 1

 }

 function matchName(drivers, match) {
     return drivers.filter(driver =>
        driver.name === match )
 }