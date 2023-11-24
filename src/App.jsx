import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Jumbo from "./components/Jumbo";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menù";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Jumbo />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
