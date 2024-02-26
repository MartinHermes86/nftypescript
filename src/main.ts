const age: number = 20;

for (let i: number = 0; i <= age; i++) {
    console.log(i);
}

if (age >= 18) {
    console.log('You are an adult.');
} else {
    console.log('You are a minor');
}

const score: number = 0;
if (score !== 0) {
    console.log('You have scored ' + score);
}

if (score) {
    console.log('Score is evaluated as truthy.');
} else {
    console.log('Score is not evaluated as truthy.');
}

const username: string = '';

if (username === '') {
    console.log('Username is not available.');
}

if (username) {
    console.log('Username is evaluated as truthy.');
} else {
    console.log('Username is not evaluated as truthy.');
}

const isAdmin: boolean = false;

if (isAdmin) {
    console.log('isAdmin is evaluated as truthy.');
} else {
    console.log('isAdmin is not evaluated as truthy.');
}

if (!isAdmin) {
    console.log('isAdmin is false.');
}

function printChristmasTree(n: number): void {
    // Print the tree top part
    for (let i: number = 0; i < n; i++) {
        let stars: string = '*'.repeat(2 * i + 1);
        let spaces: string = ' '.repeat(n - i - 1);
        console.log(spaces + stars + spaces);
    }

    let trunkSpace: string = ' '.repeat(n - 1);
    for (let i: number = 0; i < n; i++) {
        console.log(trunkSpace + '*' + trunkSpace);
    }
}

printChristmasTree(5);

console.log('\n');
console.log('TypeScript Function excercises:');
console.log('\n');

const numbers: number[] = [1, 2, 3, 4, 5];
const numberTimesTwo = numbers.map((n: number) => n * 2);
console.log(numberTimesTwo);

const words: string[] = ["hello", "world", "typescript", "array", "filter", "reduce"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);

const sumNumbers = numbers.reduce((acc, x) => acc + x, 0);
console.log(sumNumbers);

const numbers2: number[] = [5, 8, 14, 9, 7, 44];
const anyGreaterThan10: boolean = numbers2.some(x => x > 10);
console.log(anyGreaterThan10);

console.log('\n');
console.log('Bonus exercises:');
console.log('\n');

const list: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const descSort = list.sort((b, a) => a - b);
console.log(descSort);
console.log('\n');

const sqaureNumbers = list.map(x => x * x);
console.log(sqaureNumbers);
console.log('\n');

const filteredNumbers = list.sort((a, b) => a - b).slice(2, -4);
console.log(filteredNumbers);
console.log('\n');

const divideByFour = list.filter(x => x % 4 !== 0);
console.log(divideByFour);
console.log('\n');

const addAll = list.reduce((acc, x) => acc + x, 0);
console.log(addAll);
console.log('\n');

