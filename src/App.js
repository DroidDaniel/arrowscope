import "./App.css";
import UploadArticle from "./components/Admin/UploadArticle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import View from "./components/Admin/View";
import ArrCore from "./components/ArrCore";
import Portfolio from "./Portfolio";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourworks" element={<Portfolio />} />
          <Route path="/upload" element={<UploadArticle />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
