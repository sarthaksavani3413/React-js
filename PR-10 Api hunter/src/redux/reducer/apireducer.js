const initialState = {
    cart: [],
    posts: []
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CART":
            return {
                ...state,
                cart: action.payload
            };

        case "GET_POSTS":
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state;
    }
};

export default apiReducer;