import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ArrCore from "./components/ArrCore";
import Portfolio from "./components/Portfolio/Portfolio";
import { useEffect } from "react";

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
