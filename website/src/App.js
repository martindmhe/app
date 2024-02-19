import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Help from "./components/pages/Help";
import Generate from "./components/pages/Generate";
import Upload from  "./components/pages/Upload";
import Sidebar from "./components/Sidebar";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default withAuthenticator(function App() {
  return (
    <>
      <Router>

          <Sidebar />
          <Authenticator>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/help" exact element={<Help />}></Route>
              <Route path="/register" exact element={<Register />}></Route>
              <Route path="/login" exact element={<Login />}></Route>

              <Route path="/generate" exact element={<Generate />}></Route>
              <Route path="/upload" exact element={<Upload />}></Route>
            </Routes>
          </Authenticator>
          
        </Router>
    </>
  );
})
