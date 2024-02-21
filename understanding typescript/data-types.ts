/* const person: {
    name: string;
    age: number;
    hobbies: string[],
    role: [number, string];
} = {
    name: "Ahsan",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
} */

// person.role.push('admin');
// person.role[1] = 10;

enum Role { ADMIN = "ADMIN", READY_ONLY = 100, AUTHOR = "AUTHOR" };

const person = {
    name: "Ahsan",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby);
}

if(person.role === Role.AUTHOR){
    console.log('is author');
}