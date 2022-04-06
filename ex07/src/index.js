function myFunction(prop){
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };
    delete lion[prop];
    return lion;

} 
console.log(myFunction("roar"));
module.exports = myFunction;