const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'inc':
            return {
                count: state.count + 1
            };
        case 'dec':
            return {
                count: state.count - 1
            };
        case 'res':
            return {
                count: 0
            };
        default:
            return state;
    }
};

export default counterReducer;