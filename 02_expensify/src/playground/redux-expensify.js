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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = ({sortDescription = ''} = {}) => ({
    type: 'SET_TEXT_FILTER',
    sortDescription
});

const sortByAmount = ({sortBy = ''} = {}) => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});

const sortByDate = ({sortBy = ''} = {}) => ({
    type: 'SORT_BY_DATE',
    sortBy
});

const setStartDate = ({startDate} = {}) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = ({endDate} = {}) => ({
    type: 'SET_END_DATE',
    endDate
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
        case 'EDIT_EXPENSE':
            return [...state].map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            console.log(action.sortDescription);
            // return a NEW object so as not to change the original
            // then override the original sortBy value in the new object
            return {
                ...state,
                sortBy: action.sortDescription
            };
        // if the value being set isn't dynamic it can be hard coded
        // case 'SORT_BY_DATE':
        //     return {
        //         ...state,
        //         sortby: 'amount'
        //     };
        case 'SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
            console.log(action.sortBy);
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState())
});

// const expense1 = store.dispatch(addExpense({description: "Rent", amount: 10000}));
// const expense2 = store.dispatch(addExpense({description: 'coffee', amount: 400}));
//
// store.dispatch(removeExpense({id: expense1.expense.id}));
//
// store.dispatch(editExpense(expense2.expense.id, {amount: 500}));
//
// store.dispatch(setTextFilter({sortDescription: 'rent'}));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount({sortBy: 'amount'}));
// store.dispatch(sortByDate({sortBy: 'date'}));

store.dispatch(setStartDate({startDate: 125}));
store.dispatch(setEndDate({endDate: 300}));

store.dispatch(setEndDate({}));
store.dispatch(setStartDate({}));

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