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

console.log(add(2));
console.log(summarzeUser(name, age, hasHobbies));
