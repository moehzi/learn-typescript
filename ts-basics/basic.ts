let userName: string = 'faizi';
let hasLoggedIn: boolean = true;

userName += ' moehzi';

console.log(userName);

let myNumber: number = 10;

const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3]; // only number

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: 'Muhammad Nur',
  last: 'Faizi',
};

// number is key , string is value
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};
ids[30] = 'c';

// dont need to spesicfy number because its increment
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// it will be a number
[1, 2, 3].forEach((v) => console.log(v));

// it would be a string
const out = [4, 5, 6].map((v) => `${v * 10}`);
