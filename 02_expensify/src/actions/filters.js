export const setTextFilter = (filterBy = '') => ({
    type: 'SET_TEXT_FILTER',
    filterBy
});

export const sortByAmount = (sortBy) => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});

export const sortByDate = (sortBy) => ({
    type: 'SORT_BY_DATE',
    sortBy
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});