const addUser = (record) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(record)
            })
            const data = await res.json()
            dispatch(
                {
                    type: 'addUser',
                    payload: data
                }
            );
        } catch (error) {
            dispatch(
                {
                    type: 'addUsererr',
                    payload: error
                }
            )
        }
    }
}


const viewUser = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/users`);
      const data = await res.json();
      dispatch({
        type: 'viewUser',
        payload: data // array of users
      });
    } catch (error) {
      dispatch({
        type: 'viewUsererr',
        payload: error.message
      });
    }
  };
};



const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            dispatch(
                {
                    type: 'deleteUser',
                    payload: id
                }
            );
        } catch (error) {
            dispatch(
                {
                    type: 'deleteUsererr',
                    payload: error
                }
            )
        }
    }
}

const editUser = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT',
            })
            const data = await res.json()
            dispatch(
                {
                    type: 'ediuser',
                    payload: id
                }
            );
        } catch (error) {
            dispatch(
                {
                    type: 'editUsererr',
                    payload: error
                }
            )
        }
    }
}

const updateUser = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            const data = await res.json()
            dispatch(
                {
                    type: 'edituser',
                    payload: data
                }
            );
        } catch (error) {
            dispatch(
                {
                    type: 'editUsererr',
                    payload: error
                }
            )
        }
    }
}

export { addUser, viewUser, deleteUser,editUser,updateUser };