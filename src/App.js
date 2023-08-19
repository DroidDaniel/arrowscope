import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArrCore from "./components/ArrCore";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArrCore />} />
          <Route path="/ourworks" element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
