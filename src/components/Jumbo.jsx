import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import recensore from "../assets/female.png";

const Jumbo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const StarRating = ({ count, color, text }) => {
    const stars = Array.from({ length: count }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} style={{ color }} />
    ));

    return (
      <div
        className={`d-flex align-items-center mb-2 ${isHovered ? "border-receiver" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="me-2 ms-1">{text}</span>
        {stars}
        <hr className="my-0 mx-2" style={{ height: "20px", border: "1px solid #000" }} />
        <p className="mt-2">Cibo delizioso</p>
        <hr className="my-0 mx-2" style={{ height: "20px", border: "1px solid #000" }} />
        <p className="mt-2">Camere confortevoli</p>
      </div>
    );
  };

  return (
    <Container fluid className="margin">
      <h1 className="text-dark fw-bold jumbo mt-5 ">
        Prenota un tavolo e <br /> una camera nel <br /> nostro ristorante e <br /> bed and breakfast
      </h1>
      <p className="fs-4 color4">
        L'Agora ti offre un'esperienza culinaria unica e un soggiorno <br /> confortevole, tutto in un unico posto.
      </p>

      <Form className="my-form mt-3">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Control className="my-input border-3 line-color" type="email" placeholder="Enter email" />
          </Form.Group>

          <Col>
            <Button variant="success" className="my-button fw-bold" type="submit">
              Prenota
            </Button>
          </Col>
        </Row>
      </Form>

      <StarRating count={5} color="#edcf07" text="Valutazione:" />

      <div className="d-flex mt-3 align-items-start">
        <div className="rounded-circle overflow-hidden me-3" style={{ width: "50px", height: "50px" }}>
          <img src={recensore} alt="Immagine recensore" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <h3 className="fs-5 fw-bold">
            Il cibo è delizioso e il bed and breakfast è incantevole. Non vedo l'ora <br />
            di tornare!
          </h3>
          <p className="color4">Emma King</p>
        </div>
      </div>
    </Container>
  );
};

export default Jumbo;
