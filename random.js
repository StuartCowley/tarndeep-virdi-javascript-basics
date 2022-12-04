const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const array = ['bike', 'car', 'train', 'bus'];
let x = removeNthElement2(2, array);
console.log(x);
