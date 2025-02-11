
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import api from "../api";
import Note from "../components/Note";
import '../styles/Home.css';



function Home() {

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes()
    }, [])

    // Function to get our notes, by calling the api.get to the backend 
    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => { setNotes(data); console.log(data) })
            .catch((err) => alert(err));
    }


    // ********Make sure to put our back slash at the end of each route, this is one of those simple but nagging bugs
    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    // alert("Note was successfully deleted")
                }
                else {
                    alert("Failed to Delete note")
                }
                // Should be using a filter of the current notes list to remove on the frontend, instead of using a fetch again. Will write later during optimization
                getNotes();
            })
            .catch((error) => alert(error))
    }


    const createNote = (event) => {
        event.preventDefault()
        api.post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    // alert("Note Created")
                }
                else {
                    alert("Failed to make note")
                }
                getNotes();
            })
            .catch((error) => alert(error))

        setTitle("")
        setContent("")
    }

    //Mapped through Notes
    const listOfNotes = notes.map((item) => {
        return (
            <Note note={item} onDelete={deleteNote} key={item.id} />
        )
    })





    return (
        <>
            <Link to="/logout" >
                <button style={{ color: "white", position: "absolute", top: "5%", right: "5%", width: "100px", height: "40px", fontSize: "18px", backgroundColor: "#8f92af", border: "none" }} >Logout</button>
            </Link>

            <form onSubmit={createNote}>
                <label htmlFor="title">Title</label>
                <br />
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="content">Content</label>
                <br />
                <textarea
                    name='content'
                    id='content'
                    required
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></textarea>
                <br />
                {/* <input type='submit' value='Submit'></input> */}
                <button type='submit' >Submit</button>
            </form>

            <div>
                <h2>Notes</h2>
            </div>
            <div>
                {listOfNotes}

            </div>

        </>
    )
}

export default Home;