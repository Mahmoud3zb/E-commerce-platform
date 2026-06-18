import {  Container, Nav, Navbar } from "react-bootstrap";

// import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column vh-full">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          </Container>
          <Nav>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#signin" className="nav-link">
              Signin
            </a>
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container className="mt-3">
          {/* <Home /> */}
          <Outlet />
        </Container>
      </main>

      <footer>
        <div className="text-center">all right reserved @2024</div>
      </footer>
    </div>
  );
}

export default App;
