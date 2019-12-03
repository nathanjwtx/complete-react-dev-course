import {combineReducers, createStore} from "redux";
import uuid from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: id
});
// Expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense);
            // using ES6 spread operator syntax
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return [...state].filter(e => e.id !== action.expense);
            // could also use destructuring as follows
            // return [...state].filter(({id}) => id !== action.expense);
        default:
            return state;
    }
};

// filters reducer
const filtersReducerDefaultState = {
    id: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: return state;
    }
};

// store creationn
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
});

const expense1 = store.dispatch(addExpense({description: "Rent", amount: 10000}));
const expense2 = store.dispatch(addExpense({description: 'coffee', amount: 400}));

store.dispatch(removeExpense({id: expense1.expense.id}));
// console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'sdgadg',
        description: 'november rent',
        note: 'does what it says on the tin',
        amount: 53400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};