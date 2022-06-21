/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

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
    let result = number % 2 === 0
    if (result === true) {
        return true
    } else {
        return false
    }
}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name) {
    let greeting = `Hello ${name} !!`
    return greeting
}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {
    return 18 - age
}

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult (isAnAdult)
//   - if they are, greet them (greet)
//   - if they are not, tell them to come back in X years (when they are) (yearsToAdulthood)
// Output: The result (string)
function admit(person) {
    if (person.age >= 18) {
        let greeting = `Hello ${name} !!`
        return greeting
    } else {
        console.log(`Come back in ${yearsToAdulthood} years.`)
    }
}
