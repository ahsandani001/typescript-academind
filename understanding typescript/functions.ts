function add(n1: number, n2: number): number {
    console.log(n1 + n2); 
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: ", num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(10, 12));

let combineValues: Function 
combineValues = add;
console.log(combineValues(9, 8));

addAndHandle(10, 20, (result) => {
    console.log(result)
})