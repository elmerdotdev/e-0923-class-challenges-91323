/**
 * Create a program that checks if the car is old or new and then show current value
 * 
 * Pseudocode:
 * 1. Input car name (carName)
 * 2. Input year of purchase (carYear)
 * 3. Input value price (carValue)
 * 3. If year of purchase is greater than or equal to 2020, change the car value by subtracting 1000 from the current value. Otherwise, subtract 5000 from the current value
 * 4. Print the message "My carYear carName is valued at carValue"
 * 
 * Note: There should only be 3 variables. You must update the value of carValue in your if-else statement
 * 
 * (Example output: My 2004 Volvo is valued at 3000)
 * 
 */

let carName = "Volvo"
let carYear = 2004
let carValue = 10000

if (carYear >= 2020) {
  carValue = carValue - 1000
} else {
  carValue = carValue - 5000
}

console.log(`My ${carYear} ${carName} is valued at ${carValue}`)
