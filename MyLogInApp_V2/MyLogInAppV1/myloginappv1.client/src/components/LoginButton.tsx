import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return null;  // Or return <></> if you want to return an empty fragment
    }
    return (
        !isAuthenticated &&
        (<button onClick={() => loginWithRedirect()}>
            Sign In
        </button>)

    )
}
export default LoginButton