console.log("utils is called");

export const square = (x) => x * x;
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
export { add, subtract as default };

// or export default subtract;
// or export default (a, b) => a - b;

// default exports