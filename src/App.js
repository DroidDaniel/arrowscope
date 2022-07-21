import "./App.css";
import Articles from "./components/Articles";
import Addarticles from "./components/Addarticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/login" element={<Addarticles />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
