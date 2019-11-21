import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 2;
            return {
                count: state.count - decrementBy
            };
        case "RESET":
            console.log("reset");
            return {
                count: state.count = 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
});

// by assigning to a variable, unsubscribe() can be called to unsubscribe or subscribe
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({
    type: "INCREMENT",
    incrementBy: 5}
);

store.dispatch(
    { type: "INCREMENT" }
);

store.dispatch({
    type: "DECREMENT",
    decrementBy: 2}
);

store.dispatch(
    { type: "RESET" }
);

store.dispatch(
    { type: "INCREMENT" }
);

store.dispatch({
    type: "DECREMENT",
    decrementBy: 2
})

store.dispatch(
    { type: "INCREMENT" }
);

store.dispatch({
    type: "SET",
    count: 50
});
console.log(store.getState());