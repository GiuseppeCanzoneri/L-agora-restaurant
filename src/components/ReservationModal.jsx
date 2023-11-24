import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ReservationModal = ({ showModal, handleClose }) => {
  const [reservationData, setReservationData] = useState({
    firstName: "",
    lastName: "",
    selectedDate: "",
    selectedTime: "",
    numberOfPeople: 1,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setReservationData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Prenotazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={reservationData.firstName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={reservationData.lastName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name="selectedDate"
              value={reservationData.selectedDate}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Ora</Form.Label>
            <Form.Control
              type="time"
              name="selectedTime"
              value={reservationData.selectedTime}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formNumberOfPeople">
            <Form.Label>Numero di persone</Form.Label>
            <Form.Control
              type="number"
              name="numberOfPeople"
              value={reservationData.numberOfPeople}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Prenota
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReservationModal;
