
import Form from '../components/Form';



// Setting the route and the method based on what page. This one we are logging in with an authorized token
function Login() {

    return (
        <>
            <Form route="/api/token/" method="login" />
        </>
    )
}

export default Login;