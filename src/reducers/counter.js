const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - action.value;
        case 'RESET':
            return state = 0;
        default:
            return state
    }
};

export default counterReducer;
