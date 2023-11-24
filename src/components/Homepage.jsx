import { Container, Row, Col, Form, Card, Button, Alert } from "react-bootstrap";
import photo1 from "../assets/photo-1.jpeg";
import menu from "../assets/menu-photo.jpeg";
import photo2 from "../assets/photo-2.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    // Verifica il formato dell'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailIsValid(false);
      return;
    }

    // Aggiungi qui la logica per inviare l'email

    // Mostra l'alert
    setShowAlert(true);

    // Resetta lo stato dell'emailIsValid
    setEmailIsValid(true);

    // Puoi aggiungere un ritardo e poi nascondere l'alert
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <img src={photo1} alt="photo1" className="rounded-4 img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h1 className=" fs-1 fw-bold mb-4">Prenota facilmente online</h1>
          <p className=" fs-5">
            Con il nostro servizio di prenotazione online, puoi <br /> prenotare un tavolo nel nostro ristorante e una
            camera nel <br /> nostro bed and breakfast in pochi clic.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h1 className=" fs-1 fw-bold mb-4">Scopri il nostro delizioso menu</h1>
          <p className=" fs-5">
            Goditi una vasta selezione di piatti deliziosi nel nostro ristorante. Il nostro menu offre opzioni per tutti
            i gusti e le preferenze.
          </p>
          <Link to={"menu"}>
            <Button className="my-button fw-bold" variant="success">
              Vedi il nostro Menù
            </Button>
          </Link>
        </Col>
        <Col xs={12} md={6} className="mobile-image-spacing">
          <img src={menu} alt="menu" className=" rounded-4 img-fluid mt-4" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="mobile-image-spacing">
          <img src={photo2} alt="photo1" className="rounded-4 img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h1 className=" fs-1 fw-bold mb-4">Rilassati nel nostro accogliente bed and breakfast</h1>
          <p className=" fs-5">
            Dopo una deliziosa cena nel nostro ristorante, puoi rilassarti e riposare nel comfort delle nostre camere
            ben arredate nel bed and breakfast.
          </p>
        </Col>
      </Row>
      <div className="sfondo-rec">
        <h2 className="fs-1 fw-bold mb-4">Il nostro impegno per la qualità</h2>
        <p className="fs-4">
          Siamo dedicati a offrirti un'esperienza culinaria eccezionale e un soggiorno confortevole. Scopri di più sulle
          nostre offerte e prenota oggi stesso!
        </p>
      </div>

      <Card className="mt-5 p-4">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="fs-1 text-center fw-bold mb-4">
            Prenota ora il tuo soggiorno <span className="color6 fw-bold fs-1">.</span>
          </h1>
          <blockquote className="blockquote text-center hide-on-mobile">
            <p className="fs-4">
              “Grazie a L'Agora, ho potuto prenotare facilmente un tavolo per una cena <br /> speciale e una camera per
              il mio soggiorno. Esperienza fantastica!” - Emma Hall
            </p>
          </blockquote>
          <Form className="my-form d-inline-flex" onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-0 me-2">
              <Form.Control
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setEmailIsValid(true); // Resetta lo stato dell'emailIsValid quando l'utente modifica l'email
                }}
                isInvalid={!emailIsValid}
              />
              <Form.Control.Feedback type="invalid">Inserisci un indirizzo email valido.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="success" className="my-button" type="submit">
              Prenota
            </Button>
          </Form>
        </Card.Body>

        {/* Alert Bootstrap */}
        <Alert show={showAlert} variant="success" className="position-fixed top-0 end-0 mt-3 me-3">
          <Alert.Heading>Email inviata!</Alert.Heading>
          <p>La tua email è stata inviata con successo. Grazie per la prenotazione!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowAlert(false)} variant="outline-success">
              Chiudi
            </Button>
          </div>
        </Alert>
      </Card>
    </Container>
  );
};

export default Homepage;
