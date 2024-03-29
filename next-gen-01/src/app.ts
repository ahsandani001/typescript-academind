const userName = 'Max';

let age = 30;
age = 29

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// console.log(add(2, 5))

// if(age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2));

// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(add(5));

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);

const { firstName, age: userAge } = person;
console.log(firstName, userAge, person);