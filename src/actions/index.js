export const increment = (value = 1) => ({
    type: 'INCREMENT',
    value: value
});

export const decrement = (value = 1) => ({
    type: 'DECREMENT',
    value: value
});

export const reset = () => ({
    type: 'RESET'
});

export const signIn = () => ({
    type: 'SIGN_IN'
});
