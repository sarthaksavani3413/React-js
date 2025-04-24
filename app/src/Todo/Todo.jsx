const Todo = ({ todo }) => {
    return (
        <div className="w-50 mx-auto">
            <h1 align="center" className="my-3">Todo List</h1>
            <table className="table table-striped" border="1" align="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((val) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.task}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo;