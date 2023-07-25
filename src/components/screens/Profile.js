import { useAuth0 } from '@auth0/auth0-react';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0();

//     return (
        
//         isAuthenticated && (
//             <article className='column'>
//                 {user?.picture && <img src={user.picture} alt={user?.name} />}
//                 <h2>{user?.name}</h2>
//                 <ul>
//                     {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
//                 </ul>
//             </article>
//         )
//     )
// }

// export default Profile
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const [showModal, setShowModal] = useState(false);
  
    const handleToggleModal = () => {
      setShowModal((prevState) => !prevState);
    };
  
    return (
      <div>
        {isAuthenticated && (
          <article className='column'>
            <div className='profile-header' onClick={handleToggleModal}>
              {user?.picture && <img src={user.picture} alt={user?.name} />}
              <h2>{user?.name}</h2>
            </div>
            {/* Modal component */}
            <Modal show={showModal} onHide={handleToggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>User Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Replace the 'src', 'alt', 'name', and 'email' with actual user data */}
                {user?.picture && <img src={user.picture} className="img-fluid mb-3" alt="User Image" />}
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleToggleModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </article>
        )}
      </div>
    );
  };
  
  export default Profile;