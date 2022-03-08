//Define a function named buyClay. The function needs no parameters. It should return an object with no properties on it yet.
const buyClay = () => {
    let potObj = {};
    return potObj
}
//Define a function named makePottery. You need to give it the empty object that buyClay produced, so it needs a single parameter to capture that value and use it.
// The function should perform the task of adding a new property named shape, and its value should be "Bowl". The function should then return the object after the new property was added.
// Reminder: When a function returns a value, you should store that value in a variable
const makePottery = (obj) => {
    //adds property named shape with a value of "Bowl"
    obj.shape = "Bowl";
    //returns object
    return obj;
}
//defines function named bisqueFire and gives it the object that bisqueFire produced. The function should check if the pottery has been bisque fired already and is ready for glazing. If it has not, you should log the following message to the console.
const bisqueFire = (obj) => {
  (obj.readyForGlazing);
      return obj;
}

// Define a function named glazePottery. You need to give it the object that bisqueFire produced, so it needs a single parameter to capture that value and use it.
// The function should check if the pottery has been bisque fired already and is ready for glazing. If it has not, you should log the following message to the console.
// Make sure you bisque fire the pottery before you glaze it.
// If the pottery has been bisque fired, the function should perform the task of adding a new property named glazing, and its value should be "Midnight Blue". The function should then return the object after the new property was added.
const glazePottery = (obj) => {
    if (obj.readyForGlazing) {
        obj.glazing = "Midnight Blue";
    }
    else {
        console.log("Make sure you bisque fire the pottery before you glaze it.");
    }
    return obj;
}

// Define a function named finalFiring. You need to give it the object that glazePottery produced, so it needs a parameter to capture that value and use it. It also needs to capture the temperature of the kiln, so it needs two parameters.
// The function should perform the task of adding a new property named cracked, and its value depend on the value of the temperature parameter. If that value is higher than 1200, then the value of the cracked property must be true. If the value is 1200, or less, the value should be false.
// The function should then return the object after the new property was added.
// To test the function, make sure you invoke it and pass two arguments. First test if a high temperate cracks the pottery.


const finalFiring = (obj , temp) => {
    if (temp > 1200) {
        // Add cracked property with value of true
        obj.cracked = true;
    }
    else {
        // Add cracked property with value of false
        obj.cracked = false;
    }
    return obj;
}

const firedPottery1400 = finalFiring(glazedPottery, 1400)
console.log(firedPottery1400)

let myPot = {};
buyClay(myPot);
makePottery(myPot);
bisqueFire(myPot);
glazePottery(myPot);
finalFiring(myPot);
console.log(myPot);