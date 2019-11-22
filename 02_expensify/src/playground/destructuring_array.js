const address = ['123 N Head Dr', 'Wylie', 'TX', '75098'];

// items from array can be skipped by just using the ,
// no renaming syntax
// default values can be used even if the array is empty
const [, city, state = 'Texas', zip] = address;

console.log(`You are in ${city} which is in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}.`);