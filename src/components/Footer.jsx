import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h3>Contatti</h3>
            <p>Indirizzo: Via Rocca Pirrone - 90038, Prizzi</p>
            <p>Email: gcanzoneri3@gmail.com</p>
            <p>Telefono: +39 3295656116</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Orari di Apertura</h3>
            <p>Lunedì - Venerdì: 11:00 - 23:00</p>
            <p>Sabato - Domenica: 12:00 - 22:00</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Seguici</h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} L'Agora - Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
