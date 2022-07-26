import "./App.css";
import Articles from "./components/Articles";
import Addarticles from "./components/Addarticles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/upload" element={<Addarticles />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
