import axios from "axios";

const getCart = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://dummyjson.com/carts');
            const data = await response.json();
            dispatch({
                type: "GET_CART",
                payload: data.carts
            });
        } catch (error) {
            console.error("Error fetching carts:", error);
        }
    };
};

const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://dummyjson.com/posts');
            dispatch({
                type: 'GET_POSTS',
                payload: response.data.posts,
            });
        } catch (error) {
            console.error('Axios error fetching posts:', error);
        }
    };
};

export { getCart, getPosts };