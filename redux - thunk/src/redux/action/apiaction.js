let getUser = () => {
    return async (dispatch) => {
        try {
            let data = await fetch('https://dummyjson.com/comments', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            let response = await data.json()
            return dispatch({
                type: "getUser",
                payload: response.comments
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default getUser;