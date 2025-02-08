
// import { useState } from "react";
// import api from "../api";



// function EditForm({ note, openEditForm, setOpenEditForm }) {

//     const [editTitle, setEditTitle] = useState(note.title)
//     const [editContent, setEditContent] = useState(note.content)
//     const [editNoteForm, setEditNoteForm] = useState({
//         id: note.id,
//         title: note.title,
//         content: note.content,
//         created_at: note.created_at,
//         author: note.author
//     })


//     console.log(editNoteForm);

//     //handling change for editting form
//     function handleChangeFormInputs(event) {
//         setEditNoteForm({ ...editNoteForm, [event.target.name]: event.target.value })
//     }

//     //Writing the PATCH fetch to the backend
//     // const updateNote = async (editNoteForm) => {
//     //     try {
//     //         const response = await fetch(`http://127.0.0.1:8000/api/notes/edit/${editNoteForm.id}/`,
//     //             {
//     //                 method: 'PATCH',
//     //                 headers: {
//     //                     'Content-Type': 'application/json',
//     //                 },
//     //                 body: JSON.stringify(editNoteForm)
//     //             }
//     //         )

//     //         if (!response.ok) {
//     //             const errorData = await response.json();
//     //             throw new Error(`HTTP error: status: ${response.status}`)
//     //         }

//     //         const data = await response.json();
//     //         return data;
//     //     }
//     //     catch (error) {
//     //         console.error("There was an error updating the data:", error)
//     //         throw error;
//     //     }
//     // }

//     // Potentially wrong
//     const updateNote = (editNoteForm) => {
//         let content = editNoteForm.content;
//         let title = editNoteForm.title;

//         api.patch(`/api/notes/edit/${editNoteForm.id}`, { content, title })
//             .then((res) => {
//                 if (res.status === 201) {
//                     // alert("Note Updated")
//                 }
//                 else {
//                     alert("Failed to update note")
//                 }
//                 getNotes();
//             })
//             .catch((error) => alert(error))

//     }


//     //Handling submission of the edit note form
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         updateNote(editNoteForm)
//         setOpenEditForm(false)
//     }


//     return (

//         <>

//             <form
//                 onSubmit={
//                     handleSubmit
//                     // updateNote(editNoteForm)

//                 }
//             >
//                 <label htmlFor="title">Title</label>
//                 <br />
//                 <input
//                     type='text'
//                     name='title'
//                     id='title'
//                     value={editNoteForm.title}
//                     onChange={handleChangeFormInputs}
//                 />
//                 <br />
//                 <label htmlFor="content">Content</label>
//                 <br />
//                 <textarea
//                     name='content'
//                     id='content'
//                     required
//                     value={editNoteForm.content}
//                     onChange={handleChangeFormInputs}
//                 ></textarea>
//                 <br />
//                 {/* <input type='submit' value='Submit'></input> */}
//                 <button  >Save Edit</button>
//             </form>
//         </>
//     )
// }


// export default EditForm;