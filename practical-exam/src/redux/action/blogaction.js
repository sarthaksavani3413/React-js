const blogadd = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            dispatch(
                {
                    type: 'ADD_BLOG',
                    payload: result
                }
            );
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };
}

const blogview = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:8000/user');
            dispatch(
                {
                    type: "VIEW_BLOG",
                    payload: res.data
                }
            );
        } catch (error) {
            console.error("View blog error:", error);
        }
    };
};

const Blogdelete = (id) => {
    return {
        type: "BLOG_DELETE",
        payload: id,
    };
};

const updateBlog = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8000/user/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            dispatch({
                type: 'UPDATE_BLOG',
                payload: result
            });

        } catch (error) {
            console.error("Error updating blog:", error);
        }
    };
};

export { blogadd, blogview, Blogdelete, updateBlog };