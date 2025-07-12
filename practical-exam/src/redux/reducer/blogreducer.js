const initialState = {
    user: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return {
                ...state,
                user: [...state.user, action.payload]
            };

        case 'VIEW_BLOG':
            return {
                ...state,
                user: action.payload
            };

        case 'BLOG_DELETE':
            return {
                ...state,
                user: state.user.filter((item) => item.id !== action.payload)
            }
        case 'UPDATE_BLOG':
            return {
                ...state,
                user: state.user.map((u) =>
                    u.id == action.payload.id ? action.payload : u
                ),
            };
            
        default:
            return state;
    }
}

export default blogReducer;