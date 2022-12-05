// const removeNthElement2 = (index, array) => {
//   const newArray = [...array];
//   newArray.splice(index, 1);
//   return newArray;
// };

// const array = ['bike', 'car', 'train', 'bus'];
// let x = removeNthElement2(2, array);
// console.log(x);

// const getAges = people => {
//   let ages = [];
//   for (let i = 0; i < people.length; i++) {
//     return ages.push(people[i].age);
//   }

//   return ages;
// };

// const jim = {
//   name: 'Jim',
//   age: 66
// };

// const dilys = {
//   name: 'Dilys',
//   age: 50
// };

// const marjorie = {
//   name: 'Marjorie',
//   age: 65
// };
// getAges([jim, dilys, marjorie]);

// const john = {
//   name: 'John',
//   age: 60
// };

// const eric = {
//   name: 'Eric',
//   age: 50
// };

// const gary = {
//   name: 'Gary',
//   age: 25
// };

// const james = {
//   name: 'James',
//   age: 10
// };

// const averageAge = people => {
//   const arr = people.map(person => {
//     console.log(person.age);
//     return person.age;
//   });
//   console.log(arr);
//   let avg = 0;
//   for (let i = 0; i < arr.length; i++) {
//     avg += arr[i];
//   }
//   return avg / arr.length;
// };

// let x = averageAge([john, eric, gary]);
// console.log(x);

const createTalkingPerson = (name, age) => {
  const obj = {
    name,
    age
  };
  return obj;
};

const bill = createTalkingPerson('Bill', 40);
console.log(bill);

return strings.sort((a, b) => {
  const x = a.charAt(a.length - 1);
  const y = b.charAt(b.length - 1);
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
});
