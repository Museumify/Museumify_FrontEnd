import { Modal, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { useAuth0 } from '@auth0/auth0-react';
import "./NewCardForm.css"

function NewCardForm({ handleShow, handleClose, show }) {
    const { user} = useAuth0();

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
            <div  className="FormContainer">
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Art Piece</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >

                            <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
                            <Form.Control
                                ref={titleRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Title"
                            />
                            <InputGroup.Text id="inputGroup-sizing-sm">Artist</InputGroup.Text>
                            <Form.Control
                                ref={artistRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Your Name"
                            />

                            <InputGroup.Text id="inputGroup-sizing-sm">Image</InputGroup.Text>
                            <Form.Control
                                ref={imageRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Image URL"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">Description</InputGroup.Text>
                            <Form.Control
                                ref={descriptionRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Description"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">Place</InputGroup.Text>
                            <Form.Control
                                ref={placeRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Place"
                            />
                            
                            <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
                            <Form.Control
                                ref={commentRef}
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                style={{marginBottom:"20px"}}
                                placeholder="Add Comment"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" style={{backgroundColor: "#BA704F"}} onClick={(e)=> handleAddNewCard(e)}>
                        Add
                    </Button>
                </Modal.Footer>
                </div>
            </Modal>

        </div>
    )
}

export default NewCardForm;


