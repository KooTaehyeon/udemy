let name = 'Max';
let age = 29;
let hasHobbies = true;

age = 30;
const summarzeUser = (userName, userAge, userHashobbies) => {
  return (
    'Name is' +
    userName +
    ', age is ' +
    userAge +
    ', Hashobbies is ' +
    userHashobbies
  );
};
const add = (a) => a + 3;

const person = {
  name1: name,
  age1: age,
  greet() {
    console.log('hi, i am' + this.name1);
  },
};

const copiedPerson = { ...person };
//console.log(copiedPerson, '객체');

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map((hobbies) => 'hobby: ' + hobbies));
// console.log(hobbies);
// hobbies.push('Programming');
const copiedArray = [...hobbies];
// console.log(hobbies, '원본배열');
// console.log(copiedArray, '복사배열');

const toArray = (...args) => {
  return args;
};
// console.log(toArray(1, 2, 3, 4));

const printName = ({ name1, age1 }) => {
  console.log(name1, age1);
};
// printName(person);
const { name1, age1 } = person;
console.log(name1, age1);
