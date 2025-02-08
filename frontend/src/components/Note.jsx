

import React from 'react';
import { useState } from 'react';
import '../styles/Note.css';
import EditForm from './EditForm';

function Note({ note, onDelete }) {

    // const [openEditForm, setOpenEditForm] = useState(false)
    const formattedDate = new Date(note.create_at).toLocaleDateString("en-US")

    return (
        <div>

            {/* {openEditForm ? <EditForm note={note} openEditForm={openEditForm} setOpenEditForm={setOpenEditForm} /> : <></>} */}
            <div className="note-container">
                <p className="note-title">{note.title}</p>
                <p className="note-content">{note.content}</p>
                <p className="note-date">{formattedDate}</p>
                {/* <button className=""
                    onClick={() => setOpenEditForm(true)}
                >
                    Edit
                </button> */}
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Note;