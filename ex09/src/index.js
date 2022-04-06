function myFunction(myObj, checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return checkProp;
    } else {
        return "Not found";
    }

}


console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "Drama" }, "title"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "Drama" }, "song"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "Drama" }, "genre"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "Drama" }, "actor"));

module.exports = myFunction;