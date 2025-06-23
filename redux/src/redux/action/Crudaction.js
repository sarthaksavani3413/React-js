const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user
});
const deleteUser = (id) => {

    return {
        type: 'DELETE_USER',
        payload: id
    }
}

const editUser = (id) => ({
    type: 'EDIT_USER',
    payload: id
});

export { addUser, deleteUser, editUser };