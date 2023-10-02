import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ArrCore from "./components/ArrCore";
import Portfolio from "./components/Portfolio/Portfolio";
import { useEffect } from "react";
import Detail from "./components/Detail/Detail";
import Support from "./components/Support/Support";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArrCore />} />
          <Route path="/ourworks" element={<Portfolio />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ourworks/:slug" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
