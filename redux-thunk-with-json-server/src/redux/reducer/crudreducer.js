const initialstate = {
    user: [],
    error: null,
    single: []
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'addUser':
            return {
                ...state,
                user: [...state.user, action.payload],
            };

        case 'addUsererr':
            return {
                ...state,
                error: action.payload
            }

        case 'viewUser':
            return {
                ...state,
                user: action.payload,
            }

        case 'viewUsererr':
            return {
                ...state,
                error: action.payload
            }

        case 'deleteUser':
            return {
                ...state,
                user: state.user.filter((user) => user.id !== action.payload),
            }

        case 'deleteUsererr':
            return {
                ...state,
                error: action.payload
            }

        case 'edituser':
            return {
                ...state,
                single: action.payload
            }

        case 'ediusererr':
            return {
                ...state,
                error: action.payload
            }

        case 'updateuser':
            return {
                ...state,
                user: state.user.map((u) =>
                    u.id == action.payload.id ? action.payload : u
                ),
            };

        case 'updateusererr':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default reducer;