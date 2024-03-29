type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }else{
        return input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(30, "Ahsan");
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);