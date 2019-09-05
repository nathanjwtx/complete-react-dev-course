// import subtract, { square, add } from "./utils.js";
// the default export isSenior can be called anything when importing because it is the default
// import isSenior, { isAdult, canDrink } from "./person.js";
// import validator from 'validator';

// console.log(validator.isEmail("test@gmail.com"));


// console.log("app is running!!");

// console.log(square(4))
// console.log(add(8, 4));
// console.log(subtract(7, 3));
// console.log(isAdult(19));
// console.log(canDrink(25));

// console.log(isSenior(64));

import React from 'react';
import ReactDom from 'react-dom';

const template = <p>This is JSX from webpack</p>
ReactDom.render(template, document.getElementById("app"));
