import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return null;  // Or return <></> if you want to return an empty fragment
    }
    return (
        isAuthenticated &&
        (<button onClick={() => logout()}>
            Sign Out
        </button>)

    )
}
export default LogoutButton