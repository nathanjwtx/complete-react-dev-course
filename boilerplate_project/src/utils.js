console.log('utils is running');

const sq = (x => x * x);
const add = ((a, b) => a + b);

const subtract = (a, b) => a - b;

export { sq, add, subtract as default };