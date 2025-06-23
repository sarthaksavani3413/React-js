import { editUser } from "../action/Crudaction";

let initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const CrudReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_USER':
            let AddUsers = [...state.users, action.payload];

            localStorage.setItem('users', JSON.stringify(AddUsers));
            return {
                ...state,
                users: AddUsers
            };

        case 'DELETE_USER':
            let filteredUsers = state.users.filter(user => user.userid !== action.payload);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            return {
                ...state,
                users: filteredUsers
            };

        case 'EDIT_USER':
            let editUsers = state.users.map(user => {
                if (user.userid == action.payload.userid) {
                    return action.payload;
                }
                return user;
            });
            localStorage.setItem('users', JSON.stringify(editUsers));
            return {
                ...state,
                users: editUsers
            };

        default:
            return state;
    }
}

export default CrudReducer;
