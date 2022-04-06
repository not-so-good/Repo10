//Only change code below this line
var myPet = {
    species: "Jack Russell",
    name: "Kimmi",
    legs: 4,
    friends: ["Vedran", "Sanjin"]
}
function myFunction(myObj){
    return myObj;
}
  
//Only change code above this line 
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };