import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Jumbo from "./components/Jumbo";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <TopBar />
      <Jumbo />
      <Homepage />
    </div>
  );
}

export default App;
