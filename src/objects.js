const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property] === undefined) {
    return false;
  }
  return true;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.filter(e => {
    if (e.name === name) {
      return e;
    }
  });
};

const findHondas = cars => {
  return cars.filter(car => {
    if (car.manufacturer === 'Honda') {
      return car;
    }
  });
};

const averageAge = people => {
  const arr = people.map(person => {
    return person.age;
  });
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
};

const createTalkingPerson = (name, age) => {
  const obj = {
    name,
    age,
    introduce: friend => {
      return `Hi ${friend}, my name is ${obj.name} and I am ${obj.age}!`;
    }
  };
  return obj;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
