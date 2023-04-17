import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from './Components/Introduction/Introduction';
import Calculation from './Components/Calculation/Calculation';

function App() {
  return (
    
    <Router>
      <div className="App">
        <header>
          <h1>Website service budget</h1>
        </header>

        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/calculation" element={<Calculation />} />
        </Routes>
      </div>
    </Router>
  );
        

}

export default App;
