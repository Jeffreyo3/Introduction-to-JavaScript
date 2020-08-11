/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 17;
let votingAgeA = 21;

console.log(votingAge > 18);
console.log(votingAgeA > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let changeMe = 27;
let constant = 0;

console.log(changeMe);
if (changeMe > 21) {
  changeMe = constant;
  console.log(changeMe);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = "1999";
console.log(year);
year = Number(year);
console.log(year);

//Task d: Write a function to multiply a*b
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 6));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function humanToDogYears(humanAge) {
  return humanAge * 7;
}

console.log(humanToDogYears(30));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
function feeder(weight, age) {
  // adult dogs at least 1 year
  if (age >= 1) {
    // up to 5 lbs - 5% of their body weight
    if (weight <= 5) {
      return weight * 0.05;
      // 6 - 10 lbs - 4% of their body weight
    } else if (weight > 5 && weight <= 10) {
      return weight * 0.04;
      // 11 - 15 lbs - 3% of their body weight
    } else if (weight > 10 && weight <= 15) {
      return weight * 0.03;
      // > 15lbs - 2% of their body weight
    } else {
      return weight * 0.02;
    }
    // Puppies less than 1 year
  } else {
    // 2 - 4 months 10% of their body weight
    if (age <= 0.16) {
      return "Please feed with bottle";
      // 4 - 7 months 5% of their body weight
    } else if (age > 0.16 && age <= 0.33) {
      return weight * 0.1;
      // 7 - 12 months 4% of their body weight
    } else if (age > 0.33 && age <= 0.58) {
      return weight * 0.05;
    } else {
      return weight * 0.04;
    }
  }
}

// test older than 1 & lowest weight
console.log(feeder(2, 2));
// test older than 1 & weight more than 5, less than 10
console.log(feeder(6, 2));
// test older than 1 & weight more than 11, less than 15
console.log(feeder(11, 2));
// test older than 1 & weight more than 15
console.log(feeder(80, 2));

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
console.log(feeder(15, 1));

// test younger than 2mo
console.log(feeder(15, 0.1));
// test older than 2mo, younger than 4mo
console.log(feeder(15, 0.17));
// test older than 4mo, younger than 7mo
console.log(feeder(15, 0.34));
// test older than 7mo
console.log(feeder(15, 0.88));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function RPS(string) {
    computerTurn = Math.floor(Math.random() * 3 + 1)
    let userTurn = 0
    if (string === "rock") {
        userTurn = 1
    } else if (string === "paper") {
        userTurn = 2
    } else if (string === "sissors") {
        userTurn = 3
    } else {
        return "Invalid turn"
    }

    if (computerTurn === 1 && userTurn === 3) {
        return `You lose: rock beats sissors`
    } else if (computerTurn === 3 && userTurn === 1) {
        return `You win!: rock beats sissors`
    } else if (computerTurn < userTurn) {
        return `You win!`
    } else {
        return `You lose!`
    }
    

}
console.log(RPS("rock"))
console.log(RPS("paper"))
console.log(RPS("sissors"))

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(km) {
    return km / 1.609344
}
console.log(kmToMiles(1))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function ftToCM(ft) {
    return ft * 30.48
}
console.log(ftToCM(2))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(number) {
    const countDown = number
    for (i = 0; i < countDown; i++) {
        console.log(`${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number-1} bottles of soda on the wall`)
        number = number - 1
    }
}
annoyingSong(10)
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F
function gradeCalculator(percent) {
    if (percent === 100) {
        return "A+"
    } else if (percent < 100 && percent >= 90) {
        return "A"
    } else if (percent < 90 && percent >= 80) {
        return "B"
    } else if (percent < 80 && percent >= 70) {
        return "C"
    } else if (percent < 70 && percent >= 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(gradeCalculator(93)) // A
console.log(gradeCalculator(63)) // D
console.log(gradeCalculator(73)) // C
console.log(gradeCalculator(88)) // B
console.log(gradeCalculator(90)) // A
console.log(gradeCalculator(60)) // D
console.log(gradeCalculator(50)) // F
console.log(gradeCalculator(100)) // A+

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
