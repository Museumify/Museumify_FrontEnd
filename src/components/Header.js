import React from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./screens/Profile";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <LoginButton />
          <LogoutButton />
          <Profile />

        </li>
      </ul>
    </nav>
  );
}

export default Header;
