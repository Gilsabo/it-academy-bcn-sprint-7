import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./Components/Introduction/Introduction";
import Calculation from "./Components/Calculation/Calculation";
import LandingPage from "./Components/LandingPage/LandingPage";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/introduction" element={<Introduction />} />
          <Route exact path="/calculation" element={<Calculation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
