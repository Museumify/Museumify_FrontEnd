import { React, useContext } from "react";
import "./ArtPieceDetail.css";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeContext } from "../../App";

function ArtPieceDetail({
  handleShow,
  handleClose,
  show,
  DetailData,
  commentHandler,
  artkey,
}) {
  const { user, isAuthenticated } = useAuth0();

  const [comment, setComment] = useState("");
  const commentRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const userComment = commentRef.current.value;
    const newArt = { ...DetailData, userComment };
    setComment(userComment);
    commentHandler(newArt, newArt.id);
    alert("Your comment will be added once you add this art piece to favorite");
  }

  async function handleAddFav(e) {
    e.preventDefault();
    let url = `${process.env.REACT_APP_SERVER_URL}/addNewArt`;
    let data = {
      title: DetailData.title,
      artist: DetailData.artist,
      image: DetailData.image,
      description: DetailData.description,
      place: DetailData.place,
      comment: DetailData.comment,
      userid: user.sub,
    };

    const favArtDataresponse = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/allArts`
    );
    const favArtData = await favArtDataresponse.json();
    const existingArt = favArtData.find(
      (art) => art.userid === user.sub && art.image === DetailData.image
    );
    if (existingArt) {
      alert("This image is already added to favorites.");
      return;
    }
    console.log("data from add fav", data);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    let receivedData = await response.json();
    console.log("receivedData", receivedData);
    if (response.status === 201) {
      handleClose();
    }
  }
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div>
        <Modal show={show} onHide={handleClose} size="xl" className="my-modal">
          <Modal.Header
            closeButton
            className={`my-modal ${theme === "dark" ? "dark" : "light"}`}
          >
            <Modal.Title
              className={`my-modal ${theme === "dark" ? "dark" : "light"}`}
            >
              <h1 style={{ fontFamily: "Lucida Console" }}>
                {DetailData.title}
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className={`my-modal ${theme === "dark" ? "dark" : "light"}`}
          >
            <div style={{ width: "40%", float: "left" }}>
              <img
                style={{ width: "100%", height: "400px" }}
                src={`${DetailData.image}`}
                alt={DetailData.title}
              />
              <p style={{ fontFamily: "Lucida Console", marginTop: "10px" }}>
                <b>ARTIST NAME: </b> {DetailData.artist}{" "}
              </p>
              <p style={{ fontFamily: "Lucida Console" }}>
                <b>PLACE: </b> {DetailData.place}{" "}
              </p>
              {isAuthenticated && (
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      ref={commentRef}
                      type="text"
                      placeholder="Type Your Comment here"
                      className={`CardField ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      float: "right",
                      fontFamily: "Lucida Console",
                      backgroundColor: "#BA704F",
                      border: "none",
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </div>
            <div style={{ width: "55%", marginRight: "2%", float: "right" }}>
              <p style={{ fontFamily: "Lucida Console" }}>
                <b>OVERVIEW</b>{" "}
              </p>
              <p
                style={{
                  fontFamily: "Lucida Console",
                  textAlign: "justify",
                  wordSpacing: "5px",
                }}
              >
                {" "}
                {DetailData.description}{" "}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer
            className={`my-modal ${theme === "dark" ? "dark" : "light"}`}
          >
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ fontFamily: "Lucida Console" }}
            >
              Close
            </Button>

            {isAuthenticated && (
              <Button
                variant="primary"
                style={{
                  fontFamily: "Lucida Console",
                  backgroundColor: "#BA704F",
                  border: "none",
                }}
                onClick={(e) => handleAddFav(e)}
              >
                Add To Favorite
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </ThemeContext.Provider>
  );
}

export default ArtPieceDetail;
