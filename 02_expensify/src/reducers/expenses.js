const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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

