let userInput: unknown;
let username: string

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
    username = userInput;
}

function generateError(message: string, code: number): never { // never returns anything
    throw {message: message, errorCode: code};
}

generateError('An error occurred', 500);