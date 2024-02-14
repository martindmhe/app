import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Help from "./components/pages/Help";
import Generate from "./components/pages/Generate";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/help" exact element={<Help />}></Route>
          <Route path="/generate" exact element={<Generate />}></Route>
        </Routes>
      </Router>
    </>
  );
}
