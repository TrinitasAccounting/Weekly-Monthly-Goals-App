
import Form from '../components/Form';



// Setting the route and the method based on what page, so 
function Login() {

    return (
        <>
            <Form route="/api/user/login/" method="login" />
        </>
    )
}

export default Login;