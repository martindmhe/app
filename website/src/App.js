import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Help from "./components/pages/Help";
import Generate from "./components/pages/Generate";
import Upload from  "./components/pages/Upload";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/help" exact element={<Help />}></Route>
          <Route path="/generate" exact element={<Generate />}></Route>
          <Route path="/upload" exact element={<Upload />}></Route>
        </Routes>
      </Router>
    </>
  );
}
