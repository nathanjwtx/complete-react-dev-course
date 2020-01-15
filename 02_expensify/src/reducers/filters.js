const filtersReducerDefaultState = {
    id: "",
    filterBy: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            // console.log(`action: ${action.filterBy}`);
            // return a NEW object so as not to change the original
            // then override the original sortBy value in the new object
            return {
                ...state,
                filterBy: action.filterBy
            };
        // if the value being set isn't dynamic it can be hard coded
        // case 'SORT_BY_DATE':
        //     return {
        //         ...state,
        //         sortby: 'amount'
        //     };
        case 'SORT_BY_DATE':
        case 'SORT_BY_AMOUNT':
          // console.log(`sortBy: ${action.sortBy}`);
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
