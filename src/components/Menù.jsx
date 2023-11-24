import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MenuCategory from "./MenuCategory";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuData = {
    antipasti: [
      { name: "Bruschetta", price: "$8.99", description: "Pane tostato con pomodoro fresco, aglio e basilico." },
      {
        name: "Caprese",
        price: "$10.99",
        description: "Mozzarella fresca, pomodoro e basilico con condimento balsamico.",
      },
      {
        name: "Calamari Fritti",
        price: "$12.99",
        description: "Calamari freschi fritti con salsa di pomodoro piccante.",
      },
      { name: "Prosciutto e Melone", price: "$9.99", description: "Prosciutto crudo con fette di melone." },
      {
        name: "Carpaccio di Manzo",
        price: "$14.99",
        description: "Fette sottili di manzo marinato con rucola e grana.",
      },
      { name: "Insalata di Mare", price: "$16.99", description: "Frutti di mare misti con limone e olio d'oliva." },
      { name: "Polpettine al Sugo", price: "$11.99", description: "Polpettine fatte in casa in salsa di pomodoro." },
      { name: "Zuppa di Cozze", price: "$13.99", description: "Zuppa di cozze fresche con aglio e prezzemolo." },
      {
        name: "Melanzane Parmigiana",
        price: "$10.99",
        description: "Melanzane grigliate con salsa di pomodoro e formaggio.",
      },
      {
        name: "Frittura Mista",
        price: "$15.99",
        description: "Selezione di frittura con gamberi, calamari e verdure.",
      },
      // Altri antipasti...
    ],
    primiPiatti: [
      { name: "Linguine alle Vongole", price: "$15.99", description: "Linguine con vongole, aglio e peperoncino." },
      { name: "Risotto ai Funghi", price: "$14.99", description: "Risotto cremoso con funghi porcini." },
      { name: "Gnocchi al Pesto", price: "$12.99", description: "Gnocchi di patate con pesto alla genovese." },
      { name: "Lasagne Bolognese", price: "$16.99", description: "Strati di pasta con ragù di carne e besciamella." },
      {
        name: "Tortellini alla Panna",
        price: "$13.99",
        description: "Tortellini ripieni di carne con salsa alla panna.",
      },
      { name: "Spaghetti Aglio e Olio", price: "$11.99", description: "Spaghetti con aglio, olio e peperoncino." },
      { name: "Pappardelle al Cinghiale", price: "$18.99", description: "Pappardelle con ragù di cinghiale." },
      { name: "Ravioli al Burro e Salvia", price: "$14.99", description: "Ravioli di ricotta con burro e salvia." },
      {
        name: "Tagliatelle al Nero di Seppia",
        price: "$17.99",
        description: "Tagliatelle con salsa di nero di seppia.",
      },
      { name: "Minestrone della Nonna", price: "$9.99", description: "Zuppa di verdure con legumi e pasta." },
      // Altri primi piatti...
    ],
    secondiPiatti: [
      {
        name: "Ossobuco alla Milanese",
        price: "$22.99",
        description: "Stinco di vitello cotto lentamente con zafferano.",
      },
      { name: "Filetto al Pepe Verde", price: "$25.99", description: "Filetto di manzo con salsa al pepe verde." },
      { name: "Cotoletta alla Milanese", price: "$18.99", description: "Cotoletta di vitello impanata e fritta." },
      { name: "Brasato di Manzo", price: "$20.99", description: "Manzo brasato con vino rosso e radicchio." },
      { name: "Grigliata Mista di Pesce", price: "$28.99", description: "Selezione di pesce alla griglia." },
      { name: "Saltimbocca alla Romana", price: "$23.99", description: "Fettine di vitello con prosciutto e salvia." },
      { name: "Pollo alla Cacciatora", price: "$16.99", description: "Pollo cucinato con pomodoro, olive e capperi." },
      { name: "Baccalà alla Vicentina", price: "$19.99", description: "Baccalà con polenta e cipolla." },
      { name: "Sogliola al Limone", price: "$21.99", description: "Sogliola cotta al limone e prezzemolo." },
      { name: "Costolette d'Agnello", price: "$26.99", description: "Costolette d'agnello alla griglia." },
      // Altri secondi piatti...
    ],
    dessert: [
      {
        name: "Tiramisù",
        price: "$7.99",
        description: "Dolce al caffè con strati di biscotti Savoiardi e crema al mascarpone.",
      },
      { name: "Panna Cotta", price: "$6.99", description: "Panna cotta con salsa ai frutti di bosco." },
      { name: "Cannoli Siciliani", price: "$8.99", description: "Cannoli ripieni di ricotta e cioccolato." },
      { name: "Torta al Cioccolato", price: "$9.99", description: "Torta al cioccolato fondente con glassa." },
      {
        name: "Semifreddo alle Nocciole",
        price: "$7.99",
        description: "Semifreddo alle nocciole con salsa al caramello.",
      },
      { name: "Macedonia di Frutta", price: "$5.99", description: "Macedonia fresca di frutta di stagione." },
      { name: "Gelato Artigianale", price: "$4.99", description: "Selezione di gelato fatto in casa." },
      { name: "Torta di Mele", price: "$8.99", description: "Torta di mele con cannella e vaniglia." },
      { name: "Zabaione con Frutti Rossi", price: "$6.99", description: "Zabaione con frutti di bosco." },
      { name: "Profiteroles", price: "$7.99", description: "Bignè ripieni di crema al cioccolato e glassati." },
      // Altri dessert...
    ],
  };

  return (
    <Container className="menu mt-5">
      <h1 className="text-center mb-5">Il Nostro Menu</h1>
      <hr />
      <Row>
        <Col md={6}>
          <MenuCategory category="Antipasti" items={menuData.antipasti} />
        </Col>
        <Col md={6}>
          <MenuCategory category="Primi Piatti" items={menuData.primiPiatti} />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <MenuCategory category="Secondi Piatti" items={menuData.secondiPiatti} />
        </Col>
        <Col md={6}>
          <MenuCategory category="Dessert" items={menuData.dessert} />
        </Col>
      </Row>
      <Link to={"/"}>
        <Button className="my-button fw-bold" variant="success">
          Torna alla Homepage
        </Button>
      </Link>
    </Container>
  );
};

export default Menu;
