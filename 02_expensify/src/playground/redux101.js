import { createStore } from 'redux';


// Action generators - functions that return action objects
// const incrementCount = (v = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof v.inc === 'number' ? v.inc : 1
// });
// the above destructured is:
// inc will default to 1 as a result of destructuring the default empty object caused
// by no value being passed in
const incrementCount = ({ inc = 1 } = {}) => ({
    type: 'INCREMENT',
    inc
});

const decrementCount = ({ dec = 1 } = {}) => ({
    type: 'DECREMENT',
    dec
});

// having no default value forces the user to set/pass it
const setCount = ({ set } = {}) => ({
    type: 'SET',
    set
});

const resetCount = (reset= 0) => ({
    type: 'RESET',
    reset
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            // const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + action.inc
            };
        case "DECREMENT":
            return {
                count: state.count - action.dec
            };
        case "RESET":
            console.log("reset");
            return {
                count: action.reset
            };
        case "SET":
            return {
                count: action.set
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// by assigning to a variable, unsubscribe() can be called to unsubscribe or subscribe
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(incrementCount({inc: 2}));
store.dispatch(incrementCount({inc: 5}));
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5}
// );
//
// store.dispatch(
//     { type: "INCREMENT" }
// );

store.dispatch(decrementCount());
store.dispatch(decrementCount({dec: 3}));

store.dispatch(setCount({set: 10}));
store.dispatch(resetCount());
//
// store.dispatch(
//     { type: "RESET" }
// );
//
// store.dispatch(
//     { type: "INCREMENT" }
// );
//
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 2
// })
//
// store.dispatch(
//     { type: "INCREMENT" }
// );
//
// store.dispatch({
//     type: "SET",
//     count: 50
// });
// console.log(store.getState());