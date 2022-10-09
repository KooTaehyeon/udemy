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

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map((hobbies) => 'hobby: ' + hobbies));
// console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);
