//Import the module
// const fs = require("fs");
// // Copy a file 
// fs.copyFileSync("file1.txt", "file2.txt");

//Using external module : Superheroes module
var superheroes = require("superheroes");

var mySuperHeroName = superheroes.random()

console.log("Superhero: " + mySuperHeroName);

const supervillains = require('supervillains');

var mySuperVillain = supervillains.random()

console.log("SuperVillain: " + mySuperVillain);