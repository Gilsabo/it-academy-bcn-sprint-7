import './App.css';
import Form from './Components/Form/Form';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from './Components/Introduction/Introduction';

function App() {
  return (
    
    <Router>
      <div className="App">
        <header>
          <h1>Website service budget</h1>
        </header>

        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/calculation" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
        

}

export default App;
