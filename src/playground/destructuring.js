// OBJECT DESTRUCTURING

// const person = {
//   name: 'Biss',
//   age: 28,
//   location: {
//     city: 'Portorando',
//     temp: '65'
//   }
// };
//
// //destructuring lets us rip the object apart :D
//
// const { name, age } = person;
//
// //const name = person.name;
// //const age = person.age;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
//
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//   title: 'Sup',
//   author: 'Biss Ass',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name:publisherName = 'self-published' } = book.publisher;
//
// console.log(publisherName);


//ARRAY DESTRUCTING

// const address = ['1234 SE Fake St', 'Portorando', 'Oregano', '12345'];
//
// const [ street, city, state, zip ] = address;
//
// console.log(`You are in ${city}, ${state}`);

//item. sm. md. lg.
const item = ['Coffee(hot)', '$2', '$2.50', '$2.75'];

const [ drink, ,mdPrice ] = item;

console.log(`A medium ${drink} costs ${mdPrice}.`);
