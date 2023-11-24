import React, { useState } from "react";
import { Alert, Button, Container, Image, Col, Row } from "react-bootstrap";
import ReservationModal from "./ReservationModal";
import restaurantImage from "../assets/chef.png";

const Jumbo = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const handleReservation = () => {
    setReservationSuccess(true);
    setShowReservationModal(true);
  };

  const handleCloseReservationModal = () => {
    setShowReservationModal(false);

    if (reservationSuccess) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setReservationSuccess(false);
      }, 3000);
    }
  };

  return (
    <Container fluid className="margin">
      <Row className="align-items-center">
        {/* Immagine a sinistra */}
        <Col md={4} className="text-center">
          <Image src={restaurantImage} alt="Restaurant" fluid />
        </Col>

        {/* Testo a destra */}
        <Col md={8} className="text-center">
          <h1 className="text-dark fw-bold jumbo mt-5">
            Prenota un tavolo e <br /> una camera nel <br /> nostro ristorante e <br /> bed and breakfast
          </h1>
          <p className="fs-4 color4">
            L'Agora ti offre un'esperienza culinaria unica e un soggiorno <br /> confortevole, tutto in un unico posto.
          </p>

          <Button variant="success" className="my-button fw-bold" onClick={handleReservation}>
            Prenota un tavolo
          </Button>

          <ReservationModal showModal={showReservationModal} handleClose={handleCloseReservationModal} />

          <Alert show={showAlert} variant="success" className="position-fixed top-0 end-0 mt-3 me-3">
            <Alert.Heading>Email inviata!</Alert.Heading>
            <p>La tua prenotazione è stata effettuata con successo. Grazie!</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShowAlert(false)} variant="outline-success">
                Chiudi
              </Button>
            </div>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbo;
