/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

const ADULTHOOD_YEAR = 18

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
    return a + b
}

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(number) {
    return number % 2 === 0
}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {
    return `Hello, ${name}!`
}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
    return age >= ADULTHOOD_YEAR
}

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function getYearsToAdulthood(age) {
    return ADULTHOOD_YEAR - age
}

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult (isAnAdult)
//   - if they are, greet them (greet)
//   - if they are not, tell them to come back in X years (when they are) (yearsToAdulthood)
// Output: The result (string)
function admit(person) {
    if (isAnAdult(person.age)) {
        console.log(greet(person.name))
    } else {
        console.log(`Come back in ${getYearsToAdulthood(person.age)} years.`)
    }
}

let person = { age: 18, name: 'Amer' }
admit(person)
