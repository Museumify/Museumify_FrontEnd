import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Dropdown.Item onClick={() => logout()} style={{textAlign:"center"}}>
                Sign Out
            </Dropdown.Item>
        )
    )
}

export default LogoutButton;