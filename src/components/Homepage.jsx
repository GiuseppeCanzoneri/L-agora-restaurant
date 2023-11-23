import { Container, Row, Col } from "react-bootstrap";
import photo1 from "../assets/photo-1.jpeg";
import photo2 from "../assets/photo-2.jpeg";

const Homepage = () => {
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
        <Col xs={12}>
          <img src={photo2} alt="photo2" className="img-fluid mt-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
