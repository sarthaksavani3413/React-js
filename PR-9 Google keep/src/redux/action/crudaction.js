const addNote = (note) => ({
    type: "ADD_NOTE",
    payload: note
});

const deleteNote = (id) => ({
    type: "DELETE_NOTE",
    payload: id
});

export { addNote, deleteNote }