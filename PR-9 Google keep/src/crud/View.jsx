import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../redux/action/crudaction';
import './crud.css';
import { RiDeleteBin6Fill } from "react-icons/ri";

const View = () => {
    const notes = useSelector(state => state.crud.notes);
    const dispatch = useDispatch();

    return (
        <div className="notes-container" align="center">
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    <h4>{note.title}</h4>
                    <p>{note.content}</p>
                    <button className="note-btn" onClick={() => dispatch(deleteNote(note.id))}><RiDeleteBin6Fill /></button>
                </div>
            ))}
        </div>
    );
};

export default View;
