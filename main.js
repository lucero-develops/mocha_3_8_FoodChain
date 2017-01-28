/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 */

// change the values of `eatsPlants` and `eatsAnimals` 
//to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals? 
"omnivore" : !eatsPlants && !eatsAnimals?
"undefined" : eatsPlants && !eatsAnimals?
"herbivore" : !eatsPlants && eatsAnimals?
"carnivore": "undefined";

console.log(category);

