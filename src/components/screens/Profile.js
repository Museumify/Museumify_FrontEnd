import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Modal, Button } from 'react-bootstrap';
import "./Profile.css"

const ProfileModal = ({ showModal, handleToggleModal }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Modal show={showModal} onHide={handleToggleModal} className="profile-modal">
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isAuthenticated && (
        <>
          <article className='column'>
          <div className="profile-image-container">
            {user?.picture && <img src={user.picture} alt={user?.name} className="profile-image"/>}
          </div>
            <h2 className="profile-name">{user?.name}</h2>
            <p className="profile-email">Email: {user?.email || 'N/A'}</p>
            <p className="profile-nickname">Nickname: {user?.nickname || 'N/A'}</p>
          </article>
        </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;















