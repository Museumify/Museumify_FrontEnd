import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { useAuth0 } from '@auth0/auth0-react';

function NewCardForm({ handleShow, handleClose, show }) {
    const { user, isAuthenticated } = useAuth0();

    const titleRef = useRef();
    const artistRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const placeRef = useRef();
    const commentRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
    }

    async function handleAddNewCard(e) {
        e.preventDefault();
        let url = `${process.env.REACT_APP_SERVER_URL}/addNewArt`;
        let data = {
            title: titleRef.current.value,
            artist: artistRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            place: placeRef.current.value,
            comment: commentRef.current.value,
            userid:user.sub
        }
        console.log(data);
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        })
        await response.json();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Art Piece</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                            <Form.Control
                                ref={titleRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <InputGroup.Text id="inputGroup-sizing-sm">Artist</InputGroup.Text>
                            <Form.Control
                                ref={artistRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />

                            <InputGroup.Text id="inputGroup-sizing-sm">image</InputGroup.Text>
                            <Form.Control
                                ref={imageRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">description</InputGroup.Text>
                            <Form.Control
                                ref={descriptionRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">place</InputGroup.Text>
                            <Form.Control
                                ref={placeRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">comment</InputGroup.Text>
                            <Form.Control
                                ref={commentRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e)=> handleAddNewCard(e)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default NewCardForm;