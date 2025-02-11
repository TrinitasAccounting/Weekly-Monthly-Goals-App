
import { useState } from "react";
import api from "../api"
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import '../styles/Form.css';
import LoadingIndicator from "./LoadingIndicator";


function Form({ route, method }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register";


    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault()

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            }
            else {
                navigate("/login")
            }
        }
        catch (error) {
            alert(error)
        }
        finally {
            setLoading(false)
        }

    }





    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type='username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button
                type='submit'
                className="form-button"
            >{name}</button>
            {method === "login" ?
                <div>
                    <h4>Create a New Account: <Link to="/register" >Sign Up </Link></h4>
                </div>
                :
                <div>
                    <h4>Already have an Account: <Link to="/login" >Sign In </Link></h4>
                </div>
            }
        </form>
    )

}

export default Form;