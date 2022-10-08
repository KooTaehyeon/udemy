let name = 'Max';
let age = 29;
let hasHobbies = true;

function summarzeUser(userName, userAge, userHashobbies) {
  return (
    'Name is' +
    userName +
    ', age is' +
    userAge +
    ', Hashobbies is ' +
    userHashobbies
  );
}
console.log(summarzeUser(name, age, hasHobbies));
