console.log("destructuring 101");

const person = {
    name: 'nathan',
    age: 48,
    location: {
        city: 'dallas',
        state: 'texas'
    }
};

console.log(`${person.name} is ${person.age}`);

// destructuring
const { name, age } = person;

console.log(`${name} is ${age}`);

// state demonstrates renaming syntax
// city shows default value
const { city = 'austin', state: US_State } = person.location;
console.log(`${city} is in the state of ${US_State}`);

const book = {
    title: "Ego is the Enemy",
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};
const { name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);