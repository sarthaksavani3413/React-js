const increment = () => {
    return {
        type: 'inc',
    };
};

const decrement = () => {
    return {
        type: 'dec',
    };
};

const reset = () => {
    return {
        type: 'res',
    };
};

export { increment, decrement, reset };