import { React ,useContext }from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card } from "react-bootstrap";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import "./Profile.css";
import { ThemeContext } from '../../App';  



const ProfilePage = () => {
  const { user } = useAuth0();
  const { theme } = useContext(ThemeContext);
  
  return (
  <>
    <Container className="profile-container">
<<<<<<< HEAD
      {/* <h1 className="profile-title" style={{fontFamily: "DaiBannaSIL"}}>Your Profile</h1> */}
    <Card className="profile-card" style={{ maxWidth: "400px",height:"100%", backgroundColor: "#FFECAF"  }}>
=======
      <h1 className={`profile-title ${theme === 'dark' ? 'dark' : 'light'}`} style={{fontFamily: "DaiBannaSIL"}}>Your Profile</h1> 
    <Card className={`profile-card ${theme === 'dark' ? 'dark' : 'light'}`} style={{ maxWidth: "400px",height:"100%" }}>
>>>>>>> origin/naser-styling
      <div className="profile-image-container">
        {user?.picture && (
          <img
            src={user.picture}
            alt={user.name}
            className="profile-image"
          />
        )}
      </div>
      <Card.Body className="profile-card-body">
        <Card.Title className="profile-name">{user?.name}</Card.Title>
        <div className="profile-details">
          <p>
            <FaEnvelope className="profile-icon" /> {user?.email || "N/A"}
          </p>
          <p>
            <FaUserAlt className="profile-icon" /> {user?.nickname || "N/A"}
          </p>
        </div>
      </Card.Body>
    </Card>
    </Container>
  </>
  );
};

export default ProfilePage;










