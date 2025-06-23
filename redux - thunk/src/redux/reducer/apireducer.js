let initialState = {
    user: [],
}

const apireducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getUser':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default apireducer;