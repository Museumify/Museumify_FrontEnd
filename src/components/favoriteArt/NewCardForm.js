import { Modal, Button, Form } from "react-bootstrap";
import { useRef, useContext, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuth0 } from "@auth0/auth0-react";
import "./NewCardForm.css";
import { ThemeContext } from "../../App";


function NewCardForm({ handleShow, handleClose, show,handleFavArt }) {
  const { user } = useAuth0();
  const { theme } = useContext(ThemeContext);
  const titleRef = useRef();
  const artistRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const placeRef = useRef();
  const commentRef = useRef();
  const [cards, setCards] = useState([]);
  

  function handleSubmit(e) {
    e.preventDefault();
  }
  

  async function handleAddNewCard(e) {
    e.preventDefault();
    if (
      titleRef.current.value.trim() === "" ||
      artistRef.current.value.trim() === "" ||
      imageRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === "" ||
      placeRef.current.value.trim() === "" 
    ) {
      alert("All fields are required. Please fill in all the information.");
      return;
    }
    let url = `${process.env.REACT_APP_SERVER_URL}/addNewArt`;
    let data = {
      title: titleRef.current.value,
      artist: artistRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      place: placeRef.current.value,
      comment: commentRef.current.value,
      userid: user.sub,
    };
  const favArtDataresponse = await fetch(`${process.env.REACT_APP_SERVER_URL}/allArts`);
  const favArtData = await favArtDataresponse.json();
  const existingArt = favArtData.find(
    (art) => art.userid === user.sub && art.title === data.title
  );
  if (existingArt) {
    alert('You already added this art piece before.');
    return;
  }
    console.log(data);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
   await response.json();
   if(response.status===201)
   {
    setCards((prevCards) => [...prevCards, data]);
    // alert("Your art piece was added successfully in favorite page")
    handleClose()
    handleFavArt()
   }
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <div
            className={`FormContainer ${theme === "dark" ? "dark" : "light"}`}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Your Art Piece</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <InputGroup.Text id="inputGroup-sizing-sm" className={` inputField  ${theme === "dark" ? "dark" : "light"}`}>
                    Title
                  </InputGroup.Text>
                  <Form.Control
                    ref={titleRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px", height:"40px" }}
                    placeholder="Add Title"
                    className={`FormFields ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                  />
                  <InputGroup.Text id="inputGroup-sizing-sm" style={{borderStyle:"none" }}>
                    Artist
                  </InputGroup.Text>
                  <Form.Control
                    ref={artistRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px",height:"40px" }}
                    placeholder="Add Your Name"
                    className={`FormFields ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                  />

                  <InputGroup.Text id="inputGroup-sizing-sm" style={{borderStyle:"none" }}>
                    Image
                  </InputGroup.Text>
                  <Form.Control
                    ref={imageRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px", height:"40px" }}
                    placeholder="Add Image URL"
                    className={`FormFields ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                  />

                  <InputGroup.Text id="inputGroup-sizing-sm" style={{borderStyle:"none" }}>
                    Description
                  </InputGroup.Text>
                  <Form.Control
                    ref={descriptionRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px", height:"40px" }}
                    placeholder="Add Description"
                    className={`FormFields ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                  />

                  <InputGroup.Text id="inputGroup-sizing-sm" style={{borderStyle:"none" }}>
                    Place
                  </InputGroup.Text>
                  <Form.Control
                    ref={placeRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px", height:"40px" }}
                    placeholder="Add Place"
                    className={`FormFields ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                  />

                  <InputGroup.Text id="inputGroup-sizing-sm" style={{borderStyle:"none" }}>
                    Comment
                  </InputGroup.Text>
                  <Form.Control
                    ref={commentRef}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ marginBottom: "20px", height:"70px" }}
                    placeholder="Add Comment"
                    className={`FormFields ${
                      theme === "dark" ? "dark" : "light"
                    }`}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                style={{ backgroundColor: "#BA704F" }}
                onClick={(e) => handleAddNewCard(e)}
              >
                Add
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </ThemeContext.Provider>
  );
}

export default NewCardForm;
