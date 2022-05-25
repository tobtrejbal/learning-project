import './App.css';
import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

import {
  Outlet,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/planets">
            Planet API
          </Nav.Link>
        </Nav>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;